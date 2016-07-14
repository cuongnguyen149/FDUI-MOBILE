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