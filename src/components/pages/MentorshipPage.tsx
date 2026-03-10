import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import PremiumHeader from '../PremiumHeader';
import PremiumFooter from '../PremiumFooter';
import { 
  Users, Award, Target, Linkedin, Mail, Phone, MapPin, 
  Calendar, Star, ChevronRight, Sparkles, Shield, BookOpen,
  Cpu, Heart, Scale, Briefcase, GraduationCap
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function MentorshipPage() {
  const [mentors, setMentors] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadMentors();
  }, []);

  const loadMentors = async () => {
    try {
      // Mock data for coming soon - keeping empty for now
      setMentors([]);
    } catch (error) {
      console.error('Error loading mentors:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <PremiumHeader />

      {/* Hero Section - Premium */}
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
              <Sparkles className="w-4 h-4 text-[#B8860B]" />
              <span className="font-paragraph text-xs uppercase tracking-wider text-white/80">
                Learn From Achievers
              </span>
            </div>

            <h1 className="font-heading text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Expert <span className="text-[#B8860B]">Mentorship</span>
            </h1>
            <p className="font-paragraph text-xl text-white/80 max-w-3xl leading-relaxed">
              Connect with professionals actively practicing in your target career field. 
              Our mentors bring real-world experience from top organizations and institutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Head of Mentorship - Karan Bhat */}
      <section className="max-w-[120rem] mx-auto px-6 lg:px-12 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-4xl lg:text-5xl font-bold text-textprimary mb-4">
            Head of <span className="text-[#B8860B]">Mentorship</span>
          </h2>
          <div className="w-24 h-1 bg-[#B8860B] mx-auto"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-5xl mx-auto"
        >
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
            <div className="grid grid-cols-1 lg:grid-cols-3">
              {/* Image Section */}
              <div className="lg:col-span-1 bg-gradient-to-br from-[#B8860B] to-[#D4AF37] p-8 flex items-center justify-center">
                <div className="relative">
                  <div className="w-48 h-48 rounded-full bg-white/20 backdrop-blur-sm border-4 border-white overflow-hidden flex items-center justify-center">
                    {/* Placeholder for Karan Bhat's photo */}
                    <span className="text-8xl font-bold text-white">KB</span>
                  </div>
                  <div className="absolute -bottom-2 -right-2 bg-[#B8860B] rounded-full p-3 border-4 border-white">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>

              {/* Info Section */}
              <div className="lg:col-span-2 p-8 lg:p-10">
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="font-heading text-3xl font-bold text-textprimary">
                    Karan Bhat
                  </h3>
                  <span className="px-3 py-1 bg-[#B8860B]/20 text-[#B8860B] rounded-full text-xs font-semibold">
                    Head of Mentorship
                  </span>
                </div>

                <p className="font-paragraph text-lg text-textprimary/80 leading-relaxed mb-6">
                  Leading the mentorship division at Junior Dream with a vision to connect every student 
                  with the right industry expert. Karan oversees the entire mentor network, ensuring 
                  quality, relevance, and impact across all programs.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                      <Briefcase className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-xs text-textprimary/60">Experience</p>
                      <p className="font-medium text-textprimary">10+ Years in EdTech</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                      <Users className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <p className="text-xs text-textprimary/60">Mentors Managed</p>
                      <p className="font-medium text-textprimary">50+ Industry Experts</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                      <Target className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <p className="text-xs text-textprimary/60">Students Guided</p>
                      <p className="font-medium text-textprimary">1000+ Aspirants</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center">
                      <GraduationCap className="w-5 h-5 text-amber-600" />
                    </div>
                    <div>
                      <p className="text-xs text-textprimary/60">Qualification</p>
                      <p className="font-medium text-textprimary">IIM Ahmedabad</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-[#B8860B] hover:text-[#D4AF37] transition-colors"
                  >
                    <Linkedin size={20} />
                    <span className="font-paragraph">Connect on LinkedIn</span>
                  </a>
                  <a
                    href="mailto:karan.bhat@juniordream.com"
                    className="inline-flex items-center gap-2 text-textprimary/60 hover:text-[#B8860B] transition-colors"
                  >
                    <Mail size={18} />
                    <span className="font-paragraph">karan.bhat@juniordream.com</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Mentorship Model Section */}
      <section className="max-w-[120rem] mx-auto px-6 lg:px-12 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-4xl lg:text-5xl font-bold text-textprimary mb-4">
            Our Mentorship Model
          </h2>
          <div className="w-24 h-1 bg-[#B8860B] mx-auto mb-6"></div>
          <p className="font-paragraph text-lg text-textprimary/60 max-w-3xl mx-auto">
            We connect students with domain experts who provide personalized guidance, career insights, 
            and real-world perspectives on their chosen fields.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: Users,
              title: 'Personalized Guidance',
              description: 'One-on-one mentorship sessions tailored to individual student goals and learning pace.',
              color: 'blue'
            },
            {
              icon: Award,
              title: 'Industry Expertise',
              description: 'Learn from professionals with proven track records in engineering, civil services, and medicine.',
              color: 'green'
            },
            {
              icon: Target,
              title: 'Career Clarity',
              description: 'Gain insights into day-to-day realities of your target profession and make informed decisions.',
              color: 'purple'
            }
          ].map((feature, index) => {
            const Icon = feature.icon;
            const colors = {
              blue: 'bg-blue-50 text-blue-600 border-blue-200',
              green: 'bg-green-50 text-green-600 border-green-200',
              purple: 'bg-purple-50 text-purple-600 border-purple-200'
            };
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`${colors[feature.color as keyof typeof colors]} rounded-2xl p-8 text-center border-2 hover:shadow-xl transition-all`}
              >
                <div className="w-16 h-16 rounded-full bg-white shadow-lg flex items-center justify-center mx-auto mb-6">
                  <Icon size={32} className={`text-${feature.color}-600`} />
                </div>
                <h3 className="font-heading text-xl font-bold text-textprimary mb-4">
                  {feature.title}
                </h3>
                <p className="font-paragraph text-sm text-textprimary/70 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Mentors Grid - Coming Soon with Blur Effect */}
      <section className="relative py-16 overflow-hidden">
        {/* Blur Overlay */}
        <div className="absolute inset-0 bg-white/80 backdrop-blur-md z-10 flex flex-col items-center justify-center">
          <div className="text-center max-w-2xl mx-auto px-6">
            <div className="w-20 h-20 bg-[#B8860B]/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Sparkles className="w-10 h-10 text-[#B8860B]" />
            </div>
            <h2 className="font-heading text-4xl lg:text-5xl font-bold text-textprimary mb-4">
              Coming Soon
            </h2>
            <p className="font-paragraph text-lg text-textprimary/60 mb-8">
              We're currently onboarding India's top industry experts. Our mentor panel will be live soon!
            </p>
            <div className="flex items-center justify-center gap-3">
              <div className="w-3 h-3 bg-[#B8860B] rounded-full animate-pulse"></div>
              <div className="w-3 h-3 bg-[#B8860B] rounded-full animate-pulse delay-150"></div>
              <div className="w-3 h-3 bg-[#B8860B] rounded-full animate-pulse delay-300"></div>
            </div>
          </div>
        </div>

        {/* Blurred Mentor Cards (Background) */}
        <div className="max-w-[120rem] mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-4xl lg:text-5xl font-bold text-textprimary mb-4">
              Meet Our Mentors
            </h2>
            <div className="w-24 h-1 bg-[#B8860B] mx-auto mb-6"></div>
            <p className="font-paragraph text-lg text-textprimary/60 max-w-3xl mx-auto">
              Domain experts from premier organizations ready to guide you on your educational journey.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 filter blur-sm select-none">
            {/* Sample Mentor Card 1 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
              <div className="h-48 bg-gradient-to-r from-blue-500 to-blue-600"></div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gray-300"></div>
                  <div>
                    <div className="h-4 w-32 bg-gray-200 rounded mb-2"></div>
                    <div className="h-3 w-24 bg-gray-200 rounded"></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="h-3 w-full bg-gray-200 rounded"></div>
                  <div className="h-3 w-5/6 bg-gray-200 rounded"></div>
                </div>
              </div>
            </div>

            {/* Sample Mentor Card 2 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
              <div className="h-48 bg-gradient-to-r from-green-500 to-green-600"></div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gray-300"></div>
                  <div>
                    <div className="h-4 w-32 bg-gray-200 rounded mb-2"></div>
                    <div className="h-3 w-24 bg-gray-200 rounded"></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="h-3 w-full bg-gray-200 rounded"></div>
                  <div className="h-3 w-5/6 bg-gray-200 rounded"></div>
                </div>
              </div>
            </div>

            {/* Sample Mentor Card 3 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
              <div className="h-48 bg-gradient-to-r from-purple-500 to-purple-600"></div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gray-300"></div>
                  <div>
                    <div className="h-4 w-32 bg-gray-200 rounded mb-2"></div>
                    <div className="h-3 w-24 bg-gray-200 rounded"></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="h-3 w-full bg-gray-200 rounded"></div>
                  <div className="h-3 w-5/6 bg-gray-200 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="max-w-[120rem] mx-auto px-6 lg:px-12 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-4xl lg:text-5xl font-bold text-textprimary mb-4">
            Benefits of Our Mentorship
          </h2>
          <div className="w-24 h-1 bg-[#B8860B] mx-auto mb-6"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              title: 'Real-World Insights',
              description: 'Learn about the actual day-to-day work in your target profession from those who live it.',
              icon: Briefcase,
              color: 'blue'
            },
            {
              title: 'Career Path Clarity',
              description: 'Understand the steps, challenges, and opportunities in your chosen field before committing.',
              icon: Target,
              color: 'green'
            },
            {
              title: 'Network Building',
              description: 'Connect with professionals who can provide guidance throughout your educational journey.',
              icon: Users,
              color: 'purple'
            },
            {
              title: 'Informed Decisions',
              description: 'Make better choices about your education and career based on expert advice and experience.',
              icon: Shield,
              color: 'amber'
            }
          ].map((benefit, index) => {
            const Icon = benefit.icon;
            const colors = {
              blue: 'bg-blue-50 border-blue-200',
              green: 'bg-green-50 border-green-200',
              purple: 'bg-purple-50 border-purple-200',
              amber: 'bg-amber-50 border-amber-200'
            };
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`${colors[benefit.color as keyof typeof colors]} rounded-2xl p-8 border-2 hover:shadow-xl transition-all`}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center flex-shrink-0">
                    <Icon size={24} className={`text-${benefit.color}-600`} />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-bold text-textprimary mb-2">
                      {benefit.title}
                    </h3>
                    <p className="font-paragraph text-sm text-textprimary/70 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[#0A0A0A] to-[#1A1A1A] text-white py-16">
        <div className="max-w-[120rem] mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-3xl lg:text-4xl font-bold mb-4">
              Ready to Get Mentored by Experts?
            </h2>
            <p className="font-paragraph text-lg text-white/80 max-w-2xl mx-auto mb-8">
              Join Junior Dream and get personalized guidance from industry professionals
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/apply"
                className="px-8 py-3 bg-[#B8860B] text-white rounded-lg hover:bg-[#D4AF37] transition-colors font-semibold"
              >
                Apply Now
              </Link>
              <Link
                to="/programs"
                className="px-8 py-3 border border-white text-white rounded-lg hover:bg-white/10 transition-colors"
              >
                Explore Programs
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <PremiumFooter />
    </div>
  );
}