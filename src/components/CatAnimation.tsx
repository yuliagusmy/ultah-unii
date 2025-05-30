import React, { useState } from 'react';
import { motion } from 'framer-motion';

const CatAnimation = () => {
  const [isJumping, setIsJumping] = useState(false);
  const [isMeowing, setIsMeowing] = useState(false);

  const handleCatClick = () => {
    setIsJumping(true);
    setIsMeowing(true);
    
    setTimeout(() => {
      setIsJumping(false);
      setIsMeowing(false);
    }, 1000);
  };

  return (
    <section className="my-10 flex justify-center">
      <div className="relative">
        <motion.div
          className="relative cursor-pointer"
          onClick={handleCatClick}
          animate={isJumping ? { y: [0, -30, 0] } : {}}
          transition={{ duration: 0.5 }}
        >
          {/* Cat Body */}
          <div className="relative w-40 h-36 bg-matcha rounded-3xl">
            {/* Cat Ears */}
            <div className="absolute -top-8 left-2 w-12 h-16 bg-matcha rounded-tl-full rounded-tr-full"></div>
            <div className="absolute -top-8 right-2 w-12 h-16 bg-matcha rounded-tl-full rounded-tr-full"></div>
            
            {/* Inner Ears */}
            <div className="absolute -top-6 left-4 w-8 h-10 bg-pastel-pink rounded-tl-full rounded-tr-full"></div>
            <div className="absolute -top-6 right-4 w-8 h-10 bg-pastel-pink rounded-tl-full rounded-tr-full"></div>
            
            {/* Cat Face */}
            <div className="absolute top-2 left-0 right-0 mx-auto w-32 h-28 bg-white rounded-full"></div>
            
            {/* Cat Eyes */}
            <motion.div 
              className="absolute top-10 left-10 w-6 h-6 bg-black rounded-full"
              animate={{ scaleY: isJumping ? 0.2 : [1, 0.2, 1] }}
              transition={{ duration: 0.5, repeat: isJumping ? 0 : 3, repeatDelay: 2 }}
            >
              <div className="absolute top-1 left-1 w-2 h-2 bg-white rounded-full"></div>
            </motion.div>
            
            <motion.div 
              className="absolute top-10 right-10 w-6 h-6 bg-black rounded-full"
              animate={{ scaleY: isJumping ? 0.2 : [1, 0.2, 1] }}
              transition={{ duration: 0.5, repeat: isJumping ? 0 : 3, repeatDelay: 2 }}
            >
              <div className="absolute top-1 left-1 w-2 h-2 bg-white rounded-full"></div>
            </motion.div>
            
            {/* Cat Nose */}
            <div className="absolute top-16 left-0 right-0 mx-auto w-4 h-3 bg-pink-300 rounded-full"></div>
            
            {/* Cat Mouth */}
            <motion.div 
              className="absolute top-20 left-0 right-0 mx-auto w-8 h-4 flex justify-center items-center"
              animate={{ scaleY: isMeowing ? [1, 1.5, 1] : 1 }}
              transition={{ duration: 0.3, repeat: isMeowing ? 2 : 0 }}
            >
              <div className="w-0.5 h-4 bg-gray-400"></div>
              <div className="absolute bottom-0 left-0 w-4 h-2 border-b-2 border-gray-400 rounded-bl-full"></div>
              <div className="absolute bottom-0 right-0 w-4 h-2 border-b-2 border-gray-400 rounded-br-full"></div>
            </motion.div>
            
            {/* Cat Whiskers */}
            <div className="absolute top-16 left-2 w-8 h-0.5 bg-gray-300"></div>
            <div className="absolute top-18 left-1 w-8 h-0.5 bg-gray-300"></div>
            <div className="absolute top-20 left-2 w-8 h-0.5 bg-gray-300"></div>
            
            <div className="absolute top-16 right-2 w-8 h-0.5 bg-gray-300 transform scale-x-[-1]"></div>
            <div className="absolute top-18 right-1 w-8 h-0.5 bg-gray-300 transform scale-x-[-1]"></div>
            <div className="absolute top-20 right-2 w-8 h-0.5 bg-gray-300 transform scale-x-[-1]"></div>
          </div>
          
          {/* Cat Paws */}
          <div className="absolute -bottom-4 left-6 w-10 h-6 bg-white rounded-b-full"></div>
          <div className="absolute -bottom-4 right-6 w-10 h-6 bg-white rounded-b-full"></div>
        </motion.div>
        
        {/* Meow Speech Bubble */}
        {isMeowing && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            className="absolute -top-12 -right-6 bg-white px-3 py-1 rounded-xl shadow-md"
          >
            <p className="font-bold text-matcha-dark">Meow! 😺</p>
            <div className="absolute bottom-0 right-6 w-4 h-4 bg-white transform rotate-45 translate-y-1/2"></div>
          </motion.div>
        )}

        <p className="text-center mt-4 text-sm text-matcha-dark">(Click the cat!)</p>
      </div>
    </section>
  );
};

export default CatAnimation;