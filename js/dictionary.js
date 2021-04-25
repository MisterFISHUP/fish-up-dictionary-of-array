/**
 * Author: FISH UP
 * https://array30.misterfishup.com/
 * Copyright © 2020-2021 FISH UP Dictionary of Array
 * Date: 2021-04-25
 */

const resultAreaElem = document.getElementById('result_area');
const recentCharElem = document.getElementById('recent_char');
const inputElem = document.getElementById('inputCharacters');

// =======
//  UTILS 
// =======

function removeDuplicateItem(list) {
  let x = [];
  for (let i = 0; i < list.length; i++) {
    if (!x.includes(list[i])) x.push(list[i]);
  }
  return x;
}

// =================
//  FIXED CONSTANTS
// =================

const maxInputChar = 500;
const maxLoad = 100;
const maxRecentChar = 20;
const localStgSufx = '1f77t'; // should be equal to the one used in typing.js
const recentCharLocalStgKey = 'dictRecentChar' + localStgSufx;
const settings = {
  useEngKey: {
    type: 'checkbox',
    localStgKey: 'useEngKey' + localStgSufx,
    elemId: 'useEngKey',
  },
}

// ================
//  INITIALISATION
// ================

// if type is checkbox, the state should be a boolean
settings.useEngKey.state = false;

// ================
//  DISPLAY PROMPT
// ================

// situation = 'inputTooManyCh' | ''
function displayPrompt(situation) {
  const emoticonA = ['(͡° ͜ʖ ͡°)', '( ͡• ͜ʖ ͡•)', '(͠≖ ͜ʖ͠≖)👌', '( ´_ゝ`)', 'ヽ(´ー｀)┌', '(´･ω･`)', '(ㆆ_ㆆ)'];
  const emoticonB = ['(´_ゝ`)', '´•_ゝ•`', '( ´•̥̥̥ω•̥̥̥` )', '(|||ﾟдﾟ)', '( ˘･з･)', '( ˘•ω•˘ )', '_(:3」∠)_'];

  switch (situation) {
    case 'inputTooManyCh': {
      const i18nTooMany = {
        tw: `不要輸入超過 ${maxInputChar} 字喔 `,
        en: `Don't type more than ${maxInputChar} characters `,
        fr: `Ne saisissez pas plus de ${maxInputChar} caractères `,
      };
      const hintDiv = document.createElement('div');
      hintDiv.className = 'dict-block-result-description';
      hintDiv.innerHTML = i18nTooMany[stringLocal] + emoticonA[Math.floor(Math.random() * emoticonA.length)];
      resultAreaElem.appendChild(hintDiv);
      hintDiv.scrollIntoView();
      break;
    }
    case 'nothingToShow': {
      const hereNone = { tw: `沒有資料可以呈現 `, en: `Nothing to show `, fr: `Rien à afficher ` };
      $('#result_description').html(hereNone[stringLocal] + emoticonB[Math.floor(Math.random() * emoticonB.length)]);
      break;
    }
  }
}

// =================
//  RECENT SEARCHES
// =================

// update recent char (no duplicate char, at most maxRecentChar) in local storage and on the page
// char in newCharList are supposed to be in db
function updateRecentChr(newCharList) {
  const stg = localStorage.getItem(recentCharLocalStgKey);
  const oldList = stg ? [...stg].filter(ifInDb) : [];
  const finalList = removeDuplicateItem([...newCharList, ...oldList]).slice(0, maxRecentChar);
  if (finalList.length) {
    // store in local storage in the form of string
    localStorage.setItem(recentCharLocalStgKey, finalList.join(''));

    // show on the page (clear btn + description + recent char)
    const i18nRecentSearches = {
      description: { tw: '近期搜尋：', en: 'Recent searches: ', fr: 'Recherches récentes : ' },
      clearTitle: { tw: '清空近期搜尋', en: 'Clear recent searches', fr: 'Effacer les recherches récentes' }
    };

    // clear html
    recentCharElem.innerHTML = '';

    // add btn for clearing recent searches
    const btnClear = document.createElement('button');
    btnClear.innerHTML = '<i class="fa fa-trash" aria-hidden="true"></i>';
    btnClear.title = i18nRecentSearches.clearTitle[stringLocal];
    btnClear.classList.add('btn-clear_recent_char');
    btnClear.onclick = clearRecentChar;
    recentCharElem.appendChild(btnClear);

    // add description
    const desc = document.createTextNode(i18nRecentSearches.description[stringLocal]);
    recentCharElem.appendChild(desc);

    // add recent char
    finalList.forEach(x => {
      const btn = document.createElement('button');
      btn.classList.add('btn-recent_char');
      btn.textContent = x;
      const i18nAdd = { tw: `搜尋欄內加上「${x}」`, en: `Add ${x} in the search field`, fr: `Ajouter ${x} dans le champ de recherche` };
      btn.title = i18nAdd[stringLocal];
      btn.onclick = function () { inputElem.value = inputElem.value + x; inputElem.focus(); }
      aSpace = document.createTextNode(' ');
      recentCharElem.appendChild(btn);
      recentCharElem.appendChild(aSpace);
    })
  }
}

