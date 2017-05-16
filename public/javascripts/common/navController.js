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

        vm.header = {
                logo:[
                    {
                        classNames: "hidden-xs hidden-sm visible-md visible-lg",
                        pictureUrl: "images/logo.png",
                    },
                    {
                        classNames: "hidden-lg hidden-xs hidden-md visible-sm",
                        pictureUrl: "images/logo-md.png",
                    },
                    {
                        classNames: "hidden-lg hidden-md visible-xs",
                        pictureUrl: "images/logo-sm.png",
                    },
                ],

                links:[
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
                    }
                ]
    };
    }
}());
