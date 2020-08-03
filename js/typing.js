/* Structure: (use search)
    - get html DOMs, initialisation
    - cust exer, built-in exer
    - prepare page content
    - instant verification
    - enter Key action
    - eng Key Toggle
    - fetch data
    - 6 createLne functions
    - page scroll
    - content display
*/

// get html DOMs Middle
const engKeyActiveElem = document.getElementById('cb_eng_key_active');
const sentenceCurrentElem = document.getElementById('sentence_current');
const sentenceNextElem = document.getElementById('sentence_next');
const typingInputElem = document.getElementById('typing_input');
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
const numRemainingLinesSpan = document.getElementById('num_remaining_lines');

// get html DOMs Left
const hintCurrentElem = document.getElementById('hint_current');
const hintNextElem = document.getElementById('hint_next');

// get html DOMs Left Exercises (except built-in exer buttons)
const numCharElem = document.getElementById('option_num_char');
const permutationElem = document.getElementById('option_permutation');

const inputCustExerElem = document.getElementById("input_cust_exer");
const submitCustExerElem = document.getElementById('btn_submit_cust_exer');
const custExerHintElem = document.getElementById('cust_exer_hint');

// two string functions (utf-16 compatible)
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

// initialisation
let lines = createArrayLines(defaultString);
let indexCurrentLine = 0;
let numCurrentCorrectChars = 0;
let numAlreadyCorrectChars = 0;
let numCurrentIncorrectChars = 0;
let numAlreadyIncorrectChars = 0;

// Case of cust exer
submitCustExerElem.addEventListener('click',custExerCreator);
function custExerCreator() {
    // clear custExer hint
    custExerHintElem.innerHTML = '';
    // get input string (trimmed)
    const inputString = inputCustExerElem.value.trim();
    if (inputString) {
        if ([...inputString].length > 3000) {
            custExerHintElem.textContent='提醒：您的輸入超過了 3000 字元！';
        } else {
            // create lines (arrays), initialise index current line
            lines = createArrayLines(inputString);
            indexCurrentLine = 0;
            numCurrentCorrectChars = 0;
            numAlreadyCorrectChars = 0;
            numCurrentIncorrectChars = 0;
            numAlreadyIncorrectChars = 0;

            // call prepareSentencesHintsResults (overwrite current, next sentence)
            prepareSentencesHintsResults(indexCurrentLine);

            // clear typing input, sentence already
            typingInputElem.value='';
            sentencesAlreadyElem.innerHTML='';

            // clear wrong chars already, wrong chars already link
            wrongCharsAlreadyLinkElem.innerHTML ='';
            wrongCharsAlreadyElem.innerHTML = '';
            
            // focus typing input
            $('#typing_input').focus();
        }
    } else {
        custExerHintElem.textContent='提醒：您的輸入為空白！';
    }

    // clear input cust exer
    inputCustExerElem.value='';
}

// built-in exer
// common char

// key1
const key1NoCCElem = document.getElementById('key1_no_cc');
const key1CCFirstElem = document.getElementById('key1_cc_first');
key1NoCCElem.addEventListener('click',function() {builtInExerCreator(stringKey1NoCC)});
key1CCFirstElem.addEventListener('click',function() {builtInExerCreator(stringKey1CCFirst)});

//key2
const key2NoCCElem = document.getElementById('key2_no_cc');
const key2CCFirstElem = document.getElementById('key2_cc_first');
const key2CCSecondElem = document.getElementById('key2_cc_second');
const key2CCThirdElem = document.getElementById('key2_cc_third');
const key2CommonSC2Elem = document.getElementById('key2_common_sc2');
key2NoCCElem.addEventListener('click',function() {builtInExerCreator(stringKey2NoCC)});
key2CCFirstElem.addEventListener('click',function() {builtInExerCreator(stringKey2CCFirst)});
key2CCSecondElem.addEventListener('click',function() {builtInExerCreator(stringKey2CCSecond)});
key2CCThirdElem.addEventListener('click',function() {builtInExerCreator(stringKey2CCThird)});
key2CommonSC2Elem.addEventListener('click',function() {builtInExerCreator(stringKey2CommonSC2)});

