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
            /*shortening variables for camps content*/
            vm.camps = response.data.camps;

            var c, allCamps;
            c = vm.camps;
            allCamps = c.types[0];

            /*declaring vm.'variable' */
            vm.title = c.title;
            vm.fullDesc = allCamps.fullDesc;
            vm.th = c.th;
            vm.td = c.td;
        });
    }
}());