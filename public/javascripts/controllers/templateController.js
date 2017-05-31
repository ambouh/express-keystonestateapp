/**
 * Created by Andres on 5/13/2017.
 */
(function () {
    "use strict";
    angular
        .module('KeystoneStateApp')
        .controller('TemplateController',
        [
            "mainInfo",
            TemplateController
        ]
    )

    function TemplateController(mainInfo) {
        var vm = this;
       mainInfo.then(function(response) {
           vm.header = response.data.template.header;
           vm.footer = response.data.template.footer;
       });
    }
}());
