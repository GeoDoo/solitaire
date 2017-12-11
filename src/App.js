import React, { Component } from 'react'
import './libs/css/cards.css'

class App extends Component {
  render() {
    return (
      <div className="playingCards fourColours faceImages simpleCards inText rotateHand">
        <ul>
          <li>
            <div class="card rank-7 spades">
                <span class="rank">7</span>
                <span class="suit">&spades;</span>
            </div>
          </li>
        </ul>
      </div>
    )
  }
}

export default App
