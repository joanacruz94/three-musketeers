class Level{
    constructor(game){
        this.game = game;
        this.obstacle = new Obstacle(game);
        this.platform = new Platform(game);
        this.point = new Point(game);
    }

    clearScreen () {
        this.game.context.clearRect(0, 0, this.game.$canvas.width, this.game.$canvas.height);
    }

    runLogic (){
        //this.game.character.runLogic();
        //this.platform.runLogic();
        //this.obstacle.runLogic();
        //this.point.runLogic();
    }

    paint (){
        this.clearScreen();
        const context = this.game.context;
        context.drawImage(background, 0, 0, this.game.$canvas.width, this.game.$canvas.height);
        this.game.character.paint();
        this.platform.paint();
        this.obstacle.paint();
        this.point.paint();
    }
    loop (timestamp) {
        //console.log('TIMESTAMP', timestamp);
        this.runLogic();
        this.paint();
        
        window.requestAnimationFrame((timestamp) => this.loop(timestamp));
    }

}