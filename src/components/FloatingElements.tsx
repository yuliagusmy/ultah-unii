import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Heart, Star, Moon as Balloon } from 'lucide-react';

interface FloatingElement {
  id: number;
  component: JSX.Element;
  x: number;
  delay: number;
  duration: number;
}

const FloatingElements = () => {
  const [elements, setElements] = useState<FloatingElement[]>([]);
  
  useEffect(() => {
    // Create random elements
    const newElements: FloatingElement[] = [];
    const windowWidth = window.innerWidth;
    
    // Create hearts
    for (let i = 0; i < 5; i++) {
      const size = Math.floor(Math.random() * 16) + 16; // 16-32px
      const x = Math.floor(Math.random() * (windowWidth - 40)); // Random position
      const delay = Math.random() * 5;
      const duration = Math.random() * 5 + 10; // 10-15s
      
      newElements.push({
        id: i,
        component: <Heart size={size} className="text-pastel-pink fill-pastel-pink" />,
        x,
        delay,
        duration
      });
    }
    
    // Create stars
    for (let i = 5; i < 10; i++) {
      const size = Math.floor(Math.random() * 16) + 16; // 16-32px
      const x = Math.floor(Math.random() * (windowWidth - 40));
      const delay = Math.random() * 5;
      const duration = Math.random() * 5 + 8; // 8-13s
      
      newElements.push({
        id: i,
        component: <Star size={size} className="text-yellow-400 fill-yellow-400" />,
        x,
        delay,
        duration
      });
    }
    
    // Create balloons
    for (let i = 10; i < 15; i++) {
      const size = Math.floor(Math.random() * 24) + 24; // 24-48px
      const x = Math.floor(Math.random() * (windowWidth - 60));
      const delay = Math.random() * 5;
      const duration = Math.random() * 5 + 15; // 15-20s
      
      const colors = ['#ffd1dc', '#c1e3ff', '#fff5e1', '#fffacd', '#a6c97e'];
      const color = colors[Math.floor(Math.random() * colors.length)];
      
      newElements.push({
        id: i,
        component: <Balloon size={size} className={`text-${color}`} style={{ color }} />,
        x,
        delay,
        duration
      });
    }
    
    setElements(newElements);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {elements.map((element) => (
        <motion.div
          key={element.id}
          initial={{ y: '110vh', x: element.x }}
          animate={{ y: '-10vh' }}
          transition={{
            duration: element.duration,
            delay: element.delay,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'linear'
          }}
          className="absolute"
        >
          {element.component}
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingElements;