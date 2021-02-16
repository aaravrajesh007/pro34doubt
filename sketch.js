const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;

var engine, world;

function setup(){
    canvas = createCanvas(windowWidth/2,windowHeight/1.5);
    engine=Engine.create();
    world=engine.world;

    bob1 = new Pendulum(320,300,30);
    /*
    bob2 = new Pendulum(380,300,30);
    bob3 = new Pendulum(440,300,30);
    bob4 = new Pendulum(500,300,30);
    bob5 = new Pendulum(260,300,30);
*/
    sling1 = new Sling(bob1.body,{x:340, y:200}) 
}

function draw(){
    background(0)
    Engine.update(engine);
    bob1.display();
    /*
    bob2.display();
    bob3.display();
    bob4.display();
    bob5.display();
    */
}

function mouseDragged(){
    Matter.Body.setPosition(bob1.body,{x:mouseX,y:mouseY})
}