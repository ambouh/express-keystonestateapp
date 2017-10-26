/**
 * Created by Andres on 6/9/2017.
 */
/**
 * Created by Andres on 6/8/2017.
 */
(function(){
    "use strict";
    angular
        .module('KeystoneStateApp')
        .controller('AboutController',
            [
                "mainInfo",
                AboutController
            ]);

    function AboutController(mainInfo) {
        var vm = this;

        mainInfo.then(function (response) {
            vm.title = response.data.about.title;
            vm.coaches = response.data.about.coaches;
        });
    }
}());
