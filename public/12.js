(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/History.vue?vue&type=template&id=301d0ec5&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/History.vue?vue&type=template&id=301d0ec5& ***!
  \*****************************************************************************************************************************************************************************************************/
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
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("main", { staticClass: "content" }, [
      _c("div", { staticClass: "page-title" }, [
        _c("h4", [_vm._v("История заказов")]),
        _vm._v(" "),
        _c(
          "button",
          {
            staticClass: "btn btn-small js-filter tooltipped",
            attrs: { "data-tooltip": "Открыть фильтр" }
          },
          [_c("i", { staticClass: "material-icons" }, [_vm._v("filter_list")])]
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "filter js-filter-block hide" }, [
        _c("div", { staticClass: "fr" }, [
          _c("div", { staticClass: "col order" }, [
            _c(
              "div",
              { staticClass: "input-field inline order-position-input" },
              [
                _c("input", {
                  attrs: { type: "number", id: "number", min: "1" }
                }),
                _vm._v(" "),
                _c("label", { attrs: { for: "number" } }, [
                  _vm._v("Номер заказа")
                ])
              ]
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col filter-pickers" }, [
            _c("div", { staticClass: "input-field" }, [
              _c("input", {
                staticClass: "datepicker",
                attrs: { type: "text" }
              }),
              _vm._v(" "),
              _c("label", [_vm._v("Начало")])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "input-field" }, [
              _c("input", {
                staticClass: "datepicker",
                attrs: { type: "text" }
              }),
              _vm._v(" "),
              _c("label", [_vm._v("Конец")])
            ])
          ])
        ]),
        _vm._v(" "),
        _c(
          "button",
          { staticClass: "btn waves-effect wavers-light btn-small" },
          [_vm._v("Применить фильтр")]
        )
      ]),
      _vm._v(" "),
      _c("table", { staticClass: "highlight mb2" }, [
        _c("thead", [
          _c("tr", [
            _c("th", [_vm._v("№")]),
            _vm._v(" "),
            _c("th", [_vm._v("Дата")]),
            _vm._v(" "),
            _c("th", [_vm._v("Время")]),
            _vm._v(" "),
            _c("th", [_vm._v("Сумма")]),
            _vm._v(" "),
            _c("th")
          ])
        ]),
        _vm._v(" "),
        _c("tbody", [
          _c("tr", [
            _c("td", [_vm._v("1")]),
            _vm._v(" "),
            _c("td", [_vm._v("21.12.2000")]),
            _vm._v(" "),
            _c("td", [_vm._v("14:21")]),
            _vm._v(" "),
            _c("td", [_vm._v("12 211 руб.")]),
            _vm._v(" "),
            _c("td", [
              _c(
                "button",
                {
                  staticClass: "btn btn-small modal-trigger grey darken-1",
                  attrs: { "data-target": "order-list" }
                },
                [
                  _c("i", { staticClass: "material-icons" }, [
                    _vm._v("open_in_new")
                  ])
                ]
              )
            ])
          ]),
          _vm._v(" "),
          _c("tr", [
            _c("td", [_vm._v("1")]),
            _vm._v(" "),
            _c("td", [_vm._v("21.12.2000")]),
            _vm._v(" "),
            _c("td", [_vm._v("14:21")]),
            _vm._v(" "),
            _c("td", [_vm._v("12 211 руб.")]),
            _vm._v(" "),
            _c("td", [
              _c("button", { staticClass: "btn btn-small grey darken-1" }, [
                _c("i", { staticClass: "material-icons" }, [
                  _vm._v("open_in_new")
                ])
              ])
            ])
          ]),
          _vm._v(" "),
          _c("tr", [
            _c("td", [_vm._v("1")]),
            _vm._v(" "),
            _c("td", [_vm._v("21.12.2000")]),
            _vm._v(" "),
            _c("td", [_vm._v("14:21")]),
            _vm._v(" "),
            _c("td", [_vm._v("12 211 руб.")]),
            _vm._v(" "),
            _c("td", [
              _c("button", { staticClass: "btn btn-small grey darken-1" }, [
                _c("i", { staticClass: "material-icons" }, [
                  _vm._v("open_in_new")
                ])
              ])
            ])
          ]),
          _vm._v(" "),
          _c("tr", [
            _c("td", [_vm._v("1")]),
            _vm._v(" "),
            _c("td", [_vm._v("21.12.2000")]),
            _vm._v(" "),
            _c("td", [_vm._v("14:21")]),
            _vm._v(" "),
            _c("td", [_vm._v("12 211 руб.")]),
            _vm._v(" "),
            _c("td", [
              _c("button", { staticClass: "btn btn-small grey darken-1" }, [
                _c("i", { staticClass: "material-icons" }, [
                  _vm._v("open_in_new")
                ])
              ])
            ])
          ]),
          _vm._v(" "),
          _c("tr", [
            _c("td", [_vm._v("1")]),
            _vm._v(" "),
            _c("td", [_vm._v("21.12.2000")]),
            _vm._v(" "),
            _c("td", [_vm._v("14:21")]),
            _vm._v(" "),
            _c("td", [_vm._v("12 211 руб.")]),
            _vm._v(" "),
            _c("td", [
              _c("button", { staticClass: "btn btn-small grey darken-1" }, [
                _c("i", { staticClass: "material-icons" }, [
                  _vm._v("open_in_new")
                ])
              ])
            ])
          ]),
          _vm._v(" "),
          _c("tr", [
            _c("td", [_vm._v("1")]),
            _vm._v(" "),
            _c("td", [_vm._v("21.12.2000")]),
            _vm._v(" "),
            _c("td", [_vm._v("14:21")]),
            _vm._v(" "),
            _c("td", [_vm._v("12 211 руб.")]),
            _vm._v(" "),
            _c("td", [
              _c("button", { staticClass: "btn btn-small grey darken-1" }, [
                _c("i", { staticClass: "material-icons" }, [
                  _vm._v("open_in_new")
                ])
              ])
            ])
          ]),
          _vm._v(" "),
          _c("tr", [
            _c("td", [_vm._v("1")]),
            _vm._v(" "),
            _c("td", [_vm._v("21.12.2000")]),
            _vm._v(" "),
            _c("td", [_vm._v("14:21")]),
            _vm._v(" "),
            _c("td", [_vm._v("12 211 руб.")]),
            _vm._v(" "),
            _c("td", [
              _c("button", { staticClass: "btn btn-small grey darken-1" }, [
                _c("i", { staticClass: "material-icons" }, [
                  _vm._v("open_in_new")
                ])
              ])
            ])
          ]),
          _vm._v(" "),
          _c("tr", [
            _c("td", [_vm._v("1")]),
            _vm._v(" "),
            _c("td", [_vm._v("21.12.2000")]),
            _vm._v(" "),
            _c("td", [_vm._v("14:21")]),
            _vm._v(" "),
            _c("td", [_vm._v("12 211 руб.")]),
            _vm._v(" "),
            _c("td", [
              _c("button", { staticClass: "btn btn-small grey darken-1" }, [
                _c("i", { staticClass: "material-icons" }, [
                  _vm._v("open_in_new")
                ])
              ])
            ])
          ]),
          _vm._v(" "),
          _c("tr", [
            _c("td", [_vm._v("1")]),
            _vm._v(" "),
            _c("td", [_vm._v("21.12.2000")]),
            _vm._v(" "),
            _c("td", [_vm._v("14:21")]),
            _vm._v(" "),
            _c("td", [_vm._v("12 211 руб.")]),
            _vm._v(" "),
            _c("td", [
              _c("button", { staticClass: "btn btn-small grey darken-1" }, [
                _c("i", { staticClass: "material-icons" }, [
                  _vm._v("open_in_new")
                ])
              ])
            ])
          ]),
          _vm._v(" "),
          _c("tr", [
            _c("td", [_vm._v("1")]),
            _vm._v(" "),
            _c("td", [_vm._v("21.12.2000")]),
            _vm._v(" "),
            _c("td", [_vm._v("14:21")]),
            _vm._v(" "),
            _c("td", [_vm._v("12 211 руб.")]),
            _vm._v(" "),
            _c("td", [
              _c("button", { staticClass: "btn btn-small grey darken-1" }, [
                _c("i", { staticClass: "material-icons" }, [
                  _vm._v("open_in_new")
                ])
              ])
            ])
          ]),
          _vm._v(" "),
          _c("tr", [
            _c("td", [_vm._v("1")]),
            _vm._v(" "),
            _c("td", [_vm._v("21.12.2000")]),
            _vm._v(" "),
            _c("td", [_vm._v("14:21")]),
            _vm._v(" "),
            _c("td", [_vm._v("12 211 руб.")]),
            _vm._v(" "),
            _c("td", [
              _c("button", { staticClass: "btn btn-small grey darken-1" }, [
                _c("i", { staticClass: "material-icons" }, [
                  _vm._v("open_in_new")
                ])
              ])
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "center mb2" }, [
        _c(
          "button",
          { staticClass: "btn waves-effect grey darken-1 btn-small" },
          [_vm._v("Загрузить еще")]
        )
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/History.vue":
/*!****************************************!*\
  !*** ./resources/js/views/History.vue ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _History_vue_vue_type_template_id_301d0ec5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./History.vue?vue&type=template&id=301d0ec5& */ "./resources/js/views/History.vue?vue&type=template&id=301d0ec5&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _History_vue_vue_type_template_id_301d0ec5___WEBPACK_IMPORTED_MODULE_0__["render"],
  _History_vue_vue_type_template_id_301d0ec5___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/History.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/History.vue?vue&type=template&id=301d0ec5&":
/*!***********************************************************************!*\
  !*** ./resources/js/views/History.vue?vue&type=template&id=301d0ec5& ***!
  \***********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_History_vue_vue_type_template_id_301d0ec5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./History.vue?vue&type=template&id=301d0ec5& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/History.vue?vue&type=template&id=301d0ec5&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_History_vue_vue_type_template_id_301d0ec5___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_History_vue_vue_type_template_id_301d0ec5___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);