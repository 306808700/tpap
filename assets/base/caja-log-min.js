/*! caja-kissy 2013-09-06 */
var shop_log=function(t,n){function e(t,e){return s.template=s.template||{},n.mix({error_page:u,msg:t,name:n.isString(e)?e:n.DOM.attr(e,"data-modulename"),random:+new Date},{shop_id:s.shopId,site_id:s.siteId,user_id:s.userId,user_nick:s.user_nick,template_name:s.template.name,template_id:s.template.id,design_nick:s.template.design_nick})}function r(t,e,r,o){return s.template=s.template||{},n.mix({type:t,desc:e,module_name:r,time_consume:o},{shop_id:s.shopId,site_id:s.siteId,user_id:s.userId,user_nick:s.user_nick,template_name:s.template.name,template_id:s.template.id,design_nick:s.template.design_nick})}function o(t,n){if(c){var r=e(t,n);goldlog.emit("caja_log",r)}}function i(t,n){if(c){var r=e(t,n);goldlog.emit("caja_log",r)}}function a(t,n,e,o){if(c){var i=r(t,n,e,o);goldlog.emit("caja_per",i)}}var s=t.shop_config||{},u=t.document.location.href;s.template=s.template||{};var c=/.*(\.taobao\.com)$/.test(t.location.host)||-1!==t.location.search.indexOf("caja-debug");return{sendSyncErrorLog:o,sendTamingErrorLog:i,sendJsMonitor:a}}(window,KISSY);