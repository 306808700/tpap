function describe(desc, func) {
    console.group(desc);
    func.call();
    console.groupEnd();
}

function it(desc, func, needTime) {
    console.log("<strong>" + "��ʼ����: " + desc + "</strong>");
    needTime ? console.time("test time") : '';
    func.call(this);
    needTime ? console.timeEnd("test time") : '';

}

function expect(desc, flag, id) {
    if (flag) {
        console.warn(" ���Գɹ���    " + "<br>������" + desc);
    } else {
        console.error(" ����ʧ�ܣ�   " + desc);
    }
}

function getCajaExposed(frameGroup, cajaAFTB) {
    frameGroup.markFunction(describe);
    frameGroup.markFunction(it);
    frameGroup.markFunction(expect);

    var obj = {
        it: frameGroup.tame(it),
        describe: frameGroup.tame(describe),
        expect: frameGroup.tame(expect)

    };

    return obj;
}
