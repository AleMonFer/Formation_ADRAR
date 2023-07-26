/*
//A1
//Preparation du Dessin (Initialization)
setPos(300,300);  
faceDown(); 
changeColor(color.red); 
setLineWidth(10);

// Dessin (Realisation)
forward(100);
faceRight(); 
forward(50);
*/

/*
//A2
// Initialization
setPos(300,300);
faceLeft();
changeColor(color.yellow);
setLineWidth(10);

//Realisation
forward(50);
faceDown();
forward(50);
faceRight();
forward(100)
faceUp();
forward(100);
*/

/*
//A3
//Initializaton
setPos(300,300);
faceLeft();
changeColor(color.yellow);
setLineWidth(10);

//Realisation
forward(50);
backward(100);
forward(50);
faceUp();
forward(50);
backward(100);
*/

/*
//A4
//Initializaton
setPos(200, 450);
faceRight();
changeColor(color.green);
setLineWidth(10);

//Realisation
forward(100);
arcLeft(50, 180);
forward(50);
arcRight(50, 180);
forward(100);
*/

/*
//A5
//Initializaton
setPos(300,200);
faceRight();
changeColor(color.fuchsia);
setLineWidth(10)

//Realisation
arcRight(100,360);
arcRight(50,180);
arcLeft(50,180);
*/

/*
//A6
//Initializaton
setPos(300,300);
faceUp();
changeColor(color.aqua);
setLineWidth(10);

//Realisation
forward(50);
up();
forward(50)
down();
forward(100);
*/

/*
//A7
//Initializaton
setPos(250,300);
faceDown();
changeColor(color.green);
setLineWidth(10);

//Realisation
forward(100);
arcLeft(50,180);
forward(50);
up();
forward(50);
down();
forward(100);
arcLeft(50,180);
forward(50);
*/

/*
//A8
//Initializaton
setPos(300,300);
faceUp();
changeColor(color.fuchsia);
setLineWidth(10);

//Realisation
forward(50);
faceRight();
forward(100);
faceDown();
forward(200);
faceLeft();
forward(50);
up();
forward(50);
faceUp();
forward(50);
down();
forward(50);
*/

/*
//B1
//Initializaton
setPos(100,100);
faceRight();
changeColor(color.green);
setLineWidth(10);

//Realisation
for(let i = 0; i<4; i++) {
    forward(75);
    faceDown();
    forward(75);
    faceRight();
}
*/

/*
//B2
//Initializaton
setPos(50,300);
faceUp();
changeColor(color.red);
setLineWidth(10);

//Realisation
for(let i = 0; i < 4; i++){
    forward(50);
    faceRight();
    forward(50);
    faceDown();
    forward(50);
    faceRight();
    forward(50);
    faceUp();
}
*/

/*
//B3
//Initializaton
setPos(250,250);
faceRight();
changeColor(color.fuchsia);
setLineWidth(10);

//Realisation
for(let i = 0; i < 4; i++){
    forward(75);
    right(90);
}
*/

/*
//B4
//Initializaton
setPos(250,300);
faceRight();
changeColor(color.aqua);
setLineWidth(10);

//Realisation
for(let i = 0; i < 3; i++){
    forward(75);
    left(120);
}
*/

/*
//B5
//Initializaton
setPos(300,300);
faceUp();
changeColor(color.yellow);
setLineWidth(10);

//Realisation
forward(100);
changeColor(color.red);
for(let i = 0; i < 3; i++){
    forward(50);
    right(120);
}
*/

/*
//B6
//Initializaton
setPos(200,350);
faceRight();
changeColor(color.red);
setLineWidth(10);

//Realisation
for(let i = 0; i < 2; i++){
    forward(50);
    faceUp();
    forward(50);
    faceRight();
}
changeColor(color.green);
for(let i = 0; i < 3; i++){
    forward(50);
    faceDown();
    forward(50);
    faceRight();
}
*/

/*
//B7
//Initializaton
setPos(300,300);
faceRight();
changeColor(color.yellow);
setLineWidth(10);

//Realisation
for(let i = 0; i < 4; i++){
    forward(100);
    right(90);
}
for(let i = 0; i < 3; i++){
    forward(100);
    left(120);
}
*/

