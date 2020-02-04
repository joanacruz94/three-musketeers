class LevelThree extends Level{
    constructor(game){
        super(game);
        this.obstacle = new Obstacle(game);
        this.platform = new Platform(game, 11, 5, 550, 50, icePattern);
        this.platform1 = new Platform(game, 10, 6, 500, 50, icePattern);
        this.platform2 = new Platform(game, 9, 7, 450, 50, icePattern);
        this.platform3 = new Platform(game, 8, 8, 400, 50, icePattern);
        this.platform4 = new Platform(game, 7, 9, 350, 50, icePattern);
        this.platform5 = new Platform(game, 6, 10, 300, 50, icePattern);
        this.platform6 = new Platform(game, 5, 11, 250, 50, icePattern);
        this.platform7 = new Platform(game, 4, 12, 200, 50, icePattern);
        this.platform8 = new Platform(game, 3, 13, 150, 50, icePattern);
        this.platform9 = new Platform(game, 2, 14, 100, 50, icePattern);
        this.platform10 = new Platform(game, 1, 15, 100, 50, icePattern);
        this.point1 = new Point(game, 10, 5);
        this.point2 = new Point(game, 9, 6);
        this.point3 = new Point(game, 8, 7);
        this.point4 = new Point(game, 7, 8);
        this.point5 = new Point(game, 6, 9);
        this.point6 = new Point(game, 5, 10);
        this.point7 = new Point(game, 4, 11);
        this.point8 = new Point(game, 3, 12);
        this.point9 = new Point(game, 2, 13);
        this.point10 = new Point(game, 1, 14);
        this.snowFlakes = [];
        this.loadData();
    }

    loadData (){
        this.platforms.push(this.platform);
        this.platforms.push(this.platform1);
        this.platforms.push(this.platform2);
        this.platforms.push(this.platform3);
        this.platforms.push(this.platform4);
        this.platforms.push(this.platform5);
        this.platforms.push(this.platform6);
        this.platforms.push(this.platform7);
        this.platforms.push(this.platform8);
        this.platforms.push(this.platform9);
        this.platforms.push(this.platform10);
        this.points.push(this.point1);
        this.points.push(this.point2);
        this.points.push(this.point3);
        this.points.push(this.point4);
        this.points.push(this.point5);
        this.points.push(this.point6);
        this.points.push(this.point7);
        this.points.push(this.point8);
        this.points.push(this.point9);
        this.points.push(this.point10);
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

    runLogic (){
        for(let z = 0; z < this.snowFlakes.length; z++)
            this.snowFlakes[z].runLogic();
        this.runPlatformLogic();
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