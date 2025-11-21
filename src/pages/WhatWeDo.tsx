import { motion } from 'framer-motion';
import NeuralBackground from '../components/NeuralBackground';
import {
  Brain,
  Bot,
  Eye,
  BarChart,
  Sparkles,
  Zap,
  Server,
  Layers,
} from 'lucide-react';

// Local images from public/images/what_we_do
const BG_NETWORK = '/images/what_we_do/bg-network.jpg';
const IMG_TRISHUBOT = '/images/what_we_do/trishubot.jpg';
const IMG_AUTOBRAIN = '/images/what_we_do/autobrain.jpg';
const IMG_VISIONAI = '/images/what_we_do/visionai.jpg';

const WhatWeDo = () => {
  return (
    <div className="min-h-screen py-20 relative">
      <NeuralBackground />
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">What We Do</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
            Trishuvaan specializes in building advanced AI systems and empowering the next
            generation of AI professionals through cutting-edge education.
          </p>
          <p className="text-2xl font-semibold gradient-text italic">
            "We don't just use AI — we create it."
          </p>
        </motion.div>

        {/* Corporate Intro */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="glass-effect rounded-2xl p-8 mb-12"
        >
          <p className="text-lg text-gray-700 leading-relaxed">
            <strong>At Trishuvaan Pvt Ltd,</strong> we design, engineer, and deploy advanced
            AI-powered software products that help organizations automate operations, enhance
            decision-making, and scale with intelligence. Our work goes far beyond experimentation —
            we build real, production-ready AI systems that deliver measurable business impact.
          </p>
        </motion.div>

        {/* Hybrid Sections — each section header + 2-card grid */}
        {/* 1) AI Product Engineering */}
        <section className="mb-12">
          <motion.h2
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-6 gradient-text text-center"
          >
            AI Product Engineering
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.05 }}
              viewport={{ once: true }}
              className="glass-effect rounded-xl p-6 flex gap-4 items-start"
            >
              <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-br from-blue-500 to-violet-500">
                <Brain className="text-white" size={22} />
              </div>
              <div>
                <h3 className="font-semibold text-xl mb-2">Design & Architecture</h3>
                <p className="text-gray-600">
                  We design and architect intelligent digital products that combine automation,
                  analytics, machine learning, and user-centric interfaces. From idea to deployment,
                  we build scalable, cloud-ready AI software tailored for enterprise use.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="glass-effect rounded-xl p-6 flex gap-4 items-start"
            >
              <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-br from-indigo-500 to-cyan-500">
                <Layers className="text-white" size={22} />
              </div>
              <div>
                <h3 className="font-semibold text-xl mb-2">Cloud-native Deployment</h3>
                <p className="text-gray-600">
                  We deliver production-ready AI stacks with cloud-native best practices — CI/CD,
                  scalable inference, monitoring, and cost-optimized deployments for high-availability
                  enterprise footprints.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 2) Predictive & Workflow Automation */}
        <section className="mb-12">
          <motion.h2
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-6 gradient-text text-center"
          >
            Predictive & Workflow Automation
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.05 }}
              viewport={{ once: true }}
              className="glass-effect rounded-xl p-6 flex gap-4 items-start"
            >
              <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-br from-violet-500 to-purple-500">
                <Zap className="text-white" size={22} />
              </div>
              <div>
                <h3 className="font-semibold text-xl mb-2">Automation Engines</h3>
                <p className="text-gray-600">
                  We develop systems that automate repetitive tasks, eliminate manual work, and
                  forecast outcomes using predictive intelligence. Our automation engines help
                  companies achieve faster processes, zero human errors, real-time insights, and
                  cost reduction at scale.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="glass-effect rounded-xl p-6 flex gap-4 items-start"
            >
              <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-br from-emerald-500 to-teal-500">
                <BarChart className="text-white" size={22} />
              </div>
              <div>
                <h3 className="font-semibold text-xl mb-2">Predictive Analytics</h3>
                <p className="text-gray-600">
                  Build predictive pipelines and dashboards that anticipate demand, detect anomalies,
                  and prioritize actions — enabling decision-makers with timely, data-driven
                  intelligence.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 3) Computer Vision Solutions */}
        <section className="mb-12">
          <motion.h2
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-6 gradient-text text-center"
          >
            Computer Vision Solutions
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.05 }}
              viewport={{ once: true }}
              className="glass-effect rounded-xl p-6 flex gap-4 items-start"
            >
              <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-br from-pink-500 to-rose-500">
                <Eye className="text-white" size={22} />
              </div>
              <div>
                <h3 className="font-semibold text-xl mb-2">Visual Intelligence</h3>
                <p className="text-gray-600">
                  We build systems for face/gesture recognition, object & defect detection,
                  document scanning & OCR, and surveillance solutions. These power manufacturing,
                  retail, security, and healthcare use cases.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="glass-effect rounded-xl p-6 flex gap-4 items-start"
            >
              <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-br from-indigo-500 to-blue-500">
                <Sparkles className="text-white" size={22} />
              </div>
              <div>
                <h3 className="font-semibold text-xl mb-2">Quality & Inspection</h3>
                <p className="text-gray-600">
                  Deploy vision pipelines for automated quality control, defect detection, and
                  process monitoring — reducing downtime and improving throughput.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 4) Custom Enterprise AI Development */}
        <section className="mb-12">
          <motion.h2
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-6 gradient-text text-center"
          >
            Custom Enterprise AI Development
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.05 }}
              viewport={{ once: true }}
              className="glass-effect rounded-xl p-6 flex gap-4 items-start"
            >
              <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-br from-yellow-500 to-orange-500">
                <Server className="text-white" size={22} />
              </div>
              <div>
                <h3 className="font-semibold text-xl mb-2">Tailored Enterprise Apps</h3>
                <p className="text-gray-600">
                  End-to-end AI solutions: intelligent dashboards, workflow platforms, and analytics
                  systems designed to integrate seamlessly with your ERP/CRM/operations stack.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="glass-effect rounded-xl p-6 flex gap-4 items-start"
            >
              <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-br from-violet-500 to-purple-500">
                <Bot className="text-white" size={22} />
              </div>
              <div>
                <h3 className="font-semibold text-xl mb-2">Systems Integration</h3>
                <p className="text-gray-600">
                  We ensure robust integration with legacy systems, data lakes, and business
                  processes — enabling frictionless adoption and measurable ROI.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 5) Generative AI & LLM Systems */}
        <section className="mb-12">
          <motion.h2
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-6 gradient-text text-center"
          >
            Generative AI & Large Language Models
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.05 }}
              viewport={{ once: true }}
              className="glass-effect rounded-xl p-6 flex gap-4 items-start"
            >
              <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-br from-cyan-500 to-blue-500">
                <Sparkles className="text-white" size={22} />
              </div>
              <div>
                <h3 className="font-semibold text-xl mb-2">LLMs & NLP Pipelines</h3>
                <p className="text-gray-600">
                  We build chat-based assistants, autonomous knowledge systems, and NLP pipelines to
                  automate support, content generation, and advanced analytics.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="glass-effect rounded-xl p-6 flex gap-4 items-start"
            >
              <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-br from-indigo-500 to-violet-500">
                <Brain className="text-white" size={22} />
              </div>
              <div>
                <h3 className="font-semibold text-xl mb-2">Generative Solutions</h3>
                <p className="text-gray-600">
                  Deploy LLMs responsibly for content automation, summarization, and intelligent
                  decision support — with safety, observability, and fine-tuning for enterprise needs.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 6) Industry-ready AI Integrations */}
        <section className="mb-16">
          <motion.h2
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-6 gradient-text text-center"
          >
            Industry-ready AI Integrations
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.05 }}
              viewport={{ once: true }}
              className="glass-effect rounded-xl p-6 flex gap-4 items-start"
            >
              <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-br from-blue-600 to-cyan-500">
                <Bot className="text-white" size={22} />
              </div>
              <div>
                <h3 className="font-semibold text-xl mb-2">Seamless Integrations</h3>
                <p className="text-gray-600">
                  We integrate AI into ERP, CRM, HRM, finance and operational tools to make them
                  smarter and more efficient. No prototypes — only production-ready integrations
                  that drive business outcomes.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="glass-effect rounded-xl p-6 flex gap-4 items-start"
            >
              <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-br from-emerald-500 to-teal-500">
                <BarChart className="text-white" size={22} />
              </div>
              <div>
                <h3 className="font-semibold text-xl mb-2">Operational Impact</h3>
                <p className="text-gray-600">
                  We focus on measurable impact: speed, accuracy, cost reduction and real-time
                  insights. Our solutions are built for production and measurable ROI.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Innovations (visual cards retained) */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-center mb-12 gradient-text">Our AI Innovations</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-effect rounded-xl p-8 hover:shadow-2xl transition-all duration-300">
              <div className="w-full h-48 mb-6 rounded-lg overflow-hidden">
                <img src={IMG_TRISHUBOT} alt="TrishuBot" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-2xl font-bold mb-3 gradient-text">TrishuBot</h3>
              <p className="text-gray-600">
                An intelligent AI assistant powered by advanced NLP that understands context,
                remembers conversations, and provides human-like responses across multiple domains.
              </p>
            </div>

            <div className="glass-effect rounded-xl p-8 hover:shadow-2xl transition-all duration-300">
              <div className="w-full h-48 mb-6 rounded-lg overflow-hidden">
                <img src={IMG_AUTOBRAIN} alt="AutoBrain" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-2xl font-bold mb-3 gradient-text">AutoBrain</h3>
              <p className="text-gray-600">
                Enterprise automation platform that uses AI to optimize workflows, predict bottlenecks,
                and automate complex business processes with minimal human intervention.
              </p>
            </div>

            <div className="glass-effect rounded-xl p-8 hover:shadow-2xl transition-all duration-300">
              <div className="w-full h-48 mb-6 rounded-lg overflow-hidden">
                <img src={IMG_VISIONAI} alt="VisionAI" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-2xl font-bold mb-3 gradient-text">VisionAI</h3>
              <p className="text-gray-600">
                Computer vision platform for image analysis, object detection, and visual intelligence
                applications. Powers everything from security systems to quality control.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Technologies */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="glass-effect rounded-2xl p-12 text-center mb-20"
        >
          <h2 className="text-3xl font-bold mb-8 gradient-text">Technologies We Master</h2>

          <div className="flex flex-wrap justify-center gap-4">
            {[
              'Python',
              'TensorFlow',
              'PyTorch',
              'OpenAI GPT',
              'Computer Vision',
              'NLP',
              'Machine Learning',
              'Deep Learning',
              'Data Analytics',
              'Cloud AI',
              'LangChain',
              'Hugging Face',
            ].map((tech, i) => (
              <motion.span
                key={i}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: i * 0.03 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-violet-500 text-white rounded-full font-medium shadow-lg"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 text-center"
        >
          <div className="glass-effect rounded-2xl p-12 bg-gradient-to-br from-blue-50 to-violet-50">
            <Brain className="w-16 h-16 mx-auto mb-6 text-violet-600" />
            <h2 className="text-3xl font-bold mb-4 gradient-text">Building Tomorrow's Intelligence, Today</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From research labs to production systems, Trishuvaan delivers industry-grade AI
              solutions that create measurable impact. If you want a pilot, integration, or full
              product roadmap — we build it, ship it, and scale it.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default WhatWeDo;