//key3
const key3NoCCElem = document.getElementById('key3_no_cc');
const key3CCFirstElem = document.getElementById('key3_cc_first');
const key3CCSecondElem = document.getElementById('key3_cc_second');
const key3CommonSC2Elem = document.getElementById('key3_common_sc2');
key3NoCCElem.addEventListener('click',function() {builtInExerCreator(stringKey3NoCC)});
key3CCFirstElem.addEventListener('click',function() {builtInExerCreator(stringKey3CCFirst)});
key3CCSecondElem.addEventListener('click',function() {builtInExerCreator(stringKey3CCSecond)});
key3CommonSC2Elem.addEventListener('click',function() {builtInExerCreator(stringKey3CommonSC2)});

//key4
const key4NoCCElem = document.getElementById('key4_no_cc');
const key4CCFirstElem = document.getElementById('key4_cc_first');
const key4CCSecondElem = document.getElementById('key4_cc_second');
const key4CCThirdElem = document.getElementById('key4_cc_third');
const key4CommonSC2Elem = document.getElementById('key4_common_sc2');
key4NoCCElem.addEventListener('click',function() {builtInExerCreator(stringKey4NoCC)});
key4CCFirstElem.addEventListener('click',function() {builtInExerCreator(stringKey4CCFirst)});
key4CCSecondElem.addEventListener('click',function() {builtInExerCreator(stringKey4CCSecond)});
key4CCThirdElem.addEventListener('click',function() {builtInExerCreator(stringKey4CCThird)});
key4CommonSC2Elem.addEventListener('click',function() {builtInExerCreator(stringKey4CommonSC2)});

// sp
const spAllElem = document.getElementById("sp_all");
const spIrregularElem = document.getElementById("sp_irregular");
const spKey412Elem = document.getElementById("sp_key4_12");
const spKey413Elem = document.getElementById("sp_key4_13");
const spKey414Elem = document.getElementById("sp_key4_14");
const spKey423Elem = document.getElementById("sp_key4_23");
const spKey424Elem = document.getElementById("sp_key4_24");
const spKey434Elem = document.getElementById("sp_key4_34");
const spKey312Elem = document.getElementById("sp_key3_12");
const spKey313Elem = document.getElementById("sp_key3_13");
const spKey323Elem = document.getElementById("sp_key3_23");
const sp96NormalElem = document.getElementById("sp_96_normal");
const sp96ReversedElem = document.getElementById("sp_96_reversed");
const spSC1Elem = document.getElementById("sp_sc1");
const spNoSC1Elem = document.getElementById("sp_no_sc1");
spAllElem.addEventListener('click',function() {builtInExerCreator(stringSPAll)});
spIrregularElem.addEventListener('click',function() {builtInExerCreator(stringSPIrregular)});
spKey412Elem.addEventListener('click',function() {builtInExerCreator(stringSPKey412)});
spKey413Elem.addEventListener('click',function() {builtInExerCreator(stringSPKey413)});
spKey414Elem.addEventListener('click',function() {builtInExerCreator(stringSPKey414)});
spKey423Elem.addEventListener('click',function() {builtInExerCreator(stringSPKey423)});
spKey424Elem.addEventListener('click',function() {builtInExerCreator(stringSPKey424)});
spKey434Elem.addEventListener('click',function() {builtInExerCreator(stringSPKey434)});
spKey312Elem.addEventListener('click',function() {builtInExerCreator(stringSPKey312)});
spKey313Elem.addEventListener('click',function() {builtInExerCreator(stringSPKey313)});
spKey323Elem.addEventListener('click',function() {builtInExerCreator(stringSPKey323)});
sp96NormalElem.addEventListener('click',function() {builtInExerCreator(stringSP96Normal)});
sp96ReversedElem.addEventListener('click',function() {builtInExerCreator(stringSP96Reversed)});
spSC1Elem.addEventListener('click',function() {builtInExerCreator(stringSC1SP)});
spNoSC1Elem.addEventListener('click',function() {builtInExerCreator(stringSPNoSC1)});

// shortcode 1
const sc1AllElem = document.getElementById('sc1_all');
const sc1CharElem = document.getElementById('sc1_char');
const sc1SymElem = document.getElementById('sc1_sym');
const sc1SpElem = document.getElementById('sc1_sp');
sc1AllElem.addEventListener('click',function() {builtInExerCreator(stringSC1All)});
sc1CharElem.addEventListener('click',function() {builtInExerCreator(stringSC1Char)});
sc1SymElem.addEventListener('click',function() {builtInExerCreator(stringSymbolSC1)});
sc1SpElem.addEventListener('click',function() {builtInExerCreator(stringSC1SP)});

