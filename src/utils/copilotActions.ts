'use server'

import { analyzeDocument, generateQuestion, predictExam, generateStudyPlan } from './groq';

export async function analyzeDocumentAction(file: File) {
  return await analyzeDocument(file);
}

export async function generateQuestionAction(topic: string) {
  return await generateQuestion(topic);
}

export async function predictExamAction() {
  return await predictExam();
}

export async function generateStudyPlanAction(userData: any) {
  return await generateStudyPlan(userData);
}