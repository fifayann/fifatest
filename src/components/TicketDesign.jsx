import { forwardRef } from 'react';
import QRCode from 'qrcode';

// Ticket FIFA World Cup 2026 — reproduction fidèle du design officiel
const TicketDesign = forwardRef(({ ticket, qrDataUrl }, ref) => {
  if (!ticket) return null;

  // Numéro du match (M51 -> 51) pour le cercle
  const matchNum = ticket.match_day?.replace(/\D/g, '') || '';

  return (
    <div
      ref={ref}
      style={{ width: 360, fontFamily: 'Archivo, Helvetica, Arial, sans-serif' }}
      className="bg-white rounded-[28px] overflow-hidden mx-auto shadow-2xl"
    >
      {/* ===== TOP QR BAND (avec coins verts) ===== */}
      <div className="relative bg-white px-5 pt-5 pb-4">
        {/* Coins verts décoratifs */}
        <div className="absolute top-0 left-0 w-12 h-20 bg-[#7DEBC0] rounded-br-[40px]" />
        <div className="absolute top-0 right-0 w-12 h-20 bg-[#7DEBC0] rounded-bl-[40px]" />

        {/* Info icon */}
        <div className="relative flex justify-end mb-1">
          <div className="w-5 h-5 rounded-full border border-gray-300 flex items-center justify-center text-[10px] text-gray-400 font-serif italic">i</div>
        </div>

        {/* QR Code centré */}
        <div className="relative flex justify-center py-2">
          {qrDataUrl ? (
            <img src={qrDataUrl} alt="QR" className="w-32 h-32" />
          ) : (
            <div className="w-32 h-32 bg-gray-100 flex items-center justify-center text-gray-300 text-xs">QR</div>
          )}
        </div>
      </div>

      {/* ===== MAIN CARD (blanc, arrondi par-dessus) ===== */}
      <div className="bg-white rounded-t-[28px] -mt-3 relative px-6 pt-6 pb-7 shadow-[0_-4px_20px_rgba(0,0,0,0.04)]">

        {/* Match number cercle en haut à droite */}
        {matchNum && (
          <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-[#EEF0F5] flex items-center justify-center text-base font-bold text-gray-700">
            {matchNum}
          </div>
        )}

        {/* Logo FIFA WORLD CUP 2026 (pilule noire) */}
        <div className="flex justify-center mb-6 mt-2">
          <div className="bg-black rounded-[40px] px-9 py-5 text-center">
            <div className="text-white text-[11px] font-extrabold tracking-[0.15em] leading-none mb-0.5">FIFA</div>
            <div className="text-white text-[26px] font-black leading-[0.95] tracking-tight">WORLD CUP</div>
            <div className="text-white text-[26px] font-black leading-[0.95] tracking-tight flex items-center justify-center gap-1">
              2026<span className="text-[9px] align-top">™</span>
            </div>
          </div>
        </div>

        {/* Match name */}
        <h2 className="text-center text-[26px] font-black mb-4 leading-tight text-black">
          {ticket.match_day ? `M${matchNum} ` : ''}{ticket.match_name}
        </h2>

        {/* Date + Stadium */}
        <div className="text-center text-[15px] text-gray-700 mb-1.5 flex items-center justify-center gap-2">
          <span className="text-gray-400">📅</span> {ticket.match_date}, {ticket.kickoff_time}
        </div>
        <div className="text-center text-[15px] text-gray-700 mb-6 flex items-center justify-center gap-2">
          <span className="text-gray-400">📍</span> {ticket.stadium}
        </div>

        {/* Seating grid — 4 colonnes comme l'image */}
        <div className="grid grid-cols-4 gap-2.5 mb-6">
          {[
            ['GATE', ticket.gate],
            ['SECTION', ticket.section],
            ['ROW', ticket.row_number],
            ['SEAT', ticket.seat],
          ].map(([label, value]) => (
            <div key={label} className="bg-[#F2F3F7] rounded-xl px-1 py-3 text-center">
              <div className="text-[10px] text-gray-400 font-semibold tracking-wide mb-1.5">{label}</div>
              <div className="text-[19px] font-bold text-black leading-tight break-words">{value || '—'}</div>
            </div>
          ))}
        </div>

        {/* Divider pointillé */}
        <div className="border-t border-dashed border-gray-200 mb-5" />

        {/* Ticket holder */}
        <div className="flex justify-between items-baseline mb-3">
          <span className="text-[13px] text-gray-400 font-medium">TICKET HOLDER</span>
          <span className="text-[15px] font-semibold text-black text-right">{ticket.customer_name}</span>
        </div>

        {/* Category */}
        <div className="flex justify-between items-baseline">
          <span className="text-[13px] text-gray-400 font-medium">CATEGORY</span>
          <span className="text-[15px] font-semibold text-black text-right">{ticket.category}</span>
        </div>

        {/* Ticket number (discret en bas) */}
        <div className="text-center text-[10px] text-gray-300 mt-6 tracking-wide">
          {ticket.ticket_number}
        </div>
      </div>
    </div>
  );
});

TicketDesign.displayName = 'TicketDesign';
export default TicketDesign;