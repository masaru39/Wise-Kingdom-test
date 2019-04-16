import React, { Component } from 'react';
import Navbar from '../navbar/navbar';
import Quiz from '../quiz/quiz';

class TestPage extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Quiz />
      </div>
    );
  }
}

export default TestPage;
