(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{"./.storybook/preview.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"parameters",(function(){return parameters}));var i18next=__webpack_require__("./node_modules/i18next/dist/esm/i18next.js"),context=__webpack_require__("./node_modules/react-i18next/dist/es/context.js"),sv={header:{search:"Sök"}};i18next.a.use(context.e).init({lng:"sv",fallbackLng:"sv",debug:!1,interpolation:{escapeValue:!1},resources:{sv:{translation:sv}}}),i18next.a.addResourceBundle("sv","translation",sv,!0,!0);i18next.a,__webpack_require__("./node_modules/velocity-animate/velocity.js"),__webpack_require__("./node_modules/velocity-animate/velocity.ui.js");var injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),storybook=__webpack_require__("./node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js!./.storybook/storybook.scss"),options={insert:"head",singleton:!1},parameters=(injectStylesIntoStyleTag_default()(storybook.a,options),storybook.a.locals,{layout:"fullscreen"})},"./app/_styleguide lazy recursive ^\\.\\/.*$ include: (?:\\/app\\/_styleguide(?:\\/(?!\\.)(?:(?:(?!(?:^|\\/)\\.).)*?)\\/|\\/|$)(?!\\.)(?=.)[^/]*?\\.stories\\.(mdx|tsx|ts|jsx|js))$":function(module,exports,__webpack_require__){var map={"./_styleguide/styleguide.stories":["./app/_styleguide/_styleguide/styleguide.stories.js",16],"./_styleguide/styleguide.stories.js":["./app/_styleguide/_styleguide/styleguide.stories.js",16],"./styleguide.stories":["./app/_styleguide/styleguide.stories.js",17],"./styleguide.stories.js":["./app/_styleguide/styleguide.stories.js",17]};function webpackAsyncContext(req){if(!__webpack_require__.o(map,req))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}));var ids=map[req],id=ids[0];return __webpack_require__.e(ids[1]).then((function(){return __webpack_require__(id)}))}webpackAsyncContext.keys=function webpackAsyncContextKeys(){return Object.keys(map)},webpackAsyncContext.id="./app/_styleguide lazy recursive ^\\.\\/.*$ include: (?:\\/app\\/_styleguide(?:\\/(?!\\.)(?:(?:(?!(?:^|\\/)\\.).)*?)\\/|\\/|$)(?!\\.)(?=.)[^/]*?\\.stories\\.(mdx|tsx|ts|jsx|js))$",module.exports=webpackAsyncContext},"./app/components lazy recursive ^\\.\\/.*$ include: (?:\\/app\\/components(?:\\/(?!\\.)(?:(?:(?!(?:^|\\/)\\.).)*?)\\/|\\/|$)(?!\\.)(?=.)[^/]*?\\.stories\\.(mdx|tsx|ts|jsx|js))$":function(module,exports,__webpack_require__){var map={"./Accordion/Accordion.stories":["./app/components/Accordion/Accordion.stories.js",0,4],"./Accordion/Accordion.stories.js":["./app/components/Accordion/Accordion.stories.js",0,4],"./Card/Card.stories":["./app/components/Card/Card.stories.js",1,6],"./Card/Card.stories.js":["./app/components/Card/Card.stories.js",1,6],"./Header/Header.stories":["./app/components/Header/Header.stories.js",1,0,2,7],"./Header/Header.stories.js":["./app/components/Header/Header.stories.js",1,0,2,7],"./Hero/Hero.stories":["./app/components/Hero/Hero.stories.js",8],"./Hero/Hero.stories.js":["./app/components/Hero/Hero.stories.js",8],"./Image/Image.stories":["./app/components/Image/Image.stories.js",1,10],"./Image/Image.stories.js":["./app/components/Image/Image.stories.js",1,10],"./Nav/Nav.stories":["./app/components/Nav/Nav.stories.js",1,0,2,11],"./Nav/Nav.stories.js":["./app/components/Nav/Nav.stories.js",1,0,2,11],"./NavigationDrawer/NavigationDrawer.stories":["./app/components/NavigationDrawer/NavigationDrawer.stories.js",1,0,2,12],"./NavigationDrawer/NavigationDrawer.stories.js":["./app/components/NavigationDrawer/NavigationDrawer.stories.js",1,0,2,12],"./Popup/Popup.stories":["./app/components/Popup/Popup.stories.js",0,14],"./Popup/Popup.stories.js":["./app/components/Popup/Popup.stories.js",0,14],"./RawHtml/RawHtml.stories":["./app/components/RawHtml/RawHtml.stories.js",15],"./RawHtml/RawHtml.stories.js":["./app/components/RawHtml/RawHtml.stories.js",15]};function webpackAsyncContext(req){if(!__webpack_require__.o(map,req))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}));var ids=map[req],id=ids[0];return Promise.all(ids.slice(1).map(__webpack_require__.e)).then((function(){return __webpack_require__(id)}))}webpackAsyncContext.keys=function webpackAsyncContextKeys(){return Object.keys(map)},webpackAsyncContext.id="./app/components lazy recursive ^\\.\\/.*$ include: (?:\\/app\\/components(?:\\/(?!\\.)(?:(?:(?!(?:^|\\/)\\.).)*?)\\/|\\/|$)(?!\\.)(?=.)[^/]*?\\.stories\\.(mdx|tsx|ts|jsx|js))$",module.exports=webpackAsyncContext},"./app/containers lazy recursive ^\\.\\/.*$ include: (?:\\/app\\/containers(?:\\/(?!\\.)(?:(?:(?!(?:^|\\/)\\.).)*?)\\/|\\/|$)(?!\\.)(?=.)[^/]*?\\.stories\\.(mdx|tsx|ts|jsx|js))$":function(module,exports,__webpack_require__){var map={"./ArticlePage/ArticlePage.stories":["./app/containers/ArticlePage/ArticlePage.stories.js",1,0,2,3,5],"./ArticlePage/ArticlePage.stories.js":["./app/containers/ArticlePage/ArticlePage.stories.js",1,0,2,3,5],"./HomePage/HomePage.stories":["./app/containers/HomePage/HomePage.stories.js",1,0,2,3,9],"./HomePage/HomePage.stories.js":["./app/containers/HomePage/HomePage.stories.js",1,0,2,3,9],"./NotFoundPage/NotFoundPage.stories":["./app/containers/NotFoundPage/NotFoundPage.stories.js",1,0,2,3,13],"./NotFoundPage/NotFoundPage.stories.js":["./app/containers/NotFoundPage/NotFoundPage.stories.js",1,0,2,3,13]};function webpackAsyncContext(req){if(!__webpack_require__.o(map,req))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}));var ids=map[req],id=ids[0];return Promise.all(ids.slice(1).map(__webpack_require__.e)).then((function(){return __webpack_require__(id)}))}webpackAsyncContext.keys=function webpackAsyncContextKeys(){return Object.keys(map)},webpackAsyncContext.id="./app/containers lazy recursive ^\\.\\/.*$ include: (?:\\/app\\/containers(?:\\/(?!\\.)(?:(?:(?!(?:^|\\/)\\.).)*?)\\/|\\/|$)(?!\\.)(?=.)[^/]*?\\.stories\\.(mdx|tsx|ts|jsx|js))$",module.exports=webpackAsyncContext},"./node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js!./.storybook/storybook.scss":function(module,__webpack_exports__,__webpack_require__){"use strict";var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/cssWithMappingToString.js"),_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);___CSS_LOADER_EXPORT___.push([module.i,"html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}body{line-height:1}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:before,blockquote:after,q:before,q:after{content:'';content:none}table{border-collapse:collapse;border-spacing:0}*{box-sizing:border-box;-webkit-tap-highlight-color:rgba(0,0,0,0)}html{font-size:62.5%}body{margin:0;color:#000;font-size:1.6rem;font-family:Arial,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;background:#fff}a{color:#3f0091;text-decoration:underline}a:hover{text-decoration:none}a,button,input,textarea,select{font-family:Arial,sans-serif}.no-scroll{overflow:hidden}.sr-only{position:absolute;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip:rect(0, 0, 0, 0);border:0}.styleguide{background:white}.styleguide__wrap{margin-left:16px;margin-right:16px;padding:40px 0 80px}@media (min-width: 500px){.styleguide__wrap{max-width:468px;margin-left:auto;margin-right:auto}}@media (min-width: 768px){.styleguide__wrap{max-width:720px;margin-left:auto;margin-right:auto}}@media (min-width: 1024px){.styleguide__wrap{max-width:808px;margin-left:auto;margin-right:auto}}@media (min-width: 1280px){.styleguide__wrap{max-width:1140px;margin-left:auto;margin-right:auto}}@media (min-width: 1440px){.styleguide__wrap{max-width:1280px;margin-left:auto;margin-right:auto}}@media (min-width: 1680px){.styleguide__wrap{max-width:1440px;margin-left:auto;margin-right:auto}}.styleguide h1{margin:40px 0;color:black}.styleguide h2{padding-bottom:8px;margin:60px 0 40px;color:black;border-bottom:1px solid black}.styleguide pre{font-family:'Courier new', monospace;margin:40px 0 8px}.styleguide .textstyle--title{font-size:4rem;line-height:1.2;font-weight:800;font-family:Arial,sans-serif;color:#000}@media (min-width: 768px){.styleguide .textstyle--title{font-size:5.6rem;line-height:1.14}}.styleguide .textstyle--module-title{font-size:3.6rem;line-height:1.11;font-weight:800;font-family:Arial,sans-serif}@media (min-width: 768px){.styleguide .textstyle--module-title{font-size:4rem;line-height:1.2}}.styleguide .textstyle--card-title{font-size:3rem;line-height:1.13;font-weight:800;font-family:Arial,sans-serif}@media (min-width: 768px){.styleguide .textstyle--card-title{font-size:3.2rem;line-height:1.25}}.styleguide .textstyle--html-h2{font-size:3.2rem;line-height:1.25;font-weight:800;font-family:Arial,sans-serif}@media (min-width: 768px){.styleguide .textstyle--html-h2{font-size:3.4rem;line-height:1.18}}.styleguide .textstyle--html-h3{font-size:2.4rem;line-height:1.67;font-weight:800;font-family:Arial,sans-serif}@media (min-width: 768px){.styleguide .textstyle--html-h3{font-size:2.8rem;line-height:1.43}}.styleguide .textstyle--html-h4{font-size:2.2rem;line-height:1.64;font-weight:800;font-family:Arial,sans-serif}@media (min-width: 768px){.styleguide .textstyle--html-h4{font-size:2.4rem;line-height:1.67}}.styleguide .textstyle--html-h5{font-size:1.8rem;line-height:1.56;font-weight:800;font-family:Arial,sans-serif}@media (min-width: 768px){.styleguide .textstyle--html-h5{font-size:2rem;line-height:1.6}}.styleguide .textstyle--html-h6{font-size:1.6rem;line-height:1.5;font-weight:800;font-family:Arial,sans-serif}@media (min-width: 768px){.styleguide .textstyle--html-h6{font-size:1.8rem;line-height:1.56}}.styleguide .textstyle--body{font-size:1.6rem;line-height:1.5;font-weight:400;letter-spacing:.2px}@media (min-width: 768px){.styleguide .textstyle--body{font-size:1.8rem;line-height:1.56}}.styleguide .textstyle--preamble{font-size:1.8rem;line-height:1.56;font-weight:400;letter-spacing:.2px}@media (min-width: 768px){.styleguide .textstyle--preamble{font-size:2rem;line-height:1.45}}.styleguide .color__box{display:block;padding:24px;color:black;font-weight:800}.styleguide .color__box--purple{color:white;background:#3f0091}.styleguide .color__box--grey{color:white;background:#ccc}.styleguide .color__box--grey-60{color:white;background:#4C4C4C}.styleguide .color__box--grey-10{background:#f2f2f2}#root::after,#root::before{content:'';display:table;clear:both;width:100%}\n","",{version:3,sources:["webpack://./app/styles/global/reset.scss","webpack://./app/styles/global/base.scss","webpack://./app/styles/includes/variables.scss","webpack://./app/_styleguide/styleguide.scss","webpack://./app/styles/includes/mixins.scss","webpack://./.storybook/storybook.scss"],names:[],mappings:"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",sourcesContent:["/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    font: inherit;\n    vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n    display: block;\n}\nbody {\n    line-height: 1;\n}\nol,\nul {\n    list-style: none;\n}\nblockquote,\nq {\n    quotes: none;\n}\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n    content: '';\n    content: none;\n}\ntable {\n    border-collapse: collapse;\n    border-spacing: 0;\n}\n","* {\n    box-sizing: border-box;\n    -webkit-tap-highlight-color: rgba(black, 0);\n}\n\nhtml {\n    font-size: 62.5%;\n}\n\nbody {\n    margin: 0;\n    color: $base-color;\n    font-size: $base-size;\n    font-family: $base-font;\n    -moz-osx-font-smoothing: grayscale;\n    -webkit-font-smoothing: antialiased;\n    background: $bg-color;\n}\n\na {\n    color: $primary-color;\n    text-decoration: underline;\n\n    &:hover {\n        text-decoration: none;\n    }\n}\n\na,\nbutton,\ninput,\ntextarea,\nselect {\n    font-family: $base-font;\n}\n\n.no-scroll {\n    overflow: hidden;\n}\n\n// Stolen with pride from bootstrap\n.sr-only {\n    position: absolute;\n    width: 1px;\n    height: 1px;\n    margin: -1px;\n    padding: 0;\n    overflow: hidden;\n    clip: rect(0,0,0,0);\n    border: 0;\n}\n","$assetsPath: 'assets/';\n\n$gutter: 16px;\n$gutterM: 24px; // Used for media query above M\n\n// Grid and site widths\n$maxwidths: (\n    // S: 320px,\n    SL: 500px - ($gutter * 2),\n    M: 720px,\n    ML: 808px,\n    L: 1140px,\n    XL: 1280px,\n    XXL: 1440px,\n    content: 618px,\n);\n$breakpoints: (\n    S: 375px,\n    SL: 500px, // Landscape\n    M: 768px,\n    ML: 1024px, // Landscape\n    L: 1280px,\n    XL: 1440px,\n    XXL: 1680px,\n);\n\n$transition: .3s ease-in-out;\n\n/** Color definintions from styleguide **/\n$grey: #ccc;\n$grey--10: #f2f2f2;\n$grey--60: #4C4C4C;\n\n$purple: #3f0091;\n\n$red: #d62220;\n\n$green: #30D2A9;\n\n/** Color definitions custom vars **/\n$bg-color: white;\n$base-color: black;\n$heading-color: black;\n$primary-color: $purple;\n$accent-color: $grey;\n$success-color: $green;\n$link-color: $primary-color;\n$link-hover-color: darken($purple, 20%);\n$error-color: $red;\n\n/** Text styles variables **/\n$base-font: #{Arial, sans-serif};\n$heading-font: #{Arial, sans-serif};\n\n$base-size: 1.6rem;\n\n$light: 300;\n$book: 400;\n$medium: 500;\n$semibold: 600;\n$bold: 700;\n$black: 800;\n$heavy: 900;\n\n// No other font sizes are needed\n// Font sizes and line heights as defined by styleguide in pixels\n$textstyles: (\n    title: (\n        d: (font-size: 40, line-height: 48, font-weight: $black, font-family: $heading-font, color: $heading-color),\n        M: (font-size: 56, line-height: 64),\n    ),\n    module-title: (\n        d: (font-size: 36, line-height: 40, font-weight: $black, font-family: $heading-font),\n        M: (font-size: 40, line-height: 48),\n    ),\n    card-title: (\n        d: (font-size: 30, line-height: 34, font-weight: $black, font-family: $heading-font),\n        M: (font-size: 32, line-height: 40),\n    ),\n    html-h2: (\n        d: (font-size: 32, line-height: 40, font-weight: $black, font-family: $heading-font),\n        M: (font-size: 34, line-height: 40),\n    ),\n    html-h3: (\n        d: (font-size: 24, line-height: 40, font-weight: $black, font-family: $heading-font),\n        M: (font-size: 28, line-height: 40),\n    ),\n    html-h4: (\n        d: (font-size: 22, line-height: 36, font-weight: $black, font-family: $heading-font),\n        M: (font-size: 24, line-height: 40),\n    ),\n    html-h5: (\n        d: (font-size: 18, line-height: 28, font-weight: $black, font-family: $heading-font),\n        M: (font-size: 20, line-height: 32),\n    ),\n    html-h6: (\n        d: (font-size: 16, line-height: 24, font-weight: $black, font-family: $heading-font),\n        M: (font-size: 18, line-height: 28),\n    ),\n    preamble: (\n        d: (font-size: 18, line-height: 28, font-weight: $book, letter-spacing: .2px),\n        M: (font-size: 20, line-height: 29),\n    ),\n    body: (\n        d: (font-size: 16, line-height: 24, font-weight: $book, letter-spacing: .2px),\n        M: (font-size: 18, line-height: 28),\n    ),\n    blockquote: (\n        d: (font-size: 20, line-height: 32, font-weight: $bold, letter-spacing: .2px),\n        M: (font-size: 24, line-height: 32),\n    ),\n    caption: (\n        d: (font-size: 11, line-height: 14, color: $grey--60),\n        M: (font-size: 12, line-height: 16),\n    ),\n);\n","/* Styleguide is only available in storybook */\n\n.styleguide {\n    background: white;\n\n    &__wrap {\n        @include wrap;\n\n        padding: 40px 0 80px;\n    }\n\n    h1 {\n        @include textstyle(h1);\n\n        margin: 40px 0;\n        color: black;\n    }\n\n    h2 {\n        @include textstyle(h2);\n\n        padding-bottom: 8px;\n        margin: 60px 0 40px;\n        color: black;\n        border-bottom: 1px solid black;\n    }\n\n    pre {\n        font-family: 'Courier new', monospace;\n        margin: 40px 0 8px;\n    }\n\n    .textstyle {\n        &--title {\n            @include textstyle(title);\n        }\n        &--module-title {\n            @include textstyle(module-title);\n        }\n        &--card-title {\n            @include textstyle(card-title);\n        }\n        &--html-h2 {\n            @include textstyle(html-h2);\n        }\n        &--html-h3 {\n            @include textstyle(html-h3);\n        }\n        &--html-h4 {\n            @include textstyle(html-h4);\n        }\n        &--html-h5 {\n            @include textstyle(html-h5);\n        }\n        &--html-h6 {\n            @include textstyle(html-h6);\n        }\n        &--body {\n            @include textstyle(body);\n        }\n        &--preamble {\n            @include textstyle(preamble);\n        }\n    }\n\n    .color {\n        &__box {\n            display: block;\n            padding: 24px;\n            color: black;\n            font-weight: $black;\n\n            &--purple {\n                color: white;\n                background: $purple;\n            }\n\n            &--grey {\n                color: white;\n                background: $grey;\n            }\n\n            &--grey-60 {\n                color: white;\n                background: $grey--60;\n            }\n\n            &--grey-10 {\n                background: $grey--10;\n            }\n        }\n    }\n}\n",'\n@mixin media($key) {\n    @if $key == \'d\' {\n        @content;\n    }\n    @else if map-has-key($breakpoints, $key) {\n        @media (min-width: map-get($breakpoints, $key)) {\n            @content;\n        }\n    } @else {\n        @error \'Unfortunately, no value could be retrieved from `#{$breakpoints}`. \'\n        + \'Please make sure it is defined in `$breakpoints` map.\';\n    }\n}\n\n@mixin media-max($key) {\n    @if $key == \'d\' {\n        @content;\n    }\n    @else if map-has-key($breakpoints, $key) {\n        @media (max-width: map-get($breakpoints, $key)-1) {\n            @content;\n        }\n    } @else {\n        @error \'Unfortunately, no value could be retrieved from `#{$breakpoints}`. \'\n        + \'Please make sure it is defined in `$breakpoints` map.\';\n    }\n}\n\n@mixin clearfix() {\n    &::after,\n    &::before {\n        content: \'\';\n        display: table;\n        clear: both;\n        width: 100%;\n    }\n}\n\n@mixin href-external() {\n    &:not([href^="mailto:"]):not([href^="tel:"]):not([href=""]):not([href^="#"]):not([href^="/"]):not([href^="http://example.se"]):not([href^="https://example.se"]):not([href*="localhost"]):not([href*="stage.example.se"]):not([href*="www.example.se"]):not([href*="beta.example.se"]) {\n        @content;\n    }\n}\n\n@mixin href-download() {\n    &[href$=".pdf"],\n    &[href$=".doc"],\n    &[href$=".docx"],\n    &[href$=".ppt"],\n    &[href$=".pptx"],\n    &[href$=".xls"],\n    &[href$=".xlsx"],\n    &[href$=".odt"],\n    &[href$=".eps"],\n    &[href$=".zip"] {\n        @content;\n    }\n}\n\n// For wrapping elements in the main grid\n// Usage: @include wrap;\n@mixin wrap($exclude: ()) {\n    @if not contains($exclude, d) {\n        margin-left: $gutter;\n        margin-right: $gutter;\n    }\n    @if not contains($exclude, SL) {\n        @include media(SL) {\n            max-width: (map-get($maxwidths, SL));\n            margin-left: auto;\n            margin-right: auto;\n        }\n    }\n    @if not contains($exclude, M) {\n        @include media(M) {\n            max-width: (map-get($maxwidths, M));\n            margin-left: auto;\n            margin-right: auto;\n        }\n    }\n    @if not contains($exclude, ML) {\n        @include media(ML) {\n            max-width: (map-get($maxwidths, ML));\n            margin-left: auto;\n            margin-right: auto;\n        }\n    }\n    @if not contains($exclude, L) {\n        @include media(L) {\n            max-width: (map-get($maxwidths, L));\n            margin-left: auto;\n            margin-right: auto;\n        }\n    }\n    @if not contains($exclude, XL) {\n        @include media(XL) {\n            max-width: (map-get($maxwidths, XL));\n            margin-left: auto;\n            margin-right: auto;\n        }\n    }\n    @if not contains($exclude, XXL) {\n        @include media(XXL) {\n            max-width: (map-get($maxwidths, XXL));\n            margin-left: auto;\n            margin-right: auto;\n        }\n    }\n}\n\n// For setting font-size and line-height on elements defined by variabels, including media queries\n// Usage: @include textstyle(h1);\n@mixin textstyle($key) {\n\n    // Loop through text map and set font-size and line-height for each media query\n    @if map-has-key($textstyles, $key) {\n        $map: map-get($textstyles, $key);\n\n        @each $media, $style in $map {\n            @include media($media) {\n                @if map-has-key($style, font-size) and map-has-key($style, line-height) {\n                    $font-size: map-get($style, font-size);\n                    $line-height: map-get($style, line-height);\n\n                    font-size: #{$font-size / 10}rem;\n                    line-height: #{round($line-height / $font-size * 100) / 100};\n                }\n\n                @each $param, $value in $style {\n                    @if $param != \'font-size\' and $param != \'line-height\' {\n                        #{$param}: $value;\n                    }\n                }\n            }\n        }\n    }\n}\n',"@import 'Styles/index';\n@import '_styleguide/styleguide';\n\n#root {\n    @include clearfix;\n}"],sourceRoot:""}]),__webpack_exports__.a=___CSS_LOADER_EXPORT___},"./storybook-config-entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__("./node_modules/unfetch/dist/unfetch.module.js");var global_window=__webpack_require__("./node_modules/global/window.js"),window_default=__webpack_require__.n(global_window),composeConfigs=__webpack_require__("./node_modules/@storybook/preview-web/dist/esm/composeConfigs.js"),PreviewWeb=__webpack_require__("./node_modules/@storybook/preview-web/dist/esm/PreviewWeb.js"),ClientApi=__webpack_require__("./node_modules/@storybook/client-api/dist/esm/ClientApi.js"),esm=__webpack_require__("./node_modules/@storybook/addons/dist/esm/index.js"),dist_esm=__webpack_require__("./node_modules/@storybook/channel-postmessage/dist/esm/index.js"),channel_websocket_dist_esm=__webpack_require__("./node_modules/@storybook/channel-websocket/dist/esm/index.js");__webpack_require__("./node_modules/core-js/modules/es.promise.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.regexp.exec.js"),__webpack_require__("./node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js");function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg),value=info.value}catch(error){return void reject(error)}info.done?resolve(value):Promise.resolve(value).then(_next,_throw)}function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise((function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}_next(void 0)}))}}var importers=[function(){var _ref=_asyncToGenerator(regeneratorRuntime.mark((function _callee(path){var pathRemainder;return regeneratorRuntime.wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:if(/^\.[\\/](?:app\/_styleguide(?:\/(?!\.)(?:(?:(?!(?:^|\/)\.).)*?)\/|\/|$)(?!\.)(?=.)[^/]*?\.stories\.(mdx|tsx|ts|jsx|js))$/.exec(path)){_context.next=2;break}return _context.abrupt("return");case 2:return pathRemainder=path.substring(18),_context.abrupt("return",__webpack_require__("./app/_styleguide lazy recursive ^\\.\\/.*$ include: (?:\\/app\\/_styleguide(?:\\/(?!\\.)(?:(?:(?!(?:^|\\/)\\.).)*?)\\/|\\/|$)(?!\\.)(?=.)[^/]*?\\.stories\\.(mdx|tsx|ts|jsx|js))$")("./"+pathRemainder));case 4:case"end":return _context.stop()}}),_callee)})));return function(_x){return _ref.apply(this,arguments)}}(),function(){var _ref2=_asyncToGenerator(regeneratorRuntime.mark((function _callee2(path){var pathRemainder;return regeneratorRuntime.wrap((function _callee2$(_context2){for(;;)switch(_context2.prev=_context2.next){case 0:if(/^\.[\\/](?:app\/components(?:\/(?!\.)(?:(?:(?!(?:^|\/)\.).)*?)\/|\/|$)(?!\.)(?=.)[^/]*?\.stories\.(mdx|tsx|ts|jsx|js))$/.exec(path)){_context2.next=2;break}return _context2.abrupt("return");case 2:return pathRemainder=path.substring(17),_context2.abrupt("return",__webpack_require__("./app/components lazy recursive ^\\.\\/.*$ include: (?:\\/app\\/components(?:\\/(?!\\.)(?:(?:(?!(?:^|\\/)\\.).)*?)\\/|\\/|$)(?!\\.)(?=.)[^/]*?\\.stories\\.(mdx|tsx|ts|jsx|js))$")("./"+pathRemainder));case 4:case"end":return _context2.stop()}}),_callee2)})));return function(_x2){return _ref2.apply(this,arguments)}}(),function(){var _ref3=_asyncToGenerator(regeneratorRuntime.mark((function _callee3(path){var pathRemainder;return regeneratorRuntime.wrap((function _callee3$(_context3){for(;;)switch(_context3.prev=_context3.next){case 0:if(/^\.[\\/](?:app\/containers(?:\/(?!\.)(?:(?:(?!(?:^|\/)\.).)*?)\/|\/|$)(?!\.)(?=.)[^/]*?\.stories\.(mdx|tsx|ts|jsx|js))$/.exec(path)){_context3.next=2;break}return _context3.abrupt("return");case 2:return pathRemainder=path.substring(17),_context3.abrupt("return",__webpack_require__("./app/containers lazy recursive ^\\.\\/.*$ include: (?:\\/app\\/containers(?:\\/(?!\\.)(?:(?:(?!(?:^|\\/)\\.).)*?)\\/|\\/|$)(?!\\.)(?=.)[^/]*?\\.stories\\.(mdx|tsx|ts|jsx|js))$")("./"+pathRemainder));case 4:case"end":return _context3.stop()}}),_callee3)})));return function(_x3){return _ref3.apply(this,arguments)}}()];function _importFn(){return(_importFn=_asyncToGenerator(regeneratorRuntime.mark((function _callee4(path){var i,moduleExports;return regeneratorRuntime.wrap((function _callee4$(_context4){for(;;)switch(_context4.prev=_context4.next){case 0:i=0;case 1:if(!(i<importers.length)){_context4.next=10;break}return _context4.next=4,importers[i](path);case 4:if(!(moduleExports=_context4.sent)){_context4.next=7;break}return _context4.abrupt("return",moduleExports);case 7:i++,_context4.next=1;break;case 10:case"end":return _context4.stop()}}),_callee4)})))).apply(this,arguments)}var SERVER_CHANNEL_URL=window_default.a.SERVER_CHANNEL_URL,channel=Object(dist_esm.a)({page:"preview"});if(esm.a.setChannel(channel),SERVER_CHANNEL_URL){var serverChannel=Object(channel_websocket_dist_esm.a)({url:SERVER_CHANNEL_URL});esm.a.setServerChannel(serverChannel),window.__STORYBOOK_SERVER_CHANNEL__=serverChannel}var preview=new PreviewWeb.a;window.__STORYBOOK_PREVIEW__=preview,window.__STORYBOOK_STORY_STORE__=preview.storyStore,window.__STORYBOOK_ADDONS_CHANNEL__=channel,window.__STORYBOOK_CLIENT_API__=new ClientApi.a({storyStore:preview.storyStore}),preview.initialize({importFn:function importFn(_x4){return _importFn.apply(this,arguments)},getProjectAnnotations:function getProjectAnnotations(){return Object(composeConfigs.a)([__webpack_require__("./node_modules/@storybook/addon-docs/dist/esm/frameworks/common/config.js"),__webpack_require__("./node_modules/@storybook/addon-docs/dist/esm/frameworks/react/config.js"),__webpack_require__("./node_modules/@storybook/react/dist/esm/client/preview/config.js"),__webpack_require__("./node_modules/@storybook/addon-actions/dist/esm/preset/addDecorator.js"),__webpack_require__("./node_modules/@storybook/addon-actions/dist/esm/preset/addArgs.js"),__webpack_require__("./node_modules/@storybook/addon-backgrounds/dist/esm/preset/addDecorator.js"),__webpack_require__("./node_modules/@storybook/addon-backgrounds/dist/esm/preset/addParameter.js"),__webpack_require__("./node_modules/@storybook/addon-measure/dist/esm/preset/addDecorator.js"),__webpack_require__("./node_modules/@storybook/addon-outline/dist/esm/preset/addDecorator.js"),__webpack_require__("./node_modules/@storybook/addon-a11y/dist/esm/a11yRunner.js"),__webpack_require__("./node_modules/@storybook/addon-a11y/dist/esm/a11yHighlight.js"),__webpack_require__("./.storybook/preview.js")])}})},0:function(module,exports,__webpack_require__){__webpack_require__("./node_modules/@storybook/core-client/dist/esm/globals/polyfills.js"),__webpack_require__("./node_modules/@storybook/core-client/dist/esm/globals/globals.js"),module.exports=__webpack_require__("./storybook-config-entry.js")},1:function(module,exports){},2:function(module,exports){}},[[0,23,24]]]);