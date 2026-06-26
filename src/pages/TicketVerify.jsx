import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { CheckCircle, XCircle, Loader2 } from 'lucide-react';
import { supabase } from '../lib/supabase';

export default function TicketVerify() {
  const { token } = useParams();
  const [ticket, setTicket] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      const { data } = await supabase.from('tickets').select('*').eq('qr_token', token).single();
      setTicket(data || null);
      setLoading(false);
    };
    load();
  }, [token]);

  if (loading) {
    return (
      <div className="min-h-screen bg-fifa-light flex items-center justify-center">
        <Loader2 size={36} className="animate-spin text-gray-400" />
      </div>
    );
  }

  // ===== Ticket introuvable =====
  if (!ticket) {
    return (
      <div className="min-h-screen bg-fifa-light flex items-center justify-center px-4">
        <div className="bg-white rounded-2xl border border-gray-200 p-10 max-w-sm text-center shadow-lg">
          <XCircle size={56} className="text-red-500 mx-auto mb-4" />
          <h1 className="text-2xl font-black mb-2">Invalid Ticket</h1>
          <p className="text-gray-500">This ticket does not exist or has been removed.</p>
        </div>
      </div>
    );
  }

  const rows = [
    ['Match', ticket.match_name],
    ['Match Day', ticket.match_day],
    ['Date', ticket.match_date],
    ['Time', ticket.kickoff_time],
    ['Stadium', ticket.stadium],
    ['Entrance', ticket.entrance],
    ['Gate', ticket.gate],
    ['Section', ticket.section],
    ['Row', ticket.row_number],
    ['Seat', ticket.seat],
    ['Category', ticket.category],
    ['Ticket Holder', ticket.customer_name],
    ['Ticket Number', ticket.ticket_number],
  ];

  return (
    <div className="min-h-screen bg-fifa-light py-10 px-4">
      <div className="max-w-md mx-auto">
        {/* Header FIFA */}
        <div className="bg-black text-white rounded-t-2xl p-6 text-center">
          <div className="text-xs font-bold tracking-wide">FIFA</div>
          <div className="text-2xl font-black">WORLD CUP 2026</div>
        </div>

        {/* Status badge */}
        <div className="bg-green-500 text-white py-4 flex items-center justify-center gap-2 font-black text-lg">
          <CheckCircle size={24} /> {ticket.status}
        </div>

        {/* Details */}
        <div className="bg-white rounded-b-2xl border border-gray-200 overflow-hidden shadow-lg">
          {rows.map(([label, value], i) => (
            <div key={i} className={`flex justify-between items-center px-6 py-3.5 ${i % 2 === 0 ? 'bg-white' : 'bg-fifa-light'}`}>
              <span className="text-sm text-gray-500 font-semibold uppercase text-xs">{label}</span>
              <span className="text-sm font-bold text-right">{value || '—'}</span>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-gray-400 mt-6">
          Official FIFA World Cup 2026™ ticket verification · Student project
        </p>
      </div>
    </div>
  );
}
