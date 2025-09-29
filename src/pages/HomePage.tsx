import React, { useEffect, useRef } from 'react';
// Note: In a real project, you would use 'react-router-dom', but for this self-contained example,
// we'll use regular 'a' tags to avoid breaking the preview.
// import { Link } from 'react-router-dom';
import { 
  CheckCircle, 
  Award, 
  Users, 
  TrendingUp, 
  Phone, 
  Mail, 
  MapPin,
  Play
} from 'lucide-react';
import { motion, useInView, useAnimation, animate } from "framer-motion";

// Reusable animated counter for statistics
function AnimatedCounter({ value, isPercentage = false }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const element = ref.current;
      if (element) {
        // Start animation from 0 to the target value
        const controls = animate(0, value, {
          duration: 2,
          delay: 0.3,
          ease: "easeOut",
          onUpdate(latest) {
            element.textContent = Math.round(latest) + (isPercentage ? "%" : "+");
          }
        });
        return () => controls.stop();
      }
    }
  }, [isInView, value, isPercentage]);

  // Display the final value with a "+" or "%" for non-JS users or after animation
  return <span ref={ref}>{value}{isPercentage ? "%" : "+"}</span>;
}

// Dedicated Video Player component
const VideoPlayer = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // We use a timeout to ensure the video element is ready
    const timeoutId = setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.play().catch(error => {
          // Log any errors that occur if autoplay is blocked
          console.error("Video autoplay was prevented:", error);
        });
      }
    }, 100); // A small delay can help

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <video
      ref={videoRef}
      className="w-full aspect-[16/9] rounded-lg shadow-2xl"
      controls
      muted
      loop
      playsInline
      
    >
      {/* IMPORTANT: Replace 'your-video-name.mp4' with the actual filename of your video.
        Make sure your video file is in the 'public' folder.
      */}
      <source src="/video.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};


