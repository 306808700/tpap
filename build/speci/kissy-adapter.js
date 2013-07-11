/**
 * @fileOverview caja adapter for taobao
 *                 �˴���kissy�汾�޹أ���Ҫ��һЩ�����ķ�װ
 * @author shiba<shiba@taobao.com>
 */
;
(function (win, caja, S) {
    win.cajaAFTB = win.cajaAFTB || {};

    var cajaConfig = win.cajaConfig;

    /**
     * caja adapter for taobao
     * inlucding Kissy apis exposed to third-party modules
     * @type {Object}
     */

    cajaAFTB.makeSharedFactory = function (frameGroup, KISSY) {
        /**
         * parse url  easy way but ugly
         * @param url
         * @return {Object}
         */
        function parseURL(url) {
            if (url.indexOf("http://") !== 0) { //���·��
                return {
                    url: document.location.hostname
                };
            }
            var parser = document.createElement('a');
            parser.href = url;
            var p = KISSY.clone({url: parser.hostname});
            parser = null;
            return p;
        }

        /**
         * untame ����
         * cajaû���ṩ�����������Ҫ�Լ��ṩ
         */
        function untame(obj) {
            //untamedcfg = caja.untame(cfg);
            var untamedObj = {};
            for (var p in obj) {
                if (obj.hasOwnProperty(p)) {
                    var n = '' + p;
                    if (n == 'TAMED_TWIN___') {
                    } else {
                        untamedObj[p] = obj[p];
                    }
                }
            }
            return untamedObj;
        }



        // �����ⲿ��⹹�����Լ�����
        frameGroup.markCtor(S.Anim);
        frameGroup.grantMethod(S.Anim, "run");
        frameGroup.grantMethod(S.Anim, "stop");
        frameGroup.grantMethod(S.Anim, "isRunning");
        frameGroup.grantMethod(S.Anim, "isPaused");
        frameGroup.grantMethod(S.Anim, "pause");
        frameGroup.grantMethod(S.Anim, "resume");

        /**
         * ��ʽд��, ��Ҫע����ǣ����Ⱪ¶ԭ��dom�ڵ���ⲿ
         * ��Ҫ���ŵķ���˵��
         * �����ŵĽӿ� append prepend before after html attr��� prop hasProp css index data removeData hasData unselectable
         */
            // �����ⲿ��⹹�����Լ�����
        S.NodeList.prototype.constructor = S.NodeList;
        frameGroup.markCtor(S.NodeList);
        var nodeFuncs = ('c_getDOMNodes end equals c_add item slice scrollTop scrollLeft height width' +
            ' c_appendTo c_prependTo c_insertBefore c_insertAfter c_animate stop run pause resume isRunning isPaused' +
            ' show hide toggle fadeIn fadeOut' +
            ' fadeToggle slideDown slideUp slideToggle c_filter test clone empty replaceWith' +
            ' parent hasClass c_addClass removeClass replaceClass toggleClass ' +
            'val text toggle offset scrollIntoView c_next c_prev c_first' +
            ' c_last c_siblings c_children contains remove  ' +
            'contains innerWidth innerHeight outerWidth outerHeight c_on c_detach fire all len').split(' ');

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
                    ret = S.query(s, context[0] || param.context);
                } else {
                    ret = S.makeArray(s);
                }

                ret.each = function (f) {
                    for (var i = 0; i < this.length; i++) {
                        if (f(this[i]) === false) {
                            break;
                        }
                    }
                };
                return ret;
            }

            //��ԭ��node�ڵ㣬����tame��װ
            function tame(n) {
                return param.imports.tameNode___(n, true);
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

            //�ж�ϵͳ�Ƿ���Ҫkissy?
            if(cajaConfig && false === cajaConfig.kissy){
                return frameGroup.tame({});
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
            S.NodeList.prototype.c_on = function (event, handle, scope) {
                var self = this;
                var s = self.getDOMNodes();
                Event_On(s, event, handle, scope);
                return this;
            };

            S.NodeList.prototype.c_detach = function (event, handle, scope) {
                var self = this;
                var s = self.getDOMNodes();
                Event_Remove(s, event, handle, scope);
                return this;
            };

            /**
             * getDOMNodes tameһ��
             */
            S.NodeList.prototype.c_getDOMNodes = function () {
                var l = [];
                S.each(this.getDOMNodes(), function (a) {
                    l.push(tame(a));
                });
                return l;
            };

            /**
             *  node�ӿ��У���ʹ�õ�ѡ�����Ĳ��֣�����query�޶��·�Χ
             */
            S.each(('add appendTo prependTo insertBefore insertAfter').split(' '), function (fn) {
                S.NodeList.prototype['c_' + fn] = function (sel) {
                    return this[fn](query(sel))
                };
            });

            /**
             *  NodeList ֧�ֵ�filter���ڶ���������֧�ֺ���, ������Ϊ�˼򵥣���ȥ��������֧�֣�ֻ֧��ѡ�������˹���
             */
            S.each(('filter next prev first last siblings children').split(' '), function (fn) {
                S.NodeList.prototype['c_' + fn] = function (filter) {
                    if (!S.isFunction(filter)) {
                        return this[fn](filter);
                    } else {
                        S.error('filter�����������ַ���');
                        return this;
                    }
                }
            });

            S.NodeList.prototype.len = function () {
                return this.length;
            };

            S.NodeList.prototype.c_animate = function () {
                var args = S.makeArray(arguments);
                if (S.isObject(args[0])) {
                    args[0] = untame(args[0]);
                }
                return this.animate(args[0], args[1], args[2], args[3]);
            };

            S.NodeList.prototype.c_addClass = function (sel) {
                return  this.addClass(sel);
            }

            S.each(nodeFuncs, function (func) {
                frameGroup.grantMethod(S.NodeList, func);
            });

            var expose_kissy = {
                /**
                 * һЩkissy�ṩ�ķ���
                 */
                unparam: frameGroup.markFunction(function (str) {
                    return S.unparam(str);
                }),

                param: frameGroup.markFunction(function (o, seq, eq, arr) {
                    return S.param(untame(o), seq, eq, arr);
                }),

                unEscapeHTML: frameGroup.markFunction(function (str) {
                    return S.unEscapeHTML(str);
                }),

                escapeHTML: frameGroup.markFunction(function (str) {
                    return S.escapeHTML(str);
                }),

                substitute: frameGroup.markFunction(function (str, o) {
                    return S.substitute(str, untame(o));
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
                    })
                },

                io: frameGroup.markFunction(function (cfg) {
                    var untamedcfg = untame(cfg);
                    untamedcfg.data = untame(untamedcfg.data);

                    var url = untamedcfg.url, flag = false;
                    url = parseURL(url).url;
                    S.each(urlIO, function (reg) {
                        if (reg.test(url)) {
                            flag = true;
                        }
                    });

                    //���ﴦ���£�Ŀǰֻ֧��json����jsonp����ʽ
                    if (!('json' === untamedcfg.dataType || 'jsonp' === untamedcfg.dataType)) {
                        untamedcfg.dataType = "jsonp";
                    }

                    if (flag) {
                        return S.io(S.mix(untamedcfg));
                    } else {
                        return function () {
                            //�����Ժ󶼼�һ���쳣������ͳһ����
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
                    fire: frameGroup.markFunction(function (s, event) {
                        S.Event.fire(query(s), event);
                    })
                },

                // �ṩ�������㹦��
                Anim: frameGroup.markFunction(function () {
                    var args = S.makeArray(arguments);
                    args[0] = query(args[0])[0];
                    if (S.isObject(args[1])) {
                        args[1] = untame(args[1]);
                    }
                    return S.Anim.apply(window, args);
                }),

                JSON: {
                    parse: frameGroup.markFunction(function (text) {
                        return S.JSON.parse(text);
                    }),

                    stringify: frameGroup.markFunction(function(value){
                        return S.JSON.stringify(untame(value));
                    })
                },

                all: frameGroup.markFunction(function () {
                    return S.all(query(arguments[0]));
                }),

                alert: frameGroup.markFunction(function (x) {
                    alert(x);
                })
            };

            if(cajaConfig.kissy && false === cajaConfig.kissy.io){
                S.mix(expose_kissy, {io:function(){}});
            }

            return frameGroup.tame(expose_kissy);
        };
    };



    window.cajaAFTB = cajaAFTB;

})(window, caja, KISSY);