(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"./app/components/Button/Button.stories.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Primary",(function(){return Primary})),__webpack_require__.d(__webpack_exports__,"Secondary",(function(){return Secondary})),__webpack_require__.d(__webpack_exports__,"Tertiary",(function(){return Tertiary})),__webpack_require__.d(__webpack_exports__,"TextLink",(function(){return TextLink})),__webpack_require__.d(__webpack_exports__,"TextLinkWhite",(function(){return TextLinkWhite}));__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/react/index.js");var Button=__webpack_require__("./app/components/Button/Button.js"),Button_data={title:"Button text"},jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),Button_stories_Template=(__webpack_exports__.default={component:Button.a,parameters:{docs:{description:{component:""}}},args:{url:null,modifier:"Primary",size:"Large",icon:""},argTypes:{url:{description:"If url is empty, a-tag will be used, otherwise button",control:{type:"text"}},modifier:{options:["Primary","Secondary","Tertiary","TextLink","TextLinkWhite"],control:{type:"select"}},size:{options:["Large"],control:{type:"select"}},icon:{options:["Arrow","External","Download"],control:{type:"select"}}}},function Template(args){return Object(jsx_runtime.jsx)(Button.a,Object.assign({},args))});Button_stories_Template.displayName="Template";var Primary=Button_stories_Template.bind({});Primary.args=Object.assign({},Button_data,{modifier:"Primary"});var Secondary=Button_stories_Template.bind({});Secondary.args=Object.assign({},Button_data,{modifier:"Secondary"});var Tertiary=Button_stories_Template.bind({});Tertiary.args=Object.assign({},Button_data,{modifier:"Tertiary"});var TextLink=Button_stories_Template.bind({});TextLink.args=Object.assign({},Button_data,{modifier:"TextLink"});var TextLinkWhite=Button_stories_Template.bind({});TextLinkWhite.args=Object.assign({},Button_data,{modifier:"TextLinkWhite"}),TextLinkWhite.decorators=[function(Story){return Object(jsx_runtime.jsx)("div",{style:{backgroundColor:"rgba(0,0,0,.8)"},children:Object(jsx_runtime.jsx)(Story,{})})}],Primary.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},Primary.parameters),Secondary.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},Secondary.parameters),Tertiary.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},Tertiary.parameters),TextLink.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},TextLink.parameters),TextLinkWhite.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},TextLinkWhite.parameters)}}]);