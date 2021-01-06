/**
 * Author: FISH UP
 * https://array30.misterfishup.com/
 * Copyright © 2020-2021 FISH UP Dictionary of Array
 * Date: 2021-01-06(07)
 */

/* structure:
  - key tables
  - game instructions window
  - visualisation of Array method
    ├ change game's output status
    ├ code examples block content
    └ detect code examples '
  - style change
    ├ style options and commands
    ├ content creation in game instructions '
    ├ style initialisation '
    ├ change style '
    └ detect command (and change style)
  - Easter eggs '
    ├ show hint, egg, congrats
    ├ unlock all eggs
    ├ click to get hints
    └ close congrats modal
  - interaction with keyboard
*/


/* ============
    KEY TABLES
  ============= */

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

/* ==========================
    GAME INSTRUCTIONS WINDOW
  =========================== */

let areGameInstructionsOpen = false;

// click game instructions open btn
$("#game_instructions-open").click(function () {
  $('#game-notification').addClass('w3-hide'); // remove game notification
  $('#game_instructions-wrapper').removeClass('not-visible'); // show game instructions window
  areGameInstructionsOpen = true;
})

function closeGameInstructions() {
  $('#game_instructions-wrapper').addClass('not-visible');
  areGameInstructionsOpen = false;
}

// close game instructions: by clicking close button/pressing Esc
$("#game_instructions-close").click(closeGameInstructions);
$(window).on({
  'keydown': function (e) {
    if (areGameInstructionsOpen && e.code == 'Escape') {
      closeGameInstructions();
    }
  }
})

/* ===============================
    VISUALISATION OF ARRAY METHOD
  ================================ */

// #####[ change game's output status ]#####

var gameOutputFieldElem = document.getElementById('game-output_field');

// ----- main function -----
function changeGameOutputStatus(eventCodeLowerCase) {
  if (eventCodeLowerCase == 'backspace') {
    gameBackspace();
  } else if (keyCodeTable.hasOwnProperty(eventCodeLowerCase)) {
    gameAdd(eventCodeLowerCase);
    gameDetectCode(eventCodeLowerCase);
  }
  gameAutoClear();
}

// delete last elem (if existing) in the game output field
function gameBackspace() {
  if (gameOutputFieldElem.lastChild) {
    gameOutputFieldElem.removeChild(gameOutputFieldElem.lastChild);
  }
}

// add key to the output field
function gameAdd(eventCodeLowerCase) {
  const keyArray = keyCodeTable[eventCodeLowerCase]['array30'];
  const keyType = keyCodeTable[eventCodeLowerCase]['type'];
  $('#game-output_field').append('<span style="margin-right: 4px" class="w3-animate-right keycap keycap-' + keyType + '">' + keyArray + '</span>');
}

const characterColor = 'white';
function fadeOutThenRemove(jqueryObject) {
  jqueryObject.delay(400).fadeOut("normal", function () {
    $(this).remove();
  })
}
function transformIntoChar(jqueryObject, character) {
  jqueryObject.delay(400).fadeOut("normal", function () {
    $(this).text(character).removeAttr('class').css({ 'color': characterColor });
    $(this).fadeIn();
  })
}

// detect codes and transform into character
function gameDetectCode(eventCodeLowerCase) {
  if (keyCodeTable[eventCodeLowerCase]['type'] == 'number') { // for short codes
    const numberString = eventCodeLowerCase.slice(-1);
    const children = $('#game-output_field span');
    const thirdLastChild = children.last().prev().prev();
    const secondLastChild = children.last().prev();
    const thirdLastText = thirdLastChild.text();
    const secondLastText = secondLastChild.text();
    let hasNoShortCode2 = true;

    // detect short code 2: get the possible sc2, and convert it into character if it's a valid sc2
    if (children.length >= 3 && array30ToLetterDict.hasOwnProperty(thirdLastText) && array30ToLetterDict.hasOwnProperty(secondLastText)) {
      const possibleShortCode2 = array30ToLetterDict[thirdLastText] + array30ToLetterDict[secondLastText] + numberString;
      if (objectKeyShortCode2.hasOwnProperty(possibleShortCode2)) {
        transformIntoChar(thirdLastChild, objectKeyShortCode2[possibleShortCode2]);
        fadeOutThenRemove(secondLastChild);
        fadeOutThenRemove(children.last());
        hasNoShortCode2 = false;
      }
    }

    // detect short code 1: get the possible sc1, and convert it into character if it's a valid sc1
    if (hasNoShortCode2 && children.length >= 2 && array30ToLetterDict.hasOwnProperty(secondLastText)) {
      const possibleShortCode1 = array30ToLetterDict[secondLastText] + numberString;
      if (objectKeyShortCode1.hasOwnProperty(possibleShortCode1)) {
        transformIntoChar(secondLastChild, objectKeyShortCode1[possibleShortCode1]);
        fadeOutThenRemove(children.last());
      }
    }
  } else if (eventCodeLowerCase == 'space') { // for codes that aren't short codes
    const children = $('#game-output_field span');
    const nthLastChild = [
      children.last(), // index 0: any jquery object (not used)
      children.last(),
      children.last().prev(), // ex: index 2 -> second last child
      children.last().prev().prev(),
      children.last().prev().prev().prev(),
      children.last().prev().prev().prev().prev(),
      children.last().prev().prev().prev().prev().prev(),
    ];
    const nthLastText = nthLastChild.map(v => v.text());
    let hasNoCodeLengthN = Array(6).fill(true);

    function gameDetectCodeOfLength(n) {
      if (children.length >= (n + 1) && hasNoCodeLengthN.slice(n + 1).every(x => x)) {
        if (nthLastText.slice(2, n + 2).every(x => array30ToLetterDict.hasOwnProperty(x))) {
          // get the possible code, and convert it into character if it's a valid code
          const possibleCode = nthLastText.slice(2, n + 2).map(x => array30ToLetterDict[x]).reverse().join('');
          if (objectDropCoincidentCode.hasOwnProperty(possibleCode)) {
            transformIntoChar(nthLastChild[n + 1], objectDropCoincidentCode[possibleCode]);
            for (let i = n; i > 0; i--) {
              fadeOutThenRemove(nthLastChild[i]);
            }
            hasNoCodeLengthN[n] = false;
          }
        }
      }
    }

    for (let i = 5; i > 0; i--) {
      gameDetectCodeOfLength(i);
    }
  }
}

// clear the game output field when it's too wide
function gameAutoClear() {
  // get static children
  let children = document.querySelectorAll('#game-output_field span');

  // calculate gameOutputField width (4 is the margin-right of each child)
  let gameOutputFieldWidth = [...children].map(x => x.offsetWidth + 4).reduce((a, b) => a + b, 0);

  // if game output field too wide
  // 820 = 880 (= game area width) - 50 (= game instrucitons open button) - 10
  if (gameOutputFieldWidth > 820) {
    // clear game output field 
    for (let i = 0; i < children.length; i++) {
      gameOutputFieldElem.removeChild(children[i]);
    }
    // clear all code example states
    codeExamplesState = Array(codeExamples.length).fill('');
  }
}

// #####[ code examples block content ]#####

// The order of codes in the list is important.
// If code A is a suffix of code B, code A needs to be placed before code B.
// See the function 'detectCodeExamples for implementation details.
// Format: code + character (use only utf-8 characters, don't include utf-16 (ex: very rare characters)
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
  g.id = codeWithCharacter.replace(/ /g, "_"); // the code with space replaced by underscore
  icon = document.createElement('span');
  icon.className = 'codeExampleIcon';
  icon.textContent = '🕹️'; // could be changed by commands
  g.appendChild(icon);
  g.innerHTML += '&nbsp;';
  for (i = 0; i < codeLength - 1; i++) {
    arrayKey = document.createElement('span');
    arrayKey.className = 'keycap keycap-letter';
    arrayKey.textContent = letterToArray30Dict[codeWithCharacter[i]];
    g.appendChild(arrayKey);
    plus = document.createTextNode(" + ");
    g.appendChild(plus);
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
  become = document.createTextNode(' = ' + character);
  g.appendChild(become);
  document.getElementById(elemId).appendChild(g);
}

// create code examples on the web page
codeExamples.forEach(function (code, index) {
  if (index % 2 === 0) {
    addCodeExamples(code, 'code_examples-left');
  } else {
    addCodeExamples(code, 'code_examples-right');
  }
})

// toggle code examples block
$('#code_examples-toggle').click(function () {
  $('#code_examples-block').toggleClass('w3-hide');
  $(this).children().toggleClass('w3-hide');
})

// #####[ detect code examples ' ]#####

// return the list of updated states and largest index of completed command (-1 if no command completed)
function updateCmdState(listOfCmds, listOfStatesBeforeUpdate, ch) {
  let index = -1;
  let temp = [...listOfStatesBeforeUpdate]; // list of strings, shallow copy ok
  listOfCmds.forEach(function (cmd, i) {
    if (ch == cmd[temp[i].length]) {
      temp[i] += ch;
    } else if (ch == cmd[0]) {
      temp[i] = cmd[0];
    } else {
      temp[i] = '';
    }
    if (temp[i] == cmd) {
      index = i;
    }
  })
  return { 'updatedStates': temp, 'index': index };
}

// initialise codeExamplesState
let codeExamplesState = Array(codeExamples.length).fill('');

// detect code examples and make the corresponding elem a bit transparent
function detectcodeExamples(eventCodeLowerCase) {
  if (keyCodeTable.hasOwnProperty(eventCodeLowerCase)) {
    const ch = keyCodeTable[eventCodeLowerCase].char;
    let x = updateCmdState(codeExamples.map(x => x.slice(0, -1)), codeExamplesState, ch);
    codeExamplesState = x.updatedStates;
    const i = x.index;
    if (i >= 0) {
      document.getElementById(codeExamples[i].replace(/ /g, "_")).style.opacity = "0.25"; // make the example code's DOM a bit transparent
      codeExamplesState[i] = '';
    }
  } else {
    // in this case eventCodeLowerCase is not a key in keyCodeTable, so reinitialise all states
    codeExamplesState = Array(codeExamples.length).fill('');
  }
}

/* ==============
    STYLE CHANGE
  =============== */

// By entering certain commands, we can change the style of
//  - bg (header background)
//  - kb base (keyboard base): border, keyArea
//  - key (keycap): .n_key, .f_key, .s_key, .backspace, .enter_key, .space_bar
//  - text (keycap text): .n_key, .backspace, .s_key
//  - pressed key
// or the style set (bg + kb base + key + text + pressed key).

// The style of kb base, key, text can be changed only by changing the style set.
// The style of bg or pressed key can be changed independently of other components.
// The first ten pressed key styles are considered as Easter eggs.

// PS:
//  - bg can be changed only by changing the style set for the moment
//  - the code example icon can also be changed (by pressed key style for the moment)

// #####[ style options and commands ]#####

// The order of items in the following lists is important:
//  - stylePressedKeyOptions
//  - cmdDefaultStylePressedKey
//  - values of cmdStylePressedKey
//  - styleSetOptions
//  - cmdList(s) in styleSetOptions (which give rise to cmdStyleSet)

// If command A is a suffix of command B, the corresponding
// style A needs to be placed before style B, and 
// command A needs to be placed before command B.
// Notice also the priority:
// cmdDefaultStylePressedKey < values of cmdStylePressedKey (w.r.t. stylePressedKeyOptions)
// See the function 'detectCmdStyle' for implementation details.

// class name:
//  - bg_style-[item]
//  - kb_base_style-[item]
//  - key_style-[item]
//  - text_style-[item] (item starting with 'o-': opaque (not translucent); item 'none': text not visible)
//  - pressed_key_style-[item]

// Add new style:
//  - css file (virtual-keyboard.css)
//  - style options/commands/info:
//    > style(Bg|KbBase|Key|Text|PressedKey|Set)Options
//    > cmdStylePressedKey
//    > stylePressedKeyInfo
//  - consider updating changeCodeExampleIcon
//  - if > 99 style sets, set cmdDigitLength = 3

const styleBgOptions = [ // just a reminder, not used in the code for the moment
  // pink
  'hot_pink',
  // yellow
  'shiny_yellow',
  // green
  'silver_tree',
  // blue
  'sf_emerald',
  'bunting',
  'good_blue',
  'voyage_blue',
  // purple
  'bright_lilac',
  'creator_purple',
  // gray
  'light_gray',
  'light_silver',
  'dark_slver',
  'emperor',
  'dark',
  // to be changed
  'change1',
  'change2',
];
const styleKbBaseOptions = [
  // white-gray-black
  'white',
  'gainsboro',
  'dark_gray',
  'emperor',
  'limed_spruce',
  'mine_shaft',
  'black',
  // pink
  'carnation_pink',
  // yellow
  'salomie',
  // blue
  'ming',
  'chambray',
  'viking-appr',
  'cornflower-appr',
  'rhino',
  // purple
  'melanie',
  'grape',
  // brown
  'beaver',
];
const styleKeyOptions = [
  // pink
  'carnation_pink',
  'vanilla_ice',
  // red
  'carnation',
  'roman',
  // orange
  'coral',
  // yellow
  'salomie',
  'bright_sun',
  // green
  'razer_green',
  'llama_green',
  'riptide',
  // blue
  'blizzard_blue',
  'cornflower-appr',
  'scooter',
  'mosque',
  'picton_blue',
  'havelock_blue',
  'chambray',
  'fiord',
  // purple
  'melanie',
  'fuchsia_pink',
  'blue_marguerite-appr',
  'orchid',
  'trendy_pink',
  // gray
  'regent_gray',
  'silver_chalice',
  'jumbo-appr',
  // black
  'limed_spruce',
  'emperor',
  'river_bed',
  'shark',
  // white
  'white',
  // combinations
  'keychron_k6-light',
  'keychron_k6-dark',
  'ducky_one_2_razer',
];
const styleTextOptions = [
  'none',
  // pink
  'persian_pink', 'o-persian_pink',
  'brink_pink', 'o-brink_pink',
  'brilliant_rose', 'o-brilliant_rose',
  // yellow
  'bright_sun', 'o-bright_sun',
  // green
  'riptide', 'o-riptide',
  'aquamarine', 'o-aquamarine',
  // blue
  'spray', 'o-spray',
  'havelock_blue', 'o-havelock_blue',
  // gray
  'loblolly', 'o-loblolly',
  // black
  'limed_spruce', 'o-limed_spruce',
  'black', 'o-black',
  // white
  'white', 'o-white',
];
const stylePressedKeyOptions = [
  'pink_bl', 'yellow_bl', 'green_bl', 'blue_bl', 'purple_bl',
  'all_white', 'hidden', 'flashing_bl', 'blurred', 'special',
  'none',
  'red_bl',
  'dark_orange_bl',
  'wheat_bl',
  'forest_green_bl',
  'turquoise_bl',
  'light_gray_bl',
  'dim_gray_bl',
  'sakura',
  'banana',
  'turtle',
  'alien',
]; // order important

