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
            valueInput: ''
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
                { className: DEFAULT.className },
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
                        onChange: this.onChange.bind(this) })
                )
            );
        }
    }, {
        key: 'onChange',
        value: function onChange(event) {
            var value = event.target.value;
            this.setState({ valueInput: value });
        }
    }, {
        key: 'focus',
        value: function focus() {
            this.inputSearch.focus();
        }
    }]);

    return SearchBox;
}(_react.Component);

exports.default = SearchBox;


SearchBox.propTypes = {
    options: _propTypes2.default.shape({
        label: _propTypes2.default.string.isRequired,
        placeHolder: _propTypes2.default.string.isRequired
    })
};

SearchBox.defaultProps = {
    options: {
        label: '',
        placeHolder: 'Search'
    }
};