function clearRecentChar() {
  localStorage.removeItem(recentCharLocalStgKey);
  recentCharElem.innerHTML = '';
}

// ======================
//  SEARCH FUNCTIONALITY
// ======================

// clear the result area, and if input is not too long, call printResults
function search() {
  const chList = [...inputElem.value];
  if (chList.length > 0) {
    resultAreaElem.innerHTML = "";
    if (chList.length > maxInputChar) {
      displayPrompt('inputTooManyCh');
    } else {
      const list = chList.filter(ifInDb);
      updateRecentChr(list);
      printResults(list);
    }
  }
}

// create resultCharList (and resultBlocks if at least one character to show) in the result area
function printResults(list) {
  const charNumber = list.length;

  // create resultDescription, put it into the result area
  let resultDescription = document.createElement('div');
  resultDescription.id = 'result_description';
  resultDescription.className = 'dict-block-result-description';
  resultAreaElem.appendChild(resultDescription);

  if (!charNumber) {
    displayPrompt('nothingToShow');
  } else {
    const moreThanMaxLoad = {
      tw: `總共 ${charNumber} 筆資料，`,
      en: `There are ${charNumber} results in total. `, // space at the end
      fr: `Il y a ${charNumber} résultats au total. ` // space at the end
    };
    const hereIs = {
      tw: '以下列出 1 筆資料。',
      en: 'Here is 1 result hyperlinked to the Array codes listed below. ', // space at the end
      fr: "Voici 1 résultat qui contient un hyperlien vers les codes Tableau affiché ci-dessous. " // space at the end
    };
    const hereAre = {
      tw: `以下列出<span id='num-already-shown'></span> 筆資料。`,
      en: `Here are<span id='num-already-shown'></span> results hyperlinked to the Array codes listed below. `, // space at the end
      fr: `Voici<span id='num-already-shown'></span> résultats qui contiennent des hyperliens vers les codes Tableau affichés ci-dessous. ` // space at the end
    };
    const downloadTheResult = {
      tw: `您可以<a id="result_download_btn">點此下載查詢結果</a>（.txt 檔），或者透過下面超連結快速跳到該字：`,
      en: `You can also <a id="result_download_btn">click here</a> to download the search result (.txt file).`,
      fr: `Vous pouvez aussi <a id="result_download_btn">cliquer ici</a> pour télécharger le résultat de recherche (fichier .txt).`
    };

    // add the descriptive sentence to resultDescription
    if (charNumber > maxLoad) {
      resultDescription.innerHTML = moreThanMaxLoad[stringLocal] + hereAre[stringLocal];
    } else if (charNumber > 1) {
      resultDescription.innerHTML = hereAre[stringLocal];
    } else {
      resultDescription.innerHTML = hereIs[stringLocal];
    }
    resultDescription.innerHTML += downloadTheResult[stringLocal] + '<br><br>';

    // create resultCharList, put it into resultDescription
    let resultCharList = document.createElement('div');
    resultCharList.id = 'result_char_list';
    resultCharList.className = 'dict-block-result-char-list';
    resultDescription.appendChild(resultCharList);

    // create resultBlocks, put it into the result area 
    let resultBlocks = document.createElement('div');
    resultBlocks.id = 'result_blocks';
    resultAreaElem.appendChild(resultBlocks);

    // add the code block of the character to resultBlocks
    // and the character with link to resultCharList
    function addCharaterBlockAndLink(character, block_id) {
      createArrayBlock(character, block_id, 'result_blocks');
      const charLink = document.createElement('a');
      charLink.textContent = character;
      charLink.className = "dict-link-char";
      charLink.href = '#' + block_id;
      const aSpace = document.createTextNode(' ');
      resultCharList.appendChild(charLink);
      resultCharList.appendChild(aSpace);
    }
    function addResults(listOfCharacters, startNumber) {
      listOfCharacters.forEach(function (character, index) {
        addCharaterBlockAndLink(character, 'result_' + String(startNumber + index));
      })
    }
    function loadMore(startNumber) {
      addResults(list.slice(startNumber - 1, startNumber + maxLoad - 1), startNumber);
      const notYetLoaded = charNumber - startNumber - maxLoad + 1;
      if (notYetLoaded > 0) {
        const theFirst = {
          tw: `前 ${startNumber + maxLoad - 1}`,
          en: ` the first ${startNumber + maxLoad - 1}`,
          fr: ` les ${startNumber + maxLoad - 1} premiers`
        }
        $('#num-already-shown').text(theFirst[stringLocal]);
      } else {
        $('#num-already-shown').text(' ' + charNumber);
      }

      if (notYetLoaded > 0) {
        const loadMoreResults = {
          tw: `再顯示 ${maxLoad} 筆資料`,
          en: `Show ${maxLoad} more results`,
          fr: `Afficher ${maxLoad} autre résultats`
        }
        const loadLastResult = {
          tw: `顯示最後 1 筆資料`,
          en: `Show the last result`,
          fr: `Afficher le dernier résultat`
        }
        const loadLastResults = {
          tw: `顯示最後 ${notYetLoaded} 筆資料`,
          en: `Show the last ${notYetLoaded} results`,
          fr: `Afficher les ${notYetLoaded} derniers résultats`
        }

        // create loadmore link
        const loadMoreLink = document.createElement('a');
        loadMoreLink.className = 'link-load-more';
        resultCharList.appendChild(loadMoreLink);

        //create loadmore button
        const loadMoreButton = document.createElement('button');
        loadMoreButton.className = 'button-load-more';
        resultBlocks.appendChild(loadMoreButton);

        // add content to link/button
        if (notYetLoaded > maxLoad) {
          loadMoreLink.textContent = '...' + loadMoreResults[stringLocal];
          loadMoreButton.textContent = loadMoreResults[stringLocal];
        } else if (notYetLoaded == 1) {
          loadMoreLink.textContent = '...' + loadLastResult[stringLocal];
          loadMoreButton.textContent = loadLastResult[stringLocal];
        } else {
          loadMoreLink.textContent = '...' + loadLastResults[stringLocal];
          loadMoreButton.textContent = loadLastResults[stringLocal];
        }

        // bind load more function to link/button
        loadMoreLink.addEventListener('click', function () {
          loadMoreLink.remove();
          loadMoreButton.remove();
          loadMore(startNumber + maxLoad)
        })
        loadMoreButton.addEventListener('click', function () {
          loadMoreLink.remove();
          loadMoreButton.remove();
          loadMore(startNumber + maxLoad)
        })
      }
    }
    loadMore(1);

    // prepare result file for users to download
    prepareResultFile(list);
  }
  // scroll into view
  resultDescription.scrollIntoView();
}

