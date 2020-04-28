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
    className: "jsx-3751061463" + " " + "header",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3,
      columnNumber: 5
    }
  }, __jsx("nav", {
    className: "jsx-3751061463" + " " + "navbar navbar-expand-lg navbar-dark bg-transparent",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 7
    }
  }, __jsx("a", {
    href: "#",
    className: "jsx-3751061463" + " " + "navbar-brand",
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
    className: "jsx-3751061463",
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
    className: "jsx-3751061463" + " " + "navbar-toggler border-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: "/img/sandwich.svg",
    className: "jsx-3751061463",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 11
    }
  })), __jsx("div", {
    id: "navbarSupportedContent",
    className: "jsx-3751061463" + " " + "collapse navbar-collapse",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }, __jsx("ul", {
    className: "jsx-3751061463" + " " + "navbar-nav middle",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 11
    }
  }, __jsx("li", {
    className: "jsx-3751061463" + " " + "nav-item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: "#",
    className: "jsx-3751061463" + " " + "nav-link",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 15
    }
  }, "Why us?")), __jsx("li", {
    className: "jsx-3751061463" + " " + "nav-item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: "#",
    className: "jsx-3751061463" + " " + "nav-link",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 15
    }
  }, "Products")), __jsx("li", {
    className: "jsx-3751061463" + " " + "nav-item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: "#",
    className: "jsx-3751061463" + " " + "nav-link",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 15
    }
  }, "Customers")), __jsx("li", {
    className: "jsx-3751061463" + " " + "nav-item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: "#",
    className: "jsx-3751061463" + " " + "nav-link",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 15
    }
  }, "Resources")), __jsx("li", {
    className: "jsx-3751061463" + " " + "nav-item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: "#",
    className: "jsx-3751061463" + " " + "nav-link",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 15
    }
  }, "Support"))), __jsx("ul", {
    className: "jsx-3751061463" + " " + "navbar-nav ml-auto",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 11
    }
  }, __jsx("li", {
    className: "jsx-3751061463" + " " + "nav-item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: "#",
    className: "jsx-3751061463" + " " + "nav-link",
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
    className: "jsx-3751061463",
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
    className: "jsx-3751061463",
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
    className: "jsx-3751061463",
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
    className: "jsx-3751061463",
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
    className: "jsx-3751061463",
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
    className: "jsx-3751061463",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 19
    }
  })))), __jsx("li", {
    className: "jsx-3751061463" + " " + "nav-item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: "#",
    className: "jsx-3751061463" + " " + "nav-link",
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
    className: "jsx-3751061463",
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
    className: "jsx-3751061463",
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
    className: "jsx-3751061463",
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
    className: "jsx-3751061463",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 19
    }
  })))), __jsx("li", {
    className: "jsx-3751061463" + " " + "nav-item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: "#",
    className: "jsx-3751061463" + " " + "nav-link",
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
    className: "jsx-3751061463",
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
    className: "jsx-3751061463",
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
    className: "jsx-3751061463",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 19
    }
  })))), __jsx("li", {
    className: "jsx-3751061463" + " " + "nav-item pl-3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: "#",
    className: "jsx-3751061463" + " " + "nav-link free-trial",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 15
    }
  }, __jsx("button", {
    className: "jsx-3751061463",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 17
    }
  }, "Free trial")))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3751061463",
    __self: undefined
  }, ".header.jsx-3751061463 nav.jsx-3751061463{padding:37px 50px;background:white;}@media (max-width:1030px){.header.jsx-3751061463 nav.jsx-3751061463{padding:30px;}}.header.jsx-3751061463 nav.jsx-3751061463 ul.middle.jsx-3751061463{position:absolute;left:0;right:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}@media (max-width:1140px){.header.jsx-3751061463 nav.jsx-3751061463 ul.middle.jsx-3751061463{position:static;}}.header.jsx-3751061463 nav.jsx-3751061463 ul.middle.jsx-3751061463 li.jsx-3751061463{padding:0 22px;}@media (max-width:1310px){.header.jsx-3751061463 nav.jsx-3751061463 ul.middle.jsx-3751061463 li.jsx-3751061463{padding:0 15px;}}@media (max-width:1230px){.header.jsx-3751061463 nav.jsx-3751061463 ul.middle.jsx-3751061463 li.jsx-3751061463{padding:0 10px;}}.header.jsx-3751061463 nav.jsx-3751061463 ul.jsx-3751061463:first-of-type li.jsx-3751061463 a.jsx-3751061463{position:relative;}.header.jsx-3751061463 nav.jsx-3751061463 ul.jsx-3751061463:first-of-type li.jsx-3751061463 a.jsx-3751061463:after{content:\"\";position:absolute;left:0;bottom:0;width:100%;height:2px;background:transparent;-webkit-transition:all 0.5s;-moz-transition:all 0.5s;-ms-transition:all 0.5s;-o-transition:all 0.5s;-webkit-transition:all 0.5s;transition:all 0.5s;-webkit-transform:translateY(20px);-moz-transform:translateY(20px);-ms-transform:translateY(20px);-o-transform:translateY(20px);-webkit-transform:translateY(20px);-ms-transform:translateY(20px);transform:translateY(20px);}.header.jsx-3751061463 nav.jsx-3751061463 ul.jsx-3751061463:first-of-type li.jsx-3751061463 a.jsx-3751061463:hover.jsx-3751061463:after{background:#ffdb00;-webkit-transform:translateY(0);-moz-transform:translateY(0);-ms-transform:translateY(0);-o-transform:translateY(0);-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);}.header.jsx-3751061463 nav.jsx-3751061463 ul.jsx-3751061463 li.jsx-3751061463{margin-top:auto;margin-bottom:auto;position:relative;text-align:center;}.header.jsx-3751061463 nav.jsx-3751061463 ul.jsx-3751061463 li.jsx-3751061463 a.jsx-3751061463{font-family:\"Apercu Medium\";font-size:18px;color:white !important;}.header.jsx-3751061463 nav.jsx-3751061463 ul.jsx-3751061463 li.jsx-3751061463 a.jsx-3751061463 svg.jsx-3751061463 *.jsx-3751061463{-webkit-transition:all 0.5s;-moz-transition:all 0.5s;-ms-transition:all 0.5s;-o-transition:all 0.5s;-webkit-transition:all 0.5s;transition:all 0.5s;}.header.jsx-3751061463 nav.jsx-3751061463 ul.jsx-3751061463 li.jsx-3751061463 a.jsx-3751061463:hover svg.jsx-3751061463 *.jsx-3751061463{stroke:#ffdb00;}.header.jsx-3751061463 nav.jsx-3751061463 ul.jsx-3751061463 li.jsx-3751061463 button.jsx-3751061463{font-size:16px;color:#221f20;padding:12px 18px;background:#ffdb00;border:none;-webkit-border-radius:0;-moz-border-radius:0;border-radius:0;-webkit-transition:background 0.5s;-moz-transition:background 0.5s;-ms-transition:background 0.5s;-o-transition:background 0.5s;-webkit-transition:background 0.5s;transition:background 0.5s;}.header.jsx-3751061463 nav.jsx-3751061463 ul.jsx-3751061463 li.jsx-3751061463 button.jsx-3751061463:hover{background:white;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9iYWlqdXRvbXMvRG9jdW1lbnRzL1dvcmtzL1dlYi9uZXh0L3Zpc2thL20tYW5kLW0vY29tcG9uZW50cy9IZWFkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0prQixBQUVxQixBQUlELEFBRUcsQUFPRSxBQUVILEFBR0ksQUFHQSxBQUVILEFBRUwsQUFrQlEsQUFPTCxBQUtjLEFBSUUsQUFNYixBQUVGLEFBY0ksV0F2REQsRUF0QkosRUFXRSxBQUdJLEFBR0EsQUE0Q0YsQUFHSixDQXZESyxBQXNDRixDQThCRyxDQWhGUCxBQU1SLEFBZ0JZLENBcUJlLE1BcEMxQixHQWdEUyxBQUlZLENBakNwQixBQTBDVyxJQTVEUCxFQVJHLEFBbURFLENBeEJQLE9BNkJjLEVBNUJaLEVBeUNRLElBekJVLEVBUWIsQUFRVSxHQS9CZixVQTJCYSxBQWNaLENBeENXLElBc0JOLE1BU1EsQ0FVRCxFQTFCSSxVQWRBLFVBK0JOLEVBVUQsS0EvREEsQ0FxQ00sVUFkRixLQXlDVCxZQTFCUSxJQTJCVyxJQXpDWCxLQTZCRCxtQkE1QkEsT0F5Q1MsZ0JBeENaLGdCQTFCRSxBQW1FUyxhQTdCTixrQkE4QkssQ0F6Q0ssNkJBMENSLE1BekNLLGdDQUNELHdCQXdDSCxPQXZDRSw4QkFDSCw2RkFBQyIsImZpbGUiOiIvVXNlcnMvYmFpanV0b21zL0RvY3VtZW50cy9Xb3Jrcy9XZWIvbmV4dC92aXNrYS9tLWFuZC1tL2NvbXBvbmVudHMvSGVhZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgSGVhZGVyID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XG4gICAgICA8bmF2IGNsYXNzTmFtZT1cIm5hdmJhciBuYXZiYXItZXhwYW5kLWxnIG5hdmJhci1kYXJrIGJnLXRyYW5zcGFyZW50XCI+XG4gICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdmJhci1icmFuZFwiIGhyZWY9XCIjXCI+XG4gICAgICAgICAgPGltZyBzcmM9XCIvaW1nL2xvZ28td2hpdGUuc3ZnXCIgd2lkdGg9XCI3NlwiIGFsdD1cIlwiIC8+XG4gICAgICAgIDwvYT5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIGNsYXNzTmFtZT1cIm5hdmJhci10b2dnbGVyIGJvcmRlci0wXCJcbiAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICBkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCJcbiAgICAgICAgICBkYXRhLXRhcmdldD1cIiNuYXZiYXJTdXBwb3J0ZWRDb250ZW50XCJcbiAgICAgICAgICBhcmlhLWNvbnRyb2xzPVwibmF2YmFyU3VwcG9ydGVkQ29udGVudFwiXG4gICAgICAgICAgYXJpYS1leHBhbmRlZD1cImZhbHNlXCJcbiAgICAgICAgICBhcmlhLWxhYmVsPVwiVG9nZ2xlIG5hdmlnYXRpb25cIlxuICAgICAgICA+XG4gICAgICAgICAgPGltZyBzcmM9XCIvaW1nL3NhbmR3aWNoLnN2Z1wiIC8+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbGxhcHNlIG5hdmJhci1jb2xsYXBzZVwiIGlkPVwibmF2YmFyU3VwcG9ydGVkQ29udGVudFwiPlxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXZiYXItbmF2IG1pZGRsZVwiPlxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCIgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICBXaHkgdXM/XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIiBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgIFByb2R1Y3RzXG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIiBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgIEN1c3RvbWVyc1xuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCIgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICBSZXNvdXJjZXNcbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgU3VwcG9ydFxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdmJhci1uYXYgbWwtYXV0b1wiPlxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCIgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgICAgICB3aWR0aD1cIjIyXCJcbiAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjIwXCJcbiAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjIgMjBcIlxuICAgICAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgICAgZD1cIk0xIDE2LjMyODZWNy42ODE2NEg2LjUwMjYxVjE2LjMyODZDNi41MDI2MSAxNy44NDgxIDUuMjcwODEgMTkuMDc5OSAzLjc1MTMgMTkuMDc5OUMyLjIzMTggMTkuMDc5OSAxIDE3Ljg0ODEgMSAxNi4zMjg2WlwiXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZT1cIndoaXRlXCJcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9XCIxLjVcIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICAgIGQ9XCJNNC4xNDQ0MSAxOS4wOEgxNi44NDU5QzE4Ljk0ODEgMTkuMDggMjAuNjUyMiAxNy4zNzU5IDIwLjY1MjIgMTUuMjczN1YxSDYuNTAyNjdWOC45OTY5MlwiXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZT1cIndoaXRlXCJcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9XCIxLjVcIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICAgIGQ9XCJNOS4yNTM3OCA0LjkzMDQySDE4LjI5MzhcIlxuICAgICAgICAgICAgICAgICAgICBzdHJva2U9XCJ3aGl0ZVwiXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPVwiMS41XCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICBkPVwiTTkuMjUzNzggOC4wNzQ3MUgxOC4yOTM4XCJcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlPVwid2hpdGVcIlxuICAgICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD1cIjEuNVwiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgICAgZD1cIk05LjI1Mzc4IDExLjIxOTJIMTguMjkzOFwiXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZT1cIndoaXRlXCJcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9XCIxLjVcIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICAgICAgd2lkdGg9XCIyM1wiXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIyMlwiXG4gICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDIzIDIyXCJcbiAgICAgICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxlbGxpcHNlXG4gICAgICAgICAgICAgICAgICAgIGN4PVwiMTEuODI2MVwiXG4gICAgICAgICAgICAgICAgICAgIGN5PVwiNy43MzA3M1wiXG4gICAgICAgICAgICAgICAgICAgIHJ4PVwiMi44ODQ2MlwiXG4gICAgICAgICAgICAgICAgICAgIHJ5PVwiMy4wNzY5MlwiXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZT1cIndoaXRlXCJcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9XCIxLjc1XCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICBkPVwiTTIwLjA5ODUgMTcuMDIwM0MxOC4wMDEyIDE0Ljg1NzUgMTUuMDM0MyAxMy41MDg1IDExLjc0NSAxMy41MDg1QzguNDU1NzEgMTMuNTA4NSA1LjQ4ODc1IDE0Ljg1NzUgMy4zOTE0OCAxNy4wMjAzXCJcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlPVwid2hpdGVcIlxuICAgICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD1cIjEuNzVcIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDxjaXJjbGVcbiAgICAgICAgICAgICAgICAgICAgY3g9XCIxMS44MjZcIlxuICAgICAgICAgICAgICAgICAgICBjeT1cIjExXCJcbiAgICAgICAgICAgICAgICAgICAgcj1cIjEwXCJcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlPVwid2hpdGVcIlxuICAgICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD1cIjEuNzVcIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICAgICAgd2lkdGg9XCIyMFwiXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIxOVwiXG4gICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDIwIDE5XCJcbiAgICAgICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxjaXJjbGVcbiAgICAgICAgICAgICAgICAgICAgY3g9XCIxMS4zNzEzXCJcbiAgICAgICAgICAgICAgICAgICAgY3k9XCI3Ljk1NDU1XCJcbiAgICAgICAgICAgICAgICAgICAgcj1cIjYuOTU0NTVcIlxuICAgICAgICAgICAgICAgICAgICBzdHJva2U9XCJ3aGl0ZVwiXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPVwiMS43NVwiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgICAgZD1cIk0xLjMyNTkzIDE3Ljk5OTlMNi43MzUwMiAxMi41OTA4XCJcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlPVwid2hpdGVcIlxuICAgICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD1cIjEuNzVcIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbSBwbC0zXCI+XG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rIGZyZWUtdHJpYWxcIiBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgIDxidXR0b24+RnJlZSB0cmlhbDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9uYXY+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5oZWFkZXIge1xuICAgICAgICAgIG5hdiB7XG4gICAgICAgICAgICBwYWRkaW5nOiAzN3B4IDUwcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMDMwcHgpIHtcbiAgICAgICAgICAgICAgcGFkZGluZzogMzBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHVsIHtcbiAgICAgICAgICAgICAgJi5taWRkbGUge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDExNDBweCkge1xuICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHN0YXRpYztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGkge1xuICAgICAgICAgICAgICAgICAgcGFkZGluZzogMCAyMnB4O1xuICAgICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDEzMTBweCkge1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDE1cHg7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogMTIzMHB4KSB7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMTBweDtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgJjpmaXJzdC1vZi10eXBlIHtcbiAgICAgICAgICAgICAgICBsaSBhIHtcbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICY6YWZ0ZXIge1xuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMnB4O1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC41cztcbiAgICAgICAgICAgICAgICAgICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC41cztcbiAgICAgICAgICAgICAgICAgICAgLW1zLXRyYW5zaXRpb246IGFsbCAwLjVzO1xuICAgICAgICAgICAgICAgICAgICAtby10cmFuc2l0aW9uOiBhbGwgMC41cztcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XG4gICAgICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwcHgpO1xuICAgICAgICAgICAgICAgICAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMHB4KTtcbiAgICAgICAgICAgICAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMHB4KTtcbiAgICAgICAgICAgICAgICAgICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwcHgpO1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjBweCk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAmOmhvdmVyOmFmdGVyIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZGIwMDtcbiAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgICAgICAgICAgICAgICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgICAgICAgICAgICAgICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgICAgICAgICAgICAgICAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgbGkge1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IGF1dG87XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogYXV0bztcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiQXBlcmN1IE1lZGl1bVwiO1xuICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICBzdmcgKiB7XG4gICAgICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNXM7XG4gICAgICAgICAgICAgICAgICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNXM7XG4gICAgICAgICAgICAgICAgICAgIC1tcy10cmFuc2l0aW9uOiBhbGwgMC41cztcbiAgICAgICAgICAgICAgICAgICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNXM7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjVzO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgJjpob3ZlciBzdmcgKiB7XG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZTogI2ZmZGIwMDtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMjIxZjIwO1xuICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTJweCAxOHB4O1xuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZGIwMDtcbiAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgICAgICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMDtcbiAgICAgICAgICAgICAgICAgIC1tb3otYm9yZGVyLXJhZGl1czogMDtcbiAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGJhY2tncm91bmQgMC41cztcbiAgICAgICAgICAgICAgICAgIC1tb3otdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjVzO1xuICAgICAgICAgICAgICAgICAgLW1zLXRyYW5zaXRpb246IGJhY2tncm91bmQgMC41cztcbiAgICAgICAgICAgICAgICAgIC1vLXRyYW5zaXRpb246IGJhY2tncm91bmQgMC41cztcbiAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC41cztcbiAgICAgICAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcbiJdfQ== */\n/*@ sourceURL=/Users/baijutoms/Documents/Works/Web/next/viska/m-and-m/components/Header.js */"));
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
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _home_body__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/body */ "./components/home/body.js");
var _jsxFileName = "/Users/baijutoms/Documents/Works/Web/next/viska/m-and-m/components/Home.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



