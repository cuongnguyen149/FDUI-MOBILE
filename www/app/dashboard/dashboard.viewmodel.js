/*
 * DashboardViewModel
 */

'use strict';

(function (ViewModelBase) {
    function DashboardViewModel($filter, searchService, todoService, $ionicSlideBoxDelegate) {
        this.$filter                    = $filter;
        this.$ionicSlideBoxDelegate     = $ionicSlideBoxDelegate;
        this.$searchService             = searchService;
        this.$todoService               = todoService;
        this.recentSearchCurrentPage    = fdui.const.pagination.currentPage;
        this.todoCurrentPage            = fdui.const.pagination.currentPage;
        this.pageSize                   = fdui.const.pagination.pageSize;
        this.isSearchRecentLoading      = true;
        ViewModelBase.call(this);
    }

    DashboardViewModel.$inject = ['$filter', 'searchService', 'todoService', '$ionicSlideBoxDelegate'];

    DashboardViewModel.prototype = Object.create(ViewModelBase.prototype);
    DashboardViewModel.prototype.constructor = DashboardViewModel;

    DashboardViewModel.prototype.init = function () {
        var self = this;
        console.log('init dashboardViewModel');
        var userName = self.getLocalStorageItem("userName");

        this.$searchService.getSimpleSearchResultAsync().then(function(searchRecentResponse) {
        //     self.searchRecentResponse = searchRecentResponse.responseEntity.filter(function(obj) {
        //         return obj.type !== 'ADVANCED_SEARCH';
        //     });
        //     self.arrayPageNumber = self.getArrayPageNumber(self.searchRecentResponse.length);    
            self.searchRecentResponse = [{name: 'tesst'},{name: 'tesst'}];
            self.arrayPageNumber = [0, 1];
            self.$ionicSlideBoxDelegate.update();
            self.isSearchRecentLoading = false; 
        });
        // this.$todoService.getToDoTileAsync().then(function(todoResponse) {
        //     self.todoResponse = todoResponse.responseEntity.resultsetdata;
        // });
    };

    DashboardViewModel.prototype.dispose = function () {
        console.log('dispose dashboardViewModel');
    };

    DashboardViewModel.prototype.getDashboardTiles = function () {

    };

    DashboardViewModel.prototype.titleClick = function () {
      console.log('title click');
    };

    DashboardViewModel.prototype.docClick = function () {
      console.log('Doc click');
    };

    fdui.viewModel('dashboardViewModel', DashboardViewModel);

})(fdui.ViewModelBase);
