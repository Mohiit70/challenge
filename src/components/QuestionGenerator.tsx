"use client"

import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { generateQuestionAction } from '@/utils/copilotActions';

export default function QuestionGenerator() {
  const [topic, setTopic] = useState('');
  const [question, setQuestion] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const generateQuestionAction = async () => {
    if (topic) {
      setIsGenerating(true);
      try {
        const generatedQuestion = await generateQuestionAction(topic);
        setQuestion(generatedQuestion);
      } catch (error) {
        console.error('Error generating question:', error);
        setQuestion('Sorry, there was an error generating the question.');
      } finally {
        setIsGenerating(false);
      }
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Question Generator</h2>
      <div className="flex space-x-2 mb-4">
        <input
          type="text"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          placeholder="Enter a topic"
          className="flex-grow p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <button
          onClick={generateQuestionAction}
          disabled={!topic || isGenerating}
          className={`px-4 py-2 text-white font-medium rounded-md ${
            !topic || isGenerating ? 'bg-indigo-400 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700'
          } transition-colors duration-300 flex items-center`}
        >
          {isGenerating ? 'Generating...' : <>Generate <Send className="ml-2 h-4 w-4" /></>}
        </button>
      </div>
      {question && (
        <div className="bg-gray-50 rounded-md p-4 mt-4">
          <p className="text-gray-700">{question}</p>
        </div>
      )}
    </div>
  );
}