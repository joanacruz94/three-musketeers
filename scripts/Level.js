class Level{
    constructor(game){
        this.game = game;
        this.character = new Character(this.game);
        this.platforms = [];
        this.points = [];
        this.gameisRunning = true;
    }

    startLevel (){
        this.gameisRunning = true;
        this.loop();
    }

    clearScreen () {
        this.game.context.clearRect(0, 0, this.game.$canvas.width, this.game.$canvas.height);
    }

    reset (){
        this.gameisRunning = false;
    }
    
    runPlatformLogic () {
        const character = this.character;
        character.runLogic();

        character.nextVelX = character.velocityX / (1 + character.friction / 1000 * 16) + character.direction * 0.5;
        character.nextVelY = character.velocityY + (character.gravity / 1000 * 16);
    
        character.nextPosX = character.posX + character.nextVelX;
        character.nextPosY = character.posY + character.nextVelY;
        for (let platform of this.platforms) {
            const horizontalIntersection = checkIntersection(
                character.nextPosX, character.posY, character.width, character.height, platform.row, platform.col, platform.width, platform.height);
            const verticalIntersection = checkIntersection(
                character.posX, character.nextPosY, character.width, character.height, platform.row, platform.col, platform.width, platform.height);
            if (verticalIntersection) {
                
              character.nextVelY = 0;
              character.nextPosY = character.posY;
              character.jumping = false;
            }
            if (horizontalIntersection) {
              character.nextVelX = 0;
              character.nextPosX = character.posX;
            }
        }

        for (let i = 0; i < this.points.length; i++) {
            const found = checkIntersection(
            character.posX, character.posY, character.width, character.height, this.points[i].row, this.points[i].col, this.points[i].width, this.points[i].height);
            if(found) this.points.splice(i, 1);
        }

        character.velocityX = character.nextVelX;
        character.velocityY = character.nextVelY;
        character.posX = character.nextPosX;
        character.posY = character.nextPosY;
    }

}