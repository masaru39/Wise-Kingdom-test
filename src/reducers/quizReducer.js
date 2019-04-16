import { combineReducers } from 'redux';
import { FETCH_QUIZ, START_QUIZ, FETCH_ANS, NEXT_QUIZ } from '../actions';

const initialState = {
  quiz: [],
  answer: [],
  count: 0
};

function quiz(state = initialState, action) {
  switch (action.type) {
    case FETCH_QUIZ:
      //   console.log(action.payload);
      return action.payload;
    default:
      return state;
  }
}

function answer(state = initialState, action) {
  switch (action.type) {
    case FETCH_ANS:
      return action.payload;
    default:
      return state;
  }
}

function count(state = initialState, action) {
  switch (action.type) {
    //   ทำ load id+1 เรื่อยๆ
    case START_QUIZ:
      return 0;
    case NEXT_QUIZ:
      return action.payload + 1;
    default:
      return state;
  }
}

const reducer = combineReducers({ quiz, count, answer });
export default reducer;
