/**
 * Author: FISH UP
 * https://array30.misterfishup.com/
 * Copyright © 2020 FISH UP Dictionary of Array
 * Date: 2020-12-22(23)
 */

/* Structure: (use search)
  - get html DOMs
  - general functions
  - initialisation
  - timer and CPM
  - prepare or reset exercise
  - create customised exercise
  - create built-in exercise
  - prepare sentences, hints and results
  - instant verification
  - enter Key action
  - eng Key Toggle
  - fetch data
  - 6 createLine functions
  - content display
*/

// --------------
// get html DOMs
// --------------

// get html DOMs Middle
const engKeyActiveElem = document.getElementById('cb_eng_key_active');
const sentenceCurrentElem = document.getElementById('sentence_current');
const sentenceNextElem = document.getElementById('sentence_next');
const typingInputElem = document.getElementById('typing_input');
const btnExerReset = document.getElementById('btn_exer_reset');
const sentencesAlreadyElem = document.getElementById('sentences_already');
const wrongCharsAlreadyLinkElem = document.getElementById('wrong_chars_already_link');
const wrongCharsAlreadyElem = document.getElementById('wrong_chars_already');
const wrongCharsCurrentElem = document.getElementById('wrong_chars_current');

// get html DOMs Right
const numTotalCharsSpan = document.getElementById('num_total_chars');
const numTotalSentencesSpan = document.getElementById('num_total_sentences');
const posLineSpan = document.getElementById('pos_line');
const numTotalCorrectCharsSpan = document.getElementById('num_total_correct_chars');
const numTotalIncorrectCharsSpan = document.getElementById('num_total_incorrect_chars');
const numTotalUntouchedCharsSpan = document.getElementById('num_total_untouched_chars');
const accuracySpan = document.getElementById('accuracy');
const numRemainingLinesSpan = document.getElementById('num_remaining_lines');
const timeLengthSpan = document.getElementById('time_length');
const cpmCorrectSpan = document.getElementById('cpm_correct');
const cpmTypedSpan = document.getElementById('cpm_typed');

// get html DOMs Left
const hintCurrentElem = document.getElementById('hint_current');

// get html DOMs Left Exercises (except built-in exer buttons)
const numCharElem = document.getElementById('option_num_char');
const permutationElem = document.getElementById('option_permutation');

const inputCustExerElem = document.getElementById("input_cust_exer");
const submitCustExerElem = document.getElementById('btn_submit_cust_exer');
const custExerHintElem = document.getElementById('cust_exer_hint');

// ------------------
// general functions
// ------------------

// two string functions (utf-16 compatible): shuffle & reverse
function shuffle(str) {
  let a = [...str];
  let n = a.length;
  for (let i = n - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let tmp = a[i];
    a[i] = a[j];
    a[j] = tmp;
  }
  return a.join("");
}
function reverse(str) {
  return [...str].reverse().join("");
}

// create the array 'lines' from a string according to selected options
function createArrayLines(str) {
  const numChar = numCharElem.value;
  const order = permutationElem.value;
  let orderedStr;
  if (order == 'normal') {
    orderedStr = str;
  } else if (order == 'reversed') {
    orderedStr = reverse(str);
  } else if (order == "random") {
    orderedStr = shuffle(str);
  }

  // this regex will break each line in input by numChar chars (u: compatibility for utf-16)
  const regex = new RegExp(".{1," + numChar + "}", "gu");

  // trim each string in the list, remove it if empty after being trimmed
  return orderedStr.match(regex).map(x => x.trim()).filter(Boolean)
}

let checkIfInDatabase = ch => objectNormal.hasOwnProperty(ch)
  || objectSingle.hasOwnProperty(ch)
  || objectSymbol.hasOwnProperty(ch);
// || objectSpecial.hasOwnProperty(ch)
// || objectShortcode1.hasOwnProperty(ch)
// || objectShortcode2.hasOwnProperty(ch)

// ---------------
// initialisation
// ---------------
let lines = createArrayLines(defaultExercise[stringLocal]);
let indexCurrentLine = 0;
let numCurrentCorrectChars = 0;
let numAlreadyCorrectChars = 0;
let numCurrentIncorrectChars = 0;
let numAlreadyIncorrectChars = 0;
var isTimerActive = false;
var timeStart;
var durationSecond;

// --------------------------------------
// timer and CPM (characters per minute)
// --------------------------------------

setInterval(function () {
  if (isTimerActive) {
    durationSecond = Math.floor((Date.now() - timeStart) / 1000);
  }
}, 100); // update about every 100ms
setInterval(function () {
  if (isTimerActive) {
    const minute = Math.floor(durationSecond / 60);
    const second = durationSecond - minute * 60;
    timeLengthSpan.textContent = second < 10
      ? minute + ':0' + second
      : minute + ':' + second;
  }
}, 100); // update about every 100ms
setInterval(function () {
  if (isTimerActive && durationSecond >= 2) {
    const numTotalCorrectChars = parseInt(numTotalCorrectCharsSpan.textContent);
    const numTotalIncorrectChars = parseInt(numTotalIncorrectCharsSpan.textContent);
    cpmCorrectSpan.textContent = ((60 * numTotalCorrectChars) / durationSecond).toFixed();
    cpmTypedSpan.textContent = ((60 * (numTotalCorrectChars + numTotalIncorrectChars) / durationSecond)).toFixed();
  }
}, 100);