const cmdDefaultStylePressedKey = [
  /* Hey, you're NOT supposed to be reading these commands,
  try finding them ON YOUR OWN! (You'll be well guided) */
  'default', 'defqult', 'd2fqut', 'defaut',
  'bgdm ysb ', 'bg3ysb ', 'bgdm ys5', 'bg3ys5', // 行列 預設
  '0987654321', // turn off all_white
  'poiuytrewq', 'poiuytreza', // turn off hidden
  'showing', 'montre', ';ontr2', // turn off hidden
  'pxxm aac ', // turn off hidden (行列 顯示)
  'vu03g4', // turn off hidden (注音 顯示)
  'xian shi', // turn off hidden (拼音 顯示)
  ';lkjhgfdsa', 'mlkjhgfdsq', // turn off flashing_bl
  '/.,mnbvcxz', '!:;,nbvcxw', // turn off blurred
];
const cmdStylePressedKey = {
  /* Hey, you're NOT supposed to be reading these commands,
  try finding them ON YOUR OWN! (You'll be well guided) */
  pink_bl: [
    'pink', 'rose',
    ',k7j9', ',k7jt3', ',k7jtds ', ',k7j9', ',k7jt3', ',k7jtds ', ',kj j9', ',kj jt3', ',kj jtds ', ',kj j9', ',kj jt3', ',kj jtds ', // 行列 粉色
    'zp3nk4', 'fen se', // 注音拼音 粉色
    ',k7xq1j9', ',k7xq1jt3', ',k7xq1jtds ', ',k7xq j9', ',k7xq jt3', ',k7xq jtds ', ',kj xq1j9', ',kj xq1jt3', ',kj xq1jtds ', ',kj xq j9', ',kj xq jt3', ',kj xq jtds ', // 行列 粉紅色
    'zp3cj/6nk4', 'fen hong se' // 注音拼音 粉紅色
  ],
  yellow_bl: [
    'yellow', 'jaune', 'jqune',
    'rp8j9', 'rp8jt3', 'rp8jtds ', 'rpfk j9', 'rpfk jt3', 'rpfk jtds ', 'rpk j9', 'rpk jt3', 'rpk jtds ', // 行列
    'cj;6nk4', 'huang se' // 注音拼音
  ],
  green_bl: [
    'green', 'vert',
    'xw3j9', 'xw3jt3', 'xw3jtds ', 'xwc j9', 'xwc jt3', 'xwc jtds ', // 行列
    'xm4nk4', 'lu se' // 注音拼音
  ],
  blue_bl: [
    'blue', 'bleu',
    'fqdu j9', 'fqdu jt3', 'fqdu jtds ', // 行列
    'x06nk4', 'lan se' // 注音拼音
  ],
  purple_bl: [
    'purple', 'violet',
    'eqx j9', 'eqx jt3', 'eqx jtds ', // 行列
    'y3nk4', 'zi se', // 注音拼音
  ],
  /* Hey, you're NOT supposed to be reading these commands,
  try finding them ON YOUR OWN! (You'll be well guided) */
  all_white: [
    '1234567890', // 0987654321 to turn off
    'all white', 'qll white', 'tout blanc', 'tout blqnc', 'toute blanche', 'toute blqnche',
    'ir1lp1', 'ir1lp ', 'ir lp1', 'ir lp ', // 行列 全白
    'fm06196', 'quan bai'// 注音拼音 全白
  ],
  hidden: [
    'qwertyuiop', 'azertyuiop', // poiuytrewq poiuytreza to turn off
    'disappearing', 'disqppeqring', 'disqppeqred', 'disappeared', 'disparu', 'dispqru',
    'hidden', 'cache', 'cqch2',
    'cc7oz1', 'cc7oz ', 'ccu oz1', 'ccu oz ', // 行列 消失
    't.qn faxx ', 't.qn fxax ', 't.qn fzsx', // 行列 隱藏
    'vul g ', 'xiao shi', // 注音拼音 消失
    'up3h;6', 'yin cang' // 注音拼音 隱藏
  ],
  flashing_bl: [
    'asdfghjkl;', 'qsdfghjklm', // ;lkjhgfdsa mlkjhgfdsq to turn off
    'flashing', 'flqshing', 'clignotant', 'clignotqnt',
    'ek1,lpv ', 'ek1,xlv ', 'ek ,lpv ', 'ek ,xlv ', // 行列 閃爍
    'g03gji4', 'shan shuo'  // 注音拼音 閃爍
  ],
  blurred: [
    'zxcvbnm,./', 'wxcvbn,;:!', // /.,mnbvcxz !:;,nbvcxw to turn off
    'blurred', 'flou',
    'vfpz ,f0', 'vfpz ,f;u ', // 行列 模糊
    'ai6cj6', 'mo hu',// 注音拼音 模糊
    'g,1nm f;2', 'g,1nm f;s ', 'g,1nr8f;2', 'g,1nr8f;s ', 'g,1nrkm f;2', 'g,1nrkm f;s ', 'g, nm f;2', 'g, nm f;s ', 'g, nr8f;2', 'g, nr8f;s ', 'g, nrkm f;2', 'g, nrkm f;s ', // 行列 馬賽克
    'a83n94dk4', 'ma sai ke' // 注音拼音 馬賽克
  ],
  special: [
    'fish up', 'array', 'qrrqy', 'tableau', 'tqblequ',
    '.3ame ', '.aad ame ' // 行列 行列
  ],
  /* Hey, you're NOT supposed to be reading these commands,
  try finding them ON YOUR OWN! (You'll be well guided) */
  none: [
    'no backlight', 'no bqcklight', 'pas de retro eclarage', 'pqs de r2tro 2clqrqge',
    'or, equ cas ' // 行列 無背光
  ],
  red_bl: [
    'bright red', 'rouge vif',
    'y;js xq jtds ' // 行列 亮紅色
  ],
  dark_orange_bl: [
    'dark orange', 'dqrk orqnge', 'orange fonc2', 'orange fonce',
    'cj8vb5jt3', // 行列 深橘色（二級）
  ],
  wheat_bl: [
    'wheat', 'zheqt', 'couleur du bl2', 'couleur du ble',
    'c1fk8j9', 'c1fk8jt3' // 行列 小麥色（簡碼）
  ],
  forest_green_bl: [
    'forest green', 'vert foret',
    'vv4vv1xw3' // 行列 森林綠（二級）
  ],
  /* Hey, you're NOT supposed to be reading these commands,
  try finding them ON YOUR OWN! (You'll be well guided) */
  turquoise_bl: [
    'turquoise',
    'xw3vk2jt3' // 行列 綠松色（二級）
  ],
  light_gray_bl: [
    'light gray', 'light grey', 'light grqy', 'gris clqir', 'gris clair',
    'caxx z, jtds '
  ],
  dim_gray_bl: [
    'dim gray', 'dim grey', 'dim grqy', 'gris sombre', "gris so;bre",
    'pyp z, jtds '
  ],
  sakura: [
    'sakura', 'cherry blossom', 'sqkurq', 'fleur de cerisier',
    'vmmw fkq ' // 行列 櫻花
  ],
  banana: [
    'banana', 'bqnqnq', 'banane', 'bqnqne',
    'lvp fky, ' // 行列 香蕉
  ],
  /* Hey, you're NOT supposed to be reading these commands,
  try finding them ON YOUR OWN! (You'll be well guided) */
  turtle: [
    'turtle', 'tortue',
    'l,2jj1' // 行列 烏龜 (二級簡碼)
  ],
  alien: [
    'alien', 'qlien', 'extraterrestre', 'extrqterrestre',
    'mc por k ' // 行列 外星人
  ],
};
const stylePressedKeyInfo = {
  pink_bl: {
    name: { tw: '粉紅色背光', en: 'Pink backlight', fr: 'Rétro-éclairage rose' },
    instructions: {
      tw: "按下行列（或注音、拼音）輸入法中「<span class='cmd'>粉紅色</span>」三字或「<span class='cmd'>粉色</span>」兩字的鍵位、按下英文字 '<span class='cmd'>pink</span>' 的鍵位、按下法文字 « <span class='cmd'>rose</span> » 的鍵位",
      en: "Type the Chinese word '<span class='cmd'>粉紅色</span>' or '<span class='cmd'>粉紅</span>' with the Array input method (or Bopomofo, or Pinyin); type the English word '<span class='cmd'>pink</span>'; type the French word '<span class='cmd'>rose</span>'",
      fr: "Tapez le mot chinois « <span class='cmd'>粉紅色</span> » ou « <span class='cmd'>粉色</span> » avec la méthode Tableau (ou Bopomofo, ou Pinyin) ; tapez le mot anglais « <span class='cmd'>pink</span> » ; tapez le mot français « <span class='cmd'>rose</span> »"
    }
  },
  yellow_bl: {
    name: { tw: '黃色背光', en: 'Yellow backlight', fr: 'Rétro-éclairage jaune' },
    instructions: {
      tw: "按下行列（或注音、拼音）輸入法中「<span class='cmd'>黃色</span>」兩字的鍵位、按下英文字 '<span class='cmd'>yellow</span>' 的鍵位、按下法文字 « <span class='cmd'>jaune</span> » 的鍵位",
      en: "Type the Chinese word '<span class='cmd'>黃色</span>' with the Array input method (or Bopomofo, or Pinyin); type the English word '<span class='cmd'>yellow</span>'; type the French word '<span class='cmd'>jaune</span>'",
      fr: "Tapez le mot chinois « <span class='cmd'>黃色</span> » avec la méthode Tableau (ou Bopomofo, ou Pinyin) ; tapez le mot anglais « <span class='cmd'>yellow</span> » ; tapez le mot français « <span class='cmd'>jaune</span> »"
    }
  },
  green_bl: {
    name: { tw: '綠色背光', en: 'Green backlight', fr: 'Rétro-éclairage vert' },
    instructions: {
      tw: "按下行列（或注音、拼音）輸入法中「<span class='cmd'>綠色</span>」兩字的鍵位、按下英文字 '<span class='cmd'>green</span>' 的鍵位、按下法文字 « <span class='cmd'>vert</span> » 的鍵位",
      en: "Type the Chinese word '<span class='cmd'>綠色</span>' with the Array input method (or Bopomofo, or Pinyin); type the English word '<span class='cmd'>green</span>'; type the French word '<span class='cmd'>vert</span>'",
      fr: "Tapez le mot chinois « <span class='cmd'>綠色</span> » avec la méthode Tableau (ou Bopomofo, ou Pinyin) ; tapez le mot anglais « <span class='cmd'>green</span> » ; tapez le mot français « <span class='cmd'>vert</span> »"
    }
  },
  blue_bl: {
    name: { tw: '藍色背光', en: 'Blue backlight', fr: 'Rétro-éclairage bleu' },
    instructions: {
      tw: "按下行列（或注音、拼音）輸入法中「<span class='cmd'>藍色</span>」兩字的鍵位、按下英文字 '<span class='cmd'>blue</span>' 的鍵位、按下法文字 « <span class='cmd'>bleu</span> » 的鍵位",
      en: "Type the Chinese word '<span class='cmd'>藍色</span>' with the Array input method (or Bopomofo, or Pinyin); type the English word '<span class='cmd'>blue</span>'; type the French word '<span class='cmd'>bleu</span>'",
      fr: "Tapez le mot chinois « <span class='cmd'>藍色</span> » avec la méthode Tableau (ou Bopomofo, ou Pinyin) ; tapez le mot anglais « <span class='cmd'>blue</span> » ; tapez le mot français « <span class='cmd'>bleu</span> »"
    }
  },
  purple_bl: {
    name: { tw: '紫色背光', en: 'Purple backlight', fr: 'Rétro-éclairage violet' },
    instructions: {
      tw: "按下行列（或注音、拼音）輸入法中「<span class='cmd'>紫色</span>」兩字的鍵位、按下英文字 '<span class='cmd'>purple</span>' 的鍵位、按下法文字 « <span class='cmd'>violet</span> » 的鍵位",
      en: "Type the Chinese word '<span class='cmd'>紫色</span>' with the Array input method (or Bopomofo, or Pinyin); type the English word '<span class='cmd'>purple</span>'; type the French word '<span class='cmd'>violet</span>'",
      fr: "Tapez le mot chinois « <span class='cmd'>紫色</span> » avec la méthode Tableau (ou Bopomofo, ou Pinyin) ; tapez le mot anglais « <span class='cmd'>purple</span> » ; tapez le mot français « <span class='cmd'>violet</span> »"
    }
  },
  all_white: {
    name: { tw: '全白', en: 'All white', fr: 'Tout blanc' },
    instructions: {
      tw: `<ul>
        <li>照順序按下數字鍵 <span class='cmd'>1234567890</span>（若<span class='cmd'>順序顛倒</span>地按下則恢復預設狀態）</li>
        <li>按下行列（或注音、拼音）輸入法中「<span class='cmd'>全白</span>」兩字的鍵位、按下英文字 '<span class='cmd'>all white</span>' 的鍵位、按下法文字 « <span class='cmd'>tout blanc</span> »（或 « <span class='cmd'>toute blanche</span> »）的鍵位</li>
      </ul>`,
      en: `<ul>
        <li>Press the number keys <span class='cmd'>1234567890</span> in order (and in <span class='cmd'>reverse order</span> to return to the default state)</li>
        <li>Type the Chinese word '<span class='cmd'>全白</span>' with the Array input method (or Bopomofo, or Pinyin); type the English words '<span class='cmd'>all white</span>'; type the French words '<span class='cmd'>tout blanc</span>' (or '<span class='cmd'>toute blanche</span>')</li>
      </ul>`,
      fr: `<ul>
        <li>Appuyez sur les touches de chiffre <span class='cmd'>1234567890</span> dans l'ordre (et dans <span class='cmd'>l'ordre inverse</span> pour revenir à l'état par défaut)</li>
        <li>Tapez le mot chinois « <span class='cmd'>全白</span> » avec la méthode Tableau (ou Bopomofo, ou Pinyin) ; tapez les mots anglais « <span class='cmd'>all white</span> » ; tapez les mots français « <span class='cmd'>tout blanc</span> » (ou « <span class='cmd'>toute blanche</span> »)</li>
      </ul>`,
    }
  },
  hidden: {
    name: { tw: '消失/隱藏', en: 'Disappeared/hidden', fr: 'Disparu/caché' },
    instructions: {
      tw: `<ul>
        <li>照順序按下行列 30 鍵 <span class='cmd'>1 上到 0 上</span>這十顆鍵，即英文鍵 qwertyuiop（若<span class='cmd'>順序顛倒</span>地按下則恢復預設狀態）</li>
        <li>按下行列（或注音、拼音）輸入法中「<span class='cmd'>消失</span>」或「<span class='cmd'>隱藏</span>」兩字的鍵位（「<span class='cmd'>顯示</span>」兩字則恢復預設狀態）、按下英文字 '<span class='cmd'>disappearing</span>' 或 '<span class='cmd'>disappeared</span>' 或 '<span class='cmd'>hidden</span>' 的鍵位（'<span class='cmd'>showing</span>' 則恢復預設狀態）、按下法文字 « <span class='cmd'>disparu</span> » 或 « <span class='cmd'>caché</span> »（無尖音符也可）的鍵位（« <span class='cmd'>montré</span> »（無尖音符也可）則恢復預設狀態）</li>
      </ul>`,
      en: `<ul>
        <li>Press the 10 Array keys <span class='cmd'>'1 top', '2 top', ..., '0 top'</span> in order, i.e., the English keys qwertyuiop (and in <span class='cmd'>reverse order</span> to return to the default state)</li>
        <li>Type the Chinese word '<span class='cmd'>消失</span>' or '<span class='cmd'>隱藏</span>' with the Array input method (or Bopomofo, or Pinyin) (and '<span class='cmd'>顯示</span>' to return to the default state); type the English word '<span class='cmd'>disappearing</span>' or '<span class='cmd'>disappeared</span>' or '<span class='cmd'>hidden</span>' (and '<span class='cmd'>showing</span>' to return to the default state); type the French word '<span class='cmd'>disparu</span>' or '<span class='cmd'>caché</span>' (ok without the acute accent) (and '<span class='cmd'>montré</span>' (ok without the acute accent) to return to the default state)</li>
      </ul>`,
      fr: `<ul>
        <li>Appuyez sur les 10 touches Tableau <span class='cmd'>« 1 haut », « 2 haut », ..., « 0 haut »</span> dans l'ordre, c'est-à-dire les touches azertyuiop (et dans <span class='cmd'>l'ordre inverse</span> pour revenir à l'état par défaut)</li>
        <li>Tapez le mot chinois « <span class='cmd'>消失</span> » ou « <span class='cmd'>隱藏</span> » avec la méthode Tableau (ou Bopomofo, ou Pinyin) (et « <span class='cmd'>顯示</span> » pour revenir à l'état par défaut) ; tapez le mot anglais « <span class='cmd'>disappearing</span> » ou « <span class='cmd'>disappeared</span> » ou « <span class='cmd'>hidden</span> » (et « <span class='cmd'>showing</span> » pour revenir à l'état par défaut) ; tapez le mot français « <span class='cmd'>disparu</span> » ou « <span class='cmd'>caché</span> » (et « <span class='cmd'>montré</span> » pour revenir à l'état par défaut)</li>
      </ul>`,
    }
  },
  flashing_bl: {
    name: { tw: '閃爍', en: 'Flashing', fr: 'Clignotant' },
    instructions: {
      tw: `<ul>
        <li>照順序按下行列 30 鍵 <span class='cmd'>1 中到 0 中</span>這十顆鍵，即英文鍵 asdfghjkl;（若<span class='cmd'>順序顛倒</span>地按則恢復預設狀態）</li>
        <li>按下行列（或注音、拼音）輸入法中「<span class='cmd'>閃爍</span>」兩字的鍵位、按下英文字 '<span class='cmd'>flashing</span>' 的鍵位、按下法文字 « <span class='cmd'>clignotant</span> » 的鍵位</li>
      </ul>`,
      en: `<ul>
        <li>Press the 10 Array keys <span class='cmd'>'1 middle', '2 middle', ..., '0 middle'</span> in order, i.e., the English keys asdfghjkl; (and in <span class='cmd'>reverse order</span> to return to the default state)</li>
        <li>Type the Chinese word '<span class='cmd'>閃爍</span>' with the Array input method (or Bopomofo, or Pinyin); type the English word '<span class='cmd'>flashing</span>'; type the French word '<span class='cmd'>clignotant</span>'</li>
      </ul>`,
      fr: `<ul>
        <li>Appuyez sur les 10 touches Tableau <span class='cmd'>« 1 milieu », « 2 milieu », ..., « 0 milieu »</span> dans l'ordre, c'est-à-dire les touches qsdfghjklm (et dans <span class='cmd'>l'ordre inverse</span> pour revenir à l'état par défaut)</li>
        <li>Tapez le mot chinois « <span class='cmd'>閃爍</span> » avec la méthode Tableau (ou Bopomofo, ou Pinyin) ; tapez le mot anglais « <span class='cmd'>flashing</span> » ; tapez le mot français « <span class='cmd'>clignotant</span> »</li>
      </ul>`,
    }
  },
  blurred: {
    name: { tw: '模糊', en: 'Blurred', fr: 'Flou' },
    instructions: {
      tw: `<ul>
        <li>照順序按下行列 30 鍵 <span class='cmd'>1 下到 0 下</span>這十顆鍵，即英文鍵 zxcvbnm,./（若<span class='cmd'>順序顛倒</span>地按則恢復預設狀態）</li>
        <li>按下行列（或注音、拼音）輸入法中「<span class='cmd'>模糊</span>」兩字或「<span class='cmd'>馬賽克</span>」三字的鍵位、按下英文字 '<span class='cmd'>blurred</span>' 的鍵位、按下法文字 « <span class='cmd'>flou</span> » 的鍵位</li>
      </ul>`,
      en: `<ul>
        <li>Press the 10 Array keys <span class='cmd'>'1 bottom', '2 bottom', ..., '0 bottom'</span> in order, i.e., the English keys zxcvbnm,./ (and in <span class='cmd'>reverse order</span> to return to the default state)</li>
        <li>Type the Chinese word '<span class='cmd'>模糊</span>' or '<span class='cmd'>馬賽克</span>' with the Array input method (or Bopomofo, or Pinyin); type the English word '<span class='cmd'>blurred</span>'; type the French word '<span class='cmd'>flou</span>'</li>
      </ul>`,
      fr: `<ul>
        <li>Appuyez sur les 10 touches Tableau <span class='cmd'>« 1 bas », « 2 bas », ..., « 0 bas »</span> dans l'ordre, c'est-à-dire les touches wxcvbn,;:! (et dans <span class='cmd'>l'ordre inverse</span> pour revenir à l'état par défaut)</li>
        <li>Tapez le mot chinois « <span class='cmd'>模糊</span> » ou « <span class='cmd'>馬賽克</span> » avec la méthode Tableau (ou Bopomofo, ou Pinyin) ; tapez le mot anglais « <span class='cmd'>blurred</span> » ; tapez le mot français « <span class='cmd'>flou</span> »</li>
      </ul>`,
    }
  },
  special: {
    name: { tw: '特別彩蛋', en: 'Special Easter Egg', fr: 'Œuf de Pâques spécial' },
    instructions: {
      tw: `註：請按空白鍵看看！
      <ul>
        <li>按下行列輸入法中「<span class='cmd'>行列</span>」兩字的鍵位、按下英文字 '<span class='cmd'>array</span>' 的鍵位、按下法文字 « <span class='cmd'>tableau</span> » 的鍵位</li>
        <li>按下英文字 '<span class='cmd'>fish up</span>' 的鍵位</li>
      </ul>`,
      en: `Note: Press the space bar to see a message for you!
      <ul>
        <li>Type the Chinese word '<span class='cmd'>行列</span>' with the Array input method; type the English word '<span class='cmd'>array</span>'; type the French word '<span class='cmd'>tableau</span>'</li>
        <li>Type the English words '<span class='cmd'>fish up</span>'</li>
      </ul>`,
      fr: `NB : Appuyez sur la barre d'espace pour voir un message pour vous !
      <ul>
        <li>Tapez le mot chinois « <span class='cmd'>行列</span> » avec la méthode Tableau ; tapez le mot anglais « <span class='cmd'>array</span> » ; tapez le mot français « <span class='cmd'>tableau</span> »</li>
        <li>Tapez les mots anglais « <span class='cmd'>fish up</span> »</li>
      </ul>`,
    }
  },
  none: {
    name: { tw: '無背光', en: 'No backlight', fr: 'Pas de rétro-éclairage' },
    instructions: {
      tw: "按下行列輸入法中「<span class='cmd'>無背光</span>」三字的鍵位（限普通編碼）、按下英文字 '<span class='cmd'>no backlight</span>' 的鍵位、按下法文字 « <span class='cmd'>pas de rétro éclairage</span> »（無尖音符也可）的鍵位",
      en: "Type the Chinese word '<span class='cmd'>無背光</span>' with the Array input method (standard codes only); type the English words '<span class='cmd'>no backlight</span>'; type the French words '<span class='cmd'>pas de rétro éclairage</span>' (ok without the acute accent)",
      fr: "Tapez le mot chinois « <span class='cmd'>無背光</span> » avec la méthode Tableau (codes standard uniquement) ; tapez les mots anglais « <span class='cmd'>no backlight</span> » ; tapez les mots français « <span class='cmd'>pas de rétro éclairage</span> »"
    }
  },
  red_bl: {
    name: { tw: '亮紅色背光', en: 'Bright red backlight', fr: 'Rétro-éclairage rouge vif' },
    instructions: {
      tw: "按下行列輸入法中「<span class='cmd'>亮紅色</span>」三字的鍵位（限普通編碼）、按下英文字 '<span class='cmd'>bright red</span>' 的鍵位、按下法文字 « <span class='cmd'>rouge vif</span> » 的鍵位",
      en: "Type the Chinese word '<span class='cmd'>亮紅色</span>' with the Array input method (standard codes only); type the English words '<span class='cmd'>bright red</span>'; type the French words '<span class='cmd'>rouge vif</span>'",
      fr: "Tapez le mot chinois « <span class='cmd'>亮紅色</span> » avec la méthode Tableau (codes standard uniquement) ; tapez les mots anglais « <span class='cmd'>bright red</span> » ; tapez les mots français « <span class='cmd'>rouge vif</span> »"
    }
  },
  dark_orange_bl: {
    name: { tw: '深橘色背光', en: 'Dark orange backlight', fr: 'Rétro-éclairage orange foncé' },
    instructions: {
      tw: "按下行列輸入法中「<span class='cmd'>深橘色</span>」三字的鍵位（限二級簡碼）、按下英文字 '<span class='cmd'>dark orange</span>' 的鍵位、按下法文字 « <span class='cmd'>orange foncé</span> »（無尖音符也可）的鍵位",
      en: "Type the Chinese word '<span class='cmd'>深橘色</span>' with the Array input method (short codes II only); type the English words '<span class='cmd'>dark orange</span>'; type the French words '<span class='cmd'>orange foncé</span>' (ok without the acute accent)",
      fr: "Tapez le mot chinois « <span class='cmd'>深橘色</span> » avec la méthode Tableau (codes courts II uniquement) ; tapez les mots anglais « <span class='cmd'>dark orange</span> » ; tapez les mots français « <span class='cmd'>orange foncé</span> »"
    }
  },
  wheat_bl: {
    name: { tw: '小麥色背光', en: 'Wheat backlight', fr: 'Rétro-éclairage de couleur du blé' },
    instructions: {
      tw: "按下行列輸入法中「<span class='cmd'>小麥色</span>」三字的鍵位（限簡碼）、按下英文字 '<span class='cmd'>wheat</span>' 的鍵位、按下法文字 « <span class='cmd'>couleur du blé</span> »（無尖音符也可）的鍵位",
      en: "Type the Chinese word '<span class='cmd'>小麥色</span>' with the Array input method (short codes only); type the English word '<span class='cmd'>wheat</span>'; type the French words '<span class='cmd'>couleur du blé</span>' (ok without the acute accent)",
      fr: "Tapez le mot chinois « <span class='cmd'>小麥色</span> » avec la méthode Tableau (codes courts uniquement) ; tapez le mot anglais « <span class='cmd'>wheat</span> » ; tapez les mots français « <span class='cmd'>couleur du blé</span> »"
    }
  },
  forest_green_bl: {
    name: { tw: '森林綠背光', en: 'Forest green backlight', fr: 'Rétro-éclairage vert forêt' },
    instructions: {
      tw: "按下行列輸入法中「<span class='cmd'>森林綠</span>」三字的鍵位（限二級簡碼）、按下英文字 '<span class='cmd'>forest green</span>' 的鍵位、按下法文字 « <span class='cmd'>vert foret</span> »（無揚抑符）的鍵位",
      en: "Type the Chinese word '<span class='cmd'>森林綠</span>' with the Array input method (short codes II only); type the English words '<span class='cmd'>forest green</span>'; type the French words '<span class='cmd'>vert foret</span>' (without the circumflex)",
      fr: "Tapez le mot chinois « <span class='cmd'>森林綠</span> » avec la méthode Tableau (codes courts II uniquement) ; tapez les mots anglais « <span class='cmd'>forest green</span> » ; tapez les mots français « <span class='cmd'>vert foret</span> » (sans l'accent circonflexe)"
    }
  },
  turquoise_bl: {
    name: { tw: '綠松色背光', en: 'Turquoise backlight', fr: 'Rétro-éclairage turquoise' },
    instructions: {
      tw: "按下行列輸入法中「<span class='cmd'>綠松色</span>」三字的鍵位（限二級簡碼）、按下英/法文字 '<span class='cmd'>turquoise</span>' 的鍵位",
      en: "Type the Chinese word '<span class='cmd'>綠松色</span>' with the Array input method (short codes II only); type the English/French word '<span class='cmd'>turquoise</span>'",
      fr: "Tapez le mot chinois « <span class='cmd'>綠松色</span> » avec la méthode Tableau (codes courts II uniquement) ; tapez le mot français/anglais « <span class='cmd'>turquoise</span> »"
    }
  },
  light_gray_bl: {
    name: { tw: '淺灰色背光', en: 'Light gray backlight', fr: 'Rétro-éclairage gris clair' },
    instructions: {
      tw: "按下行列輸入法中「<span class='cmd'>淺灰色</span>」三字的鍵位（限普通編碼）、按下英文字 '<span class='cmd'>light gray</span>' 或 '<span class='cmd'>light grey</span>' 的鍵位、按下法文字 « <span class='cmd'>gris clair</span> » 的鍵位",
      en: "Type the Chinese word '<span class='cmd'>淺灰色</span>' with the Array input method (standard codes only); type the English words '<span class='cmd'>light gray</span>' or '<span class='cmd'>light grey</span>'; type the French words '<span class='cmd'>gris clair</span>'",
      fr: "Tapez le mot chinois « <span class='cmd'>淺灰色</span> » avec la méthode Tableau (codes standard uniquement) ; tapez les mots anglais « <span class='cmd'>light gray</span> » ou « <span class='cmd'>light grey</span> » ; tapez les mots français « <span class='cmd'>gris clair</span> »"
    }
  },
  dim_gray_bl: {
    name: { tw: '暗灰色背光', en: 'Dim gray backlight', fr: 'Rétro-éclairage gris sombre' },
    instructions: {
      tw: "按下行列輸入法中「<span class='cmd'>暗灰色</span>」三字的鍵位（限普通編碼）、按下英文字 '<span class='cmd'>dim gray</span>' 或 '<span class='cmd'>dim grey</span>' 的鍵位、按下法文字 « <span class='cmd'>gris sombre</span> » 的鍵位",
      en: "Type the Chinese word '<span class='cmd'>暗灰色</span>' with the Array input method (standard codes only); type the English words '<span class='cmd'>dim gray</span>' or '<span class='cmd'>dim grey</span>'; type the French words '<span class='cmd'>gris sombre</span>'",
      fr: "Tapez le mot chinois « <span class='cmd'>暗灰色</span> » avec la méthode Tableau (codes standard uniquement) ; tapez les mots anglais « <span class='cmd'>dim gray</span> » ou « <span class='cmd'>dim grey</span> » ; tapez les mots français « <span class='cmd'>gris sombre</span> »"
    }
  },
  sakura: {
    name: { tw: '櫻花', en: 'Sakura', fr: 'Fleur de cerisier' },
    instructions: {
      tw: "按下行列輸入法中「<span class='cmd'>櫻花</span>」兩字的鍵位（限普通編碼）、按下英文字 '<span class='cmd'>sakura</span>' 或 '<span class='cmd'>cherry blossom</span>' 的鍵位、按下法文字 « <span class='cmd'>fleur de cerisier</span> » 的鍵位",
      en: "Type the Chinese word '<span class='cmd'>櫻花</span>' with the Array input method (standard codes only); type the English word '<span class='cmd'>sakura</span>' or '<span class='cmd'>cherry blossom</span>'; type the French words '<span class='cmd'>fleur de cerisier</span>'",
      fr: "Tapez le mot chinois « <span class='cmd'>櫻花</span> » avec la méthode Tableau (codes standard uniquement) ; tapez le mot anglais « <span class='cmd'>sakura</span> » ou « <span class='cmd'>cherry blossom</span> » ; tapez les mots français « <span class='cmd'>fleur de cerisier</span> »"
    }
  },
  banana: {
    name: { tw: '香蕉', en: 'Banana', fr: 'Banane' },
    instructions: {
      tw: "按下行列輸入法中「<span class='cmd'>香蕉</span>」兩字的鍵位（限普通編碼）、按下英文字 '<span class='cmd'>banana</span>' 的鍵位、按下法文字 « <span class='cmd'>banane</span> » 的鍵位",
      en: "Type the Chinese word '<span class='cmd'>香蕉</span>' with the Array input method (standard codes only); type the English word '<span class='cmd'>banana</span>'; type the French word '<span class='cmd'>banane</span>'",
      fr: "Tapez le mot chinois « <span class='cmd'>香蕉</span> » avec la méthode Tableau (codes standard uniquement) ; tapez le mot anglais « <span class='cmd'>banana</span> » ; tapez le mot français « <span class='cmd'>banane</span> »"
    }
  },
  turtle: {
    name: { tw: '烏龜', en: 'Turtle', fr: 'Tortue' },
    instructions: {
      tw: "按下行列輸入法中「<span class='cmd'>烏龜</span>」兩字的鍵位（限二級簡碼）、按下英文字 '<span class='cmd'>turtle</span>' 的鍵位、按下法文字 « <span class='cmd'>tortue</span> » 的鍵位",
      en: "Type the Chinese word '<span class='cmd'>烏龜</span>' with the Array input method (short codes II only); type the English word '<span class='cmd'>turtle</span>'; type the French word '<span class='cmd'>tortue</span>'",
      fr: "Tapez le mot chinois « <span class='cmd'>烏龜</span> » avec la méthode Tableau (codes courts II uniquement) ; tapez le mot anglais « <span class='cmd'>turtle</span> » ; tapez le mot français « <span class='cmd'>tortue</span> »"
    }
  },
  alien: {
    name: { tw: '外星人', en: 'Alien', fr: 'Extraterrestre' },
    instructions: {
      tw: "按下行列輸入法中「<span class='cmd'>外星人</span>」三字的鍵位（限普通編碼）、按下英文字 '<span class='cmd'>alien</span>' 的鍵位、按下法文字 « <span class='cmd'>extraterrestre</span> » 的鍵位",
      en: "Type the Chinese word '<span class='cmd'>外星人</span>' with the Array input method (standard codes only); type the English word '<span class='cmd'>alien</span>'; type the French word '<span class='cmd'>extraterrestre</span>'",
      fr: "Tapez le mot chinois « <span class='cmd'>外星人</span> » avec la méthode Tableau (codes standard uniquement); tapez le mot anglais « <span class='cmd'>alien</span> » ; tapez le mot français « <span class='cmd'>extraterrestre</span> »"
    }
  },
}

