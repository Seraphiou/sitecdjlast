'use strict';
/**
 * @ngdoc overview
 * @name leSiteDuCampDeJeunesApp
 * @description
 * # leSiteDuCampDeJeunesApp
 *
 * Main module of the application.
 */
angular
  .module('leSiteDuCampDeJeunesApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'timer',
    'angular-carousel',
    'slick'
  ])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/inscription', {
        templateUrl: 'views/inscription.html',
        controller: 'InscriptionCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
      $locationProvider.html5Mode(true);
  });