/**
 * Created by Andres on 6/8/2017.
 */
(function(){
    "use strict";
    angular
        .module('KeystoneStateApp')
        .controller('CampsController',
            [
                "allCamps",
                CampsController
            ])
        .controller('CampController', ["camp", "$state", CampController]);

    function CampsController(allCamps) {
        var vm = this;

        vm.title="All Camps";
        vm.allCamps = allCamps;
        vm.th = ["camps", "date", "grades", "cost", "sign-up?", "persons list"];
        //console.log(vm.allCamps);
    }

    function CampController(camp, $state) {
        var vm = this;
        vm.camp = camp;
        vm.person = {
            firstName: "",
            lastName: ""
        };

        var nameOfPerson = vm.person.firstName + " " + vm.person.lastName;

        vm.addPerson = function (firstName, lastName) {
            nameOfPerson = firstName + " " + lastName;
            vm.camp.persons.push(nameOfPerson);
            //save permanently somehow back into the fakeBackend
            vm.camp.$save();
            console.log(vm.camp);
            vm.person.firstName = "";
            vm.person.lastName = "";
            $state.go('camp.listOfPersons');
        };

        vm.deletePerson = function (person) {
            var persons = vm.camp.persons;
            for(var i = 0; i < persons.length; i++) {
                if (persons[i] == person) {
                    persons.splice(i, 1);
                    break;
                }
            }

            vm.camp.$save();

            console.log(persons);
        }
    }
}());