// symbol
const symbolSC1Elem = document.getElementById("symbol_sc1");
const symbolBopomofoElem = document.getElementById("symbol_bopomofo");
const symbolGreekUpperElem = document.getElementById("symbol_greek_upper");
const symbolGreekLowerElem = document.getElementById("symbol_greek_lower");
symbolSC1Elem.addEventListener('click',function() {builtInExerCreator(stringSymbolSC1)});
symbolBopomofoElem.addEventListener('click',function() {builtInExerCreator(stringSymbolBopomofo)});
symbolGreekUpperElem.addEventListener('click',function() {builtInExerCreator(string)});
symbolGreekUpperElem.addEventListener('click',function() {builtInExerCreator(stringSymbolGreekUpper)});
symbolGreekLowerElem.addEventListener('click',function() {builtInExerCreator(stringSymbolGreekLower)});

// emoji
const emojiHappyElem = document.getElementById("emoji_happy");
const emojiAngryElem = document.getElementById("emoji_angry");
const emojiGuroElem = document.getElementById("emoji_guro");
emojiHappyElem.addEventListener('click',function() {builtInExerCreator(stringEmojiHappy)});
emojiAngryElem.addEventListener('click',function() {builtInExerCreator(stringEmojiAngry)});
emojiGuroElem.addEventListener('click',function() {builtInExerCreator(stringEmojiGuro)});

// articles
const thousandElem = document.getElementById("thousand");
const hundredElem = document.getElementById("hundred");
hundredElem.addEventListener('click',function() {builtInExerCreator(stringHundred)});
thousandElem.addEventListener('click',function() {builtInExerCreator(stringThousand)});

function builtInExerCreator(str) {
    // create lines (arrays), initialise things
    lines = createArrayLines(str);
    indexCurrentLine = 0;
    numCurrentCorrectChars = 0;
    numAlreadyCorrectChars = 0;
    numCurrentIncorrectChars = 0;
    numAlreadyIncorrectChars = 0;

    // clear typing input
    typingInputElem.value='';

    // call prepareSentencesHintsResults (overwrite current, next sentence)
    prepareSentencesHintsResults(indexCurrentLine);

    // clear sentence already
    sentencesAlreadyElem.innerHTML='';

    // clear wrong chars already, wrong chars already link
    wrongCharsAlreadyLinkElem.innerHTML ='';
    wrongCharsAlreadyElem.innerHTML = '';

    // focus typing input
    $('#typing_input').focus();

    // clear input cust exer
    inputCustExerElem.value='';
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

// prepare page content
// execute prepareSentencesHintsResults for the 1st time js with default 'lines'
prepareSentencesHintsResults(indexCurrentLine)

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
    if (lines[indexCurrentLine+1]) sentenceNextElem.textContent = lines[indexCurrentLine+1];

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
    const numTotalCorrectChars = numCurrentCorrectChars+numAlreadyCorrectChars;
    const numTotalIncorrectChars = numCurrentIncorrectChars+numAlreadyIncorrectChars;
    numTotalCharsSpan.textContent = [...lines.join('')].length;
    numTotalCorrectCharsSpan.textContent = numTotalCorrectChars;
    numTotalIncorrectCharsSpan.textContent = numTotalIncorrectChars;
    numTotalUntouchedCharsSpan.textContent = [...lines.join('')].length - numTotalCorrectChars - numTotalIncorrectChars;
    numTotalSentencesSpan.textContent = lines.length;
    posLineSpan.textContent = indexCurrentLine + 1;
    numRemainingLinesSpan.textContent = lines.length-indexCurrentLine - 1;
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

// instant verification
typingInputElem.addEventListener('input', instantVerification);
function instantVerification() {
    // only called when indexCurrentLine <= lines.length -1
    if (indexCurrentLine <= lines.length -1) {
        const arrayCurrentCharsSpan = sentenceCurrentElem.querySelectorAll('span');
        const arrayInput = [...typingInputElem.value];

        // clear current wrong chars, current hint, next hint
        wrongCharsCurrentElem.innerHTML='';
        hintCurrentElem.innerHTML='';
        hintNextElem.innerHTML='';

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
                addWrongCharCurrent(character, index+1);
            }
        })
        
        const currentLineArray = [...lines[indexCurrentLine]];
        // print (overwrite) hint for current char (if exists and not empty string)
        if (currentLineArray[indexLastCorrect+1]) {
            printHintCurrent(currentLineArray[indexLastCorrect+1]);
        }
        
        // print (overwrite) hint for next char (if exists and not empty string)
        if (currentLineArray[indexLastCorrect+2]) {
            printHintNext(currentLineArray[indexLastCorrect+2]);
        }

        // change results
        const numTotalCorrectChars = numCurrentCorrectChars + numAlreadyCorrectChars;
        const numTotalIncorrectChars = numCurrentIncorrectChars + numAlreadyIncorrectChars;
        numTotalCorrectCharsSpan.textContent = numTotalCorrectChars;
        numTotalIncorrectCharsSpan.textContent = numTotalIncorrectChars;
        numTotalUntouchedCharsSpan.textContent = [...lines.join('')].length - numTotalCorrectChars - numTotalIncorrectChars;

        // reset num Current In/correct Chars
        numCurrentCorrectChars = 0;
        numCurrentIncorrectChars = 0;
    }
}

