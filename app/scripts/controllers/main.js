'use strict';


angular.module('leSiteDuCampDeJeunesApp')
  .controller('MainCtrl', function ($scope, $location, $anchorScroll, $sce, inscriptionService, anchorSmoothScroll, faqService, videoService ) {
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
    faqService.getFaq().then(
        function(faq){
            $scope.faq=faq;
        }, function(error){
            console.log('An error occurred : '+error+'.');
        });
    
    videoService.getVideos().then(
        function(videos){
            $scope.videos=videos;
        }, function(error){
            console.log('An error occurred : '+error+'.');
        });
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

angular.module('leSiteDuCampDeJeunesApp').service('faqService', ['$http', '$q', function($http, $q) {

    this.getFaq = function(){
        var def = $q.defer();

        $http.get('http://campjeunesseicc.apispark.net/v1/faqCats/')
            .success(
                function(data) {
                    def.resolve(data);
                }
            )
            .error(
                function(error) {
                    def.reject('Failed to get faqs : ' + error);
                }
            );
        return def.promise;
    };
}]);
angular.module('leSiteDuCampDeJeunesApp').service('videoService', ['$http', '$q', function($http, $q) {

    this.getVideos = function(){
        var def = $q.defer();

        $http.get('http://campjeunesseicc.apispark.net/v1/videos/')
            .success(
                function(data) {
                    def.resolve(data);
                }
            )
            .error(
                function(error) {
                    def.reject('Failed to get videos : ' + error);
                }
            );
        return def.promise;
    };
}]);
