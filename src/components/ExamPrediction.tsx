"use client"

import React, { useState } from 'react';
import { predictExamAction } from '@/utils/copilotActions';

export default function ExamPrediction() {
  const [prediction, setPrediction] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handlePredictExam = async () => {
    setIsLoading(true);
    try {
      const result = await predictExamAction();
      setPrediction(result);
    } catch (error) {
      console.error('Error predicting exam:', error);
      setPrediction('An error occurred while predicting the exam.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Exam Prediction</h2>
      <button
        onClick={handlePredictExam}
        className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors duration-300"
        disabled={isLoading}
      >
        {isLoading ? 'Predicting...' : 'Predict Exam Questions'}
      </button>
      {prediction && (
        <div className="mt-4 p-4 bg-gray-50 rounded-md">
          <pre>{prediction}</pre>
        </div>
      )}
    </div>
  );
}