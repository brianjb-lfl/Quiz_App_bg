'use strict';

function renderAppQuiz() {
  console.log('render ran');


  // randomize answer array
  if (STORE.appState === 'quiz' && STORE.quizQState === 'ask') {
    STORE.ansArr[0] = { aID: 'cAns', aRand: Math.random() };
    STORE.ansArr[1] = { aID: 'wAns1', aRand: Math.random() };
    STORE.ansArr[2] = { aID: 'wAns2', aRand: Math.random() };
    STORE.ansArr[3] = { aID: 'wAns3', aRand: Math.random() };
    STORE.ansArr.sort((a, b) => a.aRand - b.aRand);
  }

  $('.js-section').addClass('hidden');
  // 'front' 'quiz' 'end'
  switch (STORE.appState) {
  case 'front':
    $('#welcome-page').removeClass('hidden');
    break;
  case 'quiz':
    $('#question-answer').removeClass('hidden');
    break;
  case 'end':
    $('#end-of-quiz').removeClass('hidden');
    break;
  }

  $('#question').html(getQATempStr());

  if (STORE.quizQState === 'feedback-W' || STORE.quizQState === 'feedback-C') {
    $('[for=' + STORE.userAns + ']').addClass('wrong-answer');
    $('[for=cAns]').addClass('correct-answer');
    $('#answer input[type=radio]').hide();
    $('#quiz-submit').text('Next');
  }
}

function getQATempStr() {
  return `
  <p id='q-text'>${STORE.quizQs[STORE.quizQ - 1].qTxt}</p>
  <div id='answer'>
    <input type='radio' id='${STORE.ansArr[0].aID}' name='answer' value='${STORE.ansArr[0].aID}'>
    <label for='${STORE.ansArr[0].aID}'>${STORE.quizQs[STORE.quizQ - 1][STORE.ansArr[0].aID]}</label><br>
    <input type='radio' id='${STORE.ansArr[1].aID}' name='answer' value='${STORE.ansArr[1].aID}'>
    <label for='${STORE.ansArr[1].aID}'>${STORE.quizQs[STORE.quizQ - 1][STORE.ansArr[1].aID]}</label><br>
    <input type='radio' id='${STORE.ansArr[2].aID}' name='answer' value='${STORE.ansArr[2].aID}'>
    <label for='${STORE.ansArr[2].aID}'>${STORE.quizQs[STORE.quizQ - 1][STORE.ansArr[2].aID]}</label><br>
    <input type='radio' id='${STORE.ansArr[3].aID}' name='answer' value='${STORE.ansArr[3].aID}'>
    <label for='${STORE.ansArr[3].aID}'>${STORE.quizQs[STORE.quizQ - 1][STORE.ansArr[3].aID]}</label>
  </div>
  <div>
    <button id='quiz-submit' class='js-button' type='submit'>Submit</button>
  </div>
  `;

}


