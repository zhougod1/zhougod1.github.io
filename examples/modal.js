webpackJsonp([0],{

/***/ 405:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(406);


/***/ }),

/***/ 406:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_fantd_src_modal_style_index_less__ = __webpack_require__(407);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_fantd_src_modal_style_index_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_fantd_src_modal_style_index_less__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_fantd_src_modal_style_confirm_less__ = __webpack_require__(408);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_fantd_src_modal_style_confirm_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_fantd_src_modal_style_confirm_less__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_fantd_src_modal_style_notice_less__ = __webpack_require__(409);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_fantd_src_modal_style_notice_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_fantd_src_modal_style_notice_less__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_fantd__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_dom__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_dom__);
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

        _this.showModal = function () {
            _this.setState({
                visible: true
            });
        };

        _this.handleOk = function () {
            _this.setState({
                visible: false
            });
        };

        _this.handleCancel = function () {
            _this.setState({
                visible: false
            });
        };

        _this.showConfirm = function () {
            __WEBPACK_IMPORTED_MODULE_4_fantd__["c" /* Modal */].confirm({
                title: "哈哈哈",
                content: "该小区不是你的责任盘，仅能暂存，若30分钟内没有责任盘的经纪人录入该房源，则可以提交申请！",
                onOk: function onOk() {
                    console.log("点击了确定");
                },
                onCancel: function onCancel() {
                    console.log("点击了取消");
                }
            });
        };

        _this.showInfo = function () {
            __WEBPACK_IMPORTED_MODULE_4_fantd__["c" /* Modal */].info({
                title: "哈哈哈",
                content: "该小区不是你的责任盘，仅能暂存，若30分钟内没有责任盘的经纪人录入该房源，则可以提交申请！",
                onOk: function onOk() {
                    console.log("点击了确定");
                },
                onCancel: function onCancel() {
                    console.log("点击了取消");
                }
            });
        };

        _this.showSuccess = function () {
            __WEBPACK_IMPORTED_MODULE_4_fantd__["c" /* Modal */].success({ content: "该小区不是你的责任盘，仅能暂存", duration: 100, className: 'modal-wrap' });
        };

        _this.showError = function () {
            __WEBPACK_IMPORTED_MODULE_4_fantd__["c" /* Modal */].error({ content: "错误" });
        };

        _this.showWarn = function () {
            __WEBPACK_IMPORTED_MODULE_4_fantd__["c" /* Modal */].warn({ content: "警告" });
        };

        _this.showLoading = function () {
            __WEBPACK_IMPORTED_MODULE_4_fantd__["c" /* Modal */].loading({ content: "正在加载应用", duration: 100 });
        };

        _this.state = {
            visible: false
        };
        return _this;
    }

    _createClass(Component, [{
        key: 'render',
        value: function render() {
            var visible = this.state.visible;


            return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
                'div',
                null,
                __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
                    'div',
                    { onClick: this.showModal, style: { cursor: "pointer", fontSize: "14px", marginBottom: "20px" } },
                    __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
                        'bold',
                        null,
                        '\u70B9\u51FB\u5C55\u73B0\u666E\u901A\u5F39\u6846'
                    )
                ),
                __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
                    'div',
                    { onClick: this.showConfirm, style: { cursor: "pointer", fontSize: "14px", marginBottom: "20px" } },
                    __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
                        'bold',
                        null,
                        '\u70B9\u51FB\u5C55\u73B0\u786E\u8BA4\u53D6\u6D88\u6846'
                    )
                ),
                __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
                    'div',
                    { onClick: this.showInfo, style: { cursor: "pointer", fontSize: "14px", marginBottom: "20px" } },
                    __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
                        'bold',
                        null,
                        '\u70B9\u51FB\u5C55\u73B0\u786E\u8BA4\u6846'
                    )
                ),
                __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
                    'div',
                    { onClick: this.showSuccess, style: { cursor: "pointer", fontSize: "14px", marginBottom: "20px" } },
                    __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
                        'bold',
                        null,
                        '\u70B9\u51FB\u5C55\u73B0\u6210\u529F\u63D0\u793A'
                    )
                ),
                __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
                    'div',
                    { onClick: this.showError, style: { cursor: "pointer", fontSize: "14px", marginBottom: "20px" } },
                    __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
                        'bold',
                        null,
                        '\u70B9\u51FB\u5C55\u73B0\u5931\u8D25\u63D0\u793A'
                    )
                ),
                __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
                    'div',
                    { onClick: this.showWarn, style: { cursor: "pointer", fontSize: "14px", marginBottom: "20px" } },
                    __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
                        'bold',
                        null,
                        '\u70B9\u51FB\u5C55\u73B0\u8B66\u544A\u63D0\u793A'
                    )
                ),
                __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
                    'div',
                    { onClick: this.showLoading, style: { cursor: "pointer", fontSize: "14px", marginBottom: "20px" } },
                    __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
                        'bold',
                        null,
                        '\u70B9\u51FB\u5C55\u73B0\u52A0\u8F7D\u63D0\u793A'
                    )
                ),
                __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_4_fantd__["c" /* Modal */],
                    {
                        title: '\u5C0F\u6846\u6846',
                        visible: visible,
                        onOk: this.handleOk,
                        onCancel: this.handleCancel,
                        width: 520
                        // wrapClass="a"
                        // getContainer={() => this.refs.modal}
                    },
                    __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
                        'div',
                        { style: { textAlign: 'center', fontSize: "16px", padding: "20px" } },
                        '1.\u98DF\u7528\u65B9\u5F0F\u548Cantd\u7684modal\u4E00\u6837',
                        __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement('br', null),
                        '2.width\u662F\u6A21\u6001\u6846\u7684\u5BBD\u5EA6, \u9ED8\u8BA4\u4E3A444',
                        __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement('br', null),
                        '3.onOk\u662F\u53F3\u8FB9\u70B9\u51FB\u7684\u56DE\u8C03, \u9ED8\u8BA4\u4E3Anull',
                        __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement('br', null),
                        '4.onCancel\u662F\u5DE6\u8FB9\u70B9\u51FB\u7684\u56DE\u8C03, \u9ED8\u8BA4\u4E3Anull',
                        __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement('br', null),
                        '5.okText\u662F\u53F3\u8FB9\u7684\u6587\u5B57\uFF0C\u4E5F\u53EF\u4F20\u9012\u7EC4\u4EF6\u8FDB\u53BB\u8FDB\u884C\u63A7\u5236, \u9ED8\u8BA4\u4E3A\u4FDD\u5B58',
                        __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement('br', null),
                        '6.cancelText\u662F\u5DE6\u8FB9\u6309\u94AE\u7684\u6587\u5B57, \u4E5F\u53EF\u4F20\u9012\u7EC4\u4EF6\u8FDB\u53BB\u8FDB\u884C\u63A7\u5236, \u9ED8\u8BA4\u4E3A\u5173\u95ED',
                        __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement('br', null),
                        '7.title\u5F53\u7136\u662F\u4E2D\u95F4\u7684\u6807\u9898\u4E86, \u4E5F\u53EF\u4F20\u9012\u7EC4\u4EF6\u8FDB\u53BB\u8FDB\u884C\u63A7\u5236, \u9ED8\u8BA4\u4E3A\u7A7A""',
                        __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement('br', null),
                        '8.maskClosable\u6307\u7684\u662F\u70B9\u51FB\u9634\u5F71\u662F\u5426\u5173\u95ED, \u9ED8\u8BA4\u4E3Atrue',
                        __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement('br', null)
                    )
                )
            );
        }
    }]);

    return Component;
}(__WEBPACK_IMPORTED_MODULE_3_react___default.a.Component);

__WEBPACK_IMPORTED_MODULE_5_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(Component, null), document.getElementById('__react-content'));

/***/ }),

/***/ 407:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 408:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 409:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

},[405]);
//# sourceMappingURL=modal.js.map