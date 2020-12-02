/**
 * Author: FISH UP
 * https://array30.misterfishup.com/
 * Copyright © 2020 FISH UP Dictionary of Array
 * Date: 2020-11-29
 */

/* Structure: (use search)
  - render page content
  - create radical examples
  - create radical overview
  - create radical key and code index in smallTOC
  - anchors and highlight effects
*/

// --------------------
// render page content
// --------------------

// render radical examples
createExampleStructureUntilKeyLevel();
addAllRadicalExamples();
addExampleSymbol();
addExample255();
modifySomeContent();

// render radical overview
createRadicalOverview();

// render radical key and code index in tocsmall
createIndexRadicalKey()
createIndexRadicalCode();

// anchor and highlight effect
addRadicalAnchorAndHighlightEffect();
addCodeAnchorAndHighlightEffect();

// ------------------------
// create radical examples
// ------------------------

// create structure by column position, key position, title included
function createExampleStructureUntilKeyLevel() {
  const columns = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  const rows = ['↑', '-', '↓'];
  const rowLocal = {
    '↑': { tw: '上', en: 'top', fr: 'haut' },
    '-': { tw: '中', en: 'middle', fr: 'milieu' },
    '↓': { tw: '下', en: 'bottom', fr: 'bas' },
  };
  function titleColumnPosition(columnPosition) {
    if (stringLocal == 'tw') {
      return `行 ${columnPosition} 字根實例`;
    } else if (stringLocal == 'en') {
      return `Examples of characters containing column ${columnPosition} radicals`;
    } else if (stringLocal == 'fr') {
      return `Examples de caractères contenant des radicaux de colonne ${columnPosition}`;
    }
  }
  function titleKeyPosition(co, ro) {
    return co + ' ' + rowLocal[ro][stringLocal];
  }

  for (const column of columns) {
    // create empty block by column in #radical-example
    let blockByColumn = document.createElement('div');
    blockByColumn.id = 'radical-example-' + column;
    blockByColumn.className = 'radical-example--block-column';
    document.getElementById('radical-example').appendChild(blockByColumn);

    // add title for blockByColumn
    let titleByColumn = document.createElement('div');
    titleByColumn.className = 'radical-example--title-column';
    titleByColumn.textContent = titleColumnPosition(column);
    blockByColumn.appendChild(titleByColumn);

    // add empty grid in blockByColumn
    let grid = document.createElement('div');
    grid.className = 'w3-row';
    blockByColumn.appendChild(grid);

    for (const row of rows) {
      // create empty block by key in grid
      let blockByKey = document.createElement('div');
      blockByKey.id = `radical-example-${column}-${rowLocal[row].en}`;
      blockByKey.className = 'w3-third radical-example--block-key';
      grid.appendChild(blockByKey);

      // add title for blockByKey
      let titleByKey = document.createElement('div');
      titleByKey.className = 'radical-example--title-key';
      titleByKey.textContent = titleKeyPosition(column, row);
      blockByKey.appendChild(titleByKey);

      // add subtitle for blockByKey
      const array30ToLetterDict = { '1-': 'a', '5↓': 'b', '3↓': 'c', '3-': 'd', '3↑': 'e', '4-': 'f', '5-': 'g', '6-': 'h', '8↑': 'i', '7-': 'j', '8-': 'k', '9-': 'l', '7↓': 'm', '6↓': 'n', '9↑': 'o', '0↑': 'p', '1↑': 'q', '4↑': 'r', '2-': 's', '5↑': 't', '7↑': 'u', '4↓': 'v', '2↑': 'w', '2↓': 'x', '6↑': 'y', '1↓': 'z', '9↓': '.', '0↓': '/', '0-': ';', '8↓': ',' };
      const key = column + row;
      let subtitle = document.createElement('div');
      subtitle.className = 'radical-example--subtitle-key';
      subtitle.innerHTML = `<span class="keycap keycap-letter">${key}</span> = <span class="keycap keycap-letter">${array30ToLetterDict[key]}</span>`;
      if (stringLocal == 'fr') {
        subtitle.innerHTML += ' (anglaise)';
      }
      blockByKey.appendChild(subtitle);
    }
  }
}

