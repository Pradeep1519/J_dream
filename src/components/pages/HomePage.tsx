// HPI 1.7-V - PREMIUM EDITION (ALL 10 OPTIONS)
import React, { useState, useRef, useEffect } from 'react';
import PremiumHeader from '../PremiumHeader';
import PremiumFooter from '../PremiumFooter'; // ✅ IMPORT ADDED
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Target, 
  Eye, 
  Users, 
  Terminal, 
  Cpu, 
  Globe, 
  ChevronRight, 
  Zap,
  Code,
  Layers,
  Sparkles,
  Star
} from 'lucide-react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';

// --- CANONICAL DATA SOURCES ---
const PROGRAMS = [
  {
    id: 'engineering',
    title: 'Engineering Excellence',
    description: 'Comprehensive preparation for aspiring engineers with mentorship from professionals at top tech companies and institutions.',
    link: '/programs/engineering',
    specs: ['JEE Main/Adv', 'Mentorship', 'Mock Tests']
  },
  {
    id: 'civil-services',
    title: 'Civil Services Leadership',
    description: 'Strategic guidance for IAS/IPS aspirants with insights from serving officers and successful candidates.',
    link: '/programs/civil',
    specs: ['UPSC Syllabus', 'Interview Prep', 'Ethics']
  },
  {
    id: 'medical',
    title: 'Medical Foundations',
    description: 'MBBS preparation with mentorship from practicing doctors and medical professionals from premier institutions.',
    link: '/programs/medical',
    specs: ['NEET Prep', 'Clinical Insights', 'Biology']
  }
];

const FEATURES = [
  {
    icon: Users,
    title: 'Expert Mentors',
    description: 'Domain experts from top organizations providing personalized guidance and career insights.',
    stat: '50+'
  },
  {
    icon: Target,
    title: 'Targeted Programs',
    description: 'Specialized curriculum designed for specific career paths with proven methodologies.',
    stat: '3'
  },
  {
    icon: Eye,
    title: 'Real-World Focus',
    description: 'Connect with professionals actively practicing in your target field for authentic guidance.',
    stat: '100%'
  }
];

// --- PREMIUM UTILITY COMPONENTS ---

// OPTION 3: Background Effects - Gold Particles
const GoldParticles = () => {
  const [dimensions, setDimensions] = useState({ width: 1200, height: 800 });

  useEffect(() => {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight
    });
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-[#B8860B] rounded-full opacity-20"
          initial={{
            x: Math.random() * dimensions.width,
            y: Math.random() * dimensions.height,
          }}
          animate={{
            y: [null, -100],
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: 10 + Math.random() * 10,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
        />
      ))}
    </div>
  );
};

// OPTION 3: Background Effects - Noise Texture
const NoiseTexture = () => (
  <div 
    className="absolute inset-0 opacity-5 pointer-events-none"
    style={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.5'/%3E%3C/svg%3E")`,
      backgroundRepeat: 'repeat',
    }}
  />
);

