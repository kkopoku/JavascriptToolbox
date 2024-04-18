class Human{
     
    constructor(race){
        this.race = race;
    }

    canEat(){
        console.log(this.race+" can eat");
    }

}

class Ghanaian extends Human{
    constructor(){
        super("Ghanaian");
    }
}

var human = new Ghanaian();

human.canEat()