'use strict';

function renderAppQuiz(){
  console.log('render ran');

  adjPanels();

  if(STORE.appState === 'quiz'){

    $('#question').html(getQATempStr());

    if(STORE.quizQState !== 'ask'){
      if(STORE.quizQState === 'feedback-W'){
        $('[for='+STORE.userAns+']').addClass('wrong-answer');
        $('#question-result').addClass('wrong-answer');
        $('#question-result').text('That is incorrect');
      }
      else if(STORE.quizQState === 'feedback-C'){
        $('#question-result').addClass('correct-answer');
        $('#question-result').text('Correct!!');
      }
      $('[for=cAns]').addClass('correct-answer');
      $('#answer input[type=radio]').hide();
      $('#quiz-submit').text('Next');
    }
  }

  else if(STORE.appState === 'end'){
    $('#end-of-quiz').html(getEndStr());
  }
}

function adjPanels(){
  $('.js-section').addClass('hidden');
  
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
  <h2 id="question-result"></h2>
  <h2>Question ${STORE.quizQ}</h2>
  <p id='q-text'>${STORE.quizQs[STORE.quizQ-1].qTxt}</p>
  <div id='answer'>
    <input type='radio' id='${STORE.ansArr[0].aID}' name='answer' value='${STORE.ansArr[0].aID}'>
    <label for='${STORE.ansArr[0].aID}'>${STORE.quizQs[STORE.quizQ-1][STORE.ansArr[0].aID]}</label><br>
    <input type='radio' id='${STORE.ansArr[1].aID}' name='answer' value='${STORE.ansArr[1].aID}'>
    <label for='${STORE.ansArr[1].aID}'>${STORE.quizQs[STORE.quizQ-1][STORE.ansArr[1].aID]}</label><br>
    <input type='radio' id='${STORE.ansArr[2].aID}' name='answer' value='${STORE.ansArr[2].aID}'>
    <label for='${STORE.ansArr[2].aID}'>${STORE.quizQs[STORE.quizQ-1][STORE.ansArr[2].aID]}</label><br>
    <input type='radio' id='${STORE.ansArr[3].aID}' name='answer' value='${STORE.ansArr[3].aID}'>
    <label for='${STORE.ansArr[3].aID}'>${STORE.quizQs[STORE.quizQ-1][STORE.ansArr[3].aID]}</label>
  </div>
  <div>
    <button id='quiz-submit' class='js-button' type='submit'>Submit</button>
  </div>
  <div class="footer">Current Score:   <span class="score">${STORE.quizScore}</span></div>
  `;
}

function getEndStr(){
  return `
    <h2>End of Quiz</h2>
    <p>your score is <span class="score">${STORE.quizScore}</span> out of <span class="score">${STORE.quizNumQs}</span></p>
    <button id='end-submit' class='js-button' type='button'>Quiz Again</button>
  `
}