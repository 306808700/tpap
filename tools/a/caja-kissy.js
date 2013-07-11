/*
 Copyright 2013, caja for kissy lib
 build time: ����
 */

/**
 * The KISSY ȫ�ֶ���.��caja�н��з�װ
 * ����ʯ��
 * @class KISSY
 */
var KISSY = {}

/**
 * ���������Ϣ
 * @param  msg �C ������Ϣ
 * @param [cat] �C ������Ϣ���.
 * @param [src]�C ���Դ������ڵ�Դ��Ϣ
 */
KISSY.log = function (msg, cat, src) {
};

/**
 �������ַ��� str ��ԭΪ����.
 Parameters:
 o (object) �C �����ַ���
 seq (string) �C ������ָ���, Ĭ�� &
 eq (string) �C ���������ֵ��ķָ��, Ĭ�� =
 Returns: �����Ķ����ʾ
 Return type: Object
 */
KISSY.unparam = function () {
};

/**
 ������ o ת��Ϊ�����ַ���, ���ڷ��� http ����.
 Parameters:
 o (object) �C ������ֵ�Զ���
 seq (string) �C ������ָ���, Ĭ�� &
 eq (string) �C ���������ֵ��ķָ���, Ĭ�� =
 arr (boolean) �C ����ֵΪ����ʱ, �������Ƿ�� [] �� %5B%5D , Ĭ�� true
 Returns: �����ڷ�������Ĳ����ַ���
 Return type: string
 */
KISSY.param = function () {
};

/**
 ���ַ����е� html ʵ���ַ��滻�ɶ�Ӧ�ַ�
 Parameters:    str (string) �C ���� html ʵ���ַ����ַ���
 Returns:    �滻ʵ���ַ�����ַ���
 Return type:    string
 */
KISSY.unEscapeHTML = function () {
};

/**
 ���ַ������� html ת��õ��ʺ���ҳ������ʾ������, �����滻 < Ϊ &lt;
 Parameters:    str (string) �C Ҫ��ʾ��ҳ���е���ʵ����
 Returns:    ���� html ת�����ַ���
 Return type:    string
 */
KISSY.escapeHTML = function () {
};

/**
 ���ַ����е�ռλ���滻Ϊ��Ӧ�ļ�ֵ.
 Parameters:
 str (String) �C ��������ռλ����ģ���ַ���, ռλ���� {} ������.
 o (Object) �C ����
 Returns:
 ��ģ������ݽ�������������ַ���

 Return type:
 String
 */
KISSY.substitute = function () {
};

/**
 *
 * DOM ���󣬰����Զ�DOM�ĳ��ò���
 */
KISSY.DOM = function () {
};

/**
 * ��ȡ����ѡ�����ĵ�һ��Ԫ��. �൱�ڵ��� query(selector,context)[0]
 */
KISSY.DOM.get = function () {
};

/**
 ��ȡ����ѡ����������Ԫ��.
 Parameters:
 selector (string|HTMLCollection|Array<HTMLElement>) �C �ַ�����ʽ�μ� KISSY selector
 context (string|HTMLCollection|Array<HTMLElement>) �C
 ѡ�����ο�������,.

 context ����ͬ selector ��ͬ.

 Returns:
 ����ѡ�����ַ����� dom �ڵ�����
 */
KISSY.DOM.query = function () {
};

/**
 * String text ( selector )
 *��ȡ����ѡ�����ĵ�һ��Ԫ�����������ı�ֵ.
 Parameters:    selector (string|HTMLCollection|Array<HTMLElement>) �C �ַ�����ʽ�μ� KISSY selector
 Returns:    ��ȡ����ѡ�����ĵ�һ��Ԫ�����������ı�ֵ. ��ֵʱ, ���ؿ��ַ���.

 void text ( selector, value )
 ������ѡ����������Ԫ�������ı�ֵ.
 Parameters:
 selector (string|HTMLCollection|Array<HTMLElement>) �C �ַ�����ʽ�μ� KISSY selector
 value (string) �C ��Ҫ���õ��ı�ֵ

 */
KISSY.DOM.text = function () {
};

