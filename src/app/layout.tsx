import { CopilotKit } from '@copilotkit/react-core';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ExamSage - AI-Powered Exam Preparation',
  description: 'Prepare for your exams with AI-powered assistance',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CopilotKit>
          {children}
        </CopilotKit>
      </body>
    </html>
  );
}