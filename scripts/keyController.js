var keysDown = new Array();
var keys = {left: 37, right: 39, up: 38, down: 40};

addEventListener("keydown", (e) => { 
	keysDown[e.keyCode] = true;
	
    if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
    }
}, false);

addEventListener("keyup", (e) => {
	delete keysDown[e.keyCode];
}, false);


addEventListener("keydown", (e) => {
    e.preventDefault();
    switch(event.keyCode){
        case 32:
            game.control('jump');
        break;
    }
})