/*  Решить следующие задачи:
Создать кнопку и красный квадрат с размерами 200х200px. При клике на кнопку менять у квадрата цвет заднего фона на зеленый и уменьшать его до размеров 100х100px. */

const changeColorButton = document.querySelector("#changeColorButton")
const container = document.querySelector("#container")
changeColorButton.addEventListener("click", function (event) {
    event.preventDefault()
    container.style.backgroundColor = "green";
    container.style.width = "100px";
    container.style.height = "100px";


})

/* Создать кнопку и розовый квадрат с размерами 200х200px. При клике на кнопку менять цвет на синий и выводить в консоль обновленный цвет квадрата. */

const changeColorButtonPink = document.querySelector("#changeColorButtonPink")
const containerPink = document.querySelector("#containerPink")

changeColorButtonPink.addEventListener("click", function (event) {
    event.preventDefault()
    containerPink.style.backgroundColor = "gold"
    console.log("New div color is-" + containerPink.style.backgroundColor);
})

/* Создать кнопку и квадрат с размерами 150х150px. При клике на кнопку увеличивать высоту и ширину квадрата на 20px. */

const containerSize = document.querySelector("#containerSize")
const changeSizeButton = document.querySelector("#changeSizeButton")

changeSizeButton.addEventListener("click", function (event) {
    event.preventDefault()
    containerSize.style.width = "170px"
    containerSize.style.height = "170px"
})

/* Создать кнопку и div с классом root. При клике на кнопку в div создается параграф синего цвета. Текст параграфа произвольный. */

let rootDiv=document.querySelector("#root")
let addP=document.querySelector("#createP")

addP.addEventListener("click",function(event) {
    event.preventDefault()
    let p = document.createElement("p")
    p.innerText='lalalal'
    p.style.color='blue'
    rootDiv.append(p)
    
})

/* Создать кнопку и div с классом root. При клике на кнопку в div создаются по очереди параграфы синего и зеленого цветов. Первый цвет синий */

let rootDiv1=document.querySelector("#root1")
let addP1=document.querySelector("#createP1")

addP1.addEventListener("click",function(event) {
    event.preventDefault()
    let p = document.createElement("p")
    let p1 = document.createElement("p")
    p.innerText='lalalal'
    p1.innerText='ssssss'
    p.style.color='blue'
    p1.style.color='green'
    rootDiv1.append(p,p1)
    
})