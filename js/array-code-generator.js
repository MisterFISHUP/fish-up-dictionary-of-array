/**
 * Author: FISH UP
 * https://array30.misterfishup.com/
 * Copyright © 2020-2021 FISH UP Dictionary of Array
 * Date: 2021 Jan. 30
 */

/* In this file:
  - three functions
    > ifInDb
    > createArrayDataList
    > createArrayCode
  - one i18n constant
    > i18nCR1
*/

const ifInDb = ch => codeSymbol.hasOwnProperty(ch)
  || codeSingle.hasOwnProperty(ch)
  || codeStandard.hasOwnProperty(ch)
  || codeArray10.hasOwnProperty(ch); // sp, sc1, sc2 already included

// append the Array code list (id = listId) of the character = ch to some elem (id = id)
// list components: decomp std sg sp sc1 sc2 sym array10;
// useEngKey: boolean; maxDecop = 0 | 1 | -1
// maxDecomp: 0: don't show any decomp; 1: show at most 1 decomp; -1: show all decomp
function createArrayCodeList(ch, listId, id, useEngKey, maxDecomp) {
  const elem = document.getElementById(id);
  let list = document.createElement('ul');
  list.id = listId;
  list.className = 'w3-ul w3-hoverable'; // #change
  elem.appendChild(list);

  if (codeDecomposition.hasOwnProperty(ch)) {
    if (typeof codeDecomposition[ch] === 'string') {
      let item = document.createElement('li');
      item.id = listId + '_item_decomp';
      item.className = 'itemDecomp itemMainDecomp';
      if (maxDecomp == 0) item.style.display = 'none';
      item.innerHTML = '<span class="keycap title-decomposition">拆</span>：';
      list.appendChild(item);
      createDecomposition(codeDecomposition[ch], item.id);
    } else {
      codeDecomposition[ch].forEach(function(decomp, i) {
        let item = document.createElement('li');
        item.id = listId + '_item_decomp_' + String(i + 1);
        item.className = 'itemDecomp';
        if (i == 0) item.classList.add('itemMainDecomp');
        if (maxDecomp == 0 || (maxDecomp == 1 && i > 0)) item.style.display = 'none';
        item.innerHTML = '<span class="keycap title-decomposition">拆</span>：';
        list.appendChild(item);
        createDecomposition(decomp, item.id);
      });
    }
  }

  if (codeStandard.hasOwnProperty(ch)) {
    codeStandard[ch].forEach(function(code, i) {
      let item = document.createElement('li');
      item.id = listId + '_item_std_' + String(i + 1);
      list.appendChild(item);
      createArrayCode('std', code, item.id, useEngKey);
    });
  }

  if (codeSingle.hasOwnProperty(ch)) {
    let item = document.createElement('li');
    item.id = listId + '_item_sg';
    list.appendChild(item);
    createArrayCode('sg', codeSingle[ch], item.id, useEngKey);
  }

  if (codeSpecial.hasOwnProperty(ch)) {
    let item = document.createElement('li');
    item.id = listId + '_item_sp';
    list.appendChild(item);
    createArrayCode('sp', codeSpecial[ch], item.id, useEngKey);
    if (["敦", "雇"].includes(ch)) {
      const cr1 = document.createTextNode(i18nCR1.default[stringLocal]);
      item.appendChild(cr1);
    }
  }

  if (codeShort1.hasOwnProperty(ch)) {
    let item = document.createElement('li');
    item.id = listId + '_item_sc1';
    list.appendChild(item);
    createArrayCode('sc1', codeShort1[ch], item.id, useEngKey);
  }

  if (codeShort2.hasOwnProperty(ch)) {
    if (typeof codeShort2[ch] === 'string') {
      let item = document.createElement('li');
      item.id = listId + '_item_sc2';
      list.appendChild(item);
      createArrayCode('sc2', codeShort2[ch], item.id, useEngKey);
    } else {
      codeShort2[ch].forEach(function (code, i) {
        let item = document.createElement('li');
        item.id = listId + '_item_sc2_' + String(i + 1);
        list.appendChild(item);
        createArrayCode('sc2', code, item.id, useEngKey);
      });
    }
  }

  if (codeSymbol.hasOwnProperty(ch)) {
    let item = document.createElement('li');
    item.id = listId + '_item_sym';
    list.appendChild(item);
    createArrayCode('sym', codeSymbol[ch], item.id, useEngKey);
  }

  if (codeArray10.hasOwnProperty(ch)) {
    let item = document.createElement('li');
    item.innerHTML = `<span class="keycap title-array10">數</span>'：${codeArray10[ch]}`;
    list.appendChild(item);
  }
}

