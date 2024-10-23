/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/PassionsConflict-Regular.ttf */ \"./src/fonts/PassionsConflict-Regular.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/NotoSans-VariableFont.ttf */ \"./src/fonts/NotoSans-VariableFont.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./images/background.jpg */ \"./src/images/background.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `@font-face {\n    font-family: \"font1\";\n    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format('truetype');\n    font-weight: 600;\n    font-style: normal;\n}\n@font-face {\n    font-family: \"font2\";\n    src: url(${___CSS_LOADER_URL_REPLACEMENT_1___}) format('truetype');\n    font-weight: 600;\n    font-style: normal;\n}\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\nbody {\n    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_2___});\n    background-color: rgb(21, 4, 4);\n    background-position: bottom;\n    background-attachment: fixed;\n    background-repeat: no-repeat;\n    background-size: cover;\n    text-align: center;\n    overflow: hidden;\n}\n#nav-bar {\n    margin: auto;\n    padding: 10px;\n    background: black;\n    color: white;\n    border-bottom: 3px double white;\n    display: flex;\n    justify-content: center;\n    gap: 100px;\n    width: 60vw;\n}\nnav > button {\n    border: none;\n    text-align: center;\n    text-decoration: none;\n    display: inline-block;\n    font-size: 1rem;\n    padding: 5px;\n    background: black;\n    color: white;\n    transition-duration: 0.5s;\n}\nbutton:hover {\n    cursor: pointer;\n    letter-spacing: 0.2rem;\n    color: aqua;\n    font-weight: 1000;\n}\nfooter {\n    background: orange;\n    position: absolute;\n    bottom: 0;\n    width: 100%;\n    margin: auto;\n}\nh1 {\n    font-family: \"font1\";\n    font-size: 10rem;\n    color: white;\n}\nh3 {\n    font-family: \"font2\";\n    color: gray;\n    letter-spacing: .4rem;\n    margin-top: -10px;\n    margin-bottom: 20px;\n}\nh5 {\n    font-size: 1rem;\n    padding-top: 10px;\n    border-bottom: 1px solid black;\n    margin: 10px;\n}\n#content {\n    margin: auto;\n    background-color: rgba(121, 58, 58, 0.7);\n    width: 60vw;\n    height: 100vh;\n\n}\n#foodDisplay {\n    margin: auto;\n    background: pink;\n    padding: 10px;\n    width: 50vw;\n    height: 70vh;\n}\nimg {\n    width: 500px;\n    height: 700px;\n}\n#businessHours {\n    margin-top: -10px;\n}\nhr {\n    margin: 10px;\n    border: 1px solid black;\n}\n#location {\n    margin: 10px;\n    padding: 10px;\n    line-height: 2rem;\n}\n#location > img {\n    margin-top: 10px;\n    width: 80%;\n    height: 80%;\n}\n.menu {\n    margin: auto;\n\n}\n.menu-section {\n    background-color: aliceblue;\n    padding: 10px;\n}\n.section-header {\n    font-size: 1.5rem;\n    border-top: 1px double black;\n    border-bottom: 1px double black;\n}\n.menu-selection {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 10px;\n}\n.menu-item {\n    display: flex;\n    justify-content: space-between;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://top-restaurant-page/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://top-restaurant-page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://top-restaurant-page/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://top-restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://top-restaurant-page/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://top-restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://top-restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://top-restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://top-restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://top-restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://top-restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ about)\n/* harmony export */ });\n/* harmony import */ var _restaurantname_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./restaurantname.js */ \"./src/restaurantname.js\");\n/* harmony import */ var _images_restaurantmap_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/restaurantmap.png */ \"./src/images/restaurantmap.png\");\n\n\n\nfunction about() {\n    console.log(\"about.js is connect\");\n    \n    const main = document.getElementById('content');\n    (0,_restaurantname_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n    const businessHours = document.createElement('div');\n    businessHours.setAttribute('id','businessHours');\n    const weekday = document.createElement('h5');\n    const weekend = document.createElement('h5');\n    const sunday = document.createElement('h5');\n    const weekdayHours = document.createElement('p');\n    const weekendHours = document.createElement('p');\n    const sundayHours = document.createElement('p');\n\n    main.appendChild(businessHours);\n    businessHours.appendChild(weekday);\n    businessHours.appendChild(weekdayHours);\n    businessHours.appendChild(weekend);\n    businessHours.appendChild(weekendHours);\n    businessHours.appendChild(sunday);\n    businessHours.appendChild(sundayHours);\n\n    weekday.textContent = `Monday - Thursday`;\n    weekdayHours.textContent = `11:30AM - 11:30PM`;\n    weekend.textContent = `Friday - Saturaday`;\n    weekendHours.textContent = `11:30AM - 3:30AM`;\n    sunday.textContent = `Sunday`;\n    sundayHours.textContent = `9:30AM - 11:30PM`\n\n    const divider = document.createElement('hr');\n    main.appendChild(divider);\n    \n    const contactUs = document.createElement('div');\n    contactUs.setAttribute('id','contact-us');\n    main.appendChild(contactUs);\n    const telephoneNo = document.createElement('p');\n    const emailAddress = document.createElement('p');\n    contactUs.appendChild(telephoneNo);\n    contactUs.appendChild(emailAddress);\n    telephoneNo.textContent = \"TELEPHONE: 212-202-5892\";\n    emailAddress.textContent =\"EMAIL: HELLO@GOONG.COM\";\n\n    const divider2 = document.createElement('hr');\n    main.appendChild(divider2);\n\n    const location = document.createElement('div');\n    location.setAttribute('id', 'location');\n    main.appendChild(location);\n    const locationDescription = document.createElement('p');\n    location.appendChild(locationDescription);\n    locationDescription.textContent = \"We are located in the heart of Midtown Manhattan, Koreantown\"\n    const address = document.createElement('p');\n    location.appendChild(address);\n    address.textContent = \"6 W 32ND ST 2ND FLOOR, NEW YORK, NY 10001\";\n\n    const mapImg = document.createElement('img');\n    mapImg.src= _images_restaurantmap_png__WEBPACK_IMPORTED_MODULE_1__;\n    mapImg.alt = \"Map Image\";\n    location.appendChild(mapImg);\n}\n\n//# sourceURL=webpack://top-restaurant-page/./src/about.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ home)\n/* harmony export */ });\n/* harmony import */ var _images_home2_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/home2.jpg */ \"./src/images/home2.jpg\");\n/* harmony import */ var _restaurantname_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./restaurantname.js */ \"./src/restaurantname.js\");\n\n\n\nfunction home() {\n    console.log(\"home.js is connected\");\n\n    const main = document.getElementById('content');\n    \n    (0,_restaurantname_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\n    const imageSlide = document.createElement('img');\n    imageSlide.src = _images_home2_jpg__WEBPACK_IMPORTED_MODULE_0__;\n    imageSlide.alt = \"grill with kbbq surrounded by korean side dishes\"\n    main.appendChild(imageSlide);\n}\n\n\n//# sourceURL=webpack://top-restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _about_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about.js */ \"./src/about.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n\n\n\n\n\nconsole.log(\"index.js connected\");\n\nconst homePage = document.querySelector('#home');\nconst aboutPage = document.querySelector('#about');\nconst menuPage = document.querySelector('#menu');\nconst content = document.querySelector('#content');\n\nhomePage.addEventListener('click', () => {\n    console.log(\"sup sup\");\n    content.textContent = '';\n    (0,_home_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n})\naboutPage.addEventListener('click', () => {\n    content.textContent = '';\n    console.log(\"about about about\");\n    (0,_about_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n})\nmenuPage.addEventListener('click', () => {\n    content.textContent = '';    \n    console.log(\"eat eat eat\");\n    (0,_menu_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n})\n\n;(0,_home_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\n//# sourceURL=webpack://top-restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _restaurantname_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./restaurantname.js */ \"./src/restaurantname.js\");\n/* harmony import */ var _menucontent_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menucontent.js */ \"./src/menucontent.js\");\n\n\n\nfunction createMenuSection(sectionName) {\n    const section = document.createElement('div');\n    section.classList.add('menu-section');\n\n    const sectionHeader = document.createElement('h3');\n    sectionHeader.classList.add('section-header');\n    sectionHeader.textContent = sectionName.toUpperCase();\n\n    const selection = document.createElement('div');\n    selection.classList.add('menu-selection');\n\n    section.appendChild(sectionHeader);\n    section.appendChild(selection);\n    \n    return section;\n}\n\nfunction addMenuItems(selection, selectionName) {\n    const section = selection.querySelector('.menu-selection');\n    const sectionItems = _menucontent_js__WEBPACK_IMPORTED_MODULE_1__[selectionName];\n    for(let i = 0; i < sectionItems.length; i++) {\n        const item = document.createElement('div');\n        item.classList.add('menu-item');\n        const itemName = document.createElement('p');\n        itemName.classList.add('item-name');\n        itemName.textContent = sectionItems[i]['name'];\n        const price = document.createElement('span');\n        price.classList.add('item-price');\n        price.textContent = sectionItems[i]['price'];\n\n        item.appendChild(itemName);\n        item.appendChild(price);\n        section.append(item);\n    }\n}\n\nfunction createMenu() {\n    const menu = document.createElement('div');\n    menu.classList.add('menu');\n\n    for (let i = 0; i < _menucontent_js__WEBPACK_IMPORTED_MODULE_1__.selections.length; i++) {\n        const selection = createMenuSection(_menucontent_js__WEBPACK_IMPORTED_MODULE_1__.selections[i]);\n        addMenuItems(selection, _menucontent_js__WEBPACK_IMPORTED_MODULE_1__.selections[i]);\n\n        menu.appendChild(selection);\n    }\n    return menu;\n}\n\nfunction loadMenu() {\n    console.log('menu.js connected');\n\n    const content = document.querySelector('#content');\n    content.textContent = \"\";\n    (0,_restaurantname_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    content.appendChild(createMenu());\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenu);\n\n//# sourceURL=webpack://top-restaurant-page/./src/menu.js?");

