import { useState } from 'react';
import './styles/css/App.css';
import Header from './components/Header';
import Game from './components/Game';

const App = () => {

  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [memoryArray, setMemoryArray] = useState([]);

  return (
    <div> 
      <Header score={score} bestScore={bestScore} />
      <Game memoryArray={memoryArray} />
    </div>
  );
};

export default App;
