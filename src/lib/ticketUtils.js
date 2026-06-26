// URL de base pour les QR codes (À CHANGER après déploiement Vercel)
export const TICKET_BASE_URL = "https://your-fifa-site.vercel.app";

// Génère un numéro de ticket: TKT-2026-000154
export function generateTicketNumber() {
  const num = Math.floor(100000 + Math.random() * 900000);
  return `TKT-2026-${num}`;
}

// Génère un token QR unique: 3A9F9B72E1F4
export function generateQrToken() {
  const chars = 'ABCDEF0123456789';
  let token = '';
  for (let i = 0; i < 12; i++) {
    token += chars[Math.floor(Math.random() * chars.length)];
  }
  return token;
}
