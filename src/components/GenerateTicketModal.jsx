import { useState, useRef } from 'react';
import QRCode from 'qrcode';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { X, Download, FileText, Loader2, Check } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { generateTicketNumber, generateQrToken, TICKET_BASE_URL } from '../lib/ticketUtils';
import TicketDesign from './TicketDesign';

export default function GenerateTicketModal({ request, onClose, onGenerated }) {
  const ticketRef = useRef(null);

  const [form, setForm] = useState({
    match_name: '',
    match_day: '',
    match_date: '',
    kickoff_time: '',
    stadium: '',
    entrance: '',
    gate: '',
    section: '',
    row_number: '',
    seat: '',
    category: 'Premium',
  });

  const [generating, setGenerating] = useState(false);
  const [ticket, setTicket] = useState(null);   // ticket généré
  const [qrDataUrl, setQrDataUrl] = useState('');

  const set = (k, v) => setForm({ ...form, [k]: v });
  const canGenerate = form.match_name && form.match_date && form.kickoff_time && form.stadium;

  const handleGenerate = async () => {
    if (!canGenerate) return;
    setGenerating(true);

    const ticketNumber = generateTicketNumber();
    const qrToken = generateQrToken();
    const verifyUrl = `${TICKET_BASE_URL}/ticket/${qrToken}`;

    // 1. QR code
    const qr = await QRCode.toDataURL(verifyUrl, { width: 300, margin: 1 });
    setQrDataUrl(qr);

    // 2. Insert en DB
    const newTicket = {
      ticket_number: ticketNumber,
      qr_token: qrToken,
      request_id: request?.id || null,
      customer_name: request?.full_name || 'Guest',
      email: request?.email || '',
      phone: request?.phone || '',
      ...form,
      status: 'VALID',
    };

    const { data, error } = await supabase.from('tickets').insert([newTicket]).select().single();

    setGenerating(false);
    if (error) {
      alert('Error generating ticket: ' + error.message);
      console.error(error);
      return;
    }
    setTicket(data);
    if (onGenerated) onGenerated();
  };

  // ===== Download PNG =====
  const downloadPNG = async () => {
    if (!ticketRef.current) return;
    const canvas = await html2canvas(ticketRef.current, { scale: 3, backgroundColor: null });
    const link = document.createElement('a');
    link.download = `${ticket.ticket_number}.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
  };

  // ===== Download PDF =====
  const downloadPDF = async () => {
    if (!ticketRef.current) return;
    const canvas = await html2canvas(ticketRef.current, { scale: 3, backgroundColor: '#ffffff' });
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF({ orientation: 'portrait', unit: 'px', format: [canvas.width, canvas.height] });
    pdf.addImage(imgData, 'PNG', 0, 0, canvas.width, canvas.height);
    pdf.save(`${ticket.ticket_number}.pdf`);
  };

  const fields = [
    { key: 'match_name', label: 'Match Name', placeholder: 'Scotland vs Morocco', col: 2 },
    { key: 'match_day', label: 'Match Day', placeholder: 'Match 30', col: 1 },
    { key: 'category', label: 'Category', placeholder: 'Premium', col: 1, type: 'select' },
    { key: 'match_date', label: 'Match Date', placeholder: '19 June 2026', col: 1 },
    { key: 'kickoff_time', label: 'Kickoff Time', placeholder: '18:00', col: 1 },
    { key: 'stadium', label: 'Stadium', placeholder: 'Boston Stadium', col: 2 },
    { key: 'entrance', label: 'Entrance', placeholder: '1/2/3', col: 1 },
    { key: 'gate', label: 'Gate', placeholder: 'A', col: 1 },
    { key: 'section', label: 'Section', placeholder: '215', col: 1 },
    { key: 'row_number', label: 'Row', placeholder: '17', col: 1 },
    { key: 'seat', label: 'Seat', placeholder: '19', col: 1 },
  ];

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-fifa-light rounded-2xl max-w-4xl w-full my-8 max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center z-10">
          <h2 className="text-xl font-black">{ticket ? 'Ticket Generated ✅' : 'Generate Ticket'}</h2>
          <button onClick={onClose} className="w-9 h-9 rounded-full hover:bg-gray-100 flex items-center justify-center">
            <X size={20} />
          </button>
        </div>

        <div className="p-6">
          {!ticket ? (
            /* ===== FORM ===== */
            <>
              {/* Customer info (read-only) */}
              <div className="bg-white rounded-xl border border-gray-200 p-4 mb-5">
                <h3 className="text-sm font-bold mb-2 text-gray-500 uppercase">Customer (from request)</h3>
                <div className="grid grid-cols-3 gap-3 text-sm">
                  <div><span className="text-gray-400 text-xs block">Name</span>{request?.full_name}</div>
                  <div><span className="text-gray-400 text-xs block">Email</span>{request?.email}</div>
                  <div><span className="text-gray-400 text-xs block">Phone</span>{request?.phone}</div>
                </div>
              </div>

              {/* Match + seating fields */}
              <div className="bg-white rounded-xl border border-gray-200 p-4 mb-5">
                <h3 className="text-sm font-bold mb-3 text-gray-500 uppercase">Ticket Details</h3>
                <div className="grid grid-cols-2 gap-3">
                  {fields.map((f) => (
                    <div key={f.key} className={f.col === 2 ? 'col-span-2' : ''}>
                      <label className="text-xs font-semibold text-gray-600 block mb-1">{f.label}</label>
                      {f.type === 'select' ? (
                        <select value={form[f.key]} onChange={(e) => set(f.key, e.target.value)}
                          className="w-full px-3 py-2 rounded-lg border border-gray-300 text-sm focus:border-fifa-bright focus:outline-none">
                          {['Premium', 'VIP', 'Economy', 'Supporters', 'Hospitality', 'Category 1', 'Category 2', 'Category 3', 'Category 4'].map(o => <option key={o}>{o}</option>)}
                        </select>
                      ) : (
                        <input type="text" placeholder={f.placeholder} value={form[f.key]}
                          onChange={(e) => set(f.key, e.target.value)}
                          className="w-full px-3 py-2 rounded-lg border border-gray-300 text-sm focus:border-fifa-bright focus:outline-none" />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <button onClick={handleGenerate} disabled={!canGenerate || generating}
                className={`w-full font-bold py-4 rounded-full flex items-center justify-center gap-2 transition-colors ${
                  canGenerate && !generating ? 'bg-fifa-bright hover:bg-blue-700 text-white' : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                }`}>
                {generating ? <><Loader2 size={18} className="animate-spin" /> Generating...</> : <><Check size={18} /> Generate Ticket</>}
              </button>
            </>
          ) : (
            /* ===== TICKET PREVIEW + DOWNLOAD ===== */
            <div className="flex flex-col items-center">
              <TicketDesign ref={ticketRef} ticket={ticket} qrDataUrl={qrDataUrl} />
              <div className="flex flex-wrap gap-3 mt-6 justify-center">
                <button onClick={downloadPNG} className="flex items-center gap-2 bg-fifa-black text-white font-bold px-6 py-3 rounded-full hover:bg-gray-800">
                  <Download size={18} /> Download PNG
                </button>
                <button onClick={downloadPDF} className="flex items-center gap-2 bg-fifa-bright text-white font-bold px-6 py-3 rounded-full hover:bg-blue-700">
                  <FileText size={18} /> Download PDF
                </button>
              </div>
              <p className="text-xs text-gray-400 mt-4 text-center max-w-sm">
                Ticket #{ticket.ticket_number} created. Download it and send to {ticket.customer_name} via WhatsApp or email.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
