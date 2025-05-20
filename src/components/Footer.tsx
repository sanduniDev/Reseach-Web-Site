import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Mail, Linkedin, Twitter, BookOpen } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1 lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <BookOpen size={24} className="text-primary-400" />
              <span className="font-bold text-xl">Agile User Story Builder</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Research project focusing on enhancing agile software development through improved user story creation and management.
            </p>
            <div className="flex space-x-4">
              <a href="#" aria-label="GitHub" className="text-gray-300 hover:text-white transition-colors">
                <Github size={20} />
              </a>
              <a href="#" aria-label="LinkedIn" className="text-gray-300 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" aria-label="Twitter" className="text-gray-300 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="mailto:contact@agilestorybuilder.research" aria-label="Email" className="text-gray-300 hover:text-white transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-medium text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/domain" className="text-gray-300 hover:text-white transition-colors">Domain</Link>
              </li>
              <li>
                <Link to="/milestones" className="text-gray-300 hover:text-white transition-colors">Milestones</Link>
              </li>
              <li>
                <Link to="/documents" className="text-gray-300 hover:text-white transition-colors">Documents</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-lg mb-4">More Information</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/presentations" className="text-gray-300 hover:text-white transition-colors">Presentations</Link>
              </li>
              <li>
                <Link to="/about-us" className="text-gray-300 hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Agile User Story Builder Research Project. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;