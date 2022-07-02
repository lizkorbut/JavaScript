// 1. Написать скриптик, который сосчитает и выведет результат от возведения 2 в степень 10, 
// начиная со степени 1

let a = 2;
let power = 1;
while (power >= 1 && power <= 10) {
    console.log('result = ', a ** power);
    power++;
}


// 1 *.Преобразовать 1 задачу в функцию, принимающую на вход степень, 
//в которую будет возводиться число 2

function pwr(number) {
    number = +number
    if (number && !isNaN(number)) {
        let b = 2;
        console.log('Your result = ', b ** userNumber);
    } else console.log('Error. Not a number');
}

let userNumber = prompt('Enter your number');
pwr(userNumber);


// 2. Написать скрипт, который выведет 5 строк в консоль таким образом, чтобы в первой строчке выводилось:), во второй:):) и так далее
// Пример в консоли:
// :)
// :):)
// :):):)
// :):):):)
// :):):):):)

let smile = ':)';
for (let count = 1; count <= 5; count++) {
    console.log(smile.repeat(count));
}


// 2 *.Преобразовать 2 задачу в функцию, принимающую на вход строку, 
// которая и будет выводиться в консоль(как в условии смайлик), 
// а также количество строк для вывода
// e.g.function printSmile(stroka, numberOfRows)

function printSmile(stroka, numberOfRows) {
    numberOfRows = +numberOfRows
    if (numberOfRows && !isNaN(numberOfRows)) {
        for (numberOfRows = 1; numberOfRows <= userRows; numberOfRows++) {
            console.log(stroka.repeat(numberOfRows));
        }
    } else console.log('Error. Not a number');
}

let stroka = prompt('Enter your symbol');
let userRows = prompt('Enter your number of stroke');
printSmile(stroka, userRows);


// 3 **.Написать функцию, которая принимает на вход слово.Задача функции посчитать 
// и вывести в консоль, сколько в слове гласных, и сколько согласных букв.
//     e.g.function getWordStructure(word)
// В консоли: Слово(word) состоит из(число) гласных и(число) согласных букв
// Проверки: 'case', 'Case', 'Check-list'

let vowels = ['a', 'e', 'i', 'o', 'u'];
let consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];
let countVowels = 0;
let countConsonants = 0;

function getWordStructure(word) {
    for (let letter of word.toLowerCase()) {
        if (vowels.includes(letter)) {
            countVowels++;
        } else if (consonants.includes(letter)) {
            countConsonants++;
        } else {
            console.log('You enter a number');
        }
    }
    return countVowels;
}

let string = prompt('Enter a string: ');
let result = getWordStructure(string);

console.log(`The word ${string} сonsist of ${result} vowels and ${countConsonants} consonants`);

getWordStructure('case');
getWordStructure('Case');
getWordStructure('Check-list');


// 4 **.Написать функцию, которая проверяет, является ли слово палиндромом
// e.g.function isPalindrom(word)
// Проверки: 'abba', 'Abba'

function isPalindrom(word) {
    let len = word.length;
    for (let i = 0; i < len / 2; i++) {
        if (word[i] !== word[len - 1 - i]) {
            return 'It is not a palindrome';
        }
    }
    return 'It is a palindrome';
}
let word = prompt('Enter a string');
let value = isPalindrom(word);

console.log(value);

isPalindrom('abba');
isPalindrom('Abba');
isPalindrom('шалаш');


