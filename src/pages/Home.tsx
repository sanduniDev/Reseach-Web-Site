import React from 'react';
import { motion } from 'framer-motion';
import { ButtonLink } from '../components/ui/Button';
import SectionHeading from '../components/ui/SectionHeading';
import { Card, CardBody } from '../components/ui/Card';
import { ArrowRight, Lightbulb, Code, Users, BarChart } from 'lucide-react';
import { projectData } from '../data';

const Home: React.FC = () => {
  const features = [
    {
      icon: <Lightbulb size={24} className="text-primary-500" />,
      title: 'Innovative Methodology',
      description: 'A novel approach to user story creation using natural language processing and machine learning techniques.'
    },
    {
      icon: <Code size={24} className="text-primary-500" />,
      title: 'Advanced Technology',
      description: 'Combines cutting-edge NLP algorithms with domain-specific knowledge to generate better user stories.'
    },
    {
      icon: <Users size={24} className="text-primary-500" />,
      title: 'Team-Centric Design',
      description: 'Designed to enhance collaboration between stakeholders and development teams in agile environments.'
    },
    {
      icon: <BarChart size={24} className="text-primary-500" />,
      title: 'Measurable Results',
      description: 'Provides data-driven insights on user story quality and team productivity improvements.'
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 to-primary-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00bTAtMTZjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00bTE2IDE2YzAtMi4yIDEuOC00IDQtNHM0IDEuOCA0IDQtMS44IDQtNCA0LTQtMS44LTQtNG0tMTYgMTZjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00bS0xNi0xNmMwLTIuMiAxLjgtNCA0LTRzNCAxLjggNCA0LTEuOCA0LTQgNC00LTEuOC00LTRtLTE2IDE2YzAtMi4yIDEuOC00IDQtNHM0IDEuOCA0IDQtMS44IDQtNCA0LTQtMS44LTQtNG0xNi0xNmMwLTIuMiAxLjgtNCA0LTRzNCAxLjggNCA0LTEuOCA0LTQgNC00LTEuOC00LTRtLTE2IDE2YzAtMi4yIDEuOC00IDQtNHM0IDEuOCA0IDQtMS44IDQtNCA0LTQtMS44LTQtNG0wLTE2YzAtMi4yIDEuOC00IDQtNHM0IDEuOCA0IDQtMS44IDQtNCA0LTQtMS44LTQtNCIvPjwvZz48L2c+PC9zdmc+')]"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-32 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                {projectData.title}
              </h1>
              <p className="text-xl md:text-2xl font-light mb-8 text-blue-100">
                {projectData.subtitle}
              </p>
              <p className="text-lg mb-8 max-w-xl text-blue-50">
                {projectData.description}
              </p>
              <div className="flex flex-wrap gap-4">
                <ButtonLink 
                  to="/domain" 
                  variant="primary"
                  size="lg"
                  className="bg-none text-primary-600 hover:bg-gray-100"
                  icon={<ArrowRight size={18} />}
                >
                  Explore Research
                </ButtonLink>
                <ButtonLink
                  to="/about-us"
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-primary-700"
                >
                  Meet the Team
                </ButtonLink>
              </div>
            </motion.div>
            <motion.div
              className="hidden md:block"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative">
                <div className="w-full h-96 bg-white/10 backdrop-blur-sm rounded-lg shadow-2xl overflow-hidden p-6">
                  <div className="h-8 flex items-center mb-4">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="h-6 w-3/4 bg-white/20 rounded"></div>
                    <div className="h-6 w-1/2 bg-white/20 rounded"></div>
                    <div className="mt-6 space-y-2">
                      <div className="h-4 w-full bg-white/20 rounded"></div>
                      <div className="h-4 w-5/6 bg-white/20 rounded"></div>
                      <div className="h-4 w-4/5 bg-white/20 rounded"></div>
                    </div>
                    <div className="mt-6 p-4 border border-white/20 rounded">
                      <div className="h-4 w-4/5 bg-white/20 rounded mb-2"></div>
                      <div className="h-4 w-full bg-white/20 rounded"></div>
                      <div className="h-4 w-3/5 bg-white/20 rounded mt-2"></div>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-accent-500/30 backdrop-blur-md rounded-full"></div>
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-secondary-500/20 backdrop-blur-md rounded-full"></div>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Key Research Areas" 
            subtitle="Our research focuses on several innovative aspects of agile user story development"
            center={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardBody>
                    <div className="flex items-center justify-center w-12 h-12 bg-primary-50 rounded-lg mb-4">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardBody>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Technologies" 
            subtitle="Our research leverages a range of cutting-edge technologies"
            center={true}
          />
          
          <div className="flex flex-wrap justify-center gap-6 mt-12">
            {projectData.technologies.map((tech, index) => (
              <motion.div
                key={index}
                className="px-6 py-4 bg-white rounded-lg shadow-sm border border-gray-100"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <span className="font-medium text-gray-700">{tech}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-accent-600 to-accent-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Interested in our research?
          </motion.h2>
          <motion.p 
            className="text-xl mb-8 max-w-2xl mx-auto text-purple-100"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Learn more about our methodology, findings, and the team behind this innovative project.
          </motion.p>
          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <ButtonLink 
              to="/documents" 
              variant="primary"
              size="lg"
             className="bg-gradient-to-r from-purple-400/30 via-purple-500/30 to-purple-600/30 text-accent-600 hover:bg-purple-50"

            >
              View Documents
            </ButtonLink>
            <ButtonLink
              to="/contact"
              variant="outline"
              size="lg"
             className="border-white text-white hover:bg-accent-700 hover:text-slate-950"
            >
              Contact Us
            </ButtonLink>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Home;