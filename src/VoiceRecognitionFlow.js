// VoiceRecognitionFlow component
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Brain, Mic, FileText, BarChart, MessageCircle, Volume2 } from 'lucide-react';

const VoiceRecognitionFlow = () => {
    const [activeStep, setActiveStep] = useState(0);
  
    const steps = [
      { 
        title: "Audio Capture", 
        icon: <Mic className="w-8 h-8 text-blue-500" />,
        description: "Capture audio using the device's microphone, sampling at 16 kHz or higher with 16-bit depth. Buffer in small chunks for real-time processing."
      },
      { 
        title: "Audio Preprocessing", 
        icon: <BarChart className="w-8 h-8 text-green-500" />,
        description: "Apply noise reduction, voice activity detection, and audio normalization to improve signal quality."
      },
      { 
        title: "Feature Extraction", 
        icon: <BarChart className="w-8 h-8 text-purple-500" />,
        description: "Convert audio to frequency domain using FFT. Extract Mel-frequency cepstral coefficients (MFCCs) for machine learning models."
      },
      { 
        title: "Speech Recognition", 
        icon: <Brain className="w-8 h-8 text-red-500" />,
        description: "Process features through an ASR model (e.g., RNN with LSTM or Transformer) to output phonemes or text."
      },
      { 
        title: "Language Model Integration", 
        icon: <Brain className="w-8 h-8 text-yellow-500" />,
        description: "Apply a language model to disambiguate similar-sounding words and improve accuracy, tailored for children's vocabulary."
      },
      { 
        title: "Text Normalization", 
        icon: <FileText className="w-8 h-8 text-indigo-500" />,
        description: "Add punctuation, capitalization, and expand special tokens into their written form."
      },
      { 
        title: "Natural Language Understanding", 
        icon: <Brain className="w-8 h-8 text-pink-500" />,
        description: "Parse text to extract intent and entities, identify grammatical errors or mispronunciations."
      },
      {
        title: "Dialogue Management", 
        icon: <MessageCircle className="w-8 h-8 text-teal-500" />,
        description: "Determine appropriate response based on conversation state and learning curriculum."
      },
      { 
        title: "Response Generation", 
        icon: <MessageCircle className="w-8 h-8 text-orange-500" />,
        description: "Generate response using pre-written content, large language models, or dynamic templates."
      },
      { 
        title: "Text-to-Speech Synthesis", 
        icon: <Volume2 className="w-8 h-8 text-cyan-500" />,
        description: "Convert text response to speech, including text normalization and acoustic model generation."
      },
      { 
        title: "Feedback Loop", 
        icon: <BarChart className="w-8 h-8 text-lime-500" />,
        description: "Log interactions to track progress, improve models, and refine curriculum strategies."
      }
    ];
  
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 p-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-blue-800">Voice Recognition Implementation</h1>
        
        <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg p-6">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className={`cursor-pointer p-4 rounded-lg ${activeStep === index ? 'bg-blue-500 text-white' : 'bg-gray-100'}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveStep(index)}
              >
                <div className="flex flex-col items-center justify-center h-full">
                  {step.icon}
                  <h2 className="text-center mt-2 text-sm">{step.title}</h2>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-100 p-6 rounded-lg"
          >
            <h3 className="text-2xl font-bold mb-4">{steps[activeStep].title}</h3>
            <p className="text-lg">{steps[activeStep].description}</p>
          </motion.div>
        </div>
        
        <div className="mt-8 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-4">Key Considerations for Voice Recognition</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Adapt to children's voices (higher pitch, less clear articulation)</li>
            <li>Handle background noise common in children's environments</li>
            <li>Ensure low latency for real-time interaction</li>
            <li>Implement error handling for misunderstood speech</li>
          </ul>
        </div>
      </div>
    );
  };

  export default VoiceRecognitionFlow;