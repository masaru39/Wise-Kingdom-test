import axios from 'axios';

export const FETCH_QUIZ = 'FETCH_QUIZ';
export const START_QUIZ = 'START_QUIZ';
export const FETCH_ANS = 'FETCH_ANS';
export const NEXT_QUIZ = 'NEXT_QUIZ';

export async function fetchQuestion() {
  const quiz = await axios
    .get(
      'https://res.cloudinary.com/veo1/raw/upload/v1553248545/test_frontend/Question.json'
    )
    .then(res => {
      return Object.values(res.data.questions);
    })
    .catch(error => {
      console.error(error);
    });
  return {
    type: FETCH_QUIZ,
    payload: quiz
  };
}

export async function fetchAnswer() {
  const ans = await axios
    .get(
      'https://res.cloudinary.com/veo1/raw/upload/v1553248547/test_frontend/Answers.json'
    )
    .then(res => {
      return Object.values(res.data);
    })
    .catch(error => {
      console.error(error);
    });
  return {
    type: FETCH_ANS,
    payload: ans
  };
}

export async function startQuiz() {
  return {
    type: START_QUIZ
  };
}

export async function nextQuiz(noww) {
  return {
    type: NEXT_QUIZ,
    payload: noww
  };
}
