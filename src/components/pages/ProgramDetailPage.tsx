import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, BookOpen, Users, Target, Zap, Award, Briefcase } from 'lucide-react';
// import { Programs } from '@/entities';
// import { Image } from '@/components/ui/image';
// import { LoadingSpinner } from '@/components/ui/loading-spinner';

interface ProgramTier {
  _id: string;
  tierName?: string;
  classRange?: string;
  roles?: string;
  focusAreas?: string;
  outcome?: string;
}

export default function ProgramDetailPage() {
  const { id } = useParams<{ id: string }>();
  const [program, setProgram] = useState<any>(null);
  const [tiers, setTiers] = useState<ProgramTier[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadProgram();
  }, [id]);

  const loadProgram = async () => {
    if (!id) return;
    try {
      // Comment out API calls for now
      // const data = await BaseCrudService.getById<Programs>('programs', id);
      // setProgram(data);
      
      // Load program tiers
      // const tiersData = await BaseCrudService.getAll<ProgramTier>('programtiers', {}, { limit: 100 });
      // setTiers(tiersData.items);
      
      // Mock data for now
      setProgram({
        programName: 'Engineering Excellence',
        programCategory: 'Engineering',
        shortDescription: 'Comprehensive preparation for aspiring engineers with mentorship from professionals at top tech companies.',
        curriculumDetails: 'Detailed curriculum focusing on JEE Main/Advanced preparation with real-world engineering concepts.',
        mentorshipApproach: 'One-on-one mentorship with practicing engineers from top tech companies.',
        targetCareerPaths: 'Software Engineering, Mechanical Engineering, Civil Engineering',
        targetClasses: 'Classes 6-12',
        programImage: 'https://static.wixstatic.com/media/c4abef_7268acbcbe2a42b88a76cc4e55d3b54e~mv2.png'
      });
      setTiers([]);
    } catch (error) {
      console.error('Error loading program:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* ❌ REMOVED: <Header /> - Already in Router Layout */}

      <div className="max-w-[120rem] mx-auto px-6 lg:px-12 py-12" style={{ minHeight: '60vh' }}>
        {isLoading ? (
          <div className="flex items-center justify-center py-20">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
          </div>
        ) : !program ? (
          <div className="text-center py-20">
            <h2 className="font-heading text-3xl font-bold text-textprimary mb-4">
              Program Not Found
            </h2>
            <p className="font-paragraph text-base text-textprimary/60 mb-8">
              The program you're looking for doesn't exist.
            </p>
            <Link
              to="/programs"
              className="font-paragraph text-sm text-primary hover:text-primary/80 transition-colors inline-flex items-center gap-2"
            >
              <ArrowLeft size={16} /> Back to Programs
            </Link>
          </div>
        ) : (
          <>
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
              {program.programCategory && (
                <span className="font-paragraph text-sm text-primary font-semibold mb-4 inline-block">
                  {'[ ' + program.programCategory + ' ]'}
                </span>
              )}
              <h1 className="font-heading text-4xl lg:text-5xl font-bold text-textprimary mb-6">
                {program.programName}
              </h1>
              {program.shortDescription && (
                <p className="font-paragraph text-lg text-textprimary/80 max-w-3xl">
                  {program.shortDescription}
                </p>
              )}
            </motion.div>

            {/* Program Image */}
            {program.programImage && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="mb-16 aspect-video overflow-hidden bg-secondary"
              >
                <img
                  src={program.programImage}
                  alt={program.programName || 'Program'}
                  width={1200}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            )}

            {/* Program Details Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              {/* Curriculum Details */}
              {program.curriculumDetails && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="border border-textprimary/10 p-8"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <BookOpen size={28} className="text-primary" />
                    <h2 className="font-heading text-2xl font-bold text-textprimary">
                      Curriculum Details
                    </h2>
                  </div>
                  <p className="font-paragraph text-base text-textprimary/80 leading-relaxed whitespace-pre-line">
                    {program.curriculumDetails}
                  </p>
                </motion.div>
              )}

              {/* Mentorship Approach */}
              {program.mentorshipApproach && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="border border-textprimary/10 p-8"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <Users size={28} className="text-primary" />
                    <h2 className="font-heading text-2xl font-bold text-textprimary">
                      Mentorship Approach
                    </h2>
                  </div>
                  <p className="font-paragraph text-base text-textprimary/80 leading-relaxed whitespace-pre-line">
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
                  className="bg-secondary text-secondary-foreground p-8"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <Target size={24} className="text-primary" />
                    <h3 className="font-heading text-xl font-bold text-secondary-foreground">
                      Target Career Paths
                    </h3>
                  </div>
                  <p className="font-paragraph text-sm text-secondary-foreground/80 leading-relaxed">
                    {program.targetCareerPaths}
                  </p>
                </motion.div>
              )}

              {program.targetClasses && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="bg-secondary text-secondary-foreground p-8"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <Users size={24} className="text-primary" />
                    <h3 className="font-heading text-xl font-bold text-secondary-foreground">
                      Target Classes
                    </h3>
                  </div>
                  <p className="font-paragraph text-sm text-secondary-foreground/80 leading-relaxed">
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
              className="bg-primary text-primary-foreground p-12 text-center"
            >
              <h2 className="font-heading text-3xl font-bold text-primary-foreground mb-4">
                Interested in This Program?
              </h2>
              <p className="font-paragraph text-base text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
                Connect with our team to learn more about enrollment and how we can help you achieve your career goals.
              </p>
              <Link
                to="/partnerships#contact"
                className="font-paragraph text-base bg-secondary text-secondary-foreground px-8 py-4 hover:bg-secondary/90 transition-colors inline-block"
              >
                {'{ Contact Us }'}
              </Link>
            </motion.div>
          </>
        )}
      </div>

      {/* ❌ REMOVED: <Footer /> - Already in Router Layout */}
    </div>
  );
}