// enter Key action
$("#typing_input").on('keypress', function(e) {
    if (e.which == 13) {
        if (indexCurrentLine < lines.length -1) {
            changeLine();
            instantVerification();
        } else if (indexCurrentLine === lines.length -1) {
            finalise();
        } else {
            typingInputElem.value = '';
            sentenceCurrentElem.innerHTML='';
            sentenceNextElem.innerHTML='';
        }
    }
});

// append the block of character #(pos CurrentLine, CurrentString) to wrong_chars_current if in objectCharSet
function addWrongCharCurrent(character, pos) {
    if (objectCharSet.hasOwnProperty(character)) {
        createBlock(character, 'line_'+String(indexCurrentLine+1)+'_pos_'+String(pos), 'wrong_chars_current');
    }
}
// append the block of character #(pos CurrentLine, CurrentString) to wrong_chars_already if in objectCharSet
function addWrongCharAlready(character, pos) {
    if (objectCharSet.hasOwnProperty(character)) { // this line is in fact not necessary
        createBlock(character, 'line_'+String(indexCurrentLine+1)+'_pos_'+String(pos), 'wrong_chars_already');
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
                linkElem.href = '#line_'+String(indexCurrentLine+1)+'_pos_'+String(index+1);
                wrongCharsAlreadyLinkElem.appendChild(linkElem);
                const aSpace = document.createTextNode(' ');
                wrongCharsAlreadyLinkElem.appendChild(aSpace);
            }
        }

        // untouched: increment num Already Incorrect Chars, create block & link (if in objectCharSet), becomes incorrect
        if (characterSpan.className == 'untouched') {
            numAlreadyIncorrectChars += 1;
            if (objectCharSet.hasOwnProperty(character)) {
                addWrongCharAlready(character, index+1);
                const linkElem = document.createElement('a');
                linkElem.textContent = character;
                linkElem.href = '#line_'+String(indexCurrentLine+1)+'_pos_'+String(index+1);
                wrongCharsAlreadyLinkElem.appendChild(linkElem);
                const aSpace = document.createTextNode(' ');
                wrongCharsAlreadyLinkElem.appendChild(aSpace);
            }
            characterSpan.classList.add('incorrect');
            characterSpan.classList.remove('untouched');
        }
    })

    // change results
    const numTotalCorrectChars = numCurrentCorrectChars+numAlreadyCorrectChars;
    const numTotalIncorrectChars = numCurrentIncorrectChars+numAlreadyIncorrectChars;
    numTotalCorrectCharsSpan.textContent = numTotalCorrectChars;
    numTotalIncorrectCharsSpan.textContent = numTotalIncorrectChars;
    numTotalUntouchedCharsSpan.textContent = [...lines.join('')].length - numTotalCorrectChars-numTotalIncorrectChars;
    
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
                linkElem.href = '#line_'+String(indexCurrentLine+1)+'_pos_'+String(index+1);
                wrongCharsAlreadyLinkElem.appendChild(linkElem);
                const aSpace = document.createTextNode(' ');
                wrongCharsAlreadyLinkElem.appendChild(aSpace);
            }
        }

        // untouched: increment num Already Incorrect Chars, create block & link (if in objectCharSet), becomes incorrect
        if (characterSpan.className == 'untouched') {
            numAlreadyIncorrectChars += 1;
            if (objectCharSet.hasOwnProperty(character)) {
                addWrongCharAlready(character, index+1);
                const linkElem = document.createElement('a');
                linkElem.textContent = character;
                linkElem.href = '#line_'+String(indexCurrentLine+1)+'_pos_'+String(index+1);
                wrongCharsAlreadyLinkElem.appendChild(linkElem);
                const aSpace = document.createTextNode(' ');
                wrongCharsAlreadyLinkElem.appendChild(aSpace);
            }
            characterSpan.classList.add('incorrect');
            characterSpan.classList.remove('untouched');
        }
    })

    // change results
    const numTotalCorrectChars = numCurrentCorrectChars+numAlreadyCorrectChars;
    const numTotalIncorrectChars = numCurrentIncorrectChars+numAlreadyIncorrectChars;
    numTotalCorrectCharsSpan.textContent = numTotalCorrectChars;
    numTotalIncorrectCharsSpan.textContent = numTotalIncorrectChars;
    numTotalUntouchedCharsSpan.textContent = [...lines.join('')].length-numTotalCorrectChars-numTotalIncorrectChars;

    // put sentence current to sentence already then line break
    sentencesAlreadyElem.innerHTML += sentenceCurrentElem.innerHTML;
    const lineChange = document.createElement('br');
    sentencesAlreadyElem.appendChild(lineChange);

    // clear current sentence
    sentenceCurrentElem.innerHTML = '';
    
    // clear wrong Chars current
    wrongCharsCurrentElem.innerHTML='';

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
}

