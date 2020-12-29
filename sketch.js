
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground, b1, paper1;


function preload()
{

}

function setup() 
{
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  paper1 = new paper(200,450,40);
  ground = new ground_(width/2,670,width,20);
	b1 = new dustbin(1200,658);
  //b2 = new dustbin(640,640,150,10);
  //b3 = new dustbin(710,560,20,150);
	Engine.run(engine);
  
}


function draw() 
{
  rectMode(CENTER);
  background(43,45,66);
  Engine.update(engine);
  ground.display();
  paper1.display()
  b1.display();
// keyPressed();
 // drawSprites();
 
}
function keyPressed()
{
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(paper1.body,paper1.body.position,{x: 95,y: -85});
  }
}
