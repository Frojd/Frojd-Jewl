"use strict";(self.webpackChunkfrojd_jewl=self.webpackChunkfrojd_jewl||[]).push([[4559],{"./app/components/Card/Card.data.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{PH:function(){return fullSize}});var _Users_smulan_Projects_Frojd_Jewl_component_library_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js");function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,_Users_smulan_Projects_Frojd_Jewl_component_library_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.A)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var data={title:"Card longer&shy;title",url:"www.google.se",label:"Label",text:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nam adipiscing. Duis vel nibh at velit scelerisque suscipit.",image:__webpack_require__("./app/components/Image/Image.data.js").Ay,dateString:"2022-02-03",dateFormatted:"3 februari 2022",size:"Third"};__webpack_exports__.Ay=data;_objectSpread(_objectSpread({},data),{},{image:null});var fullSize=_objectSpread(_objectSpread({},data),{},{size:"Full"})},"./app/components/Card/Card.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{A:function(){return Card_Card}});var esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),es=__webpack_require__("./node_modules/react-i18next/dist/es/index.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),Image=__webpack_require__("./app/components/Image/index.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Card_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[4]!./app/components/Card/Card.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Card_module.A,options);var Card_Card_module=Card_module.A&&Card_module.A.locals?Card_module.A.locals:void 0,__jsx=react.createElement,Card=function Card(_ref){var _ref$title=_ref.title,title=void 0===_ref$title?"":_ref$title,_ref$url=_ref.url,url=void 0===_ref$url?"":_ref$url,_ref$label=_ref.label,label=void 0===_ref$label?"":_ref$label,_ref$text=_ref.text,text=void 0===_ref$text?"":_ref$text,_ref$image=_ref.image,image=void 0===_ref$image?{}:_ref$image,_ref$dateString=_ref.dateString,dateString=void 0===_ref$dateString?"":_ref$dateString,_ref$dateFormatted=_ref.dateFormatted,dateFormatted=void 0===_ref$dateFormatted?"":_ref$dateFormatted,_ref$size=_ref.size,size=void 0===_ref$size?"":_ref$size,t=(0,es.Bd)().t,hasImage=!(null==image||!image.src),imageSizes=["Full"===size&&["(min-width: 1680px) 724px","(min-width: 1440px) 644px"]].concat(["Half"===size&&["(min-width: 1680px) 702px","(min-width: 1440px) 628px"]],["Third"===size&&["(min-width: 1680px) 464px","(min-width: 1440px) 411px","(min-width: 1024px) 33vw"]],["Fourth"===size&&["(min-width: 1680px) 342px","(min-width: 1440px) 302px","(min-width: 1280px) 25vw","(min-width: 1024px) 33vw"]],["(min-width: 768px) 50vw","100vw"]),classes=classnames_default()(Card_Card_module.Root,(0,defineProperty.A)({},Card_Card_module["Root--".concat(size)],size));return __jsx("article",{className:classes},__jsx("a",{className:Card_Card_module.Link,href:url},__jsx("span",{className:"sr-only",dangerouslySetInnerHTML:{__html:title}})),hasImage&&__jsx("div",{className:Card_Card_module.ImageContainer},__jsx(Image.A,(0,esm_extends.A)({},image,{sizes:imageSizes,useCover:!0,useCaption:!1}))),__jsx("div",{className:Card_Card_module.Content},label&&__jsx("div",{className:Card_Card_module.Label,dangerouslySetInnerHTML:{__html:label}}),__jsx("h3",{className:Card_Card_module.Title,dangerouslySetInnerHTML:{__html:title}}),text&&__jsx("p",{className:Card_Card_module.Text,dangerouslySetInnerHTML:{__html:text}}),dateString&&dateFormatted&&__jsx("div",{className:Card_Card_module.Meta},__jsx("span",{className:"sr-only"},t("card.date"),": "),__jsx("time",{className:Card_Card_module.Date,dateTime:dateString},dateFormatted))))};Card.displayName="Card";var Card_Card=Card;Card.__docgenInfo={description:"",methods:[],displayName:"Card",props:{title:{defaultValue:{value:"''",computed:!1},description:"",type:{name:"string"},required:!1},url:{defaultValue:{value:"''",computed:!1},description:"",type:{name:"string"},required:!1},label:{defaultValue:{value:"''",computed:!1},description:"",type:{name:"string"},required:!1},text:{defaultValue:{value:"''",computed:!1},description:"",type:{name:"string"},required:!1},image:{defaultValue:{value:"{}",computed:!1},description:"",type:{name:"object"},required:!1},dateString:{defaultValue:{value:"''",computed:!1},description:"",type:{name:"string"},required:!1},dateFormatted:{defaultValue:{value:"''",computed:!1},description:"",type:{name:"string"},required:!1},size:{defaultValue:{value:"''",computed:!1},description:"",type:{name:"string"},required:!1}}}},"./app/components/Image/Image.data.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{o4:function(){return portrait}});__webpack_exports__.Ay={src:"/dummy/test-original.jpg",alt:"Test",width:1600,height:900,caption:"Photo: Fröjd Fröjdsson",focal:{x:"50%",y:"50%"},srcset:["/dummy/test-512.jpg 512w","/dummy/test-800.jpg 800w","/dummy/test-1600.jpg 1600w"]};var portrait={src:"https://via.placeholder.com/1600x2400",alt:"Test",width:1600,height:2400,caption:"Photo: Fröjd Fröjdsson",focal:{x:"50%",y:"50%"},srcset:["https://via.placeholder.com/512x768 512w","https://via.placeholder.com/800x1200 800w","https://via.placeholder.com/1600x2400 1600w"]}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[4]!./app/components/Card/Card.module.scss":function(module,__webpack_exports__,__webpack_require__){var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,'.Card_Root__RTqVN{flex:1 0 auto;display:flex;flex-direction:column;background:#ede7f6;position:relative;height:100%}@media(min-width: 768px){.Card_Root--Full__rNFiP{flex-direction:row}}.Card_Link__kKupQ{position:absolute;top:0;right:0;bottom:0;left:0;cursor:pointer;width:100%;height:100%}.Card_Link__kKupQ:hover~.Card_Content__9mE9b .Card_Title__rVh1_{color:#673ab7;text-decoration:underline 2px solid #673ab7}.Card_ImageContainer__E4mkp{flex:1 1 auto;width:100%;position:relative;overflow:hidden}.Card_ImageContainer__E4mkp::before{content:"";display:block;width:100%;height:0;padding-bottom:56.25%}@media(min-width: 768px){.Card_Root--Full__rNFiP .Card_ImageContainer__E4mkp{width:50%}}.Card_Content__9mE9b{flex:1 1 auto;display:flex;flex-direction:column;justify-content:center;width:100%;padding:24px 16px 32px}@media(min-width: 768px){.Card_Content__9mE9b{padding:24px 24px 32px}}@media(min-width: 1280px){.Card_Content__9mE9b{padding:32px}}@media(min-width: 768px){.Card_Root--Full__rNFiP .Card_Content__9mE9b{width:50%}}.Card_Label__vtonr{font-size:1.2rem;line-height:1.17;font-weight:700;text-transform:uppercase;flex:0 0 auto;margin-bottom:8px;color:#673ab7}.Card_Title__rVh1_{font-size:3.4rem;line-height:1.18;font-weight:700;font-family:Roboto, Arial, sans-serif;flex:0 0 auto;transition:.3s color;width:fit-content}@media(min-width: 768px){.Card_Title__rVh1_{font-size:2.6rem;line-height:1}}.Card_Text__MNZRC{font-size:1.6rem;line-height:1.47;flex:0 0 auto;margin-top:12px}.Card_Meta__4vooS{flex:0 0 auto;margin-top:auto;padding-top:26px;color:#424242}@media(min-width: 768px){.Card_Root--Full__rNFiP .Card_Meta__4vooS{margin-top:0}}.Card_Date__kdqyY{font-size:1.4rem;line-height:1.68}',"",{version:3,sources:["webpack://./app/components/Card/Card.module.scss","webpack://./app/styles/includes/variables.scss","webpack://./app/styles/includes/mixins.scss"],names:[],mappings:"AAEA,kBACI,aAAA,CACA,YAAA,CACA,qBAAA,CACA,kBC+CQ,CD9CR,iBAAA,CACA,WAAA,CEHI,yBFKJ,wBAEQ,kBAAA,CAAA,CAKZ,kBACI,iBAAA,CACA,KAAA,CACA,OAAA,CACA,QAAA,CACA,MAAA,CACA,cAAA,CACA,UAAA,CACA,WAAA,CAEA,gEACI,aCwBC,CDvBD,2CAAA,CAIR,4BACI,aAAA,CACA,UAAA,CACA,iBAAA,CACA,eAAA,CAEA,oCACI,UAAA,CACA,aAAA,CACA,UAAA,CACA,QAAA,CACA,qBAAA,CEvCA,yBF0CJ,oDAEQ,SAAA,CAAA,CAKZ,qBACI,aAAA,CACA,YAAA,CACA,qBAAA,CACA,sBAAA,CACA,UAAA,CACA,sBAAA,CEvDI,yBFiDR,qBASQ,sBAAA,CAAA,CE1DA,0BFiDR,qBAaQ,YAAA,CAAA,CE9DA,yBFiEJ,6CAEQ,SAAA,CAAA,CAKZ,mBEyDoB,gBAAA,CACA,gBAAA,CAMI,eAjBV,CAiBU,wBAjBV,CF5CV,aAAA,CACA,iBAAA,CACA,aC9BK,CDiCT,mBEiDoB,gBAAA,CACA,gBAAA,CAMI,eAjBV,CAiBU,qCAjBV,CFpCV,aAAA,CACA,oBAAA,CACA,iBAAA,CErFI,yBFgFR,mBEiDoB,gBAAA,CACA,aAAA,CAAA,CF1CpB,kBEyCoB,gBAAA,CACA,gBAAA,CFvChB,aAAA,CACA,eAAA,CAGJ,kBACI,aAAA,CACA,eAAA,CACA,gBAAA,CACA,aCtDM,CC7CF,yBFqGJ,0CAEQ,YAAA,CAAA,CAKZ,kBEqBoB,gBAAA,CACA,gBAAA",sourcesContent:["@import 'Styles/includes';\n\n.Root {\n    flex: 1 0 auto;\n    display: flex;\n    flex-direction: column;\n    background: $purple-20;\n    position: relative;\n    height: 100%;\n\n    &--Full {\n        @include media(M) {\n            flex-direction: row;\n        }\n    }\n}\n\n.Link {\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    cursor: pointer;\n    width: 100%;\n    height: 100%;\n\n    &:hover ~ .Content .Title {\n        color: $purple;\n        text-decoration: underline 2px solid $purple;\n    }\n}\n\n.ImageContainer {\n    flex: 1 1 auto;\n    width: 100%;\n    position: relative;\n    overflow: hidden;\n\n    &::before {\n        content: '';\n        display: block;\n        width: 100%;\n        height: 0;\n        padding-bottom: percentage(9 / 16);\n    }\n\n    .Root--Full & {\n        @include media(M) {\n            width: 50%;\n        }\n    }\n}\n\n.Content {\n    flex: 1 1 auto;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    width: 100%;\n    padding: 24px 16px 32px;\n\n    @include media(M) {\n        padding: 24px 24px 32px;\n    }\n\n    @include media(L) {\n        padding: 32px;\n    }\n\n    .Root--Full & {\n        @include media(M) {\n            width: 50%;\n        }\n    }\n}\n\n.Label {\n    @include textstyle(label-card);\n\n    flex: 0 0 auto;\n    margin-bottom: 8px;\n    color: $purple;\n}\n\n.Title {\n    @include textstyle(card-title);\n\n    flex: 0 0 auto;\n    transition: 0.3s color;\n    width: fit-content;\n}\n\n.Text {\n    @include textstyle(body);\n\n    flex: 0 0 auto;\n    margin-top: 12px;\n}\n\n.Meta {\n    flex: 0 0 auto;\n    margin-top: auto;\n    padding-top: 26px;\n    color: $grey-80;\n\n    .Root--Full & {\n        @include media(M) {\n            margin-top: 0;\n        }\n    }\n}\n\n.Date {\n    @include textstyle(date);\n}\n","$assetsPath: '../../assets/';\n\n// Gutters used as column spacing in grid\n$gutter: 16px;\n$gutterM: 24px; // Used for media query above M\n\n$breakpoints: (\n    S: 375px,\n    SL: 500px,\n    // Landscape\n    M: 768px,\n    ML: 1024px,\n    // Landscape\n    L: 1280px,\n    XL: 1440px,\n    XXL: 1680px,\n);\n\n// Spacings used as margins in viewport, added to @mixin wrap\n$spacings: (\n    d: 16px,\n    M: 24px,\n    L: 40px,\n);\n\n// Possible to add or remove widths for a more fixed or fluid grid\n$fluid: true;\n$maxwidths: (\n    // S: 320px,\n    // SL: 500px - (map-get($spacings, d) * 2),\n    // M: 720px,\n    // ML: 808px,\n    // L: 1140px,\n    XL: 1280px,\n    XXL: 1440px,\n    article: 1046px,\n    header: 725px,\n    content: 618px\n);\n$transition: 0.3s ease-in-out;\n\n/** Color definintions from styleguide **/\n$grey: #9e9e9e;\n$grey-5: #fafafa;\n$grey-10: whitesmoke; // #F5F5F5\n$grey-20: #eee;\n$grey-30: #e0e0e0;\n$grey-40: #bdbdbd;\n$grey-60: #757575;\n$grey-70: #616161;\n$grey-80: #424242;\n$grey-90: #212121;\n$purple: #673ab7;\n$purple-20: #ede7f6;\n$purple-40: #dbcef2;\n$purple-60: #b39ddb;\n$purple-90: #4527a0;\n$yellow: #ffee58;\n$yellow-20: #fffde7;\n$yellow-40: #fff59d;\n$yellow-60: #fdd835;\n$pink: #e91e63;\n$system-error: #d32f2f;\n$system-error-10: #fbebeb;\n$system-success: #1dac2c;\n\n/** Color definitions custom vars **/\n$bg-color: white;\n$base-color: $grey-90;\n$primary-color: $purple;\n$accent-color: $yellow;\n$link-color: $primary-color;\n$link-hover-color: darken($purple, 20%);\n$error-color: $system-error;\n$error-bg: $system-error-10;\n$success-color: $system-success;\n\n/** Text styles variables **/\n$base-font: #{Roboto, Arial, sans-serif};\n$heading-font: #{Roboto, Arial, sans-serif};\n$base-size: 1.6rem;\n\n// Match names of weights here with the weights of the fonts in fonts.scss\n$light: 300;\n$regular: 400;\n$medium: 500;\n$bold: 700;\n\n// No other font sizes are needed\n// Font sizes and line heights as defined by styleguide in pixels\n$textstyles: (\n    page-title: (\n        d: (\n            font-size: 44,\n            line-height: 59.8,\n            font-weight: $bold,\n            font-family: $heading-font,\n        ),\n        M: (\n            font-size: 64,\n            line-height: 84.5,\n        ),\n    ),\n    module-title: (\n        d: (\n            font-size: 34,\n            line-height: 47.6,\n            font-weight: $bold,\n            font-family: $heading-font,\n        ),\n        M: (\n            font-size: 44,\n            line-height: 60.3,\n        ),\n    ),\n    card-title: (\n        d: (\n            font-size: 34,\n            line-height: 40,\n            font-weight: $bold,\n            font-family: $heading-font,\n        ),\n        M: (\n            font-size: 26,\n            line-height: 26,\n        ),\n    ),\n    accordion-title: (\n        d: (\n            font-size: 16,\n            line-height: 23.8,\n            font-weight: $bold,\n            font-family: $heading-font,\n        ),\n        M: (\n            font-size: 22,\n            line-height: 28.4,\n        ),\n    ),\n    footer-title: (\n        d: (\n            font-size: 18,\n            line-height: 26.82,\n            font-weight: $bold,\n            font-family: $heading-font,\n        ),\n        M: (\n            font-size: 20,\n            line-height: 25.8,\n            font-weight: $bold,\n            font-family: $heading-font,\n        ),\n    ),\n    richtext-h2: (\n        d: (\n            font-size: 36,\n            line-height: 48.2,\n            font-weight: $bold,\n            font-family: $heading-font,\n        ),\n        M: (\n            font-size: 40,\n            line-height: 55.6,\n        ),\n    ),\n    richtext-h3: (\n        d: (\n            font-size: 28,\n            line-height: 39.8,\n            font-weight: $bold,\n            font-family: $heading-font,\n        ),\n        M: (\n            font-size: 32,\n            line-height: 45.1,\n        ),\n    ),\n    richtext-h4: (\n        d: (\n            font-size: 24,\n            line-height: 36.5,\n            font-weight: $bold,\n            font-family: $heading-font,\n        ),\n        M: (\n            font-size: 26,\n            line-height: 39.5,\n        ),\n    ),\n    richtext-h5: (\n        d: (\n            font-size: 20,\n            line-height: 28.4,\n            font-weight: $bold,\n            font-family: $heading-font,\n        ),\n        M: (\n            font-size: 22,\n            line-height: 32.6,\n        ),\n    ),\n    richtext-h6: (\n        d: (\n            font-size: 16,\n            line-height: 23.7,\n            font-weight: $bold,\n            font-family: $heading-font,\n        ),\n        M: (\n            font-size: 18,\n            line-height: 26.6,\n        ),\n    ),\n    body: (\n        d: (\n            font-size: 16,\n            line-height: 23.5,\n        ),\n        // Also card-text\n    ),\n    preamble: (\n        d: (\n            font-size: 18,\n            line-height: 27.4,\n            font-weight: $light,\n        ),\n        M: (\n            font-size: 22,\n            line-height: 32.6,\n        ),\n    ),\n    paragraph: (\n        d: (\n            font-size: 16,\n            line-height: 23.5,\n        ),\n        M: (\n            font-size: 18,\n            line-height: 27.7,\n        ),\n    ),\n    quote: (\n        d: (\n            font-size: 20,\n            line-height: 39.4,\n            font-weight: $bold,\n            font-family: $heading-font,\n        ),\n        M: (\n            font-size: 26,\n            line-height: 39.5,\n        ),\n    ),\n    cite: (\n        d: (\n            font-size: 14,\n            line-height: 23.5,\n        ),\n        // Quote name\n        M:\n            (\n                font-size: 18,\n                line-height: 26.5,\n            ),\n    ),\n    caption: (\n        d: (\n            font-size: 12,\n            line-height: 19.8,\n            letter-spacing: 0.2px,\n        ),\n        M: (\n            font-size: 14,\n            line-height: 16.24,\n            letter-spacing: 0.2px,\n        ),\n    ),\n    button: (\n        d: (\n            font-size: 16,\n            line-height: 19.8,\n            font-weight: $medium,\n        ),\n        M: (\n            font-size: 18,\n            line-height: 24.5,\n        ),\n    ),\n    textlink: (\n        d: (\n            font-size: 16,\n            line-height: 23.5,\n        ),\n        // Footer link\n        M:\n            (\n                font-size: 18,\n                line-height: 27.7,\n            ),\n    ),\n    main-menu: (\n        d: (\n            font-size: 20,\n            line-height: 29.6,\n        ),\n        M: (\n            font-size: 16,\n            line-height: 23.68,\n        ),\n    ),\n    service-menu: (\n        d: (\n            font-size: 12,\n            line-height: 16.44,\n        ),\n        M: (\n            font-size: 14,\n            line-height: 23.52,\n        ),\n    ),\n    submenu-parent: (\n        d: (\n            font-size: 16,\n            line-height: 20.16,\n        ),\n    ),\n    submenu-child: (\n        d: (\n            font-size: 16,\n            line-height: 20.16,\n        ),\n    ),\n    submenu-sub-child: (\n        d: (\n            font-size: 14,\n            line-height: 17.64,\n        ),\n    ),\n    breadcrumb: (\n        d: (\n            font-size: 10,\n            line-height: 12.2,\n        ),\n        M: (\n            font-size: 12,\n            line-height: 16.3,\n        ),\n    ),\n    label: (\n        d: (\n            font-size: 14,\n            line-height: 16.5,\n            font-weight: $bold,\n            text-transform: uppercase,\n        ),\n    ),\n    label-card: (\n        d: (\n            font-size: 12,\n            line-height: 14,\n            font-weight: $bold,\n            text-transform: uppercase,\n        ),\n    ),\n    date: (\n        d: (\n            font-size: 14,\n            line-height: 23.5,\n        ),\n    ),\n    form-label: (\n        d: (\n            font-size: 16,\n            line-height: 20,\n            font-weight: $bold,\n        ),\n    ),\n);\n","/* stylelint-disable at-rule-empty-line-before */\n@mixin media($key) {\n    @if $key == 'd' {\n        @content;\n    } @else if map-has-key($breakpoints, $key) {\n        @media (min-width: map-get($breakpoints, $key)) {\n            @content;\n        }\n    } @else {\n        @error 'Unfortunately, no value could be retrieved from `#{$breakpoints}`. Please make sure it is defined in `$breakpoints` map.';\n    }\n}\n\n@mixin media-max($key) {\n    @if $key == 'd' {\n        @content;\n    } @else if map-has-key($breakpoints, $key) {\n        @media (max-width: (map-get($breakpoints, $key) - 1)) {\n            @content;\n        }\n    } @else {\n        @error 'Unfortunately, no value could be retrieved from `#{$breakpoints}`. Please make sure it is defined in `$breakpoints` map.';\n    }\n}\n\n/* stylelint-enable at-rule-empty-line-before */\n\n@mixin clearfix() {\n    &::after,\n    &::before {\n        content: '';\n        display: table;\n        clear: both;\n        width: 100%;\n    }\n}\n\n@mixin href-external($domain: 'example.se') {\n    &:not([href^=\"mailto:\"]):not([href^=\"tel:\"]):not([href=\"\"]):not([href^=\"#\"]):not([href^=\"/\"]):not([href^=\"http://#{$domain}\"]):not([href^=\"https://#{$domain}\"]):not([href*=\"localhost\"]):not([href*=\"stage.#{$domain}\"]):not([href*=\"www.#{$domain}\"]):not([href*=\"beta.#{$domain}\"])\n    {\n        @content;\n    }\n}\n\n@mixin href-download() {\n    &[href$='.pdf'],\n    &[href$='.doc'],\n    &[href$='.docx'],\n    &[href$='.ppt'],\n    &[href$='.pptx'],\n    &[href$='.xls'],\n    &[href$='.xlsx'],\n    &[href$='.odt'],\n    &[href$='.eps'],\n    &[href$='.zip'] {\n        @content;\n    }\n}\n\n// For wrapping elements in the main grid\n// Usage: @include wrap;\n@mixin wrap($exclude: ()) {\n    @if not contains($exclude, d) {\n        margin-left: map-get($spacings, d);\n        margin-right: map-get($spacings, d);\n    }\n\n    @if not contains($exclude, S) {\n        @include breakpoint-wrap(S);\n    }\n\n    @if not contains($exclude, SL) {\n        @include breakpoint-wrap(SL);\n    }\n\n    @if not contains($exclude, M) {\n        @include breakpoint-wrap(M);\n    }\n\n    @if not contains($exclude, ML) {\n        @include breakpoint-wrap(ML);\n    }\n\n    @if not contains($exclude, L) {\n        @include breakpoint-wrap(L);\n    }\n\n    @if not contains($exclude, XL) {\n        @include breakpoint-wrap(XL);\n    }\n\n    @if not contains($exclude, XXL) {\n        @include breakpoint-wrap(XXL);\n    }\n}\n\n@mixin breakpoint-wrap($breakpoint) {\n    @if map-has-key($maxwidths, $breakpoint) {\n        $maxWidth: (map-get($maxwidths, $breakpoint));\n\n        @if $fluid and map-has-key($spacings, $breakpoint) {\n            $maxWidth: $maxWidth - (map-get($spacings, $breakpoint) * 2);\n        }\n\n        @include media($breakpoint) {\n            max-width: $maxWidth;\n            margin-left: auto;\n            margin-right: auto;\n        }\n    }\n\n    @if $fluid and map-has-key($spacings, $breakpoint) {\n        @include media($breakpoint) {\n            margin-left: (map-get($spacings, $breakpoint));\n            margin-right: (map-get($spacings, $breakpoint));\n        }\n    }\n}\n\n// For setting font-size and line-height on elements defined by variabels, including media queries\n// Usage: @include textstyle(h1);\n@mixin textstyle($key) {\n    // Loop through text map and set font-size and line-height for each media query\n    @if map-has-key($textstyles, $key) {\n        $map: map-get($textstyles, $key);\n\n        @each $media, $style in $map {\n            @include media($media) {\n                @if map-has-key($style, font-size) and\n                    map-has-key($style, line-height)\n                {\n                    $font-size: map-get($style, font-size);\n                    $line-height: map-get($style, line-height);\n\n                    font-size: #{$font-size / 10}rem;\n                    line-height: #{round($line-height / $font-size * 100) /\n                        100};\n                }\n\n                @each $param, $value in $style {\n                    @if $param != 'font-size' and $param != 'line-height' {\n                        #{$param}: $value;\n                    }\n                }\n            }\n        }\n    }\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={Root:"Card_Root__RTqVN","Root--Full":"Card_Root--Full__rNFiP",Link:"Card_Link__kKupQ",Content:"Card_Content__9mE9b",Title:"Card_Title__rVh1_",ImageContainer:"Card_ImageContainer__E4mkp",Label:"Card_Label__vtonr",Text:"Card_Text__MNZRC",Meta:"Card_Meta__4vooS",Date:"Card_Date__kdqyY"},__webpack_exports__.A=___CSS_LOADER_EXPORT___}}]);