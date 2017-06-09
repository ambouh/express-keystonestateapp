/**
 * Created by Andres on 6/9/2017.
 */
(function(){
    "use strict";
    angular
        .module('KeystoneStateApp')
        .controller('SignupController',
            [
                "mainInfo",
                SignupController
            ]);

    function SignupController(mainInfo) {
        var vm = this;

        mainInfo.then(function (response) {
            vm.title = response.data.signUp.title;
        });
    }
}());
