var app = angular.module('resumeApp' ['ngRoute']);

app.config(function($routeProvider) {

	$routeProvider
	.when('/', {
		templateUrl: '/homeTmpl.html',
		controller: 'mainCtrl'
	})
	.when('/Resume', {
		templateUrl: '/resumeTmpl.html',
		controller: 'mainCtrl'
	})
	.when('/Contact', {
		templateUrl: '/contactTmpl.html',
		controller: 'mainCtrl'
	})
	.otherwise({
		redirectTo: '/'
	})

});