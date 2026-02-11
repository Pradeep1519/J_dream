// HPI 1.7-V
import React, { useState, useRef, useEffect } from 'react';
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
  Layers
} from 'lucide-react';
import { motion, useScroll, useTransform, useSpring, useInView, useMotionValue, useMotionTemplate } from 'framer-motion';
import Header from '../Header';
import Footer from '../Footer';

// --- CANONICAL DATA SOURCES ---
const PROGRAMS = [
  {
    id: 'engineering',
    title: 'Engineering Excellence',
    description: 'Comprehensive preparation for aspiring engineers with mentorship from professionals at top tech companies and institutions.',
    link: '/programs',
    specs: ['JEE Main/Adv', 'Mentorship', 'Mock Tests']
  },
  {
    id: 'civil-services',
    title: 'Civil Services Leadership',
    description: 'Strategic guidance for IAS/IPS aspirants with insights from serving officers and successful candidates.',
    link: '/programs',
    specs: ['UPSC Syllabus', 'Interview Prep', 'Ethics']
  },
  {
    id: 'medical',
    title: 'Medical Foundations',
    description: 'MBBS preparation with mentorship from practicing doctors and medical professionals from premier institutions.',
    link: '/programs',
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

// --- UTILITY COMPONENTS ---
const SectionDivider = () => (
  <div className="w-full flex items-center justify-center py-8 opacity-20">
    <div className="h-px bg-secondary flex-1 max-w-[200px]" />
    <div className="mx-4 text-xs font-paragraph text-secondary tracking-widest">///</div>
    <div className="h-px bg-secondary flex-1 max-w-[200px]" />
  </div>
);

const GridBackground = ({ theme = 'light' }: { theme?: 'light' | 'dark' }) => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden">
    <div 
      className={`absolute inset-0 ${theme === 'dark' ? 'opacity-[0.03]' : 'opacity-[0.05]'}`}
      style={{
        backgroundImage: `linear-gradient(${theme === 'dark' ? '#ffffff' : '#000000'} 1px, transparent 1px), linear-gradient(90deg, ${theme === 'dark' ? '#ffffff' : '#000000'} 1px, transparent 1px)`,
        backgroundSize: '40px 40px'
      }}
    />
  </div>
);

// --- SECTIONS ---
const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  
  // Mouse parallax effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    mouseX.set((clientX / innerWidth) - 0.5);
    mouseY.set((clientY / innerHeight) - 0.5);
  };

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative w-full min-h-screen flex flex-col justify-center overflow-hidden bg-background text-secondary"
    >
      {/* Content Layer */}
      <div className="relative z-20 w-full max-w-[120rem] mx-auto px-6 lg:px-12 pt-32 pb-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-2 mb-6 border border-secondary/20 px-4 py-2 rounded-full bg-background/50 backdrop-blur-sm">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="font-paragraph text-xs uppercase tracking-widest">System Online • v2.5.0</span>
            </div>
            <h1 className="font-heading text-6xl lg:text-8xl font-bold leading-[0.9] tracking-tight mb-8 text-secondary">
              INNOVATIVE<br />
              EDUCATION<br />
              SOLUTIONS
            </h1>
          </motion.div>
        </div>

        <div className="lg:col-span-5 flex flex-col justify-end h-full">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="bg-background/80 backdrop-blur-md border border-secondary/10 p-8"
          >
            <p className="font-paragraph text-sm lg:text-base text-secondary/80 mb-8 leading-relaxed">
              Connecting Classes 6-12 students with professionals practicing their target careers. We eliminate educational uncertainty through expert mentorship and data-driven pathways.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/programs" 
                className="group relative inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground font-paragraph text-sm overflow-hidden transition-all hover:bg-primary/90"
              >
                <span className="relative z-10 flex items-center gap-2">
                  {'{ Explore_Programs }'} <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
              <Link 
                to="/partnerships#contact" 
                className="group inline-flex items-center justify-center px-8 py-4 border border-secondary text-secondary font-paragraph text-sm hover:bg-secondary hover:text-secondary-foreground transition-all"
              >
                <span className="flex items-center gap-2">
                  {'=> Get Started'}
                </span>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        style={{ opacity: useTransform(scrollY, [0, 200], [1, 0]) }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-paragraph text-[10px] uppercase tracking-[0.2em]">Scroll to Initialize</span>
        <div className="w-px h-12 bg-gradient-to-b from-secondary to-transparent" />
      </motion.div>
    </section>
  );
};

const MissionVisionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section ref={ref} className="relative w-full bg-secondary text-secondary-foreground py-32 overflow-hidden">
      <GridBackground theme="dark" />
      
      <div className="max-w-[120rem] mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          {/* Mission */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="sticky top-32"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-primary/10 border border-primary/20">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <span className="font-paragraph text-primary text-sm tracking-widest uppercase">/// Mission Protocol</span>
              </div>
              <h2 className="font-heading text-4xl lg:text-6xl font-bold mb-8 leading-tight">
                ELIMINATE<br />UNCERTAINTY
              </h2>
              <p className="font-paragraph text-secondary-foreground/70 text-lg leading-relaxed max-w-xl border-l-2 border-primary/30 pl-6">
                To eliminate educational uncertainty by connecting students with professionals practicing their target careers. We bridge the gap between academic learning and real-world expertise.
              </p>
            </motion.div>
          </div>

          {/* Vision */}
          <div className="relative pt-24 lg:pt-64">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="flex items-center gap-4 mb-8 justify-end">
                <span className="font-paragraph text-primary text-sm tracking-widest uppercase">Vision Protocol ///</span>
                <div className="p-3 bg-primary/10 border border-primary/20">
                  <Eye className="w-8 h-8 text-primary" />
                </div>
              </div>
              <h2 className="font-heading text-4xl lg:text-6xl font-bold mb-8 leading-tight text-right">
                PREMIER<br />PLATFORM
              </h2>
              <p className="font-paragraph text-secondary-foreground/70 text-lg leading-relaxed max-w-xl ml-auto text-right border-r-2 border-primary/30 pr-6">
                To become India's premier mentorship platform for students nationwide. We envision a future where every student in Classes 6-12 has access to personalized guidance from industry experts.
              </p>
              
              {/* Decorative Image */}
              <div className="mt-16 relative aspect-video w-full overflow-hidden border border-secondary-foreground/10 group">
                <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10 group-hover:bg-primary/10 transition-colors duration-500" />
                <img 
                  src="https://static.wixstatic.com/media/c4abef_7268acbcbe2a42b88a76cc4e55d3b54e~mv2.png?originWidth=1152&originHeight=640" 
                  alt="Visionary mentorship session"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                />
                <div className="absolute bottom-4 right-4 z-20 font-paragraph text-xs bg-black/80 px-2 py-1 text-primary">
                  IMG_REF: 001_VISION
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ProgramCard = ({ program, index }: { program: typeof PROGRAMS[0], index: number }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative h-full bg-background border border-secondary/10 hover:border-primary transition-colors duration-300 flex flex-col"
    >
      <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity">
        <Cpu className="w-12 h-12 text-primary" />
      </div>
      
      <div className="p-8 flex-grow">
        <div className="font-paragraph text-xs text-primary mb-4">PROGRAM_ID: {program.id.toUpperCase()}</div>
        <h3 className="font-heading text-3xl font-bold mb-6 group-hover:text-primary transition-colors">{program.title}</h3>
        <p className="font-paragraph text-secondary/70 mb-8 leading-relaxed">{program.description}</p>
        
        <div className="space-y-3 mb-8">
          {program.specs.map((spec, i) => (
            <div key={i} className="flex items-center gap-3 text-sm font-paragraph text-secondary/60">
              <div className="w-1.5 h-1.5 bg-primary" />
              {spec}
            </div>
          ))}
        </div>
      </div>

      <div className="p-8 pt-0 mt-auto">
        <Link 
          to={program.link}
          className="w-full py-4 border-t border-secondary/10 flex items-center justify-between group-hover:border-primary/30 transition-colors"
        >
          <span className="font-paragraph text-sm font-bold group-hover:text-primary transition-colors">Initialize Program</span>
          <ArrowRight className="w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-300 text-primary" />
        </Link>
      </div>
    </motion.div>
  );
};

