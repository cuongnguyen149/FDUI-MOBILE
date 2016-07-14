/*
 * MenuTwoViewModel
 */

'use strict';

(function (ViewModelBase) {
    function MenuTwoViewModel() {
        ViewModelBase.call(this);
    }

    MenuTwoViewModel.prototype = Object.create(ViewModelBase.prototype);
    MenuTwoViewModel.prototype.constructor = MenuTwoViewModel;

    fdui.viewModel('menuTwoViewModel', MenuTwoViewModel);

})(fdui.ViewModelBase);