(function(){"use strict";var e={8580:function(e,n,t){var o=t(9242),r=t(3766),i=t(3396),s=t.p+"img/Jars-rule-financial.9c33e225.png";const a=e=>((0,i.dD)("data-v-702e0e86"),e=e(),(0,i.Cn)(),e),u={class:"header"},l=a((()=>(0,i._)("h1",null,"Jars Money Management System",-1))),c=(0,i.Uk)("VNĐ "),f={class:"details"},p={style:{display:"flex","justify-content":"center"}},d={class:"popup-img"},y=a((()=>(0,i._)("img",{src:s,alt:"Jars rule financial"},null,-1))),m=[y],v={class:"jar-container"};function h(e,n,t,r,s,a){const y=(0,i.up)("jarComponentVue");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i._)("div",u,[l,(0,i.wy)((0,i._)("input",{onInput:n[0]||(n[0]=(...e)=>r.setMoneyToStore&&r.setMoneyToStore(...e)),type:"number","onUpdate:modelValue":n[1]||(n[1]=e=>r.inputMoney=e)},null,544),[[o.nr,r.inputMoney]]),c,(0,i._)("div",f,[(0,i._)("button",{onClick:n[2]||(n[2]=e=>r.show=!r.show),class:"button-17",role:"button"},"For more details")])]),(0,i._)("div",p,[(0,i.Wm)(o.uT,{name:"slide-fade"},{default:(0,i.w5)((()=>[(0,i.wy)((0,i._)("div",d,m,512),[[o.F8,r.show]])])),_:1})]),(0,i.Wm)(o.uT,{name:"slide-fade"},{default:(0,i.w5)((()=>[(0,i.wy)((0,i._)("div",v,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(r.jars,((e,n)=>((0,i.wg)(),(0,i.iD)("div",{key:n,class:"jar"},[(0,i.Wm)(y,{title:e.name.toUpperCase(),percent:e.per,useFor:e.useFor,detailsMoney:r.money[e.name]},null,8,["title","percent","useFor","detailsMoney"])])))),128))],512),[[o.F8,!r.show]])])),_:1})],64)}var g=t(4870);const _=(0,r.Q_)("financial",{state:()=>({money:0}),actions:{setMoney(e){this.money=e}},getters:{necessities:e=>55*e.money/100,longTerm:e=>15*e.money/100,play:e=>10*e.money/100,education:e=>10*e.money/100,financial:e=>10*e.money/100,give:e=>5*e.money/100}});var w=t(7139);const M=e=>((0,i.dD)("data-v-0bcf202d"),e=e(),(0,i.Cn)(),e),b={class:"container"},F={class:"title"},j=M((()=>(0,i._)("p",{class:"suggest"},"Use this for:",-1))),k=(0,i.Uk)(" of your income");function C(e,n,t,o,r,s){return(0,i.wg)(),(0,i.iD)("div",b,[(0,i._)("h2",F,(0,w.zw)(t.title),1),j,(0,i._)("div",null,[(0,i._)("h3",null,[(0,i._)("span",null,(0,w.zw)(t.percent),1),k]),(0,i._)("ul",null,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(t.useFor,((e,n)=>((0,i.wg)(),(0,i.iD)("li",{key:n},(0,w.zw)(e),1)))),128))])]),(0,i._)("h1",null,(0,w.zw)(t.detailsMoney.toLocaleString("it-IT",{style:"currency",currency:"VND"})),1)])}var O={props:["title","percent","useFor","detailsMoney"],setup(){return{}}},D=t(89);const T=(0,D.Z)(O,[["render",C],["__scopeId","data-v-0bcf202d"]]);var S=T,x={setup(){const e=(0,g.iH)(!1),n=_(),t=(0,g.iH)(0);function o(){t.value<999999999?n.setMoney(t.value):alert("Stop that's a lot of money")}const r=[{name:"necessities",per:"55%",useFor:["Food","Rent","Electricity","Bills"]},{name:"longTerm",per:"10%",useFor:["Car","House","Vocations","Medical"]},{name:"play",per:"10%",useFor:["Myself fund","Leisurely Expense"]},{name:"education",per:"10%",useFor:["Coaching","Mentoring","Books","Courses"]},{name:"financial",per:"10%",useFor:["Stocks","Mutual Funds","Other"]},{name:"give",per:"5%",useFor:["Charitable Donations"]}];return{jars:r,setMoneyToStore:o,inputMoney:t,money:n,show:e}},components:{jarComponentVue:S}};const H=(0,D.Z)(x,[["render",h],["__scopeId","data-v-702e0e86"]]);var V=H;const U=(0,o.ri)(V);U.use((0,r.WB)()),U.mount("#app")}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var i=n[o]={exports:{}};return e[o](i,i.exports,t),i.exports}t.m=e,function(){var e=[];t.O=function(n,o,r,i){if(!o){var s=1/0;for(c=0;c<e.length;c++){o=e[c][0],r=e[c][1],i=e[c][2];for(var a=!0,u=0;u<o.length;u++)(!1&i||s>=i)&&Object.keys(t.O).every((function(e){return t.O[e](o[u])}))?o.splice(u--,1):(a=!1,i<s&&(s=i));if(a){e.splice(c--,1);var l=r();void 0!==l&&(n=l)}}return n}i=i||0;for(var c=e.length;c>0&&e[c-1][2]>i;c--)e[c]=e[c-1];e[c]=[o,r,i]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){t.p="/Jars-Money-Management-System/"}(),function(){var e={143:0};t.O.j=function(n){return 0===e[n]};var n=function(n,o){var r,i,s=o[0],a=o[1],u=o[2],l=0;if(s.some((function(n){return 0!==e[n]}))){for(r in a)t.o(a,r)&&(t.m[r]=a[r]);if(u)var c=u(t)}for(n&&n(o);l<s.length;l++)i=s[l],t.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return t.O(c)},o=self["webpackChunkvue3_first_app"]=self["webpackChunkvue3_first_app"]||[];o.forEach(n.bind(null,0)),o.push=n.bind(null,o.push.bind(o))}();var o=t.O(void 0,[998],(function(){return t(8580)}));o=t.O(o)})();
//# sourceMappingURL=app.5952a658.js.map