import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Briefcase, MapPin, Calendar, TrendingUp } from 'lucide-react';
import { jobs, internships } from '../data/careers';
import GlowButton from '../components/GlowButton';
import NeuralBackground from '../components/NeuralBackground';

const Careers = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen py-20 relative bg-gradient-to-br from-blue-50 via-white to-orange-50">
      <NeuralBackground />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
            Join the AI Revolution
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore internships and careers that build the future of AI
          </p>
        </motion.div>

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          className="glass-effect rounded-2xl p-12 mb-16 text-center bg-gradient-to-br from-blue-50 to-violet-50"
        >
          <TrendingUp className="w-16 h-16 mx-auto mb-6 text-violet-600" />
          <h2 className="text-3xl font-bold mb-4 gradient-text">
            Why Work at Trishuvaan?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div>
              <div className="text-4xl font-bold text-violet-600 mb-2">Cutting-Edge</div>
              <p className="text-gray-600">Work on latest AI technologies</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-violet-600 mb-2">Growth</div>
              <p className="text-gray-600">Fast-paced learning environment</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-violet-600 mb-2">Impact</div>
              <p className="text-gray-600">Build products that matter</p>
            </div>
          </div>
        </motion.div>

        <section className="mb-20">
          <motion.h2
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-8 gradient-text"
          >
            Internship Opportunities
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {internships.map((internship, index) => (
              <motion.div
                key={internship.id}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="glass-effect rounded-xl p-6 hover:shadow-2xl transition-all duration-300"
              >
                <h3 className="text-2xl font-bold mb-3">{internship.title}</h3>
                <p className="text-gray-600 mb-4">{internship.description}</p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin size={16} className="mr-2" />
                    <span>{internship.location}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Calendar size={16} className="mr-2" />
                    <span>{internship.duration}</span>
                  </div>
                  <div className="flex items-center text-sm font-semibold text-green-600">
                    <Briefcase size={16} className="mr-2" />
                    <span>{internship.stipend}</span>
                  </div>
                </div>
                <GlowButton
                  onClick={() => navigate(`/internship/${internship.slug}`)}
                  className="w-full"
                >
                  View Details & Apply
                </GlowButton>
              </motion.div>
            ))}
          </div>
        </section>

        <section>
          <motion.h2
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-8 gradient-text"
          >
            Job Openings
          </motion.h2>
          <div className="glass-effect rounded-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-blue-600 to-violet-600 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Role</th>
                    <th className="px-6 py-4 text-left">Location</th>
                    <th className="px-6 py-4 text-left">Package</th>
                    <th className="px-6 py-4 text-left">Apply By</th>
                    <th className="px-6 py-4 text-left">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {jobs.map((job, index) => (
                    <motion.tr
                      key={job.id}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="border-b border-gray-200 hover:bg-blue-50 transition-colors"
                    >
                      <td className="px-6 py-4 font-semibold">{job.title}</td>
                      <td className="px-6 py-4 text-gray-600">{job.location}</td>
                      <td className="px-6 py-4 text-green-600 font-semibold">{job.package}</td>
                      <td className="px-6 py-4 text-gray-600">{job.applyBy}</td>
                      <td className="px-6 py-4">
                        <button
                          onClick={() => navigate(`/career/${job.slug}`)}
                          className="text-violet-600 hover:text-violet-700 font-semibold"
                        >
                          View Details →
                        </button>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Careers;
