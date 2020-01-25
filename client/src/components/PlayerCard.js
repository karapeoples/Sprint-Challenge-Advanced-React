import React from 'react';


const PlayerCard = ({name, location, searchInfo}) => {
  

  return (
    <div>
      <h1>Name: {name} </h1>
      <h3>Country: {location}</h3>
      <p>Peoples have searched for this player {searchInfo} times.</p>

    </div>
  )
}

export default PlayerCard;