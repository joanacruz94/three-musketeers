class Level{
    constructor(game){
        this.game = game;
        this.character = new Character(this.game);
        this.platforms = [];
        this.points = [];
        this.gameisRunning = true;
        this.door = new Door(game);
        this.shoot = null;
        this.obstacle = null;
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

    paintPlatform (){
        this.character.paint();
        for(let i = 0; i < this.platforms.length; i++)
            this.platforms[i].paint();
        for(let j = 0; j < this.points.length; j++)
            this.points[j].paint();
        this.door.paint();
        if(this.shoot) this.shoot.paint();
        if(this.obstacle) this.obstacle.paint();
    }
    
    runPlatformLogic () {
        const character = this.character;
        character.runLogic();

        character.nextVelX = character.velocityX / (1 + character.friction / 1000 * 16) + character.direction * 1;
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

        if(keys.s in keysDown) {
            const posX = this.character.posX;
            const posY = this.character.posY;
            const width = this.character.width;
            const height = this.character.height;
            if(this.character.lastPressed === 'right')
                this.shoot = new Shoot(this.game, posX + width, posY + height/2, this.character.lastPressed);
            else this.shoot = new Shoot(this.game, posX - width, posY + height/2, this.character.lastPressed);
        }

        if(this.obstacle) this.obstacle.runLogic();
        if(this.shoot) this.shoot.runLogic();
        let found = false;

        if(this.shoot && this.obstacle){
            found = checkIntersection(
            this.shoot.posX, this.shoot.posY, this.shoot.width, this.shoot.height, this.obstacle.posY / GRID_SIZE, this.obstacle.posX / GRID_SIZE, this.obstacle.width, this.obstacle.height);
            if(found) this.obstacle = null;
            if(this.shoot.posX === this.game.$canvas.width || this.shoot.posX === 0) this.shoot = null;
        }
        const finish = checkIntersection(
           this.character.posX, this.character.posY, this.character.width, this.character.height, this.door.posY / GRID_SIZE, this.door.posX / GRID_SIZE, this.door.width, this.door.height);
        
        if(finish){
            this.character.image = characterFinish;
            this.gameisRunning = false;
        }
    }

}