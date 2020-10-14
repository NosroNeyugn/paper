
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var boxleft,boxright,boxbottom;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
	
	ground = Bodies.rectangle(width/2, 650, width, 10);
	World.add(world, ground);
	
	boxleft = createSprite(500,590,20,100);
	boxleft.shapeColor = "red";

	boxright = createSprite(700,590,20,100);
	boxright.shapeColor = "red";

	boxbottom = createSprite(600,650,220,20);
	boxbottom.shapeColor = "red";

	paperObject = new Paper(20,20,20);
	paperObject.shapeColor = "red";

}


function draw() {
  rectMode(CENTER);
  background(0);
  paperObject.display();
  drawSprites();
 
}
function keyPressed() {
	if (keyCode === UP_ARROW) {
	   
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});

	 }
   }


