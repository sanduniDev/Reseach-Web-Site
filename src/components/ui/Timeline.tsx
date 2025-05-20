import React from 'react';
import { motion } from 'framer-motion';
import { Check, Clock } from 'lucide-react';
import { Milestone } from '../../types';

interface TimelineProps {
  milestones: Milestone[];
}

const Timeline: React.FC<TimelineProps> = ({ milestones }) => {
  return (
    <div className="py-8">
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-5 md:left-1/2 h-full w-0.5 bg-gray-200 transform -translate-x-1/2"></div>

        {milestones.map((milestone, index) => (
          <motion.div
            key={milestone.id}
            className={`relative flex flex-col md:flex-row items-start md:justify-between mb-12 last:mb-0 ${
              index % 2 === 0 ? 'md:flex-row-reverse' : ''
            }`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            {/* Content */}
            <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:pl-8'}`}>
              <h3 className="text-xl font-semibold text-gray-900 mb-1">{milestone.title}</h3>
              <p className="text-sm text-gray-500 mb-2">{milestone.date}</p>
              <p className="text-gray-700">{milestone.description}</p>
              {milestone.marks && (
                <p className="mt-2 inline-block px-3 py-1 bg-green-50 text-green-800 rounded-full text-sm">
                  Score: {milestone.marks}
                </p>
              )}
            </div>

            {/* Timeline node */}
            <div className="absolute left-5 md:left-1/2 w-10 h-10 rounded-full bg-white border-4 flex items-center justify-center transform -translate-x-1/2 z-10">
              {milestone.completed ? (
                <Check size={18} className="text-green-500" />
              ) : (
                <Clock size={18} className="text-gray-400" />
              )}
            </div>

            {/* Empty div for proper spacing on mobile */}
            <div className="w-full md:w-5/12 md:min-h-[1px] pl-14 md:pl-0"></div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;