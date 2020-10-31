/* Structure: (use search)
  - get html DOMs
  - auto focus for the input area
  - search functionality
  - prepare result file
  - filter with checkboxes
  - fetch data
  - eng Key Toggle
*/

// --------------
// get html DOMS
// --------------

const resultAreaElem = document.getElementById('result_area');
const inputElem = document.getElementById('inputCharacters');
const btnSubmitElem = document.getElementById('btn_submit');
const btnFilterSubmit = document.getElementById("btn_filter_submit");

const maxInputChar = 500;

// ------------------------------
// auto focus for the input area
// ------------------------------

$('#inputCharacters').on('hover, mouseover', function () {
  $('#inputCharacters').focus();
  $('#inputCharacters').select();
});

// ---------------------
// search functionality
// ---------------------

// click btn or press enter to trigger 'search'
btnSubmitElem.addEventListener("click", search);
$(window).on('keypress', function (e) {
  if (e.which == 13) search();
});

// clear the result area, and if input is not too long, call printResults
function search() {
  let input = inputElem.value;
  if (input.length > 0) {
    resultAreaElem.innerHTML = "";
    if ([...input].length > maxInputChar) {
      const hintDiv = document.createElement('div');
      hintDiv.className = 'dict-block-hint';
      hintDiv.innerHTML = "<span>不要輸入超過 " + String(maxInputChar) + " 字啦！</span>";
      resultAreaElem.appendChild(hintDiv);
    } else printResults(input);
  }
}

// create resultCharList, resultBlocks in the result area
function printResults(input) {
  // create resultDescription, put it into the result area
  let resultDescription = document.createElement('div');
  resultDescription.id = 'result_description';
  resultDescription.className = 'dict-block-result-description';
  resultAreaElem.appendChild(resultDescription);

  // add the descriptive sentence to resultDescription
  resultDescription.innerHTML = '以下列出 <span id="total_num"></span> 筆資料。<span id="link_hint"></span>';

  // create resultCharList, put it into the resultDescription
  let resultCharList = document.createElement('div');
  resultCharList.id = 'result_char_list';
  resultCharList.className = 'dict-block-result-char-list';
  resultDescription.appendChild(resultCharList);

  // create resultBlocks, put it into the result area 
  let resultBlocks = document.createElement('div');
  resultBlocks.id = 'result_blocks';
  resultAreaElem.appendChild(resultBlocks);

  // loop over characters in input
  let num = 0; // number of characters in charDict
  for (let character of input) {
    if (objectCharSet.hasOwnProperty(character)) {
      // add the block of that character to resultBlocks #result_blocks
      createBlock(character, 'result_' + String(num + 1), 'result_blocks');

      // add characters with link in resultCharList
      const charLink = document.createElement('a');
      charLink.textContent = `${character}`;
      charLink.className = "dict-link-char";
      charLink.href = '#result_' + String(num + 1);
      const aSpace = document.createTextNode(' ');
      resultCharList.appendChild(charLink);
      resultCharList.appendChild(aSpace);
      num += 1;
    }
  }

  // show engKey if asked
  if (!document.getElementById('cb_eng_key_active').checked) engKeyToggle();

  // depending on num, modify the sentence in resultDescription, or remove resultCharList
  document.getElementById('total_num').textContent = num;
  if (num > 0) {
    document.getElementById('link_hint').innerHTML = `您可以<a id="result_download_btn">點此下載查詢結果</a>，或者透過下面超連結快速跳到該字：<br><br>`;
    prepareResultFile(num);
  } else resultDescription.removeChild(resultCharList);

  // scroll into view
  resultDescription.scrollIntoView();
}

// --------------------
// prepare result file
// --------------------

