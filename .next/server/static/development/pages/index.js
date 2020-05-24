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

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "./components/Footer.js":
/*!******************************!*\
  !*** ./components/Footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/baijutoms/Documents/Works/Web/next/viska/m-and-m/components/Footer.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const Footer = () => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();

  if (router.pathname === "/") {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null);
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    className: "jsx-547210861" + " " + "footer",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "jsx-547210861" + " " + "container d-md-flex",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-547210861" + " " + "logo",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 11
    }
  }, __jsx("a", {
    href: "#",
    className: "jsx-547210861" + " " + "navbar-brand",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: "/img/logo-black.svg",
    alt: "",
    className: "jsx-547210861",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 15
    }
  }))), __jsx("div", {
    className: "jsx-547210861" + " " + "navigation",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 11
    }
  }, __jsx("h4", {
    className: "jsx-547210861",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }
  }, "Navigation"), __jsx("ul", {
    className: "jsx-547210861" + " " + "navbar-nav",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }
  }, __jsx("li", {
    className: "jsx-547210861" + " " + "nav-item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 15
    }
  }, __jsx("a", {
    href: "#",
    className: "jsx-547210861" + " " + "nav-link",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 17
    }
  }, "Why us?")), __jsx("li", {
    className: "jsx-547210861" + " " + "nav-item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 15
    }
  }, __jsx("a", {
    href: "#",
    className: "jsx-547210861" + " " + "nav-link",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 17
    }
  }, "Products")), __jsx("li", {
    className: "jsx-547210861" + " " + "nav-item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 15
    }
  }, __jsx("a", {
    href: "#",
    className: "jsx-547210861" + " " + "nav-link",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 17
    }
  }, "Customers")), __jsx("li", {
    className: "jsx-547210861" + " " + "nav-item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 15
    }
  }, __jsx("a", {
    href: "#",
    className: "jsx-547210861" + " " + "nav-link",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 17
    }
  }, "Resources")))), __jsx("div", {
    className: "jsx-547210861" + " " + "support",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 11
    }
  }, __jsx("h4", {
    className: "jsx-547210861",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }
  }, "Support"), __jsx("ul", {
    className: "jsx-547210861" + " " + "navbar-nav",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }
  }, __jsx("li", {
    className: "jsx-547210861" + " " + "nav-item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 15
    }
  }, __jsx("a", {
    href: "#",
    className: "jsx-547210861" + " " + "nav-link",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 17
    }
  }, "Technical Support")), __jsx("li", {
    className: "jsx-547210861" + " " + "nav-item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 15
    }
  }, __jsx("a", {
    href: "#",
    className: "jsx-547210861" + " " + "nav-link",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 17
    }
  }, "Professional Services")), __jsx("li", {
    className: "jsx-547210861" + " " + "nav-item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 15
    }
  }, __jsx("a", {
    href: "#",
    className: "jsx-547210861" + " " + "nav-link",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 17
    }
  }, "Customer Support"))))), __jsx("div", {
    className: "jsx-547210861" + " " + "container social",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 9
    }
  }, __jsx("h4", {
    className: "jsx-547210861",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 11
    }
  }, "Follow us"), __jsx("div", {
    className: "jsx-547210861" + " " + "d-flex",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 11
    }
  }, __jsx("a", {
    href: "#",
    className: "jsx-547210861" + " " + "follow",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: "/img/facebook.svg",
    alt: "",
    className: "jsx-547210861",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 15
    }
  })), __jsx("a", {
    href: "#",
    className: "jsx-547210861" + " " + "follow",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: "/img/linked-in.svg",
    alt: "",
    className: "jsx-547210861",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 15
    }
  })), __jsx("a", {
    href: "#",
    className: "jsx-547210861" + " " + "follow",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: "/img/youtube.svg",
    alt: "",
    className: "jsx-547210861",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 15
    }
  }))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "547210861",
    __self: undefined
  }, ".footer.jsx-547210861{background:#ffdb00;padding:90px 0 150px 0;}.footer.jsx-547210861 .container.jsx-547210861{width:calc(100vw - 100px);max-width:1300px;margin:0 auto;}@media (max-width:768px){.footer.jsx-547210861 .container.jsx-547210861{max-width:calc(100vw - 55px);}}.footer.jsx-547210861 .container.jsx-547210861 .logo.jsx-547210861{margin-right:210px;margin-bottom:30px;}@media (max-width:840px){.footer.jsx-547210861 .container.jsx-547210861 .logo.jsx-547210861{margin-right:60px;}}.footer.jsx-547210861 .container.jsx-547210861 .navigation.jsx-547210861{margin-right:130px;margin-bottom:30px;}@media (max-width:840px){.footer.jsx-547210861 .container.jsx-547210861 .navigation.jsx-547210861{margin-right:60px;}}.footer.jsx-547210861 .container.jsx-547210861 h4.jsx-547210861{color:#221f20;opacity:0.3;font-size:14px;font-family:\"Apercu Regular\";}.footer.jsx-547210861 .container.jsx-547210861 ul.jsx-547210861 li.jsx-547210861 a.jsx-547210861{font-family:\"Apercu Bold\";font-size:18px;color:#221f20;opacity:1;-webkit-text-decoration:none;text-decoration:none;-webkit-transition:all time;-moz-transition:all 0.5s;-ms-transition:all 0.5s;-o-transition:all 0.5s;-webkit-transition:all 0.5s;transition:all 0.5s;position:relative;}.footer.jsx-547210861 .container.jsx-547210861 ul.jsx-547210861 li.jsx-547210861 a.jsx-547210861:after{content:\"\";position:absolute;left:0;bottom:0;width:0;height:2px;background:#221f20;-webkit-transition:width 0.5s ease-in;-moz-transition:width 0.5s ease-in;-ms-transition:width 0.5s ease-in;-o-transition:width 0.5s ease-in;-webkit-transition:width 0.5s ease-in;transition:width 0.5s ease-in;}.footer.jsx-547210861 .container.jsx-547210861 ul.jsx-547210861 li.jsx-547210861 a.jsx-547210861:hover.jsx-547210861:after{width:100%;}.footer.jsx-547210861 .social.jsx-547210861{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;}@media (max-width:768px){.footer.jsx-547210861 .social.jsx-547210861{display:block;}}.footer.jsx-547210861 .social.jsx-547210861 h4.jsx-547210861{margin-right:12px;}@media (max-width:768px){.footer.jsx-547210861 .social.jsx-547210861 h4.jsx-547210861{margin-top:30px;}}.footer.jsx-547210861 .social.jsx-547210861 .follow.jsx-547210861{width:40px;height:40px;border:1px solid rgba(34,31,32,0.2);-webkit-border-radius:20px;-moz-border-radius:20px;border-radius:20px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;margin-left:12px;position:relative;}@media (max-width:768px){.footer.jsx-547210861 .social.jsx-547210861 .follow.jsx-547210861{margin-left:0;margin-right:20px;}}.footer.jsx-547210861 .social.jsx-547210861 .follow.jsx-547210861:after,.footer.jsx-547210861 .social.jsx-547210861 .follow.jsx-547210861:before{content:\"\";position:absolute;left:-1px;top:-1px;width:40px;height:40px;border:1px solid rgba(34,31,32,0.2);-webkit-border-radius:20px;-moz-border-radius:20px;border-radius:20px;}.footer.jsx-547210861 .social.jsx-547210861 .follow.jsx-547210861:hover.jsx-547210861:after{-webkit-transition:all 0.5s ease-in;-moz-transition:all 0.5s ease-in;-ms-transition:all 0.5s ease-in;-o-transition:all 0.5s ease-in;-webkit-transition:all 0.5s ease-in;transition:all 0.5s ease-in;-webkit-transform:scale(1.75);-moz-transform:scale(1.75);-ms-transform:scale(1.75);-o-transform:scale(1.75);-webkit-transform:scale(1.75);-ms-transform:scale(1.75);transform:scale(1.75);opacity:0;}.footer.jsx-547210861 .social.jsx-547210861 .follow.jsx-547210861:hover.jsx-547210861:before{-webkit-transition:all 0.5s ease-in 0.25s;-moz-transition:all 0.5s ease-in 0.25s;-ms-transition:all 0.5s ease-in 0.25s;-o-transition:all 0.5s ease-in 0.25s;-webkit-transition:all 0.5s ease-in 0.25s;transition:all 0.5s ease-in 0.25s;-webkit-transform:scale(1.75);-moz-transform:scale(1.75);-ms-transform:scale(1.75);-o-transform:scale(1.75);-webkit-transform:scale(1.75);-ms-transform:scale(1.75);transform:scale(1.75);opacity:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9iYWlqdXRvbXMvRG9jdW1lbnRzL1dvcmtzL1dlYi9uZXh0L3Zpc2thL20tYW5kLW0vY29tcG9uZW50cy9Gb290ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUZrQixBQUVzQixBQUdTLEFBS08sQUFFWixBQUlHLEFBRUgsQUFJRyxBQUVSLEFBS1ksQUFZYixBQWFBLEFBRUYsQUFLSyxBQUVFLEFBR0UsQUFFVCxBQWFPLEFBR0wsQUFXeUIsQUFZTSxXQWpFeEIsQUFZTixBQWVGLEFBZ0JRLEdBNURSLEFBb0NLLEFBcUJLLEVBaEJELEVBbERFLEFBTUEsQUF5Q0osQ0E1REEsQUFVQSxBQU1BLElBbURvQixHQWhFeEIsQUFvQkEsQUFJQSxHQXBCaUIsQUFpQ3ZCLEFBMkNHLEdBSlcsSUF0Q1osQUFvRHdCLEVBbkZmLEFBTUEsQ0FvRVQsRUE1RGtCLEFBSWYsQ0E1Qk0sQUF5R3FCLENBckc3QixFQXNDRixHQTJDRyxLQTFDQSxFQWRILEVBekJHLEVBZ0VjLEFBa0JiLEtBMUNPLENBZEEsSUFnRWEsQ0F0RUosQ0ErRFcsR0FqQ3hCLE9Bb0R1QixFQTdEQSxHQXdCaEIsZUEwQlMsTUFQSixHQWxCVixLQXZDUyxJQTRFVyxFQTdERixRQXlCeEIsR0F5QmlCLEVBUEosU0F6REQsYUFlVyxBQTZEQSxFQWxCZixTQW5DRSxDQXRCQyxTQXlERixhQTFDYSxFQWRaLElBK0RTLE9BekJiLFlBckNDLFFBY1ksR0FpREgsTUFXRyxxQkFWSixTQVdDLENBMUVYLENBbUJNLGVBNkNHLEVBaEVSLFFBMkVTLEVBOURLLEtBd0JWLFFBNEJDLFdBV0cseUJBQ0gsMENBWFosVUFBQyxHQTVCSSxpQkFDQyxNQXVDTixVQUFDLEVBdkNNIiwiZmlsZSI6Ii9Vc2Vycy9iYWlqdXRvbXMvRG9jdW1lbnRzL1dvcmtzL1dlYi9uZXh0L3Zpc2thL20tYW5kLW0vY29tcG9uZW50cy9Gb290ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcblxuY29uc3QgRm9vdGVyID0gKCkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICBpZiAocm91dGVyLnBhdGhuYW1lID09PSBcIi9cIikge1xuICAgIHJldHVybiA8PjwvPjtcbiAgfVxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3RlclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBkLW1kLWZsZXhcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ29cIj5cbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdmJhci1icmFuZFwiIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltZy9sb2dvLWJsYWNrLnN2Z1wiIGFsdD1cIlwiIC8+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgey8qIC5sb2dvICovfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2aWdhdGlvblwiPlxuICAgICAgICAgICAgPGg0Pk5hdmlnYXRpb248L2g0PlxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdmJhci1uYXZcIj5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJuYXYtbGlua1wiPlxuICAgICAgICAgICAgICAgICAgV2h5IHVzP1xuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJuYXYtbGlua1wiPlxuICAgICAgICAgICAgICAgICAgUHJvZHVjdHNcbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwibmF2LWxpbmtcIj5cbiAgICAgICAgICAgICAgICAgIEN1c3RvbWVyc1xuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJuYXYtbGlua1wiPlxuICAgICAgICAgICAgICAgICAgUmVzb3VyY2VzXG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB7LyogLm5hdmlnYXRpb24gKi99XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdXBwb3J0XCI+XG4gICAgICAgICAgICA8aDQ+U3VwcG9ydDwvaDQ+XG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2YmFyLW5hdlwiPlxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cIm5hdi1saW5rXCI+XG4gICAgICAgICAgICAgICAgICBUZWNobmljYWwgU3VwcG9ydFxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJuYXYtbGlua1wiPlxuICAgICAgICAgICAgICAgICAgUHJvZmVzc2lvbmFsIFNlcnZpY2VzXG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cIm5hdi1saW5rXCI+XG4gICAgICAgICAgICAgICAgICBDdXN0b21lciBTdXBwb3J0XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB7LyogLnN1cHBvcnQgKi99XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBzb2NpYWxcIj5cbiAgICAgICAgICA8aDQ+Rm9sbG93IHVzPC9oND5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleFwiPlxuICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJmb2xsb3dcIj5cbiAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1nL2ZhY2Vib29rLnN2Z1wiIGFsdD1cIlwiIC8+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImZvbGxvd1wiPlxuICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWcvbGlua2VkLWluLnN2Z1wiIGFsdD1cIlwiIC8+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImZvbGxvd1wiPlxuICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWcveW91dHViZS5zdmdcIiBhbHQ9XCJcIiAvPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuZm9vdGVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZkYjAwO1xuICAgICAgICAgIHBhZGRpbmc6IDkwcHggMCAxNTBweCAwO1xuICAgICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgICAgd2lkdGg6IGNhbGMoMTAwdncgLSAxMDBweCk7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDEzMDBweDtcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICAgICAgICAgIG1heC13aWR0aDogY2FsYygxMDB2dyAtIDU1cHgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmxvZ28ge1xuICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDIxMHB4O1xuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogODQwcHgpIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDYwcHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5uYXZpZ2F0aW9uIHtcbiAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMzBweDtcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDg0MHB4KSB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA2MHB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBoNCB7XG4gICAgICAgICAgICAgIGNvbG9yOiAjMjIxZjIwO1xuICAgICAgICAgICAgICBvcGFjaXR5OiAwLjM7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiQXBlcmN1IFJlZ3VsYXJcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHVsIHtcbiAgICAgICAgICAgICAgbGkge1xuICAgICAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiQXBlcmN1IEJvbGRcIjtcbiAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMjIxZjIwO1xuICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIHRpbWU7XG4gICAgICAgICAgICAgICAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjVzO1xuICAgICAgICAgICAgICAgICAgLW1zLXRyYW5zaXRpb246IGFsbCAwLjVzO1xuICAgICAgICAgICAgICAgICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNXM7XG4gICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC41cztcbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICY6YWZ0ZXIge1xuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDA7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMnB4O1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMjIxZjIwO1xuICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IHdpZHRoIDAuNXMgZWFzZS1pbjtcbiAgICAgICAgICAgICAgICAgICAgLW1vei10cmFuc2l0aW9uOiB3aWR0aCAwLjVzIGVhc2UtaW47XG4gICAgICAgICAgICAgICAgICAgIC1tcy10cmFuc2l0aW9uOiB3aWR0aCAwLjVzIGVhc2UtaW47XG4gICAgICAgICAgICAgICAgICAgIC1vLXRyYW5zaXRpb246IHdpZHRoIDAuNXMgZWFzZS1pbjtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogd2lkdGggMC41cyBlYXNlLWluO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgJjpob3ZlcjphZnRlciB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICAuc29jaWFsIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGg0IHtcbiAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xuICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZm9sbG93IHtcbiAgICAgICAgICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICAgICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgzNCwgMzEsIDMyLCAwLjIpO1xuICAgICAgICAgICAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgICAgICAgICAgIC1tb3otYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMnB4O1xuICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAmOmFmdGVyLFxuICAgICAgICAgICAgICAmOmJlZm9yZSB7XG4gICAgICAgICAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgbGVmdDogLTFweDtcbiAgICAgICAgICAgICAgICB0b3A6IC0xcHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMzQsIDMxLCAzMiwgMC4yKTtcbiAgICAgICAgICAgICAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgICAgICAgICAgICAgLW1vei1ib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgJjpob3ZlcjphZnRlciB7XG4gICAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluO1xuICAgICAgICAgICAgICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbjtcbiAgICAgICAgICAgICAgICAtbXMtdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbjtcbiAgICAgICAgICAgICAgICAtby10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluO1xuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW47XG4gICAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuNzUpO1xuICAgICAgICAgICAgICAgIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgxLjc1KTtcbiAgICAgICAgICAgICAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgxLjc1KTtcbiAgICAgICAgICAgICAgICAtby10cmFuc2Zvcm06IHNjYWxlKDEuNzUpO1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS43NSk7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAmOmhvdmVyOmJlZm9yZSB7XG4gICAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluIDAuMjVzO1xuICAgICAgICAgICAgICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbiAwLjI1cztcbiAgICAgICAgICAgICAgICAtbXMtdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbiAwLjI1cztcbiAgICAgICAgICAgICAgICAtby10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluIDAuMjVzO1xuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4gMC4yNXM7XG4gICAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuNzUpO1xuICAgICAgICAgICAgICAgIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgxLjc1KTtcbiAgICAgICAgICAgICAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgxLjc1KTtcbiAgICAgICAgICAgICAgICAtby10cmFuc2Zvcm06IHNjYWxlKDEuNzUpO1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS43NSk7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyO1xuIl19 */\n/*@ sourceURL=/Users/baijutoms/Documents/Works/Web/next/viska/m-and-m/components/Footer.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/baijutoms/Documents/Works/Web/next/viska/m-and-m/components/Header.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const Header = () => {
  return __jsx("div", {
    className: "jsx-3451311185" + " " + "header",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, __jsx("nav", {
    className: "jsx-3451311185" + " " + "navbar navbar-expand-lg navbar-dark bg-transparent",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }, __jsx("a", {
    href: "#",
    className: "jsx-3451311185" + " " + "navbar-brand",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 11
    }
  }, __jsx("img", {
    src: "/img/logo-white.svg",
    width: "76",
    alt: "",
    className: "jsx-3451311185",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }
  }))), __jsx("button", {
    type: "button",
    "data-toggle": "collapse",
    "data-target": "#navbarSupportedContent",
    "aria-controls": "navbarSupportedContent",
    "aria-expanded": "false",
    "aria-label": "Toggle navigation",
    className: "jsx-3451311185" + " " + "navbar-toggler border-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: "/img/sandwich.svg",
    className: "jsx-3451311185",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 11
    }
  })), __jsx("div", {
    id: "navbarSupportedContent",
    className: "jsx-3451311185" + " " + "collapse navbar-collapse",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }, __jsx("ul", {
    className: "jsx-3451311185" + " " + "navbar-nav middle",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 11
    }
  }, __jsx("li", {
    className: "jsx-3451311185" + " " + "nav-item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: "#",
    className: "jsx-3451311185" + " " + "nav-link",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 15
    }
  }, "Why us?")), __jsx("li", {
    className: "jsx-3451311185" + " " + "nav-item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: "#",
    className: "jsx-3451311185" + " " + "nav-link",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 15
    }
  }, "Products")), __jsx("li", {
    className: "jsx-3451311185" + " " + "nav-item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: "#",
    className: "jsx-3451311185" + " " + "nav-link",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 15
    }
  }, "Customers")), __jsx("li", {
    className: "jsx-3451311185" + " " + "nav-item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: "#",
    className: "jsx-3451311185" + " " + "nav-link",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 15
    }
  }, "Resources")), __jsx("li", {
    className: "jsx-3451311185" + " " + "nav-item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: "#",
    className: "jsx-3451311185" + " " + "nav-link",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 15
    }
  }, "Support"))), __jsx("ul", {
    className: "jsx-3451311185" + " " + "navbar-nav ml-auto",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 11
    }
  }, __jsx("li", {
    className: "jsx-3451311185" + " " + "nav-item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: "#",
    className: "jsx-3451311185" + " " + "nav-link",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 15
    }
  }, __jsx("svg", {
    width: "22",
    height: "20",
    viewBox: "0 0 22 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "jsx-3451311185",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 17
    }
  }, __jsx("path", {
    d: "M1 16.3286V7.68164H6.50261V16.3286C6.50261 17.8481 5.27081 19.0799 3.7513 19.0799C2.2318 19.0799 1 17.8481 1 16.3286Z",
    stroke: "white",
    strokeWidth: "1.5",
    className: "jsx-3451311185",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 19
    }
  }), __jsx("path", {
    d: "M4.14441 19.08H16.8459C18.9481 19.08 20.6522 17.3759 20.6522 15.2737V1H6.50267V8.99692",
    stroke: "white",
    strokeWidth: "1.5",
    className: "jsx-3451311185",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 19
    }
  }), __jsx("path", {
    d: "M9.25378 4.93042H18.2938",
    stroke: "white",
    strokeWidth: "1.5",
    className: "jsx-3451311185",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 19
    }
  }), __jsx("path", {
    d: "M9.25378 8.07471H18.2938",
    stroke: "white",
    strokeWidth: "1.5",
    className: "jsx-3451311185",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 19
    }
  }), __jsx("path", {
    d: "M9.25378 11.2192H18.2938",
    stroke: "white",
    strokeWidth: "1.5",
    className: "jsx-3451311185",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 19
    }
  })))), __jsx("li", {
    className: "jsx-3451311185" + " " + "nav-item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: "#",
    className: "jsx-3451311185" + " " + "nav-link",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 15
    }
  }, __jsx("svg", {
    width: "23",
    height: "22",
    viewBox: "0 0 23 22",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "jsx-3451311185",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 17
    }
  }, __jsx("ellipse", {
    cx: "11.8261",
    cy: "7.73073",
    rx: "2.88462",
    ry: "3.07692",
    stroke: "white",
    strokeWidth: "1.75",
    className: "jsx-3451311185",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 19
    }
  }), __jsx("path", {
    d: "M20.0985 17.0203C18.0012 14.8575 15.0343 13.5085 11.745 13.5085C8.45571 13.5085 5.48875 14.8575 3.39148 17.0203",
    stroke: "white",
    strokeWidth: "1.75",
    className: "jsx-3451311185",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 19
    }
  }), __jsx("circle", {
    cx: "11.826",
    cy: "11",
    r: "10",
    stroke: "white",
    strokeWidth: "1.75",
    className: "jsx-3451311185",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 19
    }
  })))), __jsx("li", {
    className: "jsx-3451311185" + " " + "nav-item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: "#",
    className: "jsx-3451311185" + " " + "nav-link",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 15
    }
  }, __jsx("svg", {
    width: "20",
    height: "19",
    viewBox: "0 0 20 19",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "jsx-3451311185",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 17
    }
  }, __jsx("circle", {
    cx: "11.3713",
    cy: "7.95455",
    r: "6.95455",
    stroke: "white",
    strokeWidth: "1.75",
    className: "jsx-3451311185",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 19
    }
  }), __jsx("path", {
    d: "M1.32593 17.9999L6.73502 12.5908",
    stroke: "white",
    strokeWidth: "1.75",
    className: "jsx-3451311185",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 19
    }
  })))), __jsx("li", {
    className: "jsx-3451311185" + " " + "nav-item pl-3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: "#",
    className: "jsx-3451311185" + " " + "nav-link free-trial",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 15
    }
  }, __jsx("button", {
    className: "jsx-3451311185",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 17
    }
  }, "Free trial")))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3451311185",
    __self: undefined
  }, ".header.jsx-3451311185 nav.jsx-3451311185{padding:37px 50px;background:white;}@media (max-width:1030px){.header.jsx-3451311185 nav.jsx-3451311185{padding:30px;}}.header.jsx-3451311185 nav.jsx-3451311185 ul.middle.jsx-3451311185{position:absolute;left:160px;right:160px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}@media (max-width:1140px){.header.jsx-3451311185 nav.jsx-3451311185 ul.middle.jsx-3451311185{position:static;}}.header.jsx-3451311185 nav.jsx-3451311185 ul.middle.jsx-3451311185 li.jsx-3451311185{padding:0 22px;}@media (max-width:1310px){.header.jsx-3451311185 nav.jsx-3451311185 ul.middle.jsx-3451311185 li.jsx-3451311185{padding:0 15px;}}@media (max-width:1230px){.header.jsx-3451311185 nav.jsx-3451311185 ul.middle.jsx-3451311185 li.jsx-3451311185{padding:0 10px;}}.header.jsx-3451311185 nav.jsx-3451311185 ul.jsx-3451311185:first-of-type li.jsx-3451311185 a.jsx-3451311185{position:relative;}.header.jsx-3451311185 nav.jsx-3451311185 ul.jsx-3451311185:first-of-type li.jsx-3451311185 a.jsx-3451311185:after{content:\"\";position:absolute;left:0;bottom:0;width:100%;height:2px;background:transparent;-webkit-transition:all 0.5s;-moz-transition:all 0.5s;-ms-transition:all 0.5s;-o-transition:all 0.5s;-webkit-transition:all 0.5s;transition:all 0.5s;-webkit-transform:translateY(20px);-moz-transform:translateY(20px);-ms-transform:translateY(20px);-o-transform:translateY(20px);-webkit-transform:translateY(20px);-ms-transform:translateY(20px);transform:translateY(20px);}.header.jsx-3451311185 nav.jsx-3451311185 ul.jsx-3451311185:first-of-type li.jsx-3451311185 a.jsx-3451311185:hover.jsx-3451311185:after{background:#ffdb00;-webkit-transform:translateY(0);-moz-transform:translateY(0);-ms-transform:translateY(0);-o-transform:translateY(0);-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);}.header.jsx-3451311185 nav.jsx-3451311185 ul.jsx-3451311185 li.jsx-3451311185{margin-top:auto;margin-bottom:auto;position:relative;text-align:center;}.header.jsx-3451311185 nav.jsx-3451311185 ul.jsx-3451311185 li.jsx-3451311185 a.jsx-3451311185{font-family:\"Apercu Medium\";font-size:18px;color:white !important;}.header.jsx-3451311185 nav.jsx-3451311185 ul.jsx-3451311185 li.jsx-3451311185 a.jsx-3451311185 svg.jsx-3451311185 *.jsx-3451311185{-webkit-transition:all 0.5s;-moz-transition:all 0.5s;-ms-transition:all 0.5s;-o-transition:all 0.5s;-webkit-transition:all 0.5s;transition:all 0.5s;}.header.jsx-3451311185 nav.jsx-3451311185 ul.jsx-3451311185 li.jsx-3451311185 a.jsx-3451311185:hover svg.jsx-3451311185 *.jsx-3451311185{stroke:#ffdb00;}.header.jsx-3451311185 nav.jsx-3451311185 ul.jsx-3451311185 li.jsx-3451311185 button.jsx-3451311185{font-size:16px;color:#221f20;padding:12px 18px;background:#ffdb00;border:none;-webkit-border-radius:0;-moz-border-radius:0;border-radius:0;-webkit-transition:background 0.5s;-moz-transition:background 0.5s;-ms-transition:background 0.5s;-o-transition:background 0.5s;-webkit-transition:background 0.5s;transition:background 0.5s;}.header.jsx-3451311185 nav.jsx-3451311185 ul.jsx-3451311185 li.jsx-3451311185 button.jsx-3451311185:hover{background:white;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9iYWlqdXRvbXMvRG9jdW1lbnRzL1dvcmtzL1dlYi9uZXh0L3Zpc2thL20tYW5kLW0vY29tcG9uZW50cy9IZWFkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0prQixBQUVxQixBQUlELEFBRUcsQUFPRSxBQUVILEFBR0ksQUFHQSxBQUVILEFBRUwsQUFrQlEsQUFPTCxBQUtjLEFBSUUsQUFNYixBQUVGLEFBY0ksV0F2REQsRUF0QkosRUFXRSxBQUdJLEFBR0EsQUE0Q0YsQUFHSixDQXZESyxBQXNDRixDQThCRyxDQWhGUCxBQU1KLEFBZ0JRLENBcUJlLFNBWWpCLEFBSVksQ0FwRGpCLEFBbUJILEFBMENXLE1BcEVKLEFBbURFLENBeEJQLEtBbkJFLEVBZ0RZLEVBNUJaLEVBeUNRLElBekJVLEVBUWIsQUFRVSxHQS9CZixVQTJCYSxBQWNaLENBeENXLElBc0JOLE1BU1EsQ0FVRCxFQTFCSSxVQWRBLFVBK0JOLEVBVUQsTUExQk0sT0FyQ04sR0F1QkksS0F5Q1QsWUExQlEsSUEyQlcsSUF6Q1gsS0E2QkQsbUJBNUJBLE9BeUNTLGdCQXhDWixnQkF5Q1csUUFuRVQsS0FzQ0csa0JBOEJLLENBekNLLDZCQTBDUixNQXpDSyxnQ0FDRCx3QkF3Q0gsT0F2Q0UsOEJBQ0gsNkZBQUMiLCJmaWxlIjoiL1VzZXJzL2JhaWp1dG9tcy9Eb2N1bWVudHMvV29ya3MvV2ViL25leHQvdmlza2EvbS1hbmQtbS9jb21wb25lbnRzL0hlYWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuY29uc3QgSGVhZGVyID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XG4gICAgICA8bmF2IGNsYXNzTmFtZT1cIm5hdmJhciBuYXZiYXItZXhwYW5kLWxnIG5hdmJhci1kYXJrIGJnLXRyYW5zcGFyZW50XCI+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2YmFyLWJyYW5kXCIgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltZy9sb2dvLXdoaXRlLnN2Z1wiIHdpZHRoPVwiNzZcIiBhbHQ9XCJcIiAvPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgY2xhc3NOYW1lPVwibmF2YmFyLXRvZ2dsZXIgYm9yZGVyLTBcIlxuICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgIGRhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIlxuICAgICAgICAgIGRhdGEtdGFyZ2V0PVwiI25hdmJhclN1cHBvcnRlZENvbnRlbnRcIlxuICAgICAgICAgIGFyaWEtY29udHJvbHM9XCJuYXZiYXJTdXBwb3J0ZWRDb250ZW50XCJcbiAgICAgICAgICBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIlxuICAgICAgICAgIGFyaWEtbGFiZWw9XCJUb2dnbGUgbmF2aWdhdGlvblwiXG4gICAgICAgID5cbiAgICAgICAgICA8aW1nIHNyYz1cIi9pbWcvc2FuZHdpY2guc3ZnXCIgLz5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sbGFwc2UgbmF2YmFyLWNvbGxhcHNlXCIgaWQ9XCJuYXZiYXJTdXBwb3J0ZWRDb250ZW50XCI+XG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdmJhci1uYXYgbWlkZGxlXCI+XG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIiBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgIFdoeSB1cz9cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgUHJvZHVjdHNcbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgQ3VzdG9tZXJzXG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIiBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgIFJlc291cmNlc1xuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCIgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICBTdXBwb3J0XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2YmFyLW5hdiBtbC1hdXRvXCI+XG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIiBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMjJcIlxuICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMjBcIlxuICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyMiAyMFwiXG4gICAgICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICBkPVwiTTEgMTYuMzI4NlY3LjY4MTY0SDYuNTAyNjFWMTYuMzI4NkM2LjUwMjYxIDE3Ljg0ODEgNS4yNzA4MSAxOS4wNzk5IDMuNzUxMyAxOS4wNzk5QzIuMjMxOCAxOS4wNzk5IDEgMTcuODQ4MSAxIDE2LjMyODZaXCJcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlPVwid2hpdGVcIlxuICAgICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD1cIjEuNVwiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgICAgZD1cIk00LjE0NDQxIDE5LjA4SDE2Ljg0NTlDMTguOTQ4MSAxOS4wOCAyMC42NTIyIDE3LjM3NTkgMjAuNjUyMiAxNS4yNzM3VjFINi41MDI2N1Y4Ljk5NjkyXCJcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlPVwid2hpdGVcIlxuICAgICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD1cIjEuNVwiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgICAgZD1cIk05LjI1Mzc4IDQuOTMwNDJIMTguMjkzOFwiXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZT1cIndoaXRlXCJcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9XCIxLjVcIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICAgIGQ9XCJNOS4yNTM3OCA4LjA3NDcxSDE4LjI5MzhcIlxuICAgICAgICAgICAgICAgICAgICBzdHJva2U9XCJ3aGl0ZVwiXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPVwiMS41XCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICBkPVwiTTkuMjUzNzggMTEuMjE5MkgxOC4yOTM4XCJcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlPVwid2hpdGVcIlxuICAgICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD1cIjEuNVwiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCIgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgICAgICB3aWR0aD1cIjIzXCJcbiAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjIyXCJcbiAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjMgMjJcIlxuICAgICAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPGVsbGlwc2VcbiAgICAgICAgICAgICAgICAgICAgY3g9XCIxMS44MjYxXCJcbiAgICAgICAgICAgICAgICAgICAgY3k9XCI3LjczMDczXCJcbiAgICAgICAgICAgICAgICAgICAgcng9XCIyLjg4NDYyXCJcbiAgICAgICAgICAgICAgICAgICAgcnk9XCIzLjA3NjkyXCJcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlPVwid2hpdGVcIlxuICAgICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD1cIjEuNzVcIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICAgIGQ9XCJNMjAuMDk4NSAxNy4wMjAzQzE4LjAwMTIgMTQuODU3NSAxNS4wMzQzIDEzLjUwODUgMTEuNzQ1IDEzLjUwODVDOC40NTU3MSAxMy41MDg1IDUuNDg4NzUgMTQuODU3NSAzLjM5MTQ4IDE3LjAyMDNcIlxuICAgICAgICAgICAgICAgICAgICBzdHJva2U9XCJ3aGl0ZVwiXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPVwiMS43NVwiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPGNpcmNsZVxuICAgICAgICAgICAgICAgICAgICBjeD1cIjExLjgyNlwiXG4gICAgICAgICAgICAgICAgICAgIGN5PVwiMTFcIlxuICAgICAgICAgICAgICAgICAgICByPVwiMTBcIlxuICAgICAgICAgICAgICAgICAgICBzdHJva2U9XCJ3aGl0ZVwiXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPVwiMS43NVwiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCIgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgICAgICB3aWR0aD1cIjIwXCJcbiAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjE5XCJcbiAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjAgMTlcIlxuICAgICAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPGNpcmNsZVxuICAgICAgICAgICAgICAgICAgICBjeD1cIjExLjM3MTNcIlxuICAgICAgICAgICAgICAgICAgICBjeT1cIjcuOTU0NTVcIlxuICAgICAgICAgICAgICAgICAgICByPVwiNi45NTQ1NVwiXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZT1cIndoaXRlXCJcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9XCIxLjc1XCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICBkPVwiTTEuMzI1OTMgMTcuOTk5OUw2LjczNTAyIDEyLjU5MDhcIlxuICAgICAgICAgICAgICAgICAgICBzdHJva2U9XCJ3aGl0ZVwiXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPVwiMS43NVwiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtIHBsLTNcIj5cbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmsgZnJlZS10cmlhbFwiIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbj5GcmVlIHRyaWFsPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L25hdj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmhlYWRlciB7XG4gICAgICAgICAgbmF2IHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDM3cHggNTBweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDEwMzBweCkge1xuICAgICAgICAgICAgICBwYWRkaW5nOiAzMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdWwge1xuICAgICAgICAgICAgICAmLm1pZGRsZSB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIGxlZnQ6IDE2MHB4O1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAxNjBweDtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMTQwcHgpIHtcbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBzdGF0aWM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxpIHtcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMjJweDtcbiAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMzEwcHgpIHtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMCAxNXB4O1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDEyMzBweCkge1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDEwcHg7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICY6Zmlyc3Qtb2YtdHlwZSB7XG4gICAgICAgICAgICAgICAgbGkgYSB7XG4gICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAmOmFmdGVyIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDJweDtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNXM7XG4gICAgICAgICAgICAgICAgICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNXM7XG4gICAgICAgICAgICAgICAgICAgIC1tcy10cmFuc2l0aW9uOiBhbGwgMC41cztcbiAgICAgICAgICAgICAgICAgICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNXM7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjVzO1xuICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMHB4KTtcbiAgICAgICAgICAgICAgICAgICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjBweCk7XG4gICAgICAgICAgICAgICAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjBweCk7XG4gICAgICAgICAgICAgICAgICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMHB4KTtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwcHgpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgJjpob3ZlcjphZnRlciB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmRiMDA7XG4gICAgICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgICAgICAgICAgICAgICAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICAgICAgICAgICAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICAgICAgICAgICAgICAgICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGxpIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiBhdXRvO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IGF1dG87XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBhIHtcbiAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkFwZXJjdSBNZWRpdW1cIjtcbiAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgc3ZnICoge1xuICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjVzO1xuICAgICAgICAgICAgICAgICAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjVzO1xuICAgICAgICAgICAgICAgICAgICAtbXMtdHJhbnNpdGlvbjogYWxsIDAuNXM7XG4gICAgICAgICAgICAgICAgICAgIC1vLXRyYW5zaXRpb246IGFsbCAwLjVzO1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC41cztcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICY6aG92ZXIgc3ZnICoge1xuICAgICAgICAgICAgICAgICAgICBzdHJva2U6ICNmZmRiMDA7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICAgICAgICBjb2xvcjogIzIyMWYyMDtcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEycHggMThweDtcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmRiMDA7XG4gICAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDA7XG4gICAgICAgICAgICAgICAgICAtbW96LWJvcmRlci1yYWRpdXM6IDA7XG4gICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgICAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuNXM7XG4gICAgICAgICAgICAgICAgICAtbW96LXRyYW5zaXRpb246IGJhY2tncm91bmQgMC41cztcbiAgICAgICAgICAgICAgICAgIC1tcy10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuNXM7XG4gICAgICAgICAgICAgICAgICAtby10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuNXM7XG4gICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuNXM7XG4gICAgICAgICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XG4iXX0= */\n/*@ sourceURL=/Users/baijutoms/Documents/Works/Web/next/viska/m-and-m/components/Header.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/Home.js":
/*!****************************!*\
  !*** ./components/Home.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_Blogs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/Blogs */ "./components/home/Blogs.js");
