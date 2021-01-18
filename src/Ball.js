import React, { Component } from 'react';
import './Ball.css';

class Ball extends Component {
  render() {
    return (
      <div className="Ball">
        <p className="Ball-number">{this.props.number}</p>
      </div>
    )
  }
}

export default Ball;