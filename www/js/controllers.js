angular.module('starter.controllers', [])

.controller('HomePageCtrl', function($scope, $state) {

  $scope.goToInstructionsPage = function() {
      $state.go('instructionsPage');
  };

})

.controller('InstructionsPageCtrl', function($scope, $state) {

  $scope.goToSetUpPage = function() {
      $state.go('setUpPage');
  };

})

.controller('SetUpPageCtrl', function($scope, $state) {

  $scope.goToLbwPage = function() {
      $state.go('lbwPage');
  };

})

.controller('LbwPageCtrl', function($scope, $state) {
  
  $scope.goToDecisionPage = function() {
      $state.go('decisionPage');
  };

})

.controller('DecisionPageCtrl', function($scope, $state, $ionicHistory) {

  $ionicHistory.nextViewOptions({
    disableBack: true
  });

  $scope.goToHomePage = function() {
      $state.go('homePage');
  };

});
