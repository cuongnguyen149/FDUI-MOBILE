/*
 * MainMenuViewModel
 */

'use strict';

(function (ViewModelBase) {
    function MainMenuViewModel() {
        ViewModelBase.call(this);
    }

    MainMenuViewModel.prototype = Object.create(ViewModelBase.prototype);
    MainMenuViewModel.prototype.constructor = MainMenuViewModel;

    fdui.viewModel('mainMenuViewModel', MainMenuViewModel);

})(fdui.ViewModelBase);