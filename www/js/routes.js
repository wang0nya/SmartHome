angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('home', {
    url: '/home',
    templateUrl: 'templates/home.html',
    controller: 'homeCtrl'
  })

  .state('tabs.dashboard', {
    url: '/dashboard',
    views: {
      'dashboard': {
    templateUrl: 'templates/dashboard.html',
    controller: 'dashboardCtrl'
      }
    }
  })

  .state('lightControl', {
    url: '/lightcontrol',
    templateUrl: 'templates/lightControl.html',
    controller: 'lightControlCtrl'
  })

  .state('airConditioning', {
    url: '/airconditioning',
    templateUrl: 'templates/airConditioning.html',
    controller: 'airConditioningCtrl'
  })

  .state('securityControl', {
    url: '/securitycontrol',
    templateUrl: 'templates/securityControl.html',
    controller: 'securityControlCtrl'
  })

  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('tabs.stats', {
    url: '/stats',
    views: {
      'stats': {
    templateUrl: 'templates/stats.html',
    controller: 'statsCtrl'
      }
    }
  })

  .state('tabs.trouble', {
    url: '/trouble',
    views: {
      'trouble': {
    templateUrl: 'templates/troubleshoot.html',
    controller: 'troubleCtrl'
      }
    }
  })

  .state('tabs', {
 url: "/tabs",
 abstract: true,
 templateUrl: "templates/tabs.html"
 })

$urlRouterProvider.otherwise('/home')

  

});