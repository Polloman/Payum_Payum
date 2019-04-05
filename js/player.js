class Player {
    constructor (ctx){
        this.ctx = ctx;
        this.height = 50;
        this.width = 50;
        this.posX = w2 - (this.width/2);
        this.posY = h - this.height;
        this.power = "normal";
        this.balas = [];
        this.keys = {};
        this.imagePlayer = new Image();
        this.imagePlayer.src = "";
        this.playerImg = new Image();
        this.playerImg.src = "images/fijo.png";
        this.setListeners();
    }
    drawPlayer (){
        for (var i = 0; i < this.balas.length; i++){
            this.balas[i].drawDisparo();
            this.ctx.fill();
            this.ctx.restore();
            this.ctx.closePath(); 
        }   

        this.ctx.beginPath();
        this.ctx.globalAlpha = 1;
        this.ctx.fillStyle = "blue";
        this.ctx.drawImage(this.playerImg,this.posX-20, this.posY-20, this.width+20, this.height+20);
        // this.ctx.rect(this.posX, this.posY, this.width, this.height);
    }
    setListeners() {
        document.onkeydown = function(e) {
            if ([37, 39, 32].indexOf(e.keyCode) >= 0) {
                e.preventDefault();
                this.keys[e.keyCode] = true;
            }
            if (this.keys[37]){
                if (this.posX <= 0){
                    this.posX = 0; 
                }
                else this.posX -= 20;
            }
            if (this.keys[39]){
                if ((this.posX + this.width) >= (w - (this.width/2))){
                    this.posX = (w - (this.width));
                }
                else this.posX += 20;
            }
            if (this.keys[32]){
                if ((this.power == "normal") && (this.balas.length < 1)){
                    this.balas.push(new disparo((this.posX + (this.width/2)),this.ctx,this.power));
                }
                if ((this.power == "doble") && (this.balas.length < 2)){
                    this.balas.push(new disparo((this.posX + (this.width/2)),this.ctx,this.power));
                }
                if ((this.power == "machineGun") && (this.balas.length < 6)){
                    this.balas.push(new disparo((this.posX + (this.width/2)),this.ctx,this.power));
                }
            }
        }.bind(this);
        document.onkeyup = function(e){
            if ([37, 39, 32].indexOf(e.keyCode) >= 0) {
              this.keys[e.keyCode] = false;
            }
        }.bind(this);
    }
}