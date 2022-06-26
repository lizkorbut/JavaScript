let age_1 = 10;
let age_2 = 18;
let age_3 = 60;

function checkAge(age) {
    age = +age;
    if (age && !isNaN(age)) {
        if (age < age_2) {
            console.log("You don't have access cause your age is " + age + " It's less then");
        } else if ((age >= age_2) && (age < age_3)) {
            console.log('Welcome!');
        } else if (age > age_3) {
            console.log('Keep calm and look Culture channel');
        } else {
            console.log('Technical work');
        }
    } else console.log('Error. Not a number');
}

let userAge = prompt('Enter your age');
checkAge(userAge);