/**
 *Object offset ( selector )
 ��ȡ����ѡ�����ĵ�һ��Ԫ�����ҳ���ĵ����Ͻǵ�ƫ��ֵ.
 Parameters:    selector (string|HTMLCollection|Array<HTMLElement>) �C �ַ�����ʽ�μ� KISSY selector
 Returns:    ���ҳ���ĵ����Ͻǵ�ƫ��ֵ, ������������
 Return type:    Object
 left
 {Number} - ���ҳ���ĵ����Ͻǵĺ�����

 top
 {Number} - ���ҳ���ĵ����Ͻǵ�������

 void offset ( selector, value )
 ������ѡ����������Ԫ������ƫ��ֵ.
 Parameters:
 selector (string|HTMLCollection|Array<HTMLElement>) �C �ַ�����ʽ�μ� KISSY selector
 value (object) �C ƫ�ƶ���, ������������ left ,``top`` , ��ʽͬ��ȡƫ�Ƶķ���ֵ.
 */
KISSY.DOM.offset = function () {
};
/**
 *Boolean hasClass ( selector , value )
 �жϷ���ѡ����������Ԫ�����Ƿ���ĳ��Ԫ�غ����ض� class.
 Parameters:
 selector (string|HTMLCollection|Array<HTMLElement>) �C �ַ�����ʽ�μ� KISSY selector
 value (string) �C ��ʽ�� class, ����ÿո�ָ�, ��ʾͬʱ���������ʽ��
 Returns:
 �Ƿ����ѡ������Ԫ���д���ĳ��Ԫ�غ����ض���ʽ�� value

 Return type:
 Boolean
 */
KISSY.DOM.hasClass = function () {
};

/**
 *void addClass ( selector , value )
 ������ѡ����������Ԫ�����ָ�� class.
 Parameters:
 selector (string|HTMLCollection|Array<HTMLElement>) �C �ַ�����ʽ�μ� KISSY selector
 value (string) �C ��ʽ�� class, ����ÿո�ָ�
 */
KISSY.DOM.addClass = function () {
};

/**
 *void removeClass ( selector , value )
 ������ѡ����������Ԫ���Ƴ�ָ�� class.
 Parameters:
 selector (string|HTMLCollection|Array<HTMLElement>) �C �ַ�����ʽ�μ� KISSY selector
 value (string) �C ��ʽ�� class, ����ÿո�ָ�
 */
KISSY.DOM.removeClass = function () {
};

/**
 *void toggleClass ( selector, value )
 ��������ѡ����������Ԫ��, �������ֵΪ value �� class, ���Ƴ���, ��֮���.
 Parameters:
 selector (string|HTMLCollection|Array<HTMLElement>) �C �ַ�����ʽ�μ� KISSY selector
 value (string) �C ��ʽ�� class, ����ÿո�ָ� , ��Ҫ toggle ����ʽ��
 */
KISSY.DOM.toggleClass = function () {
};

/**
 *void replaceClass ( selector, oldClassName, newClassName )
 ������ѡ����������Ԫ�ص��� class �滻Ϊ�� class.
 Parameters:
 selector (string|HTMLCollection|Array<HTMLElement>) �C �ַ�����ʽ�μ� KISSY selector
 oldClassName (string) �C ��ʽ�� class, ����ÿո�ָ� , ��Ҫɾ������ʽ��
 newClassName (string) �C ��ʽ�� class, ����ÿո�ָ� , ��Ҫ��ӵ���ʽ��
 */
KISSY.DOM.replaceClass = function () {
};

/**
 String|undefined data ( selector [ , name ] )
 ��ȡ����ѡ�����ĵ�һ��Ԫ�ص���չ����(expando).
 Parameters:
 selector (string|HTMLCollection|Array<HTMLElement>) �C �ַ�����ʽ�μ� KISSY selector
 name (string) �C ��չ��������
 Returns:
 ��Ӧ��չ������������ֵ, ��������ڷ��� undefined
 �粻ָ����չ������, ��ȡ��������չ���Լ�ֵ���� , �����ǰ��û���ù���չ����, �򷵻ؿն���, ����ֱ���ڸÿն���������
 void data ( selector, name, data )
 ������ѡ����������Ԫ�ص���չ����(expando).������չ���� name Ϊ data.
 Parameters:
 selector (string|HTMLCollection|Array<HTMLElement>) �C �ַ�����ʽ�μ� KISSY selector
 name (string) �C ��չ��������
 value �C ��չ����ֵ
 void data ( selector, kv )
 ������ѡ����������Ԫ��������չ����(expando).
 Parameters:
 selector (string|HTMLCollection|Array<HTMLElement>) �C �ַ�����ʽ�μ� KISSY selector
 kv (object) �C ��չ����������չ����ֵ�ļ�ֵ��
 */
