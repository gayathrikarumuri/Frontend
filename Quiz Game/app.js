let questions=[
    {
        question:'what is 2+2 ?',
        answers:[
            {
             text:'4',
             correct:true
            },
             {
             text:'5',
             correct:false
            },
        ]
    },
    {
        question:'Which language is primarily used for styling web pages?',
        answers:[
            {
                text:'HTML',
                correct:false
            },
            {
                text:'Css',
                correct:true
            },
            {
                text:'JS',
                correct:false
            },
            {
                text:'python',
                correct:false
            },
        ]
    },
     {
        question:'What does API stand for?',
        answers:[
            {
                text:'Application Programming Interface',
                correct:true
            },
            {
                text:'Automatic Processing Input',
                correct:false
            },
            {
                text:'Advanced Program Interface',
                correct:false
            },
            {
                text:'Applied Program Integration',
                correct:false
            },
        ]
    },
   {
         question:'What is Git used for?',
        answers:[
            {
                text:'Deploying websites',
                correct:false
            },
            {
                text:'. Writing unit tests',
                correct:false
            },
            {
                text:'Version control',
                correct:true
            },
            {
                text:'Creating graphics',
                correct:false
            },
        ]
    },
     {
         question:'Which of these is a front-end development language?',
        answers:[
            {
                text:'PHP',
                correct:false
            },
            {
                text:'Python',
                correct:false
            },
            {
                text:'JavaScript',
                correct:true
            },
            {
                text:'Ruby',
                correct:false
            },
        ]
    }    
];
const startButton=document.getElementById('start-btn');
const nextButton=document.getElementById('next-btn');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answers-button');
let shuffledQuestions,currentQuestionIndex;
startButton.addEventListener('click',startGame);
nextButton.addEventListener('click',()=>{
    currentQuestionIndex++;
    setNextQuestion();
})

function startGame(){
    startButton.classList.add('hide');
    shuffledQuestions=questions.sort(()=>Math.random()-0.5);
    currentQuestionIndex=0;
    questionContainerElement.classList.remove('hide');
    setNextQuestion();

}
function setNextQuestion(){
   resetState();
   showQuestion(shuffledQuestions[currentQuestionIndex]);
}
function showQuestion(question){
    questionElement.innerText=question.question;
    question.answers.forEach( (item)=> {
       const button=document.createElement('button');
       button.innerText=item.text;
       button.classList.add('btn');
       if(item.correct)
       {
        button.dataset.correct=item.correct;
       }
       button.addEventListener('click', selectAnswer);
       answerButtonsElement.appendChild(button);
    });
}

function resetState(){
     clearStatusClass(document.body);
    nextButton.classList.add('hide');
    while(answerButtonsElement.firstChild)
    {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}


function selectAnswer(e){
     const selectedButton = e.target;
    const correct=selectedButton.dataset.correct;
        setStatusClass(document.body,correct);
        Array.from(answerButtonsElement.children).forEach((item)=>{
           setStatusClass(item,item.dataset.correct);
        });
        if(shuffledQuestions.length>currentQuestionIndex+1)
        {
            nextButton.classList.remove('hide');
        }
        else{
            startButton.innerText='Restart';
            startButton.classList.remove('hide');
        }
}
function setStatusClass(element,correct)
{
    clearStatusClass(element);
    if(correct)
    {
        element.classList.add('correct');
    }
    else
    {
        element.classList.add('wrong');
    }
}
function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}