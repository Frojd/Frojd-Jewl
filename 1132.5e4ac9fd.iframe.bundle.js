"use strict";(self.webpackChunkfrojd_jewl=self.webpackChunkfrojd_jewl||[]).push([[1132],{"./app/components/Breadcrumbs/Breadcrumbs.data.js":function(__unused_webpack_module,__webpack_exports__){__webpack_exports__.A={items:[{url:"/"},{title:"Lorem ipsum",url:"#"},{title:"Lorem ipsum&shy;dolor sit amet",url:"#"}]}},"./app/components/Breadcrumbs/Breadcrumbs.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{A:function(){return Breadcrumbs_Breadcrumbs}});var esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),es=__webpack_require__("./node_modules/react-i18next/dist/es/index.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Breadcrumbs_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[4]!./app/components/Breadcrumbs/Breadcrumbs.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Breadcrumbs_module.A,options);var Breadcrumbs_Breadcrumbs_module=Breadcrumbs_module.A&&Breadcrumbs_module.A.locals?Breadcrumbs_module.A.locals:void 0,__jsx=react.createElement,Breadcrumbs=function Breadcrumbs(_ref){var _ref$items=_ref.items,items=void 0===_ref$items?[]:_ref$items,t=(0,es.Bd)().t;return items.length<2?null:__jsx("div",{className:Breadcrumbs_Breadcrumbs_module.Root},__jsx("nav",{className:Breadcrumbs_Breadcrumbs_module.Nav,"aria-label":t("breadcrumbs.label")},__jsx("ol",{className:Breadcrumbs_Breadcrumbs_module.List},items.map((function(item,index){return __jsx("li",{className:Breadcrumbs_Breadcrumbs_module.Item,key:index},__jsx(Link,(0,esm_extends.A)({},item,{isStart:0===index,isCurrent:index+1===items.length})))})))))};Breadcrumbs.displayName="Breadcrumbs";var Link=function Link(_ref2){var _ref2$title=_ref2.title,title=void 0===_ref2$title?"":_ref2$title,_ref2$url=_ref2.url,url=void 0===_ref2$url?"":_ref2$url,_ref2$isStart=_ref2.isStart,isStart=void 0!==_ref2$isStart&&_ref2$isStart,_ref2$isCurrent=_ref2.isCurrent,isCurrent=void 0!==_ref2$isCurrent&&_ref2$isCurrent,t=(0,es.Bd)().t,displayTitle=isStart?t("breadcrumbs.start"):title;return __jsx("a",{className:Breadcrumbs_Breadcrumbs_module.Link,href:url,"aria-current":isCurrent?"page":null,dangerouslySetInnerHTML:{__html:displayTitle}})};Link.displayName="Link";var Breadcrumbs_Breadcrumbs=Breadcrumbs;Breadcrumbs.__docgenInfo={description:"",methods:[],displayName:"Breadcrumbs",props:{items:{defaultValue:{value:"[]",computed:!1},description:"",type:{name:"array"},required:!1}}}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[4]!./app/components/Breadcrumbs/Breadcrumbs.module.scss":function(module,__webpack_exports__,__webpack_require__){var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__),_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/css-loader/dist/runtime/getUrl.js"),_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__),___CSS_LOADER_URL_IMPORT_0___=new URL(__webpack_require__("./app/assets/img/chevron--grey-70.svg"),__webpack_require__.b),___CSS_LOADER_EXPORT___=_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()),___CSS_LOADER_URL_REPLACEMENT_0___=_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);___CSS_LOADER_EXPORT___.push([module.id,'.Breadcrumbs_Root__ke5_h{border-bottom:1px solid #ede7f6;background:#fafafa}.Breadcrumbs_Nav__lRR6U{margin-left:16px;margin-right:16px}@media(min-width: 500px){.Breadcrumbs_Nav__lRR6U{max-width:468px;margin-left:auto;margin-right:auto}}@media(min-width: 768px){.Breadcrumbs_Nav__lRR6U{max-width:720px;margin-left:auto;margin-right:auto}}@media(min-width: 1024px){.Breadcrumbs_Nav__lRR6U{max-width:808px;margin-left:auto;margin-right:auto}}@media(min-width: 1280px){.Breadcrumbs_Nav__lRR6U{max-width:1140px;margin-left:auto;margin-right:auto}}@media(min-width: 1440px){.Breadcrumbs_Nav__lRR6U{max-width:1280px;margin-left:auto;margin-right:auto}}@media(min-width: 1680px){.Breadcrumbs_Nav__lRR6U{max-width:1440px;margin-left:auto;margin-right:auto}}.Breadcrumbs_List__gBKVn{display:flex;flex-wrap:wrap;margin-left:-8px;margin-right:-8px;padding-top:4px;padding-bottom:3px}.Breadcrumbs_Item__ynfJf{flex:0 0 auto;position:relative}.Breadcrumbs_Item__ynfJf::after{content:"";display:none;position:absolute;top:0;bottom:0;right:0;margin:auto;width:12px;height:12px;background:url('+___CSS_LOADER_URL_REPLACEMENT_0___+') no-repeat center center;background-size:contain;transform:rotate(-90deg)}@media(min-width: 768px){.Breadcrumbs_Item__ynfJf::after{right:0}}.Breadcrumbs_Item__ynfJf:not(:last-child){padding-right:12px}.Breadcrumbs_Item__ynfJf:not(:last-child)::after{display:block}.Breadcrumbs_Link__sxVEp{font-size:1rem;line-height:1.22;display:inline-block;position:relative;padding:4px;color:#616161;text-decoration:none;transition:color .3s ease-in-out}@media(min-width: 768px){.Breadcrumbs_Link__sxVEp{font-size:1.2rem;line-height:1.36}}.Breadcrumbs_Link__sxVEp::after{content:"";display:inline-block;position:absolute;bottom:4px;left:4px;right:4px;height:1px;background:#616161;opacity:0;transition:opacity .3s ease-in-out}.Breadcrumbs_Link__sxVEp:hover::after{opacity:1}@media(min-width: 768px){.Breadcrumbs_Link__sxVEp{font-size:1.4rem}}',"",{version:3,sources:["webpack://./app/components/Breadcrumbs/Breadcrumbs.module.scss","webpack://./app/styles/includes/variables.scss","webpack://./app/styles/includes/mixins.scss"],names:[],mappings:"AAEA,yBACI,+BAAA,CACA,kBC2BK,CDxBT,wBEwDQ,gBD9DC,CC+DD,iBD/DC,CCID,yBFER,wBE8DY,eAAA,CACA,gBAAA,CACA,iBAAA,CAAA,CAlEJ,yBFER,wBEsEY,eAAA,CACA,gBAAA,CACA,iBAAA,CAAA,CA1EJ,0BFER,wBE8EY,eAAA,CACA,gBAAA,CACA,iBAAA,CAAA,CAlFJ,0BFER,wBEsFY,gBAAA,CACA,gBAAA,CACA,iBAAA,CAAA,CA1FJ,0BFER,wBE8FY,gBAAA,CACA,gBAAA,CACA,iBAAA,CAAA,CAlGJ,0BFER,wBEsGY,gBAAA,CACA,gBAAA,CACA,iBAAA,CAAA,CFpGZ,yBACI,YAAA,CACA,cAAA,CACA,gBAAA,CACA,iBAAA,CACA,eAAA,CACA,kBAAA,CAGJ,yBACI,aAAA,CACA,iBAAA,CAEA,gCACI,UAAA,CACA,YAAA,CACA,iBAAA,CACA,KAAA,CACA,QAAA,CACA,OAAA,CACA,WAAA,CACA,UAAA,CACA,WAAA,CACA,0EAAA,CAEA,uBAAA,CACA,wBAAA,CEhCA,yBFmBJ,gCAgBQ,OAAA,CAAA,CAIR,0CACI,kBAAA,CAEA,iDACI,aAAA,CAKZ,yBE8EoB,cAAA,CACA,gBAAA,CF5EhB,oBAAA,CACA,iBAAA,CACA,WAAA,CACA,aCtBM,CDuBN,oBAAA,CACA,gCAAA,CExDI,yBFgDR,yBE8EoB,gBAAA,CACA,gBAAA,CAAA,CFrEhB,gCACI,UAAA,CACA,oBAAA,CACA,iBAAA,CACA,UAAA,CACA,QAAA,CACA,SAAA,CACA,UAAA,CACA,kBClCE,CDmCF,SAAA,CACA,kCAAA,CAGJ,sCACI,SAAA,CExEA,yBFgDR,yBA4BQ,gBAAA,CAAA",sourcesContent:["@import 'Styles/includes';\n\n.Root {\n    border-bottom: 1px solid $purple-20;\n    background: $grey-5;\n}\n\n.Nav {\n    @include wrap;\n}\n\n.List {\n    display: flex;\n    flex-wrap: wrap;\n    margin-left: -8px;\n    margin-right: -8px;\n    padding-top: 4px;\n    padding-bottom: 3px;\n}\n\n.Item {\n    flex: 0 0 auto;\n    position: relative;\n\n    &::after {\n        content: '';\n        display: none;\n        position: absolute;\n        top: 0;\n        bottom: 0;\n        right: 0;\n        margin: auto;\n        width: 12px;\n        height: 12px;\n        background: url('#{$assetsPath}img/chevron--grey-70.svg') no-repeat\n            center center;\n        background-size: contain;\n        transform: rotate(-90deg);\n\n        @include media(M) {\n            right: 0;\n        }\n    }\n\n    &:not(:last-child) {\n        padding-right: 12px;\n\n        &::after {\n            display: block;\n        }\n    }\n}\n\n.Link {\n    @include textstyle(breadcrumb);\n\n    display: inline-block;\n    position: relative;\n    padding: 4px;\n    color: $grey-70;\n    text-decoration: none;\n    transition: color $transition;\n\n    &::after {\n        content: '';\n        display: inline-block;\n        position: absolute;\n        bottom: 4px;\n        left: 4px;\n        right: 4px;\n        height: 1px;\n        background: $grey-70;\n        opacity: 0;\n        transition: opacity $transition;\n    }\n\n    &:hover::after {\n        opacity: 1;\n    }\n\n    @include media(M) {\n        font-size: 1.4rem;\n    }\n}\n","$assetsPath: '../../assets/';\n$gutter: 16px;\n$gutterM: 24px; // Used for media query above M\n\n// Grid and site widths\n$maxwidths: (\n    // S: 320px,\n    SL: 500px - ($gutter * 2),\n    M: 720px,\n    ML: 808px,\n    L: 1140px,\n    XL: 1280px,\n    XXL: 1440px,\n    header: 725px,\n    content: 618px\n);\n$breakpoints: (\n    S: 375px,\n    SL: 500px,\n    // Landscape\n    M: 768px,\n    ML: 1024px,\n    // Landscape\n    L: 1280px,\n    XL: 1440px,\n    XXL: 1680px,\n);\n$transition: 0.3s ease-in-out;\n\n/** Color definintions from styleguide **/\n$grey: #9e9e9e;\n$grey-5: #fafafa;\n$grey-10: whitesmoke; // #F5F5F5\n$grey-20: #eee;\n$grey-30: #e0e0e0;\n$grey-40: #bdbdbd;\n$grey-60: #757575;\n$grey-70: #616161;\n$grey-80: #424242;\n$grey-90: #212121;\n$purple: #673ab7;\n$purple-20: #ede7f6;\n$purple-60: #b39ddb;\n$purple-90: #4527a0;\n$yellow: #ffee58;\n$yellow-20: #fffde7;\n$yellow-40: #fff59d;\n$yellow-60: #fdd835;\n$pink: #e91e63;\n$system-error: #d32f2f;\n$system-error-10: #fbebeb;\n$system-success: #1dac2c;\n\n/** Color definitions custom vars **/\n$bg-color: white;\n$base-color: $grey-90;\n$primary-color: $purple;\n$accent-color: $yellow;\n$link-color: $primary-color;\n$link-hover-color: darken($purple, 20%);\n$error-color: $system-error;\n$error-bg: $system-error-10;\n$success-color: $system-success;\n\n/** Text styles variables **/\n$base-font: #{Roboto, Arial, sans-serif};\n$heading-font: #{Roboto, Arial, sans-serif};\n$base-size: 1.6rem;\n\n// Match names of weights here with the weights of the fonts in fonts.scss\n$light: 300;\n$regular: 400;\n$medium: 500;\n$bold: 700;\n\n// No other font sizes are needed\n// Font sizes and line heights as defined by styleguide in pixels\n$textstyles: (\n    page-title: (\n        d: (\n            font-size: 44,\n            line-height: 59.8,\n            font-weight: $bold,\n            font-family: $heading-font,\n        ),\n        M: (\n            font-size: 64,\n            line-height: 84.5,\n        ),\n    ),\n    module-title: (\n        d: (\n            font-size: 34,\n            line-height: 47.6,\n            font-weight: $bold,\n            font-family: $heading-font,\n        ),\n        M: (\n            font-size: 44,\n            line-height: 60.3,\n        ),\n    ),\n    card-title: (\n        d: (\n            font-size: 34,\n            line-height: 40,\n            font-weight: $bold,\n            font-family: $heading-font,\n        ),\n        M: (\n            font-size: 26,\n            line-height: 26,\n        ),\n    ),\n    accordion-title: (\n        d: (\n            font-size: 16,\n            line-height: 23.8,\n            font-weight: $bold,\n            font-family: $heading-font,\n        ),\n        M: (\n            font-size: 22,\n            line-height: 28.4,\n        ),\n    ),\n    footer-title: (\n        d: (\n            font-size: 18,\n            line-height: 26.82,\n            font-weight: $bold,\n            font-family: $heading-font,\n        ),\n        M: (\n            font-size: 20,\n            line-height: 25.8,\n            font-weight: $bold,\n            font-family: $heading-font,\n        ),\n    ),\n    richtext-h2: (\n        d: (\n            font-size: 36,\n            line-height: 48.2,\n            font-weight: $bold,\n            font-family: $heading-font,\n        ),\n        M: (\n            font-size: 40,\n            line-height: 55.6,\n        ),\n    ),\n    richtext-h3: (\n        d: (\n            font-size: 28,\n            line-height: 39.8,\n            font-weight: $bold,\n            font-family: $heading-font,\n        ),\n        M: (\n            font-size: 32,\n            line-height: 45.1,\n        ),\n    ),\n    richtext-h4: (\n        d: (\n            font-size: 24,\n            line-height: 36.5,\n            font-weight: $bold,\n            font-family: $heading-font,\n        ),\n        M: (\n            font-size: 26,\n            line-height: 39.5,\n        ),\n    ),\n    richtext-h5: (\n        d: (\n            font-size: 20,\n            line-height: 28.4,\n            font-weight: $bold,\n            font-family: $heading-font,\n        ),\n        M: (\n            font-size: 22,\n            line-height: 32.6,\n        ),\n    ),\n    richtext-h6: (\n        d: (\n            font-size: 16,\n            line-height: 23.7,\n            font-weight: $bold,\n            font-family: $heading-font,\n        ),\n        M: (\n            font-size: 18,\n            line-height: 26.6,\n        ),\n    ),\n    body: (\n        d: (\n            font-size: 16,\n            line-height: 23.5,\n        ),\n        // Also card-text\n    ),\n    preamble: (\n        d: (\n            font-size: 18,\n            line-height: 27.4,\n            font-weight: $light,\n        ),\n        M: (\n            font-size: 22,\n            line-height: 32.6,\n        ),\n    ),\n    paragraph: (\n        d: (\n            font-size: 16,\n            line-height: 23.5,\n        ),\n        M: (\n            font-size: 18,\n            line-height: 27.7,\n        ),\n    ),\n    quote: (\n        d: (\n            font-size: 20,\n            line-height: 39.4,\n            font-weight: $bold,\n            font-family: $heading-font,\n        ),\n        M: (\n            font-size: 26,\n            line-height: 39.5,\n        ),\n    ),\n    cite: (\n        d: (\n            font-size: 14,\n            line-height: 23.5,\n        ),\n        // Quote name\n        M:\n            (\n                font-size: 18,\n                line-height: 26.5,\n            ),\n    ),\n    caption: (\n        d: (\n            font-size: 12,\n            line-height: 16.3,\n            letter-spacing: 0.2px,\n        ),\n    ),\n    button: (\n        d: (\n            font-size: 16,\n            line-height: 19.8,\n            font-weight: $medium,\n        ),\n        M: (\n            font-size: 18,\n            line-height: 24.5,\n        ),\n    ),\n    textlink: (\n        d: (\n            font-size: 16,\n            line-height: 23.5,\n        ),\n        // Footer link\n        M:\n            (\n                font-size: 18,\n                line-height: 27.7,\n            ),\n    ),\n    main-menu: (\n        d: (\n            font-size: 20,\n            line-height: 29.6,\n        ),\n        M: (\n            font-size: 16,\n            line-height: 23.68,\n        ),\n    ),\n    service-menu: (\n        d: (\n            font-size: 12,\n            line-height: 16.44,\n        ),\n        M: (\n            font-size: 14,\n            line-height: 23.52,\n        ),\n    ),\n    submenu: (\n        d: (\n            font-size: 16,\n            line-height: 19.7,\n            font-weight: $bold,\n        ),\n        // Add bold to active and first level instead of new text style\n    ),\n    breadcrumb: (\n        d: (\n            font-size: 10,\n            line-height: 12.2,\n        ),\n        M: (\n            font-size: 12,\n            line-height: 16.3,\n        ),\n    ),\n    label: (\n        d: (\n            font-size: 14,\n            line-height: 16.5,\n            font-weight: $bold,\n            text-transform: uppercase,\n        ),\n    ),\n    label-card: (\n        d: (\n            font-size: 12,\n            line-height: 14,\n            font-weight: $bold,\n            text-transform: uppercase,\n        ),\n    ),\n    date: (\n        d: (\n            font-size: 14,\n            line-height: 23.5,\n        ),\n    ),\n);\n","/* stylelint-disable at-rule-empty-line-before */\n@mixin media($key) {\n    @if $key == 'd' {\n        @content;\n    } @else if map-has-key($breakpoints, $key) {\n        @media (min-width: map-get($breakpoints, $key)) {\n            @content;\n        }\n    } @else {\n        @error 'Unfortunately, no value could be retrieved from `#{$breakpoints}`. Please make sure it is defined in `$breakpoints` map.';\n    }\n}\n\n@mixin media-max($key) {\n    @if $key == 'd' {\n        @content;\n    } @else if map-has-key($breakpoints, $key) {\n        @media (max-width: (map-get($breakpoints, $key) - 1)) {\n            @content;\n        }\n    } @else {\n        @error 'Unfortunately, no value could be retrieved from `#{$breakpoints}`. Please make sure it is defined in `$breakpoints` map.';\n    }\n}\n\n/* stylelint-enable at-rule-empty-line-before */\n\n@mixin clearfix() {\n    &::after,\n    &::before {\n        content: '';\n        display: table;\n        clear: both;\n        width: 100%;\n    }\n}\n\n@mixin href-external($domain: 'example.se') {\n    &:not([href^=\"mailto:\"]):not([href^=\"tel:\"]):not([href=\"\"]):not([href^=\"#\"]):not([href^=\"/\"]):not([href^=\"http://#{$domain}\"]):not([href^=\"https://#{$domain}\"]):not([href*=\"localhost\"]):not([href*=\"stage.#{$domain}\"]):not([href*=\"www.#{$domain}\"]):not([href*=\"beta.#{$domain}\"])\n    {\n        @content;\n    }\n}\n\n@mixin href-download() {\n    &[href$='.pdf'],\n    &[href$='.doc'],\n    &[href$='.docx'],\n    &[href$='.ppt'],\n    &[href$='.pptx'],\n    &[href$='.xls'],\n    &[href$='.xlsx'],\n    &[href$='.odt'],\n    &[href$='.eps'],\n    &[href$='.zip'] {\n        @content;\n    }\n}\n\n// For wrapping elements in the main grid\n// Usage: @include wrap;\n@mixin wrap($exclude: ()) {\n    @if not contains($exclude, d) {\n        margin-left: $gutter;\n        margin-right: $gutter;\n    }\n\n    @if not contains($exclude, SL) {\n        @include media(SL) {\n            max-width: (map-get($maxwidths, SL));\n            margin-left: auto;\n            margin-right: auto;\n        }\n    }\n\n    @if not contains($exclude, M) {\n        @include media(M) {\n            max-width: (map-get($maxwidths, M));\n            margin-left: auto;\n            margin-right: auto;\n        }\n    }\n\n    @if not contains($exclude, ML) {\n        @include media(ML) {\n            max-width: (map-get($maxwidths, ML));\n            margin-left: auto;\n            margin-right: auto;\n        }\n    }\n\n    @if not contains($exclude, L) {\n        @include media(L) {\n            max-width: (map-get($maxwidths, L));\n            margin-left: auto;\n            margin-right: auto;\n        }\n    }\n\n    @if not contains($exclude, XL) {\n        @include media(XL) {\n            max-width: (map-get($maxwidths, XL));\n            margin-left: auto;\n            margin-right: auto;\n        }\n    }\n\n    @if not contains($exclude, XXL) {\n        @include media(XXL) {\n            max-width: (map-get($maxwidths, XXL));\n            margin-left: auto;\n            margin-right: auto;\n        }\n    }\n}\n\n// For setting font-size and line-height on elements defined by variabels, including media queries\n// Usage: @include textstyle(h1);\n@mixin textstyle($key) {\n    // Loop through text map and set font-size and line-height for each media query\n    @if map-has-key($textstyles, $key) {\n        $map: map-get($textstyles, $key);\n\n        @each $media, $style in $map {\n            @include media($media) {\n                @if map-has-key($style, font-size) and\n                    map-has-key($style, line-height)\n                {\n                    $font-size: map-get($style, font-size);\n                    $line-height: map-get($style, line-height);\n\n                    font-size: #{$font-size / 10}rem;\n                    line-height: #{round($line-height / $font-size * 100) /\n                        100};\n                }\n\n                @each $param, $value in $style {\n                    @if $param != 'font-size' and $param != 'line-height' {\n                        #{$param}: $value;\n                    }\n                }\n            }\n        }\n    }\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={Root:"Breadcrumbs_Root__ke5_h",Nav:"Breadcrumbs_Nav__lRR6U",List:"Breadcrumbs_List__gBKVn",Item:"Breadcrumbs_Item__ynfJf",Link:"Breadcrumbs_Link__sxVEp"},__webpack_exports__.A=___CSS_LOADER_EXPORT___},"./app/assets/img/chevron--grey-70.svg":function(module,__unused_webpack_exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/chevron--grey-70.ffd3adb4.svg"}}]);