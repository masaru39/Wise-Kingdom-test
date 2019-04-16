import React, { Component } from 'react';
import Modal from 'react-modal';
import autobind from 'react-autobind';
import './style.css';

class Popup extends Component {
  constructor() {
    super();
    autobind(this);
  }

  calcStar(bound) {
    if (this.props.score >= bound) {
      return 'https://res.cloudinary.com/veo1/image/upload/v1553248405/test_frontend/popup_star_yellow.png';
    } else {
      return 'https://res.cloudinary.com/veo1/image/upload/v1553248405/test_frontend/popup_star_grey.png';
    }
  }

  render() {
    return (
      <Modal className="modal" isOpen={this.props.popupOpen}>
        <div>
          Your Score
          <img
            className="close"
            src="https://res.cloudinary.com/veo1/image/upload/v1553248405/test_frontend/popup_close.png"
            onClick={() => this.props.closePopup()}
          />
        </div>
        <div className="text">
          <div className="star-div">
            <img className="star1" src={this.calcStar(1)} />
            <img className="star2" src={this.calcStar(3)} />
            <img className="star1" src={this.calcStar(5)} />
          </div>
          <div className="score">
            {' '}
            <span className="earn">{this.props.score}</span>/5
          </div>
          <div className="button">
            <img
              className="think"
              src="https://res.cloudinary.com/veo1/image/upload/v1553248405/test_frontend/popup_see_solution.png"
            />See solutoion
          </div>
        </div>
      </Modal>
    );
  }
}

export default Popup;
