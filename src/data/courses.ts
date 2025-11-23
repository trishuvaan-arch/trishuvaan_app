export interface Course {
  id: string;
  title: string;
  slug: string;
  price: string;
  originalPrice?: string;
  description: string;
  startDate?: string;
  language?: string;
  duration: string;
  mode: string;
  seats: string;
  gradient: string;
  image: string;
  curriculum: string[];
  features: string[];
  faqs: Array<{ question: string; answer: string }>;
}

export const courses: Course[] = [
  {
    id: '1',
    title: 'AI Tools – Learn, Build & Automate',
    slug: 'ai-course',
    price: '349',
    originalPrice: '999',
    description: 'Practical AI Applications for Business, Marketing, and Tech Leaders',
    startDate: '20th Dec (10:30 AM)',
    language: 'English',
    duration: '3 + Hours Live',
    mode: 'For First Batch Launching offer - 399/- only',
    seats: 'Limited seats/ Weekend only',
    gradient: 'from-blue-500 to-cyan-500',
    image: '/images/coursedetail/ai-course.jpg',
    curriculum: [
      ' Who it’s for: Ideal for ambitious professionals in Marketing, HR, Finance, Project Management, Software Engineering, and emerging tech fields who want to upskill with practical, career-transforming AI knowledge.',

      ' What you’ll learn: Discover how to harness Artificial Intelligence to optimize workflows, generate insights, automate routine tasks, and make smarter business decisions with precision.',

      ' Learning Experience: Experience a next-generation cinematic learning environment — combining storytelling, interactive exercises, and project-based simulations for deeper engagement.',

      ' Tools You’ll Master: Gain real-world proficiency in powerful AI tools like ChatGPT, Gemini, Perplexity, NotebookLM, Gamma AI, CoPilot, Lovable, N8N, and Zapier — all tailored for real professional use.',

      ' Practical Projects: Build expertise through 8+ hands-on, domain-specific projects that focus on automation, AI-powered analytics, creative generation, and intelligent workflow design.',

      ' Live Mentorship: Participate live workshops led by AI practitioners who guide you through real-world applications and industry best practices.',

      ' Professional Impact: Learn to strategically apply AI in your organization to enhance efficiency, creativity, and innovation — transforming how you work and lead.',

      ' Outcomes: Become a future-ready professional with the ability to integrate AI tools into daily operations, accelerate growth, and stay ahead in the evolving digital economy.',

    ],
    features: [
      'Live Interactive Sessions',
      'Hands-on Projects',
      'Certificate of Completion',
      'Community Support',
    ],
    faqs: [
      {
        question: 'Do I need prior programming experience?',
        answer: 'No, this course is designed for beginners. We start from the basics.',
      },
      {
        question: 'Will I get a certificate?',
        answer: 'Yes, you will receive a certificate of completion after finishing the course.',
      },
    ],
  },
  {
    id: '2',
    title: 'Power BI Course',
    slug: 'power-bi-course',
    price: 'Coming Soon',
    description: 'Coming Soon',
    duration: 'Coming Soon',
    mode: 'Live Online',
    seats: 'Limited Seats/ Weekend only',
    gradient: 'from-yellow-500 to-orange-500',
    image: '/images/coursedetail/power-bi-course.jpg',
    curriculum: [
      'Coming Soon',
    ],
    features: [
      'Live Sessions with Industry Experts',
      '10+ Real-World Projects',
      'Certification',
      'Job Assistance',
    ],
    faqs: [
      {
        question: 'Is this course suitable for beginners?',
        answer: 'Yes, we cover everything from basics to advanced concepts.',
      },
      {
        question: 'Do I need to purchase Power BI?',
        answer: 'No, we will use the free Power BI Desktop version.',
      },
    ],
  },
  
  {
    id: '4',
    title: 'PythonX',
    slug: 'pythonx',
    price: 'Coming Soon',
    description: 'Coming Soon',
    duration: 'Coming Soon',
    mode: 'Live Online',
    seats: 'Limited Seats Only',
    gradient: 'from-blue-600 to-indigo-600',
    image: '/images/coursedetail/pythonx.jpg',
    curriculum: [
      'Update Soon',
    ],
    features: [
      'Live Interactive Classes',
      'Hands-on Projects',
      'Certificate',
      'Community Access',
    ],
    faqs: [
      {
        question: 'Is this suitablefor complete beginners?',
        answer: 'Yes, we start from scratch and build up to advanced topics.',
      },
    ],
  },
  {
    id: '5',
    title: 'Excel Intelligence',
    slug: 'excel-intelligence',
    price: 'Coming Soon',
    description: 'Coming Soon',
    duration: 'Coming Soon',
    mode: 'Live Online',
    seats: 'Limited Seats Only',
    gradient: 'from-emerald-500 to-green-600',
    image: '/images/coursedetail/excel-intelligence.jpg',
    curriculum: [
      'Update Soon',
    ],
    features: [
      'Live Training',
      'Practice Files',
      'Certificate',
      'Lifetime Support',
    ],
    faqs: [
      {
        question: 'What version of Excel do I need?',
        answer: 'Excel 2016 or later is recommended, but we can work with older versions too.',
      },
    ],
  },
  {
    id: '6',
    title: 'Data Analytics with Advanced AI',
    slug: 'dataverse-bootcamp',
    price: 'Coming Soon',
    description: 'Coming Soon',
    duration: 'Coming Soon',
    mode: 'Live Online',
    Days: 'Mon- Friday',
    seats: 'Limited Seats Only',
    gradient: 'from-purple-600 to-pink-600',
    image: '/images/coursedetail/dataverse-bootcamp.jpg',
    curriculum: [
      'Coming Soon',
    ],
    features: [
      'Comprehensive Training',
      'Paid Internship',
      'Industry Mentorship',
      'Job Placement Assistance',
      'Certificate + Experience Letter',
    ],
    faqs: [
      {
        question: 'Is the internship guaranteed?',
        answer: 'Yes, upon successful completion of the bootcamp, you will receive a paid internship.',
      },
      {
        question: 'What is the selection process?',
        answer: 'Limited seats available. First come, first served basis after initial screening.',
      },
    ],
  },
  {
    id: '7',
    title: 'Generative AI & Data Science Pro Bootcamp',
    slug: 'ai-fusion-bootcamp',
    price: '7,999',
    originalPrice: '29,999',
    description: 'A complete, real-world Data Science journey — from raw data to predictive intelligence',
    startDate: '22nd Dec - Weekdays (Mon to Fri)',
    duration: '12 Weeks',
    mode: 'Live Online + Internship',
    seats: 'Limited Seats',
    gradient: 'from-violet-600 to-purple-700',
    image: '/images/coursedetail/ai-fusion-bootcamp.jpg',
    curriculum: [

'Crafted by Trishuvaan EdTech, this 12-week immersive program blends cinematic storytelling, project-based simulations, and mentor-led sessions to help you design, deploy, and scale AI-driven solutions for real-world impact.',

'Who It’s For: Tailored for forward-thinking professionals, creators, and problem-solvers who want to stay ahead in the AI era — including those in Marketing, HR, Finance, Project Management, and Software Engineering.',

'Whether you’re an experienced professional or an aspiring learner, you’ll gain the ability to automate workflows, design intelligent tools, and drive innovation within your organization.',

'What You’ll Learn: Gain practical mastery over cutting-edge AI technologies through a storytelling-led, hands-on learning approach crafted for real-world application.',

'Generative and Agentic AI Mastery: Learn how to build intelligent autonomous systems using LLMs, RAG, and prompt engineering — bringing AI agents to life.',

'Python and Machine Learning Foundations: Develop strong fundamentals in Python, data science, and applied ML through cinematic lessons and guided projects.',

'NLP and Text Analytics: Explore how machines understand language — from chatbots to sentiment analysis — using modern tools like Hugging Face, LangChain, and OpenAI APIs.',

'Image and Vision AI: Build and experiment with image generation, object detection, and diffusion models to create futuristic visual applications.',

'Building AI Applications: Combine FastAPI, Streamlit, and automation tools to develop smart, production-ready AI systems that solve real business problems.',

'Deployment and MLOps: Learn how to host, monitor, and manage AI models at scale, ensuring seamless performance and reliability in live environments.',

'2-Month Internship: Gain hands-on experience through live projects guided by AI mentors — simulating real-world scenarios that strengthen your professional portfolio.',

'Career Transformation: Graduate as an AI-powered professional ready to innovate, automate, and lead in your domain with confidence and creativity.',

'Certification: Earn an industry-recognized certificate from Trishuvaan EdTech that validates your AI expertise and enhances your career prospects.',

    ],
    features: [
      'Cutting-Edge AI Training',
      'Paid Internship',
      'Industry Projects',
      'Job Placement Support',
      'Certificate + Experience Letter',
    ],
    faqs: [
      {
        question: 'Do I need ML experience?',
        answer: 'Basic Python knowledge is required. We will teach ML from scratch.',
      },
      {
        question: 'What kind of projects will I work on?',
        answer: 'Real-world AI applications including chatbots, image generation, and automation.',
      },
    ],
  },
];
