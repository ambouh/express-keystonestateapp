/**
 * Created by Andres on 5/13/2017.
 */
(function () {
    "use strict";
    var app = angular.module('KeystoneStateApp', []);
        app.run(allScripts);

    //functions
    function allScripts() {
        dropdownFadeInOut();
    }
    function dropdownFadeInOut() {
        $(".pull-right").hover(
            function(){
                $(".dropdown-menu",this).fadeIn()
            },
            function(){
                $(".dropdown-menu",this).fadeOut("fast")
            }
        );
    }
}());