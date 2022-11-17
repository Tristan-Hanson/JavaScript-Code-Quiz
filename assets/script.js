const quiz = document.querySelector("#quiz-questions");
const start = document.getElementById('start');
const title = document.getElementById('question-title');
const answer1 = document.getElementById('ans1');
const answer2 = document.getElementById('ans2');
const answer3 = document.getElementById('ans3');
const countdown = document.getElementById("time");
const score = document.getElementById('score');
const final = document.getElementById('final-score');
const finalText = document.getElementById('final')

var i = 0;
var currScore = 0;
var secondsLeft = 120;

start.textContent="start";
countdown.textContent = secondsLeft;

const questions =[
    {
        title: "What does CSS stand for:",
        choices: ["Cascading Style Sheets", "Colorful soccer socks", "Caramel selling stand"],
    },
    {
        title: "What does HTML stand for?",
        choices: ["Hyper Text Markup Language", "How tall moths leap", "Heavy tank making links"],
    },
    {
        title: "Is Java the same as JavaScript",
        choices: ["No", "Yes", "IDK Probably"],
    },
    {
        title: "Who is the current president of Nepal",
        choices: ["Bidhya Devi Bhandari", "Pushpa Kamal Dahal", "Ram Baran Yadav"],
    }
];

const createTitle = () =>{
    title.textContent=questions[i].title
};

const createQuestion = () =>{  
    answer1.textContent=questions[i].choices[0]
    answer2.textContent=questions[i].choices[1]
    answer3.textContent=questions[i].choices[2]
};

function setTime() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        countdown.textContent = secondsLeft;
    }, 1000);
};

const newScore = () =>{
    currScore++
    score.textContent = currScore
    final.textContent=currScore
};

const next = () =>{
    if(i < questions.length){
        createTitle()
        createQuestion()
        i++
        alert('Incorrect!')
        secondsLeft -30
    }else{
        destroy()
    }
};

const destroy = () =>{
    quiz.remove()
    finalText.style.visibility="visible"
}


start.addEventListener('click', ()=>{
    createTitle()
    createQuestion()
    setTime()
    i++
    start.remove()
});

answer1.addEventListener('click', ()=>{
    if(i < questions.length){
        createTitle()
        createQuestion()
        newScore()
        i++
        alert('Correct!')
    }else{
        newScore()
        destroy()
    }
});

answer2.addEventListener('click', ()=>{
    next()
});

answer3.addEventListener('click', ()=>{
    next()
});