// ----------------------------------------------
// prepare or reset exercise according to 'lines'
// ----------------------------------------------

// prepare the exercise (with respect to 'lines')
function prepareExer() {
  // initialise things
  indexCurrentLine = 0;
  numCurrentCorrectChars = 0;
  numAlreadyCorrectChars = 0;
  numCurrentIncorrectChars = 0;
  numAlreadyIncorrectChars = 0;
  isTimerActive = false;
  durationSecond = 0;
  timeLengthSpan.textContent = '0:00';
  cpmCorrectSpan.textContent = 0;
  cpmTypedSpan.textContent = 0;

  // clear typing input
  typingInputElem.value = '';

  // call prepareSentencesHintsResults (overwrite current, next sentence)
  prepareSentencesHintsResults(indexCurrentLine);

  // clear sentence already
  sentencesAlreadyElem.innerHTML = '';

  // clear wrong chars already, wrong chars already link
  wrongCharsAlreadyLinkElem.innerHTML = '';
  wrongCharsAlreadyElem.innerHTML = '';

  // focus typing input
  $('#typing_input').focus();
  // document.getElementById("hr_above_sentence_current").scrollIntoView();
  document.getElementById("middle_column").scrollIntoView();
}
// execute prepareExer for the 1st time js with default 'lines'
prepareExer();

// reset the exercise w.r.t to current 'lines'
btnExerReset.addEventListener('click', prepareExer);

// ----------------------------
//  create customised exercise
// ----------------------------

function custExerCreator() {
  // clear custExer hint
  custExerHintElem.innerHTML = '';
  // get input string (trimmed)
  const inputString = inputCustExerElem.value.trim();
  if (inputString) {
    if ([...inputString].length > 3000) {
      const tooMany = {
        tw: '提醒：您的輸入超過了 3000 字元！',
        en: "You've entered more than 3000 characters!",
        fr: 'Vous avez saisi plus de 3000 caractères !'
      };
      custExerHintElem.textContent = tooMany[stringLocal];
    } else {
      // create and overwrite lines (arrays)
      lines = createArrayLines(inputString);

      // call prepareExer to prepare the exercise (w.r.t to 'lines')
      prepareExer();
    }
  } else {
    const emptyInput = {
      tw: '提醒：您的輸入為空白！',
      en: 'Nothing is entered!',
      fr: "Rien n'est entré !"
    };
    custExerHintElem.textContent = emptyInput[stringLocal];
  }
}

submitCustExerElem.addEventListener('click', custExerCreator);

// -------------------------
// create built-in exercise
// -------------------------

function builtInExerCreator(str) {
  // create and overwrite lines (arrays)
  lines = createArrayLines(str);

  // call prepareExer to prepare the exercise w.r.t 'lines'
  prepareExer();
}
const snakeToCamel = str => str.replace(/([-_]\w)/g, g => g[1].toUpperCase());

$("#built-in-exercise button").click(function () {
  // if buttonId is 'example-category__example-exercise_name', then
  // category is 'exampleCategory'
  // exerciseName is 'exampleExerciseName'
  const buttonId = $(this).attr('id');
  const category = snakeToCamel(buttonId.substring(0, buttonId.indexOf('__')))
  const exerciseName = snakeToCamel(buttonId.substring(buttonId.indexOf('__') + 2))
  builtInExerCreator(objectBuiltInTypingExercise[category][exerciseName])
})

// ------------------------------------
// prepare sentences, hints and results
// ------------------------------------

function prepareSentencesHintsResults(indexCurrentLine) {
  // overwrite current, next sentence according to lines, indexCurrentLine
  sentenceCurrentElem.innerHTML = '';
  const currentLineArray = [...lines[indexCurrentLine]];
  for (char of currentLineArray) {
    const charSpan = document.createElement('span');
    charSpan.textContent = char;
    sentenceCurrentElem.appendChild(charSpan);
  }
  sentenceNextElem.innerHTML = '';
  if (lines[indexCurrentLine + 1]) {
    sentenceNextElem.textContent = lines[indexCurrentLine + 1];
  } else {
    sentenceNextElem.innerHTML = '&nbsp;';
  }

  // overwrite current hint via printHintCurrent
  printHintCurrent(currentLineArray[0]);

  // clear current wrong chars
  wrongCharsCurrentElem.innerHTML = '';

  // instantVerification for the first time
  if (indexCurrentLine == 0) instantVerification();

  // show results
  const numTotalCorrectChars = numCurrentCorrectChars + numAlreadyCorrectChars;
  const numTotalIncorrectChars = numCurrentIncorrectChars + numAlreadyIncorrectChars;
  numTotalCharsSpan.textContent = [...lines.join('')].length;
  numTotalCorrectCharsSpan.textContent = numTotalCorrectChars;
  numTotalIncorrectCharsSpan.textContent = numTotalIncorrectChars;
  numTotalUntouchedCharsSpan.textContent = [...lines.join('')].length - numTotalCorrectChars - numTotalIncorrectChars;
  numTotalSentencesSpan.textContent = lines.length;
  posLineSpan.textContent = indexCurrentLine + 1;
  numRemainingLinesSpan.textContent = lines.length - indexCurrentLine - 1;
  accuracySpan.textContent = numTotalCorrectChars
    ? ((100 * numTotalCorrectChars) / (numTotalCorrectChars + numTotalIncorrectChars)).toFixed()
    : 0;
}

