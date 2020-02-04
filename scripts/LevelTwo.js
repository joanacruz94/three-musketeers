class LevelTwo extends Level{
    constructor(game){
        super(game);
        this.posXBack = 0;
        this.speed = 2.5;
        this.loadData();
        //for (let i = 0; i < 500; i++) {
        //    this.platforms.push(this.setRandomPosition(5 * i));
        //}

    }

    loadData (){
        let count = 0;
        for(let i = 0; i < 10; i++){
            let platform = null;
            let point = null;
            if(i === 0) {
                this.character.setPosX(i * 4 + 5 * GRID_SIZE);
                this.character.setPosY(9 * GRID_SIZE - this.character.height);
            }
            if(i === 9){
                this.door.setPosX((5 * i) * GRID_SIZE);
                this.door.setPosY(7 * GRID_SIZE);
            }
            if(count === 0){
                platform = new Platform(this.game, 9, i * 4 + 5, 150, 50, pattern);
                point = new Point(this.game, 9 - 1, i * 4 + 5 + 1);
            }
            else if(count === 1){
                platform = new Platform(this.game, 7, i * 4 + 5, 150, 50, pattern);
                point = new Point(this.game, 7 - 1, i * 4 + 5 + 1);
            }
            else if(count === 2){
                platform = new Platform(this.game, 5, i * 4 + 5, 150, 50, pattern);
                point = new Point(this.game, 5 - 1, i * 4 + 5 + 1);
            }
            else if(count === 3){
                platform = new Platform(this.game, 3, i * 4 + 5, 150, 50, pattern);
                point = new Point(this.game, 3 - 1, i * 4 + 5 + 1);
            }
            else if(count === 4){
                platform = new Platform(this.game, 5, i * 4 + 5, 150, 50, pattern);
                point = new Point(this.game, 5 - 1, i * 4 + 5 + 1);
            }
            else if(count === 5){
                platform = new Platform(this.game, 7, i * 4 + 5, 150, 50, pattern);
                point = new Point(this.game, 7 - 1, i * 4 + 5 + 1);
            }
            this.platforms.push(platform);
            this.points.push(point);
            count++;
            if(count === 6) count = 0;
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
        this.door.runLogic();
        this.runPlatformLogic();
    }

    paint (){
        this.clearScreen();
        const context = this.game.context;
        context.save();
        context.drawImage(backFour, this.posXBack, 0);
        context.drawImage(backFour, backFour.width + this.posXBack, 0);
        context.restore();
        this.paintPlatform();
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