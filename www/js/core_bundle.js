/*
 * bootstrapper
 */

'use strict';

var fdui = {
    settings: {
        applicationName: 'fdui',
        cache: false,
        viewModelPropertyName: 'vm'
    }
};

(function () {

    fdui.module = angular.module(fdui.settings.applicationName, ['ionic']);

    fdui.service = fdui.module.service;
    fdui.filter = fdui.module.filter;
    fdui.viewModel = fdui.module.controller;
    fdui.provider = fdui.module.provider;
    fdui.directive = fdui.module.directive;
    fdui.injectables = {};
    
    var configHttpProvider = function ($http) {
        $http.defaults.withCredentials = true;
        $http.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
        $http.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
    };

    fdui.module.config(['$controllerProvider', '$compileProvider', '$filterProvider', '$provide', '$stateProvider', '$urlRouterProvider', '$httpProvider',
        function ($controllerProvider, $compileProvider, $filterProvider, $provide, $stateProvider, $urlRouterProvider, $httpProvider) {
            
            fdui.registerRoutes($stateProvider, $urlRouterProvider);
        }
    ]);

    fdui.module.run(['$ionicPlatform', '$rootScope', '$http', '$q', '$state', '$window',
        function ($ionicPlatform, $rootScope, $http, $q, $state, $window) {
            angular.extend(fdui.injectables, {
                $http: $http,
                $q: $q,
                $rootScope: $rootScope,
                $state: $state,
                $window : $window
            });

            configHttpProvider($http);

            $rootScope.$on("$ionicView.enter", function (event, data) {
                var stateViewModel = data.stateId.toLowerCase() + 'viewmodel';
                console.log('---> $ionicView.enter ' + stateViewModel);
            });

            $ionicPlatform.ready(function () {
                if (window.cordova && window.cordova.plugins.Keyboard) {
                    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
                    // for form inputs)
                    cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

                    // Don't remove this line unless you know what you are doing. It stops the viewport
                    // from snapping when text inputs are focused. Ionic handles this internally for
                    // a much nicer keyboard experience.
                    cordova.plugins.Keyboard.disableScroll(true);
                }
                if (window.StatusBar) {
                    StatusBar.styleDefault();
                }
            });
        }
    ]);

    angular.element(document).ready(function () {
        angular.bootstrap(document, [fdui.settings.applicationName], { strictDi: true });
    });
})();
(function () {
    fdui.provider('securityProvider', [function () {
        this.$get = [function () {
            return {
                'request': function (config) {

                    return config;
                }
            }
        }];

    }]);
})();

/*
 * code is generated, any changes here will be discarded.
 */

(function () {
    fdui.registerRoutes = function ($stateProvider, $urlRouterProvider) {
        $stateProvider.state('dashboard', {
            cache: fdui.settings.cache,
            url: '/dashboard',
            templateUrl: 'app/dashboard/dashboard.html',
            controller: 'dashboardViewModel',
            controllerAs: fdui.settings.viewModelPropertyName
        });

        $stateProvider.state('todo', {
            cache: fdui.settings.cache,
            url: '/todo',
            templateUrl: 'app/todo/todo.html',
            controller: 'todoViewModel',
            controllerAs: fdui.settings.viewModelPropertyName
        });

        $stateProvider.state('notification', {
            cache: fdui.settings.cache,
            url: '/notification',
            templateUrl: 'app/notification/notification.html',
            controller: 'notificationViewModel',
            controllerAs: fdui.settings.viewModelPropertyName
        });

        $stateProvider.state('login', {
            cache: fdui.settings.cache,
            url: '/login',
            templateUrl: 'app/login/login.html',
            controller: 'loginViewModel',
            controllerAs: fdui.settings.viewModelPropertyName
        });

        $stateProvider.state('mainMenu', {
            //abstract: true,
            cache: fdui.settings.cache,
            url: '/mainMenu',
            templateUrl: '/app/_mainMenu/mainMenu.html',
            controller: 'mainMenuViewModel',
            controllerAs: 'vm'
        });

        $stateProvider.state('mainMenu.menuOne', {
            cache: fdui.settings.cache,
            url: '/menuOne',
            views: {
                'viewContent': {
                    controller: 'menuOneViewModel',
                    controllerAs: 'vm',
                    templateUrl: '/app/_mainMenu/menuOne/menuOne.html'
                }
            }
        });

        $stateProvider.state('mainMenu.menuTwo', {
            cache: fdui.settings.cache,
            url: '/menuTwo',
            views: {
                'viewContent': {
                    controller: 'menuTwoViewModel',
                    controllerAs: 'vm',
                    templateUrl: '/app/_mainMenu/menuTwo/menuTwo.html'
                }
            }
        });

        $stateProvider.state('tabsDemo', {
            url: '/tabsDemo',
            abstract: true,
            templateUrl: 'app/_tabsDemo/tabsDemo.html'
        })

        $stateProvider.state('tabsDemo.chats', {
            url: '/chats',
            views: {
                'tab-chats': {
                    templateUrl: 'app/_tabsDemo/chats/chats.html',
                    controller: 'chatsViewModel',
                    controllerAs: 'vm'
                }
            }
        })

        $stateProvider.state('tabsDemo.chatDetail', {
            url: '/chatDetail/:id',
            views: {
                'tab-chats': {
                    templateUrl: 'app/_tabsDemo/chatDetail/chatDetail.html',
                    controller: 'chatDetailViewModel',
                    controllerAs: 'vm'
                }
            }
        })

        $stateProvider.state('tabsDemo.account', {
            url: '/account',
            views: {
                'tab-account': {
                    templateUrl: 'app/_tabsDemo/account/account.html',
                    controller: 'accountViewModel',
                    controllerAs: 'vm'
                }
            }
        });

        $urlRouterProvider.otherwise('/login');
    };
})();
/*
 * ServiceBase
 */

