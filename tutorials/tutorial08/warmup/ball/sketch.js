const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 
    
function setup() {
    createCanvas(canvasWidth, canvasHeight);
}

let x = 200;
let speed = 5;
let width = 50;
let calc = width / 2;

function draw() {
    // frameRate(2);
    clear();

    if(x >= 500 - calc){
        // speed = (speed + 1) * - 1;
        speed = speed - 5
        width = width + 5;
    }
    if(x <= 150 + calc){
        // speed = -1 * speed;
        speed = speed + 5;
        width = width + 5;

    }


    // draw walls:
    fill('red');
    rect(100, 0, 50, canvasHeight);
    rect(500, 0, 50, canvasHeight);

    // draw circle:
    fill('black');
    circle(x, canvasHeight/2, width);
    x += speed;
    console.log("x position is:", x);
    drawGrid(canvasWidth, canvasHeight);



}