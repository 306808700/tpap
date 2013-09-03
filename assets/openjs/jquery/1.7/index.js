/**
 * @fileOverview ��������İ�ȫ������
 */
KISSY.add(function (S) {
    var $ = window.jQuery;

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
        function tameNode(node){
            //����ռλ,frame�����ʱû�л�
        }

        function SafejQuery(selector) {
            this.inner = $(selector);
        }

        //Ϊ���ǡ��̳�'�Ĺ��캯�������Ҫ���Ÿ��ⲿʹ�õ�ԭ�ͷ���
        SafejQuery.prototype.add = function () {
            var p = arguments[0];

            this.inner.add(arguments)
            return this;
        };
        SafejQuery.prototype.addClass = function () {
            this.inner.addClass(arguments[0]);
            return this;
        };
        SafejQuery.prototype.removeClass = function () {
            this.inner.removeClass(arguments[0]);
            return this;
        };
        SafejQuery.prototype.each = function () {
            var fn = arguments[0];
            this.inner.each(frameGroup.markFunction(function(index,element){
                fn(index,tameNode(element));
            }));
            return this;
        };

        //---- �����һ�����캯�����г�ʼ���ģ���ҪmarkCtor���һ�£���caja������ʶ
        frameGroup.markCtor(SafejQuery);

        //���캯��ʵ���ķ�������ҪgrantMethod �������������û�м���������Ĳ�����ʹ�ã�caja��������ʶ
        frameGroup.grantMethod(SafejQuery, "addClass");
        frameGroup.grantMethod(SafejQuery, "removeClass");
        frameGroup.grantMethod(SafejQuery, "each");

        /**
         * @param context ������
         * @param context.mod ɳ���ģ�鷶Χ�����в��������޶���ģ�鷶Χ֮��ȥִ��
         * @param context.frame ����ģ���ɳ��
         * @return {Object} ʵ�ʵ��������
         */
        return function (context) {

            tameNode = function(n){
               return context.frame.imports.tameNode___(n, true);
            }

            //������Ҫ���ظ�
            return {
                jQuery: frameGroup.tame(frameGroup.markFunction(function () {
                    return new SafejQuery(arguments[0]);
                })),
                kissy:false
            }
        }

    }

    return init;

});