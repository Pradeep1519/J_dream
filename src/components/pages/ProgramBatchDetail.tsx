import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PremiumHeader from '../PremiumHeader';
import { 
  ArrowLeft, BookOpen, Users, Target, Award, Calendar, Clock, 
  DollarSign, GraduationCap, Briefcase, Star, CheckCircle, 
  Mail, Phone, MapPin, Globe, Linkedin, Twitter, 
  Zap, Code, Shield, Cpu, Heart, Brain, Activity,
  Scale, Gavel, Landmark, Sparkles, Rocket, Gem
} from 'lucide-react';

// --- PREMIUM BATCH DATA ---
const BATCH_DETAILS = {
  engineering: {
    foundation: {
      id: 'engineering-foundation',
      program: 'Engineering',
      batchType: 'Dream Foundation',
      customName: 'Tech Buds',
      classes: 'Class 6-8',
      ageGroup: '11-14 years',
      duration: '12 Months',
      schedule: 'Weekends (Saturday & Sunday, 4 hours/week)',
      mode: 'Hybrid (Online + Offline)',
      fee: '₹15,000/year',
      feeBreakdown: {
        registration: '₹1,000 (One-time)',
        tuition: '₹14,000 (₹1,167/month)',
        materials: 'Free study materials',
        assessment: 'Free career assessment'
      },
      focus: 'Awareness, curiosity, basics',
      gradient: 'from-blue-400 via-blue-500 to-blue-600',
      lightBg: 'bg-blue-50',
      borderColor: 'border-blue-200',
      textColor: 'text-blue-600',
      icon: '🛠️',
      
      description: 'Perfect for young minds who are curious about technology. This batch focuses on building interest through fun activities, games, and simple projects. No prior coding experience required!',
      
      longDescription: 'Dream Foundation - Tech Buds is designed to introduce young learners to the fascinating world of technology. Through hands-on activities, storytelling, and gamified learning, students develop a strong foundation and genuine interest in engineering fields. Our expert mentors ensure that every child discovers the joy of creating with technology.',
      
      curriculum: [
        {
          module: 'Module 1: Technology Around Us',
          topics: [
            'What is computer? - Hardware & Software',
            'How apps work? - Introduction to programming',
            'What is internet & AI? - Smart assistants, face lock',
            'Fun activity: Build your first digital story'
          ],
          icon: Cpu,
          color: 'text-blue-500'
        },
        {
          module: 'Module 2: Logic & Thinking',
          topics: [
            'Scratch / Block coding - Visual programming',
            'Flowcharts - Step-by-step thinking',
            'Puzzle solving - Logical reasoning games',
            'Fun activity: Create a simple animation'
          ],
          icon: Code,
          color: 'text-green-500'
        },
        {
          module: 'Module 3: Mini Tech Worlds',
          topics: [
            'Game making (basic) - Build your first game',
            'Robot toys & sensors - Introduction to robotics',
            'Voice assistant demo - How Alexa/Siri works',
            'Fun activity: Program a virtual robot'
          ],
          icon: Zap,
          color: 'text-yellow-500'
        },
        {
          module: 'Module 4: Safety & Ethics',
          topics: [
            'Cyber safety - Online protection',
            'Screen time awareness - Healthy habits',
            'AI good vs bad - Understanding technology impact',
            'Fun activity: Create a safety poster'
          ],
          icon: Shield,
          color: 'text-red-500'
        }
      ],
      
      careerRoles: [
        {
          title: 'Junior Software Creator',
          description: 'Basic coding, apps, games',
          icon: Code,
          color: 'text-blue-500'
        },
        {
          title: 'Junior AI Explorer',
          description: 'AI kya hota hai – voice assistant, face lock',
          icon: Brain,
          color: 'text-purple-500'
        },
        {
          title: 'Junior Robotics Engineer',
          description: 'Robots, sensors, Arduino, toys',
          icon: Cpu,
          color: 'text-green-500'
        },
        {
          title: 'Junior Game Developer ⭐',
          description: 'Games banana – logic + creativity',
          icon: Sparkles,
          color: 'text-yellow-500'
        },
        {
          title: 'Junior Cyber Safety Expert',
          description: 'Online safety, hacking awareness',
          icon: Shield,
          color: 'text-red-500'
        },
        {
          title: 'Junior Data Thinker',
          description: 'Data basics, charts, patterns',
          icon: Activity,
          color: 'text-indigo-500'
        }
      ],
      
      outcomes: [
        '🎯 "Bacha bole – mujhe technology me future chahiye"',
        '💡 Basic understanding of how computers & apps work',
        '🤖 Introduction to coding through visual programming',
        '🎮 Ability to create simple games & animations',
        '🔐 Awareness about cyber safety & digital ethics',
        '🚀 Interest in engineering & technology fields'
      ],
      
      mentors: [
        {
          name: 'Amit Sharma',
          role: 'Senior Software Engineer',
          company: 'Google',
          experience: '8+ years',
          expertise: 'Full Stack Development, AI',
          image: 'https://randomuser.me/api/portraits/men/1.jpg',
          linkedin: '#',
          achievements: ['Built 3 production apps', 'Mentored 100+ students']
        },
        {
          name: 'Priya Patel',
          role: 'AI Researcher',
          company: 'Microsoft',
          experience: '6+ years',
          expertise: 'Machine Learning, Robotics',
          image: 'https://randomuser.me/api/portraits/women/2.jpg',
          linkedin: '#',
          achievements: ['Published 5 research papers', 'Patent in AI education']
        },
        {
          name: 'Rahul Verma',
          role: 'Game Developer',
          company: 'Ubisoft',
          experience: '7+ years',
          expertise: 'Game Design, Unity',
          image: 'https://randomuser.me/api/portraits/men/3.jpg',
          linkedin: '#',
          achievements: ['Developed 2 commercial games', 'Game design mentor']
        }
      ],
      
      features: [
        'Live 1-on-1 mentorship sessions',
        'Hands-on projects & activities',
        'Career guidance & counseling',
        'Certificate upon completion',
        'Parent-teacher meetings',
        'Progress tracking dashboard'
      ],
      
      testimonials: [
        {
          quote: "My son used to spend hours on games, now he builds them! This program sparked his interest in technology.",
          author: "Mrs. Sharma",
          relation: "Parent of Aarav, Class 7"
        },
        {
          quote: "The way they teach coding through stories and games is amazing. My daughter loves her Saturday classes!",
          author: "Mr. Patel",
          relation: "Parent of Kiara, Class 6"
        }
      ]
    },
    
    explorer: {
      id: 'engineering-explorer',
      program: 'Engineering',
      batchType: 'Dream Explorer',
      customName: 'Tech Explorers',
      classes: 'Class 9-10',
      ageGroup: '14-16 years',
      duration: '12 Months',
      schedule: 'Weekends (Saturday & Sunday, 6 hours/week)',
      mode: 'Hybrid (Online + Offline)',
      fee: '₹18,000/year',
      feeBreakdown: {
        registration: '₹1,000 (One-time)',
        tuition: '₹17,000 (₹1,416/month)',
        materials: 'Premium study materials',
        assessment: 'Career assessment & counseling'
      },
      focus: 'Skill discovery, career clarity',
      gradient: 'from-green-400 via-green-500 to-green-600',
      lightBg: 'bg-green-50',
      borderColor: 'border-green-200',
      textColor: 'text-green-600',
      icon: '🚀',
      
      description: 'Designed for students who want to explore different engineering fields and find their true passion. Get hands-on experience with real tools and technologies.',
      
      longDescription: 'Dream Explorer - Tech Explorers is where students discover their true engineering passion. Through rotation across different specializations, hands-on projects, and mentorship from industry experts, students gain clarity about their future career path. This program bridges the gap between curiosity and career readiness.',
      
      curriculum: [
        {
          module: 'Common Foundation (Sabke liye)',
          topics: [
            'Python basics - Programming fundamentals',
            'HTML / CSS intro - Web development basics',
            'Data basics - Understanding data',
            'Logical problem solving - Algorithm thinking'
          ],
          icon: Code,
          color: 'text-blue-500'
        },
        {
          module: 'Software Development',
          topics: [
            'Websites & apps - How they work',
            'Frontend vs Backend',
            'Build your first website',
            'Introduction to databases'
          ],
          icon: Globe,
          color: 'text-purple-500'
        },
        {
          module: 'Data Science & AI',
          topics: [
            'Charts & datasets - Data visualization',
            'Introduction to machine learning',
            'AI models - Conceptual understanding',
            'Real-world AI applications'
          ],
          icon: Brain,
          color: 'text-green-500'
        },
        {
          module: 'Cyber Security',
          topics: [
            'Hacking basics - Ethical hacking',
            'Network security',
            'Cyber threats & protection',
            'Hands-on security tools'
          ],
          icon: Shield,
          color: 'text-red-500'
        },
        {
          module: 'Robotics & Automation',
          topics: [
            'Automation logic',
            'Sensors & actuators',
            'Robotics programming',
            'Build a simple robot'
          ],
          icon: Cpu,
          color: 'text-yellow-500'
        },
        {
          module: 'Cloud & IoT',
          topics: [
            'How systems connect',
            'Cloud computing basics',
            'Internet of Things',
            'Smart devices & applications'
          ],
          icon: Zap,
          color: 'text-indigo-500'
        }
      ],
      
      careerRoles: [
        { title: 'Software Developer Engineer', description: 'Build applications & systems', icon: Code, color: 'text-blue-500' },
        { title: 'Data Scientist Engineer', description: 'Analyze & interpret data', icon: Activity, color: 'text-green-500' },
        { title: 'Machine Learning Engineer', description: 'Create AI models', icon: Brain, color: 'text-purple-500' },
        { title: 'Artificial Intelligence Engineer', description: 'Develop intelligent systems', icon: Zap, color: 'text-yellow-500' },
        { title: 'Cyber Security Engineer', description: 'Protect digital assets', icon: Shield, color: 'text-red-500' },
        { title: 'Game Development Engineer ⭐', description: 'Design & build games', icon: Sparkles, color: 'text-orange-500' },
        { title: 'Computer Science Engineer', description: 'Core CS fundamentals', icon: Cpu, color: 'text-indigo-500' },
        { title: 'Electronics & Communication Engineer', description: 'Hardware & communication', icon: Activity, color: 'text-pink-500' },
        { title: 'Robotics & Automation Engineer', description: 'Build robots & automation', icon: Cpu, color: 'text-teal-500' },
        { title: 'Cloud Computing Engineer', description: 'Cloud infrastructure', icon: Globe, color: 'text-cyan-500' },
        { title: 'Internet of Things (IoT) Engineer', description: 'Connected devices', icon: Zap, color: 'text-lime-500' },
        { title: 'Web & App Development Engineer', description: 'Build web & mobile apps', icon: Code, color: 'text-violet-500' }
      ],
      
      outcomes: [
        '🎯 "Bacha bole – mujhe AI & Data Science chahiye"',
        '💻 Proficiency in Python programming',
        '🔍 Clear understanding of different engineering fields',
        '📊 Hands-on experience with real tools & technologies',
        '🎓 Career clarity about which field to pursue',
        '📝 Awareness about entrance exams & requirements',
        '💰 Understanding of salary expectations & career growth'
      ],
      
      mentors: [
        {
          name: 'Dr. Sanjay Kumar',
          role: 'AI Research Lead',
          company: 'Google AI',
          experience: '15+ years',
          expertise: 'Deep Learning, Neural Networks',
          image: 'https://randomuser.me/api/portraits/men/4.jpg',
          linkedin: '#',
          achievements: ['PhD in AI', '20+ research papers', 'Google AI award']
        },
        {
          name: 'Anjali Mehta',
          role: 'Principal Engineer',
          company: 'Microsoft',
          experience: '12+ years',
          expertise: 'Cloud Computing, DevOps',
          image: 'https://randomuser.me/api/portraits/women/5.jpg',
          linkedin: '#',
          achievements: ['Microsoft MVP', 'Led 50+ projects', 'Cloud expert']
        },
        {
          name: 'Rajesh Khanna',
          role: 'Cyber Security Head',
          company: 'Bank of America',
          experience: '14+ years',
          expertise: 'Ethical Hacking, Security',
          image: 'https://randomuser.me/api/portraits/men/6.jpg',
          linkedin: '#',
          achievements: ['CISSP certified', 'Security advisor', 'Hackathon judge']
        }
      ],
      
      features: [
        'Rotation across 6+ specializations',
        'Industry-standard tools & software',
        'Career counseling sessions',
        'Guest lectures from industry experts',
        'Project portfolio development',
        'Entrance exam guidance (JEE, CUET)'
      ]
    },
    
    achiever: {
      id: 'engineering-achiever',
      program: 'Engineering',
      batchType: 'Dream Achiever',
      customName: 'Engineering Excellence Program',
      classes: 'Class 11-12',
      ageGroup: '16-18 years',
      duration: '12 Months',
      schedule: 'Weekdays (Evening, 8 hours/week) + Weekends',
      mode: 'Hybrid (Online + Offline)',
      fee: '₹20,000/year',
      feeBreakdown: {
        registration: '₹1,000 (One-time)',
        tuition: '₹19,000 (₹1,583/month)',
        materials: 'Premium study materials + Books',
        assessment: 'Mock tests & personalized feedback'
      },
      focus: 'Preparation, specialization, roadmap',
      gradient: 'from-purple-400 via-purple-500 to-purple-600',
      lightBg: 'bg-purple-50',
      borderColor: 'border-purple-200',
      textColor: 'text-purple-600',
      icon: '🏆',
      
      description: 'Advanced program for serious aspirants who want to specialize in their chosen engineering field and prepare for competitive exams.',
      
      longDescription: 'Dream Achiever - Engineering Excellence Program is the pinnacle of our engineering track. Students choose their specialization, work on real-world projects, and receive comprehensive guidance for competitive exams. Our industry mentors ensure that every student has a clear roadmap to their dream engineering career.',
      
      curriculum: [
        {
          module: 'Core Technical Base',
          topics: [
            'Advanced Python / Java / C++',
            'Data Structures & Algorithms basics',
            'System thinking & design',
            'Problem-solving methodologies'
          ],
          icon: Code,
          color: 'text-blue-500'
        },
        {
          module: 'AI / ML Track',
          topics: [
            'Python for ML - Libraries & frameworks',
            'Data handling & preprocessing',
            'ML models - Supervised & unsupervised',
            'Real projects - Build AI applications'
          ],
          icon: Brain,
          color: 'text-purple-500'
        },
        {
          module: 'Cyber Security Track',
          topics: [
            'Networking basics & protocols',
            'Ethical hacking techniques',
            'Security tools - Kali Linux, Wireshark',
            'Cyber laws & compliance'
          ],
          icon: Shield,
          color: 'text-red-500'
        },
        {
          module: 'Software / Full Stack Track',
          topics: [
            'Frontend - React, Angular',
            'Backend - Node.js, Django',
            'APIs & microservices',
            'Databases & deployment'
          ],
          icon: Globe,
          color: 'text-green-500'
        },
        {
          module: 'Robotics & Automation Track',
          topics: [
            'Robotics programming',
            'Sensors & control systems',
            'Automation algorithms',
            'Industrial applications'
          ],
          icon: Cpu,
          color: 'text-yellow-500'
        },
        {
          module: 'Career Readiness',
          topics: [
            'Internships awareness & preparation',
            'Portfolio building - GitHub',
            'Resume writing & LinkedIn optimization',
            'Entrance guidance (JEE, CUET, etc.)'
          ],
          icon: Rocket,
          color: 'text-orange-500'
        }
      ],
      
      careerRoles: [
        { title: 'Artificial Intelligence Engineer', description: 'Build intelligent systems', icon: Brain, color: 'text-purple-500' },
        { title: 'Machine Learning Engineer', description: 'Create ML models', icon: Zap, color: 'text-blue-500' },
        { title: 'Data Scientist / Data Engineer', description: 'Data analytics & engineering', icon: Activity, color: 'text-green-500' },
        { title: 'Cyber Security Engineer', description: 'Security architecture', icon: Shield, color: 'text-red-500' },
        { title: 'Cloud & DevOps Engineer', description: 'Cloud infrastructure & deployment', icon: Globe, color: 'text-cyan-500' },
        { title: 'Robotics & Automation Engineer', description: 'Robotics systems', icon: Cpu, color: 'text-yellow-500' },
        { title: 'Software Development Engineer (SDE)', description: 'Software development', icon: Code, color: 'text-indigo-500' },
        { title: 'Full Stack Developer', description: 'End-to-end development', icon: Code, color: 'text-pink-500' },
        { title: 'Mobile App Developer', description: 'iOS/Android apps', icon: Cpu, color: 'text-orange-500' },
        { title: 'Computer Science Engineer', description: 'Core CS roles', icon: Cpu, color: 'text-teal-500' },
        { title: 'Electronics Engineer', description: 'Hardware design', icon: Activity, color: 'text-lime-500' },
        { title: 'Embedded Systems Engineer', description: 'Embedded programming', icon: Cpu, color: 'text-violet-500' },
        { title: 'Blockchain Engineer', description: 'Blockchain development', icon: Gem, color: 'text-amber-500' },
        { title: 'AR/VR Engineer', description: 'Extended reality', icon: Sparkles, color: 'text-fuchsia-500' },
        { title: 'Quantum Computing Engineer', description: 'Quantum algorithms (Awareness)', icon: Brain, color: 'text-rose-500' }
      ],
      
      outcomes: [
        '🎯 "Bacha bole – Mera roadmap clear hai"',
        '🎓 Mastery in chosen specialization',
        '🚀 Industry-ready project portfolio',
        '📊 Competitive exam readiness (JEE, CUET)',
        '💼 Internship & placement guidance',
        '📝 Resume & LinkedIn optimization',
        '🤝 Professional network building'
      ],
      
      mentors: [
        {
          name: 'Dr. Vikram Singh',
          role: 'AI Research Director',
          company: 'Google AI',
          experience: '20+ years',
          expertise: 'Deep Learning, Computer Vision',
          image: 'https://randomuser.me/api/portraits/men/7.jpg',
          linkedin: '#',
          achievements: ['PhD Stanford', '50+ patents', 'Google Fellow']
        },
        {
          name: 'Prof. Neha Gupta',
          role: 'Cyber Security Chair',
          company: 'IIT Delhi',
          experience: '18+ years',
          expertise: 'Cryptography, Network Security',
          image: 'https://randomuser.me/api/portraits/women/8.jpg',
          linkedin: '#',
          achievements: ['Padma Shri nominee', 'Security advisor to govt']
        },
        {
          name: 'Arjun Mehta',
          role: 'Chief Technology Officer',
          company: 'Microsoft India',
          experience: '22+ years',
          expertise: 'Cloud Architecture, DevOps',
          image: 'https://randomuser.me/api/portraits/men/9.jpg',
          linkedin: '#',
          achievements: ['CTO of the Year', 'Built Azure India team']
        }
      ],
      
      features: [
        'Specialization-based learning tracks',
        'Real-world industry projects',
        'Mock tests & performance analytics',
        'JEE/CUET preparation integration',
        'Internship placement assistance',
        'Alumni network access',
        'Priority for hackathons & competitions'
      ]
    }
  },
  
  // Similar structure for medical & civil services...
  // (Space saving - actual code mein medical aur civil ka bhi data hoga)
};

