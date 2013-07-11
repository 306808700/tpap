/**
 * @fileOverview �������ó�ʼ��caja����
 * @author shiba@taobao.com
 */
(function (win, caja, KISSY) {
    var cajaAFTB = window.cajaAFTB;
    var cajaConfig = win.cajaConfig || {};

    var S = KISSY,
        speci = cajaConfig.speci || "default",
        HOST_PATH = "http://a.tbcdn.cn/apps/taesite/caja/speci";

    /**
     * @constant Server hosts the caja service
     */
    var CAJA_SERVER = HOST_PATH + speci + "/caja/";

    /**
     * @constant Identifier which indicates the module is scripted module
     */
    var SCRIPTED_MODS_IDENTIFIER = "J_TSModule";

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
        jsModsMap[prototypeId] = cajoledJS;
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
     * Collect all the scripted modules and run them with corresponding cajoled JavaScript code
     * @param {Object} frameGroup frameGroup in caja environment
     */
    Balcony.runScriptedMods = function (frameGroup) {
        var DOM = KISSY.DOM;
        var scriptedMods = DOM.query("." + SCRIPTED_MODS_IDENTIFIER, "#content");
        if (!scriptedMods) {
            return;
        }

        var sharedFn = cajaAFTB.makeSharedFactory(frameGroup, S);

        var tameGlobalService = cajaAFTB.GS(frameGroup,S);


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
            frameGroup.makeES5Frame(scriptedMod, {rewrite:cajaAFTB.rewriteURL }, function (frame) {

                //Ϊiframe ɳ�价����ʾ��ģ���ԭ��id, ��ģ���ԭ��id,����iframe�У������ȡ���ݵ�ʱ�򷽱��ȡ
                DOM.attr(frame.iframe, 'data-modulename', DOM.attr(frame.div,'data-componentid'));

                var exposed_kissy = sharedFn({
                    imports:frame.imports,
                    context:scriptedMod
                });

                var prepareEnv = frame.contentCajoled('', cajoledJS);
                prepareEnv.run({
                    KISSY  :exposed_kissy,
                    GS:tameGlobalService
                }, function (re, a) {
                });

            });
        });


    };

    /**
     * Set up the balcony environment for scripted modules
     */
    Balcony.setup = function () {
        caja.configure({
            cajaServer:CAJA_SERVER,
            debug     :location && (location.sejsarch || '').indexOf('caja-debug') !== -1
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

})(window, caja, KISSY);