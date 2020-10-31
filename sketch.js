const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const 	Body = Matter.Body;
const Constraint = Matter.Constraint;
var distance;
function preload()
{
	
}

function setup() {
	createCanvas(1400, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	//Engine.run(engine);
	stone = new Stone(250,200,50)
	ground = new Ground(400,700,1400,40)
	rope = new SlingShot(stone.body,{x:200,y:200})
	tree = new Tree(500,150,600,600)
	m1 = new mango(1000,200,60,60)
	m2 = new mango(1100,300,60,60)
	m3 = new mango(1000,50,60,60)
	m4 = new mango(900,100,60,60)
	m5 = new mango(800,200,60,60)
	m6 = new mango(1000,100,60,60)
	m7 = new mango(900,200,60,60)
	m8 = new mango(1000,200,60,60)
	m9 = new mango(1000,200,60,60)
	m10 = new mango(1000,200,60,60)
	Engine.run(engine);

}

function draw() {
  rectMode(CENTER);
  background("pink"); 
  ground.display()
  tree.display()
  m1.display()
  m2.display()
  m3.display()
  m4.display()
  m5.display()
  m6.display()
  m7.display()
  m8.display()
  m9.display()
  m10.display()
  rope.display()
  stone.display()
  //rope.display()

  detectCollision(stone,m1)
  detectCollision(stone,m2)
  detectCollision(stone,m3)
  detectCollision(stone,m4)
  detectCollision(stone,m5)
  detectCollision(stone,m6)
  detectCollision(stone,m7)
  detectCollision(stone,m8)
  detectCollision(stone,m9)
  detectCollision(stone,m10)

}

function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
	rope.fly()
}
function detectCollision(lstone,lmango){
	mangoBodyPosition=lmango.body.position
	stoneBodyPosition=lstone.body.position
	
	var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
	  if(distance<=lmango.r+lstone.r){
		  Matter.Body.setStatic(lmango.body,false);
	  }
   }