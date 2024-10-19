import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu } from 'lucide-react';
import LanguageLearningInsights from './LanguageLearningInsights';
import TalkingCharacter from './TalkingCharacter';
import AILanguageTutor from './AILanguageTutor';
import ImplementationPlanWebsite from './ImplementationPlanWebsite';
import VoiceRecognitionFlow from './VoiceRecognitionFlow';

// Main component to combine all pages
const CombinedLanguageLearningTool = () => {
  const [currentPage, setCurrentPage] = useState('magic-buddy');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const renderPage = () => {
    switch(currentPage) {
      case 'magic-buddy':
        return <AILanguageTutor />;
      case 'talking-character':
        return <TalkingCharacter/>
      case 'implementation':
        return <ImplementationPlanWebsite />;
      case 'voice-recognition':
        return <VoiceRecognitionFlow />;
      case 'insights':
        return <LanguageLearningInsights />;
      default:
        return <AILanguageTutor />;
    }
  };

  return (
    <div className="relative">
      <div className="absolute top-4 right-4 z-10">
        <motion.div
          className="relative"
          initial={false}
          animate={isMenuOpen ? "open" : "closed"}
        >
          <motion.button
            className="p-2 bg-white rounded-full shadow-lg"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Menu size={24} />
          </motion.button>
          {isMenuOpen && (
            <motion.div
              className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              <button
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                onClick={() => { setCurrentPage('magic-buddy'); setIsMenuOpen(false); }}
              >
                Magic Language Buddy
              </button>
              <button
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                onClick={() => { setCurrentPage('implementation'); setIsMenuOpen(false); }}
              >
                Implementation Plan
              </button>
              <button
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                onClick={() => { setCurrentPage('voice-recognition'); setIsMenuOpen(false); }}
              >
                Voice Recognition Flow
              </button>
              <button
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                onClick={() => { setCurrentPage('insights'); setIsMenuOpen(false); }}
              >
                Learning Insights
              </button>
            </motion.div>
          )}
        </motion.div>
      </div>
      {renderPage()}
    </div>
  );
};

export default CombinedLanguageLearningTool;