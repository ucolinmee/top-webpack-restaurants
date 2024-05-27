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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/PoetsenOne-Regular.ttf */ \"./src/fonts/PoetsenOne-Regular.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./images/pancakes-bg.jpg */ \"./src/images/pancakes-bg.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `@font-face {\n    font-family: 'PoetsenOne-Regular';\n    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\n}\n\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-family: 'PoetsenOne-Regular';\n}\n\nbody {\n    height: 100%;\n    background: url(${___CSS_LOADER_URL_REPLACEMENT_1___});\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: cover;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n/* \n    Header\n*/\n\nheader {\n    background-color: rgba(66,117,160,0.9);\n    height: 25%;\n    width: 100vw;\n    text-align: center;\n    padding: 24px 36px;\n}\n\nheader img {\n    aspect-ratio: 1 / 1;\n    height: 14vh;\n    border-radius: 50%;\n}\n\nnav {\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    gap: 3.5rem;\n    padding-top: 1.5rem\n}\n\nheader button {\n    background-color: transparent;\n    border: none;\n    border-radius: 10px;\n    padding: 8px 12px;\n    cursor: pointer;\n    color: #fff;\n    font-weight: bold;\n    font-size: 1.2rem;\n}\n\n.active {\n    background-color: #FFF;\n    color: rgb(66,117,160);\n}\n\nheader button:hover {\n    transform: translateY(-0.2rem);\n}\n\n/*\n    Content\n*/\n\n#content {\n    margin-top: 50px;\n    width: 60vw;\n    background-color: rgba(232,232,227,0.9);\n    padding: 24px 36px;\n    border-radius: 18px;\n    text-align: center;\n}\n\n/*\n    Home\n*/\n\n.home {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 2rem;\n}\n\n\n.home img {\n    aspect-ratio: 1 / 1.25;\n    width: 50%;\n}\n\nh1 {\n    color: rgb(66,117,160);\n}\n\n.home p {\n    padding: 0 10%;\n}\n\n.socials {\n    margin-top: 2rem;\n    display: flex;\n    justify-content: space-between;\n    padding: 0 10%;\n}\n\n.socials div {\n    display: flex;\n    gap: 15px;\n}\n\n.socials img {\n    aspect-ratio: 1 / 1;\n    height: 30px;\n    cursor: pointer;\n}\n\n/*\n    Menu\n*/\n\n.menu-section h1 {\n    margin-bottom: 20px;\n}\n\n.card {\n    display: flex;\n    align-items: center;\n    padding: 10px 12px;\n    background-color: #FFF;\n    border-radius: 18px;\n    margin-bottom: 20px;\n}\n\n.card img {\n    aspect-ratio: 1 / 1;\n    height: 80px;\n}\n\n.card img:hover {\n    aspect-ratio: 1 / 1;\n    height: 85px; \n}\n\n.card-content {\n    padding: 0 20px;\n    width: 100%;\n}\n\n/*\n    Contact\n*/\n\n.contact-details {\n    display: grid;\n    grid-template-columns: 1fr 8fr;\n    row-gap: 0.5rem;\n    column-gap: 1rem;\n}\n\n.contact-details img {\n    aspect-ratio: 1 / 1;\n    width: 30px;\n    justify-self: end;\n}\n\n.contact-details p {\n    justify-self: start;\n    align-self: center;\n}\n\n#contact-img {\n    aspect-ratio: 1/ 1;\n    width: 75%;\n    margin-top: 30px;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://top-webpack-restaurants/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://top-webpack-restaurants/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://top-webpack-restaurants/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://top-webpack-restaurants/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://top-webpack-restaurants/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://top-webpack-restaurants/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://top-webpack-restaurants/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://top-webpack-restaurants/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://top-webpack-restaurants/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://top-webpack-restaurants/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://top-webpack-restaurants/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/components/contact.js":
/*!***********************************!*\
  !*** ./src/components/contact.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst loadContact = () => {\n    const content = document.getElementById('content');\n\n    // <div class=\"contact-details\">\n    const details = document.createElement('div');\n    details.classList.add('contact-details');\n\n    // <img src=\"./images/email.svg\"></img>\n    const emailIcon = document.createElement('img');\n    emailIcon.src = __webpack_require__(/*! ../images/email.svg */ \"./src/images/email.svg\");\n    details.appendChild(emailIcon);\n\n    // <p>Email</p>\n    const emailPara = document.createElement('p');\n    emailPara.innerHTML = 'FakeEmail123@pp.com';\n    details.appendChild(emailPara);\n\n    // <img src=\"./images/phone.svg\"></img>\n    const phoneIcon = document.createElement('img');\n    phoneIcon.src = __webpack_require__(/*! ../images/phone.svg */ \"./src/images/phone.svg\");\n    details.appendChild(phoneIcon);\n\n    // <p>Phone</p>\n    const phonePara = document.createElement('p');\n    phonePara.innerHTML = '9876 5432';\n    details.appendChild(phonePara);\n\n    // <img src=\"./images/location-point.svg\"></img>\n    const locationIcon = document.createElement('img');\n    locationIcon.src = __webpack_require__(/*! ../images/location-point.svg */ \"./src/images/location-point.svg\");\n    details.appendChild(locationIcon);\n\n    // <p>Location</p>\n    const locationPara = document.createElement('p');\n    locationPara.innerHTML = 'I wish this was a real place...';\n    details.appendChild(locationPara);\n\n    // <img>\n    const img = document.createElement('img');\n    img.src = __webpack_require__(/*! ../images/contact.jpg */ \"./src/images/contact.jpg\");\n    img.id = 'contact-img';\n\n    content.appendChild(details);\n    content.appendChild(img);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadContact);\n\n{/* \n<div class=\"contact-details\">\n    <img src=\"./images/email.svg\">\n    <p>Email</p>\n    <img src=\"./images/phone.svg\">\n    <p>Phone num</p>\n    <img src=\"./images/location-point.svg\">\n    <p>Address</p>\n</div>\n<img src=\"\" alt=\"\"></img> \n*/}\n\n\n//# sourceURL=webpack://top-webpack-restaurants/./src/components/contact.js?");

