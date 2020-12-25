/**
 * Author: FISH UP
 * https://array30.misterfishup.com/
 * Copyright © 2020 FISH UP Dictionary of Array
 * Date: 2020-12-13
 */

/* structure:
  - three objects as dictionaries
  - functions that change game's output status
  - code examples +
  - detect code examples
  - keyboard style and their commands
  - detect commands for style
  - close congratulation messages
  - interaction with the Array keyboard
  - game instructions things
*/

// ------------
// three objects as dictionaries
// ------------

const array30ToLetterDict = { '1-': 'a', '5↓': 'b', '3↓': 'c', '3-': 'd', '3↑': 'e', '4-': 'f', '5-': 'g', '6-': 'h', '8↑': 'i', '7-': 'j', '8-': 'k', '9-': 'l', '7↓': 'm', '6↓': 'n', '9↑': 'o', '0↑': 'p', '1↑': 'q', '4↑': 'r', '2-': 's', '5↑': 't', '7↑': 'u', '4↓': 'v', '2↑': 'w', '2↓': 'x', '6↑': 'y', '1↓': 'z', '9↓': '.', '0↓': '/', '0-': ';', '8↓': ',' };
const letterToArray30Dict = { 'a': '1-', 'b': '5↓', 'c': '3↓', 'd': '3-', 'e': '3↑', 'f': '4-', 'g': '5-', 'h': '6-', 'i': '8↑', 'j': '7-', 'k': '8-', 'l': '9-', 'm': '7↓', 'n': '6↓', 'o': '9↑', 'p': '0↑', 'q': '1↑', 'r': '4↑', 's': '2-', 't': '5↑', 'u': '7↑', 'v': '4↓', 'w': '2↑', 'x': '2↓', 'y': '6↑', 'z': '1↓', '.': '9↓', '/': '0↓', ';': '0-', ',': '8↓' };
// 40 keys (4 x 10) + 1 space key
const keyCodeTable = {
  space: { 'array30': 'Space', 'type': 'space', 'char': ' ' },
  digit0: { 'array30': '0', 'type': 'number', 'char': '0' },
  digit1: { 'array30': '1', 'type': 'number', 'char': '1' },
  digit2: { 'array30': '2', 'type': 'number', 'char': '2' },
  digit3: { 'array30': '3', 'type': 'number', 'char': '3' },
  digit4: { 'array30': '4', 'type': 'number', 'char': '4' },
  digit5: { 'array30': '5', 'type': 'number', 'char': '5' },
  digit6: { 'array30': '6', 'type': 'number', 'char': '6' },
  digit7: { 'array30': '7', 'type': 'number', 'char': '7' },
  digit8: { 'array30': '8', 'type': 'number', 'char': '8' },
  digit9: { 'array30': '9', 'type': 'number', 'char': '9' },
  keya: { 'array30': '1-', 'type': 'letter', 'char': 'a' },
  keyb: { 'array30': '5↓', 'type': 'letter', 'char': 'b' },
  keyc: { 'array30': '3↓', 'type': 'letter', 'char': 'c' },
  keyd: { 'array30': '3-', 'type': 'letter', 'char': 'd' },
  keye: { 'array30': '3↑', 'type': 'letter', 'char': 'e' },
  keyf: { 'array30': '4-', 'type': 'letter', 'char': 'f' },
  keyg: { 'array30': '5-', 'type': 'letter', 'char': 'g' },
  keyh: { 'array30': '6-', 'type': 'letter', 'char': 'h' },
  keyi: { 'array30': '8↑', 'type': 'letter', 'char': 'i' },
  keyj: { 'array30': '7-', 'type': 'letter', 'char': 'j' },
  keyk: { 'array30': '8-', 'type': 'letter', 'char': 'k' },
  keyl: { 'array30': '9-', 'type': 'letter', 'char': 'l' },
  keym: { 'array30': '7↓', 'type': 'letter', 'char': 'm' },
  keyn: { 'array30': '6↓', 'type': 'letter', 'char': 'n' },
  keyo: { 'array30': '9↑', 'type': 'letter', 'char': 'o' },
  keyp: { 'array30': '0↑', 'type': 'letter', 'char': 'p' },
  keyq: { 'array30': '1↑', 'type': 'letter', 'char': 'q' },
  keyr: { 'array30': '4↑', 'type': 'letter', 'char': 'r' },
  keys: { 'array30': '2-', 'type': 'letter', 'char': 's' },
  keyt: { 'array30': '5↑', 'type': 'letter', 'char': 't' },
  keyu: { 'array30': '7↑', 'type': 'letter', 'char': 'u' },
  keyv: { 'array30': '4↓', 'type': 'letter', 'char': 'v' },
  keyw: { 'array30': '2↑', 'type': 'letter', 'char': 'w' },
  keyx: { 'array30': '2↓', 'type': 'letter', 'char': 'x' },
  keyy: { 'array30': '6↑', 'type': 'letter', 'char': 'y' },
  keyz: { 'array30': '1↓', 'type': 'letter', 'char': 'z' },
  semicolon: { 'array30': '0-', 'type': 'letter', 'char': ';' },
  comma: { 'array30': '8↓', 'type': 'letter', 'char': ',' },
  period: { 'array30': '9↓', 'type': 'letter', 'char': '.' },
  slash: { 'array30': '0↓', 'type': 'letter', 'char': '/' },
}

// -------------------------------------------
// functions that change game's output status
// -------------------------------------------

// get game output field DOM
var gameOutputFieldElem = document.getElementById('game-output-field');

