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