KISSY.DOM.data = function () {
};

/**
 Boolean hasData ( selector [ , name ] )
 �ж��Ƿ����ѡ����������Ԫ���е�һ�����ڶ�Ӧ����չ����( expando )ֵ.
 Parameters:
 selector (string|HTMLCollection|Array<HTMLElement>) �C �ַ�����ʽ�μ� KISSY selector
 name (string) �C ��չ��������.���ָ�� name, ���ж��Ƿ����ָ������չ����ֵ. �����ж��Ƿ����������չ����ֵ
 Returns:
 �Ƿ������չ����.

 Return type:
 Boolean
 */
KISSY.DOM.hasData = function () {
};


/**
 void removeData ( selector [ , name ] )
 ������ѡ����������Ԫ�صĶ�Ӧ��չ����( expando )ɾ��.
 Parameters:
 selector (string|HTMLCollection|Array<HTMLElement>) �C �ַ�����ʽ�μ� KISSY selector
 name (string) �C ��չ��������. ���ָ�� name, ��ֻɾ����Ϊ name �� expando . �����ָ�� name, ��ɾ��Ԫ�ص����� expando .
 */
KISSY.DOM.removeData = function () {
};

/**
 String attr ( selector, name )
 ��ȡ����ѡ�����ĵ�һ��Ԫ�ص�����ֵ.
 Parameters:
 selector (string|HTMLCollection|Array<HTMLElement>) �C �ַ�����ʽ�μ� KISSY selector
 name (string) �C ��������
 Returns:
 ��Ӧ������������ֵ
 */
KISSY.DOM.attr = function () {
};


/**
 Boolean hasAttr ( selector , attrName )
 �жϷ���ѡ����������Ԫ�����Ƿ���ĳ��Ԫ�غ����ض�����.
 Parameters:
 selector (string|HTMLCollection|Array<HTMLElement>) �C �ַ�����ʽ�μ� KISSY selector
 attrname (string) �C ��������
 Returns:
 ����ѡ����������Ԫ�����Ƿ���ĳ��Ԫ�غ����ض�����.

 Return type:
 Boolean
 */
KISSY.DOM.hasAttr = function () {
};

/**
 void removeAttr ( selector, name )
 �Ƴ�����ѡ����������Ԫ�ص�ָ������.
 Parameters:
 selector (string|HTMLCollection|Array<HTMLElement>) �C �ַ�����ʽ�μ� KISSY selector
 name (string) �C ��������
 */
KISSY.DOM.removeAttr = function () {
};

/**
 * ���� io ���󲢷���, �̳��� Promise .
 Parameters:    cfg (Object) �C ������������ļ�ֵ�Զ���. ���е�������ǿ�ѡ��
 ������Ϣȥ���￴�°� �� http://docs.kissyui.com/docs/html/api/core/ajax/io.html
 ע�⣺ֻ֧��json����jsonp����
 */
KISSY.io = function () {
}

/**
 * ����������user agent
 * ��KISSY.UA.ie ,���ie 7 ������Ļ�����ô����7
 * http://docs.kissyui.com/docs/html/api/core/ua/
 */
KISSY.UA = function () {
}

/**
 * Event �¼�ע��ӿڣ�֧��on��delegate, detach,fire
 */
KISSY.Event = function () {
}

/**
 *void on ( selector , eventType , fn [ , scope ] )
 Ϊ����ƥ��� dom �ڵ����Ӧ�¼�����¼�������
 Parameters:
 selector (string|HTMLCollection|Array<HTMLElement>) �C �ַ�����ʽ�μ� KISSY selector
 eventType (string) �C ����һ�������¼����Ƶ��ַ���, ����¼����Կո�ֿ��� �¼�����ͨ���ӵ�����ʾ���飬���� ��click.one�� , ��click.two��
 fn (function(eventObject)) �C ���¼�����ʱ�Ļص�����
 scope (object) �C �ص������� this ֵ. �����ָ��Ĭ��Ϊ���¼��ĵ�ǰԪ��

 Note
 ������ object , embed , applet Ԫ����ע���¼�.
 */