// =====================
//  PREPARE RESULT FILE
// =====================

// prepare the file for users to download 
function prepareResultFile(list) {
  const num = list.length;
  const useEngKey = settings.useEngKey.state;

  // get DOM
  let downloadBtnElem = document.getElementById('result_download_btn');

  // set some result-independent strings
  const dateLocal = (stringLocal != 'tw') ? stringLocal : 'zh-Hant'
  const researchTime = new Date().toLocaleString(dateLocal, { hour12: false });
  const websiteName = { tw: 'FISH UP 行列查碼', en: 'FISH UP Dictionary of Array', fr: 'Dictionnaire FISH UP de Tableau' };
  const siteURL = 'https://array30.misterfishup.com/'
  const separationLine = '--------------------------------------------\n';
  const signatures = [
    `
  ███████╗██╗███████╗██╗  ██╗    ██╗   ██╗██████╗ 
  ██╔════╝██║██╔════╝██║  ██║    ██║   ██║██╔══██╗
  █████╗  ██║███████╗███████║    ██║   ██║██████╔╝
  ██╔══╝  ██║╚════██║██╔══██║    ██║   ██║██╔═══╝ 
  ██║     ██║███████║██║  ██║    ╚██████╔╝██║     
  ╚═╝     ╚═╝╚══════╝╚═╝  ╚═╝     ╚═════╝ ╚═╝     
`,
    `
  ,------. ,--.  ,---.   ,--.  ,--.     ,--. ,--. ,------.  
  |  .---' |  | '   .-'  |  '--'  |     |  | |  | |  .--. ' 
  |  \`--,  |  | \`.  \`-.  |  .--.  |     |  | |  | |  '--' | 
  |  |\`    |  | .-'    | |  |  |  |     '  '-'  ' |  | --'  
  \`--'     \`--' \`-----'  \`--'  \`--'      \`-----'  \`--'      
`,
    `   _____  _____  _____  _____    _____  _____ 
  |   __||     ||   __||  |  |  |  |  ||  _  |
  |   __||-   -||__   ||     |  |  |  ||   __|
  |__|   |_____||_____||__|__|  |_____||__|   
`,
    `   ___   ___   ___   _  _     _   _   ___ 
  | __| |_ _| / __| | || |   | | | | | _ \\
  | _|   | |  \\__ \\ | __ |   | |_| | |  _/
  |_|   |___| |___/ |_||_|    \\___/  |_|  
`,
    `       ___  _  ___  _ _   _ _  ___ 
      | __>| |/ __>| | | | | || . \\
      | _> | |\\__ \\|   | | ' ||  _/
      |_|  |_|<___/|_|_| \`___'|_|  
`,
    `      ____ _ ____ _  _    _  _ ___  
      |___ | [__  |__|    |  | |__] 
      |    | ___] |  |    |__| |    
`,
    `       __    __              __  
      |_  | (_  |__|   /  \\ |__) 
      |   | __) |  |   \\__/ |    
`,
    `     ___      __                __  
    (_    /  (    )__/   /  /  /__) 
    /    (  __)  /  /   (__/  /     
`,
    `   ______ _____  ______   _    _     _    _   ______  
  | |      | |  / |      | |  | |   | |  | | | |  | \\ 
  | |----  | |  '------. | |--| |   | |  | | | |__|_/ 
  |_|     _|_|_  ____|_/ |_|  |_|   \\_|__|_| |_|      
`,
    `
      ,--. ,  ,-.  .  .   .  . ;-.  
      |    | (   \` |  |   |  | |  ) 
      |-   |  \`-.  |--|   |  | |-'  
      |    | .   ) |  |   |  | |    
      '    '  \`-'  '  '   \`--\` '    
`
  ]

  // create file content
  const thanks = {
    tw: '感謝使用 FISH UP 行列查碼！',
    en: 'Thank you for using FISH UP Dictionary of Array!',
    fr: "Merci d'avoir utilisé le Dictionnaire FISH UP de Tableau !"
  };
  const sentenceWithTime = {
    tw: `以下是您在 ${researchTime} 查詢的結果。`,
    en: `Here is the result of your search on ${researchTime}.`,
    fr: `Voici le résultat de votre recherche effectuée le ${researchTime}.`,
  };
  const resultStartLine = {
    tw: '================= 查詢結果 =================',
    en: '============== Search result ==============',
    fr: '========== Résultat de recherche =========='
  };
  let fileContent = thanks[stringLocal] + '\n';
  fileContent += sentenceWithTime[stringLocal] + '\n\n';
  fileContent += resultStartLine[stringLocal] + '\n\n';

  // add result description
  const resultInTotalSingular = {
    tw: `總共有 1 筆資料`,
    en: `There is 1 character/symbol in total:`,
    fr: `Il y a 1 caractère/symbole au total :`,
  };
  const resultInTotalPlural = {
    tw: `總共有 ${num} 筆資料`,
    en: `There are ${num} characters/symbols in total:`,
    fr: `Il y a ${num} caractères/symboles au total :`,
  };
  const shownEnglishKey = {
    tw: '（行列編碼以英文按鍵顯示）',
    en: '\n(Array codes written in English keys)',
    fr: "\n(Codes Tableau écrits en touche anglaise)"
  };
  (num > 1) ? fileContent += resultInTotalPlural[stringLocal] : fileContent += resultInTotalSingular[stringLocal]
  if (useEngKey) {
    fileContent += shownEnglishKey[stringLocal]
  }
  if (stringLocal == 'tw') fileContent += '：';
  fileContent += '\n\n';

  // display characters
  list.forEach(function (char, index) {
    fileContent += char;
    // change line for every 20 characters
    if ((index !== num - 1) && (index % 20 == 19)) {
      fileContent += '\n';
    }
  });
  fileContent += '\n\n' + separationLine;

  // add Array code results
  list.forEach(function (character) {
    // add character
    fileContent += character + '：\n';

    // add codes
    if (codeStandard.hasOwnProperty(character)) {
      codeStandard[character].forEach(function (code) {
        let temp = document.createElement('div');
        temp.id = 'temp';
        temp.style.display = 'none';
        resultAreaElem.appendChild(temp);
        createArrayCode('std', code, 'temp', useEngKey);
        fileContent += '    ' + temp.textContent + '\n';
        temp.remove();
      });
    }
    if (codeSingle.hasOwnProperty(character)) {
      let temp = document.createElement('div');
      temp.id = 'temp';
      temp.style.display = 'none';
      resultAreaElem.appendChild(temp);
      createArrayCode('sg', codeSingle[character], 'temp', useEngKey);
      fileContent += '    ' + temp.textContent + '\n';
      temp.remove();
    }
    if (codeSpecial.hasOwnProperty(character)) {
      let temp = document.createElement('div');
      temp.id = 'temp';
      temp.style.display = 'none';
      resultAreaElem.appendChild(temp);
      createArrayCode('sp', codeSpecial[character], 'temp', useEngKey);
      fileContent += '    ' + temp.textContent;
      temp.remove();
      if (["敦", "雇"].includes(character)) {
        fileContent += i18nCR1.default[stringLocal];
      }
      fileContent += '\n';
    }
    if (codeShort1.hasOwnProperty(character)) {
      let temp = document.createElement('div');
      temp.id = 'temp';
      temp.style.display = 'none';
      resultAreaElem.appendChild(temp);
      createArrayCode('sc1', codeShort1[character], 'temp', useEngKey);
      fileContent += '    ' + temp.textContent + '\n';
      temp.remove();
    }
    if (codeShort2.hasOwnProperty(character)) {
      if (typeof codeShort2[character] === 'string') {
        let temp = document.createElement('div');
        temp.id = 'temp';
        temp.style.display = 'none';
        resultAreaElem.appendChild(temp);
        createArrayCode('sc2', codeShort2[character], 'temp', useEngKey);
        fileContent += '    ' + temp.textContent + '\n';
        temp.remove();
      } else {
        codeShort2[character].forEach(function (code) {
          let temp = document.createElement('div');
          temp.id = 'temp';
          temp.style.display = 'none';
          resultAreaElem.appendChild(temp);
          createArrayCode('sc2', code, 'temp', useEngKey);
          fileContent += '    ' + temp.textContent + '\n';
          temp.remove();
        });
      }
    }
    if (codeSymbol.hasOwnProperty(character)) {
      let temp = document.createElement('div');
      temp.id = 'temp';
      temp.style.display = 'none';
      resultAreaElem.appendChild(temp);
      createArrayCode('sym', codeSymbol[character], 'temp', useEngKey);
      fileContent += '    ' + temp.textContent + '\n';
      temp.remove();
    }
    if (codeArray10.hasOwnProperty(character)) {
      fileContent += '    ' + '數：' + codeArray10[character] + '\n';
    }

    // add separation line
    fileContent += separationLine;
  })

  // add a random signature
  fileContent += signatures[Math.floor(Math.random() * signatures.length)];

  // add dictionary URL
  fileContent += `\nCopyright © ${websiteYear} ${websiteName[stringLocal]}\n`;
  if (stringLocal == 'tw') {
    fileContent += siteURL + 'dictionary.html\n';
  } else {
    fileContent += siteURL + stringLocal + '/dictionary.html\n';
  }

  //finally, bind the attributes
  const fileNameResult = { tw: '行列查碼結果（共 1 筆資料）.txt', en: 'Array codes (1 character).txt', fr: 'Codes Tableau (1 caractère).txt' };
  const fileNameResults = { tw: `行列查碼結果（共 ${num} 筆資料）.txt`, en: `Array codes (${num} characters).txt`, fr: `Codes Tableau (${num} caractères).txt` };
  num > 1 ?
    downloadBtnElem.download = fileNameResults[stringLocal] :
    downloadBtnElem.download = fileNameResult[stringLocal];
  downloadBtnElem.href = 'data:text/plain,' + encodeURI(fileContent);
  downloadBtnElem.target = "_blank";
}

