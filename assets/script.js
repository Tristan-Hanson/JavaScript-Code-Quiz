const quiz = document.querySelector("#quiz-questions")
const start = document.getElementById('start')

start.textContent="start"

const questions =[
    {
        title: "What does CSS stand for:",
        choices: ["Cascading Style Sheets", "Colorful soccer socks", "Caramel selling stand"],
        answer: "Cascading Style Sheets"
    },
    {
        title: "What does HTML stand for?",
        choices: ["Hyper Text Markup Language", "How tall moths leap", "Heavy tank making links"],
        answer: "Hyper Text Markup Language"
    },
    {
        title: "Is Java the same as JavaScript",
        choices: ["No", "Yes", "IDK Probably"],
        answer: "No"
    },
    {
        title: "Who is the current president of Nepal",
        choices: ["Bidhya Devi Bhandari", "Pushpa Kamal Dahal", "Ram Baran Yadav"],
        answer: "Bidhya Devi Bhandari"
    }
];

var i = 0

const createTitle = () =>{
    let titleElem = document.createElement('h3')
    titleElem.textContent=questions[i].title
    quiz.append(titleElem)
}

const createQuestion = () =>{  
    for (let x=0; x < questions[i].choices.length; x++){
        var questionElem = document.createElement('button')
        questionElem.textContent=questions[i].choices[x]
        quiz.append(questionElem)
        console.log(x)
    }
}

start.addEventListener('click', ()=>{
    if(i < questions.length){
        start.textContent="next"
        createTitle()
        createQuestion()
        i++
    }
})