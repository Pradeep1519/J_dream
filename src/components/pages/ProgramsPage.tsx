import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import PremiumHeader from '../PremiumHeader';
import { ArrowRight, Users, Target, Award, ChevronDown, ChevronUp, Calendar, Clock, BookOpen } from 'lucide-react';

// Batch Structure Data
const BATCH_STRUCTURE = {
  foundation: {
    name: 'Dream Foundation',
    classes: 'Class 6–8',
    focus: 'Awareness, curiosity, basics',
    icon: Users,
    color: 'from-blue-400 to-blue-600'
  },
  explorer: {
    name: 'Dream Explorer',
    classes: 'Class 9–10',
    focus: 'Skill discovery, career clarity',
    icon: Target,
    color: 'from-green-400 to-green-600'
  },
  achiever: {
    name: 'Dream Achiever',
    classes: 'Class 11–12',
    focus: 'Preparation, specialization, roadmap',
    icon: Award,
    color: 'from-purple-400 to-purple-600'
  }
};

// Main Programs Data - Sirf 3 Cards
const PROGRAMS_DATA = [
  {
    id: 'engineering',
    _id: 'engineering',
    programName: 'Engineering Excellence',
    programCategory: 'Engineering',
    shortDescription: 'Comprehensive preparation for aspiring engineers with mentorship from professionals at top tech companies and institutions.',
    programImage: 'https://static.wixstatic.com/media/c4abef_7268acbcbe2a42b88a76cc4e55d3b54e~mv2.png',
    icon: '🛠️',
    color: 'from-blue-500 to-blue-700',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
    textColor: 'text-blue-600'
  },
  {
    id: 'medical',
    _id: 'medical',
    programName: 'Medical Foundations',
    programCategory: 'Medical',
    shortDescription: 'MBBS preparation with mentorship from practicing doctors and medical professionals from premier institutions.',
    programImage: 'https://static.wixstatic.com/media/c4abef_8245f091259247328a761b080182f20a~mv2.png',
    icon: '🩺',
    color: 'from-green-500 to-green-700',
    bgColor: 'bg-green-50',
    borderColor: 'border-green-200',
    textColor: 'text-green-600'
  },
  {
    id: 'civil',
    _id: 'civil',
    programName: 'Civil Services Leadership',
    programCategory: 'Civil Services',
    shortDescription: 'Strategic guidance for IAS/IPS aspirants with insights from serving officers and successful candidates.',
    programImage: 'https://static.wixstatic.com/media/c4abef_8245f091259247328a761b080182f20a~mv2.png',
    icon: '⚖️',
    color: 'from-purple-500 to-purple-700',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-200',
    textColor: 'text-purple-600'
  }
];

