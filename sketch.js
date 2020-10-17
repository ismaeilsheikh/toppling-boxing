const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies   

var engine,world
var ball
var ground
function setup() {
  createCanvas(400,400);
  engine=Engine.create();
  world=engine.world;
  
  box1=new Box(300,200,50,60);
  ground= new Ground(200,380,400,20);
  box2=new Box(280,260,50,60);
}

function draw() {
  background(255,255,255);  

  Engine.update(engine);
  box1.display();
  box2.display();
  ground.display();
}