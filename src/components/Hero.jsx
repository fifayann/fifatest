import { Ticket, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background gradient + pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-fifa-navy via-fifa-dark to-black" />
      
      {/* Animated soccer field pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(228,0,43,0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(26,58,138,0.4) 0%, transparent 50%), radial-gradient(circle at 40% 80%, rgba(255,215,0,0.2) 0%, transparent 50%)'
        }} />
      </div>

      {/* Diagonal stripes */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, white 0, white 1px, transparent 0, transparent 50px)'
        }} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Tag */}
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-fifa-red/20 border border-fifa-red/50 backdrop-blur-sm">
          <span className="w-2 h-2 bg-fifa-red rounded-full animate-pulse" />
          <span className="text-sm font-semibold tracking-wider uppercase">
            {t.hero.tag}
          </span>
        </div>

        {/* Title */}
        <h1 className="font-display font-black text-6xl sm:text-7xl md:text-8xl lg:text-9xl leading-none mb-4">
          <span className="block bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
            {t.hero.title.split(' ').slice(0, -1).join(' ')}
          </span>
          <span className="block text-fifa-red mt-2">
            {t.hero.title.split(' ').slice(-1)}™
          </span>
        </h1>

        {/* Subtitle */}
        <p className="font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-widest text-gray-300 mb-6">
          {t.hero.subtitle}
        </p>

        {/* Description */}
        <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto mb-10">
          {t.hero.description}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="group flex items-center gap-3 px-8 py-4 bg-fifa-red hover:bg-red-700 rounded-md font-display font-bold uppercase tracking-wider text-lg transition-all hover:scale-105 hover:shadow-xl hover:shadow-fifa-red/50">
            <Ticket size={20} />
            {t.hero.ctaTickets}
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button className="flex items-center gap-3 px-8 py-4 border-2 border-white/30 hover:border-white rounded-md font-display font-bold uppercase tracking-wider text-lg transition-all hover:bg-white/10">
            {t.hero.ctaExplore}
            <ArrowRight size={20} />
          </button>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-3 gap-4 sm:gap-8 max-w-2xl mx-auto">
          {[
            { num: '48', label: lang => lang === 'fr' ? 'Équipes' : 'Teams' },
            { num: '104', label: lang => lang === 'fr' ? 'Matchs' : 'Matches' },
            { num: '16', label: lang => lang === 'fr' ? 'Villes' : 'Cities' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="font-display font-black text-4xl sm:text-5xl text-fifa-red">
                {stat.num}
              </div>
              <div className="text-xs sm:text-sm text-gray-400 uppercase tracking-wider mt-1">
                {stat.label('en')}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-white/60 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}