import{j as o}from"./jsx-runtime-DBhXMc9n.js";import{g as E,e as F,f as W,_ as T,a as n,h as f,c as K,j as p,k as q,l as A,m as N,n as d}from"./styled-BJXWxNW7.js";import{B as m}from"./Box-B4p-b8-E.js";import{r as G}from"./index-yUhCOHB4.js";function O(e){return E("MuiCircularProgress",e)}F("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);const V=["className","color","disableShrink","size","style","thickness","value","variant"];let h=e=>e,M,_,$,D;const t=44,Z=N(M||(M=h`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)),H=N(_||(_=h`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px;
  }
`)),J=e=>{const{classes:r,variant:s,color:a,disableShrink:i}=e,g={root:["root",s,`color${p(a)}`],svg:["svg"],circle:["circle",`circle${p(s)}`,i&&"circleDisableShrink"]};return q(g,O,r)},Q=f("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:s}=e;return[r.root,r[s.variant],r[`color${p(s.color)}`]]}})(({ownerState:e,theme:r})=>n({display:"inline-block"},e.variant==="determinate"&&{transition:r.transitions.create("transform")},e.color!=="inherit"&&{color:(r.vars||r).palette[e.color].main}),({ownerState:e})=>e.variant==="indeterminate"&&A($||($=h`
      animation: ${0} 1.4s linear infinite;
    `),Z)),X=f("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(e,r)=>r.svg})({display:"block"}),Y=f("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(e,r)=>{const{ownerState:s}=e;return[r.circle,r[`circle${p(s.variant)}`],s.disableShrink&&r.circleDisableShrink]}})(({ownerState:e,theme:r})=>n({stroke:"currentColor"},e.variant==="determinate"&&{transition:r.transitions.create("stroke-dashoffset")},e.variant==="indeterminate"&&{strokeDasharray:"80px, 200px",strokeDashoffset:0}),({ownerState:e})=>e.variant==="indeterminate"&&!e.disableShrink&&A(D||(D=h`
      animation: ${0} 1.4s ease-in-out infinite;
    `),H)),U=G.forwardRef(function(r,s){const a=W({props:r,name:"MuiCircularProgress"}),{className:i,color:g="primary",disableShrink:z=!1,size:x=40,style:I,thickness:l=3.6,value:v=0,variant:b="indeterminate"}=a,B=T(a,V),c=n({},a,{color:g,disableShrink:z,size:x,thickness:l,value:v,variant:b}),k=J(c),C={},P={},S={};if(b==="determinate"){const j=2*Math.PI*((t-l)/2);C.strokeDasharray=j.toFixed(3),S["aria-valuenow"]=Math.round(v),C.strokeDashoffset=`${((100-v)/100*j).toFixed(3)}px`,P.transform="rotate(-90deg)"}return o.jsx(Q,n({className:K(k.root,i),style:n({width:x,height:x},P,I),ownerState:c,ref:s,role:"progressbar"},S,B,{children:o.jsx(X,{className:k.svg,ownerState:c,viewBox:`${t/2} ${t/2} ${t} ${t}`,children:o.jsx(Y,{className:k.circle,style:C,ownerState:c,cx:t,cy:t,r:(t-l)/2,fill:"none",strokeWidth:l})})}))}),ee=f(m,{shouldForwardProp:e=>e!=="styleOptions"})(({styleOptions:e})=>({position:"relative",left:d(e,"isUseMenu",!1)?"40.5vw":d(e,"isAbsoluteCenter")?"50vw":"41.5vw",height:d(e,"isUseMenu",!1)?"68vh":d(e,"isAbsoluteCenter")?"50vh":"63vh",zIndex:5e3}));function y({options:e}){const{dimmed:r=!1,fullScreen:s=!1,isUseMenu:a,isAbsoluteCenter:i=!1}=e;return s||r?o.jsxs(ee,{styleOptions:{isFullScreen:s,isDimmed:r,isUseMenu:a,isAbsoluteCenter:i},children:[o.jsx(m,{sx:{position:"absolute",top:"30vh",backgroundColor:"transparent",padding:"15px 15px",borderRadius:"5px",transform:"translate(-50%, -50%)"},children:o.jsx(U,{color:"warning"})}),o.jsx(m,{sx:{position:"absolute",width:"auto",top:"37vh"},children:o.jsx(m,{sx:{fontSize:"1.5rem",fontWeight:"500",transform:"translate(-50%, -50%)",color:"#000000"},children:"화면을 불러오는 중 입니다..."})})]}):o.jsx(U,{color:"primary"})}y.__docgenInfo={description:"",methods:[],displayName:"Loading",props:{options:{required:!0,tsType:{name:"LoadingOptions"},description:""}}};const ae={component:y,argTypes:{options:{fullScreen:!1,dimmed:!1,isUseMenu:!1,isAbsoluteCenter:!1}}},u={render:e=>o.jsx(y,{...e}),name:"Loading",args:{options:{fullScreen:!1,dimmed:!0,isUseMenu:!1,isAbsoluteCenter:!1}}};var w,L,R;u.parameters={...u.parameters,docs:{...(w=u.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: (props: LoadingProps) => <Loading {...props} />,
  name: "Loading",
  args: {
    options: {
      fullScreen: false,
      dimmed: true,
      isUseMenu: false,
      isAbsoluteCenter: false
    }
  }
}`,...(R=(L=u.parameters)==null?void 0:L.docs)==null?void 0:R.source}}};const ie=["Primary"];export{u as Primary,ie as __namedExportsOrder,ae as default};
