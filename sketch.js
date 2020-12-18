
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var rope1, rope2, rope3, rope4, rope5;
//var roof;
var bobDiameter = 20;

function preload()
{
	
}

function setup() {
	createCanvas(900, 700);


	engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here.
  roof = new Roof (500,100,400,20);
  
  bobObject1 = new Bob(300,400,40);
	bobObject2 = new Bob(400,400,40);
	bobObject3 = new Bob (500,400,40);
	bobObject4 = new Bob (600,400,40);
  bobObject5 = new Bob (700,400,40);

  rope1 = new Rope(bobObject1.body,roof.body,-bobDiameter*8,0);
  rope2 = new Rope(bobObject2.body,roof.body,-bobDiameter*4,0);
  rope3 = new Rope(bobObject3.body,roof.body,bobDiameter*0,0);
  rope4 = new Rope(bobObject4.body,roof.body,bobDiameter*4,0);
  rope5 = new Rope(bobObject5.body,roof.body,bobDiameter*8,0);
  
}


function draw() {
  rectMode(CENTER);
  background(90);

  Engine.update(engine);
  
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  roof.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  drawSprites();
 
}
function keyPressed() {
  
  if (keyCode === UP_ARROW){
    Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-200,y:300});

  }
}



