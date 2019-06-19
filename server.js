
//! Requiring modules  --  START
var Grass = require("./GameOfLife/grass.js");
var GrassEater = require("./GameOfLife/grassEater.js");
var random = require('./GameOfLife/random.js');
var BlackHole = require('./GameOfLife/blackHole.js');
var Giant = require('./GameOfLife/giant.js');
var Predator = require('./GameOfLife/predator.js');
//! Requiring modules  --  END


//! Setting global arrays  --  START
grassArr = []; //խոտերի զանգված
eatArr = []; //խոտակերների զանգված
preArr = []; //գիշատիչներ
holeArr = [];// սև անցքեր
giantArr = [];//հսկաների զանգված
matrix = [];
grassHashiv = 0;
grassEaterHashiv = 0;
predatorHashiv = 0;
blackHoleHashiv = 0;
giantHashiv = 0;
//! Setting global arrays  -- END




//! Creating MATRIX -- START
function matrixGenerator(matrixSize, grassArr, eatArr, preArr, holeArr, giantArr) {
    for (let i = 0; i < matrixSize; i++) {
        matrix[i] = [];
        for (let o = 0; o < matrixSize; o++) {
            matrix[i][o] = 0;
        }
    }
    for (let i = 0; i < grassArr; i++) {
        let customX = Math.floor(random(matrixSize)); // 0-9
        let customY = Math.floor(random(matrixSize)); // 4
        matrix[customY][customX] = 1;
    }
    for (let i = 0; i < eatArr; i++) {
        let customX = Math.floor(random(matrixSize));
        let customY = Math.floor(random(matrixSize));
        matrix[customY][customX] = 2;
    }
    for (let i = 0; i < preArr; i++) {
        let customX = Math.floor(random(matrixSize));
        let customY = Math.floor(random(matrixSize));
        matrix[customY][customX] = 3;
    }
    for (let i = 0; i < holeArr; i++) {
        let customX = Math.floor(random(matrixSize));
        let customY = Math.floor(random(matrixSize));
        matrix[customY][customX] = 4;
    }
    for (let i = 0; i < giantArr; i++) {
        let customX = Math.floor(random(matrixSize));
        let customY = Math.floor(random(matrixSize));
        matrix[customY][customX] = 5;
    }
}
matrixGenerator(20, 12, 50, 40, 7, 10);
//! Creating MATRIX -- END



//! SERVER STUFF  --  START
var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
app.use(express.static("."));
app.get('/', function (req, res) {
    res.redirect('index.html');
});
server.listen(3000);
//! SERVER STUFF END  --  END



function creatingObjects() {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 2) {
                var grassEater = new GrassEater(x, y);
                eatArr.push(grassEater);
                grassEaterHashiv++;
            } else if (matrix[y][x] == 1) {
                var grass = new Grass(x, y);
                grassArr.push(grass);
                grassHashiv++;
            } else if (matrix[y][x] == 3) {
                var predator = new Predator(x, y);
                preArr.push(predator);
                predatorHashiv++;
            } else if (matrix[y][x] == 4) {
                var blackhole = new BlackHole(x, y);
                holeArr.push(blackhole);
                blackHoleHashiv++;
            } else if (matrix[y][x] == 5) {
                var giant = new Giant(x, y);
                giantArr.push(giant);
                giantHashiv++;
            }
        }
    }
}
creatingObjects();

function game() {
    if (grassArr[0] !== undefined) {
        for (var i in grassArr) {
            grassArr[i].mul();
        }
    }
    if (eatArr[0] !== undefined) {
        for (var i in eatArr) {
            eatArr[i].eat();
        }
    }
    if (preArr[0] !== undefined) {
        for (var i in preArr) {
            preArr[i].eat();
        }
    }
    if (holeArr[0] !== undefined) {
        for (var i in holeArr) {
            holeArr[i].eat();
        }
    }
    if (giantArr[0] !== undefined) {
        for (var i in giantArr) {
            giantArr[i].eat();
        }
    }

    //! Object to send
    let sendData = {
        matrix: matrix,
        grassCounter: grassHashiv,
        grassEaterCounter: grassEaterHashiv,
        predatorCounter: predatorHashiv,
        blackHoleCounter: blackHoleHashiv,  
        giantCounter: giantHashiv,
    }

    //! Send data over the socket to clients who listens "data"
    io.sockets.emit("data", sendData);
    console.log(sendData);
}

setInterval(game, 300);