// OPTION 1 & 4: Premium Hero Section (with smaller heading)
const PremiumHeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    setMousePosition({
      x: (clientX / innerWidth - 0.5) * 20,
      y: (clientY / innerHeight - 0.5) * 20,
    });
  };

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative w-full min-h-screen flex items-center bg-gradient-to-br from-[#0A0A0A] via-[#1A1A1A] to-[#2A2A2A] overflow-hidden"
    >
      {/* OPTION 3: All background effects */}
      <NoiseTexture />
      <GoldParticles />

      {/* OPTION 1: Gold accent lines */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          animate={{ x: mousePosition.x, y: mousePosition.y }}
          className="absolute top-20 left-10 w-64 h-px bg-gradient-to-r from-transparent via-[#B8860B] to-transparent"
        />
        <motion.div 
          animate={{ x: -mousePosition.x, y: -mousePosition.y }}
          className="absolute bottom-20 right-10 w-96 h-px bg-gradient-to-r from-transparent via-[#B8860B] to-transparent"
        />
      </div>

      {/* OPTION 4: Slow reveal animations */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 pt-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            {/* OPTION 1: Gold status badge */}
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="inline-flex items-center gap-3 mb-8 border border-[#B8860B]/30 px-4 py-2 rounded-full bg-[#0A0A0A]/50 backdrop-blur-sm"
            >
              <Sparkles className="w-4 h-4 text-[#B8860B]" />
              <span className="font-paragraph text-xs uppercase tracking-[0.2em] text-[#F5F5F5]">
                Premium Education • Since 2025
              </span>
            </motion.div>

            {/* OPTION 2: Luxury typography - CHOTI HEADING YAHAN HAI */}
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.1] tracking-tight mb-8">
              <span className="text-[#F5F5F5]">INNOVATIVE</span><br />
              <span className="text-[#F5F5F5]">EDUCATION</span><br />
              <span className="text-[#B8860B]">SOLUTIONS</span>
            </h1>

            {/* OPTION 5: More breathing space */}
            <p className="font-paragraph text-lg text-[#F5F5F5]/70 mb-12 max-w-xl leading-relaxed tracking-wide">
              Connecting Classes 6-12 students with professionals practicing their target careers. We eliminate educational uncertainty through expert mentorship.
            </p>

            {/* OPTION 8: Micro-interactions */}
            <div className="flex flex-col sm:flex-row gap-6">
              <Link 
                to="/programs" 
                className="group relative px-8 py-4 bg-[#B8860B] text-[#0A0A0A] font-paragraph text-sm font-bold overflow-hidden"
              >
                <motion.div 
                  whileHover={{ scale: 1.2 }}
                  className="absolute inset-0 bg-[#F5F5F5] opacity-0 group-hover:opacity-20 transition-opacity"
                />
                <span className="relative z-10 flex items-center gap-2">
                  {'{ Explore Programs }'} 
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                </span>
              </Link>
              
              <Link 
                to="/partnerships#contact" 
                className="group px-8 py-4 border border-[#B8860B] text-[#B8860B] hover:bg-[#B8860B] hover:text-[#0A0A0A] transition-all duration-500 font-paragraph text-sm"
              >
                <span className="flex items-center gap-2">
                  {'=> Get Started'}
                  <Star className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </span>
              </Link>
            </div>
          </motion.div>

          {/* OPTION 6: Premium card design */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.4 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-[#B8860B]/20 blur-3xl rounded-full" />
            <div className="relative border border-[#B8860B]/30 bg-[#0A0A0A]/50 backdrop-blur-xl p-8 rounded-2xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full border-2 border-[#B8860B] flex items-center justify-center">
                  <Target className="w-6 h-6 text-[#B8860B]" />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold text-[#F5F5F5]">Premium Mentorship</h3>
                  <p className="font-paragraph text-sm text-[#F5F5F5]/60">1-on-1 with industry experts</p>
                </div>
              </div>
              <div className="space-y-4">
                {['Personalized guidance', 'Career clarity', 'Network building'].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + i * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-2 h-2 bg-[#B8860B] rounded-full" />
                    <span className="font-paragraph text-sm text-[#F5F5F5]/80">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* OPTION 4: Slow scroll indicator */}
      <motion.div 
        style={{ opacity: useTransform(scrollY, [0, 200], [1, 0]) }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="font-paragraph text-[10px] uppercase tracking-[0.3em] text-[#F5F5F5]/50">Scroll</span>
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-px h-12 bg-gradient-to-b from-[#B8860B] to-transparent"
        />
      </motion.div>
    </section>
  );
};

// OPTION 6: Premium Card Design
const PremiumProgramCard = ({ program, index }: { program: typeof PROGRAMS[0], index: number }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.15 }}
      whileHover={{ y: -8 }}
      className="group relative bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A] border border-[#B8860B]/20 hover:border-[#B8860B] transition-all duration-500 rounded-2xl overflow-hidden"
    >
      {/* OPTION 3: Inner glow effect */}
      <div className="absolute inset-0 bg-[#B8860B]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* OPTION 1: Gold corner accent */}
      <div className="absolute top-0 right-0 w-20 h-20">
        <div className="absolute top-0 right-0 w-0 h-0 border-t-[40px] border-r-[40px] border-t-[#B8860B] border-r-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>

      <div className="relative p-8">
        {/* OPTION 7: Gold icon */}
        <div className="mb-6">
          <div className="w-16 h-16 rounded-full border-2 border-[#B8860B]/30 group-hover:border-[#B8860B] transition-all flex items-center justify-center">
            <Cpu className="w-8 h-8 text-[#B8860B] group-hover:scale-110 transition-transform" />
          </div>
        </div>

        <div className="font-paragraph text-xs text-[#B8860B] mb-3 tracking-wider">
          PROGRAM_ID: {program.id.toUpperCase()}
        </div>

        {/* OPTION 2: Luxury typography */}
        <h3 className="font-heading text-2xl font-bold text-[#F5F5F5] mb-4 group-hover:text-[#B8860B] transition-colors">
          {program.title}
        </h3>

        <p className="font-paragraph text-sm text-[#F5F5F5]/60 mb-6 leading-relaxed">
          {program.description}
        </p>

        {/* OPTION 6: Premium specs with gold bullets */}
        <div className="space-y-3 mb-8">
          {program.specs.map((spec, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + i * 0.1 }}
              className="flex items-center gap-3"
            >
              <div className="w-1.5 h-1.5 bg-[#B8860B] rounded-full" />
              <span className="font-paragraph text-sm text-[#F5F5F5]/70">{spec}</span>
            </motion.div>
          ))}
        </div>

        {/* OPTION 8: Gold ripple effect on hover */}
        <Link 
          to={program.link}
          className="relative inline-flex items-center gap-2 text-[#F5F5F5] group-hover:text-[#B8860B] transition-colors font-paragraph text-sm font-bold overflow-hidden"
        >
          <span>Initialize Program</span>
          <ArrowRight className="w-4 h-4 transform group-hover:translate-x-2 transition-transform" />
          <motion.div 
            className="absolute bottom-0 left-0 w-full h-px bg-[#B8860B]"
            initial={{ scaleX: 0 }}
            whileHover={{ scaleX: 1 }}
            transition={{ duration: 0.3 }}
          />
        </Link>
      </div>
    </motion.div>
  );
};

// OPTION 7: Premium Image with Gold Overlay
const PremiumImage = ({ src, alt }: { src: string; alt: string }) => {
  return (
    <div className="relative group overflow-hidden rounded-2xl">
      <div className="absolute inset-0 bg-[#B8860B]/20 mix-blend-overlay z-10 group-hover:opacity-75 transition-opacity" />
      <img 
        src={src}
        alt={alt}
        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
      />
      <div className="absolute bottom-4 right-4 z-20 px-3 py-1 bg-[#0A0A0A]/80 border border-[#B8860B] text-[#B8860B] font-paragraph text-xs">
        PREMIUM
      </div>
    </div>
  );
};

// OPTION 4 & 5: Premium Mission Vision Section
const PremiumMissionVisionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section ref={ref} className="relative w-full py-32 bg-[#0A0A0A] overflow-hidden">
      <NoiseTexture />
      <GoldParticles />

      {/* OPTION 5: Asymmetric layout */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Mission - OPTION 4: Slow reveal */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1.2 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 rounded-full border-2 border-[#B8860B] flex items-center justify-center">
                <Target className="w-8 h-8 text-[#B8860B]" />
              </div>
              <span className="font-paragraph text-[#B8860B] text-sm tracking-[0.3em] uppercase">Mission</span>
            </div>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-black text-[#F5F5F5] mb-8 leading-tight">
              ELIMINATE<br />UNCERTAINTY
            </h2>
            <p className="font-paragraph text-lg text-[#F5F5F5]/60 leading-relaxed border-l-2 border-[#B8860B] pl-6">
              To eliminate educational uncertainty by connecting students with professionals practicing their target careers.
            </p>
          </motion.div>

          {/* Vision - OPTION 5: Offset layout */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="lg:mt-32"
          >
            <div className="flex items-center gap-4 mb-8 justify-end">
              <span className="font-paragraph text-[#B8860B] text-sm tracking-[0.3em] uppercase">Vision</span>
              <div className="w-16 h-16 rounded-full border-2 border-[#B8860B] flex items-center justify-center">
                <Eye className="w-8 h-8 text-[#B8860B]" />
              </div>
            </div>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-black text-[#F5F5F5] mb-8 leading-tight text-right">
              PREMIER<br />PLATFORM
            </h2>
            <p className="font-paragraph text-lg text-[#F5F5F5]/60 leading-relaxed text-right border-r-2 border-[#B8860B] pr-6">
              To become India's premier mentorship platform for students nationwide.
            </p>

            {/* OPTION 7: Premium image */}
            <div className="mt-12">
              <PremiumImage 
                src="https://static.wixstatic.com/media/c4abef_7268acbcbe2a42b88a76cc4e55d3b54e~mv2.png"
                alt="Premium mentorship"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Main HomePage with all premium features
export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#F5F5F5] selection:bg-[#B8860B] selection:text-[#0A0A0A] overflow-x-hidden">
      <PremiumHeader />
      
      <main>
        <PremiumHeroSection />
        
        {/* OPTION 4: Slow moving ticker */}
        <div className="w-full bg-[#B8860B] py-4 overflow-hidden">
          <motion.div 
            className="flex whitespace-nowrap"
            animate={{ x: [0, -2000] }}
            transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
          >
            {[...Array(10)].map((_, i) => (
              <div key={i} className="flex items-center gap-8 px-6">
                <span className="font-heading text-lg font-black text-[#0A0A0A]">✦ ONE TO ONE MEET</span>
                <span className="text-[#0A0A0A]">///</span>
                <span className="font-heading text-lg font-black text-[#0A0A0A]">✦ FUTURE LEADERS</span>
                <span className="text-[#0A0A0A]">///</span>
                <span className="font-heading text-lg font-black text-[#0A0A0A]">✦ CAREER CLARITY</span>
                <span className="text-[#0A0A0A]">///</span>
                <span className="font-heading text-lg font-black text-[#0A0A0A]">✦ EXPERT GUIDANCE</span>
                <span className="text-[#0A0A0A]">///</span>
              </div>
            ))}
          </motion.div>
        </div>

        <PremiumMissionVisionSection />

        {/* Programs Section with premium cards */}
        <section className="w-full py-32 bg-[#0A0A0A]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-black text-[#F5F5F5] mb-4">
                SPECIALIZED PROGRAMS
              </h2>
              <div className="w-24 h-1 bg-[#B8860B] mx-auto" />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {PROGRAMS.map((program, index) => (
                <PremiumProgramCard key={program.id} program={program} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us with premium features */}
        <section className="w-full py-32 bg-gradient-to-b from-[#0A0A0A] to-[#1A1A1A]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="font-heading text-4xl md:text-5xl font-black text-[#F5F5F5] mb-6">
                  WHY CHOOSE<br />US?
                </h2>
                <div className="w-24 h-1 bg-[#B8860B] mb-8" />
                <p className="font-paragraph text-lg text-[#F5F5F5]/60 leading-relaxed">
                  We connect students with professionals who are actively practicing in their target careers.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {FEATURES.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    className="p-6 border border-[#B8860B]/20 hover:border-[#B8860B] transition-all rounded-xl"
                  >
                    <feature.icon className="w-8 h-8 text-[#B8860B] mb-4" />
                    <h3 className="font-heading text-xl font-bold text-[#F5F5F5] mb-2">{feature.title}</h3>
                    <p className="font-paragraph text-sm text-[#F5F5F5]/60">{feature.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-32 bg-[#0A0A0A] relative overflow-hidden">
          <GoldParticles />
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Terminal className="w-12 h-12 text-[#B8860B] mx-auto mb-6" />
              <h2 className="font-heading text-4xl md:text-5xl font-black text-[#F5F5F5] mb-6">
                TRANSFORM YOUR<br />
                <span className="text-[#B8860B]">EDUCATIONAL JOURNEY</span>
              </h2>
              <p className="font-paragraph text-lg text-[#F5F5F5]/60 mb-12 max-w-2xl mx-auto">
                Join Junior Dream and connect with professionals who can guide you toward your career goals.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Link 
                  to="/partnerships#contact"
                  className="px-10 py-5 bg-[#B8860B] text-[#0A0A0A] font-paragraph font-bold hover:bg-[#D4AF37] transition-all"
                >
                  {'{ START APPLICATION }'}
                </Link>
                <Link 
                  to="/mentorship"
                  className="px-10 py-5 border-2 border-[#B8860B] text-[#B8860B] font-paragraph font-bold hover:bg-[#B8860B] hover:text-[#0A0A0A] transition-all"
                >
                  [ VIEW MENTORS ]
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <PremiumFooter />
    </div>
  );
}