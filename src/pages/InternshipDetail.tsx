import { useState } from 'react';
import NeuralBackground from '../components/NeuralBackground';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Briefcase, CheckCircle, X } from 'lucide-react';
import { internships } from '../data/careers';
import GlowButton from '../components/GlowButton';
import axios from 'axios';

const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:3001';

const InternshipDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const internship = internships.find(i => i.slug === slug);
  const [showApplyModal, setShowApplyModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    resume: null as File | null,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!internship) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Internship Not Found</h1>
          <GlowButton onClick={() => navigate('/careers')}>Back to Careers</GlowButton>
        </div>
      </div>
    );
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === 'resume') {
      setFormData({ ...formData, resume: e.target.files?.[0] || null });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const submitData = new FormData();
      submitData.append('name', formData.name);
      submitData.append('email', formData.email);
      submitData.append('mobile', formData.mobile);
      submitData.append('position', internship.title);
      if (formData.resume) {
        submitData.append('resume', formData.resume);
      }

      await axios.post(`${API_BASE}/api/apply`, submitData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      alert('Application submitted successfully! We will contact you soon.');
      setShowApplyModal(false);
      setFormData({ name: '', email: '', mobile: '', resume: null });
    } catch (error) {
      alert('Failed to submit application. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen py-20 relative">
      <NeuralBackground />
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          <button
            onClick={() => navigate('/careers')}
            className="text-violet-600 hover:text-violet-700 mb-6"
          >
            ← Back to Careers
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
                {internship.title}
              </h1>

              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center text-gray-600">
                  <MapPin size={20} className="mr-2" />
                  <span>{internship.location}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Calendar size={20} className="mr-2" />
                  <span>Duration: {internship.duration}</span>
                </div>
                <div className="flex items-center text-green-600 font-semibold">
                  <Briefcase size={20} className="mr-2" />
                  <span>{internship.stipend}</span>
                </div>
              </div>

              <div className="glass-effect rounded-xl p-8 mb-8">
                <h2 className="text-2xl font-bold mb-4">About This Internship</h2>
                <p className="text-gray-600 mb-6">{internship.description}</p>

                <h3 className="text-xl font-bold mb-4">Requirements</h3>
                <ul className="space-y-3 mb-6">
                  {internship.requirements.map((req, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0" size={20} />
                      <span className="text-gray-600">{req}</span>
                    </li>
                  ))}
                </ul>

                <h3 className="text-xl font-bold mb-4">Responsibilities</h3>
                <ul className="space-y-3">
                  {internship.responsibilities.map((resp, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="text-blue-500 mr-3 mt-1 flex-shrink-0" size={20} />
                      <span className="text-gray-600">{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="glass-effect rounded-xl p-6 sticky top-24">
                <h3 className="text-xl font-bold mb-4">Apply for this internship</h3>
                <p className="text-gray-600 mb-6">
                  Gain hands-on experience and kickstart your career in AI
                </p>
                <GlowButton
                  onClick={() => setShowApplyModal(true)}
                  className="w-full"
                  variant="primary"
                >
                  Apply Now
                </GlowButton>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {showApplyModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-2xl p-8 max-w-md w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold gradient-text">Apply for {internship.title}</h2>
              <button onClick={() => setShowApplyModal(false)} className="text-gray-500 hover:text-gray-700">
                <X size={24} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-600 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-600 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Mobile *</label>
                <input
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleInputChange}
                  required
                  pattern="[0-9]{10}"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-600 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Upload Resume *</label>
                <input
                  type="file"
                  name="resume"
                  onChange={handleInputChange}
                  required
                  accept=".pdf,.doc,.docx"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-600 focus:border-transparent"
                />
                <p className="text-xs text-gray-500 mt-1">Accepted formats: PDF, DOC, DOCX (Max 5MB)</p>
              </div>

              <GlowButton type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? 'Submitting...' : 'Submit Application'}
              </GlowButton>
            </form>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default InternshipDetail;
