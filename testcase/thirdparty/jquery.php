<!--ҳͷ������Դ����-->
<? include("../common/head.php");?>
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.6.1/jquery.js"></script>


<!--
    ��Ҫ���Ե�dom�ṹ��ע�⣬�����<div class="J_TScriptedModule" data-componentid="uniqueSign"> ��class��Ϊ���Բ����޸�
    �û���javascript������ֻ�������õ����dom���棬������"Խ��"
-->
<div id="dom-test" data-componentid="uniqueSign" class="J_TScriptedModule">
    <div class="taeapp_im_auth"></div>
    <div class="taeapp_im_auth"></div>
    <div class="taeapp_im_auth"></div>
    <div class="taeapp_im_auth"></div>
    <div class="taeapp_im_auth"></div>


</div>

<!--ģ���ʼ���İ����ã�������Ϥ��-->
<script type="text/javascript">
    KISSY.config(
        {
            debug: true,
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
        modules:"openjs/thirdparty/jquery/1.7/index"
    }

</script>

<!--�����ǽ��Լ���js�÷���˱���һ�£������·���˵�php·�����Լ���js���ɣ�ע��·��-->
<?
$jsurl="testcase/thirdparty/jquery.js";//ע��·��
$jsservice="../common/cajoled_service.php";//ע��·��
include("../common/foot.php");//����foot
?>

