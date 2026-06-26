// ===== DONNÉES FIFA WORLD CUP 2026 =====

// Numéro WhatsApp pour les réservations (À CHANGER)
export const WHATSAPP_NUMBER = "237600000000";

// Scores récents (carrousel du haut)
export const recentScores = [
  { home: "TUR", away: "USA", score: "3-2" },
  { home: "PAR", away: "AUS", score: "0-0" },
  { home: "TUN", away: "NED", score: "1-3" },
  { home: "JPN", away: "SWE", score: "1-1" },
  { home: "CUW", away: "CIV", score: "0-2" },
  { home: "ECU", away: "GER", score: "2-1" },
  { home: "RSA", away: "KOR", score: "1-0" },
  { home: "CZE", away: "MEX", score: "0-3" },
  { home: "SCO", away: "BRA", score: "0-3" },
  { home: "MAR", away: "HAI", score: "4-2" },
  { home: "SUI", away: "CAN", score: "2-1" },
  { home: "BIH", away: "QAT", score: "3-1" },
  { home: "COL", away: "COD", score: "1-0" },
  { home: "PAN", away: "CRO", score: "0-1" },
];

// Star players (cartes Panini)
export const starPlayers = [
  { name: "Lionel Messi", team: "Argentina", club: "Inter Miami CF", number: "10", img: "/players/messi.jpeg" },
  { name: "Kylian Mbappé", team: "France", club: "Real Madrid CF", number: "10", img: "/players/mbappe.jpeg" },
  { name: "Cristiano Ronaldo", team: "Portugal", club: "Al-Nassr FC", number: "7", img: "/players/ronaldo.jfif" },
  { name: "Neymar Jr", team: "Brazil", club: "Santos FC", number: "10", img: "/players/neymar.jfif" },
];

// Featured match posters
export const matchPosters = [
  { title: "France vs Norway", subtitle: "Group I · Final Group Stage", date: "26 June 2026", img: "/players/france-norway.jpeg" },
  { title: "Canada vs Switzerland", subtitle: "Group Stage · Vancouver", date: "24 June 2026", img: "/players/canada-switzerland.jpeg" },
  { title: "Who Can Win 2026?", subtitle: "The road to glory", date: "Tournament", img: "/players/who-wins.jpeg" },
];

// Matchs à venir (Follow the action)
export const upcomingMatches = [
  { id: 1, stage: "First Stage", group: "Group I", stadium: "Toronto Stadium", time: "20:00", status: "Today", homeTeam: "Senegal", homeFlag: "🇸🇳", awayTeam: "Iraq", awayFlag: "🇮🇶", homeScore: null, awayScore: null },
  { id: 2, stage: "First Stage", group: "Group I", stadium: "Boston Stadium", time: "20:00", status: "Today", homeTeam: "Norway", homeFlag: "🇳🇴", awayTeam: "France", awayFlag: "🇫🇷", homeScore: null, awayScore: null },
  { id: 3, stage: "First Stage", group: "Group D", stadium: "San Francisco Bay Area Stadium", time: "FT", status: "Today", homeTeam: "Paraguay", homeFlag: "🇵🇾", awayTeam: "Australia", awayFlag: "🇦🇺", homeScore: 0, awayScore: 0 },
  { id: 4, stage: "First Stage", group: "Group D", stadium: "Los Angeles Stadium", time: "FT", status: "Today", homeTeam: "Türkiye", homeFlag: "🇹🇷", awayTeam: "USA", awayFlag: "🇺🇸", homeScore: 3, awayScore: 2 },
];

// Tous les matchs (page tickets)
export const allMatches = [
  { id: 1, stage: "First Stage", group: "Group I", stadium: "Toronto Stadium", city: "Toronto", date: "26 June 2026", time: "20:00", homeTeam: "Senegal", homeFlag: "🇸🇳", awayTeam: "Iraq", awayFlag: "🇮🇶" },
  { id: 2, stage: "First Stage", group: "Group I", stadium: "Boston Stadium", city: "Boston", date: "26 June 2026", time: "20:00", homeTeam: "Norway", homeFlag: "🇳🇴", awayTeam: "France", awayFlag: "🇫🇷" },
  { id: 3, stage: "First Stage", group: "Group D", stadium: "San Francisco Bay Area Stadium", city: "San Francisco", date: "27 June 2026", time: "17:00", homeTeam: "Paraguay", homeFlag: "🇵🇾", awayTeam: "Australia", awayFlag: "🇦🇺" },
  { id: 4, stage: "First Stage", group: "Group D", stadium: "Los Angeles Stadium", city: "Los Angeles", date: "27 June 2026", time: "21:00", homeTeam: "Türkiye", homeFlag: "🇹🇷", awayTeam: "USA", awayFlag: "🇺🇸" },
  { id: 5, stage: "First Stage", group: "Group A", stadium: "Estadio Azteca", city: "Mexico City", date: "28 June 2026", time: "19:00", homeTeam: "Mexico", homeFlag: "🇲🇽", awayTeam: "Brazil", awayFlag: "🇧🇷" },
  { id: 6, stage: "First Stage", group: "Group C", stadium: "MetLife Stadium", city: "New York", date: "28 June 2026", time: "21:00", homeTeam: "Argentina", homeFlag: "🇦🇷", awayTeam: "Germany", awayFlag: "🇩🇪" },
  { id: 7, stage: "Round of 16", group: "Knockout", stadium: "SoFi Stadium", city: "Los Angeles", date: "5 July 2026", time: "20:00", homeTeam: "England", homeFlag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", awayTeam: "Netherlands", awayFlag: "🇳🇱" },
  { id: 8, stage: "Final", group: "Final", stadium: "MetLife Stadium", city: "New York", date: "19 July 2026", time: "15:00", homeTeam: "TBD", homeFlag: "🏆", awayTeam: "TBD", awayFlag: "🏆" },
];

// Catégories de tickets
export const ticketCategories = [
  { id: "cat1", name: "Category 1", desc: "Premium seats, best view", price: 450 },
  { id: "cat2", name: "Category 2", desc: "Great seats, excellent view", price: 300 },
  { id: "cat3", name: "Category 3", desc: "Good seats, solid view", price: 180 },
  { id: "cat4", name: "Category 4", desc: "Standard seats", price: 90 },
];

// Highlights
export const highlights = [
  { id: 1, title: "Messi Magic", video: "/videos/messi.mp4" },
  { id: 2, title: "Haaland Power", video: "/videos/haaland.mp4" },
  { id: 3, title: "Ronaldo Skills", video: "/videos/cr7-1.mp4" },
  { id: 4, title: "CR7 Highlights", video: "/videos/cr7-2.mp4" },
];
