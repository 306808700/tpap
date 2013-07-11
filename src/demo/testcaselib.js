//�ж�el�Ƿ��Ǿ���taming��
function isTameEl(el) {
    return el.setAttribute.toString().indexOf('setAttribute') === -1;
}

describe('���������Բ���', function () {

    it("�����һЩ��������", function () {
        var arr = [1, 2, 3, 9, 8, 7, 6, 5, 4];
        var arr2 = [10, 11];

        expect('arr.length == 9', arr.length == 9, 1);
        expect('�ϲ����� ���� concat ��������һ���µĺϲ���ĺ��� : ', arr.concat(arr2).length == 11 && arr.length == 9, 2);
        expect('ת��Ϊ�ַ��� ������ join �������е�Ԫ���Էָ����ϲ�Ϊһ���ַ��� ', arr2.join(":") === "10:11", 3);
        expect('pop ����', arr.pop() && arr.length == 8, 4);

        var arr = [1, 2, 3];
        arr.forEach(function (i) {
            arr.push(i)
        })
        expect('forEach', arr[3] === 1 && arr[4] === 2 && arr[5] === 3, 5);

        var arr = [1, 2, 3];
        arr.reverse();
        expect('revserse ��ת����Ԫ��', arr.length == 3 && arr[0] === 3 && arr[1] === 2 && arr[2] === 1, 6);
        expect('shift ��������ĵ�һ��Ԫ��', arr.shift() == 3 && arr.length == 2 && arr[0] === 2 && arr[1] === 1, 7);

        var arr = [1, 2, 3];
        arr.unshift(4);
        expect('unshift �����Ԫ�ص�����ͷ��', arr.length == 4 && arr[0] === 4 && arr[1] === 1, 8);

        var arr = [1, 2, 3, 9, 8, 7, 6, 5, 4];
        var arrsub = arr.slice(3, 6);
        var arract = [9, 8, 7];
        expect('slice ��������ָ������Ϊ3��5���ַ���������0��ʼ', arrsub.length == 3 && arract.toString() == arrsub.toString(), 9);

        var arr = [1, 2, 3, 9, 8, 7, 6, 5, 4];
        var arrreplace = arr.splice(2, 4, 1, 1, 1, 1);
        var arr1 = [3, 9, 8, 7]
        var arrexp = [1, 2, 1, 1, 1, 1, 6, 5, 4];
        expect('splice ָ������2�����4��Ԫ�ر�1��1,1,1���', arr.toString() == arrexp.toString() && arrreplace.toString() == arr1.toString(), 10);

        var arr = [1, 2, 3, 9, 8, 7, 6, 5, 4];
        arr.sort();
        var arrupexp = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        expect('sort ��������', arr.toString() == arrupexp.toString(), 11)
        arr.sort(function (a, b) {
            return b - a;
        });
        var arrdownexp = [9, 8, 7, 6, 5, 4, 3, 2, 1];
        expect('sort ��������', arr.toString() == arrdownexp.toString(), 12);


        var arr = [1, 2, 3, 9, 8, 7, 6, 5, 4];
        var dex = arr.indexOf(4)
        expect('index �ҵ�ֵΪ����������', dex == 8, 13);

        var arr = [4, 6, 7, 8, 2, 66, 34, 7, 534, 34, 6, 8];
        var lastdex = arr.lastIndexOf(4);
        expect('lastIndexOf �ҵ���ֵ�����ֵ�����λ��', lastdex == 0, 14);


        var arr = [1, 2, 3, 9, 8, 7, 6, 5, 4];

        var flag1 = arr.every(function (a) {
            if (a === 9) {
                return false;
            }
        });
        expect('every ֻҪ��һ��Ԫ�ص���function����false��every����false', flag1 == false, 15);


        var flag2 = arr.every(function (a) {
            if (a !== 100) {
                return true;
            }
        });
        expect('every ÿ��Ԫ�ص���function����true��every����true', flag2 == true, 16);

        var arr = [1, 2, 3, 9, 8, 7, 6, 5, 4];
        var flag1 = arr.some(function (a) {
            if (a === 9) {
                return true;
            }
        });
        expect('some ֻҪ��һ��Ԫ�ص���function����ture��some����true', flag1 == true, 17);


        var flag2 = arr.some(function (a) {
            if (a === 100) {
                return false;
            }
        });
        expect('some ����Ԫ�ص���funtion����false��some����flase', flag2 == false, 18);

        var arr = [1, 2, 3, 9, 8, 7, 6, 5, 4];
        var arrfilter = arr.filter(function (a) {
            if (a !== 1) {
                return true;
            }
        });
        expect('filter ����function����ֵΪtrue��Ԫ��', arrfilter.length == 8 && arrfilter[0] === 2, 19);

        var arr = [1, 2, 3];
        var empty = [];
        arr.map(function (item, index) {
            empty[index] = item;
        });
        expect('arr map', empty[0] === 1 && arr[2] === 3, 20);
    });

    it("all ������أ���ʽ�÷�", function () {
        var S = KISSY;

        var obj = S.all('.dom-father');
        expect('KISSY.all ���һ������', typeof obj == "object", 1);

        expect('KISSY.all length ��ȡ���ȣ�ע�⣬�����Ǻ���', S.all('.dom-father').len() ===1,1)

        expect('KISSY.all equals �Ƚϵ�ǰ�ڵ��б�� others ����Ľڵ��б��Ƿ���ȫ��ͬ', S.all('a').equals(S.all('a')), 1);

        expect('KISSY.all hasClass �Ƿ����ָ��class', S.all('.dom-father').hasClass('.dom-father'), 1);

        expect('KISSY.all c_addClass ���class', S.all('.dom-father').c_addClass('bbb').hasClass('bbb'), 1);

        expect('KISSY.all removeClass �Ƴ�class', !S.all('.dom-father').c_addClass('bbb').removeClass('bbb').hasClass('bbb'), 1);

        expect('KISSY.all toggleClass �л�class', !S.all('.dom-father').c_addClass('bbb').toggleClass('bbb').hasClass('bbb'), 1);

        expect('KISSY.all replaceClass �л�class', S.all('.dom-father').c_addClass('bbb').replaceClass('bbb', 'aaa').hasClass('aaa') && !S.all('.dom-father').hasClass('bbb'), 1);

        expect('KISSY.all add�������ӵ�Ԫ�ر�����caja�����ڵ�Ԫ��', S.all('.row').c_getDOMNodes().length === 0, 1);



        expect('KISSY.all slice ��ȡ������ǰ�ڵ��б�ѡ����Χ��ԭ���ڵ���� NodeList ����',
            S.all('.dom-child1').c_add('.dom-child2').slice(1, 2).equals(S.all('.dom-child2')), 1);


        expect('KISSY.all end �õ���һ�� NodeList.prototype.one() / NodeList.prototype.all() ����ǰ�� NodeList ����',
            S.all('.dom-child1').all('.dom-child2').end().equals(S.all('.dom-child1')), 1);

        expect('KISSY.all add��item ���ذ����ϲ�ѡ�����ַ���ƥ���Ԫ�غ͵�ǰ�ڵ��б�Ԫ�ص��� NodeList ���� item��ȡ��index��NodeList����', S.all('.dom-child1').c_add('.dom-child2').item(1).hasClass('dom-child2'), 1);

        expect('KISSY.all scrollTop ', typeof S.all('.dom-child1').scrollTop() === "number", 1);
        expect('KISSY.all scrollLeft' + S.all('.dom-child1').scrollLeft(), typeof S.all('.dom-child1').scrollLeft() === "number", 1);

        expect('KISSY.all height ' + S.all('.dom-father').height(), typeof S.all('.dom-father').height() === "number", 1);
        expect('KISSY.all width' + S.all('.dom-father').width(), typeof S.all('.dom-father').width() === "number", 1);

        expect('KISSY.all c_appendTo/parent/c_children/item ����ǰ�ڵ��б��е�ÿ��Ԫ�ز��뵽�����б��ÿ��Ԫ�ص����һ���ӽڵ����.',
            S.all('.dom-child1').c_appendTo(S.all('.dom-father')).parent().c_children().item(0).hasClass("dom-child2"), 1);

        expect('KISSY.all c_prependTo ����ǰ�ڵ��б��е�ÿ��Ԫ�ز��뵽�����б��ÿ��Ԫ�صĿ�ͷ.', S.all('.dom-child1').c_prependTo(S.all('.dom-father')).parent().c_children().item(0).hasClass("dom-child1"), 1);

//        S.all('.dom-child1').c_insertBefore(S.all('.dom-child2'));
//        expect('KISSY.all c_insertBefore ����ǰ�ڵ��б��е�ÿ��Ԫ�ز��뵽�����б��ÿ��Ԫ�صĿ�ͷ.', S.all('.dom-father').c_children().item(0).hasClass('dom-child1'), 1);

        S.all('.dom-father').show(5).hide(5).toggle(5).fadeIn().fadeOut().fadeToggle().slideDown().slideUp().slideToggle();
        expect('KISSY.all show .', true, 1);
        expect('KISSY.all hide .', true, 1);
        expect('KISSY.all toggle .', true, 1);

        expect('KISSY.all c_filter ��ȡ����ѡ�����Լ����˲���������Ԫ��.', S.all('.dom-father').c_children().c_filter('.dom-child2').equals(S.all('.dom-child2')), 1);


        expect('KISSY.all test �жϸ���ѡ������ȡ������Ԫ���Ƿ񶼷��Ϲ�������.', S.all('.dom-father').c_children().test('div'), 1);

        S.all('.dom-child1').clone().c_insertBefore(S.all('.dom-child2'));
        expect('KISSY.all clone ��ȡ����ѡ�����ĵ�һ��Ԫ�صĿ�¡Ԫ��.', S.all('.dom-father').c_children().item(1).hasClass('dom-child1'), 1);

        S.all('.dom-child1').item(0).remove();
        expect('KISSY.all remove ������ѡ����������Ԫ�ش� DOM ���Ƴ�.', S.all('.dom-father').c_children().item(1).hasClass('dom-child2'), 1);

        var div = document.createElement('div');
        div.innerHTML = "<a class='a'>a</a><a class='b'>b</a>";
        div.className = "dom-child3";
        S.all(div).c_appendTo(S.all('.dom-father'));



        expect('KISSY.all empty ����ڵ����������ڵ��Լ�����ڵ��ϵ��¼�', S.all('.dom-father').c_children().item(2).hasClass('dom-child3'), 1);
        S.all('.dom-father').c_children().item(2).empty();
        expect('KISSY.all empty ����ڵ����������ڵ��Լ�����ڵ��ϵ��¼�', document.getElementsByClassName('dom-child3')[0].innerHTML === '', 1);
        S.all('.dom-child3').remove();

        div = document.createElement("a");
        div.className = 'temp';
        expect('KISSY.all replaceWith �� node �ڵ㣨���飩�滻Ϊ�µĽڵ㣨���飩 newNode',
            S.all('.dom-child1').replaceWith(div) && S.all('.temp').hasClass('temp'), 1);

        div = document.createElement("div");
        div.className = 'dom-child1';
        document.getElementsByClassName('dom-father')[0].appendChild(div);

        S.all('.temp').remove();



        expect('KISSY.all offset ��ȡ����ѡ�����ĵ�һ��Ԫ�����ҳ���ĵ����Ͻǵ�ƫ��ֵ', typeof S.all('.dom-father').offset().top, 1);
        expect('KISSY.all offset ��ȡ����ѡ�����ĵ�һ��Ԫ�����ҳ���ĵ����Ͻǵ�ƫ��ֵ', typeof S.all('.dom-father').offset().left, 1);

        expect('KISSY.all c_next ��ȡ����ѡ�����ĵ�һ��Ԫ�ص���һ��ͬ���ڵ�', S.all('.dom-child2').c_next().equals(S.all('.dom-child1')), 1)
        expect('KISSY.all c_prev ��ȡ����ѡ�����ĵ�һ��Ԫ�ص���һ��ͬ���ڵ�', S.all('.dom-child1 ').c_prev().equals(S.all('.dom-child2')), 1)

        expect('KISSY.all c_first ��ȡ����ѡ�����ĵ�һ�����ӽڵ�', S.all('.dom-father').c_first().equals(S.all('.dom-child2')), 1)

        expect('KISSY.all c_last ��ȡ����ѡ���������һ�����ӽڵ�', S.all('.dom-father').c_last().equals(S.all('.dom-child1')), 1)

        expect('KISSY.all c_siblings ��ȡ����ѡ�����ĵ�һ��Ԫ�ص���Ӧͬ���ڵ�.', S.all('.dom-father').c_children().item(0).c_add(S.all('.dom-father').c_children().item(0).c_siblings()).equals(S.all('.dom-father').c_children()), 1)

        expect('KISSY.all contains �ж�ĳһ����(container)�Ƿ������һ(contained)�ڵ�', S.all('.dom-father').contains(S.all('.dom-child1')), 1)

        expect('KISSY.all innerWidth ��ȡ����ѡ�����ĵ�һ��Ԫ�صĿ��ֵ, ע��: ��ֵ���� padding .', typeof S.all('.dom-father').innerWidth() === 'number', 1)
        expect('KISSY.all innerHeight ��ȡ����ѡ�����ĵ�һ��Ԫ�صĸ߶�ֵ, ע��: ��ֵ���� padding . .', typeof S.all('.dom-father').innerHeight() === 'number', 1)
        expect('KISSY.all outerWidth ��ȡ����ѡ�����ĵ�һ��Ԫ�صĿ��ֵ, ע��: ��ֵ���˰���Ԫ�ر����Ⱥ� padding ��, ������ border��margin .', typeof S.all('.dom-father').outerWidth() === 'number', 1)
        expect('KISSY.all outerHeight ��ȡ����ѡ�����ĵ�һ��Ԫ�صĸ߶�ֵ, ע��: ��ֵ���˰���Ԫ�ر����Ⱥ� padding ��, ������ border��margin .', typeof S.all('.dom-father').outerHeight() === 'number', 1)



        var an = S.all('.dom-child2').c_animate({"top": 100});
        an.pause();
        expect('KISSY.all animate/isPaused ', an.isPaused(), 1);
        an.resume();
        expect('KISSY.all animate/isPaused ', an.isRunning(), 1);
        an.stop();
        expect('KISSY.all animate/stop ', true, 1);


        /*S.all('.dom-child1').c_on('click',function (e) {
            e.target.innerHTML = "fffffff"
        });
        S.all('.dom-child1').fire('click');

        expect('KISSY.all fire js�ֶ������¼�', S.all('.dom-child1').c_getDOMNodes()[0].innerHTML === "fffffff", 1);

        expect('KISSY.all scrollIntoView Ŀ��ok��', true,1);*/

        S.all('.inputcls').c_on('click', function(e){
           expect("kissy.al on fire ���Ի�ȡ��ȡ��ֵ e.target.value", e.target.value === 'landao');
           expect("kissy.al on fire ���Ի�ȡ��ȡ��ֵ this.value", this.value === 'landao');
           expect("kissy.al on fire ���Ի�ȡ��ȡ��ֵ S.all(this).val()", S.all(this).val() === 'landao');

        }).fire('click');

    });

    it('S.all ������ʽд���İ�ȫ��У��', function () {

        var S = KISSY;
        expect('KISSY.all c_getDOMNodes ���ص�elements���Ѿ���taming������'+S.all('.dom-child1').c_getDOMNodes()[0].tagName, isTameEl(S.all('.dom-child1').c_getDOMNodes()[0]), 1);
        expect('KISSY.all add�������ӵ�Ԫ�ر�����caja�����ڵ�Ԫ��', S.all('.dom-child1').c_add('.row').c_getDOMNodes().length === 1, 1);
        expect('KISSY.all c_prependTo/c_appendTo �������ӵ�Ԫ�ر�����caja�����ڵ�Ԫ��', S.all('.dom-child1').c_add('.row').c_getDOMNodes().length === 1, 1);


        var el = S.all('.dom-child1').parent(5);

        expect('KISSY.all parent�����Ի�ȡ�������������Ԫ��', el.c_getDOMNodes()[0].tagName === undefined );

        setTimeout(function(){
            S.all('.rep-father').scrollIntoView();
        },3000);

    });

});