// create radical example block by radical in #id_name
function createRadicalExampleBlockByRadical(radical, id_name) {
  const examples = objectRadicalExamples[radical];
  const examplesArray = [...examples]; // avoid utf-16 problems

  // create blockByRadical in #id_name
  let blockByRadical = document.createElement('div');
  blockByRadical.id = 'radical-example-' + radical;
  blockByRadical.className = 'radical-example--block-radical';
  document.getElementById(id_name).appendChild(blockByRadical);

  // create title (ex: 日 01) in blockByRadical
  let title = document.createElement('div');
  title.id = 'radical-example-' + radical + '-title';
  title.className = 'radical-example--title-radical';
  blockByRadical.appendChild(title);
  createDecomposition(radical, title.id);

  // add remark in the title
  const leftParenthesis = { tw: '（', en: ' (', fr: ' (' };
  const rightParenthesis = { tw: '）', en: ')', fr: ')' };
  const commaInRemark = { tw: '，', en: ', ', fr: ', ' };
  const radicalInfo = arrayRadicalInformation[radical];
  if (radicalInfo.isSimplified && radicalInfo.type == 'special') {
    title.innerHTML += leftParenthesis[stringLocal];
    title.innerHTML += decompositionGeneratorLocal.specialSC[stringLocal];
    if (radicalInfo.hasOwnProperty('remark')) {
      title.innerHTML += commaInRemark[stringLocal] + radicalInfo.remark[stringLocal];
    }
    title.innerHTML += rightParenthesis[stringLocal];
  } else if (radicalInfo.isSimplified) { // no remark in this case
    title.innerHTML += leftParenthesis[stringLocal];
    title.innerHTML += decompositionGeneratorLocal.sc[stringLocal];
    title.innerHTML += rightParenthesis[stringLocal];
  } else if (radicalInfo.type == 'special') {
    title.innerHTML += leftParenthesis[stringLocal];
    title.innerHTML += decompositionGeneratorLocal.special[stringLocal];
    if (radicalInfo.hasOwnProperty('remark')) {
      title.innerHTML += commaInRemark[stringLocal] + radicalInfo.remark[stringLocal];
    }
    title.innerHTML += rightParenthesis[stringLocal];
  }

  // create list in blockByRadical (empty list)
  let ul = document.createElement('ul');
  ul.className = 'example-list';
  blockByRadical.appendChild(ul);

  // add examples in ul by looping through examplesArray
  for (let example of examplesArray) {
    const decomposition = (typeof objectDecomposition[example] == 'string') ?
      objectDecomposition[example] :
      objectDecomposition[example][0];
    let exampleLI = document.createElement('li');
    ul.appendChild(exampleLI);

    // display example character (ex: 林：)
    exampleLI.innerHTML += `<div class="w3-col" style="width: 2em;">${example}：</div>`;

    // display decomposition (ex: 木 48 + 木 48)
    exampleLI.innerHTML += `<div class="w3-rest" id='radical-${radical}-example-${example}'></div>`;
    createDecomposition(decomposition, 'radical-' + radical + '-example-' + example);
  }
}

// create radical example block by code in #id_name
function createRadicalExampleBlockByCode(radicalCode, id_name) {
  const column = radicalCode[0];
  let row = '-';
  if ('01234'.includes(radicalCode[1])) {
    row = '↑';
  } else if ('6789'.includes(radicalCode[1])) {
    row = '↓';
  }
  const radicalKey = column + row;
  const radicalsWithThisCode = allArrayRadicals[radicalKey][radicalCode];
  for (let radical of radicalsWithThisCode) {
    createRadicalExampleBlockByRadical(radical, id_name);
  }
}

