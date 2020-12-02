/**
 * Author: FISH UP
 * https://array30.misterfishup.com/
 * Copyright © 2020 FISH UP Dictionary of Array
 * Date: 2020-11-26
 */

// File used in dictionary.html during development,
// not imported when website deployed

// convert a radical into its English key
// ex: 日 -> p (return N if not radical)
function radicalToEnglishKey(repr) {
  if (!arrayRadicalInformation.hasOwnProperty(repr)) {
    return 'N';
  } else {
    const radicalCode = arrayRadicalInformation[repr].code;
    let rowPosition = '-';
    if (['0', '1', '2', '3', '4'].includes(radicalCode[1])) {
      rowPosition = '↑';
    } else if (['6', '7', '8', '9'].includes(radicalCode[1])) {
      rowPosition = '↓';
    }
    const radicalKey = radicalCode[0] + rowPosition;
    return array30ToLetterDict[radicalKey];
  }
}

// convert a decomposition into its Array code written in English keys
// ex: 日日 -> pp; 镸4r -> zzzzi; 一一e -> aa (e is neglected)
// return N or NNNN if there is any error
function decompositionConverter(decomp) {
  // convert a decomp without r and e into its English Array code
  // return N or NNNN if there is any error
  function conversion(realDecomp) {
    if (realDecomp.includes('4')) {
      // must be repr + '4'
      if (realDecomp.length != 2 || realDecomp[1] != '4') {
        return 'N';
      } else {
        return radicalToEnglishKey(realDecomp[0]).repeat(4);
      }
    } else {
      let output = '';
      for (const repr of realDecomp) {
        output += radicalToEnglishKey(repr);
      }
      return output;
    }
  }

  // remove e if exists
  let beforeConversion = decomp;
  if (decomp.includes('e')) {
    // the 'e' mark must be at the end
    if (decomp.indexOf('e') != decomp.length - 1) {
      return 'N';
    } else {
      beforeConversion = decomp.slice(0, -1);
    }
  }

  // remove r if exists
  if (beforeConversion.includes('r')) {
    // the 'r' mark must be at the end
    if (beforeConversion.indexOf('r') != beforeConversion.length - 1) {
      return 'N';
    } else {
      return conversion(beforeConversion.slice(0, -1)) + 'i';
    }
  } else {
    return conversion(beforeConversion);
  }
}

// verify the decomposition of a given character by its standard code
// error shown in the console
function verifyDecomposition(char) {
  const dataToVerify = objectDecomposition[char];

  // get the array of standard code(s)
  const standardCodeArray = objectNormal[char].map(value => value[0]);

  // start verification
  if (typeof dataToVerify == 'string') {
    const convertedDecomposition = decompositionConverter(dataToVerify);
    if (convertedDecomposition.includes('N')) {
      console.log(char + "'s only decomposition '" + dataToVerify + "' contains some error.");
    } else if (!standardCodeArray.includes(convertedDecomposition)) {
      console.log(char + "'s only decomposition '" + dataToVerify + "' is wrong.");
    }
  } else if (Array.isArray(dataToVerify)) {
    for (const decomp of dataToVerify) {
      const convertedDecomposition = decompositionConverter(decomp);
      if (convertedDecomposition.includes('N')) {
        console.log("One of the " + char + "'s decomposition '" + decomp + "' contains some error.");
      } else if (!standardCodeArray.includes(convertedDecomposition)) {
        console.log("One of the " + char + "'s decomposition '" + decomp + "' is wrong.");
      }
    }
  } else {
    console.log('The data type of ' + char + "'s decomposition is incorrect'");
  }
}

// verify all decompositions
function verifyAllDecompositions() {
  for (const character in objectDecomposition) {
    if (!['一', '十', '方', '竹', '乙', '的', '木', '女', '風'].includes(character)) {
      if (!objectNormal.hasOwnProperty(character)) {
        console.log(character + ' is not contained in FISH UP Dictionary of Array.');
      } else {
        verifyDecomposition(character);
      }
    }
  }
}

// Verify all decompositions with the standard codes
// to make sure that the former are at least consistent with the latter.
verifyAllDecompositions();