/***/ }),

/***/ "./src/components/header.js":
/*!**********************************!*\
  !*** ./src/components/header.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _images_header_logo_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/header-logo.jpg */ \"./src/images/header-logo.jpg\");\n\n\nconst loadHeader = () => {\n    const header = document.querySelector('header');\n\n    const navSections = [\n        'Home',\n        'Menu',\n        'Contact'\n    ]\n\n    const div = document.createElement('div');\n\n    // img\n    const myIcon = new Image();\n    myIcon.src = _images_header_logo_jpg__WEBPACK_IMPORTED_MODULE_0__;\n    div.appendChild(myIcon);\n\n    // nav\n    const nav = document.createElement('nav');\n\n    // Add each btn to the navbar\n    navSections.forEach((section) => {\n        const button = document.createElement('button');\n        button.id = section.toLowerCase();\n        button.innerHTML = section;\n        nav.appendChild(button);\n    })\n\n    header.appendChild(div);\n    header.appendChild(nav);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHeader);\n\n{/* \n<header>\n    <div>\n        <img src=\"\" alt=\"\">\n    </div>\n    <nav>\n        <button>Home</button>\n        <button>Menu</button>\n        <button>Contact</button>\n    </nav>\n</header> \n*/}\n\n//# sourceURL=webpack://top-webpack-restaurants/./src/components/header.js?");

/***/ }),

