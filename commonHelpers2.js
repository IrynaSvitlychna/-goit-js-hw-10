import{x as n}from"./assets/bi_x-octagon-2d2943c0.js";import{i as t}from"./assets/vendor-651d7991.js";const m="/-goit-js-hw-10/assets/Vector-d8e7e73a.svg",s=document.querySelector("form");s.addEventListener("submit",o=>{o.preventDefault();const r=o.currentTarget.elements.delay.value,i=document.querySelector('input[name="state"]:checked'),a=new Promise((e,l)=>{setTimeout(()=>{i.value==="fulfilled"?e(r):l(r)}),a.then(c=>{t.success({title:"OK",message:`Fulfilled promise in ${c}ms`,position:"topRight",iconUrl:`${m}`,backgroundColor:"#59A10D",titleColor:"#fff",messageColor:"#fff",messageSize:"16px",progressBarColor:"#B5EA7C"})})}).catch(e=>{t.error({title:"Error",message:`Rejected promise in ${e}ms`,position:"topRight",iconUrl:`${n}`,backgroundColor:"#EF4040",titleColor:"#fff",messageColor:"#fff",messageSize:"16px",progressBarColor:"#FFBEBE"})});s.reset()});
//# sourceMappingURL=commonHelpers2.js.map
