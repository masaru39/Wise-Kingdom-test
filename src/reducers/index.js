import Quiz from './quizReducer';
import Count from './quizReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  quiz: Quiz
});

export default rootReducer;
