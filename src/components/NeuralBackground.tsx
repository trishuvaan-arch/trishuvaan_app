const NeuralBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="blueOrangeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2563eb" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#f97316" stopOpacity="0.3" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        <line x1="10%" y1="10%" x2="30%" y2="25%" stroke="url(#blueOrangeGradient)" strokeWidth="1" opacity="0.6" filter="url(#glow)" />
        <line x1="30%" y1="25%" x2="50%" y2="15%" stroke="url(#blueOrangeGradient)" strokeWidth="1" opacity="0.6" filter="url(#glow)" />
        <line x1="50%" y1="15%" x2="70%" y2="30%" stroke="url(#blueOrangeGradient)" strokeWidth="1" opacity="0.6" filter="url(#glow)" />
        <line x1="70%" y1="30%" x2="90%" y2="20%" stroke="url(#blueOrangeGradient)" strokeWidth="1" opacity="0.6" filter="url(#glow)" />

        <line x1="15%" y1="40%" x2="35%" y2="55%" stroke="url(#blueOrangeGradient)" strokeWidth="1" opacity="0.6" filter="url(#glow)" />
        <line x1="35%" y1="55%" x2="55%" y2="45%" stroke="url(#blueOrangeGradient)" strokeWidth="1" opacity="0.6" filter="url(#glow)" />
        <line x1="55%" y1="45%" x2="75%" y2="60%" stroke="url(#blueOrangeGradient)" strokeWidth="1" opacity="0.6" filter="url(#glow)" />
        <line x1="75%" y1="60%" x2="95%" y2="50%" stroke="url(#blueOrangeGradient)" strokeWidth="1" opacity="0.6" filter="url(#glow)" />

        <line x1="20%" y1="70%" x2="40%" y2="85%" stroke="url(#blueOrangeGradient)" strokeWidth="1" opacity="0.6" filter="url(#glow)" />
        <line x1="40%" y1="85%" x2="60%" y2="75%" stroke="url(#blueOrangeGradient)" strokeWidth="1" opacity="0.6" filter="url(#glow)" />
        <line x1="60%" y1="75%" x2="80%" y2="90%" stroke="url(#blueOrangeGradient)" strokeWidth="1" opacity="0.6" filter="url(#glow)" />

        <line x1="10%" y1="10%" x2="15%" y2="40%" stroke="url(#blueOrangeGradient)" strokeWidth="1" opacity="0.5" filter="url(#glow)" />
        <line x1="30%" y1="25%" x2="35%" y2="55%" stroke="url(#blueOrangeGradient)" strokeWidth="1" opacity="0.5" filter="url(#glow)" />
        <line x1="50%" y1="15%" x2="55%" y2="45%" stroke="url(#blueOrangeGradient)" strokeWidth="1" opacity="0.5" filter="url(#glow)" />
        <line x1="70%" y1="30%" x2="75%" y2="60%" stroke="url(#blueOrangeGradient)" strokeWidth="1" opacity="0.5" filter="url(#glow)" />
        <line x1="90%" y1="20%" x2="95%" y2="50%" stroke="url(#blueOrangeGradient)" strokeWidth="1" opacity="0.5" filter="url(#glow)" />

        <line x1="15%" y1="40%" x2="20%" y2="70%" stroke="url(#blueOrangeGradient)" strokeWidth="1" opacity="0.5" filter="url(#glow)" />
        <line x1="35%" y1="55%" x2="40%" y2="85%" stroke="url(#blueOrangeGradient)" strokeWidth="1" opacity="0.5" filter="url(#glow)" />
        <line x1="55%" y1="45%" x2="60%" y2="75%" stroke="url(#blueOrangeGradient)" strokeWidth="1" opacity="0.5" filter="url(#glow)" />

        <circle cx="10%" cy="10%" r="4" fill="#2563eb" opacity="0.8" filter="url(#glow)" />
        <circle cx="30%" cy="25%" r="5" fill="#8b5cf6" opacity="0.8" filter="url(#glow)" />
        <circle cx="50%" cy="15%" r="4" fill="#f97316" opacity="0.8" filter="url(#glow)" />
        <circle cx="70%" cy="30%" r="5" fill="#2563eb" opacity="0.8" filter="url(#glow)" />
        <circle cx="90%" cy="20%" r="4" fill="#f97316" opacity="0.8" filter="url(#glow)" />

        <circle cx="15%" cy="40%" r="4" fill="#8b5cf6" opacity="0.8" filter="url(#glow)" />
        <circle cx="35%" cy="55%" r="5" fill="#2563eb" opacity="0.8" filter="url(#glow)" />
        <circle cx="55%" cy="45%" r="4" fill="#f97316" opacity="0.8" filter="url(#glow)" />
        <circle cx="75%" cy="60%" r="5" fill="#8b5cf6" opacity="0.8" filter="url(#glow)" />
        <circle cx="95%" cy="50%" r="4" fill="#2563eb" opacity="0.8" filter="url(#glow)" />

        <circle cx="20%" cy="70%" r="4" fill="#f97316" opacity="0.8" filter="url(#glow)" />
        <circle cx="40%" cy="85%" r="5" fill="#2563eb" opacity="0.8" filter="url(#glow)" />
        <circle cx="60%" cy="75%" r="4" fill="#8b5cf6" opacity="0.8" filter="url(#glow)" />
        <circle cx="80%" cy="90%" r="5" fill="#f97316" opacity="0.8" filter="url(#glow)" />
      </svg>
    </div>
  );
};

export default NeuralBackground;
