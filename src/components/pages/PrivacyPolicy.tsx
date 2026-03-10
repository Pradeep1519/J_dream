// src/components/pages/PrivacyPolicy.tsx
import { motion } from 'framer-motion';
import PremiumHeader from '../PremiumHeader';
import PremiumFooter from '../PremiumFooter';
import { 
  Shield, Lock, Eye, Database, Mail, Phone, Globe, MapPin, ArrowLeft 
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

export default function PrivacyPolicy() {
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
              <Shield className="w-4 h-4 text-[#B8860B]" />
              <span className="font-paragraph text-xs uppercase tracking-wider text-white/80">
                Privacy & Security
              </span>
            </div>

            <h1 className="font-heading text-5xl lg:text-6xl font-black mb-6 leading-tight">
              Privacy <span className="text-[#B8860B]">Policy</span>
            </h1>
            <p className="font-paragraph text-xl text-white/80 max-w-3xl leading-relaxed">
              Your privacy is important to us. Learn how Junior Dream collects, uses, and protects your personal information.
            </p>
            <p className="font-paragraph text-sm text-white/60 mt-4">
              Last Updated: March 2025
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
                  { id: 'intro', label: 'Introduction' },
                  { id: 'collection', label: 'Information Collection' },
                  { id: 'usage', label: 'How We Use Information' },
                  { id: 'sharing', label: 'Information Sharing' },
                  { id: 'security', label: 'Data Security' },
                  { id: 'rights', label: 'Your Rights' },
                  { id: 'cookies', label: 'Cookies Policy' },
                  { id: 'changes', label: 'Changes to Policy' },
                  { id: 'contact', label: 'Contact Us' }
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
            {/* Introduction */}
            <motion.div
              id="intro"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100"
            >
              <h2 className="font-heading text-2xl font-bold text-textprimary mb-4 flex items-center gap-2">
                <Eye className="w-5 h-5 text-[#B8860B]" />
                1. Introduction
              </h2>
              <p className="font-paragraph text-textprimary/80 leading-relaxed mb-4">
                Junior Dream Private Limited ("Company," "we," "us," or "our") is committed to protecting your privacy. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit 
                our website www.juniordream.com, including any other media form, media channel, mobile website, or mobile 
                application related or connected thereto (collectively, the "Site").
              </p>
              <p className="font-paragraph text-textprimary/80 leading-relaxed">
                Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, 
                please do not access the site. We reserve the right to make changes to this privacy policy at any time 
                and for any reason. We will alert you about any changes by updating the "Last Updated" date of this 
                privacy policy.
              </p>
            </motion.div>

            {/* Information Collection */}
            <motion.div
              id="collection"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100"
            >
              <h2 className="font-heading text-2xl font-bold text-textprimary mb-4 flex items-center gap-2">
                <Database className="w-5 h-5 text-[#B8860B]" />
                2. Information We Collect
              </h2>
              
              <h3 className="font-heading text-lg font-bold text-textprimary mt-4 mb-2">Personal Data</h3>
              <p className="font-paragraph text-textprimary/80 leading-relaxed mb-4">
                While using our Site, we may ask you to provide us with certain personally identifiable information 
                that can be used to contact or identify you. Personally identifiable information may include, but is not 
                limited to:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li className="font-paragraph text-textprimary/80">Full Name</li>
                <li className="font-paragraph text-textprimary/80">Email Address</li>
                <li className="font-paragraph text-textprimary/80">Phone Number</li>
                <li className="font-paragraph text-textprimary/80">Date of Birth</li>
                <li className="font-paragraph text-textprimary/80">Educational Information (School, Class, Grades)</li>
                <li className="font-paragraph text-textprimary/80">Parent/Guardian Information</li>
                <li className="font-paragraph text-textprimary/80">Payment Information (processed securely through third-party providers)</li>
              </ul>

              <h3 className="font-heading text-lg font-bold text-textprimary mt-4 mb-2">Derivative Data</h3>
              <p className="font-paragraph text-textprimary/80 leading-relaxed mb-4">
                Our servers automatically collect information when you access the Site, such as your IP address, 
                browser type, operating system, access times, and the pages you have viewed directly before and after 
                accessing the Site.
              </p>

              <h3 className="font-heading text-lg font-bold text-textprimary mt-4 mb-2">Child Privacy</h3>
              <p className="font-paragraph text-textprimary/80 leading-relaxed">
                Our services are designed for students in Classes 6-12. We collect information from children only with 
                parental consent. Parents can review, delete, or manage their child's information by contacting us at 
                privacy@juniordream.com.
              </p>
            </motion.div>

            {/* How We Use Information */}
            <motion.div
              id="usage"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100"
            >
              <h2 className="font-heading text-2xl font-bold text-textprimary mb-4 flex items-center gap-2">
                <Lock className="w-5 h-5 text-[#B8860B]" />
                3. How We Use Your Information
              </h2>
              <p className="font-paragraph text-textprimary/80 leading-relaxed mb-4">
                We use the information we collect in the following ways:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li className="font-paragraph text-textprimary/80">To create and manage your account</li>
                <li className="font-paragraph text-textprimary/80">To process your enrollment in programs</li>
                <li className="font-paragraph text-textprimary/80">To deliver personalized mentorship sessions</li>
                <li className="font-paragraph text-textprimary/80">To communicate with you about programs, updates, and events</li>
                <li className="font-paragraph text-textprimary/80">To track progress and generate performance reports</li>
                <li className="font-paragraph text-textprimary/80">To improve our services and develop new offerings</li>
                <li className="font-paragraph text-textprimary/80">To comply with legal obligations</li>
                <li className="font-paragraph text-textprimary/80">To prevent fraudulent activities</li>
              </ul>
            </motion.div>

            {/* Information Sharing */}
            <motion.div
              id="sharing"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100"
            >
              <h2 className="font-heading text-2xl font-bold text-textprimary mb-4 flex items-center gap-2">
                <Globe className="w-5 h-5 text-[#B8860B]" />
                4. Sharing Your Information
              </h2>
              <p className="font-paragraph text-textprimary/80 leading-relaxed mb-4">
                We may share information we have collected about you in certain situations:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li className="font-paragraph text-textprimary/80">
                  <span className="font-bold">With Mentors:</span> Selected information is shared with assigned mentors 
                  for providing personalized guidance.
                </li>
                <li className="font-paragraph text-textprimary/80">
                  <span className="font-bold">With Service Providers:</span> We may share your information with third-party 
                  vendors who perform services for us (payment processing, email delivery, analytics).
                </li>
                <li className="font-paragraph text-textprimary/80">
                  <span className="font-bold">With Parent/Guardian:</span> Parents have access to their child's progress 
                  through the Parent Portal.
                </li>
                <li className="font-paragraph text-textprimary/80">
                  <span className="font-bold">Legal Requirements:</span> We may disclose information if required by law 
                  or in response to valid requests by public authorities.
                </li>
              </ul>
              <p className="font-paragraph text-textprimary/80 leading-relaxed mt-4">
                <span className="font-bold">We do not sell, rent, or trade your personal information to third parties</span> 
                for their commercial purposes without your explicit consent.
              </p>
            </motion.div>

            {/* Data Security */}
            <motion.div
              id="security"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100"
            >
              <h2 className="font-heading text-2xl font-bold text-textprimary mb-4 flex items-center gap-2">
                <Shield className="w-5 h-5 text-[#B8860B]" />
                5. Data Security
              </h2>
              <p className="font-paragraph text-textprimary/80 leading-relaxed mb-4">
                We implement a variety of security measures to maintain the safety of your personal information:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li className="font-paragraph text-textprimary/80">SSL/TLS encryption for all data transmission</li>
                <li className="font-paragraph text-textprimary/80">Secure servers and firewalls</li>
                <li className="font-paragraph text-textprimary/80">Regular security audits and vulnerability testing</li>
                <li className="font-paragraph text-textprimary/80">Access controls and authentication protocols</li>
                <li className="font-paragraph text-textprimary/80">GDPR-compliant data handling practices</li>
              </ul>
              <p className="font-paragraph text-textprimary/80 leading-relaxed mt-4">
                However, no method of transmission over the Internet or electronic storage is 100% secure. While we 
                strive to use commercially acceptable means to protect your personal information, we cannot guarantee 
                its absolute security.
              </p>
            </motion.div>

            {/* Your Rights */}
            <motion.div
              id="rights"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100"
            >
              <h2 className="font-heading text-2xl font-bold text-textprimary mb-4 flex items-center gap-2">
                <Eye className="w-5 h-5 text-[#B8860B]" />
                6. Your Rights
              </h2>
              <p className="font-paragraph text-textprimary/80 leading-relaxed mb-4">
                Depending on your location, you may have the following rights regarding your personal information:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li className="font-paragraph text-textprimary/80">Right to access your personal data</li>
                <li className="font-paragraph text-textprimary/80">Right to rectify inaccurate data</li>
                <li className="font-paragraph text-textprimary/80">Right to delete your data (Right to be forgotten)</li>
                <li className="font-paragraph text-textprimary/80">Right to restrict processing</li>
                <li className="font-paragraph text-textprimary/80">Right to data portability</li>
                <li className="font-paragraph text-textprimary/80">Right to object to processing</li>
                <li className="font-paragraph text-textprimary/80">Right to withdraw consent</li>
              </ul>
              <p className="font-paragraph text-textprimary/80 leading-relaxed mt-4">
                To exercise these rights, please contact us at privacy@juniordream.com. We will respond to your request 
                within 30 days.
              </p>
            </motion.div>

            {/* Cookies Policy */}
            <motion.div
              id="cookies"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100"
            >
              <h2 className="font-heading text-2xl font-bold text-textprimary mb-4">7. Cookies Policy</h2>
              <p className="font-paragraph text-textprimary/80 leading-relaxed mb-4">
                We use cookies and similar tracking technologies to track activity on our Site and hold certain 
                information. Cookies are files with small amount of data which may include an anonymous unique identifier.
              </p>
              <p className="font-paragraph text-textprimary/80 leading-relaxed mb-4">
                You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, 
                if you do not accept cookies, you may not be able to use some portions of our Site.
              </p>
              <p className="font-paragraph text-textprimary/80 leading-relaxed">
                We use cookies for:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li className="font-paragraph text-textprimary/80">Remembering your login session</li>
                <li className="font-paragraph text-textprimary/80">Understanding how you use our Site</li>
                <li className="font-paragraph text-textprimary/80">Improving user experience</li>
                <li className="font-paragraph text-textprimary/80">Analytics and performance tracking</li>
              </ul>
            </motion.div>

            {/* Changes to Policy */}
            <motion.div
              id="changes"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100"
            >
              <h2 className="font-heading text-2xl font-bold text-textprimary mb-4">8. Changes to This Privacy Policy</h2>
              <p className="font-paragraph text-textprimary/80 leading-relaxed">
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new 
                Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this Privacy 
                Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on 
                this page.
              </p>
            </motion.div>

            {/* Contact Us */}
            <motion.div
              id="contact"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100"
            >
              <h2 className="font-heading text-2xl font-bold text-textprimary mb-4">9. Contact Us</h2>
              <p className="font-paragraph text-textprimary/80 leading-relaxed mb-6">
                If you have questions or concerns about this Privacy Policy, please contact us at:
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[#B8860B]" />
                  <span className="font-paragraph text-textprimary/80">privacy@juniordream.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#B8860B]" />
                  <span className="font-paragraph text-textprimary/80">+91-7701848421</span>
                </div>
                <div className="flex items-center gap-3">
                  <Globe className="w-5 h-5 text-[#B8860B]" />
                  <span className="font-paragraph text-textprimary/80">www.juniordream.com/privacy</span>
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

      <PremiumFooter />
    </div>
  );
}