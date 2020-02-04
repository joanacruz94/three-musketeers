const $canvas = document.querySelector('canvas');

const game = new Game($canvas);

const $$levelsList = document.getElementsByClassName('btn btn-secondary');

const $levelOne = $$levelsList[0];
const $levelTwo = $$levelsList[1];
const $levelThree = $$levelsList[2];
const $levelFour = $$levelsList[3];
const $levelFive = $$levelsList[4];

/*
$levelOne.addEventListener('click', () => {game.startLevel(1);});
$levelTwo.addEventListener('click', () => {game.startLevel(2);});
$levelThree.addEventListener('click', () => {game.startLevel(3);});
$levelFour.addEventListener('click', () => {game.startLevel(4);});
$levelFive.addEventListener('click', () => {game.startLevel(5);});
*/

//Function to get the mouse position
function getMousePos($canvas, event) {
    var rect = $canvas.getBoundingClientRect();
    return {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top
    };
}
//Function to check whether a point is inside a rectangle
function isInside(pos, rect){
    return pos.x > rect.x && pos.x < rect.x+rect.width && pos.y < rect.y+rect.height && pos.y > rect.y
}


const context= $canvas.getContext('2d');
const mWidth = $canvas.width / 2;
const mHeight = 300;


function drawButton(){
    context.fillStyle = 'black';
    context.fillRect(0, 0, $canvas.width, $canvas.height);
    context.fillStyle = 'grey';
    context.fillRect(mWidth - 100, mHeight + 50, 200, 100);
    context.fillStyle = 'white';
    context.font = '48px serif';
    context.fillText('START', mWidth - 70, mHeight + 110);
}


window.addEventListener(('load'), (image) => {
    context.drawImage(arrow, 100, 150, 150, 150);
    context.drawImage(arrowMirror, 570, 150, 150, 150);
    context.drawImage(raymanF, 250, 150, 300, 200);
});


function drawEverything (image){
    context.clearRect(0, 0, $canvas.width, $canvas.height);
    context.fillStyle = 'black';
    context.fillRect(0, 0, $canvas.width, $canvas.height);
    context.fillStyle = 'grey';
    context.fillRect(mWidth - 100, mHeight + 50, 200, 100);
    context.fillStyle = 'white';
    context.font = '48px serif';
    context.fillText('START', mWidth - 70, mHeight + 110);
    context.drawImage(arrow, 100, 150, 150, 150);
    context.drawImage(arrowMirror, 570, 150, 150, 150);
    context.drawImage(image, 250, 150, 300, 200);
}

var buttonStart = {
    x:mWidth - 100,
    y:mHeight + 50,
    width:200,
    height:100
};

var arrowLeft = {
    x:100,
    y:150,
    width:150,
    height:150
};

var arrowRight = {
    x:570,
    y:150,
    width:150,
    height:150
};

const arrayImages = [];
arrayImages.push(raymanF);
arrayImages.push(jack);
arrayImages.push(crash);
const arrayMusic = [];
arrayMusic.push(audio);
arrayMusic.push(audio1);
arrayMusic.push(audio2);
let i = 0;


drawButton();
//Binding the click event on the canvas
$canvas.addEventListener('click', function(evt) {
    var mousePos = getMousePos($canvas, evt);
    arrayMusic[i].pause();
    if (isInside(mousePos,buttonStart)) {
        console.log('yes' + buttonStart);
    }else if(isInside(mousePos,arrowLeft)) {
        if(i > 0){
            drawEverything(arrayImages[--i]);
        } else {
            i = arrayImages.length - 1;
            drawEverything(arrayImages[i]);
        }
    }else if(isInside(mousePos,arrowRight)){
        if(i < arrayImages.length - 1){
            drawEverything(arrayImages[++i]);
        } else {
            i = 0;
            drawEverything(arrayImages[i]);
        }
    }
    arrayMusic[i].play();

}, false);

