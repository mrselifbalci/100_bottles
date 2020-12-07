
function abc (){

let numberOfBottle = prompt('Enter the number of bottles')
let num = prompt('Enter the number of bottles to take down each time')
while (numberOfBottle >= 0) {
    
    if (numberOfBottle > 0) {
        console.log(numberOfBottle + " bottles of beer on the wall");
        console.log("Take " + num + " down, pass it around,");
        
    } else if (numberOfBottle==0){
        console.log("No more bottles of beer on the wall.");
    } else if (numberOfBottle<num){
        console.log("Take " + numberOfBottle + " down, pass it around,")

    } 
    numberOfBottle = numberOfBottle - num;
}
 }

 abc()