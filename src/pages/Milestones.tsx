import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/ui/SectionHeading';
import Timeline from '../components/ui/Timeline';
import { milestones } from '../data';

const Milestones: React.FC = () => {
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
            <h1 className="text-4xl font-bold mb-6">Project Milestones</h1>
            <p className="text-xl text-blue-100">
              Tracking our research journey and progress through key milestones
            </p>
          </motion.div>
        </div>
      </div>

      {/* Milestones Timeline */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Research Timeline" 
            subtitle="Key phases and achievements in our research project"
          />
          
          <div className="mt-12">
            <Timeline milestones={milestones} />
          </div>
        </div>
      </section>

      {/* Summary Stats */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="bg-gray-50 rounded-lg p-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-4xl font-bold text-primary-600 mb-2">
                {milestones.filter(m => m.completed).length}
              </div>
              <p className="text-gray-600">Milestones Completed</p>
            </motion.div>
            
            <motion.div 
              className="bg-gray-50 rounded-lg p-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="text-4xl font-bold text-primary-600 mb-2">
                {milestones.length - milestones.filter(m => m.completed).length}
              </div>
              <p className="text-gray-600">Milestones Remaining</p>
            </motion.div>
            
            <motion.div 
              className="bg-gray-50 rounded-lg p-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="text-4xl font-bold text-primary-600 mb-2">
                {Math.round((milestones.filter(m => m.completed).length / milestones.length) * 100)}%
              </div>
              <p className="text-gray-600">Overall Progress</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="py-16 bg-gradient-to-r from-secondary-600 to-secondary-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-6">Next Steps</h2>
            <p className="text-xl mb-8">
              Our team is currently focused on the development of the prototype tool and preparing for the usability testing phase. Key upcoming activities include:
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-teal-500 text-white mr-3 flex-shrink-0">1</span>
                <span>Completing the development of the core NLP engine for user story analysis</span>
              </li>
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-teal-500 text-white mr-3 flex-shrink-0">2</span>
                <span>Finalizing the user interface for the prototype tool</span>
              </li>
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-teal-500 text-white mr-3 flex-shrink-0">3</span>
                <span>Setting up environments for user testing with partner development teams</span>
              </li>
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-teal-500 text-white mr-3 flex-shrink-0">4</span>
                <span>Finalizing data collection and analysis methodology for the evaluation phase</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Milestones;