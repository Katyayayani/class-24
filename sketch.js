var  Engine =Matter.Engine
var  World =Matter.World
var Bodies= Matter.Bodies
var engine,world,ball,ground,box1,box2,log1
var box3,box4,log2,pig2,box5,log3,log4,bird1

function setup() {
  createCanvas(1200,400);

  engine=Engine.create()
  world=engine.world 
// create objects from class
ground=new Ground(600,height,1200,20)
box1=new Box(700,320,70,70)
box2=new Box(920,320,70,70)
pig1=new Pig(810,350)
log1=new Log(810,260,300,PI/2)
box3=new Box(700,240,70,70)
box4=new Box(920,240,70,70)
log2=new Log(810,180,300,PI/2)
pig2=new Pig(810,220)
box5=new Box(810,160,70,70)
log3=new Log(760,120,150,PI/7)
log4=new Log(870,120,150,-PI/7)
bird1=new Bird(100,100);
}


function draw() {
  background(0); 
  Engine.update(engine)
  ground.show ()
  box1.show()
  box2.show()
  pig1.display();
  log1.display();
  box3.show();
  box4.show();
  log2.display();
  pig2.display();
  box5.show();
  log3.display();
  bird1.display()
  log4.display();
}