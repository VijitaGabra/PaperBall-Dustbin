
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj, paperObject,groundObject	
var world;


function setup() {
	createCanvas(1200, 400);
	


	engine = Engine.create();
	world = engine.world;
	
	paperObject=new paper(200,320,70);
	groundObject=new ground(width/2,370,width,20);
	dustbinObj=new dustbin(1000,350);
	
	

	var render = Render.create({
	 
	  engine: engine,
	 options: {
	    width: 1600,
	    height: 700,
	  }
	});

	Engine.run(engine);
	Render.run(render);
  
}


function draw() {
  
  background(random(100),random(100),random(100));
 
  
  paperObject.display();
  groundObject.display();
  dustbinObj.display();

  
  
 
  
  
 
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:105,y:-145});

    
  	}
}