// create all radical examples
function addAllRadicalExamples() {
  for (let radicalKey in allArrayRadicals) {
    const column = radicalKey[0];
    const rowLocal = { '↑': 'top', '-': 'middle', '↓': 'bottom' };
    const columnHyphenRowEnglish = column + '-' + rowLocal[radicalKey[1]];
    let grid = document.getElementById('radical-example-' + columnHyphenRowEnglish);

    // create radical example blocks by code
    for (let radicalCode in allArrayRadicals[radicalKey]) {
      let blockByCode = document.createElement('div');
      blockByCode.id = 'radical-example-' + radicalCode;
      blockByCode.className = 'radical-example--block-code';
      grid.appendChild(blockByCode);
      createRadicalExampleBlockByCode(radicalCode, blockByCode.id);
    }
  }
}

// create example symbol after all radical examples have been created
function addExampleSymbol() {
  let blockWrapper = document.createElement('div');
  blockWrapper.id = 'example-symbol';
  blockWrapper.className = 'radical-example--block-code';
  document.getElementById('radical-example-2-top').appendChild(blockWrapper);

  let block = document.createElement('div');
  block.className = 'radical-example--block-radical';
  blockWrapper.appendChild(block);

  const titleLocal = {
    tw: `符號鍵： 2 上（<a href="tutorial-complete.html#array10" target="_blank">行列 10</a> 以 23 替代符號鍵）`,
    en: `Symbol key: 2 top (23 in <a href="tutorial-complete.html#array10" target="_blank">Array 10</a>)`,
    fr: `Touche symbole : 2 haut (23 en <a href="tutorial-complete.html#array10" target="_blank">Tableau 10</a>)`
  }
  let title = document.createElement('div');
  title.className = 'radical-example--title-radical';
  title.innerHTML = titleLocal[stringLocal];
  block.appendChild(title);

  let ul = document.createElement('ul');
  ul.className = 'example-list';
  block.appendChild(ul);

  // add items to ul
  const symbolListName = {
    2: { tw: '括號符號選單', en: 'list of bracket symbols', fr: 'liste de symboles de parenthèse' },
    4: { tw: '數學符號選單', en: 'list of mathematical symbols', fr: 'liste de symboles mathématiques' },
    8: { tw: '順序符號選單', en: 'list of numeral symbols', fr: 'la liste de symboles numériques' },
    0: { tw: '注音符號選單', en: 'list of Bopomofo symbols', fr: 'la liste des symboles Bopomofo' },
  }
  const seeTutorial = {
    tw: `<a href="tutorial-complete.html#symbol-list" target="_blank">行列教學</a>有完整列表`,
    en: `See <a href="tutorial-complete.html#symbol-list" target="_blank">Array tutorial</a> for the complete list`,
    fr: `Voir <a href="tutorial-complete.html#symbol-list" target="_blank">le tutoriel Tableau</a> pour la liste complète`
  }

  let bracket = document.createElement('li');
  bracket.innerHTML = `<span class="keycap keycap-number">2</span>：${symbolListName['2'][stringLocal]}`;
  ul.appendChild(bracket);

  let math = document.createElement('li');
  math.innerHTML = `<span class="keycap keycap-number">4</span>：${symbolListName['4'][stringLocal]}`;
  ul.appendChild(math);

  let numeral = document.createElement('li');
  numeral.innerHTML = `<span class="keycap keycap-number">8</span>：${symbolListName['8'][stringLocal]}`;
  ul.appendChild(numeral);

  let bopomofo = document.createElement('li');
  bopomofo.innerHTML = `<span class="keycap keycap-number">0</span>：${symbolListName['0'][stringLocal]}`;
  ul.appendChild(bopomofo);

  let tutorial = document.createElement('li');
  tutorial.innerHTML = seeTutorial[stringLocal];
  ul.appendChild(tutorial);
}

