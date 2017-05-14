/**
 * Created by Andres on 5/13/2017.
 */
(function () {
    "use strict";
    angular
        .module('KeystoneStateApp')
        .controller('NavController',
            [
                NavController
            ]
        );

    function NavController() {
        var vm = this;

        vm.header = [
            {
                href: "#",
                link: "Home"
            },
            {
                href: "#",
                link: "About"
            },
            {
                href: "#",
                link: "Camps"
            },
        ];
    }
}());
