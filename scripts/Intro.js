class Intro{
    constructor(canvas){
        this.$canvas = canvas;
        this.context= canvas.getContext('2d');
        this.posX = 0;
        this.posY = 0;
        this.buttonStart = {
            x:mWidth - 100,
            y:mHeight + 50,
            width:200,
            height:100
        };
        this.arrowLeft = {
            x:100,
            y:150,
            width:150,
            height:150
        };
        this.arrowRight = {
            x:570,
            y:150,
            width:150,
            height:150
        };
        this.count = 0;
        this.mWidth = this.canvas.width / 2;
        this.mHeight = 300;
    }

    getMousePos(event) {
        var rect = this.$canvas.getBoundingClientRect();
        this.posX = event.clientX - rect.left;
        this.posY = event.clientY - rect.top;
    }

    isInside(pos, rect){
        return pos.x > rect.x && pos.x < rect.x+rect.width && pos.y < rect.y+rect.height && pos.y > rect.y
    }

    drawButton(){
        context.fillStyle = 'black';
        context.fillRect(0, 0, $canvas.width, $canvas.height);
        context.fillStyle = 'grey';
        context.fillRect(mWidth - 100, mHeight + 50, 200, 100);
        context.fillStyle = 'white';
        context.font = '48px serif';
        context.fillText('START', mWidth - 70, mHeight + 110);  
        window.addEventListener(('load'), (image) => {
            context.drawImage(arrow, 100, 150, 150, 150);
            context.drawImage(arrowMirror, 570, 150, 150, 150);
            context.drawImage(raymanF, 250, 150, 300, 200);
        });
    }

    drawEverything (image){
        context.clearRect(0, 0, $canvas.width, $canvas.height);
        context.fillStyle = 'black';
        context.fillRect(0, 0, $canvas.width, $canvas.height);
        context.fillStyle = 'grey';
        context.fillRect(mWidth - 100, mHeight + 50, 200, 100);
        context.fillStyle = 'white';
        context.font = '48px serif';
        context.fillText('START', mWidth - 70, mHeight + 110);
        context.drawImage(arrow, 100, 150, 150, 150);
        context.drawImage(arrowMirror, 570, 150, 150, 150);
        context.drawImage(image, 250, 150, 300, 200);
    }

    setButtons (){
        this.$canvas.addEventListener('click', function(evt) {
            var mousePos = this.getMousePos(evt);
            arrayMusic[this.count].pause();
            if (this.isInside(mousePos, this.buttonStart)) {
            }else if(this.isInside(this.mousePos, this.arrowLeft)) {
                if(i > 0){
                    this.drawEverything(arrayImages[--this.count]);
                } else {
                    this.count= arrayImages.length - 1;
                    this.drawEverything(arrayImages[this.count]);
                }
            }else if(isInside(this.mousePos, this.arrowRight)){
                if(this.count < arrayImages.length - 1){
                    this.drawEverything(arrayImages[++this.count]);
                } else {
                    this.count = 0;
                    this.drawEverything(arrayImages[this.count]);
                }
            }
            arrayMusic[this.count].play();
        }, false);
    } 
}