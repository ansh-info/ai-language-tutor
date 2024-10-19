// TalkingCharacter component
import {React} from 'react';
import { motion } from 'framer-motion';
import { Mic } from 'lucide-react';

const TalkingCharacter = ({ isAIActive, onSpeak, isSpeaking }) => {
    return (
      <motion.div
        className="w-80 h-80 relative"
        animate={{ scale: isAIActive ? 1.1 : 1, rotate: isAIActive ? [0, 5, -5, 0] : 0 }}
        transition={{ duration: 0.5, repeat: isAIActive ? Infinity : 0, repeatDelay: 2 }}
      >
        <svg viewBox="0 0 200 200" className="w-full h-full">
          {/* Face */}
          <motion.circle
            cx="100"
            cy="100"
            r="90"
            fill="#FFD700"
            stroke="#000"
            strokeWidth="2"
            animate={{ scale: isSpeaking ? [1, 1.05, 1] : 1 }}
            transition={{ duration: 0.5, repeat: isSpeaking ? Infinity : 0 }}
          />
          
          {/* Eyes */}
          <circle cx="70" cy="80" r="12" fill="#000" />
          <circle cx="130" cy="80" r="12" fill="#000" />
          <circle cx="70" cy="76" r="4" fill="#FFF" />
          <circle cx="130" cy="76" r="4" fill="#FFF" />
          
          {/* Mouth */}
          <motion.path
            d="M 60 130 Q 100 170 140 130"
            stroke="#000"
            strokeWidth="4"
            fill="#FF6B6B"
            animate={{ d: isSpeaking ? "M 60 140 Q 100 100 140 140" : "M 60 130 Q 100 170 140 130" }}
            transition={{ duration: 0.5, repeat: isSpeaking ? Infinity : 0, repeatType: "reverse" }}
          />
          
          {/* AI Glow */}
          {isAIActive && (
            <motion.circle
              cx="100"
              cy="100"
              r="95"
              fill="none"
              stroke="#4CAF50"
              strokeWidth="5"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.2, 0.5, 0.2] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          )}
        </svg>
        
        <motion.button
          className="absolute bottom-0 right-0 bg-red-500 text-white p-3 rounded-full shadow-lg"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={onSpeak}
        >
          <Mic size={24} />
        </motion.button>
      </motion.div>
    );
  };

  export default TalkingCharacter;