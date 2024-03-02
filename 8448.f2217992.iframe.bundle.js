"use strict";(self.webpackChunkfrojd_jewl=self.webpackChunkfrojd_jewl||[]).push([[8448],{"./app/components/PillGroup/PillGroup.data.js":function(__unused_webpack_module,__webpack_exports__){__webpack_exports__.A={label:"Type",name:"type",showAll:!0,items:[{label:"Page",value:"page"},{label:"News",value:"News"},{label:"Event",value:"event"},{label:"Course",value:"course"}]}},"./app/components/PillGroup/PillGroup.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{A:function(){return PillGroup_PillGroup}});var esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),toConsumableArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),es=__webpack_require__("./node_modules/react-i18next/dist/es/index.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),PillGroup_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[4]!./app/components/PillGroup/PillGroup.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(PillGroup_module.A,options);var PillGroup_PillGroup_module=PillGroup_module.A&&PillGroup_module.A.locals?PillGroup_module.A.locals:void 0,__jsx=react.createElement,PillGroup=function PillGroup(_ref){var _ref$label=_ref.label,label=void 0===_ref$label?"":_ref$label,_ref$name=_ref.name,name=void 0===_ref$name?"":_ref$name,_ref$items=_ref.items,items=void 0===_ref$items?[]:_ref$items,_ref$id=_ref.id,id=void 0===_ref$id?"pill-group":_ref$id,_ref$multiple=_ref.multiple,multiple=void 0!==_ref$multiple&&_ref$multiple,_ref$selected=_ref.selected,selected=void 0===_ref$selected?null:_ref$selected,_ref$showAll=_ref.showAll,showAll=void 0!==_ref$showAll&&_ref$showAll,_ref$changeHandler=_ref.changeHandler,changeHandler=void 0===_ref$changeHandler?function(){}:_ref$changeHandler,t=(0,es.Bd)().t,_useState=(0,react.useState)(selected),currentSelected=_useState[0],setCurrentSelected=_useState[1];(0,react.useEffect)((function(){setCurrentSelected(selected)}),[selected]),(0,react.useEffect)((function(){setCurrentSelected(multiple?[]:"")}),[multiple]),(0,react.useEffect)((function(){changeHandler(currentSelected)}),[currentSelected]);var onChange=function onChange(value,checked){if("all"===value)if(checked)setCurrentSelected(multiple?[]:"");else{var allValues=items.map((function(_ref2){return _ref2.value}));setCurrentSelected(allValues)}else if(multiple){var currValue=currentSelected||[],newValue=checked?[].concat((0,toConsumableArray.A)(currValue),[value]):(0,toConsumableArray.A)(currValue).filter((function(v){return v!==value}));setCurrentSelected(newValue)}else setCurrentSelected(value)},classes=classnames_default()(PillGroup_PillGroup_module.Root,(0,defineProperty.A)({},PillGroup_PillGroup_module["Root--Multiple"],multiple));return __jsx("fieldset",{className:classes},__jsx("legend",{className:PillGroup_PillGroup_module.Title},label),__jsx("div",{className:PillGroup_PillGroup_module.List},showAll&&__jsx(Item,{label:t("pillGroup.all"),value:"all",name:name,id:id,multiple:multiple,selected:currentSelected,onChange:onChange}),items.map((function(item,index){return __jsx(Item,(0,esm_extends.A)({},item,{key:index,id:id,name:name,multiple:multiple,selected:currentSelected,onChange:onChange}))}))))};PillGroup.displayName="PillGroup";var Item=function Item(_ref3){var _ref3$label=_ref3.label,label=void 0===_ref3$label?"":_ref3$label,_ref3$name=_ref3.name,name=void 0===_ref3$name?"":_ref3$name,_ref3$value=_ref3.value,value=void 0===_ref3$value?"":_ref3$value,_ref3$id=_ref3.id,id=void 0===_ref3$id?"pill-group":_ref3$id,_ref3$multiple=_ref3.multiple,multiple=void 0!==_ref3$multiple&&_ref3$multiple,_ref3$selected=_ref3.selected,selected=void 0===_ref3$selected?null:_ref3$selected,_ref3$onChange=_ref3.onChange,_onChange=void 0===_ref3$onChange?function(){}:_ref3$onChange,fieldId="".concat(id,"-").concat(value),type=multiple?"checkbox":"radio",isNoneSelected=!selected||selected.length<1,isChecked="all"===value?isNoneSelected:multiple&&selected?selected.includes(value):selected===value,classes=classnames_default()(PillGroup_PillGroup_module.Item,(0,defineProperty.A)({},PillGroup_PillGroup_module["Item--Checked"],isChecked));return __jsx("div",{className:classes},__jsx("input",{className:PillGroup_PillGroup_module.Input,name:name,value:value,type:type,id:fieldId,checked:isChecked,onChange:function onChange(e){return _onChange(value,e.currentTarget.checked)}}),__jsx("label",{className:PillGroup_PillGroup_module.Label,htmlFor:fieldId},label))};Item.displayName="Item";var PillGroup_PillGroup=PillGroup;PillGroup.__docgenInfo={description:"",methods:[],displayName:"PillGroup",props:{label:{defaultValue:{value:"''",computed:!1},description:"",type:{name:"string"},required:!1},name:{defaultValue:{value:"''",computed:!1},description:"",type:{name:"string"},required:!1},items:{defaultValue:{value:"[]",computed:!1},description:"",type:{name:"array"},required:!1},id:{defaultValue:{value:"'pill-group'",computed:!1},description:"",type:{name:"string"},required:!1},multiple:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},selected:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"union",value:[{name:"string"},{name:"array"}]},required:!1},showAll:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},changeHandler:{defaultValue:{value:"() => {}",computed:!1},description:"",type:{name:"func"},required:!1}}}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[4]!./app/components/PillGroup/PillGroup.module.scss":function(module,__webpack_exports__,__webpack_require__){var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,'.PillGroup_Title__alq7v{font-size:1.6rem;line-height:1.25;font-weight:700;margin-bottom:8px}.PillGroup_List__AkiBA{display:flex;flex-direction:row;gap:8px}.PillGroup_Item__ZpdY0{flex:0 0 auto;display:block;position:relative;color:#673ab7;border:1px solid #673ab7;border-radius:21px;background:#fff;overflow:hidden;transition:color .3s ease-in-out}.PillGroup_Item__ZpdY0::before{content:"";display:block;position:absolute;top:0;left:0;width:100%;height:100%;background:#ede7f6;opacity:0;transition:opacity .3s ease-in-out}.PillGroup_Item__ZpdY0:not(.PillGroup_Item--Checked__8Bg3z):hover::before{opacity:1}.PillGroup_Item--Checked__8Bg3z{color:#fff}.PillGroup_Item--Checked__8Bg3z::before{background:#673ab7;opacity:1}.PillGroup_Input__XgQdc{position:absolute;opacity:0;width:20px;height:20px}.PillGroup_Label__fj4Pg{font-size:1.6rem;line-height:1.24;font-weight:500;display:block;position:relative;padding:7px 15px;cursor:pointer}@media(min-width: 768px){.PillGroup_Label__fj4Pg{font-size:1.8rem;line-height:1.36}}',"",{version:3,sources:["webpack://./app/components/PillGroup/PillGroup.module.scss","webpack://./app/styles/includes/mixins.scss","webpack://./app/styles/includes/variables.scss"],names:[],mappings:"AAKA,wBC8HoB,gBAAA,CACA,gBAAA,CAMI,eAjBV,CDjHV,iBAAA,CAGJ,uBACI,YAAA,CACA,kBAAA,CACA,OAAA,CAGJ,uBACI,aAAA,CACA,aAAA,CACA,iBAAA,CACA,aEmBK,CFlBL,wBAAA,CACA,kBAAA,CACA,eAAA,CACA,eAAA,CACA,gCAAA,CAEA,+BACI,UAAA,CACA,aAAA,CACA,iBAAA,CACA,KAAA,CACA,MAAA,CACA,UAAA,CACA,WAAA,CACA,kBEKI,CFJJ,SAAA,CACA,kCAAA,CAIA,0EACI,SAAA,CAIR,gCACI,UAAA,CAEA,wCACI,kBEXH,CFYG,SAAA,CAKZ,wBACI,iBAAA,CACA,SAAA,CACA,UAAA,CACA,WAAA,CAGJ,wBCmEoB,gBAAA,CACA,gBAAA,CAMI,eAjBV,CDtDV,aAAA,CACA,iBAAA,CACA,gBAAA,CACA,cAAA,CCjEI,yBD2DR,wBCmEoB,gBAAA,CACA,gBAAA,CAAA",sourcesContent:["@import 'Styles/includes';\n\n.Root {\n}\n\n.Title {\n    @include textstyle(form-label);\n\n    margin-bottom: 8px;\n}\n\n.List {\n    display: flex;\n    flex-direction: row;\n    gap: 8px;\n}\n\n.Item {\n    flex: 0 0 auto;\n    display: block;\n    position: relative;\n    color: $primary-color;\n    border: 1px solid $primary-color;\n    border-radius: 21px;\n    background: white;\n    overflow: hidden;\n    transition: color $transition;\n\n    &::before {\n        content: '';\n        display: block;\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n        background: $purple-20;\n        opacity: 0;\n        transition: opacity $transition;\n    }\n\n    &:not(.Item--Checked):hover {\n        &::before {\n            opacity: 1;\n        }\n    }\n\n    &--Checked {\n        color: white;\n\n        &::before {\n            background: $primary-color;\n            opacity: 1;\n        }\n    }\n}\n\n.Input {\n    position: absolute;\n    opacity: 0;\n    width: 20px;\n    height: 20px;\n}\n\n.Label {\n    @include textstyle(button);\n\n    display: block;\n    position: relative;\n    padding: 7px 15px;\n    cursor: pointer;\n}\n","/* stylelint-disable at-rule-empty-line-before */\n@mixin media($key) {\n    @if $key == 'd' {\n        @content;\n    } @else if map-has-key($breakpoints, $key) {\n        @media (min-width: map-get($breakpoints, $key)) {\n            @content;\n        }\n    } @else {\n        @error 'Unfortunately, no value could be retrieved from `#{$breakpoints}`. Please make sure it is defined in `$breakpoints` map.';\n    }\n}\n\n@mixin media-max($key) {\n    @if $key == 'd' {\n        @content;\n    } @else if map-has-key($breakpoints, $key) {\n        @media (max-width: (map-get($breakpoints, $key) - 1)) {\n            @content;\n        }\n    } @else {\n        @error 'Unfortunately, no value could be retrieved from `#{$breakpoints}`. Please make sure it is defined in `$breakpoints` map.';\n    }\n}\n\n/* stylelint-enable at-rule-empty-line-before */\n\n@mixin clearfix() {\n    &::after,\n    &::before {\n        content: '';\n        display: table;\n        clear: both;\n        width: 100%;\n    }\n}\n\n@mixin href-external($domain: 'example.se') {\n    &:not([href^=\"mailto:\"]):not([href^=\"tel:\"]):not([href=\"\"]):not([href^=\"#\"]):not([href^=\"/\"]):not([href^=\"http://#{$domain}\"]):not([href^=\"https://#{$domain}\"]):not([href*=\"localhost\"]):not([href*=\"stage.#{$domain}\"]):not([href*=\"www.#{$domain}\"]):not([href*=\"beta.#{$domain}\"])\n    {\n        @content;\n    }\n}\n\n@mixin href-download() {\n    &[href$='.pdf'],\n    &[href$='.doc'],\n    &[href$='.docx'],\n    &[href$='.ppt'],\n    &[href$='.pptx'],\n    &[href$='.xls'],\n    &[href$='.xlsx'],\n    &[href$='.odt'],\n    &[href$='.eps'],\n    &[href$='.zip'] {\n        @content;\n    }\n}\n\n// For wrapping elements in the main grid\n// Usage: @include wrap;\n@mixin wrap($exclude: ()) {\n    @if not contains($exclude, d) {\n        margin-left: $gutter;\n        margin-right: $gutter;\n    }\n\n    @if not contains($exclude, SL) {\n        @include media(SL) {\n            max-width: (map-get($maxwidths, SL));\n            margin-left: auto;\n            margin-right: auto;\n        }\n    }\n\n    @if not contains($exclude, M) {\n        @include media(M) {\n            max-width: (map-get($maxwidths, M));\n            margin-left: auto;\n            margin-right: auto;\n        }\n    }\n\n    @if not contains($exclude, ML) {\n        @include media(ML) {\n            max-width: (map-get($maxwidths, ML));\n            margin-left: auto;\n            margin-right: auto;\n        }\n    }\n\n    @if not contains($exclude, L) {\n        @include media(L) {\n            max-width: (map-get($maxwidths, L));\n            margin-left: auto;\n            margin-right: auto;\n        }\n    }\n\n    @if not contains($exclude, XL) {\n        @include media(XL) {\n            max-width: (map-get($maxwidths, XL));\n            margin-left: auto;\n            margin-right: auto;\n        }\n    }\n\n    @if not contains($exclude, XXL) {\n        @include media(XXL) {\n            max-width: (map-get($maxwidths, XXL));\n            margin-left: auto;\n            margin-right: auto;\n        }\n    }\n}\n\n// For setting font-size and line-height on elements defined by variabels, including media queries\n// Usage: @include textstyle(h1);\n@mixin textstyle($key) {\n    // Loop through text map and set font-size and line-height for each media query\n    @if map-has-key($textstyles, $key) {\n        $map: map-get($textstyles, $key);\n\n        @each $media, $style in $map {\n            @include media($media) {\n                @if map-has-key($style, font-size) and\n                    map-has-key($style, line-height)\n                {\n                    $font-size: map-get($style, font-size);\n                    $line-height: map-get($style, line-height);\n\n                    font-size: #{$font-size / 10}rem;\n                    line-height: #{round($line-height / $font-size * 100) /\n                        100};\n                }\n\n                @each $param, $value in $style {\n                    @if $param != 'font-size' and $param != 'line-height' {\n                        #{$param}: $value;\n                    }\n                }\n            }\n        }\n    }\n}\n","$assetsPath: '../../assets/';\n$gutter: 16px;\n$gutterM: 24px; // Used for media query above M\n\n// Grid and site widths\n$maxwidths: (\n    // S: 320px,\n    SL: 500px - ($gutter * 2),\n    M: 720px,\n    ML: 808px,\n    L: 1140px,\n    XL: 1280px,\n    XXL: 1440px,\n    header: 725px,\n    content: 618px\n);\n$breakpoints: (\n    S: 375px,\n    SL: 500px,\n    // Landscape\n    M: 768px,\n    ML: 1024px,\n    // Landscape\n    L: 1280px,\n    XL: 1440px,\n    XXL: 1680px,\n);\n$transition: 0.3s ease-in-out;\n\n/** Color definintions from styleguide **/\n$grey: #9e9e9e;\n$grey-5: #fafafa;\n$grey-10: whitesmoke; // #F5F5F5\n$grey-20: #eee;\n$grey-30: #e0e0e0;\n$grey-40: #bdbdbd;\n$grey-60: #757575;\n$grey-70: #616161;\n$grey-80: #424242;\n$grey-90: #212121;\n$purple: #673ab7;\n$purple-20: #ede7f6;\n$purple-60: #b39ddb;\n$purple-90: #4527a0;\n$yellow: #ffee58;\n$yellow-20: #fffde7;\n$yellow-40: #fff59d;\n$yellow-60: #fdd835;\n$pink: #e91e63;\n$system-error: #d32f2f;\n$system-error-10: #fbebeb;\n$system-success: #1dac2c;\n\n/** Color definitions custom vars **/\n$bg-color: white;\n$base-color: $grey-90;\n$primary-color: $purple;\n$accent-color: $yellow;\n$link-color: $primary-color;\n$link-hover-color: darken($purple, 20%);\n$error-color: $system-error;\n$error-bg: $system-error-10;\n$success-color: $system-success;\n\n/** Text styles variables **/\n$base-font: #{Roboto, Arial, sans-serif};\n$heading-font: #{Roboto, Arial, sans-serif};\n$base-size: 1.6rem;\n\n// Match names of weights here with the weights of the fonts in fonts.scss\n$light: 300;\n$regular: 400;\n$medium: 500;\n$bold: 700;\n\n// No other font sizes are needed\n// Font sizes and line heights as defined by styleguide in pixels\n$textstyles: (\n    page-title: (\n        d: (\n            font-size: 44,\n            line-height: 59.8,\n            font-weight: $bold,\n            font-family: $heading-font,\n        ),\n        M: (\n            font-size: 64,\n            line-height: 84.5,\n        ),\n    ),\n    module-title: (\n        d: (\n            font-size: 34,\n            line-height: 47.6,\n            font-weight: $bold,\n            font-family: $heading-font,\n        ),\n        M: (\n            font-size: 44,\n            line-height: 60.3,\n        ),\n    ),\n    card-title: (\n        d: (\n            font-size: 34,\n            line-height: 40,\n            font-weight: $bold,\n            font-family: $heading-font,\n        ),\n        M: (\n            font-size: 26,\n            line-height: 26,\n        ),\n    ),\n    accordion-title: (\n        d: (\n            font-size: 16,\n            line-height: 23.8,\n            font-weight: $bold,\n            font-family: $heading-font,\n        ),\n        M: (\n            font-size: 22,\n            line-height: 28.4,\n        ),\n    ),\n    footer-title: (\n        d: (\n            font-size: 18,\n            line-height: 26.82,\n            font-weight: $bold,\n            font-family: $heading-font,\n        ),\n        M: (\n            font-size: 20,\n            line-height: 25.8,\n            font-weight: $bold,\n            font-family: $heading-font,\n        ),\n    ),\n    richtext-h2: (\n        d: (\n            font-size: 36,\n            line-height: 48.2,\n            font-weight: $bold,\n            font-family: $heading-font,\n        ),\n        M: (\n            font-size: 40,\n            line-height: 55.6,\n        ),\n    ),\n    richtext-h3: (\n        d: (\n            font-size: 28,\n            line-height: 39.8,\n            font-weight: $bold,\n            font-family: $heading-font,\n        ),\n        M: (\n            font-size: 32,\n            line-height: 45.1,\n        ),\n    ),\n    richtext-h4: (\n        d: (\n            font-size: 24,\n            line-height: 36.5,\n            font-weight: $bold,\n            font-family: $heading-font,\n        ),\n        M: (\n            font-size: 26,\n            line-height: 39.5,\n        ),\n    ),\n    richtext-h5: (\n        d: (\n            font-size: 20,\n            line-height: 28.4,\n            font-weight: $bold,\n            font-family: $heading-font,\n        ),\n        M: (\n            font-size: 22,\n            line-height: 32.6,\n        ),\n    ),\n    richtext-h6: (\n        d: (\n            font-size: 16,\n            line-height: 23.7,\n            font-weight: $bold,\n            font-family: $heading-font,\n        ),\n        M: (\n            font-size: 18,\n            line-height: 26.6,\n        ),\n    ),\n    body: (\n        d: (\n            font-size: 16,\n            line-height: 23.5,\n        ),\n        // Also card-text\n    ),\n    preamble: (\n        d: (\n            font-size: 18,\n            line-height: 27.4,\n            font-weight: $light,\n        ),\n        M: (\n            font-size: 22,\n            line-height: 32.6,\n        ),\n    ),\n    paragraph: (\n        d: (\n            font-size: 16,\n            line-height: 23.5,\n        ),\n        M: (\n            font-size: 18,\n            line-height: 27.7,\n        ),\n    ),\n    quote: (\n        d: (\n            font-size: 20,\n            line-height: 39.4,\n            font-weight: $bold,\n            font-family: $heading-font,\n        ),\n        M: (\n            font-size: 26,\n            line-height: 39.5,\n        ),\n    ),\n    cite: (\n        d: (\n            font-size: 14,\n            line-height: 23.5,\n        ),\n        // Quote name\n        M:\n            (\n                font-size: 18,\n                line-height: 26.5,\n            ),\n    ),\n    caption: (\n        d: (\n            font-size: 12,\n            line-height: 16.3,\n            letter-spacing: 0.2px,\n        ),\n    ),\n    button: (\n        d: (\n            font-size: 16,\n            line-height: 19.8,\n            font-weight: $medium,\n        ),\n        M: (\n            font-size: 18,\n            line-height: 24.5,\n        ),\n    ),\n    textlink: (\n        d: (\n            font-size: 16,\n            line-height: 23.5,\n        ),\n        // Footer link\n        M:\n            (\n                font-size: 18,\n                line-height: 27.7,\n            ),\n    ),\n    main-menu: (\n        d: (\n            font-size: 20,\n            line-height: 29.6,\n        ),\n        M: (\n            font-size: 16,\n            line-height: 23.68,\n        ),\n    ),\n    service-menu: (\n        d: (\n            font-size: 12,\n            line-height: 16.44,\n        ),\n        M: (\n            font-size: 14,\n            line-height: 23.52,\n        ),\n    ),\n    submenu: (\n        d: (\n            font-size: 16,\n            line-height: 19.7,\n            font-weight: $bold,\n        ),\n        // Add bold to active and first level instead of new text style\n    ),\n    breadcrumb: (\n        d: (\n            font-size: 10,\n            line-height: 12.2,\n        ),\n        M: (\n            font-size: 12,\n            line-height: 16.3,\n        ),\n    ),\n    label: (\n        d: (\n            font-size: 14,\n            line-height: 16.5,\n            font-weight: $bold,\n            text-transform: uppercase,\n        ),\n    ),\n    label-card: (\n        d: (\n            font-size: 12,\n            line-height: 14,\n            font-weight: $bold,\n            text-transform: uppercase,\n        ),\n    ),\n    date: (\n        d: (\n            font-size: 14,\n            line-height: 23.5,\n        ),\n    ),\n    form-label: (\n        d: (\n            font-size: 16,\n            line-height: 20,\n            font-weight: $bold,\n        ),\n    ),\n);\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={Title:"PillGroup_Title__alq7v",List:"PillGroup_List__AkiBA",Item:"PillGroup_Item__ZpdY0","Item--Checked":"PillGroup_Item--Checked__8Bg3z",Input:"PillGroup_Input__XgQdc",Label:"PillGroup_Label__fj4Pg"},__webpack_exports__.A=___CSS_LOADER_EXPORT___}}]);