describe('��������������ַ�������', function () {

    it('��������Ժͺ�������', function () {

        var arr = {a: 1, b: 2};
        expect('hasOwnProperty ��麬��ĳ������', arr.hasOwnProperty("b") == true, 1);
        expect('hasOwnProperty ��鲻����ĳ������', arr.hasOwnProperty("c") == false, 2)

        function sustract(a, b) {
            var result = a - b;
            return result;
        }

        var res = sustract(7, 5);
        expect('function ���������͵��ò���', res == 2, 3);

        function callapplytest(c) {
            var result = this.a + this.b + c;
            return result
        }

        var rescall = callapplytest.call({a: 3, b: 4}, 5);
        expect('call ����ֱ�Ӵ��ݲ����б����5', rescall == 12, 2);

        var resapply = callapplytest.apply({a: 3, b: 4}, [5]);
        expect('apply ��Ҫ��װ��������ܴ���', resapply == 12, 3)
    });

    it('������ַ�������', function () {
        var zifu = String.fromCharCode(65);
        expect('String.fromCharCode unicodeת������Ӧ��ֵ', zifu == "A", 1);

        var str = "abcde";
        var zifu = str.charAt(2);
        expect('charAt �õ��ַ�����ָ������ֵ���ַ�', zifu == "c", 2);
        var zifucode = str.charCodeAt(2);
        expect('charCodeAt �õ��ַ�����ָ������ֵ���ַ���unicode', zifucode == 99, 3);

        //����ַ������Ӳ�������
        var str = "abc" + "123";
        expect('+ �ַ�������', str == "abc123", 4);

        var str = "ab124ab4ab";
        var flag = str.indexOf("124");
        expect('indexOf �Ӵ����ֵĵ�һ��λ��', flag == 2, 5);

        var flag = str.lastIndexOf("4a");
        expect('lastIndeOf �Ӵ����ֵ����һ�ε�λ��', flag == 7, 6);

        var str = "ABCD";
        expect('toLowerCase ת����Сд', str.toLowerCase() == "abcd", 7);

        var str = "abcd"
        expect('toUpperCase ת���ɴ�д', str.toUpperCase() == "ABCD", 8);

        var str = "1 �� 2 ���� 3";
        var strexp = ["1", "2", "3"];
        expect('match ����ƥ��' + str.match(/\d+/g), str.match(/\d+/g)[0] == strexp[0], 9);
        var s = "TaoBao ���� js";
        expect('search ����ƥ�����ʼλ��', s.search(/t.o/i) == 0, 10);


        var str = "1,2,3,4,5";
        var strexp = ["1", "2", "3", "4", "5"];
        expect('split ���ݲ����ָ��ַ���', str.split(",").toString() == strexp, 11);

        var str = "1::2:3:4:5";
        var strexp1 = ["1", "2", "3", "4", "5"];
        expect('split ��������ָ��ַ���', str.split(/:+/).toString() == strexp1, 12);
        var str = "1::2:3:4:5";
        var strexp2 = ["1", ":", "", ":", "2", ":", "3", ":", "4", ":", "5"];
        expect('split ƥ��ķָ���Ҳ�����ڷ��ؽ����', str.split(/(:)/).toString() == strexp2, 13);

        var x = "   ssd  ";
        expect('trim ��Ч ���� trim ȥ���ַ������ߵĿո�', x.trim() === "ssd", 14);
        expect('trim �ַ���û�� ���� trim ȥ���ַ������ߵĿո�', x === "   ssd  ", 15)

        var x = "abc";
        x = x.replace("a", '');
        expect("replace", x == "bc", 16);

    });

    it('��������ֲ���', function () {
        expect("Number.POSITIVE_INFINITY ���������ʱ��ֵ", 1 / 0 === Number.POSITIVE_INFINITY, 1)
        expect('Number.NEFATIVE_INFINITY ���㸺���ʱ��ֵ', -1 / 0 === Number.NEGATIVE_INFINITY, 2);

        var num = 1234.5678;
        expect('toFixed ȥ��С���������', num.toFixed() == 1235, 3);
        expect('toFixed(2) �������뱣����λ', num.toFixed(2) == 1234.57, 4);
        //���������֪������������
        /* var num = 1.23e+5;
         expect('toFixed(2) û��С���ģ�С���������λ',num.toFixed(2)==123000.00,5);*/
        var num = 1.23e-5
        expect('toFixed(2) С�������ö�λ��ֻ����С�������λ', num.toFixed(2) == 0.00, 6);

        var num = 12345.6789
        expect('toPrecision��1�� ԭλ�������޶���Чλ', num.toPrecision(1) == 10000, 7);
        expect('toPrecision��5�� ԭλ������С����ǰ��λ��', num.toPrecision(5) == 12346, 8);
        expect('toPrecision(10)  ԭλ��С���޶�λ������0', num.toPrecision(10) == 12345.678900, 9)
    });

    it('Math�����ѧ�������', function () {
        expect('Math.E  ��ȡE��������', Math.E == 2.718281828459045, 1);
        expect('Math.log(x) ��ȡx����Ȼ���� Math.LN10 ��ȡ10����Ȼ����', Math.log(10) === Math.LN10, 2);
        expect('Math.LN2 ��ȡ2����Ȼ����', Math.LN2 === Math.log(2), 3);
        expect('Math.LOG2E 2Ϊ��e�Ķ���', Math.LOG2E === 1.4426950408889634, 4);
        expect('Math.LOG10E 10Ϊ��e�Ķ���', Math.LOG10E === 0.4342944819032518, 5);

        expect('Math.PI ', Math.PI == 3.141592653589793, '6')
        expect('Math.SQRT2 ȡ��������2', Math.SQRT2 == 1.4142135623730951, '7')
        expect('Math.abs ����3ȡ����ֵ', Math.abs(3) == 3, 8);
        expect('Math.abs ����ȡ����ֵ', Math.abs(-3) == 3, 9);

        expect('Math.cos ����������', Math.cos(0.5) == 0.8775825618903728, 10);
        expect('Math.cos ��������', Math.cos(-0.5) == 0.8775825618903728, 11);
        expect('Math.sin ����������', Math.sin(0.5) == 0.479425538604203, 12);
        expect('Math.sin ��������', Math.sin(-0.5) == -0.479425538604203, 13);
        expect('Math.tan ����������', Math.tan(0.5) == 0.5463024898437905, 14);
        expect('Math.tan ��������', Math.tan(-0.5) == -0.5463024898437905, 15);
        expect('Math.acos ������', Math.acos(0.5) == 1.0471975511965979, 16);
        expect('Math.asin ������', Math.asin(0.5) == 0.5235987755982989, 17);
        expect('Math.atan ������', Math.atan(0.5) == 0.4636476090008061, 18);

        expect('Math.ceil ���ڻ����ĳ�����������', Math.ceil(0.5) == 1, 19);
        expect('Math.floor С�ڻ����ĳ�����������', Math.floor(0.5) == 0, 20);
        expect('Math.pow(x,y) x��y�η�', Math.pow(2, 3) == 8, 21);
        expect('Math.round ����������ֵ', Math.round(2.3) == 2, 22);
        expect('Math.max ���ֵ', Math.max(2, 4, 3, -9) == 4, 23);
        expect('Math.min ��Сֵ', Math.min(2, 4, 3, -9) == -9, 24);
        expect('Math.random ����һ�������', Math.random() !== Math.random());
    });

    it('Date��ȡʱ��ֵ', function () {
        expect('Date.UTC ��ȡ����ʱ�������1970.1.1�ĺ�����', Date.UTC(1970, 0, 1, 0, 0, 0, 1) == 1);
        expect('date.getFullYear �õ���ǰ��ݵ���λ����ʾ', new Date().getFullYear() == 2013, 2);

        var dateyear = new Date();
        dateyear.setFullYear(2012);
        expect('getYear ��ȡDate��������', dateyear.getFullYear() == 2012, 3);

        var datemonth = new Date();
        datemonth.setMonth(11);
        expect('getMonth ��ȡDate������·�', datemonth.getMonth() == 11, 4);

        var datedate = new Date();
        datedate.setDate(27);
        expect('getDate ��ȡDate���������', datedate.getDate() == 27, 5);

        var datehours = new Date();
        datehours.setHours(13);
        expect('getHours ��ȡDate�����ʱֵ', datehours.getHours() == 13, 6);

        var dateMinutes = new Date();
        dateMinutes.setMinutes(33);
        expect('getMinutes ��ȡDate����ķ�ֵ', dateMinutes.getMinutes() == 33, 7);

        var dateSeconds = new Date();
        dateSeconds.setSeconds(54);
        expect('getSeconds ��ȡDate���������', dateSeconds.getSeconds() == 54, 8);

        var dateMilliseconds = new Date();
        dateMilliseconds.setMilliseconds(398);
        expect('getMilliseconds ��ȡDate����ĺ�����', dateMilliseconds.getMilliseconds() == 398, 9);

        var dateUTCyear = new Date();
        dateUTCyear.setUTCFullYear(2012);
        expect('getUTCFullYear ��ȡDate�����UTC���', dateUTCyear.getUTCFullYear() == 2012, 10);

        var dateUTCmonth = new Date();
        datemonth.setUTCMonth(11)
        expect('getUTCMonth ��ȡDate�����UTC�·�' + dateUTCmonth.getUTCMonth(), typeof dateUTCmonth.getUTCMonth() === "number", 11);

        var dateUTCdate = new Date();
        dateUTCdate.setUTCDate(27);
        expect('getUTCDate ��ȡDate�����UTC����', dateUTCdate.getUTCDate() == 27, 12);

        var dateUTChours = new Date();
        dateUTChours.setUTCHours(13);
        expect('getUTCHours ��ȡDate�����UTCʱֵ', dateUTChours.getUTCHours() == 13, 13);

        var dateUTCMinutes = new Date();
        dateUTCMinutes.setUTCMinutes(33);
        expect('getUTCMinutes ��ȡDate�����UTC��ֵ', dateUTCMinutes.getUTCMinutes() == 33, 14);

        var dateUTCSeconds = new Date();
        dateUTCSeconds.setUTCSeconds(54);
        expect('getUTCSeconds ��ȡDate�����UTC����', dateUTCSeconds.getUTCSeconds() == 54, 15);

        var dateUTCMilliseconds = new Date();
        dateUTCMilliseconds.setUTCMilliseconds(398);
        expect('getUTCMilliseconds ��ȡDate�����UTC������', dateMilliseconds.getUTCMilliseconds() == 398, 16);


    });

    it('RegExp������ʽ����', function () {

        expect('global �鿴�Ƿ�ƥ����ȫ��ģʽ', /\d/g.global == true, 1);
        expect('ignoreCase �鿴�Ƿ�ƥ���˴�Сдģʽ', /\d/i.ignoreCase == true, 2);
        expect('multiline �鿴�Ƿ�ƥ���˶���ģʽ', /\d/m.multiline == true, 3);

        var reg = /ab/g;
        reg.test("aabcde");
        expect('lastIndex ƥ��������ʽ�����һ���ַ���λ��', reg.lastIndex == 3, 4)

        var reg = /(work)\w*/g;
        var result;
        while (result = reg.exec("I am working!")) {
            expect('result[0]  ƥ�䵽��һ���ַ���', result[0] == "working", 5)
            expect('result[1] ƥ�����', result[1] == "work", 6);
            expect('result.lastIndex ��һ�ο�ʼƥ���λ��', reg.lastIndex == 12, 8);
        }

        var reg = /like/i;
        expect('test �ж��ַ����Ƿ�ƥ�䵱ǰģʽfalse', reg.test("working") == false, 9);
        expect('test �ж��ַ����Ƿ�ƥ�䵱ǰģʽtrue', reg.test("Like everything") == true, 10)
    });

    it('ȫ�ֱ���', function () {
        expect('Number ������Ϊ������ʱ����NaN', Number("ab").toString() == NaN.toString(), 1);
        expect('NaN �������κ�����', (NaN == 2) == false, 2);
        expect('NaN �����ڱ���', (NaN == NaN) == false, 3);
        expect('Infinity ����������ظ�ֵ', (1 / 0) == Infinity, 4)
        expect('parseInt ���ַ���ת��Ϊ��������������ĸ', parseInt("123ahhhh") == 123, 5);
        expect('parseFloat ���ַ���ת��Ϊ����������������ĸ', parseFloat("123.98dhhh") == 123.98, 6);
        expect('isNaN �ж�һ���ַ����������Ƿ��Ƿ�NaN����', isNaN("12") == false && isNaN("12dd") == true, 7);
        expect('isFinite �ж�һ���ַ����ǲ��������', isFinite("12") == true && isFinite(NaN) == false, 8);
        expect('encodeURI ��url���б���', encodeURI("http://www.taobao.com/?arg1=1&arg2=hello world") == "http://www.taobao.com/?arg1=1&arg2=hello%20world", 9)
        expect('decodeURI �Ա�����url���н���', decodeURI("http://www.taobao.com/?arg1=1&arg2=hello%20world") == "http://www.taobao.com/?arg1=1&arg2=hello world", 10);
        expect('encodeURIComponent �ַ������utf-8', encodeURIComponent("hello ?") == "hello%20%3F", 11);
        expect('decodeURIComponent �������utf-8���ַ�����', decodeURIComponent("hello%20%3f") == "hello ?", 12);


    });
});

