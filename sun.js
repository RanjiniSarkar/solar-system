class Sun{
  constructor(x, y) {
      var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, options);
      this.image = loadImage("images/sun_burned (1).png");
      World.add(world, this.body);
    }
    display(){
     
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(PI/3)
      
      image(this.image, 0, 0,400,400);
      pop();
    }
}