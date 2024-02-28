"use strict";(self.webpackChunkfrojd_jewl=self.webpackChunkfrojd_jewl||[]).push([[5772],{"./app/components/Pagination/Pagination.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{A:function(){return Pagination_Pagination}});var defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),toConsumableArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),es=__webpack_require__("./node_modules/react-i18next/dist/es/index.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Pagination_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[4]!./app/components/Pagination/Pagination.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Pagination_module.A,options);var Pagination_Pagination_module=Pagination_module.A&&Pagination_module.A.locals?Pagination_module.A.locals:void 0,__jsx=react.createElement,Pagination=function Pagination(_ref){var _ref$current=_ref.current,current=void 0===_ref$current?1:_ref$current,_ref$total=_ref.total,total=void 0===_ref$total?1:_ref$total,_ref$nrOfMiddle=_ref.nrOfMiddle,nrOfMiddle=void 0===_ref$nrOfMiddle?3:_ref$nrOfMiddle,_ref$nrOfBeginEnd=_ref.nrOfBeginEnd,nrOfBeginEnd=void 0===_ref$nrOfBeginEnd?1:_ref$nrOfBeginEnd,_ref$setPageUrl=_ref.setPageUrl,setPageUrl=void 0===_ref$setPageUrl?null:_ref$setPageUrl,_ref$onClick=_ref.onClick,onClick=void 0===_ref$onClick?null:_ref$onClick,t=(0,es.Bd)().t;if(total<2)return null;var beforeAfterCurrent=(nrOfMiddle-1)/2,range=(0,toConsumableArray.A)(Array(total).keys()).map((function(i){var p=i+1;return p<=nrOfBeginEnd||p>total-nrOfBeginEnd||p>=current-beforeAfterCurrent&&p<=current+beforeAfterCurrent?p:null})),items=range.filter((function(p,i){return null!==p||range[i-1]!==p})),onClickHandler=function onClickHandler(e,p){onClick&&(e.preventDefault(),onClick(p,e))},setUrl=function setUrl(p){return setPageUrl?setPageUrl(p):"?p=".concat(p)},prevPage=current-1<=1?null:current-1,prevUrl=null!==prevPage?setUrl(prevPage):"",nextPage=current+1>=total?null:current+1,nextUrl=null!==nextPage?setUrl(nextPage):"";return __jsx("nav",{className:Pagination_Pagination_module.Root,role:"navigation","aria-label":t("pagination.label")},__jsx("ul",{className:Pagination_Pagination_module.List},__jsx("li",{className:Pagination_Pagination_module.Item},__jsx("a",{className:Pagination_Pagination_module.Previous,href:prevUrl,rel:"prev",disabled:null===prevPage,"aria-label":t("pagination.previous"),onClick:function onClick(e){return onClickHandler(e,prevPage)}})),items.map((function(p,index){return __jsx("li",{className:Pagination_Pagination_module.Item,key:index},__jsx(Link,{p:p,isCurrent:current===p,setUrl:setUrl,onClickHandler:onClickHandler}))})),__jsx("li",{className:Pagination_Pagination_module.Item},__jsx("a",{className:Pagination_Pagination_module.Next,href:nextUrl,rel:"next",disabled:null===nextPage,"aria-label":t("pagination.next"),onClick:function onClick(e){return onClickHandler(e,nextPage)}}))))};Pagination.displayName="Pagination";var Link=function Link(_ref2){var _ref2$p=_ref2.p,p=void 0===_ref2$p?1:_ref2$p,_ref2$isCurrent=_ref2.isCurrent,isCurrent=void 0!==_ref2$isCurrent&&_ref2$isCurrent,_ref2$setUrl=_ref2.setUrl,setUrl=void 0===_ref2$setUrl?null:_ref2$setUrl,_ref2$onClickHandler=_ref2.onClickHandler,onClickHandler=void 0===_ref2$onClickHandler?null:_ref2$onClickHandler,t=(0,es.Bd)().t;if(null===p)return __jsx("span",{className:Pagination_Pagination_module.Ellipse},"...");var classes=classnames_default()(Pagination_Pagination_module.Link,(0,defineProperty.A)({},Pagination_Pagination_module["Link--Current"],isCurrent));return __jsx("a",{className:classes,href:setUrl(p),"aria-current":isCurrent?"page":null,onClick:function onClick(e){return onClickHandler(e,p)}},__jsx("span",{className:"sr-only"},t("pagination.page")," "),__jsx("span",{className:Pagination_Pagination_module.Page},p))};Link.displayName="Link";var Pagination_Pagination=Pagination;Pagination.__docgenInfo={description:"",methods:[],displayName:"Pagination",props:{current:{defaultValue:{value:"1",computed:!1},description:"",type:{name:"number"},required:!1},total:{defaultValue:{value:"1",computed:!1},description:"",type:{name:"number"},required:!1},nrOfMiddle:{defaultValue:{value:"3",computed:!1},description:"",type:{name:"number"},required:!1},nrOfBeginEnd:{defaultValue:{value:"1",computed:!1},description:"",type:{name:"number"},required:!1},setPageUrl:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"func"},required:!1},onClick:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"func"},required:!1}}}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[4]!./app/components/Pagination/Pagination.module.scss":function(module,__webpack_exports__,__webpack_require__){var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__),_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/css-loader/dist/runtime/getUrl.js"),_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__),___CSS_LOADER_URL_IMPORT_0___=new URL(__webpack_require__("./app/assets/img/chevron--grey-70.svg"),__webpack_require__.b),___CSS_LOADER_EXPORT___=_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()),___CSS_LOADER_URL_REPLACEMENT_0___=_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);___CSS_LOADER_EXPORT___.push([module.id,'.Pagination_List__qYIL1{display:flex}.Pagination_Item__AWc1l{display:flex;flex-direction:column;justify-content:flex-end;margin:0 3px}@media(min-width: 768px){.Pagination_Item__AWc1l{margin:0 6px}}.Pagination_Item__AWc1l:first-child{margin-left:0}.Pagination_Item__AWc1l:last-child{margin-right:0}.Pagination_Link__ejWgy{display:flex;justify-content:center;align-items:center;position:relative;width:40px;height:40px;color:#000;font-size:1.6rem;font-weight:500;text-decoration:none;line-height:1.36;border-radius:50%;background:#ede7f6;transition:color .3s ease-in-out}@media(min-width: 768px){.Pagination_Link__ejWgy{width:48px;height:48px;font-size:1.8rem}}@media(min-width: 1280px){.Pagination_Link__ejWgy{width:56px;height:56px}}.Pagination_Link__ejWgy::before{content:"";display:block;position:absolute;top:0;left:0;width:100%;height:100%;border-radius:50%;background:#4527a0;opacity:0;transition:opacity .3s ease-in-out}.Pagination_Link__ejWgy:not(.Pagination_Link--Current__8SvtX):hover{color:#fff}.Pagination_Link__ejWgy:not(.Pagination_Link--Current__8SvtX):hover::before{opacity:1}.Pagination_Link--Current__8SvtX{color:#fff;background:#673ab7}.Pagination_Ellipse__A7r6y{font-size:1.6rem;font-weight:700}@media(min-width: 768px){.Pagination_Ellipse__A7r6y{font-size:1.8rem}}@media(min-width: 1280px){.Pagination_Ellipse__A7r6y{font-size:2rem}}.Pagination_Page__8dOtm{position:relative}.Pagination_Previous__UQ926,.Pagination_Next__MdWy1{width:32px;height:40px;background:url('+___CSS_LOADER_URL_REPLACEMENT_0___+") no-repeat center center;background-size:24px;transition:transform .3s ease-in-out}@media(min-width: 768px){.Pagination_Previous__UQ926,.Pagination_Next__MdWy1{width:40px;height:48px}}@media(min-width: 1280px){.Pagination_Previous__UQ926,.Pagination_Next__MdWy1{width:48px;height:56px}}.Pagination_Previous__UQ926{transform:rotate(90deg)}.Pagination_Previous__UQ926:hover{transform:rotate(90deg) translateY(5px)}.Pagination_Next__MdWy1{transform:rotate(-90deg)}.Pagination_Next__MdWy1:hover{transform:rotate(-90deg) translateY(5px)}","",{version:3,sources:["webpack://./app/components/Pagination/Pagination.module.scss","webpack://./app/styles/includes/mixins.scss","webpack://./app/styles/includes/variables.scss"],names:[],mappings:"AAKA,wBACI,YAAA,CAGJ,wBACI,YAAA,CACA,qBAAA,CACA,wBAAA,CACA,YAAA,CCRI,yBDIR,wBAOQ,YAAA,CAAA,CAGJ,oCACI,aAAA,CAGJ,mCACI,cAAA,CAIR,wBACI,YAAA,CACA,sBAAA,CACA,kBAAA,CACA,iBAAA,CACA,UAAA,CACA,WAAA,CACA,UAAA,CACA,gBAAA,CACA,eEmCK,CFlCL,oBAAA,CACA,gBAAA,CACA,iBAAA,CACA,kBAAA,CACA,gCAAA,CCrCI,yBDuBR,wBAiBQ,UAAA,CACA,WAAA,CACA,gBAAA,CAAA,CC1CA,0BDuBR,wBAuBQ,UAAA,CACA,WAAA,CAAA,CAGJ,gCACI,UAAA,CACA,aAAA,CACA,iBAAA,CACA,KAAA,CACA,MAAA,CACA,UAAA,CACA,WAAA,CACA,iBAAA,CACA,kBErBI,CFsBJ,SAAA,CACA,kCAAA,CAGJ,oEACI,UAAA,CAEA,4EACI,SAAA,CAIR,iCACI,UAAA,CACA,kBEvCC,CF2CT,2BACI,gBAAA,CACA,eEZG,CDpEC,yBD8ER,2BAKQ,gBAAA,CAAA,CCnFA,0BD8ER,2BASQ,cAAA,CAAA,CAIR,wBACI,iBAAA,CAGJ,oDAEI,UAAA,CACA,WAAA,CACA,0EAAA,CAEA,oBAAA,CACA,oCAAA,CCtGI,yBD+FR,oDAUQ,UAAA,CACA,WAAA,CAAA,CC1GA,0BD+FR,oDAeQ,UAAA,CACA,WAAA,CAAA,CAIR,4BACI,uBAAA,CAEA,kCACI,uCAAA,CAIR,wBACI,wBAAA,CAEA,8BACI,wCAAA",sourcesContent:["@import 'Styles/includes';\n\n.Root {\n}\n\n.List {\n    display: flex;\n}\n\n.Item {\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-end;\n    margin: 0 3px;\n\n    @include media(M) {\n        margin: 0 6px;\n    }\n\n    &:first-child {\n        margin-left: 0;\n    }\n\n    &:last-child {\n        margin-right: 0;\n    }\n}\n\n.Link {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    position: relative;\n    width: 40px;\n    height: 40px;\n    color: black;\n    font-size: 1.6rem;\n    font-weight: $medium;\n    text-decoration: none;\n    line-height: 1.36;\n    border-radius: 50%;\n    background: $purple-20;\n    transition: color $transition;\n\n    @include media(M) {\n        width: 48px;\n        height: 48px;\n        font-size: 1.8rem;\n    }\n\n    @include media(L) {\n        width: 56px;\n        height: 56px;\n    }\n\n    &::before {\n        content: '';\n        display: block;\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n        border-radius: 50%;\n        background: $purple-90;\n        opacity: 0;\n        transition: opacity $transition;\n    }\n\n    &:not(.Link--Current):hover {\n        color: white;\n\n        &::before {\n            opacity: 1;\n        }\n    }\n\n    &--Current {\n        color: white;\n        background: $purple;\n    }\n}\n\n.Ellipse {\n    font-size: 1.6rem;\n    font-weight: $bold;\n\n    @include media(M) {\n        font-size: 1.8rem;\n    }\n\n    @include media(L) {\n        font-size: 2rem;\n    }\n}\n\n.Page {\n    position: relative;\n}\n\n.Previous,\n.Next {\n    width: 32px;\n    height: 40px;\n    background: url('#{$assetsPath}img/chevron--grey-70.svg') no-repeat center\n        center;\n    background-size: 24px;\n    transition: transform $transition;\n\n    @include media(M) {\n        width: 40px;\n        height: 48px;\n    }\n\n    @include media(L) {\n        width: 48px;\n        height: 56px;\n    }\n}\n\n.Previous {\n    transform: rotate(90deg);\n\n    &:hover {\n        transform: rotate(90deg) translateY(5px);\n    }\n}\n\n.Next {\n    transform: rotate(-90deg);\n\n    &:hover {\n        transform: rotate(-90deg) translateY(5px);\n    }\n}\n","/* stylelint-disable at-rule-empty-line-before */\n@mixin media($key) {\n    @if $key == 'd' {\n        @content;\n    } @else if map-has-key($breakpoints, $key) {\n        @media (min-width: map-get($breakpoints, $key)) {\n            @content;\n        }\n    } @else {\n        @error 'Unfortunately, no value could be retrieved from `#{$breakpoints}`. Please make sure it is defined in `$breakpoints` map.';\n    }\n}\n\n@mixin media-max($key) {\n    @if $key == 'd' {\n        @content;\n    } @else if map-has-key($breakpoints, $key) {\n        @media (max-width: (map-get($breakpoints, $key) - 1)) {\n            @content;\n        }\n    } @else {\n        @error 'Unfortunately, no value could be retrieved from `#{$breakpoints}`. Please make sure it is defined in `$breakpoints` map.';\n    }\n}\n\n/* stylelint-enable at-rule-empty-line-before */\n\n@mixin clearfix() {\n    &::after,\n    &::before {\n        content: '';\n        display: table;\n        clear: both;\n        width: 100%;\n    }\n}\n\n@mixin href-external($domain: 'example.se') {\n    &:not([href^=\"mailto:\"]):not([href^=\"tel:\"]):not([href=\"\"]):not([href^=\"#\"]):not([href^=\"/\"]):not([href^=\"http://#{$domain}\"]):not([href^=\"https://#{$domain}\"]):not([href*=\"localhost\"]):not([href*=\"stage.#{$domain}\"]):not([href*=\"www.#{$domain}\"]):not([href*=\"beta.#{$domain}\"])\n    {\n        @content;\n    }\n}\n\n@mixin href-download() {\n    &[href$='.pdf'],\n    &[href$='.doc'],\n    &[href$='.docx'],\n    &[href$='.ppt'],\n    &[href$='.pptx'],\n    &[href$='.xls'],\n    &[href$='.xlsx'],\n    &[href$='.odt'],\n    &[href$='.eps'],\n    &[href$='.zip'] {\n        @content;\n    }\n}\n\n// For wrapping elements in the main grid\n// Usage: @include wrap;\n@mixin wrap($exclude: ()) {\n    @if not contains($exclude, d) {\n        margin-left: $gutter;\n        margin-right: $gutter;\n    }\n\n    @if not contains($exclude, SL) {\n        @include media(SL) {\n            max-width: (map-get($maxwidths, SL));\n            margin-left: auto;\n            margin-right: auto;\n        }\n    }\n\n    @if not contains($exclude, M) {\n        @include media(M) {\n            max-width: (map-get($maxwidths, M));\n            margin-left: auto;\n            margin-right: auto;\n        }\n    }\n\n    @if not contains($exclude, ML) {\n        @include media(ML) {\n            max-width: (map-get($maxwidths, ML));\n            margin-left: auto;\n            margin-right: auto;\n        }\n    }\n\n    @if not contains($exclude, L) {\n        @include media(L) {\n            max-width: (map-get($maxwidths, L));\n            margin-left: auto;\n            margin-right: auto;\n        }\n    }\n\n    @if not contains($exclude, XL) {\n        @include media(XL) {\n            max-width: (map-get($maxwidths, XL));\n            margin-left: auto;\n            margin-right: auto;\n        }\n    }\n\n    @if not contains($exclude, XXL) {\n        @include media(XXL) {\n            max-width: (map-get($maxwidths, XXL));\n            margin-left: auto;\n            margin-right: auto;\n        }\n    }\n}\n\n// For setting font-size and line-height on elements defined by variabels, including media queries\n// Usage: @include textstyle(h1);\n@mixin textstyle($key) {\n    // Loop through text map and set font-size and line-height for each media query\n    @if map-has-key($textstyles, $key) {\n        $map: map-get($textstyles, $key);\n\n        @each $media, $style in $map {\n            @include media($media) {\n                @if map-has-key($style, font-size) and\n                    map-has-key($style, line-height)\n                {\n                    $font-size: map-get($style, font-size);\n                    $line-height: map-get($style, line-height);\n\n                    font-size: #{$font-size / 10}rem;\n                    line-height: #{round($line-height / $font-size * 100) /\n                        100};\n                }\n\n                @each $param, $value in $style {\n                    @if $param != 'font-size' and $param != 'line-height' {\n                        #{$param}: $value;\n                    }\n                }\n            }\n        }\n    }\n}\n","$assetsPath: '../../assets/';\n$gutter: 16px;\n$gutterM: 24px; // Used for media query above M\n\n// Grid and site widths\n$maxwidths: (\n    // S: 320px,\n    SL: 500px - ($gutter * 2),\n    M: 720px,\n    ML: 808px,\n    L: 1140px,\n    XL: 1280px,\n    XXL: 1440px,\n    header: 725px,\n    content: 618px\n);\n$breakpoints: (\n    S: 375px,\n    SL: 500px,\n    // Landscape\n    M: 768px,\n    ML: 1024px,\n    // Landscape\n    L: 1280px,\n    XL: 1440px,\n    XXL: 1680px,\n);\n$transition: 0.3s ease-in-out;\n\n/** Color definintions from styleguide **/\n$grey: #9e9e9e;\n$grey-5: #fafafa;\n$grey-10: whitesmoke; // #F5F5F5\n$grey-20: #eee;\n$grey-30: #e0e0e0;\n$grey-40: #bdbdbd;\n$grey-60: #757575;\n$grey-70: #616161;\n$grey-80: #424242;\n$grey-90: #212121;\n$purple: #673ab7;\n$purple-20: #ede7f6;\n$purple-60: #b39ddb;\n$purple-90: #4527a0;\n$yellow: #ffee58;\n$yellow-20: #fffde7;\n$yellow-40: #fff59d;\n$yellow-60: #fdd835;\n$pink: #e91e63;\n$system-error: #d32f2f;\n$system-error-10: #fbebeb;\n$system-success: #1dac2c;\n\n/** Color definitions custom vars **/\n$bg-color: white;\n$base-color: $grey-90;\n$primary-color: $purple;\n$accent-color: $yellow;\n$link-color: $primary-color;\n$link-hover-color: darken($purple, 20%);\n$error-color: $system-error;\n$error-bg: $system-error-10;\n$success-color: $system-success;\n\n/** Text styles variables **/\n$base-font: #{Roboto, Arial, sans-serif};\n$heading-font: #{Roboto, Arial, sans-serif};\n$base-size: 1.6rem;\n\n// Match names of weights here with the weights of the fonts in fonts.scss\n$light: 300;\n$regular: 400;\n$medium: 500;\n$bold: 700;\n\n// No other font sizes are needed\n// Font sizes and line heights as defined by styleguide in pixels\n$textstyles: (\n    page-title: (\n        d: (\n            font-size: 44,\n            line-height: 59.8,\n            font-weight: $bold,\n            font-family: $heading-font,\n        ),\n        M: (\n            font-size: 64,\n            line-height: 84.5,\n        ),\n    ),\n    module-title: (\n        d: (\n            font-size: 34,\n            line-height: 47.6,\n            font-weight: $bold,\n            font-family: $heading-font,\n        ),\n        M: (\n            font-size: 44,\n            line-height: 60.3,\n        ),\n    ),\n    card-title: (\n        d: (\n            font-size: 34,\n            line-height: 40,\n            font-weight: $bold,\n            font-family: $heading-font,\n        ),\n        M: (\n            font-size: 26,\n            line-height: 26,\n        ),\n    ),\n    accordion-title: (\n        d: (\n            font-size: 16,\n            line-height: 23.8,\n            font-weight: $bold,\n            font-family: $heading-font,\n        ),\n        M: (\n            font-size: 22,\n            line-height: 28.4,\n        ),\n    ),\n    footer-title: (\n        d: (\n            font-size: 18,\n            line-height: 26.82,\n            font-weight: $bold,\n            font-family: $heading-font,\n        ),\n        M: (\n            font-size: 20,\n            line-height: 25.8,\n            font-weight: $bold,\n            font-family: $heading-font,\n        ),\n    ),\n    richtext-h2: (\n        d: (\n            font-size: 36,\n            line-height: 48.2,\n            font-weight: $bold,\n            font-family: $heading-font,\n        ),\n        M: (\n            font-size: 40,\n            line-height: 55.6,\n        ),\n    ),\n    richtext-h3: (\n        d: (\n            font-size: 28,\n            line-height: 39.8,\n            font-weight: $bold,\n            font-family: $heading-font,\n        ),\n        M: (\n            font-size: 32,\n            line-height: 45.1,\n        ),\n    ),\n    richtext-h4: (\n        d: (\n            font-size: 24,\n            line-height: 36.5,\n            font-weight: $bold,\n            font-family: $heading-font,\n        ),\n        M: (\n            font-size: 26,\n            line-height: 39.5,\n        ),\n    ),\n    richtext-h5: (\n        d: (\n            font-size: 20,\n            line-height: 28.4,\n            font-weight: $bold,\n            font-family: $heading-font,\n        ),\n        M: (\n            font-size: 22,\n            line-height: 32.6,\n        ),\n    ),\n    richtext-h6: (\n        d: (\n            font-size: 16,\n            line-height: 23.7,\n            font-weight: $bold,\n            font-family: $heading-font,\n        ),\n        M: (\n            font-size: 18,\n            line-height: 26.6,\n        ),\n    ),\n    body: (\n        d: (\n            font-size: 16,\n            line-height: 23.5,\n        ),\n        // Also card-text\n    ),\n    preamble: (\n        d: (\n            font-size: 18,\n            line-height: 27.4,\n            font-weight: $light,\n        ),\n        M: (\n            font-size: 22,\n            line-height: 32.6,\n        ),\n    ),\n    paragraph: (\n        d: (\n            font-size: 16,\n            line-height: 23.5,\n        ),\n        M: (\n            font-size: 18,\n            line-height: 27.7,\n        ),\n    ),\n    quote: (\n        d: (\n            font-size: 20,\n            line-height: 39.4,\n            font-weight: $bold,\n            font-family: $heading-font,\n        ),\n        M: (\n            font-size: 26,\n            line-height: 39.5,\n        ),\n    ),\n    cite: (\n        d: (\n            font-size: 14,\n            line-height: 23.5,\n        ),\n        // Quote name\n        M:\n            (\n                font-size: 18,\n                line-height: 26.5,\n            ),\n    ),\n    caption: (\n        d: (\n            font-size: 12,\n            line-height: 16.3,\n            letter-spacing: 0.2px,\n        ),\n    ),\n    button: (\n        d: (\n            font-size: 16,\n            line-height: 19.8,\n            font-weight: $medium,\n        ),\n        M: (\n            font-size: 18,\n            line-height: 24.5,\n        ),\n    ),\n    textlink: (\n        d: (\n            font-size: 16,\n            line-height: 23.5,\n        ),\n        // Footer link\n        M:\n            (\n                font-size: 18,\n                line-height: 27.7,\n            ),\n    ),\n    main-menu: (\n        d: (\n            font-size: 20,\n            line-height: 29.6,\n        ),\n        M: (\n            font-size: 16,\n            line-height: 23.68,\n        ),\n    ),\n    service-menu: (\n        d: (\n            font-size: 12,\n            line-height: 16.44,\n        ),\n        M: (\n            font-size: 14,\n            line-height: 23.52,\n        ),\n    ),\n    submenu: (\n        d: (\n            font-size: 16,\n            line-height: 19.7,\n            font-weight: $bold,\n        ),\n        // Add bold to active and first level instead of new text style\n    ),\n    breadcrumb: (\n        d: (\n            font-size: 10,\n            line-height: 12.2,\n        ),\n        M: (\n            font-size: 12,\n            line-height: 16.3,\n        ),\n    ),\n    label: (\n        d: (\n            font-size: 14,\n            line-height: 16.5,\n            font-weight: $bold,\n            text-transform: uppercase,\n        ),\n    ),\n    label-card: (\n        d: (\n            font-size: 12,\n            line-height: 14,\n            font-weight: $bold,\n            text-transform: uppercase,\n        ),\n    ),\n    date: (\n        d: (\n            font-size: 14,\n            line-height: 23.5,\n        ),\n    ),\n);\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={List:"Pagination_List__qYIL1",Item:"Pagination_Item__AWc1l",Link:"Pagination_Link__ejWgy","Link--Current":"Pagination_Link--Current__8SvtX",Ellipse:"Pagination_Ellipse__A7r6y",Page:"Pagination_Page__8dOtm",Previous:"Pagination_Previous__UQ926",Next:"Pagination_Next__MdWy1"},__webpack_exports__.A=___CSS_LOADER_EXPORT___}}]);