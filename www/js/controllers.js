angular.module('pgt.controllers', ['uiGmapgoogle-maps'])

.controller('MapCtrl', function($scope) {
  $scope.map = {
    center: {
        latitude:  25.675769,
        longitude: -100.239579
      },
      zoom: 16,
      options: {
        scrollwheel: false,
        minZoom: 12,
        maxZoom: 18,
        streetViewControl: false,
        rotateControl: false,
        panControl: false,
        draggable: true
      },
      control: {}
  };

  $scope.circle = {
    center: {
        latitude: 25.675769,
        longitude: -100.239759
    },
    radius: 300,
    stroke: {
        color: '#29dd12',
        weight: 2,
        opacity: 1
    },
    fill: {
        color: '#ffffff',
        opacity: 0.15
    },
    draggable: false,
    editable: false
  };
})

.controller('AppCtrl', function($scope, $ionicModal, $timeout, $ionicPopup) {
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeAbout = function() {
    $scope.modal.hide();
  };

  $scope.showAbout = function() {
   var alertPopup = $ionicPopup.alert({
     title: 'Acerca de',
     templateUrl: "templates/acerca_de.html"
   });
  }

  // Open the login modal
  $scope.about = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeAbout();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('NoticiasCtrl', function($scope, $http) {
  $scope.noticias = [
  {
    titulo: "Noticia 1",
    sub: "Subtitulo 1",
    imagen: "1"
  },
  {
    titulo: "Noticia 2",
    sub: "Subtitulo 2",
    imagen: "2"
  },
  {
    titulo: "Noticia 3",
    sub: "Subtitulo 3",
    imagen: "3"
  },
  {
    titulo: "Noticia 1",
    sub: "Subtitulo 1",
    imagen: "1"
  },
  ];
});







