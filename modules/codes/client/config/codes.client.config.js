(function () {
  'use strict';

  angular
    .module('codes')
    .run(menuConfig);

  menuConfig.$inject = ['Menus'];

  function menuConfig(Menus) {
    // Set top bar menu items
    Menus.addMenuItem('topbar', {
      title: 'Codes',
      state: 'codes',
      type: 'dropdown',
      roles: ['*']
    });

    // Add the dropdown list item
    Menus.addSubMenuItem('topbar', 'codes', {
      title: 'List Codes',
      state: 'codes.list'
    });

    // Add the dropdown create item
    Menus.addSubMenuItem('topbar', 'codes', {
      title: 'Create Code',
      state: 'codes.create',
      roles: ['user']
    });
  }
})();