describe('dom��ز���', function () {
    it('document��ط�������', function () {
        var acontent = document.getElementsByTagName("a");
        expect('getElementsByTagName ��ýڵ㼯��', acontent.length == 2 && acontent[0].innerHTML == "test1", 1);

        var elementinst = document.createElement("button");
        expect('createElement �����ڵ�ʵ��', elementinst.tagName.toLowerCase() == "button", 2);

        var txtnode = document.createTextNode("button");
        expect('createTextNode �����ı�ʵ��', txtnode.textContent == "button", 3)

    });

    it('Node��ط�������', function () {
        expect('nodeType  createDocumentFragment���ؽڵ���Ƭ���ϵ�����Ϊ11', document.createDocumentFragment().nodeType == 11, 1);
        expect('nodeType  createTextNode�����ı�����������3', document.createTextNode("button").nodeType == 3, 2);
        expect('nodeType  createElement����Ԫ��������1', document.createElement("button").nodeType == 1, 3);
        expect('nodeName ���ؽڵ�ı�ǩ����', document.createElement("button").nodeName == "BUTTON", 4);

        var element1 = KISSY.DOM.query('.dom-father');
        expect('firstChild ����Ԫ�صĵ�һ���ӽڵ�', true, 5);
        /*if (!KISSY.UA.ie) {
            expect('firstChild ����Ԫ�صĵ�һ���ӽڵ�', true, 5);
        }
        else {
            expect('firstChild ����Ԫ�صĵ�һ���ӽڵ�', element1[0].firstChild.className == "inp1", 5);
        }

        var element2 = KISSY.DOM.query(".dom-father");
        if (!KISSY.UA.ie) {
            expect('lastChild ����Ԫ�ص����һ���ӽڵ�', element2[0].lastChild.nodeType == 3, 6);
        }
        else {
            expect('lastChild ����Ԫ�ص����һ���ӽڵ�', element2[0].lastChild.className == "dom-child2", 6);
        }


        var element3 = KISSY.DOM.query(".dom-child1");
        if (!KISSY.UA.ie) {
            expect('nextSibling ������һ���ֵܽڵ�', element3[0].nextSibling.nodeType == 3, 7);
        }
        else {
            expect('nextSibling ������һ���ֵܽڵ�', element3[0].nextSibling.className == "dom-child2", 7);
        }

        var element4 = KISSY.DOM.query(".dom-child2");
        if (!KISSY.UA.ie) {
            expect('previousSibling ������һ���ֵܽڵ�', element4[0].previousSibling.nodeType == 3, 8);
        }
        else {
            expect('previousSibling ������һ���ֵܽڵ�', element4[0].previousSibling.className == "dom-child1", 8);
        }

        var element5 = KISSY.DOM.query(".dom-child2");
        expect('parentNode ���ظ��׽ڵ�', element5[0].parentNode.className == "dom-father", 9);

        var element6 = KISSY.DOM.query(".dom-father");
        if (!KISSY.UA.ie) {
            expect('childNodes ���ظ��׽ڵ������ӽڵ�', element6[0].childNodes.length == 5, 10);
        }
        else {
            expect('childNodes ���ظ��׽ڵ������ӽڵ�', element6[0].childNodes.length == 2, 10);
        }*/

        var text = KISSY.DOM.query(".inner")[0].innerHTML;
        var exp = '1111';
        expect('innerHTML ���������ӽڵ��html����', text == exp, 11);


        var element7 = KISSY.DOM.query(".dom-father");
        var newchild = element7[0].appendChild(document.createElement("span"));
        if (!KISSY.UA.ie) {
            expect('appendChild ����ǰԪ������ӽڵ�', element7[0].childNodes[5] == newchild, 12);
            element7[0].removeChild(newchild);
        }
        else {
            expect('appendChild ����ǰԪ������ӽڵ�', element7[0].childNodes[2] == newchild, 12);
            element7[0].removeChild(newchild);
        }

        var parent = KISSY.DOM.query(".dom-father")[0];
        var child1 = KISSY.DOM.query(".dom-child1")[0];
        var newchild = parent.insertBefore(document.createElement("span"), child1);

        if (KISSY.UA.ie) {
            expect('insertBefore ��ĳ���ڵ�֮ǰ����һ���½ڵ�', parent.childNodes[0] == newchild, 13);
            parent.removeChild(newchild)
        }
        else {
            expect('insertBefore ��ĳ���ڵ�֮ǰ����һ���½ڵ�', parent.childNodes[4] == newchild, 13);
            parent.removeChild(newchild);
        }


        var replacechd = KISSY.DOM.query(".rep-child1")[0];
        var parent = KISSY.DOM.query(".rep-father")[0];
        var newchild = document.createElement("div");
        parent.replaceChild(newchild, replacechd);
        if (!KISSY.UA.ie) {
            expect('replaceChild ��һ���µĽڵ����ɽڵ�', parent.childNodes[1] == newchild, 15);
        }
        else {
            expect('replaceChild ��һ���µĽڵ����ɽڵ�', parent.childNodes[0] == newchild, 15);
        }


        var parent = KISSY.DOM.query(".dom-father")[0];
        var childs = parent.getElementsByTagName("div");
        expect('getElementsByTagName �Ը��ڵ�������������������ָ��tagname���ӽڵ�'+childs[0].className, childs[0].className == "dom-child2" && childs[1].className == "dom-child1", 16);

        expect('type ��ȡinput�ڵ������', KISSY.DOM.query(".inp1")[0].type == "text" && KISSY.DOM.query(".inp2")[0].type == "checkbox", 17)
        expect('type ��ȡinput�ڵ������', KISSY.DOM.query(".inp1")[0].name == "inp1_na" && KISSY.DOM.query(".inp2")[0].name == "inp2_na", 18)

        var node1 = KISSY.DOM.query(".dom-father")[0];
        expect('clientWidth :Ԫ�صĿ���������', node1.clientWidth != null, 20);
        expect('clientHeight :Ԫ�صĿ�������߶�', node1.clientHeight != null, 21);
        expect('offsetWidth :Ԫ�ص�ʵ�ʿ��', node1.offsetWidth != null, 22);
        expect('offsetHeight :Ԫ�ص�ʵ�ʿ��', node1.offsetHeight != null, 23);
        expect('scrollLeft :Ԫ�ص��������ֵ', node1.scrollLeft != null, 24);
        expect('scrollTop :Ԫ�ص����Ϲ���ֵ', node1.scrollTop != null, 25);
        expect('scrollHeight :����ʵ�ʸ߶�', node1.scrollHeight != null, 26);

        var ele = KISSY.DOM.query(".inp1")[0];
        ele.disabled = true;
        expect('disabled ���ý���', ele.disabled == true, 27);

        var ele = KISSY.DOM.query(".inp1")[0];
        ele.readOnly = true;
        expect('readOnly ����ֻ��', ele.readOnly == true, 28);

        var ele = KISSY.DOM.query(".inp2")[0];
        ele.checked = true;
        expect('checked ����radioѡ��', ele.checked == true, 29);


        var sel = KISSY.DOM.query(".selt")[0];
        expect('options ������ĸ���ֵ', sel.options.length == 2, 30);
        expect('selectedIndex ѡ�е�����', sel.selectedIndex == 1, 31);
        expect('text ѡ�е�����������', sel.options[sel.selectedIndex].text == 2, 32);

    });


});

