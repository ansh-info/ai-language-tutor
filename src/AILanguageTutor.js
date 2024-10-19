// AILanguageTutor component
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Brain, Star } from 'lucide-react';
import TalkingCharacter from './TalkingCharacter';
const AILanguageTutor = () => {
    const [isAIActive, setIsAIActive] = useState(false);
    const [isSpeaking, setIsSpeaking] = useState(false);
    const [message, setMessage] = useState("Hello! I'm your AI language buddy. Click the magic brain to wake me up!");
    const [stars, setStars] = useState(0);
  
    const activateAI = () => {
      setIsAIActive(true);
      setMessage("Yay! I'm awake and ready to play language games with you. Click the red mic to talk to me!");
    };
  
    const handleSpeak = () => {
      if (isAIActive) {
        setIsSpeaking(true);
        setMessage("I'm listening! Let's practice some fun words together.");
        setTimeout(() => {
          setIsSpeaking(false);
          setMessage("Wow! You're doing great. Let's keep playing and learning!");
          setStars(stars + 1);
        }, 3000);
      } else {
        setMessage("Oopsie! Don't forget to wake me up first with the magic brain button.");
      }
    };
  
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-200 to-blue-200 flex flex-col items-center justify-center p-4">
        <h1 className="text-4xl font-bold text-center mb-8 text-purple-800" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
          Magic Language Buddy
        </h1>
        
        <TalkingCharacter isAIActive={isAIActive} onSpeak={handleSpeak} isSpeaking={isSpeaking} />
        
        <motion.div
          className="mt-8 p-4 bg-white rounded-lg shadow-lg max-w-md w-full border-4 border-purple-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xl text-center text-purple-700" style={{ fontFamily: 'Comic Sans MS, cursive' }}>{message}</p>
        </motion.div>
        
        <div className="mt-4 flex items-center">
          <motion.button
            className={`mr-4 p-4 rounded-full ${isAIActive ? 'bg-green-500' : 'bg-blue-500'} text-white shadow-lg`}
            whileHover={{ scale: 1.1, rotate: 360 }}
            whileTap={{ scale: 0.9 }}
            onClick={activateAI}
          >
            <Brain size={32} />
          </motion.button>
          <div className="flex items-center bg-yellow-300 px-3 py-1 rounded-full">
            <Star size={24} className="text-yellow-600 mr-1" />
            <span className="text-xl font-bold">{stars}</span>
          </div>
        </div>
      </div>
    );
  };

  export default AILanguageTutor;