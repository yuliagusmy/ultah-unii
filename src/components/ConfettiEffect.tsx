import { useEffect, useState } from 'react';
import ReactConfetti from 'react-confetti';

const ConfettiEffect = () => {
  const [windowDimension, setWindowDimension] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setWindowDimension({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);

    const timer = setTimeout(() => {
      setShowConfetti(false);
    }, 10000);

    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      {showConfetti && (
        <ReactConfetti
          width={windowDimension.width}
          height={windowDimension.height}
          recycle={true}
          numberOfPieces={200}
          gravity={0.05}
          colors={['#a6c97e', '#ffd1dc', '#c1e3ff', '#fff5e1', '#fffacd']}
        />
      )}
    </>
  );
};

export default ConfettiEffect;