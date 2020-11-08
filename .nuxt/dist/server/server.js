module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("./" + ({"1":"pages/index"}[chunkId]||chunkId) + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	__webpack_require__.p = "/_nuxt/";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 14);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ addStylesServer; });

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/addStylesServer.js


function addStylesServer (parentId, list, isProduction, context) {
  if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
    context = __VUE_SSR_CONTEXT__
  }
  if (context) {
    if (!context.hasOwnProperty('styles')) {
      Object.defineProperty(context, 'styles', {
        enumerable: true,
        get: function() {
          return renderStyles(context._styles)
        }
      })
      // expose renderStyles for vue-server-renderer (vuejs/#6353)
      context._renderStyles = renderStyles
    }

    var styles = context._styles || (context._styles = {})
    list = listToStyles(parentId, list)
    if (isProduction) {
      addStyleProd(styles, list)
    } else {
      addStyleDev(styles, list)
    }
  }
}

// In production, render as few style tags as possible.
// (mostly because IE9 has a limit on number of style tags)
function addStyleProd (styles, list) {
  for (var i = 0; i < list.length; i++) {
    var parts = list[i].parts
    for (var j = 0; j < parts.length; j++) {
      var part = parts[j]
      // group style tags by media types.
      var id = part.media || 'default'
      var style = styles[id]
      if (style) {
        if (style.ids.indexOf(part.id) < 0) {
          style.ids.push(part.id)
          style.css += '\n' + part.css
        }
      } else {
        styles[id] = {
          ids: [part.id],
          css: part.css,
          media: part.media
        }
      }
    }
  }
}

// In dev we use individual style tag for each module for hot-reload
// and source maps.
function addStyleDev (styles, list) {
  for (var i = 0; i < list.length; i++) {
    var parts = list[i].parts
    for (var j = 0; j < parts.length; j++) {
      var part = parts[j]
      styles[part.id] = {
        ids: [part.id],
        css: part.css,
        media: part.media
      }
    }
  }
}

function renderStyles (styles) {
  var css = ''
  for (var key in styles) {
    var style = styles[key]
    css += '<style data-vue-ssr-id="' + style.ids.join(' ') + '"' +
        (style.media ? ( ' media="' + style.media + '"' ) : '') + '>' +
        style.css + '</style>'
  }
  return css
}


/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("vue-router");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("vue-no-ssr");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("vue-client-only");

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const info = __webpack_require__(26);

const rootKeys = ['class-name', 'class', 'style'];

function propsToData(props, doc) {
  return Object.keys(props).reduce(function (data, key) {
    const k = key.replace(/.*:/, '');
    let obj = rootKeys.includes(k) ? data : data.attrs;
    const value = props[key];
    const {
      attribute
    } = info.find(info.html, key);

    if (key === 'v-bind') {
      let val = doc[value];

      if (!val) {
        val = eval(`(${value})`);
      }

      obj = Object.assign(obj, val);
    } else if (key.indexOf(':') === 0 || key.indexOf('v-bind:') === 0) {
      key = key.replace('v-bind:', '').replace(':', '');

      if (doc[value]) {
        obj[key] = doc[value];
      } else {
        obj[key] = eval(`(${value})`);
      }
    } else if (Array.isArray(value)) {
      obj[attribute] = value.join(' ');
    } else {
      obj[attribute] = value;
    }

    return data;
  }, {
    attrs: {}
  });
}
/**
 * Create the scoped slots from `node` template children. Templates for default
 * slots are processed as regular children in `processNode`.
 */


function slotsToData(node, h, doc) {
  const data = {};
  const children = node.children || [];
  children.forEach(child => {
    // Regular children and default templates are processed inside `processNode`.
    if (!isTemplate(child) || isDefaultTemplate(child)) {
      return;
    } // Non-default templates are converted into slots.


    data.scopedSlots = data.scopedSlots || {};
    const template = child;
    const name = getSlotName(template);
    const vDomTree = template.content.map(tmplNode => processNode(tmplNode, h, doc));

    data.scopedSlots[name] = function () {
      return vDomTree;
    };
  });
  return data;
}

function processNode(node, h, doc) {
  /**
   * Return raw value as it is
   */
  if (node.type === 'text') {
    return node.value;
  }

  const slotData = slotsToData(node || {}, h, doc);
  const propData = propsToData(node.props, doc);
  const data = Object.assign({}, slotData, propData);
  /**
   * Process child nodes, flat-mapping templates pointing to default slots.
   */

  const children = [];

  for (const child of node.children) {
    // Template nodes pointing to non-default slots are processed inside `slotsToData`.
    if (isTemplate(child) && !isDefaultTemplate(child)) {
      continue;
    }

    const processQueue = isDefaultTemplate(child) ? child.content : [child];
    children.push(...processQueue.map(node => processNode(node, h, doc)));
  }

  return h(node.tag, data, children);
}

const DEFAULT_SLOT = 'default';

function isDefaultTemplate(node) {
  return isTemplate(node) && getSlotName(node) === DEFAULT_SLOT;
}

function isTemplate(node) {
  return node.tag === 'template';
}

function getSlotName(node) {
  let name = '';

  for (const propName of Object.keys(node.props)) {
    if (!propName.startsWith('#') && !propName.startsWith('v-slot:')) {
      return;
    }

    name = propName.split(/[:#]/, 2)[1];
    break;
  }

  return name || DEFAULT_SLOT;
}

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'NuxtContent',
  functional: true,
  props: {
    document: {
      required: true
    }
  },

  render(h, {
    data,
    props
  }) {
    const {
      document
    } = props;
    const {
      body
    } = document || {};

    if (!body || !body.children || !Array.isArray(body.children)) {
      return;
    }

    let classes = [];

    if (Array.isArray(data.class)) {
      classes = data.class;
    } else if (typeof data.class === 'object') {
      const keys = Object.keys(data.class);
      classes = keys.filter(key => data.class[key]);
    } else {
      classes = [data.class];
    }

    data.class = classes.concat('nuxt-content');
    data.props = Object.assign({ ...body.props
    }, data.props);
    return h('div', data, body.children.map(child => processNode(child, h, document)));
  }

});

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(16);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("72daabed", content, true, context)
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(18);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("3191d5ad", content, true, context)
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(24);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("932a8f60", content, true, context)
};

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("querystring");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("node-fetch");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("vue-meta");

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(27);


