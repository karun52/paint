var cricketball,cricketball1,cricketball2,cricketball3;
var database,position
function setup(){
    createCanvas(22200,5000);
    database=firebase.database()
    cricketball = createSprite(250,250,100,800);
    cricketball.shapeColor = "black";
    var ballPosition=database.ref('ball/position')


  database=firebase.database()
    cricketball1 = createSprite(200,250,100,800);
    cricketball1.shapeColor = "black";
    var ballPosition=database.ref('ball/position')
    
    
    database=firebase.database()
    cricketball2 = createSprite(150,250,100,800);
    cricketball2.shapeColor = "black";
    var ballPosition=database.ref('ball/position')
    

    database=firebase.database()
    cricketball3 = createSprite(95,250,100,800);
    cricketball3.shapeColor = "black";
    var ballPosition=database.ref('ball/position')
    
}



function draw(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
    
}


    