class Food {
    constructor() {
        this.image = loadImage("images/Milk.png");
        this.foodStock = 0 ;
        // this.foodStock = foodStock;
        this.lastfed ;
    }

    getFoodStock() {
        // var foodRef = database.ref("Food");
        // foodRef.on("value",function(data){
        //     foodStock = data.val();
        // })
        return this.foodStock
    }
        
    updateFoodStock(food) {
        // database.ref("/").update({
        //     Food : food
        // })
        this.foodStock=food
    }
    
    deductFood() {
        if(this.foodStock > 0) {
            this.foodStock = this.foodStock-1;
          } 
    }

    display() {
        var x = 80
        var y = 100;
        imageMode(CENTER);
        if(this.foodStock!==0) {
            for(var i=0;i < this.foodStock;i++) {
                if(i%10===0) {
                    x=80;
                    y=y+50;
                }

                image(this.image,x,y,50,50);
                x = x+40;
            }
        }
    }

    bedroom(){
        image(bedroom, 400, 400, 800, 800)
    }

    garden(){
        image(bedroom, 400, 400, 800, 800)
    }

    washroom(){
        image(bedroom, 400, 400, 800, 800)
    }

}
