(function () {
    //ȫ�ַ��� �����ж�, ÿ��caja widget������Ҫ��������
    var S = KISSY, Event = S.Event, DOM = S.DOM, IO = S.IO;

    //------begin
    var ExtraCaja = (window.ExtraCaja = window.ExtraCaja || {});
    var GS = (ExtraCaja.GS = ExtraCaja.GS || {});
    GS.initAll = GS.initAll || [];
    //------end

    var genTokenid = "#J_TCajaGenToken"; //ҳ����ʱ����token��id��ʾ
    var targetId = "tempCajaIframe";

    function initCajaGS(frameGroup) {
        //addListener �����ж�
        GS.addListener = GS.addListener || function (name, l) {
            if (!GS.addListener.Fncs[name]) {
                GS.addListener.Fncs[name] = [];
            }
            GS.addListener.Fncs[name].push(l);
        };
        GS.addListener.Fncs = GS.addListener.Fncs || [];


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
                var obj = construIframeForm(DOM.attr(tg, 'data-url'),1/* result.data.token*/);
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
    }

    GS.initAll.push(initCajaGS);

})();

