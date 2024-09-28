import type { NextApiRequest, NextApiResponse } from 'next';
import { getAIResponse } from '@/utils/groq';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    try {
      const { message } = req.body;
      const response = await getAIResponse(message);
      res.status(200).json({ response });
    } catch (error) {
      console.error('Error getting AI response:', error);
      res.status(500).json({ error: 'An error occurred while getting the AI response.' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}