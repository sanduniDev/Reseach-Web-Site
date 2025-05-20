import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/ui/SectionHeading';
import { Card, CardBody } from '../components/ui/Card';
import { Presentation, Calendar, ExternalLink } from 'lucide-react';
import { presentations } from '../data';

const Presentations: React.FC = () => {
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
            <h1 className="text-4xl font-bold mb-6">Project Presentations</h1>
            <p className="text-xl text-blue-100">
              View presentations from key milestones in our research project
            </p>
          </motion.div>
        </div>
      </div>

      {/* Presentations Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Research Presentations" 
            subtitle="Slides and materials from presentations throughout the project lifecycle"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {presentations.map((pres, index) => (
              <motion.div
                key={pres.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardBody>
                    <div className="flex flex-col h-full">
                      <div className="relative mb-6 pb-[56.25%] bg-gray-100 rounded-lg overflow-hidden">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Presentation size={40} className="text-gray-400" />
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-semibold mb-2">{pres.title}</h3>
                      
                      <div className="flex items-center text-sm text-gray-500 mb-3">
                        <Calendar size={16} className="mr-2" />
                        <span>{pres.date}</span>
                      </div>
                      
                      <p className="text-gray-600 mb-4 flex-grow">{pres.description}</p>
                      
                      <div className="mt-auto pt-4">
                        <a 
                          href={pres.slideUrl} 
                          className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                        >
                          <ExternalLink size={16} className="mr-2" />
                          View Presentation
                        </a>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Presentations */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Upcoming Presentations" 
            subtitle="Schedule of forthcoming research presentations and events"
          />
          
          <motion.div
            className="mt-12 bg-gray-50 rounded-lg p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 pb-8 border-b border-gray-200">
              <div>
                <span className="inline-block px-3 py-1 bg-accent-100 text-accent-800 rounded-full text-sm font-medium mb-3">
                  Coming Soon
                </span>
                <h3 className="text-xl font-semibold mb-2">Midterm Research Review</h3>
                <p className="text-gray-600">
                  Comprehensive presentation of research progress, preliminary findings, and adjusted methodologies.
                </p>
              </div>
              <div className="mt-4 md:mt-0 md:ml-6 flex-shrink-0">
                <div className="inline-block bg-white px-4 py-2 rounded-lg border border-gray-200 text-center">
                  <span className="block text-gray-500 text-sm">Scheduled for</span>
                  <span className="block text-lg font-semibold text-gray-800">July 15, 2025</span>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <span className="inline-block px-3 py-1 bg-secondary-100 text-secondary-800 rounded-full text-sm font-medium mb-3">
                  Planning Stage
                </span>
                <h3 className="text-xl font-semibold mb-2">Tool Demo & Workshop</h3>
                <p className="text-gray-600">
                  Interactive session demonstrating the prototype tool and collecting feedback from agile practitioners.
                </p>
              </div>
              <div className="mt-4 md:mt-0 md:ml-6 flex-shrink-0">
                <div className="inline-block bg-white px-4 py-2 rounded-lg border border-gray-200 text-center">
                  <span className="block text-gray-500 text-sm">Target date</span>
                  <span className="block text-lg font-semibold text-gray-800">August 2025</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Video Recordings */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Recorded Sessions" 
            subtitle="Video recordings of key presentations and workshops"
          />
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card>
                <CardBody>
                  <div className="relative pb-[56.25%] bg-gray-800 rounded-lg overflow-hidden mb-4">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
                        <div className="w-0 h-0 border-y-8 border-y-transparent border-l-12 border-l-white ml-1"></div>
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Project Kickoff Presentation</h3>
                  <p className="text-gray-600">
                    Initial presentation outlining the project goals, methodology, and expected outcomes to stakeholders and research committee.
                  </p>
                </CardBody>
              </Card>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card>
                <CardBody>
                  <div className="relative pb-[56.25%] bg-gray-800 rounded-lg overflow-hidden mb-4">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
                        <div className="w-0 h-0 border-y-8 border-y-transparent border-l-12 border-l-white ml-1"></div>
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Literature Review Findings</h3>
                  <p className="text-gray-600">
                    Detailed presentation of the literature review methodology, key findings, and identified research gaps that inform our approach.
                  </p>
                </CardBody>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Conference Participation */}
      <section className="py-16 bg-gradient-to-r from-accent-600 to-accent-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2 
              className="text-3xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Conference Participation
            </motion.h2>
            <motion.p 
              className="text-xl mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Our research team is actively participating in academic and industry conferences to share our findings and gather feedback from the broader community.
            </motion.p>
            <motion.a 
              href="#" 
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-accent-700 bg-white hover:bg-accent-50 md:py-4 md:text-lg md:px-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              View Conference Schedule
            </motion.a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Presentations;