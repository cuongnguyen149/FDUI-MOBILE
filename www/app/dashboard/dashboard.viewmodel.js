/*
 * DashboardViewModel
 */

'use strict';

(function (ViewModelBase) {
    function DashboardViewModel($filter, searchService, todoService) {
        this.$filter = $filter;
        this.$searchService = searchService;
        this.$todoService = todoService;
        this.recentSearchCurrentPage = 0;
        this.todoCurrentPage = 0;
        ViewModelBase.call(this);
    }
    DashboardViewModel.$inject = ['$filter', 'searchService', 'todoService'];

    DashboardViewModel.prototype = Object.create(ViewModelBase.prototype);
    DashboardViewModel.prototype.constructor = DashboardViewModel;

    DashboardViewModel.prototype.init = function () {
        var self = this;
        console.log('init dashboardViewModel');
        var userName = self.getLocalStorageItem("userName");
        this.$searchService.getRecentSearchAsync(userName).then(function(response) {
            self.response = response.responseEntity.filter(function(obj) {
                return obj.type !== 'ADVANCED_SEARCH';
            });    
        });
        this.$todoService.getToDoTileAsync().then(function(todoResponse) {
            self.todoResponse = todoResponse.responseEntity.resultsetdata;
        });
    };

    DashboardViewModel.prototype.dispose = function () {
        console.log('dispose dashboardViewModel');
    };

    DashboardViewModel.prototype.getDashboardTiles = function () {

    };
    fdui.viewModel('dashboardViewModel', DashboardViewModel);
    
})(fdui.ViewModelBase);

