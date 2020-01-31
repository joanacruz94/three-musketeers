class Level{
    constructor(game){
        this.game = game;
        this.obstacle = new Obstacle(game);
        this.platform = new Platform(game);
        this.point = new Point(game);

    }
}