'use strict';

(function () {
    function ServiceBase() {
        //TODO: put this to the settings
        this.url = 'http://cscwebway016v.lsdev.fcg.com:8080/fdui-7.1.0300.04';
        this.$http = fdui.injectables.$http;
        this.$q = fdui.injectables.$q;       
    }

    ServiceBase.prototype.handleException = function (error) {
        console.log(error);
    };

    ServiceBase.prototype.getRequestConfig = function(config){
        if(!angular.isUndefined(config) && config != null)
            return config;
        return  { 
                    headers: { 
                        'Content-Type': 'application/x-www-form-urlencoded',  
                        'X-Requested-With': 'XMLHttpRequest',
                        'charset': 'UTF-8'
                    } 
        };
    };

    ServiceBase.prototype.getAsync = function (actionName) {
        var self = this;
        var d = this.$q.defer();
        this.$http.get(actionName).then(
            function successCallback(response) {
                d.resolve(response.data);
            },
            function errorCallback(error, status) {
                d.reject(error.data);
                self.handleException(error, status);
            });

        return d.promise;
    };

    ServiceBase.prototype.postAsync = function (actionName, data) {
        var self = this;
        var d = this.$q.defer();
        this.$http.post(this.url + actionName, data).then(
            function successFunc(response) {
                d.resolve(response.data);
            },
            function errorFunc(error, status) {
                d.reject(error.data);
                self.handleException(error, status);
            });

        return d.promise;
    };

    fdui.ServiceBase = ServiceBase;
})();

(function (ServiceBase) {
    function CoreService($http, $q) {
        this.$http = $http;
        this.$q = $q;

        ServiceBase.call(this);
    }

    CoreService.prototype = Object.create(ServiceBase.prototype);
    CoreService.prototype.constructor = CoreService;


    CoreService.prototype.isNullOrEmpty = function (value) {
        
    };

    CoreService.prototype.pushParameter = function (parameter) {
        this._parameterStack.push(parameter);
    };

    CoreService.prototype.popParameter = function () {
        return this._parameterStack.pop();
    };

    CoreService.prototype.getParameters = function () {
        return this._parameterStack;
    };

    CoreService.prototype.formDialog = function (templateUrl, viewModel, dialogParameters, size, resultFunc) {

    };

    CoreService.prototype.messageDialog = function (title, message, buttons, resultFunc) {
    };

    CoreService.prototype.navigateTo = function (routePath) {

    };

    fdui.service('coreService', ['$http', '$q', CoreService]);
})(fdui.ServiceBase);
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
    ViewModelBase.prototype.getArrayPageNumber = function(length){
        var arrayPageNumber = [],
            pageSize        = fdui.const.pagination.pageSize;
        for(var i = 0; i < length/pageSize; i++){
            arrayPageNumber.push(i);
        }

        return arrayPageNumber;
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