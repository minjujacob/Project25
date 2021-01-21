
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;


var engine, world, paper1, ground, dustbin1, dustbin2, dustbin3;
var dustbinImage; 

function preload(){
  dustbinImage = loadImage("dustbingreen.png");
}
function setup() {
    createCanvas(1600, 700);
    rectMode(CENTER);

    engine = Engine.create();
    world = engine.world;
  

    //Create the Bodies Here.
    paper1 = new Paper(100,600, 70);
    ground = new Ground(800,680,1600,20);
    dustbin1 = new Dustbin(610,660, 100, 20);
   // dustbin2 = new Dustbin(550,620,20,100);
   // dustbin3 = new Dustbin(670,620,20,100);
    loadImage(dustbinImage)

    var render = Render.create({
      element: document.body,
      engine: engine,
      options: {
        width: 1600,
        height: 700,
        wireframes: false
      }
    });

    Engine.run(engine);
    Render.run(render);
   
  
}

function draw() {
  
  rectMode(CENTER);
  
  background(230);
  
  //Engine.update(engine);
    
  paper1.display();
  

  ground.display();

  dustbin1.display();
 // dustbin2.display();
 // dustbin3.display();
}

function keyPressed(){
    if (keyCode === UP_ARROW ) {
      Matter.Body.applyForce(paper1.body, paper1.body.position, {x: 125,y: -100})
    }
  }
