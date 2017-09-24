import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import ReactJsSearchBox from './reactjs-search-box'

export default class App extends Component {
    render() {
        return (
            <ReactJsSearchBox ref={ref => this.searchBox = ref} options={{
                label: 'Test', placeHolder: 'test'
            }} />
        );
    }
    componentDidMount() {
        this.searchBox.focus();
    }

}

ReactDOM.render(<App />, document.getElementById('container'))
