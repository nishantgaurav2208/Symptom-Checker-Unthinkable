import { motion } from 'framer-motion';
import { 
  HeartIcon, 
  ExclamationTriangleIcon, 
  BoltIcon, 
  BookOpenIcon, 
  ShieldCheckIcon, 
  ClockIcon,
  PencilSquareIcon, 
  SparklesIcon, 
  LightBulbIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';
import { FaGithub, FaLinkedin, FaGlobe, FaStar } from 'react-icons/fa6';
import '../styles/home.css';
import { useNavigate } from "react-router-dom";


const home = () => {
  const handleCTAClick = () => {
    window.location.href = '/checker';
  };

  const handleGitHubClick = () => {
    window.open('https://github.com/nishantgaurav2208', '_blank');
  };

  const features = [
    {
      title: 'Instant Symptom Analysis',
      description: 'AI-powered analysis that quickly processes your symptoms and provides educational insights.',
      Icon: BoltIcon,
      color: 'from-purple-500 to-pink-500',
      delay: 0.1
    },
    {
      title: 'Educational Recommendations',
      description: 'Learn about possible conditions and get research-backed information for better understanding.',
      Icon: BookOpenIcon,
      color: 'from-blue-500 to-cyan-500',
      delay: 0.2
    },
    {
      title: 'Privacy First Approach',
      description: 'Your health data stays secure. We never store personal medical information.',
      Icon: ShieldCheckIcon,
      color: 'from-green-500 to-emerald-500',
      delay: 0.3
    },
    {
      title: 'Query History',
      description: 'Track your previous symptom checks and monitor your health journey over time.',
      Icon: ClockIcon,
      color: 'from-orange-500 to-red-500',
      delay: 0.4
    },
  ];

  const steps = [
    {
      title: 'Describe Your Symptoms',
      description: 'Share what you are experiencing in simple, everyday language. Be as detailed as you like.',
      Icon: PencilSquareIcon,
      step: '01'
    },
    {
      title: 'AI Analysis & Insights',
      description: 'Our advanced AI processes your input and provides educational information about possible conditions.',
      Icon: SparklesIcon,
      step: '02'
    },
    {
      title: 'Get Actionable Insights',
      description: 'Receive clear, educational recommendations and next steps for your health journey.',
      Icon: LightBulbIcon,
      step: '03'
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="floating-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
        <div className="shape shape-4"></div>
      </div>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-container">
          <motion.div 
            className="hero-content"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.div 
              className="badge"
              variants={itemVariants}
            >
              <FaStar className="star-icon" />
              Trusted by thousands for educational health insights
            </motion.div>
            
            <motion.h1 variants={itemVariants}>
              Understand Your Health
              <span className="gradient-text"> Better</span>
            </motion.h1>
            
            <motion.p variants={itemVariants}>
              Get AI-powered educational insights about your symptoms. Learn about possible conditions 
              and make informed decisions about your health journey. Always consult healthcare professionals for medical advice.
            </motion.p>
            
            <motion.div 
              className="hero-buttons"
              variants={itemVariants}
            >
              <button
                onClick={handleCTAClick}
                className="btn-primary"
              >
                <span>Check Symptoms Now</span>
                <ArrowRightIcon className="arrow-icon" />
                <div className="btn-shine"></div>
              </button>
              
              <button
                onClick={handleGitHubClick}
                className="btn-github"
              >
                <FaGithub className="github-icon" />
                <span>GitHub</span>
                
              </button>
            </motion.div>

            <motion.div 
              className="hero-stats"
              variants={itemVariants}
            >
            
              <div className="stat">
                <div className="stat-number">98%</div>
                <div className="stat-label">Satisfaction</div>
              </div>
              <div className="stat">
                <div className="stat-number">24/7</div>
                <div className="stat-label">Available</div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          >
            <div className="floating-card card-1">
              <HeartIcon className="card-icon" />
              <div className="card-text">Symptom Analysis</div>
            </div>
            <div className="floating-card card-2">
              <SparklesIcon className="card-icon" />
              <div className="card-text">AI Powered</div>
            </div>
            <div className="floating-card card-3">
              <ShieldCheckIcon className="card-icon" />
              <div className="card-text">Secure & Private</div>
            </div>
            <div className="main-visual">
              <div className="pulse-ring"></div>
              <div className="pulse-ring ring-2"></div>
              <div className="visual-content">
                <HeartIcon className="main-icon" />
              </div>
            </div>
          </motion.div>
        </div>
        
        <div className="scroll-indicator">
          <div className="scroll-line"></div>
          <span>Scroll to explore</span>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="section-container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">
              Why Choose Our
              <span className="gradient-text"> Symptom Checker</span>?
            </h2>
            <p className="section-description">
              Experience the future of educational health insights with our advanced AI-powered platform
            </p>
          </motion.div>

          <div className="features-grid">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className={`feature-card ${feature.color}`}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.6, 
                  delay: feature.delay,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                viewport={{ once: true }}
              >
                <div className="feature-glow"></div>
                <div className="feature-icon-wrapper">
                  <feature.Icon className="feature-icon" />
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
                <div className="feature-number">0{index + 1}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works-section">
        <div className="section-container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">
              How It Works in
              <span className="gradient-text"> 3 Simple Steps</span>
            </h2>
            <p className="section-description">
              Get educational health insights in minutes with our streamlined process
            </p>
          </motion.div>

          <div className="steps-container">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                className="step-card"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 100
                }}
                viewport={{ once: true }}
              >
                <div className="step-number">{step.step}</div>
                <div className="step-icon-wrapper">
                  <step.Icon className="step-icon" />
                </div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
                <div className="step-connector"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* GitHub CTA Section */}
      <section className="github-section">
        <motion.div 
          className="github-cta"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="github-content">
            <FaGithub className="github-large-icon" />
            <h3>Love Our Symptom Checker?</h3>
            <p>Star us on GitHub and help improve educational health tools for everyone!</p>
            <button onClick={handleGitHubClick} className="btn-github-large">
              <FaGithub />
              <span>Star on GitHub</span>
              <div className="github-shine"></div>
            </button>
           
              
           
          </div>
        </motion.div>
      </section>

      {/* Disclaimer Section */}
      <motion.section 
        className="disclaimer-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="disclaimer-container">
          <div className="disclaimer-content">
            <div className="disclaimer-icon">
              <ExclamationTriangleIcon />
            </div>
            <div className="disclaimer-text">
              <h4>Important Medical Disclaimer</h4>
              <p>
                This symptom checker is for <strong>educational purposes only</strong> and is not a substitute for 
                professional medical advice, diagnosis, or treatment. Always seek the advice of your physician 
                or other qualified health provider with any questions you may have regarding a medical condition.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-content">
            <div className="footer-brand">
              <h3>Healthcare Symptom Checker</h3>
              <p>Empowering health education through AI technology</p>
              <div className="footer-social">
                <a href="https://github.com/nishantgaurav2208" className="social-link">
                  <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/nishant-gaurav-08019b275/" className="social-link">
                  <FaLinkedin />
                </a>
               
              </div>
            </div>
            
            <div className="footer-links">
              <div className="footer-column">
                <h4>Product</h4>
                <a href="/checker">Symptom Checker</a>
                <a href="/features">Features</a>
                <a href="/api">API</a>
              </div>
              <div className="footer-column">
                <h4>Resources</h4>
                <a href="/docs">Documentation</a>
                <a href="/blog">Blog</a>
                <a href="/contact">Help Center</a>
              </div>
              <div className="footer-column">
                <h4>Company</h4>
                <a href="/about">About</a>
                <a href="/contact">Contact</a>
                <a href="/privacy">Privacy</a>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>&copy; 2024 Healthcare Symptom Checker. Open source and built for education.</p>
            <div className="footer-made-with">
              Made with <HeartIcon className="heart-icon" /> for better health education
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default home;
