"use strict";(self.webpackChunkfrojd_jewl=self.webpackChunkfrojd_jewl||[]).push([[94],{"./app/containers/Page/Page.stories.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:function(){return Default},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return Page_stories}});var defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),Base=__webpack_require__("./app/layouts/Base/index.js"),Image=__webpack_require__("./app/components/Image/index.js"),Richtext=__webpack_require__("./app/components/Richtext/index.js"),Submenu=__webpack_require__("./app/components/Submenu/Submenu.js"),components_Submenu=Submenu.A;Submenu.A.__docgenInfo={description:"",methods:[],displayName:"Submenu",props:{id:{defaultValue:{value:"'submenu'",computed:!1},description:"",type:{name:"string"},required:!1},title:{defaultValue:{value:"''",computed:!1},description:"",type:{name:"string"},required:!1},nav:{defaultValue:{value:"{}",computed:!1},description:"",type:{name:"object"},required:!1}}};var injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Page_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[4]!./app/containers/Page/Page.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Page_module.A,options);var Page_Page_module=Page_module.A&&Page_module.A.locals?Page_module.A.locals:void 0,__jsx=react.createElement,Page=function Page(_ref){var _ref$title=_ref.title,title=void 0===_ref$title?"":_ref$title,_ref$image=_ref.image,image=void 0===_ref$image?{}:_ref$image,_ref$content=_ref.content,content=void 0===_ref$content?{}:_ref$content,_ref$submenu=_ref.submenu,submenu=void 0===_ref$submenu?{}:_ref$submenu,hasFeatured=!!image;return __jsx("article",{className:Page_Page_module.Root},__jsx("div",{className:Page_Page_module.Wrap},__jsx("div",{className:Page_Page_module.HeaderWrap},__jsx("div",{className:Page_Page_module.Header},__jsx("h1",{className:Page_Page_module.Title,dangerouslySetInnerHTML:{__html:title}}))),hasFeatured&&__jsx("div",{className:Page_Page_module.Featured},__jsx(Image.A,(0,esm_extends.A)({},image,{sizes:["(min-width: 1680px) 1440px","(min-width: 1440px) 1280px","100vw"],useCover:!1}))),__jsx("div",{className:Page_Page_module.Layout},__jsx("div",{className:Page_Page_module.Content},__jsx(Richtext.A,content)),__jsx("aside",{className:Page_Page_module.Sidebar},__jsx(components_Submenu,submenu)))))};Page.displayName="Page";var Page_Page=(0,Base.A)(Page);Page.__docgenInfo={description:"",methods:[],displayName:"Page",props:{title:{defaultValue:{value:"''",computed:!1},description:"",type:{name:"string"},required:!1},image:{defaultValue:{value:"{}",computed:!1},required:!1},content:{defaultValue:{value:"{}",computed:!1},description:"",type:{name:"object"},required:!1},submenu:{defaultValue:{value:"{}",computed:!1},description:"",type:{name:"object"},required:!1}}};var Base_data=__webpack_require__("./app/layouts/Base/Base.data.js"),Image_data=__webpack_require__("./app/components/Image/Image.data.js"),Richtext_data=__webpack_require__("./app/components/Richtext/Richtext.data.js"),Submenu_data=__webpack_require__("./app/components/Submenu/Submenu.data.js");function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.A)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var Page_data=_objectSpread(_objectSpread({},Base_data.A),{},{title:"A headline for an exciting news article",image:Image_data.Ay,content:Richtext_data.A,submenu:Submenu_data.A}),Page_stories_jsx=react.createElement;function Page_stories_ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}var Page_stories={component:Page_Page,parameters:{}},Template=function Template(args){return Page_stories_jsx(Page_Page,args)};Template.displayName="Template";var Default=Template.bind({});Default.args=function Page_stories_objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?Page_stories_ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.A)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Page_stories_ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}({},Page_data),Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => <Page {...args} />",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"./app/components/Image/Image.data.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{o4:function(){return portrait}});__webpack_exports__.Ay={src:"/dummy/test-original.jpg",alt:"Test",width:1600,height:900,caption:"Photo: Fröjd Fröjdsson",focal:{x:"50%",y:"50%"},srcset:["/dummy/test-512.jpg 512w","/dummy/test-800.jpg 800w","/dummy/test-1600.jpg 1600w"]};var portrait={src:"https://via.placeholder.com/1600x2400",alt:"Test",width:1600,height:2400,caption:"Photo: Fröjd Fröjdsson",focal:{x:"50%",y:"50%"},srcset:["https://via.placeholder.com/512x768 512w","https://via.placeholder.com/800x1200 800w","https://via.placeholder.com/1600x2400 1600w"]}},"./app/components/Richtext/Richtext.data.js":function(__unused_webpack_module,__webpack_exports__){__webpack_exports__.A={text:'\n        <p class="preamble">Preamble Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\n        <h1>H1/H2 Title</h1>\n        <p>Paragraph lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <strong>Strong ut enim ad</strong> minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. <em>EM Excepteur sint occaecat</em> cupidatat non <a href="#">link here</a>, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><p>Paragraph lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br /> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>\n        <figure>\n            <img src="https://via.placeholder.com/400x300" width="400" height="300" alt="Lorem alt image" title="Dolor title">\n        </figure>\n        <h2>H2 Lorem ipsum dolor</h2>\n        <p>Paragraph UL starting here</p>\n        <ul>\n            <li>Paragraph Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</li>\n            <li>li Ipsum</li>\n            <li>li Dolor</li>\n        </ul>\n        <h3>OL list starts here</h3>\n        <ol>\n            <li>Paragraph Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</li>\n            <li>OL LI two</li>\n        </ol>\n        <figure>\n            <img src="https://via.placeholder.com/400x300" width="400" height="300" alt="Lorem alt image" title="Dolor title">\n            <figcaption>Image caption...</figcaption>\n        </figure>\n        <figure>\n            <img src="dummy/test-1600.jpg" width="1600" height="1067" alt="Lorem alt image" title="Dolor title">\n            <figcaption>Image caption...</figcaption>\n        </figure>\n        <p>Paragraph Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>\n        <blockquote cite="Lorem Ipsum">Blockquote: Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</blockquote>\n        <h3>H3 Excepteur sint</h3>\n        <p>Paragraph Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\n        <blockquote>Blockquote: Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<cite>Lorem Ipsum</cite></blockquote>\n        <h4>H4 Lorem ipsum h4</h4>\n        <p>Paragraph Dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non</p>\n        <p>Paragraph Irure dolor in reprehenderit in voluptate <a href="a.pdf">Download Link</a> and a <a href="https://test.se">External link</a></p>\n        <h5>H5 Excepteur sint</h5>\n        <p>Paragraph Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\n        <h6>H6 Excepteur sint</h6>\n        <p>Paragraph Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\n        <h2>H2 Excepteur sint</h2>\n        <h3>H3 Excepteur sint</h3>\n        <h4>H4 Excepteur sint</h4>\n        <h5>H5 Excepteur sint</h5>\n        <h6>H6 Excepteur sint</h6>\n        <p>Paragraph Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\n    '}},"./app/components/Richtext/index.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var _Richtext__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./app/components/Richtext/Richtext.js");__webpack_exports__.A=_Richtext__WEBPACK_IMPORTED_MODULE_0__.A,_Richtext__WEBPACK_IMPORTED_MODULE_0__.A.__docgenInfo={description:"",methods:[],displayName:"Richtext",props:{text:{defaultValue:{value:"''",computed:!1},description:"",type:{name:"string"},required:!1}}}},"./app/layouts/Base/Base.data.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var _components_Header_Header_data__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./app/components/Header/Header.data.js"),_components_Breadcrumbs_Breadcrumbs_data__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./app/components/Breadcrumbs/Breadcrumbs.data.js"),_components_Footer_Footer_data__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./app/components/Footer/Footer.data.js"),data={header:_components_Header_Header_data__WEBPACK_IMPORTED_MODULE_0__.A,breadcrumbs:_components_Breadcrumbs_Breadcrumbs_data__WEBPACK_IMPORTED_MODULE_1__.A,footer:_components_Footer_Footer_data__WEBPACK_IMPORTED_MODULE_2__.A};__webpack_exports__.A=data},"./app/layouts/Base/Base.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{A:function(){return Base_Base}});var objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),Breadcrumbs=__webpack_require__("./app/components/Breadcrumbs/Breadcrumbs.js"),components_Breadcrumbs=Breadcrumbs.A;Breadcrumbs.A.__docgenInfo={description:"",methods:[],displayName:"Breadcrumbs",props:{items:{defaultValue:{value:"[]",computed:!1},description:"",type:{name:"array"},required:!1}}};var Header=__webpack_require__("./app/components/Header/Header.js"),components_Header=Header.A;Header.A.__docgenInfo={description:"",methods:[],displayName:"Header",props:{main:{defaultValue:{value:"{}",computed:!1},description:"",type:{name:"object"},required:!1},service:{defaultValue:{value:"{}",computed:!1},description:"",type:{name:"object"},required:!1}}};var Footer=__webpack_require__("./app/components/Footer/Footer.js"),components_Footer=Footer.A;Footer.A.__docgenInfo={description:"",methods:[],displayName:"Footer",props:{follow:{defaultValue:{value:"{}",computed:!1},description:"",type:{name:"object"},required:!1},primary:{defaultValue:{value:"{}",computed:!1},description:"",type:{name:"object"},required:!1},secondary:{defaultValue:{value:"{}",computed:!1},description:"",type:{name:"object"},required:!1},tertiary:{defaultValue:{value:"{}",computed:!1},description:"",type:{name:"object"},required:!1},service:{defaultValue:{value:"{}",computed:!1},description:"",type:{name:"object"},required:!1}}};var injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Base_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[4]!./app/layouts/Base/Base.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Base_module.A,options);var Base_Base_module=Base_module.A&&Base_module.A.locals?Base_module.A.locals:void 0,_excluded=["containerName","breadcrumbs","header","footer"],__jsx=react.createElement,Base_Base=function Base(Container){var displayName=Container.displayName;return function Wrapper(_ref){var _ref$containerName=_ref.containerName,containerName=void 0===_ref$containerName?"":_ref$containerName,_ref$breadcrumbs=_ref.breadcrumbs,breadcrumbs=void 0===_ref$breadcrumbs?{}:_ref$breadcrumbs,_ref$header=_ref.header,header=void 0===_ref$header?{}:_ref$header,_ref$footer=_ref.footer,footer=void 0===_ref$footer?{}:_ref$footer,restProps=(0,objectWithoutProperties.A)(_ref,_excluded),name=containerName||displayName,classes=classnames_default()(Base_Base_module.Root,[Base_Base_module["Root--".concat(name)]]);return __jsx("div",{className:classes},__jsx(components_Header,header),__jsx("div",{className:Base_Base_module.Document,role:"document"},__jsx(components_Breadcrumbs,breadcrumbs),__jsx("main",{className:Base_Base_module.Main,id:"mainContent"},__jsx(Container,restProps))),__jsx(components_Footer,footer))}}},"./app/layouts/Base/index.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var _Base__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./app/layouts/Base/Base.js");__webpack_exports__.A=_Base__WEBPACK_IMPORTED_MODULE_0__.A},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[4]!./app/containers/Page/Page.module.scss":function(module,__webpack_exports__,__webpack_require__){var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".Page_Wrap__QtbUk{margin-left:16px;margin-right:16px}@media(min-width: 768px){.Page_Wrap__QtbUk{margin-left:24px;margin-right:24px}}@media(min-width: 1280px){.Page_Wrap__QtbUk{margin-left:40px;margin-right:40px}}@media(min-width: 1440px){.Page_Wrap__QtbUk{max-width:1280px;margin-left:auto;margin-right:auto}}@media(min-width: 1680px){.Page_Wrap__QtbUk{max-width:1440px;margin-left:auto;margin-right:auto}}.Page_HeaderWrap__Oj3Ul{max-width:1046px;margin:40px auto 0}@media(min-width: 1024px){.Page_HeaderWrap__Oj3Ul{margin-top:64px}}.Page_Header__Hh0_I{max-width:618px}.Page_Featured__E6WtM{position:relative;width:100%;margin-top:32px}@media(min-width: 1024px){.Page_Featured__E6WtM{margin-top:48px}}.Page_Layout__Cy4in{display:flex;flex-direction:column;max-width:1046px;margin:32px auto 0}@media(min-width: 1024px){.Page_Layout__Cy4in{flex-direction:row;margin-top:48px}}.Page_Content__0yoEJ{flex:1 0 auto;order:1;width:100%;margin-top:24px;margin-bottom:48px}@media(min-width: 1024px){.Page_Content__0yoEJ{order:0;width:calc(100% - 370px);max-width:618px;margin-top:0;margin-right:40px;margin-bottom:72px}}.Page_Title__8akZp{font-size:4.4rem;line-height:1.36;font-weight:700;font-family:Roboto, Arial, sans-serif}@media(min-width: 768px){.Page_Title__8akZp{font-size:6.4rem;line-height:1.32}}.Page_Sidebar__vIcYo{flex:0 0 auto;width:100%;margin-top:24px}@media(min-width: 1024px){.Page_Sidebar__vIcYo{width:320px;margin-top:0;margin-left:auto;margin-bottom:72px}}","",{version:3,sources:["webpack://./app/containers/Page/Page.module.scss","webpack://./app/styles/includes/mixins.scss"],names:[],mappings:"AAKA,kBC0DQ,gBAAA,CACA,iBAAA,CA3DA,yBAAA,kBA4GI,gBAAA,CACA,iBAAA,CAAA,CA7GJ,0BAAA,kBA4GI,gBAAA,CACA,iBAAA,CAAA,CA7GJ,0BAAA,kBAoGI,gBAPO,CAQP,gBAAA,CACA,iBAAA,CAAA,CAtGJ,0BAAA,kBAoGI,gBAPO,CAQP,gBAAA,CACA,iBAAA,CAAA,CDlGZ,wBACI,gBAAA,CACA,kBAAA,CCNI,0BDIR,wBAKQ,eAAA,CAAA,CAIR,oBACI,eAAA,CAGJ,sBACI,iBAAA,CACA,UAAA,CACA,eAAA,CCpBI,0BDiBR,sBAMQ,eAAA,CAAA,CAIR,oBACI,YAAA,CACA,qBAAA,CACA,gBAAA,CACA,kBAAA,CC/BI,0BD2BR,oBAOQ,kBAAA,CACA,eAAA,CAAA,CAIR,qBACI,aAAA,CACA,OAAA,CACA,UAAA,CACA,eAAA,CACA,kBAAA,CC5CI,0BDuCR,qBAQQ,OAAA,CACA,wBAAA,CACA,eAAA,CACA,YAAA,CACA,iBAAA,CACA,kBAAA,CAAA,CAIR,mBCyEoB,gBAAA,CACA,gBAAA,CAMI,eAjBV,CAiBU,qCAjBV,CAvHN,yBDwDR,mBCyEoB,gBAAA,CACA,gBAAA,CAAA,CDtEpB,qBACI,aAAA,CACA,UAAA,CACA,eAAA,CC/DI,0BD4DR,qBAMQ,WAAA,CACA,YAAA,CACA,gBAAA,CACA,kBAAA,CAAA",sourcesContent:["@import '../../styles/includes';\n\n.Root {\n}\n\n.Wrap {\n    @include wrap;\n}\n\n.HeaderWrap {\n    max-width: map-get($maxwidths, article);\n    margin: 40px auto 0;\n\n    @include media(ML) {\n        margin-top: 64px;\n    }\n}\n\n.Header {\n    max-width: map-get($maxwidths, content);\n}\n\n.Featured {\n    position: relative;\n    width: 100%;\n    margin-top: 32px;\n\n    @include media(ML) {\n        margin-top: 48px;\n    }\n}\n\n.Layout {\n    display: flex;\n    flex-direction: column;\n    max-width: map-get($maxwidths, article);\n    margin: 32px auto 0;\n\n    @include media(ML) {\n        flex-direction: row;\n        margin-top: 48px;\n    }\n}\n\n.Content {\n    flex: 1 0 auto;\n    order: 1;\n    width: 100%;\n    margin-top: 24px;\n    margin-bottom: 48px;\n\n    @include media(ML) {\n        order: 0;\n        width: calc(100% - 370px);\n        max-width: map-get($maxwidths, content);\n        margin-top: 0;\n        margin-right: 40px;\n        margin-bottom: 72px;\n    }\n}\n\n.Title {\n    @include textstyle(page-title);\n}\n\n.Sidebar {\n    flex: 0 0 auto;\n    width: 100%;\n    margin-top: 24px;\n\n    @include media(ML) {\n        width: 320px;\n        margin-top: 0;\n        margin-left: auto;\n        margin-bottom: 72px;\n    }\n}\n","/* stylelint-disable at-rule-empty-line-before */\n@mixin media($key) {\n    @if $key == 'd' {\n        @content;\n    } @else if map-has-key($breakpoints, $key) {\n        @media (min-width: map-get($breakpoints, $key)) {\n            @content;\n        }\n    } @else {\n        @error 'Unfortunately, no value could be retrieved from `#{$breakpoints}`. Please make sure it is defined in `$breakpoints` map.';\n    }\n}\n\n@mixin media-max($key) {\n    @if $key == 'd' {\n        @content;\n    } @else if map-has-key($breakpoints, $key) {\n        @media (max-width: (map-get($breakpoints, $key) - 1)) {\n            @content;\n        }\n    } @else {\n        @error 'Unfortunately, no value could be retrieved from `#{$breakpoints}`. Please make sure it is defined in `$breakpoints` map.';\n    }\n}\n\n/* stylelint-enable at-rule-empty-line-before */\n\n@mixin clearfix() {\n    &::after,\n    &::before {\n        content: '';\n        display: table;\n        clear: both;\n        width: 100%;\n    }\n}\n\n@mixin href-external($domain: 'example.se') {\n    &:not([href^=\"mailto:\"]):not([href^=\"tel:\"]):not([href=\"\"]):not([href^=\"#\"]):not([href^=\"/\"]):not([href^=\"http://#{$domain}\"]):not([href^=\"https://#{$domain}\"]):not([href*=\"localhost\"]):not([href*=\"stage.#{$domain}\"]):not([href*=\"www.#{$domain}\"]):not([href*=\"beta.#{$domain}\"])\n    {\n        @content;\n    }\n}\n\n@mixin href-download() {\n    &[href$='.pdf'],\n    &[href$='.doc'],\n    &[href$='.docx'],\n    &[href$='.ppt'],\n    &[href$='.pptx'],\n    &[href$='.xls'],\n    &[href$='.xlsx'],\n    &[href$='.odt'],\n    &[href$='.eps'],\n    &[href$='.zip'] {\n        @content;\n    }\n}\n\n// For wrapping elements in the main grid\n// Usage: @include wrap;\n@mixin wrap($exclude: ()) {\n    @if not contains($exclude, d) {\n        margin-left: map-get($spacings, d);\n        margin-right: map-get($spacings, d);\n    }\n\n    @if not contains($exclude, S) {\n        @include breakpoint-wrap(S);\n    }\n\n    @if not contains($exclude, SL) {\n        @include breakpoint-wrap(SL);\n    }\n\n    @if not contains($exclude, M) {\n        @include breakpoint-wrap(M);\n    }\n\n    @if not contains($exclude, ML) {\n        @include breakpoint-wrap(ML);\n    }\n\n    @if not contains($exclude, L) {\n        @include breakpoint-wrap(L);\n    }\n\n    @if not contains($exclude, XL) {\n        @include breakpoint-wrap(XL);\n    }\n\n    @if not contains($exclude, XXL) {\n        @include breakpoint-wrap(XXL);\n    }\n}\n\n@mixin breakpoint-wrap($breakpoint) {\n    @if map-has-key($maxwidths, $breakpoint) {\n        $maxWidth: (map-get($maxwidths, $breakpoint));\n\n        @if $fluid and map-has-key($spacings, $breakpoint) {\n            $maxWidth: $maxWidth - (map-get($spacings, $breakpoint) * 2);\n        }\n\n        @include media($breakpoint) {\n            max-width: $maxWidth;\n            margin-left: auto;\n            margin-right: auto;\n        }\n    }\n\n    @if $fluid and map-has-key($spacings, $breakpoint) {\n        @include media($breakpoint) {\n            margin-left: (map-get($spacings, $breakpoint));\n            margin-right: (map-get($spacings, $breakpoint));\n        }\n    }\n}\n\n// For setting font-size and line-height on elements defined by variabels, including media queries\n// Usage: @include textstyle(h1);\n@mixin textstyle($key) {\n    // Loop through text map and set font-size and line-height for each media query\n    @if map-has-key($textstyles, $key) {\n        $map: map-get($textstyles, $key);\n\n        @each $media, $style in $map {\n            @include media($media) {\n                @if map-has-key($style, font-size) and\n                    map-has-key($style, line-height)\n                {\n                    $font-size: map-get($style, font-size);\n                    $line-height: map-get($style, line-height);\n\n                    font-size: #{$font-size / 10}rem;\n                    line-height: #{round($line-height / $font-size * 100) /\n                        100};\n                }\n\n                @each $param, $value in $style {\n                    @if $param != 'font-size' and $param != 'line-height' {\n                        #{$param}: $value;\n                    }\n                }\n            }\n        }\n    }\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={Wrap:"Page_Wrap__QtbUk",HeaderWrap:"Page_HeaderWrap__Oj3Ul",Header:"Page_Header__Hh0_I",Featured:"Page_Featured__E6WtM",Layout:"Page_Layout__Cy4in",Content:"Page_Content__0yoEJ",Title:"Page_Title__8akZp",Sidebar:"Page_Sidebar__vIcYo"},__webpack_exports__.A=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[4]!./app/layouts/Base/Base.module.scss":function(module,__webpack_exports__,__webpack_require__){var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".Base_Main__RGHc1{display:block}","",{version:3,sources:["webpack://./app/layouts/Base/Base.module.scss"],names:[],mappings:"AAQA,kBACI,aAAA",sourcesContent:["@import '../../styles/includes';\n\n.Root {\n}\n\n.Document {\n}\n\n.Main {\n    display: block; /* For IE11 compatibility */\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={Main:"Base_Main__RGHc1"},__webpack_exports__.A=___CSS_LOADER_EXPORT___}}]);