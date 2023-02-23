/* Написать цикл, который создает множество параграфов с каждым десятым числом в промежутке от 100 до 50 (т.е. 100, 90, 80, 70, 60, 50). Добавить созданные параграфы в div с классом numbers */

const numbersDiv = document.querySelector(".numbers")
const stringDiv = document.querySelector(".stringContainer")

for (let index = 100; index >= 50; index -= 10) {
    const createP = document.createElement("p")
    createP.innerText = index
    numbersDiv.append(createP)

}

/* Написать цикл, который проходится по массиву строк, для каждой строки создает параграф и добавляет его в div с классом stringscontainer. Строки взять произвольные. */

const array = ["Me", "Myself", "And I"]
for (let index = 0; index < array.length; index++) {
    const createP = document.createElement("p")
    createP.innerText = array[index]
    stringDiv.append(createP)
}

/* Написать цикл, который проходится по массиву с объектами - у объектов свойства firstname, lastname и  age (данные взять произвольные) - и создает карточки только для совершеннолетних пользователей. Карточка должна содержать информацию об имени, фамилии и возрасте пользователя. Добавить все карточки в div с классом userscontainer. */

const me = [
    {
        firstName: "Faruh",
        lastName: "Liashchenko",
        age: "20"
    },
    {
        firstName: "Dovlyat",
        lastName: "Kerimov",
        age: "16"
    }
]
const usersContainer = document.querySelector(".userContainer")
for (let index = 0; index < me.length; index++) {
    const { firstName, lastName, age } = me[index]
    if (age >= 18) {
        const nameCard = document.createElement("div")
        const lastNameCard = document.createElement("div")
        const ageCard = document.createElement("div")
        nameCard.innerText = firstName
        lastNameCard.innerText = lastName
        ageCard.innerText = age
        usersContainer.append(nameCard, lastNameCard, ageCard)
    }

}