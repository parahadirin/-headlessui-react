import C,{createContext as V,Fragment as ne,useContext as Q,useMemo as D,useReducer as re,useRef as K}from"react";import{Keys as P}from'../../components/keyboard.js';import{useEvent as _}from'../../hooks/use-event.js';import{useId as Y}from'../../hooks/use-id.js';import{useIsoMorphicEffect as k}from'../../hooks/use-iso-morphic-effect.js';import{useLatestValue as J}from'../../hooks/use-latest-value.js';import{useResolveButtonType as ae}from'../../hooks/use-resolve-button-type.js';import{useSyncRefs as w}from'../../hooks/use-sync-refs.js';import{FocusSentinel as le}from'../../internal/focus-sentinel.js';import{Hidden as oe}from'../../internal/hidden.js';import{Focus as y,focusIn as F,FocusResult as O,sortByDomNode as v}from'../../utils/focus-management.js';import{match as G}from'../../utils/match.js';import{microTask as se}from'../../utils/micro-task.js';import{getOwnerDocument as ie}from'../../utils/owner.js';import{Features as Z,forwardRefWithAs as H,render as U}from'../../utils/render.js';import{StableCollection as pe,useStableCollectionIndex as ee}from'../../utils/stable-collection.js';var ue=(t=>(t[t.Forwards=0]="Forwards",t[t.Backwards=1]="Backwards",t))(ue||{}),Te=(o=>(o[o.Less=-1]="Less",o[o.Equal=0]="Equal",o[o.Greater=1]="Greater",o))(Te||{}),de=(r=>(r[r.SetSelectedIndex=0]="SetSelectedIndex",r[r.RegisterTab=1]="RegisterTab",r[r.UnregisterTab=2]="UnregisterTab",r[r.RegisterPanel=3]="RegisterPanel",r[r.UnregisterPanel=4]="UnregisterPanel",r))(de||{});let ce={0(e,n){var u;let t=v(e.tabs,T=>T.current),o=v(e.panels,T=>T.current),s=t.filter(T=>{var l;return!((l=T.current)!=null&&l.hasAttribute("disabled"))}),r={...e,tabs:t,panels:o};if(n.index<0||n.index>t.length-1){let T=G(Math.sign(n.index-e.selectedIndex),{[-1]:()=>1,0:()=>G(Math.sign(n.index),{[-1]:()=>0,0:()=>0,1:()=>1}),1:()=>0});if(s.length===0)return r;let l=G(T,{0:()=>t.indexOf(s[0]),1:()=>t.indexOf(s[s.length-1])});return{...r,selectedIndex:l===-1?e.selectedIndex:l}}let i=t.slice(0,n.index),b=[...t.slice(n.index),...i].find(T=>s.includes(T));if(!b)return r;let c=(u=t.indexOf(b))!=null?u:e.selectedIndex;return c===-1&&(c=e.selectedIndex),{...r,selectedIndex:c}},1(e,n){var r;if(e.tabs.includes(n.tab))return e;let t=e.tabs[e.selectedIndex],o=v([...e.tabs,n.tab],i=>i.current),s=(r=o.indexOf(t))!=null?r:e.selectedIndex;return s===-1&&(s=e.selectedIndex),{...e,tabs:o,selectedIndex:s}},2(e,n){return{...e,tabs:e.tabs.filter(t=>t!==n.tab)}},3(e,n){return e.panels.includes(n.panel)?e:{...e,panels:v([...e.panels,n.panel],t=>t.current)}},4(e,n){return{...e,panels:e.panels.filter(t=>t!==n.panel)}}},X=V(null);X.displayName="TabsDataContext";function h(e){let n=Q(X);if(n===null){let t=new Error(`<${e} /> is missing a parent <Tab.Group /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,h),t}return n}let $=V(null);$.displayName="TabsActionsContext";function q(e){let n=Q($);if(n===null){let t=new Error(`<${e} /> is missing a parent <Tab.Group /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,q),t}return n}function fe(e,n){return G(n.type,ce,e,n)}let be=ne;function me(e,n){let{defaultIndex:t=0,vertical:o=!1,manual:s=!1,onChange:r,selectedIndex:i=null,...R}=e;const b=o?"vertical":"horizontal",c=s?"manual":"auto";let u=i!==null,T=w(n),[l,d]=re(fe,{selectedIndex:i!=null?i:t,tabs:[],panels:[]}),x=D(()=>({selectedIndex:l.selectedIndex}),[l.selectedIndex]),m=J(r||(()=>{})),g=J(l.tabs),E=D(()=>({orientation:b,activation:c,...l}),[b,c,l]),S=_(p=>(d({type:1,tab:p}),()=>d({type:2,tab:p}))),A=_(p=>(d({type:3,panel:p}),()=>d({type:4,panel:p}))),L=_(p=>{M.current!==p&&m.current(p),u||d({type:0,index:p})}),M=J(u?e.selectedIndex:l.selectedIndex),N=D(()=>({registerTab:S,registerPanel:A,change:L}),[]);k(()=>{d({type:0,index:i!=null?i:t})},[i]),k(()=>{if(M.current===void 0||l.tabs.length<=0)return;let p=v(l.tabs,a=>a.current);p.some((a,f)=>l.tabs[f]!==a)&&L(p.indexOf(l.tabs[M.current]))});let B={ref:T};return C.createElement(pe,null,C.createElement($.Provider,{value:N},C.createElement(X.Provider,{value:E},E.tabs.length<=0&&C.createElement(le,{onFocus:()=>{var p,I;for(let a of g.current)if(((p=a.current)==null?void 0:p.tabIndex)===0)return(I=a.current)==null||I.focus(),!0;return!1}}),U({ourProps:B,theirProps:R,slot:x,defaultTag:be,name:"Tabs"}))))}let Pe="div";function ye(e,n){let{orientation:t,selectedIndex:o}=h("Tab.List"),s=w(n);return U({ourProps:{ref:s,role:"tablist","aria-orientation":t},theirProps:e,slot:{selectedIndex:o},defaultTag:Pe,name:"Tabs.List"})}let xe="button";function ge(e,n){var p,I;let t=Y(),{id:o=`headlessui-tabs-tab-${t}`,...s}=e,{orientation:r,activation:i,selectedIndex:R,tabs:b,panels:c}=h("Tab"),u=q("Tab"),T=h("Tab"),l=K(null),d=w(l,n);k(()=>u.registerTab(l),[u,l]);let x=ee("tabs"),m=b.indexOf(l);m===-1&&(m=x);let g=m===R,E=_(a=>{var j;let f=a();if(f===O.Success&&i==="auto"){let W=(j=ie(l))==null?void 0:j.activeElement,z=T.tabs.findIndex(te=>te.current===W);z!==-1&&u.change(z)}return f}),S=_(a=>{let f=b.map(W=>W.current).filter(Boolean);if(a.key===P.Space||a.key===P.Enter){a.preventDefault(),a.stopPropagation(),u.change(m);return}switch(a.key){case P.Home:case P.PageUp:return a.preventDefault(),a.stopPropagation(),E(()=>F(f,y.First));case P.End:case P.PageDown:return a.preventDefault(),a.stopPropagation(),E(()=>F(f,y.Last))}if(E(()=>G(r,{vertical(){return a.key===P.ArrowUp?F(f,y.Previous|y.WrapAround):a.key===P.ArrowDown?F(f,y.Next|y.WrapAround):O.Error},horizontal(){return a.key===P.ArrowLeft?F(f,y.Previous|y.WrapAround):a.key===P.ArrowRight?F(f,y.Next|y.WrapAround):O.Error}}))===O.Success)return a.preventDefault()}),A=K(!1),L=_(()=>{var a;A.current||(A.current=!0,(a=l.current)==null||a.focus({preventScroll:!0}),u.change(m),se(()=>{A.current=!1}))}),M=_(a=>{a.preventDefault()}),N=D(()=>({selected:g}),[g]),B={ref:d,onKeyDown:S,onMouseDown:M,onClick:L,id:o,role:"tab",type:ae(e,l),"aria-controls":(I=(p=c[m])==null?void 0:p.current)==null?void 0:I.id,"aria-selected":g,tabIndex:g?0:-1};return U({ourProps:B,theirProps:s,slot:N,defaultTag:xe,name:"Tabs.Tab"})}let Ee="div";function Ae(e,n){let{selectedIndex:t}=h("Tab.Panels"),o=w(n),s=D(()=>({selectedIndex:t}),[t]);return U({ourProps:{ref:o},theirProps:e,slot:s,defaultTag:Ee,name:"Tabs.Panels"})}let Re="div",Le=Z.RenderStrategy|Z.Static;function _e(e,n){var E,S,A,L;let t=Y(),{id:o=`headlessui-tabs-panel-${t}`,tabIndex:s=0,...r}=e,{selectedIndex:i,tabs:R,panels:b}=h("Tab.Panel"),c=q("Tab.Panel"),u=K(null),T=w(u,n);k(()=>c.registerPanel(u),[c,u]);let l=ee("panels"),d=b.indexOf(u);d===-1&&(d=l);let x=d===i,m=D(()=>({selected:x}),[x]),g={ref:T,id:o,role:"tabpanel","aria-labelledby":(S=(E=R[d])==null?void 0:E.current)==null?void 0:S.id,tabIndex:x?s:-1};return!x&&((A=r.unmount)==null||A)&&!((L=r.static)!=null&&L)?C.createElement(oe,{as:"span","aria-hidden":"true",...g}):U({ourProps:g,theirProps:r,slot:m,defaultTag:Re,features:Le,visible:x,name:"Tabs.Panel"})}let Se=H(ge),Ie=H(me),De=H(ye),Fe=H(Ae),he=H(_e),$e=Object.assign(Se,{Group:Ie,List:De,Panels:Fe,Panel:he});export{$e as Tab};
