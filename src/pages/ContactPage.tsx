import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, ChevronDown } from 'lucide-react';
import { supabase } from '../lib/supabase';
import toast from 'react-hot-toast';
import { motion, AnimatePresence } from 'framer-motion';

// This is a placeholder for the real supabase client.
// In a real app, you would import it as you did.
const mockSupabase = {
  from: () => ({
    insert: () => new Promise(resolve => setTimeout(() => resolve({ error: null }), 1500))
  })
};

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service_requested: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);


  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      toast.error("Please enter a valid email address.");
      setIsSubmitting(false);
      return;
    }

    try {
        // Using mockSupabase for preview purposes. Replace with `supabase` in your project.
      const { error } = await mockSupabase
        .from('client_requests')
        .insert([ // FIX: Changed from {} to [] to pass an array of objects
          {
            ...formData,
            status: 'pending',
            created_at: new Date().toISOString()
          }
        ]);

      if (error) throw error;

      toast.success('Your request has been submitted successfully! I will contact you within 24 hours.');
      window.scrollTo({ top: 0, behavior: 'smooth' });

      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service_requested: '',
        message: ''
      });
    } catch (error: any) {
      console.error('Error submitting form:', error);
      toast.error(error.message || 'There was an error submitting your request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, ease: "easeOut" }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" }}
  };

  const faqs = [
    {
      q: "What information do I need to get a quote?",
      a: "To provide an accurate quote, please fill out the service request form with your company name, the specific services you need, and a brief message about your business's accounting requirements."
    },
    {
      q: "What accounting software are you proficient with?",
      a: "I am highly proficient with QuickBooks Online and other major accounting platforms. I can adapt to your existing system or help you migrate to a more efficient one."
    },
    {
      q: "What is your typical response time?",
      a: "I strive to respond to all inquiries within one business day. For submitted service requests, you can expect to hear back within 24 hours to schedule your free consultation."
    },
    {
        q: "Do you work with businesses outside of Canada?",
        a: "While I specialize in Canadian accounting standards and tax laws (like HST/GST), I can offer bookkeeping and financial reporting services to international clients. Please contact me to discuss your specific needs."
    }
  ];


  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans">
        <div className="flex flex-col min-h-screen">
            <main className="flex-grow">
              {/* Header */}
              <motion.section 
                className="text-center pt-12 mb-16"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
              >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <h1 className="text-4xl md:text-5xl font-bold text-[#1E293B] mb-4">
                    Get In Touch
                  </h1>
                  <p className="text-xl text-[#475569] max-w-2xl mx-auto">
                    Ready to streamline your accounting? Let’s discuss how I can help your business succeed.
                  </p>
                </div>
              </motion.section>

              {/* Main Section */}
              <section className="pb-20">
                <motion.div 
                  className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={containerVariants}
                >
                  <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200/80">
                    <div className="grid lg:grid-cols-5">
                      
                      {/* Left Side: Contact Information */}
                      <motion.div 
                        className="lg:col-span-2 bg-[#D9EAFD] p-8 md:p-12 text-[#1E293B]"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                      >
                        <h2 className="text-3xl font-bold mb-4">Let’s Connect</h2>
                        <p className="text-[#475569] mb-8">Fill out the form, or use the contact details below to reach out directly.</p>
                        
                        <div className="space-y-6 mb-10">
                          <div className="flex items-center space-x-4">
                            <Mail className="h-6 w-6 flex-shrink-0" />
                            <p>contact@razlot.com</p>
                          </div>
                          <div className="flex items-center space-x-4">
                            <Phone className="h-6 w-6 flex-shrink-0" />
                            <p>+1 (647) 679-7468</p>
                          </div>
                          <div className="flex items-center space-x-4">
                            <MapPin className="h-6 w-6 flex-shrink-0" />
                            <p>Toronto, Ontario, Canada</p>
                          </div>
                          <div className="flex items-start space-x-4">
                            <Clock className="h-6 w-6 flex-shrink-0 mt-1" />
                            <div>
                              <p className="font-semibold">Business Hours</p>
                              <p className="text-[#475569]">Mon - Fri: 9:00 AM - 6:00 PM</p>
                              <p className="text-[#475569]">Weekend: By appointment</p>
                            </div>
                          </div>
                        </div>

                        <div className="bg-white/70 rounded-lg p-6">
                          <h3 className="text-lg font-semibold text-[#1E293B] mb-2">
                            Free Initial Consultation
                          </h3>
                          <p className="text-[#475569]">
                            I offer a complimentary 30-minute consultation to discuss your needs. No obligation, just expert advice.
                          </p>
                        </div>
                      </motion.div>

                      {/* Right Side: Contact Form */}
                      <div className="lg:col-span-3 p-8 md:p-12">
                        <motion.form 
                            onSubmit={handleSubmit} 
                            className="space-y-6"
                            variants={containerVariants} // Reuse container for staggering children
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                          <h2 className="text-2xl font-bold text-[#1E293B] mb-6">
                            Request a Service
                          </h2>
                          <div className="grid md:grid-cols-2 gap-6">
                            <motion.div variants={itemVariants}>
                              <label htmlFor="name" className="block text-sm font-medium text-[#475569] mb-1">Full Name *</label>
                              <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#9AA6B2] transition" />
                            </motion.div>
                            
                            <motion.div variants={itemVariants}>
                              <label htmlFor="email" className="block text-sm font-medium text-[#475569] mb-1">Email Address *</label>
                              <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#9AA6B2] transition" />
                            </motion.div>
                          </div>

                          <div className="grid md:grid-cols-2 gap-6">
                            <motion.div variants={itemVariants}>
                              <label htmlFor="phone" className="block text-sm font-medium text-[#475569] mb-1">Phone Number</label>
                              <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#9AA6B2] transition" />
                            </motion.div>
                            
                            <motion.div variants={itemVariants}>
                              <label htmlFor="company" className="block text-sm font-medium text-[#475569] mb-1">Company Name</label>
                              <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#9AA6B2] transition" />
                            </motion.div>
                          </div>

                          <motion.div variants={itemVariants}>
                            <label htmlFor="service_requested" className="block text-sm font-medium text-[#475569] mb-1">Service Needed *</label>
                            <select id="service_requested" name="service_requested" required value={formData.service_requested} onChange={handleChange} className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#9AA6B2] transition bg-white">
                              <option value="">Select a service</option>
                              <option value="Fullcycle">Full Cycle Accounting</option>
                              <option value="FTR">Financial Transaction Recording</option>
                              <option value="reconciliation">Bank & Credit Card Reconciliations</option>
                              <option value="payroll">Payroll Processing</option>
                              <option value="bookkeeping">Bookkeeping</option>
                              <option value="tax-filing">HST/GST Filings</option>
                              <option value="reporting">Financial Reporting</option>
                              <option value="consultation">General Consultation</option>
                              <option value="multiple">Multiple Services</option>
                            </select>
                          </motion.div>

                          <motion.div variants={itemVariants}>
                            <label htmlFor="message" className="block text-sm font-medium text-[#475569] mb-1">Message *</label>
                            <textarea id="message" name="message" required rows={4} value={formData.message} onChange={handleChange} className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#9AA6B2] transition" />
                          </motion.div>

                          <motion.div variants={itemVariants}>
                            <motion.button
                              type="submit"
                              disabled={isSubmitting}
                              className="w-full bg-[#1E293B] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#334155] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 shadow-lg"
                              whileHover={{ scale: isSubmitting ? 1 : 1.05, y: isSubmitting ? 0 : -2 }}
                              whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                            >
                              {isSubmitting ? (
                                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                              ) : (
                                <>
                                  <Send className="h-5 w-5" />
                                  <span>Send Request</span>
                                </>
                              )}
                            </motion.button>
                          </motion.div>
                        </motion.form>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </section>

              {/* FAQ Section */}
              <section className="py-20 bg-[#F8FAFC]">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div 
                        className="text-center mb-12"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-[#1E293B] mb-4">
                        Frequently Asked Questions
                        </h2>
                        <p className="text-lg text-[#475569] max-w-2xl mx-auto">
                        Find quick answers to common questions about my services.
                        </p>
                    </motion.div>
                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                             <motion.div
                                key={index}
                                className="bg-white rounded-xl shadow-md border border-gray-200/80 overflow-hidden"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                             >
                                <button
                                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                                    className="w-full flex justify-between items-center text-left p-5 font-semibold text-lg text-[#1E293B]"
                                >
                                    <span>{faq.q}</span>
                                    <motion.div animate={{ rotate: openFaq === index ? 180 : 0 }} transition={{ duration: 0.3 }}>
                                        <ChevronDown className="h-6 w-6 text-[#475569]" />
                                    </motion.div>
                                </button>
                                <AnimatePresence>
                                {openFaq === index && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        exit={{ opacity: 0, height: 0 }}
                                        transition={{ duration: 0.3, ease: 'easeOut' }}
                                        className="overflow-hidden"
                                    >
                                        <p className="px-5 pb-5 pt-1 text-[#475569]">{faq.a}</p>
                                    </motion.div>
                                )}
                                </AnimatePresence>
                             </motion.div>
                        ))}
                    </div>
                </div>
              </section>
            </main>

            {/* Footer */}
            <motion.footer 
              className="bg-[#1E293B] text-white"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8 }}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {/* About */}
                        <div className="md:col-span-2 pr-4">
                            <h3 className="text-lg font-semibold mb-4">Razlot Accounting</h3>
                            <p className="text-[#94A3B8] text-sm">
                                Providing expert, reliable, and streamlined accounting services for small to medium-sized businesses.
                            </p>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                            <ul className="space-y-2 text-sm">
                                <li><a href="/" className="text-[#94A3B8] hover:text-white transition-colors">Home</a></li>
                                <li><a href="/services" className="text-[#94A3B8] hover:text-white transition-colors">Services</a></li>
                                <li><a href="/contact" className="text-[#94A3B8] hover:text-white transition-colors">Contact</a></li>
                            </ul>
                        </div>
                        
                        {/* Legal */}
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Legal</h3>
                            <ul className="space-y-2 text-sm">
                                <li><a href="#" className="text-[#94A3B8] hover:text-white transition-colors">Terms & Conditions</a></li>
                                <li><a href="#" className="text-[#94A3B8] hover:text-white transition-colors">Privacy Policy</a></li>
                            </ul>
                        </div>

                        {/* Contact */}
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Contact</h3>
                            <ul className="space-y-2 text-sm text-[#94A3B8]">
                                <li className="flex items-center space-x-2">
                                    <Phone className="h-4 w-4" />
                                    <span>+1 (647) 679-7468</span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <Mail className="h-4 w-4" />
                                    <span>contact@razlot.com</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="mt-8 border-t border-[#334155] pt-6 text-center text-sm text-[#94A3B8]">
                        <p>&copy; {new Date().getFullYear()} Razlot Accounting. All Rights Reserved.</p>
                    </div>
                </div>
            </motion.footer>
        </div>
    </div>
  );
};

export default ContactPage;

