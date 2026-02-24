import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import PremiumHeader from '../PremiumHeader'; // ✅ IMPORT SAHI KARA
import { TrendingUp, Users, Award, Linkedin } from 'lucide-react';
import { LeadershipTeam, PerformanceMetrics } from '@/entities';
// import { Image } from '@/components/ui/image'; // Comment out

export default function AboutPage() {
  const [leadership, setLeadership] = useState<LeadershipTeam[]>([]);
  const [metrics, setMetrics] = useState<PerformanceMetrics[]>([]);
  const [isLoadingLeadership, setIsLoadingLeadership] = useState(true);
  const [isLoadingMetrics, setIsLoadingMetrics] = useState(true);

  useEffect(() => {
    loadLeadership();
    loadMetrics();
  }, []);

  const loadLeadership = async () => {
    try {
      // Comment out API calls for now
      // const result = await BaseCrudService.getAll<LeadershipTeam>('leadershipteam');
      // setLeadership(result.items);
      setLeadership([]); // Empty array for now
    } catch (error) {
      console.error('Error loading leadership:', error);
    } finally {
      setIsLoadingLeadership(false);
    }
  };

  const loadMetrics = async () => {
    try {
      // Comment out API calls for now
      // const result = await BaseCrudService.getAll<PerformanceMetrics>('performancemetrics');
      // setMetrics(result.items);
      setMetrics([]); // Empty array for now
    } catch (error) {
      console.error('Error loading metrics:', error);
    } finally {
      setIsLoadingMetrics(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <PremiumHeader /> {/* ✅ HEADER ADD KIYA */}
      
      {/* Hero Section */}
      <section className="bg-secondary text-secondary-foreground py-20">
        <div className="max-w-[120rem] mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-heading text-5xl lg:text-6xl font-bold text-secondary-foreground mb-6">
              About Junior Dream
            </h1>
            <p className="font-paragraph text-lg text-secondary-foreground/80 max-w-3xl">
              Founded in 2025 and based in Gurugram, Haryana, we're on a mission to eliminate educational uncertainty by connecting students with professionals practicing their target careers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Story */}
      <section className="max-w-[120rem] mx-auto px-6 lg:px-12 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-textprimary mb-6">
              Our Story
            </h2>
            <p className="font-paragraph text-base text-textprimary/80 leading-relaxed mb-4">
              Junior Dream Private Limited was established with a clear vision: to transform how students in Classes 6-12 approach their educational journey. We recognized a critical gap in the education system—students often make career decisions without understanding the real-world implications of their choices.
            </p>
            <p className="font-paragraph text-base text-textprimary/80 leading-relaxed">
              By connecting students directly with professionals who are actively practicing in engineering, civil services, and medicine, we provide authentic insights that go beyond textbooks and traditional counseling.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-textprimary mb-6">
              Our Approach
            </h2>
            <p className="font-paragraph text-base text-textprimary/80 leading-relaxed mb-4">
              We deliver executive grade edtech solutions through three specialized programs: Engineering Excellence, Civil Services Leadership (IAS/IPS), and Medical Foundations (MBBS). Each program is designed with input from domain experts and tailored to the specific needs of students pursuing these career paths.
            </p>
            <p className="font-paragraph text-base text-textprimary/80 leading-relaxed">
              Our mentorship model ensures that every student receives personalized guidance from professionals who understand the challenges and opportunities in their target field.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="bg-secondary text-secondary-foreground py-24">
        <div className="max-w-[120rem] mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-4xl lg:text-5xl font-bold text-secondary-foreground mb-6">
              Our Impact
            </h2>
            <p className="font-paragraph text-lg text-secondary-foreground/80 max-w-3xl mx-auto">
              Key performance indicators showcasing our commitment to student success and educational excellence.
            </p>
          </motion.div>

          <div style={{ minHeight: '30vh' }}>
            {isLoadingMetrics ? null : metrics.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {metrics.map((metric, index) => (
                  <motion.div
                    key={metric._id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="border border-secondary-foreground/20 p-8 text-center hover:border-primary transition-colors"
                  >
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/20 mb-4">
                      <TrendingUp size={24} className="text-primary" />
                    </div>
                    <div className="font-heading text-4xl font-bold text-primary mb-2">
                      {metric.metricValue}{metric.metricUnit}
                    </div>
                    <h3 className="font-paragraph text-base font-semibold text-secondary-foreground mb-2">
                      {metric.metricName}
                    </h3>
                    {metric.description && (
                      <p className="font-paragraph text-sm text-secondary-foreground/70">
                        {metric.description}
                      </p>
                    )}
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="font-paragraph text-lg text-secondary-foreground/60">
                  Performance metrics will be available soon.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="max-w-[120rem] mx-auto px-6 lg:px-12 py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl lg:text-5xl font-bold text-textprimary mb-6">
            Leadership Team
          </h2>
          <p className="font-paragraph text-lg text-textprimary/80 max-w-3xl mx-auto">
            Meet the experienced professionals driving Junior Dream's mission to transform education in India.
          </p>
        </motion.div>

        <div style={{ minHeight: '40vh' }}>
          {isLoadingLeadership ? null : leadership.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {leadership.map((leader, index) => (
                <motion.div
                  key={leader._id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="border border-textprimary/10 overflow-hidden hover:border-primary transition-colors"
                >
                  {leader.photo && (
                    <div className="aspect-square overflow-hidden bg-secondary">
                      <img
                        src={leader.photo}
                        alt={leader.fullName || 'Leader'}
                        width={400}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <h3 className="font-heading text-xl font-bold text-textprimary mb-2">
                      {leader.fullName}
                    </h3>
                    {leader.role && (
                      <p className="font-paragraph text-sm text-primary font-semibold mb-4">
                        {leader.role}
                      </p>
                    )}
                    {leader.biography && (
                      <p className="font-paragraph text-sm text-textprimary/80 mb-4 leading-relaxed">
                        {leader.biography}
                      </p>
                    )}
                    {leader.experienceHighlights && (
                      <div className="mb-4">
                        <p className="font-paragraph text-xs text-textprimary/60 font-semibold mb-2">
                          Experience Highlights:
                        </p>
                        <p className="font-paragraph text-xs text-textprimary/70 leading-relaxed">
                          {leader.experienceHighlights}
                        </p>
                      </div>
                    )}
                    {leader.linkedinProfile && (
                      <a
                        href={leader.linkedinProfile}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                      >
                        <Linkedin size={18} />
                        <span className="font-paragraph text-sm">LinkedIn</span>
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="font-paragraph text-lg text-textprimary/60">
                Leadership profiles are being updated. Check back soon!
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-secondary text-secondary-foreground py-24">
        <div className="max-w-[120rem] mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-4xl lg:text-5xl font-bold text-secondary-foreground mb-6">
              Our Values
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: 'Student-Centric',
                description: 'Every decision we make prioritizes student success and educational outcomes.'
              },
              {
                icon: Award,
                title: 'Excellence',
                description: 'We maintain the highest standards in curriculum design, mentor selection, and program delivery.'
              },
              {
                icon: TrendingUp,
                title: 'Innovation',
                description: 'We continuously evolve our approach to meet the changing needs of students and the education landscape.'
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="border border-secondary-foreground/20 p-8 text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/20 mb-6">
                  <value.icon size={32} className="text-primary" />
                </div>
                <h3 className="font-heading text-xl font-bold text-secondary-foreground mb-4">
                  {value.title}
                </h3>
                <p className="font-paragraph text-sm text-secondary-foreground/80 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ❌ REMOVED: <Footer /> - Already in Router Layout */}
    </div>
  );
}