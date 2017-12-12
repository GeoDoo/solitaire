import React from 'react'
import { ascii } from '../helpers/helpers'
 
const Card = ({rank, kind}) => {
	return (
		<div className={`card rank-${rank} ${kind}`}>
	      <span className="rank">{rank.toUpperCase()}</span>
	      <span className="suit">{ascii(kind)}</span>
	  </div>
	)
}

export default Card