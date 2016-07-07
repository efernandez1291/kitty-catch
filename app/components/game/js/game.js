(function () {

  angular
    .module('KittyCatch.game', [])
    .config(function($stateProvider, $urlRouterProvider) {
        
      $stateProvider
            
          // HOME STATES AND NESTED VIEWS ========================================
            .state('game', {
              url: '/game',
              templateUrl: './components/game/game.html',
              controller: 'GameController as game'
            });

    });

})();