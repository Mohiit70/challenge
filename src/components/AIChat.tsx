"use client"

import React from 'react';
import { CopilotTextarea } from '@copilotkit/react-textarea';
import { useCopilotChat } from '@copilotkit/react-core';

export default function AIChat() {
  const { sendMessage } = useCopilotChat();

  const handleSendMessage = async (message: string): Promise<void> => {
    await sendMessage(message);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">AI Study Assistant</h2>
      <CopilotTextarea
        className="h-96 w-full border border-gray-200 rounded-md p-2"
        placeholder="Ask me anything about your studies..."
        onSend={handleSendMessage}
      />
    </div>
  );
}