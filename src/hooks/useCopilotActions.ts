import { useCopilotAction } from '@copilotkit/react-core';
import { copilotActions } from '@/utils/copilotActions';

export const useCopilotActions = () => {
  const analyzeDocument = useCopilotAction('analyzeDocument');
  const generateQuestion = useCopilotAction('generateQuestion');
  const predictExam = useCopilotAction('predictExam');
  const generateStudyPlan = useCopilotAction('generateStudyPlan');

  return {
    analyzeDocument,
    generateQuestion,
    predictExam,
    generateStudyPlan,
  };
};