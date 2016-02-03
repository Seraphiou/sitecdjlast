'use strict';

angular.module('leSiteDuCampDeJeunesApp').service('inscriptionsService', ['$http', '$q', function($http, $q) {

    this.inscriptions = function(){
        var def = $q.defer();

        $http.get('getInscriptions.php')
            .success(
                function(data) {
                    def.resolve(data);
                }
            )
            .error(
                function() {
                    def.reject('Failed to get albums');
                }
            );
        return def.promise;
    };
}]);



angular.module('leSiteDuCampDeJeunesApp').controller('InscriptionsController', function ($scope, $window ,inscriptionsService) {

	$scope.inscriptions=[];

    inscriptionsService.inscriptions().then(
        function(data) {
            $scope.inscriptions = data;
        }, function(error) {
            $scope.error = error;
        }
    );
});