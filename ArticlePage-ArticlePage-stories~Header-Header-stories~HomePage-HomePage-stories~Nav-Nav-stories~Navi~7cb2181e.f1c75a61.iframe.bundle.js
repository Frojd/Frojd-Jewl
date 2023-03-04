(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"./app/components/Nav/Nav.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__("./node_modules/core-js/modules/es.array.map.js"),__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("./node_modules/core-js/modules/es.function.name.js"),__webpack_require__("./node_modules/core-js/modules/es.array.from.js");var react=__webpack_require__("./node_modules/react/index.js"),prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),useTranslation=__webpack_require__("./node_modules/react-i18next/dist/es/useTranslation.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),velocity_react=__webpack_require__("./node_modules/velocity-react/index.js"),lodash=__webpack_require__("./node_modules/lodash/lodash.js"),lodash_default=__webpack_require__.n(lodash),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),Nav_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js!./app/components/Nav/Nav.module.scss"),options={insert:"head",singleton:!1},Nav_Nav_module=(injectStylesIntoStyleTag_default()(Nav_module.a,options),Nav_module.a.locals||{}),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null==_i)return;var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var Nav_Nav=function Nav(_ref){var _classNames,id=_ref.id,label=_ref.label,items=_ref.items,orientation=_ref.orientation,modifier=_ref.modifier,hasChildren=void 0!==lodash_default.a.findKey(items,(function(i){return i.children&&!lodash_default.a.isEmpty(i.children)})),menuId=id+=modifier,classes=classnames_default()(Nav_Nav_module.Root,Nav_Nav_module["Root--"+orientation],((_classNames={})[Nav_Nav_module["Root--"+modifier]]=modifier,_classNames));return Object(jsx_runtime.jsx)("nav",{className:classes,"aria-label":label,id:menuId,children:hasChildren?Object(jsx_runtime.jsx)(Nav_List,{items:items,navId:menuId}):Object(jsx_runtime.jsx)("div",{className:Nav_Nav_module.List,children:items.map((function(item,index){return Object(react.createElement)(Nav_Item,Object.assign({},item,{navId:menuId,key:index}))}))})})};Nav_Nav.displayName="Nav",Nav_Nav.propTypes={id:prop_types_default.a.string.isRequired,label:prop_types_default.a.string,items:prop_types_default.a.array.isRequired,orientation:prop_types_default.a.string,modifier:prop_types_default.a.string},Nav_Nav.defaultProps={id:"nav",label:null,items:[],orientation:"Horizontal",modifier:""};var Nav_List=function List(_ref2){var items=_ref2.items,navId=_ref2.navId,id=_ref2.id,isHidden=_ref2.isHidden,listId=null===id?null:navId+"-"+id+"-list";return Object(jsx_runtime.jsx)("ul",{className:Nav_Nav_module.List,"aria-hidden":isHidden,id:listId,children:items.map((function(item,index){return Object(react.createElement)(Nav_Child,Object.assign({},item,{navId:navId,key:index}))}))})};Nav_List.displayName="List",Nav_List.propTypes={items:prop_types_default.a.array.isRequired,navId:prop_types_default.a.string.isRequired,id:prop_types_default.a.string,isHidden:prop_types_default.a.bool},Nav_List.defaultProps={items:[],navId:"nav",id:null,isHidden:null};var Nav_Child=function Child(item){var _classNames2,_classNames3,_classNames4,navId=item.navId,id=item.id,children=item.children,isParentActive=item.isParentActive,_useState2=_slicedToArray(Object(react.useState)(isParentActive),2),isExpanded=_useState2[0],setIsExpanded=_useState2[1],hasChildren=!lodash_default.a.isEmpty(children),classes=classnames_default()(Nav_Nav_module.Child,((_classNames2={})[Nav_Nav_module["Child--Expanded"]]=isExpanded,_classNames2),((_classNames3={})[Nav_Nav_module["Child--HasChildren"]]=hasChildren,_classNames3),((_classNames4={})[Nav_Nav_module["Child--ParentActive"]]=isParentActive,_classNames4));return Object(jsx_runtime.jsxs)("li",{className:classes,id:navId+"-"+id,children:[Object(jsx_runtime.jsx)(Nav_Item,Object.assign({},item,{isExpanded:isExpanded,showToggle:hasChildren,toggleExpanded:function toggleExpanded(){return setIsExpanded(!isExpanded)}})),hasChildren&&Object(jsx_runtime.jsx)(velocity_react.VelocityComponent,{animation:isExpanded?"slideDown":"slideUp",children:Object(jsx_runtime.jsx)(Nav_List,{items:children,isHidden:!isExpanded,navId:navId,id:id})})]})};Nav_Child.displayName="Child",Nav_Child.propTypes={navId:prop_types_default.a.string.isRequired,id:prop_types_default.a.string.isRequired,children:prop_types_default.a.array,isParentActive:prop_types_default.a.bool},Nav_Child.defaultProps={navId:"",id:"",children:[],isParentActive:!1};var Nav_Item=function Item(item){var _classNames5,_classNames6,navId=item.navId,id=item.id,modifier=item.modifier,showToggle=item.showToggle,isExpanded=item.isExpanded,toggleExpanded=item.toggleExpanded,isActive=item.isActive,listId=navId+"-"+id+"-list",t=Object(useTranslation.a)().t,classes=classnames_default()(Nav_Nav_module.Item,((_classNames5={})[Nav_Nav_module["Item--Active"]]=isActive,_classNames5),((_classNames6={})[Nav_Nav_module["Item--"+modifier]]=modifier,_classNames6));return Object(jsx_runtime.jsxs)("div",{className:classes,children:[Object(jsx_runtime.jsx)(Nav_Link,Object.assign({},item)),showToggle&&Object(jsx_runtime.jsx)("button",{className:Nav_Nav_module.Toggle,type:"button",onClick:function onClick(){return toggleExpanded()},"aria-expanded":isExpanded,"aria-controls":listId,children:Object(jsx_runtime.jsx)("span",{className:"sr-only",children:t("nav.showChildren")})})]})};Nav_Item.displayName="Item",Nav_Item.propTypes={navId:prop_types_default.a.string.isRequired,id:prop_types_default.a.string.isRequired,modifier:prop_types_default.a.string,showToggle:prop_types_default.a.bool,isExpanded:prop_types_default.a.bool,toggleExpanded:prop_types_default.a.func,isActive:prop_types_default.a.bool,isParentActive:prop_types_default.a.bool},Nav_Item.defaultProps={navId:"",id:"",modifier:"",showToggle:!1,isExpanded:!1,toggleExpanded:function toggleExpanded(){},isActive:!1,isParentActive:!1};var Nav_Link=function Link(_ref3){var title=_ref3.title,url=_ref3.url,target=_ref3.target,rel=_ref3.rel,attrTitle=_ref3.attrTitle;return Object(jsx_runtime.jsx)("a",{className:Nav_Nav_module.Link,href:url,target:target,rel:rel,title:attrTitle,children:"string"==typeof title?Object(jsx_runtime.jsx)("span",{className:Nav_Nav_module.LinkText,dangerouslySetInnerHTML:{__html:title}}):Object(jsx_runtime.jsx)("span",{className:Nav_Nav_module.LinkText,children:title})})};Nav_Link.displayName="Link",Nav_Link.propTypes={title:prop_types_default.a.node.isRequired,url:prop_types_default.a.string.isRequired,target:prop_types_default.a.string,rel:prop_types_default.a.string,attrTitle:prop_types_default.a.string},Nav_Link.defaultProps={title:"",url:"",target:null,rel:null,attrTitle:null},Nav_Nav.__docgenInfo={description:"",methods:[],displayName:"Nav",props:{id:{defaultValue:{value:"'nav'",computed:!1},description:"",type:{name:"string"},required:!1},label:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"string"},required:!1},items:{defaultValue:{value:"[]",computed:!1},description:"",type:{name:"array"},required:!1},orientation:{defaultValue:{value:"'Horizontal'",computed:!1},description:"",type:{name:"string"},required:!1},modifier:{defaultValue:{value:"''",computed:!1},description:"",type:{name:"string"},required:!1}}};__webpack_exports__.a=Nav_Nav;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["app/components/Nav/Nav.js"]={name:"Nav",docgenInfo:Nav_Nav.__docgenInfo,path:"app/components/Nav/Nav.js"})},"./node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js!./app/components/Nav/Nav.module.scss":function(module,__webpack_exports__,__webpack_require__){"use strict";var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/cssWithMappingToString.js"),_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);___CSS_LOADER_EXPORT___.push([module.i,".Nav__List{display:flex;margin-left:10px}.Nav__Root--Vertical .Nav__List{flex-direction:column}.Nav__Root--Horizontal .Nav__List{flex-direction:row;margin-left:-8px}.Nav__Root--Main .Nav__List{align-items:flex-end}.Nav__Root--Submenu .Nav__List{margin-left:0}.Nav__Root--Submenu .Nav__List .Nav__List{margin-left:16px}.Nav__Child{position:relative}.Nav__Child--ParentActive{background:#EDE7F6}.Nav__Item{flex:0 0 auto;position:relative}.Nav__Root--Horizontal .Nav__Item{margin-left:8px;align-self:center}.Nav__Toggle{display:inline-block;position:relative;top:-5px;width:20px;height:20px;border:none;border-radius:0;background:transparent;box-shadow:none;cursor:pointer}.Nav__Toggle::before,.Nav__Toggle::after{content:'';display:inline-block;position:absolute;top:0;bottom:0;left:0;right:0;width:12px;height:2px;margin:auto;background:#673AB7;opacity:1;transition:opacity 0.3s ease-in-out,background 0.3s ease-in-out}.Nav__Toggle::after{transform:rotate(90deg)}.Nav__Child--Expanded>.Nav__Item>.Nav__Toggle::after{opacity:0}.Nav__Root--Submenu .Nav__Toggle{position:absolute;top:10px;right:12px;width:32px;height:32px;border-radius:50%;background:transparent;transition:background-color 0.3s ease-in-out}.Nav__Root--Submenu .Nav__Toggle::before,.Nav__Root--Submenu .Nav__Toggle::after{width:16px}.Nav__Root--Submenu .Nav__Toggle:hover{background:#EDE7F6}.Nav__Link{display:inline-block;position:relative;padding:8px;color:#673AB7;text-decoration:underline}.Nav__Link:hover{color:#3b216a;text-decoration:none}.Nav__Item--Active .Nav__Link{color:#212121;text-decoration:none}.Nav__Root--Main .Nav__Item--Active .Nav__Link::after{background-color:#673AB7;opacity:1}.Nav__Root--Mobile .Nav__Item--Active .Nav__Link{color:white}.Nav__Root--Submenu .Nav__Item--Active .Nav__Link{color:#673AB7}.Nav__Item--Search .Nav__Link{width:120px}.Nav__Item--Search .Nav__Link:after{background-color:transparent !important}.Nav__Root .Nav__Item--Search .Nav__Link{transition:width 0.3s ease-in-out}.Nav__Root:hover .Nav__Item--Search .Nav__Link{width:calc(160px + 38px)}.Nav__Root--Main .Nav__Link{font-size:1.6rem;line-height:1.48;padding:8px 16px 32px;color:#212121;text-decoration:none;transition:color 0.3s ease-in-out}.Nav__Root--Main .Nav__Link::after{content:'';height:5px;position:absolute;bottom:0;left:16px;right:16px;background:#B39DDB;opacity:0;transition:background 0.3s ease-in-out,opacity 0.3s ease-in-out}.Nav__Root--Main .Nav__Link:hover::after{opacity:1}.Nav__Root--Service .Nav__Link{font-size:1.4rem;line-height:1.68;padding:4px 8px;color:#212121;text-decoration:none;transition:color 0.3s ease-in-out}.Nav__Root--Service .Nav__Link::after{content:'';height:1px;position:absolute;bottom:6px;left:8px;right:8px;background:#673AB7;opacity:0;transition:opacity 0.3s ease-in-out}.Nav__Root--Service .Nav__Link:hover{color:#673AB7}.Nav__Root--Service .Nav__Link:hover::after{opacity:1}.Nav__Root--Mobile .Nav__Link{position:relative;display:inline-block;padding:16px;color:white;font-weight:700;font-size:2.4rem;line-height:1.2;text-decoration:none}.Nav__Root--Mobile .Nav__Link svg{fill:white}.Nav__Root--Mobile .Nav__Link::after{content:'';display:block;position:absolute;left:100%;right:16px;bottom:7px;height:3px;background:white;opacity:0;transition:opacity .3s ease-in-out, left .3s .1s}.Nav__Root--Mobile .Nav__Link:hover{color:white}.Nav__Root--Mobile .Nav__Link:hover::after{left:16px;opacity:1}.Nav__Root--Submenu .Nav__Link{font-size:1.6rem;line-height:1.23;font-weight:700;display:block;padding:16px;margin-right:56px;color:#212121;text-decoration:none;transition:color 0.3s ease-in-out}.Nav__Root--Submenu .Nav__Link:hover{color:#673AB7}\n","",{version:3,sources:["webpack://./app/components/Nav/Nav.module.scss","webpack://./app/styles/includes/variables.scss","webpack://./app/styles/includes/mixins.scss"],names:[],mappings:"AAKA,WACI,YAAa,CACb,gBAAiB,CAEjB,gCACI,qBAAsB,CACzB,kCAGG,kBAAmB,CACnB,gBAAiB,CACpB,4BAGG,oBAAqB,CACxB,+BAGG,aAAc,CADlB,0CAIQ,gBAAiB,CACpB,YAKL,iBAAkB,CAOlB,0BACI,kBCCW,CDAd,WAID,aAAc,CACd,iBAAkB,CAElB,kCACI,eAAgB,CAChB,iBAAkB,CACrB,aAID,oBAAqB,CACrB,iBAAkB,CAClB,QAAS,CACT,UAAW,CACX,WAAY,CACZ,WAAY,CACZ,eAAgB,CAChB,sBAAuB,CACvB,eAAgB,CAChB,cAAe,CAVnB,yCAcQ,UAAW,CACX,oBAAqB,CACrB,iBAAkB,CAClB,KAAM,CACN,QAAS,CACT,MAAO,CACP,OAAQ,CACR,UAAW,CACX,UAAW,CACX,WAAY,CACZ,kBCtCQ,CDuCR,SAAU,CACV,+DCtDoB,CD4B5B,oBA8BQ,uBAAwB,CAC3B,qDAOO,SAAU,CACb,iCAID,iBAAkB,CAClB,QAAS,CACT,UAAW,CACX,UAAW,CACX,WAAY,CACZ,iBAAkB,CAClB,sBAAuB,CACvB,4CC9EoB,CDsExB,iFAYQ,UAAW,CAZnB,uCAgBQ,kBCvEO,CDwEV,WAKL,oBAAqB,CACrB,iBAAkB,CAClB,WAAY,CACZ,aCjFY,CDkFZ,yBAA0B,CAL9B,iBAQQ,aC9D+B,CD+D/B,oBAAqB,CACxB,8BAGG,aC5FS,CD6FT,oBAAqB,CAErB,sDAEQ,wBC/FA,CDgGA,SAAU,CACb,iDAID,WAAY,CACf,kDAGG,aCzGI,CD0GP,8BAKD,WAAY,CAFhB,oCAKQ,uCAAwC,CAC3C,yCAGG,iCCpIgB,CDqInB,+CAGG,wBAAyB,CAC5B,4BEtCW,gBAAW,CACX,gBAAa,CF4CzB,qBAAsB,CACtB,aCrIS,CDsIT,oBAAqB,CACrB,iCCnJoB,CD6IxB,mCASQ,UAAW,CACX,UAAW,CACX,iBAAkB,CAClB,QAAS,CACT,SAAU,CACV,UAAW,CACX,kBC5IO,CD6IP,SAAU,CACV,+DC9JgB,CD6IxB,yCAsBY,SAAU,CACb,+BEjEO,gBAAW,CACX,gBAAa,CFuEzB,eAAgB,CAChB,aChKS,CDiKT,oBAAqB,CACrB,iCC9KoB,CDwKxB,sCASQ,UAAW,CACX,UAAW,CACX,iBAAkB,CAClB,UAAW,CACX,QAAS,CACT,SAAU,CACV,kBCzKI,CD0KJ,SAAU,CACV,mCCzLgB,CDwKxB,qCAqBQ,aC/KI,CD0JZ,4CAwBY,SAAU,CACb,8BAKL,iBAAkB,CAClB,oBAAqB,CACrB,YAAa,CACb,WAAY,CACZ,eCrJE,CDsJF,gBAAiB,CACjB,eAAgB,CAChB,oBAAqB,CARzB,kCAWQ,UAAW,CAXnB,qCAeQ,UAAW,CACX,aAAc,CACd,iBAAkB,CAClB,SAAU,CACV,UAAW,CACX,UAAW,CACX,UAAW,CACX,gBAAiB,CACjB,SAAU,CACV,gDAAiD,CAxBzD,oCA4BQ,WAAY,CA5BpB,2CA+BY,SAAU,CACV,SAAU,CACb,+BEnIO,gBAAW,CACX,gBAAa,CAKT,eDpDd,CDwLF,aAAc,CACd,YAAa,CACb,iBAAkB,CAClB,aCpOS,CDqOT,oBAAqB,CACrB,iCClPoB,CD0OxB,qCAWQ,aCvOI",sourcesContent:["@import 'Styles/includes';\n\n.Root {\n}\n\n.List {\n    display: flex;\n    margin-left: 10px;\n\n    .Root--Vertical & {\n        flex-direction: column;\n    }\n\n    .Root--Horizontal & {\n        flex-direction: row;\n        margin-left: -8px;\n    }\n\n    .Root--Main & {\n        align-items: flex-end;\n    }\n\n    .Root--Submenu & {\n        margin-left: 0;\n\n        .List {\n            margin-left: 16px;\n        }\n    }\n}\n\n.Child {\n    position: relative;\n\n    &--Expanded {\n    }\n    &--HasChildren {\n    }\n\n    &--ParentActive {\n        background: $purple-20;\n    }\n}\n\n.Item {\n    flex: 0 0 auto;\n    position: relative;\n\n    .Root--Horizontal & {\n        margin-left: 8px;\n        align-self: center;\n    }\n}\n\n.Toggle {\n    display: inline-block;\n    position: relative;\n    top: -5px;\n    width: 20px;\n    height: 20px;\n    border: none;\n    border-radius: 0;\n    background: transparent;\n    box-shadow: none;\n    cursor: pointer;\n\n    &::before,\n    &::after {\n        content: '';\n        display: inline-block;\n        position: absolute;\n        top: 0;\n        bottom: 0;\n        left: 0;\n        right: 0;\n        width: 12px;\n        height: 2px;\n        margin: auto;\n        background: $primary-color;\n        opacity: 1;\n        transition: opacity $transition, background $transition;\n    }\n\n    &::after {\n        transform: rotate(90deg);\n    }\n\n    &:hover {\n    }\n\n    .Child--Expanded > .Item > & {\n        &::after {\n            opacity: 0;\n        }\n    }\n\n    .Root--Submenu & {\n        position: absolute;\n        top: 10px;\n        right: 12px;\n        width: 32px;\n        height: 32px;\n        border-radius: 50%;\n        background: transparent;\n        transition: background-color $transition;\n\n        &::before,\n        &::after {\n            width: 16px;\n        }\n\n        &:hover {\n            background: $purple-20;\n        }\n    }\n}\n\n.Link {\n    display: inline-block;\n    position: relative;\n    padding: 8px;\n    color: $link-color;\n    text-decoration: underline;\n\n    &:hover {\n        color: $link-hover-color;\n        text-decoration: none;\n    }\n\n    .Item--Active & {\n        color: $base-color;\n        text-decoration: none;\n\n        .Root--Main & {\n            &::after {\n                background-color: $purple;\n                opacity: 1;\n            }\n        }\n\n        .Root--Mobile & {\n            color: white;\n        }\n\n        .Root--Submenu & {\n            color: $purple;\n        }\n    }\n\n    .Item--Search & {\n\n        width: 120px; \n\n        &:after {\n            background-color: transparent !important; \n        }\n\n        .Root & {\n            transition: width $transition;\n        }\n\n        .Root:hover & {\n            width: calc(160px + 38px);\n        }\n\n    }\n\n    .Root--Main & {\n        @include textstyle(mainmenu);\n\n        padding: 8px 16px 32px;\n        color: $base-color;\n        text-decoration: none;\n        transition: color $transition;\n\n        &::after {\n            content: '';\n            height: 5px;\n            position: absolute;\n            bottom: 0;\n            left: 16px;\n            right: 16px;\n            background: $purple-60;\n            opacity: 0;\n            transition: background $transition, opacity $transition;\n        }\n\n        &:hover {\n            &::after {\n                opacity: 1;\n            }\n        }\n    }\n\n    .Root--Service & {\n        @include textstyle(servicemenu);\n\n        padding: 4px 8px;\n        color: $base-color;\n        text-decoration: none;\n        transition: color $transition;\n\n        &::after {\n            content: '';\n            height: 1px;\n            position: absolute;\n            bottom: 6px;\n            left: 8px;\n            right: 8px;\n            background: $purple;\n            opacity: 0;\n            transition: opacity $transition;\n        }\n\n        &:hover {\n            color: $purple;\n\n            &::after {\n                opacity: 1;\n            }\n        }\n    }\n\n    .Root--Mobile & {\n        position: relative;\n        display: inline-block;\n        padding: 16px;\n        color: white;\n        font-weight: $bold;\n        font-size: 2.4rem;\n        line-height: 1.2;\n        text-decoration: none;\n\n        svg {\n            fill: white;\n        }\n\n        &::after {\n            content: '';\n            display: block;\n            position: absolute;\n            left: 100%;\n            right: 16px;\n            bottom: 7px;\n            height: 3px;\n            background: white;\n            opacity: 0;\n            transition: opacity .3s ease-in-out, left .3s .1s;\n        }\n\n        &:hover {\n            color: white;\n\n            &::after {\n                left: 16px;\n                opacity: 1;\n            }\n        }\n    }\n\n    .Root--Submenu & {\n        @include textstyle(submenu);\n\n        display: block;\n        padding: 16px;\n        margin-right: 56px;\n        color: $base-color;\n        text-decoration: none;\n        transition: color $transition;\n\n        &:hover {\n            color: $purple;\n        }\n    }\n}\n","$assetsPath: 'Assets/';\n\n$gutter: 16px;\n$gutterM: 24px; // Used for media query above M\n\n// Grid and site widths\n$maxwidths: (\n    // S: 320px,\n    SL: 500px - ($gutter * 2),\n    M: 720px,\n    ML: 808px,\n    L: 1140px,\n    XL: 1280px,\n    XXL: 1440px,\n    content: 618px,\n);\n$breakpoints: (\n    S: 375px,\n    SL: 500px, // Landscape\n    M: 768px,\n    ML: 1024px, // Landscape\n    L: 1280px,\n    XL: 1440px,\n    XXL: 1680px,\n);\n\n$transition: .3s ease-in-out;\n\n/** Color definintions from styleguide **/\n$grey: #9E9E9E;\n$grey-5: #FAFAFA;\n$grey-10: #F5F5F5;\n$grey-20: #EEE;\n$grey-30: #E0E0E0;\n$grey-40: #BDBDBD;\n$grey-60: #757575;\n$grey-70: #616161;\n$grey-80: #424242;\n$grey-90: #212121;\n\n$purple: #673AB7;\n$purple-20: #EDE7F6;\n$purple-60: #B39DDB;\n$purple-90: #4527a0;\n\n$yellow: #FFEE58;\n$yellow-20: #FFFDE7;\n$yellow-40: #FFF59d;\n$yellow-60: #FDD835;\n\n$pink: #E91E63;\n\n$system-error: #D32F2F;\n$system-error-10: #FBEBEB;\n$system-success: #1DAC2C;\n\n/** Color definitions custom vars **/\n$bg-color: white;\n$base-color: $grey-90;\n$primary-color: $purple;\n$accent-color: $yellow;\n\n$link-color: $primary-color;\n$link-hover-color: darken($purple, 20%);\n\n$error-color: $system-error;\n$error-bg: $system-error-10;\n$success-color: $system-success;\n\n/** Text styles variables **/\n$base-font: #{Roboto, Arial, sans-serif};\n$heading-font: #{Roboto, Arial, sans-serif};\n\n$base-size: 1.6rem;\n\n// Match names of weights here with the weights of the fonts in fonts.scss\n$light: 300;\n$regular: 400;\n$medium: 500;\n$bold: 700;\n\n// No other font sizes are needed\n// Font sizes and line heights as defined by styleguide in pixels\n$textstyles: (\n    page-title: (\n        d: (font-size: 44, line-height: 59.8, font-weight: $bold, font-family: $heading-font),\n        M: (font-size: 64, line-height: 84.5),\n    ),\n    module-title: (\n        d: (font-size: 34, line-height: 47.6, font-weight: $bold, font-family: $heading-font),\n        M: (font-size: 44, line-height: 60.3),\n    ),\n    card-title: (\n        d: (font-size: 34, line-height: 36.5, font-weight: $bold, font-family: $heading-font),\n        M: (font-size: 26, line-height: 39.5),\n    ),\n    accordion-title: (\n        d: (font-size: 16, line-height: 23.8, font-weight: $bold, font-family: $heading-font),\n        M: (font-size: 22, line-height: 28.4),\n    ),\n    footer-title: (\n        d: (font-size: 14, line-height: 1.5, font-weight: $medium, font-family: $heading-font),\n    ),\n    richtext-h2: (\n        d: (font-size: 36, line-height: 48.2, font-weight: $bold, font-family: $heading-font),\n        M: (font-size: 40, line-height: 55.6),\n    ),\n    richtext-h3: (\n        d: (font-size: 28, line-height: 39.8, font-weight: $bold, font-family: $heading-font),\n        M: (font-size: 32, line-height: 45.1),\n    ),\n    richtext-h4: (\n        d: (font-size: 24, line-height: 36.5, font-weight: $bold, font-family: $heading-font),\n        M: (font-size: 26, line-height: 39.5),\n    ),\n    richtext-h5: (\n        d: (font-size: 20, line-height: 28.4, font-weight: $bold, font-family: $heading-font),\n        M: (font-size: 22, line-height: 32.6),\n    ),\n    richtext-h6: (\n        d: (font-size: 16, line-height: 23.7, font-weight: $bold, font-family: $heading-font),\n        M: (font-size: 18, line-height: 26.6),\n    ),\n    body: (\n        d: (font-size: 16, line-height: 23.5),  // Also card-text\n    ),\n    preamble: (\n        d: (font-size: 18, line-height: 27.4, font-weight: $light),\n        M: (font-size: 22, line-height: 32.6),\n    ),\n    paragraph: (\n        d: (font-size: 16, line-height: 23.5),\n        M: (font-size: 18, line-height: 27.7),\n    ),\n    quote: (\n        d: (font-size: 20, line-height: 39.4, font-weight: $bold, font-family: $heading-font),\n        M: (font-size: 26, line-height: 39.5),\n    ),\n    cite: (\n        d: (font-size: 14, line-height: 23.5),  // Quote name\n        M: (font-size: 18, line-height: 26.5),\n    ),\n    caption: (\n        d: (font-size: 12, line-height: 16.3, letter-spacing: .2px),\n    ),\n    button: (\n        d: (font-size: 16, line-height: 19.8, font-weight: $medium),\n        M: (font-size: 18, line-height: 24.5),\n    ),\n    textlink: (\n        d: (font-size: 16, line-height: 23.5),  // Footer link\n        M: (font-size: 18, line-height: 27.7),\n    ),\n    mainmenu: (\n        d: (font-size: 16, line-height: 23.7),\n    ),\n    servicemenu: (\n        d: (font-size: 14, line-height: 23.5),\n    ),\n    submenu: (\n        d: (font-size: 16, line-height: 19.7, font-weight: $bold),  // Add bold to active and first level instead of new text style\n    ),\n    breadcrumb: (\n        d: (font-size: 10, line-height: 12.2),\n        M: (font-size: 12, line-height: 16.3),\n    ),\n    label: (\n        d: (font-size: 14, line-height: 16.5, font-weight: $bold, text-transform: uppercase),\n    ),\n    label-card: (\n        d: (font-size: 12, line-height: 14, font-weight: $bold, text-transform: uppercase),\n    ),\n    date: (\n        d: (font-size: 14, line-height: 23.5),\n    ),\n);\n",'\n@mixin media($key) {\n    @if $key == \'d\' {\n        @content;\n    }\n    @else if map-has-key($breakpoints, $key) {\n        @media (min-width: map-get($breakpoints, $key)) {\n            @content;\n        }\n    } @else {\n        @error \'Unfortunately, no value could be retrieved from `#{$breakpoints}`. \'\n        + \'Please make sure it is defined in `$breakpoints` map.\';\n    }\n}\n\n@mixin media-max($key) {\n    @if $key == \'d\' {\n        @content;\n    }\n    @else if map-has-key($breakpoints, $key) {\n        @media (max-width: map-get($breakpoints, $key)-1) {\n            @content;\n        }\n    } @else {\n        @error \'Unfortunately, no value could be retrieved from `#{$breakpoints}`. \'\n        + \'Please make sure it is defined in `$breakpoints` map.\';\n    }\n}\n\n@mixin clearfix() {\n    &::after,\n    &::before {\n        content: \'\';\n        display: table;\n        clear: both;\n        width: 100%;\n    }\n}\n\n@mixin href-external() {\n    &:not([href^="mailto:"]):not([href^="tel:"]):not([href=""]):not([href^="#"]):not([href^="/"]):not([href^="http://example.se"]):not([href^="https://example.se"]):not([href*="localhost"]):not([href*="stage.example.se"]):not([href*="www.example.se"]):not([href*="beta.example.se"]) {\n        @content;\n    }\n}\n\n@mixin href-download() {\n    &[href$=".pdf"],\n    &[href$=".doc"],\n    &[href$=".docx"],\n    &[href$=".ppt"],\n    &[href$=".pptx"],\n    &[href$=".xls"],\n    &[href$=".xlsx"],\n    &[href$=".odt"],\n    &[href$=".eps"],\n    &[href$=".zip"] {\n        @content;\n    }\n}\n\n// For wrapping elements in the main grid\n// Usage: @include wrap;\n@mixin wrap($exclude: ()) {\n    @if not contains($exclude, d) {\n        margin-left: $gutter;\n        margin-right: $gutter;\n    }\n    @if not contains($exclude, SL) {\n        @include media(SL) {\n            max-width: (map-get($maxwidths, SL));\n            margin-left: auto;\n            margin-right: auto;\n        }\n    }\n    @if not contains($exclude, M) {\n        @include media(M) {\n            max-width: (map-get($maxwidths, M));\n            margin-left: auto;\n            margin-right: auto;\n        }\n    }\n    @if not contains($exclude, ML) {\n        @include media(ML) {\n            max-width: (map-get($maxwidths, ML));\n            margin-left: auto;\n            margin-right: auto;\n        }\n    }\n    @if not contains($exclude, L) {\n        @include media(L) {\n            max-width: (map-get($maxwidths, L));\n            margin-left: auto;\n            margin-right: auto;\n        }\n    }\n    @if not contains($exclude, XL) {\n        @include media(XL) {\n            max-width: (map-get($maxwidths, XL));\n            margin-left: auto;\n            margin-right: auto;\n        }\n    }\n    @if not contains($exclude, XXL) {\n        @include media(XXL) {\n            max-width: (map-get($maxwidths, XXL));\n            margin-left: auto;\n            margin-right: auto;\n        }\n    }\n}\n\n// For setting font-size and line-height on elements defined by variabels, including media queries\n// Usage: @include textstyle(h1);\n@mixin textstyle($key) {\n\n    // Loop through text map and set font-size and line-height for each media query\n    @if map-has-key($textstyles, $key) {\n        $map: map-get($textstyles, $key);\n\n        @each $media, $style in $map {\n            @include media($media) {\n                @if map-has-key($style, font-size) and map-has-key($style, line-height) {\n                    $font-size: map-get($style, font-size);\n                    $line-height: map-get($style, line-height);\n\n                    font-size: #{$font-size / 10}rem;\n                    line-height: #{round($line-height / $font-size * 100) / 100};\n                }\n\n                @each $param, $value in $style {\n                    @if $param != \'font-size\' and $param != \'line-height\' {\n                        #{$param}: $value;\n                    }\n                }\n            }\n        }\n    }\n}\n'],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={List:"Nav__List","Root--Vertical":"Nav__Root--Vertical","Root--Horizontal":"Nav__Root--Horizontal","Root--Main":"Nav__Root--Main","Root--Submenu":"Nav__Root--Submenu",Child:"Nav__Child","Child--ParentActive":"Nav__Child--ParentActive",Item:"Nav__Item",Toggle:"Nav__Toggle","Child--Expanded":"Nav__Child--Expanded",Link:"Nav__Link","Item--Active":"Nav__Item--Active","Root--Mobile":"Nav__Root--Mobile","Item--Search":"Nav__Item--Search",Root:"Nav__Root","Root--Service":"Nav__Root--Service"},__webpack_exports__.a=___CSS_LOADER_EXPORT___}}]);