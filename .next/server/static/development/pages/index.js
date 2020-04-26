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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/baijutoms/Documents/Works/Web/next/viska/m-and-m/components/Footer.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Footer = () => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  return __jsx("div", {
    className: "footer",
    style: {
      display: router.pathname === "/" ? "none" : ""
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, __jsx("h1", {
    className: "bg-light",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }, "Footer"));
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
    className: "jsx-1582410997" + " " + "home",
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
    className: "jsx-1582410997",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, "M&M")), __jsx("div", {
    className: "jsx-1582410997" + " " + "heading-wrapper",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }, __jsx("h1", {
    className: "jsx-1582410997",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, "Your weekly ", __jsx("span", {
    className: "jsx-1582410997",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 23
    }
  }, "Tech News")), __jsx("h2", {
    className: "jsx-1582410997",
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
    id: "1582410997",
    __self: undefined
  }, ".heading-wrapper.jsx-1582410997{padding:120px 0;}h1.jsx-1582410997{font-family:\"Apercu Regular\";font-size:48px;color:#bdbcbc;}h1.jsx-1582410997 span.jsx-1582410997{font-family:\"Apercu Medium\";color:#ffffff;}h2.jsx-1582410997{font-family:\"Apercu Bold\";font-size:48px;color:#ffdb00;}@media (max-width:992px){.heading-wrapper.jsx-1582410997{padding:100px 0;}h1.jsx-1582410997,h2.jsx-1582410997{font-size:40px;}}@media (max-width:992px){.heading-wrapper.jsx-1582410997{padding:30px 0;}h1.jsx-1582410997{font-size:24px;}h2.jsx-1582410997{font-size:36px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9iYWlqdXRvbXMvRG9jdW1lbnRzL1dvcmtzL1dlYi9uZXh0L3Zpc2thL20tYW5kLW0vY29tcG9uZW50cy9Ib21lLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtCa0IsQUFFbUIsQUFHYSxBQUtELEFBSUYsQUFNUixBQUdELEFBSUEsQUFFQSxBQUVBLGVBUkMsQUFJQSxBQUVBLEFBRUEsQ0E3QkQsQUFrQkUsVUFMSixFQUpELENBTEMsWUFVRCxDQUxDLEVBSkQsV0FTQyxHQVRBIiwiZmlsZSI6Ii9Vc2Vycy9iYWlqdXRvbXMvRG9jdW1lbnRzL1dvcmtzL1dlYi9uZXh0L3Zpc2thL20tYW5kLW0vY29tcG9uZW50cy9Ib21lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IEJvZHkgZnJvbSBcIi4vaG9tZS9ib2R5XCI7XG5cbmNvbnN0IEhvbWUgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJob21lXCI+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPk0mTTwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRpbmctd3JhcHBlclwiPlxuICAgICAgICA8aDE+XG4gICAgICAgICAgWW91ciB3ZWVrbHkgPHNwYW4+VGVjaCBOZXdzPC9zcGFuPlxuICAgICAgICA8L2gxPlxuICAgICAgICA8aDI+VGhlIE1vdXNlcGFkPC9oMj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8Qm9keSAvPlxuXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5oZWFkaW5nLXdyYXBwZXIge1xuICAgICAgICAgIHBhZGRpbmc6IDEyMHB4IDA7XG4gICAgICAgIH1cbiAgICAgICAgaDEge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkFwZXJjdSBSZWd1bGFyXCI7XG4gICAgICAgICAgZm9udC1zaXplOiA0OHB4O1xuICAgICAgICAgIGNvbG9yOiAjYmRiY2JjO1xuICAgICAgICB9XG4gICAgICAgIGgxIHNwYW4ge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkFwZXJjdSBNZWRpdW1cIjtcbiAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgfVxuICAgICAgICBoMiB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IFwiQXBlcmN1IEJvbGRcIjtcbiAgICAgICAgICBmb250LXNpemU6IDQ4cHg7XG4gICAgICAgICAgY29sb3I6ICNmZmRiMDA7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gICAgICAgICAgLmhlYWRpbmctd3JhcHBlciB7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMDBweCAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICBoMSxcbiAgICAgICAgICBoMiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDQwcHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA5OTJweCkge1xuICAgICAgICAgIC5oZWFkaW5nLXdyYXBwZXIge1xuICAgICAgICAgICAgcGFkZGluZzogMzBweCAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICBoMSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIGgyIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzZweDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iXX0= */\n/*@ sourceURL=/Users/baijutoms/Documents/Works/Web/next/viska/m-and-m/components/Home.js */"));
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
var _jsxFileName = "/Users/baijutoms/Documents/Works/Web/next/viska/m-and-m/components/Layout.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Layout = props => {
  return __jsx("div", {
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
/* harmony import */ var _public_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../public/css/bootstrap.css */ "./public/css/bootstrap.css");
/* harmony import */ var _public_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_public_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/baijutoms/Documents/Works/Web/next/viska/m-and-m/components/home/body.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
 // import "../../scss/home/body.scss";

const Body = () => {
  return __jsx("section", {
    className: "jsx-496486644" + " " + "body",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "jsx-496486644" + " " + "row top",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "jsx-496486644" + " " + "left col-12 col-md-3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, __jsx("input", {
    type: "text",
    placeholder: "Search for an article",
    className: "jsx-496486644" + " " + "search form-control f-cap-r",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 11
    }
  })), __jsx("div", {
    className: "jsx-496486644" + " " + "middle col-12 col-md-7 d-flex",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-496486644" + " " + "body-nav-wrapper d-flex",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 11
    }
  }, __jsx("ul", {
    className: "jsx-496486644" + " " + "body-nav list-unstyled f-ap-r d-flex",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }
  }, __jsx("li", {
    className: "jsx-496486644" + " " + "body-nav-item active",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 15
    }
  }, "All"), __jsx("li", {
    className: "jsx-496486644" + " " + "body-nav-item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 15
    }
  }, "Networking"), __jsx("li", {
    className: "jsx-496486644" + " " + "body-nav-item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 15
    }
  }, "Business"), __jsx("li", {
    className: "jsx-496486644" + " " + "body-nav-item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 15
    }
  }, "Men&Mice"), __jsx("li", {
    className: "jsx-496486644" + " " + "body-nav-item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 15
    }
  }, "Events"), __jsx("li", {
    className: "jsx-496486644" + " " + "body-nav-item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 15
    }
  }, "Courses")))), __jsx("div", {
    className: "jsx-496486644" + " " + "right col-2 d-none d-md-block",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-496486644" + " " + "sort",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 11
    }
  }, __jsx("span", {
    className: "jsx-496486644" + " " + "f-cap-r d-none d-lg-inline-block mr-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }
  }, "Sort by:", " "), __jsx("button", {
    type: "button",
    id: "dropdownMenuButton",
    "data-toggle": "dropdown",
    "aria-haspopup": "true",
    "aria-expanded": "false",
    className: "jsx-496486644" + " " + "btn sort-button f-cap-b",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }
  }, "Newest ", __jsx("img", {
    src: "/img/caret-down-grey.svg",
    className: "jsx-496486644" + " " + "ml-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 22
    }
  })), __jsx("div", {
    "aria-labelledby": "dropdownMenuButton",
    className: "jsx-496486644" + " " + "dropdown-menu",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: "#",
    className: "jsx-496486644" + " " + "dropdown-item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 15
    }
  }, "Action"), __jsx("a", {
    href: "#",
    className: "jsx-496486644" + " " + "dropdown-item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 15
    }
  }, "Another action"), __jsx("a", {
    href: "#",
    className: "jsx-496486644" + " " + "dropdown-item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 15
    }
  }, "Something else here"))))), __jsx("div", {
    className: "jsx-496486644" + " " + "row bottom",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "jsx-496486644" + " " + "left col-3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-496486644",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 11
    }
  }, __jsx("button", {
    className: "jsx-496486644" + " " + "this-weeks-post mb-2 f-ap-m",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 13
    }
  }, "THIS WEEKS POST"), __jsx("div", {
    className: "jsx-496486644" + " " + "date",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 13
    }
  }, "February 24th 2020"))), __jsx("div", {
    className: "jsx-496486644" + " " + "middle col-12 col-md-7 network-security",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-496486644" + " " + "d-flex",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "jsx-496486644" + " " + "for-image-gap",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "jsx-496486644",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 15
    }
  })), __jsx("div", {
    className: "jsx-496486644",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 13
    }
  }, __jsx("h4", {
    className: "jsx-496486644",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 15
    }
  }, "Network Security"), __jsx("h3", {
    className: "jsx-496486644",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 15
    }
  }, "Working from 127.0.0.1"))), __jsx("img", {
    src: "img/network-security.svg",
    alt: "",
    style: {
      opacity: 0.4
    },
    className: "jsx-496486644",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 11
    }
  })), __jsx("div", {
    className: "jsx-496486644" + " " + "right col-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-496486644" + " " + "read-link",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 11
    }
  }, "Read ", __jsx("img", {
    src: "/img/caret-right-grey.svg",
    className: "jsx-496486644" + " " + "ml-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 18
    }
  }))), __jsx("div", {
    className: "jsx-496486644" + " " + "left col-3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-496486644" + " " + "date",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 11
    }
  }, "February 12th 2020")), __jsx("div", {
    className: "jsx-496486644" + " " + "middle col-12 col-md-7 cloud",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-496486644" + " " + "d-flex",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "jsx-496486644" + " " + "for-image-gap",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "jsx-496486644",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 15
    }
  })), __jsx("div", {
    className: "jsx-496486644",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 13
    }
  }, __jsx("h4", {
    className: "jsx-496486644",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 15
    }
  }, "Cloud"), __jsx("h3", {
    className: "jsx-496486644",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 15
    }
  }, "Men&Mice Suite 9.3 feature highlight: Akamai Fast DNS integration"))), __jsx("img", {
    src: "img/cloud.svg",
    alt: "",
    style: {
      opacity: 0.4
    },
    className: "jsx-496486644",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 11
    }
  })), __jsx("div", {
    className: "jsx-496486644" + " " + "right col-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-496486644" + " " + "read-link",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 11
    }
  }, "Read ", __jsx("img", {
    src: "/img/caret-right-grey.svg",
    className: "jsx-496486644" + " " + "ml-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 18
    }
  }))), __jsx("div", {
    className: "jsx-496486644" + " " + "left col-3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-496486644" + " " + "date",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 11
    }
  }, "February 2nd 2020")), __jsx("div", {
    className: "jsx-496486644" + " " + "middle col-12 col-md-7 men-and-mice",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-496486644" + " " + "d-flex",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "jsx-496486644" + " " + "for-image-gap",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "jsx-496486644",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 15
    }
  })), __jsx("div", {
    className: "jsx-496486644",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 13
    }
  }, __jsx("h4", {
    className: "jsx-496486644",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 15
    }
  }, "Men&Mice"), __jsx("h3", {
    className: "jsx-496486644",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 15
    }
  }, "Change is our constant; innovation is our tradition"))), __jsx("img", {
    src: "img/men-and-mice.png",
    alt: "",
    className: "jsx-496486644" + " " + "png",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 11
    }
  })), __jsx("div", {
    className: "jsx-496486644" + " " + "right col-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-496486644" + " " + "read-link",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 11
    }
  }, "Read ", __jsx("img", {
    src: "/img/caret-right-grey.svg",
    className: "jsx-496486644" + " " + "ml-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 18
    }
  }))), __jsx("div", {
    className: "jsx-496486644" + " " + "left col-3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-496486644" + " " + "date",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 11
    }
  }, "February 12th 2020")), __jsx("div", {
    className: "jsx-496486644" + " " + "middle col-12 col-md-7 api-auto-rest",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-496486644" + " " + "d-flex",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "jsx-496486644" + " " + "for-image-gap",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "jsx-496486644",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 15
    }
  })), __jsx("div", {
    className: "jsx-496486644",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 13
    }
  }, __jsx("h4", {
    className: "jsx-496486644",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 15
    }
  }, "API", __jsx("span", {
    className: "jsx-496486644",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 20
    }
  }), "Automation", __jsx("span", {
    className: "jsx-496486644",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 43
    }
  }), "REST"), __jsx("h3", {
    className: "jsx-496486644",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 15
    }
  }, "IP infrastructure automation in action: the REST(ful) API"))), __jsx("img", {
    src: "img/api-automation-rest.svg",
    alt: "",
    className: "jsx-496486644",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 11
    }
  })), __jsx("div", {
    className: "jsx-496486644" + " " + "right col-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-496486644" + " " + "read-link",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 11
    }
  }, "Read ", __jsx("img", {
    src: "/img/caret-right-grey.svg",
    className: "jsx-496486644" + " " + "ml-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 18
    }
  })))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "496486644",
    __self: undefined
  }, ".body.jsx-496486644{padding-bottom:35px;}.body.jsx-496486644 .top.jsx-496486644 .left.jsx-496486644,.body.jsx-496486644 .top.jsx-496486644 .middle.jsx-496486644,.body.jsx-496486644 .top.jsx-496486644 .right.jsx-496486644{padding:46px 0;border-right:1px solid #4e4c4d;}@media (max-width:991px){.body.jsx-496486644 .top.jsx-496486644 .left.jsx-496486644,.body.jsx-496486644 .top.jsx-496486644 .middle.jsx-496486644,.body.jsx-496486644 .top.jsx-496486644 .right.jsx-496486644{padding:15px 0;}}@media (max-width:767px){.body.jsx-496486644 .top.jsx-496486644 .left.jsx-496486644,.body.jsx-496486644 .top.jsx-496486644 .middle.jsx-496486644,.body.jsx-496486644 .top.jsx-496486644 .right.jsx-496486644{border-right:none;padding:0;}}.body.jsx-496486644 .top.jsx-496486644 .left.jsx-496486644 .search.jsx-496486644{font-size:18px;color:#bdbcbc;background:url(/img/search.svg) no-repeat transparent;background-position:left center;border:none;outline:none;padding-left:35px;}@media (max-width:767px){.body.jsx-496486644 .top.jsx-496486644 .left.jsx-496486644 .search.jsx-496486644{font-size:14px;}}.body.jsx-496486644 .top.jsx-496486644 .middle.jsx-496486644{padding-left:20px;padding-right:20px;}@media (max-width:767px){.body.jsx-496486644 .top.jsx-496486644 .middle.jsx-496486644{padding-left:0;padding-right:0;}}.body.jsx-496486644 .top.jsx-496486644 .middle.jsx-496486644 .body-nav-wrapper.jsx-496486644{overflow:hidden;}.body.jsx-496486644 .top.jsx-496486644 .middle.jsx-496486644 .body-nav-wrapper.jsx-496486644 .body-nav.jsx-496486644{padding-top:5px;padding-bottom:15px;overflow-y:hidden;overflow-x:auto;}.body.jsx-496486644 .top.jsx-496486644 .middle.jsx-496486644 .body-nav-wrapper.jsx-496486644 .body-nav.jsx-496486644 .body-nav-item.jsx-496486644{color:rgba(255,255,255,0.6);font-size:18px;margin:0 20px;cursor:pointer;position:relative;}@media (max-width:767px){.body.jsx-496486644 .top.jsx-496486644 .middle.jsx-496486644 .body-nav-wrapper.jsx-496486644 .body-nav.jsx-496486644 .body-nav-item.jsx-496486644{font-size:14px;}}.body.jsx-496486644 .top.jsx-496486644 .middle.jsx-496486644 .body-nav-wrapper.jsx-496486644 .body-nav.jsx-496486644 .body-nav-item.active.jsx-496486644{color:#ffffff;}@media (max-width:767px){.body.jsx-496486644 .top.jsx-496486644 .middle.jsx-496486644 .body-nav-wrapper.jsx-496486644 .body-nav.jsx-496486644 .body-nav-item.jsx-496486644:first-of-type{margin-left:0;}}.body.jsx-496486644 .top.jsx-496486644 .middle.jsx-496486644 .body-nav-item.jsx-496486644:after{content:\"\";position:absolute;left:0;top:30px;width:100%;height:2px;background:transparent;-webkit-transition:all 0.5s;-moz-transition:all 0.5s;-ms-transition:all 0.5s;-o-transition:all 0.5s;-webkit-transition:all 0.5s;transition:all 0.5s;}.body.jsx-496486644 .top.jsx-496486644 .middle.jsx-496486644 .body-nav-item.active.jsx-496486644:after,.body.jsx-496486644 .top.jsx-496486644 .middle.jsx-496486644 .body-nav-item.jsx-496486644:hover.jsx-496486644:after{background:#ffdb00;}.body.jsx-496486644 .top.jsx-496486644 .right.jsx-496486644{padding-left:25px;border:none;}.body.jsx-496486644 .top.jsx-496486644 .right.jsx-496486644 .sort.jsx-496486644{color:#bdbcbc;font-size:18px;}.body.jsx-496486644 .top.jsx-496486644 .right.jsx-496486644 .sort.jsx-496486644 .sort-button.jsx-496486644{color:#ffffff;font-size:18px;border:none;background:transparent;padding:0;}.body.jsx-496486644 .bottom.jsx-496486644 .left.jsx-496486644,.body.jsx-496486644 .bottom.jsx-496486644 .middle.jsx-496486644,.body.jsx-496486644 .bottom.jsx-496486644 .right.jsx-496486644{border-top:1px solid #4e4c4d;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;min-height:358px;}@media (max-width:767px){.body.jsx-496486644 .bottom.jsx-496486644 .left.jsx-496486644,.body.jsx-496486644 .bottom.jsx-496486644 .middle.jsx-496486644,.body.jsx-496486644 .bottom.jsx-496486644 .right.jsx-496486644{min-height:278px;}}.body.jsx-496486644 .bottom.jsx-496486644 .left.jsx-496486644{padding:0;}@media (max-width:767px){.body.jsx-496486644 .bottom.jsx-496486644 .left.jsx-496486644{display:none;}}.body.jsx-496486644 .bottom.jsx-496486644 .left.jsx-496486644 button.this-weeks-post.jsx-496486644{border:none;height:29px;background-color:#ffdb00;color:#221f20;font-size:12px;}.body.jsx-496486644 .bottom.jsx-496486644 .left.jsx-496486644 .date.jsx-496486644{font-family:\"Capitolium Regular\";color:#b7b6b6;font-size:20px;}.body.jsx-496486644 .bottom.jsx-496486644 .right.jsx-496486644{text-align:center;}@media (max-width:767px){.body.jsx-496486644 .bottom.jsx-496486644 .right.jsx-496486644{display:none;}}.body.jsx-496486644 .bottom.jsx-496486644 .left.jsx-496486644,.body.jsx-496486644 .bottom.jsx-496486644 .middle.jsx-496486644{border-right:1px solid #4e4c4d;}@media (max-width:767px){.body.jsx-496486644 .bottom.jsx-496486644 .left.jsx-496486644,.body.jsx-496486644 .bottom.jsx-496486644 .middle.jsx-496486644{border-right:none;}}.body.jsx-496486644 .bottom.jsx-496486644 .middle.jsx-496486644{padding-right:80px;overflow:hidden;padding-left:0;position:relative;}@media (max-width:991px){.body.jsx-496486644 .bottom.jsx-496486644 .middle.jsx-496486644{padding-right:20px;}}.body.jsx-496486644 .bottom.jsx-496486644 .middle.jsx-496486644 .for-image-gap.jsx-496486644 div.jsx-496486644{width:250px;height:100%;}@media (max-width:991px){.body.jsx-496486644 .bottom.jsx-496486644 .middle.jsx-496486644 .for-image-gap.jsx-496486644 div.jsx-496486644{width:140px;}}.body.jsx-496486644 .bottom.jsx-496486644 .middle.jsx-496486644 img.jsx-496486644{position:absolute;left:-58px;}@media (max-width:991px){.body.jsx-496486644 .bottom.jsx-496486644 .middle.jsx-496486644 img.jsx-496486644{width:130px;left:-38px;}}.body.jsx-496486644 .bottom.jsx-496486644 .middle.jsx-496486644 img.png.jsx-496486644{left:0;width:180px;height:100%;object-fit:cover;}@media (max-width:991px){.body.jsx-496486644 .bottom.jsx-496486644 .middle.jsx-496486644 img.png.jsx-496486644{width:98px;}}.body.jsx-496486644 .bottom.jsx-496486644 .middle.jsx-496486644 h4.jsx-496486644{font-family:\"Apercu Regular\";font-size:12px;color:#ffdb00;text-transform:uppercase;}.body.jsx-496486644 .bottom.jsx-496486644 .middle.jsx-496486644 h4.jsx-496486644 span.jsx-496486644{display:inline-block;width:20px;}.body.jsx-496486644 .bottom.jsx-496486644 .middle.jsx-496486644 h3.jsx-496486644{font-family:\"Apercu Bold\";font-size:36px;color:#ffffff;}@media (max-width:991px){.body.jsx-496486644 .bottom.jsx-496486644 .middle.jsx-496486644 h3.jsx-496486644{font-size:28px;}}@media (max-width:767px){.body.jsx-496486644 .bottom.jsx-496486644 .middle.jsx-496486644 h3.jsx-496486644{font-size:20px;}}.body.jsx-496486644 .bottom.jsx-496486644 .right.jsx-496486644 .read-link.jsx-496486644{font-family:\"Capitolium Bold\";font-size:20px;color:#b7b6b6;cursor:pointer;}.body.jsx-496486644 .bottom.jsx-496486644 .right.jsx-496486644 .read-link.jsx-496486644 img.jsx-496486644{-webkit-transition:all 0.5s;-moz-transition:all 0.5s;-ms-transition:all 0.5s;-o-transition:all 0.5s;-webkit-transition:all 0.5s;transition:all 0.5s;}.body.jsx-496486644 .bottom.jsx-496486644 .right.jsx-496486644 .read-link.jsx-496486644:hover img.jsx-496486644{-webkit-transform:translateX(20px);-moz-transform:translateX(20px);-ms-transform:translateX(20px);-o-transform:translateX(20px);-webkit-transform:translateX(20px);-ms-transform:translateX(20px);transform:translateX(20px);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9iYWlqdXRvbXMvRG9jdW1lbnRzL1dvcmtzL1dlYi9uZXh0L3Zpc2thL20tYW5kLW0vY29tcG9uZW50cy9ob21lL2JvZHkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMEtrQixBQUV1QixBQUlILEFBTUksQUFLRyxBQUdQLEFBU0ksQUFFRCxBQUlDLEFBR0QsQUFFRSxBQUtpQixBQU9aLEFBRUgsQUFHRSxBQUVYLEFBY1EsQUFFSCxBQUdGLEFBR0UsQUFRVyxBQVNSLEFBRVgsQUFHTyxBQUVILEFBTXFCLEFBSWpCLEFBR0QsQUFHYyxBQUlULEFBRUgsQUFNSSxBQUVULEFBSUksQUFFRSxBQUlGLEFBR1AsQUFNUSxBQUVZLEFBS04sQUFHRyxBQUtQLEFBR0EsQUFFUyxBQUtBLEFBTU8sT0FwQ3JCLEdBakRMLENBeENTLEFBOEZBLENBaEROLEFBOEJBLEFBR0ssQUFPRixDQTNDQyxBQWVBLENBaEVLLEFBR0UsQUFzQlIsQUFHRSxDQTNFWSxBQUtYLEFBU04sQUFRTSxBQU9BLEFBZ0JNLEFBcUhKLEFBR0EsQ0F0SUgsQUFHSyxDQXlERixDQWhGUixBQWNLLEFBNENQLEFBdUNPLEFBVUksQUFpQlYsQ0FyRVMsQUF1RE4sQUFLUSxBQWlCUixDQXBKRyxDQWdLSixFQWhCRyxDQXZDUyxBQTZCWixFQTZCRSxFQW5KRixBQTRCTSxBQXNJTSxDQTlKMkIsQUF1QzdDLEFBa0JTLEFBSUYsQUFPSCxBQW9EQyxBQWVHLENBakZKLEFBbUdFLENBM0lNLEFBcUZXLEFBOEJYLENBV0wsQ0FsREEsRUFpQkQsQUF5RG1CLENBaEpaLEFBb0JYLENBOUJTLElBb0RPLEFBa0ZYLEVBdkhJLENBK0dKLENBL0ZILEFBaUhDLENBektrQixDQTBHZixDQXNDSyxDQTNDTixDQXNCRSxHQW1EUSxDQTFJTixDQTJISCxDQXRHSixDQWhCUSxDQStHTSxDQWtCWixHQWhFRyxDQUpELENBeEJILEdBcEJXLEFBMEhRLENBekRkLEVBdkZFLEVBTUcsRUFvQ1QsQUE0RkMsR0FLUyxDQXpFUCxLQXRGYyxBQXdJSixPQTlHSCxBQWlCSyxRQTBIRSxFQUxWLEdBNUZBLFlBbkVWLEdBMkNlLFNBMUNkLENBb0tnQixZQW5LWCxHQTBDUSxLQW1ISCxVQTdKSixTQTJDTSxjQXVCRixTQXRCRCwrQkF1SFEsaUJBdkhQLDBDQXVCTixpQkFBQyIsImZpbGUiOiIvVXNlcnMvYmFpanV0b21zL0RvY3VtZW50cy9Xb3Jrcy9XZWIvbmV4dC92aXNrYS9tLWFuZC1tL2NvbXBvbmVudHMvaG9tZS9ib2R5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi4vLi4vcHVibGljL2Nzcy9ib290c3RyYXAuY3NzXCI7XG4vLyBpbXBvcnQgXCIuLi8uLi9zY3NzL2hvbWUvYm9keS5zY3NzXCI7XG5cbmNvbnN0IEJvZHkgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiYm9keVwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgdG9wXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGVmdCBjb2wtMTIgY29sLW1kLTNcIj5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInNlYXJjaCBmb3JtLWNvbnRyb2wgZi1jYXAtclwiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaCBmb3IgYW4gYXJ0aWNsZVwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHsvKiAubGVmdCAqL31cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pZGRsZSBjb2wtMTIgY29sLW1kLTcgZC1mbGV4XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib2R5LW5hdi13cmFwcGVyIGQtZmxleFwiPlxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImJvZHktbmF2IGxpc3QtdW5zdHlsZWQgZi1hcC1yIGQtZmxleFwiPlxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiYm9keS1uYXYtaXRlbSBhY3RpdmVcIj5BbGw8L2xpPlxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiYm9keS1uYXYtaXRlbVwiPk5ldHdvcmtpbmc8L2xpPlxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiYm9keS1uYXYtaXRlbVwiPkJ1c2luZXNzPC9saT5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImJvZHktbmF2LWl0ZW1cIj5NZW4mYW1wO01pY2U8L2xpPlxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiYm9keS1uYXYtaXRlbVwiPkV2ZW50czwvbGk+XG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJib2R5LW5hdi1pdGVtXCI+Q291cnNlczwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgey8qIC5taWRkbGUgKi99XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyaWdodCBjb2wtMiBkLW5vbmUgZC1tZC1ibG9ja1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic29ydFwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZi1jYXAtciBkLW5vbmUgZC1sZy1pbmxpbmUtYmxvY2sgbXItMlwiPlxuICAgICAgICAgICAgICBTb3J0IGJ5OntcIiBcIn1cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIHNvcnQtYnV0dG9uIGYtY2FwLWJcIlxuICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgaWQ9XCJkcm9wZG93bk1lbnVCdXR0b25cIlxuICAgICAgICAgICAgICBkYXRhLXRvZ2dsZT1cImRyb3Bkb3duXCJcbiAgICAgICAgICAgICAgYXJpYS1oYXNwb3B1cD1cInRydWVcIlxuICAgICAgICAgICAgICBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBOZXdlc3QgPGltZyBzcmM9XCIvaW1nL2NhcmV0LWRvd24tZ3JleS5zdmdcIiBjbGFzc05hbWU9XCJtbC0yXCIgLz5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93bi1tZW51XCIgYXJpYS1sYWJlbGxlZGJ5PVwiZHJvcGRvd25NZW51QnV0dG9uXCI+XG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImRyb3Bkb3duLWl0ZW1cIiBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgIEFjdGlvblxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImRyb3Bkb3duLWl0ZW1cIiBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgIEFub3RoZXIgYWN0aW9uXG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZHJvcGRvd24taXRlbVwiIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgU29tZXRoaW5nIGVsc2UgaGVyZVxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHsvKiAucmlnaHQgKi99XG4gICAgICA8L2Rpdj5cbiAgICAgIHsvKiAudG9wICovfVxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBib3R0b21cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZWZ0IGNvbC0zXCI+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidGhpcy13ZWVrcy1wb3N0IG1iLTIgZi1hcC1tXCI+XG4gICAgICAgICAgICAgIFRISVMgV0VFS1MgUE9TVFxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRhdGVcIj5GZWJydWFyeSAyNHRoIDIwMjA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHsvKiAubGVmdCAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtaWRkbGUgY29sLTEyIGNvbC1tZC03IG5ldHdvcmstc2VjdXJpdHlcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3ItaW1hZ2UtZ2FwXCI+XG4gICAgICAgICAgICAgIDxkaXY+PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxoND5OZXR3b3JrIFNlY3VyaXR5PC9oND5cbiAgICAgICAgICAgICAgPGgzPldvcmtpbmcgZnJvbSAxMjcuMC4wLjE8L2gzPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGltZyBzcmM9XCJpbWcvbmV0d29yay1zZWN1cml0eS5zdmdcIiBhbHQ9XCJcIiBzdHlsZT17eyBvcGFjaXR5OiAwLjQgfX0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHsvKiAubWlkZGxlICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJpZ2h0IGNvbC0yXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWFkLWxpbmtcIj5cbiAgICAgICAgICAgIFJlYWQgPGltZyBzcmM9XCIvaW1nL2NhcmV0LXJpZ2h0LWdyZXkuc3ZnXCIgY2xhc3NOYW1lPVwibWwtMlwiIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7LyogLnJpZ2h0ICovfVxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGVmdCBjb2wtM1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGF0ZVwiPkZlYnJ1YXJ5IDEydGggMjAyMDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgey8qIC5sZWZ0ICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pZGRsZSBjb2wtMTIgY29sLW1kLTcgY2xvdWRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3ItaW1hZ2UtZ2FwXCI+XG4gICAgICAgICAgICAgIDxkaXY+PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxoND5DbG91ZDwvaDQ+XG4gICAgICAgICAgICAgIDxoMz5cbiAgICAgICAgICAgICAgICBNZW4mYW1wO01pY2UgU3VpdGUgOS4zIGZlYXR1cmUgaGlnaGxpZ2h0OiBBa2FtYWkgRmFzdCBETlNcbiAgICAgICAgICAgICAgICBpbnRlZ3JhdGlvblxuICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGltZyBzcmM9XCJpbWcvY2xvdWQuc3ZnXCIgYWx0PVwiXCIgc3R5bGU9e3sgb3BhY2l0eTogMC40IH19IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7LyogLm1pZGRsZSAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyaWdodCBjb2wtMlwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVhZC1saW5rXCI+XG4gICAgICAgICAgICBSZWFkIDxpbWcgc3JjPVwiL2ltZy9jYXJldC1yaWdodC1ncmV5LnN2Z1wiIGNsYXNzTmFtZT1cIm1sLTJcIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgey8qIC5yaWdodCAqL31cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxlZnQgY29sLTNcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRhdGVcIj5GZWJydWFyeSAybmQgMjAyMDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgey8qIC5sZWZ0ICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pZGRsZSBjb2wtMTIgY29sLW1kLTcgbWVuLWFuZC1taWNlXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXhcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9yLWltYWdlLWdhcFwiPlxuICAgICAgICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8aDQ+TWVuJmFtcDtNaWNlPC9oND5cbiAgICAgICAgICAgICAgPGgzPkNoYW5nZSBpcyBvdXIgY29uc3RhbnQ7IGlubm92YXRpb24gaXMgb3VyIHRyYWRpdGlvbjwvaDM+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8aW1nIHNyYz1cImltZy9tZW4tYW5kLW1pY2UucG5nXCIgY2xhc3NOYW1lPVwicG5nXCIgYWx0PVwiXCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHsvKiAubWlkZGxlICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJpZ2h0IGNvbC0yXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWFkLWxpbmtcIj5cbiAgICAgICAgICAgIFJlYWQgPGltZyBzcmM9XCIvaW1nL2NhcmV0LXJpZ2h0LWdyZXkuc3ZnXCIgY2xhc3NOYW1lPVwibWwtMlwiIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7LyogLnJpZ2h0ICovfVxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGVmdCBjb2wtM1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGF0ZVwiPkZlYnJ1YXJ5IDEydGggMjAyMDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgey8qIC5sZWZ0ICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pZGRsZSBjb2wtMTIgY29sLW1kLTcgYXBpLWF1dG8tcmVzdFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvci1pbWFnZS1nYXBcIj5cbiAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGg0PlxuICAgICAgICAgICAgICAgIEFQSTxzcGFuPjwvc3Bhbj5BdXRvbWF0aW9uPHNwYW4+PC9zcGFuPlJFU1RcbiAgICAgICAgICAgICAgPC9oND5cbiAgICAgICAgICAgICAgPGgzPklQIGluZnJhc3RydWN0dXJlIGF1dG9tYXRpb24gaW4gYWN0aW9uOiB0aGUgUkVTVChmdWwpIEFQSTwvaDM+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8aW1nIHNyYz1cImltZy9hcGktYXV0b21hdGlvbi1yZXN0LnN2Z1wiIGFsdD1cIlwiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7LyogLm1pZGRsZSAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyaWdodCBjb2wtMlwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVhZC1saW5rXCI+XG4gICAgICAgICAgICBSZWFkIDxpbWcgc3JjPVwiL2ltZy9jYXJldC1yaWdodC1ncmV5LnN2Z1wiIGNsYXNzTmFtZT1cIm1sLTJcIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgey8qIC5yaWdodCAqL31cbiAgICAgIDwvZGl2PlxuICAgICAgey8qIC5ib3R0b20gKi99XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5ib2R5IHtcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMzVweDtcbiAgICAgICAgICAudG9wIHtcbiAgICAgICAgICAgIC5sZWZ0LFxuICAgICAgICAgICAgLm1pZGRsZSxcbiAgICAgICAgICAgIC5yaWdodCB7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDQ2cHggMDtcbiAgICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzRlNGM0ZDtcbiAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTVweCAwO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAgICAgICAgICAgICAgIGJvcmRlci1yaWdodDogbm9uZTtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubGVmdCB7XG4gICAgICAgICAgICAgIC5zZWFyY2gge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgICAgICBjb2xvcjogI2JkYmNiYztcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoL2ltZy9zZWFyY2guc3ZnKSBuby1yZXBlYXQgdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogbGVmdCBjZW50ZXI7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAzNXB4O1xuICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm1pZGRsZSB7XG4gICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDA7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLmJvZHktbmF2LXdyYXBwZXIge1xuICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICAgICAgLmJvZHktbmF2IHtcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiA1cHg7XG4gICAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbiAgICAgICAgICAgICAgICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcbiAgICAgICAgICAgICAgICAgIG92ZXJmbG93LXg6IGF1dG87XG4gICAgICAgICAgICAgICAgICAuYm9keS1uYXYtaXRlbSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIDIwcHg7XG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgJi5hY3RpdmUge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICY6Zmlyc3Qtb2YtdHlwZSB7XG4gICAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLmJvZHktbmF2LWl0ZW06YWZ0ZXIge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICAgICAgdG9wOiAzMHB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMnB4O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNXM7XG4gICAgICAgICAgICAgICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC41cztcbiAgICAgICAgICAgICAgICAtbXMtdHJhbnNpdGlvbjogYWxsIDAuNXM7XG4gICAgICAgICAgICAgICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNXM7XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLmJvZHktbmF2LWl0ZW0uYWN0aXZlOmFmdGVyLFxuICAgICAgICAgICAgICAuYm9keS1uYXYtaXRlbTpob3ZlcjphZnRlciB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZGIwMDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnJpZ2h0IHtcbiAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAyNXB4O1xuICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICAgIC5zb3J0IHtcbiAgICAgICAgICAgICAgICBjb2xvcjogI2JkYmNiYztcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICAgICAgLnNvcnQtYnV0dG9uIHtcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIEJPVFRPTSBTVEFSVFMgSEVSRVxuICAgICAgICAgIC5ib3R0b20ge1xuICAgICAgICAgICAgLmxlZnQsXG4gICAgICAgICAgICAubWlkZGxlLFxuICAgICAgICAgICAgLnJpZ2h0IHtcbiAgICAgICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICM0ZTRjNGQ7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICBtaW4taGVpZ2h0OiAzNThweDtcbiAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gICAgICAgICAgICAgICAgbWluLWhlaWdodDogMjc4cHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5sZWZ0IHtcbiAgICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBidXR0b24udGhpcy13ZWVrcy1wb3N0IHtcbiAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyOXB4O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmRiMDA7XG4gICAgICAgICAgICAgICAgY29sb3I6ICMyMjFmMjA7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5kYXRlIHtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogXCJDYXBpdG9saXVtIFJlZ3VsYXJcIjtcbiAgICAgICAgICAgICAgICBjb2xvcjogI2I3YjZiNjtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5yaWdodCB7XG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmxlZnQsXG4gICAgICAgICAgICAubWlkZGxlIHtcbiAgICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzRlNGM0ZDtcbiAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubWlkZGxlIHtcbiAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogODBweDtcbiAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA5OTFweCkge1xuICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLmZvci1pbWFnZS1nYXAgZGl2IHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMjUwcHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA5OTFweCkge1xuICAgICAgICAgICAgICAgICAgd2lkdGg6IDE0MHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICBsZWZ0OiAtNThweDtcbiAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMzBweDtcbiAgICAgICAgICAgICAgICAgIGxlZnQ6IC0zOHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAmLnBuZyB7XG4gICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICAgICAgd2lkdGg6IDE4MHB4O1xuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDk4cHg7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGg0IHtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogXCJBcGVyY3UgUmVndWxhclwiO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZGIwMDtcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGgzIHtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogXCJBcGVyY3UgQm9sZFwiO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzZweDtcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcblxuICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA5OTFweCkge1xuICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyOHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5yaWdodCB7XG4gICAgICAgICAgICAgIC5yZWFkLWxpbmsge1xuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkNhcGl0b2xpdW0gQm9sZFwiO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgICAgICBjb2xvcjogI2I3YjZiNjtcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNXM7XG4gICAgICAgICAgICAgICAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjVzO1xuICAgICAgICAgICAgICAgICAgLW1zLXRyYW5zaXRpb246IGFsbCAwLjVzO1xuICAgICAgICAgICAgICAgICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNXM7XG4gICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC41cztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgJjpob3ZlciBpbWcge1xuICAgICAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjBweCk7XG4gICAgICAgICAgICAgICAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMHB4KTtcbiAgICAgICAgICAgICAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjBweCk7XG4gICAgICAgICAgICAgICAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjBweCk7XG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjBweCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9zZWN0aW9uPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQm9keTtcbiJdfQ== */\n/*@ sourceURL=/Users/baijutoms/Documents/Works/Web/next/viska/m-and-m/components/home/body.js */"));
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

/***/ "./public/css/bootstrap.css":
/*!**********************************!*\
  !*** ./public/css/bootstrap.css ***!
  \**********************************/
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