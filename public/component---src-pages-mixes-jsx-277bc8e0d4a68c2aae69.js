(self.webpackChunkimaginary_radio_stations=self.webpackChunkimaginary_radio_stations||[]).push([[345],{5156:function(module,__unused_webpack_exports,__webpack_require__){module.exports=function(e){var n={};function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}return t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)t.d(o,r,function(n){return e[n]}.bind(null,r));return o},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=2)}([function(e,n){e.exports=__webpack_require__(5697)},function(e,n){e.exports=__webpack_require__(7294)},function(module,__webpack_exports__,__nested_webpack_require_1475__){"use strict";__nested_webpack_require_1475__.r(__webpack_exports__),function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__nested_webpack_require_1475__(1),react__WEBPACK_IMPORTED_MODULE_0___default=__nested_webpack_require_1475__.n(react__WEBPACK_IMPORTED_MODULE_0__),prop_types__WEBPACK_IMPORTED_MODULE_1__=__nested_webpack_require_1475__(0),prop_types__WEBPACK_IMPORTED_MODULE_1___default=__nested_webpack_require_1475__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__),enterModule;function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _extends(){return(_extends=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e}).apply(this,arguments)}function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function _createClass(e,n,t){return n&&_defineProperties(e.prototype,n),t&&_defineProperties(e,t),e}function _inherits(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&_setPrototypeOf(e,n)}function _setPrototypeOf(e,n){return(_setPrototypeOf=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}function _createSuper(e){return function(){var n,t=_getPrototypeOf(e);if(_isNativeReflectConstruct()){var o=_getPrototypeOf(this).constructor;n=Reflect.construct(t,arguments,o)}else n=t.apply(this,arguments);return _possibleConstructorReturn(this,n)}}function _possibleConstructorReturn(e,n){return!n||"object"!==_typeof(n)&&"function"!=typeof n?_assertThisInitialized(e):n}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _defineProperty(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}enterModule="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0,enterModule&&enterModule(module);var __signature__="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},ReactAudioPlayer=function(_Component){_inherits(ReactAudioPlayer,_Component);var _super=_createSuper(ReactAudioPlayer);function ReactAudioPlayer(){var e;_classCallCheck(this,ReactAudioPlayer);for(var n=arguments.length,t=new Array(n),o=0;o<n;o++)t[o]=arguments[o];return _defineProperty(_assertThisInitialized(e=_super.call.apply(_super,[this].concat(t))),"audioEl",react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef()),_defineProperty(_assertThisInitialized(e),"listenTracker",void 0),_defineProperty(_assertThisInitialized(e),"onError",(function(n){var t,o;return null===(t=(o=e.props).onError)||void 0===t?void 0:t.call(o,n)})),_defineProperty(_assertThisInitialized(e),"onCanPlay",(function(n){var t,o;return null===(t=(o=e.props).onCanPlay)||void 0===t?void 0:t.call(o,n)})),_defineProperty(_assertThisInitialized(e),"onCanPlayThrough",(function(n){var t,o;return null===(t=(o=e.props).onCanPlayThrough)||void 0===t?void 0:t.call(o,n)})),_defineProperty(_assertThisInitialized(e),"onPlay",(function(n){var t,o;e.setListenTrack(),null===(t=(o=e.props).onPlay)||void 0===t||t.call(o,n)})),_defineProperty(_assertThisInitialized(e),"onAbort",(function(n){var t,o;e.clearListenTrack(),null===(t=(o=e.props).onAbort)||void 0===t||t.call(o,n)})),_defineProperty(_assertThisInitialized(e),"onEnded",(function(n){var t,o;e.clearListenTrack(),null===(t=(o=e.props).onEnded)||void 0===t||t.call(o,n)})),_defineProperty(_assertThisInitialized(e),"onPause",(function(n){var t,o;e.clearListenTrack(),null===(t=(o=e.props).onPause)||void 0===t||t.call(o,n)})),_defineProperty(_assertThisInitialized(e),"onSeeked",(function(n){var t,o;null===(t=(o=e.props).onSeeked)||void 0===t||t.call(o,n)})),_defineProperty(_assertThisInitialized(e),"onLoadedMetadata",(function(n){var t,o;null===(t=(o=e.props).onLoadedMetadata)||void 0===t||t.call(o,n)})),_defineProperty(_assertThisInitialized(e),"onVolumeChanged",(function(n){var t,o;null===(t=(o=e.props).onVolumeChanged)||void 0===t||t.call(o,n)})),e}return _createClass(ReactAudioPlayer,[{key:"componentDidMount",value:function(){var e=this.audioEl.current;e&&(this.updateVolume(this.props.volume),e.addEventListener("error",this.onError),e.addEventListener("canplay",this.onCanPlay),e.addEventListener("canplaythrough",this.onCanPlayThrough),e.addEventListener("play",this.onPlay),e.addEventListener("abort",this.onAbort),e.addEventListener("ended",this.onEnded),e.addEventListener("pause",this.onPause),e.addEventListener("seeked",this.onSeeked),e.addEventListener("loadedmetadata",this.onLoadedMetadata),e.addEventListener("volumechange",this.onVolumeChanged))}},{key:"componentWillUnmount",value:function(){var e=this.audioEl.current;e&&(e.removeEventListener("error",this.onError),e.removeEventListener("canplay",this.onCanPlay),e.removeEventListener("canplaythrough",this.onCanPlayThrough),e.removeEventListener("play",this.onPlay),e.removeEventListener("abort",this.onAbort),e.removeEventListener("ended",this.onEnded),e.removeEventListener("pause",this.onPause),e.removeEventListener("seeked",this.onSeeked),e.removeEventListener("loadedmetadata",this.onLoadedMetadata),e.removeEventListener("volumechange",this.onVolumeChanged))}},{key:"componentDidUpdate",value:function(e){this.updateVolume(this.props.volume)}},{key:"setListenTrack",value:function(){var e=this;if(!this.listenTracker){var n=this.props.listenInterval;this.listenTracker=window.setInterval((function(){var n,t;e.audioEl.current&&(null===(n=(t=e.props).onListen)||void 0===n||n.call(t,e.audioEl.current.currentTime))}),n)}}},{key:"updateVolume",value:function(e){var n=this.audioEl.current;null!==n&&"number"==typeof e&&e!==(null==n?void 0:n.volume)&&(n.volume=e)}},{key:"clearListenTrack",value:function(){this.listenTracker&&(clearInterval(this.listenTracker),delete this.listenTracker)}},{key:"render",value:function(){var e=this.props.children||react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Your browser does not support the ",react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code",null,"audio")," element."),n=!(!1===this.props.controls),t=this.props.title?this.props.title:this.props.src,o={};return this.props.controlsList&&(o.controlsList=this.props.controlsList),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("audio",_extends({autoPlay:this.props.autoPlay,className:"react-audio-player ".concat(this.props.className),controls:n,crossOrigin:this.props.crossOrigin,id:this.props.id,loop:this.props.loop,muted:this.props.muted,preload:this.props.preload,ref:this.audioEl,src:this.props.src,style:this.props.style,title:t},o),e)}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),ReactAudioPlayer}(react__WEBPACK_IMPORTED_MODULE_0__.Component);_defineProperty(ReactAudioPlayer,"propTypes",void 0),_defineProperty(ReactAudioPlayer,"defaultProps",void 0),ReactAudioPlayer.defaultProps={autoPlay:!1,children:null,className:"",controls:!1,controlsList:"",id:"",listenInterval:1e4,loop:!1,muted:!1,onAbort:function(){},onCanPlay:function(){},onCanPlayThrough:function(){},onEnded:function(){},onError:function(){},onListen:function(){},onPause:function(){},onPlay:function(){},onSeeked:function(){},onVolumeChanged:function(){},onLoadedMetadata:function(){},preload:"metadata",style:{},title:"",volume:1},ReactAudioPlayer.propTypes={autoPlay:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,children:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.element,className:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,controls:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,controlsList:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,crossOrigin:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,id:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,listenInterval:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,loop:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,muted:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,onAbort:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,onCanPlay:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,onCanPlayThrough:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,onEnded:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,onError:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,onListen:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,onLoadedMetadata:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,onPause:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,onPlay:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,onSeeked:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,onVolumeChanged:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,preload:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(["","none","metadata","auto"]),src:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,style:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.objectOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string),title:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,volume:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number};var _default=ReactAudioPlayer,reactHotLoader,leaveModule;__webpack_exports__.default=_default,reactHotLoader="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0,reactHotLoader&&(reactHotLoader.register(ReactAudioPlayer,"ReactAudioPlayer","/home/justin/Projects/react-audio-player/src/index.tsx"),reactHotLoader.register(_default,"default","/home/justin/Projects/react-audio-player/src/index.tsx")),leaveModule="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0,leaveModule&&leaveModule(module)}.call(this,__nested_webpack_require_1475__(3)(module))},function(e,n){e.exports=function(e){if(!e.webpackPolyfill){var n=Object.create(e);n.children||(n.children=[]),Object.defineProperty(n,"loaded",{enumerable:!0,get:function(){return n.l}}),Object.defineProperty(n,"id",{enumerable:!0,get:function(){return n.i}}),Object.defineProperty(n,"exports",{enumerable:!0}),n.webpackPolyfill=1}return n}}])},5617:function(e,n,t){"use strict";var o=t(7294),r=t(9).default.div.withConfig({displayName:"Container",componentId:"sc-1jp017l-0"})(["margin:1.6rem 0.8rem;max-width:600px;"]);n.Z=function(e){var n=e.children;return o.createElement(r,null,n)}},7218:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return k}});var o=t(7294),r=t(1597),a=t(9),i=t(5617),l=t(9271);Object.create;function _(e,n){return Object.defineProperty?Object.defineProperty(e,"raw",{value:n}):e.raw=n,e}Object.create;s||(s=_(["\n  position: relative;\n"],["\n  position: relative;\n"]));var s,u,c,p,d,f,y,h=(0,a.css)(u||(u=_(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  width: 100%;\n  height: 100%;\n"],["\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  width: 100%;\n  height: 100%;\n"]))),v=function(e){var n=e.completeBackground;return(0,a.css)(c||(c=_(["\n  background-color: ",";\n"],["\n  background-color: ",";\n"])),n)},m=(p||(p=_(["\n  ","\n  background-color: ",";\n  box-shadow: inset 1px 1px 2px rgba(0, 0, 0, 0.3);\n  &[value]::-webkit-progress-value {\n    ","\n  }\n  &[value]::-moz-progress-value {\n    ","\n  }\n  &[value]::-webkit-progress-bar {\n    background-color: ",";\n  }\n"],["\n  ","\n  background-color: ",";\n  box-shadow: inset 1px 1px 2px rgba(0, 0, 0, 0.3);\n  &[value]::-webkit-progress-value {\n    ","\n  }\n  &[value]::-moz-progress-value {\n    ","\n  }\n  &[value]::-webkit-progress-bar {\n    background-color: ",";\n  }\n"])),function(e){var n=e.color,t=e.size;return(0,a.css)(d||(d=_(["\n  background-color: ",";\n  height: ","px;\n  width: ","px;\n  appearance: none;\n  cursor: grab;\n"],["\n  background-color: ",";\n  height: ","px;\n  width: ","px;\n  appearance: none;\n  cursor: grab;\n"])),n,t,t/2)}),E=(0,a.css)(f||(f=_(["\n  ","\n  background-color: transparent;\n  border: 0;\n  margin: 0;\n  appearance: none;\n"],["\n  ","\n  background-color: transparent;\n  border: 0;\n  margin: 0;\n  appearance: none;\n"])),h);y||(y=_(["\n  &:focus {\n    outline: none;\n  }\n  ","\n  &[value]::-moz-range-track {\n    ","\n  }\n  &[value]::-webkit-slider-thumb {\n    ","\n  }\n  &[value]::-moz-slider-thumb {\n    ","\n  }\n"],["\n  &:focus {\n    outline: none;\n  }\n  ","\n  &[value]::-moz-range-track {\n    ","\n  }\n  &[value]::-webkit-slider-thumb {\n    ","\n  }\n  &[value]::-moz-slider-thumb {\n    ","\n  }\n"]));P||(P=_(["\n  width: 100%;\n  max-width: 100%;\n  display: flex;\n  flex-flow: row nowrap;\n  * {\n    font-family: 'San Francisco', 'Helvetica Neue', Helvetica, sans-serif;\n    line-height: 1em;\n  }\n  ","\n  color: ",";\n  a {\n    color: ",";\n    text-decoration: none;\n    &:active {\n      color: ",";\n    }\n  }\n"],["\n  width: 100%;\n  max-width: 100%;\n  display: flex;\n  flex-flow: row nowrap;\n  * {\n    font-family: 'San Francisco', 'Helvetica Neue', Helvetica, sans-serif;\n    line-height: 1em;\n  }\n  ","\n  color: ",";\n  a {\n    color: ",";\n    text-decoration: none;\n    &:active {\n      color: ",";\n    }\n  }\n"])),b||(b=_(["\n  flex: 1;\n  display: flex;\n  flex-flow: column nowrap;\n  padding: 0;\n"],["\n  flex: 1;\n  display: flex;\n  flex-flow: column nowrap;\n  padding: 0;\n"])),g||(g=_(["\n  flex: 1;\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: space-between;\n"],["\n  flex: 1;\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: space-between;\n"])),O||(O=_(["\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: space-between;\n  margin: 0 5px 5px 5px;\n"],["\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: space-between;\n  margin: 0 5px 5px 5px;\n"])),w||(w=_(["\n  text-decoration: none;\n  display: flex;\n  flex-flow: column nowrap;\n  justify-content: center;\n  margin: 5px;\n  width: 15%;\n"],["\n  text-decoration: none;\n  display: flex;\n  flex-flow: column nowrap;\n  justify-content: center;\n  margin: 5px;\n  width: 15%;\n"])),M||(M=_([""],[""])),x||(x=_(["\n  text-align: center;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n"],["\n  text-align: center;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n"])),L||(L=_(["\n  display: block;\n  text-align: center;\n  &:hover {\n    text-decoration: underline;\n  }\n"],["\n  display: block;\n  text-align: center;\n  &:hover {\n    text-decoration: underline;\n  }\n"])),t(5156);var P,b,g,O,w,M,x,L,C=(0,a.default)(i.Z).withConfig({displayName:"mixes__StyledContainer",componentId:"sc-12giegv-0"})([""]),T=((0,a.default)(r.rU).withConfig({displayName:"mixes__StyledLink",componentId:"sc-12giegv-1"})(["margin:0;text-decoration:none;"]),a.default.h3.withConfig({displayName:"mixes__StyledTitle",componentId:"sc-12giegv-2"})(["margin:0 0 0.3rem;cursor:pointer;"]),a.default.div.withConfig({displayName:"mixes__Mix",componentId:"sc-12giegv-3"})(["margin-bottom:20px;border-bottom:0.02rem solid #ccc;"]),a.default.h1.withConfig({displayName:"mixes__Title",componentId:"sc-12giegv-4"})(["margin:0;"])),D=a.default.p.withConfig({displayName:"mixes__Count",componentId:"sc-12giegv-5"})(["font-size:0.9rem;"]),k=(a.default.p.withConfig({displayName:"mixes__StyledTags",componentId:"sc-12giegv-6"})(['font-family:"Menlo Code","Source Code Pro",monospace;font-size:0.7rem;']),function(e){var n=e.data;return o.createElement(l.Z,null,o.createElement(C,null,o.createElement(T,null,"recordings"),o.createElement(D,null,n.allMarkdownRemark.totalCount," mixes"),n.allMarkdownRemark.nodes.map((function(e){return o.createElement(o.Fragment,null,o.createElement("h1",null,e.frontmatter.title),o.createElement("h6",null,e.frontmatter.date),o.createElement("div",{dangerouslySetInnerHTML:{__html:e.html}}))}))))})}}]);
//# sourceMappingURL=component---src-pages-mixes-jsx-277bc8e0d4a68c2aae69.js.map