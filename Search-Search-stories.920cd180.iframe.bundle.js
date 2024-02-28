"use strict";(self.webpackChunkfrojd_jewl=self.webpackChunkfrojd_jewl||[]).push([[4080],{"./app/containers/Search/Search.stories.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:function(){return Default},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return Search_stories}});var defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),Base=__webpack_require__("./app/layouts/Base/index.js"),SearchForm=__webpack_require__("./app/components/SearchForm/index.js"),SearchResult=__webpack_require__("./app/components/SearchResult/SearchResult.js"),components_SearchResult=SearchResult.A;SearchResult.A.__docgenInfo={description:"",methods:[],displayName:"SearchResult",props:{keyword:{defaultValue:{value:"''",computed:!1},description:"",type:{name:"string"},required:!1},filterButtons:{defaultValue:{value:"{}",computed:!1},description:"",type:{name:"object"},required:!1},items:{defaultValue:{value:"[]",computed:!1},description:"",type:{name:"array"},required:!1},total:{defaultValue:{value:"0",computed:!1},description:"",type:{name:"number"},required:!1},page:{defaultValue:{value:"1",computed:!1},description:"",type:{name:"number"},required:!1},itemsPerPage:{defaultValue:{value:"12",computed:!1},description:"",type:{name:"number"},required:!1}}};var injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Search_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[4]!./app/containers/Search/Search.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Search_module.A,options);var Search_Search_module=Search_module.A&&Search_module.A.locals?Search_module.A.locals:void 0,__jsx=react.createElement,Search=function Search(_ref){var _ref$title=_ref.title,title=void 0===_ref$title?"":_ref$title,_ref$keyword=_ref.keyword,keyword=void 0===_ref$keyword?"":_ref$keyword,_ref$searchForm=_ref.searchForm,searchForm=void 0===_ref$searchForm?{}:_ref$searchForm,_ref$searchResult=_ref.searchResult,searchResult=void 0===_ref$searchResult?{}:_ref$searchResult,_useState=(0,react.useState)(keyword),currentKeyword=_useState[0],setCurrentKeyword=_useState[1];return __jsx("div",{className:Search_Search_module.Root},__jsx("div",{className:Search_Search_module.Header},__jsx("div",{className:Search_Search_module.Wrap},__jsx("h1",{className:Search_Search_module.Title,dangerouslySetInnerHTML:{__html:title}}),__jsx("div",{className:Search_Search_module.SearchForm},__jsx(SearchForm.A,(0,esm_extends.A)({},searchForm,{keyword:currentKeyword,id:"search-form",modifier:"Search",onSubmit:function onSubmit(s){return setCurrentKeyword(s)}}))))),__jsx("div",{className:Search_Search_module.Wrap},__jsx(components_SearchResult,(0,esm_extends.A)({},searchResult,{keyword:currentKeyword}))))};Search.displayName="Search";var Search_Search=(0,Base.A)(Search);Search.__docgenInfo={description:"",methods:[],displayName:"Search",props:{title:{defaultValue:{value:"''",computed:!1},description:"",type:{name:"string"},required:!1},keyword:{defaultValue:{value:"''",computed:!1},description:"",type:{name:"string"},required:!1},searchForm:{defaultValue:{value:"{}",computed:!1},description:"",type:{name:"object"},required:!1},searchResult:{defaultValue:{value:"{}",computed:!1},description:"",type:{name:"object"},required:!1}}};var Base_data=__webpack_require__("./app/layouts/Base/Base.data.js"),SearchForm_data=__webpack_require__("./app/components/SearchForm/SearchForm.data.js"),SearchResult_data=__webpack_require__("./app/components/SearchResult/SearchResult.data.js");__webpack_require__("./app/components/FilterButtons/FilterButtons.data.js"),__webpack_require__("./app/components/Card/Card.data.js");function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.A)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var Search_data=_objectSpread(_objectSpread({},Base_data.A),{},{breadcrumbs:null,title:"Sök på hemsidan",keyword:"Testar sök",searchForm:SearchForm_data.A,searchResult:SearchResult_data.A}),Search_stories_jsx=react.createElement;function Search_stories_ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}var Search_stories={component:Search_Search,parameters:{docs:{description:{component:"Search\n\n[Search source code on Github](https://github.com/Frojd/Frojd-Jewl/tree/develop/component-library/app/containers/Search)\n"}}}},Template=function Template(args){return Search_stories_jsx(Search_Search,args)};Template.displayName="Template";var Default=Template.bind({});Default.args=function Search_stories_objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?Search_stories_ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.A)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Search_stories_ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}({},Search_data),Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => <Search {...args} />",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"./app/components/SearchForm/SearchForm.data.js":function(__unused_webpack_module,__webpack_exports__){__webpack_exports__.A={id:"search-bar",action:"?path=/story/containers-searchpage--default"}},"./app/layouts/Base/Base.data.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var Components_Header_Header_data__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./app/components/Header/Header.data.js"),Components_Breadcrumbs_Breadcrumbs_data__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./app/components/Breadcrumbs/Breadcrumbs.data.js"),Components_Footer_Footer_data__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./app/components/Footer/Footer.data.js"),data={header:Components_Header_Header_data__WEBPACK_IMPORTED_MODULE_0__.A,breadcrumbs:Components_Breadcrumbs_Breadcrumbs_data__WEBPACK_IMPORTED_MODULE_1__.A,footer:Components_Footer_Footer_data__WEBPACK_IMPORTED_MODULE_2__.A};__webpack_exports__.A=data},"./app/layouts/Base/index.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{A:function(){return layouts_Base}});var objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),Breadcrumbs=__webpack_require__("./app/components/Breadcrumbs/Breadcrumbs.js"),components_Breadcrumbs=Breadcrumbs.A;Breadcrumbs.A.__docgenInfo={description:"",methods:[],displayName:"Breadcrumbs",props:{items:{defaultValue:{value:"[]",computed:!1},description:"",type:{name:"array"},required:!1}}};var Header=__webpack_require__("./app/components/Header/Header.js"),components_Header=Header.A;Header.A.__docgenInfo={description:"",methods:[],displayName:"Header",props:{main:{defaultValue:{value:"{}",computed:!1},description:"",type:{name:"object"},required:!1},service:{defaultValue:{value:"{}",computed:!1},description:"",type:{name:"object"},required:!1}}};var Footer=__webpack_require__("./app/components/Footer/Footer.js"),components_Footer=Footer.A;Footer.A.__docgenInfo={description:"",methods:[],displayName:"Footer",props:{follow:{defaultValue:{value:"{}",computed:!1},description:"",type:{name:"object"},required:!1},primary:{defaultValue:{value:"{}",computed:!1},description:"",type:{name:"object"},required:!1},secondary:{defaultValue:{value:"{}",computed:!1},description:"",type:{name:"object"},required:!1},tertiary:{defaultValue:{value:"{}",computed:!1},description:"",type:{name:"object"},required:!1},service:{defaultValue:{value:"{}",computed:!1},description:"",type:{name:"object"},required:!1}}};var injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Base_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[4]!./app/layouts/Base/Base.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Base_module.A,options);var Base_Base_module=Base_module.A&&Base_module.A.locals?Base_module.A.locals:void 0,_excluded=["containerName","breadcrumbs","header","footer"],__jsx=react.createElement,layouts_Base=function Base(Container){var displayName=Container.displayName;return function Wrapper(_ref){var _ref$containerName=_ref.containerName,containerName=void 0===_ref$containerName?"":_ref$containerName,_ref$breadcrumbs=_ref.breadcrumbs,breadcrumbs=void 0===_ref$breadcrumbs?{}:_ref$breadcrumbs,_ref$header=_ref.header,header=void 0===_ref$header?{}:_ref$header,_ref$footer=_ref.footer,footer=void 0===_ref$footer?{}:_ref$footer,restProps=(0,objectWithoutProperties.A)(_ref,_excluded),name=containerName||displayName,classes=classnames_default()(Base_Base_module.Root,[Base_Base_module["Root--".concat(name)]]);return __jsx("div",{className:classes},__jsx(components_Header,header),__jsx("div",{className:Base_Base_module.Document,role:"document"},__jsx(components_Breadcrumbs,breadcrumbs),__jsx("main",{className:Base_Base_module.Main,id:"mainContent"},__jsx(Container,restProps))),__jsx(components_Footer,footer))}}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[4]!./app/containers/Search/Search.module.scss":function(module,__webpack_exports__,__webpack_require__){var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".Search_Wrap__sZOeC{margin-left:16px;margin-right:16px}@media(min-width: 500px){.Search_Wrap__sZOeC{max-width:468px;margin-left:auto;margin-right:auto}}@media(min-width: 768px){.Search_Wrap__sZOeC{max-width:720px;margin-left:auto;margin-right:auto}}@media(min-width: 1024px){.Search_Wrap__sZOeC{max-width:808px;margin-left:auto;margin-right:auto}}@media(min-width: 1280px){.Search_Wrap__sZOeC{max-width:1140px;margin-left:auto;margin-right:auto}}@media(min-width: 1440px){.Search_Wrap__sZOeC{max-width:1280px;margin-left:auto;margin-right:auto}}@media(min-width: 1680px){.Search_Wrap__sZOeC{max-width:1440px;margin-left:auto;margin-right:auto}}.Search_Header__P2rX9{padding-top:48px;padding-bottom:40px;margin-bottom:32px;background-color:#ede7f6}@media(min-width: 768px){.Search_Header__P2rX9{padding-top:88px;padding-bottom:56px;margin-bottom:48px}}.Search_Title__l68Oi{font-size:4.4rem;line-height:1.36;font-weight:700;font-family:Roboto, Arial, sans-serif;margin-bottom:24px;max-width:725px}@media(min-width: 768px){.Search_Title__l68Oi{font-size:6.4rem;line-height:1.32}}","",{version:3,sources:["webpack://./app/containers/Search/Search.module.scss","webpack://./app/styles/includes/mixins.scss","webpack://./app/styles/includes/variables.scss"],names:[],mappings:"AAKA,oBC0DQ,gBC9DC,CD+DD,iBC/DC,CDID,yBAAA,oBAgEI,eAAA,CACA,gBAAA,CACA,iBAAA,CAAA,CAlEJ,yBAAA,oBAwEI,eAAA,CACA,gBAAA,CACA,iBAAA,CAAA,CA1EJ,0BAAA,oBAgFI,eAAA,CACA,gBAAA,CACA,iBAAA,CAAA,CAlFJ,0BAAA,oBAwFI,gBAAA,CACA,gBAAA,CACA,iBAAA,CAAA,CA1FJ,0BAAA,oBAgGI,gBAAA,CACA,gBAAA,CACA,iBAAA,CAAA,CAlGJ,0BAAA,oBAwGI,gBAAA,CACA,gBAAA,CACA,iBAAA,CAAA,CDtGZ,sBACI,gBAAA,CACA,mBAAA,CACA,kBAAA,CACA,wBE4BQ,CDpCJ,yBDIR,sBAOQ,gBAAA,CACA,mBAAA,CACA,kBAAA,CAAA,CAIR,qBC6GoB,gBAAA,CACA,gBAAA,CAMI,eAjBV,CAiBU,qCAjBV,CDhGV,kBAAA,CACA,eAAA,CCrBI,yBDiBR,qBC6GoB,gBAAA,CACA,gBAAA,CAAA",sourcesContent:["@import 'Styles/includes';\n\n.Root {\n}\n\n.Wrap {\n    @include wrap;\n}\n\n.Header {\n    padding-top: 48px;\n    padding-bottom: 40px;\n    margin-bottom: 32px;\n    background-color: $purple-20;\n\n    @include media(M) {\n        padding-top: 88px;\n        padding-bottom: 56px;\n        margin-bottom: 48px;\n    }\n}\n\n.Title {\n    @include textstyle(page-title);\n\n    margin-bottom: 24px;\n    max-width: map-get($maxwidths, header);\n}\n","/* stylelint-disable at-rule-empty-line-before */\n@mixin media($key) {\n    @if $key == 'd' {\n        @content;\n    } @else if map-has-key($breakpoints, $key) {\n        @media (min-width: map-get($breakpoints, $key)) {\n            @content;\n        }\n    } @else {\n        @error 'Unfortunately, no value could be retrieved from `#{$breakpoints}`. Please make sure it is defined in `$breakpoints` map.';\n    }\n}\n\n@mixin media-max($key) {\n    @if $key == 'd' {\n        @content;\n    } @else if map-has-key($breakpoints, $key) {\n        @media (max-width: (map-get($breakpoints, $key) - 1)) {\n            @content;\n        }\n    } @else {\n        @error 'Unfortunately, no value could be retrieved from `#{$breakpoints}`. Please make sure it is defined in `$breakpoints` map.';\n    }\n}\n\n/* stylelint-enable at-rule-empty-line-before */\n\n@mixin clearfix() {\n    &::after,\n    &::before {\n        content: '';\n        display: table;\n        clear: both;\n        width: 100%;\n    }\n}\n\n@mixin href-external($domain: 'example.se') {\n    &:not([href^=\"mailto:\"]):not([href^=\"tel:\"]):not([href=\"\"]):not([href^=\"#\"]):not([href^=\"/\"]):not([href^=\"http://#{$domain}\"]):not([href^=\"https://#{$domain}\"]):not([href*=\"localhost\"]):not([href*=\"stage.#{$domain}\"]):not([href*=\"www.#{$domain}\"]):not([href*=\"beta.#{$domain}\"])\n    {\n        @content;\n    }\n}\n\n@mixin href-download() {\n    &[href$='.pdf'],\n    &[href$='.doc'],\n    &[href$='.docx'],\n    &[href$='.ppt'],\n    &[href$='.pptx'],\n    &[href$='.xls'],\n    &[href$='.xlsx'],\n    &[href$='.odt'],\n    &[href$='.eps'],\n    &[href$='.zip'] {\n        @content;\n    }\n}\n\n// For wrapping elements in the main grid\n// Usage: @include wrap;\n@mixin wrap($exclude: ()) {\n    @if not contains($exclude, d) {\n        margin-left: $gutter;\n        margin-right: $gutter;\n    }\n\n    @if not contains($exclude, SL) {\n        @include media(SL) {\n            max-width: (map-get($maxwidths, SL));\n            margin-left: auto;\n            margin-right: auto;\n        }\n    }\n\n    @if not contains($exclude, M) {\n        @include media(M) {\n            max-width: (map-get($maxwidths, M));\n            margin-left: auto;\n            margin-right: auto;\n        }\n    }\n\n    @if not contains($exclude, ML) {\n        @include media(ML) {\n            max-width: (map-get($maxwidths, ML));\n            margin-left: auto;\n            margin-right: auto;\n        }\n    }\n\n    @if not contains($exclude, L) {\n        @include media(L) {\n            max-width: (map-get($maxwidths, L));\n            margin-left: auto;\n            margin-right: auto;\n        }\n    }\n\n    @if not contains($exclude, XL) {\n        @include media(XL) {\n            max-width: (map-get($maxwidths, XL));\n            margin-left: auto;\n            margin-right: auto;\n        }\n    }\n\n    @if not contains($exclude, XXL) {\n        @include media(XXL) {\n            max-width: (map-get($maxwidths, XXL));\n            margin-left: auto;\n            margin-right: auto;\n        }\n    }\n}\n\n// For setting font-size and line-height on elements defined by variabels, including media queries\n// Usage: @include textstyle(h1);\n@mixin textstyle($key) {\n    // Loop through text map and set font-size and line-height for each media query\n    @if map-has-key($textstyles, $key) {\n        $map: map-get($textstyles, $key);\n\n        @each $media, $style in $map {\n            @include media($media) {\n                @if map-has-key($style, font-size) and\n                    map-has-key($style, line-height)\n                {\n                    $font-size: map-get($style, font-size);\n                    $line-height: map-get($style, line-height);\n\n                    font-size: #{$font-size / 10}rem;\n                    line-height: #{round($line-height / $font-size * 100) /\n                        100};\n                }\n\n                @each $param, $value in $style {\n                    @if $param != 'font-size' and $param != 'line-height' {\n                        #{$param}: $value;\n                    }\n                }\n            }\n        }\n    }\n}\n","$assetsPath: '../../assets/';\n$gutter: 16px;\n$gutterM: 24px; // Used for media query above M\n\n// Grid and site widths\n$maxwidths: (\n    // S: 320px,\n    SL: 500px - ($gutter * 2),\n    M: 720px,\n    ML: 808px,\n    L: 1140px,\n    XL: 1280px,\n    XXL: 1440px,\n    header: 725px,\n    content: 618px\n);\n$breakpoints: (\n    S: 375px,\n    SL: 500px,\n    // Landscape\n    M: 768px,\n    ML: 1024px,\n    // Landscape\n    L: 1280px,\n    XL: 1440px,\n    XXL: 1680px,\n);\n$transition: 0.3s ease-in-out;\n\n/** Color definintions from styleguide **/\n$grey: #9e9e9e;\n$grey-5: #fafafa;\n$grey-10: whitesmoke; // #F5F5F5\n$grey-20: #eee;\n$grey-30: #e0e0e0;\n$grey-40: #bdbdbd;\n$grey-60: #757575;\n$grey-70: #616161;\n$grey-80: #424242;\n$grey-90: #212121;\n$purple: #673ab7;\n$purple-20: #ede7f6;\n$purple-60: #b39ddb;\n$purple-90: #4527a0;\n$yellow: #ffee58;\n$yellow-20: #fffde7;\n$yellow-40: #fff59d;\n$yellow-60: #fdd835;\n$pink: #e91e63;\n$system-error: #d32f2f;\n$system-error-10: #fbebeb;\n$system-success: #1dac2c;\n\n/** Color definitions custom vars **/\n$bg-color: white;\n$base-color: $grey-90;\n$primary-color: $purple;\n$accent-color: $yellow;\n$link-color: $primary-color;\n$link-hover-color: darken($purple, 20%);\n$error-color: $system-error;\n$error-bg: $system-error-10;\n$success-color: $system-success;\n\n/** Text styles variables **/\n$base-font: #{Roboto, Arial, sans-serif};\n$heading-font: #{Roboto, Arial, sans-serif};\n$base-size: 1.6rem;\n\n// Match names of weights here with the weights of the fonts in fonts.scss\n$light: 300;\n$regular: 400;\n$medium: 500;\n$bold: 700;\n\n// No other font sizes are needed\n// Font sizes and line heights as defined by styleguide in pixels\n$textstyles: (\n    page-title: (\n        d: (\n            font-size: 44,\n            line-height: 59.8,\n            font-weight: $bold,\n            font-family: $heading-font,\n        ),\n        M: (\n            font-size: 64,\n            line-height: 84.5,\n        ),\n    ),\n    module-title: (\n        d: (\n            font-size: 34,\n            line-height: 47.6,\n            font-weight: $bold,\n            font-family: $heading-font,\n        ),\n        M: (\n            font-size: 44,\n            line-height: 60.3,\n        ),\n    ),\n    card-title: (\n        d: (\n            font-size: 34,\n            line-height: 40,\n            font-weight: $bold,\n            font-family: $heading-font,\n        ),\n        M: (\n            font-size: 26,\n            line-height: 26,\n        ),\n    ),\n    accordion-title: (\n        d: (\n            font-size: 16,\n            line-height: 23.8,\n            font-weight: $bold,\n            font-family: $heading-font,\n        ),\n        M: (\n            font-size: 22,\n            line-height: 28.4,\n        ),\n    ),\n    footer-title: (\n        d: (\n            font-size: 18,\n            line-height: 26.82,\n            font-weight: $bold,\n            font-family: $heading-font,\n        ),\n        M: (\n            font-size: 20,\n            line-height: 25.8,\n            font-weight: $bold,\n            font-family: $heading-font,\n        ),\n    ),\n    richtext-h2: (\n        d: (\n            font-size: 36,\n            line-height: 48.2,\n            font-weight: $bold,\n            font-family: $heading-font,\n        ),\n        M: (\n            font-size: 40,\n            line-height: 55.6,\n        ),\n    ),\n    richtext-h3: (\n        d: (\n            font-size: 28,\n            line-height: 39.8,\n            font-weight: $bold,\n            font-family: $heading-font,\n        ),\n        M: (\n            font-size: 32,\n            line-height: 45.1,\n        ),\n    ),\n    richtext-h4: (\n        d: (\n            font-size: 24,\n            line-height: 36.5,\n            font-weight: $bold,\n            font-family: $heading-font,\n        ),\n        M: (\n            font-size: 26,\n            line-height: 39.5,\n        ),\n    ),\n    richtext-h5: (\n        d: (\n            font-size: 20,\n            line-height: 28.4,\n            font-weight: $bold,\n            font-family: $heading-font,\n        ),\n        M: (\n            font-size: 22,\n            line-height: 32.6,\n        ),\n    ),\n    richtext-h6: (\n        d: (\n            font-size: 16,\n            line-height: 23.7,\n            font-weight: $bold,\n            font-family: $heading-font,\n        ),\n        M: (\n            font-size: 18,\n            line-height: 26.6,\n        ),\n    ),\n    body: (\n        d: (\n            font-size: 16,\n            line-height: 23.5,\n        ),\n        // Also card-text\n    ),\n    preamble: (\n        d: (\n            font-size: 18,\n            line-height: 27.4,\n            font-weight: $light,\n        ),\n        M: (\n            font-size: 22,\n            line-height: 32.6,\n        ),\n    ),\n    paragraph: (\n        d: (\n            font-size: 16,\n            line-height: 23.5,\n        ),\n        M: (\n            font-size: 18,\n            line-height: 27.7,\n        ),\n    ),\n    quote: (\n        d: (\n            font-size: 20,\n            line-height: 39.4,\n            font-weight: $bold,\n            font-family: $heading-font,\n        ),\n        M: (\n            font-size: 26,\n            line-height: 39.5,\n        ),\n    ),\n    cite: (\n        d: (\n            font-size: 14,\n            line-height: 23.5,\n        ),\n        // Quote name\n        M:\n            (\n                font-size: 18,\n                line-height: 26.5,\n            ),\n    ),\n    caption: (\n        d: (\n            font-size: 12,\n            line-height: 16.3,\n            letter-spacing: 0.2px,\n        ),\n    ),\n    button: (\n        d: (\n            font-size: 16,\n            line-height: 19.8,\n            font-weight: $medium,\n        ),\n        M: (\n            font-size: 18,\n            line-height: 24.5,\n        ),\n    ),\n    textlink: (\n        d: (\n            font-size: 16,\n            line-height: 23.5,\n        ),\n        // Footer link\n        M:\n            (\n                font-size: 18,\n                line-height: 27.7,\n            ),\n    ),\n    main-menu: (\n        d: (\n            font-size: 20,\n            line-height: 29.6,\n        ),\n        M: (\n            font-size: 16,\n            line-height: 23.68,\n        ),\n    ),\n    service-menu: (\n        d: (\n            font-size: 12,\n            line-height: 16.44,\n        ),\n        M: (\n            font-size: 14,\n            line-height: 23.52,\n        ),\n    ),\n    submenu: (\n        d: (\n            font-size: 16,\n            line-height: 19.7,\n            font-weight: $bold,\n        ),\n        // Add bold to active and first level instead of new text style\n    ),\n    breadcrumb: (\n        d: (\n            font-size: 10,\n            line-height: 12.2,\n        ),\n        M: (\n            font-size: 12,\n            line-height: 16.3,\n        ),\n    ),\n    label: (\n        d: (\n            font-size: 14,\n            line-height: 16.5,\n            font-weight: $bold,\n            text-transform: uppercase,\n        ),\n    ),\n    label-card: (\n        d: (\n            font-size: 12,\n            line-height: 14,\n            font-weight: $bold,\n            text-transform: uppercase,\n        ),\n    ),\n    date: (\n        d: (\n            font-size: 14,\n            line-height: 23.5,\n        ),\n    ),\n);\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={Wrap:"Search_Wrap__sZOeC",Header:"Search_Header__P2rX9",Title:"Search_Title__l68Oi"},__webpack_exports__.A=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[4]!./app/layouts/Base/Base.module.scss":function(module,__webpack_exports__,__webpack_require__){var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".Base_Main__RGHc1{display:block}","",{version:3,sources:["webpack://./app/layouts/Base/Base.module.scss"],names:[],mappings:"AAQA,kBACI,aAAA",sourcesContent:["@import 'Styles/includes';\n\n.Root {\n}\n\n.Document {\n}\n\n.Main {\n    display: block; /* For IE11 compatibility */\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={Main:"Base_Main__RGHc1"},__webpack_exports__.A=___CSS_LOADER_EXPORT___}}]);