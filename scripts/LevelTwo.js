class LevelTwo extends Level{
    constructor(game){
        super(game);
        this.posXBack = 0;
        this.speed = 3;
        for (let i = 0; i < 500; i++) {
            this.platforms.push(this.setRandomPosition(5 * i));
        }
    }

    setRandomPosition (randCol) {
        const row = Math.floor(Math.random() * (10 - 3 + 1) + 3);
        const col = randCol;
        const height = 50;
        const width = 150;
        const point = new Point(this.game, row - 1, col + 1);
        this.points.push(point);
        return new Platform(this.game, row, col, width, height, pattern);
    }

    runLogic (){
        this.posXBack -= this.speed;
        if (backFour.width) {
            this.posXBack = this.posXBack % backFour.width;
        }
        
        for(let i = 0; i < this.platforms.length; i++){
            this.platforms[i].runLogic();
        }

        for(let j = 0; j < this.points.length; j++){
            this.points[j].runLogic();
        }
        this.runPlatformLogic();
    }

    paint (){
        this.clearScreen();
        const context = this.game.context;
        context.save();
        context.drawImage(backFour, this.posXBack, 0);
        context.drawImage(backFour, backFour.width + this.posXBack, 0);
        context.restore();
        for(let j = 0; j < this.points.length; j++)
            this.points[j].paint();
        for(let i = 0; i < this.platforms.length; i++)
            this.platforms[i].paint();
        this.character.paint();
    }

    loop (timestamp) {
        //console.log('TIMESTAMP', timestamp);
        this.runLogic();
        this.paint();
        
        if(this.gameisRunning){
            window.requestAnimationFrame((timestamp) => this.loop(timestamp));
        }
    }
}