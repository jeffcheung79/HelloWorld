"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/counters.js":
/*!********************************!*\
  !*** ./components/counters.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _counter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./counter */ \"./components/counter.js\");\n/* harmony import */ var _pages_app_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/_app.js */ \"./pages/_app.js\");\n\n\n\n\nclass Counters extends (react__WEBPACK_IMPORTED_MODULE_1___default().Component) {\n    refreshPage() {\n        window.location.reload();\n    }\n    render() {\n        const { onReset , counters , onDelete , onIncrement , onDecrement  } = this.props;\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"button-box\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                    class: \"fa fa-shopping-cart\",\n                    \"aria-hidden\": \"true\",\n                    children: [\n                        \"   \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            children: \" \"\n                        }, void 0, false, {\n                            fileName: \"/Users/jeffsmacbook/HelloWorld/components/counters.js\",\n                            lineNumber: 18,\n                            columnNumber: 55\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"idcount\",\n                            children: \"0\"\n                        }, void 0, false, {\n                            fileName: \"/Users/jeffsmacbook/HelloWorld/components/counters.js\",\n                            lineNumber: 18,\n                            columnNumber: 69\n                        }, this),\n                        \"  Items\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/jeffsmacbook/HelloWorld/components/counters.js\",\n                    lineNumber: 18,\n                    columnNumber: 1\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                    fileName: \"/Users/jeffsmacbook/HelloWorld/components/counters.js\",\n                    lineNumber: 19,\n                    columnNumber: 5\n                }, this),\n                \"        \",\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                    fileName: \"/Users/jeffsmacbook/HelloWorld/components/counters.js\",\n                    lineNumber: 19,\n                    columnNumber: 19\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: onReset,\n                    className: \"reset\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                        class: \"fa fa-redo\",\n                        \"aria-hidden\": \"true\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jeffsmacbook/HelloWorld/components/counters.js\",\n                        lineNumber: 21,\n                        columnNumber: 53\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/jeffsmacbook/HelloWorld/components/counters.js\",\n                    lineNumber: 21,\n                    columnNumber: 7\n                }, this),\n                \"    \",\n                \"      \",\n                \"    \",\n                \"      \",\n                \"    \",\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: ()=>window.location.reload(),\n                    className: \"reload\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                        class: \"fa fa-recycle\",\n                        \"aria-hidden\": \"true\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jeffsmacbook/HelloWorld/components/counters.js\",\n                        lineNumber: 25,\n                        columnNumber: 76\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/jeffsmacbook/HelloWorld/components/counters.js\",\n                    lineNumber: 25,\n                    columnNumber: 7\n                }, this),\n                counters.map((counter)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_counter__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        onDelete: onDelete,\n                        onIncrement: onIncrement,\n                        onDecrement: onDecrement,\n                        counter: counter\n                    }, counter.id, false, {\n                        fileName: \"/Users/jeffsmacbook/HelloWorld/components/counters.js\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, this))\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/jeffsmacbook/HelloWorld/components/counters.js\",\n            lineNumber: 16,\n            columnNumber: 7\n        }, this);\n    }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Counters);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2NvdW50ZXJzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUEwQjtBQUNNO0FBQ1A7QUFJekIsTUFBTUUsaUJBQWlCRix3REFBZTtJQUVwQ0ksY0FBYztRQUNaQyxPQUFPQyxRQUFRLENBQUNDLE1BQU07SUFDeEI7SUFDQUMsU0FBUTtRQUNOLE1BQU0sRUFBQ0MsUUFBTyxFQUFDQyxTQUFRLEVBQUNDLFNBQVEsRUFBQ0MsWUFBVyxFQUFDQyxZQUFXLEVBQUMsR0FBRyxJQUFJLENBQUNDLEtBQUs7UUFFdEUscUJBQ0UsOERBQUNDO1lBQUlDLFdBQVU7OzhCQUVyQiw4REFBQ0M7b0JBQUVDLE9BQU07b0JBQXNCQyxlQUFZOzt3QkFBUTtzQ0FBRyw4REFBQ0M7c0NBQUs7Ozs7OztzQ0FBUSw4REFBQ0E7NEJBQUtKLFdBQVU7c0NBQVU7Ozs7Ozt3QkFBUTs7Ozs7Ozs4QkFDbEcsOERBQUNLOzs7OztnQkFBSzs4QkFBUSw4REFBQ0E7Ozs7OzhCQUViLDhEQUFDQztvQkFBT0MsU0FBV2Q7b0JBQVFPLFdBQVU7OEJBQVMsNEVBQUNDO3dCQUFFQyxPQUFNO3dCQUFhQyxlQUFZOzs7Ozs7Ozs7OztnQkFDL0U7Z0JBQU87Z0JBQU87Z0JBQU87Z0JBQU87OEJBRzdCLDhEQUFDRztvQkFBT0MsU0FBUyxJQUFNbEIsT0FBT0MsUUFBUSxDQUFDQyxNQUFNO29CQUFJUyxXQUFVOzhCQUFVLDRFQUFDQzt3QkFBRUMsT0FBTTt3QkFBZ0JDLGVBQVk7Ozs7Ozs7Ozs7O2dCQUN6R1QsU0FBU2MsR0FBRyxDQUFDQyxDQUFBQSx3QkFDWiw4REFBQ3hCLGdEQUFPQTt3QkFFUlUsVUFBWUE7d0JBQ1pDLGFBQWVBO3dCQUNmQyxhQUFlQTt3QkFDZlksU0FBV0E7dUJBSkhBLFFBQVFDLEVBQUU7Ozs7Ozs7Ozs7O0lBVXhCO0FBTUY7QUFFQSwrREFBZXhCLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb3VudGVycy5qcz9lMjhiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQ291bnRlciBmcm9tICcuL2NvdW50ZXInO1xuaW1wb3J0ICcuLi9wYWdlcy9fYXBwLmpzJ1xuXG5cblxuY2xhc3MgQ291bnRlcnMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG5cbiAgcmVmcmVzaFBhZ2UoKSB7XG4gICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICB9XG4gIHJlbmRlcigpe1xuICAgIGNvbnN0IHtvblJlc2V0LGNvdW50ZXJzLG9uRGVsZXRlLG9uSW5jcmVtZW50LG9uRGVjcmVtZW50fSA9IHRoaXMucHJvcHM7XG4gIFxuICAgIHJldHVybihcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdidXR0b24tYm94Jz5cblxuPGkgY2xhc3M9XCJmYSBmYS1zaG9wcGluZy1jYXJ0XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgPiAgIDxzcGFuPiA8L3NwYW4+PHNwYW4gY2xhc3NOYW1lPSdpZGNvdW50Jz4wPC9zcGFuPiAgSXRlbXNcbjwvaT48YnIgLz4gICAgICAgIDxicj48L2JyPlxuXG4gICAgICA8YnV0dG9uIG9uQ2xpY2sgPSB7b25SZXNldH1jbGFzc05hbWU9XCJyZXNldFwiID48aSBjbGFzcz1cImZhIGZhLXJlZG9cIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+PC9idXR0b24+XG4gICAgICB7XCIgICAgXCJ9ICAgICAge1wiICAgIFwifSAgICAgIHtcIiAgICBcIn1cblxuXG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKX0gY2xhc3NOYW1lPVwicmVsb2FkXCIgPjxpIGNsYXNzPVwiZmEgZmEtcmVjeWNsZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT48L2J1dHRvbj5cbiAgICAgIHtjb3VudGVycy5tYXAoY291bnRlciA9PlxuICAgICAgICA8Q291bnRlclxuICAgICAgICAga2V5ID0ge2NvdW50ZXIuaWR9XG4gICAgICAgIG9uRGVsZXRlID0ge29uRGVsZXRlfVxuICAgICAgICBvbkluY3JlbWVudCA9IHtvbkluY3JlbWVudH1cbiAgICAgICAgb25EZWNyZW1lbnQgPSB7b25EZWNyZW1lbnR9XG4gICAgICAgIGNvdW50ZXIgPSB7Y291bnRlcn1cbiAgICAgICAgLz4pfVxuICAgICAgICBcbiAgICAgICBcbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbiAgLy8gZm9ybWF0Q291bnQoKSB7XG4gIC8vICAgY29uc3Qge3ZhbHVlIH0gPSB0aGlzLnByb3BzLmNvdW50ZXI7XG4gIC8vICAgcmV0dXJuIHZhbHVlID09PSAwID8gXCJ6ZXJvXCIgOiB2YWx1ZSA7XG4gIC8vIH1cbiAgXG59XG5cbmV4cG9ydCBkZWZhdWx0IENvdW50ZXJzO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ291bnRlciIsIkNvdW50ZXJzIiwiQ29tcG9uZW50IiwicmVmcmVzaFBhZ2UiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInJlbG9hZCIsInJlbmRlciIsIm9uUmVzZXQiLCJjb3VudGVycyIsIm9uRGVsZXRlIiwib25JbmNyZW1lbnQiLCJvbkRlY3JlbWVudCIsInByb3BzIiwiZGl2IiwiY2xhc3NOYW1lIiwiaSIsImNsYXNzIiwiYXJpYS1oaWRkZW4iLCJzcGFuIiwiYnIiLCJidXR0b24iLCJvbkNsaWNrIiwibWFwIiwiY291bnRlciIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/counters.js\n"));

/***/ })

});