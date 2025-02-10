const questionContainer = document.getElementById("question");
const buttonsContainer = document.getElementById("buttons");
const nbutton = document.getElementById("next");
const smallScreen = window.matchMedia("(max-width: 600px)");
const mediumScreen = window.matchMedia("(min-width: 601px) and (max-width: 1024px)");
const largeScreen = window.matchMedia("(min-width: 1025px)");

const questions = [
    {
        question: "Which is the largest animal in the world?",
        answers: [
            { text: "Shark", correct: false },
            { text: "Blue Whale", correct: true },
            { text: "Elephant", correct: false },
            { text: "Giraffe", correct: false },
        ]
    },
    {
        question: "Which is the smallest country in the world?",
        answers: [
            { text: "Vatican City", correct: true },
            { text: "Bhutan", correct: false },
            { text: "Nepal", correct: false },
            { text: "Sri Lanka", correct: false },
        ]
    },
    {
        question: "Which is the largest desert in the world?",
        answers: [
            { text: "Kalahari", correct: false },
            { text: "Gobi", correct: false },
            { text: "Sahara", correct: false },
            { text: "Antarctica", correct: true },
        ]
    },
    {
        question: "Which is the smallest continent in the world?",
        answers: [
            { text: "Asia", correct: false },
            { text: "Australia", correct: true },
            { text: "Arctic", correct: false },
            { text: "Africa", correct: false },
        ]
    },
    {
        question: "What is the name of the weak zone of the earth’s crust?",
        answers: [
            { text: "Seismic", correct: true },
            { text: "Cosmic", correct: false },
            { text: "Formic", correct: false },
            { text: "Abaemic", correct: false },
        ]
    },
    {
        question: "Where was India’s first national Museum opened?",
        answers: [
            { text: "Delhi", correct: false },
            { text: "Hyderabad", correct: false },
            { text: "Rajasthan", correct: false },
            { text: "Mumbai", correct: true },
        ]
    },
    {
        question: "The world’s nation 5G mobile network was launched by which country?",
        answers: [
            { text: "Japan", correct: false },
            { text: "Asia", correct: false },
            { text: "South Korea", correct: true },
            { text: "Malaysia", correct: false },
        ]
    },
    {
        question: "The father of Indian missile technology is?",
        answers: [
            { text: "Dr Homi Bhabha", correct: false },
            { text: "Dr Chidambaram", correct: false },
            { text: "Dr U.R. Rao", correct: false },
            { text: "Dr A.P.J. Abdul Kalam", correct: true },
        ]
    },
    {
        question: "What is the reason behind the Bats flying in the dark?",
        answers: [
            { text: "They produce high pitched sounds called ultrasonics", correct: true },
            { text: "The light startles them", correct: false },
            { text: "They have a perfect vision in the dark", correct: false },
            { text: "None of the above", correct: false },
        ]
    },
    {
        question: "At which place on earth are there days & nights of equal length always?",
        answers: [
            { text: "Equator", correct: true },
            { text: "Poles", correct: false },
            { text: "Prime Meridian", correct: false },
            { text: "Nowhere", correct: false },
        ]
    },
];
index = 0
points = 0

function renderItems(){
    flag = 0
    buttonsContainer.innerHTML = ''
    nbutton.innerHTML = ''
    const btncontainer = document.createElement("div")
    questionContainer.textContent = index+1+" ."+questions[index].question
    for(let i=0; i<4;i++){
        const button = document.createElement("button")
        button.textContent = questions[index].answers[i].text
        const space = document.createElement("br")
        button.dataset.correct = questions[index].answers[i].correct;
        let isTrue = button.dataset.correct === "true"
        if(isTrue){
            button.classList.add("correct-class")
        }
        else{
            button.classList.add("wrong-class")
        }
        button.style.marginBottom = "5px"
        button.style.minWidth = "100%"
        button.style.textAlign = "left"
        button.style.fontSize = "1.1rem"
        button.style.padding = "7px"
        button.style.borderWidth = "1px"
        btncontainer.appendChild(button)
        btncontainer.appendChild(space)
        button.addEventListener('click',handleButtonClick)
    } 
    buttonsContainer.appendChild(btncontainer)
}
function handleButtonClick(event){
    let currentbutton = event.target
    let isTrue = currentbutton.dataset.correct === "true"
    nbutton.innerHTML = ''
    if(isTrue){     
        if(flag === 0){
            points++
            currentbutton.style.backgroundColor = 'rgb(3, 206, 3)'
            index++
            flag =1
        }
    }
    else{
        if(flag === 0){
            currentbutton.style.backgroundColor = 'red'
            index++
            flag = 1
        }
    }const next = document.createElement("button")
    next.textContent = "Next"
    next.style.marginTop = "5px"
    next.style.minWidth = "6rem"
    next.style.textAlign = "center"
    next.style.fontSize = "1.1rem"
    next.style.borderWidth = "1px"
    next.style.backgroundColor = "rgb(0, 22, 117)"
    next.style.color = "white"
    next.style.padding = "4px"
    next.onclick = () => renderItems()
    nbutton.appendChild(next)
    
    let checkInd = index === questions.length
    if(checkInd){
        nbutton.innerHTML = ''
        buttonsContainer.innerHTML = ''
        questionContainer.textContent = `You have scored ${points} out of ${questions.length}`
        const next = document.createElement("button")
        next.textContent = "Play again!"
        next.style.marginTop = "5px"
        next.style.minWidth = "6rem"
        next.style.textAlign = "center"
        next.style.fontSize = "1.1rem"
        next.style.borderWidth = "1px"
        next.style.backgroundColor = "rgb(0, 22, 117)"
        next.style.color = "white"
        next.style.padding = "4px"
        next.style.borderRadius = "5px"
        next.onclick = function(){
            index = 0
            points = 0
            renderItems()
        }
        nbutton.appendChild(next)
    }

}
document.addEventListener("DOMContentLoaded",renderItems())
