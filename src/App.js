import React from 'react';
import './App.css';
import Lottery from './Lottery.js';

const App = () =>  {
    return (
      <div className="App">
        <Lottery title="Lotto" numBalls={6} maxNum={40} />
      
        <Lottery title="Daily" numBalls={4} maxNum={20} />
      </div>
    );
}

export default App;
