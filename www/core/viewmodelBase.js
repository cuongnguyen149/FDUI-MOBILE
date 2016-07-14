/*
 * ViewModelBase
 */

'use strict';

(function () {
    function ViewModelBase() {
        this.$state = fdui.injectables.$state;
        this.$window = fdui.injectables.$window;
        this.stateName = this.$state.current.name;

        if (!fdui.settings.cache) {
            this.init();
        }
    }

    ViewModelBase.prototype.navigateTo = function(state){
        this.$state.go(state);
    };
    ViewModelBase.prototype.setLocalStorageItem = function(key, value){
        this.$window.localStorage.setItem(key, value);
    };
    ViewModelBase.prototype.getLocalStorageItem = function(key){
        var localStorage = this.$window.localStorage;
        return localStorage[key];
    };
    ViewModelBase.prototype.dispose = function () {

    };

    ViewModelBase.prototype.init = function () {
        
    };

    ViewModelBase.prototype.generateGuid = function () {

        var block4 = function() {
            return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
        }

        var guid = (block4() + block4() + "-" + block4() + "-4" + block4().substr(0, 3) + "-" + block4() + "-" + block4() + block4() + block4()).toUpperCase();
        
        return guid;
    };

    ViewModelBase.prototype.test = function () {
        console.log(this.stateName + ' says hi!');
    }

    fdui.ViewModelBase = ViewModelBase;

})();