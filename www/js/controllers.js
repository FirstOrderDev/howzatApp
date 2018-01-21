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

  // Grab elements, create settings, etc.
  var video = document.getElementById('video');

  // Get access to the camera!
  if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      // Not adding `{ audio: true }` since we only want video now
      navigator.mediaDevices.getUserMedia({ video: true }).then(function(stream) {
          video.src = window.URL.createObjectURL(stream);
          video.play();
      });
  }
  
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