describe("KISSY������", function () {
    it("KISSY ���� api �Ƿ���", function () {
        expect('KISSY ������', typeof KISSY === 'object', 1);
        expect('KISSY.DOM.addClass �����塣 ', typeof KISSY.DOM.addClass === 'function', 2);
        expect('KISSY.Event.on �Ǻ���', typeof KISSY.Event.on === 'function', 3);
        expect('KISSY.io �Ǻ���', typeof KISSY.io === 'function', 4);
        expect('KISSY.UA �Ƕ���', typeof KISSY.UA === 'object', 5);
        expect('KISSY.Anim �Ǻ���', typeof KISSY.Anim === 'function', 6);
    });

    it('KISSY Anim', function(){

        var s = KISSY.Anim('a', {top:10},3,'easeNode', function(){
            expect('anim �ص���ִ��',true);
        });
        s.run();
        s.stop(true);
        var DOM = KISSY.DOM,
            Event = KISSY.Event,
            Anim = KISSY.Anim,
            $ = DOM.get = function( sel ) {
                return DOM.query( sel )[0];
            };


        var ani = new Anim('a', {
            left: '800px'
        }, 2, 'easeOut', function() {
            KISSY.alert('finsned')
        });
        ani.run();
        ani.stop();
        ani.stop( true )


        expect('anim pause/resume/isPaused/isRunning ', s.isPaused())

    })

    it("KISSY������ȫ�ַ���, ��unparam�� trim��", function () {
        //unparam
        var str = "foo=1&bar=2";
        var ob = KISSY.unparam('foo=1&bar=2');
        expect('KISSY.unparam �������ַ��� str ��ԭΪ����' + ob.foo + ob.bar, ob.foo == 1 && ob.bar == 2, 1)

        //unEscapeHTML
        str = "&lt;a&gt;x&lt;/a&gt;";
        ob = KISSY.unEscapeHTML(str);
        expect('KISSY.unEscapeHTML ���ַ����е� html ʵ���ַ��滻�ɶ�Ӧ�ַ�', ob === '<a>x</a>', 1);

        expect('KISSY.escapeHTML ���ַ������� html ת��õ��ʺ���ҳ������ʾ������, �����滻 < Ϊ &lt;', KISSY.escapeHTML("<a>x</a>") === "&lt;a&gt;x&lt;&#x2F;a&gt;", 1);

        str = '{name} is {prop_1} and {prop_2}.';
        ob = {name: 'Jack Bauer', prop_1: 'our lord', prop_2: 'savior'};
        expect('KISSY.substitute ���ַ����е�ռλ���滻Ϊ��Ӧ�ļ�ֵ.', KISSY.substitute(str, ob) === 'Jack Bauer is our lord and savior.', 1);

    });

    it("����KISSY.DOM ��� ����", function () {
        var DOM = KISSY.DOM;
        var el = DOM.query('.kissy-dom');
        expect('query����һ������', el.length === 1, 6);

        expect('DOM get������������ȷ��ֵ', DOM.get('.kissy-dom').tagName.toLowerCase() === 'div', 10);

        DOM.removeClass(el, 'kissy-dom');
        expect('removeClass and hasClass', !DOM.hasClass(el, 'kissy-dom'), 6);

        DOM.addClass(el, 'newclass');
        expect('addClass and hasClass', DOM.hasClass(el, 'newclass'), 6);
        DOM.removeClass(el, 'newclass');
        DOM.addClass(el, 'kissy-dom');

        DOM.text(el, "I am new Text");
        expect('text ������ֵ', DOM.text(el) === "I am new Text", 8);
        DOM.text(el, '');

        var off = DOM.offset(el);
        expect('offset ��ȡ����ֵ�Ƿ���Ч', (typeof off.left === "number") && (typeof off.top === "number"), 3);

        DOM.offset(el, {left: 200, top: 300});
        expect('offset ����offset�Ƿ���Ч', DOM.offset(el).left === 200 && DOM.offset(el).top === 300, 8);

        expect('dom css ֻ�ж�����'+DOM.css(el,'color') , DOM.css(el,'color') == "rgb(51, 51, 51)");
    });


    it("����KISSY.Event ����", function(){
        var S = KISSY,Event = S.Event;
       /* Event.on(S.DOM.get('a'),'click', function(e){
            e.halt();
            e.target.innerHTML = "real";
        });

        Event.fire(S.DOM.get('a'), 'click');
        expect("Event.on����ע���¼����ҿ��Ա�fire����"+S.DOM.get('a').innerHTML, S.DOM.get('a').innerHTML == "real",1);

        Event.on(S.DOM.get('div'), 'click', function(e){
            e.halt();
            e.target.innerHTML = "i am not";
        })

        Event.remove(S.DOM.get('div'),'click');
        Event.fire(S.DOM.get('div'),'click');
        expect("Event.remove remove�� ��on�ĺ����Ͳ�����Ч", S.DOM.get('div').innerHTML != 'i am not');*/


        var xx = S.DOM.get('.dom-child1');

        xx.innerHTML = "d";

        function a(){
            xx.innerHTML = xx.innerHTML+"a"
        }

        function b(){
            xx.innerHTML = xx.innerHTML+"b"
        }


        Event.on(xx, 'click', b);
        Event.on(xx, 'click', a);


        Event.fire(xx,'click');

        expect(" Event.fire ", "dba"===xx.innerHTML ,false);


    });

    it("����KISSY.UA ����. ���������汾�ǣ�", function () {
        var s = "";
        if (KISSY.UA.ie) {
            s = KISSY.UA.ie;
        }
        if (!KISSY.UA.ie) {
            s = !KISSY.UA.ie;
        }
        if (KISSY.UA.chrome) {
            s = KISSY.UA.chrome;
        }
        expect(s, true, 1211);
    });

    it("����KISSY.IO��ط���. ����ֻ��һ���ɹ�����ȷ��", function () {
        var io = KISSY.io;
        io({
            url: 'http://taegrid.taobao.com',
            error: function () {
                expect('IO ������Է���', true, 6);
            },
            success: function () {

            }
        });
        io({
            url: 'http://grid.taobao.com',
            error: function () {
                expect('IO ���󲻿��Է�������������ң�˵����������', true, 6);
            }
        });
        io({
            url: 'http://.taobao.com',
            error: function () {
                expect('IO ���󲻿��Է�������������ң�˵����������', true, 6);
            }
        });
    });

});

