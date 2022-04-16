class Milk{

    constructor(x,y){
        this.foodStock
        this.lastFed

        this.image=loadImage("Milk.png")
    }

    getFoodStock(){

    }

    updateFoodStock(){


    }

    deductFood(){


    }

    displace(){
        var x=80,y=100;

        imageMode(CENTER)
        image(this.image,200,300,70,70)

        if(this.foodStock!=0){

           for(var i=0;i<this.foodStock;i++){
               if(i%10==0){
                   x=80
                   y=y+50
               }
               image(this.image,x,y,50,50)
               x=x+30
           }


        }
    }
} 