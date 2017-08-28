'use strict';
let STORE = {
  quizQs: [
    {qID: 1,
      qTxt: 'Which pop duo was the first western band to play in The Peoples Republic of China?',
      cAns: 'Wham',
      wAns1: 'Simon and Garfunkel',
      wAns2: 'Right Said Fred',
      wAns3: 'Duran Duran'},
    {qID: 2,
      qTxt: 'Speed skating originated in which country?',
      cAns: 'Netherlands',
      wAns1: 'Russia',
      wAns2: 'Canada',
      wAns3: 'Norway'},
    {qID: 3,
      qTxt: 'In the book The Last Of The Mohicans what was the name of Chingachgook\'s only son?',
      cAns: 'Uncas',
      wAns1: 'Mingo',
      wAns2: 'Lightfoot',
      wAns3: 'Magua'},
    {qID: 4,
      qTxt: 'In which continent did the ostrich originate?',
      cAns: 'Africa',
      wAns1: 'Australia',
      wAns2: 'North America',
      wAns3: 'Asia'},
    {qID: 5,
      qTxt: 'Julius Caesar said "The die is cast" after crossing which river?',
      cAns: 'Rubicon',
      wAns1: 'Danube',
      wAns2: 'Thames',
      wAns3: 'Tiber'},
  ],
  appState: 'quiz',     // 'front', 'quiz', 'end'
  quizQ: 1,
  quizQState: 'ask',      // 'ask', 'feedback'
  quizScore: null
};

// Front Handler
function frontHandler(){
  $('#welcome-page').on('click', '#welcome-submit', event => {
    console.log('front handler ran');
    STORE.appState = 'quiz';
    renderAppQuiz();
  });
}

// Quiz Handler
function quizHandler(){
  $('#question-answer').on('click', '#quiz-submit', event => {
    event.preventDefault();
    console.log('quiz handler ran');
    STORE.appState = 'end';
    renderAppQuiz();
  });
}

// End Handler
function endHandler(){
  $('#end-of-quiz').on('click', '#end-submit', event => {
    console.log('end handler ran');
    STORE.appState = 'front';
    renderAppQuiz();
  });
}





function handleQuizApp() {
  renderAppQuiz();
  frontHandler();
  quizHandler();
  endHandler();
}

$(handleQuizApp);