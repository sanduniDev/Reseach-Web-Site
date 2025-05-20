import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/ui/SectionHeading';
import ContactForm from '../components/ui/ContactForm';
import { Card, CardBody } from '../components/ui/Card';
import { Mail, MapPin, Phone, Clock } from 'lucide-react';

const ContactUs: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div className="bg-primary-600 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center text-white"
          >
            <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-blue-100">
              Get in touch with the research team for questions, collaborations, or feedback
            </p>
          </motion.div>
        </div>
      </div>

      {/* Contact Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <SectionHeading 
                title="Send Us a Message" 
                subtitle="We'd love to hear from you. Fill out the form below and we'll respond as soon as possible."
              />
              
              <Card>
                <CardBody>
                  <ContactForm />
                </CardBody>
              </Card>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <SectionHeading 
                title="Contact Information" 
                subtitle="Here's how you can reach us directly."
              />
              
              <div className="space-y-6">
                <Card>
                  <CardBody>
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-50 text-primary-700">
                          <Mail size={24} />
                        </div>
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-medium">Email</h3>
                        <p className="mt-1 text-gray-600">
                          <a href="mailto:contact@agilestorybuilder.research" className="hover:text-primary-600">
                            contact@agilestorybuilder.research
                          </a>
                        </p>
                        <p className="mt-1 text-sm text-gray-500">For general inquiries</p>
                      </div>
                    </div>
                  </CardBody>
                </Card>
                
                <Card>
                  <CardBody>
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-50 text-primary-700">
                          <Phone size={24} />
                        </div>
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-medium">Phone</h3>
                        <p className="mt-1 text-gray-600">
                          <a href="tel:+11234567890" className="hover:text-primary-600">
                            +1 (123) 456-7890
                          </a>
                        </p>
                        <p className="mt-1 text-sm text-gray-500">Monday to Friday, 9AM to 5PM</p>
                      </div>
                    </div>
                  </CardBody>
                </Card>
                
                <Card>
                  <CardBody>
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-50 text-primary-700">
                          <MapPin size={24} />
                        </div>
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-medium">Location</h3>
                        <p className="mt-1 text-gray-600">
                          Computer Science Department<br />
                          University Research Center<br />
                          123 Innovation Drive<br />
                          Tech City, TC 98765
                        </p>
                      </div>
                    </div>
                  </CardBody>
                </Card>
                
                <Card>
                  <CardBody>
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-50 text-primary-700">
                          <Clock size={24} />
                        </div>
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-medium">Office Hours</h3>
                        <div className="mt-1 space-y-1 text-gray-600">
                          <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
                          <p>Saturday - Sunday: Closed</p>
                        </div>
                        <p className="mt-2 text-sm text-gray-500">All times are in Eastern Time (ET)</p>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Find Us" 
            subtitle="Located in the heart of the university research district"
            center={true}
          />
          
          <motion.div
            className="mt-12 h-96 bg-gray-200 rounded-lg overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-full h-full flex items-center justify-center">
              <MapPin size={48} className="text-gray-400" />
              <span className="ml-2 text-gray-500 text-lg">Map Placeholder</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Frequently Asked Questions" 
            subtitle="Answers to common questions about our research and collaboration opportunities"
            center={true}
          />
          
          <div className="mt-12 max-w-3xl mx-auto">
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
              >
                <Card>
                  <CardBody>
                    <h3 className="text-lg font-semibold mb-2">How can I participate in your research studies?</h3>
                    <p className="text-gray-600">
                      We're always looking for participants who work in agile development teams. You can register your interest by filling out the contact form above, and we'll reach out when suitable study opportunities arise.
                    </p>
                  </CardBody>
                </Card>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                <Card>
                  <CardBody>
                    <h3 className="text-lg font-semibold mb-2">Is your research open source?</h3>
                    <p className="text-gray-600">
                      Yes, we're committed to open research principles. Our methodology, tools, and findings are being made available to the public as they are developed and validated. Check our Documents section for available resources.
                    </p>
                  </CardBody>
                </Card>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                <Card>
                  <CardBody>
                    <h3 className="text-lg font-semibold mb-2">Can I use your research in my own work?</h3>
                    <p className="text-gray-600">
                      We encourage the use of our research in both academic and industry contexts. Please cite our work appropriately and reach out if you have specific questions about implementation or application.
                    </p>
                  </CardBody>
                </Card>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.3 }}
              >
                <Card>
                  <CardBody>
                    <h3 className="text-lg font-semibold mb-2">How can my organization become a research partner?</h3>
                    <p className="text-gray-600">
                      We're open to partnerships with organizations interested in improving their agile practices. Please contact us with details about your organization and your specific areas of interest, and our team will follow up to discuss potential collaboration opportunities.
                    </p>
                  </CardBody>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;