import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const InsightCard = ({ title, insight, metric }) => (
  <motion.div
    className="bg-white p-4 rounded-lg shadow-md"
    whileHover={{ scale: 1.05 }}
    transition={{ type: 'spring', stiffness: 300 }}
  >
    <h3 className="text-lg font-bold mb-2">{title}</h3>
    <p className="text-sm mb-2">{insight}</p>
    <p className="text-sm font-semibold">{metric}</p>
  </motion.div>
);

const LanguageLearningInsights = () => {
  const [activeCategory, setActiveCategory] = useState('Critical Period');
  const [activePieIndex, setActivePieIndex] = useState(null);

  const categories = [
    'Critical Period',
    'Cognitive Benefits',
    'Academic Performance',
    'Economic Impact',
    'Technology in Learning'
  ];

  const insights = {
    'Critical Period': [
      {
        title: "Critical Period Hypothesis",
        insight: "Children who start learning a second language before age 10 are more likely to achieve native-like proficiency.",
        metric: "After puberty, the ability to achieve native-like pronunciation drops by 77%."
      },
      {
        title: "Neuroplasticity Advantage",
        insight: "Children's brains are more adaptable, making early language learning more effective.",
        metric: "Children under 7 use both hemispheres of the brain to acquire additional languages."
      },
      {
        title: "Accent Acquisition",
        insight: "Earlier exposure leads to more native-like accent development.",
        metric: "90% chance of native-like accent if started before age 6, 50% if started between 6-12."
      }
    ],
    'Cognitive Benefits': [
      {
        title: "Enhanced Cognitive Abilities",
        insight: "Bilingualism enhances cognitive abilities beyond language skills.",
        metric: "Bilingual children outperform monolingual peers in executive function tasks by 20-40%."
      },
      {
        title: "Cultural Competence",
        insight: "Language learning enhances cultural understanding and empathy.",
        metric: "50% increase in perspective-taking abilities by age 4 for children exposed to multiple languages."
      },
      {
        title: "Long-term Cognitive Health",
        insight: "Early bilingualism may protect against cognitive decline in later life.",
        metric: "Bilingualism can delay the onset of dementia symptoms by 4-5 years."
      }
    ],
    'Academic Performance': [
      {
        title: "Improved Academic Performance",
        insight: "Early second language learning correlates with improved academic performance.",
        metric: "10-20% higher scores in standardized math and science tests for immersion program students."
      },
      {
        title: "Immersion vs. Traditional Learning",
        insight: "Immersive learning environments are more effective for language acquisition.",
        metric: "Children in immersion programs achieve proficiency levels 2-3 years ahead of traditional classes."
      },
      {
        title: "Vocabulary Growth Rate",
        insight: "Children can acquire new words at a remarkably fast rate.",
        metric: "Young children can learn up to 10 new words per day in optimal learning environments."
      }
    ],
    'Economic Impact': [
      {
        title: "Career Prospects",
        insight: "Multilingual individuals have better career prospects and earning potential.",
        metric: "Multilingual employees earn 5-20% more than their monolingual counterparts."
      },
      {
        title: "Global Demand",
        insight: "The need for multilingual skills is increasing in our globalized world.",
        metric: "By 2025, an estimated 75% of the world's population will be connected to the internet."
      }
    ],
    'Technology in Learning': [
      {
        title: "AI-Enhanced Learning",
        insight: "AI and adaptive learning technologies can significantly improve language acquisition.",
        metric: "30% faster vocabulary acquisition with personalized, AI-driven programs."
      },
      {
        title: "Gamification",
        insight: "Gamified approaches increase engagement and learning outcomes.",
        metric: "30% more study time and 40% better retention rates with gamified language apps."
      },
      {
        title: "Classroom Technology Integration",
        insight: "Integrating technology in language classrooms enhances learning outcomes.",
        metric: "25% increase in student engagement and 15% improvement in test scores."
      }
    ]
  };

  const chartData = [
    { name: 'Native-like Accent (Before 6)', value: 90 },
    { name: 'Native-like Accent (6-12)', value: 50 },
    { name: 'Cognitive Task Performance', value: 30 },
    { name: 'Academic Performance', value: 15 },
    { name: 'Earning Potential', value: 12.5 }
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8'];

  const onPieEnter = (_, index) => {
    setActivePieIndex(index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 p-8">
      <h1 className="text-4xl font-bold text-center mb-8 text-blue-800">Child Language Learning Insights</h1>
      
      <div className="flex flex-wrap justify-center mb-8">
        {categories.map((category) => (
          <motion.button
            key={category}
            className={`m-2 px-4 py-2 rounded-full ${activeCategory === category ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </motion.button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {insights[activeCategory].map((item, index) => (
          <InsightCard key={index} {...item} />
        ))}
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Key Metrics Visualization</h2>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={chartData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="value" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Impact Distribution</h2>
        <ResponsiveContainer width="100%" height={400}>
          <PieChart>
            <Pie
              data={chartData}
              cx="50%"
              cy="50%"
              outerRadius={150}
              fill="#8884d8"
              dataKey="value"
              onMouseEnter={onPieEnter}
            >
              {chartData.map((entry, index) => (
                <Cell 
                  key={`cell-${index}`} 
                  fill={COLORS[index % COLORS.length]}
                  opacity={activePieIndex === index ? 0.8 : 1}
                />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default LanguageLearningInsights;