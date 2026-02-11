import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Users, Award, Target, Linkedin } from 'lucide-react';
// import { Mentors } from '@/entities';
// import { Image } from '@/components/ui/image';
import Header from '../Header';
import Footer from '../Footer';

export default function MentorshipPage() {
  const [mentors, setMentors] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadMentors();
  }, []);

  const loadMentors = async () => {
    try {
      // Comment out API calls for now
      // const result = await BaseCrudService.getAll<Mentors>('mentors');
      // setMentors(result.items);
      setMentors([]); // Empty array for now
    } catch (error) {
      console.error('Error loading mentors:', error);
    } finally {
      setIsLoading(false);
    }
  };

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
              Expert Mentorship
            </h1>
            <p className="font-paragraph text-lg text-secondary-foreground/80 max-w-3xl">
              Connect with professionals actively practicing in your target career field. Our mentors bring real-world experience from top organizations and institutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mentorship Model Section */}
      <section className="max-w-[120rem] mx-auto px-6 lg:px-12 py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl lg:text-5xl font-bold text-textprimary mb-6">
            Our Mentorship Model
          </h2>
          <p className="font-paragraph text-lg text-textprimary/80 max-w-3xl mx-auto">
            We connect students with domain experts who provide personalized guidance, career insights, and real-world perspectives on their chosen fields.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            {
              icon: Users,
              title: 'Personalized Guidance',
              description: 'One-on-one mentorship sessions tailored to individual student goals and learning pace.'
            },
            {
              icon: Award,
              title: 'Industry Expertise',
              description: 'Learn from professionals with proven track records in engineering, civil services, and medicine.'
            },
            {
              icon: Target,
              title: 'Career Clarity',
              description: 'Gain insights into day-to-day realities of your target profession and make informed decisions.'
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="border border-textprimary/10 p-8 text-center hover:border-primary transition-colors"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 mb-6">
                <feature.icon size={32} className="text-primary" />
              </div>
              <h3 className="font-heading text-xl font-bold text-textprimary mb-4">
                {feature.title}
              </h3>
              <p className="font-paragraph text-sm text-textprimary/80 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Mentors Grid */}
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
              Meet Our Mentors
            </h2>
            <p className="font-paragraph text-lg text-secondary-foreground/80 max-w-3xl mx-auto">
              Domain experts from premier organizations ready to guide you on your educational journey.
            </p>
          </motion.div>

          <div style={{ minHeight: '40vh' }}>
            {isLoading ? null : mentors.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {mentors.map((mentor, index) => (
                  <motion.div
                    key={mentor._id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="border border-secondary-foreground/20 overflow-hidden hover:border-primary transition-colors"
                  >
                    {mentor.photo && (
                      <div className="aspect-square overflow-hidden bg-background">
                        <img
                          src={mentor.photo}
                          alt={mentor.name || 'Mentor'}
                          width={400}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                    <div className="p-6">
                      <h3 className="font-heading text-xl font-bold text-secondary-foreground mb-2">
                        {mentor.name}
                      </h3>
                      {mentor.designation && (
                        <p className="font-paragraph text-sm text-primary font-semibold mb-1">
                          {mentor.designation}
                        </p>
                      )}
                      {mentor.organization && (
                        <p className="font-paragraph text-sm text-secondary-foreground/70 mb-4">
                          {mentor.organization}
                        </p>
                      )}
                      {mentor.bio && (
                        <p className="font-paragraph text-sm text-secondary-foreground/80 mb-4 leading-relaxed">
                          {mentor.bio}
                        </p>
                      )}
                      {mentor.linkedInProfile && (
                        <a
                          href={mentor.linkedInProfile}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                        >
                          <Linkedin size={18} />
                          <span className="font-paragraph text-sm">LinkedIn Profile</span>
                        </a>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="font-paragraph text-lg text-secondary-foreground/60">
                  Our mentor profiles are being updated. Check back soon!
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="max-w-[120rem] mx-auto px-6 lg:px-12 py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl lg:text-5xl font-bold text-textprimary mb-6">
            Benefits of Our Mentorship
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: 'Real-World Insights',
              description: 'Learn about the actual day-to-day work in your target profession from those who live it.'
            },
            {
              title: 'Career Path Clarity',
              description: 'Understand the steps, challenges, and opportunities in your chosen field before committing.'
            },
            {
              title: 'Network Building',
              description: 'Connect with professionals who can provide guidance throughout your educational journey.'
            },
            {
              title: 'Informed Decisions',
              description: 'Make better choices about your education and career based on expert advice and experience.'
            }
          ].map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="border border-textprimary/10 p-8"
            >
              <h3 className="font-heading text-xl font-bold text-textprimary mb-4">
                {benefit.title}
              </h3>
              <p className="font-paragraph text-sm text-textprimary/80 leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}