
'use strict';
(function (ServiceBase) {
    function ToDoService() {
        ServiceBase.call(this);
    }

    ToDoService.$inject = [];

    ToDoService.prototype = Object.create(ServiceBase.prototype);
    ToDoService.prototype.constructor = ToDoService;

    ToDoService.prototype.getToDoTileAsync = function () {
	    return this.getAsync('/rest/workflow/todolist/0/All%20Documents?isTile=true&_dc=1468315512252');
	};

    fdui.service('todoService', ToDoService);
})(fdui.ServiceBase);
