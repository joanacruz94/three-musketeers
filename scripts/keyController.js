var keysDown = new Array;
var keys = {left: 37, right: 39, up: 38, down: 40, space: 32, esc: 27};

addEventListener("keydown", function (e) {
	keysDown[e.keyCode] = true;
	
    if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
    }
}, false);

addEventListener("keyup", function (e) {
	delete keysDown[e.keyCode];
}, false);