import{c as a}from"./chunk-Z7AQ5W2I.js";import{Ua as c,_a as r,na as s,ob as l}from"./chunk-PLWOJE2C.js";var i=class{constructor(e,t){this._el=e,this._control=t}onInput(e){let t=this._el.nativeElement.value.split(" ").join("");if(!/^\d+$/.test(e.data)&&e.data!==null){this._control.valueAccessor?.writeValue(t.slice(0,-1));return}if(!t.length)return;let n=t.split("").reverse().join("").match(/.{1,3}/g).map(o=>o.split("").reverse().join("")).reverse().join(" ");this._control.valueAccessor.writeValue(n)}},u=i;(()=>{i.\u0275fac=function(t){return new(t||i)(r(c),r(a))}})(),(()=>{i.\u0275dir=s({type:i,selectors:[["","separatorIdentification",""]],hostBindings:function(t,n){t&1&&l("input",function(d){return n.onInput(d)})}})})();export{u as a};