/***/ }),

/***/ "./src/menucontent.js":
/*!****************************!*\
  !*** ./src/menucontent.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   appetizer: () => (/* binding */ appetizer),\n/* harmony export */   beef: () => (/* binding */ beef),\n/* harmony export */   drinks: () => (/* binding */ drinks),\n/* harmony export */   meal: () => (/* binding */ meal),\n/* harmony export */   otherMeats: () => (/* binding */ otherMeats),\n/* harmony export */   pork: () => (/* binding */ pork),\n/* harmony export */   selections: () => (/* binding */ selections)\n/* harmony export */ });\nconst beef = [\n    {\n        name: \"Marinated Prime Short Rib\",\n        price: 49.99\n    },\n    {\n        name: \"Marinated Prime Chunk Flap Tail\",\n        price: 43.99\n    },\n    {\n        name: \"Prime Short Ribs\",\n        price: 49.99\n    },\n    {\n        name: \"Prime Ribeye\",\n        price: 54.99\n    },{\n        name: \"Dry Aged Prime Ribeye\",\n        price: 64.99\n    },\n    {\n        name: \"Prime Tomahawk Steak\",\n        price: 164.99\n    }\n];\nconst pork = [\n    {\n        name: \"Pork Belly\",\n        price: 32.99\n    },\n    {\n        name: \"Pork Jowl\",\n        price: 34.99\n    },\n    {\n        name: \"Pork collar\",\n        price: 32.99\n    },\n    {\n        name: \"Marinated Pork Collar\",\n        price: 33.99\n    },\n    {\n        name: \"Thinly Sliced Spicy Pork Belly\",\n        price: 29.99\n    },\n    {\n        name: \"Pork Skin\",\n        price: 24.99\n    }\n];\nconst otherMeats = [\n    {\n        name: \"Lamb Rib\",\n        price: 46.99\n    },\n    {\n        name: \"Large Intestine\",\n        price: 32.99\n    },\n    {\n        name: \"Small Intestint\",\n        price: 32.99\n    },\n    {\n        name: \"Tripe\",\n        price: 32.99\n    }\n];\nconst appetizer = [\n    {\n        name: \"Seafood Pancake\",\n        price: 18.99\n    },\n    {\n        name: \"Galbi Dumpling\",\n        price: 12.99\n    },\n    {\n        name: \"Stir-fried Squid w/ Noodles\",\n        price:  25.99\n    },\n    {\n        name: \"Japchae\",\n        price: 19.99\n    },\n];\nconst meal = [\n    {\n        name: \"Beef Brisket Soybean Paste Stew\",\n        price: 15.99\n    },\n    {\n        name: \"Spicy Seafood Soft Tofu Stew\",\n        price: 16.99\n    },\n    {\n        name: \"Pork Belly Kimichi Stew\",\n        price: 15.99\n    },\n    {\n        name: \"Short Rib Soup\",\n        price: 20.99\n    },\n    {\n        name: \"Spicy Beef & Seafood Noodle\",\n        price: 19.99\n    },\n    {\n        name: \"Radish Kimchi Cold Noodle\",\n        price: 14.99\n    },\n];\nconst drinks = [\n    {\n        name: \"Chamisel\",\n        price: 9.99\n    },\n    {\n        name: \"Chamisel Fresh\",\n        price: 13.99\n    },\n    {\n        name: \"Chamisel Original\",\n        price: 13.99\n    },\n    {\n        name: \"Chum Churum\",\n        price: 13.99\n    },\n    {\n        name: \"Chum Churm - Favored\",\n        price: 14.99\n    },\n    {\n        name: \"Hallasan 17\",\n        price: 13.99\n    },\n    {\n        name: \"Hallasa 21\",\n        price: 15.99\n    },\n    {\n        name: \"DOKDO 4020\",\n        price: 19.99\n    }\n    \n    \n];\nconst selections = ['beef', 'pork', 'otherMeats', 'appetizer', 'meal', 'drinks'];\n\n\n//# sourceURL=webpack://top-restaurant-page/./src/menucontent.js?");

/***/ }),

