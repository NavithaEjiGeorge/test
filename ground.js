class Ground{
    constructor(x,y,width,height){
        var options = {
            isStatic : true,
            restitutions : 0.03,
            density:0.4,
            friction:0.1
        }
        this.body = Bodies.rectangle(x,y,width,height,options)
        this.width = width
        this.height = height
        World.add(world,this.body)
    }
    display(){
      var pos = this.body.position
      var angle = this.body.angle
      push()
      rectMode(CENTER)
      rotate(angle)
      translate(pos.x,pos.y)
      fill("red")
      rect(0,0,this.width,this.height)
      pop()
    }
}