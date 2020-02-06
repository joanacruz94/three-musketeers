class LevelOne extends Level{
    constructor(game, menu, parser){
        super(game, menu, parser);
        this.platform = new Platform(game, 9, 3, 100, 50, pattern);
        this.platform1 = new Platform(game, 7, 6, 100, 50, pattern);
        this.platform2 = new Platform(game, 5, 9, 100, 50, pattern);
        this.platform3 = new Platform(game, 3, 12, 100, 50, pattern);
        this.platform4 = new Platform(game, 2, 4, 300, 50, pattern);
        this.point1 = new Point(game, 8, 3.5, this.parser.point);
        this.point2 = new Point(game, 6, 6.5, this.parser.point);
        this.point3 = new Point(game, 4, 9.5, this.parser.point);
        this.point4 = new Point(game, 2, 12.5, this.parser.point);
        this.loadData();
        this.door.setPosX(320);
        this.door.setPosY(30);
        this.idLevel = 1;
    }

    loadData (){
        this.platforms.push(this.platform);
        this.platforms.push(this.platform1);
        this.platforms.push(this.platform2);
        this.platforms.push(this.platform3);
        this.platforms.push(this.platform4);
        this.points.push(this.point1);
        this.points.push(this.point2);
        this.points.push(this.point3);
        this.points.push(this.point4);
        const obstacle = new Obstacle(this.game, 250, 0, 70, 100, this.parser.monsterLevel1, 'right'); 
        this.obstacles.push(obstacle);
    }

    runLogic (){
        this.runPlatformLogic();
        for(let obstacle of this.obstacles) obstacle.runLogic(); 
    }

    paint (){
        this.clearScreen();
        const context = this.game.context;
        context.save();
        context.drawImage(backTwo, 0, 0, this.game.$canvas.width, this.game.$canvas.height);
        context.restore();
        this.paintPlatform();
    }

}