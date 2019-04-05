class Background {
    constructor(w, h, ctx,image) {
      this.ctx = ctx;
      this.img = new Image();
      this.h = h;
      this.w = w;
      this.x = 0;
      this.y = 0;
  
    }
  
    draw(image = "images/kremlin.jpeg") {
      this.img.src = image;
      this.ctx.globalAlpha = 1; 
      this.ctx.drawImage(
        this.img,
        this.x,
        this.y,
        this.w,
        this.h
      );
    }
}