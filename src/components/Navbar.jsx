import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Search, User, Globe, ChevronDown } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const languages = [
  { code: 'en', label: 'English' },
  { code: 'fr', label: 'Français' },
  { code: 'de', label: 'Deutsch' },
];

export default function Navbar() {
  const { lang, setLang, t } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  const navLinks = [
    { label: t.nav.matches, to: "/" },
    { label: t.nav.standings, to: "/" },
    { label: t.nav.teams, to: "/" },
    { label: t.nav.latest, to: "/" },
    { label: t.nav.fantasy, to: "/" },
    { label: t.nav.tickets, to: "/tickets" },
    { label: t.nav.hostCities, to: "/" },
    { label: t.nav.more, to: "/" },
  ];

  const currentLang = languages.find(l => l.code === lang);

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
            <span className="hidden md:inline opacity-40">|</span>

            {/* Language selector */}
            <div className="relative">
              <button onClick={() => setLangOpen(!langOpen)} className="flex items-center gap-1 hover:opacity-80">
                <Globe size={16} /> {currentLang?.label} <ChevronDown size={14} />
              </button>
              {langOpen && (
                <div className="absolute right-0 mt-2 bg-white text-fifa-black rounded-lg shadow-lg overflow-hidden min-w-[140px] z-50">
                  {languages.map((l) => (
                    <button key={l.code}
                      onClick={() => { setLang(l.code); setLangOpen(false); }}
                      className={`block w-full text-left px-4 py-2.5 text-sm hover:bg-gray-100 ${lang === l.code ? 'font-bold bg-gray-50' : ''}`}>
                      {l.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

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
            {navLinks.map((link, i) => (
              <Link key={i} to={link.to} className="whitespace-nowrap hover:text-gray-300 transition-colors">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-fifa-black text-white border-t border-white/10">
          {navLinks.map((link, i) => (
            <Link key={i} to={link.to} onClick={() => setMobileOpen(false)} className="block px-4 py-3 text-sm font-semibold border-b border-white/5 hover:bg-white/5">
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
