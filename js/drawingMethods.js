function gravity(mode,juego = new Game(ctx,1)) {
    var bigRadius = 50;
    var medRadius = 25;
    var smallRadius = 10;
    var modo = mode;
    var game;
    var stage = new Stage();
    game = juego;
    var powUp = [];
    var inicio = true;
    var player;
    var fondo;
    var arrayBall = [];
    var music = new soundBack(game.stageMusic[game.level]);
    var stageClear = new Image();
    stageClear.src = "images/StageClear.png";
    var dead = new soundEvent("sounds/hasmuerto.m4a");
    var gameOver = new soundEvent("sounds/gameover.m4a");
    var stageFinish = new soundEvent("sounds/stageClear.m4a");
    var completado = new soundEvent("sounds/completado.m4a");

    // llamada de función que pinta
    intervalID = setInterval (function () {
        if (inicio){
            arrayBall = start(game,modo,stage);
            inicio = !inicio;
            player = new Player (ctx);
            fondo = new Background(w,h,ctx,game.imgback[game.level]);
            music.playB();
        }
        for (var i = 0; i<arrayBall.length; i++){
            if (checkCollisionPlayer(arrayBall[i],player)){
                clearInterval(intervalID);
                music.stopB();
                game.lives--;
                player = 0;
                arrayBall = [];
                if (game.lives == 0){
                    // gameOver.playE();
                    window.alert(`GAME OVER - Score: ${game.score}`);
                    gameOver.playE();
                }
                else{
                    dead.playE();
                    setTimeout( function(){
                        gravity(modo,game);
                    },3000);
                }
                return true;
            }
        }
        for (var i = 0; i < arrayBall.length; i++){
           for (var j = 0; j < player.balas.length; j++){
                if (checkCollisionBullet(arrayBall[i],player.balas[j])){
                    player.balas.splice(j,1);
                    if (arrayBall[i].radius == bigRadius){
                        arrayBall.push(new Ball (
                            arrayBall[i].y,
                            arrayBall[i].posX-medRadius,
                            ctx,
                            medRadius,
                            false,
                            -4
                        ));
                        arrayBall.push(new Ball (
                            arrayBall[i].y,
                            arrayBall[i].posX+medRadius,
                            ctx,
                            medRadius,
                            true,
                            -4
                            ));
                        if (createPowerUp ()){
                            powUp.push(new powerup(arrayBall[i].posX,arrayBall[i].y,ctx,givePowerUp()));
                        }
                        arrayBall[i].pop.play();
                        arrayBall.splice(i,1);
                        game.score +=100;
                    }
                    else if (arrayBall[i].radius == medRadius){
                        arrayBall.push(new Ball (
                            arrayBall[i].y,
                            arrayBall[i].posX+smallRadius,
                            ctx,
                            smallRadius,
                            false,
                            -4
                        ));
                        arrayBall.push(new Ball (
                            arrayBall[i].y,
                            arrayBall[i].posX+smallRadius,
                            ctx,
                            smallRadius,
                            true,
                            -4
                            ));
                        if (createPowerUp ()){
                            console.log(`posX: ${arrayBall[i].posX} posY:${arrayBall[i].y}`);
                            powUp.push(new powerup(arrayBall[i].posX,arrayBall[i].y,ctx,givePowerUp()));
                        }
                        arrayBall[i].pop.play();
                        arrayBall.splice(i,1);
                        game.score +=175;
                    }
                    else {
                        arrayBall[i].pop.play();
                        arrayBall.splice(i,1);
                        game.score +=250;
                    }
                }
           }
        }
        for (var i = 0; i < powUp.length; i++){
            if (checkConllisionPowerUp (powUp[i],player)){
                player.power = powUp[i].power; 
                powUp.splice(i,1);            
            }
        }
        for (var i = 0; i < arrayBall.length; i++){
            arrayBall[i].move(); 
        }  
        for (var i = 0; i < powUp.length; i++){
            powUp[i].move();
            if (powUp[i].counter == 180){
                powUp.splice(i,1);
            } 
        }  
        for (var i = 0; i < player.balas.length; i++){
            player.balas[i].move();
            if (player.balas[i].posY <= 0){
                player.balas.splice(i,1);
            }
        }
        if (arrayBall.length == 0){
            clearInterval(intervalID);
            game.level++;
            player = 0;
            arrayBall = [];
            if (game.level == 4){
                completado.playE();
                window.alert(`VICTORIA - Score: ${game.score}`);
            }
            else{
                music.stopB();
                ctx.beginPath();
                ctx.globalAlpha = 1;
                this.ctx.drawImage(stageClear,0,0,w,h);
                this.ctx.fill();
                this.ctx.restore();
                this.ctx.closePath();
                stageFinish.playE();
                setTimeout( function(){
                    gravity(modo,game);
                },3000);
            }

            return true;
        } 
        drawAll(arrayBall,player,powUp,fondo,game);

    },1000/60);
}
function drawAll (ball,player,powUp,fondo,game){
    this.ctx.beginPath();
    this.ctx.clearRect(0, 0, w, h);
    fondo.draw(game.imgback[game.level]);
    this.ctx.restore();
    this.ctx.closePath();
    this.ctx.save();
    this.ctx.beginPath();
    for (var i = 0; i < ball.length; i++){
        ball[i].drawBall();        
    }
    for (var i = 0; i < powUp.length; i++){
        powUp[i].drawPower();        
    }
    this.ctx.beginPath();
    player.drawPlayer();
    this.ctx.fill();
    this.ctx.restore();
    this.ctx.closePath();
}
function checkCollisionBullet (ball,bullet) {
    var px = ball.posX; // En principio son iguales
    if ( px < bullet.posX ) px = bullet.posX;
    if ( px > bullet.posX + bullet.width ) px = bullet.posX + bullet.width;
    var py = ball.y;
    if ( py < bullet.posY ) py = bullet.posY;
    if ( py > bullet.posY + bullet.height ) py = bullet.posY + bullet.height;
    distancia = Math.sqrt( (ball.posX - px)*(ball.posX - px) + (ball.y - py)*(ball.y - py) );
    if ( distancia <= ball.radius ) {
    	return true;
    }
    else return false;
}
function checkCollisionPlayer (ball,player) {
    var px = ball.posX; // En principio son iguales
    if ( px < player.posX ) px = player.posX;
    if ( px > player.posX + player.width ) px = player.posX + player.width;
    var py = ball.y;
    if ( py < player.posY ) py = player.posY;
    if ( py > player.posY + player.height ) py = player.posY + player.height;
    distancia = Math.sqrt( (ball.posX - px)*(ball.posX - px) + (ball.y - py)*(ball.y - py) );
    if ( distancia <= ball.radius ) {
    	return true;
    }	
    else{
        return false;
    }
}
function checkConllisionPowerUp (power,player){
    if (( power.posX > (player.posX+player.width) ) ||
       ( (power.posX+power.width) < player.posX ) ||
       ( power.posY > (player.posY+player.height) ) ||
       ( (power.posY+power.height) < player.posY )) return false;
    return true;
}
function createPowerUp (){
    if ((Math.floor(Math.random()*1000)) > 950) {
        console.log("crea powerup");
        return true;
    };
}
function givePowerUp (){
    var poder = Math.floor(Math.random()*3);
    switch (poder){
        case 0:
            console.log("normal");
            return "normal";
        case 1:
            console.log("doble");
            return "doble";
        case 2:
            console.log("machineGun");
            return "machineGun";
    }
}
function start(game,mode,stage) {
    var arr = [];
    if (mode==0){
        console.log(stage.arBalls[game.level]);
        arr = stage.arBalls[game.level];
    }
    else {
        arr.push(new Ball(medRadius,w2-(medRadius*2),ctx,medRadius,false))
        arr.push(new Ball(medRadius,w2-(medRadius/2),ctx,medRadius,false))
        arr.push(new Ball(medRadius,w2+(medRadius/2),ctx,medRadius,true))
        arr.push(new Ball(medRadius,w2+(medRadius*2),ctx,medRadius,true))
    }
    return arr;
}
function soundBack(src) {
    this.soundBack= document.createElement("audio");
    this.soundBack.src = src;
    this.soundBack.setAttribute("preload", "auto");
    this.soundBack.setAttribute("controls", "none");
    this.soundBack.setAttribute("loop", "loop");
    this.soundBack.style.display = "none";
    document.body.appendChild(this.soundBack);
    this.playB = function(){
      this.soundBack.play();
    };
    this.stopB = function(){
      this.soundBack.pause();
    };
}
function soundEvent(src) {
    this.soundEvent= document.createElement("audio");
    this.soundEvent.src = src;
    this.soundEvent.setAttribute("preload", "auto");
    this.soundEvent.setAttribute("controls", "none");
    this.soundEvent.style.display = "none";
    document.body.appendChild(this.soundEvent);
    this.playE = function(){
      this.soundEvent.play();
    };
    this.stopE = function(){
      this.soundEvent.pause();
    };
}
