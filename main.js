
let field = document.querySelector('.field')
let start = document.querySelector('.start')
let reset = document.querySelector('.reset')
let timerCount  = document.querySelector('.timer__count')
let pointCount  = document.querySelector('.point__count')

for (let i = 0; i < 36; i++){
    let newTag = document.createElement('div')

    newTag.classList.add('box')
    newTag.id = i

    field.append(newTag)
}

let targetBox = document.createElement('div')

targetBox.classList.add('target')

let allBoxes = document.querySelectorAll('.box')

const randomAppendBox = () => {
   let randomValue = Math.floor(Math.random() * 36)
    allBoxes[randomValue].append(targetBox)
}

start.addEventListener('click', () => {
    let i = 0
    start.disabled = true
    reset.disabled = false

    let timeInterval = setInterval(() => {
        i++
        timerCount.textContent = i
        if(i === 10){
            clearInterval(timeInterval)
        }
    } , 1000)

    let gameInterval = setInterval(() => {
        randomAppendBox()
        if(i === 10){
            clearInterval(gameInterval)
        }
    }, 1000)



    let point = 0

    targetBox.addEventListener('click' , () => {
        if(i < 10){
            point++
            pointCount.textContent  = point
        }
    })

    reset.addEventListener('click', () => {
        clearInterval(timeInterval)
        clearInterval(gameInterval)
        i = 0
        point = 0
        start.disabled = false
        reset.disabled = true
        timerCount.textContent = i
        pointCount.textContent = point
        targetBox.remove()

    })
})





