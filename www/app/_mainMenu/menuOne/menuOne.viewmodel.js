/*
 * MenuOneViewModel
 */

'use strict';

(function (ViewModelBase) {
    function MenuOneViewModel() {
        ViewModelBase.call(this);
    }

    MenuOneViewModel.prototype = Object.create(ViewModelBase.prototype);
    MenuOneViewModel.prototype.constructor = MenuOneViewModel;

    fdui.viewModel('menuOneViewModel', MenuOneViewModel);

})(fdui.ViewModelBase);