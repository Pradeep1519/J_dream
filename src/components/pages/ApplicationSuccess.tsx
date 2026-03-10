// src/components/pages/ApplicationSuccess.tsx
import { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import PremiumHeader from '../PremiumHeader';
import PremiumFooter from '../PremiumFooter';
import { CheckCircle, ArrowRight, Download, Calendar, Mail, Phone } from 'lucide-react';

export default function ApplicationSuccess() {
  const location = useLocation();
  const navigate = useNavigate();
  const data = location.state;

  useEffect(() => {
    // If no data, redirect to apply page
    if (!data) {
      navigate('/apply');
    }
  }, [data, navigate]);

  if (!data) return null;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <PremiumHeader />

      <div className="pt-32 pb-16 px-6 lg:px-12">
        <div className="max-w-3xl mx-auto text-center">
          {/* Success Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <CheckCircle size={40} className="text-green-600" />
          </motion.div>

          {/* Success Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="font-heading text-4xl font-bold text-textprimary mb-4">
              Application Submitted Successfully! 🎉
            </h1>
            <p className="text-lg text-textprimary/60 mb-8">
              Thank you for applying to Junior Dream. We're excited to have you on board!
            </p>
          </motion.div>

          {/* Enrollment Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-gray-100"
          >
            <h2 className="font-heading text-2xl font-bold text-textprimary mb-6">
              Enrollment Details
            </h2>
            
            <div className="space-y-4 text-left">
              <div className="flex justify-between items-center py-3 border-b border-gray-100">
                <span className="text-textprimary/60">Enrollment Number</span>
                <span className="font-heading font-bold text-[#B8860B] text-xl">
                  {data.enrollmentNumber}
                </span>
              </div>
              
              <div className="flex justify-between items-center py-3 border-b border-gray-100">
                <span className="text-textprimary/60">Student Name</span>
                <span className="font-medium text-textprimary">{data.studentName}</span>
              </div>
              
              <div className="flex justify-between items-center py-3 border-b border-gray-100">
                <span className="text-textprimary/60">Program</span>
                <span className="font-medium text-textprimary">
                  {data.program === 'engineering' ? 'Engineering Excellence' :
                   data.program === 'medical' ? 'Medical Foundations' :
                   'Civil Services Leadership'}
                </span>
              </div>
              
              <div className="flex justify-between items-center py-3 border-b border-gray-100">
                <span className="text-textprimary/60">Batch</span>
                <span className="font-medium text-textprimary">
                  {data.batch === 'foundation' ? 'Dream Foundation' :
                   data.batch === 'explorer' ? 'Dream Explorer' :
                   'Dream Achiever'}
                </span>
              </div>
              
              <div className="flex justify-between items-center py-3">
                <span className="text-textprimary/60">Total Fee</span>
                <span className="font-heading font-bold text-[#B8860B] text-xl">{data.fee}</span>
              </div>
            </div>
          </motion.div>

          {/* Next Steps */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-blue-50 rounded-xl p-6 mb-8 text-left"
          >
            <h3 className="font-heading text-lg font-bold text-textprimary mb-4 flex items-center gap-2">
              <Calendar size={20} className="text-[#B8860B]" />
              Next Steps
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="w-5 h-5 bg-[#B8860B]/20 rounded-full flex items-center justify-center text-[#B8860B] text-sm font-bold flex-shrink-0 mt-0.5">1</span>
                <span className="text-textprimary/80">You will receive a confirmation email with payment details within 24 hours.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-5 h-5 bg-[#B8860B]/20 rounded-full flex items-center justify-center text-[#B8860B] text-sm font-bold flex-shrink-0 mt-0.5">2</span>
                <span className="text-textprimary/80">Complete the payment to confirm your seat in the batch.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-5 h-5 bg-[#B8860B]/20 rounded-full flex items-center justify-center text-[#B8860B] text-sm font-bold flex-shrink-0 mt-0.5">3</span>
                <span className="text-textprimary/80">You'll be added to the WhatsApp group and get orientation details.</span>
              </li>
            </ul>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button
              onClick={() => window.print()}
              className="px-8 py-3 border border-gray-300 text-textprimary rounded-lg hover:bg-gray-50 transition-colors inline-flex items-center justify-center gap-2"
            >
              <Download size={18} />
              Download Receipt
            </button>
            <Link
              to="/"
              className="px-8 py-3 bg-[#B8860B] text-white rounded-lg hover:bg-[#D4AF37] transition-colors inline-flex items-center justify-center gap-2"
            >
              Go to Homepage
              <ArrowRight size={18} />
            </Link>
          </motion.div>

          {/* Contact Info */}
          <div className="mt-12 text-sm text-textprimary/60">
            <p>Have questions? Contact us:</p>
            <div className="flex items-center justify-center gap-4 mt-2">
              <a href="mailto:admissions@juniordream.com" className="text-[#B8860B] hover:underline flex items-center gap-1">
                <Mail size={14} /> admissions@juniordream.com
              </a>
              <span>|</span>
              <a href="tel:+911234567890" className="text-[#B8860B] hover:underline flex items-center gap-1">
                <Phone size={14} /> +91 123 456 7890
              </a>
            </div>
          </div>
        </div>
      </div>

      <PremiumFooter />
    </div>
  );
}