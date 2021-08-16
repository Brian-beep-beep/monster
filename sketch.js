const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3,box4;
var hero,monster,rope,ground;

function preload() {
  bg = loadImage("gamingbackground2.png");
}

function setup() {
  createCanvas(3000, 700);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, 600, 2000, 20);

  hero = new Hero(400,800,250);
  rope = new Rope(hero.body, { x: 500, y: 50 });
  monster = new Monster(1100,500,100);
  monster1 = new Monster(1000,400,300);

  box1 = new Box(600, 100, 70, 70);
  box2 = new Box(900, 100, 70, 70);
  box3 = new Box(900, 100, 70, 70);
  box4 = new Box(900, 100, 70, 70);
  box5 = new Box(600, 100, 70, 70);
  box6 = new Box(600, 100, 70, 70);
  box7 = new Box(600, 100, 100, 100);
  box8 = new Box(750, 100, 50, 40);
  box9 = new Box(750, 100, 49, 49);
  box10 = new Box(750, 100, 48, 100);
  box11 = new Box(750, 100, 200, 100);
  box12 = new Box(1300, 100, 100, 500);
}

function draw() {
  background(bg);
  Engine.update(engine);
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display()
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display()
  box12.display();
  hero.display();
  rope.display();
  monster.display();
  monster1.display();

}

function mouseDragged(){
  Matter.Body.setPosition(hero.body, { x: mouseX, y: mouseY});
}
