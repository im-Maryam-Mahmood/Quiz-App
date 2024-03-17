const questions = [
    {
        que:"Which of the following is the Markup Language",
        answers:[
            {text:"HTML",correct:true},
            {text:"CSS",correct:false},
            {text:"JS",correct:false},
            {text:"C",correct:false},
        ]
    },
    {
        que:"Which year was javascript launched",
        answers:[
            {text:"1995",correct:true},
            {text:"1996",correct:false},
            {text:"1997",correct:false},
            {text:"1998",correct:false},
        ]
    },
    {
        que:"In how many Generations Computers are classified ?",
        answers:[
            {text:"2",correct:false},
            {text:"3",correct:false},
            {text:"4",correct:false},
            {text:"5",correct:true},
        ]
    },
    {
        que:"Who is the Father of modern computers",
        answers:[
            {text:"Thomas Hamilton",correct:false},
            {text:"Charles Babage",correct:true},
            {text:"Harry Style",correct:false},
            {text:"Noumann",correct:false},
        ]
    },
    {
        que:"What does CSS stands for",
        answers:[
            {text:"Cake Style Sheet",correct:false},
            {text:"Cup Style Sheet",correct:false},
            {text:"Car Style Sheet",correct:false},
            {text:"Cascending Style Sheet",correct:true},
        ]
    },
    {
        que:"Which is the example of 1st generation computer",
        answers:[
            {text:"UNIAC",correct:false},
            {text:"ENIAC",correct:true},
            {text:"EDSAC",correct:false},
            {text:"EDVAC",correct:false},
        ]
    },
    {
        que:"Which country have the most powerful super-computer",
        answers:[
            {text:"China",correct:false},
            {text:"Japan",correct:false},
            {text:"America",correct:true},
            {text:"Germany",correct:false},
        ]
    },
    {
        que:"The first Mechanical Computer was developed in",
        answers:[
            {text:"1935",correct:false},
            {text:"1936",correct:false},
            {text:"1937",correct:true},
            {text:"1938",correct:false},
        ]
    },
    {
        que:"Who developed the first Mechanical Computer ?",
        answers:[
            {text:"Charles Babbage",correct:false},
            {text:"Howard Aiken",correct:true},
            {text:"John Von Neuman",correct:false},
            {text:"J.P.Ekart",correct:false},
        ]
    },
    {
        que:"Who first used Binary system in Computers ?",
        answers:[
            {text:"Charles Babbage",correct:false},
            {text:"Howard Aiken",correct:false},
            {text:"John Von Neuman",correct:true},
            {text:"J.P.Ekart",correct:false},
        ]
    }
];
const questionElement =document.getElementById("question");
const answerButton=document.getElementById("answer-button");
const nextButton=document.getElementById("next-btn");

let index=0;
let score=0;
function startQuiz(){
    index=0;
    score=0;
    nextButton.innerHTML="Next";
    showQuestion();
}
function showQuestion(){
    resetState();
    let currentQuestion=questions[index];
    let questionNo=index+1;
    questionElement.innerHTML=questionNo+"."+currentQuestion.que;

    currentQuestion.answers.forEach(answer=>{
        const button=document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener(
            "click",
            selectAnswer
        )
    });

}

function resetState(){
    nextButton.style.display="none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn=e.target;
    const isCorrect=selectedBtn.dataset.correct==="true";
    if(isCorrect)
    {
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButton.children).forEach(button=>{
        if(button.dataset.correct==="true"){
            button.classList.add("correct");

        }
        button.disabled=true;
    });
    nextButton.style.display="block";
}

function showScore(){
    resetState();
    questionElement.innerHTML=`You score ${score} out of ${questions.length}!`;
    nextButton.innerHTML="Play again";
    nextButton.style.display="block";
}

function handNextBtn(){
    index++;
    if(index < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener(
    "click",()=>{
        if(index<questions.length){
            handNextBtn();
        }
        else{
            startQuiz();
        }
    }
);

startQuiz();