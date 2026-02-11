import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Filter } from 'lucide-react';
// import { Programs } from '@/entities';
// import { Image } from '@/components/ui/image';
import Header from '../Header';
import Footer from '../Footer';

export default function ProgramsPage() {
  const [programs, setPrograms] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedBatch, setSelectedBatch] = useState<string>('All');

  useEffect(() => {
    loadPrograms();
  }, []);

  const loadPrograms = async () => {
    try {
      // Comment out API calls for now
      // const result = await BaseCrudService.getAll<Programs>('programs');
      // setPrograms(result.items);
      
      // Mock data for now
      setPrograms([
        {
          _id: '1',
          programName: 'Engineering Excellence',
          programCategory: 'Engineering',
          shortDescription: 'Comprehensive preparation for aspiring engineers with mentorship from professionals at top tech companies.',
          targetClasses: 'Classes 6-12',
          programImage: 'https://static.wixstatic.com/media/c4abef_7268acbcbe2a42b88a76cc4e55d3b54e~mv2.png'
        },
        {
          _id: '2',
          programName: 'Civil Services Leadership',
          programCategory: 'Civil Services',
          shortDescription: 'Strategic guidance for IAS/IPS aspirants with insights from serving officers and successful candidates.',
          targetClasses: 'Classes 6-12',
          programImage: 'https://static.wixstatic.com/media/c4abef_8245f091259247328a761b080182f20a~mv2.png'
        },
        {
          _id: '3',
          programName: 'Medical Foundations',
          programCategory: 'Medical',
          shortDescription: 'MBBS preparation with mentorship from practicing doctors and medical professionals from premier institutions.',
          targetClasses: 'Classes 6-12',
          programImage: 'https://static.wixstatic.com/media/c4abef_8245f091259247328a761b080182f20a~mv2.png'
        }
      ]);
    } catch (error) {
      console.error('Error loading programs:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const excludedCategories = ['Engineering', 'Civil Services', 'Medical'];
  const batches = ['All', ...Array.from(new Set(programs.map(p => p.programCategory).filter(Boolean))).filter(category => !excludedCategories.includes(category))];
  
  const filteredPrograms = programs.filter(p => {
    const batchMatch = selectedBatch === 'All' || p.programCategory === selectedBatch;
    return batchMatch;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="bg-secondary text-secondary-foreground py-20">
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
              Specialized programs designed for Classes 6-12 students across three career paths: Engineering, Medical (MBBS), and Civil Services (IAS/IPS). Each program is structured in three batches based on class levels.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="max-w-[120rem] mx-auto px-6 lg:px-12 py-12 border-b border-textprimary/10">
        <div className="space-y-6">
          {/* Batch Filter */}
          <div className="flex items-center gap-4 flex-wrap">
            <div className="flex items-center gap-2 text-textprimary">
              <Filter size={20} className="text-primary" />
              <span className="font-paragraph text-sm font-semibold">Filter by Batch:</span>
            </div>
            <div className="flex gap-3 flex-wrap">
              {batches.map((batch) => (
                <button
                  key={batch}
                  onClick={() => setSelectedBatch(batch)}
                  className={`font-paragraph text-sm px-4 py-2 transition-colors ${
                    selectedBatch === batch
                      ? 'bg-primary text-primary-foreground'
                      : 'border border-textprimary/20 text-textprimary hover:border-primary'
                  }`}
                >
                  {batch}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="max-w-[120rem] mx-auto px-6 lg:px-12 py-16" style={{ minHeight: '50vh' }}>
        {isLoading ? null : filteredPrograms.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPrograms.map((program, index) => (
              <motion.div
                key={program._id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="border border-textprimary/10 hover:border-primary transition-colors overflow-hidden group"
              >
                {program.programImage && (
                  <div className="aspect-video overflow-hidden bg-secondary">
                    <img
                      src={program.programImage}
                      alt={program.programName || 'Program'}
                      width={600}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                )}
                <div className="p-6">
                  {program.programCategory && (
                    <span className="font-paragraph text-xs text-primary font-semibold mb-3 inline-block">
                      {'[ ' + program.programCategory + ' ]'}
                    </span>
                  )}
                  <h3 className="font-heading text-2xl font-bold text-textprimary mb-3">
                    {program.programName}
                  </h3>
                  <p className="font-paragraph text-sm text-textprimary/80 mb-4 leading-relaxed">
                    {program.shortDescription}
                  </p>
                  {program.targetClasses && (
                    <p className="font-paragraph text-xs text-textprimary/60 mb-4">
                      Target: {program.targetClasses}
                    </p>
                  )}
                  <Link
                    to={`/programs/${program._id}`}
                    className="font-paragraph text-sm text-primary hover:text-primary/80 transition-colors inline-flex items-center gap-2"
                  >
                    {'=> View Details'} <ArrowRight size={16} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="font-paragraph text-lg text-textprimary/60">
              No programs found in this category.
            </p>
          </div>
        )}
      </section>

      <Footer />
    </div>
  );
}