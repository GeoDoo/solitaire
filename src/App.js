import React, { Component } from 'react'
import Deck from './components/Deck'
import './libs/css/cards.css'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="playingCards fourColours faceImages simpleCards inText rotateHand">
       <Deck />
      </div>
    )
  }
}

export default App