function printHintCurrent(character) {
  // clear current hint
  hintCurrentElem.innerHTML = '';

  /**
   * append block (another style) #hint_current_coding to #hint_current
   * P.S. character shown even without encoding
   */
  createBlockAnotherStyle(character, "hint_current_coding", "hint_current");
}

// ---------------------
// instant verification
// ---------------------

typingInputElem.addEventListener('input', instantVerification);
// if timer is not active and the exercise is not over, activate it and set timeStart
typingInputElem.addEventListener('input', function () {
  if (!isTimerActive && (indexCurrentLine < lines.length)) {
    isTimerActive = true;
    timeStart = Date.now();
  }
});

function instantVerification() {
  // only called when indexCurrentLine <= lines.length -1
  if (indexCurrentLine <= lines.length - 1) {
    const arrayCurrentCharsSpan = sentenceCurrentElem.querySelectorAll('span');
    const arrayInput = [...typingInputElem.value];

    // clear current wrong chars, current hint
    wrongCharsCurrentElem.innerHTML = '';
    hintCurrentElem.innerHTML = '';

    // initialise indexLastCorrect
    let indexLastCorrect = -1;

    // loop through every characterSpan in current sentence
    arrayCurrentCharsSpan.forEach((characterSpan, index) => {
      const inputChar = arrayInput[index];
      const character = characterSpan.textContent;
      if (inputChar == null) {
        characterSpan.classList.remove('correct');
        characterSpan.classList.remove('incorrect');
        characterSpan.classList.add('untouched');
      } else if (inputChar === character) {
        characterSpan.classList.add('correct');
        characterSpan.classList.remove('incorrect');
        characterSpan.classList.remove('untouched');

        // increment num Current Correct Chars
        numCurrentCorrectChars += 1;

        // update indexLastCorrect
        indexLastCorrect = index;
      } else {
        characterSpan.classList.remove('correct');
        characterSpan.classList.add('incorrect');
        characterSpan.classList.remove('untouched');

        // increment num Current Incorrect Chars
        numCurrentIncorrectChars += 1;

        // add wrong char Current
        addWrongCharCurrent(character, index + 1);
      }
    })

    const currentLineArray = [...lines[indexCurrentLine]];
    // print (overwrite) hint for current char (if exists and not empty string)
    if (currentLineArray[indexLastCorrect + 1]) {
      printHintCurrent(currentLineArray[indexLastCorrect + 1]);
    }

    // change results
    const numTotalCorrectChars = numCurrentCorrectChars + numAlreadyCorrectChars;
    const numTotalIncorrectChars = numCurrentIncorrectChars + numAlreadyIncorrectChars;
    numTotalCorrectCharsSpan.textContent = numTotalCorrectChars;
    numTotalIncorrectCharsSpan.textContent = numTotalIncorrectChars;
    numTotalUntouchedCharsSpan.textContent = [...lines.join('')].length - numTotalCorrectChars - numTotalIncorrectChars;
    accuracySpan.textContent = numTotalCorrectChars
      ? ((100 * numTotalCorrectChars) / (numTotalCorrectChars + numTotalIncorrectChars)).toFixed()
      : 0;

    // reset num Current In/correct Chars
    numCurrentCorrectChars = 0;
    numCurrentIncorrectChars = 0;
  }
}

// -----------------
// enter Key action
// -----------------

$("#typing_input").on('keypress', function (e) {
  if (e.which == 13) {
    if (indexCurrentLine < lines.length - 1) {
      changeLine();
      instantVerification();
    } else if (indexCurrentLine === lines.length - 1) {
      finalise();
    } else {
      typingInputElem.value = '';
      sentenceCurrentElem.innerHTML = '';
      sentenceNextElem.innerHTML = '';
    }
  }
});

// append the block of character #(pos CurrentLine, CurrentString) to wrong_chars_current if in database
function addWrongCharCurrent(character, pos) {
  if (checkIfInDatabase(character)) {
    createBlock(character, 'line_' + String(indexCurrentLine + 1) + '_pos_' + String(pos), 'wrong_chars_current');
  }
}
// append the block of character #(pos CurrentLine, CurrentString) to wrong_chars_already if in database
function addWrongCharAlready(character, pos) {
  if (checkIfInDatabase(character)) { // this line is in fact not necessary
    createBlock(character, 'line_' + String(indexCurrentLine + 1) + '_pos_' + String(pos), 'wrong_chars_already');
  }
}