/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".__nuxt-error-page{padding:1rem;background:#f7f8fb;color:#47494e;text-align:center;display:flex;justify-content:center;align-items:center;flex-direction:column;font-family:sans-serif;font-weight:100!important;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-webkit-font-smoothing:antialiased;position:absolute;top:0;left:0;right:0;bottom:0}.__nuxt-error-page .error{max-width:450px}.__nuxt-error-page .title{font-size:1.5rem;margin-top:15px;color:#47494e;margin-bottom:8px}.__nuxt-error-page .description{color:#7f828b;line-height:21px;margin-bottom:10px}.__nuxt-error-page a{color:#7f828b!important;text-decoration:none}.__nuxt-error-page .logo{position:fixed;left:12px;bottom:12px}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".nuxt-progress{position:fixed;top:0;left:0;right:0;height:2px;width:0;opacity:1;transition:width .1s,opacity .4s;background-color:#3b8070;z-index:999999}.nuxt-progress.nuxt-progress-notransition{transition:none}.nuxt-progress-failed{background-color:red}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(20);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(3).default("0211d3d2", content, true)

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}main{display:block}h1{font-size:2em;margin:.67em 0}hr{box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details{display:block}summary{display:list-item}[hidden],template{display:none}blockquote,dd,dl,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}button{background-color:transparent;background-image:none}button:focus{outline:1px dotted;outline:5px auto -webkit-focus-ring-color}fieldset,ol,ul{margin:0;padding:0}ol,ul{list-style:none}html{font-family:Inter,system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif,BlinkMacSystemFont,\"Segoe UI\",\"Helvetica Neue\",Arial,\"Noto Sans\",\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\";line-height:1.5}*,:after,:before{box-sizing:border-box;border:0 solid #d2d6dc}hr{border-top-width:1px}img{border-style:solid}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{color:#a0aec0}input:-ms-input-placeholder,textarea:-ms-input-placeholder{color:#a0aec0}input::placeholder,textarea::placeholder{color:#a0aec0}[role=button],button{cursor:pointer}table{border-collapse:collapse}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}button,input,optgroup,select,textarea{padding:0;line-height:inherit;color:inherit}code,kbd,pre,samp{font-family:Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}.container{width:100%}@media (min-width:640px){.container{max-width:640px}}@media (min-width:768px){.container{max-width:768px}}@media (min-width:1024px){.container{max-width:1024px}}@media (min-width:1280px){.container{max-width:1280px}}.form-input{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:#fff;border-color:#d2d6dc;border-width:1px;border-radius:.375rem;padding:.5rem .75rem;font-size:1rem;line-height:1.5}.form-input::-moz-placeholder{color:#9fa6b2;opacity:1}.form-input:-ms-input-placeholder{color:#9fa6b2;opacity:1}.form-input::placeholder{color:#9fa6b2;opacity:1}.form-input:focus{outline:none;box-shadow:0 0 0 3px rgba(164,202,254,.45);border-color:#a4cafe}.form-textarea{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:#fff;border-color:#d2d6dc;border-width:1px;border-radius:.375rem;padding:.5rem .75rem;font-size:1rem;line-height:1.5}.form-textarea::-moz-placeholder{color:#9fa6b2;opacity:1}.form-textarea:-ms-input-placeholder{color:#9fa6b2;opacity:1}.form-textarea::placeholder{color:#9fa6b2;opacity:1}.form-textarea:focus{outline:none;box-shadow:0 0 0 3px rgba(164,202,254,.45);border-color:#a4cafe}.form-multiselect{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:#fff;border-color:#d2d6dc;border-width:1px;border-radius:.375rem;padding:.5rem .75rem;font-size:1rem;line-height:1.5}.form-multiselect:focus{outline:none;box-shadow:0 0 0 3px rgba(164,202,254,.45);border-color:#a4cafe}.form-select{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='none'%3E%3Cpath d='M7 7l3-3 3 3m0 6l-3 3-3-3' stroke='%239fa6b2' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E\");-webkit-appearance:none;-moz-appearance:none;appearance:none;-webkit-print-color-adjust:exact;color-adjust:exact;background-repeat:no-repeat;background-color:#fff;border-color:#d2d6dc;border-width:1px;border-radius:.375rem;padding:.5rem 2.5rem .5rem .75rem;font-size:1rem;line-height:1.5;background-position:right .5rem center;background-size:1.5em 1.5em}.form-select::-ms-expand{color:#9fa6b2;border:none}@media not print{.form-select::-ms-expand{display:none}}@media print and (-ms-high-contrast:active),print and (-ms-high-contrast:none){.form-select{padding-right:.75rem}}.form-select:focus{outline:none;box-shadow:0 0 0 3px rgba(164,202,254,.45);border-color:#a4cafe}.form-checkbox:checked{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 16 16' fill='%23fff' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4a1 1 0 00-1.414-1.414L7 8.586 5.707 7.293z'/%3E%3C/svg%3E\");border-color:transparent;background-color:currentColor;background-size:100% 100%;background-position:50%;background-repeat:no-repeat}@media not print{.form-checkbox::-ms-check{border-width:1px;color:transparent;background:inherit;border-color:inherit;border-radius:inherit}}.form-checkbox{-webkit-appearance:none;-moz-appearance:none;appearance:none;-webkit-print-color-adjust:exact;color-adjust:exact;display:inline-block;vertical-align:middle;background-origin:border-box;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;flex-shrink:0;height:1rem;width:1rem;color:#3f83f8;background-color:#fff;border-color:#d2d6dc;border-width:1px;border-radius:.25rem}.form-checkbox:focus{outline:none;box-shadow:0 0 0 3px rgba(164,202,254,.45);border-color:#a4cafe}.form-checkbox:checked:focus,.form-radio:checked{border-color:transparent}.form-radio:checked{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 16 16' fill='%23fff' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='8' cy='8' r='3'/%3E%3C/svg%3E\");background-color:currentColor;background-size:100% 100%;background-position:50%;background-repeat:no-repeat}@media not print{.form-radio::-ms-check{border-width:1px;color:transparent;background:inherit;border-color:inherit;border-radius:inherit}}.form-radio{-webkit-appearance:none;-moz-appearance:none;appearance:none;-webkit-print-color-adjust:exact;color-adjust:exact;display:inline-block;vertical-align:middle;background-origin:border-box;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;flex-shrink:0;border-radius:100%;height:1rem;width:1rem;color:#3f83f8;background-color:#fff;border-color:#d2d6dc;border-width:1px}.form-radio:focus{outline:none;box-shadow:0 0 0 3px rgba(164,202,254,.45);border-color:#a4cafe}.form-radio:checked:focus{border-color:transparent}.prose{color:#374151;max-width:65ch}.prose [class~=lead]{color:#4b5563;font-size:1.25em;line-height:1.6;margin-top:1.2em;margin-bottom:1.2em}.prose a{color:#5850ec;text-decoration:none;font-weight:600}.prose strong{color:#161e2e;font-weight:600}.prose ol{counter-reset:list-counter;margin-top:1.25em;margin-bottom:1.25em}.prose ol>li{position:relative;counter-increment:list-counter;padding-left:1.75em}.prose ol>li:before{content:counter(list-counter) \".\";position:absolute;font-weight:400;color:#6b7280}.prose ul>li{position:relative;padding-left:1.75em}.prose ul>li:before{content:\"\";position:absolute;background-color:#d2d6dc;border-radius:50%;width:.375em;height:.375em;top:.6875em;left:.25em}.prose hr{border-color:#e5e7eb;border-top-width:1px;margin-top:3em;margin-bottom:3em}.prose blockquote{font-weight:500;font-style:italic;color:#161e2e;border-left-width:.25rem;border-left-color:#e5e7eb;quotes:\"\\201C\"\"\\201D\"\"\\2018\"\"\\2019\";margin-top:1.6em;margin-bottom:1.6em;padding-left:1em}.prose blockquote p:first-of-type:before{content:open-quote}.prose blockquote p:last-of-type:after{content:close-quote}.prose h1{color:#1a202c;font-weight:800;font-size:2.25em;margin-top:0;margin-bottom:.8888889em;line-height:1.1111111}.prose h2{color:#1a202c;font-weight:700;font-size:1.5em;margin-top:2em;margin-bottom:1em;line-height:1.3333333}.prose h3{font-size:1.25em;margin-top:1.6em;margin-bottom:.6em;line-height:1.6}.prose h3,.prose h4{color:#1a202c;font-weight:600}.prose h4{margin-top:1.5em;margin-bottom:.5em;line-height:1.5}.prose figure figcaption{color:#6b7280;font-size:.875em;line-height:1.4285714;margin-top:.8571429em}.prose code{color:#161e2e;font-weight:600;font-size:.875em}.prose code:after,.prose code:before{content:\"`\"}.prose pre{color:#e5e7eb;background-color:#252f3f;overflow-x:auto;font-size:.875em;line-height:1.7142857;margin-top:1.7142857em;margin-bottom:1.7142857em;border-radius:.375rem;padding:.8571429em 1.1428571em}.prose pre code{background-color:transparent;border-width:0;border-radius:0;padding:0;font-weight:400;color:inherit;font-size:inherit;font-family:inherit;line-height:inherit}.prose pre code:after,.prose pre code:before{content:\"\"}.prose table{width:100%;table-layout:auto;text-align:left;margin-top:2em;margin-bottom:2em;font-size:.875em;line-height:1.7142857}.prose thead{color:#161e2e;font-weight:600;border-bottom-width:1px;border-bottom-color:#d2d6dc}.prose thead th{vertical-align:bottom;padding-right:.5714286em;padding-bottom:.5714286em;padding-left:.5714286em}.prose tbody tr{border-bottom-width:1px;border-bottom-color:#e5e7eb}.prose tbody tr:last-child{border-bottom-width:0}.prose tbody td{vertical-align:top;padding:.5714286em}.prose{font-size:1rem;line-height:1.75}.prose p{margin-top:1.25em;margin-bottom:1.25em}.prose figure,.prose img,.prose video{margin-top:2em;margin-bottom:2em}.prose figure>*{margin-top:0;margin-bottom:0}.prose h2 code{font-size:.875em}.prose h3 code{font-size:.9em}.prose ul{margin-top:1.25em;margin-bottom:1.25em}.prose li{margin-top:.5em;margin-bottom:.5em}.prose ol>li:before{left:0}.prose>ul>li p{margin-top:.75em;margin-bottom:.75em}.prose>ul>li>:first-child{margin-top:1.25em}.prose>ul>li>:last-child{margin-bottom:1.25em}.prose>ol>li>:first-child{margin-top:1.25em}.prose>ol>li>:last-child{margin-bottom:1.25em}.prose ol ol,.prose ol ul,.prose ul ol,.prose ul ul{margin-top:.75em;margin-bottom:.75em}.prose h2+*,.prose h3+*,.prose h4+*,.prose hr+*{margin-top:0}.prose thead th:first-child{padding-left:0}.prose thead th:last-child{padding-right:0}.prose tbody td:first-child{padding-left:0}.prose tbody td:last-child{padding-right:0}.prose>:first-child{margin-top:0}.prose>:last-child{margin-bottom:0}.prose h1,.prose h2,.prose h3,.prose h4{color:#161e2e}.prose-sm{font-size:.875rem;line-height:1.7142857}.prose-sm p{margin-top:1.1428571em;margin-bottom:1.1428571em}.prose-sm [class~=lead]{font-size:1.2857143em;line-height:1.5555556;margin-top:.8888889em;margin-bottom:.8888889em}.prose-sm blockquote{margin-top:1.3333333em;margin-bottom:1.3333333em;padding-left:1.1111111em}.prose-sm h1{font-size:2.1428571em;margin-top:0;margin-bottom:.8em;line-height:1.2}.prose-sm h2{font-size:1.4285714em;margin-top:1.6em;margin-bottom:.8em;line-height:1.4}.prose-sm h3{font-size:1.2857143em;margin-top:1.5555556em;margin-bottom:.4444444em;line-height:1.5555556}.prose-sm h4{margin-top:1.4285714em;margin-bottom:.5714286em;line-height:1.4285714}.prose-sm figure,.prose-sm img,.prose-sm video{margin-top:1.7142857em;margin-bottom:1.7142857em}.prose-sm figure>*{margin-top:0;margin-bottom:0}.prose-sm figure figcaption{font-size:.8571429em;line-height:1.3333333;margin-top:.6666667em}.prose-sm code{font-size:.8571429em}.prose-sm h2 code{font-size:.9em}.prose-sm h3 code{font-size:.8888889em}.prose-sm pre{font-size:.8571429em;line-height:1.6666667;margin-top:1.6666667em;margin-bottom:1.6666667em;border-radius:.25rem;padding:.6666667em 1em}.prose-sm ol,.prose-sm ul{margin-top:1.1428571em;margin-bottom:1.1428571em}.prose-sm li{margin-top:.2857143em;margin-bottom:.2857143em}.prose-sm ol>li{padding-left:1.5714286em}.prose-sm ol>li:before{left:0}.prose-sm ul>li{padding-left:1.5714286em}.prose-sm ul>li:before{height:.3571429em;width:.3571429em;top:.67857em;left:.2142857em}.prose-sm>ul>li p{margin-top:.5714286em;margin-bottom:.5714286em}.prose-sm>ul>li>:first-child{margin-top:1.1428571em}.prose-sm>ul>li>:last-child{margin-bottom:1.1428571em}.prose-sm>ol>li>:first-child{margin-top:1.1428571em}.prose-sm>ol>li>:last-child{margin-bottom:1.1428571em}.prose-sm ol ol,.prose-sm ol ul,.prose-sm ul ol,.prose-sm ul ul{margin-top:.5714286em;margin-bottom:.5714286em}.prose-sm hr{margin-top:2.8571429em;margin-bottom:2.8571429em}.prose-sm h2+*,.prose-sm h3+*,.prose-sm h4+*,.prose-sm hr+*{margin-top:0}.prose-sm table{font-size:.8571429em;line-height:1.5}.prose-sm thead th{padding-right:1em;padding-bottom:.6666667em;padding-left:1em}.prose-sm thead th:first-child{padding-left:0}.prose-sm thead th:last-child{padding-right:0}.prose-sm tbody td{padding:.6666667em 1em}.prose-sm tbody td:first-child{padding-left:0}.prose-sm tbody td:last-child{padding-right:0}.prose-sm>:first-child{margin-top:0}.prose-sm>:last-child{margin-bottom:0}.prose-lg{font-size:1.125rem;line-height:1.7777778}.prose-lg p{margin-top:1.3333333em;margin-bottom:1.3333333em}.prose-lg [class~=lead]{font-size:1.2222222em;line-height:1.4545455;margin-top:1.0909091em;margin-bottom:1.0909091em}.prose-lg blockquote{margin-top:1.6666667em;margin-bottom:1.6666667em;padding-left:1em}.prose-lg h1{font-size:2.6666667em;margin-top:0;margin-bottom:.8333333em;line-height:1}.prose-lg h2{font-size:1.6666667em;margin-top:1.8666667em;margin-bottom:1.0666667em;line-height:1.3333333}.prose-lg h3{font-size:1.3333333em;margin-top:1.6666667em;margin-bottom:.6666667em;line-height:1.5}.prose-lg h4{margin-top:1.7777778em;margin-bottom:.4444444em;line-height:1.5555556}.prose-lg figure,.prose-lg img,.prose-lg video{margin-top:1.7777778em;margin-bottom:1.7777778em}.prose-lg figure>*{margin-top:0;margin-bottom:0}.prose-lg figure figcaption{font-size:.8888889em;line-height:1.5;margin-top:1em}.prose-lg code{font-size:.8888889em}.prose-lg h2 code{font-size:.8666667em}.prose-lg h3 code{font-size:.875em}.prose-lg pre{font-size:.8888889em;line-height:1.75;margin-top:2em;margin-bottom:2em;border-radius:.375rem;padding:1em 1.5em}.prose-lg ol,.prose-lg ul{margin-top:1.3333333em;margin-bottom:1.3333333em}.prose-lg li{margin-top:.6666667em;margin-bottom:.6666667em}.prose-lg ol>li{padding-left:1.6666667em}.prose-lg ol>li:before{left:0}.prose-lg ul>li{padding-left:1.6666667em}.prose-lg ul>li:before{width:.3333333em;height:.3333333em;top:.72222em;left:.2222222em}.prose-lg>ul>li p{margin-top:.8888889em;margin-bottom:.8888889em}.prose-lg>ul>li>:first-child{margin-top:1.3333333em}.prose-lg>ul>li>:last-child{margin-bottom:1.3333333em}.prose-lg>ol>li>:first-child{margin-top:1.3333333em}.prose-lg>ol>li>:last-child{margin-bottom:1.3333333em}.prose-lg ol ol,.prose-lg ol ul,.prose-lg ul ol,.prose-lg ul ul{margin-top:.8888889em;margin-bottom:.8888889em}.prose-lg hr{margin-top:3.1111111em;margin-bottom:3.1111111em}.prose-lg h2+*,.prose-lg h3+*,.prose-lg h4+*,.prose-lg hr+*{margin-top:0}.prose-lg table{font-size:.8888889em;line-height:1.5}.prose-lg thead th{padding-right:.75em;padding-bottom:.75em;padding-left:.75em}.prose-lg thead th:first-child{padding-left:0}.prose-lg thead th:last-child{padding-right:0}.prose-lg tbody td{padding:.75em}.prose-lg tbody td:first-child{padding-left:0}.prose-lg tbody td:last-child{padding-right:0}.prose-lg>:first-child{margin-top:0}.prose-lg>:last-child{margin-bottom:0}.prose-xl{font-size:1.25rem;line-height:1.8}.prose-xl p{margin-top:1.2em;margin-bottom:1.2em}.prose-xl [class~=lead]{font-size:1.2em;line-height:1.5;margin-top:1em;margin-bottom:1em}.prose-xl blockquote{margin-top:1.6em;margin-bottom:1.6em;padding-left:1.0666667em}.prose-xl h1{font-size:2.8em;margin-top:0;margin-bottom:.8571429em;line-height:1}.prose-xl h2{font-size:1.8em;margin-top:1.5555556em;margin-bottom:.8888889em;line-height:1.1111111}.prose-xl h3{font-size:1.5em;margin-top:1.6em;margin-bottom:.6666667em;line-height:1.3333333}.prose-xl h4{margin-top:1.8em;margin-bottom:.6em;line-height:1.6}.prose-xl figure,.prose-xl img,.prose-xl video{margin-top:2em;margin-bottom:2em}.prose-xl figure>*{margin-top:0;margin-bottom:0}.prose-xl figure figcaption{font-size:.9em;line-height:1.5555556;margin-top:1em}.prose-xl code{font-size:.9em}.prose-xl h2 code{font-size:.8611111em}.prose-xl h3 code,.prose-xl pre{font-size:.9em}.prose-xl pre{line-height:1.7777778;margin-top:2em;margin-bottom:2em;border-radius:.5rem;padding:1.1111111em 1.3333333em}.prose-xl ol,.prose-xl ul{margin-top:1.2em;margin-bottom:1.2em}.prose-xl li{margin-top:.6em;margin-bottom:.6em}.prose-xl ol>li{padding-left:1.8em}.prose-xl ol>li:before{left:0}.prose-xl ul>li{padding-left:1.8em}.prose-xl ul>li:before{width:.35em;height:.35em;top:.725em;left:.25em}.prose-xl>ul>li p{margin-top:.8em;margin-bottom:.8em}.prose-xl>ul>li>:first-child{margin-top:1.2em}.prose-xl>ul>li>:last-child{margin-bottom:1.2em}.prose-xl>ol>li>:first-child{margin-top:1.2em}.prose-xl>ol>li>:last-child{margin-bottom:1.2em}.prose-xl ol ol,.prose-xl ol ul,.prose-xl ul ol,.prose-xl ul ul{margin-top:.8em;margin-bottom:.8em}.prose-xl hr{margin-top:2.8em;margin-bottom:2.8em}.prose-xl h2+*,.prose-xl h3+*,.prose-xl h4+*,.prose-xl hr+*{margin-top:0}.prose-xl table{font-size:.9em;line-height:1.5555556}.prose-xl thead th{padding-right:.6666667em;padding-bottom:.8888889em;padding-left:.6666667em}.prose-xl thead th:first-child{padding-left:0}.prose-xl thead th:last-child{padding-right:0}.prose-xl tbody td{padding:.8888889em .6666667em}.prose-xl tbody td:first-child{padding-left:0}.prose-xl tbody td:last-child{padding-right:0}.prose-xl>:first-child{margin-top:0}.prose-xl>:last-child{margin-bottom:0}.prose-2xl{font-size:1.5rem;line-height:1.6666667}.prose-2xl p{margin-top:1.3333333em;margin-bottom:1.3333333em}.prose-2xl [class~=lead]{font-size:1.25em;line-height:1.4666667;margin-top:1.0666667em;margin-bottom:1.0666667em}.prose-2xl blockquote{margin-top:1.7777778em;margin-bottom:1.7777778em;padding-left:1.1111111em}.prose-2xl h1{font-size:2.6666667em;margin-top:0;margin-bottom:.875em;line-height:1}.prose-2xl h2{font-size:2em;margin-top:1.5em;margin-bottom:.8333333em;line-height:1.0833333}.prose-2xl h3{font-size:1.5em;margin-top:1.5555556em;margin-bottom:.6666667em;line-height:1.2222222}.prose-2xl h4{margin-top:1.6666667em;margin-bottom:.6666667em;line-height:1.5}.prose-2xl figure,.prose-2xl img,.prose-2xl video{margin-top:2em;margin-bottom:2em}.prose-2xl figure>*{margin-top:0;margin-bottom:0}.prose-2xl figure figcaption{font-size:.8333333em;line-height:1.6;margin-top:1em}.prose-2xl code{font-size:.8333333em}.prose-2xl h2 code{font-size:.875em}.prose-2xl h3 code{font-size:.8888889em}.prose-2xl pre{font-size:.8333333em;line-height:1.8;margin-top:2em;margin-bottom:2em;border-radius:.5rem;padding:1.2em 1.6em}.prose-2xl ol,.prose-2xl ul{margin-top:1.3333333em;margin-bottom:1.3333333em}.prose-2xl li{margin-top:.5em;margin-bottom:.5em}.prose-2xl ol>li{padding-left:1.6666667em}.prose-2xl ol>li:before{left:0}.prose-2xl ul>li{padding-left:1.6666667em}.prose-2xl ul>li:before{width:.3333333em;height:.3333333em;top:.66667em;left:.25em}.prose-2xl>ul>li p{margin-top:.8333333em;margin-bottom:.8333333em}.prose-2xl>ul>li>:first-child{margin-top:1.3333333em}.prose-2xl>ul>li>:last-child{margin-bottom:1.3333333em}.prose-2xl>ol>li>:first-child{margin-top:1.3333333em}.prose-2xl>ol>li>:last-child{margin-bottom:1.3333333em}.prose-2xl ol ol,.prose-2xl ol ul,.prose-2xl ul ol,.prose-2xl ul ul{margin-top:.6666667em;margin-bottom:.6666667em}.prose-2xl hr{margin-top:3em;margin-bottom:3em}.prose-2xl h2+*,.prose-2xl h3+*,.prose-2xl h4+*,.prose-2xl hr+*{margin-top:0}.prose-2xl table{font-size:.8333333em;line-height:1.4}.prose-2xl thead th{padding-right:.6em;padding-bottom:.8em;padding-left:.6em}.prose-2xl thead th:first-child{padding-left:0}.prose-2xl thead th:last-child{padding-right:0}.prose-2xl tbody td{padding:.8em .6em}.prose-2xl tbody td:first-child{padding-left:0}.prose-2xl tbody td:last-child{padding-right:0}.prose-2xl>:first-child{margin-top:0}.prose-2xl>:last-child{margin-bottom:0}.divide-y>:not(template)~:not(template){--divide-y-reverse:0;border-top-width:calc(1px*(1 - var(--divide-y-reverse)));border-bottom-width:calc(1px*var(--divide-y-reverse))}.divide-gray-200>:not(template)~:not(template){--divide-opacity:1;border-color:#e5e7eb;border-color:rgba(229,231,235,var(--divide-opacity))}.bg-white{--bg-opacity:1;background-color:#fff;background-color:rgba(255,255,255,var(--bg-opacity))}.bg-gray-50{--bg-opacity:1;background-color:#f9fafb;background-color:rgba(249,250,251,var(--bg-opacity))}.bg-green-100{--bg-opacity:1;background-color:#def7ec;background-color:rgba(222,247,236,var(--bg-opacity))}.border-gray-200{--border-opacity:1;border-color:#e5e7eb;border-color:rgba(229,231,235,var(--border-opacity))}.rounded-sm{border-radius:.125rem}.rounded{border-radius:.25rem}.rounded-md{border-radius:.375rem}.rounded-lg{border-radius:.5rem}.rounded-full{border-radius:9999px}.border-dashed{border-style:dashed}.border-4{border-width:4px}.border{border-width:1px}.border-b{border-bottom-width:1px}.block{display:block}.inline-block{display:inline-block}.flex{display:flex}.inline-flex{display:inline-flex}.table{display:table}.grid{display:grid}.flex-col{flex-direction:column}.items-center{align-items:center}.content-center{align-content:center}.justify-center{justify-content:center}.flex-shrink-0{flex-shrink:0}.font-normal{font-weight:400}.font-medium{font-weight:500}.font-semibold{font-weight:600}.font-bold{font-weight:700}.h-10{height:2.5rem}.h-96{height:24rem}.text-xs{font-size:.75rem}.text-sm{font-size:.875rem}.text-xl{font-size:1.25rem}.text-3xl{font-size:1.875rem}.leading-4{line-height:1rem}.leading-5{line-height:1.25rem}.leading-tight{line-height:1.25}.mx-auto{margin-left:auto;margin-right:auto}.-my-2{margin-top:-.5rem;margin-bottom:-.5rem}.mt-1{margin-top:.25rem}.mt-2{margin-top:.5rem}.mb-2{margin-bottom:.5rem}.mt-4{margin-top:1rem}.ml-4{margin-left:1rem}.max-w-sm{max-width:24rem}.max-w-7xl{max-width:80rem}.min-w-full{min-width:100%}.overflow-hidden{overflow:hidden}.overflow-x-auto{overflow-x:auto}.px-0{padding-left:0;padding-right:0}.py-2{padding-top:.5rem;padding-bottom:.5rem}.px-2{padding-left:.5rem;padding-right:.5rem}.py-3{padding-top:.75rem;padding-bottom:.75rem}.px-3{padding-left:.75rem;padding-right:.75rem}.py-4{padding-top:1rem;padding-bottom:1rem}.px-4{padding-left:1rem;padding-right:1rem}.py-6{padding-top:1.5rem;padding-bottom:1.5rem}.px-6{padding-left:1.5rem;padding-right:1.5rem}.px-8{padding-left:2rem;padding-right:2rem}.pt-0{padding-top:0}.pb-4{padding-bottom:1rem}.shadow{box-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px 0 rgba(0,0,0,.06)}.shadow-lg{box-shadow:0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -2px rgba(0,0,0,.05)}.focus\\:shadow-2xl:focus{box-shadow:0 25px 50px -12px rgba(0,0,0,.25)}.text-left{text-align:left}.text-right{text-align:right}.text-gray-500{--text-opacity:1;color:#6b7280;color:rgba(107,114,128,var(--text-opacity))}.text-gray-600{--text-opacity:1;color:#4b5563;color:rgba(75,85,99,var(--text-opacity))}.text-gray-700{--text-opacity:1;color:#374151;color:rgba(55,65,81,var(--text-opacity))}.text-gray-900{--text-opacity:1;color:#161e2e;color:rgba(22,30,46,var(--text-opacity))}.text-red-700{--text-opacity:1;color:#c81e1e;color:rgba(200,30,30,var(--text-opacity))}.text-green-600{--text-opacity:1;color:#057a55;color:rgba(5,122,85,var(--text-opacity))}.text-green-800{--text-opacity:1;color:#03543f;color:rgba(3,84,63,var(--text-opacity))}.text-blue-600{--text-opacity:1;color:#1c64f2;color:rgba(28,100,242,var(--text-opacity))}.text-indigo-600{--text-opacity:1;color:#5850ec;color:rgba(88,80,236,var(--text-opacity))}.hover\\:text-indigo-900:hover{--text-opacity:1;color:#362f78;color:rgba(54,47,120,var(--text-opacity))}.uppercase{text-transform:uppercase}.hover\\:underline:hover{text-decoration:underline}.tracking-wide{letter-spacing:.025em}.tracking-wider{letter-spacing:.05em}.align-middle{vertical-align:middle}.whitespace-no-wrap{white-space:nowrap}.w-10{width:2.5rem}.gap-4{grid-gap:1rem;gap:1rem}.transform{--transform-translate-x:0;--transform-translate-y:0;--transform-rotate:0;--transform-skew-x:0;--transform-skew-y:0;--transform-scale-x:1;--transform-scale-y:1;transform:translateX(var(--transform-translate-x)) translateY(var(--transform-translate-y)) rotate(var(--transform-rotate)) skewX(var(--transform-skew-x)) skewY(var(--transform-skew-y)) scaleX(var(--transform-scale-x)) scaleY(var(--transform-scale-y))}.transition{transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform}.ease-in-out{transition-timing-function:cubic-bezier(.4,0,.2,1)}.duration-150{transition-duration:.15s}@-webkit-keyframes spin{to{transform:rotate(1turn)}}@keyframes spin{to{transform:rotate(1turn)}}@-webkit-keyframes ping{75%,to{transform:scale(2);opacity:0}}@keyframes ping{75%,to{transform:scale(2);opacity:0}}@-webkit-keyframes pulse{50%{opacity:.5}}@keyframes pulse{50%{opacity:.5}}@-webkit-keyframes bounce{0%,to{transform:translateY(-25%);-webkit-animation-timing-function:cubic-bezier(.8,0,1,1);animation-timing-function:cubic-bezier(.8,0,1,1)}50%{transform:none;-webkit-animation-timing-function:cubic-bezier(0,0,.2,1);animation-timing-function:cubic-bezier(0,0,.2,1)}}@keyframes bounce{0%,to{transform:translateY(-25%);-webkit-animation-timing-function:cubic-bezier(.8,0,1,1);animation-timing-function:cubic-bezier(.8,0,1,1)}50%{transform:none;-webkit-animation-timing-function:cubic-bezier(0,0,.2,1);animation-timing-function:cubic-bezier(0,0,.2,1)}}@media (min-width:640px){.sm\\:container{width:100%}}@media (min-width:640px) and (min-width:640px){.sm\\:container{max-width:640px}}@media (min-width:640px) and (min-width:768px){.sm\\:container{max-width:768px}}@media (min-width:640px) and (min-width:1024px){.sm\\:container{max-width:1024px}}@media (min-width:640px) and (min-width:1280px){.sm\\:container{max-width:1280px}}@media (min-width:640px){.sm\\:prose{color:#374151;max-width:65ch}.sm\\:prose [class~=lead]{color:#4b5563;font-size:1.25em;line-height:1.6;margin-top:1.2em;margin-bottom:1.2em}.sm\\:prose a{color:#5850ec;text-decoration:none;font-weight:600}.sm\\:prose strong{color:#161e2e;font-weight:600}.sm\\:prose ol{counter-reset:list-counter;margin-top:1.25em;margin-bottom:1.25em}.sm\\:prose ol>li{position:relative;counter-increment:list-counter;padding-left:1.75em}.sm\\:prose ol>li:before{content:counter(list-counter) \".\";position:absolute;font-weight:400;color:#6b7280}.sm\\:prose ul>li{position:relative;padding-left:1.75em}.sm\\:prose ul>li:before{content:\"\";position:absolute;background-color:#d2d6dc;border-radius:50%;width:.375em;height:.375em;top:.6875em;left:.25em}.sm\\:prose hr{border-color:#e5e7eb;border-top-width:1px;margin-top:3em;margin-bottom:3em}.sm\\:prose blockquote{font-weight:500;font-style:italic;color:#161e2e;border-left-width:.25rem;border-left-color:#e5e7eb;quotes:\"\\201C\"\"\\201D\"\"\\2018\"\"\\2019\";margin-top:1.6em;margin-bottom:1.6em;padding-left:1em}.sm\\:prose blockquote p:first-of-type:before{content:open-quote}.sm\\:prose blockquote p:last-of-type:after{content:close-quote}.sm\\:prose h1{color:#1a202c;font-weight:800;font-size:2.25em;margin-top:0;margin-bottom:.8888889em;line-height:1.1111111}.sm\\:prose h2{color:#1a202c;font-weight:700;font-size:1.5em;margin-top:2em;margin-bottom:1em;line-height:1.3333333}.sm\\:prose h3{font-size:1.25em;margin-top:1.6em;margin-bottom:.6em;line-height:1.6}.sm\\:prose h3,.sm\\:prose h4{color:#1a202c;font-weight:600}.sm\\:prose h4{margin-top:1.5em;margin-bottom:.5em;line-height:1.5}.sm\\:prose figure figcaption{color:#6b7280;font-size:.875em;line-height:1.4285714;margin-top:.8571429em}.sm\\:prose code{color:#161e2e;font-weight:600;font-size:.875em}.sm\\:prose code:after,.sm\\:prose code:before{content:\"`\"}.sm\\:prose pre{color:#e5e7eb;background-color:#252f3f;overflow-x:auto;font-size:.875em;line-height:1.7142857;margin-top:1.7142857em;margin-bottom:1.7142857em;border-radius:.375rem;padding:.8571429em 1.1428571em}.sm\\:prose pre code{background-color:transparent;border-width:0;border-radius:0;padding:0;font-weight:400;color:inherit;font-size:inherit;font-family:inherit;line-height:inherit}.sm\\:prose pre code:after,.sm\\:prose pre code:before{content:\"\"}.sm\\:prose table{width:100%;table-layout:auto;text-align:left;margin-top:2em;margin-bottom:2em;font-size:.875em;line-height:1.7142857}.sm\\:prose thead{color:#161e2e;font-weight:600;border-bottom-width:1px;border-bottom-color:#d2d6dc}.sm\\:prose thead th{vertical-align:bottom;padding-right:.5714286em;padding-bottom:.5714286em;padding-left:.5714286em}.sm\\:prose tbody tr{border-bottom-width:1px;border-bottom-color:#e5e7eb}.sm\\:prose tbody tr:last-child{border-bottom-width:0}.sm\\:prose tbody td{vertical-align:top;padding:.5714286em}.sm\\:prose{font-size:1rem;line-height:1.75}.sm\\:prose p{margin-top:1.25em;margin-bottom:1.25em}.sm\\:prose figure,.sm\\:prose img,.sm\\:prose video{margin-top:2em;margin-bottom:2em}.sm\\:prose figure>*{margin-top:0;margin-bottom:0}.sm\\:prose h2 code{font-size:.875em}.sm\\:prose h3 code{font-size:.9em}.sm\\:prose ul{margin-top:1.25em;margin-bottom:1.25em}.sm\\:prose li{margin-top:.5em;margin-bottom:.5em}.sm\\:prose ol>li:before{left:0}.sm\\:prose>ul>li p{margin-top:.75em;margin-bottom:.75em}.sm\\:prose>ul>li>:first-child{margin-top:1.25em}.sm\\:prose>ul>li>:last-child{margin-bottom:1.25em}.sm\\:prose>ol>li>:first-child{margin-top:1.25em}.sm\\:prose>ol>li>:last-child{margin-bottom:1.25em}.sm\\:prose ol ol,.sm\\:prose ol ul,.sm\\:prose ul ol,.sm\\:prose ul ul{margin-top:.75em;margin-bottom:.75em}.sm\\:prose h2+*,.sm\\:prose h3+*,.sm\\:prose h4+*,.sm\\:prose hr+*{margin-top:0}.sm\\:prose thead th:first-child{padding-left:0}.sm\\:prose thead th:last-child{padding-right:0}.sm\\:prose tbody td:first-child{padding-left:0}.sm\\:prose tbody td:last-child{padding-right:0}.sm\\:prose>:first-child{margin-top:0}.sm\\:prose>:last-child{margin-bottom:0}.sm\\:prose h1,.sm\\:prose h2,.sm\\:prose h3,.sm\\:prose h4{color:#161e2e}.sm\\:prose-sm{font-size:.875rem;line-height:1.7142857}.sm\\:prose-sm p{margin-top:1.1428571em;margin-bottom:1.1428571em}.sm\\:prose-sm [class~=lead]{font-size:1.2857143em;line-height:1.5555556;margin-top:.8888889em;margin-bottom:.8888889em}.sm\\:prose-sm blockquote{margin-top:1.3333333em;margin-bottom:1.3333333em;padding-left:1.1111111em}.sm\\:prose-sm h1{font-size:2.1428571em;margin-top:0;margin-bottom:.8em;line-height:1.2}.sm\\:prose-sm h2{font-size:1.4285714em;margin-top:1.6em;margin-bottom:.8em;line-height:1.4}.sm\\:prose-sm h3{font-size:1.2857143em;margin-top:1.5555556em;margin-bottom:.4444444em;line-height:1.5555556}.sm\\:prose-sm h4{margin-top:1.4285714em;margin-bottom:.5714286em;line-height:1.4285714}.sm\\:prose-sm figure,.sm\\:prose-sm img,.sm\\:prose-sm video{margin-top:1.7142857em;margin-bottom:1.7142857em}.sm\\:prose-sm figure>*{margin-top:0;margin-bottom:0}.sm\\:prose-sm figure figcaption{font-size:.8571429em;line-height:1.3333333;margin-top:.6666667em}.sm\\:prose-sm code{font-size:.8571429em}.sm\\:prose-sm h2 code{font-size:.9em}.sm\\:prose-sm h3 code{font-size:.8888889em}.sm\\:prose-sm pre{font-size:.8571429em;line-height:1.6666667;margin-top:1.6666667em;margin-bottom:1.6666667em;border-radius:.25rem;padding:.6666667em 1em}.sm\\:prose-sm ol,.sm\\:prose-sm ul{margin-top:1.1428571em;margin-bottom:1.1428571em}.sm\\:prose-sm li{margin-top:.2857143em;margin-bottom:.2857143em}.sm\\:prose-sm ol>li{padding-left:1.5714286em}.sm\\:prose-sm ol>li:before{left:0}.sm\\:prose-sm ul>li{padding-left:1.5714286em}.sm\\:prose-sm ul>li:before{height:.3571429em;width:.3571429em;top:.67857em;left:.2142857em}.sm\\:prose-sm>ul>li p{margin-top:.5714286em;margin-bottom:.5714286em}.sm\\:prose-sm>ul>li>:first-child{margin-top:1.1428571em}.sm\\:prose-sm>ul>li>:last-child{margin-bottom:1.1428571em}.sm\\:prose-sm>ol>li>:first-child{margin-top:1.1428571em}.sm\\:prose-sm>ol>li>:last-child{margin-bottom:1.1428571em}.sm\\:prose-sm ol ol,.sm\\:prose-sm ol ul,.sm\\:prose-sm ul ol,.sm\\:prose-sm ul ul{margin-top:.5714286em;margin-bottom:.5714286em}.sm\\:prose-sm hr{margin-top:2.8571429em;margin-bottom:2.8571429em}.sm\\:prose-sm h2+*,.sm\\:prose-sm h3+*,.sm\\:prose-sm h4+*,.sm\\:prose-sm hr+*{margin-top:0}.sm\\:prose-sm table{font-size:.8571429em;line-height:1.5}.sm\\:prose-sm thead th{padding-right:1em;padding-bottom:.6666667em;padding-left:1em}.sm\\:prose-sm thead th:first-child{padding-left:0}.sm\\:prose-sm thead th:last-child{padding-right:0}.sm\\:prose-sm tbody td{padding:.6666667em 1em}.sm\\:prose-sm tbody td:first-child{padding-left:0}.sm\\:prose-sm tbody td:last-child{padding-right:0}.sm\\:prose-sm>:first-child{margin-top:0}.sm\\:prose-sm>:last-child{margin-bottom:0}.sm\\:prose-lg{font-size:1.125rem;line-height:1.7777778}.sm\\:prose-lg p{margin-top:1.3333333em;margin-bottom:1.3333333em}.sm\\:prose-lg [class~=lead]{font-size:1.2222222em;line-height:1.4545455;margin-top:1.0909091em;margin-bottom:1.0909091em}.sm\\:prose-lg blockquote{margin-top:1.6666667em;margin-bottom:1.6666667em;padding-left:1em}.sm\\:prose-lg h1{font-size:2.6666667em;margin-top:0;margin-bottom:.8333333em;line-height:1}.sm\\:prose-lg h2{font-size:1.6666667em;margin-top:1.8666667em;margin-bottom:1.0666667em;line-height:1.3333333}.sm\\:prose-lg h3{font-size:1.3333333em;margin-top:1.6666667em;margin-bottom:.6666667em;line-height:1.5}.sm\\:prose-lg h4{margin-top:1.7777778em;margin-bottom:.4444444em;line-height:1.5555556}.sm\\:prose-lg figure,.sm\\:prose-lg img,.sm\\:prose-lg video{margin-top:1.7777778em;margin-bottom:1.7777778em}.sm\\:prose-lg figure>*{margin-top:0;margin-bottom:0}.sm\\:prose-lg figure figcaption{font-size:.8888889em;line-height:1.5;margin-top:1em}.sm\\:prose-lg code{font-size:.8888889em}.sm\\:prose-lg h2 code{font-size:.8666667em}.sm\\:prose-lg h3 code{font-size:.875em}.sm\\:prose-lg pre{font-size:.8888889em;line-height:1.75;margin-top:2em;margin-bottom:2em;border-radius:.375rem;padding:1em 1.5em}.sm\\:prose-lg ol,.sm\\:prose-lg ul{margin-top:1.3333333em;margin-bottom:1.3333333em}.sm\\:prose-lg li{margin-top:.6666667em;margin-bottom:.6666667em}.sm\\:prose-lg ol>li{padding-left:1.6666667em}.sm\\:prose-lg ol>li:before{left:0}.sm\\:prose-lg ul>li{padding-left:1.6666667em}.sm\\:prose-lg ul>li:before{width:.3333333em;height:.3333333em;top:.72222em;left:.2222222em}.sm\\:prose-lg>ul>li p{margin-top:.8888889em;margin-bottom:.8888889em}.sm\\:prose-lg>ul>li>:first-child{margin-top:1.3333333em}.sm\\:prose-lg>ul>li>:last-child{margin-bottom:1.3333333em}.sm\\:prose-lg>ol>li>:first-child{margin-top:1.3333333em}.sm\\:prose-lg>ol>li>:last-child{margin-bottom:1.3333333em}.sm\\:prose-lg ol ol,.sm\\:prose-lg ol ul,.sm\\:prose-lg ul ol,.sm\\:prose-lg ul ul{margin-top:.8888889em;margin-bottom:.8888889em}.sm\\:prose-lg hr{margin-top:3.1111111em;margin-bottom:3.1111111em}.sm\\:prose-lg h2+*,.sm\\:prose-lg h3+*,.sm\\:prose-lg h4+*,.sm\\:prose-lg hr+*{margin-top:0}.sm\\:prose-lg table{font-size:.8888889em;line-height:1.5}.sm\\:prose-lg thead th{padding-right:.75em;padding-bottom:.75em;padding-left:.75em}.sm\\:prose-lg thead th:first-child{padding-left:0}.sm\\:prose-lg thead th:last-child{padding-right:0}.sm\\:prose-lg tbody td{padding:.75em}.sm\\:prose-lg tbody td:first-child{padding-left:0}.sm\\:prose-lg tbody td:last-child{padding-right:0}.sm\\:prose-lg>:first-child{margin-top:0}.sm\\:prose-lg>:last-child{margin-bottom:0}.sm\\:prose-xl{font-size:1.25rem;line-height:1.8}.sm\\:prose-xl p{margin-top:1.2em;margin-bottom:1.2em}.sm\\:prose-xl [class~=lead]{font-size:1.2em;line-height:1.5;margin-top:1em;margin-bottom:1em}.sm\\:prose-xl blockquote{margin-top:1.6em;margin-bottom:1.6em;padding-left:1.0666667em}.sm\\:prose-xl h1{font-size:2.8em;margin-top:0;margin-bottom:.8571429em;line-height:1}.sm\\:prose-xl h2{font-size:1.8em;margin-top:1.5555556em;margin-bottom:.8888889em;line-height:1.1111111}.sm\\:prose-xl h3{font-size:1.5em;margin-top:1.6em;margin-bottom:.6666667em;line-height:1.3333333}.sm\\:prose-xl h4{margin-top:1.8em;margin-bottom:.6em;line-height:1.6}.sm\\:prose-xl figure,.sm\\:prose-xl img,.sm\\:prose-xl video{margin-top:2em;margin-bottom:2em}.sm\\:prose-xl figure>*{margin-top:0;margin-bottom:0}.sm\\:prose-xl figure figcaption{font-size:.9em;line-height:1.5555556;margin-top:1em}.sm\\:prose-xl code{font-size:.9em}.sm\\:prose-xl h2 code{font-size:.8611111em}.sm\\:prose-xl h3 code{font-size:.9em}.sm\\:prose-xl pre{font-size:.9em;line-height:1.7777778;margin-top:2em;margin-bottom:2em;border-radius:.5rem;padding:1.1111111em 1.3333333em}.sm\\:prose-xl ol,.sm\\:prose-xl ul{margin-top:1.2em;margin-bottom:1.2em}.sm\\:prose-xl li{margin-top:.6em;margin-bottom:.6em}.sm\\:prose-xl ol>li{padding-left:1.8em}.sm\\:prose-xl ol>li:before{left:0}.sm\\:prose-xl ul>li{padding-left:1.8em}.sm\\:prose-xl ul>li:before{width:.35em;height:.35em;top:.725em;left:.25em}.sm\\:prose-xl>ul>li p{margin-top:.8em;margin-bottom:.8em}.sm\\:prose-xl>ul>li>:first-child{margin-top:1.2em}.sm\\:prose-xl>ul>li>:last-child{margin-bottom:1.2em}.sm\\:prose-xl>ol>li>:first-child{margin-top:1.2em}.sm\\:prose-xl>ol>li>:last-child{margin-bottom:1.2em}.sm\\:prose-xl ol ol,.sm\\:prose-xl ol ul,.sm\\:prose-xl ul ol,.sm\\:prose-xl ul ul{margin-top:.8em;margin-bottom:.8em}.sm\\:prose-xl hr{margin-top:2.8em;margin-bottom:2.8em}.sm\\:prose-xl h2+*,.sm\\:prose-xl h3+*,.sm\\:prose-xl h4+*,.sm\\:prose-xl hr+*{margin-top:0}.sm\\:prose-xl table{font-size:.9em;line-height:1.5555556}.sm\\:prose-xl thead th{padding-right:.6666667em;padding-bottom:.8888889em;padding-left:.6666667em}.sm\\:prose-xl thead th:first-child{padding-left:0}.sm\\:prose-xl thead th:last-child{padding-right:0}.sm\\:prose-xl tbody td{padding:.8888889em .6666667em}.sm\\:prose-xl tbody td:first-child{padding-left:0}.sm\\:prose-xl tbody td:last-child{padding-right:0}.sm\\:prose-xl>:first-child{margin-top:0}.sm\\:prose-xl>:last-child{margin-bottom:0}.sm\\:prose-2xl{font-size:1.5rem;line-height:1.6666667}.sm\\:prose-2xl p{margin-top:1.3333333em;margin-bottom:1.3333333em}.sm\\:prose-2xl [class~=lead]{font-size:1.25em;line-height:1.4666667;margin-top:1.0666667em;margin-bottom:1.0666667em}.sm\\:prose-2xl blockquote{margin-top:1.7777778em;margin-bottom:1.7777778em;padding-left:1.1111111em}.sm\\:prose-2xl h1{font-size:2.6666667em;margin-top:0;margin-bottom:.875em;line-height:1}.sm\\:prose-2xl h2{font-size:2em;margin-top:1.5em;margin-bottom:.8333333em;line-height:1.0833333}.sm\\:prose-2xl h3{font-size:1.5em;margin-top:1.5555556em;margin-bottom:.6666667em;line-height:1.2222222}.sm\\:prose-2xl h4{margin-top:1.6666667em;margin-bottom:.6666667em;line-height:1.5}.sm\\:prose-2xl figure,.sm\\:prose-2xl img,.sm\\:prose-2xl video{margin-top:2em;margin-bottom:2em}.sm\\:prose-2xl figure>*{margin-top:0;margin-bottom:0}.sm\\:prose-2xl figure figcaption{font-size:.8333333em;line-height:1.6;margin-top:1em}.sm\\:prose-2xl code{font-size:.8333333em}.sm\\:prose-2xl h2 code{font-size:.875em}.sm\\:prose-2xl h3 code{font-size:.8888889em}.sm\\:prose-2xl pre{font-size:.8333333em;line-height:1.8;margin-top:2em;margin-bottom:2em;border-radius:.5rem;padding:1.2em 1.6em}.sm\\:prose-2xl ol,.sm\\:prose-2xl ul{margin-top:1.3333333em;margin-bottom:1.3333333em}.sm\\:prose-2xl li{margin-top:.5em;margin-bottom:.5em}.sm\\:prose-2xl ol>li{padding-left:1.6666667em}.sm\\:prose-2xl ol>li:before{left:0}.sm\\:prose-2xl ul>li{padding-left:1.6666667em}.sm\\:prose-2xl ul>li:before{width:.3333333em;height:.3333333em;top:.66667em;left:.25em}.sm\\:prose-2xl>ul>li p{margin-top:.8333333em;margin-bottom:.8333333em}.sm\\:prose-2xl>ul>li>:first-child{margin-top:1.3333333em}.sm\\:prose-2xl>ul>li>:last-child{margin-bottom:1.3333333em}.sm\\:prose-2xl>ol>li>:first-child{margin-top:1.3333333em}.sm\\:prose-2xl>ol>li>:last-child{margin-bottom:1.3333333em}.sm\\:prose-2xl ol ol,.sm\\:prose-2xl ol ul,.sm\\:prose-2xl ul ol,.sm\\:prose-2xl ul ul{margin-top:.6666667em;margin-bottom:.6666667em}.sm\\:prose-2xl hr{margin-top:3em;margin-bottom:3em}.sm\\:prose-2xl h2+*,.sm\\:prose-2xl h3+*,.sm\\:prose-2xl h4+*,.sm\\:prose-2xl hr+*{margin-top:0}.sm\\:prose-2xl table{font-size:.8333333em;line-height:1.4}.sm\\:prose-2xl thead th{padding-right:.6em;padding-bottom:.8em;padding-left:.6em}.sm\\:prose-2xl thead th:first-child{padding-left:0}.sm\\:prose-2xl thead th:last-child{padding-right:0}.sm\\:prose-2xl tbody td{padding:.8em .6em}.sm\\:prose-2xl tbody td:first-child{padding-left:0}.sm\\:prose-2xl tbody td:last-child{padding-right:0}.sm\\:prose-2xl>:first-child{margin-top:0}.sm\\:prose-2xl>:last-child{margin-bottom:0}.sm\\:rounded-lg{border-radius:.5rem}.sm\\:-mx-6{margin-left:-1.5rem;margin-right:-1.5rem}.sm\\:px-0{padding-left:0;padding-right:0}.sm\\:px-4{padding-left:1rem;padding-right:1rem}.sm\\:px-6{padding-left:1.5rem;padding-right:1.5rem}.sm\\:pt-6{padding-top:1.5rem}.sm\\:grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}}@media (min-width:768px){.md\\:container{width:100%}}@media (min-width:768px) and (min-width:640px){.md\\:container{max-width:640px}}@media (min-width:768px) and (min-width:768px){.md\\:container{max-width:768px}}@media (min-width:768px) and (min-width:1024px){.md\\:container{max-width:1024px}}@media (min-width:768px) and (min-width:1280px){.md\\:container{max-width:1280px}}@media (min-width:768px){.md\\:prose{color:#374151;max-width:65ch}.md\\:prose [class~=lead]{color:#4b5563;font-size:1.25em;line-height:1.6;margin-top:1.2em;margin-bottom:1.2em}.md\\:prose a{color:#5850ec;text-decoration:none;font-weight:600}.md\\:prose strong{color:#161e2e;font-weight:600}.md\\:prose ol{counter-reset:list-counter;margin-top:1.25em;margin-bottom:1.25em}.md\\:prose ol>li{position:relative;counter-increment:list-counter;padding-left:1.75em}.md\\:prose ol>li:before{content:counter(list-counter) \".\";position:absolute;font-weight:400;color:#6b7280}.md\\:prose ul>li{position:relative;padding-left:1.75em}.md\\:prose ul>li:before{content:\"\";position:absolute;background-color:#d2d6dc;border-radius:50%;width:.375em;height:.375em;top:.6875em;left:.25em}.md\\:prose hr{border-color:#e5e7eb;border-top-width:1px;margin-top:3em;margin-bottom:3em}.md\\:prose blockquote{font-weight:500;font-style:italic;color:#161e2e;border-left-width:.25rem;border-left-color:#e5e7eb;quotes:\"\\201C\"\"\\201D\"\"\\2018\"\"\\2019\";margin-top:1.6em;margin-bottom:1.6em;padding-left:1em}.md\\:prose blockquote p:first-of-type:before{content:open-quote}.md\\:prose blockquote p:last-of-type:after{content:close-quote}.md\\:prose h1{color:#1a202c;font-weight:800;font-size:2.25em;margin-top:0;margin-bottom:.8888889em;line-height:1.1111111}.md\\:prose h2{color:#1a202c;font-weight:700;font-size:1.5em;margin-top:2em;margin-bottom:1em;line-height:1.3333333}.md\\:prose h3{font-size:1.25em;margin-top:1.6em;margin-bottom:.6em;line-height:1.6}.md\\:prose h3,.md\\:prose h4{color:#1a202c;font-weight:600}.md\\:prose h4{margin-top:1.5em;margin-bottom:.5em;line-height:1.5}.md\\:prose figure figcaption{color:#6b7280;font-size:.875em;line-height:1.4285714;margin-top:.8571429em}.md\\:prose code{color:#161e2e;font-weight:600;font-size:.875em}.md\\:prose code:after,.md\\:prose code:before{content:\"`\"}.md\\:prose pre{color:#e5e7eb;background-color:#252f3f;overflow-x:auto;font-size:.875em;line-height:1.7142857;margin-top:1.7142857em;margin-bottom:1.7142857em;border-radius:.375rem;padding:.8571429em 1.1428571em}.md\\:prose pre code{background-color:transparent;border-width:0;border-radius:0;padding:0;font-weight:400;color:inherit;font-size:inherit;font-family:inherit;line-height:inherit}.md\\:prose pre code:after,.md\\:prose pre code:before{content:\"\"}.md\\:prose table{width:100%;table-layout:auto;text-align:left;margin-top:2em;margin-bottom:2em;font-size:.875em;line-height:1.7142857}.md\\:prose thead{color:#161e2e;font-weight:600;border-bottom-width:1px;border-bottom-color:#d2d6dc}.md\\:prose thead th{vertical-align:bottom;padding-right:.5714286em;padding-bottom:.5714286em;padding-left:.5714286em}.md\\:prose tbody tr{border-bottom-width:1px;border-bottom-color:#e5e7eb}.md\\:prose tbody tr:last-child{border-bottom-width:0}.md\\:prose tbody td{vertical-align:top;padding:.5714286em}.md\\:prose{font-size:1rem;line-height:1.75}.md\\:prose p{margin-top:1.25em;margin-bottom:1.25em}.md\\:prose figure,.md\\:prose img,.md\\:prose video{margin-top:2em;margin-bottom:2em}.md\\:prose figure>*{margin-top:0;margin-bottom:0}.md\\:prose h2 code{font-size:.875em}.md\\:prose h3 code{font-size:.9em}.md\\:prose ul{margin-top:1.25em;margin-bottom:1.25em}.md\\:prose li{margin-top:.5em;margin-bottom:.5em}.md\\:prose ol>li:before{left:0}.md\\:prose>ul>li p{margin-top:.75em;margin-bottom:.75em}.md\\:prose>ul>li>:first-child{margin-top:1.25em}.md\\:prose>ul>li>:last-child{margin-bottom:1.25em}.md\\:prose>ol>li>:first-child{margin-top:1.25em}.md\\:prose>ol>li>:last-child{margin-bottom:1.25em}.md\\:prose ol ol,.md\\:prose ol ul,.md\\:prose ul ol,.md\\:prose ul ul{margin-top:.75em;margin-bottom:.75em}.md\\:prose h2+*,.md\\:prose h3+*,.md\\:prose h4+*,.md\\:prose hr+*{margin-top:0}.md\\:prose thead th:first-child{padding-left:0}.md\\:prose thead th:last-child{padding-right:0}.md\\:prose tbody td:first-child{padding-left:0}.md\\:prose tbody td:last-child{padding-right:0}.md\\:prose>:first-child{margin-top:0}.md\\:prose>:last-child{margin-bottom:0}.md\\:prose h1,.md\\:prose h2,.md\\:prose h3,.md\\:prose h4{color:#161e2e}.md\\:prose-sm{font-size:.875rem;line-height:1.7142857}.md\\:prose-sm p{margin-top:1.1428571em;margin-bottom:1.1428571em}.md\\:prose-sm [class~=lead]{font-size:1.2857143em;line-height:1.5555556;margin-top:.8888889em;margin-bottom:.8888889em}.md\\:prose-sm blockquote{margin-top:1.3333333em;margin-bottom:1.3333333em;padding-left:1.1111111em}.md\\:prose-sm h1{font-size:2.1428571em;margin-top:0;margin-bottom:.8em;line-height:1.2}.md\\:prose-sm h2{font-size:1.4285714em;margin-top:1.6em;margin-bottom:.8em;line-height:1.4}.md\\:prose-sm h3{font-size:1.2857143em;margin-top:1.5555556em;margin-bottom:.4444444em;line-height:1.5555556}.md\\:prose-sm h4{margin-top:1.4285714em;margin-bottom:.5714286em;line-height:1.4285714}.md\\:prose-sm figure,.md\\:prose-sm img,.md\\:prose-sm video{margin-top:1.7142857em;margin-bottom:1.7142857em}.md\\:prose-sm figure>*{margin-top:0;margin-bottom:0}.md\\:prose-sm figure figcaption{font-size:.8571429em;line-height:1.3333333;margin-top:.6666667em}.md\\:prose-sm code{font-size:.8571429em}.md\\:prose-sm h2 code{font-size:.9em}.md\\:prose-sm h3 code{font-size:.8888889em}.md\\:prose-sm pre{font-size:.8571429em;line-height:1.6666667;margin-top:1.6666667em;margin-bottom:1.6666667em;border-radius:.25rem;padding:.6666667em 1em}.md\\:prose-sm ol,.md\\:prose-sm ul{margin-top:1.1428571em;margin-bottom:1.1428571em}.md\\:prose-sm li{margin-top:.2857143em;margin-bottom:.2857143em}.md\\:prose-sm ol>li{padding-left:1.5714286em}.md\\:prose-sm ol>li:before{left:0}.md\\:prose-sm ul>li{padding-left:1.5714286em}.md\\:prose-sm ul>li:before{height:.3571429em;width:.3571429em;top:.67857em;left:.2142857em}.md\\:prose-sm>ul>li p{margin-top:.5714286em;margin-bottom:.5714286em}.md\\:prose-sm>ul>li>:first-child{margin-top:1.1428571em}.md\\:prose-sm>ul>li>:last-child{margin-bottom:1.1428571em}.md\\:prose-sm>ol>li>:first-child{margin-top:1.1428571em}.md\\:prose-sm>ol>li>:last-child{margin-bottom:1.1428571em}.md\\:prose-sm ol ol,.md\\:prose-sm ol ul,.md\\:prose-sm ul ol,.md\\:prose-sm ul ul{margin-top:.5714286em;margin-bottom:.5714286em}.md\\:prose-sm hr{margin-top:2.8571429em;margin-bottom:2.8571429em}.md\\:prose-sm h2+*,.md\\:prose-sm h3+*,.md\\:prose-sm h4+*,.md\\:prose-sm hr+*{margin-top:0}.md\\:prose-sm table{font-size:.8571429em;line-height:1.5}.md\\:prose-sm thead th{padding-right:1em;padding-bottom:.6666667em;padding-left:1em}.md\\:prose-sm thead th:first-child{padding-left:0}.md\\:prose-sm thead th:last-child{padding-right:0}.md\\:prose-sm tbody td{padding:.6666667em 1em}.md\\:prose-sm tbody td:first-child{padding-left:0}.md\\:prose-sm tbody td:last-child{padding-right:0}.md\\:prose-sm>:first-child{margin-top:0}.md\\:prose-sm>:last-child{margin-bottom:0}.md\\:prose-lg{font-size:1.125rem;line-height:1.7777778}.md\\:prose-lg p{margin-top:1.3333333em;margin-bottom:1.3333333em}.md\\:prose-lg [class~=lead]{font-size:1.2222222em;line-height:1.4545455;margin-top:1.0909091em;margin-bottom:1.0909091em}.md\\:prose-lg blockquote{margin-top:1.6666667em;margin-bottom:1.6666667em;padding-left:1em}.md\\:prose-lg h1{font-size:2.6666667em;margin-top:0;margin-bottom:.8333333em;line-height:1}.md\\:prose-lg h2{font-size:1.6666667em;margin-top:1.8666667em;margin-bottom:1.0666667em;line-height:1.3333333}.md\\:prose-lg h3{font-size:1.3333333em;margin-top:1.6666667em;margin-bottom:.6666667em;line-height:1.5}.md\\:prose-lg h4{margin-top:1.7777778em;margin-bottom:.4444444em;line-height:1.5555556}.md\\:prose-lg figure,.md\\:prose-lg img,.md\\:prose-lg video{margin-top:1.7777778em;margin-bottom:1.7777778em}.md\\:prose-lg figure>*{margin-top:0;margin-bottom:0}.md\\:prose-lg figure figcaption{font-size:.8888889em;line-height:1.5;margin-top:1em}.md\\:prose-lg code{font-size:.8888889em}.md\\:prose-lg h2 code{font-size:.8666667em}.md\\:prose-lg h3 code{font-size:.875em}.md\\:prose-lg pre{font-size:.8888889em;line-height:1.75;margin-top:2em;margin-bottom:2em;border-radius:.375rem;padding:1em 1.5em}.md\\:prose-lg ol,.md\\:prose-lg ul{margin-top:1.3333333em;margin-bottom:1.3333333em}.md\\:prose-lg li{margin-top:.6666667em;margin-bottom:.6666667em}.md\\:prose-lg ol>li{padding-left:1.6666667em}.md\\:prose-lg ol>li:before{left:0}.md\\:prose-lg ul>li{padding-left:1.6666667em}.md\\:prose-lg ul>li:before{width:.3333333em;height:.3333333em;top:.72222em;left:.2222222em}.md\\:prose-lg>ul>li p{margin-top:.8888889em;margin-bottom:.8888889em}.md\\:prose-lg>ul>li>:first-child{margin-top:1.3333333em}.md\\:prose-lg>ul>li>:last-child{margin-bottom:1.3333333em}.md\\:prose-lg>ol>li>:first-child{margin-top:1.3333333em}.md\\:prose-lg>ol>li>:last-child{margin-bottom:1.3333333em}.md\\:prose-lg ol ol,.md\\:prose-lg ol ul,.md\\:prose-lg ul ol,.md\\:prose-lg ul ul{margin-top:.8888889em;margin-bottom:.8888889em}.md\\:prose-lg hr{margin-top:3.1111111em;margin-bottom:3.1111111em}.md\\:prose-lg h2+*,.md\\:prose-lg h3+*,.md\\:prose-lg h4+*,.md\\:prose-lg hr+*{margin-top:0}.md\\:prose-lg table{font-size:.8888889em;line-height:1.5}.md\\:prose-lg thead th{padding-right:.75em;padding-bottom:.75em;padding-left:.75em}.md\\:prose-lg thead th:first-child{padding-left:0}.md\\:prose-lg thead th:last-child{padding-right:0}.md\\:prose-lg tbody td{padding:.75em}.md\\:prose-lg tbody td:first-child{padding-left:0}.md\\:prose-lg tbody td:last-child{padding-right:0}.md\\:prose-lg>:first-child{margin-top:0}.md\\:prose-lg>:last-child{margin-bottom:0}.md\\:prose-xl{font-size:1.25rem;line-height:1.8}.md\\:prose-xl p{margin-top:1.2em;margin-bottom:1.2em}.md\\:prose-xl [class~=lead]{font-size:1.2em;line-height:1.5;margin-top:1em;margin-bottom:1em}.md\\:prose-xl blockquote{margin-top:1.6em;margin-bottom:1.6em;padding-left:1.0666667em}.md\\:prose-xl h1{font-size:2.8em;margin-top:0;margin-bottom:.8571429em;line-height:1}.md\\:prose-xl h2{font-size:1.8em;margin-top:1.5555556em;margin-bottom:.8888889em;line-height:1.1111111}.md\\:prose-xl h3{font-size:1.5em;margin-top:1.6em;margin-bottom:.6666667em;line-height:1.3333333}.md\\:prose-xl h4{margin-top:1.8em;margin-bottom:.6em;line-height:1.6}.md\\:prose-xl figure,.md\\:prose-xl img,.md\\:prose-xl video{margin-top:2em;margin-bottom:2em}.md\\:prose-xl figure>*{margin-top:0;margin-bottom:0}.md\\:prose-xl figure figcaption{font-size:.9em;line-height:1.5555556;margin-top:1em}.md\\:prose-xl code{font-size:.9em}.md\\:prose-xl h2 code{font-size:.8611111em}.md\\:prose-xl h3 code{font-size:.9em}.md\\:prose-xl pre{font-size:.9em;line-height:1.7777778;margin-top:2em;margin-bottom:2em;border-radius:.5rem;padding:1.1111111em 1.3333333em}.md\\:prose-xl ol,.md\\:prose-xl ul{margin-top:1.2em;margin-bottom:1.2em}.md\\:prose-xl li{margin-top:.6em;margin-bottom:.6em}.md\\:prose-xl ol>li{padding-left:1.8em}.md\\:prose-xl ol>li:before{left:0}.md\\:prose-xl ul>li{padding-left:1.8em}.md\\:prose-xl ul>li:before{width:.35em;height:.35em;top:.725em;left:.25em}.md\\:prose-xl>ul>li p{margin-top:.8em;margin-bottom:.8em}.md\\:prose-xl>ul>li>:first-child{margin-top:1.2em}.md\\:prose-xl>ul>li>:last-child{margin-bottom:1.2em}.md\\:prose-xl>ol>li>:first-child{margin-top:1.2em}.md\\:prose-xl>ol>li>:last-child{margin-bottom:1.2em}.md\\:prose-xl ol ol,.md\\:prose-xl ol ul,.md\\:prose-xl ul ol,.md\\:prose-xl ul ul{margin-top:.8em;margin-bottom:.8em}.md\\:prose-xl hr{margin-top:2.8em;margin-bottom:2.8em}.md\\:prose-xl h2+*,.md\\:prose-xl h3+*,.md\\:prose-xl h4+*,.md\\:prose-xl hr+*{margin-top:0}.md\\:prose-xl table{font-size:.9em;line-height:1.5555556}.md\\:prose-xl thead th{padding-right:.6666667em;padding-bottom:.8888889em;padding-left:.6666667em}.md\\:prose-xl thead th:first-child{padding-left:0}.md\\:prose-xl thead th:last-child{padding-right:0}.md\\:prose-xl tbody td{padding:.8888889em .6666667em}.md\\:prose-xl tbody td:first-child{padding-left:0}.md\\:prose-xl tbody td:last-child{padding-right:0}.md\\:prose-xl>:first-child{margin-top:0}.md\\:prose-xl>:last-child{margin-bottom:0}.md\\:prose-2xl{font-size:1.5rem;line-height:1.6666667}.md\\:prose-2xl p{margin-top:1.3333333em;margin-bottom:1.3333333em}.md\\:prose-2xl [class~=lead]{font-size:1.25em;line-height:1.4666667;margin-top:1.0666667em;margin-bottom:1.0666667em}.md\\:prose-2xl blockquote{margin-top:1.7777778em;margin-bottom:1.7777778em;padding-left:1.1111111em}.md\\:prose-2xl h1{font-size:2.6666667em;margin-top:0;margin-bottom:.875em;line-height:1}.md\\:prose-2xl h2{font-size:2em;margin-top:1.5em;margin-bottom:.8333333em;line-height:1.0833333}.md\\:prose-2xl h3{font-size:1.5em;margin-top:1.5555556em;margin-bottom:.6666667em;line-height:1.2222222}.md\\:prose-2xl h4{margin-top:1.6666667em;margin-bottom:.6666667em;line-height:1.5}.md\\:prose-2xl figure,.md\\:prose-2xl img,.md\\:prose-2xl video{margin-top:2em;margin-bottom:2em}.md\\:prose-2xl figure>*{margin-top:0;margin-bottom:0}.md\\:prose-2xl figure figcaption{font-size:.8333333em;line-height:1.6;margin-top:1em}.md\\:prose-2xl code{font-size:.8333333em}.md\\:prose-2xl h2 code{font-size:.875em}.md\\:prose-2xl h3 code{font-size:.8888889em}.md\\:prose-2xl pre{font-size:.8333333em;line-height:1.8;margin-top:2em;margin-bottom:2em;border-radius:.5rem;padding:1.2em 1.6em}.md\\:prose-2xl ol,.md\\:prose-2xl ul{margin-top:1.3333333em;margin-bottom:1.3333333em}.md\\:prose-2xl li{margin-top:.5em;margin-bottom:.5em}.md\\:prose-2xl ol>li{padding-left:1.6666667em}.md\\:prose-2xl ol>li:before{left:0}.md\\:prose-2xl ul>li{padding-left:1.6666667em}.md\\:prose-2xl ul>li:before{width:.3333333em;height:.3333333em;top:.66667em;left:.25em}.md\\:prose-2xl>ul>li p{margin-top:.8333333em;margin-bottom:.8333333em}.md\\:prose-2xl>ul>li>:first-child{margin-top:1.3333333em}.md\\:prose-2xl>ul>li>:last-child{margin-bottom:1.3333333em}.md\\:prose-2xl>ol>li>:first-child{margin-top:1.3333333em}.md\\:prose-2xl>ol>li>:last-child{margin-bottom:1.3333333em}.md\\:prose-2xl ol ol,.md\\:prose-2xl ol ul,.md\\:prose-2xl ul ol,.md\\:prose-2xl ul ul{margin-top:.6666667em;margin-bottom:.6666667em}.md\\:prose-2xl hr{margin-top:3em;margin-bottom:3em}.md\\:prose-2xl h2+*,.md\\:prose-2xl h3+*,.md\\:prose-2xl h4+*,.md\\:prose-2xl hr+*{margin-top:0}.md\\:prose-2xl table{font-size:.8333333em;line-height:1.4}.md\\:prose-2xl thead th{padding-right:.6em;padding-bottom:.8em;padding-left:.6em}.md\\:prose-2xl thead th:first-child{padding-left:0}.md\\:prose-2xl thead th:last-child{padding-right:0}.md\\:prose-2xl tbody td{padding:.8em .6em}.md\\:prose-2xl tbody td:first-child{padding-left:0}.md\\:prose-2xl tbody td:last-child{padding-right:0}.md\\:prose-2xl>:first-child{margin-top:0}.md\\:prose-2xl>:last-child{margin-bottom:0}.md\\:flex{display:flex}.md\\:flex-shrink-0{flex-shrink:0}.md\\:mt-0{margin-top:0}.md\\:ml-6{margin-left:1.5rem}.md\\:w-20{width:5rem}.md\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}}@media (min-width:1024px){.lg\\:container{width:100%}}@media (min-width:1024px) and (min-width:640px){.lg\\:container{max-width:640px}}@media (min-width:1024px) and (min-width:768px){.lg\\:container{max-width:768px}}@media (min-width:1024px) and (min-width:1024px){.lg\\:container{max-width:1024px}}@media (min-width:1024px) and (min-width:1280px){.lg\\:container{max-width:1280px}}@media (min-width:1024px){.lg\\:prose{color:#374151;max-width:65ch}.lg\\:prose [class~=lead]{color:#4b5563;font-size:1.25em;line-height:1.6;margin-top:1.2em;margin-bottom:1.2em}.lg\\:prose a{color:#5850ec;text-decoration:none;font-weight:600}.lg\\:prose strong{color:#161e2e;font-weight:600}.lg\\:prose ol{counter-reset:list-counter;margin-top:1.25em;margin-bottom:1.25em}.lg\\:prose ol>li{position:relative;counter-increment:list-counter;padding-left:1.75em}.lg\\:prose ol>li:before{content:counter(list-counter) \".\";position:absolute;font-weight:400;color:#6b7280}.lg\\:prose ul>li{position:relative;padding-left:1.75em}.lg\\:prose ul>li:before{content:\"\";position:absolute;background-color:#d2d6dc;border-radius:50%;width:.375em;height:.375em;top:.6875em;left:.25em}.lg\\:prose hr{border-color:#e5e7eb;border-top-width:1px;margin-top:3em;margin-bottom:3em}.lg\\:prose blockquote{font-weight:500;font-style:italic;color:#161e2e;border-left-width:.25rem;border-left-color:#e5e7eb;quotes:\"\\201C\"\"\\201D\"\"\\2018\"\"\\2019\";margin-top:1.6em;margin-bottom:1.6em;padding-left:1em}.lg\\:prose blockquote p:first-of-type:before{content:open-quote}.lg\\:prose blockquote p:last-of-type:after{content:close-quote}.lg\\:prose h1{color:#1a202c;font-weight:800;font-size:2.25em;margin-top:0;margin-bottom:.8888889em;line-height:1.1111111}.lg\\:prose h2{color:#1a202c;font-weight:700;font-size:1.5em;margin-top:2em;margin-bottom:1em;line-height:1.3333333}.lg\\:prose h3{font-size:1.25em;margin-top:1.6em;margin-bottom:.6em;line-height:1.6}.lg\\:prose h3,.lg\\:prose h4{color:#1a202c;font-weight:600}.lg\\:prose h4{margin-top:1.5em;margin-bottom:.5em;line-height:1.5}.lg\\:prose figure figcaption{color:#6b7280;font-size:.875em;line-height:1.4285714;margin-top:.8571429em}.lg\\:prose code{color:#161e2e;font-weight:600;font-size:.875em}.lg\\:prose code:after,.lg\\:prose code:before{content:\"`\"}.lg\\:prose pre{color:#e5e7eb;background-color:#252f3f;overflow-x:auto;font-size:.875em;line-height:1.7142857;margin-top:1.7142857em;margin-bottom:1.7142857em;border-radius:.375rem;padding:.8571429em 1.1428571em}.lg\\:prose pre code{background-color:transparent;border-width:0;border-radius:0;padding:0;font-weight:400;color:inherit;font-size:inherit;font-family:inherit;line-height:inherit}.lg\\:prose pre code:after,.lg\\:prose pre code:before{content:\"\"}.lg\\:prose table{width:100%;table-layout:auto;text-align:left;margin-top:2em;margin-bottom:2em;font-size:.875em;line-height:1.7142857}.lg\\:prose thead{color:#161e2e;font-weight:600;border-bottom-width:1px;border-bottom-color:#d2d6dc}.lg\\:prose thead th{vertical-align:bottom;padding-right:.5714286em;padding-bottom:.5714286em;padding-left:.5714286em}.lg\\:prose tbody tr{border-bottom-width:1px;border-bottom-color:#e5e7eb}.lg\\:prose tbody tr:last-child{border-bottom-width:0}.lg\\:prose tbody td{vertical-align:top;padding:.5714286em}.lg\\:prose{font-size:1rem;line-height:1.75}.lg\\:prose p{margin-top:1.25em;margin-bottom:1.25em}.lg\\:prose figure,.lg\\:prose img,.lg\\:prose video{margin-top:2em;margin-bottom:2em}.lg\\:prose figure>*{margin-top:0;margin-bottom:0}.lg\\:prose h2 code{font-size:.875em}.lg\\:prose h3 code{font-size:.9em}.lg\\:prose ul{margin-top:1.25em;margin-bottom:1.25em}.lg\\:prose li{margin-top:.5em;margin-bottom:.5em}.lg\\:prose ol>li:before{left:0}.lg\\:prose>ul>li p{margin-top:.75em;margin-bottom:.75em}.lg\\:prose>ul>li>:first-child{margin-top:1.25em}.lg\\:prose>ul>li>:last-child{margin-bottom:1.25em}.lg\\:prose>ol>li>:first-child{margin-top:1.25em}.lg\\:prose>ol>li>:last-child{margin-bottom:1.25em}.lg\\:prose ol ol,.lg\\:prose ol ul,.lg\\:prose ul ol,.lg\\:prose ul ul{margin-top:.75em;margin-bottom:.75em}.lg\\:prose h2+*,.lg\\:prose h3+*,.lg\\:prose h4+*,.lg\\:prose hr+*{margin-top:0}.lg\\:prose thead th:first-child{padding-left:0}.lg\\:prose thead th:last-child{padding-right:0}.lg\\:prose tbody td:first-child{padding-left:0}.lg\\:prose tbody td:last-child{padding-right:0}.lg\\:prose>:first-child{margin-top:0}.lg\\:prose>:last-child{margin-bottom:0}.lg\\:prose h1,.lg\\:prose h2,.lg\\:prose h3,.lg\\:prose h4{color:#161e2e}.lg\\:prose-sm{font-size:.875rem;line-height:1.7142857}.lg\\:prose-sm p{margin-top:1.1428571em;margin-bottom:1.1428571em}.lg\\:prose-sm [class~=lead]{font-size:1.2857143em;line-height:1.5555556;margin-top:.8888889em;margin-bottom:.8888889em}.lg\\:prose-sm blockquote{margin-top:1.3333333em;margin-bottom:1.3333333em;padding-left:1.1111111em}.lg\\:prose-sm h1{font-size:2.1428571em;margin-top:0;margin-bottom:.8em;line-height:1.2}.lg\\:prose-sm h2{font-size:1.4285714em;margin-top:1.6em;margin-bottom:.8em;line-height:1.4}.lg\\:prose-sm h3{font-size:1.2857143em;margin-top:1.5555556em;margin-bottom:.4444444em;line-height:1.5555556}.lg\\:prose-sm h4{margin-top:1.4285714em;margin-bottom:.5714286em;line-height:1.4285714}.lg\\:prose-sm figure,.lg\\:prose-sm img,.lg\\:prose-sm video{margin-top:1.7142857em;margin-bottom:1.7142857em}.lg\\:prose-sm figure>*{margin-top:0;margin-bottom:0}.lg\\:prose-sm figure figcaption{font-size:.8571429em;line-height:1.3333333;margin-top:.6666667em}.lg\\:prose-sm code{font-size:.8571429em}.lg\\:prose-sm h2 code{font-size:.9em}.lg\\:prose-sm h3 code{font-size:.8888889em}.lg\\:prose-sm pre{font-size:.8571429em;line-height:1.6666667;margin-top:1.6666667em;margin-bottom:1.6666667em;border-radius:.25rem;padding:.6666667em 1em}.lg\\:prose-sm ol,.lg\\:prose-sm ul{margin-top:1.1428571em;margin-bottom:1.1428571em}.lg\\:prose-sm li{margin-top:.2857143em;margin-bottom:.2857143em}.lg\\:prose-sm ol>li{padding-left:1.5714286em}.lg\\:prose-sm ol>li:before{left:0}.lg\\:prose-sm ul>li{padding-left:1.5714286em}.lg\\:prose-sm ul>li:before{height:.3571429em;width:.3571429em;top:.67857em;left:.2142857em}.lg\\:prose-sm>ul>li p{margin-top:.5714286em;margin-bottom:.5714286em}.lg\\:prose-sm>ul>li>:first-child{margin-top:1.1428571em}.lg\\:prose-sm>ul>li>:last-child{margin-bottom:1.1428571em}.lg\\:prose-sm>ol>li>:first-child{margin-top:1.1428571em}.lg\\:prose-sm>ol>li>:last-child{margin-bottom:1.1428571em}.lg\\:prose-sm ol ol,.lg\\:prose-sm ol ul,.lg\\:prose-sm ul ol,.lg\\:prose-sm ul ul{margin-top:.5714286em;margin-bottom:.5714286em}.lg\\:prose-sm hr{margin-top:2.8571429em;margin-bottom:2.8571429em}.lg\\:prose-sm h2+*,.lg\\:prose-sm h3+*,.lg\\:prose-sm h4+*,.lg\\:prose-sm hr+*{margin-top:0}.lg\\:prose-sm table{font-size:.8571429em;line-height:1.5}.lg\\:prose-sm thead th{padding-right:1em;padding-bottom:.6666667em;padding-left:1em}.lg\\:prose-sm thead th:first-child{padding-left:0}.lg\\:prose-sm thead th:last-child{padding-right:0}.lg\\:prose-sm tbody td{padding:.6666667em 1em}.lg\\:prose-sm tbody td:first-child{padding-left:0}.lg\\:prose-sm tbody td:last-child{padding-right:0}.lg\\:prose-sm>:first-child{margin-top:0}.lg\\:prose-sm>:last-child{margin-bottom:0}.lg\\:prose-lg{font-size:1.125rem;line-height:1.7777778}.lg\\:prose-lg p{margin-top:1.3333333em;margin-bottom:1.3333333em}.lg\\:prose-lg [class~=lead]{font-size:1.2222222em;line-height:1.4545455;margin-top:1.0909091em;margin-bottom:1.0909091em}.lg\\:prose-lg blockquote{margin-top:1.6666667em;margin-bottom:1.6666667em;padding-left:1em}.lg\\:prose-lg h1{font-size:2.6666667em;margin-top:0;margin-bottom:.8333333em;line-height:1}.lg\\:prose-lg h2{font-size:1.6666667em;margin-top:1.8666667em;margin-bottom:1.0666667em;line-height:1.3333333}.lg\\:prose-lg h3{font-size:1.3333333em;margin-top:1.6666667em;margin-bottom:.6666667em;line-height:1.5}.lg\\:prose-lg h4{margin-top:1.7777778em;margin-bottom:.4444444em;line-height:1.5555556}.lg\\:prose-lg figure,.lg\\:prose-lg img,.lg\\:prose-lg video{margin-top:1.7777778em;margin-bottom:1.7777778em}.lg\\:prose-lg figure>*{margin-top:0;margin-bottom:0}.lg\\:prose-lg figure figcaption{font-size:.8888889em;line-height:1.5;margin-top:1em}.lg\\:prose-lg code{font-size:.8888889em}.lg\\:prose-lg h2 code{font-size:.8666667em}.lg\\:prose-lg h3 code{font-size:.875em}.lg\\:prose-lg pre{font-size:.8888889em;line-height:1.75;margin-top:2em;margin-bottom:2em;border-radius:.375rem;padding:1em 1.5em}.lg\\:prose-lg ol,.lg\\:prose-lg ul{margin-top:1.3333333em;margin-bottom:1.3333333em}.lg\\:prose-lg li{margin-top:.6666667em;margin-bottom:.6666667em}.lg\\:prose-lg ol>li{padding-left:1.6666667em}.lg\\:prose-lg ol>li:before{left:0}.lg\\:prose-lg ul>li{padding-left:1.6666667em}.lg\\:prose-lg ul>li:before{width:.3333333em;height:.3333333em;top:.72222em;left:.2222222em}.lg\\:prose-lg>ul>li p{margin-top:.8888889em;margin-bottom:.8888889em}.lg\\:prose-lg>ul>li>:first-child{margin-top:1.3333333em}.lg\\:prose-lg>ul>li>:last-child{margin-bottom:1.3333333em}.lg\\:prose-lg>ol>li>:first-child{margin-top:1.3333333em}.lg\\:prose-lg>ol>li>:last-child{margin-bottom:1.3333333em}.lg\\:prose-lg ol ol,.lg\\:prose-lg ol ul,.lg\\:prose-lg ul ol,.lg\\:prose-lg ul ul{margin-top:.8888889em;margin-bottom:.8888889em}.lg\\:prose-lg hr{margin-top:3.1111111em;margin-bottom:3.1111111em}.lg\\:prose-lg h2+*,.lg\\:prose-lg h3+*,.lg\\:prose-lg h4+*,.lg\\:prose-lg hr+*{margin-top:0}.lg\\:prose-lg table{font-size:.8888889em;line-height:1.5}.lg\\:prose-lg thead th{padding-right:.75em;padding-bottom:.75em;padding-left:.75em}.lg\\:prose-lg thead th:first-child{padding-left:0}.lg\\:prose-lg thead th:last-child{padding-right:0}.lg\\:prose-lg tbody td{padding:.75em}.lg\\:prose-lg tbody td:first-child{padding-left:0}.lg\\:prose-lg tbody td:last-child{padding-right:0}.lg\\:prose-lg>:first-child{margin-top:0}.lg\\:prose-lg>:last-child{margin-bottom:0}.lg\\:prose-xl{font-size:1.25rem;line-height:1.8}.lg\\:prose-xl p{margin-top:1.2em;margin-bottom:1.2em}.lg\\:prose-xl [class~=lead]{font-size:1.2em;line-height:1.5;margin-top:1em;margin-bottom:1em}.lg\\:prose-xl blockquote{margin-top:1.6em;margin-bottom:1.6em;padding-left:1.0666667em}.lg\\:prose-xl h1{font-size:2.8em;margin-top:0;margin-bottom:.8571429em;line-height:1}.lg\\:prose-xl h2{font-size:1.8em;margin-top:1.5555556em;margin-bottom:.8888889em;line-height:1.1111111}.lg\\:prose-xl h3{font-size:1.5em;margin-top:1.6em;margin-bottom:.6666667em;line-height:1.3333333}.lg\\:prose-xl h4{margin-top:1.8em;margin-bottom:.6em;line-height:1.6}.lg\\:prose-xl figure,.lg\\:prose-xl img,.lg\\:prose-xl video{margin-top:2em;margin-bottom:2em}.lg\\:prose-xl figure>*{margin-top:0;margin-bottom:0}.lg\\:prose-xl figure figcaption{font-size:.9em;line-height:1.5555556;margin-top:1em}.lg\\:prose-xl code{font-size:.9em}.lg\\:prose-xl h2 code{font-size:.8611111em}.lg\\:prose-xl h3 code{font-size:.9em}.lg\\:prose-xl pre{font-size:.9em;line-height:1.7777778;margin-top:2em;margin-bottom:2em;border-radius:.5rem;padding:1.1111111em 1.3333333em}.lg\\:prose-xl ol,.lg\\:prose-xl ul{margin-top:1.2em;margin-bottom:1.2em}.lg\\:prose-xl li{margin-top:.6em;margin-bottom:.6em}.lg\\:prose-xl ol>li{padding-left:1.8em}.lg\\:prose-xl ol>li:before{left:0}.lg\\:prose-xl ul>li{padding-left:1.8em}.lg\\:prose-xl ul>li:before{width:.35em;height:.35em;top:.725em;left:.25em}.lg\\:prose-xl>ul>li p{margin-top:.8em;margin-bottom:.8em}.lg\\:prose-xl>ul>li>:first-child{margin-top:1.2em}.lg\\:prose-xl>ul>li>:last-child{margin-bottom:1.2em}.lg\\:prose-xl>ol>li>:first-child{margin-top:1.2em}.lg\\:prose-xl>ol>li>:last-child{margin-bottom:1.2em}.lg\\:prose-xl ol ol,.lg\\:prose-xl ol ul,.lg\\:prose-xl ul ol,.lg\\:prose-xl ul ul{margin-top:.8em;margin-bottom:.8em}.lg\\:prose-xl hr{margin-top:2.8em;margin-bottom:2.8em}.lg\\:prose-xl h2+*,.lg\\:prose-xl h3+*,.lg\\:prose-xl h4+*,.lg\\:prose-xl hr+*{margin-top:0}.lg\\:prose-xl table{font-size:.9em;line-height:1.5555556}.lg\\:prose-xl thead th{padding-right:.6666667em;padding-bottom:.8888889em;padding-left:.6666667em}.lg\\:prose-xl thead th:first-child{padding-left:0}.lg\\:prose-xl thead th:last-child{padding-right:0}.lg\\:prose-xl tbody td{padding:.8888889em .6666667em}.lg\\:prose-xl tbody td:first-child{padding-left:0}.lg\\:prose-xl tbody td:last-child{padding-right:0}.lg\\:prose-xl>:first-child{margin-top:0}.lg\\:prose-xl>:last-child{margin-bottom:0}.lg\\:prose-2xl{font-size:1.5rem;line-height:1.6666667}.lg\\:prose-2xl p{margin-top:1.3333333em;margin-bottom:1.3333333em}.lg\\:prose-2xl [class~=lead]{font-size:1.25em;line-height:1.4666667;margin-top:1.0666667em;margin-bottom:1.0666667em}.lg\\:prose-2xl blockquote{margin-top:1.7777778em;margin-bottom:1.7777778em;padding-left:1.1111111em}.lg\\:prose-2xl h1{font-size:2.6666667em;margin-top:0;margin-bottom:.875em;line-height:1}.lg\\:prose-2xl h2{font-size:2em;margin-top:1.5em;margin-bottom:.8333333em;line-height:1.0833333}.lg\\:prose-2xl h3{font-size:1.5em;margin-top:1.5555556em;margin-bottom:.6666667em;line-height:1.2222222}.lg\\:prose-2xl h4{margin-top:1.6666667em;margin-bottom:.6666667em;line-height:1.5}.lg\\:prose-2xl figure,.lg\\:prose-2xl img,.lg\\:prose-2xl video{margin-top:2em;margin-bottom:2em}.lg\\:prose-2xl figure>*{margin-top:0;margin-bottom:0}.lg\\:prose-2xl figure figcaption{font-size:.8333333em;line-height:1.6;margin-top:1em}.lg\\:prose-2xl code{font-size:.8333333em}.lg\\:prose-2xl h2 code{font-size:.875em}.lg\\:prose-2xl h3 code{font-size:.8888889em}.lg\\:prose-2xl pre{font-size:.8333333em;line-height:1.8;margin-top:2em;margin-bottom:2em;border-radius:.5rem;padding:1.2em 1.6em}.lg\\:prose-2xl ol,.lg\\:prose-2xl ul{margin-top:1.3333333em;margin-bottom:1.3333333em}.lg\\:prose-2xl li{margin-top:.5em;margin-bottom:.5em}.lg\\:prose-2xl ol>li{padding-left:1.6666667em}.lg\\:prose-2xl ol>li:before{left:0}.lg\\:prose-2xl ul>li{padding-left:1.6666667em}.lg\\:prose-2xl ul>li:before{width:.3333333em;height:.3333333em;top:.66667em;left:.25em}.lg\\:prose-2xl>ul>li p{margin-top:.8333333em;margin-bottom:.8333333em}.lg\\:prose-2xl>ul>li>:first-child{margin-top:1.3333333em}.lg\\:prose-2xl>ul>li>:last-child{margin-bottom:1.3333333em}.lg\\:prose-2xl>ol>li>:first-child{margin-top:1.3333333em}.lg\\:prose-2xl>ol>li>:last-child{margin-bottom:1.3333333em}.lg\\:prose-2xl ol ol,.lg\\:prose-2xl ol ul,.lg\\:prose-2xl ul ol,.lg\\:prose-2xl ul ul{margin-top:.6666667em;margin-bottom:.6666667em}.lg\\:prose-2xl hr{margin-top:3em;margin-bottom:3em}.lg\\:prose-2xl h2+*,.lg\\:prose-2xl h3+*,.lg\\:prose-2xl h4+*,.lg\\:prose-2xl hr+*{margin-top:0}.lg\\:prose-2xl table{font-size:.8333333em;line-height:1.4}.lg\\:prose-2xl thead th{padding-right:.6em;padding-bottom:.8em;padding-left:.6em}.lg\\:prose-2xl thead th:first-child{padding-left:0}.lg\\:prose-2xl thead th:last-child{padding-right:0}.lg\\:prose-2xl tbody td{padding:.8em .6em}.lg\\:prose-2xl tbody td:first-child{padding-left:0}.lg\\:prose-2xl tbody td:last-child{padding-right:0}.lg\\:prose-2xl>:first-child{margin-top:0}.lg\\:prose-2xl>:last-child{margin-bottom:0}.lg\\:-mx-8{margin-left:-2rem;margin-right:-2rem}.lg\\:px-8{padding-left:2rem;padding-right:2rem}.lg\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.lg\\:grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}}@media (min-width:1280px){.xl\\:container{width:100%}}@media (min-width:1280px) and (min-width:640px){.xl\\:container{max-width:640px}}@media (min-width:1280px) and (min-width:768px){.xl\\:container{max-width:768px}}@media (min-width:1280px) and (min-width:1024px){.xl\\:container{max-width:1024px}}@media (min-width:1280px) and (min-width:1280px){.xl\\:container{max-width:1280px}}@media (min-width:1280px){.xl\\:prose{color:#374151;max-width:65ch}.xl\\:prose [class~=lead]{color:#4b5563;font-size:1.25em;line-height:1.6;margin-top:1.2em;margin-bottom:1.2em}.xl\\:prose a{color:#5850ec;text-decoration:none;font-weight:600}.xl\\:prose strong{color:#161e2e;font-weight:600}.xl\\:prose ol{counter-reset:list-counter;margin-top:1.25em;margin-bottom:1.25em}.xl\\:prose ol>li{position:relative;counter-increment:list-counter;padding-left:1.75em}.xl\\:prose ol>li:before{content:counter(list-counter) \".\";position:absolute;font-weight:400;color:#6b7280}.xl\\:prose ul>li{position:relative;padding-left:1.75em}.xl\\:prose ul>li:before{content:\"\";position:absolute;background-color:#d2d6dc;border-radius:50%;width:.375em;height:.375em;top:.6875em;left:.25em}.xl\\:prose hr{border-color:#e5e7eb;border-top-width:1px;margin-top:3em;margin-bottom:3em}.xl\\:prose blockquote{font-weight:500;font-style:italic;color:#161e2e;border-left-width:.25rem;border-left-color:#e5e7eb;quotes:\"\\201C\"\"\\201D\"\"\\2018\"\"\\2019\";margin-top:1.6em;margin-bottom:1.6em;padding-left:1em}.xl\\:prose blockquote p:first-of-type:before{content:open-quote}.xl\\:prose blockquote p:last-of-type:after{content:close-quote}.xl\\:prose h1{color:#1a202c;font-weight:800;font-size:2.25em;margin-top:0;margin-bottom:.8888889em;line-height:1.1111111}.xl\\:prose h2{color:#1a202c;font-weight:700;font-size:1.5em;margin-top:2em;margin-bottom:1em;line-height:1.3333333}.xl\\:prose h3{font-size:1.25em;margin-top:1.6em;margin-bottom:.6em;line-height:1.6}.xl\\:prose h3,.xl\\:prose h4{color:#1a202c;font-weight:600}.xl\\:prose h4{margin-top:1.5em;margin-bottom:.5em;line-height:1.5}.xl\\:prose figure figcaption{color:#6b7280;font-size:.875em;line-height:1.4285714;margin-top:.8571429em}.xl\\:prose code{color:#161e2e;font-weight:600;font-size:.875em}.xl\\:prose code:after,.xl\\:prose code:before{content:\"`\"}.xl\\:prose pre{color:#e5e7eb;background-color:#252f3f;overflow-x:auto;font-size:.875em;line-height:1.7142857;margin-top:1.7142857em;margin-bottom:1.7142857em;border-radius:.375rem;padding:.8571429em 1.1428571em}.xl\\:prose pre code{background-color:transparent;border-width:0;border-radius:0;padding:0;font-weight:400;color:inherit;font-size:inherit;font-family:inherit;line-height:inherit}.xl\\:prose pre code:after,.xl\\:prose pre code:before{content:\"\"}.xl\\:prose table{width:100%;table-layout:auto;text-align:left;margin-top:2em;margin-bottom:2em;font-size:.875em;line-height:1.7142857}.xl\\:prose thead{color:#161e2e;font-weight:600;border-bottom-width:1px;border-bottom-color:#d2d6dc}.xl\\:prose thead th{vertical-align:bottom;padding-right:.5714286em;padding-bottom:.5714286em;padding-left:.5714286em}.xl\\:prose tbody tr{border-bottom-width:1px;border-bottom-color:#e5e7eb}.xl\\:prose tbody tr:last-child{border-bottom-width:0}.xl\\:prose tbody td{vertical-align:top;padding:.5714286em}.xl\\:prose{font-size:1rem;line-height:1.75}.xl\\:prose p{margin-top:1.25em;margin-bottom:1.25em}.xl\\:prose figure,.xl\\:prose img,.xl\\:prose video{margin-top:2em;margin-bottom:2em}.xl\\:prose figure>*{margin-top:0;margin-bottom:0}.xl\\:prose h2 code{font-size:.875em}.xl\\:prose h3 code{font-size:.9em}.xl\\:prose ul{margin-top:1.25em;margin-bottom:1.25em}.xl\\:prose li{margin-top:.5em;margin-bottom:.5em}.xl\\:prose ol>li:before{left:0}.xl\\:prose>ul>li p{margin-top:.75em;margin-bottom:.75em}.xl\\:prose>ul>li>:first-child{margin-top:1.25em}.xl\\:prose>ul>li>:last-child{margin-bottom:1.25em}.xl\\:prose>ol>li>:first-child{margin-top:1.25em}.xl\\:prose>ol>li>:last-child{margin-bottom:1.25em}.xl\\:prose ol ol,.xl\\:prose ol ul,.xl\\:prose ul ol,.xl\\:prose ul ul{margin-top:.75em;margin-bottom:.75em}.xl\\:prose h2+*,.xl\\:prose h3+*,.xl\\:prose h4+*,.xl\\:prose hr+*{margin-top:0}.xl\\:prose thead th:first-child{padding-left:0}.xl\\:prose thead th:last-child{padding-right:0}.xl\\:prose tbody td:first-child{padding-left:0}.xl\\:prose tbody td:last-child{padding-right:0}.xl\\:prose>:first-child{margin-top:0}.xl\\:prose>:last-child{margin-bottom:0}.xl\\:prose h1,.xl\\:prose h2,.xl\\:prose h3,.xl\\:prose h4{color:#161e2e}.xl\\:prose-sm{font-size:.875rem;line-height:1.7142857}.xl\\:prose-sm p{margin-top:1.1428571em;margin-bottom:1.1428571em}.xl\\:prose-sm [class~=lead]{font-size:1.2857143em;line-height:1.5555556;margin-top:.8888889em;margin-bottom:.8888889em}.xl\\:prose-sm blockquote{margin-top:1.3333333em;margin-bottom:1.3333333em;padding-left:1.1111111em}.xl\\:prose-sm h1{font-size:2.1428571em;margin-top:0;margin-bottom:.8em;line-height:1.2}.xl\\:prose-sm h2{font-size:1.4285714em;margin-top:1.6em;margin-bottom:.8em;line-height:1.4}.xl\\:prose-sm h3{font-size:1.2857143em;margin-top:1.5555556em;margin-bottom:.4444444em;line-height:1.5555556}.xl\\:prose-sm h4{margin-top:1.4285714em;margin-bottom:.5714286em;line-height:1.4285714}.xl\\:prose-sm figure,.xl\\:prose-sm img,.xl\\:prose-sm video{margin-top:1.7142857em;margin-bottom:1.7142857em}.xl\\:prose-sm figure>*{margin-top:0;margin-bottom:0}.xl\\:prose-sm figure figcaption{font-size:.8571429em;line-height:1.3333333;margin-top:.6666667em}.xl\\:prose-sm code{font-size:.8571429em}.xl\\:prose-sm h2 code{font-size:.9em}.xl\\:prose-sm h3 code{font-size:.8888889em}.xl\\:prose-sm pre{font-size:.8571429em;line-height:1.6666667;margin-top:1.6666667em;margin-bottom:1.6666667em;border-radius:.25rem;padding:.6666667em 1em}.xl\\:prose-sm ol,.xl\\:prose-sm ul{margin-top:1.1428571em;margin-bottom:1.1428571em}.xl\\:prose-sm li{margin-top:.2857143em;margin-bottom:.2857143em}.xl\\:prose-sm ol>li{padding-left:1.5714286em}.xl\\:prose-sm ol>li:before{left:0}.xl\\:prose-sm ul>li{padding-left:1.5714286em}.xl\\:prose-sm ul>li:before{height:.3571429em;width:.3571429em;top:.67857em;left:.2142857em}.xl\\:prose-sm>ul>li p{margin-top:.5714286em;margin-bottom:.5714286em}.xl\\:prose-sm>ul>li>:first-child{margin-top:1.1428571em}.xl\\:prose-sm>ul>li>:last-child{margin-bottom:1.1428571em}.xl\\:prose-sm>ol>li>:first-child{margin-top:1.1428571em}.xl\\:prose-sm>ol>li>:last-child{margin-bottom:1.1428571em}.xl\\:prose-sm ol ol,.xl\\:prose-sm ol ul,.xl\\:prose-sm ul ol,.xl\\:prose-sm ul ul{margin-top:.5714286em;margin-bottom:.5714286em}.xl\\:prose-sm hr{margin-top:2.8571429em;margin-bottom:2.8571429em}.xl\\:prose-sm h2+*,.xl\\:prose-sm h3+*,.xl\\:prose-sm h4+*,.xl\\:prose-sm hr+*{margin-top:0}.xl\\:prose-sm table{font-size:.8571429em;line-height:1.5}.xl\\:prose-sm thead th{padding-right:1em;padding-bottom:.6666667em;padding-left:1em}.xl\\:prose-sm thead th:first-child{padding-left:0}.xl\\:prose-sm thead th:last-child{padding-right:0}.xl\\:prose-sm tbody td{padding:.6666667em 1em}.xl\\:prose-sm tbody td:first-child{padding-left:0}.xl\\:prose-sm tbody td:last-child{padding-right:0}.xl\\:prose-sm>:first-child{margin-top:0}.xl\\:prose-sm>:last-child{margin-bottom:0}.xl\\:prose-lg{font-size:1.125rem;line-height:1.7777778}.xl\\:prose-lg p{margin-top:1.3333333em;margin-bottom:1.3333333em}.xl\\:prose-lg [class~=lead]{font-size:1.2222222em;line-height:1.4545455;margin-top:1.0909091em;margin-bottom:1.0909091em}.xl\\:prose-lg blockquote{margin-top:1.6666667em;margin-bottom:1.6666667em;padding-left:1em}.xl\\:prose-lg h1{font-size:2.6666667em;margin-top:0;margin-bottom:.8333333em;line-height:1}.xl\\:prose-lg h2{font-size:1.6666667em;margin-top:1.8666667em;margin-bottom:1.0666667em;line-height:1.3333333}.xl\\:prose-lg h3{font-size:1.3333333em;margin-top:1.6666667em;margin-bottom:.6666667em;line-height:1.5}.xl\\:prose-lg h4{margin-top:1.7777778em;margin-bottom:.4444444em;line-height:1.5555556}.xl\\:prose-lg figure,.xl\\:prose-lg img,.xl\\:prose-lg video{margin-top:1.7777778em;margin-bottom:1.7777778em}.xl\\:prose-lg figure>*{margin-top:0;margin-bottom:0}.xl\\:prose-lg figure figcaption{font-size:.8888889em;line-height:1.5;margin-top:1em}.xl\\:prose-lg code{font-size:.8888889em}.xl\\:prose-lg h2 code{font-size:.8666667em}.xl\\:prose-lg h3 code{font-size:.875em}.xl\\:prose-lg pre{font-size:.8888889em;line-height:1.75;margin-top:2em;margin-bottom:2em;border-radius:.375rem;padding:1em 1.5em}.xl\\:prose-lg ol,.xl\\:prose-lg ul{margin-top:1.3333333em;margin-bottom:1.3333333em}.xl\\:prose-lg li{margin-top:.6666667em;margin-bottom:.6666667em}.xl\\:prose-lg ol>li{padding-left:1.6666667em}.xl\\:prose-lg ol>li:before{left:0}.xl\\:prose-lg ul>li{padding-left:1.6666667em}.xl\\:prose-lg ul>li:before{width:.3333333em;height:.3333333em;top:.72222em;left:.2222222em}.xl\\:prose-lg>ul>li p{margin-top:.8888889em;margin-bottom:.8888889em}.xl\\:prose-lg>ul>li>:first-child{margin-top:1.3333333em}.xl\\:prose-lg>ul>li>:last-child{margin-bottom:1.3333333em}.xl\\:prose-lg>ol>li>:first-child{margin-top:1.3333333em}.xl\\:prose-lg>ol>li>:last-child{margin-bottom:1.3333333em}.xl\\:prose-lg ol ol,.xl\\:prose-lg ol ul,.xl\\:prose-lg ul ol,.xl\\:prose-lg ul ul{margin-top:.8888889em;margin-bottom:.8888889em}.xl\\:prose-lg hr{margin-top:3.1111111em;margin-bottom:3.1111111em}.xl\\:prose-lg h2+*,.xl\\:prose-lg h3+*,.xl\\:prose-lg h4+*,.xl\\:prose-lg hr+*{margin-top:0}.xl\\:prose-lg table{font-size:.8888889em;line-height:1.5}.xl\\:prose-lg thead th{padding-right:.75em;padding-bottom:.75em;padding-left:.75em}.xl\\:prose-lg thead th:first-child{padding-left:0}.xl\\:prose-lg thead th:last-child{padding-right:0}.xl\\:prose-lg tbody td{padding:.75em}.xl\\:prose-lg tbody td:first-child{padding-left:0}.xl\\:prose-lg tbody td:last-child{padding-right:0}.xl\\:prose-lg>:first-child{margin-top:0}.xl\\:prose-lg>:last-child{margin-bottom:0}.xl\\:prose-xl{font-size:1.25rem;line-height:1.8}.xl\\:prose-xl p{margin-top:1.2em;margin-bottom:1.2em}.xl\\:prose-xl [class~=lead]{font-size:1.2em;line-height:1.5;margin-top:1em;margin-bottom:1em}.xl\\:prose-xl blockquote{margin-top:1.6em;margin-bottom:1.6em;padding-left:1.0666667em}.xl\\:prose-xl h1{font-size:2.8em;margin-top:0;margin-bottom:.8571429em;line-height:1}.xl\\:prose-xl h2{font-size:1.8em;margin-top:1.5555556em;margin-bottom:.8888889em;line-height:1.1111111}.xl\\:prose-xl h3{font-size:1.5em;margin-top:1.6em;margin-bottom:.6666667em;line-height:1.3333333}.xl\\:prose-xl h4{margin-top:1.8em;margin-bottom:.6em;line-height:1.6}.xl\\:prose-xl figure,.xl\\:prose-xl img,.xl\\:prose-xl video{margin-top:2em;margin-bottom:2em}.xl\\:prose-xl figure>*{margin-top:0;margin-bottom:0}.xl\\:prose-xl figure figcaption{font-size:.9em;line-height:1.5555556;margin-top:1em}.xl\\:prose-xl code{font-size:.9em}.xl\\:prose-xl h2 code{font-size:.8611111em}.xl\\:prose-xl h3 code{font-size:.9em}.xl\\:prose-xl pre{font-size:.9em;line-height:1.7777778;margin-top:2em;margin-bottom:2em;border-radius:.5rem;padding:1.1111111em 1.3333333em}.xl\\:prose-xl ol,.xl\\:prose-xl ul{margin-top:1.2em;margin-bottom:1.2em}.xl\\:prose-xl li{margin-top:.6em;margin-bottom:.6em}.xl\\:prose-xl ol>li{padding-left:1.8em}.xl\\:prose-xl ol>li:before{left:0}.xl\\:prose-xl ul>li{padding-left:1.8em}.xl\\:prose-xl ul>li:before{width:.35em;height:.35em;top:.725em;left:.25em}.xl\\:prose-xl>ul>li p{margin-top:.8em;margin-bottom:.8em}.xl\\:prose-xl>ul>li>:first-child{margin-top:1.2em}.xl\\:prose-xl>ul>li>:last-child{margin-bottom:1.2em}.xl\\:prose-xl>ol>li>:first-child{margin-top:1.2em}.xl\\:prose-xl>ol>li>:last-child{margin-bottom:1.2em}.xl\\:prose-xl ol ol,.xl\\:prose-xl ol ul,.xl\\:prose-xl ul ol,.xl\\:prose-xl ul ul{margin-top:.8em;margin-bottom:.8em}.xl\\:prose-xl hr{margin-top:2.8em;margin-bottom:2.8em}.xl\\:prose-xl h2+*,.xl\\:prose-xl h3+*,.xl\\:prose-xl h4+*,.xl\\:prose-xl hr+*{margin-top:0}.xl\\:prose-xl table{font-size:.9em;line-height:1.5555556}.xl\\:prose-xl thead th{padding-right:.6666667em;padding-bottom:.8888889em;padding-left:.6666667em}.xl\\:prose-xl thead th:first-child{padding-left:0}.xl\\:prose-xl thead th:last-child{padding-right:0}.xl\\:prose-xl tbody td{padding:.8888889em .6666667em}.xl\\:prose-xl tbody td:first-child{padding-left:0}.xl\\:prose-xl tbody td:last-child{padding-right:0}.xl\\:prose-xl>:first-child{margin-top:0}.xl\\:prose-xl>:last-child{margin-bottom:0}.xl\\:prose-2xl{font-size:1.5rem;line-height:1.6666667}.xl\\:prose-2xl p{margin-top:1.3333333em;margin-bottom:1.3333333em}.xl\\:prose-2xl [class~=lead]{font-size:1.25em;line-height:1.4666667;margin-top:1.0666667em;margin-bottom:1.0666667em}.xl\\:prose-2xl blockquote{margin-top:1.7777778em;margin-bottom:1.7777778em;padding-left:1.1111111em}.xl\\:prose-2xl h1{font-size:2.6666667em;margin-top:0;margin-bottom:.875em;line-height:1}.xl\\:prose-2xl h2{font-size:2em;margin-top:1.5em;margin-bottom:.8333333em;line-height:1.0833333}.xl\\:prose-2xl h3{font-size:1.5em;margin-top:1.5555556em;margin-bottom:.6666667em;line-height:1.2222222}.xl\\:prose-2xl h4{margin-top:1.6666667em;margin-bottom:.6666667em;line-height:1.5}.xl\\:prose-2xl figure,.xl\\:prose-2xl img,.xl\\:prose-2xl video{margin-top:2em;margin-bottom:2em}.xl\\:prose-2xl figure>*{margin-top:0;margin-bottom:0}.xl\\:prose-2xl figure figcaption{font-size:.8333333em;line-height:1.6;margin-top:1em}.xl\\:prose-2xl code{font-size:.8333333em}.xl\\:prose-2xl h2 code{font-size:.875em}.xl\\:prose-2xl h3 code{font-size:.8888889em}.xl\\:prose-2xl pre{font-size:.8333333em;line-height:1.8;margin-top:2em;margin-bottom:2em;border-radius:.5rem;padding:1.2em 1.6em}.xl\\:prose-2xl ol,.xl\\:prose-2xl ul{margin-top:1.3333333em;margin-bottom:1.3333333em}.xl\\:prose-2xl li{margin-top:.5em;margin-bottom:.5em}.xl\\:prose-2xl ol>li{padding-left:1.6666667em}.xl\\:prose-2xl ol>li:before{left:0}.xl\\:prose-2xl ul>li{padding-left:1.6666667em}.xl\\:prose-2xl ul>li:before{width:.3333333em;height:.3333333em;top:.66667em;left:.25em}.xl\\:prose-2xl>ul>li p{margin-top:.8333333em;margin-bottom:.8333333em}.xl\\:prose-2xl>ul>li>:first-child{margin-top:1.3333333em}.xl\\:prose-2xl>ul>li>:last-child{margin-bottom:1.3333333em}.xl\\:prose-2xl>ol>li>:first-child{margin-top:1.3333333em}.xl\\:prose-2xl>ol>li>:last-child{margin-bottom:1.3333333em}.xl\\:prose-2xl ol ol,.xl\\:prose-2xl ol ul,.xl\\:prose-2xl ul ol,.xl\\:prose-2xl ul ul{margin-top:.6666667em;margin-bottom:.6666667em}.xl\\:prose-2xl hr{margin-top:3em;margin-bottom:3em}.xl\\:prose-2xl h2+*,.xl\\:prose-2xl h3+*,.xl\\:prose-2xl h4+*,.xl\\:prose-2xl hr+*{margin-top:0}.xl\\:prose-2xl table{font-size:.8333333em;line-height:1.4}.xl\\:prose-2xl thead th{padding-right:.6em;padding-bottom:.8em;padding-left:.6em}.xl\\:prose-2xl thead th:first-child{padding-left:0}.xl\\:prose-2xl thead th:last-child{padding-right:0}.xl\\:prose-2xl tbody td{padding:.8em .6em}.xl\\:prose-2xl tbody td:first-child{padding-left:0}.xl\\:prose-2xl tbody td:last-child{padding-right:0}.xl\\:prose-2xl>:first-child{margin-top:0}.xl\\:prose-2xl>:last-child{margin-bottom:0}.xl\\:px-0{padding-left:0;padding-right:0}}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(22);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(3).default("517a8dd7", content, true)

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "code[class*=language-],pre[class*=language-]{color:#000;background:none;text-shadow:0 1px #fff;font-family:Consolas,Monaco,\"Andale Mono\",\"Ubuntu Mono\",monospace;font-size:1em;text-align:left;white-space:pre;word-spacing:normal;word-break:normal;word-wrap:normal;line-height:1.5;-moz-tab-size:4;-o-tab-size:4;tab-size:4;-webkit-hyphens:none;-ms-hyphens:none;hyphens:none}code[class*=language-]::-moz-selection,code[class*=language-] ::-moz-selection,pre[class*=language-]::-moz-selection,pre[class*=language-] ::-moz-selection{text-shadow:none;background:#b3d4fc}code[class*=language-]::selection,code[class*=language-] ::selection,pre[class*=language-]::selection,pre[class*=language-] ::selection{text-shadow:none;background:#b3d4fc}@media print{code[class*=language-],pre[class*=language-]{text-shadow:none}}pre[class*=language-]{padding:1em;margin:.5em 0;overflow:auto}:not(pre)>code[class*=language-],pre[class*=language-]{background:#f5f2f0}:not(pre)>code[class*=language-]{padding:.1em;border-radius:.3em;white-space:normal}.token.cdata,.token.comment,.token.doctype,.token.prolog{color:#708090}.token.punctuation{color:#999}.token.namespace{opacity:.7}.token.boolean,.token.constant,.token.deleted,.token.number,.token.property,.token.symbol,.token.tag{color:#905}.token.attr-name,.token.builtin,.token.char,.token.inserted,.token.selector,.token.string{color:#690}.language-css .token.string,.style .token.string,.token.entity,.token.operator,.token.url{color:#9a6e3a;background:hsla(0,0%,100%,.5)}.token.atrule,.token.attr-value,.token.keyword{color:#07a}.token.class-name,.token.function{color:#dd4a68}.token.important,.token.regex,.token.variable{color:#e90}.token.bold,.token.important{font-weight:700}.token.italic{font-style:italic}.token.entity{cursor:help}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "html{font-size:16px;word-spacing:1px;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;box-sizing:border-box}*,:after,:before{box-sizing:border-box;margin:0}.button--green{display:inline-block;border-radius:4px;border:1px solid #3b8070;color:#3b8070;text-decoration:none;padding:10px 30px}.button--green:hover{color:#fff;background-color:#3b8070}.button--grey{display:inline-block;border-radius:4px;border:1px solid #35495e;color:#35495e;text-decoration:none;padding:10px 30px;margin-left:15px}.button--grey:hover{color:#fff;background-color:#35495e}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 25 */
/***/ (function(module, exports) {

// This file is intentionally left empty for noop aliases

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("property-information");

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "querystring"
var external_querystring_ = __webpack_require__(11);

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(0);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// EXTERNAL MODULE: external "node-fetch"
var external_node_fetch_ = __webpack_require__(12);
var external_node_fetch_default = /*#__PURE__*/__webpack_require__.n(external_node_fetch_);

// CONCATENATED MODULE: ./.nuxt/middleware.js
const middleware = {};
/* harmony default export */ var _nuxt_middleware = (middleware);
// CONCATENATED MODULE: ./.nuxt/utils.js
 // window.{{globals.loadedCallback}} hook
// Useful for jsdom testing or plugins (https://github.com/tmpvar/jsdom#dealing-with-asynchronous-script-loading)

if (false) {}

function empty() {}
function globalHandleError(error) {
  if (external_vue_default.a.config.errorHandler) {
    external_vue_default.a.config.errorHandler(error);
  }
}
function interopDefault(promise) {
  return promise.then(m => m.default || m);
}
function hasFetch(vm) {
  return vm.$options && typeof vm.$options.fetch === 'function' && !vm.$options.fetch.length;
}
function getChildrenComponentInstancesUsingFetch(vm, instances = []) {
  const children = vm.$children || [];

  for (const child of children) {
    if (child.$fetch) {
      instances.push(child);
      continue; // Don't get the children since it will reload the template
    }

    if (child.$children) {
      getChildrenComponentInstancesUsingFetch(child, instances);
    }
  }

  return instances;
}
function applyAsyncData(Component, asyncData) {
  if ( // For SSR, we once all this function without second param to just apply asyncData
  // Prevent doing this for each SSR request
  !asyncData && Component.options.__hasNuxtData) {
    return;
  }

  const ComponentData = Component.options._originDataFn || Component.options.data || function () {
    return {};
  };

  Component.options._originDataFn = ComponentData;

  Component.options.data = function () {
    const data = ComponentData.call(this, this);

    if (this.$ssrContext) {
      asyncData = this.$ssrContext.asyncData[Component.cid];
    }

    return { ...data,
      ...asyncData
    };
  };

  Component.options.__hasNuxtData = true;

  if (Component._Ctor && Component._Ctor.options) {
    Component._Ctor.options.data = Component.options.data;
  }
}
function sanitizeComponent(Component) {
  // If Component already sanitized
  if (Component.options && Component._Ctor === Component) {
    return Component;
  }

  if (!Component.options) {
    Component = external_vue_default.a.extend(Component); // fix issue #6

    Component._Ctor = Component;
  } else {
    Component._Ctor = Component;
    Component.extendOptions = Component.options;
  } // If no component name defined, set file path as name, (also fixes #5703)


  if (!Component.options.name && Component.options.__file) {
    Component.options.name = Component.options.__file;
  }

  return Component;
}
function getMatchedComponents(route, matches = false, prop = 'components') {
  return Array.prototype.concat.apply([], route.matched.map((m, index) => {
    return Object.keys(m[prop]).map(key => {
      matches && matches.push(index);
      return m[prop][key];
    });
  }));
}
function getMatchedComponentsInstances(route, matches = false) {
  return getMatchedComponents(route, matches, 'instances');
}
function flatMapComponents(route, fn) {
  return Array.prototype.concat.apply([], route.matched.map((m, index) => {
    return Object.keys(m.components).reduce((promises, key) => {
      if (m.components[key]) {
        promises.push(fn(m.components[key], m.instances[key], m, key, index));
      } else {
        delete m.components[key];
      }

      return promises;
    }, []);
  }));
}
function resolveRouteComponents(route, fn) {
  return Promise.all(flatMapComponents(route, async (Component, instance, match, key) => {
    // If component is a function, resolve it
    if (typeof Component === 'function' && !Component.options) {
      Component = await Component();
    }

    match.components[key] = Component = sanitizeComponent(Component);
    return typeof fn === 'function' ? fn(Component, instance, match, key) : Component;
  }));
}
async function getRouteData(route) {
  if (!route) {
    return;
  } // Make sure the components are resolved (code-splitting)


  await resolveRouteComponents(route); // Send back a copy of route with meta based on Component definition

  return { ...route,
    meta: getMatchedComponents(route).map((Component, index) => {
      return { ...Component.options.meta,
        ...(route.matched[index] || {}).meta
      };
    })
  };
}
async function setContext(app, context) {
  // If context not defined, create it
  if (!app.context) {
    app.context = {
      isStatic: true,
      isDev: false,
      isHMR: false,
      app,
      payload: context.payload,
      error: context.error,
      base: '/',
      env: {}
    }; // Only set once

    if (false) {}

    if (false) {}

    if (context.ssrContext) {
      app.context.ssrContext = context.ssrContext;
    }

    app.context.redirect = (status, path, query) => {
      if (!status) {
        return;
      }

      app.context._redirected = true; // if only 1 or 2 arguments: redirect('/') or redirect('/', { foo: 'bar' })

      let pathType = typeof path;

      if (typeof status !== 'number' && (pathType === 'undefined' || pathType === 'object')) {
        query = path || {};
        path = status;
        pathType = typeof path;
        status = 302;
      }

      if (pathType === 'object') {
        path = app.router.resolve(path).route.fullPath;
      } // "/absolute/route", "./relative/route" or "../relative/route"


      if (/(^[.]{1,2}\/)|(^\/(?!\/))/.test(path)) {
        app.context.next({
          path,
          query,
          status
        });
      } else {
        path = formatUrl(path, query);

        if (true) {
          app.context.next({
            path,
            status
          });
        }

        if (false) {}
      }
    };

    if (true) {
      app.context.beforeNuxtRender = fn => context.beforeRenderFns.push(fn);
    }

    if (false) {}
  } // Dynamic keys


  const [currentRouteData, fromRouteData] = await Promise.all([getRouteData(context.route), getRouteData(context.from)]);

  if (context.route) {
    app.context.route = currentRouteData;
  }

  if (context.from) {
    app.context.from = fromRouteData;
  }

  app.context.next = context.next;
  app.context._redirected = false;
  app.context._errored = false;
  app.context.isHMR = false;
  app.context.params = app.context.route.params || {};
  app.context.query = app.context.route.query || {};
}
function middlewareSeries(promises, appContext) {
  if (!promises.length || appContext._redirected || appContext._errored) {
    return Promise.resolve();
  }

  return promisify(promises[0], appContext).then(() => {
    return middlewareSeries(promises.slice(1), appContext);
  });
}
function promisify(fn, context) {
  let promise;

  if (fn.length === 2) {
    // fn(context, callback)
    promise = new Promise(resolve => {
      fn(context, function (err, data) {
        if (err) {
          context.error(err);
        }

        data = data || {};
        resolve(data);
      });
    });
  } else {
    promise = fn(context);
  }

  if (promise && promise instanceof Promise && typeof promise.then === 'function') {
    return promise;
  }

  return Promise.resolve(promise);
} // Imported from vue-router

function getLocation(base, mode) {
  let path = decodeURI(window.location.pathname);

  if (mode === 'hash') {
    return window.location.hash.replace(/^#\//, '');
  } // To get matched with sanitized router.base add trailing slash


  if (base && (path.endsWith('/') ? path : path + '/').startsWith(base)) {
    path = path.slice(base.length);
  }

  return (path || '/') + window.location.search + window.location.hash;
} // Imported from path-to-regexp

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */

function compile(str, options) {
  return tokensToFunction(parse(str, options), options);
}
function getQueryDiff(toQuery, fromQuery) {
  const diff = {};
  const queries = { ...toQuery,
    ...fromQuery
  };

  for (const k in queries) {
    if (String(toQuery[k]) !== String(fromQuery[k])) {
      diff[k] = true;
    }
  }

  return diff;
}
function normalizeError(err) {
  let message;

  if (!(err.message || typeof err === 'string')) {
    try {
      message = JSON.stringify(err, null, 2);
    } catch (e) {
      message = `[${err.constructor.name}]`;
    }
  } else {
    message = err.message || err;
  }

  return { ...err,
    message,
    statusCode: err.statusCode || err.status || err.response && err.response.status || 500
  };
}
/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */

const PATH_REGEXP = new RegExp([// Match escaped characters that would otherwise appear in future matches.
// This allows the user to escape special characters that won't transform.
'(\\\\.)', // Match Express-style parameters and un-named parameters with a prefix
// and optional suffixes. Matches appear as:
//
// "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
// "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
// "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
'([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'].join('|'), 'g');
/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */

function parse(str, options) {
  const tokens = [];
  let key = 0;
  let index = 0;
  let path = '';
  const defaultDelimiter = options && options.delimiter || '/';
  let res;

  while ((res = PATH_REGEXP.exec(str)) != null) {
    const m = res[0];
    const escaped = res[1];
    const offset = res.index;
    path += str.slice(index, offset);
    index = offset + m.length; // Ignore already escaped sequences.

    if (escaped) {
      path += escaped[1];
      continue;
    }

    const next = str[index];
    const prefix = res[2];
    const name = res[3];
    const capture = res[4];
    const group = res[5];
    const modifier = res[6];
    const asterisk = res[7]; // Push the current path onto the tokens.

    if (path) {
      tokens.push(path);
      path = '';
    }

    const partial = prefix != null && next != null && next !== prefix;
    const repeat = modifier === '+' || modifier === '*';
    const optional = modifier === '?' || modifier === '*';
    const delimiter = res[2] || defaultDelimiter;
    const pattern = capture || group;
    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter,
      optional,
      repeat,
      partial,
      asterisk: Boolean(asterisk),
      pattern: pattern ? escapeGroup(pattern) : asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?'
    });
  } // Match any characters still remaining.


  if (index < str.length) {
    path += str.substr(index);
  } // If the path exists, push it onto the end.


  if (path) {
    tokens.push(path);
  }

  return tokens;
}
/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */


function encodeURIComponentPretty(str, slashAllowed) {
  const re = slashAllowed ? /[?#]/g : /[/?#]/g;
  return encodeURI(str).replace(re, c => {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase();
  });
}
/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */


function encodeAsterisk(str) {
  return encodeURIComponentPretty(str, true);
}
/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */


function escapeString(str) {
  return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, '\\$1');
}
/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */


function escapeGroup(group) {
  return group.replace(/([=!:$/()])/g, '\\$1');
}
/**
 * Expose a method for transforming tokens into the path function.
 */


function tokensToFunction(tokens, options) {
  // Compile all the tokens into regexps.
  const matches = new Array(tokens.length); // Compile all the patterns before compilation.

  for (let i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$', flags(options));
    }
  }

  return function (obj, opts) {
    let path = '';
    const data = obj || {};
    const options = opts || {};
    const encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;

    for (let i = 0; i < tokens.length; i++) {
      const token = tokens[i];

      if (typeof token === 'string') {
        path += token;
        continue;
      }

      const value = data[token.name || 'pathMatch'];
      let segment;

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix;
          }

          continue;
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined');
        }
      }

      if (Array.isArray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`');
        }

        if (value.length === 0) {
          if (token.optional) {
            continue;
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty');
          }
        }

        for (let j = 0; j < value.length; j++) {
          segment = encode(value[j]);

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`');
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment;
        }

        continue;
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value);

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"');
      }

      path += token.prefix + segment;
    }

    return path;
  };
}
/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */


