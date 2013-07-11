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