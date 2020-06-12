webpackHotUpdate("static/development/pages/comment.js",{

/***/ "./pages/comment.js":
/*!**************************!*\
  !*** ./pages/comment.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Comment; });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\nvar _jsxFileName = \"/home/wonde/Desktop/NextJs/pages/comment.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;\n\n\nfunction Comment(_ref) {\n  var _this = this;\n\n  var singlePost = _ref.singlePost;\n  return __jsx(\"ul\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 5\n    }\n  }, singlePost.map(function (comm) {\n    var _ref2;\n\n    return __jsx(\"li\", {\n      key: comm.id,\n      style: (_ref2 = {\n        border: \"1px solid #22f4f4\",\n        margin: \"10px  auto\",\n        padding: \"10px\",\n        color: \"black\",\n        width: \"80%\"\n      }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_ref2, \"margin\", \"\"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_ref2, \"listStyle\", \"none\"), _ref2),\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 8,\n        columnNumber: 9\n      }\n    }, __jsx(\"h3\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 11\n      }\n    }, comm.email), __jsx(\"p\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 11\n      }\n    }, \" \", comm.name), __jsx(\"p\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 11\n      }\n    }, \" \", comm.body));\n  }));\n}\n_c = Comment;\n\nComment.getInitialProps = /*#__PURE__*/function () {\n  var _ref4 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref3) {\n    var query, id, comment, data;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            query = _ref3.query;\n            id = query.id;\n            _context.next = 4;\n            return axios__WEBPACK_IMPORTED_MODULE_4___default.a.get(\"https://jsonplaceholder.typicode.com/comments?postId=\".concat(id));\n\n          case 4:\n            comment = _context.sent;\n            data = comment.data;\n            return _context.abrupt(\"return\", {\n              singlePost: data\n            });\n\n          case 7:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function (_x) {\n    return _ref4.apply(this, arguments);\n  };\n}();\n\nvar _c;\n\n$RefreshReg$(_c, \"Comment\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jb21tZW50LmpzP2ZmMjEiXSwibmFtZXMiOlsiQ29tbWVudCIsInNpbmdsZVBvc3QiLCJtYXAiLCJjb21tIiwiaWQiLCJib3JkZXIiLCJtYXJnaW4iLCJwYWRkaW5nIiwiY29sb3IiLCJ3aWR0aCIsImVtYWlsIiwibmFtZSIsImJvZHkiLCJnZXRJbml0aWFsUHJvcHMiLCJxdWVyeSIsImF4aW9zIiwiZ2V0IiwiY29tbWVudCIsImRhdGEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFZSxTQUFTQSxPQUFULE9BQWlDO0FBQUE7O0FBQUEsTUFBZEMsVUFBYyxRQUFkQSxVQUFjO0FBQzlDLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHQSxVQUFVLENBQUNDLEdBQVgsQ0FBZSxVQUFDQyxJQUFEO0FBQUE7O0FBQUEsV0FDZDtBQUNFLFNBQUcsRUFBRUEsSUFBSSxDQUFDQyxFQURaO0FBRUUsV0FBSztBQUNIQyxjQUFNLEVBQUUsbUJBREw7QUFFSEMsY0FBTSxFQUFFLFlBRkw7QUFHSEMsZUFBTyxFQUFFLE1BSE47QUFJSEMsYUFBSyxFQUFFLE9BSko7QUFLSEMsYUFBSyxFQUFFO0FBTEosb0hBTUssRUFOTCxpSEFPUSxNQVBSLFNBRlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQVlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBS04sSUFBSSxDQUFDTyxLQUFWLENBWkYsRUFhRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQUtQLElBQUksQ0FBQ1EsSUFBVixDQWJGLEVBY0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUFLUixJQUFJLENBQUNTLElBQVYsQ0FkRixDQURjO0FBQUEsR0FBZixDQURILENBREY7QUFzQkQ7S0F2QnVCWixPOztBQXlCeEJBLE9BQU8sQ0FBQ2EsZUFBUjtBQUFBLCtMQUEwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBU0MsaUJBQVQsU0FBU0EsS0FBVDtBQUNoQlYsY0FEZ0IsR0FDVFUsS0FEUyxDQUNoQlYsRUFEZ0I7QUFBQTtBQUFBLG1CQUVGVyw0Q0FBSyxDQUFDQyxHQUFOLGdFQUNvQ1osRUFEcEMsRUFGRTs7QUFBQTtBQUVsQmEsbUJBRmtCO0FBS2hCQyxnQkFMZ0IsR0FLUEQsT0FMTyxDQUtoQkMsSUFMZ0I7QUFBQSw2Q0FNakI7QUFBRWpCLHdCQUFVLEVBQUVpQjtBQUFkLGFBTmlCOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQTFCOztBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6Ii4vcGFnZXMvY29tbWVudC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29tbWVudCh7IHNpbmdsZVBvc3QgfSkge1xuICByZXR1cm4gKFxuICAgIDx1bD5cbiAgICAgIHtzaW5nbGVQb3N0Lm1hcCgoY29tbSkgPT4gKFxuICAgICAgICA8bGlcbiAgICAgICAgICBrZXk9e2NvbW0uaWR9XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIGJvcmRlcjogXCIxcHggc29saWQgIzIyZjRmNFwiLFxuICAgICAgICAgICAgbWFyZ2luOiBcIjEwcHggIGF1dG9cIixcbiAgICAgICAgICAgIHBhZGRpbmc6IFwiMTBweFwiLFxuICAgICAgICAgICAgY29sb3I6IFwiYmxhY2tcIixcbiAgICAgICAgICAgIHdpZHRoOiBcIjgwJVwiLFxuICAgICAgICAgICAgbWFyZ2luOiBcIlwiLFxuICAgICAgICAgICAgbGlzdFN0eWxlOiBcIm5vbmVcIixcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPGgzPntjb21tLmVtYWlsfTwvaDM+XG4gICAgICAgICAgPHA+IHtjb21tLm5hbWV9PC9wPlxuICAgICAgICAgIDxwPiB7Y29tbS5ib2R5fTwvcD5cbiAgICAgICAgPC9saT5cbiAgICAgICkpfVxuICAgIDwvdWw+XG4gICk7XG59XG5cbkNvbW1lbnQuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKHsgcXVlcnkgfSkgPT4ge1xuICBjb25zdCB7IGlkIH0gPSBxdWVyeTtcbiAgY29uc3QgY29tbWVudCA9IGF3YWl0IGF4aW9zLmdldChcbiAgICBgaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL2NvbW1lbnRzP3Bvc3RJZD0ke2lkfWBcbiAgKTtcbiAgY29uc3QgeyBkYXRhIH0gPSBjb21tZW50O1xuICByZXR1cm4geyBzaW5nbGVQb3N0OiBkYXRhIH07XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/comment.js\n");

/***/ })

})