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
const btnExerReset = document.getElementById('btn_exer_reset')
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
const hintNextElem = document.getElementById('hint_next');

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

// ---------------
// initialisation
// ---------------
let lines = createArrayLines(defaultString);
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
    timeLengthSpan.textContent = second < 10 ? minute + ':0' + second : minute + ':' + second;
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
      custExerHintElem.textContent = '提醒：您的輸入超過了 3000 字元！';
    } else {
      // create and overwrite lines (arrays)
      lines = createArrayLines(inputString);

      // call prepareExer to prepare the exercise (w.r.t to 'lines')
      prepareExer();
    }
  } else {
    custExerHintElem.textContent = '提醒：您的輸入為空白！';
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
// articles
$("#thousand").click(function () { builtInExerCreator(stringThousand) });
$("#hundred").click(function () { builtInExerCreator(stringHundred) });
$("#赤壁賦").click(function () { builtInExerCreator(string赤壁賦) });
$("#出師表").click(function () { builtInExerCreator(string出師表) });
$("#蘭亭集序").click(function () { builtInExerCreator(string蘭亭集序) });
$("#岳陽樓記").click(function () { builtInExerCreator(string岳陽樓記) });

//lyrics
$("#mojito").click(function () { builtInExerCreator(stringMojito) });
$("#光年之外").click(function () { builtInExerCreator(string光年之外) });
$("#漂向北方").click(function () { builtInExerCreator(string漂向北方) });
$("#那些年").click(function () { builtInExerCreator(string那些年) });
$("#告白氣球").click(function () { builtInExerCreator(string告白氣球) });
$("#小幸運").click(function () { builtInExerCreator(string小幸運) });
$("#不為誰而作的歌").click(function () { builtInExerCreator(string不為誰而作的歌) });

// radical example arcai
$("#arcai_example_col_1").click(function () { builtInExerCreator(stringArcaiExampleCo1) });
$("#arcai_example_col_2").click(function () { builtInExerCreator(stringArcaiExampleCo2) });
$("#arcai_example_col_3").click(function () { builtInExerCreator(stringArcaiExampleCo3) });
$("#arcai_example_col_4").click(function () { builtInExerCreator(stringArcaiExampleCo4) });
$("#arcai_example_col_5").click(function () { builtInExerCreator(stringArcaiExampleCo5) });
$("#arcai_example_col_6").click(function () { builtInExerCreator(stringArcaiExampleCo6) });
$("#arcai_example_col_7").click(function () { builtInExerCreator(stringArcaiExampleCo7) });
$("#arcai_example_col_8").click(function () { builtInExerCreator(stringArcaiExampleCo8) });
$("#arcai_example_col_9").click(function () { builtInExerCreator(stringArcaiExampleCo9) });
$("#arcai_example_col_0").click(function () { builtInExerCreator(stringArcaiExampleCo0) });
$("#arcai_example_col_all").click(function () { builtInExerCreator(stringArcaiExampleCoAll) });
// radicals
$("#radical_1").click(function () { builtInExerCreator(stringRadical1) });
$("#radical_2").click(function () { builtInExerCreator(stringRadical2) });
$("#radical_3").click(function () { builtInExerCreator(stringRadical3) });
$("#radical_4").click(function () { builtInExerCreator(stringRadical4) });
$("#radical_5").click(function () { builtInExerCreator(stringRadical5) });
$("#radical_6").click(function () { builtInExerCreator(stringRadical6) });
$("#radical_7").click(function () { builtInExerCreator(stringRadical7) });
$("#radical_8").click(function () { builtInExerCreator(stringRadical8) });
$("#radical_9").click(function () { builtInExerCreator(stringRadical9) });
$("#radical_10").click(function () { builtInExerCreator(stringRadical10) });
$("#radical_11").click(function () { builtInExerCreator(stringRadical11) });
$("#radical_12").click(function () { builtInExerCreator(stringRadical12) });
$("#radical_13").click(function () { builtInExerCreator(stringRadical13) });
$("#radical_14").click(function () { builtInExerCreator(stringRadical14) });
$("#radical_15").click(function () { builtInExerCreator(stringRadical15) });
$("#radical_16").click(function () { builtInExerCreator(stringRadical16) });
$("#radical_17").click(function () { builtInExerCreator(stringRadical17) });

// common char
$("#common-char-400").click(function () { builtInExerCreator(stringCommonChar400) });
$("#common-char-800").click(function () { builtInExerCreator(stringCommonChar800) });
$("#common-char-1200").click(function () { builtInExerCreator(stringCommonChar1200) });
$("#common-char-1600").click(function () { builtInExerCreator(stringCommonChar1600) });
$("#common-char-2000").click(function () { builtInExerCreator(stringCommonChar2000) });
$("#common-char-2400").click(function () { builtInExerCreator(stringCommonChar2400) });
$("#common-char-2800").click(function () { builtInExerCreator(stringCommonChar2800) });
$("#common-char-3200").click(function () { builtInExerCreator(stringCommonChar3200) });
$("#common-char-3600").click(function () { builtInExerCreator(stringCommonChar3600) });
$("#common-char-4000").click(function () { builtInExerCreator(stringCommonChar4000) });
$("#common-char-4400").click(function () { builtInExerCreator(stringCommonChar4400) });
$("#common-char-4808").click(function () { builtInExerCreator(stringCommonChar4808) });

// uncommon char
$("#uncommon-char-400").click(function () { builtInExerCreator(stringUncommonChar400) });
$("#uncommon-char-800").click(function () { builtInExerCreator(stringUncommonChar800) });
$("#uncommon-char-1200").click(function () { builtInExerCreator(stringUncommonChar1200) });
$("#uncommon-char-1600").click(function () { builtInExerCreator(stringUncommonChar1600) });
$("#uncommon-char-2000").click(function () { builtInExerCreator(stringUncommonChar2000) });
$("#uncommon-char-2400").click(function () { builtInExerCreator(stringUncommonChar2400) });
$("#uncommon-char-2800").click(function () { builtInExerCreator(stringUncommonChar2800) });
$("#uncommon-char-3200").click(function () { builtInExerCreator(stringUncommonChar3200) });
$("#uncommon-char-3600").click(function () { builtInExerCreator(stringUncommonChar3600) });
$("#uncommon-char-4000").click(function () { builtInExerCreator(stringUncommonChar4000) });
$("#uncommon-char-4400").click(function () { builtInExerCreator(stringUncommonChar4400) });
$("#uncommon-char-4800").click(function () { builtInExerCreator(stringUncommonChar4800) });
$("#uncommon-char-5200").click(function () { builtInExerCreator(stringUncommonChar5200) });
$("#uncommon-char-5600").click(function () { builtInExerCreator(stringUncommonChar5600) });
$("#uncommon-char-6000").click(function () { builtInExerCreator(stringUncommonChar6000) });
$("#uncommon-char-6341").click(function () { builtInExerCreator(stringUncommonChar6341) });

// key1
$("#key1_no_cc").click(function () { builtInExerCreator(stringKey1NoCC) });
$("#key1_cc_first").click(function () { builtInExerCreator(stringKey1CCFirst) });
//key2
$("#key2_no_cc").click(function () { builtInExerCreator(stringKey2NoCC) });
$("#key2_cc_first").click(function () { builtInExerCreator(stringKey2CCFirst) });
$("#key2_cc_second").click(function () { builtInExerCreator(stringKey2CCSecond) });
$("#key2_cc_third").click(function () { builtInExerCreator(stringKey2CCThird) });
$("#key2_common_sc2").click(function () { builtInExerCreator(stringKey2CommonSC2) });

//key3
$("#key3_no_cc").click(function () { builtInExerCreator(stringKey3NoCC) });
$("#key3_cc_first").click(function () { builtInExerCreator(stringKey3CCFirst) });
$("#key3_cc_second").click(function () { builtInExerCreator(stringKey3CCSecond) });
$("#key3_common_sc2").click(function () { builtInExerCreator(stringKey3CommonSC2) });

//key4
$("#key4_no_cc").click(function () { builtInExerCreator(stringKey4NoCC) });
$("#key4_cc_first").click(function () { builtInExerCreator(stringKey4CCFirst) });
$("#key4_cc_second").click(function () { builtInExerCreator(stringKey4CCSecond) });
$("#key4_cc_third").click(function () { builtInExerCreator(stringKey4CCThird) });
$("#key4_common_sc2").click(function () { builtInExerCreator(stringKey4CommonSC2) });

// sp
$("#sp_all").click(function () { builtInExerCreator(stringSPAll) });
$("#sp_irregular").click(function () { builtInExerCreator(stringSPIrregular) });
$("#sp_key4_12").click(function () { builtInExerCreator(stringSPKey412) });
$("#sp_key4_13").click(function () { builtInExerCreator(stringSPKey413) });
$("#sp_key4_14").click(function () { builtInExerCreator(stringSPKey414) });
$("#sp_key4_23").click(function () { builtInExerCreator(stringSPKey423) });
$("#sp_key4_24").click(function () { builtInExerCreator(stringSPKey424) });
$("#sp_key4_34").click(function () { builtInExerCreator(stringSPKey434) });
$("#sp_key3_12").click(function () { builtInExerCreator(stringSPKey312) });
$("#sp_key3_13").click(function () { builtInExerCreator(stringSPKey313) });
$("#sp_key3_23").click(function () { builtInExerCreator(stringSPKey323) });
$("#sp_96_normal").click(function () { builtInExerCreator(stringSP96Normal) });
$("#sp_96_reversed").click(function () { builtInExerCreator(stringSP96Reversed) });
$("#sp_sc1").click(function () { builtInExerCreator(stringSC1SP) });
$("#sp_no_sc1").click(function () { builtInExerCreator(stringSPNoSC1) });

// shortcode 1
$("#sc1_all").click(function () { builtInExerCreator(stringSC1All) });
$("#sc1_char").click(function () { builtInExerCreator(stringSC1Char) });
$("#sc1_sym").click(function () { builtInExerCreator(stringSymbolSC1) });
$("#sc1_sp").click(function () { builtInExerCreator(stringSC1SP) });

// symbol
$("#symbol_sc1").click(function () { builtInExerCreator(stringSymbolSC1) });
$("#symbol_bopomofo").click(function () { builtInExerCreator(stringSymbolBopomofo) });
$("#symbol_greek_upper").click(function () { builtInExerCreator(stringSymbolGreekUpper) });
$("#symbol_greek_lower").click(function () { builtInExerCreator(stringSymbolGreekLower) });

// emoji
$("#emoji_happy").click(function () { builtInExerCreator(stringEmojiHappy) });
$("#emoji_angry").click(function () { builtInExerCreator(stringEmojiAngry) });
$("#emoji_guro").click(function () { builtInExerCreator(stringEmojiGuro) });

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
  if (lines[indexCurrentLine + 1]) sentenceNextElem.textContent = lines[indexCurrentLine + 1];

  // overwrite current hint via printHintCurrent
  printHintCurrent(currentLineArray[0]);

  // clear next hint, write next hint via printHintNext if exists
  hintNextElem.innerHTML = '';
  if (currentLineArray[1]) printHintNext(currentLineArray[1]);

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
  accuracySpan.textContent = numTotalCorrectChars ? ((100 * numTotalCorrectChars) / (numTotalCorrectChars + numTotalIncorrectChars)).toFixed() : 0;
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

function printHintNext(character) {
  // clear next hint
  hintNextElem.innerHTML = '';

  /**
   * append block (another style) #hint_next_coding to #hint_next
   * character shown even without encoding
   */
  createBlockAnotherStyle(character, "hint_next_coding", "hint_next");
}

// ---------------------
// instant verification
// ---------------------

typingInputElem.addEventListener('input', instantVerification);
// if timer is not active, activate it and set timeStart
typingInputElem.addEventListener('input', function () {
  if (!isTimerActive) {
    isTimerActive = true;
    timeStart = Date.now();
  }
});

function instantVerification() {
  // only called when indexCurrentLine <= lines.length -1
  if (indexCurrentLine <= lines.length - 1) {
    const arrayCurrentCharsSpan = sentenceCurrentElem.querySelectorAll('span');
    const arrayInput = [...typingInputElem.value];

    // clear current wrong chars, current hint, next hint
    wrongCharsCurrentElem.innerHTML = '';
    hintCurrentElem.innerHTML = '';
    hintNextElem.innerHTML = '';

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

    // print (overwrite) hint for next char (if exists and not empty string)
    if (currentLineArray[indexLastCorrect + 2]) {
      printHintNext(currentLineArray[indexLastCorrect + 2]);
    }

    // change results
    const numTotalCorrectChars = numCurrentCorrectChars + numAlreadyCorrectChars;
    const numTotalIncorrectChars = numCurrentIncorrectChars + numAlreadyIncorrectChars;
    numTotalCorrectCharsSpan.textContent = numTotalCorrectChars;
    numTotalIncorrectCharsSpan.textContent = numTotalIncorrectChars;
    numTotalUntouchedCharsSpan.textContent = [...lines.join('')].length - numTotalCorrectChars - numTotalIncorrectChars;
    accuracySpan.textContent = numTotalCorrectChars ? ((100 * numTotalCorrectChars) / (numTotalCorrectChars + numTotalIncorrectChars)).toFixed() : 0;

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

// append the block of character #(pos CurrentLine, CurrentString) to wrong_chars_current if in objectCharSet
function addWrongCharCurrent(character, pos) {
  if (objectCharSet.hasOwnProperty(character)) {
    createBlock(character, 'line_' + String(indexCurrentLine + 1) + '_pos_' + String(pos), 'wrong_chars_current');
  }
}
// append the block of character #(pos CurrentLine, CurrentString) to wrong_chars_already if in objectCharSet
function addWrongCharAlready(character, pos) {
  if (objectCharSet.hasOwnProperty(character)) { // this line is in fact not necessary
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

    // incorrect: increment num Already Incorrect Chars, add link if in objectCharSet
    if (characterSpan.className == 'incorrect') {
      numAlreadyIncorrectChars += 1;
      if (objectCharSet.hasOwnProperty(character)) {
        const linkElem = document.createElement('a');
        linkElem.textContent = character;
        linkElem.className = "w3-hover-text-green";
        linkElem.style = "text-decoration: none;"
        linkElem.href = '#line_' + String(indexCurrentLine + 1) + '_pos_' + String(index + 1);
        wrongCharsAlreadyLinkElem.appendChild(linkElem);
        const aSpace = document.createTextNode(' ');
        wrongCharsAlreadyLinkElem.appendChild(aSpace);
      }
    }

    // untouched: increment num Already Incorrect Chars, create block & link (if in objectCharSet), becomes incorrect
    if (characterSpan.className == 'untouched') {
      numAlreadyIncorrectChars += 1;
      if (objectCharSet.hasOwnProperty(character)) {
        addWrongCharAlready(character, index + 1);
        const linkElem = document.createElement('a');
        linkElem.textContent = character;
        linkElem.className = "w3-hover-text-green";
        linkElem.style = "text-decoration: none;"
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
  accuracySpan.textContent = numTotalCorrectChars ? ((100 * numTotalCorrectChars) / (numTotalCorrectChars + numTotalIncorrectChars)).toFixed() : 0;

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

    // incorrect: increment num Already Incorrect Chars, add link if in objectCharSet
    if (characterSpan.className == 'incorrect') {
      numAlreadyIncorrectChars += 1;
      if (objectCharSet.hasOwnProperty(character)) {
        const linkElem = document.createElement('a');
        linkElem.textContent = character;
        linkElem.className = "w3-hover-text-green";
        linkElem.style = "text-decoration: none;"
        linkElem.href = '#line_' + String(indexCurrentLine + 1) + '_pos_' + String(index + 1);
        wrongCharsAlreadyLinkElem.appendChild(linkElem);
        const aSpace = document.createTextNode(' ');
        wrongCharsAlreadyLinkElem.appendChild(aSpace);
      }
    }

    // untouched: increment num Already Incorrect Chars, create block & link (if in objectCharSet), becomes incorrect
    if (characterSpan.className == 'untouched') {
      numAlreadyIncorrectChars += 1;
      if (objectCharSet.hasOwnProperty(character)) {
        addWrongCharAlready(character, index + 1);
        const linkElem = document.createElement('a');
        linkElem.textContent = character;
        linkElem.className = "w3-hover-text-green";
        linkElem.style = "text-decoration: none;"
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
  accuracySpan.textContent = numTotalCorrectChars ? ((100 * numTotalCorrectChars) / (numTotalCorrectChars + numTotalIncorrectChars)).toFixed() : 0;
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
  hintNextElem.innerHTML = '';

  // clear input
  typingInputElem.value = '';

  // prompt in sentence Current & Next
  sentenceCurrentElem.textContent = `恭喜打完以上 ${lines.length} 句！ \\^o^/`;
  sentenceNextElem.innerHTML = "您可以透過「題目選擇」繼續練習！ "; // sentenceNext was empty
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
  for (let letter of letterList) {
    const letter_content = letter.textContent;
    if (letter_content.length === 1) {
      letter.textContent = letterToArray30Dict[letter_content];
    } else {
      letter.textContent = array30ToLetterDict[letter_content];
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
  resultBlock.className = 'w3-white w3-round-xlarge w3-padding w3-padding-16 w3-margin-top'; // w3 css
  resultBlock.style.cssText = 'scroll-margin-top: 61px;'; // 45 + 16 (margin top)
  elem.appendChild(resultBlock);

  // add character and comma to resultBlock
  let char = document.createElement('span');
  char.textContent = character + "：";
  char.style = "font-size: 1.2em;"; // bigger font size
  resultBlock.appendChild(char);

  // add content to resultBlock
  createList(character, block_id_name + '_list', block_id_name);
}

// create the block (resultBlock) #block_id_name of another style from character, add it to some elem #id_name
function createBlockAnotherStyle(character, block_id_name, id_name) {
  const elem = document.getElementById(id_name);

  // create resultBlock, put it into elem
  let resultBlock = document.createElement('div');
  resultBlock.id = block_id_name;
  resultBlock.className = 'w3-white w3-round-xlarge w3-padding w3-margin-top'; // w3 css
  elem.appendChild(resultBlock);

  // add character to resultBlock
  let char = document.createElement('div');
  char.textContent = (character == ' ') ? '空白' : character;
  char.style = "font-size: 2em; text-align: center;"; // bigger font size
  resultBlock.appendChild(char);

  // add content to resultBlock
  if (objectCharSet.hasOwnProperty(character)) {
    createList(character, block_id_name + '_list', block_id_name);
  }
}

// create the list (resultList) #list_id_name from character, add it to some elem #id_name
function createList(character, list_id_name, id_name) {
  const elem = document.getElementById(id_name);

  // create resultList, put it into elem
  let resultList = document.createElement("ul");
  resultList.id = list_id_name;
  resultList.className = 'w3-ul w3-hoverable'; // w3 css
  elem.appendChild(resultList);

  // add items to resultList
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
    if (["敦", "雇"].includes(character)) {
      const ccHint = document.createTextNode("，重碼位 1");
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
    // get coincidence code data
    ccData = objectEncoding[encodingNl[0]];
    if (ccData[0] > 1) {
      // cc pos = 1
      const ccHint = document.createTextNode('，重碼位 1');
      elem.appendChild(ccHint);
    }
    if (ccData[0] === 1) {
      if (ccData[1] > 0) {
        const ccHint = document.createTextNode('，若啟用擴充區 B 則重碼位 1，否則無重碼');
        elem.appendChild(ccHint);
      } else if (ccData[2] > 0) {
        const ccHint = document.createTextNode('，若啟用擴充區 CD 則重碼位 1，否則無重碼');
        elem.appendChild(ccHint);
      }
    }
    if (ccData[0] === 0) {
      if (ccData[1] > 1) {
        // cc pos = 1
        const ccHint = document.createTextNode('，重碼位 1');
        elem.appendChild(ccHint);
      }
      if (ccData[1] === 1) {
        if (ccData[2] > 0) {
          const ccHint = document.createTextNode('，若啟用擴充區 CD 則重碼位 1，否則無重碼');
          elem.appendChild(ccHint);
        }
      }
      if (ccData[1] === 0) {
        if (ccData[2] > 1) {
          // cc pos = 1
          const ccHint = document.createTextNode('，重碼位 1');
          elem.appendChild(ccHint);
        }
      }
    }
  }
}

// ----------------
// content display
// ----------------

// toggle between display none and block
function displayToggle(btnElem, id) {
  const x = document.getElementById(id);
  const icon = btnElem.getElementsByTagName("i");
  if (x.classList.contains("w3-show")) {
    x.classList.remove("w3-show");
    x.classList.add('w3-hide');
    icon[0].className = "fa fa-caret-down";
  } else {
    x.classList.add("w3-show");
    x.classList.remove("w3-hide");
    icon[0].className = "fa fa-caret-up";
  }
}

// hide blocks
const cbCloseHintCurrent = document.getElementById('cb_close_hint_current');
const cbCloseHintNext = document.getElementById('cb_close_hint_next');
const cbCloseSentencesAlready = document.getElementById("cb_close_sentences_already");
const cbCloseWrongCharsAlready = document.getElementById("cb_close_wrong_chars_already");
const cbCloseWrongCharsCurrent = document.getElementById("cb_close_wrong_chars_current");

cbCloseHintCurrent.addEventListener('click', function () {
  toggleByCb(this, "hint_current");
})
cbCloseHintNext.addEventListener('click', function () {
  toggleByCb(this, "hint_next");
})
cbCloseSentencesAlready.addEventListener('click', function () {
  toggleByCb(this, "sentences_already");
})
cbCloseWrongCharsAlready.addEventListener('click', function () {
  toggleByCb(this, "wrong_chars_already_div");
})
cbCloseWrongCharsCurrent.addEventListener('click', function () {
  toggleByCb(this, "wrong_chars_current");
})

function toggleByCb(cbElem, id) {
  if (cbElem.checked) {
    $("#" + id).hide();
  } else {
    $("#" + id).show();
  }
}