describe("��ȫ--ǰ�˹淶��ز���", function () {
    it("ͨ��document.createElement ����html��ǩ, ����ֻ�ܴ���html����������ı�ǩ", function () {
        var ela = document.createElement("a");
        var elform = document.createElement("form");
        var eldiv = document.createElement("div");
        var elcanvas = document.createElement("canvas");
        var eliframe = document.createElement("iframe");

        expect("������a, form, div��ǩ�������ɹ�����",
            (ela.tagName.toLowerCase() === "a") && (elform.tagName.toLowerCase() === "form") && (eldiv.tagName.toLowerCase() === "div")
            , 3);

        expect("������canvas,iframe �������޷�������", elcanvas === null && eliframe === null, 3);

    });

    it("through the method el.innerHTML, create html tag. expect only whitelist html tag can created successful", function () {
        var el = document.createElement("a");
        var prehtml = "onlyme<canvas></canvas>onlyyou";
        el.innerHTML = prehtml;
        expect("innerHTML is 'onlyme&lt;canvas&gt;&lt;/canvas&gt;onlyyou', expect result is 'onlymeonlyyou'",
            el.innerHTML === 'onlymeonlyyou', 1
        );

        var noclosedHtml = "<a>a</a><a>";
        el.innerHTML = noclosedHtml;
        expect("innerHTML is '<a>a</a><a>', tag ��ȫ expect result is '<a>a</a><a></a>'",
            el.innerHTML === '<a>a</a><a></a>', 1
        );
        el = null;
    });

    it("expect only 'allowed html attr can be set for tagname'", function () {
        var el = document.createElement("img");
        el.setAttribute('name', 'myname');
        el.setAttribute('noexitattr', 'no');
        el.setAttribute('style', 'display:none;');
        expect("html 'a' element,set the 'name' and 'noexitattr' attr, expect 'name' and 'unreconized attr' all can be seted",
            el.getAttribute('name') === 'myname' && el.getAttribute('noexitattr') === "no", 1
        );
        el = null;
    });

    it("expect only 'allowed css attr and value' can be set for tagname'", function () {
        var el = document.createElement("img");
        el.style.marginLeft = "10px";
        expect("el.style.marginLeft = '10px';   expect marginleft is ok! use the attr or value that is not white_list will be script error; hava tested;",
            (el.style.marginLeft) === "10px" && (el.style.marginTop == 0), 1);

    });
});

