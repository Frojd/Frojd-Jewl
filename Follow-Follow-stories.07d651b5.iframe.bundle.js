"use strict";(self.webpackChunkfrojd_jewl=self.webpackChunkfrojd_jewl||[]).push([[3878],{"./node_modules/@babel/runtime/helpers/esm/extends.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}__webpack_require__.d(__webpack_exports__,{A:function(){return _extends}})},"./app/components/Follow/Follow.stories.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:function(){return Default},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return Follow_stories}});var defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),Follow=__webpack_require__("./app/components/Follow/Follow.js"),Follow_data=__webpack_require__("./app/components/Follow/Follow.data.js"),__jsx=react.createElement;function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}var Follow_stories={component:Follow.A,parameters:{docs:{description:{component:"Follow\n\n[Follow source code on Github](https://github.com/Frojd/Frojd-Jewl/tree/develop/component-library/app/components/Follow)\n"}}}},Template=function Template(args){return __jsx(Follow.A,args)};Template.displayName="Template";var Default=Template.bind({});Default.args=function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.A)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}({},Follow_data.A),Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => <Follow {...args} />",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"./app/components/Follow/Follow.data.js":function(__unused_webpack_module,__webpack_exports__){__webpack_exports__.A={title:"Follow us",items:[{type:"Facebook",url:"#"},{type:"Instagram",url:"#"},{type:"LinkedIn",url:"#"}]}},"./app/components/Follow/Follow.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{A:function(){return Follow_Follow}});var esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),es=__webpack_require__("./node_modules/react-i18next/dist/es/index.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),Icon=__webpack_require__("./app/components/Icon/index.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Follow_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[4]!./app/components/Follow/Follow.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Follow_module.A,options);var Follow_Follow_module=Follow_module.A&&Follow_module.A.locals?Follow_module.A.locals:void 0,__jsx=react.createElement,Follow=function Follow(_ref){var _ref$id=_ref.id,id=void 0===_ref$id?"follow":_ref$id,_ref$title=_ref.title,title=void 0===_ref$title?"":_ref$title,_ref$items=_ref.items,items=void 0===_ref$items?[]:_ref$items,t=(0,es.Bd)().t,displayTitle=title||t("follow.title");return __jsx("div",{className:Follow_Follow_module.Follow},__jsx("h2",{className:"sr-only",id:id},displayTitle),__jsx("nav",{className:Follow_Follow_module.Nav,"aria-labelledby":id},items.map((function(item,index){return __jsx(Item,(0,esm_extends.A)({},item,{key:index}))}))))};Follow.displayName="Follow";var Item=function Item(_ref2){var _ref2$href=_ref2.href,href=void 0===_ref2$href?"":_ref2$href,_ref2$type=_ref2.type,type=void 0===_ref2$type?"":_ref2$type,t=(0,es.Bd)().t;classnames_default()(Follow_Follow_module.Item,[Follow_Follow_module["Item--".concat(type)]]);return __jsx("a",{className:Follow_Follow_module.Link,href:href,target:"_blank"},__jsx("span",{className:"sr-only"},t("follow.goTo",{name:type})),Icon.A&&__jsx(Icon.A,{name:type,className:Follow_Follow_module.Icon}))};Item.displayName="Item";var Follow_Follow=Follow;Follow.__docgenInfo={description:"",methods:[],displayName:"Follow",props:{id:{defaultValue:{value:"'follow'",computed:!1},description:"",type:{name:"string"},required:!1},title:{defaultValue:{value:"''",computed:!1},description:"",type:{name:"string"},required:!1},items:{defaultValue:{value:"[]",computed:!1},description:"",type:{name:"array"},required:!1}}}},"./app/components/Icon/index.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var _Icon__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./app/components/Icon/Icon.js");__webpack_exports__.A=_Icon__WEBPACK_IMPORTED_MODULE_0__.A,_Icon__WEBPACK_IMPORTED_MODULE_0__.A.__docgenInfo={description:"",methods:[],displayName:"Icon",props:{name:{defaultValue:{value:"''",computed:!1},description:"",type:{name:"string"},required:!1},className:{defaultValue:{value:"''",computed:!1},description:"",type:{name:"string"},required:!1},asImg:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},asBg:{defaultValue:{value:"false",computed:!1},required:!1}}}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[4]!./app/components/Follow/Follow.module.scss":function(module,__webpack_exports__,__webpack_require__){var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,'.Follow_Nav__wyXLz{display:flex;gap:16px}.Follow_Link___4ZcM{display:flex;justify-content:center;align-items:center;position:relative;width:48px;height:48px;border-radius:50%;background:#ede7f6}.Follow_Link___4ZcM::before{content:"";display:block;position:absolute;top:0;left:0;width:100%;height:100%;border-radius:50%;background:#4527a0;box-shadow:0 0 0 1px #4527a0;opacity:0;transition:opacity .3s ease-in-out}.Follow_Link___4ZcM:hover::before{opacity:1}.Follow_Icon__tE5kk{display:block;position:relative;width:24px;height:24px;fill:#673ab7;transition:fill .3s ease-in-out}.Follow_Link___4ZcM:hover .Follow_Icon__tE5kk{fill:#fff}',"",{version:3,sources:["webpack://./app/components/Follow/Follow.module.scss","webpack://./app/styles/includes/variables.scss"],names:[],mappings:"AAKA,mBACI,YAAA,CACA,QAAA,CAGJ,oBACI,YAAA,CACA,sBAAA,CACA,kBAAA,CACA,iBAAA,CACA,UAAA,CACA,WAAA,CACA,iBAAA,CACA,kBCmCQ,CDjCR,4BACI,UAAA,CACA,aAAA,CACA,iBAAA,CACA,KAAA,CACA,MAAA,CACA,UAAA,CACA,WAAA,CACA,iBAAA,CACA,kBC2BI,CD1BJ,4BAAA,CACA,SAAA,CACA,kCAAA,CAIA,kCACI,SAAA,CAKZ,oBACI,aAAA,CACA,iBAAA,CACA,UAAA,CACA,WAAA,CACA,YCKK,CDJL,+BAAA,CAEA,8CACI,SAAA",sourcesContent:["@import '../../styles/includes';\n\n.Root {\n}\n\n.Nav {\n    display: flex;\n    gap: 16px;\n}\n\n.Link {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    position: relative;\n    width: 48px;\n    height: 48px;\n    border-radius: 50%;\n    background: $purple-20;\n\n    &::before {\n        content: '';\n        display: block;\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n        border-radius: 50%;\n        background: $purple-90;\n        box-shadow: 0 0 0 1px $purple-90;\n        opacity: 0;\n        transition: opacity $transition;\n    }\n\n    &:hover {\n        &::before {\n            opacity: 1;\n        }\n    }\n}\n\n.Icon {\n    display: block;\n    position: relative;\n    width: 24px;\n    height: 24px;\n    fill: $purple;\n    transition: fill $transition;\n\n    .Link:hover & {\n        fill: white;\n    }\n}\n","$assetsPath: '../../assets/';\n\n// Gutters used as column spacing in grid\n$gutter: 16px;\n$gutterM: 24px; // Used for media query above M\n\n$breakpoints: (\n    S: 375px,\n    SL: 500px,\n    // Landscape\n    M: 768px,\n    ML: 1024px,\n    // Landscape\n    L: 1280px,\n    XL: 1440px,\n    XXL: 1680px,\n);\n\n// Spacings used as margins in viewport, added to @mixin wrap\n$spacings: (\n    d: 16px,\n    M: 24px,\n    L: 40px,\n);\n\n// Possible to add or remove widths for a more fixed or fluid grid\n$fluid: true;\n$maxwidths: (\n    // S: 320px,\n    // SL: 500px - (map-get($spacings, d) * 2),\n    // M: 720px,\n    // ML: 808px,\n    // L: 1140px,\n    XL: 1280px,\n    XXL: 1440px,\n    article: 1046px,\n    header: 725px,\n    content: 618px\n);\n$transition: 0.3s ease-in-out;\n\n/** Color definintions from styleguide **/\n$grey: #9e9e9e;\n$grey-5: #fafafa;\n$grey-10: whitesmoke; // #F5F5F5\n$grey-20: #eee;\n$grey-30: #e0e0e0;\n$grey-40: #bdbdbd;\n$grey-60: #757575;\n$grey-70: #616161;\n$grey-80: #424242;\n$grey-90: #212121;\n$purple: #673ab7;\n$purple-20: #ede7f6;\n$purple-40: #dbcef2;\n$purple-60: #b39ddb;\n$purple-90: #4527a0;\n$yellow: #ffee58;\n$yellow-20: #fffde7;\n$yellow-40: #fff59d;\n$yellow-60: #fdd835;\n$pink: #e91e63;\n$system-error: #d32f2f;\n$system-error-10: #fbebeb;\n$system-success: #1dac2c;\n\n/** Color definitions custom vars **/\n$bg-color: white;\n$base-color: $grey-90;\n$primary-color: $purple;\n$accent-color: $yellow;\n$link-color: $primary-color;\n$link-hover-color: darken($purple, 20%);\n$error-color: $system-error;\n$error-bg: $system-error-10;\n$success-color: $system-success;\n\n/** Text styles variables **/\n$base-font: #{Roboto, Arial, sans-serif};\n$heading-font: #{Roboto, Arial, sans-serif};\n$base-size: 1.6rem;\n\n// Match names of weights here with the weights of the fonts in fonts.scss\n$light: 300;\n$regular: 400;\n$medium: 500;\n$bold: 700;\n\n// No other font sizes are needed\n// Font sizes and line heights as defined by styleguide in pixels\n$textstyles: (\n    page-title: (\n        d: (\n            font-size: 44,\n            line-height: 59.8,\n            font-weight: $bold,\n            font-family: $heading-font,\n        ),\n        M: (\n            font-size: 64,\n            line-height: 84.5,\n        ),\n    ),\n    module-title: (\n        d: (\n            font-size: 34,\n            line-height: 47.6,\n            font-weight: $bold,\n            font-family: $heading-font,\n        ),\n        M: (\n            font-size: 44,\n            line-height: 60.3,\n        ),\n    ),\n    card-title: (\n        d: (\n            font-size: 34,\n            line-height: 40,\n            font-weight: $bold,\n            font-family: $heading-font,\n        ),\n        M: (\n            font-size: 26,\n            line-height: 26,\n        ),\n    ),\n    accordion-title: (\n        d: (\n            font-size: 16,\n            line-height: 23.8,\n            font-weight: $bold,\n            font-family: $heading-font,\n        ),\n        M: (\n            font-size: 22,\n            line-height: 28.4,\n        ),\n    ),\n    footer-title: (\n        d: (\n            font-size: 18,\n            line-height: 26.82,\n            font-weight: $bold,\n            font-family: $heading-font,\n        ),\n        M: (\n            font-size: 20,\n            line-height: 25.8,\n            font-weight: $bold,\n            font-family: $heading-font,\n        ),\n    ),\n    richtext-h2: (\n        d: (\n            font-size: 36,\n            line-height: 48.2,\n            font-weight: $bold,\n            font-family: $heading-font,\n        ),\n        M: (\n            font-size: 40,\n            line-height: 55.6,\n        ),\n    ),\n    richtext-h3: (\n        d: (\n            font-size: 28,\n            line-height: 39.8,\n            font-weight: $bold,\n            font-family: $heading-font,\n        ),\n        M: (\n            font-size: 32,\n            line-height: 45.1,\n        ),\n    ),\n    richtext-h4: (\n        d: (\n            font-size: 24,\n            line-height: 36.5,\n            font-weight: $bold,\n            font-family: $heading-font,\n        ),\n        M: (\n            font-size: 26,\n            line-height: 39.5,\n        ),\n    ),\n    richtext-h5: (\n        d: (\n            font-size: 20,\n            line-height: 28.4,\n            font-weight: $bold,\n            font-family: $heading-font,\n        ),\n        M: (\n            font-size: 22,\n            line-height: 32.6,\n        ),\n    ),\n    richtext-h6: (\n        d: (\n            font-size: 16,\n            line-height: 23.7,\n            font-weight: $bold,\n            font-family: $heading-font,\n        ),\n        M: (\n            font-size: 18,\n            line-height: 26.6,\n        ),\n    ),\n    body: (\n        d: (\n            font-size: 16,\n            line-height: 23.5,\n        ),\n        // Also card-text\n    ),\n    preamble: (\n        d: (\n            font-size: 18,\n            line-height: 27.4,\n            font-weight: $light,\n        ),\n        M: (\n            font-size: 22,\n            line-height: 32.6,\n        ),\n    ),\n    paragraph: (\n        d: (\n            font-size: 16,\n            line-height: 23.5,\n        ),\n        M: (\n            font-size: 18,\n            line-height: 27.7,\n        ),\n    ),\n    quote: (\n        d: (\n            font-size: 20,\n            line-height: 39.4,\n            font-weight: $bold,\n            font-family: $heading-font,\n        ),\n        M: (\n            font-size: 26,\n            line-height: 39.5,\n        ),\n    ),\n    cite: (\n        d: (\n            font-size: 14,\n            line-height: 23.5,\n        ),\n        // Quote name\n        M:\n            (\n                font-size: 18,\n                line-height: 26.5,\n            ),\n    ),\n    caption: (\n        d: (\n            font-size: 12,\n            line-height: 19.8,\n            letter-spacing: 0.2px,\n        ),\n        M: (\n            font-size: 14,\n            line-height: 16.24,\n            letter-spacing: 0.2px,\n        ),\n    ),\n    button: (\n        d: (\n            font-size: 16,\n            line-height: 19.8,\n            font-weight: $medium,\n        ),\n        M: (\n            font-size: 18,\n            line-height: 24.5,\n        ),\n    ),\n    textlink: (\n        d: (\n            font-size: 16,\n            line-height: 23.5,\n        ),\n        // Footer link\n        M:\n            (\n                font-size: 18,\n                line-height: 27.7,\n            ),\n    ),\n    main-menu: (\n        d: (\n            font-size: 20,\n            line-height: 29.6,\n        ),\n        M: (\n            font-size: 16,\n            line-height: 23.68,\n        ),\n    ),\n    service-menu: (\n        d: (\n            font-size: 12,\n            line-height: 16.44,\n        ),\n        M: (\n            font-size: 14,\n            line-height: 23.52,\n        ),\n    ),\n    submenu-parent: (\n        d: (\n            font-size: 16,\n            line-height: 20.16,\n        ),\n    ),\n    submenu-child: (\n        d: (\n            font-size: 16,\n            line-height: 20.16,\n        ),\n    ),\n    submenu-sub-child: (\n        d: (\n            font-size: 14,\n            line-height: 17.64,\n        ),\n    ),\n    breadcrumb: (\n        d: (\n            font-size: 10,\n            line-height: 12.2,\n        ),\n        M: (\n            font-size: 12,\n            line-height: 16.3,\n        ),\n    ),\n    label: (\n        d: (\n            font-size: 14,\n            line-height: 16.5,\n            font-weight: $bold,\n            text-transform: uppercase,\n        ),\n    ),\n    label-card: (\n        d: (\n            font-size: 12,\n            line-height: 14,\n            font-weight: $bold,\n            text-transform: uppercase,\n        ),\n    ),\n    date: (\n        d: (\n            font-size: 14,\n            line-height: 23.5,\n        ),\n    ),\n    form-label: (\n        d: (\n            font-size: 16,\n            line-height: 20,\n            font-weight: $bold,\n        ),\n    ),\n);\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={Nav:"Follow_Nav__wyXLz",Link:"Follow_Link___4ZcM",Icon:"Follow_Icon__tE5kk"},__webpack_exports__.A=___CSS_LOADER_EXPORT___}}]);