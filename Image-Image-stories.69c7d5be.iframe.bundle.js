(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"./app/components/Image/Image.data.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"b",(function(){return portrait})),__webpack_exports__.a={src:"https://via.placeholder.com/1600x900",alt:"Test",width:1600,height:900,caption:"Caption",focal:{x:"50%",y:"50%"},srcset:["https://via.placeholder.com/512x288 512w","https://via.placeholder.com/800x450 800w","https://via.placeholder.com/1600x900 1600w"]};var portrait={src:"https://via.placeholder.com/1600x2400",alt:"Test",width:1600,height:2400,caption:"Caption",focal:{x:"50%",y:"50%"},srcset:["https://via.placeholder.com/512x768 512w","https://via.placeholder.com/800x1200 800w","https://via.placeholder.com/1600x2400 1600w"]}},"./app/components/Image/Image.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__("./node_modules/core-js/modules/es.array.join.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("./node_modules/core-js/modules/es.function.name.js"),__webpack_require__("./node_modules/core-js/modules/es.array.from.js");var react=__webpack_require__("./node_modules/react/index.js"),prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),lodash=__webpack_require__("./node_modules/lodash/lodash.js"),lodash_default=__webpack_require__.n(lodash),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),Image_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js!./app/components/Image/Image.module.scss"),options={insert:"head",singleton:!1},Image_Image_module=(injectStylesIntoStyleTag_default()(Image_module.a,options),Image_module.a.locals||{}),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null==_i)return;var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var Image_Image=function Image(_ref){var _classNames,_classNames2,_classNames3,_classNames4,src=_ref.src,alt=_ref.alt,width=_ref.width,height=_ref.height,caption=_ref.caption,focal=_ref.focal,srcset=_ref.srcset,sizes=_ref.sizes,useCover=_ref.useCover,className=_ref.className,_useState2=_slicedToArray(Object(react.useState)(!0),2),useObjectFit=_useState2[0],setUseObjectFit=_useState2[1];Object(react.useEffect)((function(){"objectFit"in document.documentElement.style==!1&&setUseObjectFit(!1)}),[]);var position=lodash_default.a.isEmpty(focal)?"center center":focal.x+" "+focal.y,classes=classnames_default()(Image_Image_module.Root,((_classNames={})[Image_Image_module["Root--Fallback"]]=!useObjectFit,_classNames),((_classNames2={})[Image_Image_module["Root--ObjectFit"]]=useObjectFit,_classNames2),((_classNames3={})[Image_Image_module["Root--Cover"]]=useCover,_classNames3),((_classNames4={})[Image_Image_module["Root--Contain"]]=!useCover,_classNames4),className);return useObjectFit?Object(jsx_runtime.jsx)("img",{className:classes,src:src,alt:alt,width:width,height:height,title:caption,srcSet:srcset.join(", "),sizes:sizes.join(", "),style:{objectPosition:position}}):Object(jsx_runtime.jsx)("div",{className:classes,style:{backgroundImage:"url('"+src+"')",backgroundPosition:position},title:caption})};Image_Image.displayName="Image",Image_Image.propTypes={src:prop_types_default.a.string.isRequired,alt:prop_types_default.a.string.isRequired,width:prop_types_default.a.number.isRequired,height:prop_types_default.a.number.isRequired,caption:prop_types_default.a.string,focal:prop_types_default.a.object,srcset:prop_types_default.a.array,sizes:prop_types_default.a.array,useCover:prop_types_default.a.bool,className:prop_types_default.a.string},Image_Image.defaultProps={src:"",alt:"",width:0,height:0,caption:"",focal:{},srcset:[],sizes:[],useCover:!0,className:""},Image_Image.__docgenInfo={description:"",methods:[],displayName:"Image",props:{src:{defaultValue:{value:"''",computed:!1},type:{name:"string"},required:!1,description:""},alt:{defaultValue:{value:"''",computed:!1},type:{name:"string"},required:!1,description:""},width:{defaultValue:{value:"0",computed:!1},type:{name:"number"},required:!1,description:""},height:{defaultValue:{value:"0",computed:!1},type:{name:"number"},required:!1,description:""},caption:{defaultValue:{value:"''",computed:!1},type:{name:"string"},required:!1,description:""},focal:{defaultValue:{value:"{}",computed:!1},type:{name:"object"},required:!1,description:""},srcset:{defaultValue:{value:"[]",computed:!1},type:{name:"array"},required:!1,description:""},sizes:{defaultValue:{value:"[]",computed:!1},type:{name:"array"},required:!1,description:""},useCover:{defaultValue:{value:"true",computed:!1},type:{name:"bool"},required:!1,description:""},className:{defaultValue:{value:"''",computed:!1},type:{name:"string"},required:!1,description:""}}};__webpack_exports__.a=Image_Image;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/components/Image/Image.js"]={name:"Image",docgenInfo:Image_Image.__docgenInfo,path:"app/components/Image/Image.js"})},"./app/components/Image/Image.stories.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default})),__webpack_require__.d(__webpack_exports__,"Portrait",(function(){return Portrait}));__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/react/index.js");var Image=__webpack_require__("./app/components/Image/Image.js"),Image_data=__webpack_require__("./app/components/Image/Image.data.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),Image_stories_Template=(__webpack_exports__.default={component:Image.a,parameters:{docs:{description:{component:""}}}},function Template(args){return Object(jsx_runtime.jsx)(Image.a,Object.assign({},args))});Image_stories_Template.displayName="Template";var Default=Image_stories_Template.bind({});Default.args=Object.assign({},Image_data.a);var Portrait=Image_stories_Template.bind({});Portrait.args=Object.assign({},Image_data.b),Default.parameters=Object.assign({storySource:{source:"(args) => <Image {...args} />"}},Default.parameters),Portrait.parameters=Object.assign({storySource:{source:"(args) => <Image {...args} />"}},Portrait.parameters)},"./node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js!./app/components/Image/Image.module.scss":function(module,__webpack_exports__,__webpack_require__){"use strict";var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/cssWithMappingToString.js"),_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);___CSS_LOADER_EXPORT___.push([module.i,".Image-module__Root-3IpMs{width:100%;height:100%}.Image-module__Root--Contain-1PuRV{object-fit:contain;background-size:contain}.Image-module__Root--Cover-1NhIT.Image-module__Root--ObjectFit-3Lw6A{object-fit:cover}.Image-module__Root--Cover-1NhIT.Image-module__Root--Fallback-VQX5d{background-size:cover}\n","",{version:3,sources:["webpack://./app/components/Image/Image.module.scss"],names:[],mappings:"AAEA,0BACI,UAAW,CACX,WAAY,CAEZ,mCACI,kBAAmB,CACnB,uBAAwB,CAC3B,qEAGG,gBAAiB,CACpB,oEAGG,qBAAsB",sourcesContent:["@import 'styles/includes';\n\n.Root {\n    width: 100%;\n    height: 100%;\n\n    &--Contain {\n        object-fit: contain;\n        background-size: contain;\n    }\n\n    &--Cover.Root--ObjectFit {\n        object-fit: cover;\n    }\n\n    &--Cover.Root--Fallback {\n        background-size: cover;\n    }\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={Root:"Image-module__Root-3IpMs","Root--Contain":"Image-module__Root--Contain-1PuRV","Root--Cover":"Image-module__Root--Cover-1NhIT","Root--ObjectFit":"Image-module__Root--ObjectFit-3Lw6A","Root--Fallback":"Image-module__Root--Fallback-VQX5d"},__webpack_exports__.a=___CSS_LOADER_EXPORT___}}]);