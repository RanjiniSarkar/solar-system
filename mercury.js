class Mercury{
  constructor(x, y) {
      var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, options);
      this.image=loadImage("images/mercury1_burned (2).png")
      World.add(world, this.body);
    }
    display(){
     
      push();
      translate(300,400);
     
      image(this.image, 0, 0,100,100);
      pop();
    }
}

