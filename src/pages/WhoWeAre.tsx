import { motion } from "framer-motion";
import NeuralBackground from "../components/NeuralBackground";
import { Target, Eye, Users, Lightbulb, Rocket, Award } from "lucide-react";

// Images
const OUR_STORY_IMAGE = "/images/who_we_are/our-story.jpg";
const LEADER_IMAGE = "/images/who_we_are/leadership.jpg";

// Team Members
const leader = {
  name: "Govind",
  role: "AI Engineer (Team Lead)",
  expertise:
    "Artificial Intelligence, Machine Learning, Product Development",
  image: LEADER_IMAGE,
};

const employees = [
  {
    name: "Rohit Sharma",
    role: "Backend Developer",
    expertise: "Node.js, APIs, Databases",
    image: "/images/who_we_are/employee1.jpg",
  },
  {
    name: "Priya Nair",
    role: "Data Analyst",
    expertise: "Python, SQL, Visualization",
    image: "/images/who_we_are/employee2.jpg",
  },
  {
    name: "Sneha Reddy",
    role: "ML Engineer",
    expertise: "ML Models, Deep Learning, Automation",
    image: "/images/who_we_are/employee3.jpg",
  },
];

// Values Section Icons
const values = [
  {
    icon: Lightbulb,
    title: "Innovation First",
    description:
      "We constantly push boundaries and explore new frontiers in AI technology.",
  },
  {
    icon: Users,
    title: "Community Driven",
    description:
      "Building a strong community of AI enthusiasts, learners, and practitioners.",
  },
  {
    icon: Rocket,
    title: "Rapid Execution",
    description:
      "From idea to implementation, we move fast and deliver exceptional results.",
  },
  {
    icon: Award,
    title: "Excellence Always",
    description:
      "We maintain the highest standards in everything we build and teach.",
  },
];

const WhoWeAre = () => {
  return (
    <div className="min-h-screen py-20 relative">
      <NeuralBackground />
      <div className="container mx-auto px-4 relative z-10">
        
        {/* HEADER */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
            Who We Are
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A revolution in Artificial Intelligence innovation
          </p>
        </motion.div>

        {/* 🔥 NEW CORPORATE INTRODUCTION */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-effect rounded-2xl p-10 mb-20 leading-relaxed text-gray-700"
        >
          <h2 className="text-3xl font-bold mb-6 gradient-text">
            Trishuvaan Pvt Ltd — The AI Product Company
          </h2>

          <p className="text-lg mb-4">
            Trishuvaan Pvt Ltd is a deep-tech AI innovation and product
            development company driven by engineers, researchers, and visionary
            creators passionate about building the future of intelligent
            technology.
          </p>

          <p className="text-lg mb-4">
            We believe artificial intelligence should not remain a concept — it
            should be a powerful tool that transforms businesses, industries,
            and everyday life.
          </p>

          <p className="text-lg mb-4">
            Our mission is to build next-gen AI systems that solve real
            challenges, automate complex processes, and enable organizations to
            operate smarter than ever before.
          </p>

          {/* What Defines Us */}
          <h2 className="text-3xl font-bold mt-10 mb-4 gradient-text">
            What Defines Us
          </h2>

          <ul className="list-disc pl-6 text-lg space-y-3">
            <li>
              <strong>Innovation First:</strong> We constantly push
              technological boundaries, creating breakthrough AI products that
              redefine what’s possible.
            </li>
            <li>
              <strong>Real-World Impact:</strong> Every solution we build is
              designed for real businesses, real customers, and real results —
              not theoretical research.
            </li>
            <li>
              <strong>Fast Execution:</strong> From ideation to deployment, we
              move fast with a startup mindset and enterprise-grade precision.
            </li>
            <li>
              <strong>Engineering Excellence:</strong> Our team follows
              world-class engineering standards to deliver robust, scalable, and
              reliable AI systems.
            </li>
          </ul>

          {/* Vision */}
          <h2 className="text-3xl font-bold mt-10 mb-4 gradient-text">
            Our Vision
          </h2>
          <p className="text-lg mb-4">
            To build India’s most powerful AI product ecosystem — enabling
            companies to innovate faster, make smarter decisions, and unlock new
            possibilities through intelligent automation.
          </p>

          {/* Mission */}
          <h2 className="text-3xl font-bold mt-10 mb-4 gradient-text">
            Our Mission
          </h2>
          <p className="text-lg mb-4">
            To make AI accessible, practical, and transformational for every
            business — from emerging startups to global enterprises.
          </p>

          {/* Identity */}
          <h2 className="text-3xl font-bold mt-10 mb-4 gradient-text">
            The Trishuvaan Identity
          </h2>

          <ul className="list-disc pl-6 text-lg space-y-2">
            <li>A Product-Based AI Company</li>
            <li>An AI Automation & Intelligence Provider</li>
            <li>An Enterprise AI Engineering Partner</li>
          </ul>

          <p className="text-lg mt-4">
            And along with these, we operate <strong>Trishuvaan EdTech</strong>{" "}
            as a separate educational division — ensuring Google clearly
            recognizes Trishuvaan Pvt Ltd as a software company, not a training
            institute.
          </p>
        </motion.div>

        {/* OUR STORY */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          className="glass-effect rounded-2xl p-12 mb-20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <img
              src={OUR_STORY_IMAGE}
              className="rounded-xl shadow-2xl"
              alt="Our Story"
            />

            <div>
              <h2 className="text-3xl font-bold mb-6 gradient-text">Our Story</h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Trishuvaan represents a revolution in Artificial Intelligence
                innovation. We believe in building an AI-empowered generation
                capable of designing intelligent systems and driving innovation
                across industries.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                Our team includes data scientists, developers, and engineers
                shaping the future of AI technology. We combine cutting-edge
                research with practical, real-world implementation.
              </p>
            </div>
          </div>
        </motion.div>

        {/* VALUES */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-center mb-12 gradient-text">
            Our Values
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, i) => (
              <motion.div
                key={i}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="glass-effect rounded-xl p-6 text-center hover:shadow-2xl transition-all duration-300"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-violet-500 rounded-full mx-auto mb-4 flex items-center justify-center glow-effect">
                  <value.icon className="text-white" size={24} />
                </div>
                <h3 className="font-bold text-xl mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* TEAM GRID */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-center mb-12 gradient-text">
            Meet Our Team
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            
            {/* LEADER */}
            <motion.div
              className="glass-effect rounded-2xl p-8 flex flex-col items-center col-span-1 lg:col-span-2"
              initial={{ scale: 0.85, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="relative w-56 h-56 rounded-full overflow-hidden mb-6">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-full h-full object-cover rounded-full border-4 border-purple-500 shadow-xl"
                />
              </div>
              <h3 className="text-3xl font-bold">{leader.name}</h3>
              <p className="text-xl text-orange-600 font-semibold">{leader.role}</p>
              <p className="text-gray-600 text-center mt-2">{leader.expertise}</p>
            </motion.div>

            {/* EMPLOYEES */}
            {employees.map((emp, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0.85, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: (i + 1) * 0.1 }}
                viewport={{ once: true }}
                className="glass-effect rounded-2xl p-6 flex flex-col items-center hover:shadow-xl transition-all"
              >
                <div className="w-40 h-40 rounded-full overflow-hidden mb-4 border-4 border-blue-500 shadow-lg">
                  <img
                    src={emp.image}
                    alt={emp.name}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <h3 className="text-xl font-bold">{emp.name}</h3>
                <p className="text-blue-600 font-semibold">{emp.role}</p>
                <p className="text-gray-600 text-center text-sm mt-2">
                  {emp.expertise}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default WhoWeAre;
