export enum QuestionType {
  SINGLE = "single",
  MULTIPLE = "multiple",
  BOOLEAN = "boolean",
  LONG = "long",
}

export interface Question {
  id: number;
  name: string;
  type: QuestionType;
  options: { name: string; isCorrect: boolean }[];
}

export interface TestData {
  title: string;
  timer: boolean;
  maxDuration: number;
  questions: Question[];
}
