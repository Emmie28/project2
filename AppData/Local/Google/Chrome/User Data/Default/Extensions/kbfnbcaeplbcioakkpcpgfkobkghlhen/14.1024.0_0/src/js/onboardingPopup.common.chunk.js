(self.webpackChunk=self.webpackChunk||[]).push([[7026],{45702:(e,t,n)=>{n.r(t),n.d(t,{OnboardingPopup:()=>c});var o=n(5872),a=n(7417),r=n(88326),s=n(62111),i=n(27378),l=n(19106),p=n(61658);class c extends i.Component{constructor(){super(...arguments),this.cancel=()=>{this.props.remove()}}componentDidMount(){l.J.onboardingPopupShow(),(0,s.T)().onboardingPopupShow()}render(){return i.createElement("div",{className:(0,o.cs)(p.gButtonPopup,p.onboarding,this.props.isFlipped&&p.flipped)},i.createElement("p",{className:p.title},"Grammarly is Now Active"),i.createElement("p",{className:p.text},"Want to see how it works?"),i.createElement(a.z,{dataGrammarlyPart:"btnTakeOnboardingTour",cls:"onboarding",styles:{width:"180px"},text:"take a quick tour",onClick:()=>this.props.startOnboardingTour()}),i.createElement(r.M,{dataGrammarlyPart:"btnCancelOnboarding",clickHandler:()=>{l.J.onboardingPopupCloseButtonClick("onboardingPopup"),(0,s.T)().onboardingPopupCancel(),this.cancel()}},i.createElement("button",{className:p.link},"No, thanks")),i.createElement("div",{className:(0,o.cs)(p.popupFooter,this.props.isFlipped&&p.isFlipped)},"▲"))}}},7417:(e,t,n)=>{n.d(t,{z:()=>l});var o=n(5872),a=n(88326),r=n(27378),s=n(61007);n(54817);const i=({className:e})=>r.createElement("div",{className:`gr_-spinner ${e}`},r.createElement("div",{className:"gr_-bounce1"}),r.createElement("div",{className:"gr_-bounce2"}),r.createElement("div",{className:"gr_-bounce3"}));class l extends r.Component{constructor(){super(...arguments),this.onClick=e=>{e.preventDefault(),this.props.loading||this.props.onClick&&this.props.onClick(e)}}render(){const{loading:e,cls:t}=this.props,n=e?"":this.props.text,l=this.props.styles||{width:290},p=(0,o.cs)({[s.buttonContainer]:!0,[s[t]]:void 0!==t,[s.loading]:e});return r.createElement("div",{className:p,style:l},e&&r.createElement(i,{className:s.buttonSpinner}),r.createElement(a.M,{clickHandler:this.onClick,dataGrammarlyPart:this.props.dataGrammarlyPart},r.createElement("button",{type:"button",style:l,className:s.button},n)))}}},61658:e=>{e.exports={gButtonPopup:"_1kF5v",newDataControl:"_2DXpn",showWrapper:"jbUGk",flipped:"_33Y70",title:"_3j0IH",icon:"_3mzPB",button:"_3ayiu",buttonText:"_3iTGv",popupFooter:"_1Pn79",isFlipped:"mrPCR",settings:"_1wln3",text:"_1igtd",bold:"_233YR",link:"_3Zolz",secondary:"_3CC0d",firstTime:"eytxh",close:"_1Q8MJ",disable:"_2GBXV",gdocs:"_1rwC7",gdocsBeta:"_3Nt7c",header:"_2QN8E",headerUnavailable:"_3oKby",cardsIcon:"_2p0cU",bubbleArrow:"_3P-V4",unavailablePopup:"_3ItKT",loginReminder:"_3nwkh",permission:"_3t67i",secondaryButton:"_1gDFt",onboarding:"_36Myk",chipmunkGButtonCalloutPopup:"_1BqSc",containerContents:"_3-RfQ",containerHeaderDefault:"tSLDM",containerHeaderImageBlock:"_2u4gj",containerTitle:"_3SP28",containerText:"w2FY9",containerButton:"_3p4LT",dismiss:"_1CkBd",warningPopup:"dcXJa",btn:"_36yMW",warning:"_3IVIe",ctaBtnGroup:"_1Bbg8",ctaButton:"_1mTiW",later:"_22eWb",managedSSOControl:"nF7Y6",illustration:"ThWjl",signInWithSSO:"_3cCtR",signInWithSSO2:"_2Z9Lo"}},61007:e=>{e.exports={buttonContainer:"zh9NK",form:"_1Fp6z",buttonSpinner:"_2ox-M",button:"w4BE8",loading:"II5Au",onboarding:"_3f6zz",disable:"_26Laa"}},54817:()=>{}}]);