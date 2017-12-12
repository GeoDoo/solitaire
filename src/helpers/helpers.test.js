import { ascii } from './helpers'

it('returns diamonds in ASCII when "diams" is the parameter', () => {
	const spadesASCII = ascii('diams')

	expect(spadesASCII).toEqual('♦')
})

it('returns hearts in ASCII when "hearts" is the parameter', () => {
	const spadesASCII = ascii('hearts')

	expect(spadesASCII).toEqual('♥')
})

it('returns spades in ASCII when "spades" is the parameter', () => {
	const spadesASCII = ascii('spades')

	expect(spadesASCII).toEqual('♣')
})

it('returns clubs in ASCII when "clubs" is the parameter', () => {
	const spadesASCII = ascii('clubs')

	expect(spadesASCII).toEqual('♠')
})

it('returns null as the default parameter', () => {
	const spadesASCII = ascii('sth')

	expect(spadesASCII).toEqual(null)
})