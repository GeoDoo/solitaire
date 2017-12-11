import React from 'react'
import { shallow, mount } from 'enzyme'
import Deck from './Deck'

it('renders without crashing', () => {
	shallow(<Deck />)
})

let wrapper 

beforeAll(() => {
	wrapper = mount(<Deck />)
})

it('contains a ul tag', () => {
	expect(wrapper.find('ul').length).toBe(1)
})

it('contains 52 li tags', () => {
	expect(wrapper.find('li').length).toBe(52)
})