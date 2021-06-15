const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var plane, hammer, rubber, stone, iron;

function setup(){
  createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  
  plane = new Plane(600, height, 1200, 20);
  hammer = new Hammer(10, 100);
  rubber = new Rubber(800, 450, 100);
  stone = new Stone(400, 320, 120, 70);
  iron = new Iron(600, 300, 150, 150);
}

function draw(){
  background("lightBlue");
  Engine.update(engine);

  plane.display();
  hammer.display();
  rubber.display();
  stone.display();
  iron.display();
}