/**
 * Created by Andres on 5/29/2017.
 */
(function () {
    "use strict";
    angular
        .module('KeystoneStateApp')
        .controller('HomeController',
            [
                "mainInfo",
                HomeController
            ]
        )

    function HomeController(mainInfo) {
        var vm = this;
        mainInfo.then(function(response) {
            vm.home = response.data.home;
            vm.welcome = response.data.home.welcome;
            vm.camps = response.data.camps;
            vm.display = response.data.home.display;
            vm.alumni = response.data.home.alumni;
            vm.blog = response.data.home.blog;
        });
    }
}());
