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