const HomePage = () => {
  // Framer Motion variants for animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    },
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans">
      <div className="flex-grow">
        {/* Hero Section */}
        <section className="bg-[#194048] text-white py-24 md:py-32 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.h1 
                className="text-4xl md:text-6xl font-bold mb-6 tracking-tight"
                variants={itemVariants}
              >
                Professional Accounting Services
              </motion.h1>
              <motion.p 
                className="text-xl md:text-2xl mb-10 text-[#C9CAC4] max-w-3xl mx-auto"
                variants={itemVariants}
              >
                Streamline your finances with expert accounting solutions tailored for your business success.
              </motion.p>
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center"
                variants={itemVariants}
              >
                <motion.a
                  href="#contact"
                  className="inline-block bg-white text-[#194048] px-8 py-4 rounded-lg font-semibold shadow-lg transform transition-transform duration-300"
                  whileHover={{ scale: 1.05, y: -4 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Started Today
                </motion.a>
                <motion.a
                  href="#services"
                  className="inline-block border-2 border-white text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-300"
                  whileHover={{ scale: 1.05, y: -4, backgroundColor: 'white', color: '#194048' }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Services
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="grid md:grid-cols-2 gap-16 items-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={containerVariants}
            >
              <motion.div variants={itemVariants}>
                <h2 className="text-3xl md:text-4xl font-bold text-[#194048] mb-6">
                  Your Trusted Financial Partner
                </h2>
                <p className="text-lg text-[#566E71] mb-8">
                  With over 5 years of experience, we provide comprehensive accounting services to help businesses and individuals achieve their financial goals with confidence and clarity.
                </p>
                <div className="space-y-4">
                  {[
                    "QuickBooks ProAdvisor Certified",
                    "5+ Years Professional Experience",
                    "Specialized in Small Business Accounting",
                    "Services Tailored for Your Growth",
                  ].map((item, i) => (
                     <motion.div 
                        key={i} 
                        className="flex items-center space-x-3"
                        custom={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={useAnimation()}
                        whileInView={{ opacity: 1, x: 0, transition: { delay: 0.5 + i * 0.2, duration: 0.5 } }}
                        viewport={{ once: true }}
                      >
                       <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0" />
                       <span className="text-[#566E71]">{item}</span>
                     </motion.div>
                  ))}
                </div>
              </motion.div>
              <motion.div 
                className="relative"
                variants={itemVariants}
                whileHover={{ scale: 1.03 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="absolute -inset-2 bg-gradient-to-br from-[#194048] to-green-600 rounded-lg blur opacity-20 group-hover:opacity-50 transition duration-1000"></div>
                <img
                  src="https://images.pexels.com/photos/53621/calculator-calculation-insurance-finance-53621.jpeg"
                  alt="Professional accountant at work"
                  className="rounded-lg shadow-2xl relative"
                />
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-[#194048] mb-16">
              Trusted by Businesses Nationwide
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {[
                { icon: Users, stat: 200, label: "Satisfied Clients", color: "#194048" },
                { icon: TrendingUp, stat: 98, label: "Client Retention Rate", color: "#16A34A", isPercentage: true },
                { icon: Award, stat: 5, label: "Years Experience", color: "#566E71" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="text-center p-8 bg-white rounded-xl shadow-lg border border-gray-100"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -8, boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)' }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  viewport={{ once: true, amount: 0.5 }}
                >
                  <div
                    className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-5 shadow-inner"
                    style={{ backgroundColor: item.color }}
                  >
                    <item.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-4xl font-bold text-[#194048] mb-2">
                    <AnimatedCounter value={item.stat} isPercentage={item.isPercentage} />
                  </h3>
                  <p className="text-[#566E71]">{item.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Video Feature Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              {/* Text Content */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-[#194048] mb-4">
                  Why Razlot?
                </h2>
                <p className="text-lg text-[#566E71]">
                  Razlot Accounting delivers reliable bookkeeping, tax, and financial advisory services, helping businesses stay compliant and achieve sustainable growth.
                </p>
              </motion.div>
              
              {/* Video Player */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <VideoPlayer />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services Preview */}
        <section className="py-20 bg-slate-50" id="services">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <motion.h2
                className="text-3xl md:text-4xl font-bold text-[#194048] mb-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                Comprehensive Accounting Solutions
              </motion.h2>
              <motion.p
                className="text-lg text-[#566E71] max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                From daily bookkeeping to strategic financial planning, We provide the essential services to keep your business financially sound and compliant.
              </motion.p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "Financial Transaction Recording", desc: "Accurate and timely recording of all your business financial transactions using industry-standard practices." },
                { title: "Bank Reconciliations", desc: "Monthly bank and credit card reconciliations to ensure accuracy and identify discrepancies early." },
                { title: "HST/GST Filings", desc: "Timely and accurate HST/GST return preparation and filing to keep you compliant with tax regulations." },
                { title: "Financial Reporting", desc: "Monthly, quarterly, and year-end financial reports to help you make informed business decisions." },
                { title: "Payroll Processing", desc: "Complete payroll management including calculations, deductions, and regulatory compliance." },
                { title: "Ongoing Support", desc: "Continuous communication and support for all your accounting questions and financial record needs." },
              ].map((service, i) => (
                <motion.div
                  key={i}
                  className="bg-white rounded-lg p-8 border border-slate-200/80 transition-all duration-300 group hover:border-[#194048]"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.05, y: -5, zIndex: 10, boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)' }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  viewport={{ once: true, amount: 0.5 }}
                >
                  <h3 className="text-xl font-semibold text-[#194048] mb-3 transition-colors duration-300 group-hover:text-green-600">{service.title}</h3>
                  <p className="text-[#566E71]">
                    {service.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-[#194048] text-white" id="contact">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={containerVariants}
            >
              <motion.h2 
                className="text-3xl md:text-4xl font-bold mb-6"
                variants={itemVariants}
              >
                Ready to Streamline Your Finances?
              </motion.h2>
              <motion.p 
                className="text-xl mb-8 text-[#C9CAC4] max-w-2xl mx-auto"
                variants={itemVariants}
              >
                Let's discuss how we can help optimize your accounting processes and provide you with the financial clarity your business deserves.
              </motion.p>
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center"
                variants={itemVariants}
              >
                <motion.a
                  href="#contact"
                  className="inline-block bg-white text-[#194048] px-8 py-4 rounded-lg font-semibold shadow-lg"
                  whileHover={{ scale: 1.05, y: -4 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Request Consultation
                </motion.a>
                <motion.a
                  href="tel:+16476797468"
                  className="inline-flex items-center justify-center space-x-2 border-2 border-white text-white px-8 py-4 rounded-lg font-semibold"
                  whileHover={{ scale: 1.05, y: -4, backgroundColor: 'white', color: '#194048' }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Phone className="h-5 w-5" />
                  <span>Call Now</span>
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-[#566E71] text-[#C9CAC4] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-4 gap-8">
          {/* About Us */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">About Us</h3>
            <p className="pr-4">
              Providing expert accounting solutions to help businesses and individuals achieve financial clarity and long-term success.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          {/* Legal Section */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#terms" className="hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-[#C9CAC4]" />
                <span>+1(647)679-7468</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-[#C9CAC4]" />
                <span>divyrajjohari@gmail.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-[#C9CAC4]" />
                <span>Toronto, ON, Canada</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-[#929E9C]/50 mt-10 pt-8 text-center text-sm text-[#C9CAC4]">
          © {new Date().getFullYear()} Razlot Accounting. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default HomePage;