function flags(options) {
  return options && options.sensitive ? '' : 'i';
}
/**
 * Format given url, append query to url query string
 *
 * @param  {string} url
 * @param  {string} query
 * @return {string}
 */


function formatUrl(url, query) {
  let protocol;
  const index = url.indexOf('://');

  if (index !== -1) {
    protocol = url.substring(0, index);
    url = url.substring(index + 3);
  } else if (url.startsWith('//')) {
    url = url.substring(2);
  }

  let parts = url.split('/');
  let result = (protocol ? protocol + '://' : '//') + parts.shift();
  let path = parts.join('/');

  if (path === '' && parts.length === 1) {
    result += '/';
  }

  let hash;
  parts = path.split('#');

  if (parts.length === 2) {
    [path, hash] = parts;
  }

  result += path ? '/' + path : '';

  if (query && JSON.stringify(query) !== '{}') {
    result += (url.split('?').length === 2 ? '&' : '?') + formatQuery(query);
  }

  result += hash ? '#' + hash : '';
  return result;
}
/**
 * Transform data object to query string
 *
 * @param  {object} query
 * @return {string}
 */


function formatQuery(query) {
  return Object.keys(query).sort().map(key => {
    const val = query[key];

    if (val == null) {
      return '';
    }

    if (Array.isArray(val)) {
      return val.slice().map(val2 => [key, '=', val2].join('')).join('&');
    }

    return key + '=' + val;
  }).filter(Boolean).join('&');
}

