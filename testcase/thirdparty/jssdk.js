console.log(1);
console.log(TOP);
TOP.ui("authbtn", {
    container: '.top-authbtn-container',
    name:'����ʹ��',
    type:'mini',
    callback: function(data){
        console.log(data);
    }
});
