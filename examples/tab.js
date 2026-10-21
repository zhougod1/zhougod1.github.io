webpackJsonp([4],{

/***/ 422:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(423);


/***/ }),

/***/ 423:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_fantd_src_tab_style_index_less__ = __webpack_require__(424);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_fantd_src_tab_style_index_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_fantd_src_tab_style_index_less__);
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





var Button = __WEBPACK_IMPORTED_MODULE_1_fantd__["h" /* Tab */].Button;

var Component = function (_React$Component) {
    _inherits(Component, _React$Component);

    function Component() {
        _classCallCheck(this, Component);

        return _possibleConstructorReturn(this, (Component.__proto__ || Object.getPrototypeOf(Component)).apply(this, arguments));
    }

    _createClass(Component, [{
        key: 'render',
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                'div',
                null,
                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_fantd__["h" /* Tab */],
                    { size: 'small' },
                    __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                        Button,
                        { value: '1' },
                        '1'
                    ),
                    __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                        Button,
                        { value: '2' },
                        '2'
                    )
                ),
                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement('br', null),
                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement('br', null),
                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_fantd__["h" /* Tab */],
                    null,
                    __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                        Button,
                        { value: '1' },
                        '1'
                    ),
                    __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                        Button,
                        { value: '2' },
                        '2'
                    )
                ),
                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement('br', null),
                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement('br', null),
                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_fantd__["h" /* Tab */],
                    { size: 'large' },
                    __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                        Button,
                        { value: '1' },
                        '1'
                    ),
                    __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                        Button,
                        { value: '2' },
                        '2'
                    )
                ),
                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement('br', null),
                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement('br', null),
                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_fantd__["h" /* Tab */],
                    { disabled: true, value: '2' },
                    __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                        Button,
                        { value: '1' },
                        '1'
                    ),
                    __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                        Button,
                        { value: '2' },
                        '2'
                    )
                ),
                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement('br', null),
                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement('br', null),
                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_fantd__["h" /* Tab */],
                    { size: 'small', disabled: true, value: '2' },
                    __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                        Button,
                        { value: '1' },
                        '1'
                    ),
                    __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                        Button,
                        { value: '2' },
                        '2'
                    )
                ),
                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement('br', null),
                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement('br', null),
                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_fantd__["h" /* Tab */],
                    { size: 'large', disabled: true, value: '2' },
                    __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                        Button,
                        { value: '1' },
                        '1'
                    ),
                    __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                        Button,
                        { value: '2' },
                        '2'
                    )
                ),
                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement('br', null),
                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement('br', null),
                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_fantd__["h" /* Tab */],
                    { size: 'large' },
                    __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                        Button,
                        { value: '1', style: { width: 100 } },
                        '11111111111111111111111111111'
                    ),
                    __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                        Button,
                        { value: '2', style: { width: 100 } },
                        '2'
                    )
                )
            );
        }
    }]);

    return Component;
}(__WEBPACK_IMPORTED_MODULE_2_react___default.a.Component);

__WEBPACK_IMPORTED_MODULE_3_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(Component, null), document.getElementById('__react-content'));

/***/ }),

/***/ 424:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

},[422]);
//# sourceMappingURL=tab.js.map