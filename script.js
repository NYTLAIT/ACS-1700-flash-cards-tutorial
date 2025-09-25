import data from './data.js'

console.log(data.title)
console.log(data.description)
console.log(data.questions)

const titleH1 = document.querySelector('#title')
titleH1.innerHTML = data.title
console.log(titleH1)

const descriptionP = document.querySelector('#description')
descriptionP.innerHTML = data.description

const scoreP = document.querySelector('#score')

const questionContainer = document.querySelector('#flip-card')

const qcardP = document.querySelector('#q-card > p')
const acardP = document.querySelector('#a-card > p')

let questionIndex = -1
const showNextQuestion = () => {
    questionIndex += 1
    questionIndex = questionIndex % (questions.length - 1)
    qcardP.innerHTML = questions[questionIndex].q
    acardP.innerHTML = questions[questionIndex].a

    scoreP.innerHTML = `Score ${questionIndex + 1}/${questions.length - 1}`
}

showNextQuestion()