// create example 255 after all radical examples have been created
function addExample255() {
  let blockWrapper = document.createElement('div');
  blockWrapper.id = 'example-255';
  blockWrapper.className = 'radical-example--block-code';
  document.getElementById('radical-example-2-middle').appendChild(blockWrapper);

  let block = document.createElement('ul');
  block.className = 'radical-example--block-radical';
  blockWrapper.appendChild(block);

  const titleLocal = {
    tw: `<a href="tutorial-complete.html#array10" target="_blank">行列 10</a> 限定：255（全形英文字母與全形數字）`,
    en: `<a href="tutorial-complete.html#array10" target="_blank">Array 10</a> only: 255 (full-width English letters and numbers)`,
    fr: `<a href="tutorial-complete.html#array10" target="_blank">Tableau 10</a> uniquement: 255 (lettres anglaise et chifres de pleine largeur)`
  }
  let title = document.createElement('div');
  title.className = 'radical-example--title-radical';
  title.innerHTML = titleLocal[stringLocal];
  block.appendChild(title);

  let ul = document.createElement('ul');
  ul.className = 'example-list';
  block.appendChild(ul);

  // add items to ul
  const array10255 = {
    1: { tw: '全形大寫英文字母 A 到 J', en: 'Full-width capital letters A to J', fr: 'Lettres majuscules A à J de pleine largeur' },
    3: { tw: '全形大寫英文字母 U 到 Z', en: 'Full-width capital letters U to Z', fr: 'Lettres majuscules U à Z de pleine largeur' },
    4: { tw: '全形小寫英文字母 a 到 j', en: 'Full-width small letters A to J', fr: 'Lettres minuscules A à J de pleine largeur' },
    0: { tw: '全形數字', en: 'Full-width numbers', fr: 'Chiffres de pleine largeur' },
  }
  const seeTutorial = {
    tw: `<a href="tutorial-complete.html#symbol-list" target="_blank">行列教學</a>有完整列表`,
    en: `See <a href="tutorial-complete.html#symbol-list" target="_blank">Array tutorial</a> for the complete list`,
    fr: `Voir <a href="tutorial-complete.html#symbol-list" target="_blank">le tutoriel Tableau</a> pour la liste complète`
  }
  ul.innerHTML = `
    <li>2551：${array10255['1'][stringLocal]}</li>
    <li>2553：${array10255['3'][stringLocal]}</li>
    <li>2554：${array10255['4'][stringLocal]}</li>
    <li>2550：${array10255['0'][stringLocal]}</li>`
  let tutorial = document.createElement('li');
  tutorial.innerHTML = seeTutorial[stringLocal];
  ul.appendChild(tutorial);
}

// modify some content after all examples have been created
function modifySomeContent() {
  const modifications = {
    '解': { tw: '「角」簡體字', en: "'角' in simplified Chinese", fr: '« 角 » en chinois simplifié' },
    '今': { tw: '（「今」簡體字前三筆畫', en: "the first three strokes of '今' in simplified Chinese", fr: "les trois premiers traits de « 今 » en chinois simplifié" },
  }
  const leftParenthesis = { tw: '（', en: ' (', fr: ' (' };
  const rightParenthesis = { tw: '）', en: ')', fr: ')' };
  document.getElementById('radical-example-糸-title').innerHTML += leftParenthesis[stringLocal] + arrayRadicalInformation.糸.remark[stringLocal] + rightParenthesis[stringLocal];
  $('#radical-解-example-角').html(modifications.解[stringLocal])
  $('#radical-今-example-今').html(modifications.今[stringLocal])
}

// ------------------------
// create radical overview
// ------------------------