// change game's output status
function changeGameOutputStatus(eventCodeLowerCase) {
  // backspace
  if (eventCodeLowerCase == 'backspace') {
    gameBackspace();
  }
  // execute only when eventCodeLowerCase is in keyCodeTable
  if (keyCodeTable.hasOwnProperty(eventCodeLowerCase)) {
    gameAdd(eventCodeLowerCase);
    gameDetectShortCode(eventCodeLowerCase);
    gameDetectCode(eventCodeLowerCase);
  }
  // auto clear
  gameAutoClear();
}

// delete last elem (if existing) in the game output field
function gameBackspace() {
  if (gameOutputFieldElem.lastChild) {
    gameOutputFieldElem.removeChild(gameOutputFieldElem.lastChild);
  }
};

// add key to the output field
function gameAdd(eventCodeLowerCase) {
  const keyArray = keyCodeTable[eventCodeLowerCase]['array30'];
  const keyType = keyCodeTable[eventCodeLowerCase]['type'];
  $('#game-output-field').append('<span style="margin-right: 4px" class="w3-animate-right keycap keycap-' + keyType + '">' + keyArray + '</span>');
};

const characterColor = 'white';

// detect short codes and transform into character
function gameDetectShortCode(eventCodeLowerCase) {
  // function executed only when entry is a number key
  if (keyCodeTable[eventCodeLowerCase]['type'] == 'number') {
    let numberString = eventCodeLowerCase.slice(-1);
    let children = $('#game-output-field span');
    let hasNoShortCode2 = true;

    // detect short code 2
    if (children.length >= 3) {
      const thirdLastChild = children.last().prev().prev();
      const secondLastChild = children.last().prev();
      const thirdLastText = thirdLastChild.text();
      const secondLastText = secondLastChild.text();

      // get the possible short code 2
      if (array30ToLetterDict.hasOwnProperty(thirdLastText)
        && array30ToLetterDict.hasOwnProperty(secondLastText)) {
        const possibleShortCode2 = array30ToLetterDict[thirdLastText]
          + array30ToLetterDict[secondLastText] + numberString;

        // if it's a valid short code 2, convert it into character
        if (objectKeyShortCode2.hasOwnProperty(possibleShortCode2)) {
          thirdLastChild.delay(400).fadeOut("normal", function () {
            $(this).text(objectKeyShortCode2[possibleShortCode2]).removeAttr('class').css({ 'color': characterColor });
            $(this).fadeIn();
          })
          secondLastChild.delay(400).fadeOut("normal", function () {
            $(this).remove();
          });
          children.last().delay(400).fadeOut("normal", function () {
            $(this).remove();
          });
          hasNoShortCode2 = false;
        }
      }
    }
    // detect short code 1
    if (hasNoShortCode2 && children.length >= 2) {
      const secondLastChild = children.last().prev();
      const secondLastText = secondLastChild.text();

      // get the possible short code 1
      if (array30ToLetterDict.hasOwnProperty(secondLastText)) {
        const possibleShortCode1 = array30ToLetterDict[secondLastText]
          + numberString;

        // if it's a valid short code 1, convert it into character
        if (objectKeyShortCode1.hasOwnProperty(possibleShortCode1)) {
          secondLastChild.delay(400).fadeOut("normal", function () {
            $(this).text(objectKeyShortCode1[possibleShortCode1]).removeAttr('class').css({ 'color': characterColor });
            $(this).fadeIn();
          })
          children.last().delay(400).fadeOut("normal", function () {
            $(this).remove();
          });
        }
      }
    }
  }
};

