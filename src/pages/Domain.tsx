import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/ui/SectionHeading';
import { Card, CardBody } from '../components/ui/Card';
import { Search, TrendingUp, Target, Workflow, Lightbulb, Code } from 'lucide-react';

const Domain: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div className="bg-primary-600 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center text-white"
          >
            <h1 className="text-4xl font-bold mb-6">Research Domain</h1>
            <p className="text-xl text-blue-100">
              Exploring the intersection of natural language processing and agile methodology to enhance user story creation
            </p>
          </motion.div>
        </div>
      </div>

      {/* Literature Survey */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Literature Survey" 
            subtitle="A comprehensive review of existing research and tools in agile user story development"
          />
          
          <div className="mt-8 space-y-8">
            <Card>
              <CardBody>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <Search size={24} className="text-primary-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Current State of Research</h3>
                    <p className="text-gray-600">
                      Our literature survey examined over 50 academic papers and industry reports published between 2015-2025 on user story practices in agile development. We identified several key themes including quality metrics for user stories, automation in agile workflow, and the impact of natural language processing on requirement engineering.
                    </p>
                    <p className="text-gray-600 mt-4">
                      The survey revealed that while many tools exist to manage user stories, few leverage advanced NLP techniques to enhance the quality and completeness of the stories themselves. Most existing solutions focus on management rather than content enhancement.
                    </p>
                  </div>
                </div>
              </CardBody>
            </Card>
            
            <Card>
              <CardBody>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <TrendingUp size={24} className="text-primary-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Key Findings</h3>
                    <ul className="list-disc pl-5 text-gray-600 space-y-2">
                      <li>75% of project delays can be traced back to inadequate or incomplete user stories</li>
                      <li>Teams using structured user story templates report 40% fewer requirement-related defects</li>
                      <li>NLP techniques have been successfully applied in other areas of software development but remain underutilized in user story creation</li>
                      <li>Domain-specific language models outperform general models in technical requirement analysis</li>
                      <li>Collaborative tools that combine human expertise with AI assistance show the most promising results</li>
                    </ul>
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>

      {/* Research Gap */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Research Gap" 
            subtitle="The identified gaps in current knowledge and practice"
          />
          
          <div className="mt-8">
            <Card>
              <CardBody className="prose max-w-none">
                <p>
                  Through our comprehensive literature review, we've identified several significant gaps in the current state of user story development:
                </p>
                <ol className="space-y-4 mt-4">
                  <li>
                    <strong>Integration Gap:</strong> Existing tools don't effectively bridge natural language processing with domain-specific knowledge in software development. While NLP has advanced significantly, these advancements haven't been adapted to the specific context of agile user stories.
                  </li>
                  <li>
                    <strong>Quality Assurance Gap:</strong> There is a lack of automated systems that can evaluate the quality, completeness, and consistency of user stories against established best practices and project-specific requirements.
                  </li>
                  <li>
                    <strong>Contextual Understanding Gap:</strong> Current systems struggle to maintain context across multiple related user stories or to understand the implicit domain knowledge that human experts bring to user story creation.
                  </li>
                  <li>
                    <strong>Collaboration Gap:</strong> Tools tend to focus either on the technical aspects or the collaborative aspects of user story development, but rarely integrate both effectively.
                  </li>
                </ol>
                <p className="mt-4">
                  These gaps present a significant opportunity for our research to make a novel contribution to the field by developing an approach that addresses these limitations.
                </p>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>

      {/* Research Problem */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Research Problem" 
            subtitle="The specific problems our research aims to address"
          />
          
          <div className="mt-8">
            <Card>
              <CardBody>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <Target size={24} className="text-primary-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Primary Research Questions</h3>
                    <ol className="list-decimal pl-5 text-gray-600 space-y-4">
                      <li>
                        <p className="font-medium text-gray-800">How can natural language processing techniques be effectively applied to enhance the quality and completeness of user stories in agile development?</p>
                        <p className="mt-1">This question explores the specific NLP approaches and algorithms that can evaluate, augment, and improve user stories.</p>
                      </li>
                      <li>
                        <p className="font-medium text-gray-800">What metrics and evaluation criteria best capture the effectiveness of user stories in communicating requirements?</p>
                        <p className="mt-1">This question aims to establish quantifiable measures for user story quality beyond subjective assessment.</p>
                      </li>
                      <li>
                        <p className="font-medium text-gray-800">How can domain-specific knowledge be incorporated into automated user story analysis and enhancement?</p>
                        <p className="mt-1">This explores methods for capturing and utilizing project and domain context in user story development.</p>
                      </li>
                    </ol>
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>

      {/* Project Objectives */}
<section className="py-16 bg-white">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <SectionHeading 
      title="Project Objectives" 
      subtitle="The specific goals we aim to achieve through this research"
    />
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
      <Card>
        <CardBody>
          <div className="flex flex-col h-full">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center mr-3">
                <span className="text-primary-700 font-bold">1</span>
              </div>
              <h3 className="text-lg font-semibold">Automated Conversation Capture, Analysis, and Visual Representation</h3>
            </div>
            <p className="text-gray-600 flex-grow">
              Implement a neural network for accurate transcription and sentiment analysis of stakeholder meetings. Extract key requirements and context from transcriptions to generate detailed user stories, and use NLP to refine these for clear documentation.
            </p>
          </div>
        </CardBody>
      </Card>
      
      <Card>
        <CardBody>
          <div className="flex flex-col h-full">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center mr-3">
                <span className="text-primary-700 font-bold">2</span>
              </div>
              <h3 className="text-lg font-semibold">Automated Extraction and Classification of Tasks and Non-Functional Requirements</h3>
            </div>
            <p className="text-gray-600 flex-grow">
              Gather and organize data from storyboards and user stories for analysis. Use NLP preprocessing and supervised machine learning to classify tasks and non-functional requirements and assign roles accurately.
            </p>
          </div>
        </CardBody>
      </Card>
      
      <Card>
        <CardBody>
          <div className="flex flex-col h-full">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center mr-3">
                <span className="text-primary-700 font-bold">3</span>
              </div>
              <h3 className="text-lg font-semibold">Machine Learning-Enhanced Agile Project Management Dashboard</h3>
            </div>
            <p className="text-gray-600 flex-grow">
              Gather and preprocess historical and real-time data on user stories, project scope, and sprints. Train machine learning models and develop a dashboard to display user stories, predictions on time and budget, and client feedback.
            </p>
          </div>
        </CardBody>
      </Card>
      
      <Card>
        <CardBody>
          <div className="flex flex-col h-full">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center mr-3">
                <span className="text-primary-700 font-bold">4</span>
              </div>
              <h3 className="text-lg font-semibold">Visualization and Tool Development</h3>
            </div>
            <p className="text-gray-600 flex-grow">
              Develop tools to create images from user stories, visually representing images and dependencies of requirements for better understanding and communication.
            </p>
          </div>
        </CardBody>
      </Card>
    </div>
  </div>
</section>

      {/* Methodology */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Research Methodology" 
            subtitle="Our approach to addressing the research problem"
          />
          
          <div className="mt-8">
            <Card>
              <CardBody>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <Workflow size={24} className="text-primary-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Mixed Methods Approach</h3>
                    <p className="text-gray-600 mb-6">
                      Our research employs a mixed-methods approach combining qualitative and quantitative research techniques to develop and validate our proposed methodology and tool.
                    </p>
                    
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-lg font-medium text-gray-800 mb-2">Phase 1: Exploratory Research</h4>
                        <ul className="list-disc pl-5 text-gray-600 space-y-1">
                          <li>Comprehensive literature review of existing approaches and tools</li>
                          <li>Interviews with 25 agile practitioners to identify key challenges and requirements</li>
                          <li>Analysis of 500+ user stories from real-world projects to identify patterns and quality indicators</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-medium text-gray-800 mb-2">Phase 2: Methodology Development</h4>
                        <ul className="list-disc pl-5 text-gray-600 space-y-1">
                          <li>Creation of a formal framework for user story enhancement using NLP</li>
                          <li>Development of quality metrics based on linguistic features and domain knowledge</li>
                          <li>Design of algorithms for story analysis, suggestion generation, and context preservation</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-medium text-gray-800 mb-2">Phase 3: Tool Implementation</h4>
                        <ul className="list-disc pl-5 text-gray-600 space-y-1">
                          <li>Agile development of a prototype tool implementing the methodology</li>
                          <li>Integration of state-of-the-art NLP models and domain-specific knowledge bases</li>
                          <li>User interface design focused on seamless integration with existing agile workflows</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-medium text-gray-800 mb-2">Phase 4: Validation and Evaluation</h4>
                        <ul className="list-disc pl-5 text-gray-600 space-y-1">
                          <li>Controlled experiments with 10 development teams using the tool</li>
                          <li>Comparative analysis of user story quality before and after tool usage</li>
                          <li>Quantitative and qualitative assessment of impact on development efficiency and outcomes</li>
                          <li>Refinement of methodology and tool based on real-world feedback</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Technologies Used" 
            subtitle="The technical stack powering our research and prototype"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <Card>
              <CardBody>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <Lightbulb size={24} className="text-primary-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Natural Language Processing</h3>
                    <ul className="list-disc pl-5 text-gray-600 space-y-1">
                      <li>Transformer-based language models (BERT, GPT family)</li>
                      <li>Fine-tuned models for software requirements analysis</li>
                      <li>Custom-trained embeddings for technical software terminology</li>
                      <li>Named entity recognition for technology and domain-specific terms</li>
                      <li>Sentiment and intent analysis for user story evaluation</li>
                    </ul>
                  </div>
                </div>
              </CardBody>
            </Card>
            
            <Card>
              <CardBody>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <Code size={24} className="text-primary-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Development Technologies</h3>
                    <ul className="list-disc pl-5 text-gray-600 space-y-1">
                      <li>Python ecosystem for NLP and data processing</li>
                      <li>React for front-end user interface development</li>
                      <li>Node.js for backend API development</li>
                      <li>TypeScript for type-safe code across the application</li>
                      <li>Docker for containerization and deployment</li>
                      <li>SQL and NoSQL databases for knowledge storage</li>
                    </ul>
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Domain;