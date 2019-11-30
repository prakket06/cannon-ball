const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var engine, world;
var ground, rectangle, rectangle1, rectangle2,rectangle3,angleset;

function setup(){
    var canvas = createCanvas(1200,400);
    

    engine = Engine.create();
    world = engine.world;

    
    //angleset.visible = false;
    ground = new Ground(600,height,1200,20);
    rectangle = new Rectangle(200,380,50,PI/2);
    rectangle1 = new Rectangle(200,360,50,PI/2);
    rectangle3 = new MovingRectangle(225,340,50,PI/2);

    var ball_options = {
        isStatic: true
    }

    ball= Bodies.circle(200,350,20,ball_options);
    World.add(world,ball)

    var ball1_options = {
        'restitution': 1,
        'friction': 1,
        'density': 5
    }

    ball1= Bodies.circle(900,100,20,ball1_options);
    World.add(world,ball1)
    
    var ball2_options = {
        'restitution': 1,
        'friction': 1,
        'density': 5
    }

    ball2= Bodies.circle(1000,0,20,ball2_options);
    World.add(world,ball2)
   
    var ball3_options = {
        'restitution': 1,
        'friction': 1,
        'density': 5
    }

    ball3= Bodies.circle(1100,50,20,ball3_options);
    World.add(world,ball3)
    angleset = new AngleSet(ball3.body,{x: 180, y:340});
    
}
    

function draw(){
    background(50,50,50);
    Engine.update(engine);
    ground.display();
    ellipseMode(RADIUS);
    fill("grey");
    ellipse(ball.position.x,ball.position.y,20,20);
    ellipseMode(RADIUS);
    fill("blue")
    ellipse(ball1.position.x,ball1.position.y,20,20);
    ellipseMode(RADIUS);
    fill("red");
    ellipse(ball2.position.x,ball2.position.y,20,20);
    ellipseMode(RADIUS);
    fill("green")
    ellipse(ball3.position.x,ball3.position.y,20,20);
    rectangle.display();
    rectangle.display();
    rectangle1.display();
    rectangle3.display();
    angleset.display();
    
}
function mouseDragged(){
    Matter.Body.setPosition(ball3.body,{x: 250, y: 340});
}