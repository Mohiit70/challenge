"use client"

import React, { useState } from 'react';
import { generateStudyPlanAction } from '@/utils/copilotActions';

export default function StudyPlan() {
  const [studyPlan, setStudyPlan] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleGenerateStudyPlan = async () => {
    setIsLoading(true);
    try {
      const userData = {};
      const plan = await generateStudyPlanAction(userData);
      setStudyPlan(plan);
    } catch (error) {
      console.error('Error generating study plan:', error);
      setStudyPlan('An error occurred while generating the study plan.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Personalized Study Plan</h2>
      <button
        onClick={handleGenerateStudyPlan}
        className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors duration-300"
        disabled={isLoading}
      >
        {isLoading ? 'Generating...' : 'Generate Study Plan'}
      </button>
      {studyPlan && (
        <div className="mt-4 p-4 bg-gray-50 rounded-md">
          <pre>{studyPlan}</pre>
        </div>
      )}
    </div>
  );
}