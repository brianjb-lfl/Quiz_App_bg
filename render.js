'use strict';

function renderAppQuiz(){
  console.log('render ran');
  $('.js-section').addClass('hidden');
  // 'front' 'quiz' 'end'
  switch(STORE.appState){
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
}

function getQATempStr(){
  return `
  <p id='q-text'>${STORE.quizQs[STORE.quizQ-1].qTxt}</p>
  <div id='answer'>
    <input type='radio' id='answer1' name='answer' value='answer1'>
    <label for='answer1'>Answer 1</label>
    <input type='radio' id='answer2' name='answer' value='answer2'>
    <label for='answer2'>Answer 2</label>
    <input type='radio' id='answer3' name='answer' value='answer3'>
    <label for='answer3'>Answer 3</label>
    <input type='radio' id='answer4' name='answer' value='answer4'>
    <label for='answer4'>Answer 4</label>
  </div>
  <div>
    <button id='quiz-submit' class='js-button' type='submit'>Submit</button>
  </div>
  `


}


