import { motion } from 'framer-motion';
import NeuralBackground from '../components/NeuralBackground';
import { Target, Eye, Users, Lightbulb, Rocket, Award } from 'lucide-react';

const teamMembers = [
  {
    name: 'Govind',
    role: 'AI Engineer',
    expertise: 'Artificial Intelligence, Machine Learning, Product Development',
  },
];

const values = [
  {
    icon: Lightbulb,
    title: 'Innovation First',
    description: 'We constantly push boundaries and explore new frontiers in AI technology.',
  },
  {
    icon: Users,
    title: 'Community Driven',
    description: 'Building a strong community of AI enthusiasts, learners, and practitioners.',
  },
  {
    icon: Rocket,
    title: 'Rapid Execution',
    description: 'From idea to implementation, we move fast and deliver exceptional results.',
  },
  {
    icon: Award,
    title: 'Excellence Always',
    description: 'We maintain the highest standards in everything we build and teach.',
  },
];

const WhoWeAre = () => {
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
            Who We Are
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A revolution in Artificial Intelligence innovation
          </p>
        </motion.div>

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          className="glass-effect rounded-2xl p-12 mb-20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg"
                alt="AI Innovation"
                className="rounded-xl shadow-2xl"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6 gradient-text">Our Story</h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Trishuvaan represents a revolution in Artificial Intelligence innovation. We believe
                in building an AI-empowered generation capable of designing intelligent systems,
                automating workflows, and driving innovation across industries.
              </p>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Our team includes data scientists, developers, and educators shaping the future of
                AI technology and education in India. We combine cutting-edge research with practical
                implementation to create solutions that matter.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                From developing enterprise AI systems to training the next generation of AI professionals,
                we're committed to making AI accessible, practical, and transformative.
              </p>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="glass-effect rounded-2xl p-8"
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-violet-500 rounded-lg flex items-center justify-center mr-4">
                <Eye className="text-white" size={24} />
              </div>
              <h2 className="text-3xl font-bold gradient-text">Vision</h2>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              Empowering AI Talent for the Next Decade. We envision an India where every professional
              has the skills and tools to leverage AI in their work, creating a nation of innovators
              and problem solvers.
            </p>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="glass-effect rounded-2xl p-8"
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-purple-500 rounded-lg flex items-center justify-center mr-4">
                <Target className="text-white" size={24} />
              </div>
              <h2 className="text-3xl font-bold gradient-text">Mission</h2>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              AI for Everyone — Learning to Leading. We democratize AI education and create
              practical, production-ready AI solutions that solve real-world problems. From
              classroom to boardroom, we're making AI accessible.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-center mb-12 gradient-text">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="glass-effect rounded-xl p-6 text-center hover:shadow-2xl transition-all duration-300"
              >
                <div className="w-14 h-14 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-violet-500 rounded-full flex items-center justify-center glow-effect">
                  <value.icon className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-center mb-12 gradient-text">
            Meet Our Leadership
          </h2>
          <div className="flex justify-center">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-effect rounded-xl max-w-2xl hover:shadow-2xl transition-all duration-300 p-12"
              >
                <div className="flex flex-col items-center">
                  <div className="mb-8 relative w-64 h-72">
                    <img
                      src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=600"
                      alt={member.name}
                      className="w-full h-full object-cover shadow-2xl"
                      style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}
                    />
                  </div>
                  <h3 className="text-3xl font-bold mb-2">{member.name}</h3>
                  <p className="text-xl text-orange-600 font-semibold mb-4">{member.role}</p>
                  <p className="text-gray-600 text-center">{member.expertise}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 glass-effect rounded-2xl p-12 text-center bg-gradient-to-br from-blue-50 to-violet-50"
        >
          <h2 className="text-3xl font-bold mb-4 gradient-text">
            Join the AI Revolution
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Whether you're looking to learn, build, or innovate with AI, Trishuvaan is your
            partner in the journey from learning to leading.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/edtech"
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-violet-600 text-white rounded-lg font-semibold hover:shadow-xl transition-all glow-effect"
            >
              Explore Courses
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/careers"
              className="px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all"
            >
              Join Our Team
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default WhoWeAre;
