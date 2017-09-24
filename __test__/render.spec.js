import React from 'react'
import chai from 'chai'
import { mount } from 'enzyme'
import SearchBox from '../index'
const expect = chai.expect;

const SearchBoxWithoutProps = mount(<SearchBox />)
const SearchBoxWithProps = mount(<SearchBox options={{
    label: 'label',
    placeHolder: 'type...'
}} />)

describe('SearchBox Component (without props)', () => {
    it('render span label', () => {
        expect(SearchBoxWithoutProps.find('span').text()).equal('')
    })
    it('renders input', () => {
        expect(SearchBoxWithoutProps.find('input').getDOMNode().getAttribute('type')).equal('text')
    })
    it('set input value', () => {
        let text = 'Hello'
        SearchBoxWithoutProps.setState({ valueInput: text })
        expect(SearchBoxWithoutProps.state().valueInput).equal(text)
    })
})

describe('SearchBox Component (with props)', () => {
    it('render', () => {
        let options = SearchBoxWithProps.props().options;
        expect(options).to.be.an('object')
        expect(options.label).to.be.a('string')
        expect(options.placeHolder).to.be.a('string')
    })
})