<!--ҳͷ������Դ����-->
<? include("../common/head.php");?>
<script src="http://l.tbcdn.cn/apps/top/x/sdk.js?appkey=12262395"></script>


<!--
    ��Ҫ���Ե�dom�ṹ��ע�⣬�����<div class="J_TScriptedModule" data-componentid="uniqueSign"> ��class��Ϊ���Բ����޸�
    �û���javascript������ֻ�������õ����dom���棬������"Խ��"
-->
<div id="dom-test" data-componentid="uniqueSign" class="J_TScriptedModule">
    <div class="taeapp_im_auth"></div>
    <br/>
    <button class="taeapp_im_dox" style="cursor:pointer;">�����ղ�</button>

    <br/><br/>��־��<br/>

    <div class="taeapp_im_ssx" style="white-space:nowrap;font-size:14px;font-family:tahoma,courier new,courier,monospace,verdana,tahoma,arial;overflow:hidden;">

    </div>

</div>

<!--ģ���ʼ���İ����ã�������Ϥ��-->
<script type="text/javascript">

    cajaConfig={//����������Ҫ�����ģ�����ƣ����ᱻuse��
        modules:"openjs/kissy/1.3.0/core,openjs/jssdk/1.0/index"
    }

</script>

<!--�����ǽ��Լ���js�÷���˱���һ�£������·���˵�php·�����Լ���js���ɣ�ע��·��-->
<?
$jsurl="testcase/thirdparty/jssdk.js";//ע��·��
$jsservice="../common/cajoled_service.php";//ע��·��
include("../common/foot.php");//����foot
?>

