import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Star, User, Award } from 'lucide-react';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

interface Review {
  id: string;
  user_name: string;
  user_type: string;
  rating: number;
  review_text: string;
  course_name: string | null;
  created_at: string;
  is_success_story: boolean;
}

const ReviewsList = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    try {
      const { data, error } = await supabase
        .from('reviews')
        .select('*')
        .eq('is_approved', true)
        .order('created_at', { ascending: false })
        .limit(20);

      if (error) throw error;
      setReviews(data || []);
    } catch (error) {
      console.error('Error fetching reviews:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="text-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
        <p className="mt-4 text-gray-600">Loading reviews...</p>
      </div>
    );
  }

  if (reviews.length === 0) {
    return (
      <div className="text-center py-12 glass-effect rounded-2xl">
        <p className="text-gray-600 text-lg">No reviews yet. Be the first to share your experience!</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {reviews.map((review, index) => (
        <motion.div
          key={review.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className={`glass-effect rounded-xl p-6 hover:shadow-2xl transition-all duration-300 ${
            review.is_success_story ? 'border-2 border-orange-400 bg-gradient-to-br from-orange-50/50 to-transparent' : ''
          }`}
        >
          {review.is_success_story && (
            <div className="flex items-center gap-2 mb-3 bg-orange-100 px-3 py-1 rounded-full w-fit">
              <Award className="text-orange-600" size={16} />
              <span className="text-xs font-bold text-orange-600 uppercase">Success Story</span>
            </div>
          )}
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-orange-500 rounded-full flex items-center justify-center">
                <User className="text-white" size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg">{review.user_name}</h3>
                <p className="text-sm text-gray-500 capitalize">{review.user_type}</p>
              </div>
            </div>
          </div>

          <div className="flex gap-1 mb-3">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                size={18}
                className={
                  star <= review.rating
                    ? 'fill-yellow-400 text-yellow-400'
                    : 'text-gray-300'
                }
              />
            ))}
          </div>

          {review.course_name && (
            <p className="text-sm font-semibold text-blue-600 mb-2">
              Course: {review.course_name}
            </p>
          )}

          <p className="text-gray-700 leading-relaxed">{review.review_text}</p>

          <p className="text-xs text-gray-400 mt-4">
            {new Date(review.created_at).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </p>
        </motion.div>
      ))}
    </div>
  );
};

export default ReviewsList;