// ===================
//  ARRAY CODE FILTER
// ===================

// clear the result area, add result recap sentence, call printResults
function array30Filter() {
  resultAreaElem.innerHTML = "";
  const sg = document.getElementById('checkbox--sg');
  const sp = document.getElementById('checkbox--sp');
  const sc1 = document.getElementById('checkbox--sc1');
  const sc2 = document.getElementById('checkbox--sc2');
  const sym = document.getElementById('checkbox--sym');

  let stringToSearch = '';
  let stringToSearchLength = 0;
  if (sg.checked) {
    if (!sp.checked && !sc1.checked && !sc2.checked && !sym.checked) { // only sg ticked
      stringToSearch = '一女乙風十木的方竹';
      stringToSearchLength = 9;
    } else if (!sp.checked && sc1.checked && !sc2.checked && !sym.checked) { // only sg & sc1 ticked
      stringToSearch = '一乙風十木的方竹';
      stringToSearchLength = 8;
    }
  } else if (sym.checked) {
    if (!sp.checked && !sc1.checked && !sc2.checked) { // only sym ticked
      stringToSearch =
        `，、。．‧；：？！︰…‥﹐﹑﹒·﹔﹕﹖﹗｜–︱—︳╴︴﹏（）︵︶｛｝︷︸〔〕︹︺【】︻︼《》︽︾〈〉︿﹀「」﹁﹂『』﹃﹄﹙﹚﹛﹜﹝﹞‘’“”〝〞‵′＃＆＊※§〃○●△▲◎☆★◇◆□■▽▼㊣℅¯￣＿ˍ﹉﹊﹍﹎﹋﹌﹟﹠﹡＋－×÷±√＜＞＝≦≧≠∞≒≡﹢﹣﹤﹥﹦～∩∪⊥∠∟⊿㏒㏑∫∮∵∴♀♂⊕⊙↑↓←→↖↗↙↘∥∣／＼∕﹨＄￥〒￠￡％＠℃℉﹩﹪﹫㏕㎜㎝㎞㏎㎡㎎㎏㏄°兙兛兞兝兡兣嗧瓩糎▁▂▃▄▅▆▇█▏▎▍▌▋▊▉┼┴┬┤├▔─│▕┌┐└┘╭╮╰╯═╞╪╡◢◣◥◤╱╲╳╔╦╗╠╬╣╚╩╝╒╤╕╘╧╛╓╥╖╟╫╢╙╨╜║▓①②③④⑤⑥⑦⑧⑨⑩⑴⑵⑶⑷⑸⑹⑺⑻⑼⑽ⅰⅱⅲⅳⅴⅵⅶⅷⅸⅹⅠⅡⅢⅣⅤⅥⅦⅧⅨⅩ〡〢〣〤〥〦〧〨〩〸〹〺ΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩαβγδεζηθικλμνξοπρστυφχψωㄅㄆㄇㄈㄉㄊㄋㄌㄍㄎㄏㄐㄑㄒㄓㄔㄕㄖㄗㄘㄙㄚㄛㄜㄝㄞㄟㄠㄡㄢㄣㄤㄥㄦㄧㄨㄩ˙ˉˊˇˋ`;
      stringToSearchLength = 401;
    } else if (!sp.checked && sc1.checked && !sc2.checked) { // only sym & sc1 ticked
      stringToSearch = '，。：；！「」、“”（）？『』．–＊／…';
      stringToSearchLength = 20;
    }
  } else if (sp.checked) {
    if (!sc1.checked && !sc2.checked) { // only sp ticked
      stringToSearch = '大不小是再個我在雇性段診嘗嘉痕畫孔爪仲妄宇死佛戒享刺叔昏狗秉祇突耐虐倚倒俱倉唐席悔矩租乾堅婚婆敏率盛術陪殘短貸慌源矮跨歉熊厲盤輝輯靜繁魏牙臣沈卓委姿夏容恥息旅框浮祝秦索躬寂崇帳救逢惰插敦期裂貴隆集飾徹漂漲熟遮憲擁謀頸艱騎繪贊辭驅鑒予朗頂普盜視貿榮監網價潤璃鄭據築融乳飯概煤馳端頗儀環臨邀璧繫耀釋飄黨票澄壁禮徜鈉綻幡餿魘等須啊尾淨業深清歲首急憐表姐始紀態語詞衣復罷聖廣室城越跑編裝讀高還單唱展岸直朝葉弟資利度察序賽情物質圍場望改君費選陳材妙姓她妹組被刻部請歷壓番靠遠造廢條聰慶游神社祖剛考遇般航喝範掃退餘候嘴窮呀恐衛科樂與實你那家聲會但雨獨喔取受希假聯活碟球窗謝傳議次沒獎夢例項題轉試光吧晚每觀溫龍妳雄哪鳳嗚隊罵辦標底檔掉調版英歡建基交景件幹何凰哈呵換客程覺板幫訊教理魔至影參讓莫徵星線錢三界提圖保團阿引章究卻啦舍怎者尚速元雲商您整演玩完若惡市感戰冷卡管代歌錄站討許式笑貓需協打灣守意其戀佳統按喜舊';
      stringToSearchLength = 398;
    } else if (!sc1.checked && sc2.checked) { // only sp & sc2 ticked
      stringToSearch = '再個在痕畫刺盛卓容索崇擁繪榮築等須啊尾淨業深清歲急憐表姐始紀語詞衣復罷聖室城跑編裝讀高還唱展岸直葉弟利度察賽情物質圍望改君費選陳材妙姓她妹組被刻部請歷壓靠遠造廢條慶游神社祖剛考遇般航喝範掃退餘候嘴呀恐衛科實聲會獨取受希假活碟球謝傳議次沒夢例項題轉試光吧晚溫龍妳雄哪鳳隊罵辦標底檔掉調版歡建交件凰哈換客程覺板幫訊教理至影參徵星線錢界圖保團阿究卻啦怎者速元商您整完若市感戰冷管代錄站討許式笑需協打灣守意其統按喜舊'
      stringToSearchLength = 204;
    }
    else if (sc1.checked && !sc2.checked) { // only sp & sc1 ticked
      stringToSearch = '大不小是個我在你那家會雨'
      stringToSearchLength = 12;
    } else if (sc1.checked && sc2.checked) { // only sp& sc1 & sc2 ticked
      stringToSearch = '個在會'
      stringToSearchLength = 3;
    }
  } else if (sc1.checked) {
    if (!sc2.checked) { // only sc1 ticked
      stringToSearch = '，火米精燈料鄰勞類營。身行街很往愛從後得四虫？『』．–＊／…口：；叫呢嗎吹別吃號一到聽現政弄兩而面要又力屬居發屋通習務局小卜水法決注當對省常山片！「」、“”（）門止鬥開關鬧些閱處桌十莊落著華萬真花敬故石戶也那破孩遍驗承啟方病施痛良遊族於為旗金半並鎮食拿前美道會目刀角周眼運解肉色免人入八做他進你坐作個竹看師和第種向答我的貝夕貼財夠賠體贈然過之心定麼字忙家應寫空手斤臼無把接興推學動日曰田時最是照點易國工七車哥事較敢頭或區土士廿起地老帶報都臺乙鄉收跳跟響逃飛路踢隨民巴書張院強除群陽月皿縣腦助臉服勝胞腳木機極村根校想來格查風幾經結級將能給總約立言裡新記該認說話就不大夫雨成在布願原電'
      stringToSearchLength = 290;
    } else { // only sc1 & sc2 ticked
      stringToSearch = '精燈料類往愛後得叫嗎別吃號要屬居發屋習局決注常開關鬧閱處莊著華破孩承啟病痛族於為旗拿會運色他進坐作個看師貼財夠賠贈然過忙寫把國事較起地帶臺收跳跟響逃飛踢巴強除腦助臉服胞腳機極村想來格級將約新記該認在布'
      stringToSearchLength = 100;
    }
  }

  // print results
  printResults([...stringToSearch]);

  //create filterResultRecap, put it in the beginning of resultDescription
  const filterResultRecapSpan = document.createElement('p');
  document.getElementById('result_description').prepend(filterResultRecapSpan);

  // add result recap sentence to filterResultRecap
  if (~~sp.checked + ~~sc1.checked + ~~sym.checked + ~~sg.checked == 0) {
    if (sc2.checked) {
      // only sc2 selected in this case
      const i18nTooManySC2 = {
        tw: '總共有 3037 個字有二級簡碼，實在是太多了，請和其它條件搭配篩選 😉',
        en: "Please also tick other types of code to reduce the number of characters 😉. There is a total of 3037 characters having a short code II, which is too many to display, so...",
        fr: "Merci de cocher aussi d'autres types de code pour réduire le nombre des caractères 😉. Il y a un total de 3037 caractères qui possèdent un code court II, et c'est trop pour montrer, donc" // ???
      }
      filterResultRecapSpan.textContent = i18nTooManySC2[stringLocal];
    } else {
      // nothing selected in this case
      const noTickedBox = {
        tw: '您似乎甚麼都沒選，所以…',
        en: "You didn't tick any boxes, so...", // AmE: check
        fr: "Vous n'avez rien coché, donc..."
      }
      filterResultRecapSpan.textContent = noTickedBox[stringLocal];
    }
  } else {
    // at least one type other than sc2 is selected in this case    
    // first indicate the number of characters/symbols
    const thereAreNoCharactersOrSymbols = sym.checked
      ? {
        tw: `沒有任何符號`,
        en: `There aren't any symbols`,
        fr: `Il n'y a pas de symboles`
      }
      : {
        tw: `沒有任何字`,
        en: `There aren't any characters`,
        fr: `Il n'y a pas de caractères`
      };
    const thereAreCharactersOrSymbols = sym.checked
      ? {
        tw: `總共有 ${stringToSearchLength} 個符號`,
        en: `There are ${stringToSearchLength} symbols in total`,
        fr: `Il y a au total ${stringToSearchLength} symboles`
      }
      : {
        tw: `總共有 ${stringToSearchLength} 個字`,
        en: `There are ${stringToSearchLength} characters in total`,
        fr: `Il y a au total ${stringToSearchLength} caractères`
      };
    filterResultRecapSpan.textContent = (stringToSearchLength > 0)
      ? thereAreCharactersOrSymbols[stringLocal]
      : thereAreNoCharactersOrSymbols[stringLocal];

    // then add a complement to the sentence if necessary
    const aOneKeyCode = { tw: '單鍵碼', en: 'a one-key code', fr: 'un code mono-touche' };
    const aSpecialCode = { tw: '特別碼', en: 'a special code', fr: 'un code spécial' };
    const aShortCodeI = { tw: '一級簡碼', en: 'a short code I', fr: 'un code court I' };
    const aShortCodeII = { tw: '二級簡碼', en: 'a short code II', fr: 'un code court II' };
    const pause = { tw: '、', en: ', ', fr: ', ' };
    const period = { tw: '。', en: '.', fr: '.' };
    const atTheSameTime = { tw: '同時', en: ' at the same time', fr: ' en même temps' };
    const thatHave = { tw: '有', en: ' that have ', fr: ' qui possèdent ' };
    const and = { tw: '和', en: ' and ', fr: ' et ' };

    if ((!(sp.checked) && !(sc1.checked) && !(sc2.checked) && !(sg.checked) && sym.checked)) {
      // only sym is selected in this case (so no complement)
      filterResultRecapSpan.textContent += period[stringLocal];
    } else {
      if (~~sp.checked + ~~sc1.checked + ~~sc2.checked + ~~sg.checked == 1) {
        // complement has only one type
        filterResultRecapSpan.textContent += thatHave[stringLocal];
        if (sg.checked) filterResultRecapSpan.textContent += aOneKeyCode[stringLocal];
        if (sp.checked) filterResultRecapSpan.textContent += aSpecialCode[stringLocal];
        if (sc1.checked) filterResultRecapSpan.textContent += aShortCodeI[stringLocal];
        if (sc2.checked) filterResultRecapSpan.textContent += aShortCodeII[stringLocal];
        filterResultRecapSpan.textContent += period[stringLocal];
      } else {
        // complement has more than one types
        if (stringLocal == 'tw') {
          filterResultRecapSpan.textContent += atTheSameTime[stringLocal];
        }
        filterResultRecapSpan.textContent += thatHave[stringLocal];
        if (sg.checked) filterResultRecapSpan.textContent += aOneKeyCode[stringLocal];
        if (sp.checked) {
          if (!sc1.checked && !sc2.checked) {
            // if is the last selected type
            filterResultRecapSpan.textContent += and[stringLocal];
          } else if (sg.checked) {
            // if is not the first selected type
            filterResultRecapSpan.textContent += pause[stringLocal];
          }
          filterResultRecapSpan.textContent += aSpecialCode[stringLocal];
        }
        if (sc1.checked) {
          if (!sc2.checked) {
            // if is the last selected type
            filterResultRecapSpan.textContent += and[stringLocal];
          } else if (sg.checked || sp.checked) {
            // if is not the first selected type
            filterResultRecapSpan.textContent += pause[stringLocal];
          }
          filterResultRecapSpan.textContent += aShortCodeI[stringLocal];
        }
        if (sc2.checked) {
          filterResultRecapSpan.textContent += and[stringLocal] + aShortCodeII[stringLocal];
        }
        if (stringLocal != 'tw') {
          filterResultRecapSpan.textContent += atTheSameTime[stringLocal];
        }
        filterResultRecapSpan.textContent += period[stringLocal];
        if (stringToSearchLength == 0) {
          const therefore = { tw: '所以...', en: ' So...', fr: ' Donc...' };
          filterResultRecapSpan.textContent += therefore[stringLocal];
        }
      }
    }
  }
}