// function called until current line is the last line in 'lines'
function changeLine() {
  // parse wrong Chars Current to wrong Chars Already
  wrongCharsAlreadyElem.innerHTML += wrongCharsCurrentElem.innerHTML;
  const arrayCurrentCharsSpan = sentenceCurrentElem.querySelectorAll('span');

  // loop through every characterSpan in current sentence
  arrayCurrentCharsSpan.forEach((characterSpan, index) => {
    const character = characterSpan.textContent;

    // correct: increment num Already Correct Chars
    if (characterSpan.className == 'correct') {
      numAlreadyCorrectChars += 1;
    }

    // incorrect: increment num Already Incorrect Chars, add link if in database
    if (characterSpan.className == 'incorrect') {
      numAlreadyIncorrectChars += 1;
      if (checkIfInDatabase(character)) {
        const linkElem = document.createElement('a');
        linkElem.textContent = character;
        linkElem.className = "wrong-character-anchor";
        linkElem.href = '#line_' + String(indexCurrentLine + 1) + '_pos_' + String(index + 1);
        wrongCharsAlreadyLinkElem.appendChild(linkElem);
        const aSpace = document.createTextNode(' ');
        wrongCharsAlreadyLinkElem.appendChild(aSpace);
      }
    }

    // untouched: increment num Already Incorrect Chars, create block & link (if in database), becomes incorrect
    if (characterSpan.className == 'untouched') {
      numAlreadyIncorrectChars += 1;
      if (checkIfInDatabase(character)) {
        addWrongCharAlready(character, index + 1);
        const linkElem = document.createElement('a');
        linkElem.textContent = character;
        linkElem.className = "wrong-character-anchor";
        linkElem.href = '#line_' + String(indexCurrentLine + 1) + '_pos_' + String(index + 1);
        wrongCharsAlreadyLinkElem.appendChild(linkElem);
        const aSpace = document.createTextNode(' ');
        wrongCharsAlreadyLinkElem.appendChild(aSpace);
      }
      characterSpan.classList.add('incorrect');
      characterSpan.classList.remove('untouched');
    }
  })

  // change results
  const numTotalCorrectChars = numCurrentCorrectChars + numAlreadyCorrectChars;
  const numTotalIncorrectChars = numCurrentIncorrectChars + numAlreadyIncorrectChars;
  numTotalCorrectCharsSpan.textContent = numTotalCorrectChars;
  numTotalIncorrectCharsSpan.textContent = numTotalIncorrectChars;
  numTotalUntouchedCharsSpan.textContent = [...lines.join('')].length - numTotalCorrectChars - numTotalIncorrectChars;
  accuracySpan.textContent = numTotalCorrectChars
    ? ((100 * numTotalCorrectChars) / (numTotalCorrectChars + numTotalIncorrectChars)).toFixed()
    : 0;

  // put sentence current to sentence already then line break
  sentencesAlreadyElem.innerHTML += sentenceCurrentElem.innerHTML;
  const lineChange = document.createElement('br');
  sentencesAlreadyElem.appendChild(lineChange);

  // increment indexCurrentLine then prepareSentencesHintsResults
  indexCurrentLine += 1;
  prepareSentencesHintsResults(indexCurrentLine);

  // clear input
  typingInputElem.value = '';
}

function finalise() {
  // parse wrong Chars Current to wrong Chars Already
  wrongCharsAlreadyElem.innerHTML += wrongCharsCurrentElem.innerHTML;
  const arrayCurrentCharSpan = sentenceCurrentElem.querySelectorAll('span');

  // loop through every characterSpan in current sentence
  arrayCurrentCharSpan.forEach((characterSpan, index) => {
    const character = characterSpan.textContent;

    // correct: increment num Already Correct Chars
    if (characterSpan.className == 'correct') {
      numAlreadyCorrectChars += 1;
    }

    // incorrect: increment num Already Incorrect Chars, add link if in database
    if (characterSpan.className == 'incorrect') {
      numAlreadyIncorrectChars += 1;
      if (checkIfInDatabase(character)) {
        const linkElem = document.createElement('a');
        linkElem.textContent = character;
        linkElem.className = "wrong-character-anchor";
        linkElem.href = '#line_' + String(indexCurrentLine + 1) + '_pos_' + String(index + 1);
        wrongCharsAlreadyLinkElem.appendChild(linkElem);
        const aSpace = document.createTextNode(' ');
        wrongCharsAlreadyLinkElem.appendChild(aSpace);
      }
    }

    // untouched: increment num Already Incorrect Chars, create block & link (if in database), becomes incorrect
    if (characterSpan.className == 'untouched') {
      numAlreadyIncorrectChars += 1;
      if (checkIfInDatabase(character)) {
        addWrongCharAlready(character, index + 1);
        const linkElem = document.createElement('a');
        linkElem.textContent = character;
        linkElem.className = "wrong-character-anchor";
        linkElem.href = '#line_' + String(indexCurrentLine + 1) + '_pos_' + String(index + 1);
        wrongCharsAlreadyLinkElem.appendChild(linkElem);
        const aSpace = document.createTextNode(' ');
        wrongCharsAlreadyLinkElem.appendChild(aSpace);
      }
      characterSpan.classList.add('incorrect');
      characterSpan.classList.remove('untouched');
    }
  })

  // change results
  const numTotalCorrectChars = numCurrentCorrectChars + numAlreadyCorrectChars;
  const numTotalIncorrectChars = numCurrentIncorrectChars + numAlreadyIncorrectChars;
  numTotalCorrectCharsSpan.textContent = numTotalCorrectChars;
  numTotalIncorrectCharsSpan.textContent = numTotalIncorrectChars;
  numTotalUntouchedCharsSpan.textContent = [...lines.join('')].length - numTotalCorrectChars - numTotalIncorrectChars;
  accuracySpan.textContent = numTotalCorrectChars
    ? ((100 * numTotalCorrectChars) / (numTotalCorrectChars + numTotalIncorrectChars)).toFixed()
    : 0;
  if (isTimerActive && durationSecond >= 2) {
    cpmCorrectSpan.textContent = ((60 * numTotalCorrectChars) / durationSecond).toFixed();
    cpmTypedSpan.textContent = ((60 * (numTotalCorrectChars + numTotalIncorrectChars) / durationSecond)).toFixed();
  }

  // put sentence current to sentence already then line break
  sentencesAlreadyElem.innerHTML += sentenceCurrentElem.innerHTML;
  const lineChange = document.createElement('br');
  sentencesAlreadyElem.appendChild(lineChange);

  // clear current sentence
  sentenceCurrentElem.innerHTML = '';

  // clear wrong Chars current
  wrongCharsCurrentElem.innerHTML = '';

  // clear hints
  hintCurrentElem.innerHTML = '';

  // clear input
  typingInputElem.value = '';

  // prompt in sentence Current & Next
  const promptLocal = {
    congratsSingle: {
      tw: `恭喜打完以上 1 句！🥳`,
      en: `Congratulations! You've finished typing the line! 🥳`,
      fr: `Félicitations d'avoir fini la saisie de la ligne ! 🥳`,
    },
    congratsPlural: {
      tw: `恭喜打完以上 ${lines.length} 句！🥳`,
      en: `Congratulations! You've finished typing the ${lines.length} lines! 🥳`,
      fr: `Félicitations d'avoir fini la saisie des ${lines.length} lignes ! 🥳`,
    },
    continueTyping: {
      tw: "您可以透過「題目選擇」繼續練習！",
      en: "Go to 'Exercises' to choose your next exercise!",
      fr: "Rendez-vous à « Exercices » pour choisir votre exercice suivant !"
    }
  };
  if (lines.length > 1) {
    sentenceCurrentElem.textContent = promptLocal.congratsPlural[stringLocal];
  } else {
    sentenceCurrentElem.textContent = promptLocal.congratsSingle[stringLocal];
  }
  sentenceNextElem.innerHTML = promptLocal.continueTyping[stringLocal]; // while sentenceNext was and is empty
  // hintCurrentElem.textContent = '打字練習結束啦！';

  // update indexCurrentLine (so that it exceeds the index range)
  indexCurrentLine += 1;

  // desactive timer
  isTimerActive = false;
}

