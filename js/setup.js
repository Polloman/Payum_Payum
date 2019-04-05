let w, h, w2, h2, bottomObsImg, topObsImg, vidas;

function setup(canvas, mode) {
    function setCanvasDimensions() {
        canvas.setAttribute("height", window.innerHeight)
        canvas.setAttribute("width", window.innerWidth)
    }

    w = window.innerWidth;
    h = window.innerHeight;
    w2 = w / 2;
    h2 = h / 2;

    setCanvasDimensions()
    hideHtml();
    var game;
    if (mode == 0){
        game = new Game(ctx,3);
        gravity(mode,game)
    }else{
        game = new Game (ctx);
    }
    // draw();
    function hideHtml() {
        document.getElementById("main").classList.toggle("hola");
        document.getElementById("container").classList.toggle("canvas");
    }

}