// first item = default style set; item = style set: bg, kb base, key, text, pressed key, cmdList (list of commands, order important), info (html)
const styleSetOptions = [
  {// pure white
    bg: 'change1',
    kbBase: { border: 'white', keyArea: 'emperor' },
    key: { nKey: 'white', fKey: 'white', sKey: 'white', bs: 'white', enterKey: 'white', spaceBar: 'salomie' },
    text: { nKey: 'loblolly', bs: 'loblolly', sKey: 'loblolly' },
    pressedKey: 'yellow_bl',
    cmdList: [],
    name: {
      tw: "純白鍵盤綴上黃色空白鍵",
      en: "pure white keyboard with yellow space bar",
      fr: "clavier blanc pur avec barre d'espace jaune"
    },
    info: {
      tw: "純白鍵盤綴上黃色空白鍵",
      en: "Pure white keyboard with yellow space bar",
      fr: "Clavier blanc pur avec barre d'espace jaune"
    }
  },
  {// ducky one 2 bright lilac -o
    bg: 'bright_lilac',
    kbBase: { border: 'melanie', keyArea: 'emperor' },
    key: { nKey: 'vanilla_ice', fKey: 'melanie', sKey: 'melanie', bs: 'melanie', enterKey: 'blizzard_blue', spaceBar: 'vanilla_ice' },
    text: { nKey: 'o-brink_pink', bs: 'o-white', sKey: 'o-white' },
    pressedKey: 'none',
    cmdList: ['ducky one 2 bright lilac', 'ducky one 2 bright lilqc'],
    name: {
      tw: `靈感源於 <a href="https://www.duckychannel.com.tw/tw/Ducky-One2-Bright-Lilac" class="my_link" target='_blank'>Ducky One 2 丁香紫</a>`,
      en: `inspired by <a href="https://www.duckychannel.com.tw/en/Ducky-One2-Bright-Lilac" class="my_link" target='_blank'>Ducky One 2 Bright Lilac</a>`,
      fr: `inspiré par <a href="https://www.duckychannel.com.tw/en/Ducky-One2-Bright-Lilac" class="my_link" target='_blank'>Ducky One 2 Bright Lilac</a>`
    },
    info: {
      tw: `靈感源於 <a href="https://www.duckychannel.com.tw/tw/Ducky-One2-Bright-Lilac" class="my_link" target='_blank'>Ducky One 2 丁香紫</a>。亦可透過輸入'<span class='cmd'>ducky one 2 bright lilac</span>' 切換到此樣式。`,
      en: `Inspired by <a href="https://www.duckychannel.com.tw/en/Ducky-One2-Bright-Lilac" class="my_link" target='_blank'>Ducky One 2 Bright Lilac</a>. You can also switch to this style by typing '<span class='cmd'>ducky one 2 bright lilac</span>'.`,
      fr: `Inspiré par <a href="https://www.duckychannel.com.tw/en/Ducky-One2-Bright-Lilac" class="my_link" target='_blank'>Ducky One 2 Bright Lilac</a>. Vous pouvez aussi passez à ce style en tapant « <span class='cmd'>ducky one 2 bright lilac</span> ».`
    }
  },
  {// ducky mecha sf emerald -o
    bg: 'sf_emerald',
    kbBase: { border: 'ming', keyArea: 'white' },
    key: { nKey: 'mosque', fKey: 'coral', sKey: 'coral', bs: 'coral', enterKey: 'coral', spaceBar: 'riptide' },
    text: { nKey: 'o-riptide', bs: 'o-white', sKey: 'o-white' },
    pressedKey: 'turquoise_bl',
    cmdList: ['ducky mecha sf emerald', 'ducky mechq sf emerqld'],
    name: {
      tw: `靈感源於 <a href="https://www.duckychannel.com.tw/tw/Mecha-SF-Emerald" class="my_link" target='_blank'>Ducky Mecha SF 翠</a>`,
      en: `inspired by <a href="https://www.duckychannel.com.tw/en/Mecha-SF-Emerald" class="my_link" target='_blank'>Ducky Mecha SF Emerald</a>`,
      fr: `inspiré par <a href="https://www.duckychannel.com.tw/en/Mecha-SF-Emerald" class="my_link" target='_blank'>Ducky Mecha SF Emerald</a>`
    },
    info: {
      tw: `靈感源於 <a href="https://www.duckychannel.com.tw/tw/Mecha-SF-Emerald" class="my_link" target='_blank'>Ducky Mecha SF 翠</a>。亦可透過輸入'<span class='cmd'>ducky mecha sf emerald</span>' 切換到此樣式。`,
      en: `Inspired by <a href="https://www.duckychannel.com.tw/en/Mecha-SF-Emerald" class="my_link" target='_blank'>Ducky Mecha SF Emerald</a>. You can also switch to this style by typing '<span class='cmd'>ducky mecha sf emerald</span>'.`,
      fr: `Inspiré par <a href="https://www.duckychannel.com.tw/en/Mecha-SF-Emerald" class="my_link" target='_blank'>Ducky Mecha SF Emerald</a>. Vous pouvez aussi passez à ce style en tapant « <span class='cmd'>ducky mecha sf emerald</span> ».`
    }
  },
  {// ducky ultra violet -o
    bg: 'hot_pink',
    kbBase: { border: 'carnation_pink', keyArea: 'gainsboro' },
    key: { nKey: 'fuchsia_pink', fKey: 'blue_marguerite-appr', sKey: 'blue_marguerite-appr', bs: 'blue_marguerite-appr', enterKey: 'blue_marguerite-appr', spaceBar: 'carnation_pink' },
    text: { nKey: 'o-white', bs: 'o-riptide', sKey: 'o-riptide' },
    pressedKey: 'pink_bl',
    cmdList: ['ducky ultra violet', 'ducky ultrq violet'],
    name: {
      tw: `靈感源於 <a href="https://www.duckychannel.com.tw/tw/Ducky-PBT-Double-shot-Ultra-Violet-keycap" class="my_link" target='_blank'>Ducky 紫外光鍵帽</a>`,
      en: `inspired by <a href="https://www.duckychannel.com.tw/en/Ducky-PBT-Double-shot-Ultra-Violet-keycap" class="my_link" target='_blank'>Ducky Ultra-Violet Keycaps</a>`,
      fr: `inspiré par <a href="https://www.duckychannel.com.tw/en/Ducky-PBT-Double-shot-Ultra-Violet-keycap" class="my_link" target='_blank'>Ducky Ultra-Violet Keycaps</a>`
    },
    info: {
      tw: `靈感源於 <a href="https://www.duckychannel.com.tw/tw/Ducky-PBT-Double-shot-Ultra-Violet-keycap" class="my_link" target='_blank'>Ducky 紫外光鍵帽</a>。亦可透過輸入'<span class='cmd'>ducky ultra violet</span>' 切換到此樣式。`,
      en: `Inspired by <a href="https://www.duckychannel.com.tw/en/Ducky-PBT-Double-shot-Ultra-Violet-keycap" class="my_link" target='_blank'>Ducky Ultra-Violet Keycaps</a>. You can also switch to this style by typing '<span class='cmd'>ducky ultra violet</span>'.`,
      fr: `Inspiré par <a href="https://www.duckychannel.com.tw/en/Ducky-PBT-Double-shot-Ultra-Violet-keycap" class="my_link" target='_blank'>Ducky Ultra-Violet Keycaps</a>. Vous pouvez aussi passez à ce style en tapant « <span class='cmd'>ducky ultra violet</span> ».`
    }
  },
  {// ducky one rgb razer
    bg: 'dark_silver',
    kbBase: { border: 'mine_shaft', keyArea: 'white' },
    key: { nKey: 'ducky_one_2_razer', fKey: 'ducky_one_2_razer', sKey: 'ducky_one_2_razer', bs: 'ducky_one_2_razer', enterKey: 'ducky_one_2_razer', spaceBar: 'ducky_one_2_razer' },
    text: { nKey: 'white', bs: 'white', sKey: 'white' },
    pressedKey: 'green_bl',
    cmdList: ['ducky one 2 razer', 'ducky one 2 rqwer'],
    name: {
      tw: `靈感源於 <a href="https://www.duckychannel.com.tw/tw/Ducky-One2-RGB-Razer-Edition" class="my_link" target='_blank'>Ducky One 2 RGB Razer Edition</a>`,
      en: `inspired by <a href="https://www.duckychannel.com.tw/en/Ducky-One2-RGB-Razer-Edition" class="my_link" target='_blank'>Ducky One 2 RGB Razer Edition</a>`,
      fr: `inspiré par <a href="https://www.duckychannel.com.tw/en/Ducky-One2-RGB-Razer-Edition" class="my_link" target='_blank'>Ducky One 2 RGB Razer Edition</a>`
    },
    info: {
      tw: `靈感源於 <a href="https://www.duckychannel.com.tw/tw/Ducky-One2-RGB-Razer-Edition" class="my_link" target='_blank'>Ducky One 2 RGB Razer Edition</a>。亦可透過輸入'<span class='cmd'>ducky one 2 razer</span>' 切換到此樣式。`,
      en: `Inspired by <a href="https://www.duckychannel.com.tw/en/Ducky-One2-RGB-Razer-Edition" class="my_link" target='_blank'>Ducky One 2 RGB Razer Edition</a>. You can also switch to this style by typing '<span class='cmd'>ducky one 2 razer</span>'.`,
      fr: `Inspiré par <a href="https://www.duckychannel.com.tw/en/Ducky-One2-RGB-Razer-Edition" class="my_link" target='_blank'>Ducky One 2 RGB Razer Edition</a>. Vous pouvez aussi passez à ce style en tapant « <span class='cmd'>ducky one 2 razer</span> ».`
    }
  },
  {// ducky one 2 tuxedo -o
    bg: 'silver_tree',
    kbBase: { border: 'limed_spruce', keyArea: 'black' },
    key: { nKey: 'white', fKey: 'limed_spruce', sKey: 'limed_spruce', bs: 'limed_spruce', enterKey: 'roman', spaceBar: 'white' },
    text: { nKey: 'o-limed_spruce', bs: 'o-white', sKey: 'o-white' },
    pressedKey: 'none',
    cmdList: ['ducky one 2 tuxedo'],
    name: {
      tw: `靈感源於 <a href="https://www.duckychannel.com.tw/tw/Ducky-One-2-Tuxedo" class="my_link" target='_blank'>Ducky One 2 燕尾服</a>`,
      en: `inspired by <a href="https://www.duckychannel.com.tw/en/One-2-Tuxedo" class="my_link" target='_blank'>Ducky One 2 Tuxedo</a>`,
      fr: `inspiré par <a href="https://www.duckychannel.com.tw/en/One-2-Tuxedo" class="my_link" target='_blank'>Ducky One 2 Tuxedo</a>`
    },
    info: {
      tw: `靈感源於 <a href="https://www.duckychannel.com.tw/tw/Ducky-One-2-Tuxedo" class="my_link" target='_blank'>Ducky One 2 燕尾服</a>。亦可透過輸入'<span class='cmd'>ducky one 2 tuxedo</span>' 切換到此樣式。`,
      en: `Inspired by <a href="https://www.duckychannel.com.tw/en/One-2-Tuxedo" class="my_link" target='_blank'>Ducky One 2 Tuxedo</a>. You can also switch to this style by typing '<span class='cmd'>ducky one 2 tuxedo</span>'.`,
      fr: `Inspiré par <a href="https://www.duckychannel.com.tw/en/One-2-Tuxedo" class="my_link" target='_blank'>Ducky One 2 Tuxedo</a>. Vous pouvez aussi passez à ce style en tapant « <span class='cmd'>ducky one 2 tuxedo</span> ».`
    }
  },
  {// ducky 2017
    bg: 'change2',
    kbBase: { border: 'beaver', keyArea: 'white' },
    key: { nKey: 'shark', fKey: 'shark', sKey: 'shark', bs: 'shark', enterKey: 'shark', spaceBar: 'shark' },
    text: { nKey: 'white', bs: 'white', sKey: 'white' },
    pressedKey: 'wheat_bl',
    cmdList: ['ducky 2017'],
    name: {
      tw: `靈感源於 <a href="https://www.duckychannel.com.tw/tw/Ducky-Year-Of-The-Rooster-Edition" class="my_link" target='_blank'>Ducky 2017 雞年生肖限定鍵盤</a>`,
      en: `inspired by <a href="https://www.duckychannel.com.tw/en/Ducky-Year-Of-The-Rooster-Edition" class="my_link" target='_blank'>Ducky 2017 Year of The Rooster Edition</a>`,
      fr: `inspiré par <a href="https://www.duckychannel.com.tw/en/Ducky-Year-Of-The-Rooster-Edition" class="my_link" target='_blank'>Ducky 2017 Year of The Rooster Edition</a>`
    },
    info: {
      tw: `靈感源於 <a href="https://www.duckychannel.com.tw/tw/Ducky-Year-Of-The-Rooster-Edition" class="my_link" target='_blank'>Ducky 2017 雞年生肖限定鍵盤</a>。亦可透過輸入 '<span class='cmd'>ducky 2017</span>' 切換到此樣式。`,
      en: `Inspired by <a href="https://www.duckychannel.com.tw/en/Ducky-Year-Of-The-Rooster-Edition" class="my_link" target='_blank'>Ducky 2017 Year of The Rooster Edition</a>. You can also switch to this style by typing '<span class='cmd'>ducky 2017</span>'.`,
      fr: `Inspiré par <a href="https://www.duckychannel.com.tw/en/Ducky-Year-Of-The-Rooster-Edition" class="my_link" target='_blank'>Ducky 2017 Year of The Rooster Edition</a>. Vous pouvez aussi passez à ce style en tapant « <span class='cmd'>ducky 2017</span> ».`
    }
  },
  {// ducky one 2 mini skyline -o
    bg: 'light_gray',
    kbBase: { border: 'emperor', keyArea: 'mine_shaft' },
    key: { nKey: 'regent_gray', fKey: 'emperor', sKey: 'emperor', bs: 'emperor', enterKey: 'picton_blue', spaceBar: 'regent_gray' },
    text: { nKey: 'o-white', bs: 'o-white', sKey: 'o-white' },
    pressedKey: 'none',
    cmdList: ['ducky one 2 mini skyline', 'ducky one 2 ;ini skyline'],
    name: {
      tw: `靈感源於 <a href="https://www.duckychannel.com.tw/tw/Ducky-One2-Mini-skyline" class="my_link" target='_blank'>Ducky One 2 Mini 天際線版</a>`,
      en: `inspired by <a href="https://www.duckychannel.com.tw/en/One-2-Mini-Skyline" class="my_link" target='_blank'>Ducky One 2 Mini Skyline</a>`,
      fr: `inspiré par <a href="https://www.duckychannel.com.tw/en/One-2-Mini-Skyline" class="my_link" target='_blank'>Ducky One 2 Mini Skyline</a>`
    },
    info: {
      tw: `靈感源於 <a href="https://www.duckychannel.com.tw/tw/Ducky-One2-Mini-skyline" class="my_link" target='_blank'>Ducky One 2 Mini 天際線版</a>。亦可透過輸入'<span class='cmd'>ducky one 2 mini skyline</span>' 切換到此樣式。`,
      en: `Inspired by <a href="https://www.duckychannel.com.tw/en/One-2-Mini-Skyline" class="my_link" target='_blank'>Ducky One 2 Mini Skyline</a>. You can also switch to this style by typing '<span class='cmd'>ducky one 2 mini skyline</span>'.`,
      fr: `Inspiré par <a href="https://www.duckychannel.com.tw/en/One-2-Mini-Skyline" class="my_link" target='_blank'>Ducky One 2 Mini Skyline</a>. Vous pouvez aussi passez à ce style en tapant « <span class='cmd'>ducky one 2 mini skyline</span> ».`
    }
  },
  {// creator mecha mini
    bg: 'creator_purple',
    kbBase: { border: 'grape', keyArea: 'white' },
    key: { nKey: 'white', fKey: 'trendy_pink', sKey: 'trendy_pink', bs: 'trendy_pink', enterKey: 'trendy_pink', spaceBar: 'white' },
    text: { nKey: 'loblolly', bs: 'white', sKey: 'white' },
    pressedKey: 'purple_bl',
    cmdList: ['creator mecha mini', 'creqtor ;echq ;ini'],
    name: {
      tw: `靈感源於 <a href="https://www.duckychannel.com.tw/en/Ducky-Creator-Mecha-Mini" class="my_link" target='_blank'>Ducky x MK Creator Mecha Mini</a>`,
      en: `inspired by <a href="https://www.duckychannel.com.tw/en/Ducky-Creator-Mecha-Mini" class="my_link" target='_blank'>Ducky x MK Creator Mecha Mini</a>`,
      fr: `inspiré par <a href="https://www.duckychannel.com.tw/en/Ducky-Creator-Mecha-Mini" class="my_link" target='_blank'>Ducky x MK Creator Mecha Mini</a>`
    },
    info: {
      tw: `靈感源於 <a href="https://www.duckychannel.com.tw/en/Ducky-Creator-Mecha-Mini" class="my_link" target='_blank'>Ducky x MK Creator Mecha Mini</a>。亦可透過輸入 '<span class='cmd'>creator mecha mini</span>' 切換到此樣式。`,
      en: `Inspired by <a href="https://www.duckychannel.com.tw/en/Ducky-Creator-Mecha-Mini" class="my_link" target='_blank'>Ducky x MK Creator Mecha Mini</a>. You can also switch to this style by typing '<span class='cmd'>creator mecha mini</span>'.`,
      fr: `Inspiré par <a href="https://www.duckychannel.com.tw/en/Ducky-Creator-Mecha-Mini" class="my_link" target='_blank'>Ducky x MK Creator Mecha Mini</a>. Vous pouvez aussi passez à ce style en tapant « <span class='cmd'>creator mecha mini</span> ».`
    }
  },
  {// ducky one 2 good in blue -o
    bg: 'good_blue',
    kbBase: { border: 'cornflower-appr', keyArea: 'mine_shaft' },
    key: { nKey: 'cornflower-appr', fKey: 'fiord', sKey: 'fiord', bs: 'fiord', enterKey: 'white', spaceBar: 'cornflower-appr' },
    text: { nKey: 'o-white', bs: 'o-white', sKey: 'o-white' },
    pressedKey: 'none',
    cmdList: ['ducky one 2 good in blue', 'ducky one 2 mini good in blue', 'ducky one 2 ;ini good in blue'],
    name: {
      tw: `靈感源於 <a href="https://www.duckychannel.com.tw/tw/Ducky-One2-Mini-Good-in-Blue" class="my_link" target='_blank'>Ducky One 2 海波浪</a>`,
      en: `inspired by <a href="https://www.duckychannel.com.tw/en/Ducky-One2-Mini-Good-in-Blue" class="my_link" target='_blank'>Ducky One 2 Good in Blue</a>`,
      fr: `inspiré par <a href="https://www.duckychannel.com.tw/en/Ducky-One2-Mini-Good-in-Blue" class="my_link" target='_blank'>Ducky One 2 Good in Blue</a>`
    },
    info: {
      tw: `靈感源於 <a href="https://www.duckychannel.com.tw/tw/Ducky-One2-Mini-Good-in-Blue" class="my_link" target='_blank'>Ducky One 2 海波浪</a>。亦可透過輸入'<span class='cmd'>ducky one 2 good in blue</span>' 切換到此樣式。`,
      en: `Inspired by <a href="https://www.duckychannel.com.tw/en/Ducky-One2-Mini-Good-in-Blue" class="my_link" target='_blank'>Ducky One 2 Good in Blue</a>. You can also switch to this style by typing '<span class='cmd'>ducky one 2 good in blue</span>'.`,
      fr: `Inspiré par <a href="https://www.duckychannel.com.tw/en/Ducky-One2-Mini-Good-in-Blue" class="my_link" target='_blank'>Ducky One 2 Good in Blue</a>. Vous pouvez aussi passez à ce style en tapant « <span class='cmd'>ducky one 2 good in blue</span> ».`
    }
  },
  {// ducky shine 3 yellow
    bg: 'shiny_yellow',
    kbBase: { border: 'salomie', keyArea: 'mine_shaft' },
    key: { nKey: 'salomie', fKey: 'salomie', sKey: 'salomie', bs: 'salomie', enterKey: 'salomie', spaceBar: 'salomie' },
    text: { nKey: 'white', bs: 'white', sKey: 'white' },
    pressedKey: 'dark_orange_bl',
    cmdList: ['ducky shine 3 yellow'],
    name: {
      tw: `靈感源於 <a href="https://www.duckychannel.com.tw/tw/Ducky-Shine3-Yellow" class="my_link" target='_blank'>Ducky Shine 3 黃色小鴨版</a>`,
      en: `inspired by <a href="https://www.duckychannel.com.tw/en/Ducky-Shine3-Yellow" class="my_link" target='_blank'>Ducky Shine 3 Yellow</a>`,
      fr: `inspiré par <a href="https://www.duckychannel.com.tw/en/Ducky-Shine3-Yellow" class="my_link" target='_blank'>Ducky Shine 3 Yellow</a>`
    },
    info: {
      tw: `靈感源於 <a href="https://www.duckychannel.com.tw/tw/Ducky-Shine3-Yellow" class="my_link" target='_blank'>Ducky Shine 3 黃色小鴨版</a>。亦可透過輸入'<span class='cmd'>ducky shine 3 yellow</span>' 切換到此樣式。`,
      en: `Inspired by <a href="https://www.duckychannel.com.tw/en/Ducky-Shine3-Yellow" class="my_link" target='_blank'>Ducky Shine 3 Yellow</a>. You can also switch to this style by typing '<span class='cmd'>ducky shine 3 yellow</span>'.`,
      fr: `Inspiré par <a href="https://www.duckychannel.com.tw/en/Ducky-Shine3-Yellow" class="my_link" target='_blank'>Ducky Shine 3 Yellow</a>. Vous pouvez aussi passez à ce style en tapant « <span class='cmd'>ducky shine 3 yellow</span> ».`
    }
  },
  {// ducky one mini horizon -o
    bg: 'bunting',
    kbBase: { border: 'chambray', keyArea: 'black' },
    key: { nKey: 'chambray', fKey: 'river_bed', sKey: 'river_bed', bs: 'river_bed', enterKey: 'bright_sun', spaceBar: 'chambray' },
    text: { nKey: 'o-aquamarine', bs: 'o-bright_sun', sKey: 'o-bright_sun' },
    pressedKey: 'none',
    cmdList: ['ducky one 2 mini horizon', 'ducky one 2 ;inii horiwon'],
    name: {
      tw: `靈感源於 <a href="https://www.duckychannel.com.tw/tw/Ducky-One2-Mini-Horizon" class="my_link" target='_blank'>Ducky One 2 Mini 地平線版</a>`,
      en: `inspired by <a href="https://www.duckychannel.com.tw/en/Ducky-One2-Mini-Horizon" class="my_link" target='_blank'>Ducky One 2 Mini Horizon</a>`,
      fr: `inspiré par <a href="https://www.duckychannel.com.tw/en/Ducky-One2-Mini-Horizon" class="my_link" target='_blank'>Ducky One 2 Mini Horizon</a>`
    },
    info: {
      tw: `靈感源於 <a href="https://www.duckychannel.com.tw/tw/Ducky-One2-Mini-Horizon" class="my_link" target='_blank'>Ducky One 2 Mini 地平線版</a>。亦可透過輸入'<span class='cmd'>ducky one 2 mini horizon</span>' 切換到此樣式。`,
      en: `Inspired by <a href="https://www.duckychannel.com.tw/en/Ducky-One2-Mini-Horizon" class="my_link" target='_blank'>Ducky One 2 Mini Horizon</a>. You can also switch to this style by typing '<span class='cmd'>ducky one 2 mini horizon</span>'.`,
      fr: `Inspiré par <a href="https://www.duckychannel.com.tw/en/Ducky-One2-Mini-Horizon" class="my_link" target='_blank'>Ducky One 2 Mini Horizon</a>. Vous pouvez aussi passez à ce style en tapant « <span class='cmd'>ducky one 2 mini horizon</span> ».`
    }
  },
  {// ducky one 2 bon voyage o-
    bg: 'voyage_blue',
    kbBase: { border: 'white', keyArea: 'black' },
    key: { nKey: 'white', fKey: 'havelock_blue', sKey: 'havelock_blue', bs: 'havelock_blue', enterKey: 'carnation', spaceBar: 'carnation' },
    text: { nKey: 'o-havelock_blue', bs: 'o-white', sKey: 'o-white' },
    pressedKey: 'none',
    cmdList: ['ducky one 2 bon voyage', 'ducky one 2 bon voyqge'],
    name: {
      tw: `靈感源於 <a href="https://www.duckychannel.com.tw/tw/Ducky-One2-Bon-Voyage-Editon" class="my_link" target='_blank'>Ducky One 2 海灘假期</a>`,
      en: `inspired by <a href="https://www.duckychannel.com.tw/en/Ducky-One2-Bon-Voyage-Edition" class="my_link" target='_blank'>Ducky One 2 Bon Voyage</a>`,
      fr: `inspiré par <a href="https://www.duckychannel.com.tw/en/Ducky-One2-Bon-Voyage-Edition" class="my_link" target='_blank'>Ducky One 2 Bon Voyage</a>`
    },
    info: {
      tw: `靈感源於 <a href="https://www.duckychannel.com.tw/tw/Ducky-One2-Bon-Voyage-Editon" class="my_link" target='_blank'>Ducky One 2 海灘假期</a>。亦可透過輸入'<span class='cmd'>ducky one 2 bon voyage</span>' 切換到此樣式。`,
      en: `Inspired by <a href="https://www.duckychannel.com.tw/en/Ducky-One2-Bon-Voyage-Edition" class="my_link" target='_blank'>Ducky One 2 Bon Voyage</a>. You can also switch to this style by typing '<span class='cmd'>ducky one 2 bon voyage</span>'.`,
      fr: `Inspiré par <a href="https://www.duckychannel.com.tw/en/Ducky-One2-Bon-Voyage-Edition" class="my_link" target='_blank'>Ducky One 2 Bon Voyage</a>. Vous pouvez aussi passez à ce style en tapant « <span class='cmd'>ducky one 2 bon voyage</span> ».`
    }
  },
  {// frozen llama
    bg: 'dark_silver',
    kbBase: { border: 'viking-appr', keyArea: 'limed_spruce' },
    key: { nKey: 'llama_green', fKey: 'scooter', sKey: 'scooter', bs: 'scooter', enterKey: 'orchid', spaceBar: 'orchid' },
    text: { nKey: 'white', bs: 'white', sKey: 'white' },
    pressedKey: 'yellow_bl',
    cmdList: ['frozen llama', 'frowen llq;q'],
    name: {
      tw: `靈感源於 <a href="https://www.duckychannel.com.tw/en/One-2-Mini-Frozen-Llama-RGB" class="my_link" target='_blank'>Ducky x MK Frozen Llama One 2 Mecha Mini</a>`,
      en: `inspired by <a href="https://www.duckychannel.com.tw/en/One-2-Mini-Frozen-Llama-RGB" class="my_link" target='_blank'>Ducky x MK Frozen Llama One 2 Mecha Mini</a>`,
      fr: `inspiré par <a href="https://www.duckychannel.com.tw/en/One-2-Mini-Frozen-Llama-RGB" class="my_link" target='_blank'>Ducky x MK Frozen Llama One 2 Mecha Mini</a>`
    },
    info: {
      tw: `靈感源於 <a href="https://www.duckychannel.com.tw/en/One-2-Mini-Frozen-Llama-RGB" class="my_link" target='_blank'>Ducky x MK Frozen Llama One 2 Mecha Mini</a>。亦可透過輸入'<span class='cmd'>frozen llama</span>' 切換到此樣式。`,
      en: `Inspired by <a href="https://www.duckychannel.com.tw/en/One-2-Mini-Frozen-Llama-RGB" class="my_link" target='_blank'>Ducky x MK Frozen Llama One 2 Mecha Mini</a>. You can also switch to this style by typing '<span class='cmd'>frozen llama</span>'.`,
      fr: `Inspiré par <a href="https://www.duckychannel.com.tw/en/One-2-Mini-Frozen-Llama-RGB" class="my_link" target='_blank'>Ducky x MK Frozen Llama One 2 Mecha Mini</a>. Vous pouvez aussi passez à ce style en tapant « <span class='cmd'>frozen llama</span> ».`
    }
  },
  {// ducky one 2 midnight -o
    bg: 'emperor',
    kbBase: { border: 'rhino', keyArea: 'white' },
    key: { nKey: 'shark', fKey: 'shark', sKey: 'shark', bs: 'shark', enterKey: 'shark', spaceBar: 'shark' },
    text: { nKey: 'o-spray', bs: 'o-persian_pink', sKey: 'o-persian_pink' },
    pressedKey: 'turquoise_bl',
    cmdList: ['ducky one 2 midnight', 'ducky one 2 ;idnight'],
    name: {
      tw: `靈感源於 <a href="https://www.duckychannel.com.tw/tw/Ducky-One2-Midnight" class="my_link" target='_blank'>Ducky One 2 午夜</a>`,
      en: `inspired by <a href="https://www.duckychannel.com.tw/en/Ducky-One2-Midnight" class="my_link" target='_blank'>Ducky One 2 Midnight</a>`,
      fr: `inspiré par <a href="https://www.duckychannel.com.tw/en/Ducky-One2-Midnight" class="my_link" target='_blank'>Ducky One 2 Midnight</a>`
    },
    info: {
      tw: `靈感源於 <a href="https://www.duckychannel.com.tw/tw/Ducky-One2-Midnight" class="my_link" target='_blank'>Ducky One 2 午夜</a>。亦可透過輸入'<span class='cmd'>ducky one 2 midnight</span>' 切換到此樣式。`,
      en: `Inspired by <a href="https://www.duckychannel.com.tw/en/Ducky-One2-Midnight" class="my_link" target='_blank'>Ducky One 2 Midnight</a>. You can also switch to this style by typing '<span class='cmd'>ducky one 2 midnight</span>'.`,
      fr: `Inspiré par <a href="https://www.duckychannel.com.tw/en/Ducky-One2-Midnight" class="my_link" target='_blank'>Ducky One 2 Midnight</a>. Vous pouvez aussi passez à ce style en tapant « <span class='cmd'>ducky one 2 midnight</span> ».`
    }
  },
  {// ducky one mini pure white
    bg: 'light_silver',
    kbBase: { border: 'white', keyArea: 'mine_shaft' },
    key: { nKey: 'white', fKey: 'white', sKey: 'white', bs: 'white', enterKey: 'blizzard_blue', spaceBar: 'white' },
    text: { nKey: 'loblolly', bs: 'loblolly', sKey: 'loblolly' },
    pressedKey: 'blue_bl',
    cmdList: ['ducky one 2 mini pure white', 'ducky one 2 ;ini pure zhite'],
    name: {
      tw: `靈感源於 <a href="https://www.duckychannel.com.tw/tw/Ducky-One2-Mini-Pure-White-RGB" class="my_link" target='_blank'>Ducky One 2 Mini 白色版</a>`,
      en: `inspired by <a href="https://www.duckychannel.com.tw/en/Ducky-One2-Mini-Pure-White-RGB" class="my_link" target='_blank'>Ducky One 2 Mini Pure White RGB</a>.`,
      fr: `inspiré par <a href="https://www.duckychannel.com.tw/en/Ducky-One2-Mini-Pure-White-RGB" class="my_link" target='_blank'>Ducky One 2 Mini Pure White RGB</a>.`
    },
    info: {
      tw: `靈感源於 <a href="https://www.duckychannel.com.tw/tw/Ducky-One2-Mini-Pure-White-RGB" class="my_link" target='_blank'>Ducky One 2 Mini 白色版</a>。亦可透過輸入 '<span class='cmd'>ducky one 2 mini pure white</span>' 切換到此樣式。`,
      en: `Inspired by <a href="https://www.duckychannel.com.tw/en/Ducky-One2-Mini-Pure-White-RGB" class="my_link" target='_blank'>Ducky One 2 Mini Pure White RGB</a>. You can also switch to this style by typing '<span class='cmd'>ducky one 2 mini pure white</span>'.`,
      fr: `Inspiré par <a href="https://www.duckychannel.com.tw/en/Ducky-One2-Mini-Pure-White-RGB" class="my_link" target='_blank'>Ducky One 2 Mini Pure White RGB</a>. Vous pouvez aussi passez à ce style en tapant « <span class='cmd'>ducky one 2 mini pure white</span> ».`
    }
  },
  {// ducky one 2 bright lilac
    bg: 'bright_lilac',
    kbBase: { border: 'melanie', keyArea: 'emperor' },
    key: { nKey: 'vanilla_ice', fKey: 'melanie', sKey: 'melanie', bs: 'melanie', enterKey: 'blizzard_blue', spaceBar: 'vanilla_ice' },
    text: { nKey: 'brink_pink', bs: 'white', sKey: 'white' },
    pressedKey: 'blue_bl',
    cmdList: [],
    name: {
      tw: `靈感源於 <a href="https://www.duckychannel.com.tw/tw/Ducky-One2-Bright-Lilac" class="my_link" target='_blank'>Ducky One 2 丁香紫</a>。透光鍵帽版本。`,
      en: `inspired by <a href="https://www.duckychannel.com.tw/en/Ducky-One2-Bright-Lilac" class="my_link" target='_blank'>Ducky One 2 Bright Lilac</a>. Translucent keycap version.`,
      fr: `inspiré par <a href="https://www.duckychannel.com.tw/en/Ducky-One2-Bright-Lilac" class="my_link" target='_blank'>Ducky One 2 Bright Lilac</a>. Version touches translucides.`
    },
    info: {
      tw: `靈感源於 <a href="https://www.duckychannel.com.tw/tw/Ducky-One2-Bright-Lilac" class="my_link" target='_blank'>Ducky One 2 丁香紫</a>。透光鍵帽版本。`,
      en: `Inspired by <a href="https://www.duckychannel.com.tw/en/Ducky-One2-Bright-Lilac" class="my_link" target='_blank'>Ducky One 2 Bright Lilac</a>. Translucent keycap version.`,
      fr: `Inspiré par <a href="https://www.duckychannel.com.tw/en/Ducky-One2-Bright-Lilac" class="my_link" target='_blank'>Ducky One 2 Bright Lilac</a>. Version touches translucides.`
    }
  },
  {// ducky mecha sf emerald
    bg: 'sf_emerald',
    kbBase: { border: 'ming', keyArea: 'white' },
    key: { nKey: 'mosque', fKey: 'coral', sKey: 'coral', bs: 'coral', enterKey: 'coral', spaceBar: 'riptide' },
    text: { nKey: 'riptide', bs: 'riptide', sKey: 'riptide' },
    pressedKey: 'yellow_bl',
    cmdList: [],
    name: {
      tw: `靈感源於 <a href="https://www.duckychannel.com.tw/tw/Mecha-SF-Emerald" class="my_link" target='_blank'>Ducky Mecha SF 翠</a>。透光鍵帽版本。`,
      en: `inspired by <a href="https://www.duckychannel.com.tw/en/Mecha-SF-Emerald" class="my_link" target='_blank'>Ducky Mecha SF Emerald</a>. Translucent keycap version.`,
      fr: `inspiré par <a href="https://www.duckychannel.com.tw/en/Mecha-SF-Emerald" class="my_link" target='_blank'>Ducky Mecha SF Emerald</a>. Version touches translucides.`
    },
    info: {
      tw: `靈感源於 <a href="https://www.duckychannel.com.tw/tw/Mecha-SF-Emerald" class="my_link" target='_blank'>Ducky Mecha SF 翠</a>。透光鍵帽版本。`,
      en: `Inspired by <a href="https://www.duckychannel.com.tw/en/Mecha-SF-Emerald" class="my_link" target='_blank'>Ducky Mecha SF Emerald</a>. Translucent keycap version.`,
      fr: `Inspiré par <a href="https://www.duckychannel.com.tw/en/Mecha-SF-Emerald" class="my_link" target='_blank'>Ducky Mecha SF Emerald</a>. Version touches translucides.`
    }
  },
  {// ducky ultra violet
    bg: 'hot_pink',
    kbBase: { border: 'carnation_pink', keyArea: 'gainsboro' },
    key: { nKey: 'fuchsia_pink', fKey: 'blue_marguerite-appr', sKey: 'blue_marguerite-appr', bs: 'blue_marguerite-appr', enterKey: 'blue_marguerite-appr', spaceBar: 'carnation_pink' },
    text: { nKey: 'white', bs: 'riptide', sKey: 'riptide' },
    pressedKey: 'turquoise_bl',
    cmdList: [],
    name: {
      tw: `靈感源於 <a href="https://www.duckychannel.com.tw/tw/Ducky-PBT-Double-shot-Ultra-Violet-keycap" class="my_link" target='_blank'>Ducky 紫外光鍵帽</a>。透光鍵帽版本。`,
      en: `inspired by <a href="https://www.duckychannel.com.tw/en/Ducky-PBT-Double-shot-Ultra-Violet-keycap" class="my_link" target='_blank'>Ducky Ultra-Violet Keycaps</a>. Translucent keycap version.`,
      fr: `inspiré par <a href="https://www.duckychannel.com.tw/en/Ducky-PBT-Double-shot-Ultra-Violet-keycap" class="my_link" target='_blank'>Ducky Ultra-Violet Keycaps</a>. Version touches translucides.`
    },
    info: {
      tw: `靈感源於 <a href="https://www.duckychannel.com.tw/tw/Ducky-PBT-Double-shot-Ultra-Violet-keycap" class="my_link" target='_blank'>Ducky 紫外光鍵帽</a>。透光鍵帽版本。`,
      en: `Inspired by <a href="https://www.duckychannel.com.tw/en/Ducky-PBT-Double-shot-Ultra-Violet-keycap" class="my_link" target='_blank'>Ducky Ultra-Violet Keycaps</a>. Translucent keycap version.`,
      fr: `Inspiré par <a href="https://www.duckychannel.com.tw/en/Ducky-PBT-Double-shot-Ultra-Violet-keycap" class="my_link" target='_blank'>Ducky Ultra-Violet Keycaps</a>. Version touches translucides.`
    }
  },
  {// ducky one rgb razer white frame
    bg: 'emperor',
    kbBase: { border: 'gainsboro', keyArea: 'gainsboro' },
    key: { nKey: 'ducky_one_2_razer', fKey: 'ducky_one_2_razer', sKey: 'ducky_one_2_razer', bs: 'ducky_one_2_razer', enterKey: 'ducky_one_2_razer', spaceBar: 'ducky_one_2_razer' },
    text: { nKey: 'white', bs: 'white', sKey: 'white' },
    pressedKey: 'green_bl',
    cmdList: ['ducky one 2 razer white frame', 'ducky one 2 rqwer zhite frq;e'],
    name: {
      tw: `靈感源於 <a href="https://www.duckychannel.com.tw/tw/Ducky-One2-RGB-Razer-Edition" class="my_link" target='_blank'>Ducky One 2 RGB Razer Edition</a>。白框版本。`,
      en: `inspired by <a href="https://www.duckychannel.com.tw/en/Ducky-One2-RGB-Razer-Edition" class="my_link" target='_blank'>Ducky One 2 RGB Razer Edition</a>. White border version.`,
      fr: `inspiré par <a href="https://www.duckychannel.com.tw/en/Ducky-One2-RGB-Razer-Edition" class="my_link" target='_blank'>Ducky One 2 RGB Razer Edition</a>. Version bord blanc.`
    },
    info: {
      tw: `靈感源於 <a href="https://www.duckychannel.com.tw/tw/Ducky-One2-RGB-Razer-Edition" class="my_link" target='_blank'>Ducky One 2 RGB Razer Edition</a>。白框版本。`,
      en: `Inspired by <a href="https://www.duckychannel.com.tw/en/Ducky-One2-RGB-Razer-Edition" class="my_link" target='_blank'>Ducky One 2 RGB Razer Edition</a>. White border version.`,
      fr: `Inspiré par <a href="https://www.duckychannel.com.tw/en/Ducky-One2-RGB-Razer-Edition" class="my_link" target='_blank'>Ducky One 2 RGB Razer Edition</a>. Version bord blanc.`
    }
  },
  {// ducky one 2 tuxedo
    bg: 'silver_tree',
    kbBase: { border: 'limed_spruce', keyArea: 'black' },
    key: { nKey: 'white', fKey: 'limed_spruce', sKey: 'limed_spruce', bs: 'limed_spruce', enterKey: 'roman', spaceBar: 'white' },
    text: { nKey: 'limed_spruce', bs: 'white', sKey: 'white' },
    pressedKey: 'yellow_bl',
    cmdList: [],
    name: {
      tw: `靈感源於 <a href="https://www.duckychannel.com.tw/tw/Ducky-One-2-Tuxedo" class="my_link" target='_blank'>Ducky One 2 燕尾服</a>。透光鍵帽版本。`,
      en: `inspired by <a href="https://www.duckychannel.com.tw/en/One-2-Tuxedo" class="my_link" target='_blank'>Ducky One 2 Tuxedo</a>. Translucent keycap version.`,
      fr: `inspiré par <a href="https://www.duckychannel.com.tw/en/One-2-Tuxedo" class="my_link" target='_blank'>Ducky One 2 Tuxedo</a> Version touches translucides.`
    },
    info: {
      tw: `靈感源於 <a href="https://www.duckychannel.com.tw/tw/Ducky-One-2-Tuxedo" class="my_link" target='_blank'>Ducky One 2 燕尾服</a>。透光鍵帽版本。`,
      en: `Inspired by <a href="https://www.duckychannel.com.tw/en/One-2-Tuxedo" class="my_link" target='_blank'>Ducky One 2 Tuxedo</a>. Translucent keycap version.`,
      fr: `Inspiré par <a href="https://www.duckychannel.com.tw/en/One-2-Tuxedo" class="my_link" target='_blank'>Ducky One 2 Tuxedo</a> Version touches translucides.`
    }
  },
  {// ducky one 2 mini skyline
    bg: 'light_gray',
    kbBase: { border: 'emperor', keyArea: 'mine_shaft' },
    key: { nKey: 'regent_gray', fKey: 'emperor', sKey: 'emperor', bs: 'emperor', enterKey: 'picton_blue', spaceBar: 'regent_gray' },
    text: { nKey: 'white', bs: 'white', sKey: 'white' },
    pressedKey: 'blue_bl',
    cmdList: [],
    name: {
      tw: `靈感源於 <a href="https://www.duckychannel.com.tw/tw/Ducky-One2-Mini-skyline" class="my_link" target='_blank'>Ducky One 2 Mini 天際線版</a>。透光鍵帽版本。`,
      en: `inspired by <a href="https://www.duckychannel.com.tw/en/One-2-Mini-Skyline" class="my_link" target='_blank'>Ducky One 2 Mini Skyline</a>. Translucent keycap version.`,
      fr: `inspiré par <a href="https://www.duckychannel.com.tw/en/One-2-Mini-Skyline" class="my_link" target='_blank'>Ducky One 2 Mini Skyline</a>. Version touches translucides.`
    },
    info: {
      tw: `靈感源於 <a href="https://www.duckychannel.com.tw/tw/Ducky-One2-Mini-skyline" class="my_link" target='_blank'>Ducky One 2 Mini 天際線版</a>。透光鍵帽版本。`,
      en: `Inspired by <a href="https://www.duckychannel.com.tw/en/One-2-Mini-Skyline" class="my_link" target='_blank'>Ducky One 2 Mini Skyline</a>. Translucent keycap version.`,
      fr: `Inspiré par <a href="https://www.duckychannel.com.tw/en/One-2-Mini-Skyline" class="my_link" target='_blank'>Ducky One 2 Mini Skyline</a>. Version touches translucides.`
    }
  },
  {// ducky one 2 good in blue
    bg: 'good_blue',
    kbBase: { border: 'cornflower-appr', keyArea: 'mine_shaft' },
    key: { nKey: 'cornflower-appr', fKey: 'fiord', sKey: 'fiord', bs: 'fiord', enterKey: 'white', spaceBar: 'cornflower-appr' },
    text: { nKey: 'white', bs: 'white', sKey: 'white' },
    pressedKey: 'wheat_bl',
    cmdList: [],
    name: {
      tw: `靈感源於 <a href="https://www.duckychannel.com.tw/tw/Ducky-One2-Mini-Good-in-Blue" class="my_link" target='_blank'>Ducky One 2 海波浪</a>。透光鍵帽版本。`,
      en: `inspired by <a href="https://www.duckychannel.com.tw/en/Ducky-One2-Mini-Good-in-Blue" class="my_link" target='_blank'>Ducky One 2 Good in Blue</a>. Translucent keycap version.`,
      fr: `inspiré par <a href="https://www.duckychannel.com.tw/en/Ducky-One2-Mini-Good-in-Blue" class="my_link" target='_blank'>Ducky One 2 Good in Blue</a>. Version touches translucides.`
    },
    info: {
      tw: `靈感源於 <a href="https://www.duckychannel.com.tw/tw/Ducky-One2-Mini-Good-in-Blue" class="my_link" target='_blank'>Ducky One 2 海波浪</a>。透光鍵帽版本。`,
      en: `Inspired by <a href="https://www.duckychannel.com.tw/en/Ducky-One2-Mini-Good-in-Blue" class="my_link" target='_blank'>Ducky One 2 Good in Blue</a>. Translucent keycap version.`,
      fr: `Inspiré par <a href="https://www.duckychannel.com.tw/en/Ducky-One2-Mini-Good-in-Blue" class="my_link" target='_blank'>Ducky One 2 Good in Blue</a>e. Version touches translucides.`
    }
  },
  {// ducky one mini horizon
    bg: 'bunting',
    kbBase: { border: 'chambray', keyArea: 'black' },
    key: { nKey: 'chambray', fKey: 'river_bed', sKey: 'river_bed', bs: 'river_bed', enterKey: 'bright_sun', spaceBar: 'chambray' },
    text: { nKey: 'aquamarine', bs: 'bright_sun', sKey: 'bright_sun' },
    pressedKey: 'yellow_bl',
    cmdList: [],
    name: {
      tw: `靈感源於 <a href="https://www.duckychannel.com.tw/tw/Ducky-One2-Mini-Horizon" class="my_link" target='_blank'>Ducky One 2 Mini 地平線版</a>。透光鍵帽版本。`,
      en: `inspired by <a href="https://www.duckychannel.com.tw/en/Ducky-One2-Mini-Horizon" class="my_link" target='_blank'>Ducky One 2 Mini Horizon</a>. Translucent keycap version.`,
      fr: `inspiré par <a href="https://www.duckychannel.com.tw/en/Ducky-One2-Mini-Horizon" class="my_link" target='_blank'>Ducky One 2 Mini Horizon</a>.`
    },
    info: {
      tw: `靈感源於 <a href="https://www.duckychannel.com.tw/tw/Ducky-One2-Mini-Horizon" class="my_link" target='_blank'>Ducky One 2 Mini 地平線版</a>。透光鍵帽版本。`,
      en: `Inspired by <a href="https://www.duckychannel.com.tw/en/Ducky-One2-Mini-Horizon" class="my_link" target='_blank'>Ducky One 2 Mini Horizon</a>. Translucent keycap version.`,
      fr: `Inspiré par <a href="https://www.duckychannel.com.tw/en/Ducky-One2-Mini-Horizon" class="my_link" target='_blank'>Ducky One 2 Mini Horizon</a>.`
    }
  },
  {// ducky one 2 bon voyage
    bg: 'voyage_blue',
    kbBase: { border: 'white', keyArea: 'mine_shaft' },
    key: { nKey: 'white', fKey: 'havelock_blue', sKey: 'havelock_blue', bs: 'havelock_blue', enterKey: 'carnation', spaceBar: 'carnation' },
    text: { nKey: 'havelock_blue', bs: 'white', sKey: 'white' },
    pressedKey: 'yellow_bl',
    cmdList: [],
    name: {
      tw: `靈感源於 <a href="https://www.duckychannel.com.tw/tw/Ducky-One2-Bon-Voyage-Editon" class="my_link" target='_blank'>Ducky One 2 海灘假期</a>。透光鍵帽版本。`,
      en: `inspired by <a href="https://www.duckychannel.com.tw/en/Ducky-One2-Bon-Voyage-Edition" class="my_link" target='_blank'>Ducky One 2 Bon Voyage</a>. Translucent keycap version.`,
      fr: `inspiré par <a href="https://www.duckychannel.com.tw/en/Ducky-One2-Bon-Voyage-Edition" class="my_link" target='_blank'>Ducky One 2 Bon Voyage</a>. Version touches translucides.`
    },
    info: {
      tw: `靈感源於 <a href="https://www.duckychannel.com.tw/tw/Ducky-One2-Bon-Voyage-Editon" class="my_link" target='_blank'>Ducky One 2 海灘假期</a>。透光鍵帽版本。`,
      en: `Inspired by <a href="https://www.duckychannel.com.tw/en/Ducky-One2-Bon-Voyage-Edition" class="my_link" target='_blank'>Ducky One 2 Bon Voyage</a>. Translucent keycap version.`,
      fr: `Inspiré par <a href="https://www.duckychannel.com.tw/en/Ducky-One2-Bon-Voyage-Edition" class="my_link" target='_blank'>Ducky One 2 Bon Voyage</a>. Version touches translucides.`
    }
  },
  {// ducky one 2 midnight
    bg: 'emperor',
    kbBase: { border: 'rhino', keyArea: 'white' },
    key: { nKey: 'shark', fKey: 'shark', sKey: 'shark', bs: 'shark', enterKey: 'shark', spaceBar: 'shark' },
    text: { nKey: 'spray', bs: 'persian_pink', sKey: 'persian_pink' },
    pressedKey: 'pink_bl',
    cmdList: [],
    name: {
      tw: `靈感源於 <a href="https://www.duckychannel.com.tw/tw/Ducky-One2-Midnight" class="my_link" target='_blank'>Ducky One 2 午夜</a>。透光鍵帽版本。`,
      en: `inspired by <a href="https://www.duckychannel.com.tw/en/Ducky-One2-Midnight" class="my_link" target='_blank'>Ducky One 2 Midnight</a>. Translucent keycap version.`,
      fr: `inspiré par <a href="https://www.duckychannel.com.tw/en/Ducky-One2-Midnight" class="my_link" target='_blank'>Ducky One 2 Midnight</a>. Version touches translucides.`
    },
    info: {
      tw: `靈感源於 <a href="https://www.duckychannel.com.tw/tw/Ducky-One2-Midnight" class="my_link" target='_blank'>Ducky One 2 午夜</a>。透光鍵帽版本。`,
      en: `Inspired by <a href="https://www.duckychannel.com.tw/en/Ducky-One2-Midnight" class="my_link" target='_blank'>Ducky One 2 Midnight</a>. Translucent keycap version.`,
      fr: `Inspiré par <a href="https://www.duckychannel.com.tw/en/Ducky-One2-Midnight" class="my_link" target='_blank'>Ducky One 2 Midnight</a>. Version touches translucides.`
    }
  },
  {// kehchron k6 plastic
    bg: 'dark_silver',
    kbBase: { border: 'emperor', keyArea: 'black' },
    key: { nKey: 'keychron_k6-light', fKey: 'jumbo-appr', sKey: 'jumbo-appr', bs: 'jumbo-appr', enterKey: 'jumbo-appr', spaceBar: 'silver_chalice' },
    text: { nKey: 'white', bs: 'white', sKey: 'white' },
    pressedKey: 'yellow_bl',
    cmdList: ['keychron k6 a', 'keychron k6 q', 'keychron k6 white', 'keychron k6 zhite'],
    name: {
      tw: `靈感源於 <a href="https://www.keychron.com.tw/k6" class="my_link" target='_blank'>Keychron K6 輕量底座版</a>`,
      en: `inspired by <a href="https://www.keychron.com/products/keychron-k6-wireless-mechanical-keyboard" class="my_link" target='_blank'>Keychron K6 White Backlight Version</a>`,
      fr: `inspiré par <a href="https://www.keychron.com/products/keychron-k6-wireless-mechanical-keyboard" class="my_link" target='_blank'>Keychron K6 White Backlight Version</a>`
    },
    info: {
      tw: `靈感源於 <a href="https://www.keychron.com.tw/k6" class="my_link" target='_blank'>Keychron K6 輕量底座版</a>。亦可透過輸入 '<span class='cmd'>keychron k6 a</span>' 或 '<span class='cmd'>keychron k6 white</span>' 切換到此樣式。`,
      en: `Inspired by <a href="https://www.keychron.com/products/keychron-k6-wireless-mechanical-keyboard" class="my_link" target='_blank'>Keychron K6 White Backlight Version</a>. You can also switch to this style by typing '<span class='cmd'>keychron k6 a</span>' or '<span class='cmd'>keychron k6 white</span>'.`,
      fr: `Inspiré par <a href="https://www.keychron.com/products/keychron-k6-wireless-mechanical-keyboard" class="my_link" target='_blank'>Keychron K6 White Backlight Version</a>. Vous pouvez aussi passez à ce style en tapant « <span class='cmd'>keychron k6 a</span> » ou « <span class='cmd'>keychron k6 white</span> ».`
    }
  },
  {// keychron k6 aluminum
    bg: 'light_silver',
    kbBase: { border: 'emperor', keyArea: 'black' },
    key: { nKey: 'keychron_k6-dark', fKey: 'silver_chalice', sKey: 'silver_chalice', bs: 'silver_chalice', enterKey: 'silver_chalice', spaceBar: 'jumbo-appr' },
    text: { nKey: 'white', bs: 'white', sKey: 'white' },
    pressedKey: 'yellow_bl',
    cmdList: ['keychron k6 b', 'keychron k6 aluminum', 'keychron k6 qlu;inu;'],
    name: {
      tw: `靈感源於 <a href="https://www.keychron.com.tw/k6" class="my_link" target='_blank'>Keychron K6 鋁合金底座版</a>`,
      en: `inspired by <a href="https://www.keychron.com/products/keychron-k6-wireless-mechanical-keyboard" class="my_link" target='_blank'>Keychron K6 Aluminum Frame</a>`,
      fr: `inspiré par <a href="https://www.keychron.com/products/keychron-k6-wireless-mechanical-keyboard" class="my_link" target='_blank'>Keychron K6 Aluminum Frame</a>`
    },
    info: {
      tw: `靈感源於 <a href="https://www.keychron.com.tw/k6" class="my_link" target='_blank'>Keychron K6 鋁合金底座版</a>。亦可透過輸入'<span class='cmd'>keychron k6 b</span>' 或 '<span class='cmd'>keychron k6 aluminum</span>' 切換到此樣式。`,
      en: `Inspired by <a href="https://www.keychron.com/products/keychron-k6-wireless-mechanical-keyboard" class="my_link" target='_blank'>Keychron K6 Aluminum Frame</a>. You can also switch to this style by typing '<span class='cmd'>keychron k6 b</span>' or '<span class='cmd'>keychron k6 aluminum</span>'.`,
      fr: `Inspiré par <a href="https://www.keychron.com/products/keychron-k6-wireless-mechanical-keyboard" class="my_link" target='_blank'>Keychron K6 Aluminum Frame</a>. Vous pouvez aussi passez à ce style en tapant « <span class='cmd'>keychron k6 b</span> » ou « <span class='cmd'>keychron k6 aluminum</span> ».`
    }
  },
];
const cmdPrefix = [
  'virb aqx ', 'virb ,x ', 'virb aq2', 'vi4aqx ', 'vi4,x ', 'vi4aq2', // 行列 樣式
  'style', // aussi en français
];
const cmdDigitLength = 2;

