import React, { Component } from 'react';
import { connect } from 'react-redux';
import autobind from 'react-autobind';
import { fetchQuestion, startQuiz, fetchAnswer, nextQuiz } from '../../actions';
import parse from 'html-react-parser';
import ProcessBar from '../processBar/processBar';
import Popup from '../popup/popup';
import './style.css';

class Quiz extends Component {
  constructor() {
    super();
    this.state = {
      score: 0,
      selectChice: '',
      ischoose: 'X',
      finishQuiz: 0,
      popUp: false
    };
    autobind(this);
  }
  componentDidMount() {
    this.props.fetchAnswer();
    this.props.fetchQuestion();
    this.props.startQuiz();
  }

  choose(choise, ans) {
    if (this.state.ischoose !== 'S') {
      this.setState({ selectChice: ans, ischoose: choise });
    }
  }

  checkchoice(choise, text) {
    if (this.state.ischoose === 'S') {
      const target = this.props.answer[0][this.props.count].answer;
      if (target === text) return 'correct-ans';
      if (text === this.state.selectChice) return 'wrong-ans';
      else return 'choise';
    }
    if (this.state.ischoose === choise) {
      return 'choose';
    } else {
      return 'choise';
    }
  }

  finishClick() {
    this.setState({ popUp: true });
  }

  nextClick(noww) {
    this.props.nextQuiz(noww);
    this.setState({ selectChice: '', ischoose: 'X' });
  }

  checkSubmit() {
    if (this.state.ischoose === 'X') {
      return 'button-gray';
    } else {
      return 'button-blue';
    }
  }

  submit() {
    if (this.state.ischoose !== 'X' && this.state.ischoose !== 'S') {
      const target = this.props.answer[0][this.props.count].answer;
      this.setState({ ischoose: 'S', finishQuiz: this.state.finishQuiz + 1 });
      if (this.state.selectChice === target) {
        //score++ show answer change button
        this.setState({ score: this.state.score + 1 });
      }
    }
  }

  render() {
    if (typeof this.props.count == 'number') {
      const question = this.props.quiz[this.props.count];
      const finishQuiz = this.state.finishQuiz;
      //   console.log(this.state.selectChice, this.state.ischoose);
      //   console.log(this.state.finishQuiz);
      return (
        <div>
          <Popup
            score={this.state.score}
            closePopup={() => this.setState({ popUp: false })}
            popupOpen={this.state.popUp}
          />
          <ProcessBar finishQuiz={finishQuiz} />
          <div className="mainBox">
            <div className="questionBox">
              {question.questionId} | QUESTION
              {parse(question.question)}
            </div>
            <table className="choices">
              <tbody>
                <tr
                  className={this.checkchoice('A', question.choices[0])}
                  onClick={() => this.choose('A', question.choices[0])}
                >
                  <td>A.</td>
                  <td>{parse(question.choices[0])}</td>
                  <td>
                    {this.state.ischoose === 'S' ? (
                      <div>
                        {this.checkchoice('A', question.choices[0]) ===
                        'correct-ans' ? (
                          <img
                            src="https://res.cloudinary.com/veo1/image/upload/v1553248405/test_frontend/solution_right.png"
                            className="imgSize"
                          />
                        ) : (
                          <div />
                        )}
                        {this.checkchoice('A', question.choices[0]) ===
                        'wrong-ans' ? (
                          <img
                            src="https://res.cloudinary.com/veo1/image/upload/v1553248405/test_frontend/solution_wrong.png"
                            className="imgSize"
                          />
                        ) : (
                          <div />
                        )}
                      </div>
                    ) : (
                      <div />
                    )}
                  </td>
                </tr>
                <tr
                  className={this.checkchoice('B', question.choices[1])}
                  onClick={() => this.choose('B', question.choices[1])}
                >
                  <td>B.</td>
                  <td>{parse(question.choices[1])}</td>
                  <td>
                    {this.state.ischoose === 'S' ? (
                      <div>
                        {this.checkchoice('A', question.choices[1]) ===
                        'correct-ans' ? (
                          <img
                            src="https://res.cloudinary.com/veo1/image/upload/v1553248405/test_frontend/solution_right.png"
                            className="imgSize"
                          />
                        ) : (
                          <div />
                        )}
                        {this.checkchoice('A', question.choices[1]) ===
                        'wrong-ans' ? (
                          <img
                            src="https://res.cloudinary.com/veo1/image/upload/v1553248405/test_frontend/solution_wrong.png"
                            className="imgSize"
                          />
                        ) : (
                          <div />
                        )}
                      </div>
                    ) : (
                      <div />
                    )}
                  </td>
                </tr>
                <tr
                  className={this.checkchoice('C', question.choices[2])}
                  onClick={() => this.choose('C', question.choices[2])}
                >
                  <td>C.</td>
                  <td>{parse(question.choices[2])}</td>
                  <td>
                    {this.state.ischoose === 'S' ? (
                      <div>
                        {this.checkchoice('A', question.choices[2]) ===
                        'correct-ans' ? (
                          <img
                            src="https://res.cloudinary.com/veo1/image/upload/v1553248405/test_frontend/solution_right.png"
                            className="imgSize"
                          />
                        ) : (
                          <div />
                        )}
                        {this.checkchoice('A', question.choices[2]) ===
                        'wrong-ans' ? (
                          <img
                            src="https://res.cloudinary.com/veo1/image/upload/v1553248405/test_frontend/solution_wrong.png"
                            className="imgSize"
                          />
                        ) : (
                          <div />
                        )}
                      </div>
                    ) : (
                      <div />
                    )}
                  </td>
                </tr>
                <tr
                  className={this.checkchoice('D', question.choices[3])}
                  onClick={() => this.choose('D', question.choices[3])}
                >
                  <td>D.</td>
                  <td>{parse(question.choices[3])}</td>
                  <td>
                    {this.state.ischoose === 'S' ? (
                      <div>
                        {this.checkchoice('A', question.choices[3]) ===
                        'correct-ans' ? (
                          <img
                            src="https://res.cloudinary.com/veo1/image/upload/v1553248405/test_frontend/solution_right.png"
                            className="imgSize"
                          />
                        ) : (
                          <div />
                        )}
                        {this.checkchoice('A', question.choices[3]) ===
                        'wrong-ans' ? (
                          <img
                            src="https://res.cloudinary.com/veo1/image/upload/v1553248405/test_frontend/solution_wrong.png"
                            className="imgSize"
                          />
                        ) : (
                          <div />
                        )}
                      </div>
                    ) : (
                      <div />
                    )}
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="buttonBox">
              {this.state.ischoose === 'S' ? (
                <div>
                  {this.props.count === 4 ? (
                    <div
                      className={'button-blue'}
                      onClick={() => this.finishClick()}
                    >
                      {' '}
                      FINISH
                    </div>
                  ) : (
                    <div
                      className={'button-blue'}
                      onClick={() => this.nextClick(this.props.count)}
                    >
                      {' '}
                      NEXT
                    </div>
                  )}
                </div>
              ) : (
                <div
                  className={this.checkSubmit()}
                  onClick={() => this.submit()}
                >
                  SUBMIT
                </div>
              )}
            </div>
          </div>
        </div>
      );
    } else {
      return <div>Loading</div>;
    }
  }
}

const mapStateToProps = state => {
  return {
    quiz: state.quiz.quiz,
    count: state.quiz.count,
    answer: state.quiz.answer
  };
};

const mapDispatchToProps = dispatch => ({
  fetchQuestion: () => dispatch(fetchQuestion()),
  fetchAnswer: () => dispatch(fetchAnswer()),
  startQuiz: () => dispatch(startQuiz()),
  nextQuiz: noww => dispatch(nextQuiz(noww))
});

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);
