'use strict';

/**
 * @ngdoc function
 * @name leSiteDuCampDeJeunesApp.controller:headerCtrl
 * @description
 * # headerCtrl
 * Controller of the leSiteDuCampDeJeunesApp
 */

/**
 * @ngdoc function
 * @name leSiteDuCampDeJeunesApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the leSiteDuCampDeJeunesApp
 */
  angular.module('leSiteDuCampDeJeunesApp').service('anchorSmoothScroll', function(){

    this.scrollTo = function(eID) {

        // This scrolling function 
        // is from http://www.itnewb.com/tutorial/Creating-the-Smooth-Scroll-Effect-with-JavaScript

        
        function currentYPosition() {
            
            // Firefox, Chrome, Opera, Safari
            if (window.self.pageYOffset) {
                return window.self.pageYOffset;
            }
            // Internet Explorer 6 - standards mode
            if (document.documentElement && document.documentElement.scrollTop) {
                return document.documentElement.scrollTop;
            }
            // Internet Explorer 6, 7 and 8
            if (document.body.scrollTop){
                return document.body.scrollTop;
            }
            return 0;
        }
        
        function elmYPosition(eID) {
            var elm = document.getElementById(eID);
            var y = elm.offsetTop;
            var node = elm;
            while (node.offsetParent && node.offsetParent !== document.body) {
                node = node.offsetParent;
                y += node.offsetTop;
            } return y;
        }

        var startY = currentYPosition();
        var stopY = elmYPosition(eID);
        var distance = stopY > startY ? stopY - startY : startY - stopY;
        if (distance < 100) {
            scrollTo(0, stopY);
            return;
        }
        var speed = Math.round(distance / 100);
        if (speed >= 20){ 
            speed = 20;
        }
        var step = Math.round(distance / 25);
        var leapY = stopY > startY ? startY + step : startY - step;
        var timer = 0;
        if (stopY > startY) {
            for ( var i=startY; i<stopY; i+=step ) {
                setTimeout('window.scrollTo(0, '+leapY+')', timer * speed);
                leapY += step;
                if (leapY > stopY){
                    leapY = stopY;
                }
                timer++;
            }

            return;
        }
        for ( var j=startY; j>stopY; j-=step ) {
            setTimeout('window.scrollTo(0, '+leapY+')', timer * speed);
            leapY -= step;
            if (leapY < stopY){
                leapY = stopY;
            }
            timer++;
        }
    };
    
});
angular.module('leSiteDuCampDeJeunesApp').directive('scrollindex', function ($window) {
    return function(scope) {
        angular.element($window).bind('scroll', function() {

            
            function elmBottomYPosition(eID) {
                var elm = document.getElementById(eID);
                if(elm){
                    var ybottom = elm.offsetTop;
                    var node = elm;
                    while (node.offsetParent && node.offsetParent !== document.body) {
                        node = node.offsetParent;
                        ybottom += node.offsetTop;
                    } return ybottom;
                }
            }
            
            var iconGroup=elmBottomYPosition('icon-group');
            if(this.pageYOffset+$window.innerHeight>iconGroup){
                angular.element('.social-section').addClass('start-animation');
            }
            scope.$apply();
        });
    };
});