// add radical code chunck in overview (ex: 21 女彑丱)
function createRadicalCodeChunkInOverview(radicalKey, radicalCode) {
  const overviewElem = document.getElementById('overview');
  const stringRadicals = allArrayRadicals[radicalKey][radicalCode];

  // add the radical code
  let code = document.createElement('a')
  code.href = '#radical-example-' + radicalCode;
  code.className = 'overview-code';
  code.textContent = radicalCode;
  code.onclick = function () { highlight(radicalCode) };
  overviewElem.appendChild(code);

  // add radicals
  for (const radical of stringRadicals) {
    const radicalInfo = arrayRadicalInformation[radical];

    // create radical node (span or img depending on isText)
    let radicalElem = radicalInfo.isText ?
      document.createElement('span') :
      document.createElement('img');
    radicalElem.className = "overview-radical";

    // add corresponding class if it's special or sc
    if (radicalInfo.isSimplified && radicalInfo.type == 'special') {
      radicalElem.className += " radical-special-sc";
      radicalElem.title = decompositionGeneratorLocal.specialSC[stringLocal];
    } else if (radicalInfo.isSimplified) {
      radicalElem.className += " radical-sc";
      radicalElem.title = decompositionGeneratorLocal.sc[stringLocal];
    } else if (radicalInfo.type == 'special') {
      radicalElem.className += " radical-special";
      radicalElem.title = decompositionGeneratorLocal.special[stringLocal];
    }

    // add content to the node
    if (radicalInfo.isText) {
      radicalElem.textContent = radical;
    } else {
      radicalElem.className += " radical";
      radicalElem.src = '/img/array30-radical/' + radicalInfo.imgName + '.png';
    }

    // this allows addRadicalAnchorAndHighlightEffect to create link and highlight effect
    radicalElem.className += ' radical-' + radical;

    // put radicalElem into anchor
    overviewElem.appendChild(radicalElem)
  }
}

// add '2↑ symbol key' in overview
function createSymbolListKeyInOverview() {
  const overviewElem = document.getElementById('overview');

  // add 2↑
  let code = document.createElement('a')
  code.href = '#example-symbol';
  code.className = 'overview-code';
  code.innerHTML = '2<span style="font-size: medium;">↑</span>';
  code.onclick = function () { highlight('symbol') };
  overviewElem.appendChild(code);

  // add description
  const symbolKey = { tw: '符號鍵', en: 'symbol key', fr: 'touche symbole' };
  let description = document.createElement('a');
  description.href = '#example-symbol';
  description.className = "anchor-normal";
  description.textContent = symbolKey[stringLocal];
  description.onclick = function () { highlight('symbol') };
  overviewElem.appendChild(description);
}

// add '255 Array 10 only' in overview
function create255InOverview() {
  const overviewElem = document.getElementById('overview');

  // add 255
  let code = document.createElement('a');
  code.href = '#example-255';
  code.className = 'overview-code';
  code.innerHTML = '255';
  code.onclick = function () { highlight('255') };
  overviewElem.appendChild(code);

  // add description
  const array10Only = { tw: '行列 10 限定', en: 'Array 10 only', fr: 'Tableau 10 uniquement' };
  let description = document.createElement('a');
  description.href = '#example-255';
  description.className = "anchor-normal";
  description.textContent = array10Only[stringLocal];
  description.onclick = function () { highlight('255') };
  overviewElem.appendChild(description);
}

// add everything needed in overview
function createRadicalOverview() {
  const columns = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  const rows = ['↑', '-', '↓'];
  for (const column of columns) {
    for (const row of rows) {
      const radicalKey = column + row;
      for (const radicalCode in allArrayRadicals[radicalKey]) {
        createRadicalCodeChunkInOverview(radicalKey, radicalCode);

        // add symbol list key after 22
        if (radicalCode == '22') createSymbolListKeyInOverview();

        // add 255 after 2-
        if (radicalCode == '2-') create255InOverview();
      }
    }
  }
}


// ----------------------------------------------
// create radical key and code index in smallTOC
// ----------------------------------------------

function createIndexRadicalKey() {
  let elem = document.getElementById('index-radical-key');

  // create title
  const radicalKey = { tw: '鍵位', en: 'Radical keys', fr: 'Touches de radical' };
  let title = document.createElement('div');
  title.className = 'bold-center';
  title.textContent = radicalKey[stringLocal];
  elem.appendChild(title);

  // create index
  const columns = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  const top = { tw: '上', en: 'top', fr: 'haut' };
  const middle = { tw: '中', en: 'middle', fr: 'milieu' };
  const bottom = { tw: '下', en: 'bottom', fr: 'bas' };
  for (const column of columns) {
    let line = document.createElement('div');
    line.innerHTML = `<a href="#radical-example-${column}-top">${column} ${top[stringLocal]}</a> | <a href="#radical-example-${column}-middle">${column} ${middle[stringLocal]}</a> | <a href="#radical-example-${column}-bottom">${column} ${bottom[stringLocal]}</a>`;
    elem.appendChild(line);
  }
}