// commands: cmdList, cmdPrefix + style set number (with leading zeros)
const cmdStyleSet = styleSetOptions.map(function (styleSet, i) {
  const styleNumber = (i + 1).toString();
  const numberLeadingZeros = '0'.repeat(cmdDigitLength - styleNumber.length) + styleNumber;
  return styleSet.cmdList.concat(cmdPrefix.map(p => p + numberLeadingZeros));
});

// define the initial styles
let defaultStyleSetNumber = 1;
const goodList = [1, 2, 3, 4, 6, 7, 9, 10, 13, 15, 24, 27];
const nightList = [3, 7, 15, 24];
const d = new Date();
const hour = d.getHours();
if (hour < 7 || (hour >= 11 && hour < 13)) {
  defaultStyleSetNumber = goodList[Math.floor(Math.random() * goodList.length)];
} else if (hour >= 21) {
  defaultStyleSetNumber = nightList[Math.floor(Math.random() * nightList.length)];
}
let currentStyleSetNumber = defaultStyleSetNumber;
let currentStylePressedKey = styleSetOptions[defaultStyleSetNumber - 1].pressedKey;

// #####[ content creation in game instructions ' ]######

// In game instructions, create:
//  - pressed key style previews
//  - pressed key style details
//  - style set instructions/table

