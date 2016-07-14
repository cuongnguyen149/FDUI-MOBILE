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