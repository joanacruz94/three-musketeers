class LevelFour extends Level{
    constructor(game, menu, parser){
        super(game, menu, parser);
        this.character.matter = false;
        this.loadData();
    }

    loadData (){
        for(let i = 0; i < 50; i++){
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
        for(let platform of this.platforms)
            platform.paint();
        for(let point of this.points)
            point.paint();
        this.character.paint();
    }

    runLogic (){
        this.runPlatformLogic();
        for(let platform of this.platforms)
            platform.moveDown();
        for(let point of this.points)
            point.moveDown();
        if(this.character.posY > this.game.$canvas.height){
            window.alert("YOU LOST");
            this.gameisRunning = false;
        }
        if(this.finish){
            this.character.image = this.parser.characterFinished;
            window.alert(' YOU PASSED');
            this.gameisRunning = false;
            this.game.levelAgain(4);
        }
    }

}