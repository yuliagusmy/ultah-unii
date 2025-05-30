import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const HeroSection = () => {
  const [typedText, setTypedText] = useState('');
  const words = Array(50).fill('uni'); // jumlah 'uni' bisa diubah sesuai kebutuhan
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setTypedText(words.slice(0, index + 1).join(' '));
      index++;
      if (index >= words.length) index = 0; // ulangi animasi
    }, 300); // kecepatan pengetikan per kata

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="h-screen flex flex-col items-center justify-start pt-20">
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-6xl text-white font-bold max-w-xs sm:max-w-lg text-center break-words"
      >
        {typedText}
      </motion.p>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-8 text-center"
        >
        </motion.div>
      )}
    </section>
  );
};

export default HeroSection;