// detect codes and transform into character
function gameDetectCode(eventCodeLowerCase) {
  // function executed only when entry is space
  if (eventCodeLowerCase == 'space') {
    let children = $('#game-output-field span');
    let hasNoCodeLength5 = true;
    let hasNoCodeLength4 = true;
    let hasNoCodeLength3 = true;
    let hasNoCodeLength2 = true;

    // detect code of length 5
    if (children.length >= 6 && children.last().prev().text() == '8↑') {
      const sixthLastChild = children.last().prev().prev().prev().prev().prev();
      const fifthLastChild = children.last().prev().prev().prev().prev();
      const fourthLastChild = children.last().prev().prev().prev();
      const thirdLastChild = children.last().prev().prev();
      const sixthLastText = sixthLastChild.text();
      const fifthLastText = fifthLastChild.text();
      const fourthLastText = fourthLastChild.text();
      const thirdLastText = thirdLastChild.text();

      // get the possible code of length 5
      if (array30ToLetterDict.hasOwnProperty(sixthLastText)
        && array30ToLetterDict.hasOwnProperty(fifthLastText)
        && array30ToLetterDict.hasOwnProperty(fourthLastText)
        && array30ToLetterDict.hasOwnProperty(thirdLastText)) {
        const possibleCodeLength5 = array30ToLetterDict[sixthLastText]
          + array30ToLetterDict[fifthLastText]
          + array30ToLetterDict[fourthLastText]
          + array30ToLetterDict[thirdLastText]
          + 'i';

        // if it's a valid code of length 5, convert it into character
        if (objectDropCoincidentCode.hasOwnProperty(possibleCodeLength5)) {
          sixthLastChild.delay(400).fadeOut("normal", function () {
            $(this).text(objectDropCoincidentCode[possibleCodeLength5]).removeAttr('class').css({ 'color': characterColor });
            $(this).fadeIn();
          })
          fifthLastChild.delay(400).fadeOut("normal", function () {
            $(this).remove();
          });
          fourthLastChild.delay(400).fadeOut("normal", function () {
            $(this).remove();
          });
          thirdLastChild.delay(400).fadeOut("normal", function () {
            $(this).remove();
          });
          children.last().prev().delay(400).fadeOut("normal", function () {
            $(this).remove();
          });
          children.last().delay(400).fadeOut("normal", function () {
            $(this).remove();
          });
          hasNoCodeLength5 = false;
        }
      }
    }

    // detect code of length 4
    if (hasNoCodeLength5 && children.length >= 5) {
      const fifthLastChild = children.last().prev().prev().prev().prev();
      const fourthLastChild = children.last().prev().prev().prev();
      const thirdLastChild = children.last().prev().prev();
      const secondLastChild = children.last().prev();
      const fifthLastText = fifthLastChild.text();
      const fourthLastText = fourthLastChild.text();
      const thirdLastText = thirdLastChild.text();
      const secondLastText = secondLastChild.text();

      // get the possible code of length 4
      if (array30ToLetterDict.hasOwnProperty(fifthLastText)
        && array30ToLetterDict.hasOwnProperty(fourthLastText)
        && array30ToLetterDict.hasOwnProperty(thirdLastText)
        && array30ToLetterDict.hasOwnProperty(secondLastText)) {
        const possibleCodeLength4 = array30ToLetterDict[fifthLastText]
          + array30ToLetterDict[fourthLastText]
          + array30ToLetterDict[thirdLastText]
          + array30ToLetterDict[secondLastText];

        // if it's a valid code of length 4, convert it into character
        if (objectDropCoincidentCode.hasOwnProperty(possibleCodeLength4)) {
          fifthLastChild.delay(400).fadeOut("normal", function () {
            $(this).text(objectDropCoincidentCode[possibleCodeLength4]).removeAttr('class').css({ 'color': characterColor });
            $(this).fadeIn();
          })
          fourthLastChild.delay(400).fadeOut("normal", function () {
            $(this).remove();
          });
          thirdLastChild.delay(400).fadeOut("normal", function () {
            $(this).remove();
          });
          secondLastChild.delay(400).fadeOut("normal", function () {
            $(this).remove();
          });
          children.last().delay(400).fadeOut("normal", function () {
            $(this).remove();
          });
          hasNoCodeLength4 = false;
        }
      }
    }

    // detect code of length 3
    if (hasNoCodeLength5 && hasNoCodeLength4 && children.length >= 4) {
      const fourthLastChild = children.last().prev().prev().prev();
      const thirdLastChild = children.last().prev().prev();
      const secondLastChild = children.last().prev();
      const fourthLastText = fourthLastChild.text();
      const thirdLastText = thirdLastChild.text();
      const secondLastText = secondLastChild.text();

      // get the possible code of length 3
      if (array30ToLetterDict.hasOwnProperty(fourthLastText)
        && array30ToLetterDict.hasOwnProperty(thirdLastText)
        && array30ToLetterDict.hasOwnProperty(secondLastText)) {
        const possibleCodeLength3 = array30ToLetterDict[fourthLastText]
          + array30ToLetterDict[thirdLastText]
          + array30ToLetterDict[secondLastText];

        // if it's a valid code of length 3, convert it into character
        if (objectDropCoincidentCode.hasOwnProperty(possibleCodeLength3)) {
          fourthLastChild.delay(400).fadeOut("normal", function () {
            $(this).text(objectDropCoincidentCode[possibleCodeLength3]).removeAttr('class').css({ 'color': characterColor });
            $(this).fadeIn();
          })
          thirdLastChild.delay(400).fadeOut("normal", function () {
            $(this).remove();
          });
          secondLastChild.delay(400).fadeOut("normal", function () {
            $(this).remove();
          });
          children.last().delay(400).fadeOut("normal", function () {
            $(this).remove();
          });
          hasNoCodeLength3 = false;
        }
      }
    }

    // detect code of length 2
    if (hasNoCodeLength5 && hasNoCodeLength4 && hasNoCodeLength3
      && children.length >= 3) {
      const thirdLastChild = children.last().prev().prev();
      const secondLastChild = children.last().prev();
      const thirdLastText = thirdLastChild.text();
      const secondLastText = secondLastChild.text();

      // get the possible code of length 2
      if (array30ToLetterDict.hasOwnProperty(thirdLastText)
        && array30ToLetterDict.hasOwnProperty(secondLastText)) {
        const possibleCodeLength2 = array30ToLetterDict[thirdLastText]
          + array30ToLetterDict[secondLastText];

        // if it's a valid code of length 2, convert it into character
        if (objectDropCoincidentCode.hasOwnProperty(possibleCodeLength2)) {
          thirdLastChild.delay(400).fadeOut("normal", function () {
            $(this).text(objectDropCoincidentCode[possibleCodeLength2]).removeAttr('class').css({ 'color': characterColor });
            $(this).fadeIn();
          })
          secondLastChild.delay(400).fadeOut("normal", function () {
            $(this).remove();
          });
          children.last().delay(400).fadeOut("normal", function () {
            $(this).remove();
          });
          hasNoCodeLength2 = false;
        }
      }
    }

    // detect code of length 1
    if (hasNoCodeLength5 && hasNoCodeLength4 && hasNoCodeLength3
      && hasNoCodeLength2 && children.length >= 2) {
      const secondLastChild = children.last().prev();
      const secondLastText = secondLastChild.text();

      // get the possible code of length 1
      if (array30ToLetterDict.hasOwnProperty(secondLastText)) {
        const possibleCodeLength1 = array30ToLetterDict[secondLastText];

        // if it's a valid code of length 1, convert it into character
        if (objectDropCoincidentCode.hasOwnProperty(possibleCodeLength1)) {
          secondLastChild.delay(400).fadeOut("normal", function () {
            $(this).text(objectDropCoincidentCode[possibleCodeLength1]).removeAttr('class').css({ 'color': characterColor });
            $(this).fadeIn();
          })
          children.last().delay(400).fadeOut("normal", function () {
            $(this).remove();
          });
        }
      }
    }
  }
};

