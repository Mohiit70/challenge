import type { NextApiRequest, NextApiResponse } from 'next';
import { analyzeDocument } from '@/utils/groq';

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '10mb',
    },
  },
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    try {
      const file = req.body.file;
      const result = await analyzeDocument(file);
      res.status(200).json({ result });
    } catch (error) {
      console.error('Error analyzing document:', error);
      res.status(500).json({ error: 'An error occurred while analyzing the document.' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}