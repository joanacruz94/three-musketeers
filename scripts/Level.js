class Level{
    constructor(game){
        this.game = game;
    }
    
    runPlatformLogic () {
        this.game.character.runLogic();

    }

    loop (timestamp) {
        //console.log('TIMESTAMP', timestamp);
        this.runLogic();
        this.paint();
        
        window.requestAnimationFrame((timestamp) => this.loop(timestamp));
    }
}