'use strict';

(function(){
	fdui.const = {
		states : {
			login: 'login',
			dashboard: 'dashboard',
			todo: 'todo'
		}	
	};
})();
/*
 * DashboardViewModel
 */

'use strict';

(function (ViewModelBase) {
    function DashboardViewModel($filter, searchService, todoService) {
        this.$filter = $filter;
        this.$searchService = searchService;
        this.$todoService = todoService;
        this.recentSearchCurrentPage = 0;
        this.todoCurrentPage = 0;
        ViewModelBase.call(this);
    }
    DashboardViewModel.$inject = ['$filter', 'searchService', 'todoService'];

    DashboardViewModel.prototype = Object.create(ViewModelBase.prototype);
    DashboardViewModel.prototype.constructor = DashboardViewModel;

    DashboardViewModel.prototype.init = function () {
        var self = this;
        console.log('init dashboardViewModel');
        var userName = self.getLocalStorageItem("userName");
        this.$searchService.getRecentSearchAsync(userName).then(function(response) {
            self.response = response.responseEntity.filter(function(obj) {
                return obj.type !== 'ADVANCED_SEARCH';
            });    
        });
        this.$todoService.getToDoTileAsync().then(function(todoResponse) {
            self.todoResponse = todoResponse.responseEntity.resultsetdata;
        });
    };

    DashboardViewModel.prototype.dispose = function () {
        console.log('dispose dashboardViewModel');
    };

    DashboardViewModel.prototype.getDashboardTiles = function () {

    };
    fdui.viewModel('dashboardViewModel', DashboardViewModel);
    
})(fdui.ViewModelBase);


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
'use strict';

(function(ViewModelBase){
    function LoginViewModel(coreService, securityService) {
		this.securityService = securityService;
		this.errorLogin = false;
		this.passwordEmpty = false;
		this.userNameEmpty = false;
		ViewModelBase.call(this, coreService);
    }
    LoginViewModel.$inject = ['coreService', 'securityService'];

	LoginViewModel.prototype = Object.create(ViewModelBase.prototype);
	LoginViewModel.prototype.constructor = LoginViewModel;
	LoginViewModel.prototype.login = function(){
		var self = this;
		if(!self.userName){
			self.userNameEmpty = true;
		}
		if(!self.password){
			this.passwordEmpty = true;
		}
		if(self.userName && self.password){
			this.securityService.checkCredentialsAsync(self.userName, self.password).then(function(response){
	            if(response.success){
	            	self.setLocalStorageItem('userName', self.userName);
					self.navigateTo('dashboard');
	            }else{
	            	self.errorLogin = true;
	            	self.errorMessage = response.errors.errorMessage;
	            }
	        });
		}
	};

	fdui.viewModel('loginViewModel', LoginViewModel)

})(fdui.ViewModelBase);
(function () {
    function SimpleViewModel() {

    }

    SimpleViewModel.prototype.hello = function () {

    };

    fdui.viewModel('simpleViewModel', SimpleViewModel);
})();
/*
 * TodoViewModel
 */

'use strict';

(function (ViewModelBase) {
    function TodoViewModel($filter) {
        this.$filter = $filter;

        ViewModelBase.call(this);
    }

    TodoViewModel.$inject = ['$filter'];

    TodoViewModel.prototype = Object.create(ViewModelBase.prototype);
    TodoViewModel.prototype.constructor = TodoViewModel;

    TodoViewModel.prototype.init = function () {
        this.age = this.$filter('date')(new Date(), "dd/MM/yyyy HH:mm:ss sss");

        console.log('init todoViewModel');
    };

    TodoViewModel.prototype.dispose = function () {
        console.log('dispose todoViewModel');
    };

    fdui.viewModel('todoViewModel', TodoViewModel);
})(fdui.ViewModelBase);
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

/*
 * NotificationViewModel
 */

'use strict';

(function (ViewModelBase) {
    function NotificationViewModel() {
        ViewModelBase.call(this);
    }

    NotificationViewModel.prototype = Object.create(ViewModelBase.prototype);
    NotificationViewModel.prototype.constructor = NotificationViewModel;

    NotificationViewModel.prototype.init = function () {
        console.log('init notificationViewModel');
    };

    NotificationViewModel.prototype.dispose = function () {
        console.log('dispose notificationViewModel');
    };

    fdui.viewModel('notificationViewModel', NotificationViewModel);

})(fdui.ViewModelBase);
/*
 * MenuOneViewModel
 */

'use strict';

