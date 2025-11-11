import { motion } from 'framer-motion';
import NeuralBackground from '../components/NeuralBackground';
import { GraduationCap, Briefcase, Clock, Users } from 'lucide-react';
import CourseCard from '../components/CourseCard';
import { courses } from '../data/courses';

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

        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-6 text-violet-600">Live Courses</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.filter(c => c.originalPrice).map((course, index) => (
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

        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-6 text-purple-600">Upcoming Courses</h3>
          <p className="text-gray-600 mb-6">
            12-week comprehensive programs with internship opportunities
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {courses.filter(c => !c.originalPrice).map((course, index) => (
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

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          className="glass-effect rounded-2xl p-12 text-center bg-gradient-to-br from-blue-50 to-violet-50"
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
      </div>
    </div>
  );
};

export default EdTech;
