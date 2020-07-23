// Example code:
// class Dog {
    // constructor (name, breed) {
        // this.name = name
        // this.breed = breed
        // this.isGoodBoy = true
    // }
    // sit () {
        // sitting code goes here
    // }   
    // fetch () {
        // fetching code goes here
    // }   
// }
// class GuardDog extends Dog {
    // constructor(name, breed, attackWord) {
        // super(name, breed)
        // this.attackWord = attackWord
    // }
    // bark() {
        // barking code here
    // }
// }
// create an instance of the Dog parent class
// const fluffy = new Dog("Fluffy", "Toy Poodle")

// create an instance of the GuardDog child class
// const cujo = new GuardDog("Cujo", "St. Bernard", "Go")


// Doctor Class
class Doctor extends Traveler {
    constructor (name, food, isHealthy, hunt, eat) {
        super (name, food, isHealthy, hunt, eat);
    }

// The Doctor class will extend the Traveler class and have one additional method:
//  1. heal(traveler) - set the traveler's isHealthy property to true.
    heal (traveler) {
        if (this.isHealthy === false) {
            return this.shouldQuarantine = false;
        }
        return traveler.isHealthy = true;
    }
}


// Hunter Class
// The Hunter class will extend the Traveler class, but it will start with 2 food 
// instead of 1. 
class Hunter extends Doctor {
    constructor (name) {
        super (name);
        this.food = 2;
    }

// The Hunter class should also have the following method:
//  1. hunt() - Increase the hunter's food by 5. (A normal traveler gains only 2.)
    hunt () {
        this.food += 5;
    }

// The Hunter class should also have the following method:
//  2. eat() - Consumes 2 units of food. If the hunter doesn't have 2 food when 
//      they are instructed to eat, they eat as much as they can (0 or 1 unit), 
//      but the hunter is no longer healthy.
    eat () {
        if (this.food >= 2) {
            this.food -= 2;

        } else {
            this.food = 0;
            this.isHealthy = false;
        }
    }

// The Hunter class should also have the following method:
//  3. giveFood(traveler, numOfFoodUnits) - Transfers numOfFoodUnits from the 
//      hunter to the traveler. If the hunter doesn't have enough food, then 
//      no food should be transfered.
    giveFood (traveler, numOfFoodUnits) {
        if (this.food >= numOfFoodUnits) {
            this.food -= numOfFoodUnits;
            traveler.food += numOfFoodUnits;
        }
    }
}