export default function ProgramsPage() {
  const [programs, setPrograms] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [expandedProgram, setExpandedProgram] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    loadPrograms();
  }, []);

  const loadPrograms = async () => {
    try {
      setPrograms(PROGRAMS_DATA);
    } catch (error) {
      console.error('Error loading programs:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const toggleProgram = (programId: string) => {
    setExpandedProgram(expandedProgram === programId ? null : programId);
  };

  const handleBatchClick = (programId: string, batchType: string) => {
    // Navigate to batch detail page
    navigate(`/programs/${programId}/${batchType}`);
  };

  return (
    <div className="min-h-screen bg-background">
      <PremiumHeader />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary to-secondary/90 text-secondary-foreground py-20">
        <div className="max-w-[120rem] mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-heading text-5xl lg:text-6xl font-bold text-secondary-foreground mb-6">
              Our Programs
            </h1>
            <p className="font-paragraph text-lg text-secondary-foreground/80 max-w-3xl">
              Junior Dream offers <span className="font-bold text-primary">3 main Career Programs</span>, each running in{' '}
              <span className="font-bold text-primary">3 age-based batches</span> designed to guide students from Classes 6-12 toward their dream careers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Programs Grid - Sirf 3 Cards */}
      <section className="max-w-[120rem] mx-auto px-6 lg:px-12 py-16" style={{ minHeight: '50vh' }}>
        {isLoading ? (
          <div className="flex items-center justify-center py-20">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <motion.div
                key={program._id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-textprimary/10"
              >
                {/* Program Header with Gradient */}
                <div className={`bg-gradient-to-r ${program.color} p-6 text-white cursor-pointer`}
                     onClick={() => toggleProgram(program._id)}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-4xl">{program.icon}</span>
                    <span className="font-paragraph text-sm bg-white/20 px-3 py-1 rounded-full">
                      {program.programCategory}
                    </span>
                  </div>
                  <h3 className="font-heading text-2xl font-bold mb-2">{program.programName}</h3>
                  <p className="font-paragraph text-sm text-white/90 line-clamp-2">
                    {program.shortDescription}
                  </p>
                  
                  {/* Expand/Collapse Icon */}
                  <div className="flex justify-end mt-4">
                    {expandedProgram === program._id ? (
                      <ChevronUp size={24} className="text-white" />
                    ) : (
                      <ChevronDown size={24} className="text-white" />
                    )}
                  </div>
                </div>

                {/* Program Image (Optional) */}
                {program.programImage && expandedProgram !== program._id && (
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={program.programImage}
                      alt={program.programName}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}

                {/* Expanded Batch Options */}
                {expandedProgram === program._id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="p-6 space-y-4 bg-gray-50"
                  >
                    <h4 className="font-heading text-lg font-bold text-textprimary mb-4">
                      Select Your Batch:
                    </h4>

                    {/* Foundation Batch */}
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className={`${program.bgColor} p-4 rounded-xl border ${program.borderColor} cursor-pointer hover:shadow-md transition-all`}
                      onClick={() => handleBatchClick(program.id, 'foundation')}
                    >
                      <div className="flex items-start gap-3">
                        <div className={`w-10 h-10 rounded-full ${program.color} flex items-center justify-center text-white font-bold`}>
                          <Users size={20} />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <h5 className="font-heading text-lg font-bold text-textprimary">
                              Dream Foundation
                            </h5>
                            <span className="font-paragraph text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full">
                              Class 6-8
                            </span>
                          </div>
                          <p className="font-paragraph text-sm text-textprimary/70 mt-1">
                            Awareness, curiosity, basics
                          </p>
                          <div className="flex items-center gap-4 mt-2 text-xs text-textprimary/60">
                            <span className="flex items-center gap-1">
                              <Calendar size={12} /> 12 Months
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock size={12} /> Weekends
                            </span>
                          </div>
                          <div className="flex items-center justify-between mt-3">
                            <span className="font-heading text-lg font-bold text-primary">
                              ₹15,000/year
                            </span>
                            <span className="font-paragraph text-xs text-primary flex items-center gap-1">
                              View Details <ArrowRight size={12} />
                            </span>
                          </div>
                        </div>
                      </div>
                    </motion.div>

                    {/* Explorer Batch */}
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className={`${program.bgColor} p-4 rounded-xl border ${program.borderColor} cursor-pointer hover:shadow-md transition-all`}
                      onClick={() => handleBatchClick(program.id, 'explorer')}
                    >
                      <div className="flex items-start gap-3">
                        <div className={`w-10 h-10 rounded-full ${program.color} flex items-center justify-center text-white font-bold`}>
                          <Target size={20} />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <h5 className="font-heading text-lg font-bold text-textprimary">
                              Dream Explorer
                            </h5>
                            <span className="font-paragraph text-xs bg-green-100 text-green-600 px-2 py-1 rounded-full">
                              Class 9-10
                            </span>
                          </div>
                          <p className="font-paragraph text-sm text-textprimary/70 mt-1">
                            Skill discovery, career clarity
                          </p>
                          <div className="flex items-center gap-4 mt-2 text-xs text-textprimary/60">
                            <span className="flex items-center gap-1">
                              <Calendar size={12} /> 12 Months
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock size={12} /> Weekends
                            </span>
                          </div>
                          <div className="flex items-center justify-between mt-3">
                            <span className="font-heading text-lg font-bold text-primary">
                              ₹18,000/year
                            </span>
                            <span className="font-paragraph text-xs text-primary flex items-center gap-1">
                              View Details <ArrowRight size={12} />
                            </span>
                          </div>
                        </div>
                      </div>
                    </motion.div>

                    {/* Achiever Batch */}
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className={`${program.bgColor} p-4 rounded-xl border ${program.borderColor} cursor-pointer hover:shadow-md transition-all`}
                      onClick={() => handleBatchClick(program.id, 'achiever')}
                    >
                      <div className="flex items-start gap-3">
                        <div className={`w-10 h-10 rounded-full ${program.color} flex items-center justify-center text-white font-bold`}>
                          <Award size={20} />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <h5 className="font-heading text-lg font-bold text-textprimary">
                              Dream Achiever
                            </h5>
                            <span className="font-paragraph text-xs bg-purple-100 text-purple-600 px-2 py-1 rounded-full">
                              Class 11-12
                            </span>
                          </div>
                          <p className="font-paragraph text-sm text-textprimary/70 mt-1">
                            Preparation, specialization, roadmap
                          </p>
                          <div className="flex items-center gap-4 mt-2 text-xs text-textprimary/60">
                            <span className="flex items-center gap-1">
                              <Calendar size={12} /> 12 Months
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock size={12} /> Weekends
                            </span>
                          </div>
                          <div className="flex items-center justify-between mt-3">
                            <span className="font-heading text-lg font-bold text-primary">
                              ₹20,000/year
                            </span>
                            <span className="font-paragraph text-xs text-primary flex items-center gap-1">
                              View Details <ArrowRight size={12} />
                            </span>
                          </div>
                        </div>
                      </div>
                    </motion.div>

                    {/* View All Details Button */}
                    <Link
                      to={`/programs/${program.id}`}
                      className="mt-4 w-full font-paragraph text-sm bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-lg transition-colors inline-flex items-center justify-center gap-2"
                    >
                      {'=> View Complete Program'} <ArrowRight size={16} />
                    </Link>
                  </motion.div>
                )}

                {/* If not expanded, show a preview */}
                {expandedProgram !== program._id && (
                  <div className="p-4 bg-gray-50 border-t border-textprimary/10">
                    <button
                      onClick={() => toggleProgram(program._id)}
                      className="w-full font-paragraph text-sm text-primary hover:text-primary/80 transition-colors flex items-center justify-center gap-2"
                    >
                      Click to view batches <ChevronDown size={16} />
                    </button>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}