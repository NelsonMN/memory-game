import { useState } from 'react';
import './styles/css/App.css';
import Header from './components/Header';
import Game from './components/Game';

const App = () => {

  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [memoryArray, setMemoryArray] = useState([]);

  const handleScore = (player) => {
    if (memoryArray.includes(player.id)) {
      handleHighScore()
      setScore(0)
      setMemoryArray([])
    } else {
      setMemoryArray(memoryArray.concat(player.id)) 
      setScore(score + 1)
    }
  }
  
  const handleHighScore = () => {
    if (score > highScore) {
      setHighScore(score)
    }
  }

  return (
    <div> 
      <Header score={score} highScore={highScore} />
      <Game score={score} highScore={highScore} memoryArray={memoryArray} handleScore={handleScore} />
    </div>
  );
};

export default App;
