(self.webpackChunkreact_corni_slider=self.webpackChunkreact_corni_slider||[]).push([[179],{24123:(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module=__webpack_require__.nmd(module),(0,__webpack_require__(3012).configure)([__webpack_require__(76625),__webpack_require__(27049)],module,!1)},73933:(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{"use strict";var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,{decorators:()=>decorators,parameters:()=>parameters});var client_api=__webpack_require__(78880),types=__webpack_require__(8597),esm=__webpack_require__(23827),styled_components_browser_esm=__webpack_require__(71893);const styles_reset=(0,styled_components_browser_esm.iv)(["*,*::before,*::after{box-sizing:border-box;}ul[class],ol[class]{padding:0;}body,h1,h2,h3,h4,p,ul[class],ol[class],li,figure,figcaption,blockquote,dl,dd{margin:0;}body{min-height:100vh;scroll-behavior:smooth;text-rendering:optimizeSpeed;line-height:1.5;}ul[class],ol[class]{list-style:none;}a:not([class]){text-decoration-skip-ink:auto;}img{max-width:100%;display:block;}article > * + *{margin-top:1em;}input,button,textarea,select{font:inherit;}@media (prefers-reduced-motion:reduce){*{animation-duration:0.01ms !important;animation-iteration-count:1 !important;transition-duration:0.01ms !important;scroll-behavior:auto !important;}}"]),GlobalStyles=(0,styled_components_browser_esm.vJ)([""," *{box-sizing:border-box;}html{box-sizing:border-box;}main{display:block;}"],styles_reset);var jsx_runtime=__webpack_require__(85893);const decorators=[Story=>(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(GlobalStyles,{}),(0,jsx_runtime.jsx)(Story,{})]})],parameters={actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}};function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":case"argTypes":return esm.kg.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(value));case"decorators":return value.forEach((function(decorator){return(0,client_api.$9)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return(0,client_api.HZ)(loader,!1)}));case"parameters":return(0,client_api.h1)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return(0,client_api.My)(enhancer)}));case"argsEnhancers":return value.forEach((function(enhancer){return(0,client_api._C)(enhancer)}));case"render":return(0,types.setGlobalRender)(value);case"globals":case"globalTypes":var v={};return v[key]=value,(0,client_api.h1)(v,!1);default:return console.log(key+" was not supported :( !")}}))},31305:(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__(3012)},14513:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Carousel:()=>Carousel,DefaultCarousel:()=>DefaultCarousel,default:()=>Slider_stories});var styled_components_browser_esm=__webpack_require__(71893);const Root=styled_components_browser_esm.ZP.div.withConfig({displayName:"Cardstyled__Root",componentId:"sc-17rzfuy-0"})([""]),Image=styled_components_browser_esm.ZP.img.withConfig({displayName:"Cardstyled__Image",componentId:"sc-17rzfuy-1"})(["width:100%;"]);var jsx_runtime=__webpack_require__(85893);const card_Card=({title,description})=>(0,jsx_runtime.jsxs)(Root,{children:[(0,jsx_runtime.jsx)(Image,{src:"https://picsum.photos/300/200",alt:"random"}),(0,jsx_runtime.jsx)("h3",{children:title}),(0,jsx_runtime.jsx)("p",{children:description})]});var react=__webpack_require__(67294);Math.easeInOutQuad=function(currentTime,startValue,changeInValue,duration){return(currentTime/=duration/2)<1?changeInValue/2*currentTime*currentTime+startValue:-changeInValue/2*(--currentTime*(currentTime-2)-1)+startValue};const scrollLeft=(element,change,duration)=>{const start=element.scrollLeft;let currentTime=0;const animateScroll=()=>{currentTime+=20,element.scrollLeft=Math.easeInOutQuad(currentTime,start,change,duration),currentTime<duration&&setTimeout(animateScroll,20)};animateScroll()},isServer=!("undefined"!=typeof window&&window.document&&window.document.createElement),useResize=(callback,state=[],dbTime=400)=>{(0,react.useEffect)((()=>{const resize=((callback,wait)=>{let timerId;return(...args)=>{clearTimeout(timerId),timerId=setTimeout((()=>{callback(...args)}),wait)}})(callback,dbTime);return window.addEventListener("resize",resize),()=>window.removeEventListener("resize",resize)}),state)},isObject=value=>"object"==typeof value&&null!==value,activeStyles=(0,styled_components_browser_esm.iv)(["background:red;cursor:auto;pointer-events:none;"]),Dots_styled_Root=styled_components_browser_esm.ZP.div.withConfig({displayName:"Dotsstyled__Root",componentId:"sc-oxdk4d-0"})(["display:flex;justify-content:center;",";"],(({styles})=>styles)),Dot=styled_components_browser_esm.ZP.div.withConfig({displayName:"Dotsstyled__Dot",componentId:"sc-oxdk4d-1"})(["width:10px;height:10px;border-radius:50%;margin-right:10px;background:gray;cursor:pointer;",";"],(({active})=>active&&activeStyles)),dots_Dots=({items=0,activeDot,onClick,styles})=>{const totalItems=[...Array(items).keys()];return(0,jsx_runtime.jsx)(Dots_styled_Root,{styles,children:totalItems.map(((item,idx)=>(0,jsx_runtime.jsx)(Dot,{active:activeDot===idx,onClick:()=>onClick(idx)},idx)))})},containerButtonsStyles=(0,styled_components_browser_esm.iv)(["position:absolute;cursor:pointer;top:50%;transform:translateY(-50%);height:100%;background:rgba(0,0,0,0.4);padding:8px;display:flex;align-items:center;"]),buttonsStyles=(0,styled_components_browser_esm.iv)(["color:red;font-size:20px;"]),Slider_styled_Root=styled_components_browser_esm.ZP.div.withConfig({displayName:"Sliderstyled__Root",componentId:"sc-ygpdh1-0"})(["position:relative;"]),Container=styled_components_browser_esm.ZP.div.withConfig({displayName:"Sliderstyled__Container",componentId:"sc-ygpdh1-1"})(["overflow:auto;-ms-overflow-style:none;scrollbar-width:none;&::-webkit-scrollbar{display:none;}"]),List=styled_components_browser_esm.ZP.ul.withConfig({displayName:"Sliderstyled__List",componentId:"sc-ygpdh1-2"})(["display:flex;list-style:none;margin:0;padding:0;"]),ListItem=styled_components_browser_esm.ZP.li.withConfig({displayName:"Sliderstyled__ListItem",componentId:"sc-ygpdh1-3"})(["padding:",";width:","px;min-width:","px;"],(({gutter})=>`0 ${gutter}px`),(({width})=>width),(({width})=>width)),LeftButtonContainer=styled_components_browser_esm.ZP.div.withConfig({displayName:"Sliderstyled__LeftButtonContainer",componentId:"sc-ygpdh1-4"})(["",";left:0;display:",";"],containerButtonsStyles,(({hidden})=>hidden?"none":"flex")),RightButtonContainer=styled_components_browser_esm.ZP.div.withConfig({displayName:"Sliderstyled__RightButtonContainer",componentId:"sc-ygpdh1-5"})(["",";right:0;display:",";"],containerButtonsStyles,(({hidden})=>hidden?"none":"flex")),LeftButton=styled_components_browser_esm.ZP.div.withConfig({displayName:"Sliderstyled__LeftButton",componentId:"sc-ygpdh1-6"})(["",";"],buttonsStyles),RightButton=styled_components_browser_esm.ZP.div.withConfig({displayName:"Sliderstyled__RightButton",componentId:"sc-ygpdh1-7"})(["",";"],buttonsStyles),defaultConfig={itemsToShow:1,gutter:0,nextVisibleItemWidth:0,itemsToSlide:1,showDots:!0,animationVelocity:300,showArrows:!0},slider_Slider=({config={},data=[],component:Component})=>{const rootRef=(0,react.useRef)(null),[itemWidth,setItemWidth]=(0,react.useState)(null),[scrollPosition,setScrollPosition]=(0,react.useState)(0),[fixedPosition,setFixedPosition]=(0,react.useState)(!0),[dots,setDots]=(0,react.useState)(0),[activeDot,setActiveDot]=(0,react.useState)(0),[sliderConfig,setSliderConfig]=(0,react.useState)(!(!isObject(value=config)||0===Object.keys(value).length)&&config||defaultConfig);var value;const[showLeftArrow,setShowLeftArrow]=(0,react.useState)(!1),[showRightArrow,setShowRightArrow]=(0,react.useState)(!0),[hideArrows,setHideArrows]=(0,react.useState)(!0),{itemsToShow=1,gutter=0,nextVisibleItemWidth=0,itemsToSlide=1,showDots,dotsStyles,animationVelocity,showArrows=!0,arrows,ssr}=sliderConfig,setResponsiveConfig=responsiveData=>{const orderedResponsive=Object.keys(responsiveData).map((item=>Number(item))).sort(((a,b)=>b-a)),windowWidth=isServer?ssr||orderedResponsive[0]:window.innerWidth,responsiveConfig=responsiveData[orderedResponsive.find((item=>Number(item)<=windowWidth))],{responsive,...restConfig}=config;setSliderConfig({...restConfig,...responsiveConfig})};useResize((()=>{const{responsive}=config;responsive&&setResponsiveConfig(responsive)}),[config.responsive]),(0,react.useEffect)((()=>{const{responsive}=config;if(responsive&&setResponsiveConfig(responsive),showDots){const dots=Math.ceil((data.length-(itemsToShow-1))/itemsToSlide);setDots(dots)}}),[itemsToShow,config.responsive]),(0,react.useEffect)((()=>{if(rootRef.current){const calculatedItemWidth=rootRef.current.offsetWidth/itemsToShow-nextVisibleItemWidth/itemsToShow;setItemWidth(calculatedItemWidth);setScrollPosition(calculatedItemWidth*itemsToSlide)}}),[rootRef.current,sliderConfig]);const getCurrentIndex=()=>{const{scrollLeft}=rootRef.current,displacement=itemWidth*itemsToSlide,currentIndex=Math.round(Number((scrollLeft/displacement).toFixed(2)));return setActiveDot(currentIndex),currentIndex},getDisplacement=(direction,scrollPosition)=>{const isRightDirection="right"===direction,extraIndex=isRightDirection?0:itemsToSlide,extraCurrentIndex=isRightDirection?1:0,listItems=rootRef.current.children[0].children,currentIndex=getCurrentIndex();if(fixedPosition)return scrollPosition;setFixedPosition(!0);const index=(currentIndex+extraCurrentIndex)*itemsToSlide-extraIndex;if(data.length>index&&index>=0){const rootLeft=rootRef.current.getBoundingClientRect().left,fixedDisplacement=listItems[(currentIndex+extraCurrentIndex)*itemsToSlide-extraIndex].getBoundingClientRect().left-rootLeft;return isRightDirection?fixedDisplacement:-fixedDisplacement}return scrollPosition},handleMouseEnter=()=>setHideArrows(!1);return(0,jsx_runtime.jsxs)(Slider_styled_Root,{children:[(0,jsx_runtime.jsxs)(Container,{ref:rootRef,onWheel:e=>{e.deltaX&&(setFixedPosition(!1),getCurrentIndex())},onTouchMove:()=>{setFixedPosition(!1),getCurrentIndex()},onScroll:()=>{const{scrollLeft}=rootRef.current,isScrollEnd=Math.ceil(scrollLeft)>=itemWidth*data.length-(itemWidth*itemsToShow+nextVisibleItemWidth);getCurrentIndex(),setShowRightArrow(!isScrollEnd),setShowLeftArrow(0!==scrollLeft)},onMouseEnter:handleMouseEnter,onMouseLeave:()=>setHideArrows(!0),onTouchStart:handleMouseEnter,children:[(0,jsx_runtime.jsx)(List,{children:data.map(((item,idx)=>(0,jsx_runtime.jsx)(ListItem,{width:itemWidth,gutter,children:(0,jsx_runtime.jsx)(Component,{...item})},idx)))}),showArrows&&(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(LeftButtonContainer,{hidden:!showLeftArrow||hideArrows,children:(0,jsx_runtime.jsx)(LeftButton,{onClick:()=>{const displacement=getDisplacement("left",scrollPosition);scrollLeft(rootRef.current,-displacement,animationVelocity)},children:arrows?arrows.left:"<"})}),(0,jsx_runtime.jsx)(RightButtonContainer,{hidden:!showRightArrow||hideArrows,children:(0,jsx_runtime.jsx)(RightButton,{onClick:()=>{const displacement=getDisplacement("right",scrollPosition);displacement===scrollPosition&&setFixedPosition(!1),scrollLeft(rootRef.current,displacement,animationVelocity)},children:arrows?arrows.right:">"})})]})]}),showDots&&(0,jsx_runtime.jsx)(dots_Dots,{styles:dotsStyles,items:dots,activeDot,onClick:index=>{const listItems=rootRef.current.children[0].children;if(data.length>=index&&index>=0){const rootLeft=rootRef.current.getBoundingClientRect().left,displacement=listItems[index*itemsToSlide].getBoundingClientRect().left-rootLeft;scrollLeft(rootRef.current,displacement,animationVelocity),scrollLeft(rootRef.current,displacement,animationVelocity)}}})]})},data=[...Array(20).keys()].map(((item,idx)=>({title:`Title ${idx+1}`,description:`Description ${idx+1}`}))),Slider_stories={title:"Slider",component:slider_Slider,argTypes:{}},Template=props=>(0,jsx_runtime.jsx)(slider_Slider,{...props}),Carousel=Template.bind({});Carousel.args={config:{itemsToShow:3,itemsToSlide:3,gutter:10,showDots:!0,nextVisibleItemWidth:100,animationVelocity:300,responsive:{0:{itemsToShow:1,itemsToSlide:1,gutter:5,showDots:!1,nextVisibleItemWidth:50,animationVelocity:300},414:{itemsToShow:2,itemsToSlide:1,gutter:5,showDots:!0,nextVisibleItemWidth:50,animationVelocity:300},767:{itemsToShow:3,itemsToSlide:1,gutter:10,showDots:!0,nextVisibleItemWidth:75,animationVelocity:500},1024:{itemsToShow:5,itemsToSlide:5,gutter:10,showDots:!0,nextVisibleItemWidth:100,animationVelocity:500}},showArrows:!0,arrows:{left:(0,jsx_runtime.jsx)("div",{children:"L"}),right:(0,jsx_runtime.jsx)("div",{children:"R"})},ssr:1024},data,component:card_Card};const DefaultCarousel=Template.bind({});DefaultCarousel.args={config:{},data,component:card_Card}},27049:(module,__unused_webpack_exports,__webpack_require__)=>{var map={"./application/components/slider/Slider.stories.js":14513};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=27049},76625:module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id=76625,module.exports=webpackEmptyContext},24654:()=>{}},__webpack_require__=>{"use strict";var __webpack_exec__=moduleId=>__webpack_require__(__webpack_require__.s=moduleId);__webpack_require__.O(0,[255],(()=>(__webpack_exec__(37707),__webpack_exec__(99669),__webpack_exec__(31305),__webpack_exec__(90168),__webpack_exec__(4379),__webpack_exec__(59746),__webpack_exec__(84873),__webpack_exec__(62853),__webpack_exec__(81953),__webpack_exec__(22609),__webpack_exec__(64049),__webpack_exec__(21424),__webpack_exec__(73933),__webpack_exec__(24123))));__webpack_require__.O()}]);
//# sourceMappingURL=main.630c0930.iframe.bundle.js.map