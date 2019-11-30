class MovingRectangle extends BaseClass{
    constructor(x, y,  height, angle) {
      super(x,y,20,height);
      Matter.Body.setAngle(this.body,angle);
          
      World.add(world, this.body);
    }
    /*display(){
      fill(128,128,128); 
      super.display();
    }*/
};