// clear the game output field when it's too wide
function gameAutoClear() {
  // static children
  let children = document.querySelectorAll('#game-output-field span');
  // calculate gameOutputField width
  let gameOutputFieldWidth = 0;
  for (let i = 0; i < children.length; i++) {
    gameOutputFieldWidth += children[i].offsetWidth;
    gameOutputFieldWidth += 4; // margin-right of each child
  }
  // if game output field too wide
  // 845 = 895 (~= keyboard width) - 50 (~=game instrucitons open button)
  if (gameOutputFieldWidth > 845) {
    // clear game output field 
    for (let i = 0; i < children.length; i++) {
      gameOutputFieldElem.removeChild(children[i]);
    }
    // clear all code example states
    codeExamplesState = codeExamples.reduce((a, b) => (a[b] = '', a), {});
  }
};

// --------------
// code examples +
// --------------

// The order of codes in the list is important.
// If code A is a suffix of code B, code A needs to be placed before code B
// See the function 'detectCodeExamples'
// format: code + character (use only utf-8 characters, don't include utf-16, i.e. very rare characters)
const codeExamples = [
  // 1 Array key + number
  'l9我', 'k7你', 'a0要', 'k0個', ',1，', '/3？', '.1。', 'd6、', // '.7愛', 'c8對',
  // 2 Array key + number
  'k.5爸', 'it9創', 'vi4樣', 'ir8養', 'eq8戲', 'na4寶', // 'fd4豐', 'lj6邊', '.f0德', 'kf7值',
  // 1 Array key + space
  'a 一', 't 的', 'f 十', 'w 女', // 'v 木', 'x 風', 'h 方', 's 乙',  
  // 2 Array key + space (special)
  'ba 喔', 'np 廣', 'hi 禮', 'wk 玩', // '.c 貓', 's; 觀',
  // 2 Array key + space (not special)
  'w; 如', 'lj 自', 'or 生', 'b; 加', 'ib 令', 'xk 以', 'kj 分', 'gd 了', // 'h. 放', 'qj 确',  
  // 3 Array key + space
  'lvp 香', 'alm 頁', ';;; 品', 'pav 昧', // ',yx 炫', 'crk 洪',
  'oci 乐', 'xqb 练', 'hbh 为', 'nak 兴', 'nhz 实', 'aab 专', // 'cri 尘', 'azs 无',
  'ce, 渋', 'sei 凪', 'kni 込', 'pr, 黒', 'ecl 歩', ';iz 咲', // 'fni 辻', 'lrs 笹',
  'ark 兲', 'qbz 巭', 'eak 仧', 'aan 忈',
  // 4 Array key + space
  'p.ab 暖', 'kd.. 修', ';pzn 嗯', 'ofix 犧', 'vof. 鬱', 'li;m 籲', // ';coz 嗨',  'rlgf 孝',
  'xbhi 发', 'feou 蓝', 'ggdh 书', 'yfgz 读', 'njgf 学', 'zlpn 愿',
  'lp,v 楽', 'vlsf 枠', 'vyhd 榊', '.irz 躾', 'ozds 観', 'olfp 挿',
  'wgfn 恏', 'kgdn 怹', 'za/w 嫑', 'tg;b 勥', ';kaw 嘦', 'azpu 奣', // ';v;v 槑', ';;s; 嘂', 'pkae 圙', 'cbb; 瀥',
  // 5 Array key + space
  'arlci 瓈', 't,xfi 彞',
  '.almi 须', 'xaaxi 线', // 'cj;mi 赏', 'baaxi 层',
  'vi;ki 検', 'crjdi 満', // 'ezaxi 歳', '.f/ni 徳' 
];

// function that creates code example div of codeWithCharacter inside #elemID, and its id is the code with space replaced by underscore
function addCodeExamples(codeWithCharacter, elemId) {
  const character = codeWithCharacter.slice(-1);
  const codeLength = codeWithCharacter.length - 1;
  g = document.createElement('div');
  // DOM's ID is the code with space replaced by underscore
  g.id = codeWithCharacter.replace(/ /g, "_");
  icon = document.createElement('span');
  icon.className = 'codeExampleIcon';
  icon.textContent = '🕹️'; // could be change by detectCommandForKeyPressedStyle
  g.appendChild(icon);
  g.innerHTML += '&nbsp;';
  for (i = 0; i < codeLength - 1; i++) {
    arrayKey = document.createElement('span');
    arrayKey.className = 'keycap keycap-letter';
    arrayKey.textContent = letterToArray30Dict[codeWithCharacter[i]];
    g.appendChild(arrayKey);
    plus = document.createTextNode(" + ");
    g.appendChild(plus)
  }
  if (codeWithCharacter[codeLength - 1] == ' ') {
    arrayKey = document.createElement('span');
    arrayKey.className = 'keycap keycap-space';
    arrayKey.textContent = 'Space';
    g.appendChild(arrayKey);
  } else {
    arrayKey = document.createElement('span');
    arrayKey.className = 'keycap keycap-number';
    arrayKey.textContent = codeWithCharacter[codeLength - 1];
    g.appendChild(arrayKey);
  }
  become = document.createTextNode(' = ' + character)
  g.appendChild(become);
  document.getElementById(elemId).appendChild(g)
}

// create code examples on the web page
codeExamples.forEach(function (code, index) {
  if (index % 2 === 0) {
    addCodeExamples(code, 'code_examples_left');
  } else {
    addCodeExamples(code, 'code_examples_right');
  }
});

// toggle code examples block
$('#code_examples_toggle').click(function () {
  $('#code_examples_block').toggleClass('w3-hide');
  $(this).children().toggleClass('w3-hide');
})

// ---------------------
// detect code examples
// ---------------------

// initialise codeExamplesState (string object)
let codeExamplesState = codeExamples.reduce((a, b) => (a[b] = '', a), {});

