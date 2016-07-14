(function (ViewModelBase) {
    function DependenciesInjectionSample($http) {

        this.$http = $http;

        this.name = "I am the dependencies injection sample";

        ViewModelBase.call(this);
    }

    DependenciesInjectionSample.$inject = ['$http'];

    DependenciesInjectionSample.prototype = Object.create(ViewModelBase.prototype);
    DependenciesInjectionSample.prototype.constructor = DependenciesInjectionSample;

    DependenciesInjectionSample.prototype.hello = function () {
        //can use properties or function of the base class here
    };

    fdui.viewModel('dependenciesInjectionSample', DependenciesInjectionSample);
})(fdui.ViewModelBase);