createPressedKeyStylePreviews();
createPressedKeyStyleDetails();
createStyleSetInstructions(defaultStyleSetNumber);
createStyleSetTable();

function createPressedKeyStylePreviews() {
  let eggCollectionPreview = document.getElementById('egg_collection-preview');
  let otherPressedKeyStylePreview = document.getElementById('other_pressed_key_style-preview');
  stylePressedKeyOptions.forEach(function (style, i) {
    let container = document.createElement('div');
    container.id = 'preview-pressed_key_style-' + style;
    container.className = 'container-single_key';
    container.addEventListener('click', function () {
      document.getElementById('detail-pressed_key_style-' + style).scrollIntoView({ behavior: "smooth" });
    })
    if (i < 10) {
      container.classList.add('fade-in', 'w3-hide');
      eggCollectionPreview.appendChild(container);
    } else {
      otherPressedKeyStylePreview.appendChild(container);
    }

    let comment1 = document.createComment("Hey, you're NOT supposed to be reading these descriptions!");
    let comment2 = document.createComment("Try finding them ON YOUR OWN! You'll be well guided!");
    container.appendChild(comment1);
    container.appendChild(comment2);

    let previewKey = document.createElement('div');
    previewKey.className = 'n_key';
    previewKey.classList.add('pressed_key_style-' + style);
    let previewKeyKeycap = document.createElement('div');
    previewKeyKeycap.className = 'kb-keycap';
    previewKeyKeycap.innerHTML = '<span>行</span>';
    previewKey.appendChild(previewKeyKeycap);
    container.appendChild(previewKey);

    // key press effect (scale)
    $(previewKeyKeycap).mousedown(function () {
      $(this).parent().addClass('pressed');
    }).mouseup(function () {
      $(this).parent().removeClass('pressed');
    }).mouseleave(function () {
      $(this).parent().removeClass('pressed');
    })

    if (i < 10) {
      let unknownEgg = document.createElement('div');
      unknownEgg.className = 'container-single_key';
      unknownEgg.innerHTML = '<div class="unknown_egg">?</div>';
      eggCollectionPreview.appendChild(unknownEgg);
    }

    if (i % 5 == 4 && i != 9) {
      let lineBreak = document.createElement('div');
      lineBreak.className = 'flex-break';
      if (i < 9) {
        eggCollectionPreview.appendChild(lineBreak);
      } else {
        otherPressedKeyStylePreview.appendChild(lineBreak);
      }
    }
  })
}
function createPressedKeyStyleDetails() {
  let eggCollectionDetail = document.getElementById('egg_collection-detail');
  let otherPressedKeyStyleDetail = document.getElementById('other_pressed_key_style-detail');

  stylePressedKeyOptions.forEach(function (style, i) {
    let block = document.createElement('div');
    block.id = 'detail-pressed_key_style-' + style;
    if (i < 10) {
      block.classList.add('fade-in', 'w3-hide');
      eggCollectionDetail.appendChild(block);
    } else {
      otherPressedKeyStyleDetail.appendChild(block);
    }

    block.innerHTML += '<hr>';

    let styledKey = document.createElement('div');
    styledKey.className = 'n_key';
    styledKey.style.float = 'left';
    styledKey.classList.add('pressed_key_style-' + style);
    let styledKeyKeycap = document.createElement('div');
    styledKeyKeycap.className = 'kb-keycap';
    styledKeyKeycap.innerHTML = '<span>行</span>';
    styledKey.appendChild(styledKeyKeycap);
    block.appendChild(styledKey);

    // key press effect (scale)
    $(styledKeyKeycap).mousedown(function () {
      $(this).parent().addClass('pressed');
    }).mouseup(function () {
      $(this).parent().removeClass('pressed');
    }).mouseleave(function () {
      $(this).parent().removeClass('pressed');
    })

    // create description (name + instructions)
    let comment1 = document.createComment("Hey, you're NOT supposed to be reading these descriptions!");
    let comment2 = document.createComment("Try finding them ON YOUR OWN! You'll be well guided!");
    block.appendChild(comment1);
    block.appendChild(comment2);
    let styleDescription = document.createElement('div');
    styleDescription.className = 'description-pressed_key_style';
    block.appendChild(styleDescription);

    let styleName = document.createElement('div');
    styleName.className = 'style_name-pressed_key_style';
    styleName.textContent = stylePressedKeyInfo[style]['name'][stringLocal];
    styleDescription.appendChild(styleName);

    let comment1cp = comment1.cloneNode(true);
    let comment2cp = comment2.cloneNode(true);
    block.appendChild(comment1cp);
    block.appendChild(comment2cp);
    let styleInstructions = document.createElement('div');
    styleInstructions.className = 'instructions-pressed_key_style';
    styleInstructions.innerHTML = stylePressedKeyInfo[style]['instructions'][stringLocal];
    styleDescription.appendChild(styleInstructions);
  })

  const i18nRemark = {
    tw: `註：按下行列輸入法中「<span class='cmd'>預設</span>」兩字的鍵位、按下英文字 '<span class='cmd'>default</span>' 的鍵位、按下法文字 « <span class='cmd'>défaut</span> »（無尖音符也可）的鍵位即可返回預設樣式（<span id="current-default-pressed_key_style"></span>）。`,
    en: `Note: You can revert back to the default style (<span id="current-default-pressed_key_style"></span>) by typing the Chinese word '<span class='cmd'>預設</span>' with the Array input method (standard codes only), or the English word '<span class="cmd">default</span>', or the French word '<span class="cmd">défaut</span>' (ok without the acute accent).`,
    fr: `NB: Vous pouvez revenir au style par défaut (<span id="current-default-pressed_key_style"></span>) en tapant le mot chinois « <span class="cmd">預設</span> » avec la méthode Tableau (codes standard uniquement), ou le mot anglais « <span class="cmd">default</span> », ou le mot français « <span class="cmd">défaut</span> ».`
  };
  let remark = document.createElement('div');
  remark.innerHTML = i18nRemark[stringLocal];
  remark.style.padding = '5px 16px';
  remark.style.marginTop = '30px';
  remark.style.borderLeft = '6px solid #e08b8b';
  remark.style.clear = 'both'; // clear float
  otherPressedKeyStyleDetail.appendChild(remark);
}
function createStyleSetInstructions(num) {
  const numString = num.toString();
  const numLeadingZeros = '0'.repeat(cmdDigitLength - numString.length) + numString;
  const i18nPar1 = {
    tw: `按下行列輸入法中「<span class="cmd">樣式</span>」兩字的鍵位或按下英文字 '<span class="cmd">style</span>' 的鍵位後，輸入樣式編號即可切換到該樣式。樣式 ${numLeadingZeros} 為預設樣式。`,
    en: `You can switch to a keyboard style by first typing the Chinese word '<span class="cmd">樣式</span>' with the Array input method or the English word '<span class="cmd">style</span>' then entering the style number. Style ${numLeadingZeros} is the default style.`,
    fr: `Vous pouvez passer à un style du clavier en tapant d'abord le mot chinois « <span class="cmd">樣式</span> » avec la méthode Tableau ou le mot français « <span class="cmd">style</span> », puis entrant le numéro du style. Le style ${numLeadingZeros} est le style par défaut.`
  };
  const i18nPar2 = {
    tw: `<span class="cmd">連續按三次</span> <span class="keycap keycap-letter">[</span> 或 <span class="keycap keycap-letter">]</span> （ <span class="keycap keycap-letter">0↑</span> = <span class="keycap keycap-letter">p</span> 右邊的兩個鍵）可以切換至上一個或下一個樣式。`,
    en: `Pressing <span class="keycap keycap-letter">[</span> or <span class="keycap keycap-letter">]</span> (the two keys next to <span class="keycap keycap-letter">0↑</span> = <span class="keycap keycap-letter">p</span>) <span class="cmd">three times in succession</span> will switch to the previous or next style.`,
    fr: `En appuyant <span class="cmd">trois fois de suite</span> sur <span class="keycap keycap-letter">^</span> ou <span class="keycap keycap-letter">$</span> (les deux touches à droite de <span class="keycap keycap-letter">0↑</span> = <span class="keycap keycap-letter">p</span>), vous passez au style précédent ou suivant.`
  };
  const i18nPar3 = {
    tw: '當然，您可以任意搭配<b>全鍵盤樣式</b>以及<b>按鍵按下樣式</b>（包括十顆彩蛋）！',
    en: 'Of course, you can combine any <b>keyboard styles</b> with any <b>pressed key styles</b> (including the ten Easter eggs)!',
    fr: `Bien sûr, vous pouvez combiner les <b>styles du clavier</b> avec les <b>styles des touches pressées</b> (y compris les dix œufs de Pâques) !`
  }
  let elem = document.getElementById('instructions-style_set');
  elem.innerHTML += `<p>${i18nPar1[stringLocal]}</p><p>${i18nPar2[stringLocal]}</p><p>${i18nPar3[stringLocal]}</p>`;
}
function createStyleSetTable() {
  let i18nStyleNum = { tw: '樣式編號', en: 'Style number', fr: 'Numéro du style' };
  let i18nStyleName = { tw: '樣式描述', en: 'Style desription', fr: 'Desription du style' };

  let tableStyleSet = document.getElementById('table-style_set');

  // table header
  let tableStyleSetHeader = document.createElement('tr');
  tableStyleSetHeader.innerHTML = `<th class="w3-center">${i18nStyleNum[stringLocal]}</th><th class="w3-center">${i18nStyleName[stringLocal]}</th>`;
  tableStyleSet.appendChild(tableStyleSetHeader);

  // table data
  styleSetOptions.forEach(function (styleSet, i) {
    const i18nClick = {
      tw: '點擊切換到樣式 ',
      en: 'Click to switch to style ',
      fr: 'Cliquez pour passer au style '
    }
    const styleInfo = styleSet.info[stringLocal];
    const styleNumber = (i + 1).toString();
    const numberLeadingZeros = '0'.repeat(cmdDigitLength - styleNumber.length) + styleNumber;
    let row = document.createElement('tr');
    let tdNumber = document.createElement('td');
    tdNumber.className = 'w3-center';
    let x = document.createElement('span');
    x.textContent = numberLeadingZeros;
    x.style.cursor = 'pointer';
    x.title = i18nClick[stringLocal] + numberLeadingZeros;
    x.addEventListener('click', function () {
      changeStyleSet(i + 1);
      closeGameInstructions();
    });
    tdNumber.appendChild(x);
    let tdInfo = document.createElement('td');
    tdInfo.innerHTML = styleInfo;
    row.appendChild(tdNumber);
    row.appendChild(tdInfo);
    tableStyleSet.appendChild(row);
  })
}