/*
//B8
//Initializaton
setPos(300,300);
faceRight();
changeColor(color.yellow);
setLineWidth(10);

//Realisation
for(let i = 0; i < 8; i++){
    forward(250);
    right(135);
}
*/

/*
//B9
//Initializaton
setPos(200,300);
faceRight();
changeColor(color.fuchsia);
setLineWidth(10);

//Realisation
forward(50);
up();
forward(50);
down();
for(let i = 0; i < 3; i++){
    forward(100);
    right(120);
}
*/

/*
//B10
//Initializaton
setPos(50,300);
faceRight();
changeColor(color.aqua);
setLineWidth(10);

//Realisation

for(let i = 0; i < 8; i++){
    forward(100);
    right(135);
}
up();
forward(200);
changeColor(color.yellow);
down();
for(let i = 0; i < 8; i++){
    forward(250);
    left(135);
}
up();
faceDown();
forward(100);
changeColor(color.fuchsia);
down();
for(let i = 0; i < 8; i++){
    forward(100)
    right(135);
}
*/

/*
//B11
//Initializaton
setPos(200,200);
faceRight();
changeColor(color.red);
setLineWidth(10);

//Realisation
for(let i = 0; i < 4; i++){
    forward(50);
    left(90);
    forward(50);
    right(90);
    forward(50);
    right(90);
}
*/

/*
//B12
//Initializaton
setPos(350, 350);
faceRight();
changeColor(color.fuchsia);
setLineWidth(10);

//Realisation
for (let i = 0; i < 2; i++) {
    for (let i = 0; i < 3; i++) {
        right(90);
        forward(50);
    }
    up();
    forward(50);
    changeColor(color.green);
    faceLeft();
    down();
}
*/

/*
//B13
//Initializaton
setPos(200,200);
faceRight();
changeColor(color.green);
setLineWidth(10);

//Realisation
for(let i = 0; i < 8; i++){
    forward(50);
    left(135);
    for(let i = 0; i < 2; i++){
        forward(25);
        right(90);
    }
}
*/

/*
//B14
//Initializaton
setPos(100,100);
faceRight();
changeColor(color.yellow);
setLineWidth(10);

//Realisation
forward(50);
right(120);
for(let i = 0; i < 6; i++){
    forward(100);
    left(120);
    forward(100);
    right(120);
}
*/

/*
//B15
//Initializaton
setPos(300,300);
faceRight();
changeColor(color.red);
setLineWidth(10);

//Realisation
for(let i = 0; i < 4; i++){
    forward(75);
    arcLeft(75, 90);
}
*/

/*
//C1
//Initialisation
setPos(100,300);
faceRight();
changeColor(color.aqua);
setLineWidth(10);

// Réalisation
for(let i = 0 ; i < 4 ; i++) {
    for(let j = 0 ; j < 3 ; j++) {
        forward(100);
        right(180-60);
    }
    forward(100);
}
*/

/*
//C2
//Initialisation
setPos(275,575);
faceUp();
changeColor(color.fuchsia);
setLineWidth(10);

//Réalisation
for(let i = 0; i < 5; i++){
    for(let j = 0; j < 4; j++){
        forward(70);
        right(90);
    }
    up();
    forward(120);
    down();
}
*/

/*
//C3
//Initialisation
setPos(50,325);
faceRight();
shiftColor(0.45);
setLineWidth(10);

//Réalisation
for(let i = 0; i < 3; i++){
    for(let j = 0; j < 8; j++){
        forward(100);
        left(135);
    }
    up();
    forward(200);
    shiftColor(0.10);
    down();
}
*/

/*
//C4
//Initialisation
setPos(50,300);
faceRight();
changeColor(color.red);
setLineWidth(10);

// Réalisation
for(let i = 0; i < 5; i++){
    for(let j = 0; j < 3; j++){
        forward(50);
        left(120);
    }
    changeColor(color.yellow);
    for(let k = 0; k < 4; k++){
        forward(50);
        right(90);
    }
    up()
    forward(100);
    changeColor(color.red);
    down();
}
*/

