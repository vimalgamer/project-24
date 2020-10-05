class Trash {

    constructor(x, y, width, height){
        
        var options = {
            isStatic: false,
            friction: 0.5
        }

        this.body = Bodies.rectangle(x, y, width, height,options);
        this.width = width;
        this.height = height;
        World.add(world,this.body);
        strokeWeight(4);
        stroke("green");
    }

    display(){

        var pos = this.body.position;
        
        fill("white");
        rect(pos.x,pos.y,this.width,this.height);
    }

}