// #####[ style initialisation ' ]#####

changeStyleSet(defaultStyleSetNumber); // after content creation in game instructions
addHrefInKeyboard();
$('.s_key span').removeClass('not-visible');

// #####[ change style ' ]#####

// could consider changing also characterColor
function changeStyleBg(styleName) {
  let header = document.getElementsByTagName('header')[0];
  header.className = 'bg_style-' + styleName; // because the only existing class is for the bg style
  void header.offsetWidth; // force browser to render changes
}
function changeStyleKbBase(objectStyleName) {
  // objectStyleName: {border: 'xxx', keyArea: 'xxx'}
  let kbBase = document.getElementById('keyboard');
  let keyAreaWrapper = document.getElementById('key_area');

  // the only existing class is for the kb base style
  kbBase.className = 'kb_base_style-' + objectStyleName.border;
  keyAreaWrapper.className = 'kb_base_style-' + objectStyleName.keyArea;

  // force browser to render changes
  void kbBase.offsetWidth;
  void keyAreaWrapper.offsetWidth;
}
function changeStyleKey(objectKeyStyle) {
  // objectStyleName: { nKey: 'xxx', fKey: 'xxx', sKey: 'xxx', bs: 'xxx', enterKey: 'xxx', spaceBar: 'xxx' }
  changeStyleKeyByKeyType('n_key', objectKeyStyle.nKey);
  changeStyleKeyByKeyType('f_key', objectKeyStyle.fKey);
  changeStyleKeyByKeyType('s_key', objectKeyStyle.sKey);
  changeStyleKeyByKeyType('backspace', objectKeyStyle.bs);
  changeStyleKeyByKeyType('enter_key', objectKeyStyle.enterKey);
  changeStyleKeyByKeyType('space_bar', objectKeyStyle.spaceBar);

  function changeStyleKeyByKeyType(keyType, styleName) {
    let keys = document.querySelectorAll('.' + keyType);
    for (let i = 0; i < keys.length; i++) {
      let key = keys[i];

      // remove all key styles
      for (let style of styleKeyOptions) {
        key.classList.remove('key_style-' + style);
      }
      void key.offsetWidth; // force browser to render changes
      key.classList.add('key_style-' + styleName);
    }
  }
}
function changeStyleText(objectTextStyle) {
  // objectTextStyle: { nKey: 'xxx', bs: 'xxx', sKey: 'xxx' }
  $('.kb-keycap').removeClass(styleTextOptions.map(x => 'text_style-' + x));
  $('.n_key .kb-keycap').addClass('text_style-' + objectTextStyle.nKey);
  $('.backspace .kb-keycap').addClass('text_style-' + objectTextStyle.bs);
  $('.s_key .kb-keycap').addClass('text_style-' + objectTextStyle.sKey);
}
function changeStylePressedKey(styleName) {
  currentStylePressedKey = styleName;
  changeCodeExampleIcon(styleName);

  // hrefs/texts in s_key exist/are visible only when using one of the first nine pressed key styles and using default style set
  if (stylePressedKeyOptions.slice(0, 9).includes(styleName) && currentStyleSetNumber == defaultStyleSetNumber) {
    addHrefInKeyboard();
    $('.s_key span').removeClass('not-visible');
  } else {
    removeHrefInKeyboard();
    $('.s_key span').addClass('not-visible');
  }
}
function changeStyleSet(num) {
  currentStyleSetNumber = num;
  const newStyleSet = styleSetOptions[num - 1];
  changeStyleBg(newStyleSet.bg);
  changeStyleKbBase(newStyleSet.kbBase);
  changeStyleKey(newStyleSet.key);
  changeStyleText(newStyleSet.text);
  changeStylePressedKey(newStyleSet.pressedKey);

  // detail of 'back to the default pressed key style' in game instructions (in all other command)
  $('#detail-pressed_key_style-default .n_key').removeClass(stylePressedKeyOptions.map(x => 'pressed_key_style-' + x)).addClass('pressed_key_style-' + newStyleSet.pressedKey);
  $('#current-default-pressed_key_style').text(stylePressedKeyInfo[newStyleSet.pressedKey]['name'][stringLocal]);

  // show keyboard style name
  const i18nTitle = { tw: '鍵盤樣式：', en: 'Keyboard style: ', fr: 'Style du clavier : ' }
  document.getElementById('keyboard_style_name').innerHTML = i18nTitle[stringLocal] + newStyleSet.name[stringLocal];
}

