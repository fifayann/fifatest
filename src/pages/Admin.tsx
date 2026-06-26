import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, RefreshCw, Mail, Phone, CheckCircle, Circle, Loader2, Lock, Ticket as TicketIcon, Trash2, ExternalLink } from 'lucide-react';
import { supabase } from '../lib/supabase';
import GenerateTicketModal from '../components/GenerateTicketModal';
import { TICKET_BASE_URL } from '../lib/ticketUtils';

const ADMIN_PASSWORD = "fifa2026";

export default function Admin() {
  const [authed, setAuthed] = useState(false);
  const [pwInput, setPwInput] = useState('');
  const [requests, setRequests] = useState([]);
  const [codes, setCodes] = useState([]);
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(false);
  const [tab, setTab] = useState('requests');
  const [genFor, setGenFor] = useState(null); // request en cours de génération

  const loadData = async () => {
    setLoading(true);
    const { data: reqData } = await supabase.from('ticket_requests').select('*').order('created_at', { ascending: false });
    const { data: codeData } = await supabase.from('ticket_codes').select('*').order('code', { ascending: true });
    const { data: tixData } = await supabase.from('tickets').select('*').order('created_at', { ascending: false });
    setRequests(reqData || []);
    setCodes(codeData || []);
    setTickets(tixData || []);
    setLoading(false);
  };

  useEffect(() => { if (authed) loadData(); }, [authed]);

  const deleteTicket = async (id) => {
    if (!confirm('Delete this ticket?')) return;
    await supabase.from('tickets').delete().eq('id', id);
    loadData();
  };

  // ===== LOGIN =====
  if (!authed) {
    return (
      <div className="bg-fifa-light min-h-screen flex items-center justify-center px-4">
        <div className="bg-white rounded-2xl border border-gray-200 p-8 max-w-sm w-full shadow-lg">
          <div className="w-16 h-16 bg-fifa-black rounded-full flex items-center justify-center mx-auto mb-5">
            <Lock size={28} className="text-white" />
          </div>
          <h1 className="text-2xl font-black text-center mb-2">Admin Access</h1>
          <p className="text-gray-500 text-sm text-center mb-6">Enter the admin password</p>
          <input type="password" placeholder="Password" value={pwInput}
            onChange={(e) => setPwInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && pwInput === ADMIN_PASSWORD && setAuthed(true)}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 mb-3 focus:border-fifa-bright focus:outline-none" />
          <button onClick={() => pwInput === ADMIN_PASSWORD ? setAuthed(true) : alert('Wrong password')}
            className="w-full bg-fifa-black text-white font-bold py-3 rounded-full hover:bg-gray-800 transition-colors">
            Login
          </button>
          <Link to="/" className="block text-center text-gray-400 text-sm mt-4 hover:text-fifa-black">Back to home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-fifa-light min-h-screen">
      <div className="max-w-[1200px] mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <Link to="/" className="inline-flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-fifa-blue mb-2">
              <ChevronLeft size={18} /> Back to home
            </Link>
            <h1 className="text-3xl font-black">Admin Dashboard</h1>
          </div>
          <button onClick={loadData} className="flex items-center gap-2 bg-white border border-gray-300 px-4 py-2 rounded-full font-semibold text-sm hover:bg-gray-50">
            <RefreshCw size={16} className={loading ? 'animate-spin' : ''} /> Refresh
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-white rounded-xl border border-gray-200 p-5">
            <div className="text-3xl font-black text-fifa-blue">{requests.length}</div>
            <div className="text-sm text-gray-500">Requests</div>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 p-5">
            <div className="text-3xl font-black text-purple-500">{tickets.length}</div>
            <div className="text-sm text-gray-500">Tickets Generated</div>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 p-5">
            <div className="text-3xl font-black text-green-500">{codes.filter(c => c.used).length}</div>
            <div className="text-sm text-gray-500">Codes Used</div>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 p-5">
            <div className="text-3xl font-black text-gray-400">{codes.filter(c => !c.used).length}</div>
            <div className="text-sm text-gray-500">Codes Left</div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-4 flex-wrap">
          {[['requests', 'Requests'], ['tickets', 'Generated Tickets'], ['codes', 'Codes']].map(([k, label]) => (
            <button key={k} onClick={() => setTab(k)}
              className={`px-5 py-2 rounded-full font-semibold text-sm ${tab === k ? 'bg-fifa-black text-white' : 'bg-white border border-gray-300'}`}>
              {label}
            </button>
          ))}
        </div>

        {loading ? (
          <div className="flex items-center justify-center py-20"><Loader2 size={32} className="animate-spin text-gray-400" /></div>
        ) : tab === 'requests' ? (
          /* ===== REQUESTS ===== */
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            {requests.length === 0 ? (
              <p className="text-center text-gray-400 py-12">No requests yet</p>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-fifa-light text-left">
                    <tr>
                      <th className="px-4 py-3 font-bold">Name</th>
                      <th className="px-4 py-3 font-bold">Contact</th>
                      <th className="px-4 py-3 font-bold">Date</th>
                      <th className="px-4 py-3 font-bold text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {requests.map((r) => (
                      <tr key={r.id} className="border-t border-gray-100 hover:bg-gray-50">
                        <td className="px-4 py-3 font-semibold">{r.full_name}</td>
                        <td className="px-4 py-3">
                          <div className="flex items-center gap-1 text-xs text-gray-600"><Mail size={12} /> {r.email}</div>
                          <div className="flex items-center gap-1 text-xs text-gray-600 mt-1"><Phone size={12} /> {r.phone}</div>
                        </td>
                        <td className="px-4 py-3 text-xs text-gray-400">{new Date(r.created_at).toLocaleDateString()}</td>
                        <td className="px-4 py-3 text-right">
                          <button onClick={() => setGenFor(r)}
                            className="inline-flex items-center gap-1.5 bg-fifa-bright text-white text-xs font-bold px-3 py-2 rounded-full hover:bg-blue-700">
                            <TicketIcon size={14} /> Generate Ticket
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        ) : tab === 'tickets' ? (
          /* ===== GENERATED TICKETS ===== */
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            {tickets.length === 0 ? (
              <p className="text-center text-gray-400 py-12">No tickets generated yet</p>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-fifa-light text-left">
                    <tr>
                      <th className="px-4 py-3 font-bold">Ticket #</th>
                      <th className="px-4 py-3 font-bold">Customer</th>
                      <th className="px-4 py-3 font-bold">Match</th>
                      <th className="px-4 py-3 font-bold">Seat</th>
                      <th className="px-4 py-3 font-bold">Category</th>
                      <th className="px-4 py-3 font-bold text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tickets.map((t) => (
                      <tr key={t.id} className="border-t border-gray-100 hover:bg-gray-50">
                        <td className="px-4 py-3 font-bold text-xs">{t.ticket_number}</td>
                        <td className="px-4 py-3">{t.customer_name}</td>
                        <td className="px-4 py-3">{t.match_name}</td>
                        <td className="px-4 py-3 text-xs">Sec {t.section} · Row {t.row_number} · Seat {t.seat}</td>
                        <td className="px-4 py-3">{t.category}</td>
                        <td className="px-4 py-3 text-right">
                          <div className="flex items-center gap-2 justify-end">
                            <a href={`/ticket/${t.qr_token}`} target="_blank" rel="noreferrer"
                              className="inline-flex items-center gap-1 text-fifa-bright text-xs font-bold hover:underline">
                              <ExternalLink size={14} /> View
                            </a>
                            <button onClick={() => deleteTicket(t.id)} className="text-red-400 hover:text-red-600">
                              <Trash2 size={16} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        ) : (
          /* ===== CODES ===== */
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-3">
              {codes.map((c) => (
                <div key={c.code} className={`rounded-lg border-2 p-4 text-center ${c.used ? 'border-green-200 bg-green-50' : 'border-gray-200'}`}>
                  <div className="font-black text-2xl tracking-widest">{c.code}</div>
                  {c.used ? (
                    <div className="flex items-center justify-center gap-1 text-xs text-green-600 mt-2"><CheckCircle size={12} /> Used</div>
                  ) : (
                    <div className="flex items-center justify-center gap-1 text-xs text-gray-400 mt-2"><Circle size={12} /> Available</div>
                  )}
                  {c.used_by && <div className="text-[10px] text-gray-400 mt-1 truncate">{c.used_by}</div>}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Generate ticket modal */}
      {genFor && (
        <GenerateTicketModal
          request={genFor}
          onClose={() => setGenFor(null)}
          onGenerated={loadData}
        />
      )}
    </div>
  );
}
