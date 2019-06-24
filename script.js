//! Setup function fires automatically
function setup() {

    var socket = io();

    var side = 30;

    var matrix = [];

    //! Getting DOM objects (HTML elements)
    let grassCountElement = document.getElementById('grassCount');
    let grassEaterCountElement = document.getElementById('grassEaterCount');
    let predatorCountElement = document.getElementById('preCount');
    let blackHoleCountElement = document.getElementById('holeCount');
    let giantCountElement = document.getElementById('giantCount');
    let weatherType = document.getElementById('weather');

    //! adding socket listener on "data" <-- name, after that fire 'drawCreatures' function 
    socket.on("data", drawCreatures);

    function drawCreatures(data) {
        
        if(data.exanak == "Գարուն"){
            document.body.style.backgroundColor = "#82ed85";
        }else if(data.exanak == "Ամառ"){
            document.body.style.backgroundColor = "#ebff7a";
        }else if(data.exanak == "Ձմեռ"){
            document.body.style.backgroundColor = "#e5dcda";
        }else if(data.exanak == "Աշուն"){
            document.body.style.backgroundColor = "#ffb69e";
        }

        weatherType.innerText = "Եղանակ: " + data.exanak;
        console.log(data.exanak)
        //! after getting data pass it to matrix variable
        matrix = data.matrix;
        grassCountElement.innerText = data.grassCounter;
        grassEaterCountElement.innerText = data.grassEaterCounter;
        predatorCountElement.innerText = data.predatorCounter;
        blackHoleCountElement.innerText = data.blackHoleCounter;
        giantCountElement.innerText = data.giantCounter;
        //! Every time it creates new Canvas woth new matrix size
        createCanvas(matrix[0].length * side, matrix.length * side)
        //! clearing background by setting it to new grey color
        background('#acacac');
        //! Draw grassCount and grassEaterCount to HTML (use DOM objects to update information, yes, and use .innerText <- function)

        //! Drawing and coloring RECTs
        for (var i = 0; i < matrix.length; i++) {
            for (var j = 0; j < matrix[i].length; j++) {
                if (matrix[i][j] == 1) {
                    if(data.exanak=="Ձմեռ"){
                        fill("#6ae554");
                    }else{
                        fill("green");
                    }    
                    rect(j * side, i * side, side, side);
                } else if (matrix[i][j] == 2) {
                    if(data.exanak=="Ձմեռ"){
                        fill("#edb900");
                    }else{
                        fill("yellow");
                    }
                    rect(j * side, i * side, side, side);
                } else if (matrix[i][j] == 0) {
                    fill('#ccc');
                    rect(j * side, i * side, side, side);
                } else if (matrix[i][j] == 3) {
                    fill('red');
                    rect(j * side, i * side, side, side);
                } else if (matrix[i][j] == 4) {
                    fill('black');
                    rect(j * side, i * side, side, side);
                } else if (matrix[i][j] == 5) {
                    if(data.exanak=="Ամառ" || data.exanak=="Գարուն"){
                        fill("#0a007f");
                    }else{
                        fill("#3526e2");
                    }
                    rect(j * side, i * side, side, side);
                }
            }
        }
    }
}