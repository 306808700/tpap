/**
 * @fileOverview Kchars����İ�ȫ������
 */
KISSY.add(function (S, LineChart, BarChart, PieChart) {
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
         * ��ΪKISSY��������캯��ֻ��һ����������ܻ�Թ��캯���������޸�
         * �����������дһ��SafeConstruector���൱�ڼ̳�KISSY�������������ʾ������Ҫ������Щapi
         */
        //LineChart Adapter
        function SafeLineChart(cfg) {
            this.inner = new LineChart(cfg);
        }

        SafeLineChart.prototype.render = function(){
            this.inner.render();
        };

        SafeLineChart.prototype.showLine = function(){
            this.inner.showLine();
        };

        SafeLineChart.prototype.hideLine = function(){
            this.inner.hideLine();
        };

        SafeLineChart.prototype.clear = function(){
            this.inner.clear();
        };

        SafeLineChart.prototype.on = function(type, fnc){
            this.inner.on(type, frameGroup.markFunction(function(){
                fnc.call();
            }));
        };

        frameGroup.markCtor(SafeLineChart);
        frameGroup.grantMethod(SafeLineChart, "render");
        frameGroup.grantMethod(SafeLineChart, "showLine");
        frameGroup.grantMethod(SafeLineChart, "hideLine");
        frameGroup.grantMethod(SafeLineChart, "clear");
        frameGroup.grantMethod(SafeLineChart, "on");

        //BarChart Adapter
        function SafeBarChart(cfg) {
            this.inner = new BarChart(cfg);
        }

        SafeBarChart.prototype.render = function(){
            this.inner.render();
        };

        SafeBarChart.prototype.clear = function(){
            this.inner.clear();
        };

        SafeBarChart.prototype.on = function(type, fnc){
            this.inner.on(type, frameGroup.markFunction(function(){
                fnc.call();
            }));
        };

        frameGroup.markCtor(SafeBarChart);
        frameGroup.grantMethod(SafeBarChart, "render");
        frameGroup.grantMethod(SafeBarChart, "clear");
        frameGroup.grantMethod(SafeBarChart, "on");

        //PieChart Adapter
        function SafePieChart(cfg) {
            this.inner = new PieChart(cfg);
        }

        SafePieChart.prototype.render = function(){
            this.inner.render();
        };

        SafePieChart.prototype.clear = function(){
            this.inner.clear();
        };

        SafePieChart.prototype.on = function(type, fnc){
            this.inner.on(type, frameGroup.markFunction(function(){
                fnc.call();
            }));
        };

        frameGroup.markCtor(SafePieChart);
        frameGroup.grantMethod(SafePieChart, "render");
        frameGroup.grantMethod(SafePieChart, "clear");
        frameGroup.grantMethod(SafePieChart, "on");


        /**
         * @param context ������
         * @param context.mod ɳ���ģ�鷶Χ�����в��������޶���ģ�鷶Χ֮��ȥִ��
         * @param context.frame ����ģ���ɳ��
         * @return {Object} ʵ�ʵ��������
         */
        return function (context) {

            //������Ҫ���ظ�
            return {
                KCharts: {
                    LineChart: frameGroup.markFunction(function () {
                        var args = S.makeArray(arguments);
                        var cfg = cajaAFTB.untame(args[0]);
                        cfg.renderTo = S.DOM.get(cfg.renderTo, context.mod);
                        return new SafeLineChart(cfg);
                    }),

                    BarChart: frameGroup.markFunction(function () {
                        var args = S.makeArray(arguments);
                        var cfg = cajaAFTB.untame(args[0]);
                        cfg.renderTo = S.DOM.get(cfg.renderTo, context.mod);
                        return new SafeBarChart(cfg);
                    }),

                    PieChart: frameGroup.markFunction(function () {
                        var args = S.makeArray(arguments);
                        var cfg = cajaAFTB.untame(args[0]);
                        cfg.renderTo = S.DOM.get(cfg.renderTo, context.mod);
                        return new SafePieChart(cfg);
                    })
                },
                kissy:true
            }
        }

    }
    return init;
}, {
    requires: ['gallery/kcharts/1.2/linechart/index', 'gallery/kcharts/1.2/barchart/index', 'gallery/kcharts/1.2/piechart/index']
});