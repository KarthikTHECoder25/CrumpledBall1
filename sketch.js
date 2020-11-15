var ball, b1,b2,b3, ground;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = new Box(400, 690, 800, 20);
	b1 = new Box( 500, 670, 200, 20 );
	b2 = new Box( 390, 630, 20, 100 );
	b3 = new Box( 610, 630, 20, 100 );

	var options ={
		restitution: 0.3,
		density: 1.2,
		friction: 0.5
	}
	
	ball = Bodies.circle(50,670,20,options);

	World.add(world, ball);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  b1.display();
  b2.display();
  b3.display();
  fill("blue");
  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y, 20,20);
  ground.display();
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball,ball.position, {x:45,y:-55});
   
	   }
	 }

