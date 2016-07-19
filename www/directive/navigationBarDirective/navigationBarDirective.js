
/*
 * navigationBarDirective
 */

'use strict';

(function () {
    function NavigationBarDirective() {
    	var controller = ['$scope', '$ionicPopover', '$ionicPopup', function ($scope, $ionicPopover, $ionicPopup) {
    		
	        $ionicPopover.fromTemplateUrl('./dialog/popOver/popOverUser.html', {
			    scope: $scope,
			}).then(function(popOverUser) {
			    $scope.popOverUser = popOverUser;
			    $scope.logoutClick = function(){
					$ionicPopup.show({
				      title: 'Logout Confirmation',
				      templateUrl: './dialog/popUp/popUpLogout.html',
				      scope: $scope,
				      buttons: [{
				        text: '<b>Yes</b>',
				        type: '',
				        onTap: function(e) {
				          //do stuff
				        }
				      }, {
				        text: 'No'
				      }]
				    });
			    };
			});

			$ionicPopover.fromTemplateUrl('./dialog/popOver/popOverMore.html', {
			    scope: $scope,
			}).then(function(popOverMore) {
			    $scope.popOverMore = popOverMore;
			    
			});
    		
	    }];

        return {
        	replace: true,
		    templateUrl: './directive/navigationBarDirective/navigationBarDirective.html',
		    controller: controller,
		};
    }

    fdui.directive('navigationBarDirective', NavigationBarDirective);
})();
