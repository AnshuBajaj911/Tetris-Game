
var sq = 30;
var css = 0;
var interval;
var flag = 0;
var tcsColor;
var temp = 0;
var currentFigure = 0;
var counter = new Array(20);
counter.fill(0);
var gameBoard = [20][10];
var gameBoard = new Array(20);
for (var i = 0; i < 20; i++) {
    gameBoard[i] = new Array(10);
    gameBoard[i].fill(0);

}
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
function DrawSquare(x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x * sq, y * sq, sq, sq);
    ctx.strokeStyle = "#000000";
    ctx.lineWidth = 1;
    ctx.strokeRect(x * sq, y * sq, sq, sq);
}
function DrawBoard() {
    for (var i = 0; i < 20; i = i + 1)
        for (var j = 0; j < 10; j = j + 1)
            DrawSquare(j, i, "#FFFFFF");
}

function Check() {
    for (var i = 0; i < 10; i++)if (gameBoard[2][i] != 0 || gameBoard[1][i] != 0 || gameBoard[0][i] != 0) {
        clearInterval(interval);
        console.log(counter);
        console.log(gameBoard);
        alert("Game Over");
        flag = 1;
    } else {
        if (cs3[1] < 19 && gameBoard[cs3[1] + 1][cs3[0]] == 0) {/*alert("y"); */ } else css = 19;
        if (cs4[1] < 19 && gameBoard[cs4[1] + 1][cs4[0]] == 0) { } else css = 19;
        if (cs2[1] < 19 && gameBoard[cs2[1] + 1][cs2[0]] == 0) { } else css = 19;
        if (cs1[1] < 19 && gameBoard[cs1[1] + 1][cs1[0]] == 0) { }
        else css = 19;
    }
}


//    DrawBoard();

var cs1 = [];
var cs2 = [];
var cs3 = [];
var cs4 = [];
var csColor;
var colorArray = ["red", "green", "blue", "yellow", "orange", "pink", "cyan"];
function DrawLShape() {

    if (flag == 0) {
        DrawSquare(0, 0, "red");
        cs1 = [0, 0];
        DrawSquare(0, 1, "red");
        cs2 = [0, 1];
        DrawSquare(0, 2, "red");
        cs3 = [0, 2];
        DrawSquare(1, 2, "red");
        cs4 = [1, 2];
        csColor = colorArray[0];
        tcsColor = 0;
        currentFigure = 1;
        temp = 0;
    }
}

//  DrawStickShape();    
function DrawJShape() {

    if (flag == 0) {
        DrawSquare(1, 0, "green");
        cs1 = [1, 0];
        DrawSquare(1, 1, "green");
        cs2 = [1, 1];
        DrawSquare(1, 2, "green");
        cs3 = [1, 2];
        DrawSquare(0, 2, "green");
        cs4 = [0, 2];
        csColor = colorArray[1];
        tcsColor = 1;
        currentFigure = 2;
        temp = 0;
    }
}
function DrawSShape() {
    if (flag == 0) {
        DrawSquare(2, 0, "blue");
        cs1 = [2, 0];
        DrawSquare(1, 0, "blue");
        cs2 = [1, 0];
        DrawSquare(1, 1, "blue");
        cs3 = [1, 1];
        DrawSquare(0, 1, "blue");
        cs4 = [0, 1];
        csColor = colorArray[2];
        tcsColor = 2;
        currentFigure = 6;
        temp = 0;
    }
}
function DrawZShape() {
    if (flag == 0) {
        DrawSquare(0, 0, "yellow");
        cs1 = [0, 0];
        DrawSquare(1, 0, "yellow");
        cs2 = [1, 0];
        DrawSquare(1, 1, "yellow");
        cs3 = [1, 1];
        DrawSquare(2, 1, "yellow");
        cs4 = [2, 1];
        csColor = colorArray[3];
        tcsColor = 3;
        currentFigure = 5;
        temp = 0;
    }
}
function DrawSquareShape() {
    if (flag == 0) {
        DrawSquare(0, 0, "orange");
        cs1 = [0, 0];
        DrawSquare(0, 1, "orange");
        cs2 = [0, 1];
        DrawSquare(1, 0, "orange");
        cs3 = [1, 0];
        DrawSquare(1, 1, "orange");
        cs4 = [1, 1];
        csColor = colorArray[4];
        tcsColor = 4;
        currentFigure = 3;
        temp = 0;
    }
}
function DrawStickShape() {
    if (flag == 0) {
        DrawSquare(0, 0, "pink");
        cs1 = [0, 0];
        DrawSquare(0, 1, "pink");
        cs2 = [0, 1];
        DrawSquare(0, 2, "pink");
        cs3 = [0, 2];
        DrawSquare(0, 3, "pink");
        cs4 = [0, 3];
        csColor = colorArray[5];
        tcsColor = 5;
        currentFigure = 4;
        temp = 0;
    }
}

