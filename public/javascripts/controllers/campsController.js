/**
 * Created by Andres on 6/8/2017.
 */
(function(){
    "use strict";
    angular
        .module('KeystoneStateApp')
        .controller('CampsController',
            [
                "mainInfo",
                CampsController
            ]);

    function CampsController(mainInfo) {
        var vm = this;

        mainInfo.then(function (response) {
            vm.title = response.data.camps.title;
        });
    }
}());