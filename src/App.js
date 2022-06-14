import { useState, useEffect } from 'react';
import './styles/css/App.css';
import Header from './components/Header';
import Game from './components/Game';
import Footer from './components/Footer';

const App = () => {

  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [memoryArray, setMemoryArray] = useState([]);

  const handleScore = (player) => {
    if (memoryArray.includes(player.id)) {
      setScore(0)
      setMemoryArray([])
    } else {
      setMemoryArray(memoryArray.concat(player.id)) 
     ; setScore(score + 1)
    }
  }
  
  useEffect(() => {
    if (score > highScore) {
      setHighScore(score)
    }}, [score, highScore]
    );

  return (
    <div className='main'> 
      <Header score={score} highScore={highScore} />
      <Game score={score} highScore={highScore} memoryArray={memoryArray} handleScore={handleScore} />
      <Footer />
    </div>
  );
};

export default App;
