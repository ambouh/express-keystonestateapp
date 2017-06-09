/**
 * Created by Andres on 6/9/2017.
 */
(function(){
    "use strict";
    angular
        .module('KeystoneStateApp')
        .controller('MiscController',
            [
                "mainInfo",
                MiscController
            ]);

    function MiscController(mainInfo) {
        var vm = this;

        mainInfo.then(function (response) {
            vm.title = response.data.fag.title;
        });
    }
}());
