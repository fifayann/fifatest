export default function Footer() {
  return (
    <footer className="bg-fifa-black text-white mt-12">
      <div className="max-w-[1400px] mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="font-bold mb-3 text-sm">FIFA World Cup 2026™</h4>
            <ul className="space-y-2 text-xs text-gray-400">
              <li className="hover:text-white cursor-pointer">Matches</li>
              <li className="hover:text-white cursor-pointer">Standings</li>
              <li className="hover:text-white cursor-pointer">Teams</li>
              <li className="hover:text-white cursor-pointer">Tickets</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-3 text-sm">FIFA</h4>
            <ul className="space-y-2 text-xs text-gray-400">
              <li className="hover:text-white cursor-pointer">About FIFA</li>
              <li className="hover:text-white cursor-pointer">FIFA+</li>
              <li className="hover:text-white cursor-pointer">FIFA Store</li>
              <li className="hover:text-white cursor-pointer">FIFA Collect</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-3 text-sm">Host Cities</h4>
            <ul className="space-y-2 text-xs text-gray-400">
              <li className="hover:text-white cursor-pointer">Canada</li>
              <li className="hover:text-white cursor-pointer">Mexico</li>
              <li className="hover:text-white cursor-pointer">USA</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-3 text-sm">Follow Us</h4>
            <ul className="space-y-2 text-xs text-gray-400">
              <li className="hover:text-white cursor-pointer">Instagram</li>
              <li className="hover:text-white cursor-pointer">X (Twitter)</li>
              <li className="hover:text-white cursor-pointer">YouTube</li>
              <li className="hover:text-white cursor-pointer">TikTok</li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <span className="text-2xl font-black italic text-white">FIFA</span>
          <span>© 2026 FIFA. All rights reserved. (Student project — not affiliated with FIFA)</span>
        </div>
      </div>
    </footer>
  );
}
