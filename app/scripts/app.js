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
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/inscription', {
        templateUrl: 'views/inscription.html',
        controller: 'InscriptionCtrl'
      })
      .when('/admin/inscriptions', {
        templateUrl: 'views/inscriptions.html',
        controller: 'InscriptionsController'
      })
      .when('/admin/login', {
        templateUrl: 'views/login.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  });