class Block3 {
    constructor(x,y,width,height){
        var options={
            'isStatic': false,
            'restitution': 0.7,
            'friction': 0.7,
            'density': 1.2
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.x = x;
        this.addy = y;
        this.width = width;
        this.height = height;
        World.add(world,this.body)
        this.Visibility = 255;
           }

           score(){
            if(this.Visibility < 120 && this.Visibility > 0) {
                score++
            }
          } 

    display(){
        if(this.body.speed < 4.2){
            var pos = this.body.position;
            fill("grey")
         rectMode(CENTER);
         rect(pos.x,pos.y,this.width,this.height)
            }
            else{
                World.remove(world,this.body);
                this.Visibility = this.Visibility - 10;
                tint(255,this.Visibility)
    
            }
    }
}