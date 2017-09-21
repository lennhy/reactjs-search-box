import React from 'react'
import expect from 'expect'
import { mount } from 'enzyme'
import SearchBox from '../index'

const wrapper = mount(<SearchBox />)

describe('SearchBox Component (without props)', () => {
    it('render span label', () => {
        expect(wrapper.find('span').text()).toEqual('')
    })
    it('renders input', () => {
        expect(wrapper.find('input').getDOMNode().getAttribute('type')).toEqual('text')
    })
    it('set input value', () => {
        let text = 'Hello'
        wrapper.setState({ valueInput: text })
        expect(wrapper.state().valueInput).toEqual(text)
    })
})