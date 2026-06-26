import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Tickets from './pages/Tickets';
import Validate from './pages/Validate';
import Admin from './pages/Admin';
import TicketVerify from './pages/TicketVerify';

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/ticket/:token" element={<TicketVerify />} />
          <Route path="*" element={
            <>
              <Navbar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/tickets" element={<Tickets />} />
                <Route path="/validate" element={<Validate />} />
                <Route path="/admin" element={<Admin />} />
              </Routes>
              <Footer />
            </>
          } />
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;