// ---------------
// eng Key Toggle
// ---------------

document.getElementById("cb_eng_key_active").addEventListener("click", engKeyToggle);
function engKeyToggle() {
  letterList = document.getElementsByClassName("keycap-letter");
  if (letterList.length) {
    if (letterList[0].textContent.length === 1) {
      for (let letter of letterList) {
        const letter_content = letter.textContent;
        letter.textContent = letterToArray30Dict[letter_content];
      }
    } else {
      for (let letter of letterList) {
        const letter_content = letter.textContent;
        letter.textContent = array30ToLetterDict[letter_content];
      }
    }
  }
}

// ------------
// fetch data
// ------------

// create the block (resultBlock) #block_id_name from character, add it to some elem #id_name
function createBlock(character, block_id_name, id_name) {
  const elem = document.getElementById(id_name);

  // create resultBlock, put it into elem
  let resultBlock = document.createElement('div');
  resultBlock.id = block_id_name;
  resultBlock.className = 'wrong_char_code_block';
  elem.appendChild(resultBlock);

  // add character and comma to resultBlock
  let char = document.createElement('span');
  char.textContent = character + "：";
  char.style = "font-size: 1.2em;"; // bigger font size
  resultBlock.appendChild(char);

  // add content to resultBlock
  createList(character, block_id_name + '_list', block_id_name, false);
}

// create the block (resultBlock) #block_id_name of another style from character, add it to some elem #id_name
function createBlockAnotherStyle(character, block_id_name, id_name) {
  const elem = document.getElementById(id_name);

  // create resultBlock, put it into elem
  let resultBlock = document.createElement('div');
  resultBlock.id = block_id_name;
  resultBlock.className = 'current_char_code_block';
  elem.appendChild(resultBlock);

  // add character to resultBlock
  const spaceLocal = { tw: '空白', en: 'Space', fr: 'Espace' };
  let char = document.createElement('div');
  char.textContent = (character == ' ')
    ? spaceLocal[stringLocal]
    : character;
  char.style = "font-size: 2em; text-align: center;"; // bigger font size
  resultBlock.appendChild(char);

  // add content to resultBlock
  if (checkIfInDatabase(character)) {
    createList(character, block_id_name + '_list', block_id_name, true);
  }
}

