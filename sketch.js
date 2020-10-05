var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
var count = 0;
var particles = [];
var plinkos = [];
var divisions = [];
var ground;
var score = 0;
var particle;
var turn = 0;
var divisionHeight = 300;
var score = 0;
var gameState = "start";
var scoredone= [];
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width / 2, height, width, 20);



  for (var k = 0; k <= width; k = k + 80) {
    divisions.push(new Divisions(k, height - divisionHeight / 2, 10, divisionHeight));
  }


  for (var j = 75; j <= width; j = j + 50) {

    plinkos.push(new Plinko(j, 75));
  }

  for (var j = 50; j <= width - 10; j = j + 50) {

    plinkos.push(new Plinko(j, 175));
  }

  for (var j = 75; j <= width; j = j + 50) {

    plinkos.push(new Plinko(j, 275));
  }

  for (var j = 50; j <= width - 10; j = j + 50) {

    plinkos.push(new Plinko(j, 375));
  }




}
function mousePressed() {
  if (gameState !== "end") {
    count++;
    particles.push(new Particle(mouseX, 30, 10, 10));
    if (count > 4) {
      gameState = "end";
    }
  }
}



function draw() {
  background("black");
  textSize(20);
  
  text("Score : " + score, 20, 30);
  textSize(20)
  text("100", 105, 520);
  text("500", 185, 520);
  text("50", 265, 520);
  text("1000", 345, 520);
  text("50", 425, 520);
  text("500", 505, 520);
  text("50", 585, 520);
  text("500", 665, 520);
  text("500", 745, 520);
  text("100", 25, 520);


  Engine.update(engine);
  if (gameState == "end") {
    textSize(100)
    text("GAME OVER ", 80, 500);
  }


  for (var i = 0; i < plinkos.length; i++) {

    plinkos[i].display();

  }
  //  if(frameCount%60===0){
  //    particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
  //    score++;
  //  }
for (var j = 0; j < particles.length; j++) {
  if (particles[j] != null) { 
  particles[j].display();
  }

  }
  for (var j = 0; j < particles.length; j++) {
  //  console.log("y = " + particles[j].body.position.y + "x = " + particles[j].body.position.x);
    var x = 0;
    var y = 0;
    //scoredone[j] = 0;
    if (scoredone[j] != 1) {
      x = particles[j].body.position.x;
      y = particles[j].body.position.y;
    
    if (y >503) {
      if (x > 0 && x < 80) {
        score = score + 100;
        scoredone[j] = 1;
      }
      if (x > 80 && x < 160) {
        score = score + 100;
        scoredone[j] = 1;
      }
      if (x > 160 && x < 240) {
        score = score + 500;
        scoredone[j] = 1;
      }
      if (x > 240 && x < 320) {
        score = score + 50;
        scoredone[j] = 1;
      }
      if (x > 320 && x < 400) {
        score = score + 1000;
        scoredone[j] = 1;
      }
      if (x > 400 && x < 480) {
        score = score + 50;
        scoredone[j] = 1;
      }

      if (x > 480 && x < 560) {
        score = score + 50;
        scoredone[j] = 1;
      }
      if (x > 560 && x < 640) {
        score = score + 500;
        scoredone[j] = 1;
      }
      if (x > 640 && x < 720) {
        score = score + 500;
        scoredone[j] = 1;
      }
      
     
    }
    //particles[j] = null;
    }
    console.log("score = " + score);

  }
  


  for (var k = 0; k < divisions.length; k++) {

    divisions[k].display();
  }
}