class Earth{
  constructor(x, y) {
      var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, options);
      this.image=loadImage("images/earth_burned.png")
      World.add(world, this.body);
    }
    display(){
     
      push();
      translate(150,700);
      image(this.image, 0, 0,180,180);
      pop();
    }
}

