class Dustbin {
    constructor (x, y, width, height){
        var options = { 
            isStatic: true,
            restitution:0,
            friction:1,
            density:0.1
            }

        this.dustbinWidth=200;
		this.dustbinHeight=213;
        this.wallThickness=20;
        this.x =x;
        this.y=y;
		
		this.image=loadImage("dustbingreen.png")
		this.bottomBody=Bodies.rectangle(this.x, this.y, this.dustbinWidth, this.wallThickness, {isStatic:true})
		this.leftWallBody=Bodies.rectangle(this.x-this.dustbinWidth/2, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, {isStatic:true})
		this.rightWallBody=Bodies.rectangle(this.x+this.dustbinWidth/2, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, {isStatic:true})
		
		World.add(world, this.bottomBody)
		World.add(world, this.leftWallBody)
		World.add(world, this.rightWallBody);
    }

    display(){
        //image(this.image,560,560,100,90);
       // imageMode(CENTER);
        image(this.image, 0,this.y-this.dustbinHeight,this.dustbinWidth, this.dustbinHeight)

       
       // fill(255);
       // rect(this.body.position.x, this.body.position.y, this.width, this. height);

    }
}
