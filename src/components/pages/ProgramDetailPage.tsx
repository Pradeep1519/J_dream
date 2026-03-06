import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PremiumHeader from '../PremiumHeader';
import { 
  ArrowLeft, BookOpen, Users, Target, Award, 
  Calendar, Clock, DollarSign, CheckCircle, Star,
  Code, Brain, Shield, Cpu, Activity, Sparkles
} from 'lucide-react';

// Complete Batch Data
const BATCH_DATA = {
  engineering: {
    foundation: {
      name: 'Dream Foundation - Tech Buds',
      classes: 'Class 6-8',
      duration: '12 Months',
      fee: '₹15,000/year',
      focus: 'Awareness, curiosity, basics',
      description: 'Perfect for young minds who are curious about technology.',
      curriculum: [
        'Module 1: Technology Around Us',
        'Module 2: Logic & Thinking with Scratch',
        'Module 3: Mini Tech Worlds - Games & Robots',
        'Module 4: Safety & Ethics'
      ],
      careerRoles: [
        'Junior Software Creator',
        'Junior AI Explorer',
        'Junior Robotics Engineer',
        'Junior Game Developer',
        'Junior Cyber Safety Expert'
      ],
      outcomes: [
        'Basic understanding of technology',
        'Interest in coding',
        'Awareness about engineering careers'
      ]
    },
    explorer: {
      name: 'Dream Explorer - Tech Explorers',
      classes: 'Class 9-10',
      duration: '12 Months',
      fee: '₹18,000/year',
      focus: 'Skill discovery, career clarity',
      description: 'Explore different engineering fields and find your passion.',
      curriculum: [
        'Module 1: Python Basics',
        'Module 2: Web Development',
        'Module 3: Data Science Intro',
        'Module 4: AI/ML Concepts'
      ],
      careerRoles: [
        'Software Developer',
        'Data Scientist',
        'AI Engineer',
        'Cyber Security Engineer',
        'Game Developer'
      ],
      outcomes: [
        'Clear understanding of engineering fields',
        'Basic programming skills',
        'Career clarity'
      ]
    },
    achiever: {
      name: 'Dream Achiever - Engineering Excellence',
      classes: 'Class 11-12',
      duration: '12 Months',
      fee: '₹20,000/year',
      focus: 'Preparation, specialization, roadmap',
      description: 'Advanced program for serious aspirants.',
      curriculum: [
        'Module 1: Advanced Programming',
        'Module 2: Data Structures',
        'Module 3: Specialization Track',
        'Module 4: Exam Preparation'
      ],
      careerRoles: [
        'AI/ML Engineer',
        'Data Scientist',
        'Software Engineer',
        'Cyber Security Expert',
        'Full Stack Developer'
      ],
      outcomes: [
        'Mastery in chosen specialization',
        'Project portfolio',
        'Exam readiness'
      ]
    }
  },
  medical: {
    foundation: {
      name: 'Dream Foundation - Little Healers',
      classes: 'Class 6-8',
      duration: '12 Months',
      fee: '₹15,000/year',
      focus: 'Awareness, curiosity, basics',
      description: 'Introduction to human body and medical profession.',
      curriculum: [
        'Module 1: Human Body Basics',
        'Module 2: Health & Hygiene',
        'Module 3: Life Sciences Fun',
        'Module 4: Medical World'
      ],
      careerRoles: [
        'Junior Body Explorer',
        'Junior Health Hero',
        'Junior Life Saver',
        'Junior Bio Explorer',
        'Junior Doctor Buddy'
      ],
      outcomes: [
        'Basic understanding of human body',
        'Interest in medical field'
      ]
    },
    explorer: {
      name: 'Dream Explorer - Medical Explorers',
      classes: 'Class 9-10',
      duration: '12 Months',
      fee: '₹18,000/year',
      focus: 'Skill discovery, career clarity',
      description: 'Explore various medical careers.',
      curriculum: [
        'Module 1: Human Physiology',
        'Module 2: Cell Biology',
        'Module 3: Medical Chemistry',
        'Module 4: NEET Awareness'
      ],
      careerRoles: [
        'MBBS Doctor',
        'Surgeon',
        'Pediatrician',
        'Medical Researcher',
        'Pharmacist'
      ],
      outcomes: [
        'Clear understanding of medical careers',
        'NEET preparation awareness'
      ]
    },
    achiever: {
      name: 'Dream Achiever - Medical Excellence',
      classes: 'Class 11-12',
      duration: '12 Months',
      fee: '₹20,000/year',
      focus: 'Preparation, specialization, roadmap',
      description: 'Comprehensive medical entrance preparation.',
      curriculum: [
        'Module 1: Human Anatomy',
        'Module 2: Genetics',
        'Module 3: Biochemistry',
        'Module 4: NEET Strategy'
      ],
      careerRoles: [
        'MBBS Doctor',
        'Cardiologist',
        'Neurologist',
        'Medical Researcher',
        'Surgeon'
      ],
      outcomes: [
        'Deep understanding of medical sciences',
        'NEET exam readiness'
      ]
    }
  },
  civil: {
    foundation: {
      name: 'Dream Foundation - Young Leaders',
      classes: 'Class 6-8',
      duration: '12 Months',
      fee: '₹15,000/year',
      focus: 'Awareness, curiosity, basics',
      description: 'Introduction to India, society, and leadership.',
      curriculum: [
        'Module 1: India & Society',
        'Module 2: Rules & Constitution',
        'Module 3: Leadership & Ethics',
        'Module 4: Administration & Police'
      ],
      careerRoles: [
        'Junior Nation Builder',
        'Junior Law Explorer',
        'Junior Police Hero',
        'Junior Administrator',
        'Junior Social Leader'
      ],
      outcomes: [
        'Understanding of India & society',
        'Leadership values'
      ]
    },
    explorer: {
      name: 'Dream Explorer - Civil Services Explorers',
      classes: 'Class 9-10',
      duration: '12 Months',
      fee: '₹18,000/year',
      focus: 'Skill discovery, career clarity',
      description: 'Explore civil services and UPSC path.',
      curriculum: [
        'Module 1: Indian Polity',
        'Module 2: History & Geography',
        'Module 3: Economy Intro',
        'Module 4: UPSC Awareness'
      ],
      careerRoles: [
        'IAS Officer',
        'IPS Officer',
        'IFS Officer',
        'IRS Officer',
        'State Services Officer'
      ],
      outcomes: [
        'Clear understanding of civil services',
        'UPSC syllabus awareness'
      ]
    },
    achiever: {
      name: 'Dream Achiever - Civil Services Excellence',
      classes: 'Class 11-12',
      duration: '12 Months',
      fee: '₹20,000/year',
      focus: 'Preparation, specialization, roadmap',
      description: 'Advanced UPSC preparation program.',
      curriculum: [
        'Module 1: Polity Deep Dive',
        'Module 2: History & Economy',
        'Module 3: Current Affairs',
        'Module 4: Answer Writing'
      ],
      careerRoles: [
        'IAS Officer',
        'IPS Officer',
        'IFS Officer',
        'District Collector',
        'Policy Advisor'
      ],
      outcomes: [
        'Deep understanding of UPSC subjects',
        'Answer writing skills'
      ]
    }
  }
};