// prepare the file containing 'num' results
function prepareResultFile(num) {
  // get DOM
  let downloadBtnElem = document.getElementById('result_download_btn');

  // set some result-independent strings 
  const downloadTime = new Date().toLocaleString('zh-Hant', { hour12: false });
  const isEngKeyActive = document.getElementById('cb_eng_key_active').checked;
  const year = '2020';
  const siteURL = 'https://array30.misterfishup.com/dictionary.html';
  const separationLine = '------------------------------------------\n';
  const fishUp = `
  ███████╗██╗███████╗██╗  ██╗    ██╗   ██╗██████╗ 
  ██╔════╝██║██╔════╝██║  ██║    ██║   ██║██╔══██╗
  █████╗  ██║███████╗███████║    ██║   ██║██████╔╝
  ██╔══╝  ██║╚════██║██╔══██║    ██║   ██║██╔═══╝ 
  ██║     ██║███████║██║  ██║    ╚██████╔╝██║     
  ╚═╝     ╚═╝╚══════╝╚═╝  ╚═╝     ╚═════╝ ╚═╝     

`;

  // create file content
  let fileContent = '感謝使用 FISH UP 行列查碼！\n';
  fileContent += '以下是您在 ' + downloadTime + ' 查詢的結果。\n\n';
  fileContent += '================ 查詢結果 ================\n\n';

  // add result description
  fileContent += '總共有 ' + num + ' 筆資料';
  if (isEngKeyActive) {
    fileContent += '（行列編碼以英文按鍵顯示）'
  }
  fileContent += '：\n\n';

  // display all found characters
  $('#result_char_list a').each(function (index) {
    fileContent += $(this).text();
    // change line for every 20 characters
    if ((index !== num - 1) && (index % 20 == 19)) {
      fileContent += '\n';
    }
  })
  fileContent += '\n\n' + separationLine;

  // add Array code results
  $('#result_blocks').children().each(function () {
    // add character
    fileContent += $(this).find(">:first-child").text() + '\n';
    // add Array codes
    $(this).find('li').each(function () {
      fileContent += ' ' + ' ' + ' ' + ' ' + $(this).text() + '\n';
    })
    // add separation line
    fileContent += separationLine;
  });

  // add website URL
  fileContent += fishUp;
  fileContent += 'Copyright © ' + year + ' FISH UP 行列查碼\n';
  fileContent += siteURL + '\n';

  //finally, bind the attributes 
  downloadBtnElem.download = '行列查碼結果（共 ' + num + ' 筆資料）.txt';
  downloadBtnElem.href = 'data:text/plain,' + encodeURI(fileContent);
  downloadBtnElem.target = "_blank";
}

//------------------------
// filter with checkboxes
//------------------------

btnFilterSubmit.addEventListener("click", array30Filter);

