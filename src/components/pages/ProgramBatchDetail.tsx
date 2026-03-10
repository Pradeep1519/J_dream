import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PremiumHeader from '../PremiumHeader';
import PremiumFooter from '../PremiumFooter';
import { 
  ArrowLeft, ArrowRight, BookOpen, Users, Target, Award, Calendar, Clock, 
  DollarSign, GraduationCap, Briefcase, Star, CheckCircle, 
  Mail, Phone, MapPin, Globe, Linkedin, 
  Zap, Code, Shield, Cpu, Heart, Brain, Activity,
  Scale, Gavel, Landmark, Sparkles, Rocket, Gem
} from 'lucide-react';

// --- COMPLETE PREMIUM BATCH DATA (Engineering + Medical + Civil) ---
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
      description: 'Perfect for young minds who are curious about technology.',
      longDescription: 'Dream Foundation - Tech Buds is designed to introduce young learners to the fascinating world of technology. Through hands-on activities, storytelling, and gamified learning, students develop a strong foundation and genuine interest in engineering fields.',
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
        { title: 'Junior Software Creator', description: 'Basic coding, apps, games', icon: Code, color: 'text-blue-500' },
        { title: 'Junior AI Explorer', description: 'AI kya hota hai – voice assistant, face lock', icon: Brain, color: 'text-purple-500' },
        { title: 'Junior Robotics Engineer', description: 'Robots, sensors, Arduino, toys', icon: Cpu, color: 'text-green-500' },
        { title: 'Junior Game Developer ⭐', description: 'Games banana – logic + creativity', icon: Sparkles, color: 'text-yellow-500' },
        { title: 'Junior Cyber Safety Expert', description: 'Online safety, hacking awareness', icon: Shield, color: 'text-red-500' },
        { title: 'Junior Data Thinker', description: 'Data basics, charts, patterns', icon: Activity, color: 'text-indigo-500' }
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
        { name: 'Amit Sharma', role: 'Senior Software Engineer', company: 'Google', experience: '8+ years', expertise: 'Full Stack Development, AI', achievements: ['Built 3 production apps', 'Mentored 100+ students'] },
        { name: 'Priya Patel', role: 'AI Researcher', company: 'Microsoft', experience: '6+ years', expertise: 'Machine Learning, Robotics', achievements: ['Published 5 research papers', 'Patent in AI education'] },
        { name: 'Rahul Verma', role: 'Game Developer', company: 'Ubisoft', experience: '7+ years', expertise: 'Game Design, Unity', achievements: ['Developed 2 commercial games', 'Game design mentor'] }
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
        { quote: "My son used to spend hours on games, now he builds them!", author: "Mrs. Sharma", relation: "Parent of Aarav, Class 7" },
        { quote: "The way they teach coding through stories is amazing!", author: "Mr. Patel", relation: "Parent of Kiara, Class 6" }
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
      description: 'Designed for students who want to explore different engineering fields.',
      longDescription: 'Dream Explorer - Tech Explorers is where students discover their true engineering passion. Through rotation across different specializations, hands-on projects, and mentorship from industry experts, students gain clarity about their future career path.',
      curriculum: [
        { module: 'Common Foundation', topics: ['Python basics', 'HTML/CSS intro', 'Data basics', 'Logical problem solving'], icon: Code, color: 'text-blue-500' },
        { module: 'Software Development', topics: ['Websites & apps', 'Frontend vs Backend', 'Build your first website', 'Introduction to databases'], icon: Globe, color: 'text-purple-500' },
        { module: 'Data Science & AI', topics: ['Charts & datasets', 'Introduction to machine learning', 'AI models', 'Real-world AI applications'], icon: Brain, color: 'text-green-500' },
        { module: 'Cyber Security', topics: ['Hacking basics', 'Network security', 'Cyber threats', 'Hands-on security tools'], icon: Shield, color: 'text-red-500' },
        { module: 'Robotics & Automation', topics: ['Automation logic', 'Sensors & actuators', 'Robotics programming', 'Build a simple robot'], icon: Cpu, color: 'text-yellow-500' },
        { module: 'Cloud & IoT', topics: ['How systems connect', 'Cloud computing basics', 'Internet of Things', 'Smart devices'], icon: Zap, color: 'text-indigo-500' }
      ],
      careerRoles: [
        { title: 'Software Developer Engineer', description: 'Build applications & systems', icon: Code, color: 'text-blue-500' },
        { title: 'Data Scientist Engineer', description: 'Analyze & interpret data', icon: Activity, color: 'text-green-500' },
        { title: 'Machine Learning Engineer', description: 'Create AI models', icon: Brain, color: 'text-purple-500' },
        { title: 'Artificial Intelligence Engineer', description: 'Develop intelligent systems', icon: Zap, color: 'text-yellow-500' },
        { title: 'Cyber Security Engineer', description: 'Protect digital assets', icon: Shield, color: 'text-red-500' },
        { title: 'Game Development Engineer ⭐', description: 'Design & build games', icon: Sparkles, color: 'text-orange-500' },
        { title: 'Cloud Computing Engineer', description: 'Cloud infrastructure', icon: Globe, color: 'text-cyan-500' },
        { title: 'IoT Engineer', description: 'Connected devices', icon: Zap, color: 'text-lime-500' }
      ],
      outcomes: [
        '🎯 "Bacha bole – mujhe AI & Data Science chahiye"',
        '💻 Proficiency in Python programming',
        '🔍 Clear understanding of different engineering fields',
        '📊 Hands-on experience with real tools',
        '🎓 Career clarity about which field to pursue'
      ],
      mentors: [
        { name: 'Dr. Sanjay Kumar', role: 'AI Research Lead', company: 'Google AI', experience: '15+ years', expertise: 'Deep Learning, Neural Networks', achievements: ['PhD in AI', '20+ research papers'] },
        { name: 'Anjali Mehta', role: 'Principal Engineer', company: 'Microsoft', experience: '12+ years', expertise: 'Cloud Computing, DevOps', achievements: ['Microsoft MVP', 'Led 50+ projects'] },
        { name: 'Rajesh Khanna', role: 'Cyber Security Head', company: 'Bank of America', experience: '14+ years', expertise: 'Ethical Hacking, Security', achievements: ['CISSP certified', 'Security advisor'] }
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
      description: 'Advanced program for serious aspirants who want to specialize.',
      longDescription: 'Dream Achiever - Engineering Excellence Program is the pinnacle of our engineering track. Students choose their specialization, work on real-world projects, and receive comprehensive guidance for competitive exams.',
      curriculum: [
        { module: 'Core Technical Base', topics: ['Advanced Python/Java/C++', 'Data Structures & Algorithms', 'System thinking', 'Problem-solving'], icon: Code, color: 'text-blue-500' },
        { module: 'AI / ML Track', topics: ['Python for ML', 'Data handling', 'ML models', 'Real projects - Build AI applications'], icon: Brain, color: 'text-purple-500' },
        { module: 'Cyber Security Track', topics: ['Networking basics', 'Ethical hacking', 'Security tools', 'Cyber laws'], icon: Shield, color: 'text-red-500' },
        { module: 'Software / Full Stack Track', topics: ['Frontend - React', 'Backend - Node.js', 'APIs & microservices', 'Databases & deployment'], icon: Globe, color: 'text-green-500' },
        { module: 'Career Readiness', topics: ['Internships awareness', 'Portfolio building', 'Resume writing', 'Entrance guidance (JEE, CUET)'], icon: Rocket, color: 'text-orange-500' }
      ],
      careerRoles: [
        { title: 'Artificial Intelligence Engineer', description: 'Build intelligent systems', icon: Brain, color: 'text-purple-500' },
        { title: 'Machine Learning Engineer', description: 'Create ML models', icon: Zap, color: 'text-blue-500' },
        { title: 'Data Scientist', description: 'Data analytics', icon: Activity, color: 'text-green-500' },
        { title: 'Cyber Security Engineer', description: 'Security architecture', icon: Shield, color: 'text-red-500' },
        { title: 'Cloud & DevOps Engineer', description: 'Cloud infrastructure', icon: Globe, color: 'text-cyan-500' },
        { title: 'Software Development Engineer', description: 'Software development', icon: Code, color: 'text-indigo-500' },
        { title: 'Full Stack Developer', description: 'End-to-end development', icon: Code, color: 'text-pink-500' },
        { title: 'Blockchain Engineer', description: 'Blockchain development', icon: Gem, color: 'text-amber-500' },
        { title: 'AR/VR Engineer', description: 'Extended reality', icon: Sparkles, color: 'text-fuchsia-500' }
      ],
      outcomes: [
        '🎯 "Bacha bole – Mera roadmap clear hai"',
        '🎓 Mastery in chosen specialization',
        '🚀 Industry-ready project portfolio',
        '📊 Competitive exam readiness (JEE, CUET)',
        '💼 Internship & placement guidance',
        '📝 Resume & LinkedIn optimization'
      ],
      mentors: [
        { name: 'Dr. Vikram Singh', role: 'AI Research Director', company: 'Google AI', experience: '20+ years', expertise: 'Deep Learning', achievements: ['PhD Stanford', '50+ patents', 'Google Fellow'] },
        { name: 'Prof. Neha Gupta', role: 'Cyber Security Chair', company: 'IIT Delhi', experience: '18+ years', expertise: 'Cryptography', achievements: ['Padma Shri nominee', 'Security advisor'] },
        { name: 'Arjun Mehta', role: 'CTO', company: 'Microsoft India', experience: '22+ years', expertise: 'Cloud Architecture', achievements: ['CTO of the Year', 'Built Azure India team'] }
      ],
      features: [
        'Specialization-based learning tracks',
        'Real-world industry projects',
        'Mock tests & performance analytics',
        'JEE/CUET preparation integration',
        'Internship placement assistance',
        'Alumni network access'
      ]
    }
  },
  medical: {
    foundation: {
      id: 'medical-foundation',
      program: 'Medical',
      batchType: 'Dream Foundation',
      customName: 'Little Healers',
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
      gradient: 'from-green-400 via-green-500 to-green-600',
      lightBg: 'bg-green-50',
      borderColor: 'border-green-200',
      textColor: 'text-green-600',
      icon: '🩺',
      description: 'Introduction to the human body and medical profession.',
      longDescription: 'Dream Foundation - Little Healers introduces young learners to the fascinating world of medicine. Through interactive activities, models, and stories, children learn about the human body, health, and the role of doctors.',
      curriculum: [
        { module: 'Module 1: Human Body Basics', topics: ['Organs & systems (heart, lungs, brain)', 'How body works together'], icon: Heart, color: 'text-red-500' },
        { module: 'Module 2: Health & Hygiene', topics: ['Nutrition & food groups', 'Cleanliness & immunity', 'Diseases vs prevention'], icon: Activity, color: 'text-green-500' },
        { module: 'Module 3: Life Sciences Fun', topics: ['Cells & microorganisms', 'Plants & animals basics', 'Simple experiments'], icon: Brain, color: 'text-purple-500' },
        { module: 'Module 4: Medical World', topics: ['What doctors do?', 'Hospitals & tools', 'First aid & emergencies'], icon: Heart, color: 'text-pink-500' }
      ],
      careerRoles: [
        { title: 'Junior Body Explorer', description: 'Human body basics', icon: Heart, color: 'text-red-500' },
        { title: 'Junior Health Hero', description: 'Health, hygiene', icon: Activity, color: 'text-green-500' },
        { title: 'Junior Life Saver', description: 'First aid awareness', icon: Shield, color: 'text-blue-500' },
        { title: 'Junior Bio Explorer', description: 'Cells & organisms', icon: Brain, color: 'text-purple-500' },
        { title: 'Junior Medical Scientist', description: 'Simple experiments', icon: Cpu, color: 'text-yellow-500' },
        { title: 'Junior Doctor Buddy', description: 'Doctor roles', icon: Users, color: 'text-indigo-500' }
      ],
      outcomes: [
        '🎯 "Bacha bole – mujhe doctor banna achha lagta hai"',
        '💡 Basic understanding of human body',
        '❤️ Awareness about health & hygiene',
        '🏥 Interest in medical field'
      ],
      mentors: [
        { name: 'Dr. Meera Reddy', role: 'Pediatrician', company: 'Apollo Hospitals', experience: '10+ years', expertise: 'Child Healthcare', achievements: ['Gold Medalist', '1000+ children treated'] },
        { name: 'Dr. Arjun Nair', role: 'General Physician', company: 'Fortis Healthcare', experience: '8+ years', expertise: 'Internal Medicine', achievements: ['MBBS Gold Medal', 'Community Health Award'] }
      ],
      features: [
        'Live 1-on-1 mentorship sessions',
        'Hands-on activities with models',
        'Career guidance & counseling',
        'Certificate upon completion',
        'Parent-teacher meetings',
        'Progress tracking dashboard'
      ]
    },
    explorer: {
      id: 'medical-explorer',
      program: 'Medical',
      batchType: 'Dream Explorer',
      customName: 'Medical Explorers',
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
      gradient: 'from-green-500 via-green-600 to-green-700',
      lightBg: 'bg-green-50',
      borderColor: 'border-green-200',
      textColor: 'text-green-600',
      icon: '🔬',
      description: 'Explore various medical careers.',
      longDescription: 'Dream Explorer - Medical Explorers helps students discover their true passion in the medical field. Through career exploration modules, hands-on activities, and mentorship from practicing doctors, students gain clarity about their future.',
      curriculum: [
        { module: 'Common Foundation', topics: ['Human physiology basics', 'Cell biology & genetics', 'Medical chemistry basics', 'Scientific thinking'], icon: Brain, color: 'text-purple-500' },
        { module: 'MBBS Path', topics: ['Doctor life & subjects', 'Medical college journey', 'Specializations overview'], icon: Heart, color: 'text-red-500' },
        { module: 'Surgery', topics: ['Surgical basics', 'Tools & techniques', 'Operation theater awareness'], icon: Activity, color: 'text-blue-500' },
        { module: 'Research', topics: ['Labs & experiments', 'Clinical research', 'Medical innovations'], icon: Cpu, color: 'text-yellow-500' },
        { module: 'Allied Health', topics: ['Physiotherapy', 'Radiology', 'Pharmacy', 'Nursing'], icon: Users, color: 'text-green-500' },
        { module: 'Career Mapping', topics: ['MBBS vs other careers', 'NEET awareness', 'Required degrees', 'Medical ethics'], icon: Target, color: 'text-orange-500' }
      ],
      careerRoles: [
        { title: 'MBBS Doctor', description: 'General physician', icon: Heart, color: 'text-red-500' },
        { title: 'Surgeon', description: 'Surgical specialist', icon: Activity, color: 'text-blue-500' },
        { title: 'Pediatrician', description: 'Child specialist', icon: Users, color: 'text-green-500' },
        { title: 'Medical Researcher', description: 'Lab research', icon: Cpu, color: 'text-purple-500' },
        { title: 'Biotechnologist', description: 'Bio-tech expert', icon: Brain, color: 'text-indigo-500' },
        { title: 'Dentist', description: 'Dental surgeon', icon: Activity, color: 'text-yellow-500' },
        { title: 'Pharmacist', description: 'Medicine expert', icon: Shield, color: 'text-pink-500' },
        { title: 'Physiotherapist', description: 'Rehabilitation expert', icon: Users, color: 'text-teal-500' }
      ],
      outcomes: [
        '🎯 "Student bole – mujhe MBBS / medical field choose karni hai"',
        '🔬 Clear understanding of medical careers',
        '🧬 NCERT-aligned biology foundation',
        '📝 NEET preparation awareness'
      ],
      mentors: [
        { name: 'Dr. Kavita Singh', role: 'Cardiologist', company: 'AIIMS Delhi', experience: '12+ years', expertise: 'Cardiology', achievements: ['DM Cardiology', '50+ research papers'] },
        { name: 'Dr. Vivek Malhotra', role: 'Medical Researcher', company: 'ICMR', experience: '9+ years', expertise: 'Clinical Research', achievements: ['PhD in Immunology', 'National Science Award'] }
      ],
      features: [
        'Career exploration across 8+ medical fields',
        'NEET preparation guidance',
        'Lab demonstrations',
        'Guest lectures from specialists',
        'Medical college counseling',
        'Project-based learning'
      ]
    },
    achiever: {
      id: 'medical-achiever',
      program: 'Medical',
      batchType: 'Dream Achiever',
      customName: 'Medical Excellence Program',
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
      gradient: 'from-green-600 via-green-700 to-green-800',
      lightBg: 'bg-green-50',
      borderColor: 'border-green-200',
      textColor: 'text-green-600',
      icon: '🏥',
      description: 'Comprehensive medical entrance preparation.',
      longDescription: 'Dream Achiever - Medical Excellence Program provides comprehensive preparation for medical entrance exams while giving students clarity about their specialization path.',
      curriculum: [
        { module: 'Core Medical Base', topics: ['Human anatomy & physiology', 'Genetics & evolution', 'Biochemistry basics', 'Pathology introduction'], icon: Heart, color: 'text-red-500' },
        { module: 'NEET Preparation', topics: ['NEET syllabus mapping', 'Study strategy & revision', 'Mock tests analysis', 'Time management'], icon: Target, color: 'text-purple-500' },
        { module: 'Specializations Overview', topics: ['MBBS & specialization roadmap', 'Surgery, pediatrics, cardiology', 'Research & biotech careers'], icon: Activity, color: 'text-blue-500' },
        { module: 'Career Readiness', topics: ['Medical colleges guidance', 'Ethics & patient care', 'Interview preparation'], icon: Users, color: 'text-green-500' }
      ],
      careerRoles: [
        { title: 'MBBS Doctor', description: 'Primary care physician', icon: Heart, color: 'text-red-500' },
        { title: 'Surgeon', description: 'Surgical specialist', icon: Activity, color: 'text-blue-500' },
        { title: 'Cardiologist', description: 'Heart specialist', icon: Heart, color: 'text-pink-500' },
        { title: 'Neurologist', description: 'Brain specialist', icon: Brain, color: 'text-purple-500' },
        { title: 'Medical Researcher', description: 'Clinical research', icon: Cpu, color: 'text-yellow-500' },
        { title: 'Radiologist', description: 'Imaging specialist', icon: Activity, color: 'text-indigo-500' },
        { title: 'Anesthesiologist', description: 'Pain management', icon: Shield, color: 'text-teal-500' },
        { title: 'Orthopedic Doctor', description: 'Bone & joint specialist', icon: Activity, color: 'text-orange-500' }
      ],
      outcomes: [
        '🎯 "Student bole – mujhe pata hai doctor kaise banna hai"',
        '📚 Deep understanding of medical sciences',
        '🎯 NEET exam readiness',
        '🔬 Clear specialization roadmap'
      ],
      mentors: [
        { name: 'Dr. Suresh Iyer', role: 'Senior Surgeon', company: 'Medanta Hospital', experience: '20+ years', expertise: 'Cardiothoracic Surgery', achievements: ['1000+ surgeries', 'Padma Shri nominee'] },
        { name: 'Dr. Pooja Desai', role: 'NEET Expert', company: 'Aakash Institute', experience: '15+ years', expertise: 'Medical Entrance Training', achievements: ['1000+ students selected', 'Best Teacher Award'] }
      ],
      features: [
        'Comprehensive NEET preparation',
        'Specialization guidance',
        'Mock tests with analysis',
        'Medical college counseling',
        'Ethics & patient care training',
        'Interview preparation'
      ]
    }
  },
  civil: {
    foundation: {
      id: 'civil-foundation',
      program: 'Civil Services',
      batchType: 'Dream Foundation',
      customName: 'Young Leaders',
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
      focus: 'Awareness, leadership, values',
      gradient: 'from-purple-400 via-purple-500 to-purple-600',
      lightBg: 'bg-purple-50',
      borderColor: 'border-purple-200',
      textColor: 'text-purple-600',
      icon: '⚖️',
      description: 'Introduction to India and leadership.',
      longDescription: 'Dream Foundation - Young Leaders introduces students to the concepts of nation-building, leadership, and public service. Through stories of great leaders and interactive activities, children develop values of responsibility.',
      curriculum: [
        { module: 'Module 1: India & Society', topics: ['India basics (states, culture)', 'Society & community roles'], icon: Landmark, color: 'text-orange-500' },
        { module: 'Module 2: Rules & Constitution', topics: ['Why rules are needed?', 'Rights & duties', 'Constitution stories'], icon: Scale, color: 'text-purple-500' },
        { module: 'Module 3: Leadership & Ethics', topics: ['Honesty & responsibility', 'Decision making', 'Teamwork'], icon: Award, color: 'text-yellow-500' },
        { module: 'Module 4: Administration & Police', topics: ['IAS vs IPS roles', 'Law & order basics', 'Public service examples'], icon: Shield, color: 'text-blue-500' }
      ],
      careerRoles: [
        { title: 'Junior Nation Builder', description: 'India & society basics', icon: Landmark, color: 'text-orange-500' },
        { title: 'Junior Law Explorer', description: 'Rules, fairness', icon: Scale, color: 'text-purple-500' },
        { title: 'Junior Police Hero', description: 'IPS role basics', icon: Shield, color: 'text-blue-500' },
        { title: 'Junior Administrator', description: 'IAS kya karta hai', icon: Users, color: 'text-green-500' },
        { title: 'Junior Constitution Buddy', description: 'Rights & duties', icon: Award, color: 'text-yellow-500' },
        { title: 'Junior Social Leader', description: 'Helping society', icon: Heart, color: 'text-red-500' }
      ],
      outcomes: [
        '🎯 "Bacha bole – mujhe desh ke liye kaam karna hai"',
        '🇮🇳 Understanding of India & society',
        '📜 Basic knowledge of Constitution',
        '👥 Leadership values'
      ],
      mentors: [
        { name: 'Mr. Anil Sharma', role: 'Retired IAS Officer', company: 'Government of India', experience: '25+ years', expertise: 'Public Administration', achievements: ['District Collector', 'Secretary to Govt'] },
        { name: 'Ms. Ritu Singh', role: 'IPS Officer', company: 'Delhi Police', experience: '12+ years', expertise: 'Law Enforcement', achievements: ['Police Medal', 'Community Policing Award'] }
      ],
      features: [
        'Live mentorship sessions',
        'Story-based learning',
        'Leadership activities',
        'Certificate upon completion',
        'Parent-teacher meetings',
        'Progress tracking dashboard'
      ]
    },
    explorer: {
      id: 'civil-explorer',
      program: 'Civil Services',
      batchType: 'Dream Explorer',
      customName: 'Civil Services Explorers',
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
      focus: 'Career clarity + subject exposure',
      gradient: 'from-purple-500 via-purple-600 to-purple-700',
      lightBg: 'bg-purple-50',
      borderColor: 'border-purple-200',
      textColor: 'text-purple-600',
      icon: '📚',
      description: 'Explore civil services and UPSC path.',
      longDescription: 'Dream Explorer - Civil Services Explorers helps students understand the various civil services and the path to join them. Through subject exposure and mentorship from officers, students gain clarity.',
      curriculum: [
        { module: 'Common Foundation', topics: ['Indian polity basics', 'History & geography overview', 'Economy introduction', 'Logical reasoning'], icon: BookOpen, color: 'text-blue-500' },
        { module: 'IAS', topics: ['Administration & policy', 'District Collector role', 'Policy making'], icon: Landmark, color: 'text-orange-500' },
        { module: 'IPS', topics: ['Police & security', 'Law enforcement', 'Crime investigation'], icon: Shield, color: 'text-red-500' },
        { module: 'IFS', topics: ['Diplomacy & foreign affairs', 'Indian ambassadors', 'International relations'], icon: Globe, color: 'text-green-500' },
        { module: 'IRS', topics: ['Tax & revenue', 'Finance & economics', 'Customs & excise'], icon: DollarSign, color: 'text-yellow-500' },
        { module: 'Career Mapping', topics: ['UPSC & state exams', 'Required subjects', 'Lifestyle & responsibilities', 'Ethics in governance'], icon: Target, color: 'text-purple-500' }
      ],
      careerRoles: [
        { title: 'IAS Officer', description: 'Indian Administrative Service', icon: Landmark, color: 'text-orange-500' },
        { title: 'IPS Officer', description: 'Indian Police Service', icon: Shield, color: 'text-blue-500' },
        { title: 'IFS Officer', description: 'Indian Foreign Service', icon: Globe, color: 'text-green-500' },
        { title: 'IRS Officer', description: 'Indian Revenue Service', icon: DollarSign, color: 'text-yellow-500' },
        { title: 'State Civil Services', description: 'State government roles', icon: Users, color: 'text-purple-500' },
        { title: 'Public Policy Officer', description: 'Policy analyst', icon: Award, color: 'text-pink-500' },
        { title: 'Law Officer', description: 'Legal advisor', icon: Scale, color: 'text-red-500' },
        { title: 'Political Analyst', description: 'Election & politics expert', icon: Activity, color: 'text-indigo-500' }
      ],
      outcomes: [
        '🎯 "Student bole – mujhe IAS / IPS banna hai"',
        '📚 Clear understanding of civil services',
        '📝 UPSC syllabus awareness',
        '📰 Current affairs foundation'
      ],
      mentors: [
        { name: 'Mr. Rajiv Gupta', role: 'IAS Officer', company: 'Government of India', experience: '15+ years', expertise: 'Public Administration', achievements: ['District Magistrate', 'National Award for Excellence'] },
        { name: 'Mr. Vikas Yadav', role: 'IPS Officer', company: 'Uttar Pradesh Police', experience: '12+ years', expertise: 'Law & Order', achievements: ['President Police Medal', 'Anti-terrorism operations'] }
      ],
      features: [
        'Career exploration across 8+ services',
        'UPSC syllabus guidance',
        'Current affairs discussions',
        'Guest lectures from officers',
        'Writing skills development',
        'Ethics & governance training'
      ]
    },
    achiever: {
      id: 'civil-achiever',
      program: 'Civil Services',
      batchType: 'Dream Achiever',
      customName: 'Civil Services Excellence Program',
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
      gradient: 'from-purple-600 via-purple-700 to-purple-800',
      lightBg: 'bg-purple-50',
      borderColor: 'border-purple-200',
      textColor: 'text-purple-600',
      icon: '🏛️',
      description: 'Advanced UPSC preparation.',
      longDescription: 'Dream Achiever - Civil Services Excellence Program provides comprehensive preparation for the UPSC examination. Students develop deep understanding of core subjects and practice answer writing.',
      curriculum: [
        { module: 'Core UPSC Base', topics: ['Polity (deep)', 'History, geography & economy', 'Environment & society', 'Current affairs analysis'], icon: BookOpen, color: 'text-blue-500' },
        { module: 'Answer Writing', topics: ['Essay writing', 'GS answer structure', 'Time management', 'Presentation skills'], icon: Award, color: 'text-purple-500' },
        { module: 'Specialization Awareness', topics: ['IAS vs IPS vs IFS roles', 'Optional subjects overview', 'Policy & administration'], icon: Target, color: 'text-green-500' },
        { module: 'Career Readiness', topics: ['UPSC syllabus breakdown', 'Ethics & case studies', 'Interview & personality test'], icon: Users, color: 'text-orange-500' }
      ],
      careerRoles: [
        { title: 'IAS Officer', description: 'District Collector, Secretary', icon: Landmark, color: 'text-orange-500' },
        { title: 'IPS Officer', description: 'Police Chief, DIG', icon: Shield, color: 'text-blue-500' },
        { title: 'IFS Officer', description: 'Ambassador, High Commissioner', icon: Globe, color: 'text-green-500' },
        { title: 'IRS Officer', description: 'Income Tax Commissioner', icon: DollarSign, color: 'text-yellow-500' },
        { title: 'District Collector', description: 'Head of district administration', icon: Users, color: 'text-purple-500' },
        { title: 'Policy Advisor', description: 'Government policy expert', icon: Award, color: 'text-pink-500' },
        { title: 'Public Administrator', description: 'Senior administrative roles', icon: Landmark, color: 'text-indigo-500' },
        { title: 'Civil Service Mentor', description: 'Train future officers', icon: Heart, color: 'text-red-500' }
      ],
      outcomes: [
        '🎯 "Student bole – mera roadmap clear hai"',
        '📚 Deep understanding of UPSC subjects',
        '✍️ Answer writing skills',
        '📰 Current affairs mastery',
        '🎯 Interview preparation'
      ],
      mentors: [
        { name: 'Mr. Pradeep Saxena', role: 'Former IAS', company: 'Government of India', experience: '30+ years', expertise: 'Public Policy', achievements: ['Chief Secretary', 'Padma Bhushan nominee'] },
        { name: 'Ms. Shalini Mehra', role: 'IPS Trainer', company: 'LBSNAA Mussoorie', experience: '18+ years', expertise: 'Police Training', achievements: ['National Police Academy Faculty', 'President Police Medal'] }
      ],
      features: [
        'Comprehensive UPSC preparation',
        'Answer writing practice',
        'Current affairs analysis',
        'Mock tests with feedback',
        'Interview preparation',
        'Ethics & case studies',
        'Personality development'
      ]
    }
  }
};

