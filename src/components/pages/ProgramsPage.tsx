import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import PremiumHeader from '../PremiumHeader';
import PremiumFooter from '../PremiumFooter';
import { ArrowRight, Cpu, Heart, Scale, Users, Target, Award } from 'lucide-react';

// Main Programs Data - Sirf 3 Cards
const PROGRAMS_DATA = [
  {
    id: 'engineering',
    programName: 'Engineering Excellence',
    category: 'Engineering',
    description: 'Comprehensive preparation for aspiring engineers with mentorship from professionals at top tech companies.',
    icon: '🛠️',
    iconComponent: Cpu,
    gradient: 'from-blue-600 to-blue-500',
    color: 'blue',
    badgeColor: 'bg-blue-100 text-blue-600',
    students: '500+',
    mentors: '15+'
  },
  {
    id: 'medical',
    programName: 'Medical Foundations',
    category: 'Medical',
    description: 'MBBS preparation with mentorship from practicing doctors and medical professionals from premier institutions.',
    icon: '🩺',
    iconComponent: Heart,
    gradient: 'from-green-600 to-green-500',
    color: 'green',
    badgeColor: 'bg-green-100 text-green-600',
    students: '350+',
    mentors: '12+'
  },
  {
    id: 'civil',
    programName: 'Civil Services Leadership',
    category: 'Civil Services',
    description: 'Strategic guidance for IAS/IPS aspirants with insights from serving officers and successful candidates.',
    icon: '⚖️',
    iconComponent: Scale,
    gradient: 'from-purple-600 to-purple-500',
    color: 'purple',
    badgeColor: 'bg-purple-100 text-purple-600',
    students: '300+',
    mentors: '10+'
  }
];

export default function ProgramsPage() {
  const [programs, setPrograms] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
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

  const handleProgramClick = (programId: string) => {
    // Navigate to program batches page
    navigate(`/programs/${programId}/batches`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <PremiumHeader />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 lg:px-12">
        <div className="max-w-[120rem] mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-heading text-5xl lg:text-6xl font-bold text-textprimary mb-4">
              Our <span className="text-primary">Programs</span>
            </h1>
            <p className="font-paragraph text-lg text-textprimary/60 max-w-2xl mx-auto">
              Choose your path and start your journey with Junior Dream
            </p>
          </motion.div>
        </div>
      </section>

      {/* Programs Grid - 3 Cards */}
      <section className="px-6 lg:px-12 pb-24">
        <div className="max-w-[120rem] mx-auto">
          {isLoading ? (
            <div className="flex items-center justify-center py-20">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {programs.map((program, index) => {
                const IconComponent = program.iconComponent;
                
                return (
                  <motion.div
                    key={program.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -8 }}
                    className="group cursor-pointer"
                    onClick={() => handleProgramClick(program.id)}
                  >
                    {/* Program Card */}
                    <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100">
                      
                      {/* Top Gradient Bar */}
                      <div className={`h-2 w-full bg-gradient-to-r ${program.gradient}`}></div>
                      
                      {/* Card Content */}
                      <div className="p-8">
                        {/* Icon and Category */}
                        <div className="flex items-start justify-between mb-6">
                          <div>
                            <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${program.badgeColor} mb-3`}>
                              {program.category}
                            </span>
                            <h2 className="font-heading text-2xl font-bold text-textprimary mb-2">
                              {program.programName}
                            </h2>
                          </div>
                          <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${program.gradient} flex items-center justify-center text-3xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                            {program.icon}
                          </div>
                        </div>

                        {/* Description */}
                        <p className="font-paragraph text-sm text-textprimary/70 leading-relaxed mb-6">
                          {program.description}
                        </p>

                        {/* Stats */}
                        <div className="flex items-center gap-6 mb-6">
                          <div className="flex items-center gap-2">
                            <Users size={16} className="text-textprimary/40" />
                            <span className="font-paragraph text-sm text-textprimary/60">{program.students} Students</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Award size={16} className="text-textprimary/40" />
                            <span className="font-paragraph text-sm text-textprimary/60">{program.mentors} Mentors</span>
                          </div>
                        </div>

                        {/* CTA Button */}
                        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                          <span className="font-paragraph text-sm font-medium text-primary">
                            View Batches
                          </span>
                          <ArrowRight size={18} className="text-primary group-hover:translate-x-2 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      <PremiumFooter />
    </div>
  );
}