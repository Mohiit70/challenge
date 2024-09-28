import Groq from 'groq-sdk';

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export async function analyzeDocument(file: File): Promise<string> {
  // In a real application, you'd process the file content here
  // For now, we'll just return a placeholder response
  return `Analysis complete for ${file.name}. This document contains information about...`;
}

export async function generateQuestion(topic: string): Promise<string> {
  const completion = await groq.chat.complet

ions.create({
    messages: [{ role: 'user', content: `Generate a challenging question about ${topic}` }],
    model: 'mixtral-8x7b-32768',
  });

  return completion.choices[0]?.message?.content || 'Unable to generate a question.';
}

export async function getAIResponse(input: string): Promise<string> {
  const completion = await groq.chat.completions.create({
    messages: [{ role: 'user', content: input }],
    model: 'mixtral-8x7b-32768',
  });

  return completion.choices[0]?.message?.content || 'I apologize, I\'m having trouble responding right now.';
}