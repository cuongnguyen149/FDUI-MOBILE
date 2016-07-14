(function () {
    fdui.provider('securityProvider', [function () {
        this.$get = [function () {
            return {
                'request': function (config) {

                    return config;
                }
            }
        }];

    }]);
})();