export default function ProgramDetailPage() {
  const { id, batchType } = useParams<{ id: string; batchType?: string }>();
  const [program, setProgram] = useState<any>(null);
  const [batchData, setBatchData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadData();
  }, [id, batchType]);

  const loadData = async () => {
    if (!id) return;
    
    try {
      // Agar batchType hai to batch details dikhao
      if (batchType && BATCH_DATA[id as keyof typeof BATCH_DATA]) {
        const programData = BATCH_DATA[id as keyof typeof BATCH_DATA];
        const batch = programData[batchType as keyof typeof programData];
        setBatchData(batch);
        setProgram(null);
      } 
      // Otherwise program details dikhao
      else {
        // Mock program data
        setProgram({
          id: id,
          programName: id === 'engineering' ? 'Engineering Excellence' : 
                      id === 'medical' ? 'Medical Foundations' : 
                      'Civil Services Leadership',
          programCategory: id === 'engineering' ? 'Engineering' : 
                          id === 'medical' ? 'Medical' : 
                          'Civil Services',
          shortDescription: 'Comprehensive preparation with mentorship from professionals.',
          curriculumDetails: 'Detailed curriculum focusing on exam preparation with real-world concepts.',
          mentorshipApproach: 'One-on-one mentorship with practicing professionals.',
          targetCareerPaths: id === 'engineering' ? 'Software, AI, Robotics, Core Engineering' :
                            id === 'medical' ? 'MBBS, Surgery, Research, Allied Health' :
                            'IAS, IPS, IFS, IRS',
          targetClasses: 'Classes 6-12',
          programImage: id === 'engineering' ? 'https://static.wixstatic.com/media/c4abef_7268acbcbe2a42b88a76cc4e55d3b54e~mv2.png' :
                       'https://static.wixstatic.com/media/c4abef_8245f091259247328a761b080182f20a~mv2.png'
        });
        setBatchData(null);
      }
    } catch (error) {
      console.error('Error loading data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const getProgramIcon = () => {
    if (id === 'engineering') return '🛠️';
    if (id === 'medical') return '🩺';
    if (id === 'civil') return '⚖️';
    return '🎓';
  };

  const getGradientColor = () => {
    if (id === 'engineering') return 'from-blue-500 to-blue-700';
    if (id === 'medical') return 'from-green-500 to-green-700';
    if (id === 'civil') return 'from-purple-500 to-purple-700';
    return 'from-primary to-primary/80';
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <PremiumHeader />
        <div className="flex items-center justify-center py-20">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
        </div>
      </div>
    );
  }

  if (!program && !batchData) {
    return (
      <div className="min-h-screen bg-background">
        <PremiumHeader />
        <div className="max-w-[120rem] mx-auto px-6 lg:px-12 py-20 text-center">
          <h2 className="font-heading text-3xl font-bold text-textprimary mb-4">
            Program Not Found
          </h2>
          <Link to="/programs" className="text-primary hover:underline">
            Back to Programs
          </Link>
        </div>
      </div>
    );
  }

  // BATCH DETAIL VIEW
  if (batchData) {
    return (
      <div className="min-h-screen bg-background">
        <PremiumHeader />

        {/* Back Button */}
        <div className="max-w-[120rem] mx-auto px-6 lg:px-12 py-6">
          <Link
            to={`/programs/${id}`}
            className="font-paragraph text-sm text-textprimary hover:text-primary transition-colors inline-flex items-center gap-2"
          >
            <ArrowLeft size={16} /> Back to Program
          </Link>
        </div>

        {/* Hero Section */}
        <section className={`bg-gradient-to-r ${getGradientColor()} text-white py-16`}>
          <div className="max-w-[120rem] mx-auto px-6 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-5xl">{getProgramIcon()}</span>
                <span className="font-paragraph text-sm bg-white/20 px-3 py-1 rounded-full">
                  {batchData.classes}
                </span>
              </div>
              <h1 className="font-heading text-4xl lg:text-5xl font-bold mb-4">
                {batchData.name}
              </h1>
              <p className="font-paragraph text-lg text-white/90 max-w-3xl">
                {batchData.description}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Quick Info */}
        <div className="max-w-[120rem] mx-auto px-6 lg:px-12 -mt-8">
          <div className="grid grid-cols-3 gap-4">
            {[
              { icon: Calendar, label: 'Duration', value: batchData.duration },
              { icon: Clock, label: 'Schedule', value: 'Weekends' },
              { icon: DollarSign, label: 'Fee', value: batchData.fee }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-4 text-center">
                <item.icon className="w-5 h-5 text-primary mx-auto mb-2" />
                <p className="font-paragraph text-xs text-textprimary/60">{item.label}</p>
                <p className="font-heading text-sm font-bold text-textprimary">{item.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-[120rem] mx-auto px-6 lg:px-12 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Curriculum */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="font-heading text-2xl font-bold text-textprimary mb-6 flex items-center gap-2">
                <BookOpen className="w-6 h-6 text-primary" />
                Curriculum
              </h2>
              <ul className="space-y-3">
                {batchData.curriculum.map((item: string, index: number) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="font-paragraph text-textprimary/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Career Roles */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="font-heading text-2xl font-bold text-textprimary mb-6 flex items-center gap-2">
                <Briefcase className="w-6 h-6 text-primary" />
                Career Roles
              </h2>
              <div className="grid grid-cols-1 gap-2">
                {batchData.careerRoles.map((role: string, index: number) => (
                  <div key={index} className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-yellow-500" />
                    <span className="font-paragraph text-sm text-textprimary/80">{role}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Outcomes */}
          <div className={`mt-8 bg-gradient-to-r ${getGradientColor()} text-white rounded-xl shadow-lg p-8`}>
            <h2 className="font-heading text-2xl font-bold mb-4 flex items-center gap-2">
              <Target className="w-6 h-6" />
              Learning Outcomes
            </h2>
            <ul className="space-y-2">
              {batchData.outcomes.map((outcome: string, index: number) => (
                <li key={index} className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span className="font-paragraph">{outcome}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className="mt-8 text-center">
            <Link
              to="/partnerships#contact"
              className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-lg hover:bg-primary/90 transition-colors font-paragraph font-bold"
            >
              {'{ Enroll Now }'}
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // PROGRAM DETAIL VIEW (existing code)
  return (
    <div className="min-h-screen bg-background">
      <PremiumHeader />

      <div className="max-w-[120rem] mx-auto px-6 lg:px-12 py-12">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <Link
            to="/programs"
            className="font-paragraph text-sm text-textprimary hover:text-primary transition-colors inline-flex items-center gap-2"
          >
            <ArrowLeft size={16} /> Back to Programs
          </Link>
        </motion.div>

        {/* Program Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="font-paragraph text-sm text-primary font-semibold mb-4 inline-block">
            {'[ ' + program.programCategory + ' ]'}
          </span>
          <h1 className="font-heading text-4xl lg:text-5xl font-bold text-textprimary mb-6">
            {program.programName}
          </h1>
          <p className="font-paragraph text-lg text-textprimary/80 max-w-3xl">
            {program.shortDescription}
          </p>
        </motion.div>

        {/* Program Image */}
        {program.programImage && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-16 aspect-video overflow-hidden bg-secondary rounded-xl"
          >
            <img
              src={program.programImage}
              alt={program.programName}
              className="w-full h-full object-cover"
            />
          </motion.div>
        )}

        {/* Program Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {program.curriculumDetails && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="border border-textprimary/10 p-8 rounded-xl"
            >
              <div className="flex items-center gap-3 mb-6">
                <BookOpen size={28} className="text-primary" />
                <h2 className="font-heading text-2xl font-bold text-textprimary">
                  Curriculum Details
                </h2>
              </div>
              <p className="font-paragraph text-base text-textprimary/80 leading-relaxed">
                {program.curriculumDetails}
              </p>
            </motion.div>
          )}

          {program.mentorshipApproach && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="border border-textprimary/10 p-8 rounded-xl"
            >
              <div className="flex items-center gap-3 mb-6">
                <Users size={28} className="text-primary" />
                <h2 className="font-heading text-2xl font-bold text-textprimary">
                  Mentorship Approach
                </h2>
              </div>
              <p className="font-paragraph text-base text-textprimary/80 leading-relaxed">
                {program.mentorshipApproach}
              </p>
            </motion.div>
          )}
        </div>

        {/* Target Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {program.targetCareerPaths && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-secondary text-secondary-foreground p-8 rounded-xl"
            >
              <div className="flex items-center gap-3 mb-4">
                <Target size={24} className="text-primary" />
                <h3 className="font-heading text-xl font-bold text-secondary-foreground">
                  Target Career Paths
                </h3>
              </div>
              <p className="font-paragraph text-sm text-secondary-foreground/80">
                {program.targetCareerPaths}
              </p>
            </motion.div>
          )}

          {program.targetClasses && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-secondary text-secondary-foreground p-8 rounded-xl"
            >
              <div className="flex items-center gap-3 mb-4">
                <Users size={24} className="text-primary" />
                <h3 className="font-heading text-xl font-bold text-secondary-foreground">
                  Target Classes
                </h3>
              </div>
              <p className="font-paragraph text-sm text-secondary-foreground/80">
                {program.targetClasses}
              </p>
            </motion.div>
          )}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-primary text-primary-foreground p-12 text-center rounded-xl"
        >
          <h2 className="font-heading text-3xl font-bold text-primary-foreground mb-4">
            Interested in This Program?
          </h2>
          <p className="font-paragraph text-base text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Connect with our team to learn more about enrollment and how we can help you achieve your career goals.
          </p>
          <Link
            to="/partnerships#contact"
            className="font-paragraph text-base bg-secondary text-secondary-foreground px-8 py-4 hover:bg-secondary/90 transition-colors inline-block rounded-lg"
          >
            {'{ Contact Us }'}
          </Link>
        </motion.div>
      </div>
    </div>
  );
}