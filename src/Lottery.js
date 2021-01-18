import React, { Component } from 'react';
import './Lottery.css';
import Ball from './Ball';

class Lottery extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      balls : this.genArray()
    }
    this.rollBalls = this.rollBalls.bind(this);
  }

  static defaultProps = {
    title: 'Lotto',
    numBalls: 6,
    maxNum: 40
  }

  // Re-roll: Re rolls the value of balls in this.state
  rollBalls(e) {
    const newNumbers = this.state.balls.map(ball => this.genNumber());

    this.setState({balls: newNumbers});
  }

  // Function returns an array of randomly generated numbers, size of array is set by numBalls
  genArray() {
    return Array.from({length: this.props.numBalls}).map(item => this.genNumber() );
  }

  // generate: Returns a random number from 1 to maxNum
  genNumber() {
    return Math.floor(Math.random() * this.props.maxNum) + 1;
  }

  render() {
    const props = this.props;
    
    return (
      <div className="Lottery">
        <h1 className="Lottery-title">{props.title}</h1>
          <div className="Lottery-balls">
            { this.state.balls.map(num => <Ball number={num} /> )}
          </div>
        
          <button className="Lottery-button" onClick={this.rollBalls} type="button">Generate</button>
      </div>
    )
  }
}

export default Lottery;