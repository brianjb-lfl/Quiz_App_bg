'use strict';
let STORE = {
  quizQs: [],             // question bank
  appState: 'front',      // 'front', 'quiz', 'end'
  quizQ: 1,               // current question in current quiz
  quizNumQs: 3,           // total questions in current quiz
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
      let inputValue = $('input[name=answer]:checked').val();
      STORE.userAns = inputValue;
      if (inputValue === 'cAns'){
        STORE.quizQState = 'feedback-C';
        STORE.quizScore += 1; 
      } else {
        STORE.quizQState = 'feedback-W';
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
  STORE.ansArr.forEach(function(ans){
    ans.aRand = Math.random();
  });
  console.log(STORE.ansArr);
  STORE.ansArr.sort((a,b) => a.aRand - b.aRand);
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
}

function handleQuizApp() {
  loadQs();
  renderAppQuiz();
  frontHandler();
  quizHandler();
  endHandler();
}

$(handleQuizApp);