import {useState} from 'react';
import chessboard from './images/chessboard.png';
import knight from './images//knight.png';
import end from './images/endpoint.png';
import './App.css';

function App() {
  //coordinates  
  let [horseX, setHorseX] = useState(315);
  let [horseY, setHorseY] = useState(315);
  let [crossX, setCrossX] = useState(415);
  let [crossY, setCrossY] = useState(315);

  //score
  let [score, setScore] = useState(0);

  function next() {
    const min = 1
    const max = 7

    // X coords
    let factorXHorse = (Math.floor(Math.random() * (max - min)) + min) * 100;
    let factorXCross = (Math.floor(Math.random() * (max - min)) + min) * 100;

    // Y coords
    let factorYHorse = (Math.floor(Math.random() * (max - min)) + min) * 100;
    let factorYCross = (Math.floor(Math.random() * (max - min)) + min) * 100;

    if (factorXHorse === factorXCross && factorYHorse === factorYCross) {
        next();
      } else {
      setHorseX(horseX = factorXHorse + 15);
        if (horseY <= 0) {
            setHorseY(horseY = 15)
          } else {
            setHorseY(horseY = factorYHorse + 15);
          }
      setCrossX(crossX = factorXCross + 15);
      setCrossY(crossY = factorYCross + 15);
    }}

  function NewGame() {
    setHorseX(horseX = 315);
    setHorseY(horseY = 315);
    setCrossX(crossX = 415);
    setCrossY(crossY = 315);
    setScore(score = 0);
    next();
  }

  function scoreCheck(testerX, testerY) {
    if (testerX === crossX && testerY === crossY) {
      alert('SCOOOOORE!');
      setScore(score + 1);
      next()
    }
  }

  //movements
function NW() {
  if (horseX <= 15) {
    alert("invalid move, sorry!");
      return;
  } else if (horseY <= 115) {
    alert("invalid move, sorry!");
      return;
  }
  let scoreX = horseX - 100;
  let scoreY = horseY - 200;
  scoreCheck(scoreX, scoreY);
  setHorseX(horseX - 100);
  setHorseY(horseY - 200);
}

function NE() {
  if (horseX >= 715) {
      alert("invalid move, sorry!");
      return;
  } else if (horseY <= 115) {
    alert("invalid move, sorry!");
      return;
  }
    let scoreX = horseX + 100;
    let scoreY = horseY - 200;
    scoreCheck(scoreX, scoreY);
    setHorseX(horseX + 100);
    setHorseY(horseY - 200)
}

function EN() {
  if (horseX >= 615) {
    alert("invalid move, sorry!");
      return;
  } else if (horseY <= 15) {
    alert("invalid move, sorry!");
      return;
  }
    let scoreX = horseX + 200;
    let scoreY = horseY - 100;
    scoreCheck(scoreX, scoreY);
    setHorseX(horseX + 200);
    setHorseY(horseY - 100)
}

function ES() {
  if (horseX >= 615) {
    alert("invalid move, sorry!");
    return;
  } else if (horseY >= 715) {
    alert("invalid move, sorry!");
    return;
  } 
  let scoreX = horseX + 200;
  let scoreY = horseY + 100;
  scoreCheck(scoreX, scoreY);
  setHorseX(horseX + 200);
  setHorseY(horseY + 100)
};

function SE() {
  if (horseX >= 715) {
    alert("invalid move, sorry!");
    return;
  } else if (horseY >= 615) {
    alert("invalid move, sorry!");
    return;
  } 
  let scoreX = horseX + 100;
  let scoreY = horseY + 200;
  scoreCheck(scoreX, scoreY);
  setHorseX(horseX + 100);
  setHorseY(horseY + 200)
};

function SW() {
  if (horseX <= 15) {
    alert("invalid move, sorry!");
    return;
  } else if (horseY >= 615) {
    alert("invalid move, sorry!");
    return;
  } 
  let scoreX = horseX - 100;
  let scoreY = horseY + 200;
  scoreCheck(scoreX, scoreY);
  setHorseX(horseX - 100);
  setHorseY(horseY + 200)
};

function WS() {
  if (horseX <= 115) {
    alert("invalid move, sorry!");
    return;
  } else if (horseY >= 715) {
    alert("invalid move, sorry!");
    return;
  } 
  let scoreX = horseX - 200;
  let scoreY = horseY + 100;
  scoreCheck(scoreX, scoreY);
  setHorseX(horseX - 200);
  setHorseY(horseY + 100)
};

function WN() {
  if (horseX <= 115) {
    alert("invalid move, sorry!");
      return;
    } else if (horseY <= 15) {
      alert("invalid move, sorry!");
      return;
    }
    let scoreX = horseX - 200;
    let scoreY = horseY - 100;
    scoreCheck(scoreX, scoreY);
    setHorseX(horseX - 200);
    setHorseY(horseY - 100);  
    };

  //help button
  //check to see if value of endpoint is higher than knight. move it in appropriate direction for either ++, +_

  //chesspiece positions
  let styles = {
    horse: {
      left: `${horseX}px`,
      top: `${horseY}px`
    },
    cross: {
      left: `${crossX}px`,
      top: `${crossY}px`
    }
  }
  return (
    <div className="App">
      <header className="App-header">
        <div style={{
          backgroundImage: "url(" + chessboard + ")",
          backgroundSize: '800px',
          width: '800px',
          height: '800px',
          position: 'absolute',
          top: '10px'
        }}>
          <img
            style={styles.horse}
          src={knight} className="chessPiece" alt="knight"/>
          <img 
            style={styles.cross}
          src={end} className="chessPiece" alt="end"/>
        </div>
        <div className='arrowKeys'>
            <button id='NW' className='direction' onClick={NW}>&#11180;</button>
            <button id='NE' className='direction' onClick={NE}>&#11181;</button>
            <button id='EN' className='direction' onClick={EN}>&#10150;</button>
            <button id='ES' className='direction' onClick={ES}>&#10149;</button>
            <button id='SE' className='direction' onClick={SE}>&#11183;</button>
            <button id='SW' className='direction' onClick={SW}>&#11182;</button>
            <button id='WS' className='direction' onClick={WS}>&#11176;</button>
            <button id='WN' className='direction' onClick={WN}>&#11178;</button>
        </div>
        <div style={{ position: 'absolute', bottom: '10px' }}>
          <button className='newGame' onClick={NewGame}>NEW GAME</button>
          <button className='help'>HELP</button>
          <h1 className='score'>Score: {score}</h1>
        </div>
      </header>
    </div>
  );
}

export default App;