import { useState } from 'react';
import NeuralBackground from '../components/NeuralBackground';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Clock, Users, Award, CheckCircle, X, IndianRupee } from 'lucide-react';
import { courses } from '../data/courses';
import GlowButton from '../components/GlowButton';
import axios from 'axios';

declare global {
  interface Window {
    Razorpay: any;
  }
}

const API_BASE =
  import.meta.env.VITE_API_BASE?.trim().replace(/\/$/, '') || 'http://localhost:3001';

const CourseDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const course = courses.find((c) => c.slug === slug);
  const [activeTab, setActiveTab] = useState<'about' | 'curriculum' | 'faqs'>('about');
  const [showEnrollModal, setShowEnrollModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    language: 'English',
  });
  const [isLoading, setIsLoading] = useState(false);

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Course Not Found</h1>
          <GlowButton onClick={() => navigate('/edtech')}>Back to Courses</GlowButton>
        </div>
      </div>
    );
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePayment = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const baseAmount = parseInt(course.price.replace(',', ''));
      const gstAmount = baseAmount * 0.18;
      const totalAmount = baseAmount + gstAmount;

      // Step 1️⃣ Create Razorpay order
      const orderRes = await axios.post(`${API_BASE}/api/create-order`, { amount: totalAmount });
      const { id: order_id } = orderRes.data.order;

      // Step 2️⃣ Open Razorpay checkout
      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID || 'rzp_test_demo',
        amount: totalAmount * 100,
        currency: 'INR',
        name: 'Trishuvaan EdTech',
        description: `${course.title} (Inc. 18% GST)`,
        image: '/images/coursedetail/razorpay-banner.jpg',
        order_id,
        handler: async function (response: any) {
          try {
            // Step 3️⃣ Verify payment on backend
            const verifyData = {
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
              name: formData.name,
              email: formData.email,
              mobile: formData.mobile,
              course: course.title,
              language: formData.language,
              amount: totalAmount,
              groupId: course.groupId || 'AI',
            };

            const res = await axios.post(`${API_BASE}/api/verify-payment`, verifyData);

            // Step 4️⃣ Show Success Modal
            if (res.data.success) {
              setShowEnrollModal(false);
              setShowSuccessModal(true);
              setFormData({ name: '', email: '', mobile: '', language: 'English' });
            } else {
              alert('Payment verified but something went wrong.');
            }
          } catch (error) {
            console.error('❌ verify-payment error:', error);
            alert('Payment verified, but enrollment could not be saved. Please contact support.');
          }
        },
        modal: {
          ondismiss: function () {
            setIsLoading(false);
          },
        },
        prefill: {
          name: formData.name,
          email: formData.email,
          contact: formData.mobile,
        },
        theme: { color: '#6366f1' },
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (error) {
      console.error('❌ Payment initialization error:', error);
      alert('Payment initialization failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen py-20 relative">
      <NeuralBackground />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="mb-8">
          <button
            onClick={() => navigate('/edtech')}
            className="text-violet-600 hover:text-violet-700 mb-4"
          >
            ← Back to Courses
          </button>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <img
                src={`/images/coursedetail/${course.slug}.jpg`}
                alt={course.title}
                className="w-full h-96 object-cover rounded-2xl shadow-2xl mb-8"
              />
              <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
                {course.title}
              </h1>
              <p className="text-xl text-gray-600 mb-6">{course.description}</p>

              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center text-gray-600">
                  <Clock size={20} className="mr-2" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Users size={20} className="mr-2" />
                  <span>{course.seats}</span>
                </div>
                {course.startDate && (
                  <div className="flex items-center text-gray-600">
                    <Calendar size={20} className="mr-2" />
                    <span>{course.startDate}</span>
                  </div>
                )}
                <div className="flex items-center text-green-600 font-semibold">
                  <Award size={20} className="mr-2" />
                  <span>{course.mode}</span>
                </div>
              </div>

              <div className="flex space-x-4 mb-8 border-b">
                {['about'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab as any)}
                    className={`pb-2 px-4 font-semibold transition-colors ${
                      activeTab === tab
                        ? 'text-violet-600 border-b-2 border-violet-600'
                        : 'text-gray-500 hover:text-violet-600'
                    }`}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </div>

              <div className="glass-effect rounded-xl p-8">
                {activeTab === 'about' && (
                  <div>
                    <h2 className="text-2xl font-bold mb-4">About This Course</h2>
                    <p className="text-gray-600 mb-6">{course.description}</p>
                    <h3 className="text-xl font-bold mb-4">What You'll Learn</h3>
                    <ul className="space-y-3">
                      {course.curriculum.map((item, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle
                            className="text-green-500 mr-3 mt-1 flex-shrink-0"
                            size={20}
                          />
                          <span className="text-gray-600">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="glass-effect rounded-xl p-6 sticky top-24">
                <div className="mb-6">
                  <div className="flex items-center text-4xl font-bold gradient-text mb-2">
                    <IndianRupee size={32} />
                    <span>{course.price}</span>
                  </div>
                  {course.originalPrice && (
                    <div className="flex items-center text-lg text-gray-400 line-through">
                      <IndianRupee size={18} />
                      <span>{course.originalPrice}</span>
                    </div>
                  )}
                  <p className="text-sm text-gray-500">+ GST</p>
                </div>

                <GlowButton
                  onClick={() => setShowEnrollModal(true)}
                  className="w-full mb-4"
                  variant="primary"
                >
                  Enroll Now
                </GlowButton>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Enroll Modal */}
      {showEnrollModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-2xl p-8 max-w-md w-full"
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold gradient-text">Enroll in {course.title}</h2>
              <button
                onClick={() => setShowEnrollModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X size={24} />
              </button>
            </div>

            <form onSubmit={handlePayment} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Full Name</label>
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
                <label className="block text-sm font-medium mb-2">Email</label>
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
                <label className="block text-sm font-medium mb-2">Mobile</label>
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

              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium">Course Fee:</span>
                  <span className="font-bold gradient-text">₹{course.price}</span>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-600">GST (18%):</span>
                  <span className="text-sm text-gray-600">
                    ₹{(parseInt(course.price.replace(',', '')) * 0.18).toFixed(2)}
                  </span>
                </div>
                <div className="border-t pt-2 mt-2">
                  <div className="flex justify-between items-center">
                    <span className="font-bold">Total Amount:</span>
                    <span className="font-bold text-xl gradient-text">
                      ₹{(parseInt(course.price.replace(',', '')) * 1.18).toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>

              <GlowButton type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? 'Processing...' : 'Proceed to Payment'}
              </GlowButton>
            </form>
          </motion.div>
        </div>
      )}

      {/* ✅ Success Modal (Simplified — no WhatsApp link) */}
      {showSuccessModal && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-2xl p-8 max-w-md w-full text-center"
          >
            <h2 className="text-2xl font-bold text-green-600 mb-4">
              ✅ Payment Successful!
            </h2>
            <p className="text-gray-700 mb-4">
              Thank you for enrolling in <strong>{course.title}</strong>.
            </p>
            <GlowButton onClick={() => setShowSuccessModal(false)}>Close</GlowButton>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default CourseDetail;
