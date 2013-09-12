var DD = KISSY.DD;
var $ = KISSY.all;

var drag = new DD.DraggableDelegate({
	container:".wrapper",
	selector:".drag",
	handlers:[".header"], // 设置了这个之后，只有拖动header才会拖动元素。不设置的话，整个drag元素都是trigger
	bufferTime:0.5,
	move:1
});

drag.on('dragstart', function(){
	console.log('start drag...');
});
drag.on('drag', function(){
	console.log('draging...');
});
drag.on('dragend', function(e){
	console.log('end drag...');
	console.log(e);
	console.log(e.todo);
});