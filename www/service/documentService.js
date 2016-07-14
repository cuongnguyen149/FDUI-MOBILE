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