function addLifecycleHook(vm, hook, fn) {
  if (!vm.$options[hook]) {
    vm.$options[hook] = [];
  }

  if (!vm.$options[hook].includes(fn)) {
    vm.$options[hook].push(fn);
  }
}
function urlJoin() {
  return [].slice.call(arguments).join('/').replace(/\/+/g, '/').replace(':/', '://');
}
function stripTrailingSlash(path) {
  return path.replace(/\/+$/, '') || '/';
}
function isSamePath(p1, p2) {
  return stripTrailingSlash(p1) === stripTrailingSlash(p2);
}
function setScrollRestoration(newVal) {
  try {
    window.history.scrollRestoration = newVal;
  } catch (e) {}
}
// CONCATENATED MODULE: ./.nuxt/mixins/fetch.server.js



async function serverPrefetch() {
  if (!this._fetchOnServer) {
    return;
  } // Call and await on $fetch


  try {
    await this.$options.fetch.call(this);
  } catch (err) {
    if (false) {}

    this.$fetchState.error = normalizeError(err);
  }

  this.$fetchState.pending = false; // Define an ssrKey for hydration

  this._fetchKey = this.$ssrContext.nuxt.fetch.length; // Add data-fetch-key on parent element of Component

  const attrs = this.$vnode.data.attrs = this.$vnode.data.attrs || {};
  attrs['data-fetch-key'] = this._fetchKey; // Add to ssrContext for window.__NUXT__.fetch

  this.$ssrContext.nuxt.fetch.push(this.$fetchState.error ? {
    _error: this.$fetchState.error
  } : this._data);
}

