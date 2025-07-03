import{j as a}from"./jsx-runtime-DBhXMc9n.js";import{B as t}from"./index-CHMBiEFL.js";import"./index-yUhCOHB4.js";const p={component:t,argTypes:{type:{control:{type:"radio"},options:["button","submit","reset"]}}},r={render:s=>a.jsx(t,{...s,onClick:()=>{alert("Hello from Turborepo!")},children:"Hello"}),name:"Button",args:{children:"Hello",type:"button",style:{color:"blue",border:"1px solid gray",padding:10,borderRadius:10}}};var o,e,n;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: props => <BasicButton {...props} onClick={(): void => {
    // eslint-disable-next-line no-alert -- alert for demo
    alert("Hello from Turborepo!");
  }}>
      Hello
    </BasicButton>,
  name: "Button",
  args: {
    children: "Hello",
    type: "button",
    style: {
      color: "blue",
      border: "1px solid gray",
      padding: 10,
      borderRadius: 10
    }
  }
}`,...(n=(e=r.parameters)==null?void 0:e.docs)==null?void 0:n.source}}};const c=["Primary"];export{r as Primary,c as __namedExportsOrder,p as default};
