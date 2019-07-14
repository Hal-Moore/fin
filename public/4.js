(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Add-category.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Add-category.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
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

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      posts: {
        name: '',
        image: ''
      },
      posit: {
        namepost: '',
        price: '',
        category_id: ''
      },
      position: [],
      categories: [],
      errors: []
    };
  },
  created: function created() {
    var _this = this;

    var id = this.$route.params.id;
    var c_id = this.posit.category_id = id;
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('/get-category/' + id).then(function (response) {
      _this.posts = response.data;
    })["catch"](function (e) {
      _this.errors.push(e);
    });
  },
  methods: {
    submitUpdateCategory: function submitUpdateCategory() {
      var _this2 = this;

      var id = this.$route.params.id;
      axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/update-category/' + id, this.posts).then(function (response) {
        _this2.$router.push({
          path: '/category'
        });

        _this2.posts = response.data;
      })["catch"](function (e) {
        _this2.errors.push(e);
      });
    },
    submitAddPosition: function submitAddPosition() {
      var _this3 = this;

      axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/position', this.posit).then(function (response) {
        console.log(response);

        _this3.$router.push({
          path: '/category'
        });

        _this3.posit = response.data;
      })["catch"](function (e) {
        _this3.errors.push(e);
      });
    },
    submitCategoryDelete: function submitCategoryDelete() {
      var _this4 = this;

      var id = this.$route.params.id;

      if (confirm("Click 'Ok' to delete.")) {
        axios__WEBPACK_IMPORTED_MODULE_0___default.a["delete"]('/categories/' + id).then(function (response) {
          console.log(response);

          _this4.$router.push({
            path: '/'
          });
        })["catch"](function (e) {
          _this4.errors.push(e);
        });
      }
    },
    onFileChange: function onFileChange(e) {
      var files = e.target.files || e.dataTransfer.files;
      console.log(files);
      if (!files.length) return;
      this.Image(files[0]);
    },
    Image: function (_Image) {
      function Image(_x) {
        return _Image.apply(this, arguments);
      }

      Image.toString = function () {
        return _Image.toString();
      };

      return Image;
    }(function (file) {
      var _this5 = this;

      var image = new Image();
      var reader = new FileReader();

      reader.onload = function (e) {
        _this5.posts.image = e.target.result;
      };

      reader.readAsDataURL(file);
    }),
    removeImage: function removeImage(e) {
      this.posts.image = '';
      e.posts.target.reset();
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Add-category.vue?vue&type=template&id=42f91f6e&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Add-category.vue?vue&type=template&id=42f91f6e& ***!
  \**********************************************************************************************************************************************************************************************************/
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
    _c(
      "form",
      {
        staticClass: "col s12 l12",
        on: {
          submit: function($event) {
            $event.preventDefault()
            return _vm.submitUpdateCategory()
          }
        }
      },
      [
        _c("div", { staticClass: "page-title" }, [
          _c(
            "h4",
            [
              _c("router-link", { attrs: { to: "/category" } }, [
                _vm._v("Категории")
              ]),
              _vm._v(" "),
              _c("i", { staticClass: "material-icons" }, [
                _vm._v("keyboard_arrow_right")
              ]),
              _vm._v("\n            Редактировать категорию\n        ")
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass: "btn btn-small red right col s1 l1",
              on: {
                click: function($event) {
                  return _vm.submitCategoryDelete()
                }
              }
            },
            [_c("i", { staticClass: "material-icons" }, [_vm._v("delete")])]
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "row" }, [
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
                attrs: { id: "name", autofocus: "", type: "text" },
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
                _vm._m(0)
              ])
            ]),
            _vm._v(" "),
            _vm._m(1)
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
        ])
      ]
    ),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col s12" }, [
        _c(
          "form",
          {
            on: {
              submit: function($event) {
                $event.preventDefault()
                return _vm.submitAddPosition()
              }
            }
          },
          [
            _c("div", { staticClass: "page-subtitle block='true'" }, [
              _c("h4", [_vm._v("Позиции:")]),
              _vm._v(" "),
              _c("div", { staticClass: "input-field col s3 l3" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.posit.namepost,
                      expression: "posit.namepost"
                    }
                  ],
                  attrs: { id: "name", type: "text" },
                  domProps: { value: _vm.posit.namepost },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.posit, "namepost", $event.target.value)
                    }
                  }
                }),
                _vm._v(" "),
                _c("label", { attrs: { for: "name" } }, [_vm._v("Название")])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "input-field col s3 l3" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.posit.price,
                      expression: "posit.price"
                    }
                  ],
                  attrs: { id: "names", type: "number" },
                  domProps: { value: _vm.posit.price },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.posit, "price", $event.target.value)
                    }
                  }
                }),
                _vm._v(" "),
                _c("label", { attrs: { for: "name" } }, [_vm._v("Цена")])
              ]),
              _vm._v(" "),
              _vm._m(2),
              _vm._v(" "),
              _c("div", { staticClass: "input-field col s3 l3" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.posit.c_id,
                      expression: "posit.c_id"
                    }
                  ],
                  attrs: { id: "namer", type: "hidden" },
                  domProps: { value: _vm.posit.c_id },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.posit, "c_id", $event.target.value)
                    }
                  }
                })
              ])
            ])
          ]
        )
      ])
    ])
  ])
}
var staticRenderFns = [
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
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-field col s3 l3" }, [
      _c("button", { staticClass: "waves-effect waves-light btn" }, [
        _vm._v(
          "\n                        Добавить позицию\n                      "
        )
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/Add-category.vue":
/*!*********************************************!*\
  !*** ./resources/js/views/Add-category.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Add_category_vue_vue_type_template_id_42f91f6e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Add-category.vue?vue&type=template&id=42f91f6e& */ "./resources/js/views/Add-category.vue?vue&type=template&id=42f91f6e&");
/* harmony import */ var _Add_category_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Add-category.vue?vue&type=script&lang=js& */ "./resources/js/views/Add-category.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Add_category_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Add_category_vue_vue_type_template_id_42f91f6e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Add_category_vue_vue_type_template_id_42f91f6e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Add-category.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Add-category.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/views/Add-category.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_category_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Add-category.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Add-category.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_category_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Add-category.vue?vue&type=template&id=42f91f6e&":
/*!****************************************************************************!*\
  !*** ./resources/js/views/Add-category.vue?vue&type=template&id=42f91f6e& ***!
  \****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_category_vue_vue_type_template_id_42f91f6e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Add-category.vue?vue&type=template&id=42f91f6e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Add-category.vue?vue&type=template&id=42f91f6e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_category_vue_vue_type_template_id_42f91f6e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_category_vue_vue_type_template_id_42f91f6e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);