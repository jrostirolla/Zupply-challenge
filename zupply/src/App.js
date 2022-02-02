import chessboard from './images/chessboard.png';
import knight from './images//knight.png';
import end from './images/endpoint.png';
import './App.css';

//arrow keys


function App() {
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
            style={{
              // put code to move piece here
            }}
          src={knight} className="chessPiece" alt="knight"/>
          <img 
            style={{
              // put code to move piece here
            }}
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
          <button className='newGame'>NEW GAME</button>
          <button className='help'>HELP</button>
        </div>
      </header>
    </div>
  );
}

export default App;

/* 
planning:

- set the position of pieces to be state1 and state2
- write function to randomly assign x and y values
- build buttons that change x and y values on screen in accordance to how a knight moves
- figure out help system...

EXTRA:
- add in score system
*/