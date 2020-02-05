const MAX_ROW = 12;
const MAX_COL = 16;
const GRID_SIZE = 50;
const directions = Object.freeze({"right":1, "left":2, "up":3, "down":4});
//const collisionPadding = 10;

const $canvas = document.querySelector('canvas');


const audio = new Audio('./audio/rayman.mp3');
const audio1 = new Audio('./audio/jak.mp3');
const audio2 = new Audio('./audio/crash.mp3');

const padlock = new Image();
padlock.src = './images/lock.png';
const arrow = new Image();
arrow.src = './images/arrow.png';
const arrowBack = new Image();
arrowBack.src = './images/arrowBack.png';
const pinkMonster = new Image();
pinkMonster.src = './images/pink.png';
const jack = new Image();
jack.src = './images/jack.png';
const raymanF = new Image();
raymanF.src = './images/rayMana.png';
const crash = new Image();
crash.src = './images/crash.png';
const frog = new Image();
frog.src = './images/sapo.png';
const tromba = new Image();
tromba.src = './images/tromba.png';
const arrowMirror = new Image();
arrowMirror.src = './images/arrowMirrow.png';
const background = new Image();
background.src = './images/back.jpg';
const backgroundOne = new Image();
backgroundOne.src = './images/back1.jpg';
const backTwo = new Image();
backTwo.src = './images/back3.png';
const backFour = new Image();
backFour.src = './images/back4.jpg';
const backFive = new Image();
backFive.src = './images/back5.png';
const backSix = new Image();
backSix.src = './images/back6.jpg';
const backSeven = new Image();
backSeven.src = './images/back7.jpg';
const snowFlake = new Image();
snowFlake.src = './images/snowflake.png';
const characterPaused = new Image();
characterPaused.src = './images/rayman1.png';
const characterRunning = new Image();
characterRunning.src = './images/rayman.png';
const characterFinish = new Image();
characterFinish.src = './images/rayman2.png';
const monster = new Image();
monster.src = './images/monster.png';
const pattern = new Image();
pattern.src = './images/pattern.png';
const icePattern = new Image();
icePattern.src = './images/icePattern.jpg';
const point = new Image();
point.src = './images/apple.png';
const final = new Image();
final.src = './images/power.png';

const context= $canvas.getContext('2d');
const mWidth = $canvas.width / 2;
const mHeight = 300;

const buttonStart = {
    x:mWidth - 100,
    y:mHeight + 50,
    width:200,
    height:100
};

const arrowLeft = {
    x:100,
    y:150,
    width:150,
    height:150
};

const arrowRight = {
    x:570,
    y:150,
    width:150,
    height:150
};


const level1 = {
    x:115,
    y:250,
    width:100,
    height:100
};

const level2 = {
    x:235,
    y:250,
    width:100,
    height:100
};

const level3 = {
    x:355,
    y:250,
    width:100,
    height:100
};

const level4 = {
    x:475,
    y:250,
    width:100,
    height:100
};

const level5 = {
    x:595,
    y:250,
    width:100,
    height:100
};

const arrowChange = {
    x:40,
    y:30,
    width:80,
    height:80
};

const arrayImages = [];
arrayImages.push(raymanF);
arrayImages.push(jack);
arrayImages.push(crash);
const arrayMusic = [];
arrayMusic.push(audio);
arrayMusic.push(audio1);
arrayMusic.push(audio2);