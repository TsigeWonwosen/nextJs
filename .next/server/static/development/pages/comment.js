module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/comment.js":
/*!**************************!*\
  !*** ./pages/comment.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Comment; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/home/wonde/Desktop/NextJs/pages/comment.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nfunction Comment({\n  singlePost\n}) {\n  return __jsx(\"ul\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 5\n    }\n  }, singlePost.map(comm => __jsx(\"li\", {\n    key: comm.id,\n    style: {\n      border: \"1px solid #22f4f4\",\n      margin: \"10px  auto\",\n      padding: \"10px\",\n      color: \"black\",\n      width: \"80%\",\n      listStyle: \"none\"\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 9\n    }\n  }, __jsx(\"h3\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 11\n    }\n  }, comm.email), __jsx(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 11\n    }\n  }, \" \", comm.name), __jsx(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 11\n    }\n  }, \" \", comm.body))));\n}\n\nComment.getInitialProps = async ({\n  query\n}) => {\n  const {\n    id\n  } = query;\n  const comment = await axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`https://jsonplaceholder.typicode.com/comments?postId=${id}`);\n  const {\n    data\n  } = comment;\n  return {\n    singlePost: data\n  };\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jb21tZW50LmpzP2ZmMjEiXSwibmFtZXMiOlsiQ29tbWVudCIsInNpbmdsZVBvc3QiLCJtYXAiLCJjb21tIiwiaWQiLCJib3JkZXIiLCJtYXJnaW4iLCJwYWRkaW5nIiwiY29sb3IiLCJ3aWR0aCIsImxpc3RTdHlsZSIsImVtYWlsIiwibmFtZSIsImJvZHkiLCJnZXRJbml0aWFsUHJvcHMiLCJxdWVyeSIsImNvbW1lbnQiLCJheGlvcyIsImdldCIsImRhdGEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVlLFNBQVNBLE9BQVQsQ0FBaUI7QUFBRUM7QUFBRixDQUFqQixFQUFpQztBQUM5QyxTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0EsVUFBVSxDQUFDQyxHQUFYLENBQWdCQyxJQUFELElBQ2Q7QUFDRSxPQUFHLEVBQUVBLElBQUksQ0FBQ0MsRUFEWjtBQUVFLFNBQUssRUFBRTtBQUNMQyxZQUFNLEVBQUUsbUJBREg7QUFFTEMsWUFBTSxFQUFFLFlBRkg7QUFHTEMsYUFBTyxFQUFFLE1BSEo7QUFJTEMsV0FBSyxFQUFFLE9BSkY7QUFLTEMsV0FBSyxFQUFFLEtBTEY7QUFNTEMsZUFBUyxFQUFFO0FBTk4sS0FGVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBV0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFLUCxJQUFJLENBQUNRLEtBQVYsQ0FYRixFQVlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBS1IsSUFBSSxDQUFDUyxJQUFWLENBWkYsRUFhRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQUtULElBQUksQ0FBQ1UsSUFBVixDQWJGLENBREQsQ0FESCxDQURGO0FBcUJEOztBQUVEYixPQUFPLENBQUNjLGVBQVIsR0FBMEIsT0FBTztBQUFFQztBQUFGLENBQVAsS0FBcUI7QUFDN0MsUUFBTTtBQUFFWDtBQUFGLE1BQVNXLEtBQWY7QUFDQSxRQUFNQyxPQUFPLEdBQUcsTUFBTUMsNENBQUssQ0FBQ0MsR0FBTixDQUNuQix3REFBdURkLEVBQUcsRUFEdkMsQ0FBdEI7QUFHQSxRQUFNO0FBQUVlO0FBQUYsTUFBV0gsT0FBakI7QUFDQSxTQUFPO0FBQUVmLGNBQVUsRUFBRWtCO0FBQWQsR0FBUDtBQUNELENBUEQiLCJmaWxlIjoiLi9wYWdlcy9jb21tZW50LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb21tZW50KHsgc2luZ2xlUG9zdCB9KSB7XG4gIHJldHVybiAoXG4gICAgPHVsPlxuICAgICAge3NpbmdsZVBvc3QubWFwKChjb21tKSA9PiAoXG4gICAgICAgIDxsaVxuICAgICAgICAgIGtleT17Y29tbS5pZH1cbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgYm9yZGVyOiBcIjFweCBzb2xpZCAjMjJmNGY0XCIsXG4gICAgICAgICAgICBtYXJnaW46IFwiMTBweCAgYXV0b1wiLFxuICAgICAgICAgICAgcGFkZGluZzogXCIxMHB4XCIsXG4gICAgICAgICAgICBjb2xvcjogXCJibGFja1wiLFxuICAgICAgICAgICAgd2lkdGg6IFwiODAlXCIsXG4gICAgICAgICAgICBsaXN0U3R5bGU6IFwibm9uZVwiLFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICA8aDM+e2NvbW0uZW1haWx9PC9oMz5cbiAgICAgICAgICA8cD4ge2NvbW0ubmFtZX08L3A+XG4gICAgICAgICAgPHA+IHtjb21tLmJvZHl9PC9wPlxuICAgICAgICA8L2xpPlxuICAgICAgKSl9XG4gICAgPC91bD5cbiAgKTtcbn1cblxuQ29tbWVudC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoeyBxdWVyeSB9KSA9PiB7XG4gIGNvbnN0IHsgaWQgfSA9IHF1ZXJ5O1xuICBjb25zdCBjb21tZW50ID0gYXdhaXQgYXhpb3MuZ2V0KFxuICAgIGBodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vY29tbWVudHM/cG9zdElkPSR7aWR9YFxuICApO1xuICBjb25zdCB7IGRhdGEgfSA9IGNvbW1lbnQ7XG4gIHJldHVybiB7IHNpbmdsZVBvc3Q6IGRhdGEgfTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/comment.js\n");

/***/ }),

/***/ 3:
/*!********************************!*\
  !*** multi ./pages/comment.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/wonde/Desktop/NextJs/pages/comment.js */"./pages/comment.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiPzcwYzYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiYXhpb3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///axios\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ })

/******/ });