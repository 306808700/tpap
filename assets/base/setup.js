KISSY.config(
    {
        debug: false,
        packages: [
            {
                name: "openjs", //����
                tag: "20130527",//ʱ���, ����ڶ�̬�ű�·������, ���ڸ��°���ģ�����
                path:"http://a.tbcdn.cn/apps/taesite/balcony/core/r4000", //����Ӧ·��, ���·��ָ����ڵ�ǰҳ��·��    //
                charset: "utf-8" //����ģ���ļ������ʽ
            }
        ]
    }
);
KISSY.ready(function () {
    KISSY.use("sizzle,"+cajaConfig.modules || "", function (S) {
        var adapterArray = S.makeArray(arguments);
        adapterArray.splice(0, 2);
        TShop.Balcony.setup(adapterArray);
    });
});