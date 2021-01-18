import React, { useState } from 'react';
import './Lottery.css';
import Ball from './Ball';

const Lottery = (props) => {
  // Destructure props
  const { title = "Lotto", numBalls = 6, maxNum = 40 } = props;
  
  // Re-roll: Re rolls the value of balls in this.state
  const rollBalls = (e) => setBalls(balls.map(ball => genNumber()));

  // Function returns an array of randomly generated numbers, size of array is set by numBalls
  const genArray = () => Array.from({ length: numBalls }).map(item => genNumber() );

  // generate: Returns a random number from 1 to maxNum
  const genNumber = () => Math.floor(Math.random() * maxNum) + 1;
  
  // set up state
  const [ balls, setBalls ] = useState(genArray());

  return (
    <div className="Lottery">
      <h1 className="Lottery-title">{title}</h1>
        <div className="Lottery-balls">
          { balls.map(num => <Ball number={num} /> )}
        </div>
      
        <button className="Lottery-button" onClick={rollBalls} type="button">Generate</button>
    </div>
  )
};

export default Lottery;