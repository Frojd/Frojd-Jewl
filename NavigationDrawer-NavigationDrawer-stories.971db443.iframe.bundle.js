(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"./app/components/Nav/Nav.data.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"b",(function(){return withChildren})),__webpack_exports__.a={id:"horizontal",label:"Horizontal menu",items:[{id:"horizontal-1",title:"Länktext",url:"#"},{id:"horizontal-2",title:"Länktext &#038; Länktext",url:"#",isActive:!0},{id:"horizontal-3",title:"Extern länk",url:"https://test.se"}]};var withChildren={id:"vertical",label:"Vertical hierarchy menu",currentId:"vertical-231",items:[{id:"vertical-1",title:"Länktext",url:"#"},{id:"vertical-2",title:"Länktext &#038; Länktext",url:"#",isParentActive:!0,children:[{id:"vertical-21",title:"Länktext",url:"#"},{id:"vertical-22",title:"Länktext &#038; Länktext",url:"#"},{id:"vertical-23",title:"Extern länk",url:"https://test.se",isParentActive:!0,children:[{id:"vertical-231",title:"Länktext",url:"#",isParentActive:!0,children:[{id:"vertical-2311",title:"Länktext",url:"#"},{id:"vertical-2312",title:"Länktext &#038; Länktext",url:"#",isActive:!0},{id:"vertical-2313",title:"Extern länk",url:"https://test.se"}]},{id:"vertical-232",title:"Länktext &#038; Länktext",url:"#"},{id:"vertical-233",title:"Extern länk",url:"https://test.se"}]}]},{id:"vertical-3",title:"Extern länk",url:"https://test.se",children:[{id:"vertical-31",title:"Länktext",url:"#"},{id:"vertical-32",title:"Länktext &#038; Länktext",url:"#"},{id:"vertical-33",title:"Extern länk",url:"https://test.se"}]}],orientation:"Vertical"}},"./app/components/Nav/index.js":function(module,__webpack_exports__,__webpack_require__){"use strict";var _Nav__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./app/components/Nav/Nav.js");__webpack_exports__.a=_Nav__WEBPACK_IMPORTED_MODULE_0__.a},"./app/components/NavigationDrawer/NavigationDrawer.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("./node_modules/core-js/modules/es.function.name.js"),__webpack_require__("./node_modules/core-js/modules/es.array.from.js");var react=__webpack_require__("./node_modules/react/index.js"),prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),velocity_react=__webpack_require__("./node_modules/velocity-react/index.js"),useTranslation=__webpack_require__("./node_modules/react-i18next/dist/es/useTranslation.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),NavigationDrawer_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js!./app/components/NavigationDrawer/NavigationDrawer.module.scss"),options={insert:"head",singleton:!1},NavigationDrawer_NavigationDrawer_module=(injectStylesIntoStyleTag_default()(NavigationDrawer_module.a,options),NavigationDrawer_module.a.locals||{}),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null==_i)return;var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var NavigationDrawer_NavigationDrawer=function NavigationDrawer(_ref){var _classNames,children=_ref.children,open=_ref.open,id=_ref.id,t=Object(useTranslation.a)().t,_useState2=_slicedToArray(Object(react.useState)(open),2),expanded=_useState2[0],setExpanded=_useState2[1],clickHandler=function clickHandler(){return setExpanded(!expanded)},classes=classnames_default()(NavigationDrawer_NavigationDrawer_module.Root,((_classNames={})[NavigationDrawer_NavigationDrawer_module.RootExpanded]=expanded,_classNames)),buttonId=id+"-button",buttonText=t("menu.button"),buttonTextClose=t("menu.closeButton"),animation={slideIn:velocity_react.velocityHelpers.registerEffect("slideIn",{defaultDuration:500,calls:[[{right:"0px"}]]}),slideOut:velocity_react.velocityHelpers.registerEffect("slideOut",{defaultDuration:500,calls:[[{right:"-300px"}]]})};return Object(jsx_runtime.jsxs)("div",{className:classes,children:[Object(jsx_runtime.jsx)("button",{className:NavigationDrawer_NavigationDrawer_module.Button,type:"button",onClick:clickHandler,"aria-expanded":expanded,"aria-controls":id,id:buttonId,children:Object(jsx_runtime.jsx)("span",{className:"sr-only",children:buttonText})}),Object(jsx_runtime.jsx)(velocity_react.VelocityComponent,{className:NavigationDrawer_NavigationDrawer_module.Navigation,animation:expanded?animation.slideIn:animation.slideOut,children:Object(jsx_runtime.jsxs)("div",{className:NavigationDrawer_NavigationDrawer_module.Content,"aria-hidden":!expanded,"aria-describedby":buttonId,id:id,children:[Object(jsx_runtime.jsx)("button",{className:NavigationDrawer_NavigationDrawer_module.ButtonClose,type:"button",onClick:clickHandler,"aria-controls":id,children:Object(jsx_runtime.jsx)("span",{className:"sr-only",children:buttonTextClose})}),children]})})]})};NavigationDrawer_NavigationDrawer.displayName="NavigationDrawer",NavigationDrawer_NavigationDrawer.propTypes={children:prop_types_default.a.node.isRequired,open:prop_types_default.a.bool,id:prop_types_default.a.string},NavigationDrawer_NavigationDrawer.defaultProps={children:"",open:!1,id:"navigation-drawer"},NavigationDrawer_NavigationDrawer.__docgenInfo={description:"",methods:[],displayName:"NavigationDrawer",props:{children:{defaultValue:{value:"''",computed:!1},description:"",type:{name:"node"},required:!1},open:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},id:{defaultValue:{value:"'navigation-drawer'",computed:!1},description:"",type:{name:"string"},required:!1}}};__webpack_exports__.a=NavigationDrawer_NavigationDrawer;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/components/NavigationDrawer/NavigationDrawer.js"]={name:"NavigationDrawer",docgenInfo:NavigationDrawer_NavigationDrawer.__docgenInfo,path:"app/components/NavigationDrawer/NavigationDrawer.js"})},"./app/components/NavigationDrawer/NavigationDrawer.stories.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default})),__webpack_require__.d(__webpack_exports__,"WithNav",(function(){return WithNav}));__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/react/index.js");var NavigationDrawer=__webpack_require__("./app/components/NavigationDrawer/NavigationDrawer.js"),Nav=__webpack_require__("./app/components/Nav/index.js"),Nav_data=__webpack_require__("./app/components/Nav/Nav.data.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),withNav={children:Object(jsx_runtime.jsx)(Nav.a,Object.assign({},Nav_data.a,{label:"Mobile menu",orientation:"Vertical",modifier:"Mobile"}))},NavigationDrawer_stories_Template=(__webpack_exports__.default={component:NavigationDrawer.a,parameters:{docs:{description:{component:"A drawer that slides in from the right, used for hamburger menus.\n\n## Props\n- __Richtext*__ - The html content of the navigation drawer, change to pass in a component instead if needed\n- **Open** - A boolean where the default state of the navigation drawer should be expanded from start or not\n- **Id** - Add id attribute to navigation drawer for accessibility, should be unique\n\n## Requirements\n### Packages\n- **velocity-react** - This example uses velocity react to transition the expandable area with an animation\n"}}},argTypes:{children:{control:{type:null}}}},function Template(args){return Object(jsx_runtime.jsx)(NavigationDrawer.a,Object.assign({},args))});NavigationDrawer_stories_Template.displayName="Template";var Default=NavigationDrawer_stories_Template.bind({});Default.args=Object.assign({},{});var WithNav=NavigationDrawer_stories_Template.bind({});WithNav.args=Object.assign({},withNav),Default.parameters=Object.assign({storySource:{source:"(args) => <NavigationDrawer {...args} />"}},Default.parameters),WithNav.parameters=Object.assign({storySource:{source:"(args) => <NavigationDrawer {...args} />"}},WithNav.parameters)},"./node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js!./app/components/NavigationDrawer/NavigationDrawer.module.scss":function(module,__webpack_exports__,__webpack_require__){"use strict";var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/cssWithMappingToString.js"),_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);___CSS_LOADER_EXPORT___.push([module.i,".NavigationDrawer__Root{position:relative}.NavigationDrawer__Button{position:relative;width:42px;height:42px;border:10px solid #673AB7;border-radius:0;background:white;box-shadow:none;cursor:pointer}.NavigationDrawer__Button::before,.NavigationDrawer__Button::after{content:'';position:absolute;top:4px;left:0;width:100%;height:5px;background:#673AB7}.NavigationDrawer__Button::after{top:13px}.NavigationDrawer__ButtonClose{position:relative;width:42px;height:42px;border:10px solid #673AB7;border-radius:0;background:transparent;box-shadow:none;cursor:pointer;margin-right:8px}.NavigationDrawer__ButtonClose::before,.NavigationDrawer__ButtonClose::after{content:'';position:absolute;left:0;width:100%;height:3px;background:white;top:4px}.NavigationDrawer__ButtonClose:before{transform:rotate(-45deg)}.NavigationDrawer__ButtonClose::after{transform:rotate(45deg)}.NavigationDrawer__Content{position:fixed;top:0;right:0;width:300px;height:100vh;padding:32px 0;color:white;text-align:right;background:#673AB7;overflow:auto;z-index:1}\n","",{version:3,sources:["webpack://./app/components/NavigationDrawer/NavigationDrawer.module.scss","webpack://./app/styles/includes/variables.scss"],names:[],mappings:"AAEA,wBACI,iBAAkB,CACrB,0BAGG,iBAAkB,CAClB,UAAW,CACX,WAAY,CACZ,yBC8BY,CD7BZ,eAAgB,CAChB,gBAAiB,CACjB,eAAgB,CAChB,cAAe,CARnB,mEAYQ,UAAW,CACX,iBAAkB,CAClB,OAAQ,CACR,MAAO,CACP,UAAW,CACX,UAAW,CACX,kBCgBQ,CDlChB,iCAsBQ,QAAS,CACZ,+BAID,iBAAkB,CAClB,UAAW,CACX,WAAY,CACZ,yBCIY,CDHZ,eAAgB,CAChB,sBAAuB,CACvB,eAAgB,CAChB,cAAe,CACf,gBAAiB,CATrB,6EAaQ,UAAW,CACX,iBAAkB,CAClB,MAAO,CACP,UAAW,CACX,UAAW,CACX,gBAAiB,CACjB,OAAQ,CAnBhB,sCAuBQ,wBAAyB,CAvBjC,sCA2BQ,uBAAwB,CAC3B,2BAID,cAAe,CACf,KAAM,CACN,OAAQ,CACR,WAAY,CACZ,YAAa,CACb,cAAe,CACf,WAAY,CACZ,gBAAiB,CACjB,kBChCY,CDiCZ,aAAc,CACd,SAAU",sourcesContent:["@import 'Styles/includes';\n\n.Root {\n    position: relative;\n}\n\n.Button {\n    position: relative;\n    width: 42px;\n    height: 42px;\n    border: 10px solid $primary-color;\n    border-radius: 0;\n    background: white;\n    box-shadow: none;\n    cursor: pointer;\n\n    &::before,\n    &::after {\n        content: '';\n        position: absolute;\n        top: 4px;\n        left: 0;\n        width: 100%;\n        height: 5px;\n        background: $primary-color;\n    }\n\n    &::after {\n        top: 13px;\n    }\n}\n\n.ButtonClose {\n    position: relative;\n    width: 42px;\n    height: 42px;\n    border: 10px solid $primary-color;\n    border-radius: 0;\n    background: transparent;\n    box-shadow: none;\n    cursor: pointer;\n    margin-right: 8px; \n\n    &::before,\n    &::after {\n        content: '';\n        position: absolute;\n        left: 0;\n        width: 100%;\n        height: 3px;\n        background: white;\n        top: 4px;\n    }\n\n    &:before {\n        transform: rotate(-45deg);\n    }\n\n    &::after {\n        transform: rotate(45deg);\n    }\n}\n\n.Content {\n    position: fixed;\n    top: 0;\n    right: 0;\n    width: 300px;\n    height: 100vh;\n    padding: 32px 0;\n    color: white;\n    text-align: right;\n    background: $primary-color;\n    overflow: auto;\n    z-index: 1;\n}\n\n","$assetsPath: 'Assets/';\n\n$gutter: 16px;\n$gutterM: 24px; // Used for media query above M\n\n// Grid and site widths\n$maxwidths: (\n    // S: 320px,\n    SL: 500px - ($gutter * 2),\n    M: 720px,\n    ML: 808px,\n    L: 1140px,\n    XL: 1280px,\n    XXL: 1440px,\n    content: 618px,\n);\n$breakpoints: (\n    S: 375px,\n    SL: 500px, // Landscape\n    M: 768px,\n    ML: 1024px, // Landscape\n    L: 1280px,\n    XL: 1440px,\n    XXL: 1680px,\n);\n\n$transition: .3s ease-in-out;\n\n/** Color definintions from styleguide **/\n$grey: #9E9E9E;\n$grey-5: #FAFAFA;\n$grey-10: #F5F5F5;\n$grey-20: #EEE;\n$grey-30: #E0E0E0;\n$grey-40: #BDBDBD;\n$grey-60: #757575;\n$grey-70: #616161;\n$grey-80: #424242;\n$grey-90: #212121;\n\n$purple: #673AB7;\n$purple-20: #EDE7F6;\n$purple-60: #B39DDB;\n$purple-90: #4527a0;\n\n$yellow: #FFEE58;\n$yellow-20: #FFFDE7;\n$yellow-40: #FFF59d;\n$yellow-60: #FDD835;\n\n$pink: #E91E63;\n\n$system-error: #D32F2F;\n$system-error-10: #FBEBEB;\n$system-success: #1DAC2C;\n\n/** Color definitions custom vars **/\n$bg-color: white;\n$base-color: $grey-90;\n$primary-color: $purple;\n$accent-color: $yellow;\n\n$link-color: $primary-color;\n$link-hover-color: darken($purple, 20%);\n\n$error-color: $system-error;\n$error-bg: $system-error-10;\n$success-color: $system-success;\n\n/** Text styles variables **/\n$base-font: #{Roboto, Arial, sans-serif};\n$heading-font: #{Roboto, Arial, sans-serif};\n\n$base-size: 1.6rem;\n\n// Match names of weights here with the weights of the fonts in fonts.scss\n$light: 300;\n$regular: 400;\n$medium: 500;\n$bold: 700;\n\n// No other font sizes are needed\n// Font sizes and line heights as defined by styleguide in pixels\n$textstyles: (\n    page-title: (\n        d: (font-size: 44, line-height: 59.8, font-weight: $bold, font-family: $heading-font),\n        M: (font-size: 64, line-height: 84.5),\n    ),\n    module-title: (\n        d: (font-size: 34, line-height: 47.6, font-weight: $bold, font-family: $heading-font),\n        M: (font-size: 44, line-height: 60.3),\n    ),\n    card-title: (\n        d: (font-size: 34, line-height: 36.5, font-weight: $bold, font-family: $heading-font),\n        M: (font-size: 26, line-height: 39.5),\n    ),\n    accordion-title: (\n        d: (font-size: 16, line-height: 23.8, font-weight: $bold, font-family: $heading-font),\n        M: (font-size: 22, line-height: 28.4),\n    ),\n    footer-title: (\n        d: (font-size: 14, line-height: 1.5, font-weight: $medium, font-family: $heading-font),\n    ),\n    richtext-h2: (\n        d: (font-size: 36, line-height: 48.2, font-weight: $bold, font-family: $heading-font),\n        M: (font-size: 40, line-height: 55.6),\n    ),\n    richtext-h3: (\n        d: (font-size: 28, line-height: 39.8, font-weight: $bold, font-family: $heading-font),\n        M: (font-size: 32, line-height: 45.1),\n    ),\n    richtext-h4: (\n        d: (font-size: 24, line-height: 36.5, font-weight: $bold, font-family: $heading-font),\n        M: (font-size: 26, line-height: 39.5),\n    ),\n    richtext-h5: (\n        d: (font-size: 20, line-height: 28.4, font-weight: $bold, font-family: $heading-font),\n        M: (font-size: 22, line-height: 32.6),\n    ),\n    richtext-h6: (\n        d: (font-size: 16, line-height: 23.7, font-weight: $bold, font-family: $heading-font),\n        M: (font-size: 18, line-height: 26.6),\n    ),\n    body: (\n        d: (font-size: 16, line-height: 23.5),  // Also card-text\n    ),\n    preamble: (\n        d: (font-size: 18, line-height: 27.4, font-weight: $light),\n        M: (font-size: 22, line-height: 32.6),\n    ),\n    paragraph: (\n        d: (font-size: 16, line-height: 23.5),\n        M: (font-size: 18, line-height: 27.7),\n    ),\n    quote: (\n        d: (font-size: 20, line-height: 39.4, font-weight: $bold, font-family: $heading-font),\n        M: (font-size: 26, line-height: 39.5),\n    ),\n    cite: (\n        d: (font-size: 14, line-height: 23.5),  // Quote name\n        M: (font-size: 18, line-height: 26.5),\n    ),\n    caption: (\n        d: (font-size: 12, line-height: 16.3, letter-spacing: .2px),\n    ),\n    button: (\n        d: (font-size: 16, line-height: 19.8, font-weight: $medium),\n        M: (font-size: 18, line-height: 24.5),\n    ),\n    textlink: (\n        d: (font-size: 16, line-height: 23.5),  // Footer link\n        M: (font-size: 18, line-height: 27.7),\n    ),\n    mainmenu: (\n        d: (font-size: 16, line-height: 23.7),\n    ),\n    servicemenu: (\n        d: (font-size: 14, line-height: 23.5),\n    ),\n    submenu: (\n        d: (font-size: 16, line-height: 19.7, font-weight: $bold),  // Add bold to active and first level instead of new text style\n    ),\n    breadcrumb: (\n        d: (font-size: 10, line-height: 12.2),\n        M: (font-size: 12, line-height: 16.3),\n    ),\n    label: (\n        d: (font-size: 14, line-height: 16.5, font-weight: $bold, text-transform: uppercase),\n    ),\n    label-card: (\n        d: (font-size: 12, line-height: 14, font-weight: $bold, text-transform: uppercase),\n    ),\n    date: (\n        d: (font-size: 14, line-height: 23.5),\n    ),\n);\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={Root:"NavigationDrawer__Root",Button:"NavigationDrawer__Button",ButtonClose:"NavigationDrawer__ButtonClose",Content:"NavigationDrawer__Content"},__webpack_exports__.a=___CSS_LOADER_EXPORT___}}]);