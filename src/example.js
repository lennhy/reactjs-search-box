import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import './example.css';

import ReactJsSearchBox from './reactjs-search-box'

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            dataList: [{
                id: 1,
                name: 'Item 1'
            }, {
                id: 2,
                name: 'Item 2'
            }, {
                id: 3,
                name: 'Item 3'
            }, {
                id: 4,
                name: 'Item 4'
            }, {
                id: 5,
                name: 'Item 5'
            }]
        }
    }
    render() {
        return (
            <div className="content">
                <ReactJsSearchBox ref={ref => this.searchBox = ref}
                    options={{
                        label: 'Find',
                        placeHolder: 'Search'
                    }}
                    live={false}
                    datas={this.state.dataList}
                    api={{
                        url: '',
                        method: 'GET'
                    }}
                    action={{
                        selectItem: this.selectItem.bind(this)
                    }} />
                <div className="result-selected">
                    Selected: <span ref={ref => this.resultSelected = ref}></span>
                </div>
            </div>
        );
    }
    componentDidMount() {
        this.searchBox.focus();
    }
    selectItem(item) {
        this.resultSelected.innerText = item.name;
    }
}

ReactDOM.render(<App />, document.getElementById('container'))