export default function ProgramBatchDetail() {
  const { programId, batchType } = useParams<{ programId: string; batchType: string }>();
  const [batchData, setBatchData] = useState<any>(null);
  const [activeTab, setActiveTab] = useState('overview');
  const [showAllRoles, setShowAllRoles] = useState(false);

  useEffect(() => {
    if (programId && batchType && BATCH_DETAILS[programId as keyof typeof BATCH_DETAILS]) {
      const program = BATCH_DETAILS[programId as keyof typeof BATCH_DETAILS];
      setBatchData(program[batchType as keyof typeof program]);
    }
    window.scrollTo(0, 0);
  }, [programId, batchType]);

  if (!batchData) {
    return (
      <div className="min-h-screen bg-background">
        <PremiumHeader />
        <div className="max-w-[120rem] mx-auto px-6 lg:px-12 py-20 text-center">
          <h2 className="font-heading text-3xl font-bold text-textprimary mb-4">
            Batch Not Found
          </h2>
          <Link to="/programs" className="text-primary hover:underline">
            Back to Programs
          </Link>
        </div>
      </div>
    );
  }

  const getProgramIcon = () => {
    switch(programId) {
      case 'engineering': return '🛠️';
      case 'medical': return '🩺';
      case 'civil': return '⚖️';
      default: return '🎓';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <PremiumHeader />

      {/* Premium Back Button with Animation */}
      <div className="max-w-[120rem] mx-auto px-6 lg:px-12 py-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            to="/programs"
            className="group font-paragraph text-sm text-textprimary hover:text-primary transition-all inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-md hover:shadow-lg"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back to Programs
          </Link>
        </motion.div>
      </div>

      {/* Premium Hero Section */}
      <section className={`relative bg-gradient-to-r ${batchData.gradient} text-white overflow-hidden`}>
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full filter blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 max-w-[120rem] mx-auto px-6 lg:px-12 py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8"
          >
            {/* Left Content */}
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-5xl">{getProgramIcon()}</span>
                <span className="font-paragraph text-sm bg-white/20 px-4 py-2 rounded-full backdrop-blur-sm">
                  {batchData.program} • {batchData.classes}
                </span>
              </div>
              <h1 className="font-heading text-5xl lg:text-6xl font-black mb-4 leading-tight">
                {batchData.customName}
              </h1>
              <p className="font-paragraph text-xl text-white/90 max-w-3xl mb-6">
                {batchData.description}
              </p>
              
              {/* Premium Stats */}
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                  <Users size={18} />
                  <span className="font-paragraph">{batchData.ageGroup}</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                  <Calendar size={18} />
                  <span className="font-paragraph">{batchData.duration}</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                  <Clock size={18} />
                  <span className="font-paragraph">{batchData.schedule}</span>
                </div>
              </div>
            </div>

            {/* Premium Fee Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 min-w-[300px]"
            >
              <div className="text-center">
                <DollarSign className="w-8 h-8 mx-auto mb-2 text-yellow-300" />
                <p className="font-paragraph text-sm text-white/80 mb-1">Program Fee</p>
                <p className="font-heading text-4xl font-black mb-4">{batchData.fee}</p>
                <Link
                  to="/partnerships#contact"
                  className="w-full font-paragraph text-base bg-white text-gray-900 hover:bg-gray-100 px-6 py-3 rounded-xl transition-all inline-flex items-center justify-center gap-2 font-semibold"
                >
                  {'=> Enroll Now'} <ArrowRight size={18} />
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Premium Tabs */}
      <div className="max-w-[120rem] mx-auto px-6 lg:px-12 -mt-8 mb-8">
        <div className="bg-white rounded-2xl shadow-xl p-2 inline-flex flex-wrap gap-2">
          {[
            { id: 'overview', label: 'Overview', icon: BookOpen },
            { id: 'curriculum', label: 'Curriculum', icon: Code },
            { id: 'careers', label: 'Career Roles', icon: Briefcase },
            { id: 'mentors', label: 'Mentors', icon: Users },
            { id: 'features', label: 'Features', icon: Star }
          ].map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`font-paragraph text-sm px-4 py-2 rounded-xl transition-all flex items-center gap-2 ${
                  activeTab === tab.id
                    ? `bg-gradient-to-r ${batchData.gradient} text-white shadow-lg`
                    : 'text-textprimary hover:bg-gray-100'
                }`}
              >
                <Icon size={16} />
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[120rem] mx-auto px-6 lg:px-12 py-8">
        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            {/* Long Description */}
            <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12">
              <h2 className="font-heading text-3xl font-bold text-textprimary mb-6">
                Program Overview
              </h2>
              <p className="font-paragraph text-lg text-textprimary/80 leading-relaxed">
                {batchData.longDescription}
              </p>
            </div>

            {/* Fee Breakdown */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-3xl shadow-xl p-8">
                <h3 className="font-heading text-2xl font-bold text-textprimary mb-6 flex items-center gap-2">
                  <DollarSign className={`w-6 h-6 ${batchData.textColor}`} />
                  Fee Breakdown
                </h3>
                <div className="space-y-4">
                  {Object.entries(batchData.feeBreakdown).map(([key, value]) => (
                    <div key={key} className="flex items-center justify-between border-b border-gray-100 pb-3">
                      <span className="font-paragraph text-textprimary/70 capitalize">{key}:</span>
                      <span className="font-paragraph font-semibold text-textprimary">{value as string}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Stats */}
              <div className="bg-white rounded-3xl shadow-xl p-8">
                <h3 className="font-heading text-2xl font-bold text-textprimary mb-6 flex items-center gap-2">
                  <Zap className={`w-6 h-6 ${batchData.textColor}`} />
                  Quick Stats
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-gray-50 rounded-xl">
                    <Users className="w-6 h-6 mx-auto mb-2 text-primary" />
                    <p className="font-paragraph text-sm text-textprimary/60">Class Size</p>
                    <p className="font-heading text-xl font-bold text-textprimary">10-15</p>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-xl">
                    <Clock className="w-6 h-6 mx-auto mb-2 text-primary" />
                    <p className="font-paragraph text-sm text-textprimary/60">Hours/Week</p>
                    <p className="font-heading text-xl font-bold text-textprimary">4-8</p>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-xl">
                    <Calendar className="w-6 h-6 mx-auto mb-2 text-primary" />
                    <p className="font-paragraph text-sm text-textprimary/60">Start Date</p>
                    <p className="font-heading text-sm font-bold text-textprimary">Flexible</p>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-xl">
                    <Award className="w-6 h-6 mx-auto mb-2 text-primary" />
                    <p className="font-paragraph text-sm text-textprimary/60">Certificate</p>
                    <p className="font-heading text-sm font-bold text-textprimary">Yes</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Outcomes */}
            <div className={`bg-gradient-to-r ${batchData.gradient} rounded-3xl shadow-xl p-8 lg:p-12 text-white`}>
              <h3 className="font-heading text-2xl font-bold mb-6 flex items-center gap-2">
                <Target className="w-6 h-6" />
                Learning Outcomes
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {batchData.outcomes.map((outcome: string, index: number) => (
                  <div key={index} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span className="font-paragraph">{outcome}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* Curriculum Tab */}
        {activeTab === 'curriculum' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            {batchData.curriculum.map((module: any, index: number) => {
              const Icon = module.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <div className={`bg-gradient-to-r ${batchData.gradient} p-6`}>
                    <div className="flex items-center gap-3">
                      <Icon className="w-6 h-6 text-white" />
                      <h3 className="font-heading text-xl font-bold text-white">{module.module}</h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <ul className="space-y-3">
                      {module.topics.map((topic: string, idx: number) => (
                        <li key={idx} className="flex items-start gap-2">
                          <div className={`w-1.5 h-1.5 rounded-full mt-2 ${module.color} bg-current`}></div>
                          <span className="font-paragraph text-textprimary/80">{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        )}

        {/* Career Roles Tab */}
        {activeTab === 'careers' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <div className="bg-white rounded-3xl shadow-xl p-8">
              <h3 className="font-heading text-3xl font-bold text-textprimary mb-6">
                Career Roles You'll Explore
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {(showAllRoles ? batchData.careerRoles : batchData.careerRoles.slice(0, 6)).map((role: any, index: number) => {
                  const Icon = role.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.05 }}
                      className="group relative bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 hover:shadow-xl transition-all border border-gray-100 hover:border-primary/20"
                    >
                      <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${batchData.gradient} bg-opacity-10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                        <Icon className={`w-6 h-6 ${role.color}`} />
                      </div>
                      <h4 className="font-heading text-lg font-bold text-textprimary mb-2">
                        {role.title}
                      </h4>
                      <p className="font-paragraph text-sm text-textprimary/70">
                        {role.description}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
              
              {batchData.careerRoles.length > 6 && (
                <button
                  onClick={() => setShowAllRoles(!showAllRoles)}
                  className="mt-8 font-paragraph text-sm text-primary hover:text-primary/80 transition-colors inline-flex items-center gap-2"
                >
                  {showAllRoles ? 'Show Less' : `View All ${batchData.careerRoles.length} Roles`}
                  <ArrowRight size={16} className={showAllRoles ? 'rotate-90' : ''} />
                </button>
              )}
            </div>
          </motion.div>
        )}

        {/* Mentors Tab */}
        {activeTab === 'mentors' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <div className="bg-white rounded-3xl shadow-xl p-8">
              <h3 className="font-heading text-3xl font-bold text-textprimary mb-6">
                Meet Your Mentors
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {batchData.mentors.map((mentor: any, index: number) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="group relative"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border border-gray-100">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-r from-primary to-primary/50 flex items-center justify-center text-white font-bold text-2xl">
                          {mentor.name.charAt(0)}
                        </div>
                        <div>
                          <h4 className="font-heading text-lg font-bold text-textprimary">
                            {mentor.name}
                          </h4>
                          <p className="font-paragraph text-sm text-primary">{mentor.role}</p>
                          <p className="font-paragraph text-xs text-textprimary/60">{mentor.company}</p>
                        </div>
                      </div>
                      <p className="font-paragraph text-sm text-textprimary/70 mb-3">
                        <span className="font-semibold">Expertise:</span> {mentor.expertise}
                      </p>
                      <p className="font-paragraph text-sm text-textprimary/70 mb-4">
                        <span className="font-semibold">Experience:</span> {mentor.experience}
                      </p>
                      <div className="space-y-1 mb-4">
                        {mentor.achievements.map((achievement: string, idx: number) => (
                          <p key={idx} className="font-paragraph text-xs text-textprimary/60 flex items-center gap-1">
                            <Star size={10} className="text-yellow-500" />
                            {achievement}
                          </p>
                        ))}
                      </div>
                      <a
                        href={mentor.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                      >
                        <Linkedin size={16} />
                        <span className="font-paragraph text-sm">Connect</span>
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* Features Tab */}
        {activeTab === 'features' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Program Features */}
              <div className="bg-white rounded-3xl shadow-xl p-8">
                <h3 className="font-heading text-2xl font-bold text-textprimary mb-6 flex items-center gap-2">
                  <Star className={`w-6 h-6 ${batchData.textColor}`} />
                  Program Features
                </h3>
                <ul className="space-y-3">
                  {batchData.features.map((feature: string, index: number) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className={`w-5 h-5 ${batchData.textColor} flex-shrink-0 mt-0.5`} />
                      <span className="font-paragraph text-textprimary/80">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Why Junior Dream */}
              <div className={`bg-gradient-to-r ${batchData.gradient} rounded-3xl shadow-xl p-8 text-white`}>
                <h3 className="font-heading text-2xl font-bold mb-6 flex items-center gap-2">
                  <Rocket className="w-6 h-6" />
                  Why Junior Dream?
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span className="font-paragraph">Premium 1-on-1 mentorship from industry experts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span className="font-paragraph">Live interactive sessions with recorded backups</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span className="font-paragraph">Project-based learning with real-world applications</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span className="font-paragraph">Career counseling & personalized guidance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span className="font-paragraph">Premium certificate upon completion</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span className="font-paragraph">Alumni network & lifetime community access</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Testimonials */}
            {batchData.testimonials && (
              <div className="bg-white rounded-3xl shadow-xl p-8">
                <h3 className="font-heading text-2xl font-bold text-textprimary mb-6">
                  What Parents Say
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {batchData.testimonials.map((testimonial: any, index: number) => (
                    <div key={index} className="p-6 bg-gray-50 rounded-2xl">
                      <div className="flex items-center gap-1 mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={16} className="text-yellow-500 fill-current" />
                        ))}
                      </div>
                      <p className="font-paragraph text-textprimary/80 mb-4 italic">
                        "{testimonial.quote}"
                      </p>
                      <div>
                        <p className="font-heading text-sm font-bold text-textprimary">
                          {testimonial.author}
                        </p>
                        <p className="font-paragraph text-xs text-textprimary/60">
                          {testimonial.relation}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        )}
      </div>

      {/* Premium CTA Section */}
      <section className={`bg-gradient-to-r ${batchData.gradient} mt-16 py-20`}>
        <div className="max-w-[120rem] mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-4xl lg:text-5xl font-black text-white mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="font-paragraph text-xl text-white/90 max-w-3xl mx-auto mb-10">
              Join {batchData.customName} today and get premium mentorship from industry experts
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link
                to="/partnerships#contact"
                className="group px-10 py-5 bg-white text-gray-900 font-paragraph font-bold rounded-xl hover:bg-gray-100 transition-all inline-flex items-center gap-3 text-lg"
              >
                {'{ Enroll Now }'} 
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </Link>
              <Link
                to="/mentorship"
                className="group px-10 py-5 border-2 border-white text-white font-paragraph font-bold rounded-xl hover:bg-white/10 transition-all inline-flex items-center gap-3 text-lg"
              >
                [ Talk to Mentor ]
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}