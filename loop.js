// task 1 ( "I will invest at lest 6 hours every day for next 60 days!" display this massage 60 time)

for (let day = 1; day <= 60; day++) {
    console.log("I will invest at least 6 hours every day for next 60 day");
}

// task 2 (Find all the odd numbers from 61 to 100.)

let number = 61;
while (number <= 100) {
    if( number % 2 === 1) {
        console.log(`${number}`);
    }
    number++;
}

// task 3 (Find all the even numbers from 78 to 98.)
let evenNumber = 78;
while (evenNumber <= 98) {
    if(evenNumber % 2 !== 1){
        console.log(evenNumber);
    }
    evenNumber++;
}

// task 4 (display sum of all the odd numbers from 81 to 131)

let totalOddNumber = 0;
let oddNum = 81;
while (oddNum <= 131){
    if(oddNum % 2 === 1){
        totalOddNumber += oddNum;
        console.log(totalOddNumber);
    }
    oddNum++;
}

// task 5 (display sum of all the even numbers from 206 to 311)

let totalEvenNumber = 0;
let evenNum = 206;
while (evenNum <= 311){
    if(evenNum % 2 === 0){
        totalEvenNumber += evenNum;
        console.log(totalEvenNumber);
    }
    evenNum++;;
}