import { motion } from 'framer-motion';
import NeuralBackground from '../components/NeuralBackground';
import { Star, MessageSquare } from 'lucide-react';
import ReviewForm from '../components/ReviewForm';
import ReviewsList from '../components/ReviewsList';

const Reviews = () => {
  return (
    <div className="min-h-screen py-20 relative">
      <NeuralBackground />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Star className="text-yellow-400" size={40} />
            <h1 className="text-5xl md:text-6xl font-bold gradient-text">
              Reviews & Testimonials
            </h1>
            <MessageSquare className="text-blue-600" size={40} />
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from our students and team members about their experience with Trishuvaan
          </p>
        </motion.div>

        <div className="mb-20">
          <ReviewForm />
        </div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl font-bold gradient-text text-center mb-12">
            What Our Community Says
          </h2>
          <ReviewsList />
        </motion.div>
      </div>
    </div>
  );
};

export default Reviews;
