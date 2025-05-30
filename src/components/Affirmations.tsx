import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import { useState } from 'react';

const Affirmations = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenLetter = () => {
    setIsOpen(true);
  };

  const handleCloseLetter = () => {
    setIsOpen(false);
  };

  return (
    <section className="my-12">
      <div className="bg-white/80 backdrop-blur-md rounded-xl p-6 shadow-lg">
        {!isOpen ? (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            onClick={handleOpenLetter}
            className="cursor-pointer text-center"
          >
            <img src="/surat.jpg" alt="Surat" className="w-64 h-64 mx-auto mb-2 rounded-lg object-cover" />
            <p className="text-gray-700 font-bold text-4xl">To Uniii</p>
          </motion.div>
        ) : (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="p-6 bg-matcha-light/50 rounded-lg shadow-inner"
          >
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-lg font-semibold text-matcha-dark">
                Surat Untukmu
              </h3>
              <button onClick={handleCloseLetter} className="text-gray-500 hover:text-gray-700">
                <X size={20} />
              </button>
            </div>
            <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
              <p>
                Hai Uni,
              </p>
              <p>
                Selamat ulang tahun! Hari ini adalah hari spesialmu, dan aku ingin kamu tahu betapa berartinya kehadiranmu dalam hidupku.
              </p>
              <p>
                Seperti kucing kecil yang selalu membawa kehangatan, kamu hadir memberi warna dan kebahagiaan di setiap hariku. Terima kasih sudah menjadi teman, sahabat, dan sosok yang selalu bisa diandalkan.
              </p>
              <p>
                Aku bersyukur bisa mengenalmu, berbagi cerita, tawa, dan bahkan air mata. Semoga di tahun baru usiamu ini, segala impian dan harapanmu dimudahkan untuk tercapai. Jangan lupa untuk selalu bahagia dan mencintai dirimu sendiri, ya!
              </p>
              <p>
                Teruslah menjadi cahaya bagi sekitarmu, dan jangan pernah ragu untuk melangkah maju. Aku percaya, hal-hal indah akan selalu menantimu.
              </p>
              <p className="font-bold text-right mt-6">
                Dengan penuh kasih sayang,<br />
                Seseorang yang selalu mendukungmu ❤️
              </p>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Affirmations;