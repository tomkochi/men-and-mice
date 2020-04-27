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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

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
var _jsxFileName = "/Users/baijutoms/Documents/Works/Web/next/viska/m-and-m/components/Header.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

const Header = () => {
  return __jsx("div", {
    className: "jsx-4103486568" + " " + "header",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3,
      columnNumber: 5
    }
  }, __jsx("nav", {
    className: "jsx-4103486568" + " " + "navbar navbar-expand-lg navbar-dark bg-transparent",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 7
    }
  }, __jsx("a", {
    href: "#",
    className: "jsx-4103486568" + " " + "navbar-brand",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: "/img/logo-white.svg",
    width: "76",
    alt: "",
    className: "jsx-4103486568",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 11
    }
  })), __jsx("button", {
    type: "button",
    "data-toggle": "collapse",
    "data-target": "#navbarSupportedContent",
    "aria-controls": "navbarSupportedContent",
    "aria-expanded": "false",
    "aria-label": "Toggle navigation",
    className: "jsx-4103486568" + " " + "navbar-toggler border-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: "/img/sandwich.svg",
    className: "jsx-4103486568",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 11
    }
  })), __jsx("div", {
    id: "navbarSupportedContent",
    className: "jsx-4103486568" + " " + "collapse navbar-collapse",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }, __jsx("ul", {
    className: "jsx-4103486568" + " " + "navbar-nav middle m-auto",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 11
    }
  }, __jsx("li", {
    className: "jsx-4103486568" + " " + "nav-item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: "#",
    className: "jsx-4103486568" + " " + "nav-link",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 15
    }
  }, "Why us?")), __jsx("li", {
    className: "jsx-4103486568" + " " + "nav-item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: "#",
    className: "jsx-4103486568" + " " + "nav-link",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 15
    }
  }, "Products")), __jsx("li", {
    className: "jsx-4103486568" + " " + "nav-item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: "#",
    className: "jsx-4103486568" + " " + "nav-link",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 15
    }
  }, "Customers")), __jsx("li", {
    className: "jsx-4103486568" + " " + "nav-item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: "#",
    className: "jsx-4103486568" + " " + "nav-link",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 15
    }
  }, "Resources")), __jsx("li", {
    className: "jsx-4103486568" + " " + "nav-item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: "#",
    className: "jsx-4103486568" + " " + "nav-link",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 15
    }
  }, "Support"))), __jsx("ul", {
    className: "jsx-4103486568" + " " + "navbar-nav",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 11
    }
  }, __jsx("li", {
    className: "jsx-4103486568" + " " + "nav-item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: "#",
    className: "jsx-4103486568" + " " + "nav-link",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 15
    }
  }, __jsx("svg", {
    width: "22",
    height: "20",
    viewBox: "0 0 22 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "jsx-4103486568",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 17
    }
  }, __jsx("path", {
    d: "M1 16.3286V7.68164H6.50261V16.3286C6.50261 17.8481 5.27081 19.0799 3.7513 19.0799C2.2318 19.0799 1 17.8481 1 16.3286Z",
    stroke: "white",
    strokeWidth: "1.5",
    className: "jsx-4103486568",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 19
    }
  }), __jsx("path", {
    d: "M4.14441 19.08H16.8459C18.9481 19.08 20.6522 17.3759 20.6522 15.2737V1H6.50267V8.99692",
    stroke: "white",
    strokeWidth: "1.5",
    className: "jsx-4103486568",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 19
    }
  }), __jsx("path", {
    d: "M9.25378 4.93042H18.2938",
    stroke: "white",
    strokeWidth: "1.5",
    className: "jsx-4103486568",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 19
    }
  }), __jsx("path", {
    d: "M9.25378 8.07471H18.2938",
    stroke: "white",
    strokeWidth: "1.5",
    className: "jsx-4103486568",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 19
    }
  }), __jsx("path", {
    d: "M9.25378 11.2192H18.2938",
    stroke: "white",
    strokeWidth: "1.5",
    className: "jsx-4103486568",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 19
    }
  })))), __jsx("li", {
    className: "jsx-4103486568" + " " + "nav-item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: "#",
    className: "jsx-4103486568" + " " + "nav-link",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 15
    }
  }, __jsx("svg", {
    width: "23",
    height: "22",
    viewBox: "0 0 23 22",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "jsx-4103486568",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 17
    }
  }, __jsx("ellipse", {
    cx: "11.8261",
    cy: "7.73073",
    rx: "2.88462",
    ry: "3.07692",
    stroke: "white",
    strokeWidth: "1.75",
    className: "jsx-4103486568",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 19
    }
  }), __jsx("path", {
    d: "M20.0985 17.0203C18.0012 14.8575 15.0343 13.5085 11.745 13.5085C8.45571 13.5085 5.48875 14.8575 3.39148 17.0203",
    stroke: "white",
    strokeWidth: "1.75",
    className: "jsx-4103486568",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 19
    }
  }), __jsx("circle", {
    cx: "11.826",
    cy: "11",
    r: "10",
    stroke: "white",
    strokeWidth: "1.75",
    className: "jsx-4103486568",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 19
    }
  })))), __jsx("li", {
    className: "jsx-4103486568" + " " + "nav-item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: "#",
    className: "jsx-4103486568" + " " + "nav-link",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 15
    }
  }, __jsx("svg", {
    width: "20",
    height: "19",
    viewBox: "0 0 20 19",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "jsx-4103486568",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 17
    }
  }, __jsx("circle", {
    cx: "11.3713",
    cy: "7.95455",
    r: "6.95455",
    stroke: "white",
    strokeWidth: "1.75",
    className: "jsx-4103486568",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 19
    }
  }), __jsx("path", {
    d: "M1.32593 17.9999L6.73502 12.5908",
    stroke: "white",
    strokeWidth: "1.75",
    className: "jsx-4103486568",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 19
    }
  })))), __jsx("li", {
    className: "jsx-4103486568" + " " + "nav-item pl-3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: "#",
    className: "jsx-4103486568" + " " + "nav-link free-trial",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 15
    }
  }, __jsx("button", {
    className: "jsx-4103486568",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 17
    }
  }, "Free trial")))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4103486568",
    __self: undefined
  }, ".header.jsx-4103486568 nav.jsx-4103486568{padding:37px 50px;background:white;}@media (max-width:1030px){.header.jsx-4103486568 nav.jsx-4103486568{padding:30px;}}.header.jsx-4103486568 nav.jsx-4103486568 ul.middle.jsx-4103486568 li.jsx-4103486568{padding:0 22px;}@media (max-width:1140px){.header.jsx-4103486568 nav.jsx-4103486568 ul.middle.jsx-4103486568 li.jsx-4103486568{padding:0 15px;}}@media (max-width:1070px){.header.jsx-4103486568 nav.jsx-4103486568 ul.middle.jsx-4103486568 li.jsx-4103486568{padding:0 10px;}}.header.jsx-4103486568 nav.jsx-4103486568 ul.jsx-4103486568:first-of-type li.jsx-4103486568 a.jsx-4103486568{position:relative;}.header.jsx-4103486568 nav.jsx-4103486568 ul.jsx-4103486568:first-of-type li.jsx-4103486568 a.jsx-4103486568:after{content:\"\";position:absolute;left:0;bottom:0;width:100%;height:2px;background:transparent;-webkit-transition:all 0.5s;-moz-transition:all 0.5s;-ms-transition:all 0.5s;-o-transition:all 0.5s;-webkit-transition:all 0.5s;transition:all 0.5s;-webkit-transform:translateY(20px);-moz-transform:translateY(20px);-ms-transform:translateY(20px);-o-transform:translateY(20px);-webkit-transform:translateY(20px);-ms-transform:translateY(20px);transform:translateY(20px);}.header.jsx-4103486568 nav.jsx-4103486568 ul.jsx-4103486568:first-of-type li.jsx-4103486568 a.jsx-4103486568:hover.jsx-4103486568:after{background:#ffdb00;-webkit-transform:translateY(0);-moz-transform:translateY(0);-ms-transform:translateY(0);-o-transform:translateY(0);-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);}.header.jsx-4103486568 nav.jsx-4103486568 ul.jsx-4103486568 li.jsx-4103486568{margin-top:auto;margin-bottom:auto;position:relative;text-align:center;}.header.jsx-4103486568 nav.jsx-4103486568 ul.jsx-4103486568 li.jsx-4103486568 a.jsx-4103486568{font-family:\"Apercu Medium\";font-size:18px;color:white !important;}.header.jsx-4103486568 nav.jsx-4103486568 ul.jsx-4103486568 li.jsx-4103486568 a.jsx-4103486568 svg.jsx-4103486568 *.jsx-4103486568{-webkit-transition:all 0.5s;-moz-transition:all 0.5s;-ms-transition:all 0.5s;-o-transition:all 0.5s;-webkit-transition:all 0.5s;transition:all 0.5s;}.header.jsx-4103486568 nav.jsx-4103486568 ul.jsx-4103486568 li.jsx-4103486568 a.jsx-4103486568:hover svg.jsx-4103486568 *.jsx-4103486568{stroke:#ffdb00;}.header.jsx-4103486568 nav.jsx-4103486568 ul.jsx-4103486568 li.jsx-4103486568 button.jsx-4103486568{font-size:16px;color:#221f20;padding:12px 18px;background:#ffdb00;border:none;-webkit-border-radius:0;-moz-border-radius:0;border-radius:0;-webkit-transition:background 0.5s;-moz-transition:background 0.5s;-ms-transition:background 0.5s;-o-transition:background 0.5s;-webkit-transition:background 0.5s;transition:background 0.5s;}.header.jsx-4103486568 nav.jsx-4103486568 ul.jsx-4103486568 li.jsx-4103486568 button.jsx-4103486568:hover{background:white;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9iYWlqdXRvbXMvRG9jdW1lbnRzL1dvcmtzL1dlYi9uZXh0L3Zpc2thL20tYW5kLW0vY29tcG9uZW50cy9IZWFkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0prQixBQUVxQixBQUlELEFBRUEsQUFHSSxBQUdBLEFBRUQsQUFFTCxBQWtCUSxBQU9MLEFBS2MsQUFJRSxBQU1iLEFBRUYsQUFjSSxXQXZERCxFQWJKLEVBRUEsQUFHSSxBQUdBLEFBNENBLEFBR0osQ0FqQkcsQ0E4QkcsQ0F2RVAsQUFhSSxDQXFCZSxTQVlqQixBQUlZLENBakNwQixBQTBDVyxNQTNESixBQTBDRSxDQXhCUCxPQTZCYyxFQTVCWixFQXlDUSxJQXpCVSxFQVFiLEFBUVUsR0EvQmYsVUEyQmEsQUFjWixDQXhDVyxJQXNCTixNQVNRLENBVUQsRUExQkksVUFkQSxVQStCTixFQVVELE1BMUJNLFVBZEYsS0F5Q1QsWUExQlEsSUEyQlcsSUF6Q1gsS0E2QkQsbUJBNUJBLE9BeUNTLGdCQXhDWixnQkF5Q1csYUE3Qk4sa0JBOEJLLENBekNLLDZCQTBDUixNQXpDSyxnQ0FDRCx3QkF3Q0gsT0F2Q0UsOEJBQ0gsNkZBQUMiLCJmaWxlIjoiL1VzZXJzL2JhaWp1dG9tcy9Eb2N1bWVudHMvV29ya3MvV2ViL25leHQvdmlza2EvbS1hbmQtbS9jb21wb25lbnRzL0hlYWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IEhlYWRlciA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlclwiPlxuICAgICAgPG5hdiBjbGFzc05hbWU9XCJuYXZiYXIgbmF2YmFyLWV4cGFuZC1sZyBuYXZiYXItZGFyayBiZy10cmFuc3BhcmVudFwiPlxuICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXZiYXItYnJhbmRcIiBocmVmPVwiI1wiPlxuICAgICAgICAgIDxpbWcgc3JjPVwiL2ltZy9sb2dvLXdoaXRlLnN2Z1wiIHdpZHRoPVwiNzZcIiBhbHQ9XCJcIiAvPlxuICAgICAgICA8L2E+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBjbGFzc05hbWU9XCJuYXZiYXItdG9nZ2xlciBib3JkZXItMFwiXG4gICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiXG4gICAgICAgICAgZGF0YS10YXJnZXQ9XCIjbmF2YmFyU3VwcG9ydGVkQ29udGVudFwiXG4gICAgICAgICAgYXJpYS1jb250cm9scz1cIm5hdmJhclN1cHBvcnRlZENvbnRlbnRcIlxuICAgICAgICAgIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiXG4gICAgICAgICAgYXJpYS1sYWJlbD1cIlRvZ2dsZSBuYXZpZ2F0aW9uXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxpbWcgc3JjPVwiL2ltZy9zYW5kd2ljaC5zdmdcIiAvPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xsYXBzZSBuYXZiYXItY29sbGFwc2VcIiBpZD1cIm5hdmJhclN1cHBvcnRlZENvbnRlbnRcIj5cbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2YmFyLW5hdiBtaWRkbGUgbS1hdXRvXCI+XG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIiBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgIFdoeSB1cz9cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgUHJvZHVjdHNcbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgQ3VzdG9tZXJzXG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIiBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgIFJlc291cmNlc1xuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCIgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICBTdXBwb3J0XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2YmFyLW5hdlwiPlxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCIgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgICAgICB3aWR0aD1cIjIyXCJcbiAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjIwXCJcbiAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjIgMjBcIlxuICAgICAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgICAgZD1cIk0xIDE2LjMyODZWNy42ODE2NEg2LjUwMjYxVjE2LjMyODZDNi41MDI2MSAxNy44NDgxIDUuMjcwODEgMTkuMDc5OSAzLjc1MTMgMTkuMDc5OUMyLjIzMTggMTkuMDc5OSAxIDE3Ljg0ODEgMSAxNi4zMjg2WlwiXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZT1cIndoaXRlXCJcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9XCIxLjVcIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICAgIGQ9XCJNNC4xNDQ0MSAxOS4wOEgxNi44NDU5QzE4Ljk0ODEgMTkuMDggMjAuNjUyMiAxNy4zNzU5IDIwLjY1MjIgMTUuMjczN1YxSDYuNTAyNjdWOC45OTY5MlwiXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZT1cIndoaXRlXCJcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9XCIxLjVcIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICAgIGQ9XCJNOS4yNTM3OCA0LjkzMDQySDE4LjI5MzhcIlxuICAgICAgICAgICAgICAgICAgICBzdHJva2U9XCJ3aGl0ZVwiXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPVwiMS41XCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICBkPVwiTTkuMjUzNzggOC4wNzQ3MUgxOC4yOTM4XCJcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlPVwid2hpdGVcIlxuICAgICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD1cIjEuNVwiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgICAgZD1cIk05LjI1Mzc4IDExLjIxOTJIMTguMjkzOFwiXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZT1cIndoaXRlXCJcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9XCIxLjVcIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICAgICAgd2lkdGg9XCIyM1wiXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIyMlwiXG4gICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDIzIDIyXCJcbiAgICAgICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxlbGxpcHNlXG4gICAgICAgICAgICAgICAgICAgIGN4PVwiMTEuODI2MVwiXG4gICAgICAgICAgICAgICAgICAgIGN5PVwiNy43MzA3M1wiXG4gICAgICAgICAgICAgICAgICAgIHJ4PVwiMi44ODQ2MlwiXG4gICAgICAgICAgICAgICAgICAgIHJ5PVwiMy4wNzY5MlwiXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZT1cIndoaXRlXCJcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9XCIxLjc1XCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICBkPVwiTTIwLjA5ODUgMTcuMDIwM0MxOC4wMDEyIDE0Ljg1NzUgMTUuMDM0MyAxMy41MDg1IDExLjc0NSAxMy41MDg1QzguNDU1NzEgMTMuNTA4NSA1LjQ4ODc1IDE0Ljg1NzUgMy4zOTE0OCAxNy4wMjAzXCJcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlPVwid2hpdGVcIlxuICAgICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD1cIjEuNzVcIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDxjaXJjbGVcbiAgICAgICAgICAgICAgICAgICAgY3g9XCIxMS44MjZcIlxuICAgICAgICAgICAgICAgICAgICBjeT1cIjExXCJcbiAgICAgICAgICAgICAgICAgICAgcj1cIjEwXCJcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlPVwid2hpdGVcIlxuICAgICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD1cIjEuNzVcIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICAgICAgd2lkdGg9XCIyMFwiXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIxOVwiXG4gICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDIwIDE5XCJcbiAgICAgICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxjaXJjbGVcbiAgICAgICAgICAgICAgICAgICAgY3g9XCIxMS4zNzEzXCJcbiAgICAgICAgICAgICAgICAgICAgY3k9XCI3Ljk1NDU1XCJcbiAgICAgICAgICAgICAgICAgICAgcj1cIjYuOTU0NTVcIlxuICAgICAgICAgICAgICAgICAgICBzdHJva2U9XCJ3aGl0ZVwiXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPVwiMS43NVwiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgICAgZD1cIk0xLjMyNTkzIDE3Ljk5OTlMNi43MzUwMiAxMi41OTA4XCJcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlPVwid2hpdGVcIlxuICAgICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD1cIjEuNzVcIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbSBwbC0zXCI+XG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rIGZyZWUtdHJpYWxcIiBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgIDxidXR0b24+RnJlZSB0cmlhbDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9uYXY+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5oZWFkZXIge1xuICAgICAgICAgIG5hdiB7XG4gICAgICAgICAgICBwYWRkaW5nOiAzN3B4IDUwcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMDMwcHgpIHtcbiAgICAgICAgICAgICAgcGFkZGluZzogMzBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHVsIHtcbiAgICAgICAgICAgICAgJi5taWRkbGUgbGkge1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMjJweDtcbiAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogMTE0MHB4KSB7XG4gICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDE1cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMDcwcHgpIHtcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMTBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgJjpmaXJzdC1vZi10eXBlIHtcbiAgICAgICAgICAgICAgICBsaSBhIHtcbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICY6YWZ0ZXIge1xuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMnB4O1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC41cztcbiAgICAgICAgICAgICAgICAgICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC41cztcbiAgICAgICAgICAgICAgICAgICAgLW1zLXRyYW5zaXRpb246IGFsbCAwLjVzO1xuICAgICAgICAgICAgICAgICAgICAtby10cmFuc2l0aW9uOiBhbGwgMC41cztcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XG4gICAgICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwcHgpO1xuICAgICAgICAgICAgICAgICAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMHB4KTtcbiAgICAgICAgICAgICAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMHB4KTtcbiAgICAgICAgICAgICAgICAgICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwcHgpO1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjBweCk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAmOmhvdmVyOmFmdGVyIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZGIwMDtcbiAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgICAgICAgICAgICAgICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgICAgICAgICAgICAgICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgICAgICAgICAgICAgICAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgbGkge1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IGF1dG87XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogYXV0bztcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiQXBlcmN1IE1lZGl1bVwiO1xuICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICBzdmcgKiB7XG4gICAgICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNXM7XG4gICAgICAgICAgICAgICAgICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNXM7XG4gICAgICAgICAgICAgICAgICAgIC1tcy10cmFuc2l0aW9uOiBhbGwgMC41cztcbiAgICAgICAgICAgICAgICAgICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNXM7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjVzO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgJjpob3ZlciBzdmcgKiB7XG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZTogI2ZmZGIwMDtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMjIxZjIwO1xuICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTJweCAxOHB4O1xuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZGIwMDtcbiAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgICAgICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMDtcbiAgICAgICAgICAgICAgICAgIC1tb3otYm9yZGVyLXJhZGl1czogMDtcbiAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGJhY2tncm91bmQgMC41cztcbiAgICAgICAgICAgICAgICAgIC1tb3otdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjVzO1xuICAgICAgICAgICAgICAgICAgLW1zLXRyYW5zaXRpb246IGJhY2tncm91bmQgMC41cztcbiAgICAgICAgICAgICAgICAgIC1vLXRyYW5zaXRpb246IGJhY2tncm91bmQgMC41cztcbiAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC41cztcbiAgICAgICAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcbiJdfQ== */\n/*@ sourceURL=/Users/baijutoms/Documents/Works/Web/next/viska/m-and-m/components/Header.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

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
var _jsxFileName = "/Users/baijutoms/Documents/Works/Web/next/viska/m-and-m/components/Layout.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Layout = props => {
  return __jsx("div", {
    className: "layout",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, __jsx(_Header__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "layout",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  }, props.children), __jsx(_Footer__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/blog/body.js":
/*!*********************************!*\
  !*** ./components/blog/body.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/baijutoms/Documents/Works/Web/next/viska/m-and-m/components/blog/body.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

const Body = () => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    className: "jsx-3532502289" + " " + "body",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "jsx-3532502289" + " " + "head",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-3532502289" + " " + "wrapper",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 11
    }
  }, __jsx("a", {
    href: "#",
    className: "jsx-3532502289" + " " + "text-decoration-none",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }
  }, __jsx("svg", {
    width: "13",
    height: "13",
    viewBox: "0 0 13 13",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "jsx-3532502289",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 15
    }
  }, __jsx("path", {
    d: "M7.25 11.7502L2 6.50024L7.25 1.25024",
    stroke: "#FFDB00",
    "stroke-width": "2",
    className: "jsx-3532502289",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 17
    }
  })), "Articles"), __jsx("h2", {
    className: "jsx-3532502289",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }
  }, "network security"), __jsx("h1", {
    className: "jsx-3532502289",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }
  }, "Working from 127.0.0.1"), __jsx("p", {
    className: "jsx-3532502289",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }
  }, "As the COVID-19 pandemic sweeps across the world, we thought we\u2019d take a quick look at the famed localhost, and share some best practices for working from home.")), __jsx("img", {
    src: "/img/network-security.svg",
    alt: "",
    className: "jsx-3532502289" + " " + "post-image",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 11
    }
  })), __jsx("div", {
    className: "jsx-3532502289" + " " + "content",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-3532502289" + " " + "wrapper",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 11
    }
  }, __jsx("p", {
    className: "jsx-3532502289",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }
  }, "As the COVID-19 pandemic sweeps across the world, lots of people are just discovering the concept of remote work. We thought we\u2019d take a quick look at the famed localhost of 127.0.0.1 and ::1, and share some best practices from the Men&Mice team on how to make the best out of working from home."), __jsx("p", {
    className: "jsx-3532502289",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }
  }, "Or 127.0.0.1 (::1 for the IPv6-minded), as it were."), __jsx("h4", {
    className: "jsx-3532502289",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }
  }, "Localhost where the heart is"), __jsx("p", {
    className: "jsx-3532502289",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }
  }, "It\u2019s a true testament to how slowly things move in our industry when you consider that the name of localhost has been introduced in 1996, but only achieved \u2018standard\u2019 status in 2013. The standard of IPv4 reserves all 16 million addresses (give or take) of the 127.0.0.0/8 range for loopback. In IPv6, it\u2019s only a single one: ::1. (Read more about IPv6 reserved addresses here.) In IPv4, 127.0.0.1 is the default that most computers use: in the hosts file (/etc/hosts in Linux and Mac systems; C:\\Windows\\System32\\drivers\\etc\\hosts on Windows), which acts as a local DNS resolver is usually empty except for these two lines:"), __jsx("code", {
    className: "jsx-3532502289",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 13
    }
  }, __jsx("ol", {
    className: "jsx-3532502289",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 15
    }
  }, __jsx("li", {
    className: "jsx-3532502289",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 17
    }
  }, `def rule(Hodor,y){`), __jsx("li", {
    className: "jsx-3532502289",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 17
    }
  }, ` rule()`), __jsx("li", {
    className: "jsx-3532502289",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 17
    }
  }, `}`), __jsx("li", {
    className: "jsx-3532502289",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 17
    }
  }, `var Sansa = COLS`), __jsx("li", {
    className: "jsx-3532502289",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 17
    }
  }, `def TABLE[-Jon][i] {`), __jsx("li", {
    className: "jsx-3532502289",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 17
    }
  }, ` (rule(-TABLE[ROWS][y]) * --(Jon) / 1 * ((`), __jsx("li", {
    className: "jsx-3532502289",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 17
    }
  }, `foo(Jon, TABLE[0.52][-COLS])))) + -33;`), __jsx("li", {
    className: "jsx-3532502289",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 17
    }
  }, ` Arya += betray(Sansa,-COLS * -COLS) - -38 `), __jsx("li", {
    className: "jsx-3532502289",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 17
    }
  }, `}`))), __jsx("p", {
    className: "jsx-3532502289",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 13
    }
  }, "It is defined locally, as the loopback addresses shouldn\u2019t be sent to public name servers to avoid confusion. Because of its special status, even machines without an actual network interface (wired or wireless connections, or even the hardware capability for connections) can still use localhost through the networking stack of the operating system. Air gapped computers can run network services (such as web servers like Apache or nginx) locally."), __jsx("h4", {
    className: "jsx-3532502289",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 13
    }
  }, "127.0.0.1 or localhost?"), __jsx("p", {
    className: "jsx-3532502289",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 13
    }
  }, "In most cases: either work. There\u2019s one notable case where the two are different: when using a MySQL server, it does matter whether using 127.0.0.1 or localhost in your preferences."), __jsx("h4", {
    className: "jsx-3532502289",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 13
    }
  }, "Working from 127.0.0.1 (::1)"), __jsx("p", {
    className: "jsx-3532502289",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 13
    }
  }, "Men&Mice is fortunate in being able to encourage employees to work from home. The health and safety of our people are our highest priorities at all times. Working remotely, however, is a tricky situation. Even under the best of circumstances it creates a disruption, and can take a heavy toll on mental health and productivity. Our team members aren\u2019t strangers to remote work, but even for them, this is new. When the benefit of an optional change of scenery becomes the new status quo that is recommended or even mandated, being smart is essential. We\u2019ve asked the Men&Mice team to share their tips and best practices \u2014 hope this helps all of you struggling to adjust to the new situation."), __jsx("ul", {
    className: "jsx-3532502289" + " " + "tags list-unstyled d-flex",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 13
    }
  }, __jsx("li", {
    className: "jsx-3532502289",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 15
    }
  }, __jsx("a", {
    href: "#",
    className: "jsx-3532502289",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 17
    }
  }, "Home Network")), __jsx("li", {
    className: "jsx-3532502289",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 15
    }
  }, __jsx("a", {
    href: "#",
    className: "jsx-3532502289",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 17
    }
  }, "DHCP")), __jsx("li", {
    className: "jsx-3532502289",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 15
    }
  }, __jsx("a", {
    href: "#",
    className: "jsx-3532502289",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 17
    }
  }, "127.0.0.1"))))), __jsx("div", {
    className: "jsx-3532502289" + " " + "footer",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-3532502289" + " " + "wrapper",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 11
    }
  }, __jsx("h3", {
    className: "jsx-3532502289",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 13
    }
  }, "Enjoyed the article?"), __jsx("button", {
    className: "jsx-3532502289" + " " + "read-more",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 13
    }
  }, "READ MORE ", __jsx("img", {
    src: "/img/caret-right-black.png",
    alt: "",
    className: "jsx-3532502289",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 25
    }
  })), __jsx("h4", {
    className: "jsx-3532502289",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 13
    }
  }, "Share on Social Media"), __jsx("div", {
    className: "jsx-3532502289" + " " + "social-icons d-flex",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "jsx-3532502289" + " " + "icon",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: "/img/facebook.svg",
    width: "20",
    alt: "",
    className: "jsx-3532502289",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "jsx-3532502289" + " " + "icon",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: "/img/twitter.svg",
    width: "20",
    alt: "",
    className: "jsx-3532502289",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "jsx-3532502289" + " " + "icon",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: "/img/linked-in.svg",
    width: "20",
    alt: "",
    className: "jsx-3532502289",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 17
    }
  })))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3532502289",
    __self: undefined
  }, ".body.jsx-3532502289 .head.jsx-3532502289 .wrapper.jsx-3532502289,.body.jsx-3532502289 .content.jsx-3532502289 .wrapper.jsx-3532502289,.body.jsx-3532502289 .footer.jsx-3532502289 .wrapper.jsx-3532502289{width:calc(100vw - 60px);max-width:680px;margin:0 auto;}.body.jsx-3532502289 .head.jsx-3532502289{background:transparent;padding:100px 0 150px 0;position:relative;}.body.jsx-3532502289 .head.jsx-3532502289 .wrapper.jsx-3532502289 a.jsx-3532502289{font-family:\"Apercu Bold\";font-size:18px;color:#ffffff;}.body.jsx-3532502289 .head.jsx-3532502289 .wrapper.jsx-3532502289 a.jsx-3532502289 svg.jsx-3532502289{margin-right:12px;}.body.jsx-3532502289 .head.jsx-3532502289 .wrapper.jsx-3532502289 h2.jsx-3532502289{font-family:\"Apercu Regular\";font-size:12px;color:#ffdb00;text-transform:uppercase;margin:70px 0 20px 0;}.body.jsx-3532502289 .head.jsx-3532502289 .wrapper.jsx-3532502289 h1.jsx-3532502289{font-family:\"Apercu Bold\";font-size:48px;color:#ffffff;margin-bottom:35px;}@media (max-width:768px){.body.jsx-3532502289 .head.jsx-3532502289 .wrapper.jsx-3532502289 h1.jsx-3532502289{font-size:36px;}}.body.jsx-3532502289 .head.jsx-3532502289 .wrapper.jsx-3532502289 p.jsx-3532502289{font-family:\"Capitolium Regular\";font-size:20px;color:#ffffff;}.body.jsx-3532502289 .head.jsx-3532502289 .post-image.jsx-3532502289{position:absolute;left:50%;bottom:0;-webkit-transform:translate(-50%,50%);-moz-transform:translate(-50%,50%);-ms-transform:translate(-50%,50%);-o-transform:translate(-50%,50%);-webkit-transform:translate(-50%,50%);-ms-transform:translate(-50%,50%);transform:translate(-50%,50%);width:100%;max-width:680px;max-height:250px;}@media (max-width:768px){.body.jsx-3532502289 .head.jsx-3532502289 .post-image.jsx-3532502289{max-width:160px;max-height:250px;}}.body.jsx-3532502289 .content.jsx-3532502289{background:#ffffff;border:none !important;}.body.jsx-3532502289 .content.jsx-3532502289 .wrapper.jsx-3532502289{color:#221f20;padding:155px 0;}.body.jsx-3532502289 .content.jsx-3532502289 .wrapper.jsx-3532502289 p.jsx-3532502289{font-family:\"Capitolium Regular\";font-size:20px;}.body.jsx-3532502289 .content.jsx-3532502289 .wrapper.jsx-3532502289 h4.jsx-3532502289{font-family:\"Apercu Bold\";font-size:26px;margin-top:70px;margin-bottom:40px;}.body.jsx-3532502289 .content.jsx-3532502289 .wrapper.jsx-3532502289 code.jsx-3532502289{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin:70px 0;width:100%;overflow-x:scroll;background:#f2f2f2;}.body.jsx-3532502289 .content.jsx-3532502289 .wrapper.jsx-3532502289 ol.jsx-3532502289{padding:25px;list-style:none;counter-reset:li;}.body.jsx-3532502289 .content.jsx-3532502289 .wrapper.jsx-3532502289 ol.jsx-3532502289 li.jsx-3532502289{font-size:16px;color:#221f20;padding-left:25px;counter-increment:li;}.body.jsx-3532502289 .content.jsx-3532502289 .wrapper.jsx-3532502289 ol.jsx-3532502289 li.jsx-3532502289::before{content:counter(li,decimal-leading-zero);color:#8e8e8e;margin-right:25px;}.body.jsx-3532502289 .content.jsx-3532502289 .wrapper.jsx-3532502289 .tags.jsx-3532502289{margin-top:70px;}.body.jsx-3532502289 .content.jsx-3532502289 .wrapper.jsx-3532502289 ul.jsx-3532502289 li.jsx-3532502289 a.jsx-3532502289{font-family:\"Apercu Bold\";font-size:14px;color:#442acc;margin-right:35px;text-transform:uppercase;-webkit-text-decoration:none;text-decoration:none;position:relative;}.body.jsx-3532502289 .content.jsx-3532502289 .wrapper.jsx-3532502289 ul.jsx-3532502289 li.jsx-3532502289 a.jsx-3532502289:after{content:\"\";position:absolute;left:0;bottom:-4px;width:0;height:2px;background:#442acc;-webkit-transition:all 0.5s;-moz-transition:all 0.5s;-ms-transition:all 0.5s;-o-transition:all 0.5s;-webkit-transition:all 0.5s;transition:all 0.5s;}.body.jsx-3532502289 .content.jsx-3532502289 .wrapper.jsx-3532502289 ul.jsx-3532502289 li.jsx-3532502289 a.jsx-3532502289:hover.jsx-3532502289:after{width:100%;}.body.jsx-3532502289 .footer.jsx-3532502289{background:#ffffff;text-align:center;border:none !important;}.body.jsx-3532502289 .footer.jsx-3532502289 h3.jsx-3532502289{font-family:\"Apercu Bold\";font-size:36px;margin-bottom:30px;}.body.jsx-3532502289 .footer.jsx-3532502289 button.jsx-3532502289{font-family:\"Apercu Medium\";font-size:18px;width:190px;height:75px;border:none;background:#ffdb00;}.body.jsx-3532502289 .footer.jsx-3532502289 button.jsx-3532502289 img.jsx-3532502289{margin-left:15px;}.body.jsx-3532502289 .footer.jsx-3532502289 h4.jsx-3532502289{font-family:\"Apercu Regular\";font-size:16px;opacity:0.6;margin:68px 0 20px 0;}.body.jsx-3532502289 .footer.jsx-3532502289 .social-icons.jsx-3532502289{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;padding-bottom:110px;}.body.jsx-3532502289 .footer.jsx-3532502289 .social-icons.jsx-3532502289 .icon.jsx-3532502289{width:40px;height:40px;-webkit-border-radius:20px;-moz-border-radius:20px;border-radius:20px;border:1px solid #dfdfdf;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;margin:0 12px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9iYWlqdXRvbXMvRG9jdW1lbnRzL1dvcmtzL1dlYi9uZXh0L3Zpc2thL20tYW5kLW0vY29tcG9uZW50cy9ibG9nL2JvZHkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMElrQixBQUk0QixBQUtGLEFBSUssQUFJTixBQUVTLEFBTUgsQUFNUCxBQUVjLEFBSWYsQUFhRSxBQUlILEFBR0gsQUFHcUIsQUFHUCxBQUtiLEFBTUEsQUFJSSxBQUs2QixBQUk5QixBQUVVLEFBUWIsQUFhQSxBQUdFLEFBSVMsQUFJRSxBQU9ULEFBRVUsQUFLaEIsQUFJQSxXQXpDUyxBQVlOLEFBOEJGLEVBakVJLENBakJGLENBM0JJLEFBZ0RGLENBNUJHLEFBb0NGLENBeUNDLENBL0dDLEFBcUJaLENBaUJZLEFBMkRMLElBeEdNLEFBbUlPLEVBeElmLENBU0MsQUFZQSxBQXNDRSxBQTBCQSxBQTRCRixDQS9FTixDQW1GTSxDQXRHQSxBQXdESSxBQUlHLEFBbUJYLEFBZ0NJLENBekVFLEdBeEJGLEFBaUJPLEFBVUwsR0FyQnNCLEFBNER2QixDQWVLLElBN0dULEFBU0UsQUFZQSxBQXNDSSxBQW1CRSxBQU9KLEFBNEJHLENBaEVHLENBb0VWLENBdEdFLEFBK0dGLEVBeERRLENBakVKLEFBc0VTLENBOUNYLEFBMEJJLEFBd0NOLEVBeUNjLEtBeEliLEFBU0UsQUFhSSxBQXlESyxBQU9KLEFBZ0NSLENBdEJHLEFBK0JNLENBbkVBLENBNUNJLEVBNkZILEFBSUYsRUFwRkwsR0F4QkUsRUE0Rk0sQUFzQlgsQ0E1Q2MsS0FJRCxBQVFFLENBakVQLEFBYWdCLEFBNEJwQixBQW1FTyxBQU9GLEVBN0VDLENBbUVBLEVBUEgsSUF2R0UsR0FpRlcsRUFsQ25CLEtBMEVjLEtBbERKLEFBZ0NILENBdkRBLEtBaERFLEtBbUJhLEtBK0ROLEdBakNSLENBeUVOLGtCQXpFTyxHQWtDTSxJQS9ETSxLQW9EZCxlQVlPLEdBWk4sT0EwQ0EsR0E3RlUsVUFnRVAsTUFzQ0gsRUFUQyx3Q0E3QkcsNENBL0RkLE9Bc0djLElBckdULGdCQUNDLGlCQUFDLDhEQXFHRixjQUFDIiwiZmlsZSI6Ii9Vc2Vycy9iYWlqdXRvbXMvRG9jdW1lbnRzL1dvcmtzL1dlYi9uZXh0L3Zpc2thL20tYW5kLW0vY29tcG9uZW50cy9ibG9nL2JvZHkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBCb2R5ID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvZHlcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyXCI+XG4gICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cInRleHQtZGVjb3JhdGlvbi1ub25lXCI+XG4gICAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgICB3aWR0aD1cIjEzXCJcbiAgICAgICAgICAgICAgICBoZWlnaHQ9XCIxM1wiXG4gICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAxMyAxM1wiXG4gICAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgIGQ9XCJNNy4yNSAxMS43NTAyTDIgNi41MDAyNEw3LjI1IDEuMjUwMjRcIlxuICAgICAgICAgICAgICAgICAgc3Ryb2tlPVwiI0ZGREIwMFwiXG4gICAgICAgICAgICAgICAgICBzdHJva2Utd2lkdGg9XCIyXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgQXJ0aWNsZXNcbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDxoMj5uZXR3b3JrIHNlY3VyaXR5PC9oMj5cbiAgICAgICAgICAgIDxoMT5Xb3JraW5nIGZyb20gMTI3LjAuMC4xPC9oMT5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICBBcyB0aGUgQ09WSUQtMTkgcGFuZGVtaWMgc3dlZXBzIGFjcm9zcyB0aGUgd29ybGQsIHdlIHRob3VnaHQgd2XigJlkXG4gICAgICAgICAgICAgIHRha2UgYSBxdWljayBsb29rIGF0IHRoZSBmYW1lZCBsb2NhbGhvc3QsIGFuZCBzaGFyZSBzb21lIGJlc3RcbiAgICAgICAgICAgICAgcHJhY3RpY2VzIGZvciB3b3JraW5nIGZyb20gaG9tZS5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB7LyogLndyYXBwZXIgKi99XG4gICAgICAgICAgPGltZyBzcmM9XCIvaW1nL25ldHdvcmstc2VjdXJpdHkuc3ZnXCIgY2xhc3NOYW1lPVwicG9zdC1pbWFnZVwiIGFsdD1cIlwiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7LyogLmhlYWQgKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlclwiPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIEFzIHRoZSBDT1ZJRC0xOSBwYW5kZW1pYyBzd2VlcHMgYWNyb3NzIHRoZSB3b3JsZCwgbG90cyBvZiBwZW9wbGVcbiAgICAgICAgICAgICAgYXJlIGp1c3QgZGlzY292ZXJpbmcgdGhlIGNvbmNlcHQgb2YgcmVtb3RlIHdvcmsuIFdlIHRob3VnaHQgd2XigJlkXG4gICAgICAgICAgICAgIHRha2UgYSBxdWljayBsb29rIGF0IHRoZSBmYW1lZCBsb2NhbGhvc3Qgb2YgMTI3LjAuMC4xIGFuZCA6OjEsIGFuZFxuICAgICAgICAgICAgICBzaGFyZSBzb21lIGJlc3QgcHJhY3RpY2VzIGZyb20gdGhlIE1lbiZNaWNlIHRlYW0gb24gaG93IHRvIG1ha2VcbiAgICAgICAgICAgICAgdGhlIGJlc3Qgb3V0IG9mIHdvcmtpbmcgZnJvbSBob21lLlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPHA+T3IgMTI3LjAuMC4xICg6OjEgZm9yIHRoZSBJUHY2LW1pbmRlZCksIGFzIGl0IHdlcmUuPC9wPlxuICAgICAgICAgICAgPGg0PkxvY2FsaG9zdCB3aGVyZSB0aGUgaGVhcnQgaXM8L2g0PlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIEl04oCZcyBhIHRydWUgdGVzdGFtZW50IHRvIGhvdyBzbG93bHkgdGhpbmdzIG1vdmUgaW4gb3VyIGluZHVzdHJ5XG4gICAgICAgICAgICAgIHdoZW4geW91IGNvbnNpZGVyIHRoYXQgdGhlIG5hbWUgb2YgbG9jYWxob3N0IGhhcyBiZWVuIGludHJvZHVjZWRcbiAgICAgICAgICAgICAgaW4gMTk5NiwgYnV0IG9ubHkgYWNoaWV2ZWQg4oCYc3RhbmRhcmTigJkgc3RhdHVzIGluIDIwMTMuIFRoZSBzdGFuZGFyZFxuICAgICAgICAgICAgICBvZiBJUHY0IHJlc2VydmVzIGFsbCAxNiBtaWxsaW9uIGFkZHJlc3NlcyAoZ2l2ZSBvciB0YWtlKSBvZiB0aGVcbiAgICAgICAgICAgICAgMTI3LjAuMC4wLzggcmFuZ2UgZm9yIGxvb3BiYWNrLiBJbiBJUHY2LCBpdOKAmXMgb25seSBhIHNpbmdsZSBvbmU6XG4gICAgICAgICAgICAgIDo6MS4gKFJlYWQgbW9yZSBhYm91dCBJUHY2IHJlc2VydmVkIGFkZHJlc3NlcyBoZXJlLikgSW4gSVB2NCxcbiAgICAgICAgICAgICAgMTI3LjAuMC4xIGlzIHRoZSBkZWZhdWx0IHRoYXQgbW9zdCBjb21wdXRlcnMgdXNlOiBpbiB0aGUgaG9zdHNcbiAgICAgICAgICAgICAgZmlsZSAoL2V0Yy9ob3N0cyBpbiBMaW51eCBhbmQgTWFjIHN5c3RlbXM7XG4gICAgICAgICAgICAgIEM6XFxXaW5kb3dzXFxTeXN0ZW0zMlxcZHJpdmVyc1xcZXRjXFxob3N0cyBvbiBXaW5kb3dzKSwgd2hpY2ggYWN0cyBhcyBhXG4gICAgICAgICAgICAgIGxvY2FsIEROUyByZXNvbHZlciBpcyB1c3VhbGx5IGVtcHR5IGV4Y2VwdCBmb3IgdGhlc2UgdHdvIGxpbmVzOlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPGNvZGU+XG4gICAgICAgICAgICAgIDxvbD5cbiAgICAgICAgICAgICAgICA8bGk+e2BkZWYgcnVsZShIb2Rvcix5KXtgfTwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPntgIHJ1bGUoKWB9PC9saT5cbiAgICAgICAgICAgICAgICA8bGk+e2B9YH08L2xpPlxuICAgICAgICAgICAgICAgIDxsaT57YHZhciBTYW5zYSA9IENPTFNgfTwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPntgZGVmIFRBQkxFWy1Kb25dW2ldIHtgfTwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPntgIChydWxlKC1UQUJMRVtST1dTXVt5XSkgKiAtLShKb24pIC8gMSAqICgoYH08L2xpPlxuICAgICAgICAgICAgICAgIDxsaT57YGZvbyhKb24sIFRBQkxFWzAuNTJdWy1DT0xTXSkpKSkgKyAtMzM7YH08L2xpPlxuICAgICAgICAgICAgICAgIDxsaT57YCBBcnlhICs9IGJldHJheShTYW5zYSwtQ09MUyAqIC1DT0xTKSAtIC0zOCBgfTwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPntgfWB9PC9saT5cbiAgICAgICAgICAgICAgPC9vbD5cbiAgICAgICAgICAgIDwvY29kZT5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICBJdCBpcyBkZWZpbmVkIGxvY2FsbHksIGFzIHRoZSBsb29wYmFjayBhZGRyZXNzZXMgc2hvdWxkbuKAmXQgYmUgc2VudFxuICAgICAgICAgICAgICB0byBwdWJsaWMgbmFtZSBzZXJ2ZXJzIHRvIGF2b2lkIGNvbmZ1c2lvbi4gQmVjYXVzZSBvZiBpdHMgc3BlY2lhbFxuICAgICAgICAgICAgICBzdGF0dXMsIGV2ZW4gbWFjaGluZXMgd2l0aG91dCBhbiBhY3R1YWwgbmV0d29yayBpbnRlcmZhY2UgKHdpcmVkXG4gICAgICAgICAgICAgIG9yIHdpcmVsZXNzIGNvbm5lY3Rpb25zLCBvciBldmVuIHRoZSBoYXJkd2FyZSBjYXBhYmlsaXR5IGZvclxuICAgICAgICAgICAgICBjb25uZWN0aW9ucykgY2FuIHN0aWxsIHVzZSBsb2NhbGhvc3QgdGhyb3VnaCB0aGUgbmV0d29ya2luZyBzdGFja1xuICAgICAgICAgICAgICBvZiB0aGUgb3BlcmF0aW5nIHN5c3RlbS4gQWlyIGdhcHBlZCBjb21wdXRlcnMgY2FuIHJ1biBuZXR3b3JrXG4gICAgICAgICAgICAgIHNlcnZpY2VzIChzdWNoIGFzIHdlYiBzZXJ2ZXJzIGxpa2UgQXBhY2hlIG9yIG5naW54KSBsb2NhbGx5LlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPGg0PjEyNy4wLjAuMSBvciBsb2NhbGhvc3Q/PC9oND5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICBJbiBtb3N0IGNhc2VzOiBlaXRoZXIgd29yay4gVGhlcmXigJlzIG9uZSBub3RhYmxlIGNhc2Ugd2hlcmUgdGhlIHR3b1xuICAgICAgICAgICAgICBhcmUgZGlmZmVyZW50OiB3aGVuIHVzaW5nIGEgTXlTUUwgc2VydmVyLCBpdCBkb2VzIG1hdHRlciB3aGV0aGVyXG4gICAgICAgICAgICAgIHVzaW5nIDEyNy4wLjAuMSBvciBsb2NhbGhvc3QgaW4geW91ciBwcmVmZXJlbmNlcy5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxoND5Xb3JraW5nIGZyb20gMTI3LjAuMC4xICg6OjEpPC9oND5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICBNZW4mTWljZSBpcyBmb3J0dW5hdGUgaW4gYmVpbmcgYWJsZSB0byBlbmNvdXJhZ2UgZW1wbG95ZWVzIHRvIHdvcmtcbiAgICAgICAgICAgICAgZnJvbSBob21lLiBUaGUgaGVhbHRoIGFuZCBzYWZldHkgb2Ygb3VyIHBlb3BsZSBhcmUgb3VyIGhpZ2hlc3RcbiAgICAgICAgICAgICAgcHJpb3JpdGllcyBhdCBhbGwgdGltZXMuIFdvcmtpbmcgcmVtb3RlbHksIGhvd2V2ZXIsIGlzIGEgdHJpY2t5XG4gICAgICAgICAgICAgIHNpdHVhdGlvbi4gRXZlbiB1bmRlciB0aGUgYmVzdCBvZiBjaXJjdW1zdGFuY2VzIGl0IGNyZWF0ZXMgYVxuICAgICAgICAgICAgICBkaXNydXB0aW9uLCBhbmQgY2FuIHRha2UgYSBoZWF2eSB0b2xsIG9uIG1lbnRhbCBoZWFsdGggYW5kXG4gICAgICAgICAgICAgIHByb2R1Y3Rpdml0eS4gT3VyIHRlYW0gbWVtYmVycyBhcmVu4oCZdCBzdHJhbmdlcnMgdG8gcmVtb3RlIHdvcmssXG4gICAgICAgICAgICAgIGJ1dCBldmVuIGZvciB0aGVtLCB0aGlzIGlzIG5ldy4gV2hlbiB0aGUgYmVuZWZpdCBvZiBhbiBvcHRpb25hbFxuICAgICAgICAgICAgICBjaGFuZ2Ugb2Ygc2NlbmVyeSBiZWNvbWVzIHRoZSBuZXcgc3RhdHVzIHF1byB0aGF0IGlzIHJlY29tbWVuZGVkXG4gICAgICAgICAgICAgIG9yIGV2ZW4gbWFuZGF0ZWQsIGJlaW5nIHNtYXJ0IGlzIGVzc2VudGlhbC4gV2XigJl2ZSBhc2tlZCB0aGVcbiAgICAgICAgICAgICAgTWVuJk1pY2UgdGVhbSB0byBzaGFyZSB0aGVpciB0aXBzIGFuZCBiZXN0IHByYWN0aWNlcyDigJQgaG9wZSB0aGlzXG4gICAgICAgICAgICAgIGhlbHBzIGFsbCBvZiB5b3Ugc3RydWdnbGluZyB0byBhZGp1c3QgdG8gdGhlIG5ldyBzaXR1YXRpb24uXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwidGFncyBsaXN0LXVuc3R5bGVkIGQtZmxleFwiPlxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5Ib21lIE5ldHdvcms8L2E+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPkRIQ1A8L2E+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPjEyNy4wLjAuMTwvYT5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgey8qIC53cmFwcGVyICovfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgey8qIGNvbnRlbnQgKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyXCI+XG4gICAgICAgICAgICA8aDM+RW5qb3llZCB0aGUgYXJ0aWNsZT88L2gzPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJyZWFkLW1vcmVcIj5cbiAgICAgICAgICAgICAgUkVBRCBNT1JFIDxpbWcgc3JjPVwiL2ltZy9jYXJldC1yaWdodC1ibGFjay5wbmdcIiBhbHQ9XCJcIiAvPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8aDQ+U2hhcmUgb24gU29jaWFsIE1lZGlhPC9oND5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic29jaWFsLWljb25zIGQtZmxleFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImljb25cIj5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWcvZmFjZWJvb2suc3ZnXCIgd2lkdGg9XCIyMFwiIGFsdD1cIlwiIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImljb25cIj5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWcvdHdpdHRlci5zdmdcIiB3aWR0aD1cIjIwXCIgYWx0PVwiXCIgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvblwiPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltZy9saW5rZWQtaW4uc3ZnXCIgd2lkdGg9XCIyMFwiIGFsdD1cIlwiIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgey8qIC53cmFwcGVyICovfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgey8qIC5mb290ZXIgKi99XG4gICAgICA8L2Rpdj5cbiAgICAgIHsvKiAuYm9keSAqL31cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmJvZHkge1xuICAgICAgICAgIC5oZWFkLFxuICAgICAgICAgIC5jb250ZW50LFxuICAgICAgICAgIC5mb290ZXIge1xuICAgICAgICAgICAgLndyYXBwZXIge1xuICAgICAgICAgICAgICB3aWR0aDogY2FsYygxMDB2dyAtIDYwcHgpO1xuICAgICAgICAgICAgICBtYXgtd2lkdGg6IDY4MHB4O1xuICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgLmhlYWQge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMDBweCAwIDE1MHB4IDA7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAud3JhcHBlciB7XG4gICAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkFwZXJjdSBCb2xkXCI7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgICAgICAgICAgIHN2ZyB7XG4gICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEycHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGgyIHtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogXCJBcGVyY3UgUmVndWxhclwiO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZGIwMDtcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgICAgIG1hcmdpbjogNzBweCAwIDIwcHggMDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBoMSB7XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiQXBlcmN1IEJvbGRcIjtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDQ4cHg7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMzVweDtcbiAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzZweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiQ2FwaXRvbGl1bSBSZWd1bGFyXCI7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucG9zdC1pbWFnZSB7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgNTAlKTtcbiAgICAgICAgICAgICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCA1MCUpO1xuICAgICAgICAgICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgNTAlKTtcbiAgICAgICAgICAgICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgNTAlKTtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgNTAlKTtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgIG1heC13aWR0aDogNjgwcHg7XG4gICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDI1MHB4O1xuICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDE2MHB4O1xuICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDI1MHB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIC5jb250ZW50IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICAgICAgICAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgICAgIC53cmFwcGVyIHtcbiAgICAgICAgICAgICAgY29sb3I6ICMyMjFmMjA7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDE1NXB4IDA7XG4gICAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkNhcGl0b2xpdW0gUmVndWxhclwiO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBoNCB7XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiQXBlcmN1IEJvbGRcIjtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDI2cHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNzBweDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGNvZGUge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiA3MHB4IDA7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgb3ZlcmZsb3cteDogc2Nyb2xsO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmMmYyZjI7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgb2wge1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDI1cHg7XG4gICAgICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgICAgICAgICBjb3VudGVyLXJlc2V0OiBsaTtcbiAgICAgICAgICAgICAgICBsaSB7XG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICAgICAgICBjb2xvcjogIzIyMWYyMDtcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMjVweDtcbiAgICAgICAgICAgICAgICAgIGNvdW50ZXItaW5jcmVtZW50OiBsaTtcbiAgICAgICAgICAgICAgICAgICY6OmJlZm9yZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IGNvdW50ZXIobGksIGRlY2ltYWwtbGVhZGluZy16ZXJvKTtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM4ZThlOGU7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMjVweDtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLnRhZ3Mge1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDcwcHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgdWwge1xuICAgICAgICAgICAgICAgIGxpIHtcbiAgICAgICAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogXCJBcGVyY3UgQm9sZFwiO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNDQyYWNjO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDM1cHg7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICAmOmFmdGVyIHtcbiAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICAgICAgICAgIGJvdHRvbTogLTRweDtcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMDtcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDJweDtcbiAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjNDQyYWNjO1xuICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNXM7XG4gICAgICAgICAgICAgICAgICAgICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC41cztcbiAgICAgICAgICAgICAgICAgICAgICAtbXMtdHJhbnNpdGlvbjogYWxsIDAuNXM7XG4gICAgICAgICAgICAgICAgICAgICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNXM7XG4gICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgJjpob3ZlcjphZnRlciB7XG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgLmZvb3RlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBoMyB7XG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkFwZXJjdSBCb2xkXCI7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzZweDtcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkFwZXJjdSBNZWRpdW1cIjtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgICB3aWR0aDogMTkwcHg7XG4gICAgICAgICAgICAgIGhlaWdodDogNzVweDtcbiAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZkYjAwO1xuICAgICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBoNCB7XG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkFwZXJjdSBSZWd1bGFyXCI7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgb3BhY2l0eTogMC42O1xuICAgICAgICAgICAgICBtYXJnaW46IDY4cHggMCAyMHB4IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuc29jaWFsLWljb25zIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxMTBweDtcbiAgICAgICAgICAgICAgLmljb24ge1xuICAgICAgICAgICAgICAgIHdpZHRoOiA0MHB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgICAgICAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgICAgICAgICAgICAgLW1vei1ib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2RmZGZkZjtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwIDEycHg7XG4gICAgICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJvZHk7XG4iXX0= */\n/*@ sourceURL=/Users/baijutoms/Documents/Works/Web/next/viska/m-and-m/components/blog/body.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Body);

/***/ }),

/***/ "./pages/blog.js":
/*!***********************!*\
  !*** ./pages/blog.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_blog_body__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/blog/body */ "./components/blog/body.js");
var _jsxFileName = "/Users/baijutoms/Documents/Works/Web/next/viska/m-and-m/pages/blog.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function Index() {
  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "blog",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, __jsx(_components_blog_body__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 11
    }
  }))));
}

/***/ }),

/***/ 4:
/*!*****************************!*\
  !*** multi ./pages/blog.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/baijutoms/Documents/Works/Web/next/viska/m-and-m/pages/blog.js */"./pages/blog.js");


/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=blog.js.map