const Home = () => {
  return __jsx("div", {
    className: "jsx-4043747907" + " " + "home",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  }, __jsx("title", {
    className: "jsx-4043747907",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, "M&M")), __jsx("div", {
    className: "jsx-4043747907" + " " + "heading-wrapper",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }, __jsx("h1", {
    className: "jsx-4043747907",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, "Your weekly ", __jsx("span", {
    className: "jsx-4043747907",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 23
    }
  }, "Tech News")), __jsx("h2", {
    className: "jsx-4043747907",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }, "The Mousepad")), __jsx(_home_body__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4043747907",
    __self: undefined
  }, ".heading-wrapper.jsx-4043747907{padding:120px 0;}@media (max-width:992px){.heading-wrapper.jsx-4043747907{padding:30px 0;}}h1.jsx-4043747907{font-family:\"Apercu Regular\";font-size:48px;color:#bdbcbc;}@media (max-width:992px){h1.jsx-4043747907{font-size:24px;}}h1.jsx-4043747907 span.jsx-4043747907{font-family:\"Apercu Medium\";color:#ffffff;}h2.jsx-4043747907{font-family:\"Apercu Bold\";font-size:48px;color:#ffdb00;}@media (max-width:992px){h2.jsx-4043747907{font-size:36px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9iYWlqdXRvbXMvRG9jdW1lbnRzL1dvcmtzL1dlYi9uZXh0L3Zpc2thL20tYW5kLW0vY29tcG9uZW50cy9Ib21lLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtCa0IsQUFFbUIsQUFHRyxBQUdVLEFBS1YsQUFHUyxBQUlGLEFBS1AsZUFwQkMsQUFRQSxBQVlBLENBdkJILFVBbUJGLEVBSkQsQ0FSQyxZQWFELENBTEMsRUFQRCxXQVlDLEdBWkEiLCJmaWxlIjoiL1VzZXJzL2JhaWp1dG9tcy9Eb2N1bWVudHMvV29ya3MvV2ViL25leHQvdmlza2EvbS1hbmQtbS9jb21wb25lbnRzL0hvbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgQm9keSBmcm9tIFwiLi9ob21lL2JvZHlcIjtcblxuY29uc3QgSG9tZSA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImhvbWVcIj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+TSZNPC90aXRsZT5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGluZy13cmFwcGVyXCI+XG4gICAgICAgIDxoMT5cbiAgICAgICAgICBZb3VyIHdlZWtseSA8c3Bhbj5UZWNoIE5ld3M8L3NwYW4+XG4gICAgICAgIDwvaDE+XG4gICAgICAgIDxoMj5UaGUgTW91c2VwYWQ8L2gyPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxCb2R5IC8+XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmhlYWRpbmctd3JhcHBlciB7XG4gICAgICAgICAgcGFkZGluZzogMTIwcHggMDtcbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogOTkycHgpIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDMwcHggMDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaDEge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkFwZXJjdSBSZWd1bGFyXCI7XG4gICAgICAgICAgZm9udC1zaXplOiA0OHB4O1xuICAgICAgICAgIGNvbG9yOiAjYmRiY2JjO1xuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA5OTJweCkge1xuICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBoMSBzcGFuIHtcbiAgICAgICAgICBmb250LWZhbWlseTogXCJBcGVyY3UgTWVkaXVtXCI7XG4gICAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgIH1cbiAgICAgICAgaDIge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkFwZXJjdSBCb2xkXCI7XG4gICAgICAgICAgZm9udC1zaXplOiA0OHB4O1xuICAgICAgICAgIGNvbG9yOiAjZmZkYjAwO1xuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA5OTJweCkge1xuICAgICAgICAgICAgZm9udC1zaXplOiAzNnB4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiJdfQ== */\n/*@ sourceURL=/Users/baijutoms/Documents/Works/Web/next/viska/m-and-m/components/Home.js */"));
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

