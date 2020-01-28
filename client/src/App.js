import React, {Component} from 'react';
import './App.css';
import PlayerCard from './components/PlayerCard';
import NavBar from './components/NavBar';


class App extends Component {
  state = {
    player: []
  };

  componentDidMount() {
    fetch(`http://localhost:5000/api/players`)
    .then (response => response.json())
    .then (playerData => {
      this.setState({ 
        ...this.state, player: playerData
      })
       console.log(playerData)
    })
    .catch(err => { console.log('Info not Available', err) 
    })
  }
  render() {
    return (
      <div className="App" data-testid='header'>
        <NavBar />
        {this.state.player.map(info => {
          return (
          <PlayerCard
              key={info.id}
              name={info.name}
              location={info.country}
              searchInfo={info.searches}/>
        )})}
          
    </div>

)
}
}
export default App;