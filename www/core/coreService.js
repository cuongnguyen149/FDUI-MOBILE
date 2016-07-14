(function (ServiceBase) {
    function CoreService($http, $q) {
        this.$http = $http;
        this.$q = $q;

        ServiceBase.call(this);
    }

    CoreService.prototype = Object.create(ServiceBase.prototype);
    CoreService.prototype.constructor = CoreService;


    CoreService.prototype.isNullOrEmpty = function (value) {
        
    };

    CoreService.prototype.pushParameter = function (parameter) {
        this._parameterStack.push(parameter);
    };

    CoreService.prototype.popParameter = function () {
        return this._parameterStack.pop();
    };

    CoreService.prototype.getParameters = function () {
        return this._parameterStack;
    };

    CoreService.prototype.formDialog = function (templateUrl, viewModel, dialogParameters, size, resultFunc) {

    };

    CoreService.prototype.messageDialog = function (title, message, buttons, resultFunc) {
    };

    CoreService.prototype.navigateTo = function (routePath) {

    };

    fdui.service('coreService', ['$http', '$q', CoreService]);
})(fdui.ServiceBase);