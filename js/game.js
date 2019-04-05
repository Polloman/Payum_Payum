class Game {
    constructor(ctx,life=0){
        this.lives = life;
        this.score = 0;
        this.level = 0;
        this.imgback = [
            "images/whiteh.jpeg",
            "images/moncloa.jpeg",
            "images/chigi.jpeg",
            "images/kremlin.jpeg"
        ];
        this.stageMusic = [
            "sounds/whiteh.m4a",
            "sounds/moncloa.m4a",
            "sounds/chigi.m4a",
            "sounds/kremlin.m4a"
        ]; 
    }
}