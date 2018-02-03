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

.controller('SetUpPageCtrl', function($scope, $state, $ionicPlatform) {

  console.log("SetUp Page");

  // Check that the browser supports getUserMedia.
  // If it doesn't show an alert, otherwise continue.
  if (navigator.getUserMedia) {
    // Request the camera.
    navigator.getUserMedia(
      // Constraints
      {
        video: true
      },

      // Success Callback
      function(localMediaStream) {

      },

      // Error Callback
      function(err) {
        // Log the error to the console.
        console.log('The following error occurred when trying to use getUserMedia: ' + err);
      }
    );

  } else {
    alert('Sorry, your browser does not support getUserMedia');
  }


    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    // document.addEventListener("deviceready", onDeviceReady, false);
    // function onDeviceReady() {
    //     console.log(navigator.device.capture);
    //
    //
    // }

    //console.log(navigator.getUserMedia());
    // navigator.device.capture;
    //
    // var options = {
    //   x: 0,
    //   y: 0,
    //   width: window.screen.width,
    //   height: window.screen.height,
    //   camera: window.cordova.CameraPreview.CAMERA_DIRECTION.BACK,
    //   toBack: false,
    //   tapPhoto: false,
    //   tapFocus: false,
    //   previewDrag: false
    // };
    //
    // window.CameraPreview.startCamera(options);





  // if (window.cordova && window.cordova.plugins) {
  //   let options = {
  //     x: 0,
  //     y: 0,
  //     width: window.screen.width,
  //     height: window.screen.height,
  //     camera: cordova.plugins.CameraPreview.CAMERA_DIRECTION.BACK,
  //     toBack: false,
  //     tapPhoto: false,
  //     tapFocus: false,
  //     previewDrag: false
  //   };
  //
  //   cordova.plugins.CameraPreview.startCamera(options);
  // }



  // function handleSuccess(stream) {
  //   var videoTracks = stream.getVideoTracks();
  //   console.log('Got stream with constraints:', constraints);
  //   console.log('Using video device: ' + videoTracks[0].label);
  //   stream.oninactive = function() {
  //     console.log('Stream inactive');
  //   };
  //   window.stream = stream; // make variable available to browser console
  //   video.srcObject = stream;
  // }

  // var errorElement = document.querySelector('#errorMsg');
  // var video = document.querySelector('video');
  //
  // // Put variables in global scope to make them available to the browser console.
  // var constraints = window.constraints = {
  //   audio: false,
  //   video: true
  // };
  //
  // function handleSuccess(stream) {
  //   var videoTracks = stream.getVideoTracks();
  //   console.log('Got stream with constraints:', constraints);
  //   console.log('Using video device: ' + videoTracks[0].label);
  //   stream.oninactive = function() {
  //     console.log('Stream inactive');
  //   };
  //   window.stream = stream; // make variable available to browser console
  //   video.srcObject = stream;
  // }
  //
  // function handleError(error) {
  //   if (error.name === 'ConstraintNotSatisfiedError') {
  //     errorMsg('The resolution ' + constraints.video.width.exact + 'x' +
  //         constraints.video.width.exact + ' px is not supported by your device.');
  //   } else if (error.name === 'PermissionDeniedError') {
  //     errorMsg('Permissions have not been granted to use your camera and ' +
  //       'microphone, you need to allow the page access to your devices in ' +
  //       'order for the demo to work.');
  //   }
  //   errorMsg('getUserMedia error: ' + error.name, error);
  // }
  //
  // function errorMsg(msg, error) {
  //   errorElement.innerHTML += '<p>' + msg + '</p>';
  //   if (typeof error !== 'undefined') {
  //     console.error(error);
  //   }
  // }
  //
  // navigator.devices.getUserMedia(constraints).
  //     then(handleSuccess).catch(handleError);

  $scope.sliderValue = 50;

  $scope.sliderChanged = function(){
    var sliderValue = document.getElementById("slider").value;
    console.log(sliderValue);

    var redBox = document.getElementById("redBox");

    redBox.style.width = "" + 1*sliderValue + "" + "vw";
    redBox.style.height = sliderValue*0.9 + "vh";
  }

  $scope.goToLbwPage = function() {
      $state.go('lbwPage');
  };

})

.controller('LbwPageCtrl', function($scope, $state, $window) {

  $scope.goToDecisionPage = function() {
      $state.go('decisionPage');
  };

})

.controller('DecisionPageCtrl', function($scope, $state, $ionicHistory, $window) {
  // var scene = new THREE.Scene();
  // console.log(scene)
  // var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
  //
  // var renderer = new THREE.WebGLRenderer();
  // renderer.setSize( window.innerWidth, window.innerHeight );
  // document.body.appendChild( renderer.domElement );
  //
  // var geometry = new THREE.BoxGeometry( 1, 1, 1 );
  // var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
  // var cube = new THREE.Mesh( geometry, material );
  // scene.add( cube );
  //
  // camera.position.z = 5;
  //
  // var animate = function () {
  //   requestAnimationFrame( animate );
  //
  //   cube.rotation.x += 0.1;
  //   cube.rotation.y += 0.1;
  //
  //   renderer.render(scene, camera);
  // };
  //
  // animate();

  $ionicHistory.nextViewOptions({
    disableBack: true
  });

  $scope.goToHomePage = function() {
      $state.go('homePage');
  };

});
