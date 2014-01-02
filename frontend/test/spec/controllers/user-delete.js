'use strict';

describe('Controller: UserDeleteCtrl', function () {

  // load the controller's module
  beforeEach(module('restExampleFeApp'));

  var UserDeleteCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    UserDeleteCtrl = $controller('UserDeleteCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
