(function (ViewModelBase) {
    function AccountViewModel() {
        ViewModelBase.call(this);
    };

    AccountViewModel.prototype = Object.create(ViewModelBase.prototype);
    AccountViewModel.prototype.constructor = AccountViewModel;

    AccountViewModel.prototype.init = function () {
    };

    fdui.viewModel('accountViewModel', AccountViewModel);
})(fdui.ViewModelBase);