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
        this.game = new Game(this.$canvas, this);
    }

    beginMenu(){
        arrayMusic[0].play();
        window.addEventListener(('load'), (image) => {
            this.drawBeginMenu(raymanF);
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
        this.context.font = '48px verdana';
        this.context.fillText('START', mWidth - 70, mHeight + 110);
        this.context.drawImage(arrow, 100, 150, 150, 150);
        this.context.drawImage(arrowMirror, 570, 150, 150, 150);
        if(image === raymanF)
            this.context.drawImage(image, 290, 150, 200, 200);
        else
            this.context.drawImage(image, 250, 150, 300, 200);
    }

    isInside(pos, rect){
        return pos.x > rect.x && pos.x < rect.x+rect.width && pos.y < rect.y+rect.height && pos.y > rect.y
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
                    this.changeMenu(1);
                    //this.loop();
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
                }else if(this.isInside(mousePos,level2) /*&& !this.locked.includes(2))*/) {
                    console.log('ola');
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
                    this.game.resetGame();
                    this.game.startLevel(idLevel);
                }
            }
        }, false);
    }

    drawLevelsMenu (){
        this.clearScreen();   
        this.context.fillStyle = 'grey';
        this.context.font = '70px verdana';
        this.context.fillText('LEVELS', mWidth - 120, 100);   
        this.context.drawImage(arrowBack, 40, 30, 80, 80);
        this.context.drawImage(backgroundOne, 115, 250, 100, 100);
        this.context.drawImage(backFive, 235, 250, 100, 100);
        //if(this.locked.includes(2))
            this.context.drawImage(padlock, 260, 270, 50, 50);
        this.context.drawImage(backSeven, 355, 250, 100, 100);
        //if(this.locked.includes(3))
            this.context.drawImage(padlock, 380, 270, 50, 50);
        this.context.drawImage(backTwo, 475, 250, 100, 100);
        //if(this.locked.includes(4))
            this.context.drawImage(padlock, 500, 270, 50, 50);
        this.context.drawImage(backgroundOne, 595, 250, 100, 100); 
        //if(this.locked.includes(5))
            this.context.drawImage(padlock, 620, 270, 50, 50);
    }
    
    /*loop (timestamp) {
        this.drawLevelsMenu();
        window.requestAnimationFrame((timestamp) => this.loop(timestamp));
    }*/
}