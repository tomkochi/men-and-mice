(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"/0+H":function(e,t,s){"use strict";var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=a(s("q1tI")),i=s("lwAK");function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,s=void 0!==t&&t,a=e.hybrid,o=void 0!==a&&a,i=e.hasQuery;return s||o&&(void 0!==i&&i)}t.isInAmpMode=n,t.useAmp=function(){return n(o.default.useContext(i.AmpStateContext))}},"8Kt/":function(e,t,s){"use strict";var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=a(s("q1tI")),i=a(s("Xuae")),n=s("lwAK"),r=s("FYa8"),d=s("/0+H");function l(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function x(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}t.defaultHead=l;var m=["name","httpEquiv","charSet","itemProp"];function c(e,t){return e.reduce((function(e,t){var s=o.default.Children.toArray(t.props.children);return e.concat(s)}),[]).reduce(x,[]).reverse().concat(l(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,s=new Set,a={};return function(o){var i=!0;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){var n=o.key.slice(o.key.indexOf("$")+1);e.has(n)?i=!1:e.add(n)}switch(o.type){case"title":case"base":t.has(o.type)?i=!1:t.add(o.type);break;case"meta":for(var r=0,d=m.length;r<d;r++){var l=m[r];if(o.props.hasOwnProperty(l))if("charSet"===l)s.has(l)?i=!1:s.add(l);else{var x=o.props[l],c=a[l]||new Set;c.has(x)?i=!1:(c.add(x),a[l]=c)}}}return i}}()).reverse().map((function(e,t){var s=e.key||t;return o.default.cloneElement(e,{key:s})}))}var j=i.default();function p(e){var t=e.children;return o.default.createElement(n.AmpStateContext.Consumer,null,(function(e){return o.default.createElement(r.HeadManagerContext.Consumer,null,(function(s){return o.default.createElement(j,{reduceComponentsToState:c,handleStateChange:s,inAmpMode:d.isInAmpMode(e)},t)}))}))}p.rewind=j.rewind,t.default=p},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},EbDI:function(e,t){e.exports=function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}},FYa8:function(e,t,s){"use strict";var a=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var s in e)Object.hasOwnProperty.call(e,s)&&(t[s]=e[s]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var o=a(s("q1tI"));t.HeadManagerContext=o.createContext(null)},Ijbi:function(e,t){e.exports=function(e){if(Array.isArray(e)){for(var t=0,s=new Array(e.length);t<e.length;t++)s[t]=e[t];return s}}},RIqP:function(e,t,s){var a=s("Ijbi"),o=s("EbDI"),i=s("Bnag");e.exports=function(e){return a(e)||o(e)||i()}},RNiq:function(e,t,s){"use strict";s.r(t),s.d(t,"default",(function(){return f}));var a=s("q1tI"),o=s.n(a),i=s("5Yp1"),n=s("MX0m"),r=s.n(n),d=s("8Kt/"),l=s.n(d),x=o.a.createElement,m=function(){return x("section",{className:"jsx-496486644 body"},x("div",{className:"jsx-496486644 row top"},x("div",{className:"jsx-496486644 left col-12 col-md-3"},x("input",{type:"text",placeholder:"Search for an article",className:"jsx-496486644 search form-control f-cap-r"})),x("div",{className:"jsx-496486644 middle col-12 col-md-7 d-flex"},x("div",{className:"jsx-496486644 body-nav-wrapper d-flex"},x("ul",{className:"jsx-496486644 body-nav list-unstyled f-ap-r d-flex"},x("li",{className:"jsx-496486644 body-nav-item active"},"All"),x("li",{className:"jsx-496486644 body-nav-item"},"Networking"),x("li",{className:"jsx-496486644 body-nav-item"},"Business"),x("li",{className:"jsx-496486644 body-nav-item"},"Men&Mice"),x("li",{className:"jsx-496486644 body-nav-item"},"Events"),x("li",{className:"jsx-496486644 body-nav-item"},"Courses")))),x("div",{className:"jsx-496486644 right col-2 d-none d-md-block"},x("div",{className:"jsx-496486644 sort"},x("span",{className:"jsx-496486644 f-cap-r d-none d-lg-inline-block mr-2"},"Sort by:"," "),x("button",{type:"button",id:"dropdownMenuButton","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",className:"jsx-496486644 btn sort-button f-cap-b"},"Newest ",x("img",{src:"/img/caret-down-grey.svg",className:"jsx-496486644 ml-2"})),x("div",{"aria-labelledby":"dropdownMenuButton",className:"jsx-496486644 dropdown-menu"},x("a",{href:"#",className:"jsx-496486644 dropdown-item"},"Action"),x("a",{href:"#",className:"jsx-496486644 dropdown-item"},"Another action"),x("a",{href:"#",className:"jsx-496486644 dropdown-item"},"Something else here"))))),x("div",{className:"jsx-496486644 row bottom"},x("div",{className:"jsx-496486644 left col-3"},x("div",{className:"jsx-496486644"},x("button",{className:"jsx-496486644 this-weeks-post mb-2 f-ap-m"},"THIS WEEKS POST"),x("div",{className:"jsx-496486644 date"},"February 24th 2020"))),x("div",{className:"jsx-496486644 middle col-12 col-md-7 network-security"},x("div",{className:"jsx-496486644 d-flex"},x("div",{className:"jsx-496486644 for-image-gap"},x("div",{className:"jsx-496486644"})),x("div",{className:"jsx-496486644"},x("h4",{className:"jsx-496486644"},"Network Security"),x("h3",{className:"jsx-496486644"},"Working from 127.0.0.1"))),x("img",{src:"img/network-security.svg",alt:"",style:{opacity:.4},className:"jsx-496486644"})),x("div",{className:"jsx-496486644 right col-2"},x("div",{className:"jsx-496486644 read-link"},"Read ",x("img",{src:"/img/caret-right-grey.svg",className:"jsx-496486644 ml-2"}))),x("div",{className:"jsx-496486644 left col-3"},x("div",{className:"jsx-496486644 date"},"February 12th 2020")),x("div",{className:"jsx-496486644 middle col-12 col-md-7 cloud"},x("div",{className:"jsx-496486644 d-flex"},x("div",{className:"jsx-496486644 for-image-gap"},x("div",{className:"jsx-496486644"})),x("div",{className:"jsx-496486644"},x("h4",{className:"jsx-496486644"},"Cloud"),x("h3",{className:"jsx-496486644"},"Men&Mice Suite 9.3 feature highlight: Akamai Fast DNS integration"))),x("img",{src:"img/cloud.svg",alt:"",style:{opacity:.4},className:"jsx-496486644"})),x("div",{className:"jsx-496486644 right col-2"},x("div",{className:"jsx-496486644 read-link"},"Read ",x("img",{src:"/img/caret-right-grey.svg",className:"jsx-496486644 ml-2"}))),x("div",{className:"jsx-496486644 left col-3"},x("div",{className:"jsx-496486644 date"},"February 2nd 2020")),x("div",{className:"jsx-496486644 middle col-12 col-md-7 men-and-mice"},x("div",{className:"jsx-496486644 d-flex"},x("div",{className:"jsx-496486644 for-image-gap"},x("div",{className:"jsx-496486644"})),x("div",{className:"jsx-496486644"},x("h4",{className:"jsx-496486644"},"Men&Mice"),x("h3",{className:"jsx-496486644"},"Change is our constant; innovation is our tradition"))),x("img",{src:"img/men-and-mice.png",alt:"",className:"jsx-496486644 png"})),x("div",{className:"jsx-496486644 right col-2"},x("div",{className:"jsx-496486644 read-link"},"Read ",x("img",{src:"/img/caret-right-grey.svg",className:"jsx-496486644 ml-2"}))),x("div",{className:"jsx-496486644 left col-3"},x("div",{className:"jsx-496486644 date"},"February 12th 2020")),x("div",{className:"jsx-496486644 middle col-12 col-md-7 api-auto-rest"},x("div",{className:"jsx-496486644 d-flex"},x("div",{className:"jsx-496486644 for-image-gap"},x("div",{className:"jsx-496486644"})),x("div",{className:"jsx-496486644"},x("h4",{className:"jsx-496486644"},"API",x("span",{className:"jsx-496486644"}),"Automation",x("span",{className:"jsx-496486644"}),"REST"),x("h3",{className:"jsx-496486644"},"IP infrastructure automation in action: the REST(ful) API"))),x("img",{src:"img/api-automation-rest.svg",alt:"",className:"jsx-496486644"})),x("div",{className:"jsx-496486644 right col-2"},x("div",{className:"jsx-496486644 read-link"},"Read ",x("img",{src:"/img/caret-right-grey.svg",className:"jsx-496486644 ml-2"})))),x(r.a,{id:"496486644"},[".body.jsx-496486644{padding-bottom:35px;}",".body.jsx-496486644 .top.jsx-496486644 .left.jsx-496486644,.body.jsx-496486644 .top.jsx-496486644 .middle.jsx-496486644,.body.jsx-496486644 .top.jsx-496486644 .right.jsx-496486644{padding:46px 0;border-right:1px solid #4e4c4d;}","@media (max-width:991px){.body.jsx-496486644 .top.jsx-496486644 .left.jsx-496486644,.body.jsx-496486644 .top.jsx-496486644 .middle.jsx-496486644,.body.jsx-496486644 .top.jsx-496486644 .right.jsx-496486644{padding:15px 0;}}","@media (max-width:767px){.body.jsx-496486644 .top.jsx-496486644 .left.jsx-496486644,.body.jsx-496486644 .top.jsx-496486644 .middle.jsx-496486644,.body.jsx-496486644 .top.jsx-496486644 .right.jsx-496486644{border-right:none;padding:0;}}",".body.jsx-496486644 .top.jsx-496486644 .left.jsx-496486644 .search.jsx-496486644{font-size:18px;color:#bdbcbc;background:url(/img/search.svg) no-repeat transparent;background-position:left center;border:none;outline:none;padding-left:35px;}","@media (max-width:767px){.body.jsx-496486644 .top.jsx-496486644 .left.jsx-496486644 .search.jsx-496486644{font-size:14px;}}",".body.jsx-496486644 .top.jsx-496486644 .middle.jsx-496486644{padding-left:20px;padding-right:20px;}","@media (max-width:767px){.body.jsx-496486644 .top.jsx-496486644 .middle.jsx-496486644{padding-left:0;padding-right:0;}}",".body.jsx-496486644 .top.jsx-496486644 .middle.jsx-496486644 .body-nav-wrapper.jsx-496486644{overflow:hidden;}",".body.jsx-496486644 .top.jsx-496486644 .middle.jsx-496486644 .body-nav-wrapper.jsx-496486644 .body-nav.jsx-496486644{padding-top:5px;padding-bottom:15px;overflow-y:hidden;overflow-x:auto;}",".body.jsx-496486644 .top.jsx-496486644 .middle.jsx-496486644 .body-nav-wrapper.jsx-496486644 .body-nav.jsx-496486644 .body-nav-item.jsx-496486644{color:rgba(255,255,255,0.6);font-size:18px;margin:0 20px;cursor:pointer;position:relative;}","@media (max-width:767px){.body.jsx-496486644 .top.jsx-496486644 .middle.jsx-496486644 .body-nav-wrapper.jsx-496486644 .body-nav.jsx-496486644 .body-nav-item.jsx-496486644{font-size:14px;}}",".body.jsx-496486644 .top.jsx-496486644 .middle.jsx-496486644 .body-nav-wrapper.jsx-496486644 .body-nav.jsx-496486644 .body-nav-item.active.jsx-496486644{color:#ffffff;}","@media (max-width:767px){.body.jsx-496486644 .top.jsx-496486644 .middle.jsx-496486644 .body-nav-wrapper.jsx-496486644 .body-nav.jsx-496486644 .body-nav-item.jsx-496486644:first-of-type{margin-left:0;}}",'.body.jsx-496486644 .top.jsx-496486644 .middle.jsx-496486644 .body-nav-item.jsx-496486644:after{content:"";position:absolute;left:0;top:30px;width:100%;height:2px;background:transparent;-webkit-transition:all 0.5s;-moz-transition:all 0.5s;-ms-transition:all 0.5s;-o-transition:all 0.5s;-webkit-transition:all 0.5s;transition:all 0.5s;}',".body.jsx-496486644 .top.jsx-496486644 .middle.jsx-496486644 .body-nav-item.active.jsx-496486644:after,.body.jsx-496486644 .top.jsx-496486644 .middle.jsx-496486644 .body-nav-item.jsx-496486644:hover.jsx-496486644:after{background:#ffdb00;}",".body.jsx-496486644 .top.jsx-496486644 .right.jsx-496486644{padding-left:25px;border:none;}",".body.jsx-496486644 .top.jsx-496486644 .right.jsx-496486644 .sort.jsx-496486644{color:#bdbcbc;font-size:18px;}",".body.jsx-496486644 .top.jsx-496486644 .right.jsx-496486644 .sort.jsx-496486644 .sort-button.jsx-496486644{color:#ffffff;font-size:18px;border:none;background:transparent;padding:0;}",".body.jsx-496486644 .bottom.jsx-496486644 .left.jsx-496486644,.body.jsx-496486644 .bottom.jsx-496486644 .middle.jsx-496486644,.body.jsx-496486644 .bottom.jsx-496486644 .right.jsx-496486644{border-top:1px solid #4e4c4d;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;min-height:358px;}","@media (max-width:767px){.body.jsx-496486644 .bottom.jsx-496486644 .left.jsx-496486644,.body.jsx-496486644 .bottom.jsx-496486644 .middle.jsx-496486644,.body.jsx-496486644 .bottom.jsx-496486644 .right.jsx-496486644{min-height:278px;}}",".body.jsx-496486644 .bottom.jsx-496486644 .left.jsx-496486644{padding:0;}","@media (max-width:767px){.body.jsx-496486644 .bottom.jsx-496486644 .left.jsx-496486644{display:none;}}",".body.jsx-496486644 .bottom.jsx-496486644 .left.jsx-496486644 button.this-weeks-post.jsx-496486644{border:none;height:29px;background-color:#ffdb00;color:#221f20;font-size:12px;}",'.body.jsx-496486644 .bottom.jsx-496486644 .left.jsx-496486644 .date.jsx-496486644{font-family:"Capitolium Regular";color:#b7b6b6;font-size:20px;}',".body.jsx-496486644 .bottom.jsx-496486644 .right.jsx-496486644{text-align:center;}","@media (max-width:767px){.body.jsx-496486644 .bottom.jsx-496486644 .right.jsx-496486644{display:none;}}",".body.jsx-496486644 .bottom.jsx-496486644 .left.jsx-496486644,.body.jsx-496486644 .bottom.jsx-496486644 .middle.jsx-496486644{border-right:1px solid #4e4c4d;}","@media (max-width:767px){.body.jsx-496486644 .bottom.jsx-496486644 .left.jsx-496486644,.body.jsx-496486644 .bottom.jsx-496486644 .middle.jsx-496486644{border-right:none;}}",".body.jsx-496486644 .bottom.jsx-496486644 .middle.jsx-496486644{padding-right:80px;overflow:hidden;padding-left:0;position:relative;}","@media (max-width:991px){.body.jsx-496486644 .bottom.jsx-496486644 .middle.jsx-496486644{padding-right:20px;}}",".body.jsx-496486644 .bottom.jsx-496486644 .middle.jsx-496486644 .for-image-gap.jsx-496486644 div.jsx-496486644{width:250px;height:100%;}","@media (max-width:991px){.body.jsx-496486644 .bottom.jsx-496486644 .middle.jsx-496486644 .for-image-gap.jsx-496486644 div.jsx-496486644{width:140px;}}",".body.jsx-496486644 .bottom.jsx-496486644 .middle.jsx-496486644 img.jsx-496486644{position:absolute;left:-58px;}","@media (max-width:991px){.body.jsx-496486644 .bottom.jsx-496486644 .middle.jsx-496486644 img.jsx-496486644{width:130px;left:-38px;}}",".body.jsx-496486644 .bottom.jsx-496486644 .middle.jsx-496486644 img.png.jsx-496486644{left:0;width:180px;height:100%;object-fit:cover;}","@media (max-width:991px){.body.jsx-496486644 .bottom.jsx-496486644 .middle.jsx-496486644 img.png.jsx-496486644{width:98px;}}",'.body.jsx-496486644 .bottom.jsx-496486644 .middle.jsx-496486644 h4.jsx-496486644{font-family:"Apercu Regular";font-size:12px;color:#ffdb00;text-transform:uppercase;}',".body.jsx-496486644 .bottom.jsx-496486644 .middle.jsx-496486644 h4.jsx-496486644 span.jsx-496486644{display:inline-block;width:20px;}",'.body.jsx-496486644 .bottom.jsx-496486644 .middle.jsx-496486644 h3.jsx-496486644{font-family:"Apercu Bold";font-size:36px;color:#ffffff;}',"@media (max-width:991px){.body.jsx-496486644 .bottom.jsx-496486644 .middle.jsx-496486644 h3.jsx-496486644{font-size:28px;}}","@media (max-width:767px){.body.jsx-496486644 .bottom.jsx-496486644 .middle.jsx-496486644 h3.jsx-496486644{font-size:20px;}}",'.body.jsx-496486644 .bottom.jsx-496486644 .right.jsx-496486644 .read-link.jsx-496486644{font-family:"Capitolium Bold";font-size:20px;color:#b7b6b6;cursor:pointer;}',".body.jsx-496486644 .bottom.jsx-496486644 .right.jsx-496486644 .read-link.jsx-496486644 img.jsx-496486644{-webkit-transition:all 0.5s;-moz-transition:all 0.5s;-ms-transition:all 0.5s;-o-transition:all 0.5s;-webkit-transition:all 0.5s;transition:all 0.5s;}",".body.jsx-496486644 .bottom.jsx-496486644 .right.jsx-496486644 .read-link.jsx-496486644:hover img.jsx-496486644{-webkit-transform:translateX(20px);-moz-transform:translateX(20px);-ms-transform:translateX(20px);-o-transform:translateX(20px);-webkit-transform:translateX(20px);-ms-transform:translateX(20px);transform:translateX(20px);}"]))},c=o.a.createElement,j=function(){return c("div",{className:"jsx-4043747907 home"},c(l.a,null,c("title",{className:"jsx-4043747907"},"M&M")),c("div",{className:"jsx-4043747907 heading-wrapper"},c("h1",{className:"jsx-4043747907"},"Your weekly ",c("span",{className:"jsx-4043747907"},"Tech News")),c("h2",{className:"jsx-4043747907"},"The Mousepad")),c(m,null),c(r.a,{id:"4043747907"},[".heading-wrapper.jsx-4043747907{padding:120px 0;}","@media (max-width:992px){.heading-wrapper.jsx-4043747907{padding:30px 0;}}",'h1.jsx-4043747907{font-family:"Apercu Regular";font-size:48px;color:#bdbcbc;}',"@media (max-width:992px){h1.jsx-4043747907{font-size:24px;}}",'h1.jsx-4043747907 span.jsx-4043747907{font-family:"Apercu Medium";color:#ffffff;}','h2.jsx-4043747907{font-family:"Apercu Bold";font-size:48px;color:#ffdb00;}',"@media (max-width:992px){h2.jsx-4043747907{font-size:36px;}}"]))},p=o.a.createElement;function f(){return p(i.a,null,p(j,null))}},Xuae:function(e,t,s){"use strict";var a=s("lwsE"),o=s("PJYZ"),i=s("W8MJ"),n=s("7W2i"),r=s("a1gu"),d=s("Nsbk"),l=s("RIqP");function x(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}Object.defineProperty(t,"__esModule",{value:!0});var m=s("q1tI"),c=!1;t.default=function(){var e,t=new Set;function s(s){e=s.props.reduceComponentsToState(l(t),s.props),s.props.handleStateChange&&s.props.handleStateChange(e)}return function(l){n(p,l);var m,j=(m=p,function(){var e,t=d(m);if(x()){var s=d(this).constructor;e=Reflect.construct(t,arguments,s)}else e=t.apply(this,arguments);return r(this,e)});function p(e){var i;return a(this,p),i=j.call(this,e),c&&(t.add(o(i)),s(o(i))),i}return i(p,null,[{key:"rewind",value:function(){var s=e;return e=void 0,t.clear(),s}}]),i(p,[{key:"componentDidMount",value:function(){t.add(this),s(this)}},{key:"componentDidUpdate",value:function(){s(this)}},{key:"componentWillUnmount",value:function(){t.delete(this),s(this)}},{key:"render",value:function(){return null}}]),p}(m.Component)}},lwAK:function(e,t,s){"use strict";var a=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var s in e)Object.hasOwnProperty.call(e,s)&&(t[s]=e[s]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var o=a(s("q1tI"));t.AmpStateContext=o.createContext({})},vlRD:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return s("RNiq")}])}},[["vlRD",0,2,1,3,4]]]);