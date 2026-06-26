import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Play, ArrowRight, Ticket, Diamond, RefreshCw } from 'lucide-react';
import { recentScores, starPlayers, matchPosters, upcomingMatches, highlights } from '../data';

// Reusable horizontal scroll hook
function useScroll() {
  const ref = useRef(null);
  const scroll = (dir) => {
    if (ref.current) ref.current.scrollBy({ left: dir * 320, behavior: 'smooth' });
  };
  return [ref, scroll];
}

export default function Home() {
  const [scoresRef, scrollScores] = useScroll();
  const [playersRef, scrollPlayers] = useScroll();
  const [postersRef, scrollPosters] = useScroll();

  return (
    <div className="bg-fifa-light min-h-screen">

      {/* ===== SCORES CARROUSEL ===== */}
      <div className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-[1400px] mx-auto px-4 py-4 flex items-center gap-3">
          <button onClick={() => scrollScores(-1)} className="shrink-0 w-9 h-9 rounded-full bg-fifa-light border border-gray-300 flex items-center justify-center hover:bg-gray-200 transition-colors">
            <ChevronLeft size={18} />
          </button>
          <div ref={scoresRef} className="flex gap-4 overflow-x-auto scrollbar-hide flex-1 scroll-smooth">
            {recentScores.map((s, i) => (
              <div key={i} className="shrink-0 flex flex-col items-center gap-2">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-fifa-blue to-fifa-bright p-0.5">
                  <div className="w-full h-full rounded-full bg-white flex items-center justify-center text-2xl">⚽</div>
                </div>
                <span className="text-[11px] font-bold whitespace-nowrap">{s.home} {s.score} {s.away}</span>
              </div>
            ))}
          </div>
          <button onClick={() => scrollScores(1)} className="shrink-0 w-9 h-9 rounded-full bg-fifa-light border border-gray-300 flex items-center justify-center hover:bg-gray-200 transition-colors">
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      {/* ===== HERO ===== */}
      <section className="max-w-[1400px] mx-auto px-4 py-6">
        <div className="relative rounded-2xl overflow-hidden bg-fifa-black text-white min-h-[520px] flex items-end">
          <img src="/players/who-wins.jpeg" alt="World Cup 2026" className="absolute inset-0 w-full h-full object-cover opacity-70" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
          <div className="relative z-10 p-8 md:p-12 max-w-2xl">
            <span className="inline-block bg-fifa-bright text-white text-xs font-bold px-3 py-1.5 rounded-full mb-4 uppercase tracking-wide">Match Preview</span>
            <h1 className="text-4xl md:text-6xl font-black leading-tight mb-4">
              Who Can Win the 2026 World Cup?
            </h1>
            <p className="text-gray-200 mb-8 text-lg max-w-md">
              48 teams. 16 host cities. One trophy. Discover the contenders battling for football's greatest prize.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/tickets" className="bg-fifa-bright text-white font-bold px-7 py-3.5 rounded-full hover:bg-blue-700 transition-colors flex items-center gap-2">
                <Ticket size={18} /> Get Tickets
              </Link>
              <button className="bg-white/10 backdrop-blur border border-white/30 text-white font-bold px-7 py-3.5 rounded-full hover:bg-white/20 transition-colors">
                Explore Matches
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ===== STAR PLAYERS CARROUSEL ===== */}
      <section className="max-w-[1400px] mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-3xl font-black text-black">Star Players</h2>
            <p className="text-gray-500 text-sm mt-1">The legends to watch in 2026</p>
          </div>
          <div className="flex gap-2">
            <button onClick={() => scrollPlayers(-1)} className="w-10 h-10 rounded-full bg-white border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors">
              <ChevronLeft size={20} />
            </button>
            <button onClick={() => scrollPlayers(1)} className="w-10 h-10 rounded-full bg-white border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
        <div ref={playersRef} className="flex gap-5 overflow-x-auto scrollbar-hide pb-2 scroll-smooth">
          {starPlayers.map((p, i) => (
            <div key={i} className="shrink-0 w-[260px] group cursor-pointer">
              <div className="relative rounded-2xl overflow-hidden shadow-md group-hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-1">
                <img src={p.img} alt={p.name} className="w-full h-[360px] object-cover" />
              </div>
              <div className="mt-3 px-1">
                <h3 className="font-black text-lg">{p.name}</h3>
                <p className="text-sm text-gray-500">{p.team} · {p.club}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== FEATURED MATCHES POSTERS ===== */}
      <section className="max-w-[1400px] mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-black">Featured Matches</h2>
          <div className="flex gap-2">
            <button onClick={() => scrollPosters(-1)} className="w-10 h-10 rounded-full bg-white border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors">
              <ChevronLeft size={20} />
            </button>
            <button onClick={() => scrollPosters(1)} className="w-10 h-10 rounded-full bg-white border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
        <div ref={postersRef} className="flex gap-5 overflow-x-auto scrollbar-hide pb-2 scroll-smooth">
          {matchPosters.map((m, i) => (
            <div key={i} className="shrink-0 w-[340px] relative rounded-2xl overflow-hidden group cursor-pointer shadow-md hover:shadow-2xl transition-all">
              <img src={m.img} alt={m.title} className="w-full h-[460px] object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="text-fifa-bright text-xs font-bold uppercase">{m.subtitle}</span>
                <h3 className="text-white text-2xl font-black mt-1">{m.title}</h3>
                <p className="text-gray-300 text-sm mt-1">{m.date}</p>
                <Link to="/tickets" className="inline-flex items-center gap-2 mt-3 bg-white text-fifa-black text-sm font-bold px-5 py-2.5 rounded-full hover:bg-fifa-bright hover:text-white transition-colors">
                  <Ticket size={14} /> Buy Tickets
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== FOLLOW THE ACTION ===== */}
      <section className="max-w-[1400px] mx-auto px-4 py-8">
        <h2 className="text-3xl font-black mb-6">Follow the World Cup action</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {upcomingMatches.map((m) => (
            <div key={m.id} className="bg-white rounded-xl border border-gray-200 p-5 hover:shadow-xl transition-shadow">
              <div className="flex justify-between items-start mb-4 text-[11px] text-gray-500">
                <div>
                  <div className="font-bold text-fifa-black">FIFA World Cup 2026™</div>
                  <div>{m.stage} · {m.group}</div>
                  <div className="truncate max-w-[140px]">{m.stadium}</div>
                </div>
                <span className="text-fifa-blue font-semibold">{m.status}</span>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2 font-semibold text-sm"><span className="text-2xl">{m.homeFlag}</span>{m.homeTeam}</span>
                  <span className="font-black text-xl">{m.homeScore !== null ? m.homeScore : m.time}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2 font-semibold text-sm"><span className="text-2xl">{m.awayFlag}</span>{m.awayTeam}</span>
                  <span className="font-black text-xl">{m.awayScore !== null ? m.awayScore : ""}</span>
                </div>
              </div>
              <Link to="/tickets" className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-center gap-2 text-fifa-bright font-semibold text-sm hover:gap-3 transition-all">
                <Ticket size={14} /> Buy tickets
              </Link>
            </div>
          ))}
        </div>
      </section>

{/* ===== HIGHLIGHTS (VIDÉOS au survol) ===== */}
      <section className="max-w-[1400px] mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-black">Highlights</h2>
          <button className="flex items-center gap-2 text-sm font-semibold hover:text-fifa-blue">See all <ArrowRight size={16} /></button>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {highlights.map((h) => (
            <div
              key={h.id}
              className="relative rounded-xl overflow-hidden cursor-pointer group shadow-md hover:shadow-xl transition-all aspect-video bg-fifa-black"
              onMouseEnter={(e) => { const v = e.currentTarget.querySelector('video'); if (v) v.play(); }}
              onMouseLeave={(e) => { const v = e.currentTarget.querySelector('video'); if (v) { v.pause(); v.currentTime = 0; } }}
            >
              <video
                src={h.video}
                muted
                loop
                playsInline
                preload="metadata"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:opacity-0 transition-opacity">
                <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center">
                  <Play size={22} className="text-fifa-black ml-1" fill="currentColor" />
                </div>
              </div>
              <span className="absolute bottom-3 left-3 bg-fifa-black text-white text-xs font-semibold px-3 py-1.5 rounded pointer-events-none">
                {h.title}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ===== TICKETS SECTION ===== */}
      <section id="tickets" className="max-w-[1400px] mx-auto px-4 py-8">
        <div className="relative rounded-2xl overflow-hidden bg-fifa-black p-8 md:p-12">
          <div className="text-center text-white mb-10">
            <h2 className="text-3xl md:text-4xl font-black mb-2">Experience FIFA World Cup 2026™</h2>
            <p className="text-gray-300">11 June - 19 July 2026</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { icon: Ticket, title: "Last-Minute Sales", desc: "Secure your FIFA World Cup 2026™ tickets today, subject to availability", cta: "Buy now" },
              { icon: RefreshCw, title: "Marketplace", desc: "Residents of most countries may resell tickets; Mexican residents can exchange.", cta: "Resell/Exchange Now" },
              { icon: Diamond, title: "Hospitality", desc: "Lock in seats and level up matchday with a ticket-inclusive hospitality package.", cta: "Buy Packages Now" },
            ].map((card, i) => (
              <div key={i} className="bg-fifa-bright rounded-xl overflow-hidden">
                <div className="p-6">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-4">
                    <card.icon size={22} className="text-fifa-black" />
                  </div>
                  <h3 className="text-white text-xl font-bold">{card.title}</h3>
                </div>
                <div className="bg-white p-6">
                  <p className="text-sm text-gray-700 mb-4">{card.desc}</p>
                  <Link to="/tickets" className="inline-block bg-fifa-bright text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-blue-700 transition-colors">
                    {card.cta}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FIFA PASS BANNER ===== */}
      <section className="max-w-[1400px] mx-auto px-4 py-8">
        <div className="bg-fifa-bright rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-white">
            <h3 className="text-2xl font-bold mb-2">FIFA PASS to the United States</h3>
            <p className="text-sm text-blue-100 max-w-2xl">
              FIFA World Cup 2026™ ticket purchasers and their ticketed guests traveling to the United States can benefit from FIFA PASS in the visa application process.
            </p>
          </div>
          <button className="flex items-center gap-2 bg-transparent border-2 border-white text-white font-semibold px-6 py-3 rounded-full hover:bg-white hover:text-fifa-bright transition-colors whitespace-nowrap">
            More information <ArrowRight size={18} />
          </button>
        </div>
      </section>

    </div>
  );
}
