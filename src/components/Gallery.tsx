import { motion } from 'framer-motion';
import { Image } from 'lucide-react';

// Cat image URLs from Pexels
const catImages = [
  "/kucing/Gambar WhatsApp 2025-05-30 pukul 17.05.17_541f7f2a.jpg",
  "/kucing/Gambar WhatsApp 2025-05-30 pukul 17.05.19_0c65ec59.jpg",
  "/kucing/Gambar WhatsApp 2025-05-30 pukul 17.05.20_6c7d8dd0.jpg",
  "/kucing/Gambar WhatsApp 2025-05-30 pukul 17.05.53_334e7fda.jpg",
  "/kucing/Gambar WhatsApp 2025-05-30 pukul 17.05.54_0554bcf4.jpg",
  "/kucing/Gambar WhatsApp 2025-05-30 pukul 17.05.54_0facef84.jpg",
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const Gallery = () => {
  return (
    <section className="my-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-white/80 backdrop-blur-md rounded-xl p-6 shadow-lg"
      >
        <h2 className="text-xl font-bold text-matcha-dark mb-6 flex items-center">
          <Image size={20} className="mr-2" />
          Galeri Brinaaa
        </h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-3"
        >
          {catImages.map((image, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ scale: 1.05, zIndex: 20 }}
              className="relative overflow-hidden rounded-lg shadow-md aspect-square"
            >
              <img
                src={image}
                alt={`Cute cat ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-6 text-center text-matcha-dark text-sm">
          <p>Brinaaa</p>
        </div>
      </motion.div>
    </section>
  );
};

export default Gallery;