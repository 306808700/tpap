<!--ҳͷ������Դ����-->
<? include("../common/head.php");?>

<!--
    ��Ҫ���Ե�dom�ṹ��ע�⣬�����<div class="J_TScriptedModule" data-componentid="uniqueSign"> ��class��Ϊ���Բ����޸�
    �û���javascript������ֻ�������õ����dom���棬������"Խ��"
-->
<div class="J_TScriptedModule" data-componentid="uniqueSign">
    <input type="text" name="d" class="J_Calendar"/>
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
         module:"openjs/1.3.0/core,openjs/1.3.0/calendar"
     }

</script>

<!--�����ǽ��Լ���js�÷���˱���һ�£������·���˵�php·�����Լ���js���ɣ�ע��·��-->
<?
    $jsurl="testcase/1.3.0/calendar.js";//ע��·��
    $jsservice="../common/cajoled_service.php";//ע��·��
    include("../common/foot.php");//����foot
?>