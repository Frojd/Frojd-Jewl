(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"./app/components/Nav/Nav.data.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"b",(function(){return withChildren})),__webpack_exports__.a={id:"horizontal",label:"Horizontal menu",items:[{id:"horizontal-1",title:"Länktext",url:"#"},{id:"horizontal-2",title:"Länktext &#038; Länktext",url:"#",isActive:!0},{id:"horizontal-3",title:"Extern länk",url:"https://test.se"}]};var withChildren={id:"vertical",label:"Vertical hierarchy menu",items:[{id:"vertical-1",title:"Länktext",url:"#"},{id:"vertical-2",title:"Länktext &#038; Länktext",url:"#",isActive:!0,children:[{id:"vertical-21",title:"Länktext",url:"#"},{id:"vertical-22",title:"Länktext &#038; Länktext",url:"#",isActive:!0},{id:"vertical-23",title:"Extern länk",url:"https://test.se",children:[{id:"vertical-231",title:"Länktext",url:"#",children:[{id:"vertical-2311",title:"Länktext",url:"#"},{id:"vertical-2312",title:"Länktext &#038; Länktext",url:"#",isActive:!0},{id:"vertical-2313",title:"Extern länk",url:"https://test.se"}]},{id:"vertical-232",title:"Länktext &#038; Länktext",url:"#",isActive:!0},{id:"vertical-233",title:"Extern länk",url:"https://test.se"}]}]},{id:"vertical-3",title:"Extern länk",url:"https://test.se",children:[{id:"vertical-31",title:"Länktext",url:"#"},{id:"vertical-32",title:"Länktext &#038; Länktext",url:"#",isActive:!0},{id:"vertical-33",title:"Extern länk",url:"https://test.se"}]}],orientation:"Vertical"}},"./app/components/Nav/Nav.stories.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default})),__webpack_require__.d(__webpack_exports__,"WithChildren",(function(){return WithChildren}));__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/react/index.js");var Nav=__webpack_require__("./app/components/Nav/Nav.js"),Nav_data=__webpack_require__("./app/components/Nav/Nav.data.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),Nav_stories_Template=(__webpack_exports__.default={component:Nav.a,parameters:{docs:{description:{component:""}}},argTypes:{orientation:{defaultValue:"Horizontal",options:["Horizontal","Vertical"],control:{type:"select"}},modifier:{options:["","Main","Mobile"],control:{type:"select"}},items:{control:{type:null}}}},function Template(args){return Object(jsx_runtime.jsx)(Nav.a,Object.assign({},args))});Nav_stories_Template.displayName="Template";var Default=Nav_stories_Template.bind({});Default.args=Object.assign({},Nav_data.a);var WithChildren=Nav_stories_Template.bind({});WithChildren.args=Object.assign({},Nav_data.b),Default.parameters=Object.assign({storySource:{source:"(args) => <Nav {...args} />"}},Default.parameters),WithChildren.parameters=Object.assign({storySource:{source:"(args) => <Nav {...args} />"}},WithChildren.parameters)}}]);