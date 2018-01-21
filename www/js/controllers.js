angular.module('starter.controllers', [])

.controller('HomePageCtrl', function($scope, $state) {
  $scope.options = {
    loop: false,
    speed: 500,
  }

  $scope.$on("$ionicSlides.sliderInitialized", function(event, data){
    // data.slider is the instance of Swiper
    $scope.slider = data.slider;
  });

  $scope.$on("$ionicSlides.slideChangeStart", function(event, data){
    console.log('Slide change is beginning');
  });

  $scope.$on("$ionicSlides.slideChangeEnd", function(event, data){
    // note: the indexes are 0-based
    $scope.activeIndex = data.slider.activeIndex;
    $scope.previousIndex = data.slider.previousIndex;
  });

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