/***/ "./src/restaurantname.js":
/*!*******************************!*\
  !*** ./src/restaurantname.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ companyName)\n/* harmony export */ });\nfunction companyName() {\n    const content = document.getElementById('content');\n    const restaurantName = document.createElement('h1');\n    const restaurantDescription = document.createElement('h3');\n    restaurantName.textContent = \"Goong\";\n    restaurantDescription.textContent = \"Authentic Korean Barbeque\";\n    content.appendChild(restaurantName);\n    content.appendChild(restaurantDescription);\n}\n\n//# sourceURL=webpack://top-restaurant-page/./src/restaurantname.js?");

/***/ }),

/***/ "./src/fonts/NotoSans-VariableFont.ttf":
/*!*********************************************!*\
  !*** ./src/fonts/NotoSans-VariableFont.ttf ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"b1d0ab70303caea663db.ttf\";\n\n//# sourceURL=webpack://top-restaurant-page/./src/fonts/NotoSans-VariableFont.ttf?");

/***/ }),

/***/ "./src/fonts/PassionsConflict-Regular.ttf":
/*!************************************************!*\
  !*** ./src/fonts/PassionsConflict-Regular.ttf ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"8c2881552904c5ac9a5a.ttf\";\n\n//# sourceURL=webpack://top-restaurant-page/./src/fonts/PassionsConflict-Regular.ttf?");

/***/ }),

/***/ "./src/images/background.jpg":
/*!***********************************!*\
  !*** ./src/images/background.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"3645e013f14f34e6e8c9.jpg\";\n\n//# sourceURL=webpack://top-restaurant-page/./src/images/background.jpg?");

/***/ }),

/***/ "./src/images/home2.jpg":
/*!******************************!*\
  !*** ./src/images/home2.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"bb26aa3d1d90f679973b.jpg\";\n\n//# sourceURL=webpack://top-restaurant-page/./src/images/home2.jpg?");

/***/ }),

/***/ "./src/images/restaurantmap.png":
/*!**************************************!*\
  !*** ./src/images/restaurantmap.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"3925c2db2b8e786fbf5f.png\";\n\n//# sourceURL=webpack://top-restaurant-page/./src/images/restaurantmap.png?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;