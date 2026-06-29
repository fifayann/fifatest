// ===== DONNÉES FIFA WORLD CUP 2026 =====

// Numéro WhatsApp pour les réservations (À CHANGER)
export const WHATSAPP_NUMBER = "237600000000";

// Scores récents (carrousel du haut) — matchs de la semaine
export const recentScores = [
  { home: "RSA", away: "CAN", score: "Sun 28.06" },
  { home: "BRA", away: "JPN", score: "Mon 29.06" },
  { home: "GER", away: "PAR", score: "Mon 29.06" },
  { home: "NED", away: "MAR", score: "Tue 30.06" },
  { home: "CIV", away: "NOR", score: "Tue 30.06" },
  { home: "FRA", away: "SWE", score: "Tue 30.06" },
  { home: "MEX", away: "ECU", score: "Wed 01.07" },
  { home: "ENG", away: "COD", score: "Wed 01.07" },
  { home: "BEL", away: "SEN", score: "Wed 01.07" },
  { home: "USA", away: "BIH", score: "Wed 01.07" },
  { home: "ESP", away: "AUT", score: "Thu 02.07" },
  { home: "POR", away: "CRO", score: "Thu 02.07" },
  { home: "SUI", away: "ALG", score: "Fri 03.07" },
  { home: "AUS", away: "EGY", score: "Fri 03.07" },
  { home: "ARG", away: "CPV", score: "Fri 03.07" },
  { home: "COL", away: "GHA", score: "Sat 04.07" },
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
  { title: "France vs Sweden", subtitle: "Group I · Tuesday 30.06", date: "30 June 2026", img: "/frvssweden.jfif" },
  { title: "South Africa vs Canada", subtitle: "Group Stage · Sunday 28.06", date: "28 June 2026", img: "/sc.jfif" },
  { title: "Who Can Win 2026?", subtitle: "The road to glory", date: "Tournament", img: "/bj.jfif" },
];

// Matchs à venir (Follow the action) — les 4 prochains
export const upcomingMatches = [
  { id: 1, stage: "First Stage", group: "Group B", city: "Vancouver", stadium: "Vancouver", time: "19:00", status: "Sun 28.06", homeTeam: "South Africa", homeFlag: "🇿🇦", awayTeam: "Canada", awayFlag: "🇨🇦", homeScore: null, awayScore: null },
  { id: 2, stage: "First Stage", group: "Group C", city: "Los Angeles", stadium: "Los Angeles", time: "17:00", status: "Mon 29.06", homeTeam: "Brazil", homeFlag: "🇧🇷", awayTeam: "Japan", awayFlag: "🇯🇵", homeScore: null, awayScore: null },
  { id: 3, stage: "First Stage", group: "Group E", city: "Dallas", stadium: "Dallas", time: "20:30", status: "Mon 29.06", homeTeam: "Germany", homeFlag: "🇩🇪", awayTeam: "Paraguay", awayFlag: "🇵🇾", homeScore: null, awayScore: null },
  { id: 4, stage: "First Stage", group: "Group I", city: "Boston", stadium: "Boston", time: "21:00", status: "Tue 30.06", homeTeam: "France", homeFlag: "🇫🇷", awayTeam: "Sweden", awayFlag: "🇸🇪", homeScore: null, awayScore: null },
];

