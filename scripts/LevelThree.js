class LevelThree extends Level{
    constructor(game){
        super(game);
        this.obstacle = new Obstacle(game);
        this.platform = new Platform(game, 9, 12, 120, 40, icePattern);
        this.platform1 = new Platform(game, 7, 12, 120, 40, icePattern);
        this.platform2 = new Platform(game, 5, 12, 120, 40, icePattern);
        this.platform3 = new Platform(game, 3, 12, 120, 40, icePattern);
        this.platform4 = new Platform(game, 9, 2, 120, 40, icePattern);
        this.platform5 = new Platform(game, 7, 2, 120, 40, icePattern);
        this.platform6 = new Platform(game, 5, 2, 120, 40, icePattern);
        this.platform7 = new Platform(game, 3, 2, 120, 40, icePattern);
        this.point1 = new Point(game, 8, 12.5);
        this.point2 = new Point(game, 6, 12.5);
        this.point3 = new Point(game, 4, 12.5);
        this.point4 = new Point(game, 2, 12.5);
        this.point5 = new Point(game, 8, 2.5);
        this.point6 = new Point(game, 6, 2.5);
        this.point7 = new Point(game, 4, 2.5);
        this.point8 = new Point(game, 2, 2.5);
        this.points = [];
        this.platforms = [];
        this.platforms.push(this.platform);
        this.platforms.push(this.platform1);
        this.platforms.push(this.platform2);
        this.platforms.push(this.platform3);
        this.platforms.push(this.platform4);
        this.platforms.push(this.platform5);
        this.platforms.push(this.platform6);
        this.platforms.push(this.platform7);
        this.points.push(this.point1);
        this.points.push(this.point2);
        this.points.push(this.point3);
        this.points.push(this.point4);
        this.points.push(this.point5);
        this.points.push(this.point6);
        this.points.push(this.point7);
        this.points.push(this.point8);
        this.snowFlakes = [];
        for (let i = 0; i < 500; i++) {
            this.snowFlakes.push(this.setRandomPosition(-2 * i));
        }
    }

    setRandomPosition (randRow) {
        const row = randRow;
        const col = Math.floor(Math.random() * MAX_COL);
        const height = 35;
        const width = 35;
        return new SnowFlake(this.game, row, col, width, height, snowFlake);
    }

    clearScreen () {
        this.game.context.clearRect(0, 0, this.game.$canvas.width, this.game.$canvas.height);
    }

    runLogic (){
        this.runPlatformLogic();
        for(let z = 0; z < this.snowFlakes.length; z++)
            this.snowFlakes[z].runLogic();
    }

    paint (){
        this.clearScreen();
        const context = this.game.context;
        context.save();
        context.drawImage(backSeven, 0, 0, this.game.$canvas.width, this.game.$canvas.height);
        context.restore();
        for(let z = 0; z < this.snowFlakes.length; z++)
            this.snowFlakes[z].paint();
        for(let j = 0; j < this.points.length; j++)
            this.points[j].paint();
        for(let i = 0; i < this.platforms.length; i++)
            this.platforms[i].paint();
        this.game.character.paint();
    }

}