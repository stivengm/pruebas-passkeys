import{b as pe,c as de,d as he,e as fe,f as ye,g as ge}from"./chunk-FEOETI4K.js";import{d as re}from"./chunk-XSAAQTIS.js";import"./chunk-IVYPRR5I.js";import{a as ue}from"./chunk-XHWH72AI.js";import{a as me}from"./chunk-NJ3E4L6N.js";import{a as ce}from"./chunk-YF3TQPZC.js";import"./chunk-ZWDUPT4T.js";import{a as ee,b as y,d as te,e as ie,g as L,i as ne,k as oe,r as se}from"./chunk-Z7AQ5W2I.js";import{a as le}from"./chunk-5S3YCTQA.js";import{a as ae}from"./chunk-WUTQ432T.js";import"./chunk-3QSCHTZS.js";import{Dc as X,Fb as G,Ob as U,Pb as Z,Rb as Y,Ya as w,_a as E,a as q,b as W,cb as K,eb as D,fb as d,g as e,gb as p,h as o,hb as $,i as u,ic as H,j as s,k as m,ka as V,ob as R,wb as g,yc as J}from"./chunk-PLWOJE2C.js";var Te=["inputEmail"],Re=["inputPhone"];function Ie(F,i){F&1&&(d(0,"span",14),g(1," El correo electr\xF3nico no es correcto "),p())}function Me(F,i){F&1&&(d(0,"span",14),g(1," El n\xFAmero de tel\xE9fono no es correcto "),p())}var a,c,r,l,C,S,_,f,b,I,ve,M,Ce,O,Se,x,_e,P,we,k,Ee,A,De,z,Ne,N,Q,T,j,v=class{constructor(i,t,n,h){o(this,f);o(this,I);o(this,M);o(this,O);o(this,x);o(this,P);o(this,k);o(this,A);o(this,z);o(this,N);o(this,T);o(this,a,void 0);o(this,c,void 0);o(this,r,void 0);o(this,l,void 0);o(this,C,void 0);o(this,S,void 0);o(this,_,void 0);this._router=i,this._modalService=t,this._changeDetectorRef=n,this._envStore=h,this.loading=!1,u(this,C,!1),u(this,S,!1),u(this,_,!1),this.emailControl=new L("",[y.required,y.minLength(5),y.maxLength(150),y.pattern("^[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?\\.)+[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?$")]),this.phoneNumberControl=new L("",[y.required,y.minLength(10),y.maxLength(15)])}ngOnInit(){let i=this._router.url.replace(/\/v-2\/validacion\/|\/basic/g,"");pe(W(q({},this._envStore.env),{ENTITY_ID:this._envStore.env.PRODUCTION?"7":"4"}),"app-root",i!=="basic"?i:void 0).catch(t=>{this._modalService.closeModal()})}enter(i){i.preventDefault(),this.preOnSubmit()}preOnSubmit(){this.emailControl.valid&&this.phoneNumberControl.valid?s(this,I,ve).call(this):(this.emailControl.markAllAsTouched(),this.phoneNumberControl.markAllAsTouched())}},be=v;a=new WeakMap,c=new WeakMap,r=new WeakMap,l=new WeakMap,C=new WeakMap,S=new WeakMap,_=new WeakMap,f=new WeakSet,b=function(){return m(this,null,function*(){let{SyAlertComponent:i}=yield import("./sy-alert.component-CRVFQ3F7.js");this._modalService.openModal(i)})},I=new WeakSet,ve=function(){this.loading=!0;let i=s(this,k,Ee).call(this);u(this,a,new he(i)),e(this,a).on("ready",()=>{this.loading=!1,s(this,P,we).call(this),s(this,A,De).call(this),e(this,a).show()}),e(this,a).on("success",t=>{s(this,M,Ce).call(this,Number(t.data.processId)),e(this,a).loading=!0}),e(this,a).on("error",t=>m(this,null,function*(){let{SyResponseComponent:n}=yield import("./sy-response.component-Z3WLKG5P.js");this._modalService.openModal(n,{typeResponse:"error",title:t.type,message:t.message})})),e(this,a).on("click-aux-button",()=>{s(this,f,b).call(this);let t=this._modalService.onDismiss.subscribe(n=>{t.unsubscribe(),n&&e(this,a).unmount()})}),e(this,a).onFormTutor("click-aux-button",()=>{s(this,f,b).call(this);let t=this._modalService.onDismiss.subscribe(n=>{t.unsubscribe(),n&&e(this,a).unmount()})})},M=new WeakSet,Ce=function(i){u(this,c,new ye({entityId:this._envStore.env.PRODUCTION?"7":"4",channel:"WEB_CLIENT",appIdentifier:"web.demo.idcolombia",processId:i,processType:"ENR",documentType:this.documentType,identificationNumber:this.identification})),e(this,c).on("error",t=>m(this,null,function*(){let{SyResponseComponent:n}=yield import("./sy-response.component-Z3WLKG5P.js");this._modalService.openModal(n,{typeResponse:"error",title:t.type,message:t.message}),e(this,C)||e(this,a).unmount()})),e(this,c).on("ready",()=>{e(this,a).loading=!1,e(this,a).unmount(),e(this,c).show(),u(this,C,!0)}),e(this,c).on("success",t=>m(this,null,function*(){s(this,O,Se).call(this,i),e(this,c).loading=!0})),e(this,c).on("click-aux-button",()=>{s(this,f,b).call(this);let t=this._modalService.onDismiss.subscribe(n=>{t.unsubscribe(),n&&e(this,c).unmount()})})},O=new WeakSet,Se=function(i){u(this,r,new fe({entityId:this._envStore.env.PRODUCTION?"7":"4",channel:"WEB_CLIENT",appIdentifier:"web.demo.idcolombia",processId:i,processType:"ENR",documentType:this.documentType,identificationNumber:this.identification})),e(this,r).on("ready",()=>{e(this,c).loading=!1,e(this,c).unmount(),e(this,r).show(),u(this,S,!0)}),e(this,r).on("success",t=>m(this,null,function*(){t.code==="EP004"?(e(this,r).loading=!0,yield s(this,T,j).call(this,i),e(this,r).loading=!1,e(this,r).unmount()):(s(this,x,_e).call(this,i),e(this,r).loading=!0)})),e(this,r).on("error",t=>m(this,null,function*(){let{SyResponseComponent:n}=yield import("./sy-response.component-Z3WLKG5P.js");this._modalService.openModal(n,{typeResponse:"error",title:t.type,message:t.message}),e(this,S)||e(this,c).unmount()})),e(this,r).on("click-aux-button",()=>{s(this,f,b).call(this);let t=this._modalService.onDismiss.subscribe(n=>{t.unsubscribe(),n&&e(this,r).unmount()})})},x=new WeakSet,_e=function(i){u(this,l,new ge({entityId:this._envStore.env.PRODUCTION?"7":"4",channel:"WEB_CLIENT",appIdentifier:"web.demo.idcolombia",processId:i,processType:"ENR",documentType:this.documentType,identificationNumber:this.identification})),e(this,l).on,e(this,l).on("ready",()=>{e(this,r).loading=!1,e(this,r).unmount(),e(this,l).show(),u(this,_,!0)}),e(this,l).on("success",t=>m(this,null,function*(){e(this,l).loading=!0,yield s(this,T,j).call(this,i),e(this,l).loading=!1,e(this,l).unmount()})),e(this,l).on("error",t=>m(this,null,function*(){let{SyResponseComponent:n}=yield import("./sy-response.component-Z3WLKG5P.js");this._modalService.openModal(n,{typeResponse:"error",title:t.type,message:t.message}),e(this,_)||e(this,r).unmount()})),e(this,l).onIndication("click-aux-button",()=>{s(this,f,b).call(this);let t=this._modalService.onDismiss.subscribe(n=>{t.unsubscribe(),n&&e(this,l).unmount()})}),e(this,l).on("click-aux-button",()=>{s(this,f,b).call(this);let t=this._modalService.onDismiss.subscribe(n=>{t.unsubscribe(),n&&e(this,l).unmount()})})},P=new WeakSet,we=function(){this.emailControl.reset(""),this.phoneNumberControl.reset("")},k=new WeakSet,Ee=function(){return this.inputEmail.nativeElement.blur(),this.inputPhone.nativeElement.blur(),{entityId:this._envStore.env.PRODUCTION?"7":"4",processType:"ENR",documentType:this.documentType,identificationNumber:this.identification,phoneIndicative:"57",phoneNumber:this.phoneNumberControl.value,channel:"WEB_CLIENT",email:this.emailControl.value,appIdentifier:"web.demo.idcolombia",otpInternal:!0,internalTutor:!0}},A=new WeakSet,De=function(){this._modalService.closeModal(),this._changeDetectorRef.detectChanges()},z=new WeakSet,Ne=function(i){return{typeResponse:i===2?"success":i===1?"warning":"error",title:i===2?"\xA1Felicitaciones!":i===1?"No hemos logrado validar tu identidad a\xFAn":"Algo sali\xF3 mal",message:i===2?"Ahora tienes tu identidad digital en SoyYo":i===1?"Por favor cont\xE1ctanos para que podamos ayudarte":"No pudimos crear tu identidad, vuelve a intentarlo"}},N=new WeakSet,Q=function(i){return m(this,null,function*(){let{SyResponseComponent:t}=yield import("./sy-response.component-Z3WLKG5P.js");if(i.code=="EP001")return this._modalService.openModal(t,s(this,z,Ne).call(this,i.data.identityLevel)),i;this._modalService.openModal(t,{typeResponse:"error",title:"Algo sali\xF3 mal",message:"No pudimos crear tu identidad, vuelve a intentarlo"})})},T=new WeakSet,j=function(i){return m(this,null,function*(){try{let t=yield de(i,"WEB_CLIENT");yield s(this,N,Q).call(this,t)}catch(t){yield s(this,N,Q).call(this,t)}})},(()=>{v.\u0275fac=function(t){return new(t||v)(E(re),E(ae),E(H),E(le))}})(),(()=>{v.\u0275cmp=V({type:v,selectors:[["app-sy-register-basic"]],viewQuery:function(t,n){if(t&1&&(Z(Te,5),Z(Re,5)),t&2){let h;U(h=Y())&&(n.inputEmail=h.first),U(h=Y())&&(n.inputPhone=h.first)}},inputs:{identification:"identification",documentType:"documentType"},standalone:!0,features:[G],decls:25,vars:4,consts:[["title",""],["right",""],[1,"sy-content"],[1,"sy-header"],[1,"sy-form"],["for","email"],[1,"sy-input-group"],["inputmode","email","type","email","autocomplete","nope","autocorrect","off","autocapitalize","none","spellcheck","false",1,"sy-input",3,"formControl","keydown.enter"],["inputEmail",""],["class","helper",4,"ngIf"],["for","phone"],["onlyNumber","","inputmode","numeric","autocomplete","nope","autocorrect","off","autocapitalize","none","spellcheck","false",1,"sy-input",3,"formControl","keydown.enter"],["inputPhone",""],["actions","","type","button",1,"sy-button","sy-button-primary",3,"click"],[1,"helper"]],template:function(t,n){t&1&&(d(0,"app-sy-modal"),$(1,"app-sy-logo",0)(2,"app-sy-close-modal",1),d(3,"main",2)(4,"header",3)(5,"h4"),g(6,"Registro de datos personales"),p()(),d(7,"form",4)(8,"fieldset")(9,"label",5),g(10,"Tu correo electr\xF3nico"),p(),d(11,"div",6)(12,"input",7,8),R("keydown.enter",function(B){return n.enter(B)}),p()(),K(14,Ie,2,0,"span",9),p(),d(15,"fieldset")(16,"label",10)(17,"sub"),g(18,"Tu celular"),p()(),d(19,"div",6)(20,"input",11,12),R("keydown.enter",function(B){return n.enter(B)}),p()(),K(22,Me,2,0,"span",9),p()()(),d(23,"button",13),R("click",function(){return n.preOnSubmit()}),g(24," Continuar "),p()()),t&2&&(w(12),D("formControl",n.emailControl),w(2),D("ngIf",n.emailControl.invalid&&(n.emailControl.dirty||n.emailControl.touched)),w(6),D("formControl",n.phoneNumberControl),w(2),D("ngIf",n.phoneNumberControl.invalid&&(n.phoneNumberControl.dirty||n.phoneNumberControl.touched)))},dependencies:[X,J,ce,me,ue,se,ne,ee,te,ie,oe],styles:[".sy-content[_ngcontent-%COMP%]{height:100%;display:grid;grid-template-rows:50px 1fr;padding:0 1rem}.sy-header[_ngcontent-%COMP%]{font-family:montserrat;text-align:center;font-size:24px;font-weight:700;color:#2e2c35}.sy-form[_ngcontent-%COMP%]{display:flex;flex-direction:column}fieldset[_ngcontent-%COMP%]{display:grid;grid-template-rows:28px 1fr 24px;row-gap:.2rem}.sy-input-group[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:center;text-align:center;border-radius:var(--small-border-radius);font-weight:600;position:relative;border:1px solid;border-radius:8px;clip-path:inset(0)}.sy-input-group[_ngcontent-%COMP%] > select[_ngcontent-%COMP%]{width:100px;height:100%;text-align:center;border:0px;background:transparent;border-color:transparent}.sy-input[_ngcontent-%COMP%]{min-height:40px;width:100%;font-family:montserrat!important;font-weight:700;font-size:16px;padding:0 16px;border:none;border-color:transparent;background:transparent}fieldset[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{font-size:.8em;margin-top:.2rem}sub[_ngcontent-%COMP%]{color:var(--body-font-color);font-size:16px;font-weight:500;bottom:0}"]})})();export{be as SyRegisterBasicComponent};