// detect code examples
function detectcodeExamples(eventCodeLowerCase) {
  if (keyCodeTable.hasOwnProperty(eventCodeLowerCase)) {
    const letter = keyCodeTable[eventCodeLowerCase].char;
    // initialisation    
    let isAnyCodeExampleDetected = false;
    let codeExampleDetected = '';

    // update states and set isAnyCodeExampleDetected to true if code deteced
    for (const codeExample of codeExamples) {
      // first update code example state
      if (letter == codeExample[codeExamplesState[codeExample].length]) {
        codeExamplesState[codeExample] += letter;
      } else {
        letter == codeExample[0] ?
          codeExamplesState[codeExample] += letter :
          codeExamplesState[codeExample] = '';
      }
      // then check if it's completed
      if (codeExamplesState[codeExample] == codeExample.slice(0, -1)) {
        isAnyCodeExampleDetected = true;
        // update codeExampleDetected
        codeExampleDetected = codeExample
      }
    }
    // if at least one example code is detected
    if (isAnyCodeExampleDetected) {
      // make the example code's DOM a bit transparent
      // DOM's ID is the code with space replaced by underscore
      document.getElementById(codeExampleDetected.replace(/ /g, "_")).style.opacity = "0.25";
      // clear the state of the code example (last looped)
      codeExamplesState[codeExampleDetected] = '';
    }
  } else {
    // i.e. eventCodeLowerCase not a key in keyCodeTable
    // in this case, reinitialise codeExamplesState
    codeExamplesState = codeExamples.reduce((a, b) => (a[b] = '', a), {});
  }
}

// ---------------------------------
// keyboard style and their commands
// ---------------------------------

// The order of items in these lists is be important.
// If command A is a suffix of command B, the corresponding
// style A needs to be placed before style B
// See the function 'detectCommandForKeyPressedStyle'

// pressed key: [keycap]_[backlight] 
const easterEggKeyPressedStyleOptions = ['default_pink', 'default_green', 'default_yellow', 'default_blue', 'default_purple', 'default_white', 'hidden_none', 'default_flashing', 'blurred_none', 'array-special_white'];
const otherKeyPressedStyleOptions = ['default_bright-red', 'alien_green', 'sakura_pink', 'banana_yellow', 'turtle_green'];
const allKeyPressedStyleOptions = easterEggKeyPressedStyleOptions.concat(otherKeyPressedStyleOptions);

// keycaps of the keyboard, format to define
// const easterEggKeycapStyleOptions = [];
// const allKeycapStyleOptions = easterEggKeycapOptions.concat([]);

// backlight of the keyboard, format to define
// const easterEggBackLightStyleOptions = [];
// const allBacklightStyleOptions = easterEggBackLightOptions.concat([]);

// set default style
let keyPressedStyle = 'default_pink';
// let keycapStyle = '???';
// let backlightStyle = '???';