function DrawTShape() {
    if (flag == 0) {
        DrawSquare(1, 0, " cyan");
        cs1 = [1, 0];
        DrawSquare(0, 1, "cyan");
        cs2 = [0, 1];
        DrawSquare(1, 1, "cyan");
        cs3 = [1, 1];
        DrawSquare(2, 1, "cyan");
        cs4 = [2, 1];
        csColor = colorArray[6];
        tcsColor = 6;
        currentFigure = 7;
        temp = 0;
    }
}



//alert("Will move");
function ShapeDecider(sd) {
    if (sd == 0) DrawJShape();
    if (sd == 1) DrawLShape();
    if (sd == 2) DrawSShape();
    if (sd == 3) DrawSquareShape();
    if (sd == 4) DrawStickShape();
    if (sd == 5) DrawTShape();
    if (sd == 6) DrawZShape();

}

function ScoreUp(r) {
    // alert("Score up row number filled : "+r);
    gameBoard.splice(r, 1);
    gameBoard.unshift(new Array(10));
    gameBoard[0].fill(0);
    console.log(gameBoard);
    for (var i = 18; i >= 0; i--) {
        counter[i + 1] = counter[i];
    }

    for (var i = 0; i < 20; i++)
        for (var j = 0; j < 10; j++) {

            if (gameBoard[i][j] == 0) DrawSquare(j, i, "#FFFFFF");
            else DrawSquare(j, i, colorArray[gameBoard[i][j] - 1]);
        }
    var score = document.getElementById("score").innerHTML;
    var x = parseInt(score);
    x = x + 50;
    document.getElementById("score").innerHTML = "" + x;
    // alert(score+50);

}
function ClearCurrentShape() {


    if (cs1[0] == 19 || cs2[0] == 19 || cs3[0] == 19 || cs4[0] == 19 || cs1[1] == 19 || cs2[1] == 19 || cs3[1] == 19 || cs4[1] == 19 || css == 19) {
        //clearInterval(interval);
        gameBoard[cs1[1]][cs1[0]] = tcsColor + 1;
        counter[cs1[1]]++;
        gameBoard[cs2[1]][cs2[0]] = tcsColor + 1;
        counter[cs2[1]]++;
        gameBoard[cs3[1]][cs3[0]] = tcsColor + 1;
        counter[cs3[1]]++;
        gameBoard[cs4[1]][cs4[0]] = tcsColor + 1;
        counter[cs4[1]]++;
        if (counter[cs1[1]] >= 10) {
               /* alert("call for cs1");*/ ScoreUp(cs1[1]);
        }
        if (counter[cs2[1]] >= 10) {
              /*  alert("call for cs2");*/  ScoreUp(cs2[1]);
        }
        if (counter[cs3[1]] >= 10) {
              /*  alert("call for cs3");*/  ScoreUp(cs3[1]);
        }
        if (counter[cs4[1]] >= 10) {
             /*  alert("call for cs4"); */  ScoreUp(cs4[1]);
        }
        //  console.log(gameBoard)
        cs1 = [];
        cs2 = [];
        cs3 = [];
        cs4 = [];
        css = 0;
        var sd = Math.floor(Math.random() * 6);
        ShapeDecider(sd);
    }

    DrawSquare(cs1[0], cs1[1], "white");
    DrawSquare(cs2[0], cs2[1], "white");
    DrawSquare(cs3[0], cs3[1], "white");
    DrawSquare(cs4[0], cs4[1], "white");
}
function MoveRight() {
    if (gameBoard[cs4[1]][cs4[0] + 1] != 0 || gameBoard[cs3[1]][cs3[0] + 1] != 0 || gameBoard[cs2[1]][cs2[0] + 1] != 0 || gameBoard[cs1[1]][cs1[0] + 1] != 0) { }
    else {
        ClearCurrentShape();
        cs1[0]++;
        DrawSquare(cs1[0], cs1[1], csColor);
        cs2[0]++;
        DrawSquare(cs2[0], cs2[1], csColor);
        cs3[0]++;
        DrawSquare(cs3[0], cs3[1], csColor);
        cs4[0]++;
        DrawSquare(cs4[0], cs4[1], csColor);
    }
}
function MoveLeft() {
    if (gameBoard[cs4[1]][cs4[0] - 1] != 0 || gameBoard[cs3[1]][cs3[0] - 1] != 0 || gameBoard[cs2[1]][cs2[0] - 1] != 0 || gameBoard[cs1[1]][cs1[0] - 1] != 0) { }
    else {
        ClearCurrentShape();
        cs1[0]--;
        DrawSquare(cs1[0], cs1[1], csColor);
        cs2[0]--;
        DrawSquare(cs2[0], cs2[1], csColor);
        cs3[0]--;
        DrawSquare(cs3[0], cs3[1], csColor);
        cs4[0]--;
        DrawSquare(cs4[0], cs4[1], csColor);
    }
}
interval = setInterval(function MoveShape() {
    Check();
    ClearCurrentShape();
    cs1[1]++;
    DrawSquare(cs1[0], cs1[1], csColor);
    cs2[1]++;
    DrawSquare(cs2[0], cs2[1], csColor);
    cs3[1]++;
    DrawSquare(cs3[0], cs3[1], csColor);
    cs4[1]++;
    DrawSquare(cs4[0], cs4[1], csColor);


}
    , 300);