// ====================
//  CREATE ARRAY BLOCK
// ====================

// append the Array code block (id = blockId) of the character = ch to some elem (id = id)
// ch supposed to be in DB
function createArrayBlock(ch, blockId, id) {
  const elem = document.getElementById(id);
  let block = document.createElement('div');
  block.id = blockId;
  block.className = 'dict-block-result';
  elem.appendChild(block);

  // add the character and comma to block
  let char = document.createElement('span');
  char.textContent = ch + "：";
  char.style = "font-size: 1.2em;"; // bigger font size
  block.appendChild(char);

  // add Array code list to block
  createArrayCodeList(ch, blockId + '_list', blockId, settings.useEngKey.state, -1);
}

// ==========================
//  ENG-ARRAY KEY CONVERSION
// ==========================

// convert Array keys alr existing on page into English ones or conversly
// keyType = 'eng' | 'array'
function convertKey(keyType) {
  const keys = document.getElementsByClassName("keycap-letter");
  if (keys.length) {
    const isEngNow = keys[0].textContent.length == 1;
    if ((keyType == 'eng' && !isEngNow) || (keyType == 'array' && isEngNow)) {
      for (let i = 0; i < keys.length; i++) {
        keys[i].textContent = isEngNow
          ? letterToArray30Dict[keys[i].textContent]
          : array30ToLetterDict[keys[i].textContent];
      }
    }
  }
}

