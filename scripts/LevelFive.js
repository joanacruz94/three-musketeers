class LevelFive extends Level{
    constructor(game, menu, parser){
        super(game, menu, parser);
        this.monster = new Monster(this.game, this.game.$canvas.width - 140, this.game.$canvas.height - 130, 140, 130, monsterfinal, 'left');
        for(let i = 0; i < 100; i++){
            let obstacle = new Obstacle(this.game, this.setRandX() * GRID_SIZE, this.setRandY() * GRID_SIZE, 20, 20, purpleMo, 'right');
            this.obstacles.push(obstacle);
        }
        let platform = new Platform(this. game, 3, 0, 50, 50, icePattern);
        let platform1 = new Platform(this. game, 6, 2, 50, 50, icePattern);
        let platform2 = new Platform(this. game, 9, 0, 50, 50, icePattern);
        this.platforms.push(platform);
        this.platforms.push(platform1);
        this.platforms.push(platform2);
        this.door = null;
        this.character.setPosX(0);
        this.character.setPosY(30);
        this.obstacles.push(this.monster);
    }

    setRandX (){
        return Math.floor(Math.random() * MAX_COL) + 4;
    }

    setRandY (){
        return Math.floor(Math.random() * MAX_ROW);
    }

    paint (){
        this.clearScreen();
        const context = this.game.context;
        context.save();
        context.drawImage(purpleBack, 0, 0, this.game.$canvas.width, this.game.$canvas.height);
        context.restore();
        this.paintPlatform();
        this.monster.paint();
    }

    runLogic (){
        this.runPlatformLogic();
        for(let obstacle of this.obstacles) obstacle.runLogicLevelFive();
        this.monster.runLogic();        
    }
}