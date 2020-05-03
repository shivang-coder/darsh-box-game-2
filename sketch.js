var Engine = Matter.Engine,
World = Matter.World,
Bodies = Matter.Bodies;
 
var engine;
var world;
var boxes = [];

var ground;
var gSlider;
 
function setup() {
    createCanvas(400,400);

   
    engine = Engine.create();
    world = engine.world;
 
   
    gSlider = createSlider(0, 100, 50);
    gSlider.position(40, 365);
    gSlider.input = map(engine.world.gravity, gSlider.min, gSlider.max, 0, 1);
    ground = new Ground(600,height,1200,20);
   
}

function mousePressed() {
if (mouseY < 350) {
boxes.push(new Box(mouseX,mouseY,25,30));

}
}
    
function draw() {
Engine.update(engine);
background(255,76,158);
   
for(var i = 0;i<boxes.length;i++){
boxes[i].display();
} 

var fVal = gSlider.value();

}


