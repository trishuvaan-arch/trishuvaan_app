import { useState } from 'react';
import NeuralBackground from '../components/NeuralBackground';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { courses } from '../data/courses';
import GlowButton from '../components/GlowButton';

const CourseDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const course = courses.find((c) => c.slug === slug);

  const [activeTab, setActiveTab] = useState<'about'>('about');

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Course Not Found</h1>
          <GlowButton onClick={() => navigate('/edtech')}>
            Back to Courses
          </GlowButton>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20 relative">
      <NeuralBackground />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="mb-8"
        >
          <button
            onClick={() => navigate('/edtech')}
            className="text-violet-600 hover:text-violet-700 mb-4"
          >
            ← Back to Courses
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* COURSE INFO */}
            <div className="lg:col-span-3">
              <img
                src={`/images/coursedetail/${course.slug}.jpg`}
                className="w-full h-96 object-cover rounded-2xl shadow-2xl mb-8"
                alt={course.title}
              />

              <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
                {course.title}
              </h1>

              <p className="text-xl text-gray-600 mb-8">
                {course.description}
              </p>

              {/* CONTACT TO PURCHASE */}
              <div className="mb-10 glass-effect rounded-xl p-6 border border-violet-200">
                <h3 className="text-xl font-bold mb-4 gradient-text">
                  Contact to Purchase the Course
                </h3>

                <div className="flex flex-col sm:flex-row gap-4">
                  {/* WhatsApp */}
                  <a
                    href="https://wa.me/917386837744"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-700 hover:text-green-600"
                  >
                    <img
                      src="/images/icons/whatsapp.png"
                      alt="WhatsApp"
                      className="w-6 h-6"
                    />
                    <span className="font-medium">
                      +91 73868 37744
                    </span>
                  </a>

                  {/* Email */}
                  <a
                    href="mailto:support@trishuvaan.com"
                    className="flex items-center gap-3 text-gray-700 hover:text-violet-600"
                  >
                    <img
                      src="/images/icons/email.png"
                      alt="Email"
                      className="w-6 h-6"
                    />
                    <span className="font-medium">
                      support@trishuvaan.com
                    </span>
                  </a>
                </div>
              </div>

              {/* TABS */}
              <div className="flex space-x-4 mb-8 border-b">
                <button
                  onClick={() => setActiveTab('about')}
                  className={`pb-2 px-4 font-semibold ${
                    activeTab === 'about'
                      ? 'text-violet-600 border-b-2 border-violet-600'
                      : 'text-gray-500 hover:text-violet-600'
                  }`}
                >
                  About
                </button>
              </div>

              {/* COURSE CONTENT */}
              <div className="glass-effect rounded-xl p-8">
                <h2 className="text-2xl font-bold mb-4">
                  About This Course
                </h2>

                <p className="text-gray-600 mb-6">
                  {course.description}
                </p>

                <h3 className="text-xl font-bold mb-4">
                  What You'll Learn
                </h3>

                <ul className="space-y-3">
                  {course.curriculum.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle
                        className="text-green-500 mr-3 mt-1"
                        size={20}
                      />
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CourseDetail;
