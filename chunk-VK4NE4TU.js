import{a as V}from"./chunk-5RVIOHDR.js";import{b as L,c as O}from"./chunk-T7ATAZOX.js";import{a as j}from"./chunk-XHWH72AI.js";import{a as z}from"./chunk-NJ3E4L6N.js";import{a as N}from"./chunk-YF3TQPZC.js";import{a as D,b as a,d as M,g as h,k as T}from"./chunk-Z7AQ5W2I.js";import{a as E}from"./chunk-WUTQ432T.js";import{Ob as S,Pb as w,Rb as x,Ya as l,_a as p,cb as u,eb as s,fb as i,gb as o,hb as f,k as g,ka as C,ob as y,ta as v,ua as b,wb as r,wc as I,yb as _,yc as k}from"./chunk-PLWOJE2C.js";var q=["input"];function A(d,e){d&1&&(i(0,"p",12),r(1," El documento no es correcto "),o())}function Q(d,e){d&1&&(i(0,"div",13),v(),i(1,"svg",14),f(2,"path",15),o(),b(),i(3,"p",16),r(4," Debes ser mayor de 14 a\xF1os y tener el consentimiento de uno de tus padres o tutor. "),o()())}var m=class{constructor(e,n){this._modalService=e,this._typesDocumentService=n,this.identification="",this.typeDocument="CC",this.typesDocuments=L,this.identificationNumberControl=new h(this.identification,[a.required,a.minLength(6),a.maxLength(20)]),this.documentTypeControl=new h(this.typeDocument,[a.required,a.minLength(2),a.maxLength(3)])}ngOnInit(){this.identificationNumberControl.setValue(this.identification),this.documentTypeControl.setValue(this.typeDocument),this._typesDocumentService.getTypes().then(e=>{this.typesDocuments=e})}trackByDocument(e,n){return n.Id_DocumentType}keyEnter(e){e.key==="Enter"&&this.onConfirmeIdentification()}onConfirmeIdentification(){this.identificationNumberControl.valid&&this.documentTypeControl.valid?(this.input.nativeElement.blur(),this.openModalIdentification()):this.identificationNumberControl.markAllAsTouched()}onBack(){this._modalService.closeModal()}openModalIdentification(){return g(this,null,function*(){let{ConfirmIdentificationComponent:e}=yield import("./confirm-identification.component-UIIM5OMV.js");this._modalService.openModal(e,{documentType:this.documentTypeControl.value,identification:this.identificationNumberControl.value.split(" ").join("")})})}},F=m;(()=>{m.\u0275fac=function(n){return new(n||m)(p(E),p(O))}})(),(()=>{m.\u0275cmp=C({type:m,selectors:[["app-welcome-soyyo"]],viewQuery:function(n,t){if(n&1&&w(q,5),n&2){let c;S(c=x())&&(t.input=c.first)}},inputs:{identification:"identification",typeDocument:"typeDocument"},decls:20,vars:6,consts:[["title",""],["right",""],[1,"heading"],[1,"text-fields"],["for","document"],[1,"field"],[1,"info"],["inputmode","numeric","separatorIdentification","","autocomplete","nope","autocorrect","off","autocapitalize","none","spellcheck","false",1,"min-heigth",3,"formControl","keydown"],["input",""],["class","helper",4,"ngIf"],["class","alert",4,"ngIf"],["actions","","type","button",1,"button","large-btn",3,"disabled","ngClass","click"],[1,"helper"],[1,"alert"],["width","24","height","25","viewBox","0 0 24 25","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M12 16.55L12 12.05M11.991 8.45L11.991 8.9M3 12.5C3 7.52944 7.02944 3.5 12 3.5C16.9706 3.5 21 7.52944 21 12.5C21 17.4706 16.9706 21.5 12 21.5C7.02944 21.5 3 17.4706 3 12.5Z","stroke","#442F9A","stroke-width","1.2","stroke-linecap","round","stroke-linejoin","round"],[1,"p"]],template:function(n,t){n&1&&(i(0,"app-sy-modal"),f(1,"app-sy-logo",0)(2,"app-sy-close-modal",1),i(3,"div",2)(4,"h4"),r(5,"Ingresa tu documento"),o(),i(6,"p"),r(7," Es la forma segura de identificarte digitalmente usando tu rostro, para que nadie se haga pasar por ti "),o()(),i(8,"div",3)(9,"label",4),r(10,"Ingresa tu documento de identidad"),o(),i(11,"div",5)(12,"div",6),r(13),o(),i(14,"input",7,8),y("keydown",function(P){return t.keyEnter(P)}),o()(),u(16,A,2,0,"p",9),o(),u(17,Q,5,0,"div",10),i(18,"button",11),y("click",function(){return t.onConfirmeIdentification()}),r(19," Continuar "),o()()),n&2&&(l(13),_(" ",t.typeDocument," "),l(1),s("formControl",t.identificationNumberControl),l(2),s("ngIf",t.identificationNumberControl.invalid&&(t.identificationNumberControl.dirty||t.identificationNumberControl.touched)),l(1),s("ngIf",t.documentTypeControl.value==="TI"),l(1),s("disabled",t.identificationNumberControl.invalid)("ngClass",t.identificationNumberControl.valid?"active-btn":"disable-btn"))},dependencies:[I,k,D,M,T,V,j,N,z],styles:["h3[_ngcontent-%COMP%]{font-family:var(--secondary-font);line-height:1.3;margin:0;font-size:var(--small-font-size);font-weight:700;color:var(--body-font-color)}select[_ngcontent-%COMP%]{border-color:transparent;background:transparent;display:flex;justify-content:center;text-align:center;border-radius:var(--small-border-radius);font-weight:600;outline:none;color:currentColor;flex-direction:row;appearance:none;width:80%}.alert[_ngcontent-%COMP%]{background-color:#efebff;color:#442f9a;border-radius:8px;min-height:68px;display:grid;grid-template-columns:24px 1fr;column-gap:10px;padding:12px 16px;align-items:center;font-size:12px;line-height:14px;font-family:montserrat;font-weight:500;text-align:start;max-width:480px;margin-block:.5rem}.alert[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{margin:0;font-weight:600;font-size:14px}"]})})();export{F as a};
