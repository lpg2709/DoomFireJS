var w, h;
var tamPixel;
var mapa;
var cnv = document.createElement("canvas");
var ctx = cnv.getContext("2d");
var fireRed = [
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
var fireBlue = [];

var fireGreen = [
    "#070707","#0c1f07","#132f07",
    "#1b4707","#305707","#326707",
    "#357707","#358f07","#409f07",
    "#34af07","#3fbf07","#34c707",
    "#3ADF07","#3ADF07","#49DF07",
    "#29D707","#4CD70F","#51cf0f",
    "#57cf0f","#57cf0f","#63CF17",
    "#66C717","#59C717","#58C71F",
    "#5BBF1F","#34BF1F","#55BF27",
    "#66BF27","#6FBF2F","#62B72F",
    "#59B72F","#63B737","#90CF6F",
    "#B5DF9F","#CEEFC7","#FFFFFF"
];



function start() {
    w = 100;
    h = 100;
    tamPixel = 5;
    cnv.width = w * tamPixel;
    cnv.height = h * tamPixel;
    cnv.style = "border: 1px solid black";
    initStruct();
    fireInit();
    var a = setInterval(fireLoop, 33.33);
    //render();
    //console.log(fireRed);
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
            ctx.fillStyle = fireRed[mapa[i * w + j]];
            ctx.fill();
            ctx.closePath();
        }
    }
}

start();
document.body.appendChild(cnv);