// append the beautified array code of type = type (from codeData) to the elem (id = id)
// type = 'sg' | 'sp' | 'sc1' | 'sc2' | 'sym' | 'std'
// type  codeData
// sg  : string of a letter
// sp  : string of two letters
// sc1 : string of a letter + a digit
// sc2 : string of two letters + a digit
// sym : array [A, B] where A is a 1-digit number and B is a number (coincidence rank)
// std : array [A, B] where A is a string of letters and B is a number (coincidence rank)
// Example: 單：1- + Space, or 單：a + Space (depending on useEngKey)
function createArrayCode(type, codeData, id, useEngKey) {
  const elem = document.getElementById(id);
  switch (type) {
    case 'sg': {
      const key = useEngKey ? codeData : letterToArray30Dict[codeData];
      elem.innerHTML += `<span class="keycap title-single">單</span>：`;
      elem.innerHTML += `<span class="keycap keycap-letter">${key}</span>`;
      elem.innerHTML += ` + <span class="keycap keycap-space">Space</span>`;
      break;
    }
    case 'sp': {
      const keys = useEngKey ? [...codeData] : [...codeData].map(x => letterToArray30Dict[x]);
      elem.innerHTML += `<span class="keycap title-special">特</span>：`;
      elem.innerHTML += `<span class="keycap keycap-letter">${keys[0]}</span>`;
      elem.innerHTML += ` + <span class="keycap keycap-letter">${keys[1]}</span>`;
      elem.innerHTML += ` + <span class="keycap keycap-space">Space</span>`;
      break;
    }
    case 'sc1': {
      const key1 = useEngKey ? codeData[0] : letterToArray30Dict[codeData[0]];
      elem.innerHTML += `<span class="keycap title-shortcode1">一</span>：`;
      elem.innerHTML += `<span class="keycap keycap-letter">${key1}</span>`;
      elem.innerHTML += ` + <span class="keycap keycap-number">${codeData[1]}</span>`;
      break;
    }
    case 'sc2': {
      const key1 = useEngKey ? codeData[0] : letterToArray30Dict[codeData[0]];
      const key2 = useEngKey ? codeData[1] : letterToArray30Dict[codeData[1]];
      elem.innerHTML += `<span class="keycap title-shortcode2">二</span>：`;
      elem.innerHTML += `<span class="keycap keycap-letter">${key1}</span>`;
      elem.innerHTML += ` + <span class="keycap keycap-letter">${key2}</span>`;
      elem.innerHTML += ` + <span class="keycap keycap-number">${codeData[2]}</span>`;
      break;
    }
    case 'sym': {
      const keyW = useEngKey ? 'w' : letterToArray30Dict['w'];
      elem.innerHTML += `<span class="keycap title-symbol">符</span>：`;
      elem.innerHTML += `<span class="keycap keycap-letter">${keyW}</span>`;
      elem.innerHTML += ` + <span class="keycap keycap-number">${codeData[0]}</span>`;
      for (i = 10; i < codeData[1]; i += 10) {
        elem.innerHTML += ` + <span class="keycap keycap-space">Space</span>`;
      }
      elem.innerHTML += ` + <span class="keycap keycap-cc">${codeData[1] % 10}</span>`;
      break;
    }
    case 'std': {
      const keys = useEngKey ? [...codeData[0]] : [...codeData[0]].map(x => letterToArray30Dict[x]);
      elem.innerHTML += `<span class="keycap title-standard">普</span>：`;
      keys.forEach(function (key) {
        elem.innerHTML += `<span class="keycap keycap-letter">${key}</span> + `;
      })
      elem.innerHTML += `<span class="keycap keycap-space">Space</span>`;

      if (codeData[1] == 1) {
        const ccData = ccCount[codeData[0]]; // get coincident code data
        switch (ccData[0]) {
          case 0:
            if (ccData[1] > 1) {
              elem.innerHTML += i18nCR1.default[stringLocal];
            } else if (ccData[1] == 1 && ccData[2] > 0) {
              elem.innerHTML += i18nCR1.extCD[stringLocal];
            } else if (ccData[1] == 0 && ccData[2] > 1) {
              elem.innerHTML += i18nCR1.default[stringLocal];
            }
            break;
          case 1:
            if (ccData[1] > 0) {
              elem.innerHTML += i18nCR1.extB[stringLocal];
            } else if (ccData[2] > 0) {
              elem.innerHTML += i18nCR1.extCD[stringLocal];
            }
            break;
          default:
            elem.innerHTML += i18nCR1.default[stringLocal];
        }
      } else if (codeData[1] < 10) {
        elem.innerHTML += ` + <span class="keycap keycap-cc">${codeData[1]}</span>`;
      } else if (codeData[1] == 10) {
        elem.innerHTML += ` + <span class="keycap keycap-cc">0</span>`;
      } else {
        // codeData[1] between 11 and 19
        elem.innerHTML += ` + <span class="keycap keycap-space">Space</span>`;
        elem.innerHTML += ` + <span class="keycap keycap-cc">${codeData[1] - 10}</span>`;
      }
      break;
    }
    default:
      console.log('Invalid code type for createArrayCode.');
  }
}

// hints for coincidence rank 1
const i18nCR1 = {
  default: {
    tw: '，重碼位 1',
    en: ', coincidence rank equal to 1',
    fr: ', rang de coïncidence égal à 1'
  },
  extB: {
    tw: '，若啟用擴充區 B 則重碼位 1，否則無重碼',
    en: ', coincidence rank equal to 1 if Extension B (CJK Unified Ideographs) activated, otherwise non-coincident code',
    fr: ', rang de coïncidence égal à 1 si Supplément B (Sinogrammes unifiés CJC) activée, sinon code non coïncident'
  },
  extCD: {
    tw: '，若啟用擴充區 CD 則重碼位 1，否則無重碼',
    en: ', coincidence rank equal to 1 if Extension CD (CJK Unified Ideographs) activated, otherwise non-coincident code',
    fr: ', rang de coïncidence égal à 1 si Suppléments CD (Sinogrammes unifiés CJC) activée, sinon code non coïncident'
  },
};
