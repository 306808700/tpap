KISSY.config(
    {
        debug: true,
        packages: [
            {
                name: "openjs", //����
                tag: "20130527",//ʱ���, ����ڶ�̬�ű�·������, ���ڸ��°���ģ�����
                path:"../../assets", //����Ӧ·��, ���·��ָ����ڵ�ǰҳ��·��    //
                charset: "gbk" //����ģ���ļ������ʽ
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