import { motion } from 'framer-motion';
import { CalendarDays, Star } from 'lucide-react';

const Calendar = () => {
  // Generate calendar days
  const days = [];
  const birthDate = 30;
  const totalDays = 31; // May has 31 days

  for (let i = 1; i <= totalDays; i++) {
    days.push(i);
  }

  return (
    <section className="my-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-white/80 backdrop-blur-md rounded-xl p-6 shadow-lg"
      >
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-matcha-dark flex items-center">
            <CalendarDays size={20} className="mr-2" />
            May 2025
          </h2>
        </div>

        <div className="grid grid-cols-7 gap-2 text-center mb-2">
          {['M', 'S', 'S', 'R', 'K', 'J', 'S'].map((day, index) => (
            <div key={`day-${index}`} className="font-semibold text-matcha-dark">
              {day}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-2 text-center">
          {/* Empty cells for days before the 1st of the month (adjust based on what day May 1st falls on) */}
          {[...Array(3)].map((_, index) => (
            <div key={`empty-${index}`} className="h-9"></div>
          ))}

          {days.map((day) => {
            const isBirthday = day === birthDate;

            return (
              <motion.div
                key={`day-${day}`}
                className={`h-9 flex items-center justify-center rounded-full ${
                  isBirthday
                    ? 'bg-pastel-pink text-white font-bold relative'
                    : day % 2 === 0
                      ? 'bg-pastel-cream'
                      : 'bg-matcha-light'
                }`}
                whileHover={{ scale: 1.1 }}
                animate={isBirthday ? {
                  scale: [1, 1.1, 1],
                } : {}}
                transition={isBirthday ? {
                  repeat: Infinity,
                  duration: 2
                } : {}}
              >
                {day}
                {isBirthday && (
                  <motion.div
                    className="absolute -top-2 -right-2"
                    animate={{
                      rotate: [0, 15, 0, -15, 0],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 2
                    }}
                  >
                    <Star size={16} className="fill-yellow-400 text-yellow-400" />
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Special birthday marker */}
        <div className="mt-4 text-center">
          <motion.div
            className="inline-block bg-pastel-pink px-4 py-2 rounded-full text-white font-bold"
            animate={{
              y: [0, -5, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 2
            }}
          >
            🎂 30 Mei - Hari Uniuniuniunii! 🎂
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Calendar;