// create the list (resultList) #list_id_name from character, add it to some elem #id_name
function createList(character, list_id_name, id_name, shouldStandardDecompIncluded) {
  const elem = document.getElementById(id_name);

  // create resultList, put it into elem
  let resultList = document.createElement("ul");
  resultList.id = list_id_name;
  resultList.className = 'w3-ul w3-hoverable'; // w3 css
  elem.appendChild(resultList);

  // add items to resultList
  if (shouldStandardDecompIncluded && objectDecomposition.hasOwnProperty(character)) {
    const decomp = (typeof objectDecomposition[character] === 'string')
      ? objectDecomposition[character]
      : objectDecomposition[character][0];
    let itemStandardDecomp = document.createElement('li');
    itemStandardDecomp.className = 'current-hint-standard-decomposition';
    if (!document.getElementById('cb_decomp_in_hint_current').checked) {
      itemStandardDecomp.style.display = 'none';
    }
    itemStandardDecomp.id = list_id_name + '_item_standard_decomposition';
    itemStandardDecomp.innerHTML = '<span class="keycap title-decomposition">拆</span>：';
    resultList.appendChild(itemStandardDecomp);
    createDecomposition(decomp, itemStandardDecomp.id);
  }
  if (objectNormal.hasOwnProperty(character)) {
    const nlArray = objectNormal[character];
    for (let i = 0; i < nlArray.length; i++) {
      // create itemNL, add it into resultList
      let itemNL = document.createElement('li');
      itemNL.id = list_id_name + '_item_NL_' + String(i + 1);
      resultList.appendChild(itemNL);

      // add content of itemNL
      createLineNL(nlArray[i], itemNL.id);
    }
  }
  if (objectSingle.hasOwnProperty(character)) {
    // create itemSG, add it into resultList
    let itemSG = document.createElement('li');
    itemSG.id = list_id_name + '_item_SG';
    resultList.appendChild(itemSG);

    // add content of itemSG
    createLineSG(objectSingle[character], itemSG.id);
  }
  if (objectSpecial.hasOwnProperty(character)) {
    // create itemSP, add it into resultList
    let itemSP = document.createElement('li');
    itemSP.id = list_id_name + '_item_SP';
    resultList.appendChild(itemSP);

    // add content of itemSP
    createLineSP(objectSpecial[character], itemSP.id);

    // 敦雇 coincidence rank 1
    const coincidenceRankOne = {
      tw: '，重碼位 1',
      en: ', coincidence rank equal to 1',
      fr: ', rang de coïncidence égal à 1'
    };
    if (["敦", "雇"].includes(character)) {
      const ccHint = document.createTextNode(coincidenceRankOne[stringLocal]);
      itemSP.appendChild(ccHint);
    }
  }
  if (objectShortcode1.hasOwnProperty(character)) {
    // create itemSC1, add it into resultList
    let itemSC1 = document.createElement('li');
    itemSC1.id = list_id_name + '_item_SC1';
    resultList.appendChild(itemSC1);

    // add content of itemSC1
    createLineSC1(objectShortcode1[character], itemSC1.id);
  }
  if (objectShortcode2.hasOwnProperty(character)) {
    const sc2Array = objectShortcode2[character];
    for (let i = 0; i < sc2Array.length; i++) {
      // create itemSC2, add it into resultList
      let itemSC2 = document.createElement('li');
      itemSC2.id = list_id_name + '_item_SC2_' + String(i + 1);
      resultList.appendChild(itemSC2);

      // add content of itemSC2
      createLineSC2(sc2Array[i], itemSC2.id);
    }
  }
  if (objectSymbol.hasOwnProperty(character)) {
    // create itemSYM, add it into resultList
    let itemSYM = document.createElement('li');
    itemSYM.id = list_id_name + '_item_SYM';
    resultList.appendChild(itemSYM);

    // add content of itemSYM
    createLineSYM(objectSymbol[character], itemSYM.id);
  }
}

