/**
 * @fileOverview shop_log ��������ռ�
 *               Ŀǰ������caja�Ĵ����ռ�
 *               ֻ�����ϻ�������?caja-debug��ʱ��ŷ�����־
 * @author ʯ�� shiba@taobao.com
 * @depends window, KISSY
 * @type {Object}
 */
var shop_log = (function (win, S) {

    /**
     * goldlog.send(url, data)
     url {String} logurl eg, http://xx.com/1.gif
     data {Object} (Optional) log obj to send   eg��{a: 1, b:2, c:3, d: ��DDD��}��

     ����������ķ�������������������ű���ʹ�� new Image() �ķ�������һ���µ�ͼƬ������ data �е� key/value ����ƴװΪ�����ַ������ύһ�� GET ����
     */
    var shop_data = win.shop_config || {}, //���ϵͳ���ṩ��ȫ�ֱ���
        shop_url = win.document.location.href;
    shop_data.template = shop_data.template || {};

    //�ж��Ƿ������ϻ���������url ���ж� ���Ƿ���*.taobao.com������ʽ
    var sendFlag = /.*(\.taobao\.com)$/.test(win.location.host) || win.location.search.indexOf("caja-debug") !== -1;

    //�Զ�ִ�У�����ȡһЩȫ������


    /**
     * ׼��log����
     * �������ϵͳȫ�ֱ���shop_cifnig���ṩ�˴󲿷���Ҫ����Ϣ������
     *  var shop_config = {
     "shopId":"57299736",
     "siteId":"2",
     "userId":"92688455",
     "user_nick": "%E6%9D%8E%E5%AE%81%E5%AE%98%E6%96%B9%E7%BD%91%E7%BB%9C%E6%97%97%E8%88%B0%E5%BA%97",
     "template": {
     "name": "",
     "id": "",
     "design_nick": ""
     }
     }

     * @return {Object}
     */

    function prepareData(msg, iframe) {
        shop_data.template = shop_data.template || {};

        return S.mix({
            error_page:shop_url,
            msg       :msg,
            name      :S.isString(iframe) ? iframe : S.DOM.attr(iframe, 'data-modulename'),
            random    :+new Date()
        }, {
            "shop_id"      :shop_data.shopId,
            "site_id"      :shop_data.siteId,
            "user_id"      :shop_data.userId,
            "user_nick"    :shop_data.user_nick,
            "template_name":shop_data.template.name,
            "template_id"  :shop_data.template.id,
            "design_nick"  :shop_data.template.design_nick
        });
    }

    /**
     * ���jsִ��ʱ��
     * @param type ������� 1�� caja��js�����ִ��ʱ��
     * @param desc ��type��Ӧ����������
     * @param prototypeid ģ��ԭ��id
     * @param time_consume
     */
    function prepareMonitorData(type, desc, prototypeid, time_consume) {
        shop_data.template = shop_data.template || {};
        return S.mix({
            type        :type,
            desc        :desc,
            module_name :prototypeid,
            time_consume:time_consume
        }, {
            "shop_id"      :shop_data.shopId,
            "site_id"      :shop_data.siteId,
            "user_id"      :shop_data.userId,
            "user_nick"    :shop_data.user_nick,
            "template_name":shop_data.template.name,
            "template_id"  :shop_data.template.id,
            "design_nick"  :shop_data.template.design_nick
        });
    }

    /**
     * ���ͱ����񵽵Ĵ�����־��������
     * @param msg
     * @param filename
     * @param errorline
     */

    function sendSyncErrorLog(msg, filename) {
        if (!sendFlag) {
            return;
        }
        var data = prepareData(msg, filename);
        goldlog.emit('caja_log', data);
    }

    /**
     * ����taming iframe �ڲ��Ĵ�����Ϣ��������(async error)
     * @param msg ɳ�价�����쳣��Ϣ
     * @param iframe ɳ���iframe
     */
    function sendTamingErrorLog(msg, iframe) {
        if (!sendFlag) {
            return;
        }
        var data = prepareData(msg, iframe);
        goldlog.emit('caja_log', data);
    }

    /**
     * ���ʹ�������־�����
     * @param type
     * @param desc
     * @param prototypeid
     * @param time_consume
     */
    function sendJsMonitor(type, desc, prototypeid, time_consume) {
        if (!sendFlag) {
            return;
        }
        var data = prepareMonitorData(type, desc, prototypeid, time_consume);
        goldlog.emit('caja_per', data);
    }


    return {
        sendSyncErrorLog  :sendSyncErrorLog,
        sendTamingErrorLog:sendTamingErrorLog,
        sendJsMonitor     :sendJsMonitor
    }

})(window, KISSY);