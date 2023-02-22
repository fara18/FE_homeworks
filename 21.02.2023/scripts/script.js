/* Напишите функцию, которая принимает два числовых аргумента и возвращает наименьшее из них. */
function highLow(a, b) {
    if (a < b) {
        console.log(`${a}-is lower than ${b}`);
    } else if (b < a) {
        console.log(`${b}-is lower than ${a}`);
    } else {
        console.log(`${a} are equal ${b}`);
    }
}
highLow(10, 10)

/* Напишите функцию, которая принимает два числовых аргумента и выводит в консоль все четные числа от большего к меньшему. */

function evenOdd(a, b) {
    for (let index = a; index >= b; index--) {
        if (index % 2 == 0) {
            console.log(`All even numbers ${index}`);
        }
    }
    for (let index = b; index >= a; index--) {
        if (index % 2 == 0) {
            console.log(index);
        }
    }
}
evenOdd(33, 22)

/* Напишите функцию power, которая принимает два числовых аргумента (основание степени и саму степень) и возвращает число в указанной степени. Значение степени должно быть указано по умолчанию 2. */

function power(number, power = 2) {
    let result = number ** power
    return console.log(`${number}-is original number & your powered number is- ${result}`);
}
console.log(power(2));

/* Напишите функцию, которая принимает числовой аргумент n и считает сумму чисел от 1 до n. */
function numSum(n) {
    let sum = 0;
    for (i = 0; i <= n; i++) {
        sum += i;
    }
    console.log(`Summ of numbers-${sum}`)
}
numSum(10);

/* Напишите функцию, которая принимает два числовых аргумента n и m,и считает сумму четных чисел и нечетных чисел от n до m. 
Суммы выведите в консоль (в начале сумму четных чисел, а затем сумму нечетных). */

function sumEvenOdd(n, m) {
    let sumEven = 0;
    let sumOdd = 0;
    for (let index = n; index <= m; index++) {
        if (index % 2 == 0) {
            sumEven += index
        }
        else {
            index % 2 == 1
            sumOdd += index
        }
    }
    console.log(`Summ of even numbers-${sumEven}`)
    console.log(`Summ of odd numbers-${sumOdd}`)
}
sumEvenOdd(10, 20)