<!--ҳͷ������Դ����-->
<? include("../common/head.php");?>

<!--
    ��Ҫ���Ե�dom�ṹ��ע�⣬�����<div class="J_TScriptedModule" data-componentid="uniqueSign"> ��class��Ϊ���Բ����޸�
    �û���javascript������ֻ�������õ����dom���棬������"Խ��"
-->
<div id="dom-test" data-componentid="uniqueSign" class="J_TScriptedModule">
    <p>dd</p>
    <p>dd</p>
    <p>dd</p>
    <p>dd</p>
    <p>dd</p>
    <p>dd</p>
    <p>dd</p>
    <p>dd</p>
    <p>dd</p>
    <p>dd</p>
    <p>dd</p>
    <p>dd</p>
    <p>dd</p>
    <p>dd</p>
    <p>dd</p>
    <p>dd</p>
    <p>dd</p>
    <p>dd</p>
    <p>dd</p>
    <p>dd</p>
    <p>dd</p>
    <p>dd</p>
    <p>dd</p>
    <p>dd</p>
    <p>dd</p>
    <p>dd</p>
    <p>dd</p>
    <p>dd</p>
    <p>dd</p>
    <p>dd</p>
    <p>dd</p>
    <p>dd</p>
    <p>dd</p>
    <p>dd</p>
    <p>dd</p>
    <p>dd</p>
    <p>dd</p>
    <p>dd</p>
    <p>dd</p>
    <p>dd</p>
    <p>dd</p>
    <p>dd</p>
    <p>dd</p>
    <p>dd</p>
    <p>dd</p>
    <p>dd</p>
    <p>dd</p>
    <p>dd</p>
    <p>dd</p>
    <p>dd</p>
    <p>dd</p>
    <p>dd</p>
    <p>dd</p>
    <p>dd</p>
    <p>dd</p>
    <p>dd</p>
    <p>dd</p>
    <p>dd</p>
    <p>dd</p>
    <p>dd</p>
    <p>dd</p>
    <p>dd</p>
    <p>dd</p>
    <p>dd</p>
    <p>dd</p>
    <p>dd</p>


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
                    charset: "gbk" //����ģ���ļ������ʽ
                }
            ]
        }
    );
    cajaConfig={//����������Ҫ�����ģ�����ƣ����ᱻuse��
        modules:"openjs/thirdparty/globalservice/1.0/index"
    }

</script>

<!--�����ǽ��Լ���js�÷���˱���һ�£������·���˵�php·�����Լ���js���ɣ�ע��·��-->
<?
$jsurl="testcase/thirdparty/globalservice.js";//ע��·��
$jsservice="../common/cajoled_service.php";//ע��·��
include("../common/foot.php");//����foot
?>

