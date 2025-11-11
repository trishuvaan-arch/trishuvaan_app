import { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Send } from 'lucide-react';
import { createClient } from '@supabase/supabase-js';
import GlowButton from './GlowButton';

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

interface ReviewFormProps {
  onSuccess?: () => void;
}

const ReviewForm = ({ onSuccess }: ReviewFormProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    userType: 'student' as 'student' | 'employee',
    rating: 5,
    courseName: '',
    reviewText: '',
    isSuccessStory: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage({ type: '', text: '' });

    try {
      const { error } = await supabase.from('reviews').insert([
        {
          user_name: formData.name,
          user_email: formData.email,
          user_type: formData.userType,
          rating: formData.rating,
          review_text: formData.reviewText,
          course_name: formData.userType === 'student' ? formData.courseName : null,
          is_success_story: formData.isSuccessStory,
        },
      ]);

      if (error) throw error;

      setMessage({
        type: 'success',
        text: 'Thank you for your review! It will be published after approval.',
      });
      setFormData({
        name: '',
        email: '',
        userType: 'student',
        rating: 5,
        courseName: '',
        reviewText: '',
        isSuccessStory: false,
      });
      if (onSuccess) onSuccess();
    } catch (error) {
      setMessage({
        type: 'error',
        text: 'Failed to submit review. Please try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass-effect rounded-2xl p-8 max-w-2xl mx-auto"
    >
      <h2 className="text-3xl font-bold gradient-text mb-6 text-center">
        Share Your Experience
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium mb-2">Full Name</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">I am a</label>
          <div className="flex gap-4">
            <label className="flex items-center cursor-pointer">
              <input
                type="radio"
                value="student"
                checked={formData.userType === 'student'}
                onChange={(e) =>
                  setFormData({ ...formData, userType: e.target.value as 'student' })
                }
                className="mr-2"
              />
              <span>Student</span>
            </label>
            <label className="flex items-center cursor-pointer">
              <input
                type="radio"
                value="employee"
                checked={formData.userType === 'employee'}
                onChange={(e) =>
                  setFormData({ ...formData, userType: e.target.value as 'employee' })
                }
                className="mr-2"
              />
              <span>Employee</span>
            </label>
          </div>
        </div>

        {formData.userType === 'student' && (
          <div>
            <label className="block text-sm font-medium mb-2">Course Name</label>
            <input
              type="text"
              value={formData.courseName}
              onChange={(e) => setFormData({ ...formData, courseName: e.target.value })}
              placeholder="e.g., AI Course, Power BI Course"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        )}

        <div>
          <label className="block text-sm font-medium mb-2">Rating</label>
          <div className="flex gap-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                onClick={() => setFormData({ ...formData, rating: star })}
                className="focus:outline-none"
              >
                <Star
                  size={32}
                  className={`transition-all ${
                    star <= formData.rating
                      ? 'fill-yellow-400 text-yellow-400'
                      : 'text-gray-300'
                  }`}
                />
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Your Review</label>
          <textarea
            value={formData.reviewText}
            onChange={(e) => setFormData({ ...formData, reviewText: e.target.value })}
            required
            rows={4}
            placeholder="Share your experience with us..."
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div className="flex items-center gap-3 p-4 bg-orange-50 rounded-lg border border-orange-200">
          <input
            type="checkbox"
            id="isSuccessStory"
            checked={formData.isSuccessStory}
            onChange={(e) => setFormData({ ...formData, isSuccessStory: e.target.checked })}
            className="w-5 h-5 text-orange-600 border-gray-300 rounded focus:ring-orange-500"
          />
          <label htmlFor="isSuccessStory" className="text-sm font-medium text-gray-700 cursor-pointer">
            This is a success story - Share my journey and achievements with others
          </label>
        </div>

        {message.text && (
          <div
            className={`p-4 rounded-lg ${
              message.type === 'success'
                ? 'bg-green-50 text-green-800 border border-green-200'
                : 'bg-red-50 text-red-800 border border-red-200'
            }`}
          >
            {message.text}
          </div>
        )}

        <GlowButton
          type="submit"
          disabled={isSubmitting}
          icon={Send}
          className="w-full"
        >
          {isSubmitting ? 'Submitting...' : 'Submit Review'}
        </GlowButton>
      </form>
    </motion.div>
  );
};

export default ReviewForm;
