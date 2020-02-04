class Game{
    constructor($canvas){
        this.$canvas = $canvas;
        this.context = this.$canvas.getContext('2d');
        this.levels = [];
        this.levelOne = new LevelOne(this);
        this.levelTwo = new LevelTwo(this);
        this.levelThree = new LevelThree(this);
        this.levelFour = new LevelThree(this);
        this.levelFive = new LevelThree(this);
        this.character = new Character(this);
    }

    control (value) {
        switch (value) {
          case 'jump':
            this.character.jump();
            break;
        }
      }

    startGame (idLevel){
        switch(idLevel){
            case 1:
                this.levelOne.loop();
                break;
            case 2:
                this.levelTwo.loop();
                break;
            case 3:
                this.levelThree.loop();
                break;
            case 4:
                this.levelFour.loop();
                break;
            case 5:
                this.levelFive.loop();
                break;
        }
    }
}