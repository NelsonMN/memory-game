import React, { useState } from 'react';
import '../styles/css/Game.css'

const Game = (props) => {
  const [players, setPlayers] = useState([
    {name: 'J.D.', id: 0},
    {name: 'Dr. Cox', id: 1},
    {name: 'Elliot', id: 2},
    {name: 'Turk', id: 3},
    {name: 'Dr. Kelso', id: 4},
    {name: 'Carla', id: 5},
    {name: 'Jordan', id: 6},
    {name: 'The Todd', id: 7},
    {name: 'Ted', id: 8},
    {name: 'Doug', id: 9},
    {name: 'Laverne', id: 10},
    {name: 'Janitor', id: 11},
    ])

  const randomizeArray = array => {
    const arrayCopy = [...array]

    for (let i = arrayCopy.length - 1; i > 0; i--) {
      const j = Math.floor( Math.random() * (i + 1) );
      [ arrayCopy[i], arrayCopy[j] ] = [ arrayCopy[j], arrayCopy[i] ];
    }
    
  return arrayCopy
  };

  const updatePlayerState = () => {
    const updatedState = randomizeArray(players)
    setPlayers(updatedState)
  }

  return (
    <div className='cards'>
        {players.map( player => {
            return (
                <div key={player.id} className="card" onClick={() => {
                  props.handleScore(player)
                  updatePlayerState()
                }}>
                    <img className='image' id={player.id} draggable={false} src={require(`../styles/images/${player.name}.webp`)} alt={player.name}></img>
                    <span className='name'>{player.name}</span>
                </div>
            )
        })}
    </div> 
  )
};

export default Game;