import React from 'react';
import { Cat } from 'lucide-react';

const Header = () => {
  return (
    <header className="py-4 text-center">
      <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-sm px-6 py-3 rounded-full shadow-md">
        <Cat size={28} className="text-matcha" />
        <h1 className="text-2xl font-bold text-matcha-dark">Happy Birthday!</h1>
      </div>
    </header>
  );
};

export default Header;