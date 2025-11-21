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

  const [activeTab, setActiveTab] = useState<'about'>('about');
  const [showEnrollModal, setShowEnrollModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    language: 'English',
  });

  // Internship — only for AI Fusion Bootcamp
  const isInternshipCourse = slug === 'ai-fusion-bootcamp';
  const [internship, setInternship] = useState<'yes' | 'no'>('no');

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

  // PRICE CALCULATIONS
  const basePrice = parseInt(course.price.replace(',', ''));
  const internshipPrice = internship === 'yes' ? 10000 : 0;
  const subtotal = basePrice + internshipPrice;
  const gstAmount = subtotal * 0.18;
  const totalAmount = subtotal + gstAmount;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePayment = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Create Order
      const orderRes = await axios.post(`${API_BASE}/api/create-order`, { amount: totalAmount });
      const { id: order_id } = orderRes.data.order;

      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID || 'rzp_test_demo',
        amount: totalAmount * 100,
        currency: 'INR',
        name: 'Trishuvaan EdTech',
        description: `${course.title} (Incl. GST)`,
        image: '/images/coursedetail/razorpay-banner.jpg',
        order_id,

        handler: async function (response: any) {
          try {
            const verifyData = {
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,

              name: formData.name,
              email: formData.email,
              mobile: formData.mobile,

              course: course.title,
              language: formData.language,
              internship: internship === 'yes' ? 'Yes' : 'No',
              amount: totalAmount,
              groupId: course.groupId || 'AI',
            };

            const res = await axios.post(`${API_BASE}/api/verify-payment`, verifyData);

            if (res.data.success) {
              setShowEnrollModal(false);
              setShowSuccessModal(true);
              setFormData({ name: '', email: '', mobile: '', language: 'English' });
              setInternship('no');
            }
          } catch {
            alert('Payment verified, but enrollment could not be saved.');
          }
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
    } catch {
      alert('Payment initialization failed. Try again.');
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
            {/* LEFT: Course Info */}
            <div className="lg:col-span-2">
              <img
                src={`/images/coursedetail/${course.slug}.jpg`}
                className="w-full h-96 object-cover rounded-2xl shadow-2xl mb-8"
              />

              <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">{course.title}</h1>
              <p className="text-xl text-gray-600 mb-6">{course.description}</p>

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

              <div className="glass-effect rounded-xl p-8">
                <h2 className="text-2xl font-bold mb-4">About This Course</h2>
                <p className="text-gray-600 mb-6">{course.description}</p>

                <h3 className="text-xl font-bold mb-4">What You'll Learn</h3>
                <ul className="space-y-3">
                  {course.curriculum.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="text-green-500 mr-3 mt-1" size={20} />
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* RIGHT PRICE CARD */}
            <div className="lg:col-span-1">
              <div className="glass-effect rounded-xl p-6 sticky top-24">
                <div className="mb-6">
                  <div className="flex items-center text-4xl font-bold gradient-text mb-2">
                    <IndianRupee size={32} />
                    <span>{subtotal.toLocaleString()}</span>
                  </div>

                  {course.originalPrice && (
                    <div className="text-gray-400 line-through text-lg">
                      ₹{course.originalPrice}
                    </div>
                  )}

                  <p className="text-sm text-gray-500">+ GST</p>
                </div>

                <GlowButton className="w-full" onClick={() => setShowEnrollModal(true)}>
                  Enroll Now
                </GlowButton>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* ---------- ENROLL MODAL ---------- */}
      {showEnrollModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-2xl p-8 max-w-3xl w-full"
          >
            {/* Header */}
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold gradient-text">
                Enroll in {course.title}
              </h2>
              <button onClick={() => setShowEnrollModal(false)}>
                <X size={26} className="text-gray-500" />
              </button>
            </div>

            {/* HORIZONTAL TWO-COLUMN FORM */}
            <form onSubmit={handlePayment} className="grid grid-cols-1 md:grid-cols-2 gap-6">

              {/* COLUMN 1 */}
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Full Name</label>
                  <input
                    type="text"
                    required
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border rounded-lg"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Email</label>
                  <input
                    type="email"
                    required
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border rounded-lg"
                  />
                </div>
              </div>

              {/* COLUMN 2 */}
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Mobile</label>
                  <input
                    type="tel"
                    required
                    pattern="[0-9]{10}"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border rounded-lg"
                  />
                </div>

                {/* Internship */}
                {isInternshipCourse && (
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h3 className="font-semibold mb-3">Internship Option</h3>
                    <label className="flex items-center gap-3 mb-2">
                      <input
                        type="radio"
                        checked={internship === 'no'}
                        onChange={() => setInternship('no')}
                      />
                      Without Internship
                    </label>

                    <label className="flex items-center gap-3">
                      <input
                        type="radio"
                        checked={internship === 'yes'}
                        onChange={() => setInternship('yes')}
                      />
                      With Internship (+₹10,000)
                    </label>
                  </div>
                )}
              </div>

              {/* PRICE BOX — FULL WIDTH */}
              <div className="col-span-1 md:col-span-2 bg-gray-50 p-5 rounded-lg">
                <div className="flex justify-between mb-2">
                  <span className="font-medium">Course Fee:</span>
                  <span>₹{basePrice.toLocaleString()}</span>
                </div>

                {isInternshipCourse && internship === 'yes' && (
                  <div className="flex justify-between mb-2 text-blue-600 font-semibold">
                    <span>Internship Add-on:</span>
                    <span>₹10,000</span>
                  </div>
                )}

                <div className="flex justify-between text-sm text-gray-600 mb-2">
                  <span>GST (18%):</span>
                  <span>₹{gstAmount.toFixed(2)}</span>
                </div>

                <div className="border-t pt-3 mt-2 flex justify-between font-bold text-xl">
                  <span>Total Amount:</span>
                  <span className="gradient-text">₹{totalAmount.toLocaleString()}</span>
                </div>
              </div>

              {/* BUTTON — FULL WIDTH */}
              <div className="col-span-1 md:col-span-2 mt-4">
                <GlowButton type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? 'Processing…' : 'Proceed to Payment'}
                </GlowButton>
              </div>
            </form>
          </motion.div>
        </div>
      )}

      {/* SUCCESS MODAL */}
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
