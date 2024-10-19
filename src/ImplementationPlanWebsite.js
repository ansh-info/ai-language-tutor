// ImplementationPlanWebsite component
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Book, Code, Palette, Server, Smartphone, TestTube, Users, FileText, Rocket } from 'lucide-react';

const ImplementationPlanWebsite = () => {
    const [activePhase, setActivePhase] = useState(0);
  
    const phases = [
      {
        title: "Research and Planning",
        duration: "2-3 weeks",
        icon: <Book className="w-8 h-8 text-blue-500" />,
        tasks: [
          "Conduct in-depth research on child language acquisition theories",
          "Analyze existing language learning tools for children",
          "Define specific learning objectives and target age group",
          "Outline key features based on research findings"
        ]
      },
      {
        title: "AI Model Selection and Development",
        duration: "4-6 weeks",
        icon: <Code className="w-8 h-8 text-green-500" />,
        tasks: [
          "Choose appropriate large language model (e.g., GPT-4, BERT)",
          "Fine-tune the model on child-friendly language datasets",
          "Develop algorithms for adaptive difficulty, content generation, and speech recognition"
        ]
      },
      {
        title: "Content Creation",
        duration: "6-8 weeks",
        icon: <Palette className="w-8 h-8 text-purple-500" />,
        tasks: [
          "Develop a curriculum framework",
          "Create interactive stories and dialogues",
          "Design gamified exercises and quizzes",
          "Produce child-friendly graphics and animations"
        ]
      },
      {
        title: "User Interface Design",
        duration: "4-5 weeks",
        icon: <Smartphone className="w-8 h-8 text-pink-500" />,
        tasks: [
          "Create wireframes and mockups",
          "Design an intuitive, colorful interface suitable for children",
          "Ensure accessibility and ease of use for the target age group"
        ]
      },
      {
        title: "Backend Development",
        duration: "6-8 weeks",
        icon: <Server className="w-8 h-8 text-yellow-500" />,
        tasks: [
          "Set up cloud infrastructure for AI model deployment",
          "Develop APIs for frontend-backend communication",
          "Implement user authentication and progress tracking",
          "Ensure data privacy and security measures"
        ]
      },
      {
        title: "Frontend Development",
        duration: "6-8 weeks",
        icon: <Smartphone className="w-8 h-8 text-red-500" />,
        tasks: [
          "Develop the user interface using a suitable framework",
          "Implement interactive elements and animations",
          "Integrate with backend APIs and AI functionalities"
        ]
      },
      {
        title: "Integration and Testing",
        duration: "4-5 weeks",
        icon: <TestTube className="w-8 h-8 text-indigo-500" />,
        tasks: [
          "Combine frontend, backend, and AI components",
          "Conduct thorough testing (functionality, usability, performance, security)"
        ]
      },
      {
        title: "Pilot Study and Refinement",
        duration: "6-8 weeks",
        icon: <Users className="w-8 h-8 text-teal-500" />,
        tasks: [
          "Conduct a pilot study with a small group of children",
          "Gather feedback from children, parents, and educators",
          "Analyze learning outcomes and user engagement",
          "Refine the tool based on pilot study results"
        ]
      },
      {
        title: "Documentation and Training",
        duration: "3-4 weeks",
        icon: <FileText className="w-8 h-8 text-orange-500" />,
        tasks: [
          "Create user manuals for children and parents",
          "Develop training materials for educators",
          "Prepare technical documentation for future maintenance and updates"
        ]
      },
      {
        title: "Launch and Continuous Improvement",
        duration: "Ongoing",
        icon: <Rocket className="w-8 h-8 text-cyan-500" />,
        tasks: [
          "Soft launch to a wider audience",
          "Monitor user feedback and performance metrics",
          "Regularly update content and features",
          "Continuously improve AI model based on user interactions"
        ]
      }
    ];
  
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 p-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-blue-800">AI-Assisted Child Language Learning Tool: Implementation Plan</h1>
        
        <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg p-6">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
            {phases.map((phase, index) => (
              <motion.div
                key={index}
                className={`cursor-pointer p-4 rounded-lg ${activePhase === index ? 'bg-blue-500 text-white' : 'bg-gray-100'}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActivePhase(index)}
              >
                <div className="flex flex-col items-center justify-center h-full">
                  {phase.icon}
                  <h2 className="text-center mt-2 text-sm">{phase.title}</h2>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            key={activePhase}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-100 p-6 rounded-lg"
          >
            <h3 className="text-2xl font-bold mb-2">{phases[activePhase].title}</h3>
            <p className="text-lg mb-4">Duration: {phases[activePhase].duration}</p>
            <ul className="list-disc pl-5">
              {phases[activePhase].tasks.map((task, index) => (
                <li key={index} className="mb-2">{task}</li>
              ))}
            </ul>
          </motion.div>
        </div>
        
                  <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-3xl font-bold mb-6 text-center text-blue-700">Key Considerations and Standpoints</h2>
            
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-4 text-blue-600">Key Considerations</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Ensure strict adherence to child safety and privacy regulations</li>
                <li>Collaborate with child psychologists and language educators throughout the process</li>
                <li>Implement robust data collection and analysis for ongoing improvement</li>
                <li>Plan for scalability to support multiple languages in the future</li>
              </ul>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="text-2xl font-semibold mb-4 text-blue-600">Technical Standpoint</h3>
                <ul className="space-y-4">
                  <li>
                    <strong className="text-blue-700">Resources:</strong>
                    <p>High-performance computing, cloud infrastructure, development tools, testing devices</p>
                  </li>
                  <li>
                    <strong className="text-blue-700">Skills:</strong>
                    <p>AI/ML, software development, data science, UX/UI design, cloud computing, information security</p>
                  </li>
                  <li>
                    <strong className="text-blue-700">Processes:</strong>
                    <p>Agile methodology, CI/CD, user testing, data analysis, QA</p>
                  </li>
                  <li>
                    <strong className="text-blue-700">Experience:</strong>
                    <p>Educational tech, language learning systems, AI-powered apps, voice recognition, child development</p>
                  </li>
                  <li>
                    <strong className="text-blue-700">Passion:</strong>
                    <p>Improving education, language acquisition, applying cutting-edge tech</p>
                  </li>
                </ul>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="text-2xl font-semibold mb-4 text-green-600">Stakeholder Standpoint</h3>
                <ul className="space-y-4">
                  <li>
                    <strong className="text-green-700">Resources:</strong>
                    <p>Funding, partnerships, subject matter experts, legal resources</p>
                  </li>
                  <li>
                    <strong className="text-green-700">Skills:</strong>
                    <p>Project management, financial planning, marketing, business development, content creation</p>
                  </li>
                  <li>
                    <strong className="text-green-700">Processes:</strong>
                    <p>Strategic planning, stakeholder management, risk assessment, performance monitoring</p>
                  </li>
                  <li>
                    <strong className="text-green-700">Experience:</strong>
                    <p>Launching educational products, edtech market, educational regulations, child safety compliance</p>
                  </li>
                  <li>
                    <strong className="text-green-700">Passion:</strong>
                    <p>Education's power, global communication, childhood development, social impact</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
      </div>
    );
  };

  export default ImplementationPlanWebsite;