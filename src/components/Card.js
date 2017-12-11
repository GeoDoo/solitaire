import React from 'react'

const ascii = kind => {
	switch(kind) {
		case 'diams':
			return '♦'
		case 'hearts':
			return '♥'
		case 'spades':
			return '♣'
		case 'clubs':
			return '♠'
	}
}

const Card = (props) => {
	return (
		<div className={`card rank-${props.rank} ${props.kind}`}>
	      <span className="rank">{props.rank.toUpperCase()}</span>
	      <span className="suit">{ascii(props.kind)}</span>
	  </div>
	)
}

export default Card