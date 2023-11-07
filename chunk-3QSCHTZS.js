import{Kb as g,Nb as R,Ta as D,Ua as w,Za as P,_a as h,ab as y,da as v,ma as m,na as _,pc as C}from"./chunk-PLWOJE2C.js";var c=class{attach(t){return this._attachedHost=t,t.attach(this)}detach(){let t=this._attachedHost;t!=null&&(this._attachedHost=null,t.detach())}get isAttached(){return this._attachedHost!=null}setAttachedHost(t){this._attachedHost=t}},u=class extends c{constructor(t,e,o,n,s){super(),this.component=t,this.viewContainerRef=e,this.injector=o,this.componentFactoryResolver=n,this.projectableNodes=s}},f=class extends c{constructor(t,e,o,n){super(),this.templateRef=t,this.viewContainerRef=e,this.context=o,this.injector=n}get origin(){return this.templateRef.elementRef}attach(t,e=this.context){return this.context=e,super.attach(t)}detach(){return this.context=void 0,super.detach()}},p=class extends c{constructor(t){super(),this.element=t instanceof w?t.nativeElement:t}},l=class{constructor(){this._isDisposed=!1,this.attachDomPortal=null}hasAttached(){return!!this._attachedPortal}attach(t){if(t instanceof u)return this._attachedPortal=t,this.attachComponentPortal(t);if(t instanceof f)return this._attachedPortal=t,this.attachTemplatePortal(t);if(this.attachDomPortal&&t instanceof p)return this._attachedPortal=t,this.attachDomPortal(t)}detach(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn()}dispose(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0}setDisposeFn(t){this._disposeFn=t}_invokeDisposeFn(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null)}};var E=class extends l{constructor(t,e,o,n,s){super(),this.outletElement=t,this._componentFactoryResolver=e,this._appRef=o,this._defaultInjector=n,this.attachDomPortal=i=>{this._document;let a=i.element;a.parentNode;let d=this._document.createComment("dom-portal");a.parentNode.insertBefore(d,a),this.outletElement.appendChild(a),this._attachedPortal=i,super.setDisposeFn(()=>{d.parentNode&&d.parentNode.replaceChild(a,d)})},this._document=s}attachComponentPortal(t){let o=(t.componentFactoryResolver||this._componentFactoryResolver).resolveComponentFactory(t.component),n;return t.viewContainerRef?(n=t.viewContainerRef.createComponent(o,t.viewContainerRef.length,t.injector||t.viewContainerRef.injector,t.projectableNodes||void 0),this.setDisposeFn(()=>n.destroy())):(n=o.create(t.injector||this._defaultInjector||P.NULL),this._appRef.attachView(n.hostView),this.setDisposeFn(()=>{this._appRef.viewCount>0&&this._appRef.detachView(n.hostView),n.destroy()})),this.outletElement.appendChild(this._getComponentRootNode(n)),this._attachedPortal=t,n}attachTemplatePortal(t){let e=t.viewContainerRef,o=e.createEmbeddedView(t.templateRef,t.context,{injector:t.injector});return o.rootNodes.forEach(n=>this.outletElement.appendChild(n)),o.detectChanges(),this.setDisposeFn(()=>{let n=e.indexOf(o);n!==-1&&e.remove(n)}),this._attachedPortal=t,o}dispose(){super.dispose(),this.outletElement.remove()}_getComponentRootNode(t){return t.hostView.rootNodes[0]}};var T=(()=>{class r extends l{constructor(e,o,n){super(),this._componentFactoryResolver=e,this._viewContainerRef=o,this._isInitialized=!1,this.attached=new g,this.attachDomPortal=s=>{this._document;let i=s.element;i.parentNode;let a=this._document.createComment("dom-portal");s.setAttachedHost(this),i.parentNode.insertBefore(a,i),this._getRootNode().appendChild(i),this._attachedPortal=s,super.setDisposeFn(()=>{a.parentNode&&a.parentNode.replaceChild(i,a)})},this._document=n}get portal(){return this._attachedPortal}set portal(e){this.hasAttached()&&!e&&!this._isInitialized||(this.hasAttached()&&super.detach(),e&&super.attach(e),this._attachedPortal=e||null)}get attachedRef(){return this._attachedRef}ngOnInit(){this._isInitialized=!0}ngOnDestroy(){super.dispose(),this._attachedRef=this._attachedPortal=null}attachComponentPortal(e){e.setAttachedHost(this);let o=e.viewContainerRef!=null?e.viewContainerRef:this._viewContainerRef,s=(e.componentFactoryResolver||this._componentFactoryResolver).resolveComponentFactory(e.component),i=o.createComponent(s,o.length,e.injector||o.injector,e.projectableNodes||void 0);return o!==this._viewContainerRef&&this._getRootNode().appendChild(i.hostView.rootNodes[0]),super.setDisposeFn(()=>i.destroy()),this._attachedPortal=e,this._attachedRef=i,this.attached.emit(i),i}attachTemplatePortal(e){e.setAttachedHost(this);let o=this._viewContainerRef.createEmbeddedView(e.templateRef,e.context,{injector:e.injector});return super.setDisposeFn(()=>this._viewContainerRef.clear()),this._attachedPortal=e,this._attachedRef=o,this.attached.emit(o),o}_getRootNode(){let e=this._viewContainerRef.element.nativeElement;return e.nodeType===e.ELEMENT_NODE?e:e.parentNode}}return r.\u0275fac=function(e){return new(e||r)(h(D),h(R),h(C))},r.\u0275dir=_({type:r,selectors:[["","cdkPortalOutlet",""]],inputs:{portal:["cdkPortalOutlet","portal"]},outputs:{attached:"attached"},exportAs:["cdkPortalOutlet"],features:[y]}),r})();var V=(()=>{class r{}return r.\u0275fac=function(e){return new(e||r)},r.\u0275mod=m({type:r}),r.\u0275inj=v({}),r})();export{u as a,f as b,l as c,E as d,T as e,V as f};
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