// clear the result area, add result recap sentence, call printResults
function array30Filter() {
  resultAreaElem.innerHTML = "";
  const sg = document.getElementById('checkbox--sg');
  const sp = document.getElementById('checkbox--sp');
  const sc1 = document.getElementById('checkbox--sc1');
  const sc2 = document.getElementById('checkbox--sc2');
  const sym = document.getElementById('checkbox--sym');

  // true if sp, sc1, sym, sg are not selected
  const checkedCouldOnlyBeSC2 = !(sp.checked || sc1.checked || sym.checked || sg.checked);

  let outputArray = [];
  if (checkedCouldOnlyBeSC2) {
    outputArray = [];
  } else {
    if (sg.checked) {
      outputArray = ['一', '十', '方', '竹', '乙', '的', '木', '女', '風'];
      if (sc1.checked) {
        outputArray = ['一', '十', '方', '竹', '乙', '的', '木', '風'];
      }
      if (sp.checked || sc2.checked || sym.checked) outputArray = [];
    } else if (sym.checked) {
      outputArray = [...symAllArray];
      if (sc1.checked) {
        outputArray = outputArray.filter(value => sc1AllArray.includes(value));
      }
      if (sp.checked || sc2.checked) outputArray = [];
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
      filterResultRecapSpan.textContent = '總共有 3037 個字有二級簡碼，實在是太多了，請和其它條件搭配篩選 😉';
    } else filterResultRecapSpan.textContent = '您似乎甚麼都沒選，所以…';
  } else {
    filterResultRecapSpan.textContent = `總共有 ${outputArray.length} 個`;
    if (sym.checked) {
      filterResultRecapSpan.textContent += "符號";
    } else filterResultRecapSpan.textContent += "字";
    if ((!(sp.checked) && !(sc1.checked) && !(sc2.checked) && !(sg.checked) && sym.checked)) {
      filterResultRecapSpan.textContent += '。'; // only sym is checked
    } else {
      if (~~sp.checked + ~~sc1.checked + ~~sc2.checked + ~~sg.checked > 1) {
        filterResultRecapSpan.textContent += "同時";
      }
      filterResultRecapSpan.textContent += "有";
      if (sg.checked) filterResultRecapSpan.textContent += "單鍵碼、";
      if (sp.checked) filterResultRecapSpan.textContent += "特別碼、";
      if (sc1.checked) filterResultRecapSpan.textContent += "一級簡碼、";
      if (sc2.checked) filterResultRecapSpan.textContent += "二級簡碼、";
      if (sp.checked || sc1.checked || sc2.checked || sg.checked) {
        let sentence = filterResultRecapSpan.textContent;
        sentence = sentence.replace(/.$/, "。");
        filterResultRecapSpan.textContent = sentence;
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
  resultBlock.className = 'dict-block-result';
  elem.appendChild(resultBlock);

  // add character and comma to resultBlock
  let char = document.createElement('span');
  char.textContent = character + "：";
  char.style = "font-size: 1.2em;";  // bigger font size
  resultBlock.appendChild(char);

  // add content to resultBlock
  createList(character, block_id_name + '_list', block_id_name);
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
}

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
  encodingSGKey.textContent = encodingSG;
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
  encodingSPKey1.textContent = encodingSP[0];
  elem.appendChild(encodingSPKey1);

  // create plus1 and encodingSPKey2, insert them into elem
  const plus1 = document.createTextNode(' + ');
  let encodingSPKey2 = document.createElement('span');
  encodingSPKey2.className = 'keycap keycap-letter';
  encodingSPKey2.textContent = encodingSP[1];
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
  encodingSC1Key1.textContent = encodingSC1[0];
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
  encodingSC2Key1.textContent = encodingSC2[0];
  elem.appendChild(encodingSC2Key1);

  // create plus1 and encodingSC2Key2, insert them into elem
  const plus1 = document.createTextNode(' + ');
  let encodingSC2Key2 = document.createElement('span');
  encodingSC2Key2.className = 'keycap keycap-letter';
  encodingSC2Key2.textContent = encodingSC2[1];
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
  keyW.textContent = 'w';
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
  encodingNlKey1.textContent = encodingNl[0][0];
  elem.appendChild(encodingNlKey1);

  // create several plus & keyNL, insert them into elem
  for (let i = 1; i < encodingNl[0].length; i++) {
    const plus = document.createTextNode(' + ');
    let keyNL = document.createElement('span');
    keyNL.className = 'keycap keycap-letter';
    keyNL.textContent = encodingNl[0][i];
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

// ---------------
// eng Key Toggle
// ---------------

document.getElementById("cb_eng_key_active").addEventListener("click", engKeyToggle);
document.getElementById("cb_eng_key_active").addEventListener("click", ccTriviaEngKeyToggle);

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
function ccTriviaEngKeyToggle() {
  ccTrivia = document.getElementById("coincident_code_trivia");
  encodingList = ccTrivia.getElementsByClassName("keycap-cc-trivia");
  for (let encoding of encodingList) {
    const encodingString = encoding.textContent;
    // if encoding uses array30 keys
    if (encodingString[0] >= '0' && encodingString[0] <= '9') {
      let newTextContent = '';
      for (var i = 0; i < encodingString.length; i += 2) {
        newTextContent += array30ToLetterDict[encodingString.slice(i, i + 2)];
      }
      encoding.textContent = newTextContent;
    } else { // if encoding uses eng keys
      let newTextContent = '';
      for (char of encodingString) {
        newTextContent += letterToArray30Dict[char];
      }
      encoding.textContent = newTextContent;
    }
  }
}
// perform ccTrivia eng key toggle when loading the page
if (!document.getElementById('cb_eng_key_active').checked) {
  ccTriviaEngKeyToggle();
}
