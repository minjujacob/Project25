class Paper {
    constructor(x,y,radius) {
        var options = {
            isStatic: false,
            restitution: 0.3,
            friction:0.5,
            density:1.2
        }
        
        this.image = loadImage("paper.png");
        this.radius = radius;
        this.body = Bodies.circle(x,y,(this.radius-20)/2, options);
        

        World.add(world, this.body);
    }
    display(){
        push()
		translate(this.body.position.x, this.body.position.y);

        imageMode(CENTER);
        //image(this.image,this.body.position.x, this.body.position.y,this.radius,this.radius);
        image(this.image,0,0, this.radius,this.radius);
        console.log(this.body);
        pop();

       // ellipseMode(RADIUS);

       // fill("purple");

       //ellipse(this.body.position.x, this.body.position.y, this.radius);

    }       
};