// ----------------------------------------------------------------------
// 6 createLine functions (output depending on engKeyActiveElem.checked)
// ----------------------------------------------------------------------
// create lineSG from encodingSG and add it to some elem #id_name
function createLineSG(encodingSG, id_name) {
  let elem = document.getElementById(id_name);

  // create titleSG and colon, insert them into elem
  const titleSG = document.createElement("span");
  titleSG.className = 'keycap title-single';
  titleSG.textContent = '單';
  const colon = document.createTextNode("：");
  elem.appendChild(titleSG);
  elem.appendChild(colon);

  // create encodingSGKey, insert it into elem
  let encodingSGKey = document.createElement('span');
  encodingSGKey.className = 'keycap keycap-letter';
  if (engKeyActiveElem.checked) {
    encodingSGKey.textContent = encodingSG;
  } else {
    encodingSGKey.textContent = letterToArray30Dict[encodingSG];
  }
  elem.appendChild(encodingSGKey);

  // create plus and spaceKey, insert them into elem
  const plus = document.createTextNode(' + ');
  const spaceKey = document.createElement("span");
  spaceKey.className = 'keycap keycap-space';
  spaceKey.textContent = 'Space';
  elem.appendChild(plus);
  elem.appendChild(spaceKey);
}
// create lineSP from encodingSP and add it to some elem #id_name
function createLineSP(encodingSP, id_name) {
  let elem = document.getElementById(id_name);

  // create titleSP and colon, insert them into elem
  const titleSP = document.createElement("span");
  titleSP.className = 'keycap title-special';
  titleSP.textContent = '特';
  const colon = document.createTextNode("：");
  elem.appendChild(titleSP);
  elem.appendChild(colon);

  // create encodingSPKey1, insert it into elem
  let encodingSPKey1 = document.createElement('span');
  encodingSPKey1.className = 'keycap keycap-letter';
  if (engKeyActiveElem.checked) {
    encodingSPKey1.textContent = encodingSP[0];
  } else {
    encodingSPKey1.textContent = letterToArray30Dict[encodingSP[0]];
  }
  elem.appendChild(encodingSPKey1);

  // create plus1 and encodingSPKey2, insert them into elem
  const plus1 = document.createTextNode(' + ');
  let encodingSPKey2 = document.createElement('span');
  encodingSPKey2.className = 'keycap keycap-letter';
  if (engKeyActiveElem.checked) {
    encodingSPKey2.textContent = encodingSP[1];
  } else {
    encodingSPKey2.textContent = letterToArray30Dict[encodingSP[1]];
  }
  elem.appendChild(plus1);
  elem.appendChild(encodingSPKey2);

  // create plus2 and spaceKey, insert them into elem
  const plus2 = document.createTextNode(' + ');
  const spaceKey = document.createElement("span");
  spaceKey.className = 'keycap keycap-space';
  spaceKey.textContent = 'Space';
  elem.appendChild(plus2);
  elem.appendChild(spaceKey);
}
// create lineSC1 from encodingSC1 and add it to some elem #id_name
function createLineSC1(encodingSC1, id_name) {
  let elem = document.getElementById(id_name);

  // create titleSC1 and colon, insert them into elem
  const titleSC1 = document.createElement("span");
  titleSC1.className = 'keycap title-shortcode1';
  titleSC1.textContent = '一';
  const colon = document.createTextNode("：");
  elem.appendChild(titleSC1);
  elem.appendChild(colon);

  // create encodingSC1Key1, insert it into elem
  let encodingSC1Key1 = document.createElement('span');
  encodingSC1Key1.className = 'keycap keycap-letter';
  if (engKeyActiveElem.checked) {
    encodingSC1Key1.textContent = encodingSC1[0];
  } else {
    encodingSC1Key1.textContent = letterToArray30Dict[encodingSC1[0]];
  }
  elem.appendChild(encodingSC1Key1);

  // create plus and encodingSC1Key2, insert them into elem
  const plus = document.createTextNode(' + ');
  let encodingSC1Key2 = document.createElement('span');
  encodingSC1Key2.className = 'keycap keycap-number';
  encodingSC1Key2.textContent = encodingSC1[1];
  elem.appendChild(plus);
  elem.appendChild(encodingSC1Key2);
}
// create lineSC2 from encodingSC2 and add it to some elem #id_name
function createLineSC2(encodingSC2, id_name) {
  let elem = document.getElementById(id_name);

  // create titleSC2 and colon, insert them into elem
  const titleSC2 = document.createElement("span");
  titleSC2.className = 'keycap title-shortcode2';
  titleSC2.textContent = '二';
  const colon = document.createTextNode("：");
  elem.appendChild(titleSC2);
  elem.appendChild(colon);

  // create encodingSC2Key1, insert it into elem
  let encodingSC2Key1 = document.createElement('span');
  encodingSC2Key1.className = 'keycap keycap-letter';
  if (engKeyActiveElem.checked) {
    encodingSC2Key1.textContent = encodingSC2[0];
  } else {
    encodingSC2Key1.textContent = letterToArray30Dict[encodingSC2[0]];
  }
  elem.appendChild(encodingSC2Key1);

  // create plus1 and encodingSC2Key2, insert them into elem
  const plus1 = document.createTextNode(' + ');
  let encodingSC2Key2 = document.createElement('span');
  encodingSC2Key2.className = 'keycap keycap-letter';
  if (engKeyActiveElem.checked) {
    encodingSC2Key2.textContent = encodingSC2[1];
  } else {
    encodingSC2Key2.textContent = letterToArray30Dict[encodingSC2[1]];
  }
  elem.appendChild(plus1);
  elem.appendChild(encodingSC2Key2);

  // create plus2 and encodingSC2Key3, insert them into elem
  const plus2 = document.createTextNode(' + ');
  let encodingSC2Key3 = document.createElement('span');
  encodingSC2Key3.className = 'keycap keycap-number';
  encodingSC2Key3.textContent = encodingSC2[2];
  elem.appendChild(plus2);
  elem.appendChild(encodingSC2Key3);
}
// create lineSYM from encodingSYM and add it to some elem #id_name
function createLineSYM(encodingSYM, id_name) {
  let elem = document.getElementById(id_name);

  // create titleSYM and colon, insert them into elem
  const titleSYM = document.createElement("span");
  titleSYM.className = 'keycap title-symbol';
  titleSYM.textContent = '符';
  const colon = document.createTextNode("：");
  elem.appendChild(titleSYM);
  elem.appendChild(colon);

  // create keyW and plus1, insert them into elem
  let keyW = document.createElement('span');
  keyW.className = 'keycap keycap-letter';
  if (engKeyActiveElem.checked) {
    keyW.textContent = 'w';
  } else {
    keyW.textContent = letterToArray30Dict['w'];
  }
  const plus1 = document.createTextNode(' + ');
  elem.appendChild(keyW);
  elem.appendChild(plus1);

  // create keyNum, insert it into elem
  let keyNum = document.createElement("span");
  keyNum.className = 'keycap keycap-number';
  keyNum.textContent = encodingSYM[0][1];
  elem.appendChild(keyNum);

  // create several plus and spaceKey, insert them into elem
  const position = encodingSYM[1];
  for (i = 10; i < position; i += 10) {
    const plus = document.createTextNode(' + ');
    const spaceKey = document.createElement("span");
    spaceKey.className = 'keycap keycap-space';
    spaceKey.textContent = 'Space';
    elem.appendChild(plus);
    elem.appendChild(spaceKey);
  }

  // create plusLast and keySelect, insert them into elem
  const plusLast = document.createTextNode(' + ');
  let keySelect = document.createElement("span");
  keySelect.className = 'keycap keycap-cc';
  keySelect.textContent = String(position % 10);
  elem.appendChild(plusLast);
  elem.appendChild(keySelect);
}
// create lineNL from encodingNl and add it to some elem #id_name
function createLineNL(encodingNl, id_name) {
  let elem = document.getElementById(id_name);

  // create titleNL and colon, insert them into elem
  const titleNL = document.createElement("span");
  titleNL.className = 'keycap title-normal';
  titleNL.textContent = '普';
  const colon = document.createTextNode("：");
  elem.appendChild(titleNL);
  elem.appendChild(colon);

  // create encodingNlKey1, insert it into elem
  let encodingNlKey1 = document.createElement('span');
  encodingNlKey1.className = 'keycap keycap-letter';
  if (engKeyActiveElem.checked) {
    encodingNlKey1.textContent = encodingNl[0][0];
  } else {
    encodingNlKey1.textContent = letterToArray30Dict[encodingNl[0][0]];
  }
  elem.appendChild(encodingNlKey1);

  // create several plus & keyNL, insert them into elem
  for (let i = 1; i < encodingNl[0].length; i++) {
    const plus = document.createTextNode(' + ');
    let keyNL = document.createElement('span');
    keyNL.className = 'keycap keycap-letter';
    if (engKeyActiveElem.checked) {
      keyNL.textContent = encodingNl[0][i];
    } else {
      keyNL.textContent = letterToArray30Dict[encodingNl[0][i]];
    }
    elem.appendChild(plus);
    elem.appendChild(keyNL);
  }

  // create plusLast and spaceKey, insert them into elem
  const plusLast = document.createTextNode(' + ');
  const spaceKey = document.createElement("span");
  spaceKey.className = 'keycap keycap-space';
  spaceKey.textContent = 'Space';
  elem.appendChild(plusLast);
  elem.appendChild(spaceKey);

  if (encodingNl[1] > 1 && encodingNl[1] <= 10) {
    const plusCC = document.createTextNode(' + ');
    const numberCC = document.createElement("span");
    numberCC.className = 'keycap keycap-cc';
    if (encodingNl[1] === 10) {
      numberCC.textContent = '0';
    } else {
      numberCC.textContent = encodingNl[1];
    }
    elem.appendChild(plusCC);
    elem.appendChild(numberCC);
  } else if (encodingNl[1] > 10) {
    const plusCC1 = document.createTextNode(' + ');
    const spaceCC = document.createElement("span");
    spaceCC.className = 'keycap keycap-cc';
    spaceCC.textContent = 'Space';
    const plusCC2 = document.createTextNode(' + ');
    const numberCC = document.createElement("span");
    numberCC.className = 'keycap keycap-cc';
    numberCC.textContent = encodingNl[1] - 10;
    elem.appendChild(plusCC1);
    elem.appendChild(spaceCC);
    elem.appendChild(plusCC2);
    elem.appendChild(numberCC);
  }
  if (encodingNl[1] === 1) {
    // hint for coincident codes
    const hintCC = {
      coincidenceRankOne: {
        tw: '，重碼位 1',
        en: ', coincidence rank equal to 1',
        fr: ', rang de coïncidence égal à 1'
      },
      coincidenceRankOneIfExtB: {
        tw: '，若啟用擴充區 B 則重碼位 1，否則無重碼',
        en: ', coincidence rank equal to 1 if Extension B (CJK Unified Ideographs) activated, otherwise non-coincident code',
        fr: ', rang de coïncidence égal à 1 si Supplément B (Sinogrammes unifiés CJC) activée, sinon code non coïncident'
      },
      coincidenceRankOneIfExtCD: {
        tw: '，若啟用擴充區 CD 則重碼位 1，否則無重碼',
        en: ', coincidence rank equal to 1 if Extension CD (CJK Unified Ideographs) activated, otherwise non-coincident code',
        fr: ', rang de coïncidence égal à 1 si Suppléments CD (Sinogrammes unifiés CJC) activée, sinon code non coïncident'
      },
    };

    // get coincidence code data
    ccData = objectEncoding[encodingNl[0]];
    if (ccData[0] > 1) {
      // cc pos = 1
      const ccHint = document.createTextNode(hintCC.coincidenceRankOne[stringLocal]);
      elem.appendChild(ccHint);
    }
    if (ccData[0] === 1) {
      if (ccData[1] > 0) {
        const ccHint = document.createTextNode(hintCC.coincidenceRankOneIfExtB[stringLocal]);
        elem.appendChild(ccHint);
      } else if (ccData[2] > 0) {
        const ccHint = document.createTextNode(hintCC.coincidenceRankOneIfExtCD[stringLocal]);
        elem.appendChild(ccHint);
      }
    }
    if (ccData[0] === 0) {
      if (ccData[1] > 1) {
        // cc pos = 1
        const ccHint = document.createTextNode(hintCC.coincidenceRankOne[stringLocal]);
        elem.appendChild(ccHint);
      }
      if (ccData[1] === 1) {
        if (ccData[2] > 0) {
          const ccHint = document.createTextNode(hintCC.coincidenceRankOneIfExtCD[stringLocal]);
          elem.appendChild(ccHint);
        }
      }
      if (ccData[1] === 0) {
        if (ccData[2] > 1) {
          // cc pos = 1
          const ccHint = document.createTextNode(hintCC.coincidenceRankOne[stringLocal]);
          elem.appendChild(ccHint);
        }
      }
    }
  }
}

// ----------------
// content display
// ----------------

$('#cb_close_hint_current').click(function () {
  $('#hint_current').toggle(!this.checked)
  $('#toggle-standard-decomp').toggle(!this.checked)
})
$('#cb_decomp_in_hint_current').click(function () {
  $('.current-hint-standard-decomposition').toggle(this.checked)
})
$('#cb_close_sentences_already').click(function () {
  $('#sentences_already').toggle(!this.checked)
})
$('#cb_close_wrong_chars_already').click(function () {
  $('#wrong_chars_already_div').toggle(!this.checked)
})
$('#cb_close_wrong_chars_current').click(function () {
  $('#wrong_chars_current').toggle(!this.checked)
})
