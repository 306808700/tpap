/**
 *  ��ʼ�������Ż�����ģ��
 *  @see http://baike.corp.taobao.com/index.php/CS_RD/Goodbench/Api
 */
var request = require('request');
var when = require('when');
var fs = require('fs');



var api = {
    getValidProvinceList: "http://open.alibench.com/rest/v1/CronTask/GetValidProvinceList", //��ȡ���õ�ʡ���б�
    getValidISPList: "http://open.alibench.com/rest/v1/CronTask/GetValidISPList", //��ȡ���õ���Ӫ���б�
    //getValidTaskInterval: "http://open.alibench.com/rest/v1/CronTask/GetValidTaskInterval", //��ȡ���õ�������
    newPageTask: "http://open.alibench.com/rest/v1/CronTask/NewPageTask",//�½�ҳ��̽������
    updatePageTask: "http://open.alibench.com/rest/v1/CronTask/UpdatePageTask", //����ҳ������
    getTaskByID: "http://open.alibench.com/rest/v1/CronTask/GetTaskByID", //��ȡ������Ϣ
    getTaskList: "http://open.alibench.com/rest/v1/CronTask/GetTaskList", //��ȡ�����б�
    pagePerformanceCurve: "http://open.alibench.com/rest/v1/ChartData/PagePerformanceCurve", //Page��������
    pageChinaMap: "http://open.alibench.com/rest/v1/ChartData/PageChinaMap" //Page�й���ͼ
};

var userLists = [];


function PerTasks(user, pwd) {
    this.username = user;
    this.password = pwd;
}

PerTasks.prototype.ready = function (fnc) {
    var self = this;
    if (!self.pros || !self.isp) {
        this.getValidProvinceList().then(function (pros) {
            self.pros = pros;
        }).then(self.getValidISPList().then(function (isp) {
                self.isp = isp;
            })).then(function () {
                fnc.call();
            });
    } else {
        fnc.call();
    }

}

PerTasks.prototype._post = function (url, param, fnc) {
    var self = this;
    param.username = self.username;
    param.password = self.password;
    request.post(
        url,
        { form: param },
        function (error, response, body) {
            if (!error && response.statusCode == 200) {
                fnc.call(this, JSON.parse(body));
            }
        }
    );
};

//һ�����ݵĺ���
PerTasks.prototype.getValidProvinceList = function () {
    var deferred = when.defer();
    var self = this;
    this._post(api.getValidProvinceList, {}, function (json) {
        var temp = 0, pros = [];
        if (json.code == 0) {
            for (temp; temp < json.data.province.length; temp++) {
                pros.push(json.data.province[temp].id);
            }
            deferred.resolve(pros);
        } else {
            console.log("province error!")
        }

    });
    return deferred.promise;
};

//һ�����ݵĺ���
PerTasks.prototype.getValidISPList = function () {
    var deferred = when.defer();

    this._post(api.getValidISPList, {}, function (json) {
        var temp = 0, isp = [];
        if (json.code == 0) {
            for (temp; temp < json.data.length; temp++) {
                isp.push(json.data[temp].id);
            }
            deferred.resolve(isp);
        } else {
            console.log("province error!")
        }

    });
    return deferred.promise;
};

//�½�ҳ��̽������
PerTasks.prototype.newPageTask = function () {
    var pam;
    var self = this;
    var taskIds = [];
    for (var index = 0; index < userLists.length; index++) {
        pam = {};
        pam.task_name = "task" + userLists.id;
        pam.task_target = userLists.id;
        pam.end_time = "2013-12-01";
        pam.interval = 180;
        pam.locates = self.locates;
        pam.isp = self.isp;

        this._post(api.newPageTask, pam, function (json) {
            if(json.code == 0){
                fs.appendFile('taskIds.txt', json.data+",", function (err) {
                    if (err) throw err;
                });
            }
        });

    }

};

PerTasks.prototype.getTaskList = function(){
    this._post(api.getTaskList, {task_type:6,page:1,rows:10000}, function (json) {
        if(json.code == 0){
            console.log(json)
        }
    });
}

PerTasks.prototype.pagePerformanceCurve = function(){
    this._post(api.pagePerformanceCurve, {task_id:75,start_time:"2013-07-10 00:00:00",end_time:"2013-07-10 23:59:59",rows:10000}, function (json) {
        if(json.code == 0){
            console.log(json)
        }
    });
}

var perTask = new PerTasks("test/shiba", "shiba123456");
perTask.pagePerformanceCurve();


module.exports = PerTasks;




