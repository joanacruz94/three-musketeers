class LevelFive extends Level{
    constructor(game, menu, parser){
        super(game, menu, parser);
        this.monster = new Monster(this.game, this.game.$canvas.width - 140, this.game.$canvas.height - 130, 140, 130, monsterfinal, 'left');
        this.helpers = [];
    }

    loadHelpers (){
        //const m1 = new Obstacle(this.game, this.posX, this.posY, this.width, this.height);
        //const m2 = new Obstacle();
        //const m3 = new Obstacle();
    }

    paint (){
        this.clearScreen();
        const context = this.game.context;
        context.save();
        context.drawImage(backTwo, 0, 0, this.game.$canvas.width, this.game.$canvas.height);
        context.restore();
        this.paintPlatform();
        this.monster.paint();
        for(let helper of this.helpers) helper.paintBall();
    }

    runLogic (){
        this.monster.runLogic();
 
    }
}