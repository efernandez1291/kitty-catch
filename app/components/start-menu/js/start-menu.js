(function () {

  angular
    .module('KittyCatch.start-menu', [])
    .config(function($stateProvider, $urlRouterProvider) {

      $urlRouterProvider.otherwise('/start-menu');
        
      $stateProvider
            
          // HOME STATES AND NESTED VIEWS ========================================
            .state('start-menu', {
              url: '/start-menu',
              templateUrl: './components/start-menu/start-menu.html',
              controller: 'StartMenuController as startMenu'
            });

    });

})();