/*
//C5
// Initialisation
setPos(300,300);
faceRight();
shiftColor(0.15);
setLineWidth(10);

// Réalisation
for(let i = 0; i < 4; i++){
    for(let j = 0; j < 8; j++){
        forward(150);
        left(135);
    }
    right(90);
    shiftColor(0.25);
}
*/

/*
//C6
// Initialisation
setPos(300,300);
faceRight();
changeColor(color.yellow);
setLineWidth(10);

// Réalisation
for(let i = 0; i < 3; i++){
    for(let j = 0; j < 4; j++){
        forward(100);
        left(120);
    }
    forward(100);
}
*/

/*
//C7
// Initialisation
setPos(250,400);
faceRight();
changeColor(color.yellow);
setLineWidth(10);

// Réalisation
for(let i = 0; i < 8; i++){
    for(let j = 0; j < 3; j++){
        forward(50);
        right(120);
    }
    forward(50);
    left(45);
}
*/

/*
//C8
// Initialisation
setPos(300,590);
faceUp();
changeColor(color.green);
setLineWidth(10);

// Réalisation
forward(300);
left(45);
for(let i = 0; i < 4; i++){
    for(let j = 0; j < 3; j++){
        changeColor(color.red);
        forward(150);
        left(120);
    }
    changeColor(color.yellow);
    forward(150);
    right(90);
}
*/

/*
//C9
// Initialisation
setPos(400,400);
faceRight();
changeColor(color.green);
setLineWidth(10);

// Réalisation
for(let i = 0; i < 3; i++){
    for(let j = 0; j < 3; j++){
        forward(50);
        right(120);
        for(let k = 0; k < 4; k++){
            right(90);
            forward(50);        
        }
    }
    left(120);
    forward(250);
}
*/

/*
//D10
// Initialisation
setPos(300,300);
faceRight();
changeColor(color.yellow);
setLineWidth(10);

// Réalisation
let size = 25;
for(i = 0; i < 10; i++){
    forward(size);
    right(90);
    size += 50;
}
*/

/*
//D11
// Initialisation
setPos(100,300);
faceRight();
changeColor(color.white);
setLineWidth(10);

// Réalisation
let size = 125;
for(let i = 0; i < 5; i++){
    for(let j = 0; j < 3; j++){
        forward(size);
        left(120);
    }
    forward(size);
    size -= 25;
}
*/

/*
//D12
// Initialisation
setPos(300,325);
faceRight();
changeColor(color.aqua);
setLineWidth(10);

// Réalisation
let size = 50;

for(let i = 0; i < 6; i++){
    for(let j = 0; j < 3; j++){
        forward(size);
        left(120);
    }
    forward(size);
    left(60);
    size += 50; 
}
*/

/*
//D13
// Initialisation
setPos(320,275);
faceRight();
changeColor(color.fuchsia);
setLineWidth(10);

// Réalisation
let radius = 50;

for(let i = 0; i < 8; i++){
    arcRight(radius, 180);
    up();
    forward(50);
    down();
    radius += 25;
}
*/

console.log("Exercise 5 PD - He's trying to say something! ");

setPos(50, 50);
faceRight();
changeColor(color.fuchsia);
setLineWidth(1);


let str = "NNEESOOESEENNEEOOSEOSEEENNESENSSENNEESSOOEEENNEEOOSEOSEEENEENOOEESOOSEEEEEEENONSESENNSSENNEESSOOEEENNSSEENNSSEEENOONEEOOSEESEEEENNEESSOOEEENNEESOOEESENNESENSSEEENOONEEOOSEESEEEENNSSEEENNEESOOEESEEEENNEEOOSEOSEEENNEESSOOEEENNEESOOESEENNEEOOSEOSEEEENNOEEOSSEEEEENNEESOOEESOOEEENNEESOOESEENNSSEENNSSENNESNESSENNEEOOSEOSEEENNSSEENNSSEEENOONEEOOSEESENNEEOOSEOSEEEEEENNEESSOOEEENNEEOOSEOSEEENNESNESSENNEESOOEESENNSSENNESENSS"

for(let i = 0; i < str.length; i++){
    if(str.charAt(i) == "N"){
        faceUp();
    } else if(str.charAt(i) == "E"){
        faceRight();
    } else if(str.charAt(i) == "S"){
        faceDown();
    } else {
        faceLeft();
    }
    forward(4);
}

