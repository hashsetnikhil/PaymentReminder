import{k as p,r,o as d,l as m,u as c,x as V}from"./vendor.d12b5734.js";const i={props:{modelValue:{type:String,default:null}},emits:["update:modelValue"],setup(t,{emit:u}){const a=t,e=p({get:()=>a.modelValue,set:l=>{u("update:modelValue",l)}});return(l,o)=>{const n=r("BaseInput");return d(),m(n,{modelValue:c(e),"onUpdate:modelValue":o[0]||(o[0]=s=>V(e)?e.value=s:null),type:"url"},null,8,["modelValue"])}}};export{i as default};
