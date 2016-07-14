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