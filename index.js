/* PROBLEM 1

function GradeAverage (grades) {
    let total = 0;
    let average = 0;

    for (let i = 0; i < grades.length; i++) {
        total += grades[i];
    }

    average = total / grades.length;

    return average;
}

function Letterize (averageGrade) {
    let letterGrade = 'default';

    if (averageGrade >= 90) {
        letterGrade = 'A';
    } else if (averageGrade < 90 && averageGrade >= 80) {
        letterGrade = 'B';
    } else if (averageGrade < 80 && averageGrade >= 70) {
        letterGrade = 'C';
    }  else if (averageGrade < 70 && averageGrade >= 60) {
        letterGrade = 'D';
    } else if (averageGrade < 60) {
        letterGrade = 'F';
    }

    return letterGrade;
}

let grades = [85, 78, 92, 83, 99, 30, 68];
let averageGrade = GradeAverage(grades);
let letter = Letterize(averageGrade);


console.log(averageGrade);
console.log(letter);

*/
/* PROBLEM 2
function Deposit(cash, balance){
    balance += cash;
    return balance;
}

function Withdraw(cash, balance){
    if (cash > balance){
        console.log("REQUESTED CASH EXCEEDS FUNDS IN ACCOUNT...")
        return balance;
    } else {
        balance -= cash;
        console.log("$" + cash + " dispensed...");
        return balance;
    }
}

function ShowBalance(balance){
    console.log("Balance: $" + balance);
    return balance;
}

let balance = 200;

ShowBalance(balance);
balance = Deposit(100, balance);
ShowBalance(balance);
balance = Withdraw(250, balance);
ShowBalance(balance);
balance = Withdraw(100, balance);
ShowBalance(balance);
*/

/* PROBLEM 3
function InputTask(tasks){
    let input = '';
    while (input != null){
        input = prompt("Please input task (hit cancel to stop)");

        if (input != null){
            tasks.push(input);
        }
    }

    for (let i = 0; i < tasks.length; i++){
        console.log(tasks[i]);
    }
}


let tasks = [];
InputTask(tasks);
*/

function FtoC (temp){
    let celsius = (temp - 32) * (5/9)
    return celsius;
}

function FtoK (temp){
    let kelvin = (temp - 32) * (5/9) + 273.15;
    return kelvin;
}

function CtoF (temp){
    let fahrenheit = (temp * (9/5)) + 32;
    return fahrenheit;
}

function CtoK (temp){
    let kelvin = temp + 273.15;
    return kelvin;
}

function KtoF (temp){
    let fahrenheit = (temp - 273.15) * (9/5) + 32;
    return fahrenheit;
}

function KtoC (temp){
    let celsius = temp - 273.15;
    return celsius;
}

let temp = null;
let unit = null;

while (temp == null) {
    temp = prompt("What temperature is it outside?");
}

temp = parseFloat(temp);

while (unit == null) {
    unit = prompt("What unit of temperature is used where you live? (first letter ex. K, F, C)");
}

if (unit.toUpperCase() == 'F'){
    
    console.log(FtoC(temp) + 'C')
    console.log(FtoK(temp) + 'K')

} else if (unit.toUpperCase() == 'K'){

    console.log(KtoC(temp) + 'C')
    console.log(KtoF(temp) + 'F')

} else if (unit.toUpperCase() == 'C'){

    console.log(CtoF(temp) + 'F')
    console.log(CtoK(temp) + 'K')

}
