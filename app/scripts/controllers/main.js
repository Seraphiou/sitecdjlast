'use strict';

/**
 * @ngdoc function
 * @name leSiteDuCampDeJeunesApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the leSiteDuCampDeJeunesApp
 */
angular.module('leSiteDuCampDeJeunesApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.dateDuCamp=new Date('2015-07-25').getTime();

  });
