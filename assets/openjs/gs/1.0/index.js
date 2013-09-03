/**
 * @fileOverview uploader����İ�ȫ������
 * @depends
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
        var GS = {};
        GS.addListener = function (name, l) {
            if (!GS.addListener.Fncs[name]) {
                GS.addListener.Fncs[name] = [];
            }
            GS.addListener.Fncs[name].push(l);
        };
        GS.addListener.Fncs = [];

        (function () {
            Event.on(window, 'scroll', function (e) {
                var event = {
                    scrollTop: S.DOM.scrollTop(window)
                };
                frameGroup.markReadOnlyRecord(event);
                var tameEvent = frameGroup.tame(event);

                if (GS.addListener.Fncs['windowScroll']) {
                    for (var i = 0; i < GS.addListener.Fncs['windowScroll'].length; i++) {
                        GS.addListener.Fncs['windowScroll'][i](tameEvent);
                    }
                }
            });
        })();

        (function () {
            var genTokenid = "#J_TCajaGenToken"; //ҳ����ʱ����token��id��ʾ
            var targetId = "tempCajaIframe";

            /**
             * ����һ��iframe��form
             * @param url form��Ҫ�ύ��url
             * @param token form�е���֤��ַ
             * @returns {{form: void, iframe: void}}
             */
            function construIframeForm(url, token) {
                //gen iframe to submit
                var ifr = DOM.create("<iframe id=''" + targetId + "' name='" + targetId + "'></iframe>");
                DOM.css(ifr, 'display', 'none');

                //gen form from submit
                var form = DOM.create('<form action="' + url + '" target="' + targetId + '" method="post"  enctype="multipart/form-data"></form>');
                DOM.css(ifr, 'display', 'none');
                var input = DOM.create('<input type="hidden" name="token" value="' + token + '"/>');
                form.appendChild(input);

                return {
                    form: form,
                    iframe: ifr
                }
            }


            /**
             * Ϊҳ��ָ������ע���¼��������
             */
            Event.delegate(document, 'change', 'input.J_TCajaUploadImg', function (e) {
                var tg = e.target;
                /*  IO({
                 type: "post",
                 url: DOM.val(genTokenid),
                 success: function (result) {*/
                var obj = construIframeForm(DOM.attr(tg, 'data-url'), 1/* result.data.token*/);
                DOM.append(tg, obj.form);
                document.body.appendChild(obj.iframe);
                document.body.appendChild(obj.form);
                obj.form.submit();
                /*   },
                 error: function () {
                 alert('����˳���token����ʧ��! ���ǲ�������������.');
                 }
                 });*/

                //������ע����¼�����������
                var tempFunc = function (tameJSON) {
                    if (GS.addListener.Fncs['cajaupload']) {
                        for (var i = 0; i < GS.addListener.Fncs['cajaupload'].length; i++) {
                            GS.addListener.Fncs['cajaupload'][i](tameJSON);
                        }
                    }
                };

                /**
                 * �ϴ���ɺ���iframe�ڲ���װ�����������¼�
                 * ��ʱ�����¼�ע�ᣬ��������Ƴ���
                 * ������Ϊ��Ҫ�첽��token���ϴ�������ÿһ��ֻ���ϴ�һ���ļ�
                 * todo ��������״̬���ж�
                 */
                Event.on(window, 'cajaupload', function (json) {
                    //caja ��װ�������ݲ��ҵ���
                    json = {
                        content: json.content
                    }
                    frameGroup.markReadOnlyRecord(json);
                    var tameJSON = frameGroup.tame(json);
                    tempFunc(tameJSON);

                    //����������ʱ����
                    Event.remove(window, 'cajaupload');
                    DOM.remove(obj.iframe);
                    DOM.remove(obj.form);
                });

            });

        })();

        /**
         * @param context ������
         * @param context.mod ɳ���ģ�鷶Χ�����в��������޶���ģ�鷶Χ֮��ȥִ��
         * @param context.frame ����ģ���ɳ��
         * @return {Object} ʵ�ʵ��������
         */
        return function (context) {
            GS = frameGroup.markReadOnlyRecord(GS);
            frameGroup.markFunction(GS.addListener);

            //������Ҫ���ظ�
            return {
                GS: frameGroup.tame(GS),
                kissy: false
            }
        }

    }

    return init;

});