/* harmony default export */ var fetch_server = ({
  created() {
    if (!hasFetch(this)) {
      return;
    }

    if (typeof this.$options.fetchOnServer === 'function') {
      this._fetchOnServer = this.$options.fetchOnServer.call(this) !== false;
    } else {
      this._fetchOnServer = this.$options.fetchOnServer !== false;
    } // Added for remove vue undefined warning while ssr


    this.$fetch = () => {}; // issue #8043


    external_vue_default.a.util.defineReactive(this, '$fetchState', {
      pending: true,
      error: null,
      timestamp: Date.now()
    });
    addLifecycleHook(this, 'serverPrefetch', serverPrefetch);
  }

});
// EXTERNAL MODULE: external "vue-meta"
var external_vue_meta_ = __webpack_require__(13);
var external_vue_meta_default = /*#__PURE__*/__webpack_require__.n(external_vue_meta_);

// EXTERNAL MODULE: external "vue-client-only"
var external_vue_client_only_ = __webpack_require__(6);
var external_vue_client_only_default = /*#__PURE__*/__webpack_require__.n(external_vue_client_only_);

// EXTERNAL MODULE: external "vue-no-ssr"
var external_vue_no_ssr_ = __webpack_require__(5);
var external_vue_no_ssr_default = /*#__PURE__*/__webpack_require__.n(external_vue_no_ssr_);