/***/ "./src/components/home.js":
/*!********************************!*\
  !*** ./src/components/home.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _images_home_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/home.png */ \"./src/images/home.png\");\n/* harmony import */ var _images_icons_tiktok_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/icons/tiktok.svg */ \"./src/images/icons/tiktok.svg\");\n/* harmony import */ var _images_icons_instagram_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/icons/instagram.png */ \"./src/images/icons/instagram.png\");\n/* harmony import */ var _images_icons_twitter_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/icons/twitter.png */ \"./src/images/icons/twitter.png\");\n\n\n\n \n\nconst loadHome = () => {\n    const content = document.getElementById('content');\n\n    // *** <div class=\"home\"> ***\n    const homeDiv = document.createElement('div');\n    homeDiv.classList.add('home');\n\n    // img\n    const myIcon = new Image();\n    myIcon.src = _images_home_png__WEBPACK_IMPORTED_MODULE_0__;\n    homeDiv.appendChild(myIcon);\n\n    // h1\n    const headline = document.createElement('h1');\n    headline.innerHTML = \"Welcome to Pekka's Pancakes\";\n    homeDiv.appendChild(headline);\n\n    // p\n    const para = document.createElement('p');\n    para.innerHTML = \"Come find out what makes Pekka so obsessed over pancakes. Be it sweet, savoury or metallic... Pekka's Pancakes has something for your taste buds! \"\n    homeDiv.appendChild(para);\n\n    // *** <div class=\"socials\"> ***\n    const socialsDiv = document.createElement('div');\n    socialsDiv.classList.add('socials');\n\n    // h1\n    const findUs = document.createElement('h1');\n    findUs.innerHTML = \"Find Us\";\n    socialsDiv.appendChild(findUs);\n\n    // <div>\n    const faviconsDiv = document.createElement('div');\n\n    const faviconsList = [_images_icons_instagram_png__WEBPACK_IMPORTED_MODULE_2__, _images_icons_twitter_png__WEBPACK_IMPORTED_MODULE_3__, _images_icons_tiktok_svg__WEBPACK_IMPORTED_MODULE_1__];\n\n    faviconsList.forEach((icon) => {\n        const social = document.createElement('img');\n        social.src = icon;\n        faviconsDiv.appendChild(social);\n    })\n    socialsDiv.appendChild(faviconsDiv);\n\n    content.appendChild(homeDiv);\n    content.appendChild(socialsDiv);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHome);\n\n\n{/* \n<div id=\"content\">\n    <div class=\"home\">\n        <img src=\"\" alt=\"\">\n        <h1>Welcome to Pekka's Pancakes</h1>\n        <p>Come find out what makes Pekka so obsessed...</p>\n    </div>\n    <div class=\"socials\">\n        <h1>Find us</h1>\n        <div>\n            <img>Instagram\n            <img>Twitter\n            <img>Tiktok\n        </div>\n    </div>\n</div> \n*/}\n\n//# sourceURL=webpack://top-webpack-restaurants/./src/components/home.js?");

/***/ }),

