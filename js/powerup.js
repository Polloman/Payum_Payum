class powerup {
    constructor (x,y,ctx,p){
        this.ctx = ctx;
        this.height = 30;
        this.width = 30;
        this.posX = x;
        this.posY = y;
        this.power = p;
        this.counter = 0;
        this.imgNor = new Image();
        this.imgNor.src = "images/normal.png";
        this.imgDou = new Image();
        this.imgDou.src = "images/doble.jpg";
        this.imgMac = new Image();
        this.imgMac.src = "images/machineG.jpg";

    }
    drawPower (){
        this.ctx.beginPath();
        this.ctx.globalAlpha = 1;
        if (this.power == "normal"){
            this.ctx.drawImage(this.imgNor,this.posX, this.posY, this.width, this.height);
        }
        else if (this.power == "doble"){
            this.ctx.drawImage(this.imgDou,this.posX, this.posY, this.width, this.height);
        }
        else {
            this.ctx.drawImage(this.imgMac,this.posX, this.posY, this.width, this.height);
        }
        this.ctx.fill();
        this.ctx.restore();
        this.ctx.closePath();
    }
    move(){
        var growth = 3;
        if ((this.posY + this.height) < h){
            this.posY += growth;        
        }
        else{
            this.posY = h - this.height;
            this.counter++;
        }
        
    }
}