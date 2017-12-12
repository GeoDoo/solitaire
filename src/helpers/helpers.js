export const ascii = kind => {
	switch(kind) {
		case 'diams':
			return '♦'
		case 'hearts':
			return '♥'
		case 'spades':
			return '♣'
		case 'clubs':
			return '♠'
		default:
			return null
	}
}