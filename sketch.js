var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);
	rectMode(CENTER);
	
	engine = Engine.create();
	world = engine.world;

	bottomSprite=createSprite(width/2+300 ,height-40,200,20);
	bottomSprite.shapeColor="red";

	rightSprite=createSprite(width/2 +400,height-100,20,100);
	rightSprite.shapeColor="red";

	leftSprite=createSprite(width/2 +200,height-100,20,100);
	leftSprite.shapeColor="red";

	bottomBody=Bodies.rectangle(width/2 +300 ,height-40,200,20,{isStatic:true});
	World.add(world,bottomBody)

	leftBody=Bodies.rectangle(width/2 +200,height-100,20,100,{isStatic:true});
	World.add(world,leftBody)

rightBody=Bodies.rectangle(width/2+400,height-100,20,100 ,{isStatic:true});
World.add(world,rightBody)


	
	

	

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	

	
	

	//Create a Ground
	ground = Bodies.rectangle(width/2,height-35, width, 10 , {isStatic:true} );
 	World.add(world, ground);
paper1=new paper(50,600)

	 Engine.run(engine);	
  
	
}


function draw() {
	
  rectMode(CENTER);
  background(0);
  paper1.display()
  drawSprites();
  
  
 
}

function keyPressed() {
 if (keyCode === UP_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
Matter.Body.applyForce(paper1.body,{x:paper1.body.position.x,y:paper1.body.position.y},{x:150,y:-150});
    
  }
}



