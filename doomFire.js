var w, h;
var tamPixel = 5;
var mapa;
var cnv = document.createElement("canvas");
var ctx = cnv.getContext("2d");
var fireRGB = [
    "#070707", "#1f0707", "#2f0f07",
    "#470f07", "#571707", "#671f07",
    "#771f07", "#8f2707", "#9f2f07",
    "#af3f07", "#bf4707", "#c74707",
    "#DF4F07", "#DF5707", "#DF5707",
    "#D75F07", "#D7670F", "#cf6f0f",
    "#cf770f", "#cf7f0f", "#CF8717",
    "#C78717", "#C78F17", "#C7971F",
    "#BF9F1F", "#BF9F1F", "#BFA727",
    "#BFA727", "#BFAF2F", "#B7AF2F",
    "#B7B72F", "#B7B737", "#CFCF6F",
    "#DFDF9F", "#EFEFC7", "#FFFFFF"
];



function start() {
    w = 80;
    h = 80;
    cnv.width = w * tamPixel;
    cnv.height = h * tamPixel;
    cnv.style = "border: 1px solid black";
    initStruct();
    fireInit();
    var a = setInterval(fireLoop, 33.33);
    console.log(fireRGB);
}
function initStruct() {
    mapa = new Array(w * h);
    for (let i = 0; i < h; i++) {
        for (let j = 0; j < w; j++) {
            mapa[i * w + j] = 0;
        }
    }
}
function fireInit() {
    var finalStruct = (w * h) - w;
    for (let j = 0; j < h; j++) {
        mapa[finalStruct + j] = 36;
    }
}
function fireLoop() {
    for (let i = 0; i < h; i++) {
        for (let j = 0; j < w; j++) {
            if (i != h - 1){
                let fireIntensity = (mapa[(i + 1) * w + j] - Math.floor(Math.random()*3));
                if(fireIntensity >= 0)
                    mapa[i * w + j] = fireIntensity;
                else
                    mapa[i * w + j] = 0
            }
        }
    }
    render();
}

function render() {
    for (let i = 0; i < h; i++) {
        for (let j = 0; j < w; j++) {
            ctx.beginPath();
            ctx.rect(j * tamPixel, i * tamPixel, tamPixel, tamPixel);
            ctx.fillStyle = fireRGB[mapa[i * w + j] - 1];
            ctx.fill();
            ctx.closePath();
        }
    }
}

start();
document.body.appendChild(cnv);

