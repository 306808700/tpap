/*! caja-kissy  */
KISSY.add("openjs/kissy/gallery/kscroll/1.2/index",function(t,n){function e(e){function o(t,e){this.inner=new n(t,e)}return o.prototype.scrollByDistance=function(t){this.inner.scrollByDistance(t)},o.prototype.scrollByPercent=function(t){this.inner.scrollByPercent(t)},o.prototype.scrollToElement=function(t){t=r.get(t,this.mod),this.inner.scrollToElement(t)},o.prototype.resize=function(){this.inner.resize()},o.prototype.on=function(t,n){this.inner.on(t,e.markFunction(function(){n.call()}))},e.markCtor(o),e.grantMethod(o,"scrollByPercent"),e.grantMethod(o,"scrollByDistance"),e.grantMethod(o,"scrollToElement"),e.grantMethod(o,"resize"),e.grantMethod(o,"on"),function(n){return{Kscroll:e.markFunction(function(){var e=t.makeArray(arguments),i=cajaAFTB.untame(e[0]);return i=r.get(i,n.mod),new o(i,cajaAFTB.untame(arguments[1]))}),kissy:!0}}}var r=t.DOM;return t.Event,e},{requires:["gallery/kscroll/1.2/index"]});