/* harmony import */ var _home_Heading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/Heading */ "./components/home/Heading.js");
var _jsxFileName = "/Users/baijutoms/Documents/Works/Web/next/viska/m-and-m/components/Home.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Home = () => {
  return __jsx("div", {
    className: "home",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, __jsx(_home_Heading__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  }), __jsx(_home_Blogs__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header */ "./components/Header.js");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Footer */ "./components/Footer.js");
/* harmony import */ var _public_css_global_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../public/css/global.css */ "./public/css/global.css");
/* harmony import */ var _public_css_global_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_css_global_css__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/baijutoms/Documents/Works/Web/next/viska/m-and-m/components/Layout.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Layout = props => {
  return __jsx("div", {
    className: "layout",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, __jsx(_Header__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "layout",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }, props.children), __jsx(_Footer__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/home/Blog.js":
/*!*********************************!*\
  !*** ./components/home/Blog.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/baijutoms/Documents/Works/Web/next/viska/m-and-m/components/home/Blog.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



const Blog = ({
  data
}) => {
  const ext = () => {
    // get extention from filename
    const re = /(?:\.([^.]+))?$/;
    return re.exec(data.image)[1];
  }; // const stringSoSlug = (str) => {
  //   str = str.replace(/^\s+|\s+$/g, ""); // trim
  //   str = str.toLowerCase();
  //   // remove accents, swap ñ for n, etc
  //   var from = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;";
  //   var to = "aaaaeeeeiiiioooouuuunc------";
  //   for (var i = 0, l = from.length; i < l; i++) {
  //     str = str.replace(new RegExp(from.charAt(i), "g"), to.charAt(i));
  //   }
  //   str = str
  //     .replace(/[^a-z0-9 -]/g, "") // remove invalid chars
  //     .replace(/\s+/g, "-") // collapse whitespace and replace by -
  //     .replace(/-+/g, "-"); // collapse dashes
  //   return str;
  // };


  return __jsx("div", {
    className: "jsx-1833451903" + " " + "Blog",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "jsx-1833451903" + " " + "row blog",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "jsx-1833451903" + " " + "left col-3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-1833451903",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 11
    }
  }, moment__WEBPACK_IMPORTED_MODULE_3___default()(data.published_at).isSame(moment__WEBPACK_IMPORTED_MODULE_3___default()().format(), "week") ? __jsx("div", {
    className: "jsx-1833451903" + " " + "label f-ap-m",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 15
    }
  }, "THIS WEEKS POST") : "", __jsx("div", {
    className: "jsx-1833451903" + " " + "date",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }
  }, moment__WEBPACK_IMPORTED_MODULE_3___default()(data.published_at).format("MMM Do YYYY")))), __jsx("div", {
    className: "jsx-1833451903" + " " + "middle col-12 col-md-7 network-security",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-1833451903" + " " + "d-flex align-items-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "jsx-1833451903" + " " + "for-image-gap",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "jsx-1833451903",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 15
    }
  })), __jsx("div", {
    className: "jsx-1833451903",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "jsx-1833451903" + " " + "tags d-flex",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 15
    }
  }, data.tags.map(tag => {
    return __jsx("a", {
      href: "#",
      key: tag.id,
      className: "jsx-1833451903",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 21
      }
    }, tag.name, __jsx("span", {
      className: "jsx-1833451903",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 23
      }
    }));
  })), __jsx("div", {
    className: "jsx-1833451903" + " " + "title",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 15
    }
  }, __jsx("h3", {
    className: "jsx-1833451903",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 17
    }
  }, data.title), __jsx("h3", {
    className: "jsx-1833451903" + " " + "with-underline",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 17
    }
  }, data.title)))), __jsx("img", {
    src: data.feature_image,
    alt: "",
    className: "jsx-1833451903" + " " + ((ext() !== "svg" ? "photo" : "") || ""),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 11
    }
  })), __jsx("div", {
    className: "jsx-1833451903" + " " + "right col-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 9
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: `/${data.slug}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "jsx-1833451903" + " " + "read-link",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 13
    }
  }, "Read", __jsx("svg", {
    width: "8",
    height: "12",
    viewBox: "0 0 8 12",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "jsx-1833451903" + " " + "ml-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 15
    }
  }, __jsx("path", {
    d: "M1 11L6 6L1 1",
    stroke: "#757575",
    strokeWidth: "2",
    className: "jsx-1833451903",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 17
    }
  })))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1833451903",
    __self: undefined
  }, ".blog.jsx-1833451903{cursor:pointer;}.blog.jsx-1833451903 *.jsx-1833451903{-webkit-transition:all 0.3s;-moz-transition:all 0.3s;-ms-transition:all 0.3s;-o-transition:all 0.3s;-webkit-transition:all 0.3s;transition:all 0.3s;}.blog.jsx-1833451903:hover .left.jsx-1833451903 .date.jsx-1833451903{color:#ffffff;}.blog.jsx-1833451903:hover .middle.jsx-1833451903 img.jsx-1833451903{opacity:1;}.blog.jsx-1833451903:hover .middle.jsx-1833451903 .title.jsx-1833451903 h3.with-underline.jsx-1833451903{opacity:1;}.blog.jsx-1833451903 .left.jsx-1833451903,.blog.jsx-1833451903 .middle.jsx-1833451903,.blog.jsx-1833451903 .right.jsx-1833451903{border-top:1px solid #4e4c4d;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;min-height:394px;}@media (max-width:767px){.blog.jsx-1833451903 .left.jsx-1833451903,.blog.jsx-1833451903 .middle.jsx-1833451903,.blog.jsx-1833451903 .right.jsx-1833451903{min-height:278px;}}.blog.jsx-1833451903 .left.jsx-1833451903{padding:0;}@media (max-width:767px){.blog.jsx-1833451903 .left.jsx-1833451903{display:none;}}.blog.jsx-1833451903 .left.jsx-1833451903 .label.jsx-1833451903{display:inline-block;padding:10px 13px 7px 12px;line-height:100%;border:none;background-color:#ffdb00;color:#221f20;font-size:12px;margin-bottom:18px;}.blog.jsx-1833451903 .left.jsx-1833451903 .date.jsx-1833451903{font-family:\"Capitolium Regular\";color:#b7b6b6;font-size:20px;line-height:100%;}.blog.jsx-1833451903 .left.jsx-1833451903,.blog.jsx-1833451903 .middle.jsx-1833451903{border-right:1px solid #4e4c4d;}@media (max-width:767px){.blog.jsx-1833451903 .left.jsx-1833451903,.blog.jsx-1833451903 .middle.jsx-1833451903{border-right:none;}}.blog.jsx-1833451903 .middle.jsx-1833451903{padding-right:80px;overflow:hidden;padding-left:0;position:relative;}@media (max-width:991px){.blog.jsx-1833451903 .middle.jsx-1833451903{padding-right:20px;}}.blog.jsx-1833451903 .middle.jsx-1833451903 .for-image-gap.jsx-1833451903 div.jsx-1833451903{width:250px;height:10px;}@media (max-width:991px){.blog.jsx-1833451903 .middle.jsx-1833451903 .for-image-gap.jsx-1833451903 div.jsx-1833451903{width:140px;}}.blog.jsx-1833451903 .middle.jsx-1833451903 img.jsx-1833451903{position:absolute;opacity:0.4;}@media (max-width:991px){.blog.jsx-1833451903 .middle.jsx-1833451903 img.jsx-1833451903{width:130px;left:-38px;}}.blog.jsx-1833451903 .middle.jsx-1833451903 img.photo.jsx-1833451903{left:0;width:210px;height:100%;object-fit:cover;}@media (max-width:991px){.blog.jsx-1833451903 .middle.jsx-1833451903 img.photo.jsx-1833451903{width:98px;}}.blog.jsx-1833451903 .middle.jsx-1833451903 .tags.jsx-1833451903 a.jsx-1833451903{font-family:\"Apercu Regular\";font-size:12px;color:#ffdb00;text-transform:uppercase;margin-bottom:12px;-webkit-text-decoration:none;text-decoration:none;}.blog.jsx-1833451903 .middle.jsx-1833451903 .tags.jsx-1833451903 a.jsx-1833451903 span.jsx-1833451903{display:inline-block;width:20px;}.blog.jsx-1833451903 .middle.jsx-1833451903 .tags.jsx-1833451903 a.jsx-1833451903:hover{opacity:0.4;}.blog.jsx-1833451903 .middle.jsx-1833451903 .title.jsx-1833451903{position:relative;}.blog.jsx-1833451903 .middle.jsx-1833451903 .title.jsx-1833451903 h3.jsx-1833451903{font-family:\"Apercu Bold\";font-size:36px;color:#ffffff;padding:0;margin:0;}@media (max-width:991px){.blog.jsx-1833451903 .middle.jsx-1833451903 .title.jsx-1833451903 h3.jsx-1833451903{font-size:28px;}}@media (max-width:767px){.blog.jsx-1833451903 .middle.jsx-1833451903 .title.jsx-1833451903 h3.jsx-1833451903{font-size:20px;}}.blog.jsx-1833451903 .middle.jsx-1833451903 .title.jsx-1833451903 h3.with-underline.jsx-1833451903{position:absolute;opacity:0;top:0;-webkit-text-decoration:underline;text-decoration:underline;-webkit-text-decoration-color:#ffdb00;text-decoration-color:#ffdb00;}.blog.jsx-1833451903 .right.jsx-1833451903{text-align:center;}@media (max-width:767px){.blog.jsx-1833451903 .right.jsx-1833451903{display:none;}}.blog.jsx-1833451903 .right.jsx-1833451903 .read-link.jsx-1833451903{font-family:\"Capitolium Bold\";font-size:20px;color:#b7b6b6;cursor:pointer;}.blog.jsx-1833451903 .right.jsx-1833451903 .read-link.jsx-1833451903:hover{color:#ffffff;}.blog.jsx-1833451903 .right.jsx-1833451903 .read-link.jsx-1833451903 svg.jsx-1833451903{-webkit-transition:all 0.5s;-moz-transition:all 0.5s;-ms-transition:all 0.5s;-o-transition:all 0.5s;-webkit-transition:all 0.5s;transition:all 0.5s;margin-top:-4px;}.blog.jsx-1833451903 .right.jsx-1833451903 .read-link.jsx-1833451903:hover svg.jsx-1833451903{-webkit-transform:translateX(10px);-moz-transform:translateX(10px);-ms-transform:translateX(10px);-o-transform:translateX(10px);-webkit-transform:translateX(10px);-ms-transform:translateX(10px);transform:translateX(10px);}.blog.jsx-1833451903 .right.jsx-1833451903 .read-link.jsx-1833451903:hover svg.jsx-1833451903 path.jsx-1833451903{stroke:#ffdb00;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9iYWlqdXRvbXMvRG9jdW1lbnRzL1dvcmtzL1dlYi9uZXh0L3Zpc2thL20tYW5kLW0vY29tcG9uZW50cy9ob21lL0Jsb2cuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK0ZrQixBQUVrQixBQUVlLEFBTWQsQUFFSixBQUVBLEFBSW1CLEFBU1IsQUFFWCxBQUdPLEFBRU0sQUFTWSxBQU1KLEFBSVQsQUFFSCxBQU1JLEFBRVQsQUFJSSxBQUVFLEFBSUYsQUFHUCxBQU1RLEFBRVksQUFPTixBQUdULEFBRUksQUFFVSxBQU9QLEFBR0EsQUFFQyxBQU1OLEFBR0QsQUFFZSxBQUtkLEFBRWMsQUFPTyxBQU1sQixPQWhFTCxHQWpFTCxBQUVBLEFBZUEsQ0FxRFMsQ0FsQk4sQUFHSyxBQU9GLEFBb0JBLENBOURDLEFBdUZBLENBN0dILEFBb0hJLENBNUhMLEFBdUdVLEFBR0EsQUFpQ0YsRUFsSEEsQ0EwQkMsQUFpQlQsQUEwQk8sQUFlTCxBQUtHLENBNURILEFBS1EsQUFpQlIsRUEzQ2EsQUF5RGQsRUFsQkcsQ0FWSCxFQW1DSSxFQTlGTSxBQTJHYixBQWlCaUIsQ0E5R2hCLEFBa0VJLENBZkYsQUFvREUsQ0F6RWUsQUE4QlgsQ0FhTCxDQWhEQSxDQXFFZ0IsQ0F4RGpCLEFBK0VxQixNQXBDbEIsR0FkRixDQXFDQSxFQTlFQyxDQVRFLEFBMkNHLEVBckJKLEdBcERNLEFBNEhJLEVBN0JkLEdBZGEsQ0FxQ1YsR0E5RUUsR0FUTCxBQWlFRCxFQW1Dc0IsQ0EvRWhCLE1BNENMLEFBc0JJLEdBckhLLEFBK0JJLEFBNkZBLEVBckZQLElBMENDLFdBMEJlLElBd0JGLEVBbElkLEFBNEhJLEVBN0ZSLEFBa0RPLENBckVELGFBb0JMLFlBbUdjLEdBbEdWLGlCQWpDQSxBQTZIRCxFQTVGRSxFQWdERSxVQXlCYSxFQW1CaEIsaUJBaEhFLHdDQXNIUywyREFySGYsaUJBQUMiLCJmaWxlIjoiL1VzZXJzL2JhaWp1dG9tcy9Eb2N1bWVudHMvV29ya3MvV2ViL25leHQvdmlza2EvbS1hbmQtbS9jb21wb25lbnRzL2hvbWUvQmxvZy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBtb21lbnQgZnJvbSBcIm1vbWVudFwiO1xuXG5jb25zdCBCbG9nID0gKHsgZGF0YSB9KSA9PiB7XG4gIGNvbnN0IGV4dCA9ICgpID0+IHtcbiAgICAvLyBnZXQgZXh0ZW50aW9uIGZyb20gZmlsZW5hbWVcbiAgICBjb25zdCByZSA9IC8oPzpcXC4oW14uXSspKT8kLztcbiAgICByZXR1cm4gcmUuZXhlYyhkYXRhLmltYWdlKVsxXTtcbiAgfTtcblxuICAvLyBjb25zdCBzdHJpbmdTb1NsdWcgPSAoc3RyKSA9PiB7XG4gIC8vICAgc3RyID0gc3RyLnJlcGxhY2UoL15cXHMrfFxccyskL2csIFwiXCIpOyAvLyB0cmltXG4gIC8vICAgc3RyID0gc3RyLnRvTG93ZXJDYXNlKCk7XG5cbiAgLy8gICAvLyByZW1vdmUgYWNjZW50cywgc3dhcCDDsSBmb3IgbiwgZXRjXG4gIC8vICAgdmFyIGZyb20gPSBcIsOgw6HDpMOiw6jDqcOrw6rDrMOtw6/DrsOyw7PDtsO0w7nDusO8w7vDscOnwrcvXyw6O1wiO1xuICAvLyAgIHZhciB0byA9IFwiYWFhYWVlZWVpaWlpb29vb3V1dXVuYy0tLS0tLVwiO1xuICAvLyAgIGZvciAodmFyIGkgPSAwLCBsID0gZnJvbS5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgLy8gICAgIHN0ciA9IHN0ci5yZXBsYWNlKG5ldyBSZWdFeHAoZnJvbS5jaGFyQXQoaSksIFwiZ1wiKSwgdG8uY2hhckF0KGkpKTtcbiAgLy8gICB9XG5cbiAgLy8gICBzdHIgPSBzdHJcbiAgLy8gICAgIC5yZXBsYWNlKC9bXmEtejAtOSAtXS9nLCBcIlwiKSAvLyByZW1vdmUgaW52YWxpZCBjaGFyc1xuICAvLyAgICAgLnJlcGxhY2UoL1xccysvZywgXCItXCIpIC8vIGNvbGxhcHNlIHdoaXRlc3BhY2UgYW5kIHJlcGxhY2UgYnkgLVxuICAvLyAgICAgLnJlcGxhY2UoLy0rL2csIFwiLVwiKTsgLy8gY29sbGFwc2UgZGFzaGVzXG5cbiAgLy8gICByZXR1cm4gc3RyO1xuICAvLyB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJCbG9nXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBibG9nXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGVmdCBjb2wtM1wiPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICB7bW9tZW50KGRhdGEucHVibGlzaGVkX2F0KS5pc1NhbWUobW9tZW50KCkuZm9ybWF0KCksIFwid2Vla1wiKSA/IChcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYWJlbCBmLWFwLW1cIj5USElTIFdFRUtTIFBPU1Q8L2Rpdj5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIFwiXCJcbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRhdGVcIj5cbiAgICAgICAgICAgICAge21vbWVudChkYXRhLnB1Ymxpc2hlZF9hdCkuZm9ybWF0KFwiTU1NIERvIFlZWVlcIil9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHsvKiAubGVmdCAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtaWRkbGUgY29sLTEyIGNvbC1tZC03IG5ldHdvcmstc2VjdXJpdHlcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9yLWltYWdlLWdhcFwiPlxuICAgICAgICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhZ3MgZC1mbGV4XCI+XG4gICAgICAgICAgICAgICAge2RhdGEudGFncy5tYXAoKHRhZykgPT4ge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBrZXk9e3RhZy5pZH0+XG4gICAgICAgICAgICAgICAgICAgICAge3RhZy5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj5cbiAgICAgICAgICAgICAgICA8aDM+e2RhdGEudGl0bGV9PC9oMz5cbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwid2l0aC11bmRlcmxpbmVcIj57ZGF0YS50aXRsZX08L2gzPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgIHNyYz17ZGF0YS5mZWF0dXJlX2ltYWdlfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtleHQoKSAhPT0gXCJzdmdcIiA/IFwicGhvdG9cIiA6IFwiXCJ9XG4gICAgICAgICAgICBhbHQ9XCJcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7LyogLm1pZGRsZSAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyaWdodCBjb2wtMlwiPlxuICAgICAgICAgIDxMaW5rIGhyZWY9e2AvJHtkYXRhLnNsdWd9YH0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlYWQtbGlua1wiPlxuICAgICAgICAgICAgICBSZWFkXG4gICAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtbC0yXCJcbiAgICAgICAgICAgICAgICB3aWR0aD1cIjhcIlxuICAgICAgICAgICAgICAgIGhlaWdodD1cIjEyXCJcbiAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDggMTJcIlxuICAgICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMSAxMUw2IDZMMSAxXCIgc3Ryb2tlPVwiIzc1NzU3NVwiIHN0cm9rZVdpZHRoPVwiMlwiIC8+XG4gICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgey8qIC5yaWdodCAqL31cbiAgICAgIDwvZGl2PlxuICAgICAgey8qIC5ibG9nICovfVxuXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5ibG9nIHtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgKiB7XG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzO1xuICAgICAgICAgICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgICAgICAgICAgIC1tcy10cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgICAgICAgICAgIC1vLXRyYW5zaXRpb246IGFsbCAwLjNzO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gICAgICAgICAgfVxuICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgLmxlZnQge1xuICAgICAgICAgICAgICAuZGF0ZSB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5taWRkbGUge1xuICAgICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLnRpdGxlIGgzLndpdGgtdW5kZXJsaW5lIHtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIC5sZWZ0LFxuICAgICAgICAgIC5taWRkbGUsXG4gICAgICAgICAgLnJpZ2h0IHtcbiAgICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjNGU0YzRkO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDM5NHB4O1xuICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDI3OHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICAubGVmdCB7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubGFiZWwge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMTNweCA3cHggMTJweDtcbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZGIwMDtcbiAgICAgICAgICAgICAgY29sb3I6ICMyMjFmMjA7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMThweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5kYXRlIHtcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiQ2FwaXRvbGl1bSBSZWd1bGFyXCI7XG4gICAgICAgICAgICAgIGNvbG9yOiAjYjdiNmI2O1xuICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIC5sZWZ0LFxuICAgICAgICAgIC5taWRkbGUge1xuICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzRlNGM0ZDtcbiAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAgICAgICAgICAgICBib3JkZXItcmlnaHQ6IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIC5taWRkbGUge1xuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogODBweDtcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5mb3ItaW1hZ2UtZ2FwIGRpdiB7XG4gICAgICAgICAgICAgIHdpZHRoOiAyNTBweDtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxMHB4O1xuICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTQwcHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgb3BhY2l0eTogMC40O1xuICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTMwcHg7XG4gICAgICAgICAgICAgICAgbGVmdDogLTM4cHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgJi5waG90byB7XG4gICAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgICB3aWR0aDogMjEwcHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA5OTFweCkge1xuICAgICAgICAgICAgICAgICAgd2lkdGg6IDk4cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAudGFncyB7XG4gICAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkFwZXJjdSBSZWd1bGFyXCI7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZkYjAwO1xuICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTJweDtcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgICB3aWR0aDogMjBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAudGl0bGUge1xuICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgIGgzIHtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogXCJBcGVyY3UgQm9sZFwiO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzZweDtcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICYud2l0aC11bmRlcmxpbmUge1xuICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uLWNvbG9yOiAjZmZkYjAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICAucmlnaHQge1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5yZWFkLWxpbmsge1xuICAgICAgICAgICAgICBmb250LWZhbWlseTogXCJDYXBpdG9saXVtIEJvbGRcIjtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgICBjb2xvcjogI2I3YjZiNjtcbiAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBzdmcge1xuICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNXM7XG4gICAgICAgICAgICAgICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC41cztcbiAgICAgICAgICAgICAgICAtbXMtdHJhbnNpdGlvbjogYWxsIDAuNXM7XG4gICAgICAgICAgICAgICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNXM7XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogLTRweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAmOmhvdmVyIHN2ZyB7XG4gICAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTBweCk7XG4gICAgICAgICAgICAgICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTBweCk7XG4gICAgICAgICAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMHB4KTtcbiAgICAgICAgICAgICAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTBweCk7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwcHgpO1xuICAgICAgICAgICAgICAgIHBhdGgge1xuICAgICAgICAgICAgICAgICAgc3Ryb2tlOiAjZmZkYjAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQmxvZztcbiJdfQ== */\n/*@ sourceURL=/Users/baijutoms/Documents/Works/Web/next/viska/m-and-m/components/home/Blog.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Blog);

/***/ }),

/***/ "./components/home/Blogs.js":
/*!**********************************!*\
  !*** ./components/home/Blogs.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Blog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Blog */ "./components/home/Blog.js");
