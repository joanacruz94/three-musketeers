const MAX_ROW = 12;
const MAX_COL = 16;
const GRID_SIZE = 50;
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
const jack = new Image();
jack.src = './images/jack.png';
const raymanF = new Image();
raymanF.src = './images/rayMana.png';
const crash = new Image();
crash.src = './images/crash.png';
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
const fireball = new Image();
fireball.src = './images/fireball.png';
const pattern = new Image();
pattern.src = './images/pattern.png';
const icePattern = new Image();
icePattern.src = './images/icePattern.jpg';


/***** DATA FOR RAYMAN *****/
const r1 = './images/rayman1.png';
const r2 = './images/rayman.png';
const r3 = './images/rayman2.png';
const r4 = './images/lums.png';
const r5 = './images/sapo.png';
const r6 = './images/monster.png';
const r7 = './images/pink.png';
const r8 = './images/tromba.png';

/***** DATA FOR JAK *****/
const j1 = './images/jakk.png';
const j2 = './images/jakkk.png';
const j3 = './images/jakk.png';
const j4 = './images/egg.png';
const j5 = './images/power.png';
const j6 = './images/monster.png';
const j7 = './images/pink.png';
const j8 = './images/tromba.png';

/***** DATA FOR BANDICOOT *****/

const c1 = './images/crashh.png';
const c2 = './images/crashGoing.png';
const c3 = './images/crashh.png';
const c4 = './images/apple.png';
const c5 = './images/boxx.png';
const c6 = './images/monster.png';
const c7 = './images/tnt.png';
const c8 = './images/tromba.png';

/**********************************************/

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