// commands for pressed key style
// any style of allKeyPressedStyleOptions needs to have at least one command
const commandForKeyPressedStyle = {
  'array-special_white': [
    'fish up', 'array', 'qrrqy', 'tableau', 'tqblequ',
    '.3ame ', '.aad ame ' // 行列 行列
  ],
  /* Hey, you're NOT supposed to be reading these commands,
  try finding them ON YOUR OWN! (You'll be well guided) */
  'default_white': [
    '1234567890', // 0987654321 to turn off
    'all white', 'qll white', 'tout blanc', 'tout blqnc', 'toute blanche', 'toute blqnche',
    'ir1lp1', 'ir1lp ', 'ir lp1', 'ir lp ', // 行列 全白
    'fm06196', 'quan bai'// 注音拼音 全白
  ],
  'hidden_none': [
    'qwertyuiop', 'azertyuiop', // poiuytrewq poiuytreza to turn off
    'disappearing', 'disqppeqring', 'disqppeqred', 'disappeared', 'disparu', 'dispqru',
    'hidden', 'cache', 'cqch2',
    'cc7oz1', 'cc7oz ', 'ccu oz1', 'ccu oz ', // 行列 消失
    't.qn faxx ', 't.qn fxax ', 't.qn fzsx', // 行列 隱藏
    'vul g ', 'xiao shi', // 注音拼音 消失
    'up3h;6', 'yin cang' // 注音拼音 隱藏
  ],
  'default_flashing': [
    'asdfghjkl;', 'qsdfghjklm', // ;lkjhgfdsa mlkjhgfdsq to turn off
    'flashing', 'flqshing', 'clignotant', 'clignotqnt',
    'ek1,lpv ', 'ek1,xlv ', 'ek ,lpv ', 'ek ,xlv ', // 行列 閃爍
    'g03gji4', 'shan shuo'  // 注音拼音 閃爍
  ],
  /* Hey, you're NOT supposed to be reading these commands,
  try finding them ON YOUR OWN!  (You'll be well guided) */
  'blurred_none': [
    'zxcvbnm,./', 'wxcvbn,;:!', // /.,mnbvcxz !:;,nbvcxw to turn off
    'blurred', 'flou',
    'vfpz ,f0', 'vfpz ,f;u ', // 行列 模糊
    'ai6cj6', 'mo hu',// 注音拼音 模糊
    'g,1nm f;2', 'g,1nm f;s ', 'g,1nr8f;2', 'g,1nr8f;s ', 'g,1nrkm f;2', 'g,1nrkm f;s ', 'g, nm f;2', 'g, nm f;s ', 'g, nr8f;2', 'g, nr8f;s ', 'g, nrkm f;2', 'g, nrkm f;s ', // 行列 馬賽克
    'a83n94dk4', 'ma sai ke' // 注音拼音 馬賽克
  ],
  'default_pink': [
    '0987654321', // turn off allwhite
    'poiuytrewq', 'poiuytreza', // turn off disappearing
    'showing', 'montre', ';ontr2', // turn off disappearing
    'pxxm aac ', // turn off disappearing (行列 顯示)
    'vu03g4', // turn off disappearing (注音 顯示)
    'xian shi', // turn off disappearing (拼音 顯示)
    ';lkjhgfdsa', 'mlkjhgfdsq', // turn off flashing
    '/.,mnbvcxz', '!:;,nbvcxw', // turn off blurred  
    'pink', 'rose',
    ',k7j9', ',k7jt3', ',k7jtds ', ',k7j9', ',k7jt3', ',k7jtds ', ',kj j9', ',kj jt3', ',kj jtds ', ',kj j9', ',kj jt3', ',kj jtds ', // 行列 粉色
    'zp3nk4', 'fen se', // 注音拼音 粉色
    ',k7xq1j9', ',k7xq1jt3', ',k7xq1jtds ', ',k7xq j9', ',k7xq jt3', ',k7xq jtds ', ',kj xq1j9', ',kj xq1jt3', ',kj xq1jtds ', ',kj xq j9', ',kj xq jt3', ',kj xq jtds ', // 行列 粉紅色
    'zp3cj/6nk4', 'fen hong se' // 注音拼音 粉紅色
  ],
  /* Hey, you're NOT supposed to be reading these commands,
  try finding them ON YOUR OWN!  (You'll be well guided) */
  'default_blue': [
    'blue', 'bleu',
    'fqdu j9', 'fqdu jt3', 'fqdu jtds ', // 行列
    'x06nk4', 'lan se' // 注音拼音
  ],
  'default_yellow': [
    'yellow', 'jaune', 'jqune',
    'rp8j9', 'rp8jt3', 'rp8jtds ', 'rpfk j9', 'rpfk jt3', 'rpfk jtds ', 'rpk j9', 'rpk jt3', 'rpk jtds ', // 行列
    'cj;6nk4', 'huang se' // 注音拼音
  ],
  'default_purple': [
    'purple', 'violet',
    'eqx j9', 'eqx jt3', 'eqx jtds ', // 行列
    'y3nk4', 'zi se', // 注音拼音
  ],
  /* Hey, you're NOT supposed to be reading these commands,
  try finding them ON YOUR OWN!  (You'll be well guided) */
  'default_green': [
    'green', 'vert',
    'xw3j9', 'xw3jt3', 'xw3jtds ', 'xwc j9', 'xwc jt3', 'xwc jtds ', // 行列
    'xm4nk4', 'lu se' // 注音拼音
  ],
  // ↑ easter eggs
  // ↓ not easter eggs
  'default_bright-red': [
    'bright red', 'rouge vif',
    'y;js xq jtds ' // 行列 亮紅色
  ],
  'alien_green': [
    'alien', 'qlien', 'extraterrestre', 'extrqterrestre',
    'mc por k ' // 行列 外星人
  ],
  /* Hey, you're NOT supposed to be reading these commands,
  try finding them ON YOUR OWN!  (You'll be well guided) */
  'sakura_pink': [
    'sakura', 'cherry blossom', 'sqkurq', 'fleur de cerisier',
    'vmmw fkq ' // 行列 櫻花
  ],
  'banana_yellow': [
    'banana', 'bqnqnq', 'banane', 'bqnqne',
    'lvp fky, ' // 行列 香蕉
  ],
  'turtle_green': [
    'turtle', 'tortue',
    'l,2jj1' // 行列 烏龜 (二級簡碼)
  ]
}

// --------------------------
// detect commands for style
// --------------------------

// remove/add href in keyboard
function removeHrefInKeyboard() { $('.s_key a').removeAttr('href') };
function addHrefInKeyboard() {
  $(".key-dictionary a").attr("href", "dictionary.html");
  $(".key-typing a").attr("href", "typing.html");
  $(".key-array a").attr("href", "#introduction");
}

// initialise state of commands for pressed key style
// it's basically commandForKeyPressedStyle, but with all strings being empty
let commandForKeyPressedStyleState = {};
for (const style in commandForKeyPressedStyle) {
  commandForKeyPressedStyleState[style] = Array(commandForKeyPressedStyle[style].length).fill('');
}

// initialise hasFoundEasterEggKeyPressedStyle (boolean object)
let hasFoundEasterEggKeyPressedStyle = easterEggKeyPressedStyleOptions.reduce((a, b) => (a[b] = false, a), {});

