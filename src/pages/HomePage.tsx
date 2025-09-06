import React from 'react';
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
  BookOpen,
  PieChart,
  FileText,
  Briefcase,
  Users2,
  PhoneForwarded
} from 'lucide-react';
import { motion } from "framer-motion";

const HomePage = () => {
  // Framer Motion variants for animations
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.2
      },
    },
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const serviceImageVariant = (isReversed: boolean) => ({
    hidden: { opacity: 0, x: isReversed ? -50 : 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeOut' } }
  });
  
  const serviceContentVariant = (isReversed: boolean) => ({
    hidden: { opacity: 0, x: isReversed ? 50 : -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeOut' } }
  });


  return (
    <div className="min-h-screen flex flex-col bg-gray-50 font-sans antialiased">
      <div className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-[#194048] text-white py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(to_bottom,white_50%,transparent_100%)]"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 relative">
            <motion.div 
              className="grid md:grid-cols-2 gap-12 items-center"
              initial="hidden"
              animate="visible"
              variants={sectionVariants}
            >
              <div className="text-center md:text-left">
                <motion.h1 
                  className="text-4xl md:text-6xl font-bold mb-6 tracking-tight"
                  variants={itemVariants}
                >
                  Comprehensive Accounting Solutions

                </motion.h1>
                <motion.p 
                  className="text-xl md:text-2xl mb-10 text-[#C9CAC4] max-w-xl mx-auto md:mx-0"
                  variants={itemVariants}
                >
                  From bookkeeping to tax planning, I offer a full range of accounting services to keep your business financially healthy and compliant.
                </motion.p>
                <motion.div 
                  className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
                  variants={itemVariants}
                >
                  <motion.a
                    href="#contact"
                    className="inline-block bg-white text-[#194048] px-8 py-4 rounded-lg font-semibold shadow-lg transform transition-transform duration-300"
                    whileHover={{ scale: 1.05, y: -4 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Free Consultation
                  </motion.a>
                  <motion.a
                    href="#services"
                    className="inline-block border-2 border-white text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-300"
                    whileHover={{ scale: 1.05, y: -4, backgroundColor: 'white', color: '#194048' }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Explore Services
                  </motion.a>
                </motion.div>
              </div>
              <motion.div 
                className="hidden md:block relative h-full"
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: { opacity: 1, scale: 1, transition: { delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
                }}
              >
                <div className="absolute w-72 h-72 bg-white/10 rounded-full -top-10 -right-10 blur-xl"></div>
                <div className="absolute w-96 h-96 bg-white/5 rounded-full -bottom-20 -left-10 blur-lg"></div>
                 <div className="relative p-8 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm">
                   <p className="text-lg font-semibold text-white mb-2">Financial Snapshot</p>
                   <p className="text-sm text-gray-300 mb-4">Q3 Earnings Projection</p>
                   <div className="bg-gray-700/50 rounded-lg p-4 space-y-3">
                     <div className="flex justify-between items-center"><span className="text-gray-300">Revenue</span><span className="text-green-400 font-mono font-semibold">$125,430</span></div>
                     <div className="w-full bg-gray-600 rounded-full h-2.5"><div className="bg-green-500 h-2.5 rounded-full" style={{width: '75%'}}></div></div>
                     <div className="flex justify-between items-center"><span className="text-gray-300">Net Profit</span><span className="text-green-400 font-mono font-semibold">$32,810</span></div>
                     <div className="w-full bg-gray-600 rounded-full h-2.5"><div className="bg-green-500 h-2.5 rounded-full" style={{width: '45%'}}></div></div>
                   </div>
                 </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="grid md:grid-cols-2 gap-x-16 gap-y-10 items-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={sectionVariants}
            >
              <motion.div 
                className="relative"
                variants={itemVariants}
              >
                <div className="md:-mt-24">
                  <motion.img
                    src="https://images.pexels.com/photos/53621/calculator-calculation-insurance-finance-53621.jpeg"
                    alt="Professional accountant at work"
                    className="rounded-lg shadow-2xl relative w-full h-auto"
                    whileHover={{ scale: 1.03, boxShadow: '0 25px 50px -12px rgb(0 0 0 / 0.25)' }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  />
                </div>
              </motion.div>
              <motion.div variants={itemVariants}>
                <h2 className="text-3xl md:text-4xl font-bold text-[#194048] mb-6">
                  Your Trusted Financial Partner
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  With over 5 years of experience, I provide comprehensive accounting services to help businesses and individuals achieve their financial goals with confidence and clarity.
                </p>
                <motion.div 
                    className="grid grid-cols-2 gap-6"
                    variants={sectionVariants} // Stagger children
                >
                  {[
                    { icon: Award, stat: "Certified", label: "QuickBooks ProAdvisor" },
                    { icon: Users, stat: "200+", label: "Satisfied Clients" },
                    { icon: TrendingUp, stat: "98%", label: "Client Retention" },
                    { icon: Briefcase, stat: "5+ Years", label: "Experience" },
                  ].map((item) => (
                    <motion.div key={item.label} className="flex items-center gap-4" variants={itemVariants}>
                      <div className="bg-green-100 text-green-700 p-3 rounded-full">
                        <item.icon className="h-6 w-6"/>
                      </div>
                      <div>
                        <p className="font-bold text-lg text-[#194048]">{item.stat}</p>
                        <p className="text-sm text-gray-500">{item.label}</p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-24 bg-gray-50" id="services">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#194048] mb-4">
                Services Tailored For Growth
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                From daily bookkeeping to strategic financial planning, I provide the essential services to keep your business financially sound and compliant.
              </p>
            </motion.div>
            
            <div className="space-y-16">
              {[
                  { icon: BookOpen, title: "Bookkeeping Services", desc: "Accurate recording of financial transactions, bank reconciliations, and maintaining your general ledger." },
                  { icon: FileText, title: "Tax Preparation & Filing", desc: "Expert HST/GST return preparation and filing to ensure you remain compliant with all tax regulations." },
                  { icon: PieChart, title: "Financial Reporting", desc: "Delivering clear monthly, quarterly, and year-end reports for informed business decision-making." },
                  { icon: Users2, title: "Payroll Processing", desc: "Complete payroll management, including calculations, deductions, and ensuring regulatory compliance." },
              ].map((service, i) => {
                const isReversed = i % 2 !== 0;
                return (
                <motion.div
                  key={i}
                  className={`grid md:grid-cols-2 gap-10 items-center`}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <motion.div className={`p-8 bg-white rounded-2xl shadow-lg border border-gray-200/80 ${isReversed ? 'md:order-2' : ''}`} variants={serviceContentVariant(isReversed)}>
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-full mb-5 bg-[#194048] text-white">
                      <service.icon className="h-7 w-7" />
                    </div>
                    <h3 className="text-2xl font-semibold text-[#194048] mb-3">{service.title}</h3>
                    <p className="text-gray-600">{service.desc}</p>
                  </motion.div>
                  <motion.div className={`hidden md:block h-64 rounded-2xl overflow-hidden ${isReversed ? 'md:order-1' : ''}`} variants={serviceImageVariant(isReversed)}>
                    <motion.img 
                      src={`https://placehold.co/600x400/e2e8f0/4a5568?text=${service.title.replace(' ', '+')}`} 
                      alt={service.title} 
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>
                </motion.div>
              )})}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-white" id="contact">
          <div className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
            <div className="bg-[#194048] rounded-2xl shadow-xl overflow-hidden">
               <motion.div 
                 className="grid md:grid-cols-2 gap-8 items-center"
                 initial="hidden"
                 whileInView="visible"
                 viewport={{ once: true, amount: 0.5 }}
                 variants={sectionVariants}
               >
                <div className="p-8 md:p-12 text-white">
                    <motion.h2 
                      className="text-3xl md:text-4xl font-bold mb-4"
                      variants={itemVariants}
                    >
                      Ready to Take Control of Your Finances?
                    </motion.h2>
                    <motion.p 
                      className="text-lg text-gray-300 mb-8"
                      variants={itemVariants}
                    >
                      Schedule a free, no-obligation consultation to discuss your business needs and find out how I can help.
                    </motion.p>
                    <motion.a
                      href="#"
                      className="inline-flex items-center gap-3 bg-white text-[#194048] px-8 py-4 rounded-lg font-semibold shadow-lg"
                      whileHover={{ scale: 1.05, y: -4 }}
                      whileTap={{ scale: 0.95 }}
                      variants={itemVariants}
                    >
                      <PhoneForwarded className="h-5 w-5" />
                      Book a Free Call
                    </motion.a>
                </div>
                 <motion.div className="hidden md:block h-full overflow-hidden" variants={itemVariants}>
                   <motion.img 
                      src="https://images.pexels.com/photos/7567568/pexels-photo-7567568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                      alt="Business meeting" 
                      className="h-full w-full object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                    />
                 </motion.div>
               </motion.div>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <motion.footer 
        className="bg-[#566E71] text-[#C9CAC4] py-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-4 gap-8">
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold text-white mb-4">About</h3>
            <p className="pr-4 text-sm">
              Providing expert accounting solutions to help businesses and individuals achieve financial clarity and long-term success.
            </p>
          </motion.div>
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </motion.div>
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a 
                  href="/TermsAndConditions.pdf" 
                  className="hover:text-white transition-colors"
                  target="_blank" 
                  rel="noopener noreferrer"
    >
      Terms & Conditions
    </a>
  </li>
  <li>
    <a 
      href="/PrivacyPolicy.pdf" 
      className="hover:text-white transition-colors"
      target="_blank" 
      rel="noopener noreferrer"
    >
      Privacy Policy
    </a>
  </li>
</ul>
          </motion.div>
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
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
          </motion.div>
        </div>
        <div className="border-t border-[#929E9C]/50 mt-10 pt-8 text-center text-sm text-[#C9CAC4]">
          © {new Date().getFullYear()} Razlot Accounting. All rights reserved.
        </div>
      </motion.footer>
    </div>
  );
};

export default HomePage;

