/* structure:
  - two objects
  - functions that change game status
  - user interaction
  - color easter eggs
*/

// ------------
// two objects
// ------------

const array30ToLetterDict = { '1-': 'a', '5↓': 'b', '3↓': 'c', '3-': 'd', '3↑': 'e', '4-': 'f', '5-': 'g', '6-': 'h', '8↑': 'i', '7-': 'j', '8-': 'k', '9-': 'l', '7↓': 'm', '6↓': 'n', '9↑': 'o', '0↑': 'p', '1↑': 'q', '4↑': 'r', '2-': 's', '5↑': 't', '7↑': 'u', '4↓': 'v', '2↑': 'w', '2↓': 'x', '6↑': 'y', '1↓': 'z', '9↓': '.', '0↓': '/', '0-': ';', '8↓': ',' };
const keyCodeTable = {
  // keys are automatically converted into string
  32: { 'array30': 'Space', 'type': 'space' },
  48: { 'array30': '0', 'type': 'number' },
  49: { 'array30': '1', 'type': 'number' },
  50: { 'array30': '2', 'type': 'number' },
  51: { 'array30': '3', 'type': 'number' },
  52: { 'array30': '4', 'type': 'number' },
  53: { 'array30': '5', 'type': 'number' },
  54: { 'array30': '6', 'type': 'number' },
  55: { 'array30': '7', 'type': 'number' },
  56: { 'array30': '8', 'type': 'number' },
  57: { 'array30': '9', 'type': 'number' },
  65: { 'array30': '1-', 'type': 'letter' },
  66: { 'array30': '5↓', 'type': 'letter' },
  67: { 'array30': '3↓', 'type': 'letter' },
  68: { 'array30': '3-', 'type': 'letter' },
  69: { 'array30': '3↑', 'type': 'letter' },
  70: { 'array30': '4-', 'type': 'letter' },
  71: { 'array30': '5-', 'type': 'letter' },
  72: { 'array30': '6-', 'type': 'letter' },
  73: { 'array30': '8↑', 'type': 'letter' },
  74: { 'array30': '7-', 'type': 'letter' },
  75: { 'array30': '8-', 'type': 'letter' },
  76: { 'array30': '9-', 'type': 'letter' },
  77: { 'array30': '7↓', 'type': 'letter' },
  78: { 'array30': '6↓', 'type': 'letter' },
  79: { 'array30': '9↑', 'type': 'letter' },
  80: { 'array30': '0↑', 'type': 'letter' },
  81: { 'array30': '1↑', 'type': 'letter' },
  82: { 'array30': '4↑', 'type': 'letter' },
  83: { 'array30': '2-', 'type': 'letter' },
  84: { 'array30': '5↑', 'type': 'letter' },
  85: { 'array30': '7↑', 'type': 'letter' },
  86: { 'array30': '4↓', 'type': 'letter' },
  87: { 'array30': '2↑', 'type': 'letter' },
  88: { 'array30': '2↓', 'type': 'letter' },
  89: { 'array30': '6↑', 'type': 'letter' },
  90: { 'array30': '1↓', 'type': 'letter' },
  59: { 'array30': '0-', 'type': 'letter' },
  188: { 'array30': '8↓', 'type': 'letter' },
  190: { 'array30': '9↓', 'type': 'letter' },
  191: { 'array30': '0↓', 'type': 'letter' },
}

// -------------------
// functions that change game status
// -------------------

var gameFieldElem = document.getElementById('game-field');
function changeGameStatus(code) {
  // backspace
  if (code == '8') { gameBackspace(); }
  // execute only when code is in keyCodeTable
  if (keyCodeTable.hasOwnProperty(code)) {
    gameAdd(code);
    gameDetectShortCode(code);
    gameDetectCode(code);
  }
  // auto clear
  gameAutoClear();
}

// delete last elem (if existing) in the game field
function gameBackspace() {
  if (gameFieldElem.lastChild) {
    gameFieldElem.removeChild(gameFieldElem.lastChild);
  }
};

// add key
function gameAdd(code) {
  const keyArray = keyCodeTable[code]['array30'];
  const keyType = keyCodeTable[code]['type'];
  $('#game-field').append('<span style="margin-right: 4px" class="w3-animate-right keycap keycap-' + keyType + '">' + keyArray + '</span>');
};

