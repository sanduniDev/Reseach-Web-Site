import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/ui/SectionHeading';
import { Card, CardBody } from '../components/ui/Card';
import { Github, Mail, Linkedin, Twitter } from 'lucide-react';
import { teamMembers } from '../data';

const AboutUs: React.FC = () => {
  // Separate supervisors and students
  const supervisors = teamMembers.filter(member =>
    member.role.toLowerCase().includes('supervisor')
  );

  const students = teamMembers.filter(member =>
    !member.role.toLowerCase().includes('supervisor')
  );

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
            <h1 className="text-4xl font-bold mb-6">About Our Team</h1>
            <p className="text-xl text-blue-100">
              Meet the researchers and contributors behind the Agile User Story Builder project
            </p>
          </motion.div>
        </div>
      </div>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Research Team"
            subtitle="The dedicated professionals driving our research forward"
          />

          {/* Supervisors Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {supervisors.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardBody>
                    <div className="flex flex-col items-center text-center">
                      <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
                        <img
                          src={member.imageUrl}
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                      <p className="text-primary-600 font-medium mb-3">{member.role}</p>
                      <p className="text-gray-600 mb-4">{member.bio}</p>
                      <div className="flex space-x-3 mt-auto">
                        {member.socialLinks.github && (
                          <a
                            href={member.socialLinks.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-primary-600 transition-colors"
                            aria-label={`${member.name}'s GitHub`}
                          >
                            <Github size={20} />
                          </a>
                        )}
                        {member.socialLinks.linkedin && (
                          <a
                            href={member.socialLinks.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-primary-600 transition-colors"
                            aria-label={`${member.name}'s LinkedIn`}
                          >
                            <Linkedin size={20} />
                          </a>
                        )}
                        {member.socialLinks.twitter && (
                          <a
                            href={member.socialLinks.twitter}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-primary-600 transition-colors"
                            aria-label={`${member.name}'s Twitter`}
                          >
                            <Twitter size={20} />
                          </a>
                        )}
                        <a
                          href={`mailto:${member.socialLinks.email}`}
                          className="text-gray-600 hover:text-primary-600 transition-colors"
                          aria-label={`Email ${member.name}`}
                        >
                          <Mail size={20} />
                        </a>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Students Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {students.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardBody>
                    <div className="flex flex-col items-center text-center">
                      <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
                        <img
                          src={member.imageUrl}
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                      <p className="text-primary-600 font-medium mb-3">{member.role}</p>
                      <p className="text-gray-600 mb-4">{member.bio}</p>
                      <div className="flex space-x-3 mt-auto">
                        {member.socialLinks.github && (
                          <a
                            href={member.socialLinks.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-primary-600 transition-colors"
                            aria-label={`${member.name}'s GitHub`}
                          >
                            <Github size={20} />
                          </a>
                        )}
                        {member.socialLinks.linkedin && (
                          <a
                            href={member.socialLinks.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-primary-600 transition-colors"
                            aria-label={`${member.name}'s LinkedIn`}
                          >
                            <Linkedin size={20} />
                          </a>
                        )}
                        {member.socialLinks.twitter && (
                          <a
                            href={member.socialLinks.twitter}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-primary-600 transition-colors"
                            aria-label={`${member.name}'s Twitter`}
                          >
                            <Twitter size={20} />
                          </a>
                        )}
                        <a
                          href={`mailto:${member.socialLinks.email}`}
                          className="text-gray-600 hover:text-primary-600 transition-colors"
                          aria-label={`Email ${member.name}`}
                        >
                          <Mail size={20} />
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

      {/* Research Vision */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-6">Our Research Vision</h2>
              <p className="text-lg text-gray-600 mb-4">
                The Agile User Story Builder project was born from our team's collective experience with the challenges of creating high-quality user stories in agile development environments.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                We envision a future where development teams can leverage advanced natural language processing and domain-specific knowledge to create more effective, complete, and consistent user stories—leading to better software outcomes and more satisfied users.
              </p>
              <p className="text-lg text-gray-600">
                Our interdisciplinary team brings together expertise in software engineering, linguistics, machine learning, and human-computer interaction to address this complex challenge from multiple perspectives.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-gray-50 p-8 rounded-lg"
            >
              <h3 className="text-xl font-semibold mb-4">Our Guiding Principles</h3>
              <ul className="space-y-4">
                <li className="flex">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-3">
                    <span className="text-green-600 text-lg font-bold">✓</span>
                  </div>
                  <p className="text-gray-700"><span className="font-medium">Research rigor:</span> Following established scientific methods and standards</p>
                </li>
                <li className="flex">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-3">
                    <span className="text-green-600 text-lg font-bold">✓</span>
                  </div>
                  <p className="text-gray-700"><span className="font-medium">Practical relevance:</span> Keeping real-world applications at the forefront</p>
                </li>
                <li className="flex">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-3">
                    <span className="text-green-600 text-lg font-bold">✓</span>
                  </div>
                  <p className="text-gray-700"><span className="font-medium">Innovation:</span> Seeking novel approaches to unsolved problems</p>
                </li>
                <li className="flex">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-3">
                    <span className="text-green-600 text-lg font-bold">✓</span>
                  </div>
                  <p className="text-gray-700"><span className="font-medium">Collaboration:</span> Working across disciplines and with industry partners</p>
                </li>
                <li className="flex">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-3">
                    <span className="text-green-600 text-lg font-bold">✓</span>
                  </div>
                  <p className="text-gray-700"><span className="font-medium">Open research:</span> Sharing findings and resources with the wider community</p>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Institutional Support */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Our Partners"
            subtitle="Institutions and organizations supporting our research"
            center={true}
          />

          <div className="mt-12 flex flex-wrap justify-center gap-8 items-center">
            <motion.div
              className="bg-white p-6 rounded-lg shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-40 h-16 bg-gray-200 rounded flex items-center justify-center">
                <span className="text-gray-500 font-medium">University</span>
              </div>
            </motion.div>

            <motion.div
              className="bg-white p-6 rounded-lg shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <div className="w-40 h-16 bg-gray-200 rounded flex items-center justify-center">
                <span className="text-gray-500 font-medium">Research Lab</span>
              </div>
            </motion.div>

            <motion.div
              className="bg-white p-6 rounded-lg shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <div className="w-40 h-16 bg-gray-200 rounded flex items-center justify-center">
                <span className="text-gray-500 font-medium">Tech Partner</span>
              </div>
            </motion.div>

            <motion.div
              className="bg-white p-6 rounded-lg shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              <div className="w-40 h-16 bg-gray-200 rounded flex items-center justify-center">
                <span className="text-gray-500 font-medium">Industry Group</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="py-16 bg-gradient-to-r from-secondary-600 to-secondary-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              className="text-3xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Interested in Collaborating?
            </motion.h2>
            <motion.p
              className="text-xl mb-8 text-teal-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              We're always looking for research collaborators, industry partners, and participants for our studies. If you're interested in contributing to our research, we'd love to hear from you.
            </motion.p>
            <motion.a
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-secondary-700 bg-white hover:bg-secondary-50 md:py-4 md:text-lg md:px-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Get in Touch
            </motion.a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
