import '../styles/css/Game.css'

const Game = () => {
    return (
    <div className='background'>
        <div className='cards'>
            <div className="card">
                <img className='image' id='Carla' src={require('../styles/images/Carla.webp')} alt='Carla'></img>
                <span className='name'>Carla</span>
            </div>
            <div className="card">
                <img className='image' id='Laverne' src={require('../styles/images/Laverne.webp')} alt='Laverne'></img>
                <span className='name'>Laverne</span>
            </div>
            <div className="card">
                <img className='image' id='Dr. Cox' src={require('../styles/images/Cox.webp')} alt='Dr. Cox'></img>
                <span className='name'>Dr. Cox</span>
            </div>
            <div className="card">
                <img className='image' id='J.D.' src={require('../styles/images/JD.webp')} alt='J.D.'></img>
                <span className='name'>J.D.</span>
            </div>
            <div className="card">
                <img className='image' id='Elliot' src={require('../styles/images/Elliot.webp')} alt='Elliot'></img>
                <span className='name'>Elliot</span>
            </div>
            <div className="card">
                <img className='image' id='Doug' src={require('../styles/images/Doug.webp')} alt='Doug'></img>
                <span className='name'>Doug</span>
            </div>
            <div className="card">
                <img className='image' id='Janitor' src={require('../styles/images/Janitor.webp')} alt='Janitor'></img>
                <span className='name'>Janitor</span>
            </div>
            <div className="card">
                <img className='image' id='Jordan' src={require('../styles/images/Jordan.webp')} alt='Jordan'></img>
                <span className='name'>Jordan</span>
            </div>
            <div className="card">
                <img className='image' id='Dr. Kelso' src={require('../styles/images/Kelso.webp')} alt='Dr. Kelso'></img>
                <span className='name'>Dr. Kelso</span>
            </div>
            <div className="card">
                <img className='image' id='Ted' src={require('../styles/images/Ted.webp')} alt='Ted'></img>
                <span className='name'>Ted</span>
            </div>
            <div className="card">
                <img className='image' id='Todd' src={require('../styles/images/Todd.webp')} alt='Todd'></img>
                <span className='name'>Todd</span>
            </div>
            <div className="card">
                <img className='image' id='Turk' src={require('../styles/images/Turk.webp')} alt='Turk'></img>
                <span className='name'>Turk</span>
            </div>
        </div>
    </div>
    )
}

export default Game
