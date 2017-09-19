import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import css from './app.css';;

import SearchBox from './index';

class App extends Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        return <div className="container">
            <SearchBox ref={ref => this.searchBox = ref} options={{ label: '', placeHolder: 'search' }} />
        </div>
    }
}

ReactDOM.render(<App />, document.getElementById('container'));