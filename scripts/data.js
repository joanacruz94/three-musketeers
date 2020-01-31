const MAX_ROW = 12;
const MAX_COL = 16;
const GRID_SIZE = 50;
const directions = Object.freeze({"right":1, "left":2, "up":3, "down":4});

const characterPaused = new Image();
characterPaused.src = './images/rayman1.jpg';
const characterRunning = new Image();
characterRunning.src = './images/rayman.jpg';
const characterFinish = new Image();
characterFinish.src = './images/rayman2.jpg';
const background = new Image();
background.src = './images/back.jpg';
const monster = new Image();
monster.src = './images/monster.png';