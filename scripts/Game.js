class Game{
    constructor($canvas, menu){
        this.$canvas = $canvas;
        this.context = this.$canvas.getContext('2d');
        this.menu = menu;
        this.levelOne = new LevelOne(this, this.menu);
        this.levelTwo = new LevelTwo(this, this.menu);
        this.levelThree = new LevelThree(this, this.menu);
        this.levelFour = new LevelFour(this, this.menu);
        this.levelFive = new LevelFive(this, this.menu);
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