/***/ "./src/components/menu.js":
/*!********************************!*\
  !*** ./src/components/menu.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst loadMenu = () => {\n    const menu = [\n        {\n            name: \"Mini Pekka's Power Pancakes\",\n            description: 'Fluffy stack of buttermilk pancakes topped with fresh berries, whipped cream, and a drizzle of maple syrup. A breakfast fit for a mini hero!',\n            url: __webpack_require__(/*! ../images/menu/power-pancakes.png */ \"./src/images/menu/power-pancakes.png\"),\n            type: 'Food'\n        },\n        {\n            name: \"Elixir Energy Waffles\",\n            description: 'Crispy golden waffles served with a side of berry compote and a scoop of vanilla ice cream. Perfect for refueling mid-battle.',\n            url: __webpack_require__(/*! ../images/menu/elixir-waffles.png */ \"./src/images/menu/elixir-waffles.png\"),\n            type: 'Food'\n        },\n        {\n            name: \"Goblin Gang Smoothie Bowl\",\n            description: 'A vibrant smoothie bowl made with spinach, kale, and tropical fruits, topped with granola and chia seeds. Healthy and delicious for the green goblins!',\n            url: __webpack_require__(/*! ../images/menu/goblin-smoothie.png */ \"./src/images/menu/goblin-smoothie.png\"),\n            type: 'Food'\n        },\n        {\n            name: \"Wizard's Wildberry Parfait\",\n            description: 'Layers of Greek yogurt, mixed wildberries, honey, and granola. A magical mix to start your day.',\n            url: __webpack_require__(/*! ../images/menu/wizard-parfait.png */ \"./src/images/menu/wizard-parfait.png\"),\n            type: 'Food'\n        },\n        {\n            name: \"Pekka's Potion Punch\",\n            description: 'A refreshing blend of pomegranate juice, lemonade, and sparkling water, garnished with mint. A sip of invincibility!',\n            url: __webpack_require__(/*! ../images/menu/pekka-punch.png */ \"./src/images/menu/pekka-punch.png\"),\n            type: 'Drink'\n        },\n        {\n            name: \"Inferno Dragon Hot Chocolate\",\n            description: 'Rich hot chocolate with a dash of chili powder, topped with whipped cream and chocolate shavings. A fiery twist to warm you up!',\n            url: __webpack_require__(/*! ../images/menu/hot-choco.png */ \"./src/images/menu/hot-choco.png\"),\n            type: 'Drink'\n        },\n    ];\n    \n    const content = document.getElementById('content');\n\n    // <div class=\"menu-section\"> - for food\n    const food = document.createElement('div');\n    food.classList.add('menu-section');\n\n    // <h1>Food</h1>\n    const foodHeader = document.createElement('h1');\n    foodHeader.innerHTML = \"Food\";\n    food.appendChild(foodHeader);\n\n    // <div class=\"menu-section\"> - for drinks\n    const drink = document.createElement('div');\n    drink.classList.add('menu-section');\n\n    // <h1>Drinks</h1>\n    const drinkHeader = document.createElement('h1');\n    drinkHeader.innerHTML = \"Drinks\";\n    drink.appendChild(drinkHeader);\n\n    menu.forEach((item) => {\n        var card = createCard(item.name, item.description, item.url);\n        if (item.type === 'Food') {\n            food.appendChild(card);\n        } else {\n            drink.appendChild(card);\n        }\n    });\n\n    content.appendChild(food);\n    content.appendChild(drink);\n}\n\nconst createCard = (name, description, imgUrl) => {\n    // <div class=\"card\">\n    var card = document.createElement('div');\n    card.classList.add('card');\n\n    // img\n    var foodImg = document.createElement('img');\n    foodImg.src = imgUrl;\n\n    // <div class=\"card-content\">\n    var cardContent = document.createElement('div');\n    cardContent.classList.add('card-content');\n\n    // <h2>Food title</h2>\n    var foodTitle = document.createElement('h2');\n    foodTitle.innerHTML = name;\n    cardContent.appendChild(foodTitle);\n\n    // <p>Food description</p>\n    var foodPara = document.createElement('p');\n    foodPara.innerHTML = description;\n    cardContent.appendChild(foodPara);\n\n    card.appendChild(foodImg);\n    card.appendChild(cardContent);\n\n    return card;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenu);\n\n\n{/* \n<div class=\"card\">\n    <img src=\"\" alt=\"\">\n    <div class=\"card-content\">\n        <h2>Food title</h2>\n        <p>Food description</p>\n    </div>\n</div> \n*/}\n\n//# sourceURL=webpack://top-webpack-restaurants/./src/components/menu.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/header */ \"./src/components/header.js\");\n/* harmony import */ var _components_home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/home */ \"./src/components/home.js\");\n/* harmony import */ var _components_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/menu */ \"./src/components/menu.js\");\n/* harmony import */ var _components_contact__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/contact */ \"./src/components/contact.js\");\n\n\n\n\n\n\nconst DisplayManager = () => {\n\n    const content = document.getElementById('content');\n\n    var tabs;\n\n    const populateTabs = () => {\n        tabs = {\n            home: {\n                button: document.getElementById('home'),\n                load: _components_home__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n            },\n            menu: {\n                button: document.getElementById('menu'),\n                load: _components_menu__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n            },\n            contact: {\n                button: document.getElementById('contact'),\n                load: _components_contact__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n            }\n        }\n    }\n\n    const updatePage = (activeTab) => {\n        document.querySelector('.active').classList.remove('active');\n        tabs[activeTab].button.classList.add('active');\n\n        content.innerHTML = '';\n        tabs[activeTab].load();\n    }\n\n    const clickHandler = (e) => {\n        if (e.target.classList.value !== 'active') {\n            updatePage(e.target.id);\n        }\n    }\n\n    const init = () => {\n        ;(0,_components_header__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n        document.getElementById('home').classList.add('active');\n        populateTabs();\n        updatePage('home');\n\n        var btns = document.querySelectorAll('button');\n        btns.forEach((btn) => {\n            btn.addEventListener('click', clickHandler);\n        })\n    }\n\n    return { init };\n} \n\nDisplayManager().init();\n\n//# sourceURL=webpack://top-webpack-restaurants/./src/index.js?");

/***/ }),

/***/ "./src/fonts/PoetsenOne-Regular.ttf":
/*!******************************************!*\
  !*** ./src/fonts/PoetsenOne-Regular.ttf ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"22ae511e03fc2ed8d264.ttf\";\n\n//# sourceURL=webpack://top-webpack-restaurants/./src/fonts/PoetsenOne-Regular.ttf?");

/***/ }),

/***/ "./src/images/contact.jpg":
/*!********************************!*\
  !*** ./src/images/contact.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"8bc9d9721d655bd37f2f.jpg\";\n\n//# sourceURL=webpack://top-webpack-restaurants/./src/images/contact.jpg?");

/***/ }),

