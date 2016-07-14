(function (ViewModelBase) {
    function InheritViewModelSample() {

        ViewModelBase.call(this);
    }

    InheritViewModelSample.prototype = Object.create(ViewModelBase.prototype);
    InheritViewModelSample.prototype.constructor = InheritViewModelSample;

    InheritViewModelSample.prototype.hello = function () {
        //can use properties or function of the base class here
    };

    fdui.viewModel('inheritViewModelSample', InheritViewModelSample);
})(fdui.ViewModelBase);