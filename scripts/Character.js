class Character{
    constructor(game){
        this.game = game;
        this.width = 100;
        this.height = 100;
        this.posX = 0;
        this.posY = this.game.$canvas.height - this.height;
        this.speedX = 20;
        this.speedY = 0;
        this.jumping = false;
        this.gravity = 0.5;
        this.jumpPower = 100;
        this.direction = 'right';
        this.foundPlatform = false;
        this.image = characterPaused;
        this.setKeys();
    }

    moveLeft (){
        if(this.posX > 0 + this.width){
            this.direction = 'left';
            this.posX -= this.speedX;
        }
    }

    moveRight (){
        if(this.posX < this.game.$canvas.width - this.width){
            this.direction = 'right';
            this.posX += this.speedX;
        }
    }

    runLogic (){
        this.speedY += this.gravity;
        this.posY += this.speedY;
        let platforms = this.game.level.platforms;

        if(this.posY > this.game.$canvas.height - this.height && !this.foundPlatform){
            this.posY = this.game.$canvas.height - this.height;
            this.speedY = 0.0;
            this.jumping = true;
        }
        
        for(let i = 0; i < platforms.length; i++){
            let platform = platforms[i];
            if(platform.row * GRID_SIZE + platform.height === this.posY) {
                this.posY = platform.row * GRID_SIZE + platform.height;
            }
        }
                
    }

    checkColision (){

    }

    paint (){
        const context = this.game.context;

        context.save();
        
        if(this.direction === 'right')
            context.drawImage(this.image, this.posX, this.posY, this.width, this.height);
        else if(this.direction === 'left'){
            context.scale(-1, 1);
            context.drawImage(this.image, -this.posX, this.posY, this.width, this.height);
        }

        context.restore();
    }

    startJump (){
        if(this.jumping)
        {
            this.speedY = -18.0;
            this.jumping = false;
        }
    }

    endJump (){
        if(this.speedY < -6.0)
            this.speedY = -6.0;
        
        this.checkColision();
    }

    setKeys () {
        window.addEventListener('keydown', event => {
            const key = event.key;
            switch (key) {
              case 'ArrowLeft':
                event.preventDefault();
                this.image = characterRunning;
                this.moveLeft();
                break;
              case 'ArrowRight':
                event.preventDefault();
                this.image = characterRunning;
                this.moveRight();
                break;
              case 'ArrowUp':
                event.preventDefault();
                this.startJump();
                break;
            }
        });

        window.addEventListener('keyup', event => {
            const key = event.key;
            switch (key) {
              case 'ArrowLeft':
                event.preventDefault();
                this.image = characterPaused;
                break;
              case 'ArrowRight':
                event.preventDefault();
                this.image = characterPaused;
                break;
              case 'ArrowUp':
                event.preventDefault();
                this.endJump();
                break; 
            }
        });
    }
    
}