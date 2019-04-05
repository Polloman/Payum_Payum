class disparo {
    constructor (x,ctx,p){
        this.ctx = ctx;
        this.height = h;
        this.width = 20;
        this.posX = x - (this.width/2);
        this.posY = h;
        this.power = p;
        this.imgGun = new Image();
        this.imgGun.src = "images/bala.png";
        this.imgArrow = new Image();
        this.imgArrow.src = "images/arrowHead.png";
        this.payum = new sound("sounds/payum.m4a");
        this.ratata = new sound ("sounds/ratata.m4a")
    }
    drawDisparo (){
        if (this.power == "machineGun"){
            this.ctx.globalAlpha = 1; 
            this.ctx.drawImage(this.imgGun,this.posX, this.posY, this.width, this.height);
            this.ratata.play();
        }
        else{
            this.ctx.fillStyle = "black";
            this.ctx.globalAlpha = 1; 
            this.ctx.drawImage(this.imgArrow,this.posX, this.posY, this.width, 20);
            this.ctx.restore();
            this.ctx.closePath();
            this.ctx.beginPath();
            this.ctx.fillStyle = "black";
            this.ctx.globalAlpha = 1; 
            this.ctx.rect(this.posX, (this.posY+20), this.width, this.height);
            console.log(this.payum);
            this.payum.play();
        }
        
    }
    move(){
        var growth = 10;
        this.posY -= growth;
        if (this.power == "machineGun"){
            this.height = 30;
        }
        else{
            this.height += growth;
        }
        
    }
}
function sound(src) {
    this.sound= document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.setAttribute("volume", "0.9");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function(){
      this.sound.play();
    }
    this.stop = function(){
      this.sound.pause();
    }
  }