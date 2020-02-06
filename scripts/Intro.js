class Menu{
    constructor($canvas){
        this.$canvas = $canvas;
        this.context = this.$canvas.getContext('2d');
        this.posX = 0;
        this.posY = 0;
        this.count = 0;
        this.i = 0;
        this.runningMenu = true;
        this.runningLevels = false;
        this.beginMenu();
        this.setButtons();
        this.locked = [];
        this.locked.push(5);
        this.locked.push(4);
        this.locked.push(3);
        this.locked.push(2);
        this.allPoints = [];
        this.parser = new Parser();
        this.game = new Game(this.$canvas, this, this.parser);
    }

    beginMenu(){
        window.addEventListener(('load'), (image) => {
            this.drawBeginMenu(raymanF);
            arrayMusic[0].play();
        });
    }

    clearScreen (){
        this.context.clearRect(0, 0, this.$canvas.width, this.$canvas.height);
    }

    drawBeginMenu (image){
        this.clearScreen();
        this.context.fillStyle = 'black';
        this.context.fillRect(0, 0, this.$canvas.width, this.$canvas.height);
        this.context.fillStyle = 'grey';
        this.context.fillRect(mWidth - 100, mHeight + 50, 200, 100);
        this.context.fillStyle = 'white';
        this.context.font = '50px Courier New';
        this.context.fillText('START', mWidth - 75, mHeight + 113);
        this.context.drawImage(arrow, 100, 150, 150, 150);
        this.context.drawImage(arrowMirror, 570, 150, 150, 150);
        if(image === raymanF)
            this.context.drawImage(image, 290, 150, 200, 200);
        else
            this.context.drawImage(image, 250, 150, 300, 200);
        this.context.fillStyle = 'white';
        this.context.font = '16px Courier New';
        this.context.fillText('Choose your character', mWidth - 100, mHeight + 180);
    }

    isInside(pos, rect){
        return pos.x > rect.x && pos.x < rect.x+rect.width && pos.y < rect.y+rect.height && pos.y > rect.y
    }

    parseFilesCharacter (){
        if(this.i === 0){
            this.parser.load(r1, r2, r3, r4, r5, r6, r7, r8);
        }else if(this.i === 1){
            this.parser.load(j1, j2, j3, j4, j5, j6, j7, j8);
        }else if(this.i === 2){
            this.parser.load(c1, c2, c3, c4, c5, c6, c7, c8);
        }
    }

    changeMenu(id){
        if(id === 1) {
            this.runningMenu = false;
            this.runningLevels = true;
            this.drawLevelsMenu();
        } else if(id === 2){
            this.runningLevels = false;
            this.runningMenu = true;
            this.drawBeginMenu(raymanF);
        }
    }

    setButtons(){
        this.$canvas.addEventListener('click', (evt) => {
            
            var rect = this.$canvas.getBoundingClientRect();
            var mousePos = {
                x: event.clientX - rect.left,
                y: event.clientY - rect.top
            };

            if(this.runningMenu){
                arrayMusic[this.i].pause();
                if (this.isInside(mousePos,buttonStart)) {
                    this.parseFilesCharacter();
                    setTimeout(() => {
                        this.changeMenu(1);
                    }, 200);
                }else if(this.isInside(mousePos,arrowLeft)) {
                    if(this.i > 0){
                        this.drawBeginMenu(arrayImages[--this.i]);
                    } else {
                        this.i = arrayImages.length - 1;
                        this.drawBeginMenu(arrayImages[this.i]);
                    }
                }else if(this.isInside(mousePos,arrowRight)){
                    if(this.i < arrayImages.length - 1){
                        this.drawBeginMenu(arrayImages[++this.i]);
                    } else {
                        this.i = 0;
                        this.drawBeginMenu(arrayImages[this.i]);
                    }
                }
                arrayMusic[this.i].play();
            }
            if(this.runningLevels){
                let idLevel = 0;
                if (this.isInside(mousePos,level1)) {
                    idLevel = 1;
                }else if(this.isInside(mousePos,level2) /*&& !this.locked.includes(2)*/){
                    idLevel = 2;
                }else if(this.isInside(mousePos,level3) /*&& !this.locked.includes(3)*/){
                    idLevel = 3;
                }else if(this.isInside(mousePos,level4) /*&& !this.locked.includes(4)*/){
                    idLevel = 4;
                }else if(this.isInside(mousePos,level5) /*&& !this.locked.includes(5)*/){
                    idLevel = 5;
                }else if(this.isInside(mousePos,arrowChange)){
                    this.changeMenu(2);
                }
                if(idLevel != 0){
                    this.game.startLevel(idLevel);
                }
            }
        }, false);
    }

    drawLevelsMenu (){
        this.clearScreen();   
        this.context.fillStyle = 'grey';
        this.context.font = '70px Courier New';
        this.context.fillText('LEVELS', mWidth - 120, 100);   
        this.context.drawImage(arrowBack, 40, 30, 80, 80);
        this.context.drawImage(backTwo, 115, 250, 100, 100);

        if(this.allPoints.includes(1))
            this.context.drawImage(star, 135, 200, 50, 50);

        this.context.drawImage(backFour, 235, 250, 100, 100);
        if(this.locked.includes(2))
            this.context.drawImage(padlock, 260, 270, 50, 50);
        if(this.allPoints.includes(2))
            this.context.drawImage(star, 260, 200, 50, 50);

        this.context.drawImage(backSeven, 355, 250, 100, 100);
        if(this.locked.includes(3))
            this.context.drawImage(padlock, 380, 270, 50, 50);
        if(this.allPoints.includes(3))
            this.context.drawImage(star, 380, 200, 50, 50);

        this.context.drawImage(backTwo, 475, 250, 100, 100);
        if(this.locked.includes(4))
            this.context.drawImage(padlock, 500, 270, 50, 50);
            if(this.allPoints.includes(4))
            this.context.drawImage(star, 500, 200, 50, 50);

        this.context.drawImage(purpleBack, 595, 250, 100, 100); 
        if(this.locked.includes(5))
            this.context.drawImage(padlock, 620, 270, 50, 50);
        if(this.allPoints.includes(5))
            this.context.drawImage(star, 620, 200, 50, 50);

        this.context.fillStyle = 'white';
        this.context.font = '20px Courier New';
        this.context.fillText('Instructions:', 118, 400); 
        this.context.font = '14px Courier New';
        this.context.fillText('Space -> Jump', 118, 420);
        this.context.fillText('ArrowLeft -> Move Left', 118, 440);
        this.context.fillText('ArrowRight -> Move Right', 118, 460);
        this.context.fillText('Key s -> Shoot fireball', 118, 480);
        this.context.fillText('Escape -> Stop level', 118, 500); 

        this.context.drawImage(this.parser.point, 400, 380, 40, 40);
        this.context.drawImage(this.parser.door, 400, 420, 40, 40);
        this.context.drawImage(this.parser.monsterLevel1, 395, 460, 50, 50);
        this.context.drawImage(this.parser.monsterLevel2, 400, 515, 30, 30);
        this.context.drawImage(this.parser.monsterLevel3, 400, 555, 30, 30);
        this.context.fillText('Catch me all and you receive a star', 445, 410);
        this.context.fillText('Catch me to end the level', 445, 445);
        this.context.fillText('Avoid me! Or you die', 445, 490);
        this.context.fillText('Avoid me! Or you die', 445, 530);
        this.context.fillText('Avoid me! Or you die', 445, 570);
    }
    
}