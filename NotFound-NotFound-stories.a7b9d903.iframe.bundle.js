"use strict";(self.webpackChunkfrojd_jewl=self.webpackChunkfrojd_jewl||[]).push([[3854],{"./app/containers/NotFound/NotFound.stories.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{NotFoundDefault:function(){return NotFoundDefault},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return NotFound_stories}});var react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),Base=__webpack_require__("./app/layouts/Base/index.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),NotFound_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[4]!./app/containers/NotFound/NotFound.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(NotFound_module.A,options);var NotFound_NotFound_module=NotFound_module.A&&NotFound_module.A.locals?NotFound_module.A.locals:void 0,__jsx=react.createElement,NotFound=function NotFound(_ref){var _ref$title=_ref.title,title=void 0===_ref$title?"":_ref$title;return __jsx("div",{className:NotFound_NotFound_module.Root},__jsx("h1",{className:NotFound_NotFound_module.Title,dangerouslySetInnerHTML:{__html:title}}))};NotFound.displayName="NotFound";var NotFound_NotFound=(0,Base.A)(NotFound);NotFound.__docgenInfo={description:"",methods:[],displayName:"NotFound",props:{title:{defaultValue:{value:"''",computed:!1},description:"",type:{name:"string"},required:!1}}};var defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js");function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.A)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var NotFound_data=_objectSpread(_objectSpread({},__webpack_require__("./app/layouts/Base/Base.data.js").A),{},{breadcrumbs:null}),NotFound_stories_jsx=react.createElement,NotFound_stories={component:NotFound_NotFound},NotFoundDefault=function NotFoundDefault(){return NotFound_stories_jsx(NotFound_NotFound,NotFound_data)};NotFoundDefault.displayName="NotFoundDefault",NotFoundDefault.parameters={...NotFoundDefault.parameters,docs:{...NotFoundDefault.parameters?.docs,source:{originalSource:"() => <NotFound {...data} />",...NotFoundDefault.parameters?.docs?.source}}};const __namedExportsOrder=["NotFoundDefault"]},"./app/layouts/Base/Base.data.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var _components_Header_Header_data__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./app/components/Header/Header.data.js"),_components_Breadcrumbs_Breadcrumbs_data__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./app/components/Breadcrumbs/Breadcrumbs.data.js"),_components_Footer_Footer_data__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./app/components/Footer/Footer.data.js"),data={header:_components_Header_Header_data__WEBPACK_IMPORTED_MODULE_0__.A,breadcrumbs:_components_Breadcrumbs_Breadcrumbs_data__WEBPACK_IMPORTED_MODULE_1__.A,footer:_components_Footer_Footer_data__WEBPACK_IMPORTED_MODULE_2__.A};__webpack_exports__.A=data},"./app/layouts/Base/index.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{A:function(){return layouts_Base}});var objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),Breadcrumbs=__webpack_require__("./app/components/Breadcrumbs/Breadcrumbs.js"),components_Breadcrumbs=Breadcrumbs.A;Breadcrumbs.A.__docgenInfo={description:"",methods:[],displayName:"Breadcrumbs",props:{items:{defaultValue:{value:"[]",computed:!1},description:"",type:{name:"array"},required:!1}}};var Header=__webpack_require__("./app/components/Header/Header.js"),components_Header=Header.A;Header.A.__docgenInfo={description:"",methods:[],displayName:"Header",props:{main:{defaultValue:{value:"{}",computed:!1},description:"",type:{name:"object"},required:!1},service:{defaultValue:{value:"{}",computed:!1},description:"",type:{name:"object"},required:!1}}};var Footer=__webpack_require__("./app/components/Footer/Footer.js"),components_Footer=Footer.A;Footer.A.__docgenInfo={description:"",methods:[],displayName:"Footer",props:{follow:{defaultValue:{value:"{}",computed:!1},description:"",type:{name:"object"},required:!1},primary:{defaultValue:{value:"{}",computed:!1},description:"",type:{name:"object"},required:!1},secondary:{defaultValue:{value:"{}",computed:!1},description:"",type:{name:"object"},required:!1},tertiary:{defaultValue:{value:"{}",computed:!1},description:"",type:{name:"object"},required:!1},service:{defaultValue:{value:"{}",computed:!1},description:"",type:{name:"object"},required:!1}}};var injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Base_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[4]!./app/layouts/Base/Base.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Base_module.A,options);var Base_Base_module=Base_module.A&&Base_module.A.locals?Base_module.A.locals:void 0,_excluded=["containerName","breadcrumbs","header","footer"],__jsx=react.createElement,layouts_Base=function Base(Container){var displayName=Container.displayName;return function Wrapper(_ref){var _ref$containerName=_ref.containerName,containerName=void 0===_ref$containerName?"":_ref$containerName,_ref$breadcrumbs=_ref.breadcrumbs,breadcrumbs=void 0===_ref$breadcrumbs?{}:_ref$breadcrumbs,_ref$header=_ref.header,header=void 0===_ref$header?{}:_ref$header,_ref$footer=_ref.footer,footer=void 0===_ref$footer?{}:_ref$footer,restProps=(0,objectWithoutProperties.A)(_ref,_excluded),name=containerName||displayName,classes=classnames_default()(Base_Base_module.Root,[Base_Base_module["Root--".concat(name)]]);return __jsx("div",{className:classes},__jsx(components_Header,header),__jsx("div",{className:Base_Base_module.Document,role:"document"},__jsx(components_Breadcrumbs,breadcrumbs),__jsx("main",{className:Base_Base_module.Main,id:"mainContent"},__jsx(Container,restProps))),__jsx(components_Footer,footer))}}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[4]!./app/containers/NotFound/NotFound.module.scss":function(module,__webpack_exports__,__webpack_require__){var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".NotFound_Title__8ENnd{font-size:4.4rem;line-height:1.36;font-weight:700;font-family:Roboto, Arial, sans-serif}@media(min-width: 768px){.NotFound_Title__8ENnd{font-size:6.4rem;line-height:1.32}}","",{version:3,sources:["webpack://./app/containers/NotFound/NotFound.module.scss","webpack://./app/styles/includes/mixins.scss"],names:[],mappings:"AAKA,uBCiIoB,gBAAA,CACA,gBAAA,CAMI,eAjBV,CAiBU,qCAjBV,CAvHN,yBAAA,uBAiIY,gBAAA,CACA,gBAAA,CAAA",sourcesContent:["@import '../../styles/includes';\n\n.Root {\n}\n\n.Title {\n    @include textstyle(page-title);\n}\n","/* stylelint-disable at-rule-empty-line-before */\n@mixin media($key) {\n    @if $key == 'd' {\n        @content;\n    } @else if map-has-key($breakpoints, $key) {\n        @media (min-width: map-get($breakpoints, $key)) {\n            @content;\n        }\n    } @else {\n        @error 'Unfortunately, no value could be retrieved from `#{$breakpoints}`. Please make sure it is defined in `$breakpoints` map.';\n    }\n}\n\n@mixin media-max($key) {\n    @if $key == 'd' {\n        @content;\n    } @else if map-has-key($breakpoints, $key) {\n        @media (max-width: (map-get($breakpoints, $key) - 1)) {\n            @content;\n        }\n    } @else {\n        @error 'Unfortunately, no value could be retrieved from `#{$breakpoints}`. Please make sure it is defined in `$breakpoints` map.';\n    }\n}\n\n/* stylelint-enable at-rule-empty-line-before */\n\n@mixin clearfix() {\n    &::after,\n    &::before {\n        content: '';\n        display: table;\n        clear: both;\n        width: 100%;\n    }\n}\n\n@mixin href-external($domain: 'example.se') {\n    &:not([href^=\"mailto:\"]):not([href^=\"tel:\"]):not([href=\"\"]):not([href^=\"#\"]):not([href^=\"/\"]):not([href^=\"http://#{$domain}\"]):not([href^=\"https://#{$domain}\"]):not([href*=\"localhost\"]):not([href*=\"stage.#{$domain}\"]):not([href*=\"www.#{$domain}\"]):not([href*=\"beta.#{$domain}\"])\n    {\n        @content;\n    }\n}\n\n@mixin href-download() {\n    &[href$='.pdf'],\n    &[href$='.doc'],\n    &[href$='.docx'],\n    &[href$='.ppt'],\n    &[href$='.pptx'],\n    &[href$='.xls'],\n    &[href$='.xlsx'],\n    &[href$='.odt'],\n    &[href$='.eps'],\n    &[href$='.zip'] {\n        @content;\n    }\n}\n\n// For wrapping elements in the main grid\n// Usage: @include wrap;\n@mixin wrap($exclude: ()) {\n    @if not contains($exclude, d) {\n        margin-left: map-get($spacings, d);\n        margin-right: map-get($spacings, d);\n    }\n\n    @if not contains($exclude, S) {\n        @include breakpoint-wrap(S);\n    }\n\n    @if not contains($exclude, SL) {\n        @include breakpoint-wrap(SL);\n    }\n\n    @if not contains($exclude, M) {\n        @include breakpoint-wrap(M);\n    }\n\n    @if not contains($exclude, ML) {\n        @include breakpoint-wrap(ML);\n    }\n\n    @if not contains($exclude, L) {\n        @include breakpoint-wrap(L);\n    }\n\n    @if not contains($exclude, XL) {\n        @include breakpoint-wrap(XL);\n    }\n\n    @if not contains($exclude, XXL) {\n        @include breakpoint-wrap(XXL);\n    }\n}\n\n@mixin breakpoint-wrap($breakpoint) {\n    @if map-has-key($maxwidths, $breakpoint) {\n        $maxWidth: (map-get($maxwidths, $breakpoint));\n\n        @if $fluid and map-has-key($spacings, $breakpoint) {\n            $maxWidth: $maxWidth - (map-get($spacings, $breakpoint) * 2);\n        }\n\n        @include media($breakpoint) {\n            max-width: $maxWidth;\n            margin-left: auto;\n            margin-right: auto;\n        }\n    }\n\n    @if $fluid and map-has-key($spacings, $breakpoint) {\n        @include media($breakpoint) {\n            margin-left: (map-get($spacings, $breakpoint));\n            margin-right: (map-get($spacings, $breakpoint));\n        }\n    }\n}\n\n// For setting font-size and line-height on elements defined by variabels, including media queries\n// Usage: @include textstyle(h1);\n@mixin textstyle($key) {\n    // Loop through text map and set font-size and line-height for each media query\n    @if map-has-key($textstyles, $key) {\n        $map: map-get($textstyles, $key);\n\n        @each $media, $style in $map {\n            @include media($media) {\n                @if map-has-key($style, font-size) and\n                    map-has-key($style, line-height)\n                {\n                    $font-size: map-get($style, font-size);\n                    $line-height: map-get($style, line-height);\n\n                    font-size: #{$font-size / 10}rem;\n                    line-height: #{round($line-height / $font-size * 100) /\n                        100};\n                }\n\n                @each $param, $value in $style {\n                    @if $param != 'font-size' and $param != 'line-height' {\n                        #{$param}: $value;\n                    }\n                }\n            }\n        }\n    }\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={Title:"NotFound_Title__8ENnd"},__webpack_exports__.A=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[4]!./app/layouts/Base/Base.module.scss":function(module,__webpack_exports__,__webpack_require__){var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".Base_Main__RGHc1{display:block}","",{version:3,sources:["webpack://./app/layouts/Base/Base.module.scss"],names:[],mappings:"AAQA,kBACI,aAAA",sourcesContent:["@import '../../styles/includes';\n\n.Root {\n}\n\n.Document {\n}\n\n.Main {\n    display: block; /* For IE11 compatibility */\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={Main:"Base_Main__RGHc1"},__webpack_exports__.A=___CSS_LOADER_EXPORT___}}]);