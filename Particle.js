class Particle{
    constructor(x,y,r){
    var options={
        isStatic=true
    }
   this.body=Bodies.circle(x,y,r,options);
   this.r=r; 
   World.add(world,this.body);
    }
    display(){
    this.color=color(random(0,255),random(0,255),random(0,255));    
    }
}