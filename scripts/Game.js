class Game{
    constructor($canvas){
        this.$canvas = $canvas;
        this.context = this.$canvas.getContext('2d');
        this.levels = [];
        this.levelOne = new LevelOne(this);
        this.levelTwo = new LevelTwo(this);
        this.levelThree = new LevelThree(this);
        this.levelFour = new LevelFour(this);
        this.levelFive = new LevelFive(this);
     
    }

    resetGame() {
        this.levelOne.reset();
        this.levelTwo.reset();
        this.levelThree.reset();
        this.levelFour.reset();
        this.levelFive.reset();
    }

    startLevel (idLevel){
        this.resetGame();
        switch(idLevel){
            case 1:
                this.levelOne.startLevel();
                break;
            case 2:
                this.levelTwo.startLevel();
                break;
            case 3:
                this.levelThree.startLevel();
                break;
            case 4:
                this.levelFour.startLevel();
                break;
            case 5:
                this.levelFive.startLevel();
                break;
        }
    }
}