import React from 'react';
import './Ball.css';

const Ball = (props) =>  {
    return (
      <div className="Ball">
        <p className="Ball-number">{props.number}</p>
      </div>
    )
}

export default Ball;