/**
 * Created by Andres on 6/9/2017.
 */
(function(){
    "use strict";
    angular
        .module('KeystoneStateApp')
        .controller('ContactController',
            [
                "mainInfo",
                ContactController
            ]);

    function ContactController(mainInfo) {
        var vm = this;

        mainInfo.then(function (response) {
            vm.title = response.data.contact.title;
            vm.google_map = response.data.contact.google_map;
        });
    }
}());