function ClearSh() {
    DrawSquare(cs1[0], cs1[1], "#FFFFFF");
    DrawSquare(cs2[0], cs2[1], "#FFFFFF");
    DrawSquare(cs3[0], cs3[1], "#FFFFFF");
    DrawSquare(cs4[0], cs4[1], "#FFFFFF");
}
document.addEventListener('keydown', function (event) {
    if (event.keyCode == 37) {
        if (cs1[0] != 0 && cs2[0] != 0 && cs3[0] != 0 && cs4[0] != 0) {
            MoveLeft();

        }
    }
    else if (event.keyCode == 39) {

        if (cs1[0] != 9 && cs2[0] != 9 && cs3[0] != 9 && cs4[0] != 9) {
            MoveRight();

        }
    }
    else if (event.keyCode == 82) {

        ClearSh();
        if (currentFigure == 1) {
            var config1 = [0, 1, 1, 0, 2, -1, 1, -2];
            var config2 = [1, -1, 1, -1, 0, 0, 0, 2];
            var config3 = [1, 0, -1, 0, -2, -1, -2, -1];
            var config4 = [-2, 0, -1, 1, 0, 2, 1, 1];
            if (temp == 0) tt = config1;
            else if (temp == 1) tt = config2;
            else if (temp == 2) tt = config3;
            else if (temp == 3) tt = config4;
            temp++;
            if (temp == 4) temp = 0;
            if (cs4[0] == 9 && cs3[0] < 9) { MoveLeft(); ClearSh(); }
            cs1[0] += tt[0]; cs1[1] += tt[1];
            cs2[0] += tt[2]; cs2[1] += tt[3];
            cs3[0] += tt[4]; cs3[1] += tt[5];
            cs4[0] += tt[6]; cs4[1] += tt[7];
        }
        else if (currentFigure == 4) {
            var config1 = [0, 0, 1, -1, 2, -2, 3, -3];
            var config2 = [0, 0, -1, 1, -2, 2, -3, 3];
            if (temp == 0) tt = config1;
            else if (temp == 1) tt = config2;
            temp++;
            if (temp == 2) temp = 0;
            if (cs1[0] >= 7) { MoveLeft(); MoveLeft(); MoveLeft(); ClearSh(); }
            cs1[0] += tt[0]; cs1[1] += tt[1];
            cs2[0] += tt[2]; cs2[1] += tt[3];
            cs3[0] += tt[4]; cs3[1] += tt[5];
            cs4[0] += tt[6]; cs4[1] += tt[7];
        }
        else if (currentFigure == 3) { }
        else if (currentFigure == 2) {

            var config1 = [-1, 0, 0, -1, 1, -2, 2, -1];
            var config2 = [0, 2, -1, 1, -2, 0, -1, -1];
            var config3 = [2, 0, 1, 1, 0, 2, -1, 1];
            var config4 = [-1, -2, 0, -1, 1, 0, 0, 1];
            if (temp == 0) tt = config1;
            else if (temp == 1) tt = config2;
            else if (temp == 2) tt = config3;
            else if (temp == 3) tt = config4;
            temp++;
            if (temp == 4) temp = 0;
            if (cs1[0] == 9 && cs3[0] == 9 && cs2[0] == 9 || cs4[0] == 9 && cs3[0] < 9) { MoveLeft(); ClearSh(); }
            cs1[0] += tt[0]; cs1[1] += tt[1];
            cs2[0] += tt[2]; cs2[1] += tt[3];
            cs3[0] += tt[4]; cs3[1] += tt[5];
            cs4[0] += tt[6]; cs4[1] += tt[7];

        }
        else if (currentFigure == 6) {
            var config1 = [-1, 0, 0, 1, 1, 0, 2, 1];
            var config2 = [1, 0, 0, -1, -1, 0, -2, -1];
            if (temp == 0) tt = config1;
            else if (temp == 1) tt = config2;
            temp++;
            if (temp == 2) temp = 0;

            if (cs1[0] == 0 && cs2[0] == 0) { MoveRight(); ClearSh(); }

            cs1[0] += tt[0]; cs1[1] += tt[1];
            cs2[0] += tt[2]; cs2[1] += tt[3];
            cs3[0] += tt[4]; cs3[1] += tt[5];
            cs4[0] += tt[6]; cs4[1] += tt[7];
        }
        else if (currentFigure == 7) {
            var config1 = [-1, 1, 1, -1, 0, 0, -1, 1];
            var config2 = [1, 1, -1, 1, 0, 0, 1, -1];
            var config3 = [1, -1, 1, -1, 0, 0, -1, 1];
            var config4 = [-1, -1, -1, 1, 0, 0, 1, -1];
            if (temp == 0) tt = config1;
            else if (temp == 1) tt = config2;
            else if (temp == 2) tt = config3;
            else if (temp == 3) tt = config4;
            temp++;
            if (temp == 4) temp = 0;
            if (cs2[0] == 0 && cs2[0] == 0 && cs4[0] == 0) { MoveRight(); ClearSh(); }
            if (cs2[0] == 9 && cs2[0] == 9 && cs4[0] == 9) {
                MoveLeft(); ClearSh();
            }

            cs1[0] += tt[0]; cs1[1] += tt[1];
            cs2[0] += tt[2]; cs2[1] += tt[3];
            cs3[0] += tt[4]; cs3[1] += tt[5];
            cs4[0] += tt[6]; cs4[1] += tt[7];
        }
        else { }
        DrawSquare(cs1[0], cs1[1], csColor);
        DrawSquare(cs2[0], cs2[1], csColor);
        DrawSquare(cs3[0], cs3[1], csColor);
        DrawSquare(cs4[0], cs4[1], csColor);

    }

}); function f1() {
    DrawBoard(); DrawStickShape();
} 