KISSY.Event.on = function (selector, eventType, fn) {
}

/**
 * ��on��һ��һ����
 */
KISSY.Event.add = function () {
}

/**
 * void delegate ( selector , eventType , filter , fn [ , scope ] )
 Ϊ����ƥ��� dom �ڵ����Ӧ�¼�����¼�������, ���ڸýڵ������ڵ���ƥ�� filter �Ľڵ��ϴ����¼�ʱ����.
 Parameters:
 selector (string|HTMLCollection|Array<HTMLElement>) �C �ַ�����ʽ�μ� KISSY selector
 eventType (string) �C ����һ�������¼����Ƶ��ַ���, ����¼����Կո�ֿ�
 filter (string) �C �ɲμ� dom.filter() �� filter ����
 fn (function(eventObject)) �C ���¼�����ʱ�Ļص�����
 scope (object) �C �ص������� this ֵ. �����ָ��Ĭ��Ϊ���¼��ĵ�ǰԪ��
 */
KISSY.Event.delegate = function () {
}

/**
 * void detach ( selector [ , eventType , fn , scope ] )
 �ӷ���ƥ��� dom �ڵ�����ȥ��Ӧ�¼����¼�������
 Parameters:
 selector (string|HTMLCollection|Array<HTMLElement>) �C �ַ�����ʽ�μ� KISSY selector
 eventType (string) �C ����һ�������¼����Ƶ��ַ���, ����¼����Կո�ֿ��� Ҳ���԰����¼����飬���� ��click.one�� , ��.two�� ��
 fn (function(eventObject)) �C ���¼�ʱ�Ļص�����
 scope (object) �C �󶨵��¼��������Ķ�Ӧ this ֵ
 */
KISSY.Event.detach = function () {
}

/**
 * ��detachһ��һ����
 */
KISSY.Event.remove = function () {
}

/**
 * Boolean fire ( selector , eventType [ , domEvent ] )
 ִ�з���ƥ��� dom �ڵ����Ӧ�¼����¼�����������ð�ݣ���Ĭ����Ϊ.
 Parameters:
 selector (string|HTMLCollection|Array<HTMLElement>) �C �ַ�����ʽ�μ� KISSY selector
 eventType (string) �C ����һ�������¼����Ƶ��ַ���, ����¼����Կո�ֿ�
 domEvent (object) �C ģ��ԭ���¼���һЩ����ֵ��Ϣ
 Returns:
 �������һ���¼����������� false , �򷵻� false, ���򷵻����һ���¼��������ķ���ֵ
 */
KISSY.Event.fire = function () {
}

/**
 * ����Ч������
 Anim (elem, props[, duration, easing, completeFn])
 �õ�����ĳ�� dom �ڵ�Ķ���ʵ��
 Parameters:
 elem (String|HTMLElement|KISSY.Node|window) �C ���ö�����Ԫ�ؽڵ�򴰿ڣ�����ʱ��֧�� scrollTop/Left��.
 props (Object) �C
 ���������� dom ��ʽֵ, ����

 {
     width:"100px",
     height:"100px"
 }
 ��ʾ�ڵ㽫�ӵ�ǰ��߾�������ƽ���仯���� 100px ��� 100px.

 Ҳ�������� scrollLeft ���� scrollTop, ��ʱ��ֱ�Ӷ�Ԫ�صĹ������Բ�������.
 duration (Number) �C Ĭ��Ϊ 1 , ��������ʱ��, ����Ϊ��Ԫ.
 easing (String) �C Ĭ��Ϊ ��easeNone�� , ����ƽ������, ��ȡֵ ��easeNone��,��easeIn��,��easeOut��,��easeBoth��,��easeInStrong��, ��easeOutStrong��,��easeBothStrong��,��elasticIn��,��elasticOut��, ��elasticBoth��,��backIn��,��backOut��,��backBoth��, ��bounceIn��,��bounceOut��,��bounceBoth��. Ч��Ԥ��, ���Բο� easing ���ӻ� .
 completeFn (function) �C ���������һ֡��Ļص�����.

 @return {Anim}
 */
KISSY.Anim = function () {
    this.isRuning = 1;
    this.isPaused = 1;
    this.run = 1;
    this.stop = 1;
    this.pause = 1;
    this.resume = 1;
    return Anim;
}