describe("��ȫ-- ȫ�ַ�������", function () {

    it("window ����:  ������Ҫע�⣬�����windowָ����iframeɳ�价����window������topҳ���window", function () {
        expect("window.innerWidth ���Է���", typeof window.innerWidth === "number", 1);
        expect("window.innerHeight ���Է���", typeof window.innerHeight === "number", 1);
        expect("window.location ���Է���" + typeof window.location, typeof window.location === "object", 1)
        expect("window.top ��window.parent �����ص��ǵ�ǰiframe�е�window�����ɻ�ȡ��ʵ�Ķ���window", window.parent == window && window.top == window, 1)
        expect("window.isNaN ���Է���", typeof window.isNaN === "function", 1)
        expect("window.Infinity ���Է��ʣ���", typeof window.Infinity === "number", 1)
        expect("window.alert �����Է��ʣ���", typeof window.name === "undefined", 1)
        expect("window.confirm �����Է��ʣ���", typeof window.confirm === "undefined", 1)
        expect("window.alert �����Է��ʣ���", typeof window.name === "undefined", 1)
        expect("window.name �����Է��ʣ���", typeof window.name === "undefined", 1)
        expect("window.history �����Է��ʣ���", typeof window.history === "undefined", 1)
        expect("window.URL �����Է���", typeof window.URL === "undefined", 1);
        expect("window eval ���ɷ���", typeof window.eval === "undefined", 1);
    });


    it("document ����api�ķ����⣬��������������ʹ�ã���Ҫע�����:" +
        "ʹ�õ�document��������Ϊdocument��������ָ����ɳ���е�document��������topҳ���document��", function () {
        expect('document.cookie ���ܷ���', document.cookie === undefined, 1);
        expect('document.head ���ܷ���', document.head === undefined, 1);
        expect('document.body���Է���', typeof document.body === "object", 1);
        expect('document.script Ӧ���� undefined', document.script === undefined, 1);
        expect('document.URL Ӧ���� undefined', document.URL === undefined, 1);
        expect('document.activeElement Ӧ���� undefined', document.activeElement === undefined, 1);
        expect('document.documentElement', document.documentElement.innerHTML !== undefined, 1);
        expect('document.domain', document.domain !== undefined, 1);
        expect('document.location Ӧ���� undefined', document.location === undefined, 1);
        expect('document.documentURI Ӧ���� undefined', document.documentURI === undefined, 1);
        expect('document.images Ӧ���� undefined', document.images === undefined, 1);
    });


});

