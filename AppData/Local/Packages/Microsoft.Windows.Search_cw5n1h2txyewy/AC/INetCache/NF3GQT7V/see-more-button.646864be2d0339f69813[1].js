(window.webpackJsonp=window.webpackJsonp||[]).push([["see-more-button"],{"6FBI":function(e,t,o){"use strict";o.d(t,"b",(function(){return u})),o.d(t,"a",(function(){return d})),o.d(t,"c",(function(){return h}));var n=o("wh7w"),s=o("U6nx"),r=o("E2Zb"),i=Array.prototype.splice;var a=function(e,t){for(var o=e?t.length:0,n=o-1;o--;){var a=t[o];if(o==n||a!==c){var c=a;Object(r.a)(a)?i.call(e,a,1):Object(s.a)(e,a)}}return e};var c=function(e,t){var o=[];if(!e||!e.length)return o;var s=-1,r=[],i=e.length;for(t=Object(n.a)(t,3);++s<i;){var c=e[s];t(c,s,e)&&(o.push(c),r.push(s))}return a(e,r),o};let b=!0;const l=[];function u(e){b=e;for(const e of l)e(b)}function d(e){l.push(e)}function h(e){c(l,t=>e===t)}},"74wN":function(e,t){},CCfy:function(e,t){},"V/86":function(e,t,o){"use strict";o.r(t),o.d(t,"SeeMoreButtonWindowsShell",(function(){return W})),o.d(t,"SeeMoreButtonWindowsShellActions",(function(){return w})),o.d(t,"SeeMoreButtonWindowsShellConnector",(function(){return A})),o.d(t,"SeeMoreButtonWindowsShellReducer",(function(){return L})),o.d(t,"ToolingInfo",(function(){return D}));var n=o("+viU"),s=o("74wN"),r=o("5mwN"),i=o("qYO7"),a=o("Zn5T"),c=o("Xjb4"),b=o("o1qX"),l=o("6FBI"),u=o("objN"),d=o("6u3Q"),h=o("9CwC"),p=o("rRWH"),g=o("iuMt"),f=o("0fst");const m=e=>`url("data:image/svg+xml; utf8, <svg width=\\"7\\" height=\\"12\\" viewBox=\\"0 0 7 12\\" xmlns=\\"http://www.w3.org/2000/svg\\"> <path d=\\"M0.528634 0.862008C0.268287 1.12236 0.268287 1.54447 0.528634 1.80482L4.72391 6.00008L0.528634 10.1953C0.268287 10.4557 0.268287 10.8778 0.528634 11.1381C0.788987 11.3985 1.21109 11.3985 1.47145 11.1381L6.13811 6.47148C6.39844 6.21115 6.39844 5.78901 6.13811 5.52868L1.47145 0.862008C1.21109 0.601661 0.788987 0.601661 0.528634 0.862008Z\\" fill=\\"${e}\\"/> </svg>")`,{borderRadius:j,bottomPosition:O,chevronPaddingTop:C,fontSize:B,lineHeight:M,paddingLeftRight:v,paddingTopBottom:S}={borderRadius:"32px",bottomPosition:"10px",chevronPaddingTop:"1px",fontSize:"14px",lineHeight:"20px",paddingLeftRight:"26px",paddingTopBottom:"6px"},k=e=>({button:{"&&&":{"&:after":{content:m(Object(h.a)(e).replace("#","%23"))}}}});class _ extends r.a{constructor(){super(...arguments),this.handledProps=Object.assign(Object.assign({},r.b),{enableShySeeMoreButton:void 0,experienceName:void 0,footerPeek:void 0,managedClasses:void 0,onSeeMoreButtonVisibleChange:void 0,seeMoreButtonLabel:void 0,seeMoreButtonProps:void 0,seeMoreButtonTelemetryObject:void 0,seeMoreButtonVisible:void 0}),this.handleScroll=e=>{const{seeMoreButtonVisible:t,onSeeMoreButtonVisibleChange:o}=this.props,n=this.rootElement.scrollTop;!t&&n>=225?o(!0):t&&n<225&&o(!1)}}componentDidMount(){super.componentDidMount(),this.props.enableShySeeMoreButton&&(Object(l.b)(!1),this.rootElement=document.getElementById("root"),this.rootElement&&this.rootElement.addEventListener("scroll",this.handleScroll))}componentWillUnmount(){this.props.enableShySeeMoreButton&&this.rootElement&&this.rootElement.removeEventListener("scroll",this.handleScroll)}render(){super.render();const{enableShySeeMoreButton:e,seeMoreButtonVisible:t,managedClasses:o,footerPeek:n}=this.props,s=Object(b.a)(o.sm_buttonContainer,[o.sm_buttonContainer_hide,e&&!t],[o.sm_peek,"P"===n],[o.sm_peekExtended,"E"===n],[o.sm_peekOneCol,"O"===n]);return c.default.createElement("div",{className:this.generateClassNames(s)},e?this.renderSeeMoreAccentButton():this.renderSeeMoreButton())}renderSeeMoreButton(){const{seeMoreButtonProps:e,seeMoreButtonLabel:t,seeMoreButtonTelemetryObject:o,managedClasses:n}=this.props;return c.default.createElement("div",null,c.default.createElement("a",Object.assign({},e,this.unhandledProps(),{className:Object(b.a)(n.sm_button,n.sm_anchor)},o&&o.render()),t))}renderSeeMoreAccentButton(){const{seeMoreButtonProps:e,seeMoreButtonLabel:t,seeMoreButtonTelemetryObject:o,managedClasses:n}=this.props;return c.default.createElement(i.a,Object.assign({},e,this.unhandledProps(),{className:n.sm_button,jssStyleSheet:k},o&&o.render()),t)}}_.defaultProps={experienceName:a.a.seeMoreButtonWindowsShell};var x=o("G82u");class w{}w.seeMoreButtonVisible=new x.a("SeeMoreButtonVisible"),w.footerPeekUpdate=new x.a("FooterPeekUpdate");var y=o("wZ5I"),P=o("D57K"),T=o("Am8i"),$=o("WfnD");const E={inspect:e=>{const{config:t,state:o}=e||{},{footerPeek:n,seeMoreButtonVisible:s}=o||{},{enableShySeeMoreButton:r,localizedStrings:i}=t||{};return{props:{enableShySeeMoreButton:r,footerPeek:n,seeMoreButtonLabel:i&&i.seeMoreButtonLabel,seeMoreButtonVisible:s},missingChildren:[]}}};var U=o("rvYQ"),F=o("b3T/");class A extends $.a{constructor(){super(...arguments),this.ClickThroughUrl=()=>this.seeMoreButtonClickThroughUrl?this.seeMoreButtonClickThroughUrl:this.seeMoreButtonClickThroughUrl=(this.config.seeMoreButtonFormattedUrl||"https://windows.msn.com?locale={0}").replace("{0}",U.b.CurrentMarket),this.onVisibleChange=e=>{Object(l.b)(e),w.seeMoreButtonVisible.getActionSender(this).send(e)}}mapStateToProps(e){const t=E.inspect({config:this.config,children:this.childComponentInstanceList,state:e});return Object.assign(Object.assign(Object.assign({},t.props),this.telemetryTags),{seeMoreButtonTelemetryObject:this.seeMoreButtonTelemetryObject,seeMoreButtonProps:{href:this.ClickThroughUrl(),target:"_blank"},onSeeMoreButtonVisibleChange:this.onVisibleChange})}onComponentConnect(e){return Object(P.b)(this,void 0,void 0,(function*(){yield $.a.prototype.onComponentConnect.call(this,e),this.ClickThroughUrl(),this.seeMoreButtonTelemetryObject=this.telemetryObject.addOrUpdateChild({name:"SeeMore",content:{headline:"See More",type:T.c.Feed},destinationUrl:this.seeMoreButtonClickThroughUrl}),this.config&&this.config.listenFooterPeek&&F.a.footerPeek.registerObserver(e=>{const t=e.params[0];w.footerPeekUpdate.getActionSender(this).send(t)})}))}}var V=o("05Au");class L{reduce(e,t){if(!e)return{};if(!t)return e;let o,n=V.a.handleAction(t,w.footerPeekUpdate,t=>{o=Object.assign(Object.assign({},e),{footerPeek:t})});return n=n||V.a.handleAction(t,w.seeMoreButtonVisible,t=>{o=Object.assign(Object.assign({},e),{seeMoreButtonVisible:t})}),o||e}}var N=o("CCfy");const W=Object(n.a)(e=>({sm_buttonContainer:{bottom:O,position:"fixed",transform:`translate(${Object(p.b)("-","",e.direction)}50%)`,transition:"bottom 200ms ease-in-out","z-index":""+f.a.Above},sm_buttonContainer_hide:{bottom:"-32px"},sm_button:{"border-radius":j,border:"none",cursor:"pointer","font-size":B,"line-height":M,padding:`${S} ${v}`,"text-decoration":"none",[u.A]:{color:u.s,display:"flex",border:"1px solid","border-color":u.s,"&:after":{content:m("LinkText")+" !important"}},"white-space":"nowrap","&&&":Object.assign({"box-shadow":"0px 1.6px 3.6px rgba(0, 0, 0, 0.13), 0px 0px 2.9px rgba(0, 0, 0, 0.11)"},Object(g.a)({border:"2px solid","border-color":Object(d.e)(e)?"rgba(255, 255, 255, 1)":"rgba(0, 0, 0, 1)"})),"&:after":{content:m(Object(d.e)(e)?"%23000000":"%23FFFFFF"),display:"inline-block",margin:Object(p.b)("0 0 0 10px","0 10px 0 0",e.direction),"padding-top":C,transform:`rotate(${Object(p.b)("0","180deg",e.direction)})`,"vertical-align":"middle"}},sm_anchor:{background:Object(d.e)(e)?"#CDCDCD":"#3B3B3B",color:Object(d.e)(e)?"#000000":"#FFFFFF","&:hover, &:focus":{background:Object(d.e)(e)?"#E5E5E5":"#4A4A4A"}},sm_peek:{bottom:"45px"},sm_peekExtended:{bottom:"65px"},sm_peekOneCol:{bottom:"86px"}}))(_),D={reactComponent:W,experienceConfigSchema:y.SeeMoreButtonWindowsShellConfigSchema,defaultMockState:s.mockDefaultState,mockState:s.mockState,mockConfig:N.mockConfig,inspector:E.inspect}},qYO7:function(e,t,o){"use strict";o.d(t,"a",(function(){return a}));var n=o("+viU"),s=o("vXlU"),r=o("cSKQ"),i=o("yR4y");const a=Object(n.a)(s.a)(r.default);a.displayName=i.a+"AccentButton"},vXlU:function(e,t,o){"use strict";var n=o("iuMt"),s=o("fz//"),r=o("s6ks"),i=o("9CwC"),a=o("aP31"),c=o("7b0X"),b=o("objN");const l=Object.assign(Object.assign({},r.a),{button:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},Object(r.b)()),{color:i.a,fill:i.a,background:a.c,"&:hover:enabled, a&:not($button__disabled):hover":Object.assign(Object.assign({background:a.b},b.z),{"& $button_beforeContent, & $button_afterContent":Object.assign({},b.o)}),"&:active:enabled, a&:not($button__disabled):active":{background:a.a}}),Object(n.a)(Object.assign({"border-color":c.a,"box-shadow":Object(s.a)("0 0 0 2px inset {0}",Object(c.b)(a.c))},b.k))),{"&:disabled":Object.assign(Object.assign({},b.i),{"& $button_beforeContent, & $button_afterContent":Object.assign({},b.j)}),"& $button_beforeContent, & $button_afterContent":Object.assign({fill:i.a},b.y)}),b.b),{"a&:not($button__disabled)":Object.assign(Object.assign({},b.r),{"& $button_beforeContent, & $button_afterContent":Object.assign({},b.q),"&:not($button__disabled):hover":Object.assign(Object.assign({},b.p),{"& $button_beforeContent, & $button_afterContent":Object.assign({},b.q)}),"&$button__disabled":Object.assign(Object.assign({},b.i),{"& $button_beforeContent, & $button_afterContent":Object.assign({},b.j),"&:hover":{[b.A]:{"box-shadow":"none !important"},"& $button_beforeContent, & $button_afterContent":Object.assign({},b.j)}})})})});t.a=l},wZ5I:function(e,t){}}]);