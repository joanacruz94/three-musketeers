const MAX_ROW = 12;
const MAX_COL = 16;
const GRID_SIZE = 50;
const directions = Object.freeze({"right":1, "left":2, "up":3, "down":4});

const background = new Image();
background.src = './images/back.jpg';
const characterPaused = new Image();
characterPaused.src = './images/rayman1.png';
const characterRunning = new Image();
characterRunning.src = './images/rayman.png';
const characterFinish = new Image();
characterFinish.src = './images/rayman2.png';
const monster = new Image();
monster.src = './images/monster.png';
const point = new Image();
point.src = './images/apple.png';