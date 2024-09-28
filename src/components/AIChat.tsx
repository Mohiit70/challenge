import React from 'react';
import { CopilotProvider, CopilotTextarea } from '@copilotkit/react-core';

const AIChat: React.FC = () => {
  const handleSendMessage = async (message: string): Promise<string> => {
    try {
      const response = await fetch('/api/getAIResponse', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message }),
      });
      
      if (!response.ok) {
        throw new Error('Failed to get AI response');
      }

      const data = await response.json();
      return data.response;
    } catch (error) {
      console.error('Error getting AI response:', error);
      return 'I apologize, I encountered an error while processing your request.';
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">AI Study Assistant</h2>
      <CopilotProvider>
        <CopilotTextarea
          className="h-96 w-full border border-gray-200 rounded-md p-2"
          placeholder="Ask me anything about your studies..."
          onSubmit={handleSendMessage}
        />
      </CopilotProvider>
    </div>
  );
};

export default AIChat;