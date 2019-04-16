import React, { Component } from 'react';
import './style.css';

class Navbar extends Component {
  render() {
    return (
      <div className="bar">
        <img
          src={
            'https://res.cloudinary.com/veo1/image/upload/v1553248405/test_frontend/navbar_logo.png'
          }
        />
      </div>
    );
  }
}

export default Navbar;