(function (ViewModelBase) {
    function MenuOneViewModel() {
        ViewModelBase.call(this);
    }

    MenuOneViewModel.prototype = Object.create(ViewModelBase.prototype);
    MenuOneViewModel.prototype.constructor = MenuOneViewModel;

    fdui.viewModel('menuOneViewModel', MenuOneViewModel);

})(fdui.ViewModelBase);
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
(function(ViewModelBase){
    function ChatDetailViewModel(chatsService, $stateParams) {
        this.chatsService = chatsService;
        this.$stateParams = $stateParams;

        ViewModelBase.call(this);
    }

    ChatDetailViewModel.$inject = ['chatsService', '$stateParams'];

    ChatDetailViewModel.prototype = Object.create(ViewModelBase.prototype);
    ChatDetailViewModel.prototype.constructor = ChatDetailViewModel;

    ChatDetailViewModel.prototype.init = function () {
        this.chat = this.chatsService.findById(this.$stateParams.id);
    }

    fdui.viewModel('chatDetailViewModel', ChatDetailViewModel);
})(fdui.ViewModelBase);
(function (ViewModelBase) {
    function ChatsViewModel(chatsService) {
        this.chatService = chatsService;

        ViewModelBase.call(this);
    }

    ChatsViewModel.$inject = ['chatsService'];

    ChatsViewModel.prototype = Object.create(ViewModelBase.prototype);
    ChatsViewModel.prototype.constructor = ChatsViewModel;

    ChatsViewModel.prototype.init = function () {
        this.chats = this.chatService.getAll();
    };


    fdui.viewModel('chatsViewModel', ChatsViewModel);
})(fdui.ViewModelBase);
(function (ServiceBase) {
    function ChatsService($stateParams) {
        this.$stateParams = $stateParams;

        ServiceBase.call(this);
        
        //
        this.chats = [{
            id: 0,
            name: 'Ben Sparrow',
            lastText: 'You on your way?',
            face: 'img/ionic.png'
        }, {
            id: 1,
            name: 'Max Lynx',
            lastText: 'Hey, it\'s me',
            face: 'img/ionic.png'
        }, {
            id: 2,
            name: 'Adam Bradleyson',
            lastText: 'I should buy a boat',
            face: 'img/ionic.png'
        }, {
            id: 3,
            name: 'Perry Governor',
            lastText: 'Look at my mukluks!',
            face: 'img/ionic.png'
        }, {
            id: 4,
            name: 'Mike Harrington',
            lastText: 'This is wicked good ice cream.',
            face: 'img/ionic.png'
        }];

    };

    ChatsService.$inject = ['$stateParams'];

    ChatsService.prototype = Object.create(ServiceBase.prototype);
    ChatsService.prototype.constructor = ChatsService;

    ChatsService.prototype.getAll = function () {
        return this.chats;
    }

    ChatsService.prototype.findById = function (id) {
        for (var i = 0; i < this.chats.length; i++) {
            if (this.chats[i].id === parseInt(id)) {
                return this.chats[i];
            }
        }
        return null;
    };

    fdui.service('chatsService', ChatsService);
})(fdui.ServiceBase);
(function (ServiceBase) {
    function DashboardService() {
        ServiceBase.call(this);
    };

    DashboardService.prototype = Object.create(ServiceBase.prototype);
    DashboardService.prototype.constructor = DashboardService;

    DashboardService.prototype.getTilesSettingsAsync = function () {
        return this.getAsync('/rest/configuration/modules/fdtst10/HOME_PAGE_MODULES');
    };


    fdui.service('dashboardService', DashboardService);
})(fdui.ServiceBase);
(function (ServiceBase) {
    function DocumentService(ServiceBase) {

        ServiceBase.call(this);
    }

    DocumentService.prototype = Object.create(ServiceBase.prototype);
    DocumentService.prototype.constructor = DocumentService;

    DocumentService.prototype.open = function (documentId) {
        //http://cscwebway016v.lsdev.fcg.com:8080/fdui-7.1.0300.04/content/view/09020101800120c0
    };

    fdui.service('documentService', DocumentService);
    

})(fdui.ServiceBase);
'use strict';

(function(ServiceBase){

    function SearchService() {
		ServiceBase.call(this);
	}

	SearchService.prototype = Object.create(ServiceBase.prototype);
	SearchService.prototype.constructor = SearchService;

	SearchService.prototype.getRecentSearchAsync = function (userName) {
	    return this.getAsync('/rest/' + userName + '/recentSearch');
	};

	SearchService.prototype.getSimpleSearchResultAsync = function () {
	    return this.getAsync('/rest/search?keywords=Doc&_dc=1467261494166&page=1&start=0&pagesize=350');
	};

	SearchService.prototype.getSimpleSearchKeywordsAsync = function () {
	    return this.getAsync('/rest/configuration/search/fdtst10?_dc=1467261814013')
	};

	SearchService.prototype.getSavedSearchResultAsync = function () {
	    return this.getAsync('/rest/executefdksavedsearch/09020101800108ea?_dc=1467262127244&page=1&start=0&pagesize=350')
	};

	SearchService.prototype.getSavedSearchKeywordsAsync = function () {
	    return this.getAsync('/rest/fdksavedsearches?ispublic=false&_dc=1467261905532');
	};
	
	fdui.service('searchService', SearchService);
})(fdui.ServiceBase);
/*
 * SecurityService
 */

'use strict';

(function(ServiceBase){
    function SecurityService(){
        ServiceBase.call(this);
    }

    SecurityService.prototype = Object.create(ServiceBase.prototype);
    SecurityService.prototype.constructor = SecurityService;

    SecurityService.prototype.checkCredentialsAsync = function (username, password) {
        var checkCredentialsRequest = "username=" + username + "&password=" + password;
        return this.postAsync('/login/checkcredentials', checkCredentialsRequest);
    };

    fdui.service('securityService', SecurityService);

})(fdui.ServiceBase);

'use strict';
(function (ServiceBase) {
    function ToDoService() {
        ServiceBase.call(this);
    }

    ToDoService.$inject = [];

    ToDoService.prototype = Object.create(ServiceBase.prototype);
    ToDoService.prototype.constructor = ToDoService;

    ToDoService.prototype.getToDoTileAsync = function () {
	    return this.getAsync('/rest/workflow/todolist/0/All%20Documents?isTile=true&_dc=1468315512252');
	};

    fdui.service('todoService', ToDoService);
})(fdui.ServiceBase);

/*
 * testFilter
 */

'use strict';

(function () {
    function TestFilter() {
        return function(input, start) {
            if(input){
                start = +start; //parse to int
                return input.slice(start);
            }
        }
    }

    fdui.filter('testFilter', TestFilter);
})();