// these three functions are called in changeStylePressedKey
function removeHrefInKeyboard() { $('.s_key a').removeAttr('href') };
function addHrefInKeyboard() {
  $(".key-dictionary a").attr("href", "dictionary.html");
  $(".key-typing a").attr("href", "typing.html");
  $(".key-array a").attr("href", "#introduction");
}
function changeCodeExampleIcon(pressedKeyStyleName) {
  switch (pressedKeyStyleName) {
    case 'special':
      $('.codeExampleIcon').text('🎉');
      break;
    case 'red_bl':
      $('.codeExampleIcon').text('🔴');
      break;
    case 'sakura':
      $('.codeExampleIcon').text('🌸');
      break;
    case 'banana':
      $('.codeExampleIcon').text('🍌');
      break;
    case 'turtle':
      $('.codeExampleIcon').text('🐢');
      break;
    case 'alien':
      $('.codeExampleIcon').text('👽');
      break;
    default:
      $('.codeExampleIcon').text('🕹️');
  }
}

// #####[ detect command (and change style) ]#####
// ----- main function -----
function detectCmdStyle(eventCodeLowerCase) {
  detectCmdStylePressedKey(eventCodeLowerCase);
  detectCmdStyleSet(eventCodeLowerCase);
}

// initialise command states
let cmdDefaultStylePressedKeyState = Array(cmdDefaultStylePressedKey.length).fill('');
let cmdStylePressedKeyState = Object.fromEntries(
  stylePressedKeyOptions.map(style => [style, Array(cmdStylePressedKey[style].length).fill('')])
);
let cmdStyleSetState = cmdStyleSet.map(x => Array(x.length).fill(''));
let cmdPNStyleSetState = { previous: '', next: '' };

