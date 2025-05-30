import { useEffect, useState } from 'react';
import Affirmations from './components/Affirmations';
import BirthdayMessage from './components/BirthdayMessage';
import Calendar from './components/Calendar';
import CatAnimation from './components/CatAnimation';
import ConfettiEffect from './components/ConfettiEffect';
import FloatingElements from './components/FloatingElements';
import Gallery from './components/Gallery';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import MusicPlayer from './components/MusicPlayer';

function App() {
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    // Show confetti after a slight delay
    const timer = setTimeout(() => {
      setShowConfetti(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="font-cute relative overflow-hidden bg-gradient-to-b from-matcha-light to-pastel-cream min-h-screen">
      {showConfetti && <ConfettiEffect />}
      <MusicPlayer />
      <FloatingElements />

      <div className="container mx-auto px-4 py-8">
        <Header />
        <HeroSection />

        <main className="relative z-10">
          <BirthdayMessage />
          <CatAnimation />
          <Calendar />
          <Affirmations />
          <Gallery />
        </main>

        <footer className="text-center text-matcha-dark mt-10 pb-8">
          <p>Made with ❤️ just for you</p>
        </footer>
      </div>
    </div>
  );
}

export default App;