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
            'draggingEnabled,enableDragging,endAutoSlide,endAutoSlide,getZoom,isDragging,removeOverlay,setZoom,startAutoSlide,zoomIn,zoomOut').split(',');
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

        funs = ('depose,setLatLng,setOpacity,setTitle,openInfoWindow').split(',');
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
                AliMarker: frameGroup.tame(frameGroup.markFunction(function (a, b) {
                    return new SafeAliMarker(a, b);
                })),
                AliInfoWindow: frameGroup.tame(frameGroup.markFunction(function (a, b) {
                    return new SafeAliInfoWindow(a);
                })),
                AliLatLng: frameGroup.tame(frameGroup.markFunction(function (x, y) {
                    return new SafeAliLatLng(x, y)
                })),
                kissy: false
            }
        }

    }

    return init;

});