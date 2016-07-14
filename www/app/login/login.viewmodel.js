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