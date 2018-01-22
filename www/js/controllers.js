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

  // Not showing vendor prefixes.
  console.log("HEYYYY")

  var errorElement = document.querySelector('#errorMsg');
  var video = document.querySelector('video');

  // Put variables in global scope to make them available to the browser console.
  var constraints = window.constraints = {
    audio: false,
    video: true
  };

  function handleSuccess(stream) {
    var videoTracks = stream.getVideoTracks();
    console.log('Got stream with constraints:', constraints);
    console.log('Using video device: ' + videoTracks[0].label);
    stream.oninactive = function() {
      console.log('Stream inactive');
    };
    window.stream = stream; // make variable available to browser console
    video.srcObject = stream;
  }

  function handleError(error) {
    if (error.name === 'ConstraintNotSatisfiedError') {
      errorMsg('The resolution ' + constraints.video.width.exact + 'x' +
          constraints.video.width.exact + ' px is not supported by your device.');
    } else if (error.name === 'PermissionDeniedError') {
      errorMsg('Permissions have not been granted to use your camera and ' +
        'microphone, you need to allow the page access to your devices in ' +
        'order for the demo to work.');
    }
    errorMsg('getUserMedia error: ' + error.name, error);
  }

  function errorMsg(msg, error) {
    errorElement.innerHTML += '<p>' + msg + '</p>';
    if (typeof error !== 'undefined') {
      console.error(error);
    }
  }

  navigator.mediaDevices.getUserMedia(constraints).
      then(handleSuccess).catch(handleError);

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