// EXTERNAL MODULE: external "vue-router"
var external_vue_router_ = __webpack_require__(4);
var external_vue_router_default = /*#__PURE__*/__webpack_require__.n(external_vue_router_);

// CONCATENATED MODULE: ./.nuxt/router.scrollBehavior.js


if (false) {}

/* harmony default export */ var router_scrollBehavior = (function (to, from, savedPosition) {
  // If the returned position is falsy or an empty object, will retain current scroll position
  let position = false;
  const Pages = getMatchedComponents(to); // Scroll to the top of the page if...

  if ( // One of the children set `scrollToTop`
  Pages.some(Page => Page.options.scrollToTop) || // scrollToTop set in only page without children
  Pages.length < 2 && Pages.every(Page => Page.options.scrollToTop !== false)) {
    position = {
      x: 0,
      y: 0
    };
  } // savedPosition is only available for popstate navigations (back button)


  if (savedPosition) {
    position = savedPosition;
  }

  const nuxt = window.$nuxt;

  if ( // Route hash changes
  to.path === from.path && to.hash !== from.hash || // Initial load (vuejs/vue-router#3199)
  to === from) {
    nuxt.$nextTick(() => nuxt.$emit('triggerScroll'));
  }

  return new Promise(resolve => {
    // wait for the out transition to complete (if necessary)
    nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash; // CSS.escape() is not supported with IE and Edge.

        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1));
        }

        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = {
              selector: hash
            };
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).');
        }
      }

      resolve(position);
    });
  });
});
// CONCATENATED MODULE: ./.nuxt/router.js





