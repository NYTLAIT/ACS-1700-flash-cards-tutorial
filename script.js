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
    const questions = data.questions
    questionIndex += 1
    questionIndex = questionIndex % (questions.length)
    qcardP.innerHTML = questions[questionIndex].q
    acardP.innerHTML = questions[questionIndex].a

    scoreP.innerHTML = `Score ${questionIndex + 1}/${questions.length}`
}

showNextQuestion()

document.body.addEventListener('click', e => {
    console.log(e)
    if (e.target.matches('#answer-button')) {
        questionContainer.classList.add('flip')
    } else if (e.target.matches('#question-button')) {
        questionContainer.classList.remove('flip')
    }else if (e.target.matches('#next-button')) {
        questionContainer.classList.remove('flip')
        showNextQuestion()
    }
})