// Tous les matchs (page tickets) — calendrier complet de la semaine
export const allMatches = [
  { id: 1, stage: "First Stage", group: "Group B", city: "Vancouver", stadium: "Vancouver", date: "28 June 2026", time: "19:00", homeTeam: "South Africa", homeFlag: "🇿🇦", awayTeam: "Canada", awayFlag: "🇨🇦" },
  { id: 2, stage: "First Stage", group: "Group C", city: "Los Angeles", stadium: "Los Angeles", date: "29 June 2026", time: "17:00", homeTeam: "Brazil", homeFlag: "🇧🇷", awayTeam: "Japan", awayFlag: "🇯🇵" },
  { id: 3, stage: "First Stage", group: "Group E", city: "Dallas", stadium: "Dallas", date: "29 June 2026", time: "20:30", homeTeam: "Germany", homeFlag: "🇩🇪", awayTeam: "Paraguay", awayFlag: "🇵🇾" },
  { id: 4, stage: "First Stage", group: "Group F", city: "New York", stadium: "New York", date: "30 June 2026", time: "01:00", homeTeam: "Netherlands", homeFlag: "🇳🇱", awayTeam: "Morocco", awayFlag: "🇲🇦" },
  { id: 5, stage: "First Stage", group: "Group E", city: "Houston", stadium: "Houston", date: "30 June 2026", time: "17:00", homeTeam: "Ivory Coast", homeFlag: "🇨🇮", awayTeam: "Norway", awayFlag: "🇳🇴" },
  { id: 6, stage: "First Stage", group: "Group I", city: "Boston", stadium: "Boston", date: "30 June 2026", time: "21:00", homeTeam: "France", homeFlag: "🇫🇷", awayTeam: "Sweden", awayFlag: "🇸🇪" },
  { id: 7, stage: "First Stage", group: "Group E", city: "Guadalajara", stadium: "Guadalajara", date: "1 July 2026", time: "01:00", homeTeam: "Mexico", homeFlag: "🇲🇽", awayTeam: "Ecuador", awayFlag: "🇪🇨" },
  { id: 8, stage: "First Stage", group: "Group L", city: "Toronto", stadium: "Toronto", date: "1 July 2026", time: "16:00", homeTeam: "England", homeFlag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", awayTeam: "DR Congo", awayFlag: "🇨🇩" },
  { id: 9, stage: "First Stage", group: "Group G", city: "Atlanta", stadium: "Atlanta", date: "1 July 2026", time: "20:00", homeTeam: "Belgium", homeFlag: "🇧🇪", awayTeam: "Senegal", awayFlag: "🇸🇳" },
  { id: 10, stage: "First Stage", group: "Group I", city: "Philadelphia", stadium: "Philadelphia", date: "1 July 2026", time: "23:59", homeTeam: "USA", homeFlag: "🇺🇸", awayTeam: "Bosnia and Herzegovina", awayFlag: "🇧🇦" },
  { id: 11, stage: "First Stage", group: "Group H", city: "Miami", stadium: "Miami", date: "2 July 2026", time: "19:00", homeTeam: "Spain", homeFlag: "🇪🇸", awayTeam: "Austria", awayFlag: "🇦🇹" },
  { id: 12, stage: "First Stage", group: "Group K", city: "Kansas City", stadium: "Kansas City", date: "2 July 2026", time: "23:00", homeTeam: "Portugal", homeFlag: "🇵🇹", awayTeam: "Croatia", awayFlag: "🇭🇷" },
  { id: 13, stage: "First Stage", group: "Group J", city: "Seattle", stadium: "Seattle", date: "3 July 2026", time: "03:00", homeTeam: "Switzerland", homeFlag: "🇨🇭", awayTeam: "Algeria", awayFlag: "🇩🇿" },
  { id: 14, stage: "First Stage", group: "Group D", city: "San Francisco", stadium: "San Francisco", date: "3 July 2026", time: "18:00", homeTeam: "Australia", homeFlag: "🇦🇺", awayTeam: "Egypt", awayFlag: "🇪🇬" },
  { id: 15, stage: "First Stage", group: "Group J", city: "Mexico City", stadium: "Mexico City", date: "3 July 2026", time: "22:00", homeTeam: "Argentina", homeFlag: "🇦🇷", awayTeam: "Cape Verde", awayFlag: "🇨🇻" },
  { id: 16, stage: "First Stage", group: "Group L", city: "Monterrey", stadium: "Monterrey", date: "4 July 2026", time: "01:30", homeTeam: "Colombia", homeFlag: "🇨🇴", awayTeam: "Ghana", awayFlag: "🇬🇭" },
];

// Catégories de tickets
export const ticketCategories = [
  { id: "cat1", name: "Category 1", desc: "Premium seats, best view", price: 450 },
  { id: "cat2", name: "Category 2", desc: "Great seats, excellent view", price: 300 },
  { id: "cat3", name: "Category 3", desc: "Good seats, solid view", price: 180 },
  { id: "cat4", name: "Category 4", desc: "Standard seats", price: 90 },
];

// Highlights (vidéos)
export const highlights = [
  { id: 1, title: "Messi Magic", video: "/videos/messi.mp4" },
  { id: 2, title: "Haaland Power", video: "/videos/haaland.mp4" },
  { id: 3, title: "Ronaldo Skills", video: "/videos/cr7-1.mp4" },
  { id: 4, title: "CR7 Highlights", video: "/videos/cr7-2.mp4" },
];