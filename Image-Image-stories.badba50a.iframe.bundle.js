/*! For license information please see Image-Image-stories.badba50a.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkfrojd_jewl=self.webpackChunkfrojd_jewl||[]).push([[7622],{"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}__webpack_require__.d(__webpack_exports__,{A:function(){return _objectWithoutProperties}})},"./app/components/Image/Image.stories.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:function(){return Default},Portrait:function(){return Portrait},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return Image_stories}});var defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),Image=__webpack_require__("./app/components/Image/Image.js"),Image_data=__webpack_require__("./app/components/Image/Image.data.js"),__jsx=react.createElement;function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.A)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var Image_stories={component:Image.A,parameters:{docs:{description:{component:"Image component using Next/image and object-fit\n\n[Image source code on Github](https://github.com/Frojd/Frojd-Jewl/tree/develop/component-library/app/components/Image)\n\n## Requirements\n\n### Packages\n\n-   **next/image**\n"}}}},Template=function Template(args){return __jsx(Image.A,args)};Template.displayName="Template";var Default=Template.bind({});Default.args=_objectSpread({},Image_data.Ay);var Portrait=Template.bind({});Portrait.args=_objectSpread({},Image_data.o4),Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => <Image {...args} />",...Default.parameters?.docs?.source}}},Portrait.parameters={...Portrait.parameters,docs:{...Portrait.parameters?.docs,source:{originalSource:"args => <Image {...args} />",...Portrait.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Portrait"]},"./app/components/Image/Image.data.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{o4:function(){return portrait}});__webpack_exports__.Ay={src:"/dummy/test-original.jpg",alt:"Test",width:1600,height:900,caption:"Photo: Fröjd Fröjdsson",focal:{x:"50%",y:"50%"},srcset:["/dummy/test-512.jpg 512w","/dummy/test-800.jpg 800w","/dummy/test-1600.jpg 1600w"]};var portrait={src:"https://via.placeholder.com/1600x2400",alt:"Test",width:1600,height:2400,caption:"Photo: Fröjd Fröjdsson",focal:{x:"50%",y:"50%"},srcset:["https://via.placeholder.com/512x768 512w","https://via.placeholder.com/800x1200 800w","https://via.placeholder.com/1600x2400 1600w"]}},"./node_modules/classnames/index.js":function(module,exports){var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes="",i=0;i<arguments.length;i++){var arg=arguments[i];arg&&(classes=appendClass(classes,parseValue(arg)))}return classes}function parseValue(arg){if("string"==typeof arg||"number"==typeof arg)return arg;if("object"!=typeof arg)return"";if(Array.isArray(arg))return classNames.apply(null,arg);if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]"))return arg.toString();var classes="";for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&(classes=appendClass(classes,key));return classes}function appendClass(value,newClass){return newClass?value?value+" "+newClass:value+newClass:value}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()}}]);