(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/New.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/New.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuelidate/lib/validators */ "./node_modules/vuelidate/lib/validators/index.js");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
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


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      posts: {
        name: '',
        image: ''
      },
      errors: []
    };
  },
  methods: {
    submitCategory: function submitCategory() {
      var _this = this;

      axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("/categories", this.posts).then(function (response) {
        console.log(response);

        _this.$router.push({
          path: '/category'
        });

        _this.posts = response.data;
      })["catch"](function (e) {
        _this.errors.push(e);
      });
    },
    onFileChange: function onFileChange(e) {
      var files = e.target.files || e.dataTransfer.files;
      console.log(files);
      if (!files.length) return;
      this.createImage(files[0]);
    },
    createImage: function createImage(file) {
      var _this2 = this;

      var image = new Image();
      var reader = new FileReader();

      reader.onload = function (e) {
        _this2.posts.image = e.target.result;
      };

      reader.readAsDataURL(file);
    },
    removeImage: function removeImage(e) {
      this.posts.image = '';
      e.posts.target.reset();
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/New.vue?vue&type=template&id=54782251&":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/New.vue?vue&type=template&id=54782251& ***!
  \*************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("main", { staticClass: "content" }, [
    _c("div", { staticClass: "page-title" }, [
      _c(
        "h4",
        [
          _c("router-link", { attrs: { to: "/categories" } }, [
            _vm._v("Категории")
          ]),
          _vm._v(" "),
          _c("i", { staticClass: "material-icons" }, [
            _vm._v("keyboard_arrow_right")
          ]),
          _vm._v("\n            Добавить категорию\n        ")
        ],
        1
      ),
      _vm._v(" "),
      _vm._m(0)
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c(
        "form",
        {
          staticClass: "col s12 l12",
          on: {
            submit: function($event) {
              $event.preventDefault()
              return _vm.submitCategory()
            }
          }
        },
        [
          _c("div", { staticClass: "col s12 l3" }, [
            _c("div", { staticClass: "input-field " }, [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.posts.name,
                    expression: "posts.name"
                  }
                ],
                attrs: { id: "name", type: "text" },
                domProps: { value: _vm.posts.name },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.posts, "name", $event.target.value)
                  }
                }
              }),
              _vm._v(" "),
              _c("label", { attrs: { for: "name" } }, [_vm._v("Название")]),
              _vm._v(" "),
              _c("div", { staticClass: "file-field input-field" }, [
                _c("div", { staticClass: "btn" }, [
                  _c("span", [_vm._v("Загрузить изображение")]),
                  _vm._v(" "),
                  _c("input", {
                    attrs: { type: "file" },
                    on: { change: _vm.onFileChange }
                  })
                ]),
                _vm._v(" "),
                _vm._m(1)
              ])
            ]),
            _vm._v(" "),
            _vm._m(2)
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col s12 l3 center" }, [
            !_vm.posts.image
              ? _c("div", [
                  _c("img", {
                    staticStyle: { height: "200px" },
                    attrs: { src: "/images/No_image.png" }
                  })
                ])
              : _c("div", [
                  _c("img", {
                    staticStyle: { height: "200px" },
                    attrs: { src: _vm.posts.image }
                  }),
                  _vm._v(" "),
                  _c(
                    "button",
                    { staticClass: "btn", on: { click: _vm.removeImage } },
                    [_vm._v("Удалить изображение")]
                  )
                ])
          ])
        ]
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", [
      _c("button", { staticClass: "btn btn-small red" }, [
        _c("i", { staticClass: "material-icons" }, [_vm._v("delete")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "file-path-wrapper" }, [
      _c("input", {
        staticClass: "file-path validate",
        attrs: { type: "text" }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("button", { staticClass: "waves-effect waves-light btn" }, [
        _vm._v(
          "\n                    Сохранить изменения\n                    "
        )
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/New.vue":
/*!************************************!*\
  !*** ./resources/js/views/New.vue ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _New_vue_vue_type_template_id_54782251___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./New.vue?vue&type=template&id=54782251& */ "./resources/js/views/New.vue?vue&type=template&id=54782251&");
/* harmony import */ var _New_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./New.vue?vue&type=script&lang=js& */ "./resources/js/views/New.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _New_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _New_vue_vue_type_template_id_54782251___WEBPACK_IMPORTED_MODULE_0__["render"],
  _New_vue_vue_type_template_id_54782251___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/New.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/New.vue?vue&type=script&lang=js&":
/*!*************************************************************!*\
  !*** ./resources/js/views/New.vue?vue&type=script&lang=js& ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_New_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./New.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/New.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_New_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/New.vue?vue&type=template&id=54782251&":
/*!*******************************************************************!*\
  !*** ./resources/js/views/New.vue?vue&type=template&id=54782251& ***!
  \*******************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_New_vue_vue_type_template_id_54782251___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./New.vue?vue&type=template&id=54782251& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/New.vue?vue&type=template&id=54782251&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_New_vue_vue_type_template_id_54782251___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_New_vue_vue_type_template_id_54782251___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);