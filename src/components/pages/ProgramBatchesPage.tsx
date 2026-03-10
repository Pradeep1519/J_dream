// src/components/pages/ProgramBatchesPage.tsx
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PremiumHeader from '../PremiumHeader';
import PremiumFooter from '../PremiumFooter';
import { ArrowLeft, Users, Target, Award, Calendar, Clock, ChevronRight } from 'lucide-react';

// Batches data for each program
const BATCHES_DATA = {
  engineering: {
    programName: 'Engineering Excellence',
    programId: 'engineering',
    icon: '🛠️',
    gradient: 'from-blue-600 to-blue-500',
    color: 'blue',
    bgLight: 'bg-blue-50',
    textColor: 'text-blue-600',
    borderColor: 'border-blue-200',
    description: 'Comprehensive preparation for aspiring engineers with mentorship from industry experts.',
    batches: [
      {
        id: 'foundation',
        name: 'Tech Buds',
        level: 'Dream Foundation',
        class: 'Class 6-8',
        focus: 'Awareness, curiosity, basics',
        duration: '12 Months',
        schedule: 'Weekends',
        fee: '₹15,000/year',
        icon: Users,
        color: 'blue'
      },
      {
        id: 'explorer',
        name: 'Tech Explorers',
        level: 'Dream Explorer',
        class: 'Class 9-10',
        focus: 'Skill discovery, career clarity',
        duration: '12 Months',
        schedule: 'Weekends',
        fee: '₹18,000/year',
        icon: Target,
        color: 'blue'
      },
      {
        id: 'achiever',
        name: 'Engineering Excellence Program',
        level: 'Dream Achiever',
        class: 'Class 11-12',
        focus: 'Preparation, specialization, roadmap',
        duration: '12 Months',
        schedule: 'Weekends + Weekdays',
        fee: '₹20,000/year',
        icon: Award,
        color: 'blue'
      }
    ]
  },
  medical: {
    programName: 'Medical Foundations',
    programId: 'medical',
    icon: '🩺',
    gradient: 'from-green-600 to-green-500',
    color: 'green',
    bgLight: 'bg-green-50',
    textColor: 'text-green-600',
    borderColor: 'border-green-200',
    description: 'MBBS preparation with mentorship from practicing doctors and medical professionals.',
    batches: [
      {
        id: 'foundation',
        name: 'Little Healers',
        level: 'Dream Foundation',
        class: 'Class 6-8',
        focus: 'Body basics, health awareness',
        duration: '12 Months',
        schedule: 'Weekends',
        fee: '₹15,000/year',
        icon: Users,
        color: 'green'
      },
      {
        id: 'explorer',
        name: 'Medical Explorers',
        level: 'Dream Explorer',
        class: 'Class 9-10',
        focus: 'Career clarity, medical fields',
        duration: '12 Months',
        schedule: 'Weekends',
        fee: '₹18,000/year',
        icon: Target,
        color: 'green'
      },
      {
        id: 'achiever',
        name: 'Medical Excellence Program',
        level: 'Dream Achiever',
        class: 'Class 11-12',
        focus: 'NEET preparation, specialization',
        duration: '12 Months',
        schedule: 'Weekends + Weekdays',
        fee: '₹20,000/year',
        icon: Award,
        color: 'green'
      }
    ]
  },
  civil: {
    programName: 'Civil Services Leadership',
    programId: 'civil',
    icon: '⚖️',
    gradient: 'from-purple-600 to-purple-500',
    color: 'purple',
    bgLight: 'bg-purple-50',
    textColor: 'text-purple-600',
    borderColor: 'border-purple-200',
    description: 'Strategic guidance for IAS/IPS aspirants with insights from serving officers.',
    batches: [
      {
        id: 'foundation',
        name: 'Young Leaders',
        level: 'Dream Foundation',
        class: 'Class 6-8',
        focus: 'Leadership basics, India awareness',
        duration: '12 Months',
        schedule: 'Weekends',
        fee: '₹15,000/year',
        icon: Users,
        color: 'purple'
      },
      {
        id: 'explorer',
        name: 'Civil Services Explorers',
        level: 'Dream Explorer',
        class: 'Class 9-10',
        focus: 'Service awareness, UPSC basics',
        duration: '12 Months',
        schedule: 'Weekends',
        fee: '₹18,000/year',
        icon: Target,
        color: 'purple'
      },
      {
        id: 'achiever',
        name: 'Civil Services Excellence Program',
        level: 'Dream Achiever',
        class: 'Class 11-12',
        focus: 'UPSC preparation, answer writing',
        duration: '12 Months',
        schedule: 'Weekends + Weekdays',
        fee: '₹20,000/year',
        icon: Award,
        color: 'purple'
      }
    ]
  }
};

