(function() {
  angular
    .module('KittyCatch.start-menu')
    .controller('StartMenuController', StartMenuController);

    StartMenuController.$inject = ['$state'];

    function StartMenuController($state) {

    	var startMenu = this;

    	startMenu.startGame = function () {

    		$state.go('game');

    	}

    }
})();