function detectCommandForKeyPressedStyle(eventCodeLowerCase) {
  if (keyCodeTable.hasOwnProperty(eventCodeLowerCase)) {
    const letter = keyCodeTable[eventCodeLowerCase].char;
    const hasFoundAllEasterEggKeyPressedStyleBefore = Object.values(hasFoundEasterEggKeyPressedStyle).every(Boolean); // fixed boolean value (before detecting commands)
    // initialisation    
    let isAnyCommandDetected = false;
    let styleOfDetectedCommand = ''
    let indexOfDetectedCommand = 1000;

    // the following block: loop through every command state to update it and check if it's completed
    // if several commands are completed, only the last one looped is taken into account
    for (const style of allKeyPressedStyleOptions) {
      const numberOfCommands = commandForKeyPressedStyleState[style].length;
      // loop through all commands of the style      
      for (var i = 0; i < numberOfCommands; i++) {
        const command = commandForKeyPressedStyle[style][i];
        // first update command state
        if (letter == command[commandForKeyPressedStyleState[style][i].length]) {
          commandForKeyPressedStyleState[style][i] += letter;
        } else {
          letter == command[0] ?
            commandForKeyPressedStyleState[style][i] += letter :
            commandForKeyPressedStyleState[style][i] = '';
        }
        // then check if the command is complete
        if (commandForKeyPressedStyleState[style][i] == command) {
          // update things
          isAnyCommandDetected = true;
          styleOfDetectedCommand = style;
          indexOfDetectedCommand = i;
        }
      }
    }

    // the following block: update pressed key style if at least one is completed, and deal with easter egg related things
    if (isAnyCommandDetected) {
      // update pressed key style
      keyPressedStyle = styleOfDetectedCommand;
      // clear the state of the completed command (last looped)
      commandForKeyPressedStyleState[styleOfDetectedCommand][indexOfDetectedCommand] = '';
      // remove href in the keyboard if styleOfDetectedCommand is array-special_white
      // or in otherKeyPressedStyleOptions, otherwise add href
      styleOfDetectedCommand == 'array-special_white' || otherKeyPressedStyleOptions.includes(styleOfDetectedCommand) ?
        removeHrefInKeyboard() :
        addHrefInKeyboard()
      // change code example icon
      switch (styleOfDetectedCommand) {
        case 'array-special_white':
          $('.codeExampleIcon').text('🎉');
          break;
        case 'default_bright-red':
          $('.codeExampleIcon').text('🔴');
          break;
        case 'banana_yellow':
          $('.codeExampleIcon').text('🍌');
          break;
        case 'sakura_pink':
          $('.codeExampleIcon').text('🌸');
          break;
        case 'alien_green':
          $('.codeExampleIcon').text('👽');
          break;
        case 'turtle_green':
          $('.codeExampleIcon').text('🐢');
          break;
        default:
          $('.codeExampleIcon').text('🕹️');
      }
      // if this style is used for the first time and is an Easter egg
      if (!hasFoundEasterEggKeyPressedStyle[styleOfDetectedCommand] && easterEggKeyPressedStyleOptions.includes(styleOfDetectedCommand)) {
        // update hasFound for the style
        hasFoundEasterEggKeyPressedStyle[styleOfDetectedCommand] = true;
        // show the div of this Easter egg in game instructions
        document.getElementById('div_key_pressed_' + styleOfDetectedCommand).classList.remove("w3-hide");
        document.getElementById('div_key_pressed_' + styleOfDetectedCommand).scrollIntoView({ block: 'center' });
        // show the game notification icon if game instructions are close
        if (!areGameInstructionsOpen) {
          document.getElementById('game-notification').classList.remove('w3-hide');
        }
      }
      // remove all game commments
      $('.game-comment').remove()
    }
    // if before detecting, some easter eggs are still not found
    if (!hasFoundAllEasterEggKeyPressedStyleBefore) {
      // if backlight easter eggs are now all found, remove #hint_for_easter_egg_backlight
      if (hasFoundEasterEggKeyPressedStyle.default_blue && hasFoundEasterEggKeyPressedStyle.default_purple && hasFoundEasterEggKeyPressedStyle.default_yellow && hasFoundEasterEggKeyPressedStyle.default_green && hasFoundEasterEggKeyPressedStyle.default_pink) {
        $('#hint_for_easter_egg_backlight').remove();
      }
      // if mode easter eggs are now all found, remove #hint_for_easter_egg_mode
      // otherwise (show the hint if all backlight easter eggs are all found)
      if (hasFoundEasterEggKeyPressedStyle.default_white && hasFoundEasterEggKeyPressedStyle.blurred_none && hasFoundEasterEggKeyPressedStyle.default_flashing && hasFoundEasterEggKeyPressedStyle.hidden_none) {
        $('#hint_for_easter_egg_mode').remove();
      } else {
        if (hasFoundEasterEggKeyPressedStyle.default_blue && hasFoundEasterEggKeyPressedStyle.default_purple && hasFoundEasterEggKeyPressedStyle.default_yellow && hasFoundEasterEggKeyPressedStyle.default_green && hasFoundEasterEggKeyPressedStyle.default_pink) {
          $('#hint_for_easter_egg_mode').removeClass('w3-hide');
        }
      }
      // if special egg is now found, remove #hint_for_easter_egg_special
      // otherwise (show the hint if all other easter eggs are all found)
      if (hasFoundEasterEggKeyPressedStyle['array-special_white']) {
        $('#hint_for_easter_egg_special').remove();
      } else {
        // temporarily assume the special egg is found
        hasFoundEasterEggKeyPressedStyle['array-special_white'] = true;
        // if all Easter eggs are found, show the hint ()
        if (Object.values(hasFoundEasterEggKeyPressedStyle).every(Boolean)) {
          $('#hint_for_easter_egg_special').removeClass('w3-hide');
        }
        // of course, special egg is not found
        hasFoundEasterEggKeyPressedStyle['array-special_white'] = false;
      }
      // if all Easter eggs for pressed key style are found now
      // i.e. for the first time all Easter eggs for pressed key style are found 
      if (Object.values(hasFoundEasterEggKeyPressedStyle).every(Boolean)) {
        // show congrats message
        $("#modal_congratulations_message").removeClass('w3-hide');
        $("#modal_bg_congratulations_message").removeClass('w3-hide');
        // show close button after 2000ms
        setTimeout(function () {
          $('#modal_congratulations_message_close').removeClass('w3-hide');
        }, 2000);
      }
    }
  } else {
    // i.e. eventCodeLowerCase not a key in keyCodeTable
    // in this case, reinitialise commandForKeyPressedStyleState
    for (const style in commandForKeyPressedStyle) {
      commandForKeyPressedStyleState[style] = Array(commandForKeyPressedStyle[style].length).fill('');
    }
  }
}

// ------------------------------
// close congratulation messages
// ------------------------------

