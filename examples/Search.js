webpackJsonp([8],{

/***/ 413:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(414);


/***/ }),

/***/ 414:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_fantd_src_search_style_index_less__ = __webpack_require__(415);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_fantd_src_search_style_index_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_fantd_src_search_style_index_less__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_fantd__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_dom__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_dom__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* eslint no-console:0 import/extensions:0 */





var Component = function (_React$Component) {
    _inherits(Component, _React$Component);

    function Component() {
        _classCallCheck(this, Component);

        var _this = _possibleConstructorReturn(this, (Component.__proto__ || Object.getPrototypeOf(Component)).call(this));

        _this.state = {
            value: ''
        };
        return _this;
    }

    _createClass(Component, [{
        key: "render",
        value: function render() {
            var _this2 = this;

            return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                "div",
                { style: { margin: 10 } },
                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_fantd__["e" /* Search */], { placeholder: "\u641C\u7D22", type: "vague" }),
                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_fantd__["e" /* Search */], { placeholder: "\u641C\u7D22", type: "ghost" }),
                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_fantd__["e" /* Search */], {
                    value: this.state.value,
                    placeholder: "\u641C\u7D22",
                    action: true,
                    getNode: function getNode(node) {
                        _this2.searchNode = node;
                    },
                    onInput: function onInput(value) {
                        _this2.setState({
                            value: value
                        });
                    },
                    onAction: function onAction() {
                        _this2.setState({
                            value: ''
                        });
                    }
                }),
                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                    "div",
                    {
                        style: { cursor: 'pointer' },
                        onClick: function onClick() {
                            _this2.searchNode.focus();
                        }
                    },
                    "\u83B7\u53D6\u7126\u70B9"
                )
            );
        }
    }]);

    return Component;
}(__WEBPACK_IMPORTED_MODULE_2_react___default.a.Component);

__WEBPACK_IMPORTED_MODULE_3_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(Component, null), document.getElementById("__react-content"));

/***/ }),

/***/ 415:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

},[413]);
//# sourceMappingURL=Search.js.map