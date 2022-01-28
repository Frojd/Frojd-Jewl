(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"./app/components/Hero/Hero.data.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_exports__.a={title:"Hero title"}},"./app/components/Hero/Hero.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__("./node_modules/react/index.js");var prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),Hero_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js!./app/components/Hero/Hero.module.scss"),options={insert:"head",singleton:!1},Hero_Hero_module=(injectStylesIntoStyleTag_default()(Hero_module.a,options),Hero_module.a.locals||{}),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),Hero_Hero=function Hero(_ref){var title=_ref.title;return Object(jsx_runtime.jsx)("div",{className:Hero_Hero_module.Root,children:Object(jsx_runtime.jsx)("h1",{className:Hero_Hero_module.Title,children:title})})};Hero_Hero.displayName="Hero",Hero_Hero.propTypes={title:prop_types_default.a.string.isRequired},Hero_Hero.defaultProps={title:""},Hero_Hero.__docgenInfo={description:"",methods:[],displayName:"Hero",props:{title:{defaultValue:{value:"''",computed:!1},type:{name:"string"},required:!1,description:""}}};__webpack_exports__.a=Hero_Hero;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/components/Hero/Hero.js"]={name:"Hero",docgenInfo:Hero_Hero.__docgenInfo,path:"app/components/Hero/Hero.js"})},"./app/components/Hero/index.js":function(module,__webpack_exports__,__webpack_require__){"use strict";var _Hero__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./app/components/Hero/Hero.js");__webpack_exports__.a=_Hero__WEBPACK_IMPORTED_MODULE_0__.a},"./app/containers/HomePage/HomePage.stories.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"HomePageDefault",(function(){return HomePage_stories_HomePageDefault}));__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/react/index.js");var prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),Base=__webpack_require__("./app/layouts/Base/index.js"),Hero=__webpack_require__("./app/components/Hero/index.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),HomePage_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js!./app/containers/HomePage/HomePage.module.scss"),options={insert:"head",singleton:!1},HomePage_HomePage_module=(injectStylesIntoStyleTag_default()(HomePage_module.a,options),HomePage_module.a.locals||{}),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),HomePage_HomePage=function HomePage(_ref){var hero=_ref.hero;return Object(jsx_runtime.jsx)("div",{className:HomePage_HomePage_module.Root,children:Object(jsx_runtime.jsx)(Hero.a,Object.assign({},hero))})};HomePage_HomePage.displayName="HomePage",HomePage_HomePage.propTypes={hero:prop_types_default.a.object},HomePage_HomePage.defaultProps={hero:{}},HomePage_HomePage.__docgenInfo={description:"",methods:[],displayName:"HomePage",props:{hero:{defaultValue:{value:"{}",computed:!1},type:{name:"object"},required:!1,description:""}}};var containers_HomePage_HomePage=Object(Base.a)(HomePage_HomePage);"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/containers/HomePage/HomePage.js"]={name:"HomePage",docgenInfo:HomePage_HomePage.__docgenInfo,path:"app/containers/HomePage/HomePage.js"});var Base_data=__webpack_require__("./app/layouts/Base/Base.data.js"),Hero_data=__webpack_require__("./app/components/Hero/Hero.data.js"),HomePage_data=Object.assign({},Base_data.a,{hero:Hero_data.a}),HomePage_stories_HomePageDefault=(__webpack_exports__.default={component:containers_HomePage_HomePage},function HomePageDefault(){return Object(jsx_runtime.jsx)(containers_HomePage_HomePage,Object.assign({},HomePage_data))});HomePage_stories_HomePageDefault.displayName="HomePageDefault",HomePage_stories_HomePageDefault.parameters=Object.assign({storySource:{source:"() => (\n    <HomePage {...data} />\n)"}},HomePage_stories_HomePageDefault.parameters),HomePage_stories_HomePageDefault.__docgenInfo={description:"",methods:[],displayName:"HomePageDefault"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/containers/HomePage/HomePage.stories.js"]={name:"HomePageDefault",docgenInfo:HomePage_stories_HomePageDefault.__docgenInfo,path:"app/containers/HomePage/HomePage.stories.js"})},"./app/layouts/Base/Base.data.js":function(module,__webpack_exports__,__webpack_require__){"use strict";var Components_Header_Header_data__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./app/components/Header/Header.data.js");__webpack_exports__.a={header:Components_Header_Header_data__WEBPACK_IMPORTED_MODULE_0__.a}},"./app/layouts/Base/index.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/react/index.js");var prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),components_Header=__webpack_require__("./app/components/Header/Header.js").a,injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),Base_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js!./app/layouts/Base/Base.module.scss"),options={insert:"head",singleton:!1},Base_Base_module=(injectStylesIntoStyleTag_default()(Base_module.a,options),Base_module.a.locals||{}),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),Base_Base=function Base(Container){var displayName=Container.displayName,Wrapper=function Wrapper(props){var containerName=props.containerName,header=props.header,name=containerName||displayName,classes=classnames_default()(Base_Base_module.Root,[Base_Base_module["Root--"+name]]);return Object(jsx_runtime.jsxs)("div",{className:classes,children:[Object(jsx_runtime.jsx)(components_Header,Object.assign({},header)),Object(jsx_runtime.jsx)("div",{className:Base_Base_module.Document,role:"document",children:Object(jsx_runtime.jsx)("main",{className:Base_Base_module.Main,children:Object(jsx_runtime.jsx)(Container,Object.assign({},props))})})]})};return Wrapper.propTypes={containerName:prop_types_default.a.string,header:prop_types_default.a.object},Wrapper.defaultProps={containerName:"",header:{}},Wrapper};Base_Base.propTypes={displayName:prop_types_default.a.string},Base_Base.defaultProps={displayName:""};var layouts_Base_Base=Base_Base;__webpack_exports__.a=layouts_Base_Base},"./node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js!./app/components/Hero/Hero.module.scss":function(module,__webpack_exports__,__webpack_require__){"use strict";var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/cssWithMappingToString.js"),_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);___CSS_LOADER_EXPORT___.push([module.i,".Hero-module__Title-1zKgC{font-size:4rem;line-height:1.2;font-weight:800;font-family:Arial,sans-serif;color:#000}@media (min-width: 768px){.Hero-module__Title-1zKgC{font-size:5.6rem;line-height:1.14}}\n","",{version:3,sources:["webpack://./app/components/Hero/Hero.module.scss","webpack://./app/styles/includes/mixins.scss","webpack://./app/styles/includes/variables.scss"],names:[],mappings:"AAKA,0BCwHoB,cAAW,CACX,eAAa,CAKT,eC/Db,CD+Da,4BCxEV,CDwEU,UCrFH,CFvCpB,0BAFD,0BCwHoB,gBAAW,CACX,gBAAa,CDvHhC",sourcesContent:["@import 'Styles/includes';\n\n.Root {\n}\n\n.Title {\n    @include textstyle(title);\n}\n",'\n@mixin media($key) {\n    @if $key == \'d\' {\n        @content;\n    }\n    @else if map-has-key($breakpoints, $key) {\n        @media (min-width: map-get($breakpoints, $key)) {\n            @content;\n        }\n    } @else {\n        @error \'Unfortunately, no value could be retrieved from `#{$breakpoints}`. \'\n        + \'Please make sure it is defined in `$breakpoints` map.\';\n    }\n}\n\n@mixin media-max($key) {\n    @if $key == \'d\' {\n        @content;\n    }\n    @else if map-has-key($breakpoints, $key) {\n        @media (max-width: map-get($breakpoints, $key)-1) {\n            @content;\n        }\n    } @else {\n        @error \'Unfortunately, no value could be retrieved from `#{$breakpoints}`. \'\n        + \'Please make sure it is defined in `$breakpoints` map.\';\n    }\n}\n\n@mixin clearfix() {\n    &::after,\n    &::before {\n        content: \'\';\n        display: table;\n        clear: both;\n        width: 100%;\n    }\n}\n\n@mixin href-external() {\n    &:not([href^="mailto:"]):not([href^="tel:"]):not([href=""]):not([href^="#"]):not([href^="/"]):not([href^="http://example.se"]):not([href^="https://example.se"]):not([href*="localhost"]):not([href*="stage.example.se"]):not([href*="www.example.se"]):not([href*="beta.example.se"]) {\n        @content;\n    }\n}\n\n@mixin href-download() {\n    &[href$=".pdf"],\n    &[href$=".doc"],\n    &[href$=".docx"],\n    &[href$=".ppt"],\n    &[href$=".pptx"],\n    &[href$=".xls"],\n    &[href$=".xlsx"],\n    &[href$=".odt"],\n    &[href$=".eps"],\n    &[href$=".zip"] {\n        @content;\n    }\n}\n\n// For wrapping elements in the main grid\n// Usage: @include wrap;\n@mixin wrap($exclude: ()) {\n    @if not contains($exclude, d) {\n        margin-left: $gutter;\n        margin-right: $gutter;\n    }\n    @if not contains($exclude, SL) {\n        @include media(SL) {\n            max-width: (map-get($maxwidths, SL));\n            margin-left: auto;\n            margin-right: auto;\n        }\n    }\n    @if not contains($exclude, M) {\n        @include media(M) {\n            max-width: (map-get($maxwidths, M));\n            margin-left: auto;\n            margin-right: auto;\n        }\n    }\n    @if not contains($exclude, ML) {\n        @include media(ML) {\n            max-width: (map-get($maxwidths, ML));\n            margin-left: auto;\n            margin-right: auto;\n        }\n    }\n    @if not contains($exclude, L) {\n        @include media(L) {\n            max-width: (map-get($maxwidths, L));\n            margin-left: auto;\n            margin-right: auto;\n        }\n    }\n    @if not contains($exclude, XL) {\n        @include media(XL) {\n            max-width: (map-get($maxwidths, XL));\n            margin-left: auto;\n            margin-right: auto;\n        }\n    }\n    @if not contains($exclude, XXL) {\n        @include media(XXL) {\n            max-width: (map-get($maxwidths, XXL));\n            margin-left: auto;\n            margin-right: auto;\n        }\n    }\n}\n\n// For setting font-size and line-height on elements defined by variabels, including media queries\n// Usage: @include textstyle(h1);\n@mixin textstyle($key) {\n\n    // Loop through text map and set font-size and line-height for each media query\n    @if map-has-key($textstyles, $key) {\n        $map: map-get($textstyles, $key);\n\n        @each $media, $style in $map {\n            @include media($media) {\n                @if map-has-key($style, font-size) and map-has-key($style, line-height) {\n                    $font-size: map-get($style, font-size);\n                    $line-height: map-get($style, line-height);\n\n                    font-size: #{$font-size / 10}rem;\n                    line-height: #{round($line-height / $font-size * 100) / 100};\n                }\n\n                @each $param, $value in $style {\n                    @if $param != \'font-size\' and $param != \'line-height\' {\n                        #{$param}: $value;\n                    }\n                }\n            }\n        }\n    }\n}\n',"$assetsPath: 'assets/';\n\n$gutter: 16px;\n$gutterM: 24px; // Used for media query above M\n\n// Grid and site widths\n$maxwidths: (\n    // S: 320px,\n    SL: 500px - ($gutter * 2),\n    M: 720px,\n    ML: 808px,\n    L: 1140px,\n    XL: 1280px,\n    XXL: 1440px,\n    content: 618px,\n);\n$breakpoints: (\n    S: 375px,\n    SL: 500px, // Landscape\n    M: 768px,\n    ML: 1024px, // Landscape\n    L: 1280px,\n    XL: 1440px,\n    XXL: 1680px,\n);\n\n$transition: .3s ease-in-out;\n\n/** Color definintions from styleguide **/\n$grey: #9E9E9E;\n$grey-10: #F5F5F5;\n$grey-60: #757575;\n\n$purple: #673AB7;\n$purple-5: #EDE7F6;\n$purple-90: #311B92;\n\n$yellow: #FFEE58;\n\n$system-error: #D32F2F;\n$system-error-10: #FBEBEB;\n$system-success: #1DAC2C;\n\n/** Color definitions custom vars **/\n$bg-color: white;\n$base-color: black;\n$heading-color: black;\n$primary-color: $purple;\n$accent-color: $yellow;\n\n$link-color: $primary-color;\n$link-hover-color: darken($purple, 20%);\n\n$error-color: $system-error;\n$error-bg: $system-error-10;\n$success-color: $system-success;\n\n/** Text styles variables **/\n$base-font: #{Arial, sans-serif};\n$heading-font: #{Arial, sans-serif};\n\n$base-size: 1.6rem;\n\n$light: 300;\n$book: 400;\n$medium: 500;\n$semibold: 600;\n$bold: 700;\n$black: 800;\n$heavy: 900;\n\n// No other font sizes are needed\n// Font sizes and line heights as defined by styleguide in pixels\n$textstyles: (\n    title: (\n        d: (font-size: 40, line-height: 48, font-weight: $black, font-family: $heading-font, color: $heading-color),\n        M: (font-size: 56, line-height: 64),\n    ),\n    module-title: (\n        d: (font-size: 36, line-height: 40, font-weight: $black, font-family: $heading-font),\n        M: (font-size: 40, line-height: 48),\n    ),\n    card-title: (\n        d: (font-size: 30, line-height: 34, font-weight: $black, font-family: $heading-font),\n        M: (font-size: 32, line-height: 40),\n    ),\n    html-h2: (\n        d: (font-size: 32, line-height: 40, font-weight: $black, font-family: $heading-font),\n        M: (font-size: 34, line-height: 40),\n    ),\n    html-h3: (\n        d: (font-size: 24, line-height: 40, font-weight: $black, font-family: $heading-font),\n        M: (font-size: 28, line-height: 40),\n    ),\n    html-h4: (\n        d: (font-size: 22, line-height: 36, font-weight: $black, font-family: $heading-font),\n        M: (font-size: 24, line-height: 40),\n    ),\n    html-h5: (\n        d: (font-size: 18, line-height: 28, font-weight: $black, font-family: $heading-font),\n        M: (font-size: 20, line-height: 32),\n    ),\n    html-h6: (\n        d: (font-size: 16, line-height: 24, font-weight: $black, font-family: $heading-font),\n        M: (font-size: 18, line-height: 28),\n    ),\n    preamble: (\n        d: (font-size: 18, line-height: 28, font-weight: $book, letter-spacing: .2px),\n        M: (font-size: 20, line-height: 29),\n    ),\n    body: (\n        d: (font-size: 16, line-height: 24, font-weight: $book, letter-spacing: .2px),\n        M: (font-size: 18, line-height: 28),\n    ),\n    blockquote: (\n        d: (font-size: 20, line-height: 32, font-weight: $bold, letter-spacing: .2px),\n        M: (font-size: 24, line-height: 32),\n    ),\n    caption: (\n        d: (font-size: 11, line-height: 14, color: $grey-60),\n        M: (font-size: 12, line-height: 16),\n    ),\n);\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={Title:"Hero-module__Title-1zKgC"},__webpack_exports__.a=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js!./app/containers/HomePage/HomePage.module.scss":function(module,__webpack_exports__,__webpack_require__){"use strict";var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/cssWithMappingToString.js"),_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);___CSS_LOADER_EXPORT___.push([module.i,"","",{version:3,sources:[],names:[],mappings:"",sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={},__webpack_exports__.a=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js!./app/layouts/Base/Base.module.scss":function(module,__webpack_exports__,__webpack_require__){"use strict";var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/cssWithMappingToString.js"),_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);___CSS_LOADER_EXPORT___.push([module.i,".Base-module__Main-3WQ_W{display:block}\n","",{version:3,sources:["webpack://./app/layouts/Base/Base.module.scss"],names:[],mappings:"AAQA,yBACI,aAAc",sourcesContent:["@import 'Styles/includes';\n\n.Root {\n}\n\n.Document {\n}\n\n.Main {\n    display: block; /* For IE11 compatibility */\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={Main:"Base-module__Main-3WQ_W"},__webpack_exports__.a=___CSS_LOADER_EXPORT___}}]);