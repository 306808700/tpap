<? include("../common/head.php");?>

<script src="http://api.ditu.aliyun.com/map.js" type="text/javascript"></script>


<div data-componentid="uniqueSign" class="J_TScriptedModule">
    <div id="mapDiv" style="width:800px;height:600px"></div>
</div>

<script>
    KISSY.config(
        {
            debug: false,
            packages: [
                {
                    name: "openjs", //����
                    tag: "20130527",//ʱ���, ����ڶ�̬�ű�·������, ���ڸ��°���ģ�����
                    path:"../../assets", //����Ӧ·��, ���·��ָ����ڵ�ǰҳ��·��    //
                    charset: "utf-8" //����ģ���ļ������ʽ
                }
            ]
        }
    );
    cajaConfig={//����������Ҫ�����ģ�����ƣ����ᱻuse��
        modules:"openjs/thirdparty/alimap/1.0/index"
    }
</script>


    <!--�����ǽ��Լ���js�÷���˱���һ�£������·���˵�php·�����Լ���js���ɣ�ע��·��-->
<?
$jsurl="testcase/thirdparty/alimap.js";//ע��·��
$jsservice="../common/cajoled_service.php";//ע��·��
include("../common/foot.php");//����foot
?>
