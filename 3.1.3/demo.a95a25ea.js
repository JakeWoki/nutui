import{c as l}from"./mobile.05f53482.js";import{B as a,C as e,r as o,o as t,e as n,j as s,k as c,g as i,l as u}from"./vendor.21cda21c.js";import"./index.20f35658.js";const{createDemo:m}=l("avatar");var f=m({props:{},setup:()=>({handleClick:()=>{console.log("触发点击头像")}})});a("data-v-646e018d");const d={class:"demo full"},r=i("h2",null,'默认用法 (内置"small","normal","large"三种尺寸规格)',-1),g=i("h2",null,"修改形状",-1),p=i("h2",null,"修改背景色",-1),h=i("h2",null,"修改背景图片",-1),v=i("h2",null,"可以修改头像的内容",-1),b=u("N"),_=i("h2",null,"点击头像触发事件",-1);e(),f.render=function(l,a,e,i,u,m){const f=o("nut-avatar"),j=o("nut-cell");return t(),n("div",d,[r,s(j,null,{default:c((()=>[s(f,{size:"large",icon:"https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png"}),s(f,{size:"normal",icon:"https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png"}),s(f,{size:"small",icon:"https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png"})])),_:1}),g,s(j,null,{default:c((()=>[s(f,{icon:"my",shape:"square"}),s(f,{icon:"my",shape:"round"})])),_:1}),p,s(j,null,{default:c((()=>[s(f,{class:"demo-avatar",icon:"my","bg-color":"#FA2C19"})])),_:1}),h,s(j,null,{default:c((()=>[s(f,{icon:"https://img12.360buyimg.com/imagetools/jfs/t1/196430/38/8105/14329/60c806a4Ed506298a/e6de9fb7b8490f38.png"})])),_:1}),v,s(j,null,{default:c((()=>[s(f,null,{default:c((()=>[b])),_:1})])),_:1}),_,s(j,null,{default:c((()=>[s(f,{icon:"my",onActiveAvatar:l.handleClick},null,8,["onActiveAvatar"])])),_:1})])},f.__scopeId="data-v-646e018d";export{f as default};
