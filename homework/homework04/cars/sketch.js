const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 

// feel free to change these values as you like!
const c1 = {
    x: 100,
    y: 100,
    width: 200,
    speed: 2,
    color: 'hotpink'
};
const c2 = {
    x: canvasWidth,
    y: 200,
    width:100,
    speed: - 2,
    color: 'blue'
};
const c3 = {
    x: 50,
    y: 300,
    width:150,
    speed: 3,
    color: 'red'
};



// required to set up the canvas:
function setup() {
    createCanvas(canvasWidth, canvasHeight);
}


// animation loop:
function draw() {
    // clear the canvas:
    clear();

    if(c1.x > canvasWidth + 200){
        c1.x = - 100;
    }
    if(c2.x < - 100){
        c2.x = canvasWidth + 100;
    }
    if(c3.x > canvasWidth + 200){
        c3.x = - 100
    }
   

    // move the car:
    c1.x += c1.speed;
    c2.x += c2.speed;
    c3.x += c3.speed;

    // Increase speed forever
     c1.speed += 0.005;
     c2.speed = c2.speed - 0.005;
     c3.speed += 0.002;
    

    // redraw the car:
    drawCar(c1.x, c1.y, c1.width, c1.color);
    drawCar(c2.x, c2.y, c2.width, c2.color);
    drawCar(c3.x, c3.y, c3.width, c3.color);
    
    // draw the grid (optional -- feel free to remove this line):
    drawGrid(canvasWidth, canvasHeight);
}


function drawCar(x, y, size, fillColor, wheelColor='black') {
    strokeWeight(0);
    
    // body
    fill(fillColor);
    rect(x - size/4, y - (size/5 + size/7), size / 2, size/7); // top
    rect(x - size/2, y - size/5, size, size/5); // bottom

    // wheels:
    fill(wheelColor);
    circle(x - size / 4, y, size / 6);
    circle(x + size / 4, y, size / 6);
}