// eng Key Toggle
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
    resultBlock.className = 'w3-card w3-white w3-border-bottom w3-border-dark-gray w3-padding w3-margin-top'; // w3 css
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
    resultBlock.className = 'w3-white w3-padding w3-margin-top'; // w3 css
    elem.appendChild(resultBlock);

    // add character to resultBlock
    let char = document.createElement('div');
    char.textContent = character;
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
    resultList .className = 'w3-ul w3-hoverable'; // w3 css
    elem.appendChild(resultList);

    // add items to resultList
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
        for (let i = 0; i< sc2Array.length; i++) {
            // create itemSC2, add it into resultList
            let itemSC2 = document.createElement('li');
            itemSC2.id = list_id_name + '_item_SC2_' + String(i+1);
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
    if (objectNormal.hasOwnProperty(character)) {
        const nlArray = objectNormal[character];
        for (let i = 0; i< nlArray.length; i++) {
            // create itemNL, add it into resultList
            let itemNL = document.createElement('li');
            itemNL.id = list_id_name + '_item_NL_' + String(i+1);
            resultList.appendChild(itemNL);

            // add content of itemNL
            createLineNL(nlArray[i], itemNL.id);
        }
    }
}

// ----------------------------------------------------------------------
// 6 createLne functions (output depending on engKeyActiveElem.checked)
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
    keySelect.className = 'keycap keycap-number';
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
        numberCC.textContent = encodingNl[1]-10;
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
                const ccHint = document.createTextNode('，若開啟擴充區 B 則重碼位 1，否則無重碼');
                elem.appendChild(ccHint);
            } else if (ccData[2] > 0) {
                const ccHint = document.createTextNode('，若開啟擴充區 CD 則重碼位 1，否則無重碼');
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
                    const ccHint = document.createTextNode('，若開啟擴充區 CD 則重碼位 1，否則無重碼');
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

// page scroll

// scroll to page_content
$(document).ready(function() {
    $(function() { $('#to_page_content').click(function() {
        $('html,body').animate({scrollTop:$('#page_content').offset().top}, 500);});
    });
});
$(document).ready(function() {
    $(function() { $('#to_page_content_small').click(function() {
        $('html,body').animate({scrollTop:$('#page_content').offset().top}, 500);});
    });
});

// content display

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

cbCloseHintCurrent.addEventListener('click', function() {
    toggleByCb(this,"hint_current");
})
cbCloseHintNext.addEventListener('click', function() {
    toggleByCb(this,"hint_next");
})
cbCloseSentencesAlready.addEventListener('click', function() {
    toggleByCb(this,"sentences_already");
})
cbCloseWrongCharsAlready.addEventListener('click', function() {
    toggleByCb(this,"wrong_chars_already_div");
})
cbCloseWrongCharsCurrent.addEventListener('click', function() {
    toggleByCb(this,"wrong_chars_current");
})

function toggleByCb(cbElem, id) {
    if (cbElem.checked) {
        $("#" + id).hide();
    } else {
        $("#" + id).show();
    }
}