function detectCmdStylePressedKey(eventCodeLowerCase) {
  let styleOfDetectedCmd = '';
  let indexOfDetectedCmd = -1;
  if (keyCodeTable.hasOwnProperty(eventCodeLowerCase)) {
    const ch = keyCodeTable[eventCodeLowerCase].char;

    // first update states of default style commands, style/index of detected command
    let x = updateCmdState(cmdDefaultStylePressedKey, cmdDefaultStylePressedKeyState, ch);
    cmdDefaultStylePressedKeyState = x.updatedStates;
    if (x.index >= 0) {
      styleOfDetectedCmd = 'default';
      indexOfDetectedCmd = x.index;
    }

    // then update states of style commands, style/index of detected command
    for (let option of stylePressedKeyOptions) {
      let y = updateCmdState(cmdStylePressedKey[option], cmdStylePressedKeyState[option], ch);
      cmdStylePressedKeyState[option] = y.updatedStates;
      if (y.index >= 0) {
        styleOfDetectedCmd = option;
        indexOfDetectedCmd = y.index;
      }
    }

    // if detected a command
    if (indexOfDetectedCmd >= 0) {
      if (styleOfDetectedCmd == 'default') {
        cmdDefaultStylePressedKeyState[indexOfDetectedCmd] = '';
        changeStylePressedKey(styleSetOptions[currentStyleSetNumber - 1].pressedKey);
      } else {
        changeStylePressedKey(styleOfDetectedCmd);
        cmdStylePressedKeyState[styleOfDetectedCmd][indexOfDetectedCmd] = '';
        if (stylePressedKeyOptions.slice(0, 10).includes(styleOfDetectedCmd)) {
          easterEggs(styleOfDetectedCmd); // call easterEggs
        }
      }
    }
  } else {
    // in this case eventCodeLowerCase is not a key in keyCodeTable, so reinitialise all states
    cmdDefaultStylePressedKeyState = Array(cmdDefaultStylePressedKey.length).fill('');
    cmdStylePressedKeyState = Object.fromEntries(
      stylePressedKeyOptions.map(style => [style, Array(cmdStylePressedKey[style].length).fill('')])
    );
  }
}
function detectCmdStyleSet(eventCodeLowerCase) {
  if (eventCodeLowerCase == 'bracketright') {
    cmdStyleSetState = cmdStyleSet.map(x => Array(x.length).fill(''));
    cmdPNStyleSetState.previous = '';
    cmdPNStyleSetState.next += ']';
    if (cmdPNStyleSetState.next == ']]]') {
      cmdPNStyleSetState.next = '';
      if (currentStyleSetNumber < styleSetOptions.length) {
        changeStyleSet(currentStyleSetNumber + 1);
      } else {
        changeStyleSet(1);
      }
    }
  } else if (eventCodeLowerCase == 'bracketleft') {
    cmdStyleSetState = cmdStyleSet.map(x => Array(x.length).fill(''));
    cmdPNStyleSetState.next = '';
    cmdPNStyleSetState.previous += '[';
    if (cmdPNStyleSetState.previous == '[[[') {
      cmdPNStyleSetState.previous = '';
      if (currentStyleSetNumber > 1) {
        changeStyleSet(currentStyleSetNumber - 1);
      } else {
        changeStyleSet(styleSetOptions.length);
      }
    }
  } else if (keyCodeTable.hasOwnProperty(eventCodeLowerCase)) {
    cmdPNStyleSetState.previous = '';
    cmdPNStyleSetState.next = '';

    const ch = keyCodeTable[eventCodeLowerCase].char;
    let styleNumOfDetectedCmd = 0;
    let indexOfDetectedCmd = '-1';

    // update states of style set commands, styleNum/index of detected command
    for (let i = 0; i < styleSetOptions.length; i++) {
      let x = updateCmdState(cmdStyleSet[i], cmdStyleSetState[i], ch);
      cmdStyleSetState[i] = x.updatedStates;
      if (x.index >= 0) {
        styleNumOfDetectedCmd = i + 1;
        indexOfDetectedCmd = x.index;
      }
    }

    // if detected a command
    if (indexOfDetectedCmd >= 0) {
      changeStyleSet(styleNumOfDetectedCmd);
      cmdStyleSetState[styleNumOfDetectedCmd - 1][indexOfDetectedCmd] = '';
    }
  } else {
    // in this case eventCodeLowerCase is not a key in keyCodeTable, so reinitialise all states
    cmdStyleSetState = cmdStyleSet.map(x => Array(x.length).fill(''));
    cmdPNStyleSetState.previous = '';
    cmdPNStyleSetState.next = '';
  }
}

/* ===============
    EASTER EGGS '
  ================ */

// #####[ show hint, egg, congrats ]#####

// ----- main function (called in detectCmdStylePressedKey) -----
function easterEggs(eggStyle) {
  // eggStyle: one of the first ten pressed key styles
  showEgg(eggStyle);
  findAllEggs(eggStyle);
  updateEggStatus(eggStyle);
  updateEggHint();
}

// initialise hasFoundEasterEgg (boolean object)
let hasFoundEasterEgg = Object.fromEntries(stylePressedKeyOptions.slice(0, 10).map(x => [x, false]));

function updateEggStatus(eggStyle) {
  hasFoundEasterEgg[eggStyle] = true; // update hasFoundEasterEgg
}
function showEgg(eggStyle) {
  if (!hasFoundEasterEgg[eggStyle]) {
    // show the game notification icon if game instructions are close
    if (!areGameInstructionsOpen) {
      $('#game-notification').removeClass('w3-hide');
    }

    // remove game commments
    $('.game-comment').remove();

    // show the egg (in egg preview) and the detail block
    $('#preview-pressed_key_style-' + eggStyle).removeClass('w3-hide').next().remove();
    $('#detail-pressed_key_style-' + eggStyle).removeClass('w3-hide');

    // scroll to egg hunt title
    document.getElementById('egg_hunt-title').scrollIntoView({ behavior: "smooth" });
  }
}
function updateEggHint() {
  // if backlight Easter eggs are all found, remove bl egg hint
  if (stylePressedKeyOptions.slice(0, 5).every(x => hasFoundEasterEgg[x])) {
    $('#hint_for_easter_eggs-backlight').remove();
  }

  // if mode Easter eggs are all found, remmove mode egg hint
  // otherwise: show the hint if all bl eggs are found
  if (stylePressedKeyOptions.slice(5, 9).every(x => hasFoundEasterEgg[x])) {
    $('#hint_for_easter_eggs-mode').remove();
  } else if (stylePressedKeyOptions.slice(0, 5).every(x => hasFoundEasterEgg[x])) {
    $('#hint_for_easter_eggs-mode').removeClass('w3-hide');
  }

  // if special Easter egg is found, remmove special egg hint
  // otherwise: show the hint if all other eggs are found
  if (hasFoundEasterEgg.special) {
    $('#hint_for_easter_eggs-special').remove();
  } else if (stylePressedKeyOptions.slice(0, 9).every(x => hasFoundEasterEgg[x])) {
    $('#hint_for_easter_eggs-special').removeClass('w3-hide');
  }
}
function findAllEggs(eggStyle) {
  // cond = eggStyle not yet found, all other styls found
  const cond = stylePressedKeyOptions.slice(0, 10).every(s => (s == eggStyle) ? !hasFoundEasterEgg[s] : hasFoundEasterEgg[s]);
  if (cond) {
    // show the modal of congrats message
    $("#congrats_messages-modal-block").removeClass('w3-hide');
    $("#congrats_messages-modal_bg").removeClass('w3-hide');

    // show modal close button after 2000ms
    setTimeout(function () {
      $('#congrats_messages-modal-close').removeClass('w3-hide');
    }, 2000);
  }
}

// #####[ unlock all eggs ]#####

const cmdUnlock = [
  'unlock', 'd2verrouiller', 'deverrouiller',
  'jjof icm ', 'jjq icm ', 'j7icm ', // 行列 解鎖
  'ru,3nji3', 'jie suo' // 注音拼音 解鎖
];
let cmdUnlockState = Array(cmdUnlock.length).fill('');
function detectCmdUnlock(eventCodeLowerCase) {
  if (keyCodeTable.hasOwnProperty(eventCodeLowerCase)) {
    const ch = keyCodeTable[eventCodeLowerCase].char;
    let x = updateCmdState(cmdUnlock, cmdUnlockState, ch);
    cmdUnlockState = x.updatedStates;
    if (x.index >= 0) {
      cmdUnlockState[x.index] = '';
      unlockAllEggs();
    }
  } else {
    cmdUnlockState = Array(cmdUnlock.length).fill('');
  }
}
function unlockAllEggs() {
  for (const egg of stylePressedKeyOptions.slice(0, 10)) {
    easterEggs(egg);
  }
}

// #####[ click to get hints ]#####
$('.easter-egg-hint').click(function () {
  $(this).next().removeClass('w3-hide');
  $(this).remove()
})

// #####[ close congrats modal ]#####
$('#congrats_messages-modal-close').click(closeCongratsModal);
function closeCongratsModal() {
  // fade out the modal of congrats messaage in 1500ms then remove it
  $("#congrats_messages-modal-block").fadeOut(1500, function () { $(this).remove(); });
  $("#congrats_messages-modal_bg").fadeOut(1500, function () { $(this).remove(); });

  // show all other commands (in game instructions)
  $('#all_other_commands').removeClass('w3-hide');

  // change game instructions open button icon
  $('#game_instructions-icon').addClass('fa-gift').removeClass('fa-gamepad');

  // remove egg hunt title, show and scroll to congrats messsages (under egg hunt title)
  $('#egg_hunt-title').remove();
  $('#congrats_messages-block').removeClass('w3-hide');
  document.getElementById('congrats_messages-block').scrollIntoView({ behavior: "smooth" });

  // scroll to #all_other_commands if clicking on the reward sentence (second element in #congrats_messages-block)
  $('#congrats_messages-block').children().eq(1)
    .css('cursor', 'pointer')
    .click(function () {
      document.getElementById('all_other_commands').scrollIntoView({ behavior: "smooth" });
    })
}

/* ===========================
    INTERACTION WITH KEYBOARD
  ============================ */

let pressedKeyStyleTimeOut = {};
function pressedKeyStyleSetTimeOut(eventCodeLowerCase, domElem) {
  pressedKeyStyleTimeOut[eventCodeLowerCase] = setTimeout(function () {
    const listOfStyleClassName = stylePressedKeyOptions.map(x => 'pressed_key_style-' + x);
    domElem.classList.remove(...listOfStyleClassName);
    void domElem.offsetWidth; // force browser to render changes
  }, 1200);
}

// press keys on user's real keyboard
$(window).on({
  'keydown': function (e) {
    const eventCodeLowerCase = e.code.toLowerCase();
    clearTimeout(pressedKeyStyleTimeOut[eventCodeLowerCase]);
    let pressedKey = $('.' + eventCodeLowerCase);
    pressedKey.addClass('pressed');
    pressedKey.addClass('pressed_key_style-' + currentStylePressedKey);
    changeGameOutputStatus(eventCodeLowerCase);
    detectcodeExamples(eventCodeLowerCase);
    detectCmdStyle(eventCodeLowerCase);
    detectCmdUnlock(eventCodeLowerCase);
  },
  'keyup': function (e) {
    const eventCodeLowerCase = e.code.toLowerCase();
    let pressedKey = $('.' + eventCodeLowerCase);
    if (pressedKey.length) {
      pressedKeyStyleSetTimeOut(eventCodeLowerCase, pressedKey[0]); // jquery obj to DOM
    }
    pressedKey.removeClass('pressed');
  }
})

// click keys on the virtual keyboard
$("#keyboard .n_key .kb-keycap, .f_key .kb-keycap, #keyboard a, .enter_key .kb-keycap, .space_bar .kb-keycap, .backspace .kb-keycap").mousedown(function () {
  let clickedKey = $(this).parent();
  const eventCodeLowerCase = clickedKey.attr('name');
  clearTimeout(pressedKeyStyleTimeOut[eventCodeLowerCase]);
  clickedKey.addClass('pressed');
  clickedKey.addClass('pressed_key_style-' + currentStylePressedKey);
  changeGameOutputStatus(eventCodeLowerCase);
  detectcodeExamples(eventCodeLowerCase);
  detectCmdStyle(eventCodeLowerCase);
  detectCmdUnlock(eventCodeLowerCase);
}).mouseup(function () {
  let clickedKey = $(this).parent();
  clickedKey.removeClass('pressed');
  pressedKeyStyleSetTimeOut(clickedKey.attr('name'), clickedKey[0]);
}).mouseleave(function () {
  let clickedKey = $(this).parent();
  clickedKey.removeClass('pressed');
  pressedKeyStyleSetTimeOut(clickedKey.attr('name'), clickedKey[0]);
})

// prevent Space bar from scrolling page, Tab from going to next thing in browsers, Slash, Quote, from searching, Backspace from going to previous page in firefox)
let gameOutputFieldBottom = gameOutputFieldElem.offsetTop + gameOutputFieldElem.offsetHeight;
window.addEventListener('keydown', function (e) {
  if (
    (
      e.code == "Space"
      || e.key == " "
      || e.code == "Tab"
      || e.key == "/"
      || e.key == "'"
      || e.code == "Backspace"
      || e.key == "Backspace"
    )
    && gameOutputFieldBottom > window.pageYOffset
  ) { e.preventDefault(); }
})
