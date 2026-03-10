// src/components/pages/TermsConditions.tsx
import { motion } from 'framer-motion';
import PremiumHeader from '../PremiumHeader';
import PremiumFooter from '../PremiumFooter';
import { 
  FileText, Scale, AlertCircle, CheckCircle, 
  Mail, Phone, Globe, MapPin, ArrowLeft,
  BookOpen, Users, DollarSign, Calendar
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

export default function TermsConditions() {
  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <PremiumHeader />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0A0A0A] via-[#1A1A1A] to-[#2A2A2A] text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#B8860B] rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#B8860B] rounded-full filter blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 max-w-[120rem] mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-8 border border-[#B8860B]/30">
              <Scale className="w-4 h-4 text-[#B8860B]" />
              <span className="font-paragraph text-xs uppercase tracking-wider text-white/80">
                Legal Agreement
              </span>
            </div>

            <h1 className="font-heading text-5xl lg:text-6xl font-black mb-6 leading-tight">
              Terms & <span className="text-[#B8860B]">Conditions</span>
            </h1>
            <p className="font-paragraph text-xl text-white/80 max-w-3xl leading-relaxed">
              Please read these terms carefully before using Junior Dream's services. By accessing our platform, 
              you agree to be bound by these terms.
            </p>
            <p className="font-paragraph text-sm text-white/60 mt-4">
              Last Updated: March 2025 | Version 1.0
            </p>
          </motion.div>
        </div>
      </section>

      {/* Back Button */}
      <div className="max-w-[120rem] mx-auto px-6 lg:px-12 py-6">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-textprimary/60 hover:text-[#B8860B] transition-colors group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>
      </div>

      {/* Content Section */}
      <section className="max-w-[120rem] mx-auto px-6 lg:px-12 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <h3 className="font-heading text-lg font-bold text-textprimary mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {[
                  { id: 'acceptance', label: 'Acceptance of Terms' },
                  { id: 'eligibility', label: 'Eligibility' },
                  { id: 'services', label: 'Description of Services' },
                  { id: 'registration', label: 'Registration & Accounts' },
                  { id: 'fees', label: 'Fees & Payments' },
                  { id: 'cancellation', label: 'Cancellation & Refunds' },
                  { id: 'conduct', label: 'User Conduct' },
                  { id: 'ip', label: 'Intellectual Property' },
                  { id: 'liability', label: 'Limitation of Liability' },
                  { id: 'termination', label: 'Termination' },
                  { id: 'governing', label: 'Governing Law' },
                  { id: 'contact', label: 'Contact Information' }
                ].map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className="font-paragraph text-sm text-textprimary/70 hover:text-[#B8860B] transition-colors block py-1"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-8">
            {/* Acceptance of Terms */}
            <motion.div
              id="acceptance"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100"
            >
              <h2 className="font-heading text-2xl font-bold text-textprimary mb-4 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-[#B8860B]" />
                1. Acceptance of Terms
              </h2>
              <p className="font-paragraph text-textprimary/80 leading-relaxed">
                By accessing or using the Junior Dream website, mobile application, or any services provided by 
                Junior Dream Private Limited ("Company," "we," "us," or "our"), you agree to be bound by these Terms 
                and Conditions ("Terms"). If you do not agree to these Terms, please do not use our Services.
              </p>
              <p className="font-paragraph text-textprimary/80 leading-relaxed mt-4">
                These Terms constitute a legally binding agreement between you (the "User," "Student," "Parent," or 
                "Guardian") and Junior Dream Private Limited. For minors (under 18 years), these Terms are accepted by 
                the parent or legal guardian on behalf of the minor.
              </p>
            </motion.div>

            {/* Eligibility */}
            <motion.div
              id="eligibility"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100"
            >
              <h2 className="font-heading text-2xl font-bold text-textprimary mb-4 flex items-center gap-2">
                <Users className="w-5 h-5 text-[#B8860B]" />
                2. Eligibility
              </h2>
              <p className="font-paragraph text-textprimary/80 leading-relaxed mb-4">
                Our Services are designed for students in Classes 6-12. By using our Services, you represent and warrant that:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li className="font-paragraph text-textprimary/80">
                  You are at least 18 years of age, or if you are under 18, you have obtained parental/guardian consent
                </li>
                <li className="font-paragraph text-textprimary/80">
                  You have the legal capacity to enter into a binding agreement
                </li>
                <li className="font-paragraph text-textprimary/80">
                  All information provided during registration is accurate and complete
                </li>
                <li className="font-paragraph text-textprimary/80">
                  You are not located in a country that is subject to a U.S. government embargo
                </li>
              </ul>
            </motion.div>

            {/* Description of Services */}
            <motion.div
              id="services"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100"
            >
              <h2 className="font-heading text-2xl font-bold text-textprimary mb-4 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-[#B8860B]" />
                3. Description of Services
              </h2>
              <p className="font-paragraph text-textprimary/80 leading-relaxed mb-4">
                Junior Dream provides the following educational services:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li className="font-paragraph text-textprimary/80">
                  <span className="font-bold">Engineering Excellence Program:</span> Mentorship and preparation for 
                  JEE Advanced and tech careers
                </li>
                <li className="font-paragraph text-textprimary/80">
                  <span className="font-bold">Civil Services Leadership Academy:</span> UPSC CSE preparation with 
                  serving/retired officers
                </li>
                <li className="font-paragraph text-textprimary/80">
                  <span className="font-bold">Medical Foundations Program:</span> NEET UG preparation with practicing 
                  doctors
                </li>
                <li className="font-paragraph text-textprimary/80">
                  <span className="font-bold">Parent Portal:</span> Real-time progress tracking and reporting
                </li>
                <li className="font-paragraph text-textprimary/80">
                  <span className="font-bold">Mentorship Sessions:</span> 1-on-1 and group sessions with industry experts
                </li>
              </ul>
              <p className="font-paragraph text-textprimary/80 leading-relaxed mt-4">
                We reserve the right to modify, suspend, or discontinue any part of our Services at any time without 
                prior notice.
              </p>
            </motion.div>

            {/* Registration & Accounts */}
            <motion.div
              id="registration"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100"
            >
              <h2 className="font-heading text-2xl font-bold text-textprimary mb-4">4. Registration & Accounts</h2>
              <p className="font-paragraph text-textprimary/80 leading-relaxed mb-4">
                To access certain features of our Services, you may need to register for an account. You agree to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li className="font-paragraph text-textprimary/80">Provide accurate, current, and complete information</li>
                <li className="font-paragraph text-textprimary/80">Maintain and update your information as needed</li>
                <li className="font-paragraph text-textprimary/80">Keep your login credentials confidential</li>
                <li className="font-paragraph text-textprimary/80">Notify us immediately of any unauthorized use</li>
                <li className="font-paragraph text-textprimary/80">Accept responsibility for all activities under your account</li>
              </ul>
              <p className="font-paragraph text-textprimary/80 leading-relaxed mt-4">
                Parents/Guardians have access to their child's account through the Parent Portal and are responsible 
                for monitoring their child's use of our Services.
              </p>
            </motion.div>

            {/* Fees & Payments */}
            <motion.div
              id="fees"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100"
            >
              <h2 className="font-heading text-2xl font-bold text-textprimary mb-4 flex items-center gap-2">
                <DollarSign className="w-5 h-5 text-[#B8860B]" />
                5. Fees & Payments
              </h2>
              <p className="font-paragraph text-textprimary/80 leading-relaxed mb-4">
                Program fees are as specified at the time of enrollment:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li className="font-paragraph text-textprimary/80">Dream Foundation (Classes 6-8): ₹15,000/year</li>
                <li className="font-paragraph text-textprimary/80">Dream Explorer (Classes 9-10): ₹18,000/year</li>
                <li className="font-paragraph text-textprimary/80">Dream Achiever (Classes 11-12): ₹20,000/year</li>
              </ul>
              <p className="font-paragraph text-textprimary/80 leading-relaxed mb-4">
                <span className="font-bold">Payment Terms:</span>
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li className="font-paragraph text-textprimary/80">Fees are payable in advance for the entire program year</li>
                <li className="font-paragraph text-textprimary/80">Installment plans may be available at our discretion</li>
                <li className="font-paragraph text-textprimary/80">All payments are non-transferable</li>
                <li className="font-paragraph text-textprimary/80">We accept payments via credit/debit cards, UPI, and net banking</li>
                <li className="font-paragraph text-textprimary/80">Prices are inclusive of applicable taxes</li>
              </ul>
            </motion.div>

            {/* Cancellation & Refunds */}
            <motion.div
              id="cancellation"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100"
            >
              <h2 className="font-heading text-2xl font-bold text-textprimary mb-4 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-[#B8860B]" />
                6. Cancellation & Refund Policy
              </h2>
              <p className="font-paragraph text-textprimary/80 leading-relaxed mb-4">
                <span className="font-bold">Cancellation by User:</span>
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li className="font-paragraph text-textprimary/80">
                  Cancellations within 7 days of enrollment: 90% refund (10% processing fee)
                </li>
                <li className="font-paragraph text-textprimary/80">
                  Cancellations after 7 days but before 30 days: 50% refund
                </li>
                <li className="font-paragraph text-textprimary/80">
                  Cancellations after 30 days: No refund
                </li>
                <li className="font-paragraph text-textprimary/80">
                  Refunds will be processed within 15 business days
                </li>
              </ul>
              <p className="font-paragraph text-textprimary/80 leading-relaxed mb-4">
                <span className="font-bold">Cancellation by Junior Dream:</span>
              </p>
              <p className="font-paragraph text-textprimary/80 leading-relaxed">
                We reserve the right to cancel any program due to insufficient enrollment or unforeseen circumstances. 
                In such cases, a full refund will be provided.
              </p>
            </motion.div>

            {/* User Conduct */}
            <motion.div
              id="conduct"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100"
            >
              <h2 className="font-heading text-2xl font-bold text-textprimary mb-4">7. User Conduct</h2>
              <p className="font-paragraph text-textprimary/80 leading-relaxed mb-4">
                You agree not to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li className="font-paragraph text-textprimary/80">Share account credentials with others</li>
                <li className="font-paragraph text-textprimary/80">Record or distribute mentorship sessions without consent</li>
                <li className="font-paragraph text-textprimary/80">Use the platform for any illegal purpose</li>
                <li className="font-paragraph text-textprimary/80">Harass, abuse, or harm other users or mentors</li>
                <li className="font-paragraph text-textprimary/80">Impersonate any person or entity</li>
                <li className="font-paragraph text-textprimary/80">Attempt to gain unauthorized access to our systems</li>
                <li className="font-paragraph text-textprimary/80">Use bots or automated methods to access our Services</li>
              </ul>
              <p className="font-paragraph text-textprimary/80 leading-relaxed mt-4">
                Violation of these rules may result in immediate termination of your account without refund.
              </p>
            </motion.div>

            {/* Intellectual Property */}
            <motion.div
              id="ip"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100"
            >
              <h2 className="font-heading text-2xl font-bold text-textprimary mb-4 flex items-center gap-2">
                <FileText className="w-5 h-5 text-[#B8860B]" />
                8. Intellectual Property
              </h2>
              <p className="font-paragraph text-textprimary/80 leading-relaxed mb-4">
                All content on our platform, including but not limited to curriculum, videos, text, graphics, logos, 
                and software, is the property of Junior Dream Private Limited and is protected by Indian and international 
                copyright laws.
              </p>
              <p className="font-paragraph text-textprimary/80 leading-relaxed mb-4">
                You may not:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li className="font-paragraph text-textprimary/80">Reproduce, distribute, or modify our content</li>
                <li className="font-paragraph text-textprimary/80">Create derivative works based on our content</li>
                <li className="font-paragraph text-textprimary/80">Sell or commercially exploit our content</li>
                <li className="font-paragraph text-textprimary/80">Remove any copyright or proprietary notices</li>
              </ul>
            </motion.div>

            {/* Limitation of Liability */}
            <motion.div
              id="liability"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100"
            >
              <h2 className="font-heading text-2xl font-bold text-textprimary mb-4 flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-[#B8860B]" />
                9. Limitation of Liability
              </h2>
              <p className="font-paragraph text-textprimary/80 leading-relaxed">
                To the maximum extent permitted by law, Junior Dream Private Limited shall not be liable for any 
                indirect, incidental, special, consequential, or punitive damages, including without limitation, loss 
                of profits, data, use, goodwill, or other intangible losses, resulting from:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li className="font-paragraph text-textprimary/80">Your use or inability to use our Services</li>
                <li className="font-paragraph text-textprimary/80">Any conduct or content of any third party</li>
                <li className="font-paragraph text-textprimary/80">Unauthorized access to or alteration of your data</li>
                <li className="font-paragraph text-textprimary/80">Any other matter relating to our Services</li>
              </ul>
              <p className="font-paragraph text-textprimary/80 leading-relaxed mt-4">
                Our total liability to you shall not exceed the amount you paid to us during the twelve months prior 
                to the event giving rise to liability.
              </p>
            </motion.div>

            {/* Termination */}
            <motion.div
              id="termination"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100"
            >
              <h2 className="font-heading text-2xl font-bold text-textprimary mb-4">10. Termination</h2>
              <p className="font-paragraph text-textprimary/80 leading-relaxed mb-4">
                We may terminate or suspend your account and access to our Services immediately, without prior notice 
                or liability, for any reason, including without limitation if you breach these Terms.
              </p>
              <p className="font-paragraph text-textprimary/80 leading-relaxed">
                Upon termination, your right to use our Services will immediately cease. All provisions of these Terms 
                which by their nature should survive termination shall survive, including ownership provisions, warranty 
                disclaimers, indemnity, and limitations of liability.
              </p>
            </motion.div>

            {/* Governing Law */}
            <motion.div
              id="governing"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100"
            >
              <h2 className="font-heading text-2xl font-bold text-textprimary mb-4">11. Governing Law</h2>
              <p className="font-paragraph text-textprimary/80 leading-relaxed">
                These Terms shall be governed and construed in accordance with the laws of India, without regard to its 
                conflict of law provisions. Any dispute arising under or in connection with these Terms shall be subject 
                to the exclusive jurisdiction of the courts in Gurugram, Haryana.
              </p>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              id="contact"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100"
            >
              <h2 className="font-heading text-2xl font-bold text-textprimary mb-4">12. Contact Information</h2>
              <p className="font-paragraph text-textprimary/80 leading-relaxed mb-6">
                If you have any questions about these Terms, please contact us at:
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[#B8860B]" />
                  <span className="font-paragraph text-textprimary/80">legal@juniordream.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#B8860B]" />
                  <span className="font-paragraph text-textprimary/80">+91-7701848421</span>
                </div>
                <div className="flex items-center gap-3">
                  <Globe className="w-5 h-5 text-[#B8860B]" />
                  <span className="font-paragraph text-textprimary/80">www.juniordream.com/terms</span>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#B8860B] mt-1" />
                  <span className="font-paragraph text-textprimary/80">
                    Junior Dream Private Limited<br />
                    Gurugram, Haryana - 122001<br />
                    India
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Acceptance Banner */}
      <section className="bg-[#B8860B]/5 py-12 border-y border-[#B8860B]/20">
        <div className="max-w-[120rem] mx-auto px-6 lg:px-12 text-center">
          <p className="font-paragraph text-textprimary/80 mb-4">
            By using Junior Dream's services, you acknowledge that you have read, understood, and agree to be bound by 
            these Terms and Conditions.
          </p>
          <div className="flex items-center justify-center gap-4">
            <span className="text-sm text-textprimary/60">Last Updated: March 2025</span>
            <span className="w-1 h-1 bg-[#B8860B] rounded-full"></span>
            <span className="text-sm text-textprimary/60">Version 1.0</span>
          </div>
        </div>
      </section>

      <PremiumFooter />
    </div>
  );
}