/***/ "./components/home/body.js":
/*!*********************************!*\
  !*** ./components/home/body.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/baijutoms/Documents/Works/Web/next/viska/m-and-m/components/home/body.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

const Body = () => {
  return __jsx("section", {
    className: "jsx-3049392257" + " " + "body",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "jsx-3049392257" + " " + "row top",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "jsx-3049392257" + " " + "left col-12 col-md-3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 9
    }
  }, __jsx("input", {
    type: "text",
    placeholder: "Search for an article",
    className: "jsx-3049392257" + " " + "search form-control f-cap-r",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 11
    }
  })), __jsx("div", {
    className: "jsx-3049392257" + " " + "middle col-12 col-md-7 d-flex",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-3049392257" + " " + "body-nav-wrapper d-flex",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 11
    }
  }, __jsx("ul", {
    className: "jsx-3049392257" + " " + "body-nav list-unstyled f-ap-r d-flex",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }
  }, __jsx("li", {
    className: "jsx-3049392257" + " " + "body-nav-item active",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 15
    }
  }, "All"), __jsx("li", {
    className: "jsx-3049392257" + " " + "body-nav-item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 15
    }
  }, "Networking"), __jsx("li", {
    className: "jsx-3049392257" + " " + "body-nav-item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 15
    }
  }, "Business"), __jsx("li", {
    className: "jsx-3049392257" + " " + "body-nav-item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 15
    }
  }, "Men&Mice"), __jsx("li", {
    className: "jsx-3049392257" + " " + "body-nav-item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 15
    }
  }, "Events"), __jsx("li", {
    className: "jsx-3049392257" + " " + "body-nav-item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 15
    }
  }, "Courses")))), __jsx("div", {
    className: "jsx-3049392257" + " " + "right col-2 d-none d-md-block",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-3049392257" + " " + "sort",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 11
    }
  }, __jsx("span", {
    className: "jsx-3049392257" + " " + "f-cap-r d-none d-lg-inline-block mr-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }
  }, "Sort by:", " "), __jsx("button", {
    type: "button",
    className: "jsx-3049392257" + " " + "sort-button f-cap-b",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }
  }, "Newest ", __jsx("img", {
    src: "/img/caret-down-grey.svg",
    className: "jsx-3049392257" + " " + "ml-1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 22
    }
  }), __jsx("ul", {
    className: "jsx-3049392257" + " " + "sortby list-unstyled",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 15
    }
  }, __jsx("li", {
    className: "jsx-3049392257" + " " + "sort-item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 17
    }
  }, "Most popular"), __jsx("li", {
    className: "jsx-3049392257" + " " + "sort-item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 17
    }
  }, "Newest"), __jsx("li", {
    className: "jsx-3049392257" + " " + "sort-item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 17
    }
  }, "Oldest")))))), __jsx("div", {
    className: "jsx-3049392257" + " " + "row blog",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "jsx-3049392257" + " " + "left col-3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-3049392257",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "jsx-3049392257" + " " + "label f-ap-m",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }
  }, "THIS WEEKS POST"), __jsx("div", {
    className: "jsx-3049392257" + " " + "date",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 13
    }
  }, "February 24th 2020"))), __jsx("div", {
    className: "jsx-3049392257" + " " + "middle col-12 col-md-7 network-security",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-3049392257" + " " + "d-flex align-items-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "jsx-3049392257" + " " + "for-image-gap",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "jsx-3049392257",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 15
    }
  })), __jsx("div", {
    className: "jsx-3049392257",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 13
    }
  }, __jsx("h4", {
    className: "jsx-3049392257",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 15
    }
  }, "Network Security"), __jsx("div", {
    className: "jsx-3049392257" + " " + "title",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 15
    }
  }, __jsx("h3", {
    className: "jsx-3049392257",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 17
    }
  }, "Working from 127.0.0.1"), __jsx("h3", {
    className: "jsx-3049392257" + " " + "with-underline",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 17
    }
  }, "Working from 127.0.0.1")))), __jsx("img", {
    src: "img/Security-Blog-Icon.svg",
    alt: "",
    className: "jsx-3049392257",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 11
    }
  })), __jsx("div", {
    className: "jsx-3049392257" + " " + "right col-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-3049392257" + " " + "read-link",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 11
    }
  }, "Read", " ", __jsx("svg", {
    width: "8",
    height: "12",
    viewBox: "0 0 8 12",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "jsx-3049392257" + " " + "ml-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 13
    }
  }, __jsx("path", {
    d: "M1 11L6 6L1 1",
    stroke: "#757575",
    "stroke-width": "2",
    className: "jsx-3049392257",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 15
    }
  }))))), __jsx("div", {
    className: "jsx-3049392257" + " " + "row blog",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "jsx-3049392257" + " " + "left col-3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-3049392257" + " " + "date",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 11
    }
  }, "February 12th 2020")), __jsx("div", {
    className: "jsx-3049392257" + " " + "middle col-12 col-md-7 cloud",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-3049392257" + " " + "d-flex",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "jsx-3049392257" + " " + "for-image-gap",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "jsx-3049392257",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 15
    }
  })), __jsx("div", {
    className: "jsx-3049392257",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 13
    }
  }, __jsx("h4", {
    className: "jsx-3049392257",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 15
    }
  }, "Cloud"), __jsx("div", {
    className: "jsx-3049392257" + " " + "title",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 15
    }
  }, __jsx("h3", {
    className: "jsx-3049392257",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 17
    }
  }, "Men&Mice Suite 9.3 feature highlight: Akamai Fast DNS integration"), __jsx("h3", {
    className: "jsx-3049392257" + " " + "with-underline",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 17
    }
  }, "Men&Mice Suite 9.3 feature highlight: Akamai Fast DNS integration")))), __jsx("img", {
    src: "img/Cloud-Blog-Icon.svg",
    alt: "",
    className: "jsx-3049392257",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 11
    }
  })), __jsx("div", {
    className: "jsx-3049392257" + " " + "right col-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-3049392257" + " " + "read-link",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 11
    }
  }, "Read", " ", __jsx("svg", {
    width: "8",
    height: "12",
    viewBox: "0 0 8 12",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "jsx-3049392257" + " " + "ml-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 13
    }
  }, __jsx("path", {
    d: "M1 11L6 6L1 1",
    stroke: "#757575",
    "stroke-width": "2",
    className: "jsx-3049392257",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 15
    }
  }))))), __jsx("div", {
    className: "jsx-3049392257" + " " + "row blog",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "jsx-3049392257" + " " + "left col-3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-3049392257" + " " + "date",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 11
    }
  }, "February 2nd 2020")), __jsx("div", {
    className: "jsx-3049392257" + " " + "middle col-12 col-md-7 men-and-mice",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-3049392257" + " " + "d-flex",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "jsx-3049392257" + " " + "for-image-gap",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "jsx-3049392257",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 15
    }
  })), __jsx("div", {
    className: "jsx-3049392257",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 13
    }
  }, __jsx("h4", {
    className: "jsx-3049392257",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 15
    }
  }, "Men&Mice"), __jsx("div", {
    className: "jsx-3049392257" + " " + "title",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 15
    }
  }, __jsx("h3", {
    className: "jsx-3049392257",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 17
    }
  }, "Change is our constant; innovation is our tradition"), __jsx("h3", {
    className: "jsx-3049392257" + " " + "with-underline",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 17
    }
  }, "Change is our constant; innovation is our tradition")))), __jsx("img", {
    src: "img/men-and-mice.png",
    alt: "",
    className: "jsx-3049392257" + " " + "photo",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 11
    }
  })), __jsx("div", {
    className: "jsx-3049392257" + " " + "right col-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-3049392257" + " " + "read-link",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 11
    }
  }, "Read", " ", __jsx("svg", {
    width: "8",
    height: "12",
    viewBox: "0 0 8 12",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "jsx-3049392257" + " " + "ml-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 13
    }
  }, __jsx("path", {
    d: "M1 11L6 6L1 1",
    stroke: "#757575",
    "stroke-width": "2",
    className: "jsx-3049392257",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 15
    }
  }))))), __jsx("div", {
    className: "jsx-3049392257" + " " + "row blog",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "jsx-3049392257" + " " + "left col-3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-3049392257" + " " + "date",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 11
    }
  }, "February 12th 2020")), __jsx("div", {
    className: "jsx-3049392257" + " " + "middle col-12 col-md-7 api-auto-rest",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-3049392257" + " " + "d-flex",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "jsx-3049392257" + " " + "for-image-gap",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "jsx-3049392257",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 15
    }
  })), __jsx("div", {
    className: "jsx-3049392257",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 13
    }
  }, __jsx("h4", {
    className: "jsx-3049392257",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 15
    }
  }, "API", __jsx("span", {
    className: "jsx-3049392257",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 20
    }
  }), "Automation", __jsx("span", {
    className: "jsx-3049392257",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 43
    }
  }), "REST"), __jsx("div", {
    className: "jsx-3049392257" + " " + "title",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 15
    }
  }, __jsx("h3", {
    className: "jsx-3049392257",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 17
    }
  }, "IP infrastructure automation in action: the REST(ful) API"), __jsx("h3", {
    className: "jsx-3049392257" + " " + "with-underline",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 17
    }
  }, "IP infrastructure automation in action: the REST(ful) API")))), __jsx("img", {
    src: "img/Server-Blog-Icon.svg",
    alt: "",
    className: "jsx-3049392257",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 11
    }
  })), __jsx("div", {
    className: "jsx-3049392257" + " " + "right col-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-3049392257" + " " + "read-link",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205,
      columnNumber: 11
    }
  }, "Read", " ", __jsx("svg", {
    width: "8",
    height: "12",
    viewBox: "0 0 8 12",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "jsx-3049392257" + " " + "ml-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207,
      columnNumber: 13
    }
  }, __jsx("path", {
    d: "M1 11L6 6L1 1",
    stroke: "#757575",
    "stroke-width": "2",
    className: "jsx-3049392257",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215,
      columnNumber: 15
    }
  }))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3049392257",
    __self: undefined
  }, ".body.jsx-3049392257{padding-bottom:35px;}.body.jsx-3049392257 .top.jsx-3049392257 .left.jsx-3049392257,.body.jsx-3049392257 .top.jsx-3049392257 .middle.jsx-3049392257,.body.jsx-3049392257 .top.jsx-3049392257 .right.jsx-3049392257{height:107px;border-right:1px solid #4e4c4d;padding-top:36px;}@media (max-width:991px){.body.jsx-3049392257 .top.jsx-3049392257 .left.jsx-3049392257,.body.jsx-3049392257 .top.jsx-3049392257 .middle.jsx-3049392257,.body.jsx-3049392257 .top.jsx-3049392257 .right.jsx-3049392257{padding:15px 0;}}@media (max-width:767px){.body.jsx-3049392257 .top.jsx-3049392257 .left.jsx-3049392257,.body.jsx-3049392257 .top.jsx-3049392257 .middle.jsx-3049392257,.body.jsx-3049392257 .top.jsx-3049392257 .right.jsx-3049392257{border-right:none;padding:0;}}@media (max-width:768px){.body.jsx-3049392257 .top.jsx-3049392257 .left.jsx-3049392257{padding:0 15px;}}.body.jsx-3049392257 .top.jsx-3049392257 .left.jsx-3049392257 .search.jsx-3049392257{font-size:18px;color:#bdbcbc;background:url(/img/search.svg) no-repeat transparent;background-position:left center;border:none;outline:none;padding-left:43px;padding-top:9px;}@media (max-width:767px){.body.jsx-3049392257 .top.jsx-3049392257 .left.jsx-3049392257 .search.jsx-3049392257{font-size:14px;}}.body.jsx-3049392257 .top.jsx-3049392257 .left.jsx-3049392257 .search.jsx-3049392257::-webkit-input-placeholder{color:#bdbcbc;}.body.jsx-3049392257 .top.jsx-3049392257 .left.jsx-3049392257 .search.jsx-3049392257:-ms-input-placeholder{color:#bdbcbc;}.body.jsx-3049392257 .top.jsx-3049392257 .left.jsx-3049392257 .search.jsx-3049392257::-webkit-input-placeholder{color:#bdbcbc;}.body.jsx-3049392257 .top.jsx-3049392257 .left.jsx-3049392257 .search.jsx-3049392257::-moz-placeholder{color:#bdbcbc;}.body.jsx-3049392257 .top.jsx-3049392257 .left.jsx-3049392257 .search.jsx-3049392257:-ms-input-placeholder{color:#bdbcbc;}.body.jsx-3049392257 .top.jsx-3049392257 .left.jsx-3049392257 .search.jsx-3049392257::placeholder{color:#bdbcbc;}.body.jsx-3049392257 .top.jsx-3049392257 .middle.jsx-3049392257{padding-left:20px;padding-right:20px;}@media (max-width:767px){.body.jsx-3049392257 .top.jsx-3049392257 .middle.jsx-3049392257{padding-left:15px;padding-right:15px;}}.body.jsx-3049392257 .top.jsx-3049392257 .middle.jsx-3049392257 .body-nav-wrapper.jsx-3049392257{overflow:hidden;}.body.jsx-3049392257 .top.jsx-3049392257 .middle.jsx-3049392257 .body-nav-wrapper.jsx-3049392257 .body-nav.jsx-3049392257{padding-top:5px;padding-bottom:15px;overflow-y:hidden;overflow-x:auto;}.body.jsx-3049392257 .top.jsx-3049392257 .middle.jsx-3049392257 .body-nav-wrapper.jsx-3049392257 .body-nav.jsx-3049392257 .body-nav-item.jsx-3049392257{color:rgba(255,255,255,0.6);font-size:18px;margin:0 20px;cursor:pointer;position:relative;-webkit-transition:all 0.5s;-moz-transition:all 0.5s;-ms-transition:all 0.5s;-o-transition:all 0.5s;-webkit-transition:all 0.5s;transition:all 0.5s;}@media (max-width:767px){.body.jsx-3049392257 .top.jsx-3049392257 .middle.jsx-3049392257 .body-nav-wrapper.jsx-3049392257 .body-nav.jsx-3049392257 .body-nav-item.jsx-3049392257{font-size:14px;}}.body.jsx-3049392257 .top.jsx-3049392257 .middle.jsx-3049392257 .body-nav-wrapper.jsx-3049392257 .body-nav.jsx-3049392257 .body-nav-item.jsx-3049392257:hover{color:#ffffff;}.body.jsx-3049392257 .top.jsx-3049392257 .middle.jsx-3049392257 .body-nav-wrapper.jsx-3049392257 .body-nav.jsx-3049392257 .body-nav-item.active.jsx-3049392257{color:#ffffff;}@media (max-width:767px){.body.jsx-3049392257 .top.jsx-3049392257 .middle.jsx-3049392257 .body-nav-wrapper.jsx-3049392257 .body-nav.jsx-3049392257 .body-nav-item.jsx-3049392257:first-of-type{margin-left:0;}}.body.jsx-3049392257 .top.jsx-3049392257 .middle.jsx-3049392257 .body-nav-item.jsx-3049392257:after{content:\"\";position:absolute;left:0;top:30px;width:100%;height:2px;background:transparent;-webkit-transition:all 0.5s;-moz-transition:all 0.5s;-ms-transition:all 0.5s;-o-transition:all 0.5s;-webkit-transition:all 0.5s;transition:all 0.5s;}.body.jsx-3049392257 .top.jsx-3049392257 .middle.jsx-3049392257 .body-nav-item.active.jsx-3049392257:after,.body.jsx-3049392257 .top.jsx-3049392257 .middle.jsx-3049392257 .body-nav-item.jsx-3049392257:hover.jsx-3049392257:after{background:#ffdb00;}.body.jsx-3049392257 .top.jsx-3049392257 .right.jsx-3049392257{padding-left:30px;border:none;}.body.jsx-3049392257 .top.jsx-3049392257 .right.jsx-3049392257 .sort.jsx-3049392257{color:#bdbcbc;font-size:18px;position:relative;}.body.jsx-3049392257 .top.jsx-3049392257 .right.jsx-3049392257 .sort.jsx-3049392257 .sort-button.jsx-3049392257{color:#ffffff;font-size:18px;border:none;background:transparent;padding:0;}.body.jsx-3049392257 .top.jsx-3049392257 .right.jsx-3049392257 .sort.jsx-3049392257 .sort-button.jsx-3049392257 .sortby.jsx-3049392257{opacity:0;height:0;overflow:hidden;position:absolute;left:0;text-align:left;background:#ffffff;color:#221f20;min-width:180px;z-index:400;-webkit-transition:all 0.3s;-moz-transition:all 0.3s;-ms-transition:all 0.3s;-o-transition:all 0.3s;-webkit-transition:all 0.3s;transition:all 0.3s;}.body.jsx-3049392257 .top.jsx-3049392257 .right.jsx-3049392257 .sort.jsx-3049392257 .sort-button.jsx-3049392257:hover .sortby.jsx-3049392257{opacity:1;height:auto;padding:12px 0;}.body.jsx-3049392257 .top.jsx-3049392257 .right.jsx-3049392257 .sort.jsx-3049392257 .sort-button.jsx-3049392257:hover .sortby.jsx-3049392257 .sort-item.jsx-3049392257{padding:12px;background:#ffffff;}.body.jsx-3049392257 .top.jsx-3049392257 .right.jsx-3049392257 .sort.jsx-3049392257 .sort-button.jsx-3049392257:hover .sortby.jsx-3049392257 .sort-item.jsx-3049392257:hover{background:#d1d1d1;}.body.jsx-3049392257 .blog.jsx-3049392257{cursor:pointer;}.body.jsx-3049392257 .blog.jsx-3049392257 *.jsx-3049392257{-webkit-transition:all 0.3s;-moz-transition:all 0.3s;-ms-transition:all 0.3s;-o-transition:all 0.3s;-webkit-transition:all 0.3s;transition:all 0.3s;}.body.jsx-3049392257 .blog.jsx-3049392257:hover .left.jsx-3049392257 .date.jsx-3049392257{color:#ffffff;}.body.jsx-3049392257 .blog.jsx-3049392257:hover .middle.jsx-3049392257 img.jsx-3049392257{opacity:1;}.body.jsx-3049392257 .blog.jsx-3049392257:hover .middle.jsx-3049392257 .title.jsx-3049392257 h3.with-underline.jsx-3049392257{opacity:1;}.body.jsx-3049392257 .blog.jsx-3049392257 .left.jsx-3049392257,.body.jsx-3049392257 .blog.jsx-3049392257 .middle.jsx-3049392257,.body.jsx-3049392257 .blog.jsx-3049392257 .right.jsx-3049392257{border-top:1px solid #4e4c4d;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;min-height:394px;}@media (max-width:767px){.body.jsx-3049392257 .blog.jsx-3049392257 .left.jsx-3049392257,.body.jsx-3049392257 .blog.jsx-3049392257 .middle.jsx-3049392257,.body.jsx-3049392257 .blog.jsx-3049392257 .right.jsx-3049392257{min-height:278px;}}.body.jsx-3049392257 .blog.jsx-3049392257 .left.jsx-3049392257{padding:0;}@media (max-width:767px){.body.jsx-3049392257 .blog.jsx-3049392257 .left.jsx-3049392257{display:none;}}.body.jsx-3049392257 .blog.jsx-3049392257 .left.jsx-3049392257 .label.jsx-3049392257{display:inline-block;padding:10px 13px 7px 12px;line-height:100%;border:none;background-color:#ffdb00;color:#221f20;font-size:12px;margin-bottom:18px;}.body.jsx-3049392257 .blog.jsx-3049392257 .left.jsx-3049392257 .date.jsx-3049392257{font-family:\"Capitolium Regular\";color:#b7b6b6;font-size:20px;line-height:100%;}.body.jsx-3049392257 .blog.jsx-3049392257 .left.jsx-3049392257,.body.jsx-3049392257 .blog.jsx-3049392257 .middle.jsx-3049392257{border-right:1px solid #4e4c4d;}@media (max-width:767px){.body.jsx-3049392257 .blog.jsx-3049392257 .left.jsx-3049392257,.body.jsx-3049392257 .blog.jsx-3049392257 .middle.jsx-3049392257{border-right:none;}}.body.jsx-3049392257 .blog.jsx-3049392257 .middle.jsx-3049392257{padding-right:80px;overflow:hidden;padding-left:0;position:relative;}@media (max-width:991px){.body.jsx-3049392257 .blog.jsx-3049392257 .middle.jsx-3049392257{padding-right:20px;}}.body.jsx-3049392257 .blog.jsx-3049392257 .middle.jsx-3049392257 .for-image-gap.jsx-3049392257 div.jsx-3049392257{width:250px;height:10px;}@media (max-width:991px){.body.jsx-3049392257 .blog.jsx-3049392257 .middle.jsx-3049392257 .for-image-gap.jsx-3049392257 div.jsx-3049392257{width:140px;}}.body.jsx-3049392257 .blog.jsx-3049392257 .middle.jsx-3049392257 img.jsx-3049392257{position:absolute;opacity:0.4;}@media (max-width:991px){.body.jsx-3049392257 .blog.jsx-3049392257 .middle.jsx-3049392257 img.jsx-3049392257{width:130px;left:-38px;}}.body.jsx-3049392257 .blog.jsx-3049392257 .middle.jsx-3049392257 img.photo.jsx-3049392257{left:0;width:210px;height:100%;object-fit:cover;}@media (max-width:991px){.body.jsx-3049392257 .blog.jsx-3049392257 .middle.jsx-3049392257 img.photo.jsx-3049392257{width:98px;}}.body.jsx-3049392257 .blog.jsx-3049392257 .middle.jsx-3049392257 h4.jsx-3049392257{font-family:\"Apercu Regular\";font-size:12px;color:#ffdb00;text-transform:uppercase;margin-bottom:12px;}.body.jsx-3049392257 .blog.jsx-3049392257 .middle.jsx-3049392257 h4.jsx-3049392257 span.jsx-3049392257{display:inline-block;width:20px;}.body.jsx-3049392257 .blog.jsx-3049392257 .middle.jsx-3049392257 .title.jsx-3049392257{position:relative;}.body.jsx-3049392257 .blog.jsx-3049392257 .middle.jsx-3049392257 .title.jsx-3049392257 h3.jsx-3049392257{font-family:\"Apercu Bold\";font-size:36px;color:#ffffff;padding:0;margin:0;}@media (max-width:991px){.body.jsx-3049392257 .blog.jsx-3049392257 .middle.jsx-3049392257 .title.jsx-3049392257 h3.jsx-3049392257{font-size:28px;}}@media (max-width:767px){.body.jsx-3049392257 .blog.jsx-3049392257 .middle.jsx-3049392257 .title.jsx-3049392257 h3.jsx-3049392257{font-size:20px;}}.body.jsx-3049392257 .blog.jsx-3049392257 .middle.jsx-3049392257 .title.jsx-3049392257 h3.with-underline.jsx-3049392257{position:absolute;opacity:0;top:0;-webkit-text-decoration:underline;text-decoration:underline;-webkit-text-decoration-color:#ffdb00;text-decoration-color:#ffdb00;}.body.jsx-3049392257 .blog.jsx-3049392257 .right.jsx-3049392257{text-align:center;}@media (max-width:767px){.body.jsx-3049392257 .blog.jsx-3049392257 .right.jsx-3049392257{display:none;}}.body.jsx-3049392257 .blog.jsx-3049392257 .right.jsx-3049392257 .read-link.jsx-3049392257{font-family:\"Capitolium Bold\";font-size:20px;color:#b7b6b6;cursor:pointer;}.body.jsx-3049392257 .blog.jsx-3049392257 .right.jsx-3049392257 .read-link.jsx-3049392257:hover{color:#ffffff;}.body.jsx-3049392257 .blog.jsx-3049392257 .right.jsx-3049392257 .read-link.jsx-3049392257 svg.jsx-3049392257{-webkit-transition:all 0.5s;-moz-transition:all 0.5s;-ms-transition:all 0.5s;-o-transition:all 0.5s;-webkit-transition:all 0.5s;transition:all 0.5s;margin-top:-4px;}.body.jsx-3049392257 .blog.jsx-3049392257 .right.jsx-3049392257 .read-link.jsx-3049392257:hover svg.jsx-3049392257{-webkit-transform:translateX(10px);-moz-transform:translateX(10px);-ms-transform:translateX(10px);-o-transform:translateX(10px);-webkit-transform:translateX(10px);-ms-transform:translateX(10px);transform:translateX(10px);}.body.jsx-3049392257 .blog.jsx-3049392257 .right.jsx-3049392257 .read-link.jsx-3049392257:hover svg.jsx-3049392257 path.jsx-3049392257{stroke:#ffdb00;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9iYWlqdXRvbXMvRG9jdW1lbnRzL1dvcmtzL1dlYi9uZXh0L3Zpc2thL20tYW5kLW0vY29tcG9uZW50cy9ob21lL2JvZHkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOE5rQixBQUV1QixBQUlMLEFBT00sQUFLRyxBQUlMLEFBRUYsQUFVSSxBQUdILEFBR0EsQUFFQSxBQUVFLEFBSUksQUFHSixBQUVFLEFBS2lCLEFBWVosQUFFSCxBQUVBLEFBR0UsQUFFWCxBQWNRLEFBRUgsQUFHRixBQUlFLEFBTUYsQUFnQkEsQUFJSyxBQUdRLEFBRWQsQUFFZSxBQU1kLEFBRUosQUFFQSxBQUltQixBQVNSLEFBRVgsQUFHTyxBQUVNLEFBU1ksQUFNSixBQUlULEFBRUgsQUFNSSxBQUVULEFBSUksQUFFRSxBQUlGLEFBR1AsQUFNUSxBQUVZLEFBTU4sQUFHTCxBQUVVLEFBT1AsQUFHQSxBQUVDLEFBTU4sQUFHRCxBQUVlLEFBS2QsQUFFYyxBQU9PLEFBTWxCLE9BN0RMLEdBbkdILEFBZ0JHLEFBa0JMLEFBRUEsQUFlQSxDQWhGTyxBQXFJRSxDQWxCTixBQUdLLEFBT0YsQ0F0TVksQUEwSEosQUFrQ1AsQUFvRkEsQ0FsTkgsQUFHQSxBQUVBLEFBOEJNLEFBRUEsQUFHRSxBQXNCUixBQUlFLEFBc0NGLEFBaUhJLENBalBELEFBU0YsQUFHSixBQVNNLEFBb0NNLEFBK0RWLEFBb0dVLEFBR0EsQUFpQ0YsQ0ExTkwsQUFHSyxDQXdHQSxDQTNJVixBQTBCSyxBQUlJLEFBK0NYLEFBd0ZhLEFBaUJULEFBdUJPLEFBZUwsQUFLRyxDQXZKQyxBQWlCQSxBQXFCUSxBQXdEWixBQUtRLEFBaUJSLENBL01DLENBb0tZLEFBd0RkLENBaEdJLENBK0VELENBVkgsRUFnQ0ksRUFoTk4sQUF3Q00sQUE2RU0sQUF3R2IsQUFpQmlCLENBdk91QixBQXVEN0MsQUFtQlcsQUFJSixBQThDRCxBQWtFSSxDQXhITixBQXlHSSxBQWlERSxDQXRFZSxBQThCWCxDQWpGSyxBQTZGVixDQS9DQSxDQWtFZ0IsQ0FsSVYsQUE2RVAsQUE0RXFCLENBak5oQixBQTJCWCxDQXJDUyxBQUlJLEFBNkVGLElBckJLLEFBMkhQLEVBeEtBLENBcERILEFBaU5DLENBdElMLEFBd0tLLEVBdkpHLEFBNEVGLENBVEUsQUEyQ0csRUFyQkosR0E3RVAsQUF5QmEsQUF5SEksQ0ExTVYsQ0E2S0osQ0FqSkgsQ0F2QlEsQ0E2SlEsQ0FrQ1YsQ0EzSUcsQ0F6R0osQ0F5S0csRUF2RVAsQ0E4REUsQUE4REQsRUFqSlUsQUFvTFksQ0E1RWhCLEVBcklBLEVBTUcsRUE0Q1QsQUE0SEMsQUFzQkksRUExSUssQ0F3QkEsQUErQkksQUEwRkEsRUFsRlAsSUF0SlUsQUFnTVQsT0E1SlcsQUF1QkosSUE0SlEsQ0EvSGxCLEdBdUpnQixFQS9IZCxBQXlISSxFQTFGUixBQWlETSxDQXBFQSxNQW5DRixNQXhGVixDQStJTyxFQTNHWSxBQXVCSixPQThCVCxFQXhGTCxDQThPb0IsR0EvRlYsTUF0RFcsR0F4RmhCLEdBbUNZLEFBdUJKLEtBbURILEFBMEhELEVBekZFLFFBN0lSLElBbU51QixFQW1CaEIsQ0E5SVEsRUFyREYsQUF1QkosT0ExRFIsT0F5SFEsU0FyRkMsQUF1QkosQUE4QlEsd0JBQ0QsT0FrSkssZ0JBakpSLENBdkRDLEFBdUJKLDBDQStESixLQS9CUSxZQStCUCIsImZpbGUiOiIvVXNlcnMvYmFpanV0b21zL0RvY3VtZW50cy9Xb3Jrcy9XZWIvbmV4dC92aXNrYS9tLWFuZC1tL2NvbXBvbmVudHMvaG9tZS9ib2R5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgQm9keSA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJib2R5XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyB0b3BcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZWZ0IGNvbC0xMiBjb2wtbWQtM1wiPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwic2VhcmNoIGZvcm0tY29udHJvbCBmLWNhcC1yXCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoIGZvciBhbiBhcnRpY2xlXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgey8qIC5sZWZ0ICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pZGRsZSBjb2wtMTIgY29sLW1kLTcgZC1mbGV4XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib2R5LW5hdi13cmFwcGVyIGQtZmxleFwiPlxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImJvZHktbmF2IGxpc3QtdW5zdHlsZWQgZi1hcC1yIGQtZmxleFwiPlxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiYm9keS1uYXYtaXRlbSBhY3RpdmVcIj5BbGw8L2xpPlxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiYm9keS1uYXYtaXRlbVwiPk5ldHdvcmtpbmc8L2xpPlxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiYm9keS1uYXYtaXRlbVwiPkJ1c2luZXNzPC9saT5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImJvZHktbmF2LWl0ZW1cIj5NZW4mYW1wO01pY2U8L2xpPlxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiYm9keS1uYXYtaXRlbVwiPkV2ZW50czwvbGk+XG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJib2R5LW5hdi1pdGVtXCI+Q291cnNlczwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgey8qIC5taWRkbGUgKi99XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyaWdodCBjb2wtMiBkLW5vbmUgZC1tZC1ibG9ja1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic29ydFwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZi1jYXAtciBkLW5vbmUgZC1sZy1pbmxpbmUtYmxvY2sgbXItMlwiPlxuICAgICAgICAgICAgICBTb3J0IGJ5OntcIiBcIn1cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwic29ydC1idXR0b24gZi1jYXAtYlwiIHR5cGU9XCJidXR0b25cIj5cbiAgICAgICAgICAgICAgTmV3ZXN0IDxpbWcgc3JjPVwiL2ltZy9jYXJldC1kb3duLWdyZXkuc3ZnXCIgY2xhc3NOYW1lPVwibWwtMVwiIC8+XG4gICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJzb3J0YnkgbGlzdC11bnN0eWxlZFwiPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJzb3J0LWl0ZW1cIj5Nb3N0IHBvcHVsYXI8L2xpPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJzb3J0LWl0ZW1cIj5OZXdlc3Q8L2xpPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJzb3J0LWl0ZW1cIj5PbGRlc3Q8L2xpPlxuICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7LyogLnJpZ2h0ICovfVxuICAgICAgPC9kaXY+XG4gICAgICB7LyogLnRvcCAqL31cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgYmxvZ1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxlZnQgY29sLTNcIj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYWJlbCBmLWFwLW1cIj5USElTIFdFRUtTIFBPU1Q8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGF0ZVwiPkZlYnJ1YXJ5IDI0dGggMjAyMDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgey8qIC5sZWZ0ICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pZGRsZSBjb2wtMTIgY29sLW1kLTcgbmV0d29yay1zZWN1cml0eVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3ItaW1hZ2UtZ2FwXCI+XG4gICAgICAgICAgICAgIDxkaXY+PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxoND5OZXR3b3JrIFNlY3VyaXR5PC9oND5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPlxuICAgICAgICAgICAgICAgIDxoMz5Xb3JraW5nIGZyb20gMTI3LjAuMC4xPC9oMz5cbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwid2l0aC11bmRlcmxpbmVcIj5Xb3JraW5nIGZyb20gMTI3LjAuMC4xPC9oMz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8aW1nIHNyYz1cImltZy9TZWN1cml0eS1CbG9nLUljb24uc3ZnXCIgYWx0PVwiXCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHsvKiAubWlkZGxlICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJpZ2h0IGNvbC0yXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWFkLWxpbmtcIj5cbiAgICAgICAgICAgIFJlYWR7XCIgXCJ9XG4gICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1sLTJcIlxuICAgICAgICAgICAgICB3aWR0aD1cIjhcIlxuICAgICAgICAgICAgICBoZWlnaHQ9XCIxMlwiXG4gICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgOCAxMlwiXG4gICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMSAxMUw2IDZMMSAxXCIgc3Ryb2tlPVwiIzc1NzU3NVwiIHN0cm9rZS13aWR0aD1cIjJcIiAvPlxuICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7LyogLnJpZ2h0ICovfVxuICAgICAgPC9kaXY+XG4gICAgICB7LyogLmJsb2cgKi99XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGJsb2dcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZWZ0IGNvbC0zXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXRlXCI+RmVicnVhcnkgMTJ0aCAyMDIwPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7LyogLmxlZnQgKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWlkZGxlIGNvbC0xMiBjb2wtbWQtNyBjbG91ZFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvci1pbWFnZS1nYXBcIj5cbiAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGg0PkNsb3VkPC9oND5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPlxuICAgICAgICAgICAgICAgIDxoMz5cbiAgICAgICAgICAgICAgICAgIE1lbiZhbXA7TWljZSBTdWl0ZSA5LjMgZmVhdHVyZSBoaWdobGlnaHQ6IEFrYW1haSBGYXN0IEROU1xuICAgICAgICAgICAgICAgICAgaW50ZWdyYXRpb25cbiAgICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ3aXRoLXVuZGVybGluZVwiPlxuICAgICAgICAgICAgICAgICAgTWVuJmFtcDtNaWNlIFN1aXRlIDkuMyBmZWF0dXJlIGhpZ2hsaWdodDogQWthbWFpIEZhc3QgRE5TXG4gICAgICAgICAgICAgICAgICBpbnRlZ3JhdGlvblxuICAgICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGltZyBzcmM9XCJpbWcvQ2xvdWQtQmxvZy1JY29uLnN2Z1wiIGFsdD1cIlwiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7LyogLm1pZGRsZSAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyaWdodCBjb2wtMlwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVhZC1saW5rXCI+XG4gICAgICAgICAgICBSZWFke1wiIFwifVxuICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtbC0yXCJcbiAgICAgICAgICAgICAgd2lkdGg9XCI4XCJcbiAgICAgICAgICAgICAgaGVpZ2h0PVwiMTJcIlxuICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDggMTJcIlxuICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8cGF0aCBkPVwiTTEgMTFMNiA2TDEgMVwiIHN0cm9rZT1cIiM3NTc1NzVcIiBzdHJva2Utd2lkdGg9XCIyXCIgLz5cbiAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgey8qIC5yaWdodCAqL31cbiAgICAgIDwvZGl2PlxuICAgICAgey8qIC5ibG9nICovfVxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBibG9nXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGVmdCBjb2wtM1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGF0ZVwiPkZlYnJ1YXJ5IDJuZCAyMDIwPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7LyogLmxlZnQgKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWlkZGxlIGNvbC0xMiBjb2wtbWQtNyBtZW4tYW5kLW1pY2VcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3ItaW1hZ2UtZ2FwXCI+XG4gICAgICAgICAgICAgIDxkaXY+PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxoND5NZW4mYW1wO01pY2U8L2g0PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+XG4gICAgICAgICAgICAgICAgPGgzPkNoYW5nZSBpcyBvdXIgY29uc3RhbnQ7IGlubm92YXRpb24gaXMgb3VyIHRyYWRpdGlvbjwvaDM+XG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIndpdGgtdW5kZXJsaW5lXCI+XG4gICAgICAgICAgICAgICAgICBDaGFuZ2UgaXMgb3VyIGNvbnN0YW50OyBpbm5vdmF0aW9uIGlzIG91ciB0cmFkaXRpb25cbiAgICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxpbWcgc3JjPVwiaW1nL21lbi1hbmQtbWljZS5wbmdcIiBjbGFzc05hbWU9XCJwaG90b1wiIGFsdD1cIlwiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7LyogLm1pZGRsZSAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyaWdodCBjb2wtMlwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVhZC1saW5rXCI+XG4gICAgICAgICAgICBSZWFke1wiIFwifVxuICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtbC0yXCJcbiAgICAgICAgICAgICAgd2lkdGg9XCI4XCJcbiAgICAgICAgICAgICAgaGVpZ2h0PVwiMTJcIlxuICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDggMTJcIlxuICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8cGF0aCBkPVwiTTEgMTFMNiA2TDEgMVwiIHN0cm9rZT1cIiM3NTc1NzVcIiBzdHJva2Utd2lkdGg9XCIyXCIgLz5cbiAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgey8qIC5yaWdodCAqL31cbiAgICAgIDwvZGl2PlxuICAgICAgey8qIC5ibG9nICovfVxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBibG9nXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGVmdCBjb2wtM1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGF0ZVwiPkZlYnJ1YXJ5IDEydGggMjAyMDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgey8qIC5sZWZ0ICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pZGRsZSBjb2wtMTIgY29sLW1kLTcgYXBpLWF1dG8tcmVzdFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvci1pbWFnZS1nYXBcIj5cbiAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGg0PlxuICAgICAgICAgICAgICAgIEFQSTxzcGFuPjwvc3Bhbj5BdXRvbWF0aW9uPHNwYW4+PC9zcGFuPlJFU1RcbiAgICAgICAgICAgICAgPC9oND5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPlxuICAgICAgICAgICAgICAgIDxoMz5cbiAgICAgICAgICAgICAgICAgIElQIGluZnJhc3RydWN0dXJlIGF1dG9tYXRpb24gaW4gYWN0aW9uOiB0aGUgUkVTVChmdWwpIEFQSVxuICAgICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIndpdGgtdW5kZXJsaW5lXCI+XG4gICAgICAgICAgICAgICAgICBJUCBpbmZyYXN0cnVjdHVyZSBhdXRvbWF0aW9uIGluIGFjdGlvbjogdGhlIFJFU1QoZnVsKSBBUElcbiAgICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxpbWcgc3JjPVwiaW1nL1NlcnZlci1CbG9nLUljb24uc3ZnXCIgYWx0PVwiXCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHsvKiAubWlkZGxlICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJpZ2h0IGNvbC0yXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWFkLWxpbmtcIj5cbiAgICAgICAgICAgIFJlYWR7XCIgXCJ9XG4gICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1sLTJcIlxuICAgICAgICAgICAgICB3aWR0aD1cIjhcIlxuICAgICAgICAgICAgICBoZWlnaHQ9XCIxMlwiXG4gICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgOCAxMlwiXG4gICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMSAxMUw2IDZMMSAxXCIgc3Ryb2tlPVwiIzc1NzU3NVwiIHN0cm9rZS13aWR0aD1cIjJcIiAvPlxuICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7LyogLnJpZ2h0ICovfVxuICAgICAgPC9kaXY+XG4gICAgICB7LyogLmJsb2cgKi99XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmJvZHkge1xuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAzNXB4O1xuICAgICAgICAgIC50b3Age1xuICAgICAgICAgICAgLmxlZnQsXG4gICAgICAgICAgICAubWlkZGxlLFxuICAgICAgICAgICAgLnJpZ2h0IHtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxMDdweDtcbiAgICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzRlNGM0ZDtcbiAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDM2cHg7XG4gICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA5OTFweCkge1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDE1cHggMDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgICAgICAgICAgICAgICBib3JkZXItcmlnaHQ6IG5vbmU7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmxlZnQge1xuICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDE1cHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLnNlYXJjaCB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjYmRiY2JjO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybCgvaW1nL3NlYXJjaC5zdmcpIG5vLXJlcGVhdCB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDQzcHg7XG4gICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDlweDtcbiAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgJjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gICAgICAgICAgICAgICAgICAvKiBFZGdlICovXG4gICAgICAgICAgICAgICAgICBjb2xvcjogI2JkYmNiYztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAmOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4gICAgICAgICAgICAgICAgICAvKiBJbnRlcm5ldCBFeHBsb3JlciAxMC0xMSAqL1xuICAgICAgICAgICAgICAgICAgY29sb3I6ICNiZGJjYmM7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgJjo6cGxhY2Vob2xkZXIge1xuICAgICAgICAgICAgICAgICAgY29sb3I6ICNiZGJjYmM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubWlkZGxlIHtcbiAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMTVweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuYm9keS1uYXYtd3JhcHBlciB7XG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgICAgICAuYm9keS1uYXYge1xuICAgICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDVweDtcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xuICAgICAgICAgICAgICAgICAgb3ZlcmZsb3cteTogaGlkZGVuO1xuICAgICAgICAgICAgICAgICAgb3ZlcmZsb3cteDogYXV0bztcbiAgICAgICAgICAgICAgICAgIC5ib2R5LW5hdi1pdGVtIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgMjBweDtcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNXM7XG4gICAgICAgICAgICAgICAgICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNXM7XG4gICAgICAgICAgICAgICAgICAgIC1tcy10cmFuc2l0aW9uOiBhbGwgMC41cztcbiAgICAgICAgICAgICAgICAgICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNXM7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjVzO1xuICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgJi5hY3RpdmUge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICY6Zmlyc3Qtb2YtdHlwZSB7XG4gICAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLmJvZHktbmF2LWl0ZW06YWZ0ZXIge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICAgICAgdG9wOiAzMHB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMnB4O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNXM7XG4gICAgICAgICAgICAgICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC41cztcbiAgICAgICAgICAgICAgICAtbXMtdHJhbnNpdGlvbjogYWxsIDAuNXM7XG4gICAgICAgICAgICAgICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNXM7XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLmJvZHktbmF2LWl0ZW0uYWN0aXZlOmFmdGVyLFxuICAgICAgICAgICAgICAuYm9keS1uYXYtaXRlbTpob3ZlcjphZnRlciB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZGIwMDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnJpZ2h0IHtcbiAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICAgIC5zb3J0IHtcbiAgICAgICAgICAgICAgICBjb2xvcjogI2JkYmNiYztcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgIC5zb3J0LWJ1dHRvbiB7XG4gICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgICAgICAgcGFkZGluZzogMDtcblxuICAgICAgICAgICAgICAgICAgLnNvcnRieSB7XG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMDtcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzIyMWYyMDtcbiAgICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiAxODBweDtcbiAgICAgICAgICAgICAgICAgICAgei1pbmRleDogNDAwO1xuICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzO1xuICAgICAgICAgICAgICAgICAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzO1xuICAgICAgICAgICAgICAgICAgICAtbXMtdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gICAgICAgICAgICAgICAgICAgIC1vLXRyYW5zaXRpb246IGFsbCAwLjNzO1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgICAuc29ydGJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMnB4IDA7XG4gICAgICAgICAgICAgICAgICAgICAgLnNvcnQtaXRlbSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICAgICAgICAgICAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZDFkMWQxO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIEJPVFRPTSBQQVJUIFNUQVJUUyBIRVJFXG4gICAgICAgICAgLmJsb2cge1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgKiB7XG4gICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gICAgICAgICAgICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gICAgICAgICAgICAgIC1tcy10cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgICAgICAgICAgICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgIC5sZWZ0IHtcbiAgICAgICAgICAgICAgICAuZGF0ZSB7XG4gICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLm1pZGRsZSB7XG4gICAgICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC50aXRsZSBoMy53aXRoLXVuZGVybGluZSB7XG4gICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmxlZnQsXG4gICAgICAgICAgICAubWlkZGxlLFxuICAgICAgICAgICAgLnJpZ2h0IHtcbiAgICAgICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICM0ZTRjNGQ7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICBtaW4taGVpZ2h0OiAzOTRweDtcbiAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gICAgICAgICAgICAgICAgbWluLWhlaWdodDogMjc4cHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5sZWZ0IHtcbiAgICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAubGFiZWwge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDEzcHggN3B4IDEycHg7XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmRiMDA7XG4gICAgICAgICAgICAgICAgY29sb3I6ICMyMjFmMjA7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE4cHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLmRhdGUge1xuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkNhcGl0b2xpdW0gUmVndWxhclwiO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjYjdiNmI2O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAubGVmdCxcbiAgICAgICAgICAgIC5taWRkbGUge1xuICAgICAgICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjNGU0YzRkO1xuICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgICAgICAgICAgICAgICBib3JkZXItcmlnaHQ6IG5vbmU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5taWRkbGUge1xuICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiA4MHB4O1xuICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuZm9yLWltYWdlLWdhcCBkaXYge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAyNTBweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwcHg7XG4gICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gICAgICAgICAgICAgICAgICB3aWR0aDogMTQwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuNDtcbiAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMzBweDtcbiAgICAgICAgICAgICAgICAgIGxlZnQ6IC0zOHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAmLnBob3RvIHtcbiAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICAgICAgICB3aWR0aDogMjEwcHg7XG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA5OTFweCkge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogOThweDtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaDQge1xuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkFwZXJjdSBSZWd1bGFyXCI7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZkYjAwO1xuICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTJweDtcbiAgICAgICAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAudGl0bGUge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICBoMyB7XG4gICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogXCJBcGVyY3UgQm9sZFwiO1xuICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAzNnB4O1xuICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAmLndpdGgtdW5kZXJsaW5lIHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb24tY29sb3I6ICNmZmRiMDA7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucmlnaHQge1xuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAucmVhZC1saW5rIHtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogXCJDYXBpdG9saXVtIEJvbGRcIjtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNiN2I2YjY7XG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHN2ZyB7XG4gICAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjVzO1xuICAgICAgICAgICAgICAgICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC41cztcbiAgICAgICAgICAgICAgICAgIC1tcy10cmFuc2l0aW9uOiBhbGwgMC41cztcbiAgICAgICAgICAgICAgICAgIC1vLXRyYW5zaXRpb246IGFsbCAwLjVzO1xuICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XG4gICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAtNHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAmOmhvdmVyIHN2ZyB7XG4gICAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMHB4KTtcbiAgICAgICAgICAgICAgICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwcHgpO1xuICAgICAgICAgICAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMHB4KTtcbiAgICAgICAgICAgICAgICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMHB4KTtcbiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMHB4KTtcbiAgICAgICAgICAgICAgICAgIHBhdGgge1xuICAgICAgICAgICAgICAgICAgICBzdHJva2U6ICNmZmRiMDA7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9zZWN0aW9uPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQm9keTtcbiJdfQ== */\n/*@ sourceURL=/Users/baijutoms/Documents/Works/Web/next/viska/m-and-m/components/home/body.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Body);

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
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_Home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Home */ "./components/Home.js");
var _jsxFileName = "/Users/baijutoms/Documents/Works/Web/next/viska/m-and-m/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function Index() {
  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, __jsx(_components_Home__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  }));
}

/***/ }),

/***/ "./public/css/global.css":
/*!*******************************!*\
  !*** ./public/css/global.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 4:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/baijutoms/Documents/Works/Web/next/viska/m-and-m/pages/index.js */"./pages/index.js");


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
//# sourceMappingURL=index.js.map