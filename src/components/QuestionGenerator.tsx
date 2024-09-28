import React, { useState } from 'react';
import { useCopilotChat } from '@copilotkit/react-core';
import { Send } from 'lucide-react';

const QuestionGenerator: React.FC = () => {
  const [topic, setTopic] = useState('');
  const { messages, sendMessage } = useCopilotChat();
  const [isGenerating, setIsGenerating] = useState(false);

  const generateQuestionAction = async () => {
    if (topic) {
      setIsGenerating(true);
      try {
        const response = await fetch('/api/generateQuestion', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ topic }),
        });
        const question = await response.text();
        await sendMessage(`Generated question about ${topic}: ${question}`);
      } catch (error) {
        console.error('Error generating question:', error);
        await sendMessage('Sorry, there was an error generating the question.');
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
      <div className="bg-gray-50 rounded-md p-4 h-64 overflow-y-auto">
        {messages.map((msg, index) => (
          <div key={index} className={`mb-2 ${msg.role === 'user' ? 'text-indigo-600' : 'text-gray-700'}`}>
            <span className="font-semibold">{msg.role === 'user' ? 'You: ' : 'AI: '}</span>
            {msg.content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestionGenerator;