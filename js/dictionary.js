/* Structure: (use search)
    - get html DOMS
    - search functionality
    - auto focus
    - filter with checkboxes
    - fetch data
    - eng Key Toggle
    - accordion
*/

// get html DOMS
const resultAreaElem = document.getElementById('result_area');
const inputElem = document.getElementById('inputCharacters');
const btnSubmitElem = document.getElementById('btn_submit');
const btnFilterSubmit = document.getElementById("btn_filter_submit");

const maxInputChar = 500;

// auto focus for the input area
$('#inputCharacters').on('hover, mouseover', function() {
    $('#inputCharacters').focus();
});
$('#btn_submit').on('hover, mouseover', function() {
    $('#inputCharacters').focus();
});

// ---------------------
// search functionality
// ---------------------

// click btn or press enter to trigger 'search'
btnSubmitElem.addEventListener("click", search);
$(window).on('keypress',function(e) {
    if (e.which == 13) search();
});

// clear the result area, and if input is not too long, call printResults
function search() {    
    resultAreaElem.innerHTML="";
    let input = inputElem.value;
    // inputElem.value = '';
    if (input.length === 0) {
        const hintDiv = document.createElement('div');
        hintDiv.className = 'w3-card w3-white w3-padding';
        hintDiv.innerHTML='<p>您沒有輸入任何字呦！<br>您可以試試看查詢「㐃㫈嘂㠩㦰」，或是透過「我想看列表」查看所有同時有特殊碼和一級簡碼的字！</p>';
        resultAreaElem.appendChild(hintDiv);
    } else if (input.length > maxInputChar) {
        const hintDiv = document.createElement('div');
        hintDiv.className = 'w3-card w3-white w3-padding';
        hintDiv.innerHTML="<p>不要輸入超過 " + String(maxInputChar) + " 字啦！</p>";
        resultAreaElem.appendChild(hintDiv);
    } else printResults(input);
}

// create resultCharList, resultBlocks in the result area
function printResults (input) {
    // create resultDescription, put it into the result area
    let resultDescription = document.createElement('div');
    resultDescription.id = 'result_description';
    resultDescription.className = 'w3-card w3-padding w3-white'
    resultAreaElem.appendChild(resultDescription);

    // add the descriptive sentence to resultDescription
    resultDescription.innerHTML = '以下列出 <span id="total_num"></span> 筆資料。<span id="link_hint"></span>';

    // create resultCharList, put it into the resultDescription
    let resultCharList = document.createElement('div');
    resultCharList.id = 'result_char_list';
    resultCharList.className = 'w3-card w3-sand w3-padding w3-margin-bottom';  // w3 css
    resultCharList.style = "font-size: 1.3em"; // bigger font size
    resultDescription.appendChild(resultCharList);
    
    // create resultBlocks, put it into the result area 
    let resultBlocks = document.createElement('div');
    resultBlocks.id = 'result_blocks';
    resultAreaElem.appendChild(resultBlocks);

    // loop over characters in input
    let num = 0; // number of characters in charDict
    for (let character of input) {
        if (charDict.hasOwnProperty(character)){
            // add the block of that character to resultBlocks #result_blocks  
            createBlock(character, charDict[character], 'result_'+ String(num+1), 'result_blocks');
            
            // add characters with link in resultCharList
            const charLink = document.createElement('a');
            charLink.textContent = `${character}`;
            charLink.href = '#result_' + String(num+1);
            const aSpace = document.createTextNode(' ');
            resultCharList.appendChild(charLink);
            resultCharList.appendChild(aSpace);
            num += 1;
        }
    }

    // depending on num, modify the sentence in resultDescription, or remove resultCharList 
    document.getElementById('total_num').textContent = num;
    if (num > 0) {
        document.getElementById('link_hint').innerHTML = "您可以透過下面超連結快速跳到該字：<br><br>";
    }  else resultDescription.removeChild(resultCharList);

    // show engKey if asked
    if (!document.getElementById('cb_eng_key_active').checked) engKeyToggle();
}

//------------------------
// filter with checkboxes
//------------------------

btnFilterSubmit.addEventListener("click", array30Filter);

