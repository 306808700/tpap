
console.log(KISSY.KCharts.LineChart)

var linechart = KISSY.KCharts.LineChart({
    renderTo:".my",
    title:{
        content:"1�����Ѽ�¼"
    },
    anim:{},
    subTitle:{
        content:"week fee record"
    },
    xAxis: {
        text:['����һ','���ڶ�','������','������','������','������','������']
    },
    yAxis:{
        min:0
    },
    series:[
        {
            data:[100,4000,200,400,144,234,700]
        }],
    tip:{
        template:"��֧����ģ��:Y Ԫ"
    }
});