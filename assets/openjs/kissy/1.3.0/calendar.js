/**
 * @fileOverview ��������İ�ȫ������
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
         * ��ΪKISSY��������캯��ֻ��һ����������ܻ�Թ��캯���������޸�
         * �����������дһ��SafeConstruector���൱�ڼ̳�KISSY�������������ʾ������Ҫ������Щapi
         */
        function SafeCalendar(el, config) {
            this.inner = new Calendar(el, config);
        }

        //Ϊ���ǡ��̳�'�Ĺ��캯�������Ҫ���Ÿ��ⲿʹ�õ�ԭ�ͷ���
        SafeCalendar.prototype.on = function () {
            var params = S.makeArray(arguments);
            var self = this;
            this.inner.on(params[0], function(e){
                //������Ϊ�û��϶�����Ҫ�õ�e.halt��Щ���������Լ򵥵Ľ�event��װһ�£�frameGroup.tame������
                var event = {
                    date: e.date && e.date.toString(),
                    end: e.end && e.end.toString(),
                    start: e.start && e.start.toString()
                };
                params[1].call(self, frameGroup.tame(event));
            });
        };
        SafeCalendar.prototype.toggle = function () {
            this.inner.toggle();
        };
        SafeCalendar.prototype.hide = function () {
            this.inner.hide();
        };
        SafeCalendar.prototype.show = function () {
            this.inner.show();
        };
        SafeCalendar.prototype.render = function () {
            this.inner.render();
        };

        //---- �����һ�����캯�����г�ʼ���ģ���ҪmarkCtor���һ�£���caja������ʶ
        frameGroup.markCtor(SafeCalendar);

        //���캯��ʵ���ķ�������ҪgrantMethod �������������û�м���������Ĳ�����ʹ�ã�caja��������ʶ
        frameGroup.grantMethod(SafeCalendar, "toggle");
        frameGroup.grantMethod(SafeCalendar, "render");
        frameGroup.grantMethod(SafeCalendar, "hide");
        frameGroup.grantMethod(SafeCalendar, "show");
        frameGroup.grantMethod(SafeCalendar, "on");




        /**
         * @param context ������
         * @param context.mod ɳ���ģ�鷶Χ�����в��������޶���ģ�鷶Χ֮��ȥִ��
         * @param context.frame ����ģ���ɳ��
         * @return {Object} ʵ�ʵ��������
         */
        return function (context) {

            //������Ҫ���ظ�
            return {
                Calendar: frameGroup.markFunction(function () {
                    return new SafeCalendar(arguments[0], cajaAFTB.untame(arguments[1]));
                }),
                kissy:true
            }
        }

    }

    return init;

}, {
    requires: ['calendar', 'calendar/assets/dpl.css']
});