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
    fdui.injectables = {};
    
    var configHttpProvider = function ($http) {
        $http.defaults.withCredentials = true;
        $http.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
        $http.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
    };

    fdui.module.config(['$controllerProvider', '$compileProvider', '$filterProvider', '$provide', '$stateProvider', '$urlRouterProvider', '$httpProvider',
        function ($controllerProvider, $compileProvider, $filterProvider, $provide, $stateProvider, $urlRouterProvider, $httpProvider) {
            
            $httpProvider.defaults.withCredentials = true;
            $httpProvider.interceptors.push('securityProvider');

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