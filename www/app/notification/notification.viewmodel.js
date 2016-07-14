/*
 * NotificationViewModel
 */

'use strict';

(function (ViewModelBase) {
    function NotificationViewModel() {
        ViewModelBase.call(this);
    }

    NotificationViewModel.prototype = Object.create(ViewModelBase.prototype);
    NotificationViewModel.prototype.constructor = NotificationViewModel;

    NotificationViewModel.prototype.init = function () {
        console.log('init notificationViewModel');
    };

    NotificationViewModel.prototype.dispose = function () {
        console.log('dispose notificationViewModel');
    };

    fdui.viewModel('notificationViewModel', NotificationViewModel);

})(fdui.ViewModelBase);