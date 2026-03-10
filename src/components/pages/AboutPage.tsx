import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import PremiumHeader from '../PremiumHeader';
import PremiumFooter from '../PremiumFooter';
import { 
  TrendingUp, Users, Award, Linkedin, Target, Eye, Sparkles, 
  Calendar, Clock, ChevronRight, BookOpen, Briefcase, Star,
  Zap, Code, Shield, Heart, Scale, Globe, Mail, Phone, MapPin
} from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <PremiumHeader />
      
      {/* Hero Section - Premium with Company Tagline */}
      <section className="relative bg-gradient-to-br from-[#0A0A0A] via-[#1A1A1A] to-[#2A2A2A] text-white py-32 overflow-hidden">
        {/* Animated Background */}
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
            {/* Premium Badge with Tagline */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-8 border border-[#B8860B]/30">
              <Sparkles className="w-4 h-4 text-[#B8860B]" />
              <span className="font-paragraph text-xs uppercase tracking-wider text-white/80">
                Learn From Achievers to become One
              </span>
            </div>

            <h1 className="font-heading text-6xl lg:text-7xl font-black mb-6 leading-tight">
              Transforming Education<br />Through{' '}
              <span className="text-[#B8860B]">Precision Mentorship</span>
            </h1>
            <p className="font-paragraph text-xl text-white/80 max-w-3xl leading-relaxed mb-6">
              Gurugram, Haryana | Founded 2025 | www.juniordream.com
            </p>
            <p className="font-paragraph text-lg text-white/70 max-w-3xl leading-relaxed">
              Junior Dream Private Limited delivers executive grade edtech solutions for students in Classes 6-12, 
              launching three specialized programs: Engineering Excellence, Civil Services Leadership (IAS/IPS), 
              and Medical Foundations (MBBS).
            </p>
            
            {/* Stats */}
            <div className="flex flex-wrap gap-8 mt-12">
              <div>
                <div className="font-heading text-3xl font-bold text-[#B8860B]">500+</div>
                <div className="font-paragraph text-sm text-white/60">Active Students</div>
              </div>
              <div>
                <div className="font-heading text-3xl font-bold text-[#B8860B]">92%</div>
                <div className="font-paragraph text-sm text-white/60">Parent NPS</div>
              </div>
              <div>
                <div className="font-heading text-3xl font-bold text-[#B8860B]">88%</div>
                <div className="font-paragraph text-sm text-white/60">Re-enrollment</div>
              </div>
              <div>
                <div className="font-heading text-3xl font-bold text-[#B8860B]">25+</div>
                <div className="font-paragraph text-sm text-white/60">Corporate Mentors</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="max-w-[120rem] mx-auto px-6 lg:px-12 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#B8860B]/10 rounded-full blur-2xl"></div>
            <div className="relative">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#B8860B] to-[#D4AF37] flex items-center justify-center">
                  <Target className="w-7 h-7 text-white" />
                </div>
                <span className="font-heading text-sm font-bold tracking-[0.3em] text-[#B8860B] uppercase">Our Mission</span>
              </div>
              <h2 className="font-heading text-4xl lg:text-5xl font-bold text-textprimary mb-8 leading-tight">
                Eliminate<br />Educational<br />Uncertainty
              </h2>
              <div className="border-l-4 border-[#B8860B] pl-6">
                <p className="font-paragraph text-lg text-textprimary/70 leading-relaxed">
                  To eliminate educational uncertainty by providing students direct access to professionals 
                  practicing their target careers, achieving 95%+ exam success rates alongside enterprise-ready 
                  professional competencies.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative lg:mt-32"
          >
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#B8860B]/10 rounded-full blur-2xl"></div>
            <div className="relative text-right">
              <div className="flex items-center gap-4 mb-6 justify-end">
                <span className="font-heading text-sm font-bold tracking-[0.3em] text-[#B8860B] uppercase">Our Vision</span>
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#B8860B] to-[#D4AF37] flex items-center justify-center">
                  <Eye className="w-7 h-7 text-white" />
                </div>
              </div>
              <h2 className="font-heading text-4xl lg:text-5xl font-bold text-textprimary mb-8 leading-tight">
                India's Premier<br />Mentorship<br />Platform
              </h2>
              <div className="border-r-4 border-[#B8860B] pr-6">
                <p className="font-paragraph text-lg text-textprimary/70 leading-relaxed">
                  Position Junior Dream as India's premier mentorship platform, scaling to 50,000+ students 
                  nationwide by 2028 through strategic partnerships with 100+ MNCs, hospitals, and government bodies.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mentor Precision Matching™ - USP Section */}
      <section className="bg-gradient-to-br from-[#0A0A0A] to-[#1A1A1A] text-white py-24">
        <div className="max-w-[120rem] mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-[#B8860B]/20 rounded-full text-[#B8860B] font-paragraph text-sm mb-4">
              Our Differentiator
            </span>
            <h2 className="font-heading text-4xl lg:text-5xl font-bold mb-4">
              Mentor Precision Matching™
            </h2>
            <p className="font-paragraph text-xl text-white/70 max-w-3xl mx-auto">
              No generic faculty. A Class 9 student targeting Google Software Engineering receives weekly 
              mentorship from Google Senior Engineers, not school teachers.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Code, title: 'Custom Career Roadmaps', desc: 'Aligned to target company requirements' },
              { icon: Zap, title: 'Live Doubt Resolution', desc: 'On enterprise-grade tools (VS Code, GitHub, LeetCode)' },
              { icon: Briefcase, title: 'Portfolio Guidance', desc: 'For MNC applications' },
              { icon: Globe, title: 'Referral Networks', desc: 'Direct connections to hiring managers' }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-[#B8860B]/30 transition-all"
                >
                  <Icon className="w-10 h-10 text-[#B8860B] mb-4" />
                  <h3 className="font-heading text-lg font-bold mb-2">{item.title}</h3>
                  <p className="font-paragraph text-sm text-white/60">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Program Architecture */}
      <section className="py-24">
        <div className="max-w-[120rem] mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-4xl lg:text-5xl font-bold text-textprimary mb-4">
              Program Architecture
            </h2>
            <div className="w-24 h-1 bg-[#B8860B] mx-auto mb-6"></div>
            <p className="font-paragraph text-lg text-textprimary/60 max-w-2xl mx-auto">
              Three specialized programs designed for career excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Engineering */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all overflow-hidden border border-gray-100"
            >
              <div className="h-2 bg-gradient-to-r from-blue-500 to-blue-600"></div>
              <div className="p-8">
                <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center mb-6">
                  <Code className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-textprimary mb-2">
                  Engineering Excellence Program
                </h3>
                <p className="text-sm text-blue-600 font-semibold mb-4">
                  Target: JEE Advanced, tech career preparation (20+ specializations)
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <Star size={16} className="text-[#B8860B] mt-1 flex-shrink-0" />
                    <span className="font-paragraph text-sm text-textprimary/70">Mentorship: Senior Software Engineers from FAANG/MNC companies (Amazon SDE-II, Google L4, Microsoft engineers with 4+ YOE)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star size={16} className="text-[#B8860B] mt-1 flex-shrink-0" />
                    <span className="font-paragraph text-sm text-textprimary/70">Curriculum: Weekly coding bootcamps, live projects, LeetCode mastery, system design foundations, internship pipelines</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star size={16} className="text-[#B8860B] mt-1 flex-shrink-0" />
                    <span className="font-paragraph text-sm text-textprimary/70">Outcomes: Portfolio development, MNC internship placements, top-100 JEE ranks</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Civil Services */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all overflow-hidden border border-gray-100"
            >
              <div className="h-2 bg-gradient-to-r from-purple-500 to-purple-600"></div>
              <div className="p-8">
                <div className="w-16 h-16 rounded-2xl bg-purple-100 flex items-center justify-center mb-6">
                  <Scale className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-textprimary mb-2">
                  Civil Services Leadership Academy (IAS/IPS)
                </h3>
                <p className="text-sm text-purple-600 font-semibold mb-4">
                  Target: UPSC CSE (Prelims, Mains, Interview)
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <Star size={16} className="text-[#B8860B] mt-1 flex-shrink-0" />
                    <span className="font-paragraph text-sm text-textprimary/70">Mentorship: Serving/Retired IAS, IPS, IRS officers (4+ years field experience)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star size={16} className="text-[#B8860B] mt-1 flex-shrink-0" />
                    <span className="font-paragraph text-sm text-textprimary/70">Curriculum: GS paper mastery, current affairs deep analysis, essay frameworks, personality test simulations, governance case studies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star size={16} className="text-[#B8860B] mt-1 flex-shrink-0" />
                    <span className="font-paragraph text-sm text-textprimary/70">Outcomes: UPSC Prelims clearance (85%+ success), interview shortlists</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Medical */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all overflow-hidden border border-gray-100"
            >
              <div className="h-2 bg-gradient-to-r from-green-500 to-green-600"></div>
              <div className="p-8">
                <div className="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center mb-6">
                  <Heart className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-textprimary mb-2">
                  Medical Foundations Program (MBBS/NEET)
                </h3>
                <p className="text-sm text-green-600 font-semibold mb-4">
                  Target: NEET UG, AIIMS JIPMER preparation
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <Star size={16} className="text-[#B8860B] mt-1 flex-shrink-0" />
                    <span className="font-paragraph text-sm text-textprimary/70">Mentorship: Practicing consultants from AIIMS, Apollo, Fortis (4+ years clinical experience)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star size={16} className="text-[#B8860B] mt-1 flex-shrink-0" />
                    <span className="font-paragraph text-sm text-textprimary/70">Curriculum: NCERT mastery, clinical case analysis, diagnostic reasoning, medical ethics, mock NEET environment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star size={16} className="text-[#B8860B] mt-1 flex-shrink-0" />
                    <span className="font-paragraph text-sm text-textprimary/70">Outcomes: Top 100 NEET ranks, AIIMS shortlists</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enterprise Parent Portal™ */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-[120rem] mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-2 bg-[#B8860B]/20 rounded-full text-[#B8860B] font-paragraph text-sm mb-4">
              Enterprise Solution
            </span>
            <h2 className="font-heading text-4xl lg:text-5xl font-bold text-textprimary mb-4">
              Enterprise Parent Portal™
            </h2>
            <p className="font-paragraph text-lg text-textprimary/60 max-w-2xl mx-auto">
              Every enrolled family receives institutional-grade visibility through our secure, GDPR-compliant Parent Portal
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              'Real-time progress tracking',
              'Session recordings & materials',
              'Mentor feedback & reports',
              'Performance analytics',
              'Upcoming session calendar',
              'Direct mentor messaging'
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-white rounded-xl p-4 shadow-sm flex items-center gap-3"
              >
                <div className="w-2 h-2 bg-[#B8860B] rounded-full"></div>
                <span className="font-paragraph text-sm text-textprimary/80">{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership & Operations */}
      <section className="py-24">
        <div className="max-w-[120rem] mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-4xl lg:text-5xl font-bold text-textprimary mb-4">
              Leadership & Operations
            </h2>
            <div className="w-24 h-1 bg-[#B8860B] mx-auto mb-6"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Founders */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100"
            >
              <h3 className="font-heading text-xl font-bold text-textprimary mb-4 flex items-center gap-2">
                <Award className="w-5 h-5 text-[#B8860B]" />
                Founders & CEOs
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="font-heading font-bold text-textprimary">Sahil Singh & Pradeep Rathore</p>
                  <p className="font-paragraph text-sm text-textprimary/70 mt-1">
                    Data engineering specialists with 1.5+ years building scalable edtech platforms 
                    (SQL Server architecture, Python automation, React development, edtech entrepreneurship)
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Mentor Standards */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100"
            >
              <h3 className="font-heading text-xl font-bold text-textprimary mb-4 flex items-center gap-2">
                <Star className="w-5 h-5 text-[#B8860B]" />
                Mentor Standards
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#B8860B] mt-1 flex-shrink-0" />
                  <span className="font-paragraph text-sm text-textprimary/70">100% professionals from target organizations</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#B8860B] mt-1 flex-shrink-0" />
                  <span className="font-paragraph text-sm text-textprimary/70">Minimum 4 years domain expertise</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#B8860B] mt-1 flex-shrink-0" />
                  <span className="font-paragraph text-sm text-textprimary/70">Technology Stack: Custom LMS with AI-driven analytics, Zoom integration, automated reporting</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-[120rem] mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-4xl lg:text-5xl font-bold text-textprimary mb-4">
              Performance Metrics (YTD 2026)
            </h2>
            <div className="w-24 h-1 bg-[#B8860B] mx-auto mb-6"></div>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: 'Active Students', value: '500+', sub: 'Delhi-NCR focus' },
              { label: 'Parent NPS', value: '92%', sub: '88% re-enrollment' },
              { label: 'Outcomes', value: '15+', sub: 'Olympiad qualifiers' },
              { label: 'Partnerships', value: '12', sub: 'Schools, 25+ mentors' }
            ].map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg p-6 text-center"
              >
                <div className="font-heading text-3xl font-bold text-[#B8860B] mb-2">{metric.value}</div>
                <p className="font-paragraph text-sm font-medium text-textprimary mb-1">{metric.label}</p>
                <p className="font-paragraph text-xs text-textprimary/60">{metric.sub}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="font-paragraph text-sm text-textprimary/70">
              8 MNC internships secured • 22 students in JEE/NEET top 1000 • 3 live programs
            </p>
          </div>
        </div>
      </section>

      {/* Strategic Growth Roadmap */}
      <section className="py-24">
        <div className="max-w-[120rem] mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-4xl lg:text-5xl font-bold text-textprimary mb-4">
              Strategic Growth Roadmap
            </h2>
            <div className="w-24 h-1 bg-[#B8860B] mx-auto mb-6"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { quarter: 'Q2 2026', title: 'National Expansion', desc: 'Delhi-NCR, Bangalore, Hyderabad' },
              { quarter: 'Q4 2026', title: 'MNC Partnership Program', desc: '100+ companies' },
              { quarter: '2027', title: 'Franchise Model', desc: '10,000 student capacity' }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg p-8 text-center border border-gray-100"
              >
                <span className="inline-block px-3 py-1 bg-[#B8860B]/20 rounded-full text-[#B8860B] text-sm font-semibold mb-4">
                  {item.quarter}
                </span>
                <h3 className="font-heading text-xl font-bold text-textprimary mb-2">{item.title}</h3>
                <p className="font-paragraph text-sm text-textprimary/70">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Engagement */}
      <section className="bg-gradient-to-br from-[#0A0A0A] to-[#1A1A1A] text-white py-24">
        <div className="max-w-[120rem] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-heading text-4xl lg:text-5xl font-bold mb-6">
                Corporate Engagement<br />Opportunities
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-heading text-xl font-bold text-[#B8860B] mb-2">For Employers</h3>
                  <p className="font-paragraph text-white/70">Sponsor mentorship programs, host masterclasses, direct talent pipeline</p>
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold text-[#B8860B] mb-2">For Senior Professionals</h3>
                  <p className="font-paragraph text-white/70">Part-time mentorship (4 hrs/week), build personal brand, give back to education</p>
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold text-[#B8860B] mb-2">ROI</h3>
                  <p className="font-paragraph text-white/70">Access to pre-vetted, internship-ready talent from Class 9 onwards</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
            >
              <h3 className="font-heading text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#B8860B]" />
                  <span className="font-paragraph">+91-7701848421</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[#B8860B]" />
                  <span className="font-paragraph">info@JuniorDream.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Globe className="w-5 h-5 text-[#B8860B]" />
                  <span className="font-paragraph">www.juniordream.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-[#B8860B]" />
                  <span className="font-paragraph">Gurugram, Haryana</span>
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-white/10">
                <p className="font-paragraph text-white/60 text-sm italic">
                  Demo Portal Access: Request institutional preview at juniordream.com
                </p>
                <p className="font-paragraph text-white/80 text-sm mt-4 font-semibold">
                  Junior Dream: Where career dreams meet their professional architects.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <PremiumFooter />
    </div>
  );
}

// Helper component for CheckCircle (since not imported)
function CheckCircle(props: any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.size || 24}
      height={props.size || 24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={props.className}
    >
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );
}