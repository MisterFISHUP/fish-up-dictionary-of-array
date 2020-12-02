/**
 * Author: FISH UP
 * https://array30.misterfishup.com/
 * Copyright © 2020 FISH UP Dictionary of Array
 * Date: 2020-11-16
 */

/* Structure: (use search)
  - i18n for the decomposition generator
  - decomposition generator +
*/

// ------------------------------------
// i18n for the decomposition generator
// ------------------------------------

const decompositionGeneratorLocal = {
  arrayRadical: { tw: '行列字根', en: 'Array radical', fr: 'radical Tableau' },
  radicalCode: { tw: '字根碼', en: 'radical code', fr: 'code de radical' },
  colon: { tw: '：', en: ': ', fr: ' : ' },
  specialSC: { tw: '特別歸位簡體字根', en: 'specially encoded radical used only in simplified Chinese', fr: 'radical spécialement encodé utilisé uniquement en chinois simplifié' },
  special: { tw: '特別歸位字根', en: 'specially encoded radical', fr: 'radical spécialement encodé' },
  sc: { tw: '簡體字根', en: 'radical used only in simplified Chinese', fr: 'radical utilisé uniquement en chinois simplifié' },
  rareRadical: {
    tw: '（罕用字根，此字根需鍵入 4 次）',
    en: " (must be entered 4 times: radical as a rare character)",
    fr: " (doit être saisi 4 fois : radical comme caractère rare)",
  },
  rareKey: { tw: '罕字鍵', en: 'rare character key', fr: 'touche de caractère rare' },
  errorTolerance: { tw: '（容錯）', en: ' (error tolerance)', fr: " (tolérance d'erreurs)" }
}

// -----------------------
// decomposition generator +
// -----------------------

// display decomposition in #id_name
// input(decomp): radical representitive(s) + [4][r][e]
// for example:
// '一一一' -> 一 1- + 一 1- + 一 1-
// '卅4'    -> 卅 4-（罕用字根，此字根需鍵入 4 次）
// '力口贝r'-> 力 59 + 口 0- + 贝 78 + 罕字鍵
// '镸4r'   -> 镸 16（罕用字根，此字根需鍵入 4 次）+ 罕字鍵
// '一一re' -> 一 1- + 一 1- + 罕字鍵（容錯）
function createDecomposition(decomp, id_name) {
  let elem = document.getElementById(id_name);

  // is quadruple, rare character key added, error tolerance
  const isQ = decomp.includes('4');
  const isR = decomp.includes('r');
  const isE = decomp.includes('e');

  // get radical number
  const radicalNumber = decomp.length - ~~isQ - ~~isR - ~~isE;

  // loop through radicals in decomp
  for (let i = 0; i < radicalNumber; i++) {
    const radicalRepr = decomp[i];
    const radicalInfo = arrayRadicalInformation[radicalRepr];

    // create radical node (span or img depending on isText)
    let radicalElem = radicalInfo.isText ?
      document.createElement('span') :
      document.createElement('img');

    // if it's special or sc or both
    // add the corresponding class and title
    if (radicalInfo.isSimplified && radicalInfo.type == 'special') {
      radicalElem.className = "radical-special-sc";
      radicalElem.title = decompositionGeneratorLocal.specialSC[stringLocal];
    } else if (radicalInfo.isSimplified) {
      radicalElem.className = "radical-sc";
      radicalElem.title = decompositionGeneratorLocal.sc[stringLocal];
    } else if (radicalInfo.type == 'special') {
      radicalElem.className = "radical-special";
      radicalElem.title = decompositionGeneratorLocal.special[stringLocal];
    }

    // add its own class
    radicalElem.className += ' radical-' + radicalRepr;

    // add content to the node
    if (radicalInfo.isText) {
      radicalElem.textContent = radicalRepr;
    } else {
      radicalElem.className += " radical";
      radicalElem.src = '/img/array30-radical/' + radicalInfo.imgName + '.png';
      radicalElem.alt = decompositionGeneratorLocal.arrayRadical[stringLocal] + ' ' + radicalInfo.code + decompositionGeneratorLocal.colon[stringLocal] + radicalInfo.imgDescription[stringLocal];
    }

    // create radicalCode node
    let radicalCodeElem = document.createElement('span');
    radicalCodeElem.className = 'radical-code';
    radicalCodeElem.textContent = radicalInfo.code;
    radicalCodeElem.title = decompositionGeneratorLocal.radicalCode[stringLocal];

    // append radicalElem and radicalCode to elem
    elem.appendChild(radicalElem);
    elem.innerHTML += ' ';
    elem.appendChild(radicalCodeElem);

    // if not the last radical in the decomp, add '+' plus sign (with space before and after)
    if (i != radicalNumber - 1) {
      elem.innerHTML += ' <span class="radical-plus">+</span> '
    }
  }

  // add hint for pressing the key 4 times 
  if (isQ) {
    elem.innerHTML += decompositionGeneratorLocal.rareRadical[stringLocal];
  }

  // add rare character key
  if (isR) {
    elem.innerHTML += ' <span class="radical-plus">+</span> ' + decompositionGeneratorLocal.rareKey[stringLocal];
  }

  // add error tolerance hint
  if (isE) {
    elem.innerHTML += decompositionGeneratorLocal.errorTolerance[stringLocal];
  }
}
