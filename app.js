'use strict';
let STORE = {
  quizQs: [],             // question bank
  appState: 'front',      // 'front', 'quiz', 'end'
  quizQ: 1,               // current question in current quiz
  quizNumQs: 5,           // total questions in current quiz
  quizQState: 'ask',      // 'ask', 'feedback-C', 'feedback-W'
  quizScore: null,        // running score for current quiz
  ansArr: [               // answer order for current question
    {aID: 'cAns',
      aRand: null},
    {aID: 'wAns1',
      aRand: null},
    {aID: 'wAns2',
      aRand: null},
    {aID: 'wAns3',
      aRand: null}],
      
  userAns: null           // user answer for current question
};

// Front Handler
function frontHandler(){
  $('#welcome-page').on('click', '#welcome-submit', event => {
    console.log('front handler ran');
    STORE.appState = 'quiz';
    initialize();
    randAns();
    renderAppQuiz();
  });
}

// Quiz Handler
function quizHandler(){
  $('#question-answer').on('click', '#quiz-submit', event => {
    event.preventDefault();
    console.log('quiz handler ran');
    
    if(STORE.quizQState === 'ask'){
      //input validation
      let inputValue = $('input[name=answer]:checked').val();
      if(!inputValue){
        alert("Please make your selection first.");
      }
      else{

        console.log(inputValue);
        STORE.userAns = inputValue;
        if (inputValue === 'cAns'){
          STORE.quizQState = 'feedback-C';
          STORE.quizScore += 1; 
        } else {
          STORE.quizQState = 'feedback-W';
        }
      }
    }

    else{
      STORE.quizQ += 1;
      STORE.quizQState = 'ask';
      randAns();
    }

    if (STORE.quizQ > STORE.quizNumQs){
      STORE.appState = 'end';
    }
    
    renderAppQuiz();

  });
}



function randAns(){
  console.log(STORE.ansArr);
  // STORE.ansArr[0] = {aID: 'cAns', aRand: Math.random()};
  // STORE.ansArr[1] = {aID: 'wAns1', aRand: Math.random()};
  // STORE.ansArr[2] = {aID: 'wAns2', aRand: Math.random()};
  // STORE.ansArr[3] = {aID: 'wAns3', aRand: Math.random()};
  // STORE.ansArr.forEach(function(ans){
  //   ans.aRand = Math.random();
  // });
  // STORE.ansArr.sort((a,b) => a.aRand - b.aRand);
  const newArr = STORE.ansArr.map(function(ans){
    ans.aRand = Math.random();
    return ans;
  }).sort((a,b) => a.aRand - b.aRand); 
  STORE.ansArr = newArr;
  console.log(STORE.ansArr);
}


function randQs(){
  
  STORE.quizQs.forEach(function(item){
    item.qRand = Math.random();
  });
  //console.log(STORE.ansArr);
  STORE.quizQs.sort((a,b) => a.qRand - b.qRand);
}

// End Handler
function endHandler(){
  $('#end-of-quiz').on('click', '#end-submit', event => {
    console.log('end handler ran');
    STORE.appState = 'quiz';
    initialize();
    renderAppQuiz();
  });
}

function initialize(){
  STORE.quizQ = 1;
  STORE.quizScore = 0;
  randQs();
}

function handleQuizApp() {
  loadQs();
  renderAppQuiz();
  frontHandler();
  quizHandler();
  endHandler();
}

$(handleQuizApp);