export interface Internship {
  id: string;
  title: string;
  slug: string;
  description: string;
  duration: string;
  location: string;
  stipend: string;
  requirements: string[];
  responsibilities: string[];
}

export interface Job {
  id: string;
  title: string;
  slug: string;
  location: string;
  applyBy: string;
  description: string;
  requirements: string[];
  responsibilities: string[];
  package: string;
}

export const internships: Internship[] = [
  {
    id: '1',
    title: 'AI Research Intern',
    slug: 'ai-research-intern',
    description: 'Work on cutting-edge AI research projects and contribute to building intelligent systems',
    duration: '3-6 Months',
    location: 'Remote',
    stipend: '₹3,000 - ₹5,000/month',
    requirements: [
      'Currently pursuing or completed degree in CS/IT/AI',
      'Knowledge of Python and Machine Learning basics',
      'Strong analytical and problem-solving skills',
      'Passion for AI and emerging technologies',
    ],
    responsibilities: [
      'Assist in AI research and development projects',
      'Implement and test ML models',
      'Document research findings',
      'Collaborate with the research team',
    ],
  },
  {
    id: '2',
    title: 'Web Development Intern',
    slug: 'web-development-intern',
    description: 'Build modern web applications using React, Node.js, and other cutting-edge technologies',
    duration: '3-6 Months',
    location: 'Hyderabad / Remote',
    stipend: '₹2,000 - ₹5,000/month',
    requirements: [
      'Knowledge of HTML, CSS, JavaScript',
      'Familiarity with React.js or similar frameworks',
      'Understanding of REST APIs',
      'Good communication skills',
    ],
    responsibilities: [
      'Develop and maintain web applications',
      'Write clean, maintainable code',
      'Collaborate with design and backend teams',
      'Participate in code reviews',
    ],
  },
  {
    id: '3',
    title: 'Data Analyst Intern',
    slug: 'data-analyst-intern',
    description: 'Analyze data, create dashboards, and derive insights to drive business decisions',
    duration: '3-6 Months',
    location: 'Remote',
    stipend: '₹3,000/month',
    requirements: [
      'Knowledge of SQL and Excel',
      'Familiarity with Power BI or Tableau',
      'Basic statistics knowledge',
      'Attention to detail',
    ],
    responsibilities: [
      'Analyze datasets and identify trends',
      'Create interactive dashboards',
      'Present insights to stakeholders',
      'Assist in data cleaning and preparation',
    ],
  },
  {
    id: '4',
    title: 'Automation Engineer',
    slug: 'automation-engineer',
    description: 'Develop automation scripts and tools to streamline workflows and processes',
    duration: '3-6 Months',
    location: 'Hyderabad',
    stipend: 'Free',
    requirements: [
      'Knowledge of Python or similar scripting language',
      'Understanding of automation concepts',
      'Problem-solving mindset',
      'Willingness to learn new tools',
    ],
    responsibilities: [
      'Develop automation scripts',
      'Test and debug automation workflows',
      'Document automation processes',
      'Optimize existing automation systems',
    ],
  },
];

export const jobs: Job[] = [
  {
    id: '1',
    title: 'AI Product Developer',
    slug: 'ai-product-developer',
    location: 'Hyderabad',
    applyBy: '15 Nov 2025',
    description: 'Join our core AI team to build next-generation AI products and solutions',
    requirements: [
      '2+ years of experience in AI/ML development',
      'Strong Python programming skills',
      'Experience with TensorFlow, PyTorch, or similar frameworks',
      'Knowledge of NLP, Computer Vision, or related fields',
      'Bachelor\'s or Master\'s degree in CS/AI/related field',
    ],
    responsibilities: [
      'Design and develop AI-powered applications',
      'Implement machine learning models',
      'Collaborate with cross-functional teams',
      'Optimize AI systems for performance',
      'Stay updated with latest AI trends and technologies',
    ],
    package: '₹8-12 LPA',
  },
  {
    id: '2',
    title: 'Python Developer (Fresher)',
    slug: 'python-developer-intern',
    location: 'Remote',
    applyBy: '20 Nov 2025',
    description: 'Work on Python-based projects including web development and automation',
    requirements: [
      'Strong Python programming skills',
      'Knowledge of web frameworks (Django/Flask)',
      'Understanding of databases',
      'Good problem-solving abilities',
    ],
    responsibilities: [
      'Develop Python applications',
      'Write clean, efficient code',
      'Participate in code reviews',
      'Learn from senior developers',
    ],
    package: '₹3.5 LPA',
  },
  {
    id: '3',
    title: 'Prompt Engineer',
    slug: 'prompt-engineer',
    location: 'Remote',
    applyBy: '25 Nov 2025',
    description: 'Craft effective prompts for AI systems and optimize LLM applications',
    requirements: [
      'Understanding of LLMs and AI systems',
      'Excellent written communication skills',
      'Creative thinking and problem-solving',
      'Experience with ChatGPT, Claude, or similar tools',
    ],
    responsibilities: [
      'Design and optimize prompts for various use cases',
      'Test and evaluate AI responses',
      'Document best practices',
      'Collaborate with AI development team',
    ],
    package: '₹12,000/Month',
  },
  {
    id: '4',
    title: 'Web Automation Engineer',
    slug: 'web-automation-engineer',
    location: 'Hyderabad',
    applyBy: '30 Nov 2025',
    description: 'Build automation solutions for web applications and workflows',
    requirements: [
      '1-3 years of experience in automation',
      'Proficiency in Selenium, Puppeteer, or similar tools',
      'Knowledge of JavaScript/Python',
      'Understanding of CI/CD pipelines',
    ],
    responsibilities: [
      'Develop web automation scripts',
      'Implement testing frameworks',
      'Maintain automation infrastructure',
      'Improve automation coverage',
    ],
    package: '₹4.5 LPA',
  },
];