/* harmony import */ var _Head_row__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Head-row */ "./components/home/Head-row.js");
/* harmony import */ var _contexts_home_blogs_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../contexts/home/blogs-context */ "./contexts/home/blogs-context.js");
/* harmony import */ var react_infinite_scroll_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-infinite-scroll-component */ "react-infinite-scroll-component");
/* harmony import */ var react_infinite_scroll_component__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_infinite_scroll_component__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _contexts_home_Header_row_context__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../contexts/home/Header-row-context */ "./contexts/home/Header-row-context.js");
var _jsxFileName = "/Users/baijutoms/Documents/Works/Web/next/viska/m-and-m/components/home/Blogs.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;







console.log("A");

const Body = () => {
  console.log("a");
  const {
    blogs,
    setBlogs,
    page,
    setPage
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_contexts_home_blogs_context__WEBPACK_IMPORTED_MODULE_4__["BlogsContext"]);
  const {
    search,
    selectedTag,
    selectedSortOption
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_contexts_home_Header_row_context__WEBPACK_IMPORTED_MODULE_7__["HeaderRowContext"]);
  const {
    0: nextPage,
    1: setNextPage
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(1);
  const {
    0: fetching,
    1: setFetching
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);

  const fetchData = refresh => {
    if (fetching) return;
    setFetching(true);
    let sortString;

    switch (selectedSortOption) {
      case "Newest":
        sortString = "order=published_at DESC";
        break;

      case "Oldest":
        sortString = "order=published_at ASC";
        break;

      default:
        break;
    }

    const urlString = `https://hlynurhalldorsson.ghost.io/ghost/api/v3/content/posts/?key=693902285ff27989f7ad281cd8&include=tags&fields=id,title,slug,feature_image,published_at&limit=5&page=${refresh ? 1 : page + 1}${selectedTag.name === "All" ? "" : `&filter=tags.id:${selectedTag.id}`}&${sortString}`;
    axios__WEBPACK_IMPORTED_MODULE_6___default.a.get(encodeURI(urlString)).then(res => {
      setPage(refresh ? 1 : page + 1);
      setBlogs(refresh ? [...res.data.posts] : [...blogs, ...res.data.posts]);
      setNextPage(res.data.meta.pagination.next);
    }).catch(e => {}).finally(() => {
      setFetching(false);
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    fetchData(true);
  }, [selectedTag, selectedSortOption]);
  return __jsx("section", {
    className: "jsx-2277151427" + " " + "body",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 5
    }
  }, __jsx(_Head_row__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "jsx-2277151427" + " " + `blogs ${fetching ? "fetching" : ""}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }
  }, blogs ? blogs.map((blog, i) => {
    return __jsx(_Blog__WEBPACK_IMPORTED_MODULE_2__["default"], {
      data: blog,
      key: i,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 22
      }
    });
  }) : ""), __jsx(react_infinite_scroll_component__WEBPACK_IMPORTED_MODULE_5___default.a, {
    dataLength: blogs.length,
    next: fetchData,
    hasMore: nextPage,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 7
    }
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "484196003",
    __self: undefined
  }, ".body.jsx-2277151427{padding-bottom:35px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9iYWlqdXRvbXMvRG9jdW1lbnRzL1dvcmtzL1dlYi9uZXh0L3Zpc2thL20tYW5kLW0vY29tcG9uZW50cy9ob21lL0Jsb2dzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9Fa0IsQUFFdUIsb0JBQUMiLCJmaWxlIjoiL1VzZXJzL2JhaWp1dG9tcy9Eb2N1bWVudHMvV29ya3MvV2ViL25leHQvdmlza2EvbS1hbmQtbS9jb21wb25lbnRzL2hvbWUvQmxvZ3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQmxvZyBmcm9tIFwiLi9CbG9nXCI7XG5pbXBvcnQgSGVhZFJvdyBmcm9tIFwiLi9IZWFkLXJvd1wiO1xuaW1wb3J0IHsgQmxvZ3NDb250ZXh0IH0gZnJvbSBcIi4uLy4uL2NvbnRleHRzL2hvbWUvYmxvZ3MtY29udGV4dFwiO1xuaW1wb3J0IEluZmluaXRlU2Nyb2xsIGZyb20gXCJyZWFjdC1pbmZpbml0ZS1zY3JvbGwtY29tcG9uZW50XCI7XG5pbXBvcnQgQXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyBIZWFkZXJSb3dDb250ZXh0IH0gZnJvbSBcIi4uLy4uL2NvbnRleHRzL2hvbWUvSGVhZGVyLXJvdy1jb250ZXh0XCI7XG5jb25zb2xlLmxvZyhcIkFcIik7XG5jb25zdCBCb2R5ID0gKCkgPT4ge1xuICBjb25zb2xlLmxvZyhcImFcIik7XG4gIGNvbnN0IHsgYmxvZ3MsIHNldEJsb2dzLCBwYWdlLCBzZXRQYWdlIH0gPSB1c2VDb250ZXh0KEJsb2dzQ29udGV4dCk7XG4gIGNvbnN0IHsgc2VhcmNoLCBzZWxlY3RlZFRhZywgc2VsZWN0ZWRTb3J0T3B0aW9uIH0gPSB1c2VDb250ZXh0KFxuICAgIEhlYWRlclJvd0NvbnRleHRcbiAgKTtcbiAgY29uc3QgW25leHRQYWdlLCBzZXROZXh0UGFnZV0gPSB1c2VTdGF0ZSgxKTtcbiAgY29uc3QgW2ZldGNoaW5nLCBzZXRGZXRjaGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgZmV0Y2hEYXRhID0gKHJlZnJlc2gpID0+IHtcbiAgICBpZiAoZmV0Y2hpbmcpIHJldHVybjtcbiAgICBzZXRGZXRjaGluZyh0cnVlKTtcbiAgICBsZXQgc29ydFN0cmluZztcbiAgICBzd2l0Y2ggKHNlbGVjdGVkU29ydE9wdGlvbikge1xuICAgICAgY2FzZSBcIk5ld2VzdFwiOlxuICAgICAgICBzb3J0U3RyaW5nID0gXCJvcmRlcj1wdWJsaXNoZWRfYXQgREVTQ1wiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJPbGRlc3RcIjpcbiAgICAgICAgc29ydFN0cmluZyA9IFwib3JkZXI9cHVibGlzaGVkX2F0IEFTQ1wiO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBjb25zdCB1cmxTdHJpbmcgPSBgaHR0cHM6Ly9obHludXJoYWxsZG9yc3Nvbi5naG9zdC5pby9naG9zdC9hcGkvdjMvY29udGVudC9wb3N0cy8/a2V5PTY5MzkwMjI4NWZmMjc5ODlmN2FkMjgxY2Q4JmluY2x1ZGU9dGFncyZmaWVsZHM9aWQsdGl0bGUsc2x1ZyxmZWF0dXJlX2ltYWdlLHB1Ymxpc2hlZF9hdCZsaW1pdD01JnBhZ2U9JHtcbiAgICAgIHJlZnJlc2ggPyAxIDogcGFnZSArIDFcbiAgICB9JHtcbiAgICAgIHNlbGVjdGVkVGFnLm5hbWUgPT09IFwiQWxsXCIgPyBcIlwiIDogYCZmaWx0ZXI9dGFncy5pZDoke3NlbGVjdGVkVGFnLmlkfWBcbiAgICB9JiR7c29ydFN0cmluZ31gO1xuXG4gICAgQXhpb3MuZ2V0KGVuY29kZVVSSSh1cmxTdHJpbmcpKVxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICBzZXRQYWdlKHJlZnJlc2ggPyAxIDogcGFnZSArIDEpO1xuICAgICAgICBzZXRCbG9ncyhyZWZyZXNoID8gWy4uLnJlcy5kYXRhLnBvc3RzXSA6IFsuLi5ibG9ncywgLi4ucmVzLmRhdGEucG9zdHNdKTtcbiAgICAgICAgc2V0TmV4dFBhZ2UocmVzLmRhdGEubWV0YS5wYWdpbmF0aW9uLm5leHQpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZSkgPT4ge30pXG4gICAgICAuZmluYWxseSgoKSA9PiB7XG4gICAgICAgIHNldEZldGNoaW5nKGZhbHNlKTtcbiAgICAgIH0pO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZmV0Y2hEYXRhKHRydWUpO1xuICB9LCBbc2VsZWN0ZWRUYWcsIHNlbGVjdGVkU29ydE9wdGlvbl0pO1xuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImJvZHlcIj5cbiAgICAgIDxIZWFkUm93IC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YGJsb2dzICR7ZmV0Y2hpbmcgPyBcImZldGNoaW5nXCIgOiBcIlwifWB9PlxuICAgICAgICB7YmxvZ3NcbiAgICAgICAgICA/IGJsb2dzLm1hcCgoYmxvZywgaSkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gPEJsb2cgZGF0YT17YmxvZ30ga2V5PXtpfSAvPjtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgOiBcIlwifVxuICAgICAgPC9kaXY+XG4gICAgICA8SW5maW5pdGVTY3JvbGxcbiAgICAgICAgZGF0YUxlbmd0aD17YmxvZ3MubGVuZ3RofVxuICAgICAgICBuZXh0PXtmZXRjaERhdGF9XG4gICAgICAgIGhhc01vcmU9e25leHRQYWdlfVxuICAgICAgPjwvSW5maW5pdGVTY3JvbGw+XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmJvZHkge1xuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAzNXB4O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICAuc29ydC1kcm9wZG93biB7XG4gICAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIC5Ecm9wZG93bi1jb250cm9sIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICY6YWZ0ZXIge1xuICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgIHJpZ2h0OiAtMjBweDtcbiAgICAgICAgICAgICAgdG9wOiA2cHg7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMnB4O1xuICAgICAgICAgICAgICBoZWlnaHQ6IDEycHg7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoXCIvaW1nL2NhcmV0LWRvd24tZ3JleS5zdmdcIikgbm8tcmVwZWF0IGNlbnRlcjtcbiAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICAgICAgICAgICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICAgICAgICAgICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgICAgICAgICAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNXM7XG4gICAgICAgICAgICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNXM7XG4gICAgICAgICAgICAgIC1tcy10cmFuc2l0aW9uOiBhbGwgMC41cztcbiAgICAgICAgICAgICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNXM7XG4gICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjVzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICAuc29ydGJ5IHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEycHggMDtcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgICAgICAgICAgY29sb3I6ICMyMjFmMjA7XG4gICAgICAgICAgICBtaW4td2lkdGg6IDE4MHB4O1xuICAgICAgICAgICAgei1pbmRleDogNDAwO1xuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgICAgICAgICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gICAgICAgICAgICAtbXMtdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gICAgICAgICAgICAtby10cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICAgICAgICAgICAgLkRyb3Bkb3duLW9wdGlvbiB7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDEycHg7XG4gICAgICAgICAgICAgIGNvbG9yOiAjMjIxZjIwO1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZDFkMWQxO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgICYuaXMtb3BlbiB7XG4gICAgICAgICAgICAuRHJvcGRvd24tY29udHJvbDphZnRlciB7XG4gICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbiAgICAgICAgICAgICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xuICAgICAgICAgICAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbiAgICAgICAgICAgICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBCb2R5O1xuIl19 */\n/*@ sourceURL=/Users/baijutoms/Documents/Works/Web/next/viska/m-and-m/components/home/Blogs.js */"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3906005993",
    __self: undefined
  }, ".sort-dropdown{color:#ffffff;border:none;background:transparent;padding:0;cursor:pointer;}.sort-dropdown .Dropdown-control{position:relative;}.sort-dropdown .Dropdown-control:after{content:\"\";position:absolute;right:-20px;top:6px;width:12px;height:12px;display:block;background:url(\"/img/caret-down-grey.svg\") no-repeat center;-webkit-transform:rotate(0deg);-moz-transform:rotate(0deg);-ms-transform:rotate(0deg);-o-transform:rotate(0deg);-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);-webkit-transition:all 0.5s;-moz-transition:all 0.5s;-ms-transition:all 0.5s;-o-transition:all 0.5s;-webkit-transition:all 0.5s;transition:all 0.5s;}.sort-dropdown .sortby{padding:12px 0;right:0;overflow:hidden;position:absolute;text-align:left;background:#ffffff;color:#221f20;min-width:180px;z-index:400;-webkit-transition:all 0.3s;-moz-transition:all 0.3s;-ms-transition:all 0.3s;-o-transition:all 0.3s;-webkit-transition:all 0.3s;transition:all 0.3s;}.sort-dropdown .sortby .Dropdown-option{padding:12px;color:#221f20;background:#ffffff;}.sort-dropdown .sortby .Dropdown-option:hover{background:#d1d1d1;}.sort-dropdown.is-open .Dropdown-control:after{-webkit-transform:rotate(180deg);-moz-transform:rotate(180deg);-ms-transform:rotate(180deg);-o-transform:rotate(180deg);-webkit-transform:rotate(180deg);-ms-transform:rotate(180deg);transform:rotate(180deg);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9iYWlqdXRvbXMvRG9jdW1lbnRzL1dvcmtzL1dlYi9uZXh0L3Zpc2thL20tYW5kLW0vY29tcG9uZW50cy9ob21lL0Jsb2dzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlFeUIsQUFFaUIsQUFNTSxBQUVMLEFBbUJFLEFBZUEsQUFJUSxBQUVVLFdBdkNiLEVBa0NKLENBMUNOLENBMkJGLEdBdEJXLENBd0NLLElBakJSLEdBM0JLLENBMENBLEVBbENQLElBdUNnQixNQW5CWixFQW5CUixLQWlDWSxHQXpDZCxBQVNLLFFBbUJHLEVBM0JILENBU0MsR0FxQ2UsU0FwQ2IsQ0FrQkcsQ0E1QkwsWUFXZ0QsTUFrQmhELEFBa0JjLGNBakJaLGNBa0JTLEVBakJiLFlBQ2dCLFlBcEJLLGdCQXFCUixlQXBCSyxVQXFCTixrQkFwQkssRUFrQ0gsSUFiSCxxQkFwQkssRUFxQlIsd0JBcEJLLHdCQW9CSix5REFuQlMsNEJBQ0gseUJBQ0Qsd0JBQ0QsdUJBQ0gsZ0RBQUMiLCJmaWxlIjoiL1VzZXJzL2JhaWp1dG9tcy9Eb2N1bWVudHMvV29ya3MvV2ViL25leHQvdmlza2EvbS1hbmQtbS9jb21wb25lbnRzL2hvbWUvQmxvZ3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQmxvZyBmcm9tIFwiLi9CbG9nXCI7XG5pbXBvcnQgSGVhZFJvdyBmcm9tIFwiLi9IZWFkLXJvd1wiO1xuaW1wb3J0IHsgQmxvZ3NDb250ZXh0IH0gZnJvbSBcIi4uLy4uL2NvbnRleHRzL2hvbWUvYmxvZ3MtY29udGV4dFwiO1xuaW1wb3J0IEluZmluaXRlU2Nyb2xsIGZyb20gXCJyZWFjdC1pbmZpbml0ZS1zY3JvbGwtY29tcG9uZW50XCI7XG5pbXBvcnQgQXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyBIZWFkZXJSb3dDb250ZXh0IH0gZnJvbSBcIi4uLy4uL2NvbnRleHRzL2hvbWUvSGVhZGVyLXJvdy1jb250ZXh0XCI7XG5jb25zb2xlLmxvZyhcIkFcIik7XG5jb25zdCBCb2R5ID0gKCkgPT4ge1xuICBjb25zb2xlLmxvZyhcImFcIik7XG4gIGNvbnN0IHsgYmxvZ3MsIHNldEJsb2dzLCBwYWdlLCBzZXRQYWdlIH0gPSB1c2VDb250ZXh0KEJsb2dzQ29udGV4dCk7XG4gIGNvbnN0IHsgc2VhcmNoLCBzZWxlY3RlZFRhZywgc2VsZWN0ZWRTb3J0T3B0aW9uIH0gPSB1c2VDb250ZXh0KFxuICAgIEhlYWRlclJvd0NvbnRleHRcbiAgKTtcbiAgY29uc3QgW25leHRQYWdlLCBzZXROZXh0UGFnZV0gPSB1c2VTdGF0ZSgxKTtcbiAgY29uc3QgW2ZldGNoaW5nLCBzZXRGZXRjaGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgZmV0Y2hEYXRhID0gKHJlZnJlc2gpID0+IHtcbiAgICBpZiAoZmV0Y2hpbmcpIHJldHVybjtcbiAgICBzZXRGZXRjaGluZyh0cnVlKTtcbiAgICBsZXQgc29ydFN0cmluZztcbiAgICBzd2l0Y2ggKHNlbGVjdGVkU29ydE9wdGlvbikge1xuICAgICAgY2FzZSBcIk5ld2VzdFwiOlxuICAgICAgICBzb3J0U3RyaW5nID0gXCJvcmRlcj1wdWJsaXNoZWRfYXQgREVTQ1wiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJPbGRlc3RcIjpcbiAgICAgICAgc29ydFN0cmluZyA9IFwib3JkZXI9cHVibGlzaGVkX2F0IEFTQ1wiO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBjb25zdCB1cmxTdHJpbmcgPSBgaHR0cHM6Ly9obHludXJoYWxsZG9yc3Nvbi5naG9zdC5pby9naG9zdC9hcGkvdjMvY29udGVudC9wb3N0cy8/a2V5PTY5MzkwMjI4NWZmMjc5ODlmN2FkMjgxY2Q4JmluY2x1ZGU9dGFncyZmaWVsZHM9aWQsdGl0bGUsc2x1ZyxmZWF0dXJlX2ltYWdlLHB1Ymxpc2hlZF9hdCZsaW1pdD01JnBhZ2U9JHtcbiAgICAgIHJlZnJlc2ggPyAxIDogcGFnZSArIDFcbiAgICB9JHtcbiAgICAgIHNlbGVjdGVkVGFnLm5hbWUgPT09IFwiQWxsXCIgPyBcIlwiIDogYCZmaWx0ZXI9dGFncy5pZDoke3NlbGVjdGVkVGFnLmlkfWBcbiAgICB9JiR7c29ydFN0cmluZ31gO1xuXG4gICAgQXhpb3MuZ2V0KGVuY29kZVVSSSh1cmxTdHJpbmcpKVxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICBzZXRQYWdlKHJlZnJlc2ggPyAxIDogcGFnZSArIDEpO1xuICAgICAgICBzZXRCbG9ncyhyZWZyZXNoID8gWy4uLnJlcy5kYXRhLnBvc3RzXSA6IFsuLi5ibG9ncywgLi4ucmVzLmRhdGEucG9zdHNdKTtcbiAgICAgICAgc2V0TmV4dFBhZ2UocmVzLmRhdGEubWV0YS5wYWdpbmF0aW9uLm5leHQpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZSkgPT4ge30pXG4gICAgICAuZmluYWxseSgoKSA9PiB7XG4gICAgICAgIHNldEZldGNoaW5nKGZhbHNlKTtcbiAgICAgIH0pO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZmV0Y2hEYXRhKHRydWUpO1xuICB9LCBbc2VsZWN0ZWRUYWcsIHNlbGVjdGVkU29ydE9wdGlvbl0pO1xuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImJvZHlcIj5cbiAgICAgIDxIZWFkUm93IC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YGJsb2dzICR7ZmV0Y2hpbmcgPyBcImZldGNoaW5nXCIgOiBcIlwifWB9PlxuICAgICAgICB7YmxvZ3NcbiAgICAgICAgICA/IGJsb2dzLm1hcCgoYmxvZywgaSkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gPEJsb2cgZGF0YT17YmxvZ30ga2V5PXtpfSAvPjtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgOiBcIlwifVxuICAgICAgPC9kaXY+XG4gICAgICA8SW5maW5pdGVTY3JvbGxcbiAgICAgICAgZGF0YUxlbmd0aD17YmxvZ3MubGVuZ3RofVxuICAgICAgICBuZXh0PXtmZXRjaERhdGF9XG4gICAgICAgIGhhc01vcmU9e25leHRQYWdlfVxuICAgICAgPjwvSW5maW5pdGVTY3JvbGw+XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmJvZHkge1xuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAzNXB4O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICAuc29ydC1kcm9wZG93biB7XG4gICAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIC5Ecm9wZG93bi1jb250cm9sIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICY6YWZ0ZXIge1xuICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgIHJpZ2h0OiAtMjBweDtcbiAgICAgICAgICAgICAgdG9wOiA2cHg7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMnB4O1xuICAgICAgICAgICAgICBoZWlnaHQ6IDEycHg7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoXCIvaW1nL2NhcmV0LWRvd24tZ3JleS5zdmdcIikgbm8tcmVwZWF0IGNlbnRlcjtcbiAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICAgICAgICAgICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICAgICAgICAgICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgICAgICAgICAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNXM7XG4gICAgICAgICAgICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNXM7XG4gICAgICAgICAgICAgIC1tcy10cmFuc2l0aW9uOiBhbGwgMC41cztcbiAgICAgICAgICAgICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNXM7XG4gICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjVzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICAuc29ydGJ5IHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEycHggMDtcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgICAgICAgICAgY29sb3I6ICMyMjFmMjA7XG4gICAgICAgICAgICBtaW4td2lkdGg6IDE4MHB4O1xuICAgICAgICAgICAgei1pbmRleDogNDAwO1xuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgICAgICAgICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gICAgICAgICAgICAtbXMtdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gICAgICAgICAgICAtby10cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICAgICAgICAgICAgLkRyb3Bkb3duLW9wdGlvbiB7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDEycHg7XG4gICAgICAgICAgICAgIGNvbG9yOiAjMjIxZjIwO1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZDFkMWQxO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgICYuaXMtb3BlbiB7XG4gICAgICAgICAgICAuRHJvcGRvd24tY29udHJvbDphZnRlciB7XG4gICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbiAgICAgICAgICAgICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xuICAgICAgICAgICAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbiAgICAgICAgICAgICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBCb2R5O1xuIl19 */\n/*@ sourceURL=/Users/baijutoms/Documents/Works/Web/next/viska/m-and-m/components/home/Blogs.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Body);

/***/ }),

/***/ "./components/home/Head-row.js":
/*!*************************************!*\
  !*** ./components/home/Head-row.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _head_row_Search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./head-row/Search */ "./components/home/head-row/Search.js");
/* harmony import */ var _head_row_Tags__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./head-row/Tags */ "./components/home/head-row/Tags.js");
/* harmony import */ var _head_row_Sort__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./head-row/Sort */ "./components/home/head-row/Sort.js");
/* harmony import */ var _contexts_home_Header_row_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../contexts/home/Header-row-context */ "./contexts/home/Header-row-context.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "/Users/baijutoms/Documents/Works/Web/next/viska/m-and-m/components/home/Head-row.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;







const HeadRow = () => {
  const {
    setTags
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_contexts_home_Header_row_context__WEBPACK_IMPORTED_MODULE_5__["HeaderRowContext"]);
  axios__WEBPACK_IMPORTED_MODULE_6___default.a.get("https://hlynurhalldorsson.ghost.io/ghost/api/v3/content/tags/?key=693902285ff27989f7ad281cd8").then(res => {
    const tags = res.data.tags.map(t => {
      return {
        name: t.name,
        id: t.id
      };
    });
    setTags([{
      name: "All",
      id: "All"
    }, ...tags]);
  });
  return __jsx("div", {
    className: "jsx-3998274497" + " " + "row top",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "jsx-3998274497" + " " + "left col-12 col-md-3 d-flex align-items-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }, __jsx(_head_row_Search__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: "jsx-3998274497" + " " + "middle col-12 col-md-7 d-flex",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  }, __jsx(_head_row_Tags__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: "jsx-3998274497" + " " + "right col-2 d-none d-md-block",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }
  }, __jsx(_head_row_Sort__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3998274497",
    __self: undefined
  }, ".top.jsx-3998274497 .left.jsx-3998274497,.top.jsx-3998274497 .middle.jsx-3998274497,.top.jsx-3998274497 .right.jsx-3998274497{height:107px;border-right:1px solid #4e4c4d;padding-top:36px;}@media (max-width:991px){.top.jsx-3998274497 .left.jsx-3998274497,.top.jsx-3998274497 .middle.jsx-3998274497,.top.jsx-3998274497 .right.jsx-3998274497{height:65px;padding:15px 0;}}@media (max-width:767px){.top.jsx-3998274497 .left.jsx-3998274497,.top.jsx-3998274497 .middle.jsx-3998274497,.top.jsx-3998274497 .right.jsx-3998274497{border-right:none;padding:0;}}@media (max-width:768px){.top.jsx-3998274497 .left.jsx-3998274497{padding:0 15px;}}.top.jsx-3998274497 .middle.jsx-3998274497{padding-left:20px;padding-right:20px;}@media (max-width:767px){.top.jsx-3998274497 .middle.jsx-3998274497{padding-left:15px;padding-right:15px;}}.top.jsx-3998274497 .right.jsx-3998274497{padding-left:30px;border:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9iYWlqdXRvbXMvRG9jdW1lbnRzL1dvcmtzL1dlYi9uZXh0L3Zpc2thL20tYW5kLW0vY29tcG9uZW50cy9ob21lL0hlYWQtcm93LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtDa0IsQUFJZ0IsQUFPRyxBQU1NLEFBS0wsQUFHQyxBQUlJLEFBSUosWUFyQkMsQ0FQWSxFQWlCYixHQUpKLEFBUUssQUFJSSxBQUlYLFNBdEJRLENBTUwsRUFnQkYsT0FSTyxBQUlJLE9BeEJQLGlCQUFDIiwiZmlsZSI6Ii9Vc2Vycy9iYWlqdXRvbXMvRG9jdW1lbnRzL1dvcmtzL1dlYi9uZXh0L3Zpc2thL20tYW5kLW0vY29tcG9uZW50cy9ob21lL0hlYWQtcm93LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNlYXJjaCBmcm9tIFwiLi9oZWFkLXJvdy9TZWFyY2hcIjtcbmltcG9ydCBUYWdzIGZyb20gXCIuL2hlYWQtcm93L1RhZ3NcIjtcbmltcG9ydCBTb3J0IGZyb20gXCIuL2hlYWQtcm93L1NvcnRcIjtcbmltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEhlYWRlclJvd0NvbnRleHQgfSBmcm9tIFwiLi4vLi4vY29udGV4dHMvaG9tZS9IZWFkZXItcm93LWNvbnRleHRcIjtcbmltcG9ydCBBeGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuY29uc3QgSGVhZFJvdyA9ICgpID0+IHtcbiAgY29uc3QgeyBzZXRUYWdzIH0gPSB1c2VDb250ZXh0KEhlYWRlclJvd0NvbnRleHQpO1xuICBBeGlvcy5nZXQoXG4gICAgXCJodHRwczovL2hseW51cmhhbGxkb3Jzc29uLmdob3N0LmlvL2dob3N0L2FwaS92My9jb250ZW50L3RhZ3MvP2tleT02OTM5MDIyODVmZjI3OTg5ZjdhZDI4MWNkOFwiXG4gICkudGhlbigocmVzKSA9PiB7XG4gICAgY29uc3QgdGFncyA9IHJlcy5kYXRhLnRhZ3MubWFwKCh0KSA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBuYW1lOiB0Lm5hbWUsXG4gICAgICAgIGlkOiB0LmlkLFxuICAgICAgfTtcbiAgICB9KTtcblxuICAgIHNldFRhZ3MoW3sgbmFtZTogXCJBbGxcIiwgaWQ6IFwiQWxsXCIgfSwgLi4udGFnc10pO1xuICB9KTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyB0b3BcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGVmdCBjb2wtMTIgY29sLW1kLTMgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxuICAgICAgICA8U2VhcmNoIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWlkZGxlIGNvbC0xMiBjb2wtbWQtNyBkLWZsZXhcIj5cbiAgICAgICAgPFRhZ3MgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgey8qIC5taWRkbGUgKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJpZ2h0IGNvbC0yIGQtbm9uZSBkLW1kLWJsb2NrXCI+XG4gICAgICAgIDxTb3J0IC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIHsvKiAucmlnaHQgKi99XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC50b3Age1xuICAgICAgICAgIC5sZWZ0LFxuICAgICAgICAgIC5taWRkbGUsXG4gICAgICAgICAgLnJpZ2h0IHtcbiAgICAgICAgICAgIGhlaWdodDogMTA3cHg7XG4gICAgICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjNGU0YzRkO1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDM2cHg7XG4gICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgICAgICAgICAgICAgaGVpZ2h0OiA2NXB4O1xuICAgICAgICAgICAgICBwYWRkaW5nOiAxNXB4IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICAubGVmdCB7XG4gICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgICAgICAgcGFkZGluZzogMCAxNXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICAubWlkZGxlIHtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICAucmlnaHQge1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZFJvdztcbiJdfQ== */\n/*@ sourceURL=/Users/baijutoms/Documents/Works/Web/next/viska/m-and-m/components/home/Head-row.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (HeadRow);

/***/ }),

/***/ "./components/home/Heading.js":
/*!************************************!*\
  !*** ./components/home/Heading.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/baijutoms/Documents/Works/Web/next/viska/m-and-m/components/home/Heading.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

const Heading = () => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    className: "jsx-4043747907" + " " + "heading-wrapper",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 7
    }
  }, __jsx("h1", {
    className: "jsx-4043747907",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 9
    }
  }, "Your weekly ", __jsx("span", {
    className: "jsx-4043747907",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 23
    }
  }, "Tech News")), __jsx("h2", {
    className: "jsx-4043747907",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, "The Mousepad")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4043747907",
    __self: undefined
  }, ".heading-wrapper.jsx-4043747907{padding:120px 0;}@media (max-width:992px){.heading-wrapper.jsx-4043747907{padding:30px 0;}}h1.jsx-4043747907{font-family:\"Apercu Regular\";font-size:48px;color:#bdbcbc;}@media (max-width:992px){h1.jsx-4043747907{font-size:24px;}}h1.jsx-4043747907 span.jsx-4043747907{font-family:\"Apercu Medium\";color:#ffffff;}h2.jsx-4043747907{font-family:\"Apercu Bold\";font-size:48px;color:#ffdb00;}@media (max-width:992px){h2.jsx-4043747907{font-size:36px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9iYWlqdXRvbXMvRG9jdW1lbnRzL1dvcmtzL1dlYi9uZXh0L3Zpc2thL20tYW5kLW0vY29tcG9uZW50cy9ob21lL0hlYWRpbmcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBU2tCLEFBRW1CLEFBR0csQUFHVSxBQUtWLEFBR1MsQUFJRixBQUtQLGVBcEJDLEFBUUEsQUFZQSxDQXZCSCxVQW1CRixFQUpELENBUkMsWUFhRCxDQUxDLEVBUEQsV0FZQyxHQVpBIiwiZmlsZSI6Ii9Vc2Vycy9iYWlqdXRvbXMvRG9jdW1lbnRzL1dvcmtzL1dlYi9uZXh0L3Zpc2thL20tYW5kLW0vY29tcG9uZW50cy9ob21lL0hlYWRpbmcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBIZWFkaW5nID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRpbmctd3JhcHBlclwiPlxuICAgICAgICA8aDE+XG4gICAgICAgICAgWW91ciB3ZWVrbHkgPHNwYW4+VGVjaCBOZXdzPC9zcGFuPlxuICAgICAgICA8L2gxPlxuICAgICAgICA8aDI+VGhlIE1vdXNlcGFkPC9oMj5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuaGVhZGluZy13cmFwcGVyIHtcbiAgICAgICAgICBwYWRkaW5nOiAxMjBweCAwO1xuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA5OTJweCkge1xuICAgICAgICAgICAgcGFkZGluZzogMzBweCAwO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBoMSB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IFwiQXBlcmN1IFJlZ3VsYXJcIjtcbiAgICAgICAgICBmb250LXNpemU6IDQ4cHg7XG4gICAgICAgICAgY29sb3I6ICNiZGJjYmM7XG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGgxIHNwYW4ge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkFwZXJjdSBNZWRpdW1cIjtcbiAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgfVxuICAgICAgICBoMiB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IFwiQXBlcmN1IEJvbGRcIjtcbiAgICAgICAgICBmb250LXNpemU6IDQ4cHg7XG4gICAgICAgICAgY29sb3I6ICNmZmRiMDA7XG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDM2cHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIZWFkaW5nO1xuIl19 */\n/*@ sourceURL=/Users/baijutoms/Documents/Works/Web/next/viska/m-and-m/components/home/Heading.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Heading);

/***/ }),

/***/ "./components/home/head-row/Search.js":
/*!********************************************!*\
  !*** ./components/home/head-row/Search.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _contexts_home_Header_row_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../contexts/home/Header-row-context */ "./contexts/home/Header-row-context.js");
var _jsxFileName = "/Users/baijutoms/Documents/Works/Web/next/viska/m-and-m/components/home/head-row/Search.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



const Search = () => {
  const {
    search,
    setSearch
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_contexts_home_Header_row_context__WEBPACK_IMPORTED_MODULE_2__["HeaderRowContext"]);
  const {
    0: tmpSearch,
    1: setTmpSearch
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("");
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("input", {
    type: "text",
    value: tmpSearch,
    onKeyDown: e => {
      if (e.key === "Enter") setSearch(tmpSearch);
    },
    onChange: e => setTmpSearch(e.target.value),
    placeholder: "Search for an article",
    className: "jsx-3764568066" + " " + "search form-control f-cap-r",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3764568066",
    __self: undefined
  }, ".search.jsx-3764568066{font-size:18px;color:#bdbcbc;background:url(/img/search.svg) no-repeat transparent;background-position:left center;border:none;outline:none;padding-left:43px;padding-top:9px;margin-top:-45px;}@media (max-width:992px){.search.jsx-3764568066{margin-top:0;}}@media (max-width:767px){.search.jsx-3764568066{font-size:14px;}}.search.jsx-3764568066::-webkit-input-placeholder{color:#bdbcbc;}.search.jsx-3764568066:-ms-input-placeholder{color:#bdbcbc;}.search.jsx-3764568066::-webkit-input-placeholder{color:#bdbcbc;}.search.jsx-3764568066::-moz-placeholder{color:#bdbcbc;}.search.jsx-3764568066:-ms-input-placeholder{color:#bdbcbc;}.search.jsx-3764568066::placeholder{color:#bdbcbc;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9iYWlqdXRvbXMvRG9jdW1lbnRzL1dvcmtzL1dlYi9uZXh0L3Zpc2thL20tYW5kLW0vY29tcG9uZW50cy9ob21lL2hlYWQtcm93L1NlYXJjaC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtQmtCLEFBRWtCLEFBV0UsQUFHRSxBQUdILEFBR0EsQUFFQSxhQVhFLENBTUQsQUFHQSxBQUVBLENBckJILEFBYU0sY0Faa0Msc0RBQ3RCLGdDQUNwQixZQUNDLGFBQ0ssa0JBQ0YsZ0JBQ0MsaUJBQUMiLCJmaWxlIjoiL1VzZXJzL2JhaWp1dG9tcy9Eb2N1bWVudHMvV29ya3MvV2ViL25leHQvdmlza2EvbS1hbmQtbS9jb21wb25lbnRzL2hvbWUvaGVhZC1yb3cvU2VhcmNoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgSGVhZGVyUm93Q29udGV4dCB9IGZyb20gXCIuLi8uLi8uLi9jb250ZXh0cy9ob21lL0hlYWRlci1yb3ctY29udGV4dFwiO1xuXG5jb25zdCBTZWFyY2ggPSAoKSA9PiB7XG4gIGNvbnN0IHsgc2VhcmNoLCBzZXRTZWFyY2ggfSA9IHVzZUNvbnRleHQoSGVhZGVyUm93Q29udGV4dCk7XG4gIGNvbnN0IFt0bXBTZWFyY2gsIHNldFRtcFNlYXJjaF0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8aW5wdXRcbiAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICBjbGFzc05hbWU9XCJzZWFyY2ggZm9ybS1jb250cm9sIGYtY2FwLXJcIlxuICAgICAgICB2YWx1ZT17dG1wU2VhcmNofVxuICAgICAgICBvbktleURvd249eyhlKSA9PiB7XG4gICAgICAgICAgaWYgKGUua2V5ID09PSBcIkVudGVyXCIpIHNldFNlYXJjaCh0bXBTZWFyY2gpO1xuICAgICAgICB9fVxuICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFRtcFNlYXJjaChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoIGZvciBhbiBhcnRpY2xlXCJcbiAgICAgIC8+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5zZWFyY2gge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICBjb2xvcjogI2JkYmNiYztcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoL2ltZy9zZWFyY2guc3ZnKSBuby1yZXBlYXQgdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogbGVmdCBjZW50ZXI7XG4gICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiA0M3B4O1xuICAgICAgICAgIHBhZGRpbmctdG9wOiA5cHg7XG4gICAgICAgICAgbWFyZ2luLXRvcDogLTQ1cHg7XG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgJjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gICAgICAgICAgICAvKiBFZGdlICovXG4gICAgICAgICAgICBjb2xvcjogI2JkYmNiYztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAmOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4gICAgICAgICAgICAvKiBJbnRlcm5ldCBFeHBsb3JlciAxMC0xMSAqL1xuICAgICAgICAgICAgY29sb3I6ICNiZGJjYmM7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgJjo6cGxhY2Vob2xkZXIge1xuICAgICAgICAgICAgY29sb3I6ICNiZGJjYmM7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTZWFyY2g7XG4iXX0= */\n/*@ sourceURL=/Users/baijutoms/Documents/Works/Web/next/viska/m-and-m/components/home/head-row/Search.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Search);

/***/ }),

/***/ "./components/home/head-row/Sort.js":
/*!******************************************!*\
  !*** ./components/home/head-row/Sort.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dropdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dropdown */ "react-dropdown");
/* harmony import */ var react_dropdown__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dropdown__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _contexts_home_Header_row_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../contexts/home/Header-row-context */ "./contexts/home/Header-row-context.js");
var _jsxFileName = "/Users/baijutoms/Documents/Works/Web/next/viska/m-and-m/components/home/head-row/Sort.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




const Sort = () => {
  const {
    sortOptions,
    selectedSortOption,
    setSelectedSortOption
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_contexts_home_Header_row_context__WEBPACK_IMPORTED_MODULE_3__["HeaderRowContext"]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    className: "jsx-3932088834" + " " + "sort d-flex",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }, __jsx("span", {
    className: "jsx-3932088834" + " " + "f-cap-r mr-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, "Sort by: "), __jsx(react_dropdown__WEBPACK_IMPORTED_MODULE_2___default.a, {
    options: sortOptions,
    value: selectedSortOption,
    onChange: e => setSelectedSortOption(e.value),
    className: "sort-dropdown f-cap-b",
    menuClassName: "sortby",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3932088834",
    __self: undefined
  }, ".sort.jsx-3932088834{color:#bdbcbc;font-size:18px;position:relative;}@media (max-width:1390px){.sort.jsx-3932088834 span.jsx-3932088834{display:none;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9iYWlqdXRvbXMvRG9jdW1lbnRzL1dvcmtzL1dlYi9uZXh0L3Zpc2thL20tYW5kLW0vY29tcG9uZW50cy9ob21lL2hlYWQtcm93L1NvcnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0JrQixBQUVpQixBQUtHLGFBQUMsQ0FKSCxlQUNHLGtCQUFDIiwiZmlsZSI6Ii9Vc2Vycy9iYWlqdXRvbXMvRG9jdW1lbnRzL1dvcmtzL1dlYi9uZXh0L3Zpc2thL20tYW5kLW0vY29tcG9uZW50cy9ob21lL2hlYWQtcm93L1NvcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgRHJvcGRvd24gZnJvbSBcInJlYWN0LWRyb3Bkb3duXCI7XG5pbXBvcnQgeyBIZWFkZXJSb3dDb250ZXh0IH0gZnJvbSBcIi4uLy4uLy4uL2NvbnRleHRzL2hvbWUvSGVhZGVyLXJvdy1jb250ZXh0XCI7XG5cbmNvbnN0IFNvcnQgPSAoKSA9PiB7XG4gIGNvbnN0IHsgc29ydE9wdGlvbnMsIHNlbGVjdGVkU29ydE9wdGlvbiwgc2V0U2VsZWN0ZWRTb3J0T3B0aW9uIH0gPSB1c2VDb250ZXh0KFxuICAgIEhlYWRlclJvd0NvbnRleHRcbiAgKTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzb3J0IGQtZmxleFwiPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmLWNhcC1yIG1yLTJcIj5Tb3J0IGJ5OiA8L3NwYW4+XG4gICAgICAgIDxEcm9wZG93blxuICAgICAgICAgIG9wdGlvbnM9e3NvcnRPcHRpb25zfVxuICAgICAgICAgIHZhbHVlPXtzZWxlY3RlZFNvcnRPcHRpb259XG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRTZWxlY3RlZFNvcnRPcHRpb24oZS52YWx1ZSl9XG4gICAgICAgICAgY2xhc3NOYW1lPVwic29ydC1kcm9wZG93biBmLWNhcC1iXCJcbiAgICAgICAgICBtZW51Q2xhc3NOYW1lPVwic29ydGJ5XCJcbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuc29ydCB7XG4gICAgICAgICAgY29sb3I6ICNiZGJjYmM7XG4gICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMzkwcHgpIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNvcnQ7XG4iXX0= */\n/*@ sourceURL=/Users/baijutoms/Documents/Works/Web/next/viska/m-and-m/components/home/head-row/Sort.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Sort);

/***/ }),

/***/ "./components/home/head-row/Tags.js":
/*!******************************************!*\
  !*** ./components/home/head-row/Tags.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _contexts_home_Header_row_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../contexts/home/Header-row-context */ "./contexts/home/Header-row-context.js");
var _jsxFileName = "/Users/baijutoms/Documents/Works/Web/next/viska/m-and-m/components/home/head-row/Tags.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



const Tags = () => {
  const {
    tags,
    selectedTag,
    setSelectedTag
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_contexts_home_Header_row_context__WEBPACK_IMPORTED_MODULE_2__["HeaderRowContext"]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    className: "jsx-21670867" + " " + "tag-nav-wrapper d-flex",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }, __jsx("ul", {
    className: "jsx-21670867" + " " + "tag-nav list-unstyled f-ap-r d-flex",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }, tags.map(tag => {
    return __jsx("li", {
      key: tag.name,
      onClick: () => setSelectedTag(tag),
      className: "jsx-21670867" + " " + `tag-nav-item ${tag.name === selectedTag.name ? "active" : ""}`,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 15
      }
    }, tag.name);
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "21670867",
    __self: undefined
  }, ".tag-nav-wrapper.jsx-21670867{overflow:hidden;height:60px;margin-top:-5px;white-space:nowrap;}.tag-nav-wrapper.jsx-21670867 .tag-nav.jsx-21670867{padding-top:5px;padding-bottom:15px;overflow-y:hidden;overflow-x:auto;}.tag-nav-wrapper.jsx-21670867 .tag-nav.jsx-21670867::-webkit-scrollbar{height:2px;}.tag-nav-wrapper.jsx-21670867 .tag-nav.jsx-21670867::-webkit-scrollbar-track{background:#bdbcbcaa;}.tag-nav-wrapper.jsx-21670867 .tag-nav.jsx-21670867::-webkit-scrollbar-thumb{background:#bdbcbc;}.tag-nav-wrapper.jsx-21670867 .tag-nav.jsx-21670867 .tag-nav-item.jsx-21670867{color:#bdbcbc;font-size:18px;margin:0 20px;cursor:pointer;position:relative;-webkit-transition:all 0.5s;-moz-transition:all 0.5s;-ms-transition:all 0.5s;-o-transition:all 0.5s;-webkit-transition:all 0.5s;transition:all 0.5s;}@media (max-width:767px){.tag-nav-wrapper.jsx-21670867 .tag-nav.jsx-21670867 .tag-nav-item.jsx-21670867{font-size:14px;}}.tag-nav-wrapper.jsx-21670867 .tag-nav.jsx-21670867 .tag-nav-item.jsx-21670867:hover{color:#ffffff;}.tag-nav-wrapper.jsx-21670867 .tag-nav.jsx-21670867 .tag-nav-item.active.jsx-21670867{color:#ffffff;}@media (max-width:767px){.tag-nav-wrapper.jsx-21670867 .tag-nav.jsx-21670867 .tag-nav-item.jsx-21670867:first-of-type{margin-left:0;}}.tag-nav-item.jsx-21670867:after{content:\"\";position:absolute;left:0;top:30px;width:100%;height:2px;background:transparent;-webkit-transition:all 0.5s;-moz-transition:all 0.5s;-ms-transition:all 0.5s;-o-transition:all 0.5s;-webkit-transition:all 0.5s;transition:all 0.5s;}.tag-nav-item.active.jsx-21670867:after,.tag-nav-item.jsx-21670867:hover.jsx-21670867:after{background:#ffdb00;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9iYWlqdXRvbXMvRG9jdW1lbnRzL1dvcmtzL1dlYi9uZXh0L3Zpc2thL20tYW5kLW0vY29tcG9uZW50cy9ob21lL2hlYWQtcm93L1RhZ3MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0JrQixBQUVtQixBQUtFLEFBT0gsQUFFVSxBQUVGLEFBRUwsQUFZSyxBQUVILEFBRUEsQUFHRSxBQUdYLEFBZVEsV0EzQ0gsQUE2QkUsR0F0QkMsQUFhRSxBQUVBLEFBR0UsQ0FQQyxDQTdCWixBQUtVLEdBVUUsQUF1Q0osRUF6Q00sT0FaVixDQWtCRSxBQXNCWCxPQW5DYSxBQW9DWCxPQXRCVSxDQWxCQSxDQXlDUixTQXBDTyxFQXFDUCxFQXZCVyxLQW5CRixJQTJDRyxHQXBDUixNQWFpQixjQXdCSixjQXZCQyxjQXdCSixXQXZCRyxjQXdCSixVQXZCRyxjQXdCSixTQXZCQyxjQXdCSixrQ0F4QkssY0F3QkoiLCJmaWxlIjoiL1VzZXJzL2JhaWp1dG9tcy9Eb2N1bWVudHMvV29ya3MvV2ViL25leHQvdmlza2EvbS1hbmQtbS9jb21wb25lbnRzL2hvbWUvaGVhZC1yb3cvVGFncy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEhlYWRlclJvd0NvbnRleHQgfSBmcm9tIFwiLi4vLi4vLi4vY29udGV4dHMvaG9tZS9IZWFkZXItcm93LWNvbnRleHRcIjtcblxuY29uc3QgVGFncyA9ICgpID0+IHtcbiAgY29uc3QgeyB0YWdzLCBzZWxlY3RlZFRhZywgc2V0U2VsZWN0ZWRUYWcgfSA9IHVzZUNvbnRleHQoSGVhZGVyUm93Q29udGV4dCk7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFnLW5hdi13cmFwcGVyIGQtZmxleFwiPlxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwidGFnLW5hdiBsaXN0LXVuc3R5bGVkIGYtYXAtciBkLWZsZXhcIj5cbiAgICAgICAgICB7dGFncy5tYXAoKHRhZykgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPGxpXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgdGFnLW5hdi1pdGVtICR7XG4gICAgICAgICAgICAgICAgICB0YWcubmFtZSA9PT0gc2VsZWN0ZWRUYWcubmFtZSA/IFwiYWN0aXZlXCIgOiBcIlwiXG4gICAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICAgICAga2V5PXt0YWcubmFtZX1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTZWxlY3RlZFRhZyh0YWcpfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge3RhZy5uYW1lfVxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC91bD5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAudGFnLW5hdi13cmFwcGVyIHtcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgIGhlaWdodDogNjBweDtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAtNXB4O1xuICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICAgLnRhZy1uYXYge1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDVweDtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xuICAgICAgICAgICAgb3ZlcmZsb3cteTogaGlkZGVuO1xuICAgICAgICAgICAgb3ZlcmZsb3cteDogYXV0bztcbiAgICAgICAgICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAycHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvKiBUcmFjayAqL1xuICAgICAgICAgICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjYmRiY2JjYWE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvKiBIYW5kbGUgKi9cbiAgICAgICAgICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2JkYmNiYztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC50YWctbmF2LWl0ZW0ge1xuICAgICAgICAgICAgICBjb2xvcjogI2JkYmNiYztcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgICBtYXJnaW46IDAgMjBweDtcbiAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNXM7XG4gICAgICAgICAgICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNXM7XG4gICAgICAgICAgICAgIC1tcy10cmFuc2l0aW9uOiBhbGwgMC41cztcbiAgICAgICAgICAgICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNXM7XG4gICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjVzO1xuICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgJi5hY3RpdmUge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICY6Zmlyc3Qtb2YtdHlwZSB7XG4gICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLnRhZy1uYXYtaXRlbTphZnRlciB7XG4gICAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICB0b3A6IDMwcHg7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgaGVpZ2h0OiAycHg7XG4gICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC41cztcbiAgICAgICAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjVzO1xuICAgICAgICAgIC1tcy10cmFuc2l0aW9uOiBhbGwgMC41cztcbiAgICAgICAgICAtby10cmFuc2l0aW9uOiBhbGwgMC41cztcbiAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC41cztcbiAgICAgICAgfVxuICAgICAgICAudGFnLW5hdi1pdGVtLmFjdGl2ZTphZnRlcixcbiAgICAgICAgLnRhZy1uYXYtaXRlbTpob3ZlcjphZnRlciB7XG4gICAgICAgICAgYmFja2dyb3VuZDogI2ZmZGIwMDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVGFncztcbiJdfQ== */\n/*@ sourceURL=/Users/baijutoms/Documents/Works/Web/next/viska/m-and-m/components/home/head-row/Tags.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Tags);

/***/ }),

/***/ "./contexts/home/Header-row-context.js":
/*!*********************************************!*\
  !*** ./contexts/home/Header-row-context.js ***!
  \*********************************************/
/*! exports provided: HeaderRowContext, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderRowContext", function() { return HeaderRowContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/baijutoms/Documents/Works/Web/next/viska/m-and-m/contexts/home/Header-row-context.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const HeaderRowContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])();

const HeaderRowContextProvider = props => {
  const {
    0: search,
    1: setSearch
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const {
    0: tags,
    1: setTags
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: selectedTag,
    1: setSelectedTag
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    name: "All",
    id: "All"
  });
  const sortOptions = ["Newest", "Oldest"];
  const {
    0: selectedSortOption,
    1: setSelectedSortOption
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(sortOptions[1]);
  return __jsx(HeaderRowContext.Provider, {
    value: {
      search,
      tags,
      setTags,
      selectedTag,
      sortOptions,
      selectedSortOption,
      setSearch,
      setSelectedTag,
      setSelectedSortOption
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 5
    }
  }, props.children);
};

/* harmony default export */ __webpack_exports__["default"] = (HeaderRowContextProvider);

/***/ }),

/***/ "./contexts/home/blogs-context.js":
/*!****************************************!*\
  !*** ./contexts/home/blogs-context.js ***!
  \****************************************/
/*! exports provided: BlogsContext, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogsContext", function() { return BlogsContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/baijutoms/Documents/Works/Web/next/viska/m-and-m/contexts/home/blogs-context.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const BlogsContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])();

const BlogsContextProvider = props => {
  const {
    0: blogs,
    1: setBlogs
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: page,
    1: setPage
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0); // first, keep blogs null to help easily fetch the data

  return __jsx(BlogsContext.Provider, {
    value: {
      blogs,
      page,
      setBlogs,
      setPage
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }, props.children);
};

/* harmony default export */ __webpack_exports__["default"] = (BlogsContextProvider);

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _url = __webpack_require__(/*! url */ "url");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../next-server/lib/utils");

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _router2 = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new Map();
var IntersectionObserver = false ? undefined : null;
var prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: (0, _router2.addBasePath)(formatUrl(href)),
        as: asHref ? (0, _router2.addBasePath)(formatUrl(asHref)) : asHref
      };
    });

    this.linkClicked = e => {
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getPaths() {
    var {
      pathname
    } = window.location;
    var {
      href: parsedHref,
      as: parsedAs
    } = this.formatUrls(this.props.href, this.props.as);
    var resolvedHref = (0, _url.resolve)(pathname, parsedHref);
    return [resolvedHref, parsedAs ? (0, _url.resolve)(pathname, parsedAs) : resolvedHref];
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      var isPrefetched = prefetched[this.getPaths().join( // Join on an invalid URI character
      '%')];

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch(options) {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var paths = this.getPaths(); // We need to handle a prefetch error here since we may be
    // loading with priority which can reject but we don't
    // want to force navigation since this is only a prefetch

    _router.default.prefetch(paths[
    /* href */
    0], paths[
    /* asPath */
    1], options).catch(err => {
      if (true) {
        // rethrow to show invalid URL errors
        throw err;
      }
    });

    prefetched[paths.join( // Join on an invalid URI character
    '%')] = true;
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch({
          priority: true
        });
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) { var rewriteUrlForNextExport; }

    return _react.default.cloneElement(child, props);
  }

}

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var PropTypes = __webpack_require__(/*! prop-types */ "prop-types");

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact"); // @ts-ignore the property is supported, when declaring it on the class it outputs an extra bit of code which is not needed.


  Link.propTypes = exact({
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    prefetch: PropTypes.bool,
    replace: PropTypes.bool,
    shallow: PropTypes.bool,
    passHref: PropTypes.bool,
    scroll: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, (props, propName) => {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

Object.defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

const basePath =  false || '';

function addBasePath(path) {
  return path.indexOf(basePath) !== 0 ? basePath + path : path;
}

exports.addBasePath = addBasePath;

function delBasePath(path) {
  return path.indexOf(basePath) === 0 ? path.substr(basePath.length) || '/' : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

const prepareRoute = path => toRoute(!path || path === '/' ? '/index' : path);

function fetchNextData(pathname, query, isServerRender, cb) {
  let attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch(utils_1.formatWithValidation({
      // @ts-ignore __NEXT_DATA__
      pathname: `/_next/data/${__NEXT_DATA__.buildId}${pathname}.json`,
      query
    }), {
      // Cookies are required to be present for Next.js' SSG "Preview Mode".
      // Cookies may also be required for `getServerSideProps`.
      //
      // > `fetch` won’t send cookies, unless you set the credentials init
      // > option.
      // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
      //
      // > For maximum browser compatibility when it comes to sending &
      // > receiving cookies, always supply the `credentials: 'same-origin'`
      // > option instead of relying on the default.
      // https://github.com/github/fetch#caveats
      credentials: 'same-origin'
    }).then(res => {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error(`Failed to load static props`);
      }

      return res.json();
    });
  }

  return getResponse().then(data => {
    return cb ? cb(data) : data;
  }).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
  }) {
    // Static Data Cache
    this.sdc = {};

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.as === this.asPath && url_1.parse(e.state.url).pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    };

    this._getStaticData = asPath => {
      const pathname = prepareRoute(url_1.parse(asPath).pathname);
      return  false ? undefined : fetchNextData(pathname, null, this.isSsr, data => this.sdc[pathname] = data);
    };

    this._getServerData = asPath => {
      let {
        pathname,
        query
      } = url_1.parse(asPath, true);
      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, this.isSsr);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign(Object.assign({}, data), {
      Component,
      __N_SSG: mod.__N_SSG,
      __N_SSP: mod.__N_SSP
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      let url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as;
      url = addBasePath(url);
      as = addBasePath(as); // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, as, options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      }

      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const routeRegex = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (true) {
              console.warn(`Mismatching \`as\` and \`href\` failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
            }

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/zeit/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, as, options);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        }

        this.set(route, pathname, query, as, routeInfo);

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      window.history[method]({
        url,
        as,
        options
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    const handleError = (err, loadErrorFail) => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR' || loadErrorFail) {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(res => {
          const {
            page: Component
          } = res;
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }).catch(err => handleError(err, true)));
      });
    };

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(res => resolve({
        Component: res.page,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }), reject);
    }).then(routeInfo => {
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return this._getData(() => __N_SSG ? this._getStaticData(as) : __N_SSP ? this._getServerData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(handleError);
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch page code, you may wait for the data during page rendering.
   * This feature only works in production!
   * @param url the href of prefetched page
   * @param asPath the as path of the prefetched page
   */


  prefetch(url, asPath = url, options = {}) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) {
        return;
      }

      const route = delBasePath(toRoute(pathname));
      Promise.all([this.pageLoader.prefetchData(url, delBasePath(asPath)), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]).then(() => resolve(), reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    route = delBasePath(route);
    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return utils_1.loadGetInitialProps(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = mitt_1.default();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  var _a;

  if (true) {
    if ((_a = App.prototype) === null || _a === void 0 ? void 0 : _a.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_Home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Home */ "./components/Home.js");
/* harmony import */ var _contexts_home_Header_row_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../contexts/home/Header-row-context */ "./contexts/home/Header-row-context.js");
/* harmony import */ var _contexts_home_blogs_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../contexts/home/blogs-context */ "./contexts/home/blogs-context.js");
var _jsxFileName = "/Users/baijutoms/Documents/Works/Web/next/viska/m-and-m/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





function Index() {
  return __jsx(_contexts_home_Header_row_context__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, __jsx(_contexts_home_blogs_context__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }, __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 11
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }
  }, "Men & Mice")), __jsx(_components_Home__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 11
    }
  }))));
}

/***/ }),

/***/ "./public/css/global.css":
/*!*******************************!*\
  !*** ./public/css/global.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/baijutoms/Documents/Works/Web/next/viska/m-and-m/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-dropdown":
/*!*********************************!*\
  !*** external "react-dropdown" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dropdown");

/***/ }),

/***/ "react-infinite-scroll-component":
/*!**************************************************!*\
  !*** external "react-infinite-scroll-component" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-infinite-scroll-component");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map