function closeCongratulationMessages() {
  const congratsMessage = {
    tw: '恭喜您找到了全部 10 顆彩蛋！',
    en: "You've found all the 10 Easter eggs!",
    fr: "Vous avez trouvé tous les 10 œufs de Pâques !"
  }
  // fade out congrats messaage in 1500ms and remove it
  $("#modal_congratulations_message").fadeOut(1500, function () { $(this).remove(); });
  $("#modal_bg_congratulations_message").fadeOut(1500, function () { $(this).remove(); });
  // show all other commands (in game instructions)// show all other commands (in game instructions)
  document.getElementById('all_other_commands').classList.remove('w3-hide');
  // change game instructions open button icon
  $('#game-instructions-icon').addClass('fa-gift').removeClass('fa-gamepad');
  // scroll into view
  document.getElementById('div_key_pressed_array-special_white').scrollIntoView();
  // document.getElementById('all_other_commands').scrollIntoView();

}

$('#modal_congratulations_message_close').click(closeCongratulationMessages);

// ------------------------------------
// interaction with the Array keyboard
// ------------------------------------

// remove any(every) pressed key style from jquery object in 1200 ms
var objectRemoveKeyPressedStyle = {};
function removeKeyPressedStyle(eventCodeLowerCase, jqueryObject) {
  objectRemoveKeyPressedStyle[eventCodeLowerCase] = setTimeout(function () {
    for (const keyPressedStyle of allKeyPressedStyleOptions) {
      jqueryObject.removeClass('key_pressed_' + keyPressedStyle)
    }
  }, 1200);
}

// press keys on user's real keyboard
$(window).on({
  'keydown': function (e) {
    const eventCodeLowerCase = e.code.toLowerCase();
    var pressedKey = $('.' + eventCodeLowerCase);
    // clear timeout of removing pressed key style on this key
    clearTimeout(objectRemoveKeyPressedStyle[eventCodeLowerCase]);
    // become pressed, add pressed key style
    pressedKey.addClass('pressed');
    pressedKey.addClass('key_pressed_' + keyPressedStyle);
    // change game's output status
    changeGameOutputStatus(eventCodeLowerCase);
    // detect code examples
    detectcodeExamples(eventCodeLowerCase);
    // detect command for pressed key style
    detectCommandForKeyPressedStyle(eventCodeLowerCase);
  },
  'keyup': function (e) {
    const eventCodeLowerCase = e.code.toLowerCase();
    var pressedKey = $('.' + eventCodeLowerCase);
    // not pressed anymore
    pressedKey.removeClass('pressed');
    // set timeout for removing pressed key style
    removeKeyPressedStyle(eventCodeLowerCase, pressedKey);
  }
});

// click keys on the virtual keyboard
$("#keyboard .key .keyboard-keycap, #keyboard .f_key .keyboard-keycap, #keyboard a").mousedown(function () {
  let clickedKey = $(this).parent();
  // clear timeout of removing pressed key style on this key
  clearTimeout(objectRemoveKeyPressedStyle[clickedKey.attr('name')]);
  // become pressed,, add pressed key style
  clickedKey.addClass('pressed');
  clickedKey.addClass('key_pressed_' + keyPressedStyle);
  // change game's output status
  changeGameOutputStatus(clickedKey.attr('name'));
  // detect code examples
  detectcodeExamples(clickedKey.attr('name'));
  // detect command for pressed key style
  detectCommandForKeyPressedStyle(clickedKey.attr('name'));
}).mouseup(function () {
  let clickedKey = $(this).parent();
  // not pressed anymore
  clickedKey.removeClass('pressed');
  // set timeout for removing pressed key style
  removeKeyPressedStyle(clickedKey.attr('name'), clickedKey);
}).mouseleave(function () {
  let clickedKey = $(this).parent();
  // not pressed anymore
  clickedKey.removeClass('pressed');
  // set timeout for removing pressed key style
  removeKeyPressedStyle(clickedKey.attr('name'), clickedKey);
})

// prevent Space bar from scrolling page, Tab from going to next thing in browsers, Slash, Quote, from searching, Backspace from going to previous page in firefox)
let gameOutputFieldBottom = gameOutputFieldElem.offsetTop + gameOutputFieldElem.offsetHeight
window.addEventListener('keydown', function (e) {
  if ((e.code == "Space" || e.key == ' ' || e.code == "Tab" || e.key == "/" || e.key == "'" || e.code == "Backspace" || e.key == 'Backspace') && gameOutputFieldBottom > window.pageYOffset) {
    e.preventDefault();
  }
});

// ------------------
// game instructions things
// ------------------

let areGameInstructionsOpen = false;
// click game instructions open btn
$("#game-instructions-open").click(function () {
  // remove new easter egg notification icon 
  document.getElementById('game-notification').classList.add('w3-hide');
  // show easter egg collection
  document.getElementById('game-instructions-wrapper').classList.remove('not-visible');
  areGameInstructionsOpen = true;
});
// close game instructions (by clicking close button)
$("#game-instructions-close").click(function () {
  document.getElementById('game-instructions-wrapper').classList.add('not-visible');
  areGameInstructionsOpen = false;
})
// close game instructions (by Esc)
$(window).on({
  'keydown': function (e) {
    if (areGameInstructionsOpen && e.code == 'Escape') {
      document.getElementById('game-instructions-wrapper').classList.add('not-visible');
      areGameInstructionsOpen = false;
    }
  }
});
// click to get hints for easter eggs
$('.easter-egg-hint').click(function () {
  $(this).next().removeClass('w3-hide');
  $(this).remove()
})

// key press effect (click only) in game instructions
$("#game-instructions .keyboard-keycap").mousedown(function () {
  // become pressed, add rgb color
  $(this).parent().addClass('pressed');
}).mouseup(function () {
  // not pressed anymore
  $(this).parent().removeClass('pressed');
}).mouseleave(function () {
  // not pressed anymore
  $(this).parent().removeClass('pressed');
})
