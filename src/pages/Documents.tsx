import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/ui/SectionHeading';
import { Card, CardBody } from '../components/ui/Card';
import { FileText, Download, Calendar, Users, User, BookOpen } from 'lucide-react';
import { documents, references } from '../data';

const Documents: React.FC = () => {

 const [showReferences, setShowReferences] = useState(false);


  const getFileTypeInfo = (fileType: string) => {
    switch (fileType.toLowerCase()) {
      case 'pdf':
        return { icon: <FileText size={18} />, color: 'text-red-500 bg-red-50' };
      case 'doc':
      case 'docx':
        return { icon: <FileText size={18} />, color: 'text-blue-500 bg-blue-50' };
      case 'ppt':
      case 'pptx':
        return { icon: <FileText size={18} />, color: 'text-orange-500 bg-orange-50' };
      case 'xls':
      case 'xlsx':
        return { icon: <FileText size={18} />, color: 'text-green-500 bg-green-50' };
      default:
        return { icon: <FileText size={18} />, color: 'text-gray-500 bg-gray-50' };
    }
  };

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
            <h1 className="text-4xl font-bold mb-6">Project Documents</h1>
            <p className="text-xl text-blue-100">
              Access research documents, reports, and publications related to our project
            </p>
          </motion.div>
        </div>
      </div>

      {/* Documents Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Research Documents" 
            subtitle="Key documents and deliverables from our research project"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {documents.map((doc, index) => {
              const { icon, color } = getFileTypeInfo(doc.fileType);
              
              return (
                <motion.div
                  key={doc.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Card className="h-full">
                    <CardBody>
                      <div className="flex flex-col h-full">
                        <div className="flex items-start mb-4">
                          <div className={`w-10 h-10 rounded-lg ${color} flex items-center justify-center mr-3`}>
                            {icon}
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold">{doc.title}</h3>
                            <div className="flex items-center text-sm text-gray-500 mt-1">
                              <Calendar size={14} className="mr-1" />
                              <span>{doc.dateUploaded}</span>
                            </div>
                          </div>
                        </div>
                        
                        <p className="text-gray-600 mb-4 flex-grow">{doc.description}</p>
                        
                        <div className="mt-auto space-y-3">
                          <div className="flex items-center text-sm text-gray-500">
                            {doc.submissionType === 'Group' ? (
                              <Users size={14} className="mr-1" />
                            ) : (
                              <User size={14} className="mr-1" />
                            )}
                            <span>{doc.submissionType} Submission</span>
                          </div>
                          
                          <a 
                            href={doc.fileUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 w-full justify-center"
                          >
                            <Download size={16} className="mr-2" />
                            Download {doc.fileType}
                          </a>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Resources
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Supporting Resources" 
            subtitle="Additional materials to help understand our research"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="h-full">
                <CardBody>
                  <h3 className="text-xl font-semibold mb-4">Research Methods</h3>
                  <p className="text-gray-600 mb-4">
                    Detailed documentation of the research methodologies used in this project, including data collection and analysis techniques.
                  </p>
                  <a 
                    href="#" 
                    className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
                  >
                    <span>View methodology</span>
                    <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                  </a>
                </CardBody>
              </Card>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card className="h-full">
                <CardBody>
                  <h3 className="text-xl font-semibold mb-4">Data Sets</h3>
                  <p className="text-gray-600 mb-4">
                    Anonymized datasets collected during our research, made available for review and further analysis by other researchers.
                  </p>
                  <a 
                    href="#" 
                    className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
                  >
                    <span>Access datasets</span>
                    <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                  </a>
                </CardBody>
              </Card>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="h-full">
                <CardBody>
                  <h3 className="text-xl font-semibold mb-4">Bibliography</h3>
                  <p className="text-gray-600 mb-4">
                    Comprehensive bibliography of all sources cited in our research, including academic papers, industry reports, and books.
                  </p>
                  <a 
                    href="#" 
                    className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
                  >
                    <span>View bibliography</span>
                    <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                  </a>
                </CardBody>
              </Card>
            </motion.div>
          </div>
        </div>
      </section> */}

 {/* References Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="References" 
            subtitle="Comprehensive list of references cited in our research"
          />
          
          <div className="mt-12">
            <Card>
              <CardBody>
                {showReferences ? (
                  <div className="space-y-4">
                    {references.map((ref, index) => (
                      <div key={index} className="text-gray-700">
                        {ref}
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <BookOpen size={48} className="mx-auto text-gray-400 mb-4" />
                    <button
                      onClick={() => setShowReferences(true)}
                      className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700"
                    >
                      View References
                    </button>
                  </div>
                )}
              </CardBody>
            </Card>
          </div>
        </div>
      </section>


      {/* Document Request */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2 
              className="text-3xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Need Additional Materials?
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-600 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              If you're a researcher or industry professional interested in additional materials related to our project, please contact us with your specific requirements.
            </motion.p>
            <motion.a 
              href="/contact" 
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 md:py-4 md:text-lg md:px-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Request Documents
            </motion.a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Documents;