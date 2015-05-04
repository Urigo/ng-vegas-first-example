angular.module("vegasParties").controller("PartiesListCtrl",
  function($scope, $meteor){

    $scope.parties = $meteor.collection(Parties);

    $scope.remove = function(party){
      $scope.parties.splice( $scope.parties.indexOf(party), 1 );
    };

    $scope.removeAll = function(){
      $scope.parties.remove();
    };

    $scope.getPicture = function() {
      $meteor.getPicture().then(function(imageData) {
        $scope.parties[0].imageData = imageData;
      });
    };
});