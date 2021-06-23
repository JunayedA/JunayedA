// document.getElementById("count-el").innerText = 5

// let count = 30;
// count = count + 20;
// count = count + 100;
// count = count + 50;
// count = count - 70;
// count = count - 30;
// count = count - 50;
// count = count - 25;
// count = count + 30;
// count = count + 15;
// console.log(count);

// let myAge = 18;
// console.log(myAge);

// let number1 = 12;
// let number2 = 3;
// let number =number1+number2
// console.log(number);

// let myAge = 18;
// let humanDogratio =7;
// let dogAge=myAge*humanDogratio;
// console.log(dogAge);

//intialize the count as 0
//listen for clicks on the incerement button
//increment the count variable when the button is clicked
//change the count-el tag in HTML to reflect the new count

// function increment(){
//     console.log('The button was clicked')
// }

// function countdown(){
//     console.log(5);
//     console.log(4);
//     console.log(3);
//     console.log(2);
//     console.log(1);
// }
//setting up the race
// countdown();
//GoPlayers are running the race
//race is finished
//get ready for a new race
// countdown();

//My function

// function myFunction(){
//     console.log(42);
// }
// myFunction();

// let lap1 = 10;
// let lap2 = 20;
// let lap3 = 30;

//creat a function thats logs out the sum of all the lap time

// function timeLap(){
//     let totalTime = lap1 + lap2 + lap3;
//     console.log(totalTime)
// }
// timeLap();

//practice

// let lapsCompleted1 = 0;
// let lapsCompleted2 = 1;
// let lapsCompleted3 = 2;
// let lapsCompleted4 = 3;
// let lapsCompleted5 = 4;
// let lapsCompleted6 = 5;

// function allLaps(){
//     let totalLapes = (lapsCompleted1 + lapsCompleted2 + lapsCompleted3 + lapsCompleted4 + lapsCompleted5 + lapsCompleted6)
//     console.log(totalLapes);
// }

// allLaps();

let countEl = document.getElementById("count-el")

console.log(countEl)

let count = 0;
function increment(){
    console.log(count)
    count = count + 1
    countEl.innerText = count
}