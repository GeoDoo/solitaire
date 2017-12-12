import React from 'react'
import { ascii } from '../helpers/helpers'
 
const Card = ({rank, kind, back}) => {
	return (
		<div className={`card rank-${rank} ${kind} ${back}`}>
	      <span className="rank">{rank.toUpperCase()}</span>
	      <span className="suit">{ascii(kind)}</span>
	  </div>
	)
}

export default Card