/**
 * node ���� dom , event , anim ģ������й���, �Ƽ����� Node ģ��, ��ֻ��Ҫ�� KISSY.all ���� jquery �е� $ �Ϳ�����, ��ʽ�������ϲ���ģ�
 * ����ѡ�����ַ����õ��ڵ��б�
 Parameters:
 selector (string) �C ѡ�����ַ���
 context (HTMLElement|Document|NodeList) �C
 ѡ����������,

 ��ʽ���� dom.query() �������� NodeList ֧��.

 Return type:
 NodeList

 NodeList all ( element )
 Parameters:    element (HTMLElement) �C ��װ�� NodeList ���͵�ԭ�� dom �ڵ�
 Return type:    NodeList
 NodeList all ( elementArray )
 Parameters:    elementArray (Array<HTMLElement>|HTMLCollection) �C ��װ�� NodeList ���͵�ԭ�� dom �ڵ㼯��
 Return type:    NodeList
 NodeList all ( nodeList )
 Parameters:    nodeList (NodeList) �C ��¡��һ���µ� NodeList ����
 Return type:    NodeList

 @return {NodeList}
 */
KISSY.all = function () {
    function NodeList() {
        /**
         * ���Բο�anim��dom��event�ӿ����api�� ����api�϶࣬����ֱ�Ӳο�kissy�ٷ��ĵ���nodeģ��
         */
        this.c_removeData = function () {
        };

        /**
         * ���Բο�anim��dom��event�ӿ����api�� ����api�϶࣬����ֱ�Ӳο�kissy�ٷ��ĵ���nodeģ��
         */
        this.c_hasData = function () {
        };

        /**
         * ���Բο�anim��dom��event�ӿ����api�� ����api�϶࣬����ֱ�Ӳο�kissy�ٷ��ĵ���nodeģ��
         */
        this.c_data = function () {
        };
        /**
         * ���Բο�anim��dom��event�ӿ����api�� ����api�϶࣬����ֱ�Ӳο�kissy�ٷ��ĵ���nodeģ��
         */
        this.c_hasAttr = function () {
        };

        /**
         * ���Բο�anim��dom��event�ӿ����api�� ����api�϶࣬����ֱ�Ӳο�kissy�ٷ��ĵ���nodeģ��
         */
        this.c_removeAttr = function () {
        };

        /**
         * ���Բο�anim��dom��event�ӿ����api�� ����api�϶࣬����ֱ�Ӳο�kissy�ٷ��ĵ���nodeģ��
         */
        this.c_attr = function () {
        };

        /**
         *  ��KISSY.allһ��
         */
        this.all = function () {
        };

        /**
         * ���Բο�anim��dom��event�ӿ����api�� ����api�϶࣬����ֱ�Ӳο�kissy�ٷ��ĵ���nodeģ��
         */
        this.fire = function () {
        };

        /**
         * ���Բο�anim��dom��event�ӿ����api�� ����api�϶࣬����ֱ�Ӳο�kissy�ٷ��ĵ���nodeģ��
         */
        this.c_detach = function () {
        };

        /**
         * ���Բο�anim��dom��event�ӿ����api�� ����api�϶࣬����ֱ�Ӳο�kissy�ٷ��ĵ���nodeģ��
         */
        this.c_delegate = function () {
        };

        /**
         * ���Բο�anim��dom��event�ӿ����api�� ����api�϶࣬����ֱ�Ӳο�kissy�ٷ��ĵ���nodeģ��
         */
        this.c_on = function () {
        };

        /**
         * ���Բο�anim��dom��event�ӿ����api�� ����api�϶࣬����ֱ�Ӳο�kissy�ٷ��ĵ���nodeģ��
         */
        this.outerHeight = function () {
        };

        /**
         * ���Բο�anim��dom��event�ӿ����api�� ����api�϶࣬����ֱ�Ӳο�kissy�ٷ��ĵ���nodeģ��
         */
        this.outerWidth = function () {
        };

        /**
         * ���Բο�anim��dom��event�ӿ����api�� ����api�϶࣬����ֱ�Ӳο�kissy�ٷ��ĵ���nodeģ��
         */
        this.innerHeight = function () {
        };

        /**
         * ���Բο�anim��dom��event�ӿ����api�� ����api�϶࣬����ֱ�Ӳο�kissy�ٷ��ĵ���nodeģ��
         */
        this.innerWidth = function () {
        };

        /**
         * ���Բο�anim��dom��event�ӿ����api�� ����api�϶࣬����ֱ�Ӳο�kissy�ٷ��ĵ���nodeģ��
         */
        this.contains = function () {
        };

        /**
         * ���Բο�anim��dom��event�ӿ����api�� ����api�϶࣬����ֱ�Ӳο�kissy�ٷ��ĵ���nodeģ��
         */
        this.remove = function () {
        };

        /**
         * ���Բο�anim��dom��event�ӿ����api�� ����api�϶࣬����ֱ�Ӳο�kissy�ٷ��ĵ���nodeģ��
         */
        this.contains = function () {
        };

        /**
         * ���Բο�anim��dom��event�ӿ����api�� ����api�϶࣬����ֱ�Ӳο�kissy�ٷ��ĵ���nodeģ��
         */
        this.c_children = function () {
        };

        /**
         * ���Բο�anim��dom��event�ӿ����api�� ����api�϶࣬����ֱ�Ӳο�kissy�ٷ��ĵ���nodeģ��
         */
        this.c_siblings = function () {
        };

        /**
         * ���Բο�anim��dom��event�ӿ����api�� ����api�϶࣬����ֱ�Ӳο�kissy�ٷ��ĵ���nodeģ��
         */
        this.c_last = function () {
        };

        /**
         * ���Բο�anim��dom��event�ӿ����api�� ����api�϶࣬����ֱ�Ӳο�kissy�ٷ��ĵ���nodeģ��
         */
        this.c_first = function () {
        };

        /**
         * ���Բο�anim��dom��event�ӿ����api�� ����api�϶࣬����ֱ�Ӳο�kissy�ٷ��ĵ���nodeģ��
         */
        this.c_prev = function () {
        };

        /**
         * ���Բο�anim��dom��event�ӿ����api�� ����api�϶࣬����ֱ�Ӳο�kissy�ٷ��ĵ���nodeģ��
         */
        this.c_next = function () {
        };

        /**
         * ���Բο�anim��dom��event�ӿ����api�� ����api�϶࣬����ֱ�Ӳο�kissy�ٷ��ĵ���nodeģ��
         */
        this.scrollIntoView = function () {
        };

        /**
         * ���Բο�anim��dom��event�ӿ����api�� ����api�϶࣬����ֱ�Ӳο�kissy�ٷ��ĵ���nodeģ��
         */
        this.offset = function () {
        };

        /**
         * ���Բο�anim��dom��event�ӿ����api�� ����api�϶࣬����ֱ�Ӳο�kissy�ٷ��ĵ���nodeģ��
         */
        this.toggle = function () {
        };

        /**
         * ���Բο�anim��dom��event�ӿ����api�� ����api�϶࣬����ֱ�Ӳο�kissy�ٷ��ĵ���nodeģ��
         */
        this.text = function () {
        };

        /**
         * ���Բο�anim��dom��event�ӿ����api�� ����api�϶࣬����ֱ�Ӳο�kissy�ٷ��ĵ���nodeģ��
         */
        this.val = function () {
        };

        /**
         * ���Բο�anim��dom��event�ӿ����api�� ����api�϶࣬����ֱ�Ӳο�kissy�ٷ��ĵ���nodeģ��
         */
        this.toggleClass = function () {
        };

        /**
         * ���Բο�anim��dom��event�ӿ����api�� ����api�϶࣬����ֱ�Ӳο�kissy�ٷ��ĵ���nodeģ��
         */
        this.replaceClass = function () {
        };

        /**
         * ���Բο�anim��dom��event�ӿ����api�� ����api�϶࣬����ֱ�Ӳο�kissy�ٷ��ĵ���nodeģ��
         */
        this.removeClass = function () {
        };

        /**
         * ���Բο�anim��dom��event�ӿ����api�� ����api�϶࣬����ֱ�Ӳο�kissy�ٷ��ĵ���nodeģ��
         */
        this.c_addClass = function () {
        };
        /**
         * ���Բο�anim��dom��event�ӿ����api�� ����api�϶࣬����ֱ�Ӳο�kissy�ٷ��ĵ���nodeģ��
         */
        this.hasClass = function () {
        };

        /**
         * ���Բο�anim��dom��event�ӿ����api�� ����api�϶࣬����ֱ�Ӳο�kissy�ٷ��ĵ���nodeģ��
         */
        this.parent = function () {
        };

        /**
         * ���Բο�anim��dom��event�ӿ����api�� ����api�϶࣬����ֱ�Ӳο�kissy�ٷ��ĵ���nodeģ��
         */
        this.replaceWith = function () {
        };

        /**
         * ���Բο�anim��dom��event�ӿ����api�� ����api�϶࣬����ֱ�Ӳο�kissy�ٷ��ĵ���nodeģ��
         */
        this.empty = function () {
        };

        /**
         * ���Բο�anim��dom��event�ӿ����api�� ����api�϶࣬����ֱ�Ӳο�kissy�ٷ��ĵ���nodeģ��
         */
        this.clone = function () {
        };

        /**
         * ���Բο�anim��dom��event�ӿ����api�� ����api�϶࣬����ֱ�Ӳο�kissy�ٷ��ĵ���nodeģ��
         */
        this.test = function () {
        };

        /**
         * ���Բο�anim��dom��event�ӿ����api�� ����api�϶࣬����ֱ�Ӳο�kissy�ٷ��ĵ���nodeģ��
         */
        this.c_filter = function () {
        };

        /**
         * ���Բο�anim��dom��event�ӿ����api�� ����api�϶࣬����ֱ�Ӳο�kissy�ٷ��ĵ���nodeģ��
         */
        this.slideToggle = function () {
        };

        /**
         * ���Բο�anim��dom��event�ӿ����api�� ����api�϶࣬����ֱ�Ӳο�kissy�ٷ��ĵ���nodeģ��
         */
        this.slideUp = function () {
        };

        /**
         * ���Բο�anim��dom��event�ӿ����api�� ����api�϶࣬����ֱ�Ӳο�kissy�ٷ��ĵ���nodeģ��
         */
        this.slideDown = function () {
        };

        /**
         * ���Բο�anim��dom��event�ӿ����api�� ����api�϶࣬����ֱ�Ӳο�kissy�ٷ��ĵ���nodeģ��
         */
        this.fadeToggle = function () {
        };

        /**
         * ���Բο�anim��dom��event�ӿ����api�� ����api�϶࣬����ֱ�Ӳο�kissy�ٷ��ĵ���nodeģ��
         */
        this.fadeOut = function () {
        };

        /**
         * ���Բο�anim��dom��event�ӿ����api�� ����api�϶࣬����ֱ�Ӳο�kissy�ٷ��ĵ���nodeģ��
         */
        this.fadeIn = function () {
        };

        /**
         * ���Բο�anim��dom��event�ӿ����api�� ����api�϶࣬����ֱ�Ӳο�kissy�ٷ��ĵ���nodeģ��
         */
        this.toggle = function () {
        };

        /**
         * ���Բο�anim��dom��event�ӿ����api�� ����api�϶࣬����ֱ�Ӳο�kissy�ٷ��ĵ���nodeģ��
         */
        this.hide = function () {
        };

        /**
         * ���Բο�anim��dom��event�ӿ����api�� ����api�϶࣬����ֱ�Ӳο�kissy�ٷ��ĵ���nodeģ��
         */
        this.show = function () {
        };

        /**
         * ���Բο�anim��dom��event�ӿ����api�� ����api�϶࣬����ֱ�Ӳο�kissy�ٷ��ĵ���nodeģ��
         */
        this.isPaused = function () {
        };

        /**
         * ���Բο�anim��dom��event�ӿ����api�� ����api�϶࣬����ֱ�Ӳο�kissy�ٷ��ĵ���nodeģ��
         */
        this.isRunning = function () {
        };


        /**
         * ���Բο�anim��dom��event�ӿ����api�� ����api�϶࣬����ֱ�Ӳο�kissy�ٷ��ĵ���nodeģ��
         */
        this.resume = function () {
        };


        /**
         * ���Բο�anim��dom��event�ӿ����api�� ����api�϶࣬����ֱ�Ӳο�kissy�ٷ��ĵ���nodeģ��
         */
        this.pause = function () {
        };

        /**
         * ���Բο�anim��dom��event�ӿ����api�� ����api�϶࣬����ֱ�Ӳο�kissy�ٷ��ĵ���nodeģ��
         */
        this.run = function () {
        };

        /**
         * ���Բο�anim��dom��event�ӿ����api�� ����api�϶࣬����ֱ�Ӳο�kissy�ٷ��ĵ���nodeģ��
         */
        this.stop = function () {
        };

        /**
         * ���Բο�anim��dom��event�ӿ����api�� ����api�϶࣬����ֱ�Ӳο�kissy�ٷ��ĵ���nodeģ��
         */
        this.c_animate = function () {
        };

        /**
         * ���Բο�anim��dom��event�ӿ����api�� ����api�϶࣬����ֱ�Ӳο�kissy�ٷ��ĵ���nodeģ��
         */
        this.c_insertAfter = function () {
        };
        /**
         * ���Բο�anim��dom��event�ӿ����api�� ����api�϶࣬����ֱ�Ӳο�kissy�ٷ��ĵ���nodeģ��
         */
        this.c_insertBefore = function () {
        };
        /**
         * ���Բο�anim��dom��event�ӿ����api�� ����api�϶࣬����ֱ�Ӳο�kissy�ٷ��ĵ���nodeģ��
         */
        this.c_prependTo = function () {
        };
        /**
         * ���Բο�anim��dom��event�ӿ����api�� ����api�϶࣬����ֱ�Ӳο�kissy�ٷ��ĵ���nodeģ��
         */
        this.c_appendTo = function () {
        };
        /**
         * ���Բο�anim��dom��event�ӿ����api�� ����api�϶࣬����ֱ�Ӳο�kissy�ٷ��ĵ���nodeģ��
         */
        this.width = function () {
        };
        /**
         * ���Բο�anim��dom��event�ӿ����api�� ����api�϶࣬����ֱ�Ӳο�kissy�ٷ��ĵ���nodeģ��
         */
        this.height = function () {
        };
        /**
         * ���Բο�anim��dom��event�ӿ����api�� ����api�϶࣬����ֱ�Ӳο�kissy�ٷ��ĵ���nodeģ��
         */
        this.scrollLeft = function () {
        };
        /**
         * ���Բο�anim��dom��event�ӿ����api�� ����api�϶࣬����ֱ�Ӳο�kissy�ٷ��ĵ���nodeģ��
         */
        this.scrollTop = function () {
        };
        /**
         * ���Բο�anim��dom��event�ӿ����api�� ����api�϶࣬����ֱ�Ӳο�kissy�ٷ��ĵ���nodeģ��
         */
        this.slice = function () {
        };
        /**
         * ���Բο�anim��dom��event�ӿ����api�� ����api�϶࣬����ֱ�Ӳο�kissy�ٷ��ĵ���nodeģ��
         */
        this.item = function () {
        };
        /**
         * ���Բο�anim��dom��event�ӿ����api�� ����api�϶࣬����ֱ�Ӳο�kissy�ٷ��ĵ���nodeģ��
         */
        this.c_add = function () {
        };
        /**
         * ���Բο�anim��dom��event�ӿ����api�� ����api�϶࣬����ֱ�Ӳο�kissy�ٷ��ĵ���nodeģ��
         */
        this.equals = function () {
        };
        /**
         * ���Բο�anim��dom��event�ӿ����api�� ����api�϶࣬����ֱ�Ӳο�kissy�ٷ��ĵ���nodeģ��
         */
        this.end = function () {
        };
        /**
         * ���Բο�anim��dom��event�ӿ����api�� ����api�϶࣬����ֱ�Ӳο�kissy�ٷ��ĵ���nodeģ��
         */
        this.c_getDOMNodes = function () {
        };

    }

    return NodeList
}

/**
 * JSON ģ�飬�������ַ���������json����ͽ�����ת�����ַ���
 * @constructor
 */
KISSY.JSON = function () {
}

/**
 * parse
 Object parse ( text)
 ���ַ�������Ϊjson���󣬽�����
 Parameters:
 text (String) �C �ַ���
 Returns:
 {Object} - ����֮�󷵻ش������ݵ�һ�������ʾ

 */
KISSY.JSON.parse = function (text) {
}

/**
 * stringify
 String stringify ( value[, replacer, space] )
 ��json�����������ת��Ϊ�ַ��������л���
 Parameters:
 value (Object|array) �C Ҫ���л��Ķ���`


 returns:    {String} - ����JSON�ַ���
 */
KISSY.JSON.stringify = function (value) {

}



