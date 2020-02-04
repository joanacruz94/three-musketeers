var keysDown = new Array();
var keys = {left: 37, right: 39, up: 38, down: 40, space: 32, s: 83};

addEventListener("keydown", (e) => { 
	keysDown[e.keyCode] = true;
	
    if([32, 37, 38, 39, 40, 83].indexOf(e.keyCode) > -1) {
        e.preventDefault();
    }
});

addEventListener("keyup", (e) => {
	delete keysDown[e.keyCode];
});
