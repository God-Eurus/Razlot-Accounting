import React, { useState } from 'react';
// Note: In a real project, you would use 'react-router-dom', but for this self-contained example,
// we'll use regular 'a' tags to avoid breaking the preview.
// import { Link } from 'react-router-dom';
import {
  BookOpen,
  CreditCard,
  Users,
  FileText,
  Calculator,
  MessageCircle,
  Clock,
  Shield,
  CheckCircle,
  Sparkles,
  Loader2 as LoaderCircle // Use Loader2 as a replacement
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ServicesPage = () => {
  const services = [
    {
      icon: BookOpen,
      title: 'Financial Transaction Recording',
      description:
        'Comprehensive recording and categorization of all your business financial transactions with attention to detail and accuracy.',
      features: [
        'Daily transaction entry',
        'Expense categorization',
        'Income tracking',
        'Account reconciliation',
        'QuickBooks integration'
      ]
    },
    {
      icon: CreditCard,
      title: 'Bank & Credit Card Reconciliations',
      description:
        'Monthly reconciliation services to ensure your books match your bank statements and identify any discrepancies.',
      features: [
        'Monthly bank reconciliations',
        'Credit card statement matching',
        'Discrepancy identification',
        'Error correction',
        'Detailed reconciliation reports'
      ]
    },
    {
      icon: Users,
      title: 'Payroll Processing',
      description:
        'Complete payroll management including calculations, tax deductions, and compliance with employment standards.',
      features: [
        'Payroll calculations',
        'Tax deduction management',
        'Employment standards compliance',
        'Direct deposit setup',
        'Year-end T4 preparation'
      ]
    },
    {
      icon: FileText,
      title: 'HST/GST Filings',
      description:
        'Accurate and timely HST/GST return preparation and filing to keep your business compliant with tax regulations.',
      features: [
        'Monthly/quarterly HST returns',
        'GST calculation and filing',
        'Input tax credit optimization',
        'Compliance monitoring',
        'Government correspondence handling'
      ]
    },
    {
      icon: Calculator,
      title: 'Financial Reporting',
      description:
        'Comprehensive financial reports including profit & loss statements, balance sheets, and cash flow analysis.',
      features: [
        'Monthly financial statements',
        'Quarterly business reviews',
        'Year-end reporting',
        'Cash flow analysis',
        'Custom report generation'
      ]
    },
    {
      icon: MessageCircle,
      title: 'Ongoing Communication & Support',
      description:
        'Continuous support and communication to help you understand your financial position and make informed decisions.',
      features: [
        'Regular check-ins',
        'Financial consultation',
        'Email and phone support',
        'Business advisory services',
        'Tax planning guidance'
      ]
    }
  ];

  const [snapshotData, setSnapshotData] = useState({ industry: '', revenue: '', expenses: '' });
  const [snapshotResult, setSnapshotResult] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSnapshotData(prev => ({ ...prev, [name]: value }));
  };

  const handleGenerateSnapshot = async () => {
    if (!snapshotData.industry || !snapshotData.revenue || !snapshotData.expenses) {
      setError('Please fill out all fields to generate a snapshot.');
      return;
    }
    setError('');
    setIsLoading(true);
    setSnapshotResult('');

    const prompt = `
      Act as a small business financial advisor. A business in the "${snapshotData.industry}" industry has approximately $${snapshotData.revenue} in monthly revenue and $${snapshotData.expenses} in monthly expenses.

      Based on these numbers, provide a brief, one-paragraph financial health snapshot (around 80-100 words). 
      - Calculate their estimated monthly profit and profit margin.
      - Mention one key financial metric they should monitor (like cash flow, profit margin, or burn rate).
      - Based on their situation, suggest one of the following services that might be most beneficial for them: "Financial Reporting", "Payroll Processing", or "Tax Filings".
      - Keep the tone encouraging and professional. 
      - Do not give specific financial advice, but rather general guidance. Frame the output as a helpful overview.
    `;

    try {
      const apiKey = ""; // This will be handled by the environment
      const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${apiKey}`;
      const payload = { contents: [{ parts: [{ text: prompt }] }] };

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        throw new Error(`API error: ${response.statusText}`);
      }

      const result = await response.json();
      const text = result.candidates?.[0]?.content?.parts?.[0]?.text;
      
      if (text) {
        setSnapshotResult(text);
      } else {
        throw new Error("No content received from API.");
      }

    } catch (err) {
      console.error(err);
      setError("Sorry, we couldn't generate the snapshot at this time. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };


  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Header Section */}
      <motion.section 
        className="bg-[#194048] text-white py-20 shadow-lg"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Our Accounting Services
          </h1>
          <p className="text-xl md:text-2xl text-[#C9CAC4] max-w-3xl mx-auto">
            Comprehensive financial solutions designed to help your business thrive
            with accurate, timely, and professional accounting.
          </p>
        </div>
      </motion.section>

      {/* Services Section - New Alternating Layout */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              const isReversed = index % 2 !== 0;

              const contentVariants = {
                hidden: { opacity: 0, x: isReversed ? 50 : -50 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeOut' }}
              };

              const featuresVariants = {
                hidden: { opacity: 0, x: isReversed ? -50 : 50 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeOut' }}
              };

              return (
                <motion.article
                    key={index}
                    className={`flex flex-col lg:flex-row ${isReversed ? 'lg:flex-row-reverse' : ''} gap-10 items-center`}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    {/* Left Side: Title, Icon, Description */}
                    <motion.div className="lg:w-1/2" variants={contentVariants}>
                        <div className="flex items-center gap-4 mb-4">
                            <div className="flex-shrink-0 w-16 h-16 bg-[#E6F4F1] rounded-lg flex items-center justify-center shadow-sm">
                                <IconComponent className="h-8 w-8 text-[#194048]" />
                            </div>
                            <h3 className="text-3xl font-bold text-[#194048]">
                                {service.title}
                            </h3>
                        </div>
                        <p className="text-gray-600 text-lg">
                            {service.description}
                        </p>
                    </motion.div>

                    {/* Right Side: Features List */}
                    <motion.div className="lg:w-1/2 w-full" variants={featuresVariants}>
                      <div className="bg-white rounded-xl shadow-lg border border-gray-200/80 p-8 space-y-4">
                        {service.features.map((feature, fIndex) => (
                           <motion.div 
                              key={fIndex} 
                              className="flex items-center space-x-3"
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.5, delay: 0.2 + fIndex * 0.1 }}
                            >
                              <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-green-100 text-green-700 flex-shrink-0">
                                <CheckCircle className="h-4 w-4" />
                              </span>
                              <span className="text-gray-700 font-medium">{feature}</span>
                           </motion.div>
                        ))}
                      </div>
                    </motion.div>
                </motion.article>
              );
            })}
        </div>
      </section>

      {/* Gemini AI Snapshot Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-200/80"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="text-center">
                <Sparkles className="mx-auto h-10 w-10 text-yellow-500" />
                <h2 className="text-3xl md:text-4xl font-bold text-[#194048] mt-4 mb-4">
                Get a Free AI-Powered Financial Snapshot ✨
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
                Curious about your business's financial health? Enter a few details below for a high-level summary generated by AI.
                </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-6 mb-6">
              <div>
                <label htmlFor="industry" className="block text-sm font-medium text-gray-700 mb-1">Industry</label>
                <input type="text" name="industry" id="industry" value={snapshotData.industry} onChange={handleInputChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#194048] focus:border-[#194048]" placeholder="e.g., Retail, SaaS, Cafe" />
              </div>
              <div>
                <label htmlFor="revenue" className="block text-sm font-medium text-gray-700 mb-1">Avg. Monthly Revenue ($)</label>
                <input type="number" name="revenue" id="revenue" value={snapshotData.revenue} onChange={handleInputChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#194048] focus:border-[#194048]" placeholder="e.g., 15000" />
              </div>
              <div>
                <label htmlFor="expenses" className="block text-sm font-medium text-gray-700 mb-1">Avg. Monthly Expenses ($)</label>
                <input type="number" name="expenses" id="expenses" value={snapshotData.expenses} onChange={handleInputChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#194048] focus:border-[#194048]" placeholder="e.g., 8000" />
              </div>
            </div>

            <div className="text-center mb-6">
              <motion.button
                onClick={handleGenerateSnapshot}
                disabled={isLoading}
                className="inline-flex items-center gap-2 bg-[#194048] text-white px-8 py-3 rounded-lg font-semibold shadow-md disabled:bg-gray-400"
                whileHover={{ scale: isLoading ? 1 : 1.05, y: isLoading ? 0 : -2 }}
                whileTap={{ scale: isLoading ? 1 : 0.98 }}
              >
                {isLoading ? (
                  <>
                    <LoaderCircle className="animate-spin h-5 w-5" />
                    Generating...
                  </>
                ) : (
                  <>
                    <Sparkles className="h-5 w-5" />
                    Generate Snapshot
                  </>
                )}
              </motion.button>
            </div>
            
            <AnimatePresence>
            {(snapshotResult || error) && (
              <motion.div 
                className={`mt-6 p-6 rounded-lg ${error ? 'bg-red-100 text-red-800' : 'bg-green-50 text-[#194048] border border-green-200'}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
              >
                {error ? <p>{error}</p> : <p className="whitespace-pre-wrap">{snapshotResult}</p>}
              </motion.div>
            )}
            </AnimatePresence>
            
            <p className="text-xs text-gray-500 text-center mt-4">
                Disclaimer: This is an AI-generated snapshot based on the data provided and should not be considered financial advice. For a detailed analysis, please request a consultation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#194048] mb-4">
              The Razlot Advantage
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experience the difference of working with a dedicated accounting professional who puts your success first.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {icon: Clock, title: 'Timely & Reliable', desc: 'Consistent, punctual service delivery with attention to deadlines and your business schedule.'},
              {icon: Shield, title: 'Secure & Confidential', desc: 'Your financial information is protected with the highest level of security and confidentiality.'},
              {icon: MessageCircle, title: 'Personalized Support', desc: 'Direct communication and personalized service tailored to your specific business needs.'}
            ].map((item, i) => (
              <motion.div 
                key={item.title}
                className="bg-white rounded-lg p-8 text-center shadow-lg border border-gray-200/80"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -8, boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)' }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
              >
                <div className="w-20 h-20 bg-[#E6F4F1] rounded-full flex items-center justify-center mx-auto mb-5 shadow-inner">
                  <item.icon className="h-10 w-10 text-[#194048]" />
                </div>
                <h3 className="text-xl font-semibold text-[#194048] mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#194048]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-[#C9CAC4] mb-8 max-w-2xl mx-auto">
              Contact me today to discuss your accounting needs and learn how I can help streamline your financial operations.
            </p>
            <motion.a
              href="/contact" // Changed from Link to a for standalone preview
              className="inline-block bg-teal-800 text-white px-8 py-4 rounded-lg font-semibold shadow-lg"
              whileHover={{ scale: 1.05, y: -4, backgroundColor: '16a34a' }}
              whileTap={{ scale: 0.95 }}
            >
              Request Free Consultation
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;