const BatchStructureSection = () => {
  const batches = [
    {
      name: 'Dream Foundation',
      classes: 'Class 6–8',
      focus: 'Awareness, curiosity, basics',
      color: 'from-blue-500 to-blue-600',
      programs: [
        { name: 'Tech Buds', career: 'Engineering' },
        { name: 'Little Healers', career: 'Medical (MBBS)' },
        { name: 'Young Leaders', career: 'Civil Services (IAS/IPS)' }
      ]
    },
    {
      name: 'Dream Explorer',
      classes: 'Class 9–10',
      focus: 'Skill discovery, career clarity',
      color: 'from-purple-500 to-purple-600',
      programs: [
        { name: 'Tech Explorers', career: 'Engineering' },
        { name: 'Medical Explorers', career: 'Medical (MBBS)' },
        { name: 'Civil Services Explorers', career: 'Civil Services (IAS/IPS)' }
      ]
    },
    {
      name: 'Dream Achiever',
      classes: 'Class 11–12',
      focus: 'Preparation, specialization, roadmap',
      color: 'from-orange-500 to-orange-600',
      programs: [
        { name: 'Engineering Excellence', career: 'Engineering' },
        { name: 'Medical Excellence', career: 'Medical (MBBS)' },
        { name: 'Civil Services Excellence', career: 'Civil Services (IAS/IPS)' }
      ]
    }
  ];

  return (
    <section className="w-full py-32 bg-secondary text-secondary-foreground relative overflow-hidden">
      <GridBackground theme="dark" />
      
      <div className="max-w-[120rem] mx-auto px-6 lg:px-12 relative z-10">
        <div className="mb-20">
          <h2 className="font-heading text-5xl lg:text-7xl font-bold mb-6">
            BATCH STRUCTURE
          </h2>
          <p className="font-paragraph text-secondary-foreground/70 max-w-2xl text-lg">
            Our comprehensive program architecture spans three career paths across three age-based batches, ensuring tailored guidance at every stage of your educational journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {batches.map((batch, index) => (
            <motion.div
              key={batch.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="border border-secondary-foreground/20 p-8 hover:border-primary/50 transition-colors"
            >
              <div className={`inline-block px-4 py-2 bg-gradient-to-r ${batch.color} text-white mb-6 font-paragraph text-xs font-bold`}>
                {batch.classes}
              </div>
              
              <h3 className="font-heading text-3xl font-bold mb-3">{batch.name}</h3>
              <p className="font-paragraph text-secondary-foreground/70 mb-6 text-sm">
                <span className="text-primary font-semibold">Focus:</span> {batch.focus}
              </p>

              <div className="space-y-3">
                {batch.programs.map((program, i) => (
                  <div key={i} className="flex items-start gap-3 pb-3 border-b border-secondary-foreground/10 last:border-b-0 last:pb-0">
                    <div className="w-2 h-2 bg-primary mt-2 flex-shrink-0" />
                    <div>
                      <div className="font-heading text-sm font-bold">{program.name}</div>
                      <div className="font-paragraph text-xs text-secondary-foreground/60">{program.career}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Career Paths Overview */}
        <div className="mt-20 pt-20 border-t border-secondary-foreground/20">
          <h3 className="font-heading text-3xl font-bold mb-12">THREE MAIN CAREER PATHS</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Engineering Program',
                description: 'Comprehensive preparation for aspiring engineers with mentorship from professionals at top tech companies.',
                programs: ['Tech Buds', 'Tech Explorers', 'Engineering Excellence']
              },
              {
                title: 'Medical (MBBS) Program',
                description: 'MBBS preparation with mentorship from practicing doctors and medical professionals from premier institutions.',
                programs: ['Little Healers', 'Medical Explorers', 'Medical Excellence']
              },
              {
                title: 'Civil Services Program',
                description: 'Strategic guidance for IAS/IPS aspirants with insights from serving officers and successful candidates.',
                programs: ['Young Leaders', 'Civil Services Explorers', 'Civil Services Excellence']
              }
            ].map((career, index) => (
              <motion.div
                key={career.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-secondary-foreground/5 border border-secondary-foreground/20 p-8 hover:bg-secondary-foreground/10 transition-colors"
              >
                <h4 className="font-heading text-2xl font-bold mb-4">{career.title}</h4>
                <p className="font-paragraph text-secondary-foreground/70 mb-6">{career.description}</p>
                
                <div className="space-y-2">
                  <div className="font-paragraph text-xs text-primary font-semibold mb-3">PROGRAM PROGRESSION:</div>
                  {career.programs.map((prog, i) => (
                    <div key={i} className="font-paragraph text-sm text-secondary-foreground/80 flex items-center gap-2">
                      <span className="text-primary">→</span> {prog}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const ProgramsSection = () => {
  return (
    <section className="w-full py-32 bg-background relative">
      <div className="max-w-[120rem] mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-20">
          <div>
            <h2 className="font-heading text-5xl lg:text-7xl font-bold mb-6">
              SPECIALIZED<br />PROGRAMS
            </h2>
            <p className="font-paragraph text-secondary/60 max-w-xl">
              Executive grade edtech solutions designed for students in Classes 6-12. Select your trajectory.
            </p>
          </div>
          <div className="hidden lg:block pb-4">
            <div className="flex gap-2">
              {[0, 1, 2].map((i) => (
                <div key={i} className={`w-3 h-3 ${i === 0 ? 'bg-primary' : 'bg-secondary/20'}`} />
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROGRAMS.map((program, index) => (
            <ProgramCard key={program.id} program={program} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const FeatureTicker = () => {
  return (
    <div className="w-full bg-primary text-primary-foreground overflow-hidden py-4 border-y border-primary-foreground/20">
      <motion.div 
        className="flex whitespace-nowrap"
        animate={{ x: [0, -1000] }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
      >
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex items-center gap-12 px-6">
            <span className="font-heading text-2xl font-bold">EXECUTIVE GRADE EDUCATION</span>
            <span className="font-paragraph text-sm">///</span>
            <span className="font-heading text-2xl font-bold">FUTURE LEADERS</span>
            <span className="font-paragraph text-sm">///</span>
            <span className="font-heading text-2xl font-bold">EXPERT MENTORSHIP</span>
            <span className="font-paragraph text-sm">///</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const WhyChooseUsSection = () => {
  return (
    <section className="w-full py-32 bg-secondary text-secondary-foreground relative overflow-hidden">
      <GridBackground theme="dark" />
      
      <div className="max-w-[120rem] mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Sticky Header */}
          <div className="lg:col-span-4">
            <div className="sticky top-32">
              <h2 className="font-heading text-5xl lg:text-6xl font-bold mb-8">
                SYSTEM<br />ADVANTAGES
              </h2>
              <p className="font-paragraph text-secondary-foreground/70 mb-12">
                Why Junior Dream? We connect students with professionals who are actively practicing in their target careers.
              </p>
              <div className="w-24 h-1 bg-primary mb-8" />
              <div className="font-paragraph text-xs text-primary/80">
                EST. 2025 • GURUGRAM, HARYANA
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            {FEATURES.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`p-8 border border-secondary-foreground/20 bg-secondary-foreground/5 hover:bg-secondary-foreground/10 transition-colors ${index === 2 ? 'md:col-span-2' : ''}`}
              >
                <div className="flex justify-between items-start mb-8">
                  <feature.icon className="w-10 h-10 text-primary" />
                  <span className="font-heading text-4xl font-bold text-secondary-foreground/20">{feature.stat}</span>
                </div>
                <h3 className="font-heading text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="font-paragraph text-sm text-secondary-foreground/70 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
            
            {/* Image Block */}
            <div className="md:col-span-2 mt-8 relative h-[400px] w-full overflow-hidden border border-secondary-foreground/20">
              <div className="absolute inset-0 bg-gradient-to-t from-secondary via-transparent to-transparent z-10" />
              <img 
                src="https://static.wixstatic.com/media/c4abef_8245f091259247328a761b080182f20a~mv2.png?originWidth=896&originHeight=576" 
                alt="Mentorship in action"
                className="w-full h-full object-cover opacity-60 hover:opacity-80 transition-opacity duration-700"
              />
              <div className="absolute bottom-8 left-8 z-20">
                <div className="font-heading text-3xl font-bold mb-2">REAL WORLD CONNECTION</div>
                <div className="font-paragraph text-sm text-primary">{'{ Status: Active }'}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const CTASection = () => {
  return (
    <section className="w-full py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute right-0 top-0 w-1/2 h-full bg-primary transform skew-x-12 translate-x-1/4" />
      </div>

      <div className="max-w-5xl mx-auto px-6 lg:px-12 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block mb-8">
            <Terminal className="w-12 h-12 text-primary mx-auto mb-4" />
            <div className="font-paragraph text-sm text-secondary/60 uppercase tracking-widest">Ready to execute?</div>
          </div>
          
          <h2 className="font-heading text-5xl lg:text-7xl font-bold mb-8 text-secondary">
            TRANSFORM YOUR<br />
            <span className="text-primary">EDUCATIONAL JOURNEY</span>
          </h2>
          
          <p className="font-paragraph text-lg text-secondary/70 mb-12 max-w-2xl mx-auto">
            Join Junior Dream and connect with professionals who can guide you toward your career goals. The future is waiting for your input.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link 
              to="/partnerships#contact"
              className="group relative px-10 py-5 bg-secondary text-secondary-foreground font-paragraph font-bold overflow-hidden"
            >
              <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
              <span className="relative z-10 flex items-center gap-3">
                {'{ START_APPLICATION }'} <ChevronRight className="w-4 h-4" />
              </span>
            </Link>
            
            <Link 
              to="/mentorship"
              className="group px-10 py-5 border-2 border-secondary text-secondary font-paragraph font-bold hover:bg-secondary hover:text-secondary-foreground transition-colors duration-300"
            >
              <span className="flex items-center gap-3">
                [ View Mentors ]
              </span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-secondary selection:bg-primary selection:text-white overflow-x-hidden">
      <Header />
      
      <main>
        <HeroSection />
        <FeatureTicker />
        <MissionVisionSection />
        <BatchStructureSection />
        <ProgramsSection />
        <WhyChooseUsSection />
        <CTASection />
      </main>

      <Footer />
    </div>
  );
}