import React from 'react';
import { Link } from 'react-router-dom';
import { 
  BookOpen, 
  CreditCard, 
  Users, 
  FileText, 
  Calculator, 
  MessageCircle,
  Clock,
  Shield,
  CheckCircle
} from 'lucide-react';

const ServicesPage: React.FC = () => {
  const services = [
    {
      icon: BookOpen,
      title: 'Financial Transaction Recording',
      description: 'Comprehensive recording and categorization of all your business financial transactions with attention to detail and accuracy.',
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
      description: 'Monthly reconciliation services to ensure your books match your bank statements and identify any discrepancies.',
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
      description: 'Complete payroll management including calculations, tax deductions, and compliance with employment standards.',
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
      description: 'Accurate and timely HST/GST return preparation and filing to keep your business compliant with tax regulations.',
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
      description: 'Comprehensive financial reports including profit & loss statements, balance sheets, and cash flow analysis.',
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
      description: 'Continuous support and communication to help you understand your financial position and make informed decisions.',
      features: [
        'Regular check-ins',
        'Financial consultation',
        'Email and phone support',
        'Business advisory services',
        'Tax planning guidance'
      ]
    }
  ];

  return (
    <div className="min-h-screen py-12 bg-[#FFF3E4]">
      {/* Header Section */}
      <section className="bg-[#483434] text-white py-16 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-md">
            Professional Accounting Services
          </h1>
          <p className="text-xl md:text-2xl text-[#EED6C4] max-w-3xl mx-auto">
            Comprehensive financial solutions designed to help your business thrive 
            with accurate, timely, and professional accounting services.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div 
                  key={index} 
                  className="bg-white rounded-xl shadow-md border border-[#EED6C4] overflow-hidden hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="p-8">
                    <div className="flex items-start space-x-6">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-[#EED6C4] rounded-lg flex items-center justify-center shadow-sm">
                          <IconComponent className="h-8 w-8 text-[#6B4F4F]" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-[#483434] mb-4">
                          {service.title}
                        </h3>
                        <p className="text-[#6B4F4F] text-lg mb-6">
                          {service.description}
                        </p>
                        <div className="grid md:grid-cols-2 gap-3">
                          {service.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center space-x-2">
                              <CheckCircle className="h-5 w-5 text-[#6B4F4F] flex-shrink-0" />
                              <span className="text-[#483434]">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-[#EED6C4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#483434] mb-4">
              Why Choose Razlot?
            </h2>
            <p className="text-lg text-[#6B4F4F] max-w-2xl mx-auto">
              Experience the difference of working with a dedicated accounting professional 
              who puts your business success first.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 text-center shadow-sm hover:shadow-md transition">
              <div className="w-16 h-16 bg-[#FFF3E4] rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                <Clock className="h-8 w-8 text-[#6B4F4F]" />
              </div>
              <h3 className="text-xl font-semibold text-[#483434] mb-3">
                Timely & Reliable
              </h3>
              <p className="text-[#6B4F4F]">
                Consistent, punctual service delivery with attention to deadlines 
                and your business schedule.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 text-center shadow-sm hover:shadow-md transition">
              <div className="w-16 h-16 bg-[#FFF3E4] rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                <Shield className="h-8 w-8 text-[#6B4F4F]" />
              </div>
              <h3 className="text-xl font-semibold text-[#483434] mb-3">
                Secure & Confidential
              </h3>
              <p className="text-[#6B4F4F]">
                Your financial information is protected with the highest level 
                of security and confidentiality.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 text-center shadow-sm hover:shadow-md transition">
              <div className="w-16 h-16 bg-[#FFF3E4] rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                <MessageCircle className="h-8 w-8 text-[#6B4F4F]" />
              </div>
              <h3 className="text-xl font-semibold text-[#483434] mb-3">
                Personal Touch
              </h3>
              <p className="text-[#6B4F4F]">
                Direct communication and personalized service tailored to 
                your specific business needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#6B4F4F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 drop-shadow-md">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-[#EED6C4] mb-8 max-w-2xl mx-auto">
            Contact me today to discuss your accounting needs and learn how 
            I can help streamline your financial operations.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-[#EED6C4] text-[#483434] px-8 py-4 rounded-lg font-semibold hover:bg-[#FFF3E4] transition-colors shadow-md"
          >
            Request Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
