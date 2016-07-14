/*
 * TodoViewModel
 */

'use strict';

(function (ViewModelBase) {
    function TodoViewModel($filter) {
        this.$filter = $filter;

        ViewModelBase.call(this);
    }

    TodoViewModel.$inject = ['$filter'];

    TodoViewModel.prototype = Object.create(ViewModelBase.prototype);
    TodoViewModel.prototype.constructor = TodoViewModel;

    TodoViewModel.prototype.init = function () {
        this.age = this.$filter('date')(new Date(), "dd/MM/yyyy HH:mm:ss sss");

        console.log('init todoViewModel');
    };

    TodoViewModel.prototype.dispose = function () {
        console.log('dispose todoViewModel');
    };

    fdui.viewModel('todoViewModel', TodoViewModel);
})(fdui.ViewModelBase);