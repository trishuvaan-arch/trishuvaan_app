import { motion } from 'framer-motion';
import NeuralBackground from '../components/NeuralBackground';
import { Brain, Bot, Eye, BarChart, Sparkles, Zap } from 'lucide-react';

const services = [
  {
    icon: Bot,
    title: 'AI Chatbots & Automation',
    description: 'Building intelligent chatbots like TrishuBot that understand context, learn from interactions, and automate customer support with human-like conversations.',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Brain,
    title: 'AutoBrain Systems',
    description: 'Enterprise-level AI automation systems that learn, adapt, and optimize business workflows without human intervention.',
    gradient: 'from-violet-500 to-purple-500',
  },
  {
    icon: Eye,
    title: 'VisionAI Solutions',
    description: 'Computer vision applications for image recognition, object detection, facial analysis, and visual inspection systems.',
    gradient: 'from-pink-500 to-rose-500',
  },
  {
    icon: BarChart,
    title: 'Predictive Analytics',
    description: 'Data-driven dashboards and predictive models that forecast trends, identify patterns, and drive data-informed decisions.',
    gradient: 'from-emerald-500 to-teal-500',
  },
  {
    icon: Sparkles,
    title: 'Trishuvaan EdTech',
    description: 'Live, project-based training programs in AI, Data Science, Python, and Analytics that transform learners into industry-ready professionals.',
    gradient: 'from-orange-500 to-yellow-500',
  },
  {
    icon: Zap,
    title: 'AI Research & Consulting',
    description: 'Advanced research in LLMs, NLP, and Machine Learning. Strategic consulting to help businesses integrate AI into their operations.',
    gradient: 'from-indigo-500 to-blue-500',
  },
];

const technologies = [
  'Python', 'TensorFlow', 'PyTorch', 'OpenAI GPT', 'Computer Vision',
  'Natural Language Processing', 'Machine Learning', 'Deep Learning',
  'Data Analytics', 'Cloud AI', 'LangChain', 'Hugging Face',
];

const WhatWeDo = () => {
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
            What We Do
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
            Trishuvaan specializes in building advanced AI systems and empowering the next generation
            of AI professionals through cutting-edge education.
          </p>
          <p className="text-2xl font-semibold gradient-text italic">
            "We don't just use AI — we create it."
          </p>
        </motion.div>

        <div className="relative mb-20">
          <div className="absolute inset-0 flex items-center justify-center opacity-10">
            <img
              src="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg"
              alt="AI Network"
              className="w-full h-96 object-cover rounded-3xl"
            />
          </div>
          <div className="relative neural-bg rounded-3xl p-8 glass-effect">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-4 glow-effect`}>
                    <service.icon className="text-white" size={28} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-center mb-12 gradient-text">
            Our AI Innovations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-effect rounded-xl p-8 hover:shadow-2xl transition-all duration-300">
              <div className="w-full h-48 mb-6 rounded-lg overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg"
                  alt="TrishuBot"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold mb-3 gradient-text">TrishuBot</h3>
              <p className="text-gray-600">
                An intelligent AI assistant powered by advanced NLP that understands context,
                remembers conversations, and provides human-like responses across multiple domains.
              </p>
            </div>

            <div className="glass-effect rounded-xl p-8 hover:shadow-2xl transition-all duration-300">
              <div className="w-full h-48 mb-6 rounded-lg overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg"
                  alt="AutoBrain"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold mb-3 gradient-text">AutoBrain</h3>
              <p className="text-gray-600">
                Enterprise automation platform that uses AI to optimize workflows, predict bottlenecks,
                and automate complex business processes with minimal human intervention.
              </p>
            </div>

            <div className="glass-effect rounded-xl p-8 hover:shadow-2xl transition-all duration-300">
              <div className="w-full h-48 mb-6 rounded-lg overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/8438918/pexels-photo-8438918.jpeg"
                  alt="VisionAI"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold mb-3 gradient-text">VisionAI</h3>
              <p className="text-gray-600">
                Computer vision platform for image analysis, object detection, and visual intelligence
                applications. Powers everything from security systems to quality control.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="glass-effect rounded-2xl p-12 text-center"
        >
          <h2 className="text-3xl font-bold mb-8 gradient-text">
            Technologies We Master
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech, index) => (
              <motion.span
                key={index}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1 }}
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-violet-500 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="glass-effect rounded-2xl p-12 bg-gradient-to-br from-blue-50 to-violet-50">
            <Brain className="w-16 h-16 mx-auto mb-6 text-violet-600" />
            <h2 className="text-3xl font-bold mb-4 gradient-text">
              Building Tomorrow's Intelligence, Today
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From research labs to production systems, from classrooms to corporate boardrooms,
              Trishuvaan is at the forefront of the AI revolution. Join us in shaping the future.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default WhatWeDo;
