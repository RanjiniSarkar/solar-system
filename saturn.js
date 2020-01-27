class Saturn{
  constructor(x, y) {
      var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, options);
      this.image=loadImage("images/saturn1_burned_burned.png");
      World.add(world, this.body);
    }
    display(){
     
      push();
      translate(50,-1050);
      
      image(this.image, 0, 0,280,280);
      pop();
    }
}