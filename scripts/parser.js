class Parser{
    constructor(){
        this.characterPaused = new Image();
        this.characterRunning = new Image();
        this.characterFinished = new Image();
        this.point = new Image();
        this.door = new Image();
        this.monsterLevel1 = new Image();
        this.monsterLevel2 = new Image();
        this.monsterLevel3 = new Image();
    }

    load (url1, url2, url3, url4, url5, url6, url7, url8){
        this.characterPaused.src = url1
        this.characterRunning.src = url2;
        this.characterFinished.src = url3;
        this.point.src = url4;
        this.door.src = url5;
        this.monsterLevel1.src = url6;
        this.monsterLevel2.src = url7;
        this.monsterLevel3.src = url8;
    }


}