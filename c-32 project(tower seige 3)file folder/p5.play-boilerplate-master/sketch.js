
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var score = 0;
var backgroundIMG;

function preload(){
 getBackground();
}

function setup() 
{
 
  var canvas = createCanvas(1200,800);

 
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  //Bodies
  Ground1 = new Ground(520,650,320,20);
  Ground2 = new Ground(950,400,230,20)
  Ground3 = new Ground(600,780,1200,20)
  block1 = new Block(400,612,40,55);
  block2 = new Block(440,612,40,55);
  block3 = new Block(480,612,40,55);
  block4 = new Block(520,612,40,55);
  block5 = new Block(560,612,40,55);
  block6 = new Block(600,612,40,55);
  block7 = new Block(640,612,40,55);
  block8 = new Block1(440,557,40,55);
  block9 = new Block1(480,557,40,55);
  block10 = new Block1(520,557,40,55);
  block11 = new Block1(560,557,40,55);
  block12 = new Block1(600,557,40,55);
  block13 = new Block2(480,502,40,55);
  block14 = new Block2(520,502,40,55);
  block15 = new Block2(560,502,40,55);
  block16 = new Block3(520,447,40,55);
  block17 = new Block(870,363,40,55);
  block18 = new Block(910,363,40,55);
  block19 = new Block(950,363,40,55);
  block20 = new Block(990,363,40,55);
  block21 = new Block(1030,363,40,55);
  block22 = new Block1(910,308,40,55);
  block23 = new Block1(950,308,40,55);
  block24 = new Block1(990,308,40,55);
  block25 = new Block2(950,253,40,55);
  Polygon1 = new Polygon(250,370,35);
  chain1 = new Chain(Polygon1.body,{x:165,y:370});


  
  
}

function draw() 
{
  if(backgroundIMG){
    background(backgroundIMG); 
  }
   
  textSize(25)
  fill("grey")
 text("Drag The Stone and release it to drop the blocks!!",300,210)
 text(score,30,210)
 strokeWeight(3)
  Ground1.display();
  Ground2.display();
  Ground3.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();
  block24.display();
  block25.display();
  Polygon1.display()
  chain1.display();

block1.score();
block2.score();
block3.score();
block4.score();
block5.score();
block6.score();
block7.score();
block8.score();
block9.score();
block10.score();
block11.score();
block12.score();
block13.score();
block14.score();
block15.score();
block16.score();
block17.score();
block18.score();
block19.score();
block20.score();
block21.score();
block22.score();
block23.score();
block24.score();
block25.score();




  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(Polygon1.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
  chain1.fly();
} 

function keyPressed(){
  if(keyCode === 32){
    chain1.attach(Polygon1.body);
    
  Matter.Body.setPosition(Polygon1.body,{x:165,y:370})
  }

}

async  function getBackground(){
      var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();
    console.log(responseJSON.datetime);
    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    if(hour >= 06 && hour<= 19){
        bg = "sprites/bg.png";
    }
    else{
        bg = "sprites/bg2.jpg";
    }
    backgroundIMG = loadImage(bg)
    

}


  
