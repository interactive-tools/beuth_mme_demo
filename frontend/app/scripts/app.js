'use strict';

/**
 * This is the main configuration for the client app.
 *
 * It starts with a list of all modules.
 */
angular.module('restExampleFeApp', [
'ngCookies',
'ngResource',
'ngSanitize',
'ngRoute',
'restangular',
'angular-flash.service', 
'angular-flash.flash-alert-directive'
])
/**
 * Configuration of the Restangular module which is used for talking to the backend
 */
.config(function(RestangularProvider) {
	//Set the base URL that points to the bakend app
	RestangularProvider.setBaseUrl('http://192.168.0.133:3000');
})
/**
 * Routing configuration.
 * Assigns routes to templates and controller classes
 */
.config(function($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'views/user-list.html',
		controller: 'UsersCtrl'
	})
	.when('/users/show/:userId', {
		templateUrl: 'views/user-show.html',
		controller: 'UserCtrl'
	})
	.when('/users/edit/:userId', {
		templateUrl: 'views/user-edit.html',
		controller: 'UserEditCtrl'
	})
	.when('/users/create', {
		templateUrl: 'views/user-create.html',
		controller: 'UserCreateCtrl'
	})
	.when('/users/delete/:userId', {
		templateUrl: 'views/blank.html',
		controller: 'UserDeleteCtrl'
	})
	.otherwise({
		redirectTo: '/'
	});
})
/**
 * Configuration of the flash messenger which is used to display notifications 
 */
.config(function (flashProvider) {

	// Support bootstrap 3.0 "alert-danger" class with error flash types
	flashProvider.errorClassnames.push('alert-danger');

	/**
	* Also have...
	*
	* flashProvider.warnClassnames
	* flashProvider.infoClassnames
	* flashProvider.successClassnames
	*/

});
