<!--ҳͷ������Դ����-->
<? include("../common/head.php");?>

<!--
    ��Ҫ���Ե�dom�ṹ��ע�⣬�����<div class="J_TScriptedModule" data-componentid="uniqueSign"> ��class��Ϊ���Բ����޸�
    �û���javascript������ֻ�������õ����dom���棬������"Խ��"
-->
<div class="J_TScriptedModule" data-componentid="uniqueSign">
    <div style="height:500px;height:500px;" class="my"></div>
</div>

<!--ģ���ʼ���İ����ã�������Ϥ��-->
<script type="text/javascript">
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
        modules:"openjs/1.3.0/core,openjs/gallery/kcharts/1.1/index"
    }

</script>

<!--�����ǽ��Լ���js�÷���˱���һ�£������·���˵�php·�����Լ���js���ɣ�ע��·��-->
<?
$jsurl="testcase/gallery/kcharts1.1.js";//ע��·��
$jsservice="../common/cajoled_service.php";//ע��·��
include("../common/foot.php");//����foot
?>