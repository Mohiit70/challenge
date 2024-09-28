import Head from 'next/head';
import Layout from '@/components/Layout';
import DocumentUpload from '@/components/DocumentUpload';
import QuestionGenerator from '@/components/QuestionGenerator';
import AIChat from '@/components/AIChat';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>ExamSage - AI-Powered Exam Preparation</title>
        <meta name="description" content="Prepare for your exams with AI-powered assistance" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-12">
          Welcome to <span className="text-indigo-600">ExamSage</span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <DocumentUpload />
          <QuestionGenerator />
        </div>
        <div className="mt-12">
          <AIChat />
        </div>
      </div>
    </Layout>
  );
}