function createIndexRadicalCode() {
  let elem = document.getElementById('index-radical-code');

  // create title
  const radicalKey = { tw: '字根碼', en: 'Radical codes', fr: 'Codes de radical' };
  let title = document.createElement('div');
  title.className = 'bold-center';
  title.textContent = radicalKey[stringLocal];
  elem.appendChild(title);

  // create index
  const columns = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  for (const column of columns) {
    let line = document.createElement('div');
    elem.appendChild(line);

    // get codes of the same column as array
    const codesTop = Object.keys(allArrayRadicals[column + '↑']);
    const codesMiddle = Object.keys(allArrayRadicals[column + '-']);
    const codesBottom = Object.keys(allArrayRadicals[column + '↓']);
    const codes = codesTop.concat(codesMiddle, codesBottom)

    // add links
    codes.forEach((code, index) => {
      let link = document.createElement('a');
      link.href = '#radical-example-' + code;
      link.textContent = code;
      link.onclick = function () { highlight(code) };
      line.appendChild(link);
      if (index != codes.length - 1) {
        const separationBar = document.createTextNode(' | ');
        line.appendChild(separationBar);
      }

      // insert symbol after 22
      if (code == '22') {
        const symbolKey = { tw: '符號鍵', en: 'symbol key', fr: 'touche symbole' };
        const linkSymbol = document.createElement('a');
        linkSymbol.href = '#example-symbol';
        linkSymbol.textContent = symbolKey[stringLocal];
        linkSymbol.onclick = function () { highlight('symbol') };
        line.appendChild(linkSymbol);
        const separationBar = document.createTextNode(' | ');
        line.appendChild(separationBar);
      }

      // insert 255 after 2-
      if (code == '2-') {
        const code255 = { tw: '255 (行列 10)', en: '255 (Array 10)', fr: '255 (Tableau 10)' };
        const link255 = document.createElement('a');
        link255.href = '#example-255';
        link255.textContent = code255[stringLocal];
        link255.onclick = function () { highlight('255') };
        line.appendChild(link255);
        const separationBar = document.createTextNode(' | ');
        line.appendChild(separationBar);
      }
    })
  }
}

// ------------------------------
// anchors and highlight effects
// ------------------------------

// highlight block by radical, by key, and symbol block, 255 block
function highlight(blockName) {
  const blockID = (blockName == 'symbol' || blockName == '255') ?
    'example-' + blockName :
    'radical-example-' + blockName;
  const highlightType = (blockName.length == 1) ?
    'highlight-block-radical' :
    'highlight-block-code';
  let block = document.getElementById(blockID);

  // highlight effect
  block.classList.remove(highlightType);
  void block.offsetWidth; // force browser to render changes
  block.classList.add(highlightType);
}

// wrap every .radical-[radical] by anchor tag and bind highlight effect
function addRadicalAnchorAndHighlightEffect() {
  for (const radicalKey in allArrayRadicals) {
    for (const radicalCode in allArrayRadicals[radicalKey]) {
      for (const radical of allArrayRadicals[radicalKey][radicalCode]) {
        $('.radical-' + radical).wrap(`<a href="#radical-example-${radical}"></a>`).click(function () { highlight(radical) })
      }
    }
  }
}

// wrap every .radical-code by anchor tag and bind highlight effect
function addCodeAnchorAndHighlightEffect() {
  $('.radical-code')
    .wrap(function () {
      return '<a href="#radical-example-' + $(this).text() + '"></a>'
    }).click(function () {
      const code = $(this).text();
      highlight(code);
    })
}
