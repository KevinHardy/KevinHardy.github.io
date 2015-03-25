var app = angular.module('resumeApp', ['ngRoute']);

app.config(function($routeProvider) {

	$routeProvider
	.when('/', {
		templateUrl: '/homeTmpl.html'
	})
	.when('/Resume', {
		templateUrl: '/resumeTmpl.html'
	})
	.when('/Contact', {
		templateUrl: '/contactTmpl.html'
	})
	.otherwise({
		redirectTo: '/'
	})

});