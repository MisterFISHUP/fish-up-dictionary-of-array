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

// get html DOMs Left Exercises
const numCharElem = document.getElementById('option_num_char');
const inputCustExerElem = document.getElementById("input_cust_exer");
const exerOneElem = document.getElementById('btn_exer_one');
const exerTwoElem = document.getElementById('btn_exer_two');
const submitCustExerElem = document.getElementById('btn_submit_cust_exer');
const custExerHintElem = document.getElementById('cust_exer_hint');

// initialisation
let lines = createArrayLines(defaultString);
let indexCurrentLine = 0;
let numCurrentCorrectChars = 0;
let numAlreadyCorrectChars = 0;
let numCurrentIncorrectChars = 0;
let numAlreadyIncorrectChars = 0;

submitCustExerElem.addEventListener('click',custExerCreator);

function custExerCreator() {
    const inputString = inputCustExerElem.value.trim();
    if (inputString) {
        // create lines (arrays), initialise index current line
        lines = createArrayLines(inputString);
        indexCurrentLine = 0;

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
    else custExerHintElem.textContent='您的輸入為空白';

    // clear input cust exer
    inputCustExerElem.value='';
}

exerOneElem.addEventListener('click',function() {builtInExerCreator(stringOne)});
exerTwoElem.addEventListener('click',function() {builtInExerCreator(stringTwo)});

function builtInExerCreator(str) {
    // create lines (arrays), initialise index current line
    lines = createArrayLines(str);
    indexCurrentLine = 0;

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

    // clear input cust exer
    inputCustExerElem.value='';
}

// create the array 'lines' from a string according to selected numChar 
function createArrayLines (str) {
    const numChar = numCharElem.value;

    // this regex will break each line in input by numChar chars
    const regex = new RegExp(".{1," + numChar + "}", "g");  

    // trim each string in the list, remove it if empty after being trimmed
    return str.match(regex).map(x => x.trim()).filter(Boolean)
}

// execute prepareSentencesHintsResults for the 1st time js with default 'lines'
prepareSentencesHintsResults(indexCurrentLine)

function prepareSentencesHintsResults (indexCurrentLine) {
    // overwrite current, next sentence according to lines, indexCurrentLine
    sentenceCurrentElem.innerHTML = '';
    const currentLine = lines[indexCurrentLine];
    for (char of currentLine) {
        const charSpan = document.createElement('span');
        charSpan.textContent = char;
        sentenceCurrentElem.appendChild(charSpan);
    }    
    sentenceNextElem.innerHTML = '';
    if (lines[indexCurrentLine+1]) sentenceNextElem.textContent = lines[indexCurrentLine+1];

    // overwrite current hint via printHintCurrent
    printHintCurrent(lines[indexCurrentLine][0]);

    // clear next hint, write next hint via printHintNext if exists
    hintNextElem.innerHTML = '';
    if (lines[indexCurrentLine][1]) printHintNext(lines[indexCurrentLine][1]);

    // clear current wrong chars
    wrongCharsCurrentElem.innerHTML = '';

    // instantVerification for the first time
    if (indexCurrentLine==0) instantVerification();

    // show results
    const numTotalCorrectChars = numCurrentCorrectChars+numAlreadyCorrectChars;
    const numTotalIncorrectChars = numCurrentIncorrectChars+numAlreadyIncorrectChars;
    numTotalCharsSpan.textContent = lines.join('').length;
    numTotalCorrectCharsSpan.textContent = numTotalCorrectChars;
    numTotalIncorrectCharsSpan.textContent = numTotalIncorrectChars;
    numTotalUntouchedCharsSpan.textContent = lines.join('').length - numTotalCorrectChars - numTotalIncorrectChars;
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
    if (extADict.hasOwnProperty(character)) {        
        createBlockAnotherStyle(character, extADict[character], "hint_current_coding", "hint_current");
    } else {
        createBlockAnotherStyle(character, {}, "hint_current_coding", "hint_current");
    }     
}

function printHintNext(character) {
    // clear next hint
    hintNextElem.innerHTML = '';

    /**
     * append block (another style) #hint_next_coding to #hint_next 
     * character shown even without encoding
     */
    if (extADict.hasOwnProperty(character)) {        
        createBlockAnotherStyle(character, extADict[character], "hint_next_coding", "hint_next");
    } else {
        createBlockAnotherStyle(character, {}, "hint_next_coding", "hint_next");
    }    
}

typingInputElem.addEventListener('input', instantVerification);

function instantVerification() {
    // only called when indexCurrentLine <= lines.length -1
    if (indexCurrentLine <= lines.length -1) {
        const arrayCurrentCharsSpan = sentenceCurrentElem.querySelectorAll('span');
        const arrayInput = typingInputElem.value.split('');

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
                indexLastCorrect = index
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

        // print (overwrite) hint for current char (if exists and not empty string)
        if (lines[indexCurrentLine][indexLastCorrect+1]) {
            printHintCurrent(lines[indexCurrentLine][indexLastCorrect+1]);
        }
        
        // print (overwrite) hint for next char (if exists and not empty string)
        if (lines[indexCurrentLine][indexLastCorrect+2]) {
            printHintNext(lines[indexCurrentLine][indexLastCorrect+2]);
        }

        // change results     
        const numTotalCorrectChars = numCurrentCorrectChars+numAlreadyCorrectChars;
        const numTotalIncorrectChars = numCurrentIncorrectChars+numAlreadyIncorrectChars; 
        numTotalCorrectCharsSpan.textContent = numTotalCorrectChars;
        numTotalIncorrectCharsSpan.textContent = numTotalIncorrectChars;
        numTotalUntouchedCharsSpan.textContent = lines.join('').length-numTotalCorrectChars-numTotalIncorrectChars;

        // reset num Current In/correct Chars
        numCurrentCorrectChars = 0;
        numCurrentIncorrectChars = 0;        
    }
}

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
})

