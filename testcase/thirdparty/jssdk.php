<!--ҳͷ������Դ����-->
<? include("../common/head.php");?>
<script type="text/javascript" src="http://l.tbcdn.cn/apps/top/x/sdk.js?appkey=xxxxx"></script>


<!--
    ��Ҫ���Ե�dom�ṹ��ע�⣬�����<div class="J_TScriptedModule" data-componentid="uniqueSign"> ��class��Ϊ���Բ����޸�
    �û���javascript������ֻ�������õ����dom���棬������"Խ��"
-->
<div id="dom-test" data-componentid="uniqueSign" class="J_TScriptedModule">
    <div class="top-authbtn-container top-login-btn-container"></div>

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
        module:"openjs/1.3.0/core,openjs/thirdparty/jssdk/1.0/index"
    }

</script>

<!--�����ǽ��Լ���js�÷���˱���һ�£������·���˵�php·�����Լ���js���ɣ�ע��·��-->
<?
$jsurl="testcase/thirdparty/jssdk.js";//ע��·��
$jsservice="../common/cajoled_service.php";//ע��·��
include("../common/foot.php");//����foot
?>

