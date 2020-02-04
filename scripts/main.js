const $canvas = document.querySelector('canvas');

const game = new Game($canvas);

const $$levelsList = document.getElementsByClassName('btn btn-secondary');

const $levelOne = $$levelsList[0];
const $levelTwo = $$levelsList[1];
const $levelThree = $$levelsList[2];
const $levelFour = $$levelsList[3];
const $levelFive = $$levelsList[4];

$levelOne.addEventListener('click', () => {game.startGame(1);});
$levelTwo.addEventListener('click', () => {game.startGame(2);});
$levelThree.addEventListener('click', () => {game.startGame(3);});
$levelFour.addEventListener('click', () => {game.startGame(4);});
$levelFive.addEventListener('click', () => {game.startGame(5);});

