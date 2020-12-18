class Bob {
    constructor(x,y,r){
        var options = {
            restitution: 0.8,
            friction: 1,
            density: 0.5
        }
        this.r=r;
        this.x=x;
        this.y=y;
        this.body = Bodies.circle(x,y,r,options);
        World.add(world,this.body);
    }
    display () {
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        pop();
    }
};