'use strict';

(function () {
    function ApplicationContext() {
        this._viewModelDict = [];
        this._activeViewBase = {};
    }

    ApplicationContext.$inject = [];

    ApplicationContext.prototype.pushActiveViewModel = function (viewModelBase) {
        var viewModelName = viewModelBase.name;
        var existingViewModel = this._viewModelDict[viewModelName];
        if (existingViewModel) {
            this.disposeViewModel(existingViewModel);
            this._viewModelDict[viewModelName].push(viewModelBase);
            this._activeViewBase = viewModelBase;
            return;
        }
    };

    ApplicationContext.prototype.disposeViewModel = function (viewModelBase) {

    };

    ApplicationContext.prototype.getActiveViewModel = function () {
        return this._activeViewBase;
    };

    fdui.service('applicationContext', ApplicationContext)

})();