// clear the result area, add result recap sentence, call printResults
function array30Filter() {
    resultAreaElem.innerHTML="";
    const sg = document.getElementById('checkbox--sg');
    const sp = document.getElementById('checkbox--sp');
    const sc1 = document.getElementById('checkbox--sc1');
    const sc2 = document.getElementById('checkbox--sc2');
    const sym = document.getElementById('checkbox--sym');

    // true if sp, sc1, sym, sg are not selected
    const checkedCouldOnlyBeSC2 = !(sp.checked||sc1.checked||sym.checked||sg.checked);

    let outputArray = [];
    if (checkedCouldOnlyBeSC2) {
        outputArray = [];
    } else {
        if (sg.checked) {
            outputArray = ['一', '十', '方', '竹', '乙', '的', '木', '女', '風'];
            if (sc1.checked) {
                outputArray = ['一', '十', '方', '竹', '乙', '的', '木', '風'];
            }
            if (sp.checked||sc2.checked||sym.checked) outputArray = [];
        } else if (sym.checked) {            
            outputArray = [...symAllArray];
            if (sc1.checked) {
                outputArray = outputArray.filter(value => sc1AllArray.includes(value));
            }
            if (sp.checked||sc2.checked) outputArray = [];
        } else if (sp.checked) {
            outputArray = [...spAllArray];
            if (sc1.checked) {
                outputArray = outputArray.filter(value => sc1AllArray.includes(value));
            }
            if (sc2.checked) {
                outputArray = outputArray.filter(value => sc2AllArray.includes(value));
            }
        } else if (sc1.checked) { 
            outputArray = [...sc1AllArray];
            if (sc2.checked) {
                outputArray = outputArray.filter(value => sc2AllArray.includes(value));
            }
        }
    }

    // print outputArray
    printResults(outputArray.join(""));

    //create filterResultRecap, put it in the beginning of resultDescription
    const filterResultRecapSpan = document.createElement('p');    
    document.getElementById('result_description').prepend(filterResultRecapSpan);

    // add result recap sentence to filterResultRecap    
    if (checkedCouldOnlyBeSC2) {
        if (sc2.checked) {
            filterResultRecapSpan.textContent = '總共有 3037 個有二級簡碼。實在是太多了，所以…';
        } else  filterResultRecapSpan.textContent = '您似乎甚麼都沒選，所以…';
    } else {
        filterResultRecapSpan.textContent = `總共有 ${outputArray.length} 個`;
        if (sym.checked) {
            filterResultRecapSpan.textContent += "符號";
        } else filterResultRecapSpan.textContent += "字";
        if ((!(sp.checked)&&!(sc1.checked)&&!(sc2.checked)&&!(sg.checked)&&sym.checked)){
            filterResultRecapSpan.textContent += '。' ; // only sym is checked
        } else {
            if (~~sp.checked + ~~sc1.checked + ~~sc2.checked + ~~sg.checked > 1) {
                filterResultRecapSpan.textContent += "同時";
            }
            filterResultRecapSpan.textContent += "有";
            if (sg.checked) filterResultRecapSpan.textContent += "單鍵碼、";
            if (sp.checked) filterResultRecapSpan.textContent += "特殊碼、";
            if (sc1.checked) filterResultRecapSpan.textContent += "一級簡碼、";
            if (sc2.checked) filterResultRecapSpan.textContent += "二級簡碼、";
            if (sp.checked||sc1.checked||sc2.checked||sg.checked) {
                let sentence = filterResultRecapSpan.textContent;
                sentence = sentence.replace(/.$/,"。");
                filterResultRecapSpan.textContent = sentence;
            }
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
    keySG.textContent = sgKey;
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
    keySP1.textContent = spKeys[0];
    elem.appendChild(keySP1);

    // create plus1 and keySP2, insert them into elem
    const plus1 = document.createTextNode(' + ');
    let keySP2 = document.createElement('span');
    keySP2.className = 'keycap keycap-letter';
    keySP2.textContent = spKeys[1];
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
function createLineSC1(sc1Keys, id_name){
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
    keySC1Letter.textContent = sc1Keys[0];
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
function createLineSC2 (sc2Keys, id_name) {
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
    keySC2Letter1.textContent = sc2Keys[0];
    elem.appendChild(keySC2Letter1);

    // create plus1 and keySC2Letter2, insert them into elem
    const plus1 = document.createTextNode(' + ');
    let keySC2Letter2 = document.createElement('span');
    keySC2Letter2.className = 'keycap keycap-letter';
    keySC2Letter2.textContent = sc2Keys[1];
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
function createLineSYM (symKeys, id_name) {
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
    keyW.textContent = 'w';
    const plus1 = document.createTextNode(' + ');
    elem.appendChild(keyW);
    elem.appendChild(plus1);

    // create keyNum, insert it into elem
    let keyNum = document.createElement("span");        
    keyNum.className = 'keycap keycap-number';
    keyNum.textContent = symKeys[0][1];        
    elem.appendChild(keyNum);      

    // create several plus and spaceKey, insert them into elem
    const position = symKeys[1]
    for (i = 10; i < position; i+= 10) {
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

// create lineNL from nlKeys and add it to some elem #id_name
function createLineNL (nlKeys, id_name) {
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
    keyNLLetter1.textContent = nlKeys[0];
    elem.appendChild(keyNLLetter1);

    // create several plus & keyNL, insert them into elem
    for (let i = 1; i < nlKeys.length; i++) {
        const plus = document.createTextNode(' + ');
        let keyNL = document.createElement('span');
        keyNL.className = 'keycap keycap-letter';
        keyNL.textContent = nlKeys[i];
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

// accordion
let acc = document.getElementsByClassName("accordion");
for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        let panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        } 
    });
    acc[i].click();
}
