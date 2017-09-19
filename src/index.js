import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import css from './index.css';

const DEFAULT = {
    className: 'search-box'
}

export default class SearchBox extends Component {
    constructor() {
        super();
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
                <span className={classNames([`${DEFAULT.className}_label`])}>{options.label}</span>
                <div className={classNames([`${DEFAULT.className}_content`])}>
                    <input type="text" className={classNames([`${DEFAULT.className}_input`])}
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