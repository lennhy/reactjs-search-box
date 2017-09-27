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
            valueInput: '',
            openDropdown: false,
            datas: props.datas
        }
    }
    render() {
        let props = this.props;
        let state = this.state;
        let options = props.options;
        return (
            <div className={ClassNames(DEFAULT.className, { 'open': state.openDropdown })}>
                <span className={ClassNames(`${DEFAULT.className}_label`)}>{options.label}</span>
                <div className={ClassNames(`${DEFAULT.className}_content`)}>
                    <input ref={ref => this.inputSearch = ref} type="text"
                        className={ClassNames(`${DEFAULT.className}_input`)}
                        placeholder={options.placeHolder} value={state.valueInput}
                        onChange={this.onChange.bind(this)} />
                    <div className={ClassNames(`${DEFAULT.className}_dropdown`)}>
                        {props.live ? this.__liveMode(props.api) : this.__localMode(state.datas)}
                    </div>
                </div>
            </div >
        );
    }
    componentDidMount() {
        // document.addEventListener('click', this.__eventListener, false);
    }
    componentWillUnmount() {
        // document.removeEventListener('click', this.__eventListener, false);
    }
    onChange(event) {
        let value = event.target.value;
        let isEmpty = value === '';
        let filterDatas = this.__filterDatas(this.props.datas, value);
        this.setState({ valueInput: value, openDropdown: !isEmpty, datas: isEmpty ? this.props.datas : filterDatas });
    }
    focus() {
        this.inputSearch.focus();
    }
    __localMode(datas) {
        return this.__genDropdown(datas);
    }
    __liveMode(api) {

    }
    __genDropdown(datas) {
        let ul = (li) => <ul>{li}</ul>;
        let li = datas.map(data => {
            return <li key={data.id}
                className={ClassNames(`${DEFAULT.className}_item`,
                    { 'selected': data.selected }, { 'disable': data.disable },
                    { 'hidden': data.hidden })}
                onClick={this.__selectItem.bind(this, data)}>{data.name}</li>
        });
        return ul(li);
    }
    __selectItem(item) {
        // @TODO: do something if want check item before call props function
        this.props.action.selectItem(item);
        // set style to item selected {class: 'selected'}
        // merge props.datas vs state.datas
        let datasWithSelectedItem = this.props.datas;
        datasWithSelectedItem.forEach((data, index, datas) => {
            datas[index].selected = data.id === item.id;
        });
        let datasWithSelectedItemAndFilter = this.__filterDatas(datasWithSelectedItem, this.state.valueInput);
        this.setState({ datas: datasWithSelectedItemAndFilter });
    }
    __filterDatas(oldData, value) {
        return oldData.filter(data => data.name.toUpperCase().indexOf(value.toUpperCase()) !== -1);
    }
    __eventListener() {

    }
}

SearchBox.propTypes = {
    options: PropTypes.shape({
        label: PropTypes.string,
        placeHolder: PropTypes.string,
    }),
    live: PropTypes.bool,
    datas: PropTypes.arrayOf(function (propValue, key, componentName, location, propFullName) {
        if (typeof propValue[key].id !== 'number' || typeof propValue[key].name !== 'string') {
            return new Error(
                'Invalid prop `' + propFullName + '` supplied to' +
                ' `' + componentName + '`. Validation failed.'
            );
        }
    }),
    api: PropTypes.shape({
        url: PropTypes.string,
        method: PropTypes.oneOf(['GET', 'POST']),
    }),
    action: PropTypes.shape({
        selectItem: PropTypes.func.isRequired,
    })
}

SearchBox.defaultProps = {
    options: {
        label: '',
        placeHolder: 'Search'
    },
    live: false,
    datas: [{ id: 0, name: 'Default' }],
    api: {
        url: false,
        method: 'GET'
    },
    action: {
        selectItem: () => { }
    }
}