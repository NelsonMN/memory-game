import '../styles/css/Header.css'

const Header = (props) => {
  return (
    <div id='header'>
      <div id='main-holder'>
        <div id="main"> 
          <h1 id='title'>
            Scrubs Memory Game
          </h1>
          <div id="score">
            <span>Score: {props.score}</span> 
            <span>Highscore: {props.highScore}</span>
          </div>
        </div>
        <p className='description'>
          Get points by clicking on an image, but don't click the same image more than once!
        </p>
      </div>
    </div>
  );
};

export default Header