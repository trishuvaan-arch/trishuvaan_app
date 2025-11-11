import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Star, Users, Award, TrendingUp } from 'lucide-react';
import GlowButton from '../components/GlowButton';
import NeuralBackground from '../components/NeuralBackground';

const heroImages = [
  'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg',
  'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg',
  'https://images.pexels.com/photos/8438918/pexels-photo-8438918.jpeg',
  'https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg',
];

const successStories = [
  {
    name: 'Rahul Verma',
    role: 'AI Engineer at TCS',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg',
    quote: 'Trishuvaan transformed my career in just 8 weeks! The hands-on projects and mentorship were invaluable.',
  },
  {
    name: 'Priya Nair',
    role: 'Data Analyst at Infosys',
    image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg',
    quote: 'The AI Bootcamp was the best investment I made in 2025. Now I am working on real AI projects!',
  },
  {
    name: 'Amit Kumar',
    role: 'Python Developer',
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg',
    quote: 'Amazing mentors, hands-on learning, and practical skills. Highly recommended for anyone serious about AI.',
  },
  {
    name: 'Sneha Reddy',
    role: 'Business Analyst',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg',
    quote: 'Razorpay integration and AI project experience was superb! Got placed within 2 months of completion.',
  },
];

const stats = [
  { icon: Users, value: '5,000+', label: 'Students Trained' },
  { icon: Award, value: '98%', label: 'Success Rate' },
  { icon: TrendingUp, value: '500+', label: 'Companies Hiring' },
  { icon: Star, value: '4.9/5', label: 'Average Rating' },
];

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen relative">
      <NeuralBackground />
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
        <AnimatePresence initial={false}>
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <img
              src={heroImages[currentImageIndex]}
              alt="AI Innovation"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/70 via-violet-900/60 to-purple-900/70" />
          </motion.div>
        </AnimatePresence>

        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-6xl md:text-8xl font-bold mb-8 leading-tight"
          >
            Turn AI Into Your{' '}
            <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 drop-shadow-2xl">
              Daily Superpower
            </span>
          </motion.h1>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-2xl md:text-3xl mb-12 text-white font-light max-w-4xl mx-auto drop-shadow-lg"
          >
            Building the Future with Advanced AI Products, Automation & Learning Solutions
          </motion.p>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <GlowButton
              onClick={() => navigate('/edtech')}
              icon={ArrowRight}
              variant="primary"
              className="text-xl px-12 py-5 shadow-2xl"
            >
              Start Your AI Journey
            </GlowButton>
            <GlowButton
              onClick={() => navigate('/careers')}
              variant="outline"
              className="text-xl px-12 py-5 border-2 border-white text-white hover:bg-white hover:text-violet-600 shadow-2xl"
            >
              Join Our Team
            </GlowButton>
          </motion.div>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-16 text-xl italic text-cyan-200 font-medium drop-shadow-lg"
          >
            "AI won't replace your job — but a person skilled in AI will."
          </motion.p>
        </div>
      </section>

      <section className="py-20 neural-bg">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-violet-500 rounded-full flex items-center justify-center glow-effect">
                  <stat.icon className="text-white" size={32} />
                </div>
                <h3 className="text-3xl font-bold gradient-text mb-2">{stat.value}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Trishuvaan is an <strong>Advanced AI Software & Product Development Company</strong> building
                the next generation of intelligent systems and AI automation solutions. We design innovative
                products such as <strong>TrishuBot, AutoBrain, and VisionAI</strong> that transform businesses
                through artificial intelligence.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Our sister brand, <strong>Trishuvaan EdTech</strong>, is a separate educational division that
                empowers individuals through live, project-based courses in AI, Python, Data Science, and Analytics.
                Through EdTech, we train the next generation of AI professionals with hands-on learning and industry
                mentorship.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Our mission is to make India a hub of AI innovation and skilled professionals, combining
                real-world projects, cutting-edge tools, and expert mentorship. We don't just teach
                technology — we create technology leaders.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Whether you're looking to transform your career through EdTech courses, build AI products,
                or automate your workflows, Trishuvaan is your partner in the AI revolution.
              </p>
              <div className="mt-8 text-center">
                <GlowButton onClick={() => navigate('/edtech')} icon={ArrowRight}>
                  Explore EdTech Courses
                </GlowButton>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 neural-bg">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-12 gradient-text"
          >
            Success Stories
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {successStories.map((story, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="glass-effect rounded-xl p-6 hover:shadow-2xl transition-all duration-300"
              >
                <img
                  src={story.image}
                  alt={story.name}
                  className="w-20 h-20 rounded-full mx-auto mb-4 object-cover border-4 border-violet-500"
                />
                <h3 className="font-bold text-lg mb-1">{story.name}</h3>
                <p className="text-sm text-violet-600 mb-4">{story.role}</p>
                <p className="text-gray-600 text-sm italic">"{story.quote}"</p>
                <div className="flex justify-center mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="glass-effect rounded-2xl p-12 text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
              Reviews & Ratings
            </h2>
            <div className="flex justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={40} className="text-yellow-500 fill-yellow-500 mx-1" />
              ))}
            </div>
            <p className="text-2xl font-semibold mb-4">4.9 out of 5</p>
            <p className="text-gray-600 mb-8">Based on 2,500+ reviews from our students</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div className="bg-white/50 rounded-lg p-4">
                <p className="text-sm text-gray-600 italic">"Amazing mentors, hands-on learning!"</p>
                <p className="text-xs text-gray-500 mt-2">- Vikram S.</p>
              </div>
              <div className="bg-white/50 rounded-lg p-4">
                <p className="text-sm text-gray-600 italic">"Best AI course I have ever taken!"</p>
                <p className="text-xs text-gray-500 mt-2">- Anjali K.</p>
              </div>
              <div className="bg-white/50 rounded-lg p-4">
                <p className="text-sm text-gray-600 italic">"Razorpay integration and AI project experience was superb!"</p>
                <p className="text-xs text-gray-500 mt-2">- Rohan M.</p>
              </div>
            </div>
            <div className="mt-8">
              <GlowButton onClick={() => navigate('/reviews')} icon={ArrowRight}>
                View All Reviews & Share Yours
              </GlowButton>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
