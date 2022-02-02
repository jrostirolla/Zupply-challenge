import {useState} from 'react';
import chessboard from './images/chessboard.png';
import knight from './images//knight.png';
import end from './images/endpoint.png';
import './App.css';

// //coordinates
// function NewGame() {
//   let [horseX, setHorseX] = useState(0);
//   let [horseY, setHorseY] = useState(0);
//   let [crossX, setCrossX] = useState(0);
//   let [crossY, setCrossY] = useState(0);

//   const min = 1
//   const max = 8

//   // X coords
//   let factorXHorse = ((Math.floor(Math.random() * (max - min)) + min) - 5) * 100;
//   let factorXCross = ((Math.floor(Math.random() * (max - min)) + min) - 5) * 100;

//   // Y coords
//   let factorYHorse = (Math.floor(Math.random() * (max - min)) + min) * 100;
//   let factorYCross = (Math.floor(Math.random() * (max - min)) + min) * 100;

//   setHorseX(horseX + 90 + factorXHorse);
//   setHorseY(horseY + 13 + factorYHorse);
//   setCrossX(crossX + 15 + factorXCross);
//   setCrossY(crossY + 13 + factorYCross);

//   console.log(horseX, horseY, crossX, crossY);

//   // random number between 1 and 8 THEN minus 5 for even split FOR X ONLY
//   // random number multiplied by 100
//   // number added to X and Y of variables

// }



function App() {
  
  
  //coordinates  
  let [horseX, setHorseX] = useState("-10px");
  let [horseY, setHorseY] = useState("313px");
  let [crossX, setCrossX] = useState("15px");
  let [crossY, setCrossY] = useState("313px");

  function NewGame() {
  const min = 1
  const max = 8

  // X coords
  let factorXHorse = ((Math.floor(Math.random() * (max - min)) + min) - 5) * 100 + 90;
  let factorXCross = ((Math.floor(Math.random() * (max - min)) + min) - 5) * 100 + 15;

  // Y coords
  let factorYHorse = (Math.floor(Math.random() * (max - min)) + min) * 100 + 13;
  let factorYCross = (Math.floor(Math.random() * (max - min)) + min) * 100 + 13;

  setHorseX(horseX = factorXHorse + 'px');
  setHorseY(horseY = factorYHorse + 'px');
  setCrossX(crossX = factorXCross + 'px');
  setCrossY(crossY = `${factorYCross}px`);
} 

  let styles = {
    horse: {
      left: `${horseX}`,
      top: `${horseY}`
    },
    cross: {
      left: `${crossX}`,
      top: `${crossY}`
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <div style={{
          backgroundImage: "url(" + chessboard + ")",
          backgroundSize: '800px',
          width: '800px',
          height: '800px'
        }}>
          <img
            style={styles.horse}
          src={knight} className="chessPiece" alt="knight"/>
          <img 
            style={styles.cross}
          src={end} className="chessPiece" alt="end"/>
        </div>
        <div className='arrowKeys'>
            <button id='NW' className='direction'>&#11180;</button>
            <button id='NE' className='direction'>&#11181;</button>
            <button id='EN' className='direction'>&#10150;</button>
            <button id='ES' className='direction'>&#10149;</button>
            <button id='SE' className='direction'>&#11183;</button>
            <button id='SW' className='direction'>&#11182;</button>
            <button id='WS' className='direction'>&#11176;</button>
            <button id='WN' className='direction'>&#11178;</button>
        </div>
        <div>
          <button className='newGame' onClick={NewGame}>NEW GAME</button>
          <button className='help'>HELP</button>
        </div>
      </header>
    </div>
  );
}

export default App;