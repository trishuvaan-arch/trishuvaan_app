import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Calendar, TrendingUp, IndianRupee } from 'lucide-react';
import GlowButton from './GlowButton';

interface CourseCardProps {
  title: string;
  price: string;
  originalPrice?: string;
  description: string;
  startDate?: string;
  slug: string;
  gradient: string;
}

const CourseCard = ({
  title,
  price,
  originalPrice,
  description,
  startDate,
  slug,
  gradient,
}: CourseCardProps) => {
  const navigate = useNavigate();

  // Construct local image path from public/images/courses/
  const imagePath = `/images/coursedetail/${slug}.jpg`;

  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="glass-effect rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300"
    >
      {/* Course Image */}
      <div className="relative h-48 w-full overflow-hidden">
        <img
          src={imagePath}
          alt={title}
          className="h-full w-full object-cover"
          onError={(e) => {
            (e.target as HTMLImageElement).src = '/images/coursedetail/default.jpg'; // fallback image
          }}
        />
        <div className={`absolute top-0 left-0 h-2 w-full bg-gradient-to-r ${gradient}`} />
      </div>

      {/* Course Info */}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-gray-600 text-sm mb-4">{description}</p>

        <div className="space-y-2 mb-4">
          {startDate && (
            <div className="flex items-center text-sm text-gray-600">
              <Calendar size={16} className="mr-2" />
              <span>Starts: {startDate}</span>
            </div>
          )}
          <div className="flex items-center text-sm font-semibold text-green-600">
            <TrendingUp size={16} className="mr-2" />
            <span>Live Project-Based Learning</span>
          </div>
        </div>

        <div className="flex items-center justify-between mb-4">
          <div>
            <div className="flex items-center text-2xl font-bold gradient-text">
              <IndianRupee size={20} />
              <span>{price}</span>
            </div>
            {originalPrice && (
              <div className="flex items-center text-sm text-gray-400 line-through">
                <IndianRupee size={14} />
                <span>{originalPrice}</span>
              </div>
            )}
            <p className="text-xs text-gray-500">+ GST</p>
          </div>
        </div>

        <GlowButton
          onClick={() => navigate(`/course/${slug}`)}
          variant="primary"
          className="w-full"
        >
          View Details
        </GlowButton>
      </div>
    </motion.div>
  );
};

export default CourseCard;
