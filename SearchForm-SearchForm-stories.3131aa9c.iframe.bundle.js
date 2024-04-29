"use strict";(self.webpackChunkfrojd_jewl=self.webpackChunkfrojd_jewl||[]).push([[7804],{"./node_modules/@babel/runtime/helpers/esm/extends.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}__webpack_require__.d(__webpack_exports__,{A:function(){return _extends}})},"./app/components/SearchForm/SearchForm.stories.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:function(){return Default},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return SearchForm_stories}});var defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),SearchForm=__webpack_require__("./app/components/SearchForm/SearchForm.js"),SearchForm_data=__webpack_require__("./app/components/SearchForm/SearchForm.data.js"),__jsx=react.createElement;function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}var SearchForm_stories={component:SearchForm.A,parameters:{docs:{description:{component:"SearchForm\n\n[SearchForm source code on Github](https://github.com/Frojd/Frojd-Jewl/tree/develop/component-library/app/components/SearchForm)\n"}}}},Template=function Template(args){return __jsx(SearchForm.A,args)};Template.displayName="Template";var Default=Template.bind({});Default.args=function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.A)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}({},SearchForm_data.A),Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => <SearchForm {...args} />",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"./app/components/Icon/index.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var _Icon__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./app/components/Icon/Icon.js");__webpack_exports__.A=_Icon__WEBPACK_IMPORTED_MODULE_0__.A,_Icon__WEBPACK_IMPORTED_MODULE_0__.A.__docgenInfo={description:"",methods:[],displayName:"Icon",props:{name:{defaultValue:{value:"''",computed:!1},description:"",type:{name:"string"},required:!1},className:{defaultValue:{value:"''",computed:!1},description:"",type:{name:"string"},required:!1},asImg:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},asBg:{defaultValue:{value:"false",computed:!1},required:!1}}}},"./app/components/SearchForm/SearchForm.data.js":function(__unused_webpack_module,__webpack_exports__){__webpack_exports__.A={id:"search-bar",action:"?path=/story/containers-searchpage--default"}},"./app/components/SearchForm/SearchForm.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{A:function(){return SearchForm_SearchForm}});var defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),es=__webpack_require__("./node_modules/react-i18next/dist/es/index.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),Icon=__webpack_require__("./app/components/Icon/index.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),SearchForm_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[4]!./app/components/SearchForm/SearchForm.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(SearchForm_module.A,options);var SearchForm_SearchForm_module=SearchForm_module.A&&SearchForm_module.A.locals?SearchForm_module.A.locals:void 0,__jsx=react.createElement,SearchForm=function SearchForm(_ref){var _ref$id=_ref.id,id=void 0===_ref$id?"":_ref$id,_ref$action=_ref.action,action=void 0===_ref$action?"":_ref$action,_ref$modifier=_ref.modifier,modifier=void 0===_ref$modifier?"":_ref$modifier,_ref$keyword=_ref.keyword,keyword=void 0===_ref$keyword?"":_ref$keyword,_ref$triggerFocus=_ref.triggerFocus,triggerFocus=void 0===_ref$triggerFocus?null:_ref$triggerFocus,_ref$onSubmit=_ref.onSubmit,onSubmit=void 0===_ref$onSubmit?null:_ref$onSubmit,t=(0,es.Bd)().t,inputRef=(0,react.useRef)(null),_useState=(0,react.useState)(keyword),currentValue=_useState[0],setCurrentValue=_useState[1];(0,react.useEffect)((function(){inputRef&&inputRef.current&&triggerFocus&&setTimeout((function(){inputRef.current.focus()}),1)}),[triggerFocus]),(0,react.useEffect)((function(){setCurrentValue(keyword)}),[keyword]);var handleSubmit=function handleSubmit(e){onSubmit&&(e.preventDefault(),onSubmit(currentValue))},classes=classnames_default()(SearchForm_SearchForm_module.Root,(0,defineProperty.A)({},SearchForm_SearchForm_module["Root--".concat(modifier)],modifier));return __jsx("div",{className:classes},__jsx("form",{action:action,className:SearchForm_SearchForm_module.Form,role:"search",onSubmit:function onSubmit(e){return handleSubmit(e)}},__jsx("label",{className:"sr-only",htmlFor:id},t("searchForm.label")),__jsx("input",{id:id,className:SearchForm_SearchForm_module.Input,type:"text",value:currentValue,placeholder:t("searchForm.placeholder"),ref:inputRef,onChange:function onChange(e){return function handleInput(e){e.preventDefault(),setCurrentValue(e.target.value)}(e)}}),__jsx("button",{type:"submit",className:SearchForm_SearchForm_module.Submit,"aria-label":t("searchForm.submit")},__jsx(Icon.A,{name:"Search",asBg:!0}))))};SearchForm.displayName="SearchForm";var SearchForm_SearchForm=SearchForm;SearchForm.__docgenInfo={description:"",methods:[],displayName:"SearchForm",props:{id:{defaultValue:{value:"''",computed:!1},description:"",type:{name:"string"},required:!1},action:{defaultValue:{value:"''",computed:!1},description:"",type:{name:"string"},required:!1},modifier:{defaultValue:{value:"''",computed:!1},description:"",type:{name:"string"},required:!1},keyword:{defaultValue:{value:"''",computed:!1},required:!1},triggerFocus:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"bool"},required:!1},onSubmit:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"func"},required:!1},value:{description:"",type:{name:"string"},required:!1}}}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[4]!./app/components/SearchForm/SearchForm.module.scss":function(module,__webpack_exports__,__webpack_require__){var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".SearchForm_Root__Dp3lW{position:relative}.SearchForm_Form__aVJjs{position:relative;height:32px;width:100%;max-width:200px}.SearchForm_Root--Search__OAy_0 .SearchForm_Form__aVJjs{height:56px;max-width:511px}.SearchForm_Input__hJnDi{width:100%;height:100%;padding:10px 38px 10px 12px;font-size:1.6rem;font-family:Roboto, Arial, sans-serif;border:1px solid #b39ddb;border-radius:30px;background-color:#fff;box-shadow:none;-webkit-appearance:none;transition:border-color .3s ease-in-out;inset:0 24px}.SearchForm_Input__hJnDi::placeholder{color:#616161}.SearchForm_Root__Dp3lW:hover .SearchForm_Input__hJnDi{border-color:#673ab7}.SearchForm_Root--Search__OAy_0 .SearchForm_Input__hJnDi{padding:6px 64px 6px 24px}.SearchForm_Submit__ZbCHQ{position:absolute;top:0;bottom:0;right:4px;width:24px;height:24px;margin:auto;padding:6px;border:none;border-radius:50%;background:#ede7f6;box-shadow:none;-webkit-appearance:none;transition:background-color .3s ease-in-out;cursor:pointer;z-index:1;overflow:hidden}.SearchForm_Submit__ZbCHQ:hover{background-color:#b39ddb}.SearchForm_Submit__ZbCHQ>i{position:absolute;top:0;bottom:0;left:0;right:0;color:#673ab7;width:16px;height:16px;margin:auto}.SearchForm_Root--Search__OAy_0 .SearchForm_Submit__ZbCHQ{right:6px;height:44px;width:44px}.SearchForm_Root--Search__OAy_0 .SearchForm_Submit__ZbCHQ>i{width:24px;height:24px}","",{version:3,sources:["webpack://./app/components/SearchForm/SearchForm.module.scss","webpack://./app/styles/includes/variables.scss"],names:[],mappings:"AAEA,wBACI,iBAAA,CAGJ,wBACI,iBAAA,CACA,WAAA,CACA,UAAA,CACA,eAAA,CAEA,wDACI,WAAA,CACA,eAAA,CAIR,yBACI,UAAA,CACA,WAAA,CACA,2BAAA,CACA,gBAAA,CACA,qCCuDQ,CDtDR,wBAAA,CACA,kBAAA,CACA,qBAAA,CACA,eAAA,CACA,uBAAA,CACA,uCAAA,CACA,YAAA,CAEA,sCACI,aCgBE,CDbN,uDACI,oBCeC,CDZL,yDACI,yBAAA,CAIR,0BACI,iBAAA,CACA,KAAA,CACA,QAAA,CACA,SAAA,CACA,UAAA,CACA,WAAA,CACA,WAAA,CACA,WAAA,CACA,WAAA,CACA,iBAAA,CACA,kBCHQ,CDIR,eAAA,CACA,uBAAA,CACA,2CAAA,CACA,cAAA,CACA,SAAA,CACA,eAAA,CAEA,gCACI,wBCVI,CDaR,4BACI,iBAAA,CACA,KAAA,CACA,QAAA,CACA,MAAA,CACA,OAAA,CACA,aCtBC,CDuBD,UAAA,CACA,WAAA,CACA,WAAA,CAGJ,0DACI,SAAA,CACA,WAAA,CACA,UAAA,CAEA,4DACI,UAAA,CACA,WAAA",sourcesContent:["@import '../../styles/includes';\n\n.Root {\n    position: relative;\n}\n\n.Form {\n    position: relative;\n    height: 32px;\n    width: 100%;\n    max-width: 200px;\n\n    .Root--Search & {\n        height: 56px;\n        max-width: 511px;\n    }\n}\n\n.Input {\n    width: 100%;\n    height: 100%;\n    padding: 10px 38px 10px 12px;\n    font-size: 1.6rem; // Never change input font size to smaller size\n    font-family: $base-font;\n    border: 1px solid $purple-60;\n    border-radius: 30px;\n    background-color: white;\n    box-shadow: none;\n    -webkit-appearance: none;\n    transition: border-color $transition;\n    inset: 0 24px;\n\n    &::placeholder {\n        color: $grey-70;\n    }\n\n    .Root:hover & {\n        border-color: $purple;\n    }\n\n    .Root--Search & {\n        padding: 6px 64px 6px 24px;\n    }\n}\n\n.Submit {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    right: 4px;\n    width: 24px;\n    height: 24px;\n    margin: auto;\n    padding: 6px;\n    border: none;\n    border-radius: 50%;\n    background: $purple-20;\n    box-shadow: none;\n    -webkit-appearance: none;\n    transition: background-color $transition;\n    cursor: pointer;\n    z-index: 1;\n    overflow: hidden; // Prevent hidden submit text to overflow\n\n    &:hover {\n        background-color: $purple-60;\n    }\n\n    > i {\n        position: absolute;\n        top: 0;\n        bottom: 0;\n        left: 0;\n        right: 0;\n        color: $purple;\n        width: 16px;\n        height: 16px;\n        margin: auto;\n    }\n\n    .Root--Search & {\n        right: 6px;\n        height: 44px;\n        width: 44px;\n\n        > i {\n            width: 24px;\n            height: 24px;\n        }\n    }\n}\n","$assetsPath: '../../assets/';\n\n// Gutters used as column spacing in grid\n$gutter: 16px;\n$gutterM: 24px; // Used for media query above M\n\n$breakpoints: (\n    S: 375px,\n    SL: 500px,\n    // Landscape\n    M: 768px,\n    ML: 1024px,\n    // Landscape\n    L: 1280px,\n    XL: 1440px,\n    XXL: 1680px,\n);\n\n// Spacings used as margins in viewport, added to @mixin wrap\n$spacings: (\n    d: 16px,\n    M: 24px,\n    L: 40px,\n);\n\n// Possible to add or remove widths for a more fixed or fluid grid\n$fluid: true;\n$maxwidths: (\n    // S: 320px,\n    // SL: 500px - (map-get($spacings, d) * 2),\n    // M: 720px,\n    // ML: 808px,\n    // L: 1140px,\n    XL: 1280px,\n    XXL: 1440px,\n    article: 1046px,\n    header: 725px,\n    content: 618px\n);\n$transition: 0.3s ease-in-out;\n\n/** Color definintions from styleguide **/\n$grey: #9e9e9e;\n$grey-5: #fafafa;\n$grey-10: whitesmoke; // #F5F5F5\n$grey-20: #eee;\n$grey-30: #e0e0e0;\n$grey-40: #bdbdbd;\n$grey-60: #757575;\n$grey-70: #616161;\n$grey-80: #424242;\n$grey-90: #212121;\n$purple: #673ab7;\n$purple-20: #ede7f6;\n$purple-40: #dbcef2;\n$purple-60: #b39ddb;\n$purple-90: #4527a0;\n$yellow: #ffee58;\n$yellow-20: #fffde7;\n$yellow-40: #fff59d;\n$yellow-60: #fdd835;\n$pink: #e91e63;\n$system-error: #d32f2f;\n$system-error-10: #fbebeb;\n$system-success: #1dac2c;\n\n/** Color definitions custom vars **/\n$bg-color: white;\n$base-color: $grey-90;\n$primary-color: $purple;\n$accent-color: $yellow;\n$link-color: $primary-color;\n$link-hover-color: darken($purple, 20%);\n$error-color: $system-error;\n$error-bg: $system-error-10;\n$success-color: $system-success;\n\n/** Text styles variables **/\n$base-font: #{Roboto, Arial, sans-serif};\n$heading-font: #{Roboto, Arial, sans-serif};\n$base-size: 1.6rem;\n\n// Match names of weights here with the weights of the fonts in fonts.scss\n$light: 300;\n$regular: 400;\n$medium: 500;\n$bold: 700;\n\n// No other font sizes are needed\n// Font sizes and line heights as defined by styleguide in pixels\n$textstyles: (\n    page-title: (\n        d: (\n            font-size: 44,\n            line-height: 59.8,\n            font-weight: $bold,\n            font-family: $heading-font,\n        ),\n        M: (\n            font-size: 64,\n            line-height: 84.5,\n        ),\n    ),\n    module-title: (\n        d: (\n            font-size: 34,\n            line-height: 47.6,\n            font-weight: $bold,\n            font-family: $heading-font,\n        ),\n        M: (\n            font-size: 44,\n            line-height: 60.3,\n        ),\n    ),\n    card-title: (\n        d: (\n            font-size: 34,\n            line-height: 40,\n            font-weight: $bold,\n            font-family: $heading-font,\n        ),\n        M: (\n            font-size: 26,\n            line-height: 26,\n        ),\n    ),\n    accordion-title: (\n        d: (\n            font-size: 16,\n            line-height: 23.8,\n            font-weight: $bold,\n            font-family: $heading-font,\n        ),\n        M: (\n            font-size: 22,\n            line-height: 28.4,\n        ),\n    ),\n    footer-title: (\n        d: (\n            font-size: 18,\n            line-height: 26.82,\n            font-weight: $bold,\n            font-family: $heading-font,\n        ),\n        M: (\n            font-size: 20,\n            line-height: 25.8,\n            font-weight: $bold,\n            font-family: $heading-font,\n        ),\n    ),\n    richtext-h2: (\n        d: (\n            font-size: 36,\n            line-height: 48.2,\n            font-weight: $bold,\n            font-family: $heading-font,\n        ),\n        M: (\n            font-size: 40,\n            line-height: 55.6,\n        ),\n    ),\n    richtext-h3: (\n        d: (\n            font-size: 28,\n            line-height: 39.8,\n            font-weight: $bold,\n            font-family: $heading-font,\n        ),\n        M: (\n            font-size: 32,\n            line-height: 45.1,\n        ),\n    ),\n    richtext-h4: (\n        d: (\n            font-size: 24,\n            line-height: 36.5,\n            font-weight: $bold,\n            font-family: $heading-font,\n        ),\n        M: (\n            font-size: 26,\n            line-height: 39.5,\n        ),\n    ),\n    richtext-h5: (\n        d: (\n            font-size: 20,\n            line-height: 28.4,\n            font-weight: $bold,\n            font-family: $heading-font,\n        ),\n        M: (\n            font-size: 22,\n            line-height: 32.6,\n        ),\n    ),\n    richtext-h6: (\n        d: (\n            font-size: 16,\n            line-height: 23.7,\n            font-weight: $bold,\n            font-family: $heading-font,\n        ),\n        M: (\n            font-size: 18,\n            line-height: 26.6,\n        ),\n    ),\n    body: (\n        d: (\n            font-size: 16,\n            line-height: 23.5,\n        ),\n        // Also card-text\n    ),\n    preamble: (\n        d: (\n            font-size: 18,\n            line-height: 27.4,\n            font-weight: $light,\n        ),\n        M: (\n            font-size: 22,\n            line-height: 32.6,\n        ),\n    ),\n    paragraph: (\n        d: (\n            font-size: 16,\n            line-height: 23.5,\n        ),\n        M: (\n            font-size: 18,\n            line-height: 27.7,\n        ),\n    ),\n    quote: (\n        d: (\n            font-size: 20,\n            line-height: 39.4,\n            font-weight: $bold,\n            font-family: $heading-font,\n        ),\n        M: (\n            font-size: 26,\n            line-height: 39.5,\n        ),\n    ),\n    cite: (\n        d: (\n            font-size: 14,\n            line-height: 23.5,\n        ),\n        // Quote name\n        M:\n            (\n                font-size: 18,\n                line-height: 26.5,\n            ),\n    ),\n    caption: (\n        d: (\n            font-size: 12,\n            line-height: 19.8,\n            letter-spacing: 0.2px,\n        ),\n        M: (\n            font-size: 14,\n            line-height: 16.24,\n            letter-spacing: 0.2px,\n        ),\n    ),\n    button: (\n        d: (\n            font-size: 16,\n            line-height: 19.8,\n            font-weight: $medium,\n        ),\n        M: (\n            font-size: 18,\n            line-height: 24.5,\n        ),\n    ),\n    textlink: (\n        d: (\n            font-size: 16,\n            line-height: 23.5,\n        ),\n        // Footer link\n        M:\n            (\n                font-size: 18,\n                line-height: 27.7,\n            ),\n    ),\n    main-menu: (\n        d: (\n            font-size: 20,\n            line-height: 29.6,\n        ),\n        M: (\n            font-size: 16,\n            line-height: 23.68,\n        ),\n    ),\n    service-menu: (\n        d: (\n            font-size: 12,\n            line-height: 16.44,\n        ),\n        M: (\n            font-size: 14,\n            line-height: 23.52,\n        ),\n    ),\n    submenu-parent: (\n        d: (\n            font-size: 16,\n            line-height: 20.16,\n        ),\n    ),\n    submenu-child: (\n        d: (\n            font-size: 16,\n            line-height: 20.16,\n        ),\n    ),\n    submenu-sub-child: (\n        d: (\n            font-size: 14,\n            line-height: 17.64,\n        ),\n    ),\n    breadcrumb: (\n        d: (\n            font-size: 10,\n            line-height: 12.2,\n        ),\n        M: (\n            font-size: 12,\n            line-height: 16.3,\n        ),\n    ),\n    label: (\n        d: (\n            font-size: 14,\n            line-height: 16.5,\n            font-weight: $bold,\n            text-transform: uppercase,\n        ),\n    ),\n    label-card: (\n        d: (\n            font-size: 12,\n            line-height: 14,\n            font-weight: $bold,\n            text-transform: uppercase,\n        ),\n    ),\n    date: (\n        d: (\n            font-size: 14,\n            line-height: 23.5,\n        ),\n    ),\n    form-label: (\n        d: (\n            font-size: 16,\n            line-height: 20,\n            font-weight: $bold,\n        ),\n    ),\n);\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={Root:"SearchForm_Root__Dp3lW",Form:"SearchForm_Form__aVJjs","Root--Search":"SearchForm_Root--Search__OAy_0",Input:"SearchForm_Input__hJnDi",Submit:"SearchForm_Submit__ZbCHQ"},__webpack_exports__.A=___CSS_LOADER_EXPORT___}}]);