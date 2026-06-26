import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Search, User, Globe } from 'lucide-react';

const navLinks = [
  { label: "MATCHES", to: "/" },
  { label: "STANDINGS", to: "/" },
  { label: "TEAMS & STATS", to: "/" },
  { label: "LATEST", to: "/" },
  { label: "FANTASY & GAMING", to: "/" },
  { label: "TICKETS & HOSPITALITY", to: "/tickets" },
  { label: "HOST CITIES & STADIUMS", to: "/" },
  { label: "MORE", to: "/" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      {/* Top blue bar */}
      <div className="bg-fifa-blue text-white">
        <div className="max-w-[1400px] mx-auto px-4 flex items-center justify-between h-14">
          <div className="flex items-center gap-3">
            <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden">
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <Link to="/" className="text-2xl font-black italic tracking-tight">FIFA</Link>
          </div>
          <div className="flex items-center gap-4 text-xs font-semibold">
            <span className="hidden md:inline cursor-pointer hover:opacity-80">FIFA REWARDS</span>
            <span className="hidden md:inline cursor-pointer hover:opacity-80">FIFA+</span>
            <span className="hidden md:inline cursor-pointer hover:opacity-80">FIFA STORE</span>
            <span className="hidden md:inline cursor-pointer hover:opacity-80">FIFA COLLECT</span>
            <span className="hidden md:inline opacity-40">|</span>
            <button className="flex items-center gap-1 hover:opacity-80">
              <Globe size={16} /> English
            </button>
            <span className="opacity-40">|</span>
            <Search size={18} className="cursor-pointer hover:opacity-80" />
            <User size={18} className="cursor-pointer hover:opacity-80" />
          </div>
        </div>
      </div>

      {/* Black nav bar */}
      <div className="bg-fifa-black text-white">
        <div className="max-w-[1400px] mx-auto px-4 flex items-center h-16 gap-6">
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <div className="w-9 h-9 bg-white rounded flex items-center justify-center text-fifa-black font-black text-xs">26</div>
            <span className="font-bold text-sm hidden sm:inline">FIFA WORLD CUP 2026™</span>
          </Link>
          <nav className="hidden lg:flex items-center gap-5 text-[13px] font-semibold overflow-x-auto">
            {navLinks.map((link) => (
              <Link key={link.label} to={link.to} className="whitespace-nowrap hover:text-gray-300 transition-colors">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-fifa-black text-white border-t border-white/10">
          {navLinks.map((link) => (
            <Link key={link.label} to={link.to} onClick={() => setMobileOpen(false)} className="block px-4 py-3 text-sm font-semibold border-b border-white/5 hover:bg-white/5">
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
