import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const BirthdayMessage = () => {
  return (
    <section className="mt-6 mb-12">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white/80 backdrop-blur-md rounded-xl p-6 shadow-lg relative overflow-hidden"
      >
        <div className="absolute -top-4 -right-4">
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
            }}
            transition={{ 
              repeat: Infinity,
              duration: 1.5
            }}
          >
            <Heart size={48} fill="#ffd1dc" stroke="#ffd1dc" />
          </motion.div>
        </div>

        <h2 className="text-xl font-bold text-matcha-dark mb-4 relative z-10">
          Selamat ulang tahun!
        </h2>
        
        <p className="text-gray-700 mb-3 relative z-10">
          Terima kasih karena kamu masih hidup hari ini, sehingga aku bisa bertemu dan mengenalmu.
        </p>
        
        <p className="text-gray-700 mb-3 relative z-10">
          Kamu seperti sinar matahari kecil di hidupku—hangat dan menenangkan.
        </p>

        <div className="mt-6 flex justify-center">
          <motion.div
            animate={{ 
              rotate: [0, 3, 0, -3, 0]
            }}
            transition={{ 
              repeat: Infinity,
              duration: 5,
              ease: "easeInOut"
            }}
            className="bg-pastel-pink rounded-lg p-3 shadow-sm"
          >
            <p className="text-lg text-center font-bold">
              Wishing you the purrfect day! 🐱✨
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default BirthdayMessage;