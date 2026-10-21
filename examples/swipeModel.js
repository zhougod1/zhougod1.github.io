webpackJsonp([5],{

/***/ 419:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(420);


/***/ }),

/***/ 420:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_fantd_src_swipe_model_style_index_less__ = __webpack_require__(421);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_fantd_src_swipe_model_style_index_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_fantd_src_swipe_model_style_index_less__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_fantd__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_dom__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_dom__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






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
                { style: { width: 400, height: 400 } },
                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_fantd__["g" /* SwipeModel */],
                    {
                        initIndex: 0,
                        getEvent: function getEvent(push, pop) {
                            /*
                            push(1);//右滑动到页面1
                            pop();//左滑回退到上一个页面
                            */

                            setTimeout(function () {
                                push(1);
                                setTimeout(function () {
                                    push(2);
                                    setTimeout(function () {
                                        pop();
                                        setTimeout(function () {
                                            pop();
                                        }, 2000);
                                    }, 2000);
                                }, 2000);
                            }, 2000);
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                        'div',
                        { style: { background: "green", height: "100%" } },
                        '\u9875\u97621'
                    ),
                    __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                        'div',
                        { style: { background: "red", height: "100%" } },
                        '\u9875\u97622'
                    ),
                    __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                        'div',
                        { style: { background: "black", height: "100%" } },
                        '\u9875\u97623'
                    )
                )
            );
        }
    }]);

    return Component;
}(__WEBPACK_IMPORTED_MODULE_2_react___default.a.Component);

__WEBPACK_IMPORTED_MODULE_3_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(Component, null), document.getElementById('__react-content'));

/***/ }),

/***/ 421:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

},[419]);
//# sourceMappingURL=swipeModel.js.map