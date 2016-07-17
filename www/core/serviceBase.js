/*
 * ServiceBase
 */

'use strict';

(function () {
    function ServiceBase() {
        //TODO: put this to the settings
        this.url = 'http://cscwebway016v.lsdev.fcg.com:8080/fdui-7.1.0300.04';
        this.$http = fdui.injectables.$http;
        this.$q = fdui.injectables.$q;       
    }

    ServiceBase.prototype.handleException = function (error) {
        console.log(error);
    };

    ServiceBase.prototype.getRequestConfig = function(config){
        if(!angular.isUndefined(config) && config != null)
            return config;
        return  { 
                    headers: { 
                        'Content-Type': 'application/x-www-form-urlencoded',  
                        'X-Requested-With': 'XMLHttpRequest',
                        'charset': 'UTF-8'
                    } 
        };
    };

    ServiceBase.prototype.getAsync = function (actionName) {
        var self = this;
        var d = this.$q.defer();
        this.$http.get(actionName).then(
            function successCallback(response) {
                d.resolve(response.data);
            },
            function errorCallback(error, status) {
                d.reject(error.data);
                self.handleException(error, status);
            });

        return d.promise;
    };

    ServiceBase.prototype.postAsync = function (actionName, data) {
        var self = this;
        var d = this.$q.defer();
        this.$http.post(this.url + actionName, data).then(
            function successFunc(response) {
                d.resolve(response.data);
            },
            function errorFunc(error, status) {
                d.reject(error.data);
                self.handleException(error, status);
            });

        return d.promise;
    };

    fdui.ServiceBase = ServiceBase;
})();
