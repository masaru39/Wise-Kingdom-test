import React, { Component } from 'react';
import './style.css';

class ProcessBar extends Component {
  constructor(finishQuiz) {
    super(finishQuiz);
  }
  render() {
    const percent = this.props.finishQuiz * 100;
    return (
      <div className="processBox">
        MultiChoice
        <div className="processBar">
          <div>
            <div className="outbar">
              <div className="inbar" style={{ width: percent }} />
            </div>
            <div className="exitButton">
              {' '}
              exit{' '}
              <img
                src={
                  'https://res.cloudinary.com/veo1/image/upload/v1553248405/test_frontend/test_exit.png'
                }
              />{' '}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProcessBar;
