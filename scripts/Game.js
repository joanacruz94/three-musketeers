class Game{
    constructor($canvas, menu, parser){
        this.$canvas = $canvas;
        this.context = this.$canvas.getContext('2d');
        this.menu = menu;
        this.parser = parser;
        this.levelOne = new LevelOne(this, this.menu, this.parser);
        this.levelTwo = new LevelTwo(this, this.menu, this.parser);
        this.levelThree = new LevelThree(this, this.menu, this.parser);
        this.levelFour = new LevelFour(this, this.menu, this.parser);
        this.levelFive = new LevelFive(this, this.menu, this.parser);
    }

    resetGame() {
        this.levelOne.reset();
        this.levelTwo.reset();
        this.levelThree.reset();
        this.levelFour.reset();
        this.levelFive.reset();
    }

    levelAgain (id){
        switch (id){
            case 1:
                this.levelOne = new LevelOne(this, this.menu, this.parser);
                this.levelOne.allPoints = true;
                break;
            case 2:
                this.levelTwo = new LevelTwo(this, this.menu, this.parser);
                break;
            case 3:
                this.levelThree = new LevelThree(this, this.menu, this.parser);
                break;
            case 4:
                this.levelFour = new LevelFour(this, this.menu, this.parser);
                break;
            case 5:
                this.levelFive = new LevelFive(this, this.menu, this.parser);
                break;
        }
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