import { motion } from 'framer-motion';
import NeuralBackground from '../components/NeuralBackground';
import { GraduationCap, Briefcase, Clock, Users, Star } from 'lucide-react';
import CourseCard from '../components/CourseCard';
import { courses } from '../data/courses';

// Local success story images
const successStories = [
  {
    name: 'Rahul Verma',
    role: 'AI Engineer at TCS',
    image: '/images/success_stories/story1.jpg',
    quote:
      'Trishuvaan transformed my career in just 8 weeks! The hands-on projects and mentorship were invaluable.',
  },
  {
    name: 'Priya Nair',
    role: 'Data Analyst at Infosys',
    image: '/images/success_stories/story2.jpg',
    quote:
      'The AI Bootcamp was the best investment I made in 2025. Now I am working on real AI projects!',
  },
  {
    name: 'Amit Kumar',
    role: 'Python Developer',
    image: '/images/success_stories/story3.jpg',
    quote:
      'Amazing mentors, hands-on learning, and practical skills. Highly recommended for anyone serious about AI.',
  },
  {
    name: 'Sneha Reddy',
    role: 'Business Analyst',
    image: '/images/success_stories/story4.jpg',
    quote:
      'Razorpay integration and AI project experience was superb! Got placed within 2 months of completion.',
  },
];

const benefits = [
  {
    icon: GraduationCap,
    title: 'Learn from Experts',
    description: 'Industry practitioners with real-world experience',
  },
  {
    icon: Briefcase,
    title: 'Hands-on Projects',
    description: 'Build production-ready applications',
  },
  {
    icon: Clock,
    title: 'Flexible Learning',
    description: 'Live weekend classes that fit your schedule',
  },
  {
    icon: Users,
    title: 'Community Support',
    description: 'Join a vibrant community of learners',
  },
];

const EdTech = () => {
  return (
    <div className="min-h-screen py-20 relative">
      <NeuralBackground />
      <div className="container mx-auto px-4 relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
            Trishuvaan EdTech
          </h1>
          <p className="text-2xl text-gray-600 max-w-3xl mx-auto mb-4">
            Transform Your Career with AI & Data Courses
          </p>
          <p className="text-lg text-gray-500">
            Live, project-based learning from industry experts
          </p>
        </motion.div>

        {/* Benefits Section */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          className="glass-effect rounded-2xl p-8 mb-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-14 h-14 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-violet-500 rounded-full flex items-center justify-center glow-effect">
                  <benefit.icon className="text-white" size={24} />
                </div>
                <h3 className="font-bold text-lg mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Courses Header */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl font-bold text-center mb-4 gradient-text">
            Our Courses
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Choose from our comprehensive range of AI and Data Science courses
          </p>
        </motion.div>

        {/* LIVE COURSES */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-6 text-violet-600">Live Courses</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {courses
              .filter((c) => c.originalPrice)
              .map((course, index) => (
                <motion.div
                  key={course.id}
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <CourseCard {...course} />
                </motion.div>
              ))}
          </div>
        </div>

        {/* UPCOMING COURSES */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-6 text-purple-600">Upcoming Courses</h3>
          <p className="text-gray-600 mb-6">
            12-week comprehensive programs with internship opportunities
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {courses
              .filter((c) => !c.originalPrice)
              .map((course, index) => (
                <motion.div
                  key={course.id}
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <CourseCard {...course} />
                </motion.div>
              ))}
          </div>
        </div>

        {/* Why Choose Section */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          className="glass-effect rounded-2xl p-12 text-center bg-gradient-to-br from-blue-50 to-violet-50 mb-20"
        >
          <h2 className="text-3xl font-bold mb-4 gradient-text">
            Why Choose Trishuvaan EdTech?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div>
              <div className="text-4xl font-bold text-violet-600 mb-2">98%</div>
              <p className="text-gray-600">Course Completion Rate</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-violet-600 mb-2">5000+</div>
              <p className="text-gray-600">Students Trained</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-violet-600 mb-2">500+</div>
              <p className="text-gray-600">Companies Hiring Our Students</p>
            </div>
          </div>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-8">
            Join thousands of professionals who have transformed their careers with Trishuvaan.
            From complete beginners to experienced developers, we have a course for everyone.
          </p>
        </motion.div>

        {/* SUCCESS STORIES — NEW SECTION */}
        <section className="py-20">
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
        </section>

      </div>
    </div>
  );
};

export default EdTech;
