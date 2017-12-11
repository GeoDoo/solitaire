import React, { Component } from 'react'
import Card from './Card'

class Deck extends Component {
	renderCards() {
		const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'j', 'q', 'k', 'a' ]
		const deck = {
			"diams": ranks,
			"hearts": ranks,
			"spades": ranks,
			"clubs": ranks
		}

		let cardList = []

		for (let kind in deck) {
			cardList.push(
				deck[kind].map((card) => {
					return <li key={`card-${kind}-${card}`}><Card kind={kind} rank={card} /></li>
				})
			)
		}

		return cardList
	}

	render() {
		return (
			<ul>
				{this.renderCards()}
			</ul>
		)
	}
}

export default Deck