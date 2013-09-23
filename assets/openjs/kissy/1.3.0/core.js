/**
 * @fileOverview core����İ�ȫ������
 */
KISSY.add(function (S, Calendar) {
    var DOM = S.DOM,
        Event = S.Event;

    /**
     * �ṩһ��init������������ȡ�����ģ��return���ɡ� ������ʼ��������
     * ��ʼ��������Ҫ����һ������������Ϊÿ��ɳ�价���ṩ�������
     * ps: ҳ���п��ܻ��ж����ȫɳ�价����init������ִ�еĿ������Ϊ����ɳ�乲���һЩ���ݶ�����Ҫ�ṩ��ԭʼ�İ�ȫ�������ͷ�����(ִ��һ��,����ɳ�乲��)
     *     init���صĺ������������Ϊÿ��ɳ���ṩ�İ�ȫ�������(ִ�ж�Σ�ÿ��ɳ��Զ���Ĳ�����Ӱ������ɳ��)
     *     �ܽ᣺�������ΪKISSY��frameGroup��ʼ����ʱ����һ������Ȼ���copy��ݣ��ֱ�ŵ���ͬ��ɳ�价����ȥִ�С�ÿ��copy�໥֮�䲻Ӱ��
     * @param frameGroup ҳ���е�ɳ�价����frame��Ϊɳ�䣬frameGroupΪɳ���顣ɳ��Ĺ�������
     * @returns {Function} ������ȡʵ�ʵ��������
     */
    function init(frameGroup) {

        /**
         * untame ����
         */
            // �����ⲿ��⹹�����Լ�����
        frameGroup.markCtor(S.Anim);
        frameGroup.grantMethod(S.Anim, "run");
        frameGroup.grantMethod(S.Anim, "stop");
        frameGroup.grantMethod(S.Anim, "isRunning");
        frameGroup.grantMethod(S.Anim, "isPaused");
        frameGroup.grantMethod(S.Anim, "pause");
        frameGroup.grantMethod(S.Anim, "resume");

        /**
         * ��ʽд ��Ҫע����ǣ����Ⱪ¶ԭ��dom�ڵ���ⲿ
         * ��Ҫ���ŵķ���˵��
         * �����ŵĽӿ� append prepend before after html attr��� prop hasProp css index data removeData hasData unselectable
         */
            // �����ⲿ��⹹�����Լ�����

        function SafeNodeList(selector) {
            this.inner = S.all(selector)
        }

        frameGroup.markCtor(SafeNodeList);
        var nodeFuncs = ('index getDOMNodes getDOMNode end equals add item slice scrollTop scrollLeft height width' +
            ' appendTo prependTo insertBefore insertAfter animate stop run pause resume isRunning isPaused' +
            ' show hide toggle fadeIn fadeOut' +
            ' fadeToggle slideDown slideUp slideToggle filter test clone empty replaceWith' +
            ' parent hasClass addClass removeClass replaceClass toggleClass ' +
            'val text each toggle offset scrollIntoView next prev first' +
            ' last siblings children contains remove  ' +
            'innerWidth innerHeight outerWidth outerHeight on delegate detach fire all len attr removeAttr hasAttr ' +
            'data hasData removeData').split(' ');

        /**
         * EventObject �Ļص����Ի�ȡ
         */
        var EventObject = S.EventObject || S.Event.DOMEventObject;//����kissy1.1.6 �� kissy1.3.0
        frameGroup.markCtor(EventObject);
        frameGroup.grantMethod(EventObject, "halt");
        frameGroup.grantMethod(EventObject, "preventDefault");
        frameGroup.grantMethod(EventObject, "stopImmediatePropagation");
        frameGroup.grantMethod(EventObject, "stopPropagation");
        var props = ('altKey attrChange attrName bubbles button cancelable ' +
            'charCode clientX clientY ctrlKey currentTarget data detail ' +
            'eventPhase fromElement handler keyCode layerX layerY metaKey ' +
            'newValue offsetX offsetY originalTarget pageX pageY prevValue ' +
            'relatedNode relatedTarget screenX screenY shiftKey srcElement ' +
            'target toElement view wheelDelta which axis type').split(' ');
        S.each(props, function (p) {
            frameGroup.grantRead(EventObject.prototype, p);
        });

        //url������ magine.taotaosou.net
        var urlIO = [/^(imagine\.taotaosou\.net)$|.\.(imagine\.taotaosou\.net)/, /.\.taobao\.(net)$/, /.\.taobaoapps\.(net)$/, /^(taegrid\.taobao\.com)$|.\.(taegrid\.taobao\.com)/, /^(uz\.taobao\.com)$|.\.(uz\.taobao\.com)/];


        /**
         * @param context ������
         * @param context.mod ɳ���ģ�鷶Χ�����в��������޶���ģ�鷶Χ֮��ȥִ��
         * @param context.frame ����ģ���ɳ��
         * @return {Object} ʵFs�ʵ��������
         */
        return function (param) {

            // �޶�ģ���ѡ������Χ�����Ի�ȡ�ڵ��api������Ҫͨ���ú�����ȡһ��
            // ����Χ�޶���caja����֮��
            function query(s, context) {
                var ret = [];
                if (context) {
                    context = query(context);
                } else {
                    context = [];
                }

                if (S.isString(s)) {
                    ret = S.query(s, context[0] || param.mod);
                } else {
                    ret = S.query(s);
                }

                return ret;
            }

            //��ԭ��node�ڵ㣬����tame��װ
            function tame(n) {
                return param.frame.imports.tameNode___(n, true);
            }

            function genWrapper() {
                function wrapper(e) {
                    if (e.target) {
                        e.target = tame(e.target);
                    }
                    if (e.relatedTarget) {
                        e.relatedTarget = tame(e.relatedTarget);
                    }
                    if (e.currentTarget) {
                        e.currentTarget = tame(e.currentTarget);
                    }
                    return wrapper.handle.call(this, e);
                }

                return wrapper;
            }

            /**
             * Event on ��Ϊ������Ҫ���� e.target��tame���⣬������Ҫ������һЩ����
             * Event remove �ο� Event on��д���� by ʯ��
             * @author ����
             */
            var Event_On = frameGroup.markFunction(function (s, event, handle, scope) {
                var wrapper = genWrapper();
                wrapper.handle = handle;
                handle.__event_tag = handle.__event_tag || [];
                var els = query(s);
                S.each(els, function (el) {
                    handle.__event_tag.push({
                        fn: wrapper,
                        el: el,
                        scope: scope || el
                    });
                });
                S.Event.on(els, event, wrapper, scope);
            });

            var Event_Delegate = frameGroup.markFunction(function (s, event, filter, handle, scope) {
                var wrapper = genWrapper();
                wrapper.handle = handle;
                handle.__event_tag = handle.__event_tag || [];
                var els = query(s);
                S.each(els, function (el) {
                    handle.__event_tag.push({
                        fn: wrapper,
                        el: el,
                        filter: filter,
                        scope: scope || el
                    });
                });
                S.Event.delegate(els, event, filter, wrapper, scope);
            });

            var Event_Remove = frameGroup.markFunction(function (s, event, handle, scope) {
                var els = query(s);
                if (handle) {
                    var wrappers = handle.__event_tag || [];
                    for (var i = wrappers.length - 1; i >= 0; i--) {
                        var w = wrappers[i];
                        var tScope = scope || w.el;
                        if (w.scope === tScope &&
                            S.inArray(w.el, els)) {
                            S.Event.remove(w.el, event, w.fn, scope);
                            wrappers.splice(i, 1);
                        }
                    }
                } else {
                    S.Event.remove(els, event);
                }
            });

            //on��detach �ֶ�ת����Event.on �� Event.detach
            SafeNodeList.prototype.on = function (event, handle, scope) {
                var self = this;
                var s = self.inner.getDOMNodes();
                Event_On(s, event, handle, scope);
                return this;
            };

            //on��detach �ֶ�ת����Event.on �� Event.detach
            SafeNodeList.prototype.delegate = function (event, filter, handle, scope) {
                var self = this;
                var s = self.inner.inner.getDOMNodes();
                Event_Delegate(s, event, handle, scope);
                return this;
            };

            SafeNodeList.prototype.detach = function (event, handle, scope) {
                var self = this;
                var s = self.inner.getDOMNodes();
                Event_Remove(s, event, handle, scope);
                return this;
            };
            /**
             * getDOMNodes tameһ��
             */
            SafeNodeList.prototype.getDOMNodes = function () {
                var l = [];
                S.each(this.inner.getDOMNodes(), function (a) {
                    l.push(tame(a));
                });
                return l;
            };
            SafeNodeList.prototype.getDOMNode = function () {
                return tame(this.inner.getDOMNode());
            };

            SafeNodeList.prototype.each = function (fnc) {
                this.inner.each(function(item,index){
                    fnc.call(SafeNodeList, new SafeNodeList(item),index);
                });
                return this;
            };

            SafeNodeList.prototype.slice = function (p1, p2) {
                return new SafeNodeList(this.inner.slice(p1, p2));

            };
            SafeNodeList.prototype.stop = function () {
                this.inner.stop.apply(this.inner,arguments);
                return this;

            };
            SafeNodeList.prototype.remove = function () {
                this.inner.remove();
                return this;

            };
            SafeNodeList.prototype.scrollIntoView = function () {
                var p = S.makeArray(arguments);
                if(p[2]){
                    p[2] = query(p[2]);
                }
                this.inner.scrollIntoView.apply(this.inner,p);
                return this;

            };
            SafeNodeList.prototype.val  = function () {
                if(arguments[0] !== undefined){
                    this.inner.val (arguments[0]);
                    return this;
                }else{
                    return this.inner.val();
                }


            };
            SafeNodeList.prototype.text = function () {
                if(arguments[0]){
                    this.inner.text (arguments[0]);
                    return this;
                }else{
                    return this.inner.text();
                }

            };

            SafeNodeList.prototype.offset = function () {
                return this.inner.offset();

            };
            SafeNodeList.prototype.replaceWith = function (replace) {
                if (replace.inner) {
                    this.inner.replaceWith(replace.inner);
                } else {
                    this.inner.replaceWith(query(replace));
                }
                return this;

            };
            SafeNodeList.prototype.empty = function () {
                this.inner.empty();
                return this;

            };

            /**
             *  node�ӿ��У���ʹ�õ�ѡ�����Ĳ��֣�����query�޶��·�Χ
             */
            S.each(('appendTo prependTo insertBefore insertAfter').split(' '), function (fn) {
                SafeNodeList.prototype[fn] = function (sel) {
                    this.inner[fn](query(sel.inner));
                    return this;
                };
            });
            /**
             *  node�ӿ��У�attr ,data��ֻ�������Զ�������
             */
            SafeNodeList.prototype.data = function (name, value) {
                if (value === undefined) {
                    return this.inner.data(name);
                } else {
                    this.inner.data(name, cajaAFTB.untame(value));
                    return this;
                }
            };

            SafeNodeList.prototype.removeData = function (name) {
                this.inner.removeData(name)
                return this;
            };


            SafeNodeList.prototype.hasData = function ( name, value) {
                return this.inner.hasData(name, cajaAFTB.untame(value));
            };

            SafeNodeList.prototype.add = function (sel) {
                if(sel.inner){
                    return new SafeNodeList(this.inner.add(sel.inner))
                }else{
                    return new SafeNodeList(this.inner.add(query(sel)))
                }

            };
            SafeNodeList.prototype.parent = function (filter) {
                filter = filter || 1;
                if (S.isNumber(filter) || S.isString(filter)) {
                    var p = this.inner.parent(filter);
                    if (S.one(param.mod).contains(p)) {
                        return new SafeNodeList(p);
                    } else {
                        return new SafeNodeList(param.mod);
                    }
                } else {
                    S.log("only string or number is supported");
                    return this;
                }
            };


            SafeNodeList.prototype.attr = function (name, value) {
                if (S.startsWith(name, 'data-')) {
                    if (undefined === value) {
                        return this.inner.attr(name);
                    } else {
                        this.inner.attr(name, value);
                        return this;
                    }
                } else {
                    S.log('data-��ͷ��α���Բű�֧��!')
                }
            };

            SafeNodeList.prototype.removeAttr = function (name) {
                if (S.startsWith(name, 'data-')) {
                    this.inner.removeAttr(name);
                    return this;
                } else {
                    S.log('data-��ͷ��α���Բű�֧��!')
                }
            };


            SafeNodeList.prototype.hasAttr = function (sel, name, value) {
                if (S.isString(name) && S.startsWith(name, 'data-')) {
                    return this.inner.hasAttr(query(sel), name, cajaAFTB.untame(value));
                }
            };

            /**
             *  NodeList ֧�ֵ�filter���ڶ���������֧�ֺ���, ������Ϊ�˼򵥣���ȥ��������֧�֣�ֻ֧��ѡ�������˹���
             */
            S.each(('filter next prev first last siblings children').split(' '), function (fn) {
                SafeNodeList.prototype[ fn] = function (filter) {
                    if (!S.isFunction(filter)) {
                        return new SafeNodeList(this.inner[fn](filter));
                    } else {
                        S.log('filter�����������ַ���');
                        return this;
                    }

                }
            });

            SafeNodeList.prototype.len = function () {
                return this.inner.length;
            };
            SafeNodeList.prototype.scrollTop = function (a) {
                return this.inner.scrollTop(a)
            };
            SafeNodeList.prototype.innerWidth  = function () {
                return this.inner.innerWidth ()
            };
            SafeNodeList.prototype.innerHeight  = function () {
                return this.inner.innerHeight ()
            };

            SafeNodeList.prototype.outerWidth  = function () {
                return this.inner.outerWidth ()
            };

            SafeNodeList.prototype.outerHeight  = function () {
                return this.inner.outerHeight ()
            };
            SafeNodeList.prototype.pause  = function (p) {
                this.inner.pause(p);
                return this;
            };
            SafeNodeList.prototype.isPaused  = function (p) {
                return this.inner.isPaused();
            };
            SafeNodeList.prototype.isRunning  = function (p) {
                return this.inner.isRunning();
            };
            SafeNodeList.prototype.resume   = function (p) {
                this.inner.resume (p);
                return this;
            };
            SafeNodeList.prototype.isPaused  = function (p) {
                return this.inner.isPaused();
            };

            SafeNodeList.prototype.contains  = function (sel) {
                if(sel.inner){
                    return this.inner.contains (sel.inner)
                }else{
                    return this.inner.contains (query(sel))
                }

            };
            SafeNodeList.prototype.scrollLeft = function (a) {
                return this.inner.scrollLeft(a)
            };
            SafeNodeList.prototype.height = function (a) {
                return this.inner.height(a)
            };
            SafeNodeList.prototype.width = function (a) {
                return this.inner.width(a)
            };

            SafeNodeList.prototype.fire = function () {
                this.inner.fire.apply(this.inner,arguments);
                return this;
            };

            S.each(('show hide toggle fadeIn fadeOut fadeToggle slideDown slideUp slideToggle').split(' '), function (fn) {
                SafeNodeList.prototype[fn] = function () {
                    this.inner[fn].apply(this.inner, arguments);
                    return this;
                }
            });


            SafeNodeList.prototype.animate = function () {
                var args = S.makeArray(arguments);
                if (S.isObject(args[0])) {
                    args[0] = cajaAFTB.untame(args[0]);
                }
                this.inner.animate(args[0], args[1], args[2], args[3]);
                return this;
            };
            SafeNodeList.prototype.addClass = function (sel) {
                this.inner.addClass(sel);
                return this
            };
            SafeNodeList.prototype.hasClass = function (param) {
                return  this.inner.hasClass(param);
            };
            SafeNodeList.prototype.removeClass = function (param) {
                this.inner.removeClass(param);
                return this;
            };
            SafeNodeList.prototype.toggleClass = function (param) {
                this.inner.toggleClass(param);
                return this;
            };
            SafeNodeList.prototype.replaceClass = function (p1, p2) {
                this.inner.replaceClass(p1, p2);
                return this;
            };
            SafeNodeList.prototype.equals = function (param) {
                return  this.inner.equals(param.inner);
            };
            SafeNodeList.prototype.all = function (param) {
                //kissy��ֻ��one��all��end�����__parent
                var result = new SafeNodeList(this.inner.all(param));
                if(this.inner.all(param).__parent){
                    result.inner.__parent = this.inner.all(param).__parent;
                }
                return result;
            };
            SafeNodeList.prototype.end = function () {
                return new SafeNodeList(this.inner.end());
            };
            SafeNodeList.prototype.item = function (index) {
                return new SafeNodeList(this.inner.item(index));
            };
            SafeNodeList.prototype.index = function () {
                return this.inner.index(arguments[0]);
            };
            SafeNodeList.prototype.clone = function () {
                return new SafeNodeList(this.inner.clone.apply(this.inner, arguments));
            };
            SafeNodeList.prototype.test = function (filter) {
                if (S.isFunction(filter)) {
                    this.inner.test(function (a, b) {
                        return filter(tame(a), b);
                    });
                } else {
                    return  this.inner.test(filter, param.mod);
                }
            };


            S.each(nodeFuncs, function (func) {
                frameGroup.grantMethod(SafeNodeList, func);
            });

            return {
                /**
                 * һЩkissy�ṩ�ķ���
                 */
                unparam: frameGroup.markFunction(function (str) {
                    return S.unparam(str);
                }),

                param: frameGroup.markFunction(function (o, seq, eq, arr) {
                    return S.param(cajaAFTB.untame(o), seq, eq, arr);
                }),

                unEscapeHTML: frameGroup.markFunction(function (str) {
                    return S.unEscapeHTML(str);
                }),

                escapeHTML: frameGroup.markFunction(function (str) {
                    return S.escapeHTML(str);
                }),

                substitute: frameGroup.markFunction(function (str, o) {
                    return S.substitute(str, cajaAFTB.untame(o));
                }),

                DOM: {
                    //get, ��query[0]
                    get: frameGroup.markFunction(function (s, context) {
                        var ret = query(s, context);
                        return tame(ret[0], true);
                    }),

                    // �ṩѡ��������
                    query: frameGroup.markFunction(function (s, context) {
                        var ret = query(s, context);
                        // imports.document.compareDocumentPosition ������ bug��
                        // ������ html ����������ģ�鲻��д head
                        // body ���У�body.contains �� body.compareDocumentPosition ��û��
                        // ������ imports , firefox/ie ����
                        S.each(ret, function (v, i) {
                            // �ֶ� tame����ܱ�֤���������޺���
                            ret[i] = tame(v, true);
                        });
                        return ret;
                    }),

                    // �����Դ�����ȡor����Ԫ�� text
                    text: frameGroup.markFunction(function (s, value) {
                        return S.DOM.text(query(s), value);
                    }),

                    // �����Դ�����ȡor����Ԫ������
                    offset: frameGroup.markFunction(function (s, value) {
                        return S.DOM.offset(query(s), value);
                    }),

                    //Ŀǰ����ӿ���ȥ������Ϊû����У��
                    //2013��1��25�� �ṩ���ӿ�
                    css: frameGroup.markFunction(function (s, prop) {

                        return S.DOM.css(query(s), prop);
                    }),


                    hasClass: frameGroup.markFunction(function (s, value) {
                        return S.DOM.hasClass(query(s), value);
                    }),

                    addClass: frameGroup.markFunction(function (s, value) {
                        return S.DOM.addClass(query(s), value);
                    }),

                    removeClass: frameGroup.markFunction(function (s, value) {
                        return S.DOM.removeClass(query(s), value);
                    }),

                    toggleClass: frameGroup.markFunction(function (s, value) {
                        return S.DOM.toggleClass(query(s), value);
                    }),

                    replaceClass: frameGroup.markFunction(function (s, oc, nc) {
                        return S.DOM.replaceClass(query(s), oc, nc);
                    }),

                    data: frameGroup.markFunction(function (selector, name, value) {
                        return S.DOM.data(query(selector), name, cajaAFTB.untame(value));
                    }),

                    hasData: frameGroup.markFunction(function (selector, name) {
                        return S.DOM.hasData(query(selector), name);
                    }),

                    removeData: frameGroup.markFunction(function (selector, name) {
                        return S.DOM.removeData(query(selector), name)
                    }),

                    attr: frameGroup.markFunction(function (selector, name, value) {
                        if (S.isString(name) && S.startsWith(name, 'data-')) {
                            return S.DOM.attr(query(selector), name, value);
                        }
                    }),

                    hasAttr: frameGroup.markFunction(function (selector, name) {
                        return S.DOM.hasAttr(query(selector), name);
                    }),

                    removeAttr: frameGroup.markFunction(function (selector, name) {
                        if (S.isString(name) && S.startsWith(name, 'data-')) {
                            return S.DOM.removeAttr(query(selector), name);
                        }

                    })

                },

                io: frameGroup.markFunction(function (cfg) {
                    var untamedcfg = cajaAFTB.untame(cfg);
                    untamedcfg.data = cajaAFTB.untame(untamedcfg.data);

                    var url = untamedcfg.url;

                    if(url.charAt(0)!=="/"){
                        url = cajaAFTB.rewriteURL(url, null, null, {XML_ATTR: "href"});
                    }


                    //���ﴦ���£�Ŀǰֻ֧��json����jsonp����ʽ
                    if (!('json' === untamedcfg.dataType || 'jsonp' === untamedcfg.dataType)) {
                        untamedcfg.dataType = "jsonp";
                    }

                    if (url) {
                        return S.io(S.mix(untamedcfg));
                    } else {
                        return function () {
                            S.log('url ���ڰ�������.')
                        };
                    }

                }),


                UA: S.clone(S.UA),

                log: frameGroup.markFunction(function () {
                    S.log.apply(S, arguments);
                }),

                // �ṩ����ע���¼�����
                Event: {
                    add: Event_On,
                    on: Event_On,
                    remove: Event_Remove,
                    detach: Event_Remove,
                    delegate: Event_Delegate,
                    fire: frameGroup.markFunction(function (s, event) {
                        S.Event.fire(query(s), event);
                    })
                },

                // �ṩ�������㹦��
                Anim: frameGroup.markFunction(function () {
                    var args = S.makeArray(arguments);
                    args[0] = query(args[0])[0];
                    if (S.isObject(args[1])) {
                        args[1] = cajaAFTB.untame(args[1]);
                    }
                    return S.Anim.apply(window, args);
                }),

                JSON: {
                    parse: frameGroup.markFunction(function (text) {
                        return S.JSON.parse(text);
                    }),

                    stringify: frameGroup.markFunction(function (value) {
                        return S.JSON.stringify(cajaAFTB.untame(value));
                    })
                },

                all: frameGroup.markFunction(function () {
                    return new SafeNodeList(query(arguments[0]));
                }),

                alert: frameGroup.markFunction(function (x) {
                    alert(x);
                }),

                kissy:true
            };
        }

    }

    return init;

}, {
    requires: ['core']
});