import './styles/App.css';
import { useState } from 'react';

const App = () => {

  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  return (
    <div>
      score: {score}, best score: {bestScore}
    </div>
  );
};

export default App;
