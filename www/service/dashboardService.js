(function (ServiceBase) {
    function DashboardService() {
        ServiceBase.call(this);
    };

    DashboardService.prototype = Object.create(ServiceBase.prototype);
    DashboardService.prototype.constructor = DashboardService;

    DashboardService.prototype.getTilesSettingsAsync = function () {
        return this.getAsync('/rest/configuration/modules/fdtst10/HOME_PAGE_MODULES');
    };


    fdui.service('dashboardService', DashboardService);
})(fdui.ServiceBase);