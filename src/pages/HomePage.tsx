import React from 'react';
import { Link } from 'react-router-dom';
import { 
  CheckCircle, 
  Award, 
  Users, 
  TrendingUp, 
  Phone, 
  Mail, 
  MapPin 
} from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#F6F0E4]">
      <div className="flex-grow">
        {/* Hero Section */}
        <section className="bg-[#194048] text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Professional Accounting Services
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-[#C9CAC4] max-w-3xl mx-auto">
                Streamline your finances with expert accounting solutions tailored for your business success
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-block bg-white text-[#194048] px-8 py-4 rounded-lg font-semibold hover:bg-[#C9CAC4] transition-colors shadow-lg"
                >
                  Get Started Today
                </Link>
                <Link
                  to="/services"
                  className="inline-block border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#194048] transition-colors"
                >
                  View Services
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 bg-[#F6F0E4]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#194048] mb-6">
                  Your Trusted Financial Partner
                </h2>
                <p className="text-lg text-[#566E71] mb-6">
                  With over 5 years of experience in accounting and financial management, 
                  I provide comprehensive accounting services to help businesses and individuals 
                  achieve their financial goals with confidence and clarity.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-[#566E71]">QuickBooks ProAdvisor Certified</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-[#566E71]">5+ Years Professional Experience</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-[#566E71]">Specialized in Small Business Accounting</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/53621/calculator-calculation-insurance-finance-53621.jpeg?_gl=1*1twg82q*_ga*NjIwNDY4NzAuMTczNjg0MTc1OQ..*_ga_8JE65Q40S6*czE3NTcwMjg0MDAkbzckZzEkdDE3NTcwMjg0MTIkajQ4JGwwJGgw"
                  alt="Professional accountant at work"
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-[#C9CAC4]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-[#194048] mb-12">
              Trusted by Businesses Nationwide
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#194048] rounded-full mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-[#194048] mb-2">200+</h3>
                <p className="text-[#566E71]">Satisfied Clients</p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-600 rounded-full mb-4">
                  <TrendingUp className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-[#194048] mb-2">98%</h3>
                <p className="text-[#566E71]">Client Retention Rate</p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#929E9C] rounded-full mb-4">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-[#194048] mb-2">5+</h3>
                <p className="text-[#566E71]">Years Experience</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Preview */}
        <section className="py-16 bg-[#F6F0E4]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#194048] mb-4">
                Comprehensive Accounting Solutions
              </h2>
              <p className="text-lg text-[#566E71] max-w-2xl mx-auto">
                From bookkeeping to tax planning, I offer a full range of accounting services 
                to keep your business financially healthy and compliant.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                "Financial Transaction Recording",
                "Bank Reconciliations",
                "HST/GST Filings",
                "Financial Reporting",
                "Payroll Processing",
                "Ongoing Support"
              ].map((service, i) => (
                <div key={i} className="bg-[#C9CAC4] rounded-lg p-6 hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-semibold text-[#194048] mb-3">
                    {service}
                  </h3>
                  <p className="text-[#566E71]">
                    {service === "Financial Transaction Recording" && "Accurate and timely recording of all your business financial transactions using industry-standard practices."}
                    {service === "Bank Reconciliations" && "Monthly bank and credit card reconciliations to ensure accuracy and identify discrepancies early."}
                    {service === "HST/GST Filings" && "Timely and accurate HST/GST return preparation and filing to keep you compliant with tax regulations."}
                    {service === "Financial Reporting" && "Monthly, quarterly, and year-end financial reports to help you make informed business decisions."}
                    {service === "Payroll Processing" && "Complete payroll management including calculations, deductions, and regulatory compliance."}
                    {service === "Ongoing Support" && "Continuous communication and support for all your accounting questions and financial record needs."}
                  </p>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Link
                to="/services"
                className="inline-block bg-[#194048] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#566E71] transition-colors"
              >
                View All Services
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-[#194048] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Streamline Your Finances?
            </h2>
            <p className="text-xl mb-8 text-[#C9CAC4] max-w-2xl mx-auto">
              Let's discuss how I can help optimize your accounting processes and 
              provide you with the financial clarity your business deserves.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-block bg-white text-[#194048] px-8 py-4 rounded-lg font-semibold hover:bg-[#C9CAC4] transition-colors"
              >
                Request Consultation
              </Link>
              <a
                href="tel:+1234567890"
                className="inline-flex items-center justify-center space-x-2 border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#194048] transition-colors"
              >
                <Phone className="h-5 w-5" />
                <span>Call Now</span>
              </a>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-[#566E71] text-[#C9CAC4] py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">About</h3>
            <p>
              Providing expert accounting solutions to help businesses and individuals 
              achieve financial clarity and long-term success.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-white">Home</Link></li>
              <li><Link to="/services" className="hover:text-white">Services</Link></li>
              <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-[#C9CAC4]" />
                <span>+1(647)679-7468</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-[#C9CAC4]" />
                <span>divyrajjohari@gmail.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-[#C9CAC4]" />
                <span>123 Business St, New York, NY</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#929E9C] mt-8 pt-6 text-center text-sm text-[#C9CAC4]">
          © {new Date().getFullYear()} Razlot Accounting. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
