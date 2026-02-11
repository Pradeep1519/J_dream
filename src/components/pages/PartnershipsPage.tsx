import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Handshake, Mail, Send } from 'lucide-react';
// import { PartnershipOpportunities } from '@/entities';
// import { Image } from '@/components/ui/image';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Textarea } from '@/components/ui/textarea';
// import { useToast } from '@/hooks/use-toast';
import Header from '../Header';
import Footer from '../Footer';

export default function PartnershipsPage() {
  const [partnerships, setPartnerships] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  // const { toast } = useToast();

  useEffect(() => {
    loadPartnerships();
  }, []);

  const loadPartnerships = async () => {
    try {
      // Comment out API calls for now
      // const result = await BaseCrudService.getAll<PartnershipOpportunities>('partnershipopportunities');
      // setPartnerships(result.items);
      setPartnerships([]); // Empty array for now
    } catch (error) {
      console.error('Error loading partnerships:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      // toast({
      //   title: "Message Sent!",
      //   description: "Thank you for your interest. We'll get back to you soon.",
      // });
      setFormData({ name: '', email: '', organization: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
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
              Partnership Opportunities
            </h1>
            <p className="font-paragraph text-lg text-secondary-foreground/80 max-w-3xl">
              Join us in transforming education for students across India. Explore collaboration opportunities that align with your organization's goals and values.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Partnership Opportunities Grid */}
      <section className="max-w-[120rem] mx-auto px-6 lg:px-12 py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl lg:text-5xl font-bold text-textprimary mb-6">
            Ways to Partner
          </h2>
          <p className="font-paragraph text-lg text-textprimary/80 max-w-3xl mx-auto">
            We offer various partnership models designed to create mutual value and impact student outcomes.
          </p>
        </motion.div>

        <div style={{ minHeight: '40vh' }}>
          {isLoading ? null : partnerships.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {partnerships.map((partnership, index) => (
                <motion.div
                  key={partnership._id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="border border-textprimary/10 overflow-hidden hover:border-primary transition-colors"
                >
                  {partnership.featuredImage && (
                    <div className="aspect-video overflow-hidden bg-secondary">
                      <img
                        src={partnership.featuredImage}
                        alt={partnership.title || 'Partnership'}
                        width={800}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <div className="p-8">
                    {partnership.partnershipCategory && (
                      <span className="font-paragraph text-xs text-primary font-semibold mb-3 inline-block">
                        {'[ ' + partnership.partnershipCategory + ' ]'}
                      </span>
                    )}
                    <h3 className="font-heading text-2xl font-bold text-textprimary mb-4">
                      {partnership.title}
                    </h3>
                    {partnership.description && (
                      <p className="font-paragraph text-sm text-textprimary/80 mb-4 leading-relaxed">
                        {partnership.description}
                      </p>
                    )}
                    {partnership.benefits && (
                      <div className="mb-4">
                        <p className="font-paragraph text-xs text-textprimary font-semibold mb-2">
                          Benefits:
                        </p>
                        <p className="font-paragraph text-xs text-textprimary/70 leading-relaxed">
                          {partnership.benefits}
                        </p>
                      </div>
                    )}
                    {partnership.requirements && (
                      <div className="mb-6">
                        <p className="font-paragraph text-xs text-textprimary font-semibold mb-2">
                          Requirements:
                        </p>
                        <p className="font-paragraph text-xs text-textprimary/70 leading-relaxed">
                          {partnership.requirements}
                        </p>
                      </div>
                    )}
                    <div className="flex flex-col sm:flex-row gap-3">
                      {partnership.contactEmail && (
                        <a
                          href={`mailto:${partnership.contactEmail}`}
                          className="font-paragraph text-sm bg-primary text-primary-foreground px-6 py-3 hover:bg-primary/90 transition-colors inline-flex items-center justify-center gap-2"
                        >
                          <Mail size={16} />
                          Contact Us
                        </a>
                      )}
                      {partnership.learnMoreUrl && (
                        <a
                          href={partnership.learnMoreUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-paragraph text-sm border border-textprimary/20 text-textprimary px-6 py-3 hover:border-primary transition-colors inline-flex items-center justify-center"
                        >
                          Learn More
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="font-paragraph text-lg text-textprimary/60">
                Partnership opportunities are being updated. Check back soon!
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Why Partner Section */}
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
              Why Partner with Us?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Impact at Scale',
                description: 'Reach thousands of students across India and make a meaningful difference in their educational journey.'
              },
              {
                title: 'Brand Visibility',
                description: 'Enhance your organization\'s reputation by associating with quality education and student success.'
              },
              {
                title: 'Mutual Growth',
                description: 'Create value for both organizations through collaborative programs and shared expertise.'
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="border border-secondary-foreground/20 p-8 text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/20 mb-6">
                  <Handshake size={32} className="text-primary" />
                </div>
                <h3 className="font-heading text-xl font-bold text-secondary-foreground mb-4">
                  {benefit.title}
                </h3>
                <p className="font-paragraph text-sm text-secondary-foreground/80 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="max-w-[120rem] mx-auto px-6 lg:px-12 py-24">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-4xl lg:text-5xl font-bold text-textprimary mb-6">
              Get in Touch
            </h2>
            <p className="font-paragraph text-lg text-textprimary/80">
              Interested in partnering with us? Fill out the form below and we'll get back to you shortly.
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="border border-textprimary/10 p-8 lg:p-12"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="font-paragraph text-sm text-textprimary font-semibold mb-2 block">
                  Full Name *
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="font-paragraph border border-textprimary/20 px-3 py-2 w-full focus:outline-none focus:border-primary"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="font-paragraph text-sm text-textprimary font-semibold mb-2 block">
                  Email Address *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="font-paragraph border border-textprimary/20 px-3 py-2 w-full focus:outline-none focus:border-primary"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="organization" className="font-paragraph text-sm text-textprimary font-semibold mb-2 block">
                Organization
              </label>
              <input
                id="organization"
                name="organization"
                type="text"
                value={formData.organization}
                onChange={handleChange}
                className="font-paragraph border border-textprimary/20 px-3 py-2 w-full focus:outline-none focus:border-primary"
                placeholder="Your organization name"
              />
            </div>

            <div className="mb-8">
              <label htmlFor="message" className="font-paragraph text-sm text-textprimary font-semibold mb-2 block">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                className="font-paragraph border border-textprimary/20 px-3 py-2 w-full focus:outline-none focus:border-primary min-h-[150px]"
                placeholder="Tell us about your partnership interest..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full font-paragraph text-base bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-4 py-2"
            >
              {isSubmitting ? (
                'Sending...'
              ) : (
                <>
                  <Send size={18} className="mr-2 inline" />
                  {'{ Send Message }'}
                </>
              )}
            </button>
          </motion.form>
        </div>
      </section>

      <Footer />
    </div>
  );
}