export default function ProgramBatchesPage() {
  const { id } = useParams<{ id: string }>();
  const [data, setData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (id && BATCHES_DATA[id as keyof typeof BATCHES_DATA]) {
      setData(BATCHES_DATA[id as keyof typeof BATCHES_DATA]);
    }
    setIsLoading(false);
    window.scrollTo(0, 0);
  }, [id]);

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

  if (!data) {
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

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <PremiumHeader />

      {/* Back Button */}
      <div className="max-w-[120rem] mx-auto px-6 lg:px-12 pt-32 pb-6">
        <Link
          to="/programs"
          className="inline-flex items-center gap-2 text-textprimary/60 hover:text-primary transition-colors group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Back to Programs
        </Link>
      </div>

      {/* Program Header */}
      <section className="px-6 lg:px-12 pb-12">
        <div className="max-w-[120rem] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${data.gradient} flex items-center justify-center text-3xl`}>
                {data.icon}
              </div>
              <div>
                <h1 className="font-heading text-4xl lg:text-5xl font-bold text-textprimary">
                  {data.programName}
                </h1>
                <p className="font-paragraph text-textprimary/60 mt-2 max-w-2xl">
                  {data.description}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Batches Grid */}
      <section className="px-6 lg:px-12 pb-24">
        <div className="max-w-[120rem] mx-auto">
          <h2 className="font-heading text-2xl font-bold text-textprimary mb-8">
            Select Your Batch
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {data.batches.map((batch: any, index: number) => {
              const Icon = batch.icon;
              return (
                <motion.div
                  key={batch.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                >
                  <Link
                    to={`/programs/${data.programId}/${batch.id}`}
                    className="block h-full"
                  >
                    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 h-full">
                      {/* Top Accent */}
                      <div className={`h-2 w-full bg-gradient-to-r ${data.gradient}`}></div>
                      
                      <div className="p-6">
                        {/* Header */}
                        <div className="flex items-start justify-between mb-4">
                          <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${data.gradient} flex items-center justify-center`}>
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${data.bgLight} ${data.textColor}`}>
                            {batch.level}
                          </span>
                        </div>

                        {/* Content */}
                        <h3 className="font-heading text-xl font-bold text-textprimary mb-2">
                          {batch.name}
                        </h3>
                        <p className="text-sm text-primary font-medium mb-2">
                          {batch.class}
                        </p>
                        <p className="text-sm text-textprimary/70 mb-4">
                          {batch.focus}
                        </p>

                        {/* Details */}
                        <div className="flex items-center gap-3 text-xs text-textprimary/60 mb-4">
                          <span className="flex items-center gap-1">
                            <Calendar size={12} /> {batch.duration}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock size={12} /> {batch.schedule}
                          </span>
                        </div>

                        {/* Footer */}
                        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                          <span className="font-heading text-xl font-bold text-primary">
                            {batch.fee}
                          </span>
                          <span className={`${data.textColor} group-hover:translate-x-2 transition-transform`}>
                            <ChevronRight size={20} />
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <PremiumFooter />
    </div>
  );
}