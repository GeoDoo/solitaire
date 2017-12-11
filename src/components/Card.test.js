import React from 'react'
import { shallow, mount } from 'enzyme'
import Card from './Card'

it('renders without crashing', () => {
	shallow(<Card />)
})

let wrapper

beforeAll(() => {
	wrapper = mount(<Card />)
})

it('contains a div tag with class "card"', () => {
	expect(wrapper.find('div.card').length).toBe(1)
})

it('contains a span tag with class "rank"', () => {
	expect(wrapper.find('span.rank').length).toBe(1)
})

it('contains a span tag class "suit"', () => {
	expect(wrapper.find('span.suit').length).toBe(1)
})