/***/ "./src/images/email.svg":
/*!******************************!*\
  !*** ./src/images/email.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"2cf8522ee1c8fe6b8a5e.svg\";\n\n//# sourceURL=webpack://top-webpack-restaurants/./src/images/email.svg?");

/***/ }),

/***/ "./src/images/header-logo.jpg":
/*!************************************!*\
  !*** ./src/images/header-logo.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"3d3234ef4187e2f586da.jpg\";\n\n//# sourceURL=webpack://top-webpack-restaurants/./src/images/header-logo.jpg?");

/***/ }),

/***/ "./src/images/home.png":
/*!*****************************!*\
  !*** ./src/images/home.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"cafaac17a9bc251141e3.png\";\n\n//# sourceURL=webpack://top-webpack-restaurants/./src/images/home.png?");

/***/ }),

/***/ "./src/images/icons/instagram.png":
/*!****************************************!*\
  !*** ./src/images/icons/instagram.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"8694fe7d8098c601bbea.png\";\n\n//# sourceURL=webpack://top-webpack-restaurants/./src/images/icons/instagram.png?");

/***/ }),

/***/ "./src/images/icons/tiktok.svg":
/*!*************************************!*\
  !*** ./src/images/icons/tiktok.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"53a365b9705f54fd8b0f.svg\";\n\n//# sourceURL=webpack://top-webpack-restaurants/./src/images/icons/tiktok.svg?");

/***/ }),

/***/ "./src/images/icons/twitter.png":
/*!**************************************!*\
  !*** ./src/images/icons/twitter.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"c8d530ef57e8b3747b80.png\";\n\n//# sourceURL=webpack://top-webpack-restaurants/./src/images/icons/twitter.png?");

/***/ }),

/***/ "./src/images/location-point.svg":
/*!***************************************!*\
  !*** ./src/images/location-point.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"c8e586701eaf88e96631.svg\";\n\n//# sourceURL=webpack://top-webpack-restaurants/./src/images/location-point.svg?");

/***/ }),

/***/ "./src/images/menu/elixir-waffles.png":
/*!********************************************!*\
  !*** ./src/images/menu/elixir-waffles.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"3827aa6e5b4d14418076.png\";\n\n//# sourceURL=webpack://top-webpack-restaurants/./src/images/menu/elixir-waffles.png?");

/***/ }),

/***/ "./src/images/menu/goblin-smoothie.png":
/*!*********************************************!*\
  !*** ./src/images/menu/goblin-smoothie.png ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"242665bfd9b360f049c7.png\";\n\n//# sourceURL=webpack://top-webpack-restaurants/./src/images/menu/goblin-smoothie.png?");

/***/ }),

/***/ "./src/images/menu/hot-choco.png":
/*!***************************************!*\
  !*** ./src/images/menu/hot-choco.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"2e5de51439b030473029.png\";\n\n//# sourceURL=webpack://top-webpack-restaurants/./src/images/menu/hot-choco.png?");

/***/ }),

/***/ "./src/images/menu/pekka-punch.png":
/*!*****************************************!*\
  !*** ./src/images/menu/pekka-punch.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"d9f98f17c01e609cf82d.png\";\n\n//# sourceURL=webpack://top-webpack-restaurants/./src/images/menu/pekka-punch.png?");

/***/ }),

/***/ "./src/images/menu/power-pancakes.png":
/*!********************************************!*\
  !*** ./src/images/menu/power-pancakes.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"adbe6e0a51b4b2daebf0.png\";\n\n//# sourceURL=webpack://top-webpack-restaurants/./src/images/menu/power-pancakes.png?");

/***/ }),

/***/ "./src/images/menu/wizard-parfait.png":
/*!********************************************!*\
  !*** ./src/images/menu/wizard-parfait.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"9e427db41f724c4dac5b.png\";\n\n//# sourceURL=webpack://top-webpack-restaurants/./src/images/menu/wizard-parfait.png?");

/***/ }),

/***/ "./src/images/pancakes-bg.jpg":
/*!************************************!*\
  !*** ./src/images/pancakes-bg.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"7d702a927d28a72d8bdf.jpg\";\n\n//# sourceURL=webpack://top-webpack-restaurants/./src/images/pancakes-bg.jpg?");

/***/ }),

/***/ "./src/images/phone.svg":
/*!******************************!*\
  !*** ./src/images/phone.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"74359848220089b80029.svg\";\n\n//# sourceURL=webpack://top-webpack-restaurants/./src/images/phone.svg?");

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
/******/ 			if (document.currentScript)
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