/*! caja-kissy 2013-09-06 */
KISSY.add("openjs/gs/1.0/index",function(t){function n(n){var i={};return i.addListener=function(t,n){i.addListener.Fncs[t]||(i.addListener.Fncs[t]=[]),i.addListener.Fncs[t].push(n)},i.addListener.Fncs=[],i.fireListener=function(t,n){i.fireListener.Fncs[t]&&i.fireListener.Fncs[t](n)},i.fireListener.Fncs=[],function(){e.on(window,"scroll",function(){var o={scrollTop:t.DOM.scrollTop(window)};n.markReadOnlyRecord(o);var e=n.tame(o);if(i.addListener.Fncs.windowScroll)for(var r=0;i.addListener.Fncs.windowScroll.length>r;r++)i.addListener.Fncs.windowScroll[r](e)})}(),function(){i.fireListener.Fncs.windowScroll=function(t){t.props=t.props||{};var n={};n.scrollTop=t.props.scrollTop,KISSY.Anim(window,n,t.duration,t.easing).run()}}(),function(){e.on(window,"resize",function(){var t={viewportHeight:o.viewportHeight(),viewportWidth:o.viewportWidth()};n.markReadOnlyRecord(t);var e=n.tame(t);if(i.addListener.Fncs.windowResize)for(var r=0;i.addListener.Fncs.windowResize.length>r;r++)i.addListener.Fncs.windowResize[r](e)})}(),function(){function t(t,n){var e=o.create("<iframe id=''"+r+"' name='"+r+"'></iframe>");o.css(e,"display","none");var i=o.create('<form action="'+t+'" target="'+r+'" method="post"  enctype="multipart/form-data"></form>');o.css(e,"display","none");var a=o.create('<input type="hidden" name="token" value="'+n+'"/>');return i.appendChild(a),{form:i,iframe:e}}var r="tempCajaIframe";e.delegate(document,"change","input.J_TCajaUploadImg",function(r){var a=r.target,s=t(o.attr(a,"data-url"),1);o.append(a,s.form),document.body.appendChild(s.iframe),document.body.appendChild(s.form),s.form.submit();var c=function(t){if(i.addListener.Fncs.cajaupload)for(var n=0;i.addListener.Fncs.cajaupload.length>n;n++)i.addListener.Fncs.cajaupload[n](t)};e.on(window,"cajaupload",function(t){t={content:t.content},n.markReadOnlyRecord(t);var i=n.tame(t);c(i),e.remove(window,"cajaupload"),o.remove(s.iframe),o.remove(s.form)})})}(),function(){return i=n.markReadOnlyRecord(i),n.markFunction(i.addListener),n.markFunction(i.fireListener),{GS:n.tame(i)}}}var o=t.DOM,e=t.Event;return n});