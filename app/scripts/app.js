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
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
      $locationProvider.html5Mode(true);
  });