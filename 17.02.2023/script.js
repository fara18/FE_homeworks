/* Напишите цикл for, который выводит консоль каждое второе число от 0 до 10 */

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let array2elemnt = []
for (let index = 0; index < array.length; index++) {
    if (array[index] % 2 == 1) {
        array2elemnt.push(array[index])
    }
}
console.log(`Array with evrey second element-${array2elemnt}`);

/* Напишите цикл for, который выводит в консоль  все числа от 55 до 20 */

const arrayWithInput = []
for (let input = 55; input >= 22; input--) {
    arrayWithInput.push(input)
}
console.log("Numbers from 55 until 22-" + arrayWithInput);

/* Дан массив numbers. Вывести в консоль все числа из массива */

const numbers = [3, 5, 11, 2, 8, 1, 6];

numbers.forEach(function (entry) {
    console.log("Numbers-" + entry);
})

/* Сформировать новый массив numberssquared и передать в него все элементы из массива numbers, возведенные в квадрат */
const numbersSquared = []
for (let index = 0; index < numbers.length; index++) {
    numbersSquared.push(numbers[index] **2) 
    
}
console.log("Squared numbers[array]-"+numbersSquared);



/* Дан объект user. Используя данные из объекта, сформировать строку в формате: ‘User’s name is  . He is  years old’ */

const user = {
    firstname: 'Ivan',
    lastname: 'Ivanov',
    age: 20,
    salary: 500
}
console.log(`User name is - ${user.firstname} \nUser last name is - ${user.lastname} \n User age is - ${user.age} \n User salary is - ${user.salary}`);