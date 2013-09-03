/**
 * @fileOverview jssdk����İ�ȫ������
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

        function genWrapper() {
            function wrapper(data) {
                data = cajaAFTB.untame(data)
                return wrapper.handle.call(this, data);
            }
            return wrapper;
        }


        /**
         * @param context ������
         * @param context.mod ɳ���ģ�鷶Χ�����в��������޶���ģ�鷶Χ֮��ȥִ��
         * @param context.frame ����ģ���ɳ��
         * @return {Object} ʵ�ʵ��������
         */
        return function (context) {

            //������Ҫ���ظ�
            return {
                TOP:frameGroup.tame({
                    //TOP �� api��������һ��Ϊstring����object���ڶ���Ϊcoback function��������Ϊboolean
                    api:frameGroup.markFunction(function(a){
                        var param = S.makeArray(arguments);
                        if(param.length>3){
                            param[2] = cajaAFTB.untame(param[2]);
                            var fnc = param[3] ;
                            param[3] = frameGroup.markFunction(function(e){
                                fnc.call(window.TOP,e);
                            });
                        }else{
                            param[0] = cajaAFTB.untame(param[0]);
                        }

                        if(window.TOP){
                            window.TOP.api.apply(this,param);
                        }else{
                            S.log('TOP is not included(jssdk script not loaded)');
                        }
                    }),
                    auth:{
                        getLoginStatus:frameGroup.markFunction(function(){
                            TOP.auth.getLoginStatus.apply(this, arguments);

                        }),
                        getSession:frameGroup.markFunction(function(){
                            return TOP.auth.getSession();
                        }),
                        getUser:frameGroup.markFunction(function(){
                            return TOP.auth.getUser();
                        }),
                        isAuth:frameGroup.markFunction(function(){
                            return TOP.auth.isAuth.apply(this, arguments);
                        }),
                        isLogin:frameGroup.markFunction(function(){
                            return TOP.auth.isLogin.apply(this, arguments);
                        })
                    },
                    ui:frameGroup.markFunction(function(){
                        var param = S.makeArray(arguments);
                        if(param[0] == "authbtn"){
                            param[1] = cajaAFTB.untame(param[1]);
                            var wrapper = genWrapper();
                            wrapper.handle = param[1].callback;
                            param[1].callback = wrapper;
                        }
                        return TOP.ui(param[0],param[1]);
                    })
                })
            }
        }

    }

    return init;

});