// =======================
//  WHEN LOADING THE FILE
// =======================

// 1. Update states of settings by localStorage

if (localStorage.getItem(settings.useEngKey.localStgKey) === JSON.stringify(!settings.useEngKey.state)) {
  settings.useEngKey.state = !settings.useEngKey.state;
}
$(`#${settings.useEngKey.elemId}`).prop('checked', settings.useEngKey.state);

// 2. Show recent char
updateRecentChr([]);

// 3. Auto focus for the input area
$('#inputCharacters').on('hover, mouseover', function () {
  $('#inputCharacters').focus();
  $('#inputCharacters').select();
});

// ==============
//  USER ACTIONS
// ==============

// click btn or press enter to trigger 'search'
document.getElementById('btn_submit').addEventListener("click", search);
$(window).on('keypress', function (e) {
  if (e.which == 13) search();
});

document.getElementById("btn_filter_submit").addEventListener("click", array30Filter);

// =====[ settings related ]=====

// Eng Key
$(`#${settings.useEngKey.elemId}`).click(function () {
  // perform action
  convertKey($(this).prop('checked') ? 'eng' : 'array');

  // update local storage
  const state = $(this).prop('checked');
  settings.useEngKey.state = state;
  localStorage.setItem(settings.useEngKey.localStgKey, state);
})
