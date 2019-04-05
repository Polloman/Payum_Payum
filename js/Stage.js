class Stage {
    constructor(){
        this.bigRadius = 50 ;
        this.medRadius = 25;
        this.smallRadius = 10;
        this.arBalls = [
                [
                    new Ball(this.bigRadius,w2-(this.bigRadius*2),ctx,this.bigRadius,false),
                    new Ball(this.bigRadius,w2-(this.bigRadius/2),ctx,this.bigRadius,false),
                    new Ball(this.bigRadius,w2+(this.bigRadius/2),ctx,this.bigRadius,true),
                    new Ball(this.bigRadius,w2+(this.bigRadius*2),ctx,this.bigRadius,true)
                ],
                [
                    new Ball(this.bigRadius,w2-(this.bigRadius/2),ctx,this.bigRadius,false),
                    new Ball(this.bigRadius,w2+(this.bigRadius/2),ctx,this.bigRadius,true),
                    new Ball(this.bigRadius,this.bigRadius,ctx,this.bigRadius,false),
                    new Ball(this.bigRadius,(this.bigRadius/2),ctx,this.bigRadius,false),
                    new Ball(this.bigRadius,w-(this.bigRadius),ctx,this.bigRadius,true),
                    new Ball(this.bigRadius,w-(this.bigRadius/2),ctx,this.bigRadius,true)
                ],
                [
                    new Ball(this.bigRadius,w2-(this.bigRadius/2),ctx,this.bigRadius,false),
                    new Ball(this.bigRadius,w2+(this.bigRadius/2),ctx,this.bigRadius,true),
                    new Ball(this.bigRadius,w2-(this.bigRadius*8),ctx,this.bigRadius,false),
                    new Ball(this.bigRadius,w2+(this.bigRadius*8),ctx,this.bigRadius,true),
                    new Ball(this.bigRadius,w2-(this.bigRadius*16),ctx,this.bigRadius,false),
                    new Ball(this.bigRadius,w2+(this.bigRadius*16),ctx,this.bigRadius,true),
                    new Ball(this.bigRadius,w2-(this.bigRadius*32),ctx,this.bigRadius,false),
                    new Ball(this.bigRadius,w2+(this.bigRadius*32),ctx,this.bigRadius,true)
                ],
                [
                    new Ball(this.medRadius,w2-(this.medRadius*2),ctx,this.medRadius,false),
                    new Ball(this.medRadius,w2-(this.medRadius/2),ctx,this.medRadius,false),
                    new Ball(this.medRadius,w2+(this.medRadius/2),ctx,this.medRadius,true),
                    new Ball(this.medRadius,w2+(this.medRadius*2),ctx,this.medRadius,true),
                    new Ball(this.medRadius,w2-(this.medRadius*4),ctx,this.medRadius,false),
                    new Ball(this.medRadius,w2-(this.medRadius/4),ctx,this.medRadius,false),
                    new Ball(this.medRadius,w2+(this.medRadius/4),ctx,this.medRadius,true),
                    new Ball(this.medRadius,w2+(this.medRadius*4),ctx,this.medRadius,true),
                    new Ball(this.medRadius,w2-(this.medRadius*6),ctx,this.medRadius,false),
                    new Ball(this.medRadius,w2-(this.medRadius/6),ctx,this.medRadius,false),
                    new Ball(this.medRadius,w2+(this.medRadius/6),ctx,this.medRadius,true),
                    new Ball(this.medRadius,w2+(this.medRadius*6),ctx,this.medRadius,true),
                    new Ball(this.medRadius,w2-(this.medRadius*8),ctx,this.medRadius,false),
                    new Ball(this.medRadius,w2-(this.medRadius/8),ctx,this.medRadius,false),
                    new Ball(this.medRadius,w2+(this.medRadius/8),ctx,this.medRadius,true),
                    new Ball(this.medRadius,w2+(this.medRadius*8),ctx,this.medRadius,true),
                    new Ball(this.medRadius,w2-(this.medRadius*10),ctx,this.medRadius,false),
                    new Ball(this.medRadius,w2-(this.medRadius/10),ctx,this.medRadius,false),
                    new Ball(this.medRadius,w2+(this.medRadius/10),ctx,this.medRadius,true),
                    new Ball(this.medRadius,w2+(this.medRadius*10),ctx,this.medRadius,true)
                ]
            ]
        }
    }
    