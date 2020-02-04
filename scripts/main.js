const $canvas = document.querySelector('canvas');

const game = new Game($canvas);

const $$levelsList = document.getElementsByClassName('btn btn-secondary');

const $levelOne = $$levelsList[0];
const $levelTwo = $$levelsList[1];
const $levelThree = $$levelsList[2];
const $levelFour = $$levelsList[3];
const $levelFive = $$levelsList[4];

$levelOne.addEventListener('click', () => {game.startLevel(1);});
$levelTwo.addEventListener('click', () => {game.startLevel(2);});
$levelThree.addEventListener('click', () => {game.startLevel(3);});
$levelFour.addEventListener('click', () => {game.startLevel(4);});
$levelFive.addEventListener('click', () => {game.startLevel(5);});

