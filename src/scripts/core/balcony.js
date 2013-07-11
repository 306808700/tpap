/**
 * @fileOverview Preparation for setting up the balcony environment
 * @author chengjing<chengjing.taobao.com>, qingyu<qingyu@taobao.com>
 * @depends caja-adapter
 */
(function (cajaAFTB, caja, KISSY) {
    var S = KISSY,
        version = "r3001",
        HOST_PATH = location && (location.search || '').indexOf('caja-debug') !== -1 ? "http://assets.daily.taobao.net/apps/taesite/balcony/core/" : "http://a.tbcdn.cn/apps/taesite/balcony/core/";

    /**
     * @constant Server hosts the caja service
     */
    var CAJA_SERVER = HOST_PATH + version + "/caja/";

    /**
     * @constant Identifier which indicates the module is scripted module
     */
    var SCRIPTED_MODS_IDENTIFIER = "J_TScriptedModule";

    // Store the relationship between the prototype id and cajoled javascript code of the module
    var jsModsMap = {};

    var Balcony = {};

    /**
     * Add and maintain the map in the form of {prototypeId: CajoledJS}
     * @param {String} prototypeId  the prototype id of the module
     * @param {String} cajoledJS  cajoled JavaScript code of the module
     */
    Balcony.addModsCajoledJS = function (prototypeId, cajoledJS) {
        if (arguments.length < 2) {
            return;
        }

        if (!S.isString(prototypeId)) {
            return;
        }
        jsModsMap[prototypeId] = jsModsMap[prototypeId] || ";" + cajoledJS + ";";
    };


    /**
     * Get the cajoled JavaScript code of the module
     * @param {String} prototypeId the prototype id of the module
     *
     * @returns {String} cajoled JavaScript code of the module
     */
    Balcony.getModsCajoledJS = function (prototypeId) {
        if (!prototypeId) {
            return null;
        }

        return jsModsMap[prototypeId] ? jsModsMap[prototypeId] : null;
    };

    /**
     * ���������� ���п��ܷ��ص���ȫ�ǿ�
     * @param frameGroup
     * @returns {{tameGlobalService: *, kplugin: *}}
     */
    Balcony.readyServicePluginsWidgets = function (frameGroup) {
        var extraCaja = window.ExtraCaja || {};

        var tameGlobalService;


        //init GS service from widget
        if ( extraCaja.GS) {

            //��ʼ��GS��ض���
            S.each(extraCaja.GS.initAll, function (initFunc) {
                initFunc(frameGroup);
            });
            try {
                delete extraCaja.GS.initAll;
            } catch (e) {
                extraCaja.GS.initAll = undefined;
            }

            //��ȡȫ�ַ�������ұ��Ϊ�ɶ�
            var GS = frameGroup.markReadOnlyRecord(extraCaja.GS);
            //�Ժ������б�ǰ�����
            S.each(GS, function (widgets) {
                if (S.isFunction(widgets)) {
                    frameGroup.markFunction(widgets);
                }
            });

            tameGlobalService = frameGroup.tame(GS);
            //----end GS
        }

        if (extraCaja.kplugin) {
            //kissy plugisn
            S.each(extraCaja.kplugin.initAll, function (initFunc) {
                initFunc(frameGroup);
            });

            try {
                delete extraCaja.kplugin.initAll;
            } catch (e) {
                extraCaja.kplugin.initAll = undefined;
            }
        }


        return {
            tameGlobalService: tameGlobalService,
            kplugin: extraCaja.kplugin
        }
    };


    /**
     * Collect all the scripted modules and run them with corresponding cajoled JavaScript code
     * @param {Object} frameGroup frameGroup in caja environment
     */
    Balcony.runScriptedMods = function (frameGroup) {
        var DOM = KISSY.DOM;
        var scriptedMods = DOM.query("." + SCRIPTED_MODS_IDENTIFIER);
        if (!scriptedMods) {
            return;
        }

        var sharedFn = cajaAFTB.makeSharedFactory(frameGroup, S);

        var serviceObj = Balcony.readyServicePluginsWidgets(frameGroup);


        S.each(scriptedMods, function (scriptedMod) {
            var prototypeId = DOM.attr(scriptedMod, "data-componentid");
            // no prototypeId
            if (!prototypeId) {
                return;
            }

            var cajoledJS = jsModsMap[prototypeId];
            //module with the prototype id hasn't been added into the map
            if (undefined === cajoledJS) {
                return;
            }
            frameGroup.makeES5Frame(scriptedMod, {rewrite: cajaAFTB.rewriteURL }, function (frame) {
                var onerror = frameGroup.tame(frameGroup.markFunction(function (message, source, lineNum) {
                    window.shop_log.sendSyncErrorLog
                    return true;
                }));
                //Ϊiframe ɳ�价����ʾ��ģ���ԭ��id, ��ģ���ԭ��id,����iframe�У������ȡ���ݵ�ʱ�򷽱��ȡ
                DOM.attr(frame.iframe, 'data-modulename', DOM.attr(frame.div, 'data-componentid'));

                //kplugins ��kissy�еĲ��
                var exposed_kissy = sharedFn({
                    imports: frame.imports,
                    context: scriptedMod,
                    kplugins: serviceObj.kplugin
                });

                var start_time = +new Date();
                var prepareEnv = frame.contentCajoled('', cajoledJS);
                prepareEnv.run(S.mix({
                    KISSY: exposed_kissy,
                    GS: serviceObj.tameGlobalService,
                    onerror: onerror
                },S.isFunction(window.getCajaExposed) ? window.getCajaExposed(frameGroup, cajaAFTB) : {}), function (re, a) {
                });
                //���ͼ����־-jsִ��ʱ��
                shop_log.sendJsMonitor(1, "���ʦģ��js��������ִ��ʱ��", prototypeId, +new Date() - start_time);

            });
        });
    };

    /**
     * Set up the balcony environment for scripted modules
     */
    Balcony.setup = function () {
        caja.configure({
            cajaServer: CAJA_SERVER,
            debug: location && (location.search || '').indexOf('caja-debug') !== -1
        }, function (frameGroup) {
            Balcony.runScriptedMods(frameGroup);
        });
    };


    /**
     * Register and maintain the map in the form of {prototypeId: CajoledJS}
     * @param {String} prototypeId  the prototype id of the module
     * @param {String} cajoledJS  cajoled JavaScript code of the module
     */
    Balcony.registerCajoledMods = function (prototypeId, cajoledJS) {
        Balcony.addModsCajoledJS(prototypeId, cajoledJS);
    };

    /**
     * @author ʯ��
     * ��ǰ����
     * �˴���������TShop����, ��Ϊ����˶����ʦjs�ı��룬������� "TShop.Balcony.registerMod(jscode)"
     * �����Ŀǰ���汾���ƽ����ѣ�ǰ����������
     * �˴��޷��޸ģ���ΪҪ��ǰ����
     */
    if (!window['TShop']) {
        window['TShop'] = {};
    }
    window['TShop'].Balcony = Balcony;

})(cajaAFTB, caja, KISSY);