const _4ba8b56c = () => interopDefault(__webpack_require__.e(/* import() | pages/index */ 1).then(__webpack_require__.bind(null, 35))); // TODO: remove in Nuxt 3


const emptyFn = () => {};

const originalPush = external_vue_router_default.a.prototype.push;

external_vue_router_default.a.prototype.push = function push(location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort);
};

external_vue_default.a.use(external_vue_router_default.a);
const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior: router_scrollBehavior,
  routes: [{
    path: "/",
    component: _4ba8b56c,
    name: "index"
  }],
  fallback: false
};
function createRouter() {
  return new external_vue_router_default.a(routerOptions);
}
// CONCATENATED MODULE: ./.nuxt/components/nuxt-child.js
/* harmony default export */ var nuxt_child = ({
  name: 'NuxtChild',
  functional: true,
  props: {
    nuxtChildKey: {
      type: String,
      default: ''
    },
    keepAlive: Boolean,
    keepAliveProps: {
      type: Object,
      default: undefined
    }
  },

  render(_, {
    parent,
    data,
    props
  }) {
    const h = parent.$createElement;
    data.nuxtChild = true;
    const _parent = parent;
    const transitions = parent.$nuxt.nuxt.transitions;
    const defaultTransition = parent.$nuxt.nuxt.defaultTransition;
    let depth = 0;

    while (parent) {
      if (parent.$vnode && parent.$vnode.data.nuxtChild) {
        depth++;
      }

      parent = parent.$parent;
    }

    data.nuxtChildDepth = depth;
    const transition = transitions[depth] || defaultTransition;
    const transitionProps = {};
    transitionsKeys.forEach(key => {
      if (typeof transition[key] !== 'undefined') {
        transitionProps[key] = transition[key];
      }
    });
    const listeners = {};
    listenersKeys.forEach(key => {
      if (typeof transition[key] === 'function') {
        listeners[key] = transition[key].bind(_parent);
      }
    });

    if (false) {} // make sure that leave is called asynchronous (fix #5703)


    if (transition.css === false) {
      const leave = listeners.leave; // only add leave listener when user didnt provide one
      // or when it misses the done argument

      if (!leave || leave.length < 2) {
        listeners.leave = (el, done) => {
          if (leave) {
            leave.call(_parent, el);
          }

          _parent.$nextTick(done);
        };
      }
    }

    let routerView = h('routerView', data);

    if (props.keepAlive) {
      routerView = h('keep-alive', {
        props: props.keepAliveProps
      }, [routerView]);
    }

    return h('transition', {
      props: transitionProps,
      on: listeners
    }, [routerView]);
  }

});
const transitionsKeys = ['name', 'mode', 'appear', 'css', 'type', 'duration', 'enterClass', 'leaveClass', 'appearClass', 'enterActiveClass', 'enterActiveClass', 'leaveActiveClass', 'appearActiveClass', 'enterToClass', 'leaveToClass', 'appearToClass'];
const listenersKeys = ['beforeEnter', 'enter', 'afterEnter', 'enterCancelled', 'beforeLeave', 'leave', 'afterLeave', 'leaveCancelled', 'beforeAppear', 'appear', 'afterAppear', 'appearCancelled'];
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./.nuxt/components/nuxt-error.vue?vue&type=template&id=38a3918a&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"__nuxt-error-page"},[_vm._ssrNode("<div class=\"error\">","</div>",[_vm._ssrNode("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"90\" height=\"90\" fill=\"#DBE1EC\" viewBox=\"0 0 48 48\"><path d=\"M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z\"></path></svg> <div class=\"title\">"+_vm._ssrEscape(_vm._s(_vm.message))+"</div> "),(_vm.statusCode === 404)?_vm._ssrNode("<p class=\"description\">","</p>",[(typeof _vm.$route === 'undefined')?_vm._ssrNode("<a href=\"/\" class=\"error-link\">","</a>"):_c('NuxtLink',{staticClass:"error-link",attrs:{"to":"/"}},[_vm._v("Back to the home page")])],1):_vm._e(),_vm._ssrNode(" <div class=\"logo\"><a href=\"https://nuxtjs.org\" target=\"_blank\" rel=\"noopener\">Nuxt.js</a></div>")],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./.nuxt/components/nuxt-error.vue?vue&type=template&id=38a3918a&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./.nuxt/components/nuxt-error.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var nuxt_errorvue_type_script_lang_js_ = ({
  name: 'NuxtError',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  computed: {
    statusCode() {
      return this.error && this.error.statusCode || 500;
    },

    message() {
      return this.error.message || 'Error';
    }

  },

  head() {
    return {
      title: this.message,
      meta: [{
        name: 'viewport',
        content: 'width=device-width,initial-scale=1.0,minimum-scale=1.0'
      }]
    };
  }

});
// CONCATENATED MODULE: ./.nuxt/components/nuxt-error.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_nuxt_errorvue_type_script_lang_js_ = (nuxt_errorvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./.nuxt/components/nuxt-error.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(15)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var nuxt_error_component = Object(componentNormalizer["a" /* default */])(
  components_nuxt_errorvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "470232cc"
  
)

/* harmony default export */ var nuxt_error = (nuxt_error_component.exports);
// CONCATENATED MODULE: ./.nuxt/components/nuxt.js




/* harmony default export */ var components_nuxt = ({
  name: 'Nuxt',
  components: {
    NuxtChild: nuxt_child,
    NuxtError: nuxt_error
  },
  props: {
    nuxtChildKey: {
      type: String,
      default: undefined
    },
    keepAlive: Boolean,
    keepAliveProps: {
      type: Object,
      default: undefined
    },
    name: {
      type: String,
      default: 'default'
    }
  },

  errorCaptured(error) {
    // if we receive and error while showing the NuxtError component
    // capture the error and force an immediate update so we re-render
    // without the NuxtError component
    if (this.displayingNuxtError) {
      this.errorFromNuxtError = error;
      this.$forceUpdate();
    }
  },

  computed: {
    routerViewKey() {
      // If nuxtChildKey prop is given or current route has children
      if (typeof this.nuxtChildKey !== 'undefined' || this.$route.matched.length > 1) {
        return this.nuxtChildKey || compile(this.$route.matched[0].path)(this.$route.params);
      }

      const [matchedRoute] = this.$route.matched;

      if (!matchedRoute) {
        return this.$route.path;
      }

      const Component = matchedRoute.components.default;

      if (Component && Component.options) {
        const {
          options
        } = Component;

        if (options.key) {
          return typeof options.key === 'function' ? options.key(this.$route) : options.key;
        }
      }

      const strict = /\/$/.test(matchedRoute.path);
      return strict ? this.$route.path : this.$route.path.replace(/\/$/, '');
    }

  },

  beforeCreate() {
    external_vue_default.a.util.defineReactive(this, 'nuxt', this.$root.$options.nuxt);
  },

  render(h) {
    // if there is no error
    if (!this.nuxt.err) {
      // Directly return nuxt child
      return h('NuxtChild', {
        key: this.routerViewKey,
        props: this.$props
      });
    } // if an error occurred within NuxtError show a simple
    // error message instead to prevent looping


    if (this.errorFromNuxtError) {
      this.$nextTick(() => this.errorFromNuxtError = false);
      return h('div', {}, [h('h2', 'An error occurred while showing the error page'), h('p', 'Unfortunately an error occurred and while showing the error page another error occurred'), h('p', `Error details: ${this.errorFromNuxtError.toString()}`), h('nuxt-link', {
        props: {
          to: '/'
        }
      }, 'Go back to home')]);
    } // track if we are showing the NuxtError component


    this.displayingNuxtError = true;
    this.$nextTick(() => this.displayingNuxtError = false);
    return h(nuxt_error, {
      props: {
        error: this.nuxt.err
      }
    });
  }

});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./.nuxt/components/nuxt-loading.vue?vue&type=script&lang=js&
/* harmony default export */ var nuxt_loadingvue_type_script_lang_js_ = ({
  name: 'NuxtLoading',

  data() {
    return {
      percent: 0,
      show: false,
      canSucceed: true,
      reversed: false,
      skipTimerCount: 0,
      rtl: false,
      throttle: 200,
      duration: 5000,
      continuous: false
    };
  },

  computed: {
    left() {
      if (!this.continuous && !this.rtl) {
        return false;
      }

      return this.rtl ? this.reversed ? '0px' : 'auto' : !this.reversed ? '0px' : 'auto';
    }

  },

  beforeDestroy() {
    this.clear();
  },

  methods: {
    clear() {
      clearInterval(this._timer);
      clearTimeout(this._throttle);
      this._timer = null;
    },

    start() {
      this.clear();
      this.percent = 0;
      this.reversed = false;
      this.skipTimerCount = 0;
      this.canSucceed = true;

      if (this.throttle) {
        this._throttle = setTimeout(() => this.startTimer(), this.throttle);
      } else {
        this.startTimer();
      }

      return this;
    },

    set(num) {
      this.show = true;
      this.canSucceed = true;
      this.percent = Math.min(100, Math.max(0, Math.floor(num)));
      return this;
    },

    get() {
      return this.percent;
    },

    increase(num) {
      this.percent = Math.min(100, Math.floor(this.percent + num));
      return this;
    },

    decrease(num) {
      this.percent = Math.max(0, Math.floor(this.percent - num));
      return this;
    },

    pause() {
      clearInterval(this._timer);
      return this;
    },

    resume() {
      this.startTimer();
      return this;
    },

    finish() {
      this.percent = this.reversed ? 0 : 100;
      this.hide();
      return this;
    },

    hide() {
      this.clear();
      setTimeout(() => {
        this.show = false;
        this.$nextTick(() => {
          this.percent = 0;
          this.reversed = false;
        });
      }, 500);
      return this;
    },

    fail(error) {
      this.canSucceed = false;
      return this;
    },

    startTimer() {
      if (!this.show) {
        this.show = true;
      }

      if (typeof this._cut === 'undefined') {
        this._cut = 10000 / Math.floor(this.duration);
      }

      this._timer = setInterval(() => {
        /**
         * When reversing direction skip one timers
         * so 0, 100 are displayed for two iterations
         * also disable css width transitioning
         * which otherwise interferes and shows
         * a jojo effect
         */
        if (this.skipTimerCount > 0) {
          this.skipTimerCount--;
          return;
        }

        if (this.reversed) {
          this.decrease(this._cut);
        } else {
          this.increase(this._cut);
        }

        if (this.continuous) {
          if (this.percent >= 100) {
            this.skipTimerCount = 1;
            this.reversed = !this.reversed;
          } else if (this.percent <= 0) {
            this.skipTimerCount = 1;
            this.reversed = !this.reversed;
          }
        }
      }, 100);
    }

  },

  render(h) {
    let el = h(false);

    if (this.show) {
      el = h('div', {
        staticClass: 'nuxt-progress',
        class: {
          'nuxt-progress-notransition': this.skipTimerCount > 0,
          'nuxt-progress-failed': !this.canSucceed
        },
        style: {
          width: this.percent + '%',
          left: this.left
        }
      });
    }

    return el;
  }

});
// CONCATENATED MODULE: ./.nuxt/components/nuxt-loading.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_nuxt_loadingvue_type_script_lang_js_ = (nuxt_loadingvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./.nuxt/components/nuxt-loading.vue
var nuxt_loading_render, nuxt_loading_staticRenderFns


function nuxt_loading_injectStyles (context) {
  
  var style0 = __webpack_require__(17)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var nuxt_loading_component = Object(componentNormalizer["a" /* default */])(
  components_nuxt_loadingvue_type_script_lang_js_,
  nuxt_loading_render,
  nuxt_loading_staticRenderFns,
  false,
  nuxt_loading_injectStyles,
  null,
  "0597ad00"
  
)

/* harmony default export */ var nuxt_loading = (nuxt_loading_component.exports);
// EXTERNAL MODULE: ./node_modules/@nuxtjs/tailwindcss/lib/files/tailwind.css
var tailwind = __webpack_require__(19);

// EXTERNAL MODULE: ./node_modules/prismjs/themes/prism.css
var prism = __webpack_require__(21);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./layouts/default.vue?vue&type=template&id=1bdcecfd&
var defaultvue_type_template_id_1bdcecfd_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('NavBar'),_vm._ssrNode(" "),_c('nuxt',{staticClass:"px-0 pt-0 mx-auto xl:container sm:px-4 xl:px-0 sm:pt-6"})],2)}
var defaultvue_type_template_id_1bdcecfd_staticRenderFns = []


