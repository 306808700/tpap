/**
 * @fileOverview ��������İ�ȫ������
 * @depends ������ҳ������ȷ��������jssdk�Ŀ��ļ�
 */
KISSY.add(function (S) {
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


        function SafeAliMap() {
            this.obj = new AliMap(arguments[0]);
        }


        var funs = ('centerAndZoom,addOverlay,closeInfoWindow,openInfoWindow,depose,checkResize,clearOverlays,disableDragging,' +
            'draggingEnabled,enableDragging,endAutoSlide,endAutoSlide,getZoom,isDragging,removeOverlay,setZoom,startAutoSlide,zoomIn,zoomOut,'+
            'setDblClickAction,panTo').split(',');
        frameGroup.markCtor(SafeAliMap);
        SafeAliMap.prototype.centerAndZoom = function (x, y) {
            this.obj.centerAndZoom(new AliLatLng(x.la, x.lo), y);
        };
        SafeAliMap.prototype.addOverlay = function (o) {
            this.obj.addOverlay(o.obj);
        };
        SafeAliMap.prototype.openInfoWindow = function () {
            this.obj.openInfoWindow.apply(this, arguments)
        };
        SafeAliMap.prototype.closeInfoWindow = function () {
            this.obj.closeInfoWindow();
        };
        SafeAliMap.prototype.checkResize = function () {
            this.obj.checkResize();
        };
        SafeAliMap.prototype.clearOverlays = function () {
            this.obj.clearOverlays();
        };
        SafeAliMap.prototype.depose = function () {
            this.obj.depose();
        };
        SafeAliMap.prototype.disableDragging = function () {
            this.obj.disableDragging();
        };
        SafeAliMap.prototype.draggingEnabled = function () {
            this.obj.draggingEnabled();
        };
        SafeAliMap.prototype.enableDragging = function () {
            this.obj.enableDragging();
        };
        SafeAliMap.prototype.endAutoSlide = function () {
            this.obj.endAutoSlide();
        };
        SafeAliMap.prototype.getZoom = function () {
            this.obj.getZoom();
        };
        SafeAliMap.prototype.isDragging = function () {
            this.obj.isDragging();
        };
        SafeAliMap.prototype.removeOverlay = function (o) {
            this.obj.removeOverlay(o.obj);
        };
        SafeAliMap.prototype.setZoom = function (o, b) {
            this.obj.setZoom(o, b);
        };
        SafeAliMap.prototype.startAutoSlide = function (o) {
            this.obj.startAutoSlide(cajaAFTB.untame(o));
        };
        SafeAliMap.prototype.zoomIn = function () {
            this.obj.zoomIn();
        };
        SafeAliMap.prototype.zoomOut = function (o) {
            this.obj.zoomOut(cajaAFTB.untame(o));
        };
        SafeAliMap.prototype.setDblClickAction = function (o) {
            this.obj.setDblClickAction(o);
        };
        SafeAliMap.prototype.panTo = function (x) {
            this.obj.panTo(new AliLatLng(x.la, x.lo));
        };


        S.each(funs, function (fn) {
            frameGroup.grantMethod(SafeAliMap, fn);
        });


        //--------------------------------------

        function SafeAliLatLng() {
            var obj = new AliLatLng(arguments[0], arguments[1]),
                self = this;
            self.lo = obj.lo;
            self.la = obj.la;
            this.lat = function () {
                return self.la;
            };
            this.equals = function () {
                return self.equals.apply(window, arguments);
            };
            this.lng = function () {
                return self.lo;
            }
        }

        funs = ('lat,lng').split(',');
        frameGroup.markCtor(SafeAliLatLng);

        S.each(funs, function (fn) {
            frameGroup.grantMethod(SafeAliLatLng, fn);
        });

        //------------------------

        //--------------------------------------

        function SafeAliMarker() {
            this.obj = new AliMarker(new AliLatLng(arguments[0].la, arguments[0].lo), cajaAFTB.untame(arguments[1]));
        }

        funs = ('depose,setLatLng,setOpacity,setTitle,openInfoWindow,getIcon,setIcon,getLatLng').split(',');
        frameGroup.markCtor(SafeAliMarker);

        SafeAliMarker.prototype.depose = function () {
            this.obj.depose();
        };
        SafeAliMarker.prototype.setLatLng = function (o) {
            this.obj.setLatLng(new AliLatLng(o.la, o.lo));
        };
        SafeAliMarker.prototype.setOpacity = function (o) {
            this.obj.setOpacity(o);
        };
        SafeAliMarker.prototype.setTitle = function (o) {
            this.obj.setTitle(o);
        };
        SafeAliMarker.prototype.openInfoWindow = function (o) {
            this.obj.openInfoWindow.apply(this, arguments)
        };
        SafeAliMarker.prototype.getIcon = function () {
            this.obj.getIcon()
        };
        SafeAliMarker.prototype.setIcon = function (o) {   //ע�⣬applyһ��������ֱ�ӵ��øú����ǲ�һ����
            this.obj.setIcon(new AliIcon(o.image, o.iconSize, o.iconAnchor))
        };
        SafeAliMarker.prototype.getLatLng = function () {
            return new SafeAliLatLng(this.obj.getLatLng().lat(),this.obj.getLatLng().lng());
        };


        S.each(funs, function (fn) {
            frameGroup.grantMethod(SafeAliMarker, fn);
        });

        //--------------------------------------

        function SafeAliInfoWindow(a) {
            this.obj = new AliInfoWindow(new AliLatLng(a.la, a.lo));
        }

        funs = ('close,depose,setContent,setLatLng,setRender,setTitle,setOpacity,moveIntoView').split(',');
        frameGroup.markCtor(SafeAliInfoWindow);

        SafeAliInfoWindow.prototype.close = function () {
            return this.obj.close();
        };
        SafeAliInfoWindow.prototype.depose = function () {
            return this.obj.depose();
        };

        SafeAliInfoWindow.prototype.moveIntoView = function () {
            this.obj.moveIntoView();
        };
        SafeAliInfoWindow.prototype.setContent = function () {
            return this.obj.setContent(arguments[0], arguments[1]);
        };
        SafeAliInfoWindow.prototype.setLatLng = function () {
            return this.obj.setLatLng(arguments[0].la, arguments[0].lo);
        };

        SafeAliInfoWindow.prototype.setOpacity = function () {
            return this.obj.setOpacity(arguments[0]);
        };
        SafeAliInfoWindow.prototype.setRender = function () {
            return this.obj.setRender(arguments[0], cajaAFTB.untame(arguments[1]));
        };
        SafeAliInfoWindow.prototype.setTitle = function () {
            return this.obj.setTitle(arguments[0]);
        };


        S.each(funs, function (fn) {
            frameGroup.grantMethod(SafeAliInfoWindow, fn);
        });

        function SafeAliPoint(){
            var self = this;
            var obj = new AliPoint(arguments[0],arguments[1]);
            self.x = obj.x;
            self.y = obj.y;
        }

        //--------------------------------------

        function SafeAliIcon() {
            var self = this;
            self.obj = new AliIcon(arguments[0],new AliPoint(arguments[1].x,arguments[1].y),new AliPoint(arguments[2]).x,arguments[2].y);

            self.image = self.obj.image;
            self.iconSize = self.obj.iconSize;
            self.iconAnchor = self.obj.iconAnchor;
        }

        funs = ('getCopy').split(',');
        frameGroup.markCtor(SafeAliIcon);

        SafeAliIcon.prototype.getCopy = function () {
            return this.obj.getCopy();
        };

        S.each(funs, function (fn) {
            frameGroup.grantMethod(SafeAliIcon, fn);
        });


        /**
         * @param context ������
         * @param context.mod ɳ���ģ�鷶Χ�����в��������޶���ģ�鷶Χ֮��ȥִ��
         * @param context.frame ����ģ���ɳ��
         * @return {Object} ʵ�ʵ��������
         */
        return function (context) {

            //������Ҫ���ظ�
            return {
                AliMap: frameGroup.tame(frameGroup.markFunction(function (a) {
                    return new SafeAliMap(DOM.get(a,context.mod));
                })),
                AliPoint: frameGroup.tame(frameGroup.markFunction(function (a,b) {
                    return new SafeAliPoint(a,b)
                })),
                AliIcon: frameGroup.tame(frameGroup.markFunction(function (x, y, z) {
                    return new SafeAliIcon(x, y, z)
                })),
                AliMarker: frameGroup.tame(frameGroup.markFunction(function (a, b) {
                    return new SafeAliMarker(a, b);
                })),
                AliInfoWindow: frameGroup.tame(frameGroup.markFunction(function (a, b) {
                    return new SafeAliInfoWindow(a);
                })),
                AliLatLng: frameGroup.tame(frameGroup.markFunction(function (x, y) {
                    return new SafeAliLatLng(x, y)
                })),
                AliEvent: frameGroup.tame({
                    addListener:frameGroup.markFunction(function () {
                        var param = arguments;
                        AliEvent.addListener(param[0].obj,param[1], frameGroup.markFunction(function(e){
                            var tmp;
                            if(e.x){
                                tmp = {
                                    x: e.x,
                                    y: e.y
                                }
                            }
                            if(e.la){
                                tmp = new SafeAliLatLng(e.la, e.lo);
                            }
                            param[2].call(this,tmp); //frameGroup.tame(point)
                        }));
                    })
                }),
                kissy: false
            }
        }

    }

    return init;

});