class LevelOne extends Level{
    constructor(game){
        super(game);
        this.obstacle = new Obstacle(game);
        this.platform = new Platform(game, 9, 3, 100, 50, pattern);
        this.platform1 = new Platform(game, 7, 6, 100, 50, pattern);
        this.platform2 = new Platform(game, 5, 9, 100, 50, pattern);
        this.platform3 = new Platform(game, 3, 12, 100, 50, pattern);
        this.platform4 = new Platform(game, 2, 4, 300, 50, pattern);
        this.point1 = new Point(game, 8, 3.5);
        this.point2 = new Point(game, 6, 6.5);
        this.point3 = new Point(game, 4, 9.5);
        this.point4 = new Point(game, 2, 12.5);
        this.platforms = [];
        this.points = [];
        this.platforms.push(this.platform);
        this.platforms.push(this.platform1);
        this.platforms.push(this.platform2);
        this.platforms.push(this.platform3);
        this.platforms.push(this.platform4);
        this.points.push(this.point1);
        this.points.push(this.point2);
        this.points.push(this.point3);
        this.points.push(this.point4);
    }

    clearScreen () {
        this.game.context.clearRect(0, 0, this.game.$canvas.width, this.game.$canvas.height);
    }


    runLogic (){
        this.runPlatformLogic();
        this.obstacle.runLogic();
        /*for (let platform of this.platforms) {
            const horizontalIntersection = platform.checkIntersection(this.game.character.prevX, this.game.character.posY, this.game.character.posX, this.game.character.width, this.game.character.height);
            const verticalIntersection = platform.checkIntersection(this.game.character.posX, this.game.character.prevY, this.game.character.posY, this.game.character.width, this.game.character.height);
            if (verticalIntersection) {
                this.game.character.velocityY = 0;
                this.game.character.posY = platform.row * GRID_SIZE - this.game.character.height;
                this.game.character.jumping = false;
              }
            if (horizontalIntersection) {
                this.game.character.velocityX = 0;
                this.game.character.posX = platform.col * GRID_SIZE;
            }
            this.game.character.velocityY += this.game.character.gravity / 1000 * 16;
            this.game.character.posY += this.game.character.velocityY;
          
          
        }*/
    }

    paint (){
        this.clearScreen();
        const context = this.game.context;
        context.save();
        context.drawImage(backTwo, 0, 0, this.game.$canvas.width, this.game.$canvas.height);
        context.restore();
        this.game.character.paint();
        for(let i = 0; i < this.platforms.length; i++)
            this.platforms[i].paint();
        this.obstacle.paint();
        for(let j = 0; j < this.points.length; j++)
            this.points[j].paint(); 
    }
}