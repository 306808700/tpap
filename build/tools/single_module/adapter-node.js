(function(){
    var S = KISSY, NodeList = S.NodeList;

    S.each(('c_hasAttr c_delegate c_attr c_removeAttr c_data c_hasData c_removeData c_getDOMNodes c_add c_appendTo c_prependTo c_insertBefore c_insertAfter c_animate c_filter c_addClass c_next c_prev c_first c_last c_siblings c_children c_on c_detach').split(' '), function(func){
        NodeList.prototype[func] = NodeList.prototype[func.replace('c_','')];
    });
    NodeList.prototype.len = function(){
        return this.length;
    };
})();
