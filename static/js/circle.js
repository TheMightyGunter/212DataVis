function Circle(x, y, r){
	this.body = Bodies.circle(x,y,r);
	this.r = r;
	World.add(world, this.body);

	this.showC = function(){
		var pos = this.body.position;
		var angle = this.body.angle;

		push();

		translate(pos.x, pos.y);
		rotate(angle);
		ellipseMode(CENTER);
		ellipse(0, 0, this.r*2, this.r*2);


		pop();
	}
}