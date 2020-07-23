const mainElement = document.querySelector ('main');

    // Create a wagon that can hold 4 people
    let wagon = new Wagon(4);
    // Create five travelers
    let henrietta = new Traveler('Henrietta');
    let juan = new Traveler('Juan');
    let drsmith = new Doctor('Dr. Smith');
    let sarahunter = new Hunter('Sara');
    let maude = new Traveler('Maude');
    console.log(`#1: There should be 4 available seats. Actual: ${wagon.getAvailableSeatCount()}`);

const divElement1 = document.createElement ('div');
mainElement.append (divElement1);
divElement1.append (`#1: There should be 4 available seats. Actual: ${wagon.getAvailableSeatCount()}`);

    wagon.join(henrietta);
    console.log(`#2: There should be 3 available seats. Actual: ${wagon.getAvailableSeatCount()}`);

const divElement2 = document.createElement ('div');
mainElement.append (divElement2);
divElement2.append (`#2: There should be 3 available seats. Actual: ${wagon.getAvailableSeatCount()}`);
    
    wagon.join(juan);
    wagon.join(drsmith);
    wagon.join(sarahunter);
    wagon.join(maude); // There isn't room for her!
    console.log(`#3: There should be 0 available seats. Actual: ${wagon.getAvailableSeatCount()}`);

const divElement3 = document.createElement ('div');
mainElement.append (divElement3);
divElement3.append (`#3: There should be 0 available seats. Actual: ${wagon.getAvailableSeatCount()}`);

    console.log(`#4: There should be 5 total food. Actual: ${wagon.totalFood()}`);

const divElement4 = document.createElement ('div');
mainElement.append (divElement4);
divElement4.append (`#4: There should be 5 total food. Actual: ${wagon.totalFood()}`);
    
    sarahunter.hunt(); // gets 5 more food
    drsmith.hunt();
    console.log(`#5: There should be 12 total food. Actual: ${wagon.totalFood()}`);
 
const divElement5 = document.createElement ('div');
mainElement.append (divElement5);
divElement5.append (`#5: There should be 12 total food. Actual: ${wagon.totalFood()}`);
    
    henrietta.eat();
    sarahunter.eat();
    drsmith.eat();
    juan.eat();
    juan.eat(); // juan is now hungry (sick)
    console.log(`#6: Quarantine should be true. Actual: ${wagon.shouldQuarantine()}`);
 
const divElement6 = document.createElement ('div');
mainElement.append (divElement6);
divElement6.append (`#6: Quarantine should be true. Actual: ${wagon.shouldQuarantine()}`);
     
    console.log(`#7: There should be 7 total food. Actual: ${wagon.totalFood()}`);
     
const divElement7 = document.createElement ('div');
mainElement.append (divElement7);
divElement7.append (`#7: There should be 7 total food. Actual: ${wagon.totalFood()}`);
 
    drsmith.heal(juan);
    console.log(`#8: Quarantine should be false. Actual: ${wagon.shouldQuarantine()}`);
     
const divElement8 = document.createElement ('div');
mainElement.append (divElement8);
divElement8.append (`#8: Quarantine should be false. Actual: ${wagon.shouldQuarantine()}`);
     
    sarahunter.giveFood(juan, 4);
    sarahunter.eat(); // She only has 1, so she eats it and is now sick
    console.log(`#9: Quarantine should be true. Actual: ${wagon.shouldQuarantine()}`);
     
const divElement9 = document.createElement ('div');
mainElement.append (divElement9);
divElement9.append (`#9: Quarantine should be true. Actual: ${wagon.shouldQuarantine()}`);
         
    console.log(`#10: There should be 6 total food. Actual: ${wagon.totalFood()}`);
     
const divElement10 = document.createElement ('div');
mainElement.append (divElement10);
divElement10.append (`#10: There should be 6 total food. Actual: ${wagon.totalFood()}`);
     