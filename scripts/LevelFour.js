class LevelFour extends Level{
    constructor(game, menu, parser){
        super(game, menu, parser);
        this.character.matter = false;
        this.loadData();
        this.idLevel = 4;
    }

    loadData (){
        for(let i = 0; i < 20; i++){
            let platform = null;
            let point = null;
            if(i % 2 === 0){
                platform = new Platform(this.game, i * -3, 4, 150, 50, pattern);
                point = new Point(this.game, i * -3 - 1, 5, this.parser.point);
            }
            else {
                platform = new Platform(this.game, i * -3, 10, 150, 50, pattern);
                point = new Point(this.game, i * -3 - 1, 11, this.parser.point);
            }
            if(i === 0) {
                this.character.setPosX(4 * GRID_SIZE);
                this.character.setPosY(0)
            }
            if(i === 19) {
                console.log('ola');
                this.door.setPosX(11.2 * GRID_SIZE);
                this.door.setPosY((i * -3 - 2) * GRID_SIZE);
            }
            this.platforms.push(platform);
            this.points.push(point);
        }
    }

    paint (){
        this.clearScreen();
        const context = this.game.context;
        context.save();
        context.drawImage(backTwo, 0, 0, this.game.$canvas.width, this.game.$canvas.height);
        context.restore();
        this.paintPlatform();
    }

    runLogic (){
        this.runPlatformLogic();
        for(let platform of this.platforms)
            platform.moveDown();
        for(let point of this.points)
            point.moveDown();
        if(this.character.posY > this.game.$canvas.height){
            keysDown = new Array();
            window.alert("YOU LOST");
            this.gameisRunning = false;
            this.game.levelAgain(this.idLevel);
        }
        this.door.moveDown();
    }

}