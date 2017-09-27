'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactjsSearchBox = require('./reactjs-search-box.css');

var _reactjsSearchBox2 = _interopRequireDefault(_reactjsSearchBox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DEFAULT = {
    className: 'search-box'
};

var SearchBox = function (_Component) {
    _inherits(SearchBox, _Component);

    function SearchBox(props, context) {
        _classCallCheck(this, SearchBox);

        var _this = _possibleConstructorReturn(this, (SearchBox.__proto__ || Object.getPrototypeOf(SearchBox)).call(this, props, context));

        _this.state = {
            valueInput: '',
            openDropdown: false,
            datas: props.datas
        };
        return _this;
    }

    _createClass(SearchBox, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var props = this.props;
            var state = this.state;
            var options = props.options;
            return _react2.default.createElement(
                'div',
                { className: (0, _classnames2.default)(DEFAULT.className, { 'open': state.openDropdown }) },
                _react2.default.createElement(
                    'span',
                    { className: (0, _classnames2.default)(DEFAULT.className + '_label') },
                    options.label
                ),
                _react2.default.createElement(
                    'div',
                    { className: (0, _classnames2.default)(DEFAULT.className + '_content') },
                    _react2.default.createElement('input', { ref: function ref(_ref) {
                            return _this2.inputSearch = _ref;
                        }, type: 'text',
                        className: (0, _classnames2.default)(DEFAULT.className + '_input'),
                        placeholder: options.placeHolder, value: state.valueInput,
                        onChange: this.onChange.bind(this) }),
                    _react2.default.createElement(
                        'div',
                        { className: (0, _classnames2.default)(DEFAULT.className + '_dropdown') },
                        props.live ? this.__liveMode(props.api) : this.__localMode(state.datas)
                    )
                )
            );
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            // document.addEventListener('click', this.__eventListener, false);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            // document.removeEventListener('click', this.__eventListener, false);
        }
    }, {
        key: 'onChange',
        value: function onChange(event) {
            var value = event.target.value;
            var isEmpty = value === '';
            var filterDatas = this.__filterDatas(this.props.datas, value);
            this.setState({ valueInput: value, openDropdown: !isEmpty, datas: isEmpty ? this.props.datas : filterDatas });
        }
    }, {
        key: 'focus',
        value: function focus() {
            this.inputSearch.focus();
        }
    }, {
        key: '__localMode',
        value: function __localMode(datas) {
            return this.__genDropdown(datas);
        }
    }, {
        key: '__liveMode',
        value: function __liveMode(api) {}
    }, {
        key: '__genDropdown',
        value: function __genDropdown(datas) {
            var _this3 = this;

            var ul = function ul(li) {
                return _react2.default.createElement(
                    'ul',
                    null,
                    li
                );
            };
            var li = datas.map(function (data) {
                return _react2.default.createElement(
                    'li',
                    { key: data.id,
                        className: (0, _classnames2.default)(DEFAULT.className + '_item', { 'selected': data.selected }, { 'disable': data.disable }, { 'hidden': data.hidden }),
                        onClick: _this3.__selectItem.bind(_this3, data) },
                    data.name
                );
            });
            return ul(li);
        }
    }, {
        key: '__selectItem',
        value: function __selectItem(item) {
            // @TODO: do something if want check item before call props function
            this.props.action.selectItem(item);
            // set style to item selected {class: 'selected'}
            // merge props.datas vs state.datas
            var datasWithSelectedItem = this.props.datas;
            datasWithSelectedItem.forEach(function (data, index, datas) {
                datas[index].selected = data.id === item.id;
            });
            var datasWithSelectedItemAndFilter = this.__filterDatas(datasWithSelectedItem, this.state.valueInput);
            this.setState({ datas: datasWithSelectedItemAndFilter });
        }
    }, {
        key: '__filterDatas',
        value: function __filterDatas(oldData, value) {
            return oldData.filter(function (data) {
                return data.name.toUpperCase().indexOf(value.toUpperCase()) !== -1;
            });
        }
    }, {
        key: '__eventListener',
        value: function __eventListener() {}
    }]);

    return SearchBox;
}(_react.Component);

exports.default = SearchBox;


SearchBox.propTypes = {
    options: _propTypes2.default.shape({
        label: _propTypes2.default.string,
        placeHolder: _propTypes2.default.string
    }),
    live: _propTypes2.default.bool,
    datas: _propTypes2.default.arrayOf(function (propValue, key, componentName, location, propFullName) {
        if (typeof propValue[key].id !== 'number' || typeof propValue[key].name !== 'string') {
            return new Error('Invalid prop `' + propFullName + '` supplied to' + ' `' + componentName + '`. Validation failed.');
        }
    }),
    api: _propTypes2.default.shape({
        url: _propTypes2.default.string,
        method: _propTypes2.default.oneOf(['GET', 'POST'])
    }),
    action: _propTypes2.default.shape({
        selectItem: _propTypes2.default.func.isRequired
    })
};

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
        selectItem: function selectItem() {}
    }
};