let bullets = [];
let enemies=[];

function setup() {
  createCanvas(400, 400);
  for(let i=0;i<10;i++){
    let enemy ={
      x:random(0,width),
      y:random(-800,0),
      d:random(10,20)
    }
    enemies.push(enemy);
  }
}
function draw() {
  background(100);
  rectMode(CENTER);
  //jogador
  fill("yellow");
  rect(mouseX, height - 50, 30);
  //balas do jogador
  for (let bullet of bullets) {
    
    fill("white");
    bullet.y--;
    rect(bullet.x, bullet.y,bullet.d);
    
  if(bullet.y<10){
    bullets.splice(0,1);
  }
  }
  for(let enemy of enemies){
    fill('red');
    enemy.y++;
    circle(enemy.x,enemy.y,enemy.d);
  }
  for(let enemy of enemies){
    for(let bullet of bullets){
      if(dist(bullet.x,bullet.y,enemy.x,enemy.y)<15){
        enemies.splice(enemies.indexOf(enemy),1);
        bullets.splice(bullets.indexOf(bullet),1);
        let novoItem ={
          x:random(0,400),
          y:random(-800,0)
        }
        enemies.push(novoItem);
      }
    }
  }
  
}
function mousePressed() {
  let bullet = {
    x: mouseX,
    y: height - 50,
    d: 10
  };
  bullets.push(bullet);
  
}