// append the block of character #(pos CurrentLine, CurrentString) to wrong_chars_current if in extADict
function addWrongCharCurrent(character, pos) {
    if (extADict.hasOwnProperty(character)) {        
        createBlock(character, extADict[character], 'line_'+String(indexCurrentLine+1)+'_pos_'+String(pos), 'wrong_chars_current');    
    }    
}
// append the block of character #(pos CurrentLine, CurrentString) to wrong_chars_already if in extADict
function addWrongCharAlready(character, pos) {
    if (extADict.hasOwnProperty(character)) { // this line is in fact not necessary   
        createBlock(character, extADict[character], 'line_'+String(indexCurrentLine+1)+'_pos_'+String(pos), 'wrong_chars_already');    
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

        // incorrect: increment num Already Incorrect Chars, add link if in extADict 
        if (characterSpan.className == 'incorrect') {
            numAlreadyIncorrectChars += 1;
            if (extADict.hasOwnProperty(character)) {
                const linkElem = document.createElement('a');
                linkElem.textContent = character;
                linkElem.href = '#line_'+String(indexCurrentLine+1)+'_pos_'+String(index+1);
                wrongCharsAlreadyLinkElem.appendChild(linkElem);
                const aSpace = document.createTextNode(' ');
                wrongCharsAlreadyLinkElem.appendChild(aSpace);
            }
        }

        // untouched: increment num Already Incorrect Chars, create block & link (if in extADict), becomes incorrect
        if (characterSpan.className == 'untouched') {
            numAlreadyIncorrectChars += 1;
            if (extADict.hasOwnProperty(character)) {
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
    numTotalUntouchedCharsSpan.textContent = lines.join('').length-numTotalCorrectChars-numTotalIncorrectChars;
    
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

        // incorrect: increment num Already Incorrect Chars, add link if in extADict 
        if (characterSpan.className == 'incorrect') {
            numAlreadyIncorrectChars += 1;
            if (extADict.hasOwnProperty(character)) {
                const linkElem = document.createElement('a');
                linkElem.textContent = character;
                linkElem.href = '#line_'+String(indexCurrentLine+1)+'_pos_'+String(index+1);
                wrongCharsAlreadyLinkElem.appendChild(linkElem);
                const aSpace = document.createTextNode(' ');
                wrongCharsAlreadyLinkElem.appendChild(aSpace);
            }
        }

        // untouched: increment num Already Incorrect Chars, create block & link (if in extADict), becomes incorrect
        if (characterSpan.className == 'untouched') {
            numAlreadyIncorrectChars += 1;
            if (extADict.hasOwnProperty(character)) {
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
    numTotalUntouchedCharsSpan.textContent = lines.join('').length-numTotalCorrectChars-numTotalIncorrectChars;

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
    letterList=document.getElementsByClassName("keycap-letter");  
    for (let letter of letterList) {
        const letter_content = letter.textContent;
        if (letter_content.length === 1) {
            letter.innerText= letterToArray30Dict[letter_content];
        } else {
            letter.innerText= array30ToLetterDict[letter_content];
        }
    }
}

// ------------
// fetch data
// ------------

// create the block (resultBlock) #block_id_name from char and its mappingDict, add it to some elem #id_name
function createBlock(character, mappingDict, block_id_name, id_name) {
    const elem = document.getElementById(id_name);

    // create resultBlock, put it into elem
    let resultBlock = document.createElement('div');
    resultBlock.id = block_id_name;    
    resultBlock.className = 'w3-card w3-white w3-border-bottom w3-border-dark-gray w3-padding w3-margin-top'; // w3 css    
    elem.appendChild(resultBlock);

    // add character and comma to resultBlock
    let char = document.createElement('span');
    char.textContent = character + "：";
    char.style = "font-size: 1.2em;";  // bigger font size
    resultBlock.appendChild(char);

    // add content to resultBlock
    createList (mappingDict, block_id_name + '_list', block_id_name);
}

// create the block (resultBlock) #block_id_name of another style from char and its mappingDict, add it to some elem #id_name
function createBlockAnotherStyle(character, mappingDict, block_id_name, id_name) {    
    const elem = document.getElementById(id_name);

    // create resultBlock, put it into elem
    let resultBlock = document.createElement('div');
    resultBlock.id = block_id_name;    
    resultBlock.className = 'w3-white w3-padding w3-margin-top'; // w3 css    
    elem.appendChild(resultBlock);

    // add character to resultBlock
    let char = document.createElement('div');
    char.textContent = character;
    char.style = "font-size: 2em; text-align: center;";  // bigger font size
    resultBlock.appendChild(char);

    // add content to resultBlock
    createList (mappingDict, block_id_name + '_list', block_id_name);
}

// create the list (resultList) #list_id_name from mappingDict, add it to some elem #id_name
function createList (mappingDict, list_id_name, id_name) {
    const elem = document.getElementById(id_name);

    // create resultList, put it into elem
    let resultList = document.createElement("ul");
    resultList.id = list_id_name;    
    resultList .className = 'w3-ul w3-hoverable';   // w3 css     
    elem.appendChild(resultList);

    // add items to resultList
    if (mappingDict.hasOwnProperty('sg')) {
        // create itemSG, add it into resultList
        let itemSG = document.createElement('li');
        itemSG.id = list_id_name + '_item_SG';
        resultList.appendChild(itemSG);

        // add content of itemSG
        createLineSG(mappingDict.sg, itemSG.id);
    }
    if (mappingDict.hasOwnProperty('sp')) {
        // create itemSP, add it into resultList
        let itemSP = document.createElement('li');
        itemSP.id = list_id_name + '_item_SP';
        resultList.appendChild(itemSP);

        // add content of itemSP
        createLineSP(mappingDict.sp, itemSP.id);
    }
    if (mappingDict.hasOwnProperty('sc1')) {
        // create itemSC1, add it into resultList
        let itemSC1 = document.createElement('li');
        itemSC1.id = list_id_name + '_item_SC1';
        resultList.appendChild(itemSC1);

        // add content of itemSC1
        createLineSC1(mappingDict.sc1, itemSC1.id);
    }
    if (mappingDict.hasOwnProperty('sc2')) {
        const sc2Dict = mappingDict.sc2;
        for (let i = 0; i< sc2Dict.length; i++) {
            // create itemSC2, add it into resultList
            let itemSC2 = document.createElement('li');
            itemSC2.id = list_id_name + '_item_SC2_' + String(i+1);
            resultList.appendChild(itemSC2);

            // add content of itemSC2
            createLineSC2(sc2Dict[i], itemSC2.id);
        } 
    }
    if (mappingDict.hasOwnProperty('sym')) {
        // create itemSYM, add it into resultList
        let itemSYM = document.createElement('li');
        itemSYM.id = list_id_name + '_item_SYM';
        resultList.appendChild(itemSYM);

        // add content of itemSYM
        createLineSYM(mappingDict.sym, itemSYM.id);
    }
    if (mappingDict.hasOwnProperty('nl')) {
        const nlDict = mappingDict.nl;
        for (let i = 0; i< nlDict.length; i++) {
            // create itemNL, add it into resultList
            let itemNL = document.createElement('li');
            itemNL.id = list_id_name + '_item_NL_' + String(i+1);
            resultList.appendChild(itemNL);

            // add content of itemNL
            createLineNL(nlDict[i], itemNL.id);
        } 
    }
}

// ----------------------------------------------------------------------
// 6 createLne functions (output depending on engKeyActiveElem.checked)
// ----------------------------------------------------------------------

// create lineSG from sgKey and add it to some elem #id_name
function createLineSG(sgKey, id_name) {
    let elem = document.getElementById(id_name);

    // create titleSG and colon, insert them into elem
    const titleSG = document.createElement("span");
    titleSG.className = 'keycap title-single';        
    titleSG.textContent = '單';
    const colon = document.createTextNode("：");
    elem.appendChild(titleSG);
    elem.appendChild(colon);

    // create keySG, insert it into elem
    let keySG = document.createElement('span');
    keySG.className = 'keycap keycap-letter';
    if (engKeyActiveElem.checked) {
        keySG.textContent = sgKey;
    } else {
        keySG.textContent = letterToArray30Dict[sgKey];
    }
    elem.appendChild(keySG);

    // create plus and spaceKey, insert them into elem
    const plus = document.createTextNode(' + ');
    const spaceKey = document.createElement("span");
    spaceKey.className = 'keycap keycap-space';
    spaceKey.textContent = 'Space';
    elem.appendChild(plus);
    elem.appendChild(spaceKey);    
}

// create lineSP from spKeys and add it to some elem #id_name
function createLineSP (spKeys, id_name) {    
    let elem = document.getElementById(id_name);

    // create titleSP and colon, insert them into elem
    const titleSP = document.createElement("span");
    titleSP.className = 'keycap title-special';        
    titleSP.textContent = '特';
    const colon = document.createTextNode("：");
    elem.appendChild(titleSP);
    elem.appendChild(colon);

    // create keySP1, insert it into elem
    let keySP1 = document.createElement('span');
    keySP1.className = 'keycap keycap-letter';
    if (engKeyActiveElem.checked) {
        keySP1.textContent = spKeys[0];
    } else {
        keySP1.textContent = letterToArray30Dict[spKeys[0]];
    }
    elem.appendChild(keySP1);

    // create plus1 and keySP2, insert them into elem
    const plus1 = document.createTextNode(' + ');
    let keySP2 = document.createElement('span');
    keySP2.className = 'keycap keycap-letter';
    if (engKeyActiveElem.checked) {
        keySP2.textContent = spKeys[1];
    } else {
        keySP2.textContent = letterToArray30Dict[spKeys[1]];
    }    
    elem.appendChild(plus1);
    elem.appendChild(keySP2);

    // create plus2 and spaceKey, insert them into elem
    const plus2 = document.createTextNode(' + ');
    const spaceKey = document.createElement("span");
    spaceKey.className = 'keycap keycap-space';
    spaceKey.textContent = 'Space';
    elem.appendChild(plus2);
    elem.appendChild(spaceKey);
}

// create lineSC1 from sc1Keys and add it to some elem #id_name
function createLineSC1(sc1Keys, id_name) {
    let elem = document.getElementById(id_name);

    // create titleSC1 and colon, insert them into elem
    const titleSC1 = document.createElement("span");
    titleSC1.className = 'keycap title-shortcode1';        
    titleSC1.textContent = '一';
    const colon = document.createTextNode("：");
    elem.appendChild(titleSC1);
    elem.appendChild(colon);

    // create keySC1Letter, insert it into elem
    let keySC1Letter = document.createElement('span');
    keySC1Letter.className = 'keycap keycap-letter';
    if (engKeyActiveElem.checked) {
        keySC1Letter.textContent = sc1Keys[0];
    } else {
        keySC1Letter.textContent = letterToArray30Dict[sc1Keys[0]];
    }
    elem.appendChild(keySC1Letter);

    // create plus and keySC1Number, insert them into elem
    const plus = document.createTextNode(' + ');
    let keySC1Number = document.createElement('span');
    keySC1Number.className = 'keycap keycap-number';
    keySC1Number.textContent = sc1Keys[1];
    elem.appendChild(plus);
    elem.appendChild(keySC1Number);
}

// create lineSC2 from sc2Keys and add it to some elem #id_name
function createLineSC2(sc2Keys, id_name) {
    let elem = document.getElementById(id_name);

    // create titleSC2 and colon, insert them into elem
    const titleSC2 = document.createElement("span");
    titleSC2.className = 'keycap title-shortcode2';        
    titleSC2.textContent = '二';
    const colon = document.createTextNode("：");
    elem.appendChild(titleSC2);
    elem.appendChild(colon);

    // create keySC2Letter1, insert it into elem
    let keySC2Letter1 = document.createElement('span');
    keySC2Letter1.className = 'keycap keycap-letter';
    if (engKeyActiveElem.checked) {
        keySC2Letter1.textContent = sc2Keys[0];
    } else {
        keySC2Letter1.textContent = letterToArray30Dict[sc2Keys[0]];
    }
    elem.appendChild(keySC2Letter1);

    // create plus1 and keySC2Letter2, insert them into elem
    const plus1 = document.createTextNode(' + ');
    let keySC2Letter2 = document.createElement('span');
    keySC2Letter2.className = 'keycap keycap-letter';
    if (engKeyActiveElem.checked) {
        keySC2Letter2.textContent = sc2Keys[1];
    } else {
        keySC2Letter2.textContent = letterToArray30Dict[sc2Keys[1]];
    }
    elem.appendChild(plus1);
    elem.appendChild(keySC2Letter2);

    // create plus2 and keySC2Number, insert them into elem  
    const plus2 = document.createTextNode(' + ');
    let keySC2Number = document.createElement('span');
    keySC2Number.className = 'keycap keycap-number';
    keySC2Number.textContent = sc2Keys[2];
    elem.appendChild(plus2);
    elem.appendChild(keySC2Number);
}

// create lineSYM from symKeys and add it to some elem #id_name
function createLineSYM(symKeys, id_name) {
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
    keyNum.textContent = symKeys[0][1];        
    elem.appendChild(keyNum);

    // create several plus and spaceKey, insert them into elem
    const position = symKeys[1];
    for (let i = 10; i < position; i += 10) {
        const plus = document.createTextNode(' + ');
        const spaceKey = document.createElement("span");
        spaceKey.className = 'keycap keycap-space';
        spaceKey.textContent = 'Space';
        elem.appendChild(plus);
        elem.appendChild(spaceKey) 
    }

    // create plusLast and keySelect, insert them into elem
    const plusLast = document.createTextNode(' + ');
    let keySelect = document.createElement("span");
    keySelect.className = 'keycap keycap-number';
    keySelect.textContent = String(position % 10);
    elem.appendChild(plusLast);
    elem.appendChild(keySelect);
}

// create lineNL from nlKeys and add it to some elem #id_name
function createLineNL(nlKeys, id_name) {
    let elem = document.getElementById(id_name);

    // create titleNL and colon, insert them into elem
    const titleNL = document.createElement("span");
    titleNL.className = 'keycap title-normal';        
    titleNL.textContent = '普';
    const colon = document.createTextNode("：");
    elem.appendChild(titleNL);
    elem.appendChild(colon);

    // create keyNLLetter1, insert it into elem
    let keyNLLetter1 = document.createElement('span');
    keyNLLetter1.className = 'keycap keycap-letter';
    if (engKeyActiveElem.checked) {
        keyNLLetter1.textContent = nlKeys[0]
    } else {
        keyNLLetter1.textContent = letterToArray30Dict[nlKeys[0]];
    }
    elem.appendChild(keyNLLetter1);

    // create several plus & keyNL, insert them into elem
    for (let i = 1; i < nlKeys.length; i++) {
        const plus = document.createTextNode(' + ');
        let keyNL = document.createElement('span');
        keyNL.className = 'keycap keycap-letter';
        if (engKeyActiveElem.checked) {
            keyNL.textContent = nlKeys[i]
        } else {
            keyNL.textContent = letterToArray30Dict[nlKeys[i]];
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

    // create warning, insert it into elelm
    const warning = document.createTextNode(' （可能需再選字） ');
    elem.appendChild(warning);              
}

// back to top button
$(function(){
	$('#to_top').click(function(){ 
		$('html,body').animate({ scrollTop:0 }, 333);
	});
	$(window).scroll(function() {
		if ( $(this).scrollTop() > 300 ){
			$('#to_top').fadeIn(222);
		} else {
			$('#to_top').stop().fadeOut(222);
		}
	}).scroll();
});