export default function ProgramBatchDetail() {
  const { id, batch } = useParams<{ id: string; batch: string }>();
  const [batchData, setBatchData] = useState<any>(null);
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    console.log('Program ID:', id);
    console.log('Batch Type:', batch);
    
    if (id && batch && BATCH_DETAILS[id as keyof typeof BATCH_DETAILS]) {
      const program = BATCH_DETAILS[id as keyof typeof BATCH_DETAILS];
      const data = program[batch as keyof typeof program];
      console.log('Found batch data:', data);
      setBatchData(data);
    }
    window.scrollTo(0, 0);
  }, [id, batch]);

  if (!batchData) {
    return (
      <div className="min-h-screen bg-background">
        <PremiumHeader />
        <div className="max-w-[120rem] mx-auto px-6 lg:px-12 py-20 text-center">
          <h2 className="font-heading text-3xl font-bold text-textprimary mb-4">
            Batch Not Found
          </h2>
          <p className="font-paragraph text-base text-textprimary/60 mb-8">
            The batch you're looking for doesn't exist or is being updated.
          </p>
          <Link to={`/programs/${id}/batches`} className="text-primary hover:underline">
            Back to Batches
          </Link>
        </div>
      </div>
    );
  }

  const getProgramIcon = () => {
    switch(id) {
      case 'engineering': return '🛠️';
      case 'medical': return '🩺';
      case 'civil': return '⚖️';
      default: return '🎓';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <PremiumHeader />

      {/* Back Button - Moved up for better visibility */}
      <div className="max-w-[120rem] mx-auto px-6 lg:px-12 pt-24 pb-4">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            to={`/programs/${id}/batches`}
            className="group inline-flex items-center gap-2 text-textprimary/60 hover:text-primary transition-colors bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm hover:shadow-md"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back to Batches
          </Link>
        </motion.div>
      </div>

      {/* Premium Hero Section - SMALLER and COMPACT */}
      <section className={`relative bg-gradient-to-r ${batchData.gradient} text-white`}>
        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-[120rem] mx-auto px-6 lg:px-12 py-8">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            {/* Left Content - Compact */}
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-4xl">{getProgramIcon()}</span>
                <span className="font-paragraph text-xs font-medium bg-white/20 px-3 py-1.5 rounded-full backdrop-blur-sm">
                  {batchData.program} • {batchData.classes}
                </span>
              </div>
              
              <h1 className="font-heading text-3xl lg:text-4xl font-bold mb-2">
                {batchData.customName}
              </h1>
              
              <p className="font-paragraph text-sm text-white/90 max-w-2xl line-clamp-2">
                {batchData.description}
              </p>

              {/* Quick Stats - Compact */}
              <div className="flex flex-wrap gap-4 mt-4">
                <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full">
                  <Users size={14} />
                  <span className="font-paragraph text-xs">{batchData.ageGroup}</span>
                </div>
                <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full">
                  <Calendar size={14} />
                  <span className="font-paragraph text-xs">{batchData.duration}</span>
                </div>
                <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full">
                  <Clock size={14} />
                  <span className="font-paragraph text-xs">Weekends</span>
                </div>
              </div>
            </div>

            {/* Fee Card - Compact */}
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-5 border border-white/20 min-w-[250px]">
              <div className="text-center">
                <DollarSign className="w-6 h-6 mx-auto mb-1 text-yellow-300" />
                <p className="font-paragraph text-xs text-white/80 mb-1">Program Fee</p>
                <p className="font-heading text-2xl font-bold mb-3">{batchData.fee}</p>
                <Link
                  to="/partnerships#contact"
                  className="w-full font-paragraph text-sm bg-white text-gray-900 hover:bg-gray-100 px-4 py-2.5 rounded-xl transition-all inline-flex items-center justify-center gap-2 font-semibold"
                >
                  Enroll Now <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Tabs - Glassmorphism Style */}
      <div className="sticky top-20 z-40 bg-white/80 backdrop-blur-xl border-b border-gray-200 shadow-sm">
        <div className="max-w-[120rem] mx-auto px-6 lg:px-12">
          <div className="flex items-center gap-1 overflow-x-auto py-3 scrollbar-hide">
            {[
              { id: 'overview', label: 'Overview', icon: BookOpen },
              { id: 'curriculum', label: 'Curriculum', icon: Code },
              { id: 'careers', label: 'Career Roles', icon: Briefcase },
              { id: 'mentors', label: 'Mentors', icon: Users },
              { id: 'features', label: 'Features', icon: Star }
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative px-4 py-2 rounded-xl transition-all flex items-center gap-2 whitespace-nowrap ${
                    isActive
                      ? `text-${batchData.textColor.split('-')[1]}-600 bg-${batchData.textColor.split('-')[1]}-50 font-medium`
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  <Icon size={16} />
                  <span className="font-paragraph text-sm">{tab.label}</span>
                  
                  {/* Active Indicator */}
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${batchData.gradient} rounded-full`}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Tab Content */}
      <div className="max-w-[120rem] mx-auto px-6 lg:px-12 py-8">
        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            {/* Program Overview */}
            <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow p-6 border border-gray-100">
              <h2 className="font-heading text-xl font-bold text-textprimary mb-3 flex items-center gap-2">
                <BookOpen className={`w-5 h-5 ${batchData.textColor}`} />
                Program Overview
              </h2>
              <p className="font-paragraph text-base text-textprimary/80 leading-relaxed">
                {batchData.longDescription}
              </p>
            </div>

            {/* Fee Breakdown & Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow p-6 border border-gray-100">
                <h3 className="font-heading text-lg font-bold text-textprimary mb-4 flex items-center gap-2">
                  <DollarSign className={`w-5 h-5 ${batchData.textColor}`} />
                  Fee Breakdown
                </h3>
                <div className="space-y-3">
                  {Object.entries(batchData.feeBreakdown).map(([key, value]) => (
                    <div key={key} className="flex items-center justify-between border-b border-gray-100 pb-2 last:border-0">
                      <span className="font-paragraph text-sm text-textprimary/70 capitalize">{key}:</span>
                      <span className="font-paragraph text-sm font-semibold text-textprimary">{value as string}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow p-6 border border-gray-100">
                <h3 className="font-heading text-lg font-bold text-textprimary mb-4 flex items-center gap-2">
                  <Zap className={`w-5 h-5 ${batchData.textColor}`} />
                  Quick Stats
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  <div className="text-center p-3 bg-gray-50 rounded-xl">
                    <Users className="w-5 h-5 mx-auto mb-1 text-primary" />
                    <p className="font-paragraph text-xs text-textprimary/60">Class Size</p>
                    <p className="font-heading text-base font-bold text-textprimary">10-15</p>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded-xl">
                    <Clock className="w-5 h-5 mx-auto mb-1 text-primary" />
                    <p className="font-paragraph text-xs text-textprimary/60">Hours/Week</p>
                    <p className="font-heading text-base font-bold text-textprimary">4-8</p>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded-xl">
                    <Calendar className="w-5 h-5 mx-auto mb-1 text-primary" />
                    <p className="font-paragraph text-xs text-textprimary/60">Start Date</p>
                    <p className="font-heading text-sm font-bold text-textprimary">Flexible</p>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded-xl">
                    <Award className="w-5 h-5 mx-auto mb-1 text-primary" />
                    <p className="font-paragraph text-xs text-textprimary/60">Certificate</p>
                    <p className="font-heading text-sm font-bold text-textprimary">Yes</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Learning Outcomes */}
            <div className={`bg-gradient-to-r ${batchData.gradient} rounded-2xl shadow-sm p-6 text-white`}>
              <h3 className="font-heading text-lg font-bold mb-3 flex items-center gap-2">
                <Target className="w-5 h-5" />
                Learning Outcomes
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {batchData.outcomes.map((outcome: string, index: number) => (
                  <div key={index} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                    <span className="font-paragraph text-sm">{outcome}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* Curriculum Tab */}
        {activeTab === 'curriculum' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-4"
          >
            {batchData.curriculum.map((module: any, index: number) => {
              const Icon = module.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow overflow-hidden border border-gray-100"
                >
                  <div className={`bg-gradient-to-r ${batchData.gradient} px-6 py-3`}>
                    <div className="flex items-center gap-2">
                      <Icon className="w-5 h-5 text-white" />
                      <h3 className="font-heading text-base font-semibold text-white">{module.module}</h3>
                    </div>
                  </div>
                  <div className="p-5">
                    <ul className="space-y-2">
                      {module.topics.map((topic: string, idx: number) => (
                        <li key={idx} className="flex items-start gap-2">
                          <div className={`w-1.5 h-1.5 rounded-full mt-2 ${module.color} bg-current`}></div>
                          <span className="font-paragraph text-sm text-textprimary/80">{topic}</span>
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
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
              <h3 className="font-heading text-xl font-bold text-textprimary mb-4">
                Career Roles You'll Explore
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {batchData.careerRoles.map((role: any, index: number) => {
                  const Icon = role.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.03 }}
                      className="group bg-gradient-to-br from-gray-50 to-white rounded-xl p-4 hover:shadow-md transition-all border border-gray-100"
                    >
                      <div className="flex items-start gap-3">
                        <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${batchData.gradient} bg-opacity-10 flex items-center justify-center flex-shrink-0`}>
                          <Icon className={`w-5 h-5 ${role.color}`} />
                        </div>
                        <div>
                          <h4 className="font-heading text-sm font-bold text-textprimary mb-1">
                            {role.title}
                          </h4>
                          <p className="font-paragraph text-xs text-textprimary/70">
                            {role.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}

        {/* Mentors Tab */}
        {activeTab === 'mentors' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
              <h3 className="font-heading text-xl font-bold text-textprimary mb-4">
                Meet Your Mentors
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {batchData.mentors.map((mentor: any, index: number) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="bg-white rounded-xl p-4 hover:shadow-md transition-all border border-gray-100"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-primary/50 flex items-center justify-center text-white font-bold text-lg">
                        {mentor.name.charAt(0)}
                      </div>
                      <div>
                        <h4 className="font-heading text-sm font-bold text-textprimary">
                          {mentor.name}
                        </h4>
                        <p className="font-paragraph text-xs text-primary">{mentor.role}</p>
                        <p className="font-paragraph text-xs text-textprimary/60">{mentor.company}</p>
                      </div>
                    </div>
                    <p className="font-paragraph text-xs text-textprimary/70 mb-2">
                      <span className="font-semibold">Exp:</span> {mentor.experience}
                    </p>
                    <div className="flex flex-wrap gap-1 mb-2">
                      {mentor.achievements.slice(0, 2).map((ach: string, idx: number) => (
                        <span key={idx} className="text-[10px] bg-gray-100 px-2 py-0.5 rounded-full text-textprimary/60">
                          {ach}
                        </span>
                      ))}
                    </div>
                    <a
                      href="#"
                      className="inline-flex items-center gap-1 text-primary hover:text-primary/80 transition-colors text-xs"
                    >
                      <Linkedin size={12} />
                      <span>Connect</span>
                    </a>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* Features Tab */}
        {activeTab === 'features' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-4"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
                <h3 className="font-heading text-lg font-bold text-textprimary mb-3 flex items-center gap-2">
                  <Star className={`w-5 h-5 ${batchData.textColor}`} />
                  Program Features
                </h3>
                <ul className="space-y-2">
                  {batchData.features.map((feature: string, index: number) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className={`w-4 h-4 ${batchData.textColor} flex-shrink-0 mt-0.5`} />
                      <span className="font-paragraph text-sm text-textprimary/80">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={`bg-gradient-to-r ${batchData.gradient} rounded-2xl shadow-sm p-6 text-white`}>
                <h3 className="font-heading text-lg font-bold mb-3 flex items-center gap-2">
                  <Rocket className="w-5 h-5" />
                  Why Junior Dream?
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                    <span>Premium 1-on-1 mentorship</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                    <span>Live interactive sessions</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                    <span>Project-based learning</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                    <span>Career counseling</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Testimonials */}
            {batchData.testimonials && (
              <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
                <h3 className="font-heading text-lg font-bold text-textprimary mb-3">
                  What Parents Say
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {batchData.testimonials.map((testimonial: any, index: number) => (
                    <div key={index} className="p-4 bg-gray-50 rounded-xl">
                      <div className="flex items-center gap-0.5 mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={12} className="text-yellow-500 fill-current" />
                        ))}
                      </div>
                      <p className="font-paragraph text-xs text-textprimary/80 mb-2 italic">
                        "{testimonial.quote}"
                      </p>
                      <p className="font-heading text-xs font-bold text-textprimary">
                        {testimonial.author}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        )}
      </div>

      {/* Simple CTA */}
      <section className="bg-white border-t border-gray-200 py-12 mt-8">
        <div className="max-w-[120rem] mx-auto px-6 lg:px-12 text-center">
          <h2 className="font-heading text-2xl font-bold text-textprimary mb-3">
            Ready to Start?
          </h2>
          <p className="font-paragraph text-sm text-textprimary/60 mb-6">
            Join {batchData.customName} today
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              to="/partnerships#contact"
              className={`px-6 py-3 bg-gradient-to-r ${batchData.gradient} text-white font-paragraph font-semibold rounded-xl hover:shadow-lg transition-all text-sm inline-flex items-center gap-2`}
            >
              Enroll Now <ArrowRight size={14} />
            </Link>
            <Link
              to="/mentorship"
              className="px-6 py-3 border border-gray-300 text-textprimary font-paragraph font-semibold rounded-xl hover:bg-gray-50 transition-all text-sm"
            >
              Talk to Mentor
            </Link>
          </div>
        </div>
      </section>

      <PremiumFooter />
    </div>
  );
}