'use strict';


angular.module('leSiteDuCampDeJeunesApp')
  .controller('MainCtrl', function ($scope, $location, $anchorScroll, $sce, inscriptionService, anchorSmoothScroll ) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.goToInscription = function(){
        $location.path('/inscription');
    };
    
	$scope.trustSrc = function(src) {
	    return $sce.trustAsResourceUrl(src);
	};

    $scope.scrollToId=
        function(id){
          anchorSmoothScroll.scrollTo(id);
        };

    $scope.dateDuCamp=new Date('2016-07-15').getTime();

	$scope.campusOptions=[
	'Paris(Campus Principal)',
	'Brazzaville',
	'Bruxelles',
	'Pointe Noire',
	'Cergy',
	'Guadeloupe',
	'Martinique',
	'Cotonou',
	'Lyon',
	'Montréal',
	'Rouen',
	'Tours',
	'Toulouse',
	'Lausanne'
	];
	$scope.videos=[
		{
			title:'Presentation CDJ2016',
			url:'https://www.youtube.com/v/VPN9eap1VxM?enablejsapi=1&version=3&playerapiid=ytplayer'
		},
		{
			title:'Presentation CDJ2016',
			url:'https://www.youtube.com/v/fhkYqgz4F6I?enablejsapi=1&version=3&playerapiid=ytplayer'
		}
	];
	$scope.sendConfirmation = function(){
        inscriptionService.storeConfirmation($scope.name, $scope.firstname, $scope.email, $scope.phoneNumber, $scope.postalAddress, $scope.postalCode, $scope.city, $scope.country, $scope.birthday, $scope.isICC, $scope.campusName).then(
    		function(data) {
                if (data.indexOf('An error occured')===-1) {
                    $location.path('/inscription');
                }else{
                }
    		}, function(error) {
    			$scope.error = error;
    		}
    	);
    };
  });
angular.module('leSiteDuCampDeJeunesApp').service('inscriptionService', ['$http', '$q', function($http, $q) {

    this.storeConfirmation = function(name, firstname, email, phoneNumber, postalAddress, postalCode, city, country, birthday, isICC, campusName){
        var def = $q.defer();

        var inscriptionJson= {
            'name': name,
            'firstname': firstname,
        	'email': email,
            'postalAddress':postalAddress,
            'postalCode': postalCode,
            'city': city,
            'country': country,
            'iccMember': isICC,
            'campus': campusName,
            'birthday': birthday,
            'phoneNumber': phoneNumber
        };

        $http.post('inscription.php', inscriptionJson)
            .success(
				function(data) {
					def.resolve(data);
				}
            )
            .error(
				function(error) {
					def.reject('Failed to store : ' + error);
				}
            );
        return def.promise;
    };
}]);
