exports.ids = [1];
exports.modules = {

/***/ 28:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(34);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("6759f5ab", content, true, context)
};

/***/ }),

/***/ 29:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/nozomi.09aefcd.png";

/***/ }),

/***/ 30:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/coinhako.b218421.png";

/***/ }),

/***/ 31:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/bukkit.ffffe40.png";

/***/ }),

/***/ 32:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/xda.e4dc40d.jpg";

/***/ }),

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(28);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 34:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".container{min-height:100vh;display:flex;justify-content:center;align-items:center;text-align:center}.title{display:block;font-weight:300;font-size:100px;color:#35495e;letter-spacing:1px}.subtitle{font-weight:300;font-size:42px;color:#526488;word-spacing:5px;padding-bottom:15px}.links{padding-top:15px}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=1366bb08&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<header class=\"bg-white\"><div class=\"max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8\"><h1 class=\"text-3xl font-bold leading-tight text-gray-900\">\n        Hello, I'm Nicholas Chen!\n      </h1> <p class=\"text-sm py-2\">\n        I'm an undergraduate student, software developer focusing on big data and fintech and enjoy creating things that make an impact to the world, small or big, be it a website, mobile app or anything in between. My goal is to build products that make everyone's daily life better.<br> <br>\n        I graduated from \n        <a href=\"https://sp.edu.sg\" class=\"hover:underline text-red-700\">\n          Singapore Polytechnic\n        </a> in 2018 with a Diploma in Information Technology and am currently undertaking an undergraduate programme since 2020. <br></p></div></header> <hr class=\"py-2\"> <div class=\"px-8 pb-4\"><h2 class=\"text-xl font-bold leading-tight text-gray-900 py-4\">\n      Projects involved\n    </h2> <div class=\"grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 py-4\"><div class=\"md:flex\"><div class=\"md:flex-shrink-0\"><img"+(_vm._ssrAttr("src",__webpack_require__(29)))+" alt=\"Nozomi\" class=\"rounded-sm md:w-20\"></div> <div class=\"mt-4 md:mt-0 md:ml-6\"><a href=\"https://nozomi.ai\" class=\"uppercase text-indigo-600 tracking-wide block mt-1 text-sm leading-tight font-semibold hover:underline\">\n            Nozomi\n          </a> <p class=\"mt-2 text-xs text-gray-600\">\n            A simple and easy web application that enables you to gather, process and utilise datasets.\n          </p></div></div> <div class=\"md:flex\"><div class=\"md:flex-shrink-0\"><img"+(_vm._ssrAttr("src",__webpack_require__(30)))+" alt=\"Coinhako Logo\" class=\"rounded-sm md:w-20\"></div> <div class=\"mt-4 md:mt-0 md:ml-6\"><a href=\"https://coinhako.com\" class=\"uppercase text-blue-600 tracking-wide block mt-1 text-sm leading-tight font-semibold hover:underline\">\n            Coinhako\n          </a> <p class=\"mt-2 text-xs text-gray-600\">\n            Southeast Asia's gateway to cryptocurrency.\n          </p></div></div> <div class=\"md:flex\"><div class=\"md:flex-shrink-0\"><img"+(_vm._ssrAttr("src",__webpack_require__(31)))+" alt=\"Woman paying for a purchase\" class=\"rounded-sm md:w-20\"></div> <div class=\"mt-4 md:mt-0 md:ml-6\"><a href=\"https://getbukkit.org\" class=\"uppercase text-green-600 tracking-wide block mt-1 text-sm leading-tight font-semibold hover:underline\">\n            Bukkit\n          </a> <p class=\"mt-2 text-xs text-gray-600\">\n            An extended version of the original Minecraft Server software that enables users to create Minecraft servers that enable extensive features and controls.\n          </p></div></div> <div class=\"md:flex focus:shadow-2xl\"><div class=\"md:flex-shrink-0\"><img"+(_vm._ssrAttr("src",__webpack_require__(32)))+" alt=\"Woman paying for a purchase\" class=\"rounded-sm md:w-20\"></div> <div class=\"mt-4 md:mt-0 md:ml-6\"><a href=\"https://www.xda-developers.com/\" class=\"uppercase text-brown-600 tracking-wide block mt-1 text-sm leading-tight font-semibold hover:underline\">\n            XDA\n          </a> <p class=\"mt-2 text-xs text-gray-600\">\n            An extended version of the original Minecraft Server software that enables users to create Minecraft servers that enable extensive features and controls.\n          </p></div></div></div></div> <hr class=\"py-2\"> <div class=\"px-8 pb-4\"><h2 class=\"text-xl font-bold leading-tight text-gray-900 py-4\">\n      Certifications &amp; Achievements\n      <span class=\"inline-block text-xs text-gray-600 font-normal\">If you really need to check it out</span></h2> <div class=\"grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4 py-4\"><div class=\"max-w-sm rounded overflow-hidden shadow-lg\"><div class=\"px-6 py-4\"><div class=\"font-bold text-md\">SiTF 2017 Best Innovative ICM Student Project (Tertiary)</div> <div class=\"font-semibold text-sm mb-2 text-gray-500\">26 October 2017</div> <p class=\"text-gray-700 text-xs\">\n            Following on the success of Imagine Cup 2017, Vaultix clinched the SiTF award for the year in terms of student innovation.\n          </p></div></div> <div class=\"max-w-sm rounded overflow-hidden shadow-lg\"><div class=\"px-6 py-4\"><div class=\"font-bold text-md\">Imagine Cup 2017 Singapore Runner Up</div> <div class=\"font-semibold text-sm mb-2 text-gray-500\">2017</div> <p class=\"text-gray-700 text-xs\">\n            Vaultix, a personal assistant capable of storing, retrieving and organising any form of data without context was a project (Such as bank statements or even bills) that started during the end of my Diploma course in Singapore Polytechnic.\n          </p></div></div></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=1366bb08&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=js&
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
//
//
//
//
//
//
// import AppLogo from '~/components/AppLogo';
// import UsefulData from '~/components/UsefulData';
/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_js_ = ({
  components: {// AppLogo,
    // UsefulData,
  }
});
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pagesvue_type_script_lang_js_ = (lib_vue_loader_options_pagesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(33)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "7485909a"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map