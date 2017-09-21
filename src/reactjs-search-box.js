import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ClassNames from 'classnames';

import css from './reactjs-search-box.css';

const DEFAULT = {
    className: 'search-box'
}

export default class SearchBox extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            valueInput: ''
        }
    }
    render() {
        let props = this.props;
        let state = this.state;
        let options = props.options;
        return (
            <div className={DEFAULT.className}>
                <span className={ClassNames(`${DEFAULT.className}_label`)}>{options.label}</span>
                <div className={ClassNames(`${DEFAULT.className}_content`)}>
                    <input ref={ref => this.inputSearch = ref} type="text"
                        className={ClassNames(`${DEFAULT.className}_input`)}
                        placeholder={options.placeHolder} value={state.valueInput}
                        onChange={this.onChange.bind(this)} />
                </div>
            </div>
        );
    }
    onChange(event) {
        let value = event.target.value;
        this.setState({ valueInput: value });
    }
    focus() {
        this.inputSearch.focus();
    }
}

SearchBox.propTypes = {
    options: PropTypes.shape({
        label: PropTypes.string.isRequired,
        placeHolder: PropTypes.string.isRequired,
    })
}

SearchBox.defaultProps = {
    options: {
        label: '',
        placeHolder: 'Search'
    }
}