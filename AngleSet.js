class AngleSet{
    constructor(bodyA, pointB){
        var options = {
            pointB: pointB,
            bodyA: bodyA,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB;
        this.Angleset = Constraint.create(options);
        World.add(world, this.Angleset);
    }

    display(){
        var pointA = this.Angleset.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        
    }

    fly(){
        this.SlingShot.bodyA = null;
    }
} 