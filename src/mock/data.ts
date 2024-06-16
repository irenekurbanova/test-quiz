import { QuestionType, TestData } from "./types";

export const QUIZ_DATA: TestData = {
  title: "Тестирование",
  timer: true,
  maxDuration: 15000000,
  questions: [
    {
      id: 0,
      name: "Что должен знать фронтенд-разработчик? Назовите три ключевые технологии",
      type: QuestionType.SINGLE,
      options: [
        { name: "HTML, CSS и JavaScript", isCorrect: true },
        { name: "Kotlin, PHP и JavaScript", isCorrect: false },
        {
          name: "PHP, HTML и CSS",
          isCorrect: false,
        },
      ],
    },
    {
      id: 1,
      name: "Какие типа данных JS вы знаете? Выберите подходящие",
      type: QuestionType.MULTIPLE,
      options: [
        { name: "SmallInt", isCorrect: false },
        { name: "Number", isCorrect: true },
        {
          name: "String",
          isCorrect: true,
        },
        {
          name: "Null",
          isCorrect: true,
        },
        {
          name: "Undefined",
          isCorrect: true,
        },
        {
          name: "BigInt",
          isCorrect: true,
        },
      ],
    },
    {
      id: 2,
      name: "Опишите основные характеристики ООП",
      type: QuestionType.LONG,
      options: [],
    },
    {
      id: 3,
      name: "Какие типы данных есть в TypeScript?",
      type: QuestionType.SINGLE,
      options: [
        {
          name: "Встроенные и пользовательские",
          isCorrect: true,
        },
        {
          name: "Number и String",
          isCorrect: true,
        },
      ],
    },
  ],
};