const characterColor = 'black'
// detect short codes and transfer into character
function gameDetectShortCode(code) {
  // function executed only when code type is number
  if (keyCodeTable[code]['type'] == 'number') {
    let numberString = keyCodeTable[code]['array30'];
    let children = $('#game-field span');
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

// detect codes and transfer into character
function gameDetectCode(code) {
  // function executed only when code type is space
  if (keyCodeTable[code]['type'] == 'space') {
    let children = $('#game-field span');
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

// clear the game field when it's too wide
function gameAutoClear() {
  // static children
  let children = document.querySelectorAll('#game-field span');
  // calculate gameField width
  let gameFieldWidth = 0;
  for (let i = 0; i < children.length; i++) {
    gameFieldWidth += children[i].offsetWidth;
    gameFieldWidth += 4; // margin-right of each child
  }
  // if game field too wide
  if (gameFieldWidth > 910) {
    // clear game field 
    for (let i = 0; i < children.length; i++) {
      gameFieldElem.removeChild(children[i]);
    }
    // reset all color easter eggs' state
    for (const command in easterEggForColorState) {
      easterEggForColorState[command] = '';
    }
  }
};

// -----------------
// user interaction
//------------------

// set default backlit color
let rgbColor = 'pink';

// remove RGB (backlit color) in 1000 ms
var objectRemoveRGB = {};
function removeRGB(keyc, jqueryObject) {
  objectRemoveRGB[keyc] = setTimeout(function () {
    jqueryObject.removeClass('rgb_pink rgb_green rgb_yellow rgb_blue rgb_purple rgb_trolling rgb_flashing rgb_disappearing rgb_blurred')
  }, 1000);
}

// press keys on user's real keyboard
$(window).on({
  'keydown': function (e) {
    var pressedKey = $('.k' + e.keyCode);
    // clear current rgb removal setTimeout
    clearTimeout(objectRemoveRGB[e.keyCode.toString()]);
    // become pressed, add rgb color
    pressedKey.addClass('pressed rgb_' + rgbColor);
    // change game status
    changeGameStatus(e.keyCode.toString());
    // check and update easter egg states
    getEasterEggForColor(e.key);
  },
  'keyup': function (e) {
    var pressedKey = $('.k' + e.keyCode);
    // not pressed anymore
    pressedKey.removeClass('pressed');
    // rgb removal setTimeout
    removeRGB(e.keyCode.toString(), pressedKey);
  }
});

// click keys on the virtual keyboard
$(".keyboard-keycap").mousedown(function () {
  let clickedKey = $(this).parent();
  // clear current rgb removal setTimeout
  clearTimeout(objectRemoveRGB[clickedKey.attr('name')]);
  // become pressed, add rgb color
  clickedKey.addClass('pressed rgb_' + rgbColor);
  // change game status
  changeGameStatus(clickedKey.attr('name'));
  // check and update easter egg states
  getEasterEggForColor(String.fromCharCode(clickedKey.attr('name')).toLowerCase().toLowerCase())
}).mouseup(function () {
  let clickedKey = $(this).parent();
  // not pressed anymore
  clickedKey.removeClass('pressed');
  // rgb removal setTimeout
  removeRGB(clickedKey.attr('name'), clickedKey);
}).mouseleave(function () {
  let clickedKey = $(this).parent();
  // not pressed anymore
  clickedKey.removeClass('pressed');
  // rgb removal setTimeout
  removeRGB(clickedKey.attr('name'), clickedKey);
})

// ------------------
// color easter eggs
// ------------------

// 9 colors (modes)
// green, pink, yellow, blue, purple, trolling, flashing, blurred, disappearing
const easterEggForColor = {
  // trolling
  '1234567890': 'trolling', // 0987654321 to turn off
  'trolling': 'trolling',
  'fish up': 'trolling',
  'array': 'trolling',
  // disappearing
  'qwertyuiop': 'disappearing', // /.,mnbvcxz to turn off
  'disappearing': 'disappearing',
  'cc7oz1': 'disappearing', // 行列 消失 Start
  'cc7oz ': 'disappearing',
  'ccu oz1': 'disappearing',
  'ccu oz ': 'disappearing', // 行列 消失 End
  'vul g ': 'disappearing', // 注音 消失
  'xiao shi': 'disappearing', // 拚音 消失
  't.qn faxx ': 'disappearing', // 行列 隱藏 Start
  't.qn fxax ': 'disappearing',
  't.qn fzsx': 'disappearing', // 行列 隱藏 End
  'up3h;6': 'disappearing', // 注音 隱藏
  'yin cang': 'disappearing', // 拼音 隱藏
  // flashing
  'asdfghjkl;': 'flashing', // ;lkjhgfdsa to turn off
  'flashing': 'flashing',
  'ek1,lpv ': 'flashing', // 行列 閃爍 Start
  'ek1,xlv ': 'flashing',
  'ek ,lpv ': 'flashing',
  'ek ,xlv ': 'flashing', // 行列 閃爍 End
  'g03gji4': 'flashing', // 注音 閃爍
  'shan shuo': 'flashing', // 拼音 閃爍
  // blurred
  'zxcvbnm,./': 'blurred', // /.,mnbvcxz tu turn off
  'blurred': 'blurred',
  'vfpz ,f0': 'blurred', // 行列 Start
  'vfpz ,f;u ': 'blurred', // 行列 End
  'ai6cj6': 'blurred', // 注音 模糊
  'mo hu': 'blurred', // 拼音 模糊
  // blue
  'blue': 'blue',
  'bleu': 'blue',
  'fqdu j9': 'blue', // 行列 Start
  'fqdu jt3': 'blue',
  'fqdu jtds ': 'blue', // 行列 End
  'x06nk4': 'blue', // 注音
  'lan se': 'blue', // 拼音
  // yellow
  'yellow': 'yellow',
  'jaune': 'yellow',
  'rp8j9': 'yellow', // 行列 Start
  'rp8jt3': 'yellow',
  'rp8jtds ': 'yellow',
  'rpfk j9': 'yellow',
  'rpfk jt3': 'yellow',
  'rpfk jtds ': 'yellow',
  'rpk j9': 'yellow',
  'rpk jt3': 'yellow',
  'rpk jtds ': 'yellow', // 行列 End
  'cj;6nk4': 'yellow', // 注音
  'huang se': 'yellow', // 拼音
  // purple
  'purple': 'purple',
  'violet': 'purple',
  'eqx j9': 'purple', // 行列 Start
  'eqx jt3': 'purple',
  'eqx jtds ': 'purple', // 行列 End
  'y3nk4': 'purple', // 注音
  'zi se': 'purple', // 拼音
  // green
  'green': 'green',
  'vert': 'green',
  'xw3j9': 'green', // 行列 Start
  'xw3jt3': 'green',
  'xw3jtds ': 'green',
  'xwc j9': 'green',
  'xwc jt3': 'green',
  'xwc jtds ': 'green', // 行列 End
  'xm4nk4': 'green', // 注音
  'lu se': 'green', // 拼音
  // pink
  '0987654321': 'pink', // turn off trolling
  'poiuytrewq': 'pink', // turn off disappearing
  'vu03g4': 'pink', // turn off disappearing (注音 顯示)
  'xian shi': 'pink', // turn off disappearing (拼音 顯示)
  ';lkjhgfdsa': 'pink', // turn off flashing
  '/.,mnbvcxz': 'pink', // turn off blurred  
  'pink': 'pink',
  'rose': 'pink',
  ',k7j9': 'pink', // 行列 粉色 Start
  ',k7jt3': 'pink',
  ',k7jtds ': 'pink',
  ',k7j9': 'pink',
  ',k7jt3': 'pink',
  ',k7jtds ': 'pink',
  ',kj j9': 'pink',
  ',kj jt3': 'pink',
  ',kj jtds ': 'pink',
  ',kj j9': 'pink',
  ',kj jt3': 'pink',
  ',kj jtds ': 'pink', // 行列 粉色 End
  'zp3nk4': 'pink', // 注音 粉色
  'fen se': 'pink', // 拼音 粉色
  ',k7xq1j9': 'pink', // 行列 粉紅色 Start
  ',k7xq1jt3': 'pink',
  ',k7xq1jtds ': 'pink',
  ',k7xq j9': 'pink',
  ',k7xq jt3': 'pink',
  ',k7xq jtds ': 'pink',
  ',kj xq1j9': 'pink',
  ',kj xq1jt3': 'pink',
  ',kj xq1jtds ': 'pink',
  ',kj xq j9': 'pink',
  ',kj xq jt3': 'pink',
  ',kj xq jtds ': 'pink', // 行列 粉紅色 End
  'zp3cj/6nk4': 'pink', // 注音 粉紅色
  'fen hong se': 'pink', // 拼音 粉紅色
}

// initialise color easter egg states 
let easterEggForColorState = {};
for (const command in easterEggForColor) {
  easterEggForColorState[command] = '';
}

// check and update color easter egg states
function getEasterEggForColor(letter) {
  for (const command in easterEggForColorState) {
    // update state
    if (letter == command[easterEggForColorState[command].length]) {
      easterEggForColorState[command] += letter;
    } else {
      letter == command[0] ? easterEggForColorState[command] += letter : easterEggForColorState[command] = '';
    }
    // if easter egg is found
    if (easterEggForColorState[command] == command) {
      easterEggForColorState[command] = '';
      rgbColor = easterEggForColor[command];
    }
  }
}

// prevent Space bar from scrolling page (and Slash, Quote from searching in firefox)
let gameFieldBottom = document.getElementById('game-field').offsetTop + document.getElementById('game-field').offsetHeight
window.addEventListener('keydown', function (e) {
  if (e.code == "Space" && gameFieldBottom > window.pageYOffset) {
    e.preventDefault();
  }
  if (e.code == "Slash" && gameFieldBottom > window.pageYOffset) {
    e.preventDefault();
  }
  if (e.code == "Quote" && gameFieldBottom > window.pageYOffset) {
    e.preventDefault();
  }
});