describe("���ܲ���:ʹ��һЩ js�еĳ��÷����������ڸ��������������������", function () {
    it('document.createElement: ��document.createElement ����3��aԪ��; ', function () {
        var el1 = document.createElement("a");
        var el1 = document.createElement("a");
        var el1 = document.createElement("a");
    }, true);

    it('document.createElement: ��document.createElement ����3��divԪ��; ', function () {
        var el1 = document.createElement("div");
        var el1 = document.createElement("div");
        var el1 = document.createElement("div");
    }, true);

    it('document.createElement: ��document.createElement ����3��, canvas, iframe scriptԪ��; ', function () {
        var el1 = document.createElement("iframe");
        var el1 = document.createElement("iframe");
        var el1 = document.createElement("canvas");
    }, true);

    it('document.createDocumentFragment(): ��document.createDocumentFragment() ����element; ', function () {
        var k = document.createDocumentFragment();
        var el1 = document.createElement("a");
        var el2 = document.createElement("a");
        var el3 = document.createElement("a");
        k.appendChild(el1);
        k.appendChild(el2);
        k.appendChild(el3);

    }, true);


    it('innerHTML ������innerHTML���������õ� &lt;canvas&gt;&lt;/canvas&gt;', function () {
        var el = document.createElement('div');
        el.innerHTML = "<canvas></canvas>";
        el.innerHTML = "<canvas></canvas>";
        el.innerHTML = "<canvas></canvas>";
    }, true)

    it('innerHTML ������innerHTML���������õ� &lt;a&gt;&lt;/a&gt;', function () {
        var el = document.createElement('div');
        el.innerHTML = "<a href='http://www.baidu.com'></a>";
        el.innerHTML = "<a href='http://www.baidu.com'></a>";
        el.innerHTML = "<a href='http://www.baidu.com'></a>";
    }, true)

    it('innerHTML ������innerHTML���������õ�set complex html: ', function () {
        var el = document.createElement('div');
        el.innerHTML = "<div>ddddd<span>dfdf</span><a>dfdf</a></div><div><div><div><canvas></canvas></div></div></div><a href='http://www.baidu.com' name='fuck'>sdssss</a>";
    }, true)

    it('innerHTML ������innerHTML���������õ� get complex html: ', function () {
        var el = document.createElement('div');
        el.innerHTML = "<div>ddddd<span>dfdf</span><a>dfdf</a></div><div><div><div><canvas></canvas></div></div></div><a href='http://www.baidu.com' name='fuck'>sdssss</a>";
        var k = el.innerHTML;
        var k = el.innerHTML;
        var k = el.innerHTML;
        var k = el.innerHTML;
        var k = el.innerHTML;
        var k = el.innerHTML;
    }, true)

});
