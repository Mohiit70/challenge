import type { NextApiRequest, NextApiResponse } from 'next';
import { generateQuestion } from '@/utils/groq';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    try {
      const { topic } = req.body;
      const question = await generateQuestion(topic);
      res.status(200).json({ question });
    } catch (error) {
      console.error('Error generating question:', error);
      res.status(500).json({ error: 'An error occurred while generating the question.' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}