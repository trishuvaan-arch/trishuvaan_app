import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import NeuralBackground from '../components/NeuralBackground';

// Local hero images from public/images/home
const heroImages = [
  '/images/home/hero1.jpg',
  '/images/home/hero2.jpg',
  '/images/home/hero3.jpg',
  '/images/home/hero4.jpg',
];

// Text overlay for each slide (matches About section)
const heroTexts = [
  "Building Next-Gen AI Products for Enterprises",
  "Automation, Intelligence & Real-World AI Engineering",
  "Advanced Computer Vision & Predictive AI Systems",
  "Generative AI Platforms for the Future of Innovation",
];

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen relative">
      <NeuralBackground />

      {/* HERO SECTION */}
      <section className="relative h-screen flex flex-col items-center justify-end pb-32 overflow-hidden bg-black">
        <AnimatePresence initial={false}>
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 2, ease: 'easeInOut' }}
            className="absolute inset-0"
          >
            <img
              src={heroImages[currentImageIndex]}
              alt="AI Innovation"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/70" />
          </motion.div>
        </AnimatePresence>

        {/* 🔥 Overlay Text (NEW) */}
        <motion.h2
          key={`text-${currentImageIndex}`}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-xl md:text-3xl font-bold text-white mb-6 text-center max-w-4xl drop-shadow-xl"
        >
          {heroTexts[currentImageIndex]}
        </motion.h2>

        {/* Only the QUOTE */}
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="relative z-10 text-xl md:text-2xl italic text-cyan-200 font-medium text-center max-w-3xl drop-shadow-lg"
        >
          "AI won't replace your job — but a person skilled in AI will."
        </motion.p>
      </section>

      {/* ABOUT TRISHUVAAN */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 gradient-text">
              About Trishuvaan
            </h2>

            <div className="glass-effect rounded-2xl p-8 md:p-12">

              {/* NEW PARAGRAPH (Company Description) */}
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Trishuvaan Pvt Ltd is a next-generation AI product company building advanced 
                artificial intelligence platforms, automation systems, and intelligent enterprise 
                solutions for high-growth businesses. We design and launch cutting-edge AI products 
                including smart automation tools, predictive intelligence systems, computer vision 
                applications, and next-level generative AI technologies. Our focus is purely on 
                building scalable, production-ready AI products that transform business operations 
                and accelerate digital growth. Trishuvaan EdTech operates separately as our training 
                division offering affordable live AI courses and paid internships—ensuring the core 
                company remains a true AI product innovator.
              </p>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Trishuvaan is an <strong>Advanced AI Software & Product Development Company</strong>{' '}
                building the next generation of intelligent systems and AI automation solutions.
              </p>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Our sister brand, <strong>Trishuvaan EdTech</strong>, empowers individuals through
                live, project-based courses in AI, Python, Data Science, and Analytics.
              </p>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Our mission is to make India a hub of AI innovation and skilled professionals,
                combining real-world projects, cutting-edge tools, and expert mentorship.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                Whether you're looking to transform your career through courses, build AI products,
                or automate your workflows, Trishuvaan is your partner in the AI revolution.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;

/*
-----------------------------------------
META DESCRIPTION (ADD THIS TO index.html)
-----------------------------------------
<meta name="description" content="Trishuvaan Pvt Ltd builds advanced AI products, automation platforms, and enterprise solutions. AI training is provided separately through Trishuvaan EdTech.">
-----------------------------------------
*/
