class Ball {
    constructor (he,we,ctx,r,movement,g=0){
        this.posX = we;
        this.posY = he;
        this.ctx = ctx;
        this.radius = r;
        this.y0 = he;
        this.y = he;
        this.gY = g;
        this.direction = movement;
        this.img = new Image();
        this.img.src = "images/ballRed.png";
        this.pop = new sound ("sounds/pop.m4a");
    }
    drawBall (){
        this.ctx.beginPath();
        this.ctx.fillStyle = "green"
        this.ctx.globalAlpha = 0.8; 
        this.ctx.arc(this.posX, this.y, this.radius, 0, 2 * Math.PI)
        this.ctx.fill()
        this.ctx.restore()
        this.ctx.closePath()
        this.ctx.beginPath();
        this.ctx.globalAlpha = 1;
        this.ctx.drawImage(this.img,(this.posX-this.radius), (this.y-this.radius), (this.radius*2), (this.radius*2));
        this.ctx.fill()
        this.ctx.restore()
        this.ctx.closePath()
    }
    move() {
        var gravity = 0.4;
        var velocity = 3;
        var bigBall = -21;
        var mediumBall = -17;
        var smallBall = -14;
        var jump = 0;
        var bigRadius = 50;
        var medRadius = 25;
        if (this.radius == bigRadius) jump = bigBall; 
        else if (this.radius == medRadius) jump = mediumBall;
        else jump = smallBall;
        if (this.y <= this.radius) {
          this.gY = 0;
          this.gY += gravity;
          this.y = this.radius;
          this.y += this.gY;
        } 
        else if (this.y >= (h - this.radius)) {
            this.gY = jump;
            this.y -= 10;
        }
        else { 
          this.gY += gravity;
          this.y += this.gY;
        }
        if (this.direction){
          if (this.posX >= w - this.radius){
              this.direction = !this.direction;
          }
        }
        else{
          if (this.posX <= this.radius){
            this.direction = !this.direction;
          }
        }
        if (this.direction) this.posX += velocity;
        else this.posX -= velocity;

    }
}
function sound(src) {
  this.sound= document.createElement("audioBall");
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