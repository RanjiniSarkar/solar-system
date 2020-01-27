const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var sun;
var mercury,venus,earth,mars,jupiter,saturn,uranus,neptune;
var bg;

var angle = 1;
 var anglespeed = 0.2;
 var rotateSound;

 function preload(){
	 //rotateSound=loadSound("");
	 bg=loadImage("images/universe.jpg");
 }

function setup() {
	createCanvas(1800, 1800);
	engine = Engine.create();
    world = engine.world;
	sun = new Sun(0,0);
  angleMode(DEGREES);
 mercury= new Mercury()
 venus= new Venus ()
 earth= new Earth()
 mars= new Mars()
 jupiter = new Jupiter()
 saturn= new Saturn()
 uranus = new Uranus()
 neptune= new Neptune()
}


function draw() {
	background(bg);
	bg.velocityX=0.05;
	bg.velocityY=0.05;
	Engine.update(engine);
	translate(width / 2, height / 2);
	rotate(angle);
	sun.display();
	angle = angle + anglespeed;
    mercury.display();
	venus.display();
	earth.display()
 mars.display()
 jupiter.display()
 saturn.display()
 //uranus.display()
 neptune.display()
	

	
}


