/*! For license information please see Grid-Grid-stories.ced433e5.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkfrojd_jewl=self.webpackChunkfrojd_jewl||[]).push([[2300],{"./node_modules/@babel/runtime/helpers/esm/extends.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}__webpack_require__.d(__webpack_exports__,{A:function(){return _extends}})},"./app/components/Grid/Grid.stories.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:function(){return Default},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return Grid_stories}});var defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),Grid=__webpack_require__("./app/components/Grid/Grid.js"),Grid_data=__webpack_require__("./app/components/Grid/Grid.data.js"),__jsx=react.createElement;function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}var Grid_stories={component:Grid.A,parameters:{docs:{description:{component:'Used to list specific Card component in a grid\n\nPossiblity to pass either columns definition for all items, or each item can contain a size prop, or pass "auto" so columns will be calculated by the number of items up to 4 columns.\n\n[Grid source code on Github](https://github.com/Frojd/Frojd-Jewl/tree/develop/component-library/app/components/Grid)\n'}}},args:{columns:"auto"},argTypes:{columns:{options:["auto",4,3,2,1],control:{type:"select"}}}},Template=function Template(args){return __jsx(Grid.A,args)};Template.displayName="Template";var Default=Template.bind({});Default.args=function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.A)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}({},Grid_data.J),Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => <Grid {...args} />",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"./app/components/Card/Card.data.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{PH:function(){return fullSize}});var _Users_smulan_Projects_Frojd_Jewl_component_library_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js");function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,_Users_smulan_Projects_Frojd_Jewl_component_library_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.A)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var data={title:"Card longer&shy;title",url:"www.google.se",label:"Label",text:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nam adipiscing. Duis vel nibh at velit scelerisque suscipit.",image:__webpack_require__("./app/components/Image/Image.data.js").Ay,dateString:"2022-02-03",dateFormatted:"3 februari 2022",size:"Third"};__webpack_exports__.Ay=data;_objectSpread(_objectSpread({},data),{},{image:null});var fullSize=_objectSpread(_objectSpread({},data),{},{size:"Full"})},"./app/components/Grid/Grid.data.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{J:function(){return autoItemSizes}});var _Users_smulan_Projects_Frojd_Jewl_component_library_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),Components_Card_Card_data__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./app/components/Card/Card.data.js"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,_Users_smulan_Projects_Frojd_Jewl_component_library_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__.A)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var Card=function Card(_ref){var size=_ref.size,title="-- Card ".concat(size," --");return __jsx("div",{style:{background:"lightgrey",flex:"1 0 auto"}},title)};Card.displayName="Card";var data={Card:Card,items:[_objectSpread(_objectSpread({},Components_Card_Card_data__WEBPACK_IMPORTED_MODULE_2__.Ay),{},{size:""}),_objectSpread(_objectSpread({},Components_Card_Card_data__WEBPACK_IMPORTED_MODULE_2__.Ay),{},{size:""}),_objectSpread(_objectSpread({},Components_Card_Card_data__WEBPACK_IMPORTED_MODULE_2__.Ay),{},{size:""}),_objectSpread(_objectSpread({},Components_Card_Card_data__WEBPACK_IMPORTED_MODULE_2__.Ay),{},{size:""}),_objectSpread(_objectSpread({},Components_Card_Card_data__WEBPACK_IMPORTED_MODULE_2__.Ay),{},{size:""}),_objectSpread(_objectSpread({},Components_Card_Card_data__WEBPACK_IMPORTED_MODULE_2__.Ay),{},{size:""}),_objectSpread(_objectSpread({},Components_Card_Card_data__WEBPACK_IMPORTED_MODULE_2__.Ay),{},{size:""}),_objectSpread(_objectSpread({},Components_Card_Card_data__WEBPACK_IMPORTED_MODULE_2__.Ay),{},{size:""}),_objectSpread(_objectSpread({},Components_Card_Card_data__WEBPACK_IMPORTED_MODULE_2__.Ay),{},{size:""}),_objectSpread(_objectSpread({},Components_Card_Card_data__WEBPACK_IMPORTED_MODULE_2__.Ay),{},{size:""}),_objectSpread(_objectSpread({},Components_Card_Card_data__WEBPACK_IMPORTED_MODULE_2__.Ay),{},{size:""}),_objectSpread(_objectSpread({},Components_Card_Card_data__WEBPACK_IMPORTED_MODULE_2__.Ay),{},{size:""})]};__webpack_exports__.A=data;var autoItemSizes={Card:Card,items:[_objectSpread(_objectSpread({},Components_Card_Card_data__WEBPACK_IMPORTED_MODULE_2__.Ay),{},{size:"Full"}),_objectSpread(_objectSpread({},Components_Card_Card_data__WEBPACK_IMPORTED_MODULE_2__.Ay),{},{size:"Full"}),_objectSpread(_objectSpread({},Components_Card_Card_data__WEBPACK_IMPORTED_MODULE_2__.Ay),{},{size:"Half"}),_objectSpread(_objectSpread({},Components_Card_Card_data__WEBPACK_IMPORTED_MODULE_2__.Ay),{},{size:"Half"}),_objectSpread(_objectSpread({},Components_Card_Card_data__WEBPACK_IMPORTED_MODULE_2__.Ay),{},{size:"Third"}),_objectSpread(_objectSpread({},Components_Card_Card_data__WEBPACK_IMPORTED_MODULE_2__.Ay),{},{size:"Third"}),_objectSpread(_objectSpread({},Components_Card_Card_data__WEBPACK_IMPORTED_MODULE_2__.Ay),{},{size:"Third"}),_objectSpread(_objectSpread({},Components_Card_Card_data__WEBPACK_IMPORTED_MODULE_2__.Ay),{},{size:"Fourth"}),_objectSpread(_objectSpread({},Components_Card_Card_data__WEBPACK_IMPORTED_MODULE_2__.Ay),{},{size:"Fourth"}),_objectSpread(_objectSpread({},Components_Card_Card_data__WEBPACK_IMPORTED_MODULE_2__.Ay),{},{size:"Fourth"}),_objectSpread(_objectSpread({},Components_Card_Card_data__WEBPACK_IMPORTED_MODULE_2__.Ay),{},{size:"Fourth"})]}},"./app/components/Grid/Grid.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{A:function(){return Grid_Grid}});var esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Grid_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[4]!./app/components/Grid/Grid.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Grid_module.A,options);var Grid_Grid_module=Grid_module.A&&Grid_module.A.locals?Grid_module.A.locals:void 0,__jsx=react.createElement,Grid=function Grid(_ref){var _ref$Card=_ref.Card,Card=void 0===_ref$Card?null:_ref$Card,_ref$items=_ref.items,items=void 0===_ref$items?[]:_ref$items,_ref$columns=_ref.columns,columns=void 0===_ref$columns?"auto":_ref$columns,columnsCount="auto"===columns?items.length:columns,columnSize=columnsCount>=4?"Fourth":3===columnsCount?"Third":2===columnsCount?"Half":"Full",classes=classnames_default()(Grid_Grid_module.Root,[Grid_Grid_module["Root--".concat(columnSize)]]);return __jsx("div",{className:classes},__jsx("ul",{className:Grid_Grid_module.List},items.map((function(item,index){return __jsx(Item,{Card:Card,columnSize:columnSize,item:item,key:index})}))))};Grid.displayName="Grid";var Item=function Item(_ref2){var _ref2$Card=_ref2.Card,Card=void 0===_ref2$Card?null:_ref2$Card,_ref2$columnSize=_ref2.columnSize,columnSize=void 0===_ref2$columnSize?"Third":_ref2$columnSize,_ref2$item=_ref2.item,item=void 0===_ref2$item?{}:_ref2$item,size=item.size,itemSize=size||columnSize,classes=classnames_default()(Grid_Grid_module.Item,[Grid_Grid_module["Item--".concat(itemSize)]]);return __jsx("li",{className:classes},__jsx(Card,(0,esm_extends.A)({},item,{size:itemSize})))};Item.displayName="Item";var Grid_Grid=Grid;Grid.__docgenInfo={description:"",methods:[],displayName:"Grid",props:{Card:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"node"},required:!1},items:{defaultValue:{value:"[]",computed:!1},description:"",type:{name:"array"},required:!1},columns:{defaultValue:{value:"'auto'",computed:!1},description:"",type:{name:"union",value:[{name:"string"},{name:"number"}]},required:!1}}}},"./app/components/Image/Image.data.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{o4:function(){return portrait}});__webpack_exports__.Ay={src:"/dummy/test-original.jpg",alt:"Test",width:1600,height:900,caption:"Photo: Fröjd Fröjdsson",focal:{x:"50%",y:"50%"},srcset:["/dummy/test-512.jpg 512w","/dummy/test-800.jpg 800w","/dummy/test-1600.jpg 1600w"]};var portrait={src:"https://via.placeholder.com/1600x2400",alt:"Test",width:1600,height:2400,caption:"Photo: Fröjd Fröjdsson",focal:{x:"50%",y:"50%"},srcset:["https://via.placeholder.com/512x768 512w","https://via.placeholder.com/800x1200 800w","https://via.placeholder.com/1600x2400 1600w"]}},"./node_modules/classnames/index.js":function(module,exports){var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes="",i=0;i<arguments.length;i++){var arg=arguments[i];arg&&(classes=appendClass(classes,parseValue(arg)))}return classes}function parseValue(arg){if("string"==typeof arg||"number"==typeof arg)return arg;if("object"!=typeof arg)return"";if(Array.isArray(arg))return classNames.apply(null,arg);if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]"))return arg.toString();var classes="";for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&(classes=appendClass(classes,key));return classes}function appendClass(value,newClass){return newClass?value?value+" "+newClass:value+newClass:value}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[4]!./app/components/Grid/Grid.module.scss":function(module,__webpack_exports__,__webpack_require__){"use strict";var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".Grid_List__Tl3qS{display:flex;flex-wrap:wrap;margin-left:-16px;margin-bottom:-16px}@media(min-width: 768px){.Grid_List__Tl3qS{margin-left:-24px;margin-bottom:-24px}}.Grid_Item__Im25u{flex:0 0 auto;display:flex;flex-direction:column;width:calc(100% - 16px);margin-left:16px;margin-bottom:16px}@media(min-width: 768px){.Grid_Item__Im25u{margin-left:24px;margin-bottom:24px}}@media(min-width: 768px){.Grid_Item--Half__NnqAK{width:calc(50% - 24px)}}@media(min-width: 768px){.Grid_Item--Third__katC0{width:calc(50% - 24px)}}@media(min-width: 1024px){.Grid_Item--Third__katC0{width:calc(33.3333333333% - 24px)}}@media(min-width: 768px){.Grid_Item--Fourth__8xEjF{width:calc(50% - 24px)}}@media(min-width: 1024px){.Grid_Item--Fourth__8xEjF{width:calc(33.3333333333% - 24px)}}@media(min-width: 1280px){.Grid_Item--Fourth__8xEjF{width:calc(25% - 24px)}}","",{version:3,sources:["webpack://./app/components/Grid/Grid.module.scss","webpack://./app/styles/includes/mixins.scss"],names:[],mappings:"AAKA,kBACI,YAAA,CACA,cAAA,CACA,iBAAA,CACA,mBAAA,CCJI,yBAAA,kBDOA,iBAAA,CACA,mBAAA,CAAA,CAIR,kBACI,aAAA,CACA,YAAA,CACA,qBAAA,CACA,uBAAA,CACA,gBAAA,CACA,kBAAA,CClBI,yBDYR,kBASQ,gBAAA,CACA,kBAAA,CAAA,CCtBA,yBDyBJ,wBAEQ,sBAAA,CAAA,CC3BJ,yBD+BJ,yBAEQ,sBAAA,CAAA,CCjCJ,0BD+BJ,yBAMQ,iCAAA,CAAA,CCrCJ,yBDyCJ,0BAEQ,sBAAA,CAAA,CC3CJ,0BDyCJ,0BAMQ,iCAAA,CAAA,CC/CJ,0BDyCJ,0BAUQ,sBAAA,CAAA",sourcesContent:["@import 'Styles/includes';\n\n.Root {\n}\n\n.List {\n    display: flex;\n    flex-wrap: wrap;\n    margin-left: -#{$gutter};\n    margin-bottom: -#{$gutter};\n\n    @include media(M) {\n        margin-left: -#{$gutterM};\n        margin-bottom: -#{$gutterM};\n    }\n}\n\n.Item {\n    flex: 0 0 auto;\n    display: flex;\n    flex-direction: column;\n    width: calc(100% - #{$gutter});\n    margin-left: #{$gutter};\n    margin-bottom: #{$gutter};\n\n    @include media(M) {\n        margin-left: #{$gutterM};\n        margin-bottom: #{$gutterM};\n    }\n\n    &--Half {\n        @include media(M) {\n            width: calc(50% - #{$gutterM});\n        }\n    }\n\n    &--Third {\n        @include media(M) {\n            width: calc(50% - #{$gutterM});\n        }\n\n        @include media(ML) {\n            width: calc(#{percentage(1 / 3)} - #{$gutterM});\n        }\n    }\n\n    &--Fourth {\n        @include media(M) {\n            width: calc(50% - #{$gutterM});\n        }\n\n        @include media(ML) {\n            width: calc(#{percentage(1 / 3)} - #{$gutterM});\n        }\n\n        @include media(L) {\n            width: calc(25% - #{$gutterM});\n        }\n    }\n}\n","/* stylelint-disable at-rule-empty-line-before */\n@mixin media($key) {\n    @if $key == 'd' {\n        @content;\n    } @else if map-has-key($breakpoints, $key) {\n        @media (min-width: map-get($breakpoints, $key)) {\n            @content;\n        }\n    } @else {\n        @error 'Unfortunately, no value could be retrieved from `#{$breakpoints}`. Please make sure it is defined in `$breakpoints` map.';\n    }\n}\n\n@mixin media-max($key) {\n    @if $key == 'd' {\n        @content;\n    } @else if map-has-key($breakpoints, $key) {\n        @media (max-width: (map-get($breakpoints, $key) - 1)) {\n            @content;\n        }\n    } @else {\n        @error 'Unfortunately, no value could be retrieved from `#{$breakpoints}`. Please make sure it is defined in `$breakpoints` map.';\n    }\n}\n\n/* stylelint-enable at-rule-empty-line-before */\n\n@mixin clearfix() {\n    &::after,\n    &::before {\n        content: '';\n        display: table;\n        clear: both;\n        width: 100%;\n    }\n}\n\n@mixin href-external($domain: 'example.se') {\n    &:not([href^=\"mailto:\"]):not([href^=\"tel:\"]):not([href=\"\"]):not([href^=\"#\"]):not([href^=\"/\"]):not([href^=\"http://#{$domain}\"]):not([href^=\"https://#{$domain}\"]):not([href*=\"localhost\"]):not([href*=\"stage.#{$domain}\"]):not([href*=\"www.#{$domain}\"]):not([href*=\"beta.#{$domain}\"])\n    {\n        @content;\n    }\n}\n\n@mixin href-download() {\n    &[href$='.pdf'],\n    &[href$='.doc'],\n    &[href$='.docx'],\n    &[href$='.ppt'],\n    &[href$='.pptx'],\n    &[href$='.xls'],\n    &[href$='.xlsx'],\n    &[href$='.odt'],\n    &[href$='.eps'],\n    &[href$='.zip'] {\n        @content;\n    }\n}\n\n// For wrapping elements in the main grid\n// Usage: @include wrap;\n@mixin wrap($exclude: ()) {\n    @if not contains($exclude, d) {\n        margin-left: map-get($spacings, d);\n        margin-right: map-get($spacings, d);\n    }\n\n    @if not contains($exclude, S) {\n        @include breakpoint-wrap(S);\n    }\n\n    @if not contains($exclude, SL) {\n        @include breakpoint-wrap(SL);\n    }\n\n    @if not contains($exclude, M) {\n        @include breakpoint-wrap(M);\n    }\n\n    @if not contains($exclude, ML) {\n        @include breakpoint-wrap(ML);\n    }\n\n    @if not contains($exclude, L) {\n        @include breakpoint-wrap(L);\n    }\n\n    @if not contains($exclude, XL) {\n        @include breakpoint-wrap(XL);\n    }\n\n    @if not contains($exclude, XXL) {\n        @include breakpoint-wrap(XXL);\n    }\n}\n\n@mixin breakpoint-wrap($breakpoint) {\n    @if map-has-key($maxwidths, $breakpoint) {\n        $maxWidth: (map-get($maxwidths, $breakpoint));\n\n        @if $fluid and map-has-key($spacings, $breakpoint) {\n            $maxWidth: $maxWidth - (map-get($spacings, $breakpoint) * 2);\n        }\n\n        @include media($breakpoint) {\n            max-width: $maxWidth;\n            margin-left: auto;\n            margin-right: auto;\n        }\n    }\n\n    @if $fluid and map-has-key($spacings, $breakpoint) {\n        @include media($breakpoint) {\n            margin-left: (map-get($spacings, $breakpoint));\n            margin-right: (map-get($spacings, $breakpoint));\n        }\n    }\n}\n\n// For setting font-size and line-height on elements defined by variabels, including media queries\n// Usage: @include textstyle(h1);\n@mixin textstyle($key) {\n    // Loop through text map and set font-size and line-height for each media query\n    @if map-has-key($textstyles, $key) {\n        $map: map-get($textstyles, $key);\n\n        @each $media, $style in $map {\n            @include media($media) {\n                @if map-has-key($style, font-size) and\n                    map-has-key($style, line-height)\n                {\n                    $font-size: map-get($style, font-size);\n                    $line-height: map-get($style, line-height);\n\n                    font-size: #{$font-size / 10}rem;\n                    line-height: #{round($line-height / $font-size * 100) /\n                        100};\n                }\n\n                @each $param, $value in $style {\n                    @if $param != 'font-size' and $param != 'line-height' {\n                        #{$param}: $value;\n                    }\n                }\n            }\n        }\n    }\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={List:"Grid_List__Tl3qS",Item:"Grid_Item__Im25u","Item--Half":"Grid_Item--Half__NnqAK","Item--Third":"Grid_Item--Third__katC0","Item--Fourth":"Grid_Item--Fourth__8xEjF"},__webpack_exports__.A=___CSS_LOADER_EXPORT___}}]);