(function() {
  angular
    .module('KittyCatch.game')
    .controller('GameController', GameController);

    GameController.$inject = [];

    function GameController() {

    	var game = this;

        //set the touch reciever to the width of the screen
        game.screen = {
            'width': window.innerWidth + 'px',
            'height': window.innerHeight + 'px',
        };

        //Create Variable for boyRunning css
        game.boyRunning = {};

        //Run when finger drags left
        game.boyMoveLeft = function(event) {

            //Get Finger Position
            fingerPosition = event.center.x + "px";

            //Set css
            game.boyRunning = {
                'left': fingerPosition,
            };

            //Show boy running left
            if ( document.getElementById('boy').getAttribute('src') != '../img/boy_running_left.svg' ) {
                document.getElementById('boy').setAttribute('src', '../img/boy_running_left.svg');
            }

            doElsCollide = function(el1, el2) {
                el1.offsetBottom = el1.offsetTop + el1.offsetHeight;
                el1.offsetRight = el1.offsetLeft + el1.offsetWidth;
                el2.offsetBottom = el2.offsetTop + el2.offsetHeight;
                el2.offsetRight = el2.offsetLeft + el2.offsetWidth;
                
                return !((el1.offsetBottom < el2.offsetTop) ||
                         (el1.offsetTop > el2.offsetBottom) ||
                         (el1.offsetRight < el2.offsetLeft) ||
                         (el1.offsetLeft > el2.offsetRight))
            };

            var el1 = document.getElementById('boy'),
                el2 = document.getElementById('cat');

            console.log(doElsCollide(el1, el2));

        }

        //Run when finger drags right
        game.boyMoveRight = function(event) {

            //Get Finger Position
            fingerPosition = event.center.x + "px";

            //Set css left of the boy to finger position
            game.boyRunning = {
                'left': fingerPosition, 
            };

            //Show boy running left
            if ( document.getElementById('boy').getAttribute('src') != '../img/boy_running_right.svg' ) {
                document.getElementById('boy').setAttribute('src', '../img/boy_running_right.svg');
            }

            doElsCollide = function(el1, el2) {
                el1.offsetBottom = el1.offsetTop + el1.offsetHeight;
                el1.offsetRight = el1.offsetLeft + el1.offsetWidth;
                el2.offsetBottom = el2.offsetTop + el2.offsetHeight;
                el2.offsetRight = el2.offsetLeft + el2.offsetWidth;
                
                return !((el1.offsetBottom < el2.offsetTop) ||
                         (el1.offsetTop > el2.offsetBottom) ||
                         (el1.offsetRight < el2.offsetLeft) ||
                         (el1.offsetLeft > el2.offsetRight))
            };

            var el1 = document.getElementById('boy'),
                el2 = document.getElementById('cat');

            console.log(doElsCollide(el1, el2));

        }

        //Run when finger lifts up
        game.boyStop = function() {

            //Set direction of boy img
            switch ( document.getElementById('boy').getAttribute('src') ) {
                
                case '../img/boy_running_right.svg':

                    //Change to image of boy facing right
                    document.getElementById('boy').setAttribute('src', '../img/boy_right.svg')
                    break;

                case '../img/boy_running_left.svg':

                    //Change to image of boy facing left
                    document.getElementById('boy').setAttribute('src', '../img/boy_left.svg')
                    break;
            
            }

            doElsCollide = function(el1, el2) {
                el1.offsetBottom = el1.offsetTop + el1.offsetHeight;
                el1.offsetRight = el1.offsetLeft + el1.offsetWidth;
                el2.offsetBottom = el2.offsetTop + el2.offsetHeight;
                el2.offsetRight = el2.offsetLeft + el2.offsetWidth;
                
                return !((el1.offsetBottom < el2.offsetTop) ||
                         (el1.offsetTop > el2.offsetBottom) ||
                         (el1.offsetRight < el2.offsetLeft) ||
                         (el1.offsetLeft > el2.offsetRight))
            };

            var el1 = document.getElementById('boy'),
                el2 = document.getElementById('cat');

            console.log(doElsCollide(el1, el2));


        }

    }
})();