// CONCATENATED MODULE: ./layouts/default.vue?vue&type=template&id=1bdcecfd&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/navbar.vue?vue&type=template&id=8a5d4c24&scoped=true&
var navbarvue_type_template_id_8a5d4c24_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('nav',{staticClass:"flex justify-center bg-white py-3"},[_vm._ssrNode("<div class=\"content-center\" data-v-8a5d4c24>","</div>",[_c('nuxt-link',{staticClass:"px-3 py-2 rounded-md text-sm font-medium leading-5 text-gray-500 transition duration-150 ease-in-out",attrs:{"to":"/"}},[_vm._v("\n      Home\n    ")])],1)])}
var navbarvue_type_template_id_8a5d4c24_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./components/navbar.vue?vue&type=template&id=8a5d4c24&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/navbar.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var navbarvue_type_script_lang_js_ = ({
  data() {
    return {
      isOpen: false
    };
  },

  methods: {
    toggle() {
      this.isOpen = !this.isOpen;
    }

  }
});
// CONCATENATED MODULE: ./components/navbar.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_navbarvue_type_script_lang_js_ = (navbarvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/navbar.vue



function navbar_injectStyles (context) {
  
  
}

/* normalize component */

var navbar_component = Object(componentNormalizer["a" /* default */])(
  components_navbarvue_type_script_lang_js_,
  navbarvue_type_template_id_8a5d4c24_scoped_true_render,
  navbarvue_type_template_id_8a5d4c24_scoped_true_staticRenderFns,
  false,
  navbar_injectStyles,
  "8a5d4c24",
  "1d795c88"
  
)

/* harmony default export */ var navbar = (navbar_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/default.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//

/* harmony default export */ var defaultvue_type_script_lang_js_ = ({
  components: {
    NavBar: navbar
  }
});
// CONCATENATED MODULE: ./layouts/default.vue?vue&type=script&lang=js&
 /* harmony default export */ var layouts_defaultvue_type_script_lang_js_ = (defaultvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./layouts/default.vue



function default_injectStyles (context) {
  
  var style0 = __webpack_require__(23)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var default_component = Object(componentNormalizer["a" /* default */])(
  layouts_defaultvue_type_script_lang_js_,
  defaultvue_type_template_id_1bdcecfd_render,
  defaultvue_type_template_id_1bdcecfd_staticRenderFns,
  false,
  default_injectStyles,
  null,
  "3168e9e4"
  
)

/* harmony default export */ var layouts_default = (default_component.exports);
// CONCATENATED MODULE: ./.nuxt/App.js







const layouts = {
  "_default": sanitizeComponent(layouts_default)
};
/* harmony default export */ var App = ({
  render(h, props) {
    const loadingEl = h('NuxtLoading', {
      ref: 'loading'
    });
    const layoutEl = h(this.layout || 'nuxt');
    const templateEl = h('div', {
      domProps: {
        id: '__layout'
      },
      key: this.layoutName
    }, [layoutEl]);
    const transitionEl = h('transition', {
      props: {
        name: 'layout',
        mode: 'out-in'
      },
      on: {
        beforeEnter(el) {
          // Ensure to trigger scroll event after calling scrollBehavior
          window.$nuxt.$nextTick(() => {
            window.$nuxt.$emit('triggerScroll');
          });
        }

      }
    }, [templateEl]);
    return h('div', {
      domProps: {
        id: '__nuxt'
      }
    }, [loadingEl, transitionEl]);
  },

  data: () => ({
    isOnline: true,
    layout: null,
    layoutName: '',
    nbFetching: 0
  }),

  beforeCreate() {
    external_vue_default.a.util.defineReactive(this, 'nuxt', this.$options.nuxt);
  },

  created() {
    // Add this.$nuxt in child instances
    this.$root.$options.$nuxt = this;

    if (false) {} // Add $nuxt.error()


    this.error = this.nuxt.error; // Add $nuxt.context

    this.context = this.$options.context;
  },

  async mounted() {
    this.$loading = this.$refs.loading;
  },

  watch: {
    'nuxt.err': 'errorChanged'
  },
  computed: {
    isOffline() {
      return !this.isOnline;
    },

    isFetching() {
      return this.nbFetching > 0;
    },

    isPreview() {
      return Boolean(this.$options.previewData);
    }

  },
  methods: {
    refreshOnlineStatus() {
      if (false) {}
    },

    async refresh() {
      const pages = getMatchedComponentsInstances(this.$route);

      if (!pages.length) {
        return;
      }

      this.$loading.start();
      const promises = pages.map(page => {
        const p = []; // Old fetch

        if (page.$options.fetch && page.$options.fetch.length) {
          p.push(promisify(page.$options.fetch, this.context));
        }

        if (page.$fetch) {
          p.push(page.$fetch());
        } else {
          // Get all component instance to call $fetch
          for (const component of getChildrenComponentInstancesUsingFetch(page.$vnode.componentInstance)) {
            p.push(component.$fetch());
          }
        }

        if (page.$options.asyncData) {
          p.push(promisify(page.$options.asyncData, this.context).then(newData => {
            for (const key in newData) {
              external_vue_default.a.set(page.$data, key, newData[key]);
            }
          }));
        }

        return Promise.all(p);
      });

      try {
        await Promise.all(promises);
      } catch (error) {
        this.$loading.fail(error);
        globalHandleError(error);
        this.error(error);
      }

      this.$loading.finish();
    },

    errorChanged() {
      if (this.nuxt.err) {
        if (this.$loading) {
          if (this.$loading.fail) {
            this.$loading.fail(this.nuxt.err);
          }

          if (this.$loading.finish) {
            this.$loading.finish();
          }
        }

        let errorLayout = (nuxt_error.options || nuxt_error).layout;

        if (typeof errorLayout === 'function') {
          errorLayout = errorLayout(this.context);
        }

        this.setLayout(errorLayout);
      }
    },

    setLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default';
      }

      this.layoutName = layout;
      this.layout = layouts['_' + layout];
      return this.layout;
    },

    loadLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default';
      }

      return Promise.resolve(layouts['_' + layout]);
    }

  },
  components: {
    NuxtLoading: nuxt_loading
  }
});
// EXTERNAL MODULE: ./.nuxt/empty.js
var _nuxt_empty = __webpack_require__(25);

// EXTERNAL MODULE: ./.nuxt/content/nuxt-content.js
var nuxt_content = __webpack_require__(7);

// CONCATENATED MODULE: ./.nuxt/content/plugin.server.js


external_vue_default.a.component(nuxt_content["a" /* default */].name, nuxt_content["a" /* default */]);
/* harmony default export */ var plugin_server = ((ctx, inject) => {
  const $content = ctx.ssrContext.$content;
  inject('content', $content);
  ctx.$content = $content;
});
// CONCATENATED MODULE: ./.nuxt/index.js










/* Plugins */

 // Source: ./content/plugin.client.js (mode: 'client')

 // Source: ./content/plugin.server.js (mode: 'server')
// Component: <ClientOnly>

external_vue_default.a.component(external_vue_client_only_default.a.name, external_vue_client_only_default.a); // TODO: Remove in Nuxt 3: <NoSsr>

external_vue_default.a.component(external_vue_no_ssr_default.a.name, { ...external_vue_no_ssr_default.a,

  render(h, ctx) {
    if (false) {}

    return external_vue_no_ssr_default.a.render(h, ctx);
  }

}); // Component: <NuxtChild>

external_vue_default.a.component(nuxt_child.name, nuxt_child);
external_vue_default.a.component('NChild', nuxt_child); // Component NuxtLink is imported in server.js or client.js
// Component: <Nuxt>

external_vue_default.a.component(components_nuxt.name, components_nuxt);
Object.defineProperty(external_vue_default.a.prototype, '$nuxt', {
  get() {
    return this.$root.$options.$nuxt;
  },

  configurable: true
});
external_vue_default.a.use(external_vue_meta_default.a, {
  "keyName": "head",
  "attribute": "data-n-head",
  "ssrAttribute": "data-n-head-ssr",
  "tagIDKeyName": "hid"
});
const defaultTransition = {
  "name": "page",
  "mode": "out-in",
  "appear": false,
  "appearClass": "appear",
  "appearActiveClass": "appear-active",
  "appearToClass": "appear-to"
};

async function createApp(ssrContext, config = {}) {
  const router = await createRouter(ssrContext); // Create Root instance
  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.

  const app = {
    head: {
      "title": "nicholas-chen",
      "meta": [{
        "charset": "utf-8"
      }, {
        "name": "viewport",
        "content": "width=device-width, initial-scale=1"
      }, {
        "hid": "description",
        "name": "description",
        "content": "Nicholas&apos; Blog"
      }],
      "link": [{
        "rel": "icon",
        "type": "image\u002Fx-icon",
        "href": "\u002Ffavicon.ico"
      }],
      "style": [],
      "script": []
    },
    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],

      setTransitions(transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions];
        }

        transitions = transitions.map(transition => {
          if (!transition) {
            transition = defaultTransition;
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, {
              name: transition
            });
          } else {
            transition = Object.assign({}, defaultTransition, transition);
          }

          return transition;
        });
        this.$options.nuxt.transitions = transitions;
        return transitions;
      },

      err: null,
      dateErr: null,

      error(err) {
        err = err || null;
        app.context._errored = Boolean(err);
        err = err ? normalizeError(err) : null;
        let nuxt = app.nuxt; // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207

        if (this) {
          nuxt = this.nuxt || this.$options.nuxt;
        }

        nuxt.dateErr = Date.now();
        nuxt.err = err; // Used in src/server.js

        if (ssrContext) {
          ssrContext.nuxt.error = err;
        }

        return err;
      }

    },
    ...App
  };
  const next = ssrContext ? ssrContext.next : location => app.router.push(location); // Resolve route

  let route;

  if (ssrContext) {
    route = router.resolve(ssrContext.url).route;
  } else {
    const path = getLocation(router.options.base, router.options.mode);
    route = router.resolve(path).route;
  } // Set context to app.context


  await setContext(app, {
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    ssrContext
  });

  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided');
    }

    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`);
    }

    key = '$' + key; // Add into app

    app[key] = value; // Add into context

    if (!app.context[key]) {
      app.context[key] = value;
    } // Check if plugin not already installed


    const installKey = '__nuxt_' + key + '_installed__';

    if (external_vue_default.a[installKey]) {
      return;
    }

    external_vue_default.a[installKey] = true; // Call Vue.use() to install the plugin into vm

    external_vue_default.a.use(() => {
      if (!Object.prototype.hasOwnProperty.call(external_vue_default.a.prototype, key)) {
        Object.defineProperty(external_vue_default.a.prototype, key, {
          get() {
            return this.$root.$options[key];
          }

        });
      }
    });
  } // Inject runtime config as $config


  inject('config', config); // Add enablePreview(previewData = {}) in context for plugins

  if (false) {} // Plugin execution


  if (false) {}

  if ( true && typeof plugin_server === 'function') {
    await plugin_server(app.context, inject);
  } // Lock enablePreview in context


  if (false) {} // If server-side, wait for async component to be resolved first


  if ( true && ssrContext && ssrContext.url) {
    await new Promise((resolve, reject) => {
      router.push(ssrContext.url, resolve, err => {
        // https://github.com/vuejs/vue-router/blob/v3.4.3/src/util/errors.js
        if (!err._isRouter) return reject(err);
        if (err.type !== 2
        /* NavigationFailureType.redirected */
        ) return resolve(); // navigated to a different route in router guard

        const unregister = router.afterEach(async (to, from) => {
          ssrContext.url = to.fullPath;
          app.context.route = await getRouteData(to);
          app.context.params = to.params || {};
          app.context.query = to.query || {};
          unregister();
          resolve();
        });
      });
    });
  }

  return {
    app,
    router
  };
}


// CONCATENATED MODULE: ./.nuxt/components/nuxt-link.server.js

/* harmony default export */ var nuxt_link_server = ({
  name: 'NuxtLink',
  extends: external_vue_default.a.component('RouterLink'),
  props: {
    prefetch: {
      type: Boolean,
      default: true
    },
    noPrefetch: {
      type: Boolean,
      default: false
    }
  }
});
// CONCATENATED MODULE: ./.nuxt/server.js







 // should be included after ./index.js
// Update serverPrefetch strategy

external_vue_default.a.config.optionMergeStrategies.serverPrefetch = external_vue_default.a.config.optionMergeStrategies.created; // Fetch mixin

if (!external_vue_default.a.__nuxt__fetch__mixin__) {
  external_vue_default.a.mixin(fetch_server);
  external_vue_default.a.__nuxt__fetch__mixin__ = true;
} // Component: <NuxtLink>


external_vue_default.a.component(nuxt_link_server.name, nuxt_link_server);
external_vue_default.a.component('NLink', nuxt_link_server);

if (!global.fetch) {
  global.fetch = external_node_fetch_default.a;
}

const noopApp = () => new external_vue_default.a({
  render: h => h('div')
});

function server_urlJoin() {
  return Array.prototype.slice.call(arguments).join('/').replace(/\/+/g, '/');
}

const createNext = ssrContext => opts => {
  // If static target, render on client-side
  ssrContext.redirected = opts;

  if (ssrContext.target === 'static' || !ssrContext.res) {
    ssrContext.nuxt.serverRendered = false;
    return;
  }

  opts.query = Object(external_querystring_["stringify"])(opts.query);
  opts.path = opts.path + (opts.query ? '?' + opts.query : '');
  const routerBase = '/';

  if (!opts.path.startsWith('http') && routerBase !== '/' && !opts.path.startsWith(routerBase)) {
    opts.path = server_urlJoin(routerBase, opts.path);
  } // Avoid loop redirect


  if (opts.path === ssrContext.url) {
    ssrContext.redirected = false;
    return;
  }

  ssrContext.res.writeHead(opts.status, {
    Location: opts.path
  });
  ssrContext.res.end();
}; // This exported function will be called by `bundleRenderer`.
// This is where we perform data-prefetching to determine the
// state of our application before actually rendering it.
// Since data fetching is async, this function is expected to
// return a Promise that resolves to the app instance.


/* harmony default export */ var server = __webpack_exports__["default"] = (async ssrContext => {
  // Create ssrContext.next for simulate next() of beforeEach() when wanted to redirect
  ssrContext.redirected = false;
  ssrContext.next = createNext(ssrContext); // Used for beforeNuxtRender({ Components, nuxtState })

  ssrContext.beforeRenderFns = []; // Nuxt object (window.{{globals.context}}, defaults to window.__NUXT__)

  ssrContext.nuxt = {
    layout: 'default',
    data: [],
    fetch: [],
    error: null,
    serverRendered: true,
    routePath: ''
  }; // Remove query from url is static target

  if ( true && ssrContext.url) {
    ssrContext.url = ssrContext.url.split('?')[0];
  } // Public runtime config


  ssrContext.nuxt.config = ssrContext.runtimeConfig.public; // Create the app definition and the instance (created for each request)

  const {
    app,
    router
  } = await createApp(ssrContext, { ...ssrContext.runtimeConfig.public,
    ...ssrContext.runtimeConfig.private
  });

  const _app = new external_vue_default.a(app); // Add ssr route path to nuxt context so we can account for page navigation between ssr and csr


  ssrContext.nuxt.routePath = app.context.route.path; // Add meta infos (used in renderer.js)

  ssrContext.meta = _app.$meta(); // Keep asyncData for each matched component in ssrContext (used in app/utils.js via this.$ssrContext)

  ssrContext.asyncData = {};

  const beforeRender = async () => {
    // Call beforeNuxtRender() methods
    await Promise.all(ssrContext.beforeRenderFns.map(fn => promisify(fn, {
      Components,
      nuxtState: ssrContext.nuxt
    })));
  };

  const renderErrorPage = async () => {
    // Don't server-render the page in static target
    if (ssrContext.target === 'static') {
      ssrContext.nuxt.serverRendered = false;
    } // Load layout for error page


    const layout = (nuxt_error.options || nuxt_error).layout;
    const errLayout = typeof layout === 'function' ? layout.call(nuxt_error, app.context) : layout;
    ssrContext.nuxt.layout = errLayout || 'default';
    await _app.loadLayout(errLayout);

    _app.setLayout(errLayout);

    await beforeRender();
    return _app;
  };

  const render404Page = () => {
    app.context.error({
      statusCode: 404,
      path: ssrContext.url,
      message: 'This page could not be found'
    });
    return renderErrorPage();
  }; // Components are already resolved by setContext -> getRouteData (app/utils.js)


  const Components = getMatchedComponents(router.match(ssrContext.url));
  /*
  ** Call global middleware (nuxt.config.js)
  */

  let midd = [];
  midd = midd.map(name => {
    if (typeof name === 'function') {
      return name;
    }

    if (typeof _nuxt_middleware[name] !== 'function') {
      app.context.error({
        statusCode: 500,
        message: 'Unknown middleware ' + name
      });
    }

    return _nuxt_middleware[name];
  });
  await middlewareSeries(midd, app.context); // ...If there is a redirect or an error, stop the process

  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }
  /*
  ** Set layout
  */


  let layout = Components.length ? Components[0].options.layout : nuxt_error.layout;

  if (typeof layout === 'function') {
    layout = layout(app.context);
  }

  await _app.loadLayout(layout);

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }

  layout = _app.setLayout(layout);
  ssrContext.nuxt.layout = _app.layoutName;
  /*
  ** Call middleware (layout + pages)
  */

  midd = [];
  layout = sanitizeComponent(layout);

  if (layout.options.middleware) {
    midd = midd.concat(layout.options.middleware);
  }

  Components.forEach(Component => {
    if (Component.options.middleware) {
      midd = midd.concat(Component.options.middleware);
    }
  });
  midd = midd.map(name => {
    if (typeof name === 'function') {
      return name;
    }

    if (typeof _nuxt_middleware[name] !== 'function') {
      app.context.error({
        statusCode: 500,
        message: 'Unknown middleware ' + name
      });
    }

    return _nuxt_middleware[name];
  });
  await middlewareSeries(midd, app.context); // ...If there is a redirect or an error, stop the process

  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }
  /*
  ** Call .validate()
  */


  let isValid = true;

  try {
    for (const Component of Components) {
      if (typeof Component.options.validate !== 'function') {
        continue;
      }

      isValid = await Component.options.validate(app.context);

      if (!isValid) {
        break;
      }
    }
  } catch (validationError) {
    // ...If .validate() threw an error
    app.context.error({
      statusCode: validationError.statusCode || '500',
      message: validationError.message
    });
    return renderErrorPage();
  } // ...If .validate() returned false


  if (!isValid) {
    // Render a 404 error page
    return render404Page();
  } // If no Components found, returns 404


  if (!Components.length) {
    return render404Page();
  } // Call asyncData & fetch hooks on components matched by the route.


  const asyncDatas = await Promise.all(Components.map(Component => {
    const promises = []; // Call asyncData(context)

    if (Component.options.asyncData && typeof Component.options.asyncData === 'function') {
      const promise = promisify(Component.options.asyncData, app.context);
      promise.then(asyncDataResult => {
        ssrContext.asyncData[Component.cid] = asyncDataResult;
        applyAsyncData(Component);
        return asyncDataResult;
      });
      promises.push(promise);
    } else {
      promises.push(null);
    } // Call fetch(context)


    if (Component.options.fetch && Component.options.fetch.length) {
      promises.push(Component.options.fetch(app.context));
    } else {
      promises.push(null);
    }

    return Promise.all(promises);
  })); // datas are the first row of each

  ssrContext.nuxt.data = asyncDatas.map(r => r[0] || {}); // ...If there is a redirect or an error, stop the process

  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  } // Call beforeNuxtRender methods & add store state


  await beforeRender();
  return _app;
});

/***/ })
/******/ ]);
//# sourceMappingURL=server.js.map