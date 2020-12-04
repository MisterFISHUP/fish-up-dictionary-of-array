/**
 * Author: FISH UP
 * https://array30.misterfishup.com/
 * Copyright © 2020 FISH UP Dictionary of Array
 * Date: 2020-12-04
 */

/* Structure: (use search)
  - get html DOMs
  - auto focus for the input area
  - search functionality
  - prepare result file
  - filter with checkboxes
  - fetch data
  - toggle English key mode
*/

// --------------
// get html DOMs
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
  // prompt for too many characters
  const emoticons = ['(͡° ͜ʖ ͡°)', '( ͡• ͜ʖ ͡•)', '(͠≖ ͜ʖ͠≖)👌', '( ´_ゝ`)', 'ヽ(´ー｀)┌', '(´･ω･`)', '(ㆆ_ㆆ)'];
  const tooMany = { tw: `不要輸入超過 ${String(maxInputChar)} 字喔 `, en: `Don't type more than ${String(maxInputChar)} characters `, fr: `Ne saisissez pas plus de ${String(maxInputChar)} caractères ` };

  let input = inputElem.value;
  if (input.length > 0) {
    resultAreaElem.innerHTML = "";
    if ([...input].length > maxInputChar) {
      const hintDiv = document.createElement('div');
      hintDiv.className = 'dict-block-hint';
      hintDiv.innerHTML = "<span>" + tooMany[stringLocal] + emoticons[Math.floor(Math.random() * emoticons.length)] + "</span>";
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
  resultDescription.innerHTML = '<span id="total_num"></span><span id="link_hint"></span>';

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
  const hereIs = {
    tw: '以下列出 1 筆資料。',
    en: 'Here is 1 character/symbol hyperlinked to its Array code listed below. ', // space at the end
    fr: "Voici 1 caractère/symbole qui contient un hyperlien vers son code Tableau affiché ci-dessous. " // space at the end
  };
  const hereAre = {
    tw: `以下列出 ${num} 筆資料。`,
    en: `Here are ${num} characters/symbols hyperlinked to their Array codes listed below. `, // space at the end
    fr: `Voici ${num} caractères/symboles qui contiennent des hyperliens vers leurs codes Tableau affichés ci-dessous. ` // space at the end
  };
  const hereNone = { tw: `沒有資料可以呈現 `, en: `Nothing to show `, fr: `Rien à afficher ` };
  const hereNoneEmoticons = ['(´_ゝ`)', '´•_ゝ•`', '( ´•̥̥̥ω•̥̥̥` )', '(|||ﾟдﾟ)', '( ˘･з･)', '( ˘•ω•˘ )', '_(:3」∠)_'];
  const downloadTheResult = {
    tw: `您可以<a id="result_download_btn">點此下載查詢結果</a>（.txt 檔），或者透過下面超連結快速跳到該字：`,
    en: `You can also <a id="result_download_btn">click here</a> to download the search result (.txt file).`,
    fr: `Vous pouvez aussi <a id="result_download_btn">cliquer ici</a> pour télécharger le résultat de recherche (fichier .txt).`
  }
  if (num > 0) {
    if (num > 1) {
      document.getElementById('total_num').textContent = hereAre[stringLocal];
    } else {
      // i.e. num == 1
      document.getElementById('total_num').textContent = hereIs[stringLocal];
    }
    document.getElementById('link_hint').innerHTML = downloadTheResult[stringLocal] + '<br><br>';
    prepareResultFile(num);
  } else {
    // in this case, num == 0
    document.getElementById('total_num').textContent = hereNone[stringLocal] + hereNoneEmoticons[Math.floor(Math.random() * hereNoneEmoticons.length)];
    resultDescription.removeChild(resultCharList);
  }

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
  const dateLocal = (stringLocal != 'tw') ? stringLocal : 'zh-Hant'
  const researchTime = new Date().toLocaleString(dateLocal, { hour12: false });
  const isEngKeyActive = document.getElementById('cb_eng_key_active').checked;
  const websiteName = { tw: 'FISH UP 行列查碼', en: 'FISH UP Dictionary of Array', fr: 'Dictionnaire FISH UP de Tableau' };
  const year = '2020';
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
  if (isEngKeyActive) {
    fileContent += shownEnglishKey[stringLocal]
  }
  if (stringLocal == 'tw') fileContent += '：';
  fileContent += '\n\n';

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

    // add Array codes (except decompositions)
    $(this).find('li').each(function () {
      if (!$(this).attr('id').includes("DECOMP")) {
        fileContent += ' ' + ' ' + ' ' + ' ' + $(this).text() + '\n';
      }
    })

    // add separation line
    fileContent += separationLine;
  });

  // add a random signature
  fileContent += signatures[Math.floor(Math.random() * signatures.length)];

  // add dictionary URL
  fileContent += `\nCopyright © ${year} ${websiteName[stringLocal]}\n`;
  if (stringLocal == 'tw') {
    fileContent += siteURL + 'dictionary.html\n';
  } else {
    fileContent += siteURL + stringLocal + '/dictionary.html\n';
  }

  //finally, bind the attributes
  const fileNameResult = { tw: '行列查碼結果（共 1 筆資料）.txt', en: 'Array codes (1 character).txt', fr: 'Codes Tableau (1 caractère).txt' };
  const fileNameResults = { tw: `行列查碼結果（共 ${num} 筆資料）.txt`, en: `Array codes (${num} characters).txt`, fr: `Codes Tableau (${num} caractères).txt` };
  num > 1 ? downloadBtnElem.download = fileNameResults[stringLocal] : downloadBtnElem.download = fileNameResult[stringLocal]
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
  printResults(stringToSearch);

  //create filterResultRecap, put it in the beginning of resultDescription
  const filterResultRecapSpan = document.createElement('p');
  document.getElementById('result_description').prepend(filterResultRecapSpan);

  // add result recap sentence to filterResultRecap
  if (~~sp.checked + ~~sc1.checked + ~~sym.checked + ~~sg.checked == 0) {
    if (sc2.checked) {
      // only sc2 selected in this case
      const tooManySC2 = {
        tw: '總共有 3037 個字有二級簡碼，實在是太多了，請和其它條件搭配篩選 😉',
        en: "Please also tick other types of code to reduce the number of characters 😉. There is a total of 3037 characters having a short code II, which is too many to display, so...",
        fr: "Merci de cocher aussi d'autres types de code pour réduire le nombre des caractères 😉. Il y a un total de 3037 caractères qui possèdent un code court II, et c'est trop pour montrer, donc" // ???
      }
      filterResultRecapSpan.textContent = tooManySC2[stringLocal];
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
  if (objectDecomposition.hasOwnProperty(character)) {
    // if only one decomposition (saved in string)
    if (typeof objectDecomposition[character] === 'string') {
      // create itemDECOMP, add it into resultList
      let itemDECOMP = document.createElement('li');
      itemDECOMP.id = list_id_name + '_item_DECOMP';
      resultList.appendChild(itemDECOMP);

      // add content of itemDECOMP
      createLineDecomposition(objectDecomposition[character], itemDECOMP.id);
    } else if (Array.isArray(objectDecomposition[character])) {
      // several decompositions possible, saved in array
      const decompArray = objectDecomposition[character];
      for (let i = 0; i < decompArray.length; i++) {
        // create itemDECOMP, add it into resultList
        let itemDECOMP = document.createElement('li');
        itemDECOMP.id = list_id_name + '_item_DECOMP_' + String(i + 1);
        resultList.appendChild(itemDECOMP);

        // add content of itemDECOMP
        createLineDecomposition(decompArray[i], itemDECOMP.id);
      }
    }
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
    const coincidenceRankOne = {
      tw: '，重碼位 1',
      en: ', coincidence rank equal to 1',
      fr: ', rang de coïncidence égal à 1'
    };
    if (["敦", "雇"].includes(character)) {
      const ccHint = document.createTextNode(coincidenceRankOne[stringLocal]);
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
}

// create lineDecomposition from decomp and add it to some elem #id_name
function createLineDecomposition(decomp, id_name) {
  // add label
  document.getElementById(id_name).innerHTML += '<span class="keycap title-decomposition">拆</span>：';

  // from js/decomposition-generator.js
  createDecomposition(decomp, id_name)
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
    // hint for coincident codes
    const hintCC = {
      coincidenceRankOne: {
        tw: '，重碼位 1',
        en: ', coincidence rank equal to 1',
        fr: ', rang de coïncidence égal à 1'
      },
      coincidenceRankOneIfExtB: {
        tw: '，若啟用擴充區 B 則重碼位 1，否則無重碼',
        en: ', coincidence rank equal to 1 if Extension B (CJK Unified Ideographs) activated, otherwise non-coincident code',
        fr: ', rang de coïncidence égal à 1 si Supplément B (Sinogrammes unifiés CJC) activée, sinon code non coïncident'
      },
      coincidenceRankOneIfExtCD: {
        tw: '，若啟用擴充區 CD 則重碼位 1，否則無重碼',
        en: ', coincidence rank equal to 1 if Extensions CD (CJK Unified Ideographs) activated, otherwise non-coincident code',
        fr: ', rang de coïncidence égal à 1 si Suppléments CD (Sinogrammes unifiés CJC) activée, sinon code non coïncident'
      },
    };

    // get coincidence code data
    ccData = objectEncoding[encodingNl[0]];
    if (ccData[0] > 1) {
      // cc pos = 1
      const ccHint = document.createTextNode(hintCC.coincidenceRankOne[stringLocal]);
      elem.appendChild(ccHint);
    }
    if (ccData[0] === 1) {
      if (ccData[1] > 0) {
        const ccHint = document.createTextNode(hintCC.coincidenceRankOneIfExtB[stringLocal]);
        elem.appendChild(ccHint);
      } else if (ccData[2] > 0) {
        const ccHint = document.createTextNode(hintCC.coincidenceRankOneIfExtCD[stringLocal]);
        elem.appendChild(ccHint);
      }
    }
    if (ccData[0] === 0) {
      if (ccData[1] > 1) {
        // cc pos = 1
        const ccHint = document.createTextNode(hintCC.coincidenceRankOne[stringLocal]);
        elem.appendChild(ccHint);
      }
      if (ccData[1] === 1) {
        if (ccData[2] > 0) {
          const ccHint = document.createTextNode(hintCC.coincidenceRankOneIfExtCD[stringLocal]);
          elem.appendChild(ccHint);
        }
      }
      if (ccData[1] === 0) {
        if (ccData[2] > 1) {
          // cc pos = 1
          const ccHint = document.createTextNode(hintCC.coincidenceRankOne[stringLocal]);
          elem.appendChild(ccHint);
        }
      }
    }
  }
}

// ---------------
// toggle English key mode
// ---------------

document.getElementById("cb_eng_key_active").addEventListener("click", engKeyToggle);
document.getElementById("cb_eng_key_active").addEventListener("click", ccTriviaEngKeyToggle);

function engKeyToggle() {
  letterList = document.getElementsByClassName("keycap-letter");
  if (letterList[0].textContent.length == 1) {
    for (let letter of letterList) {
      const letter_content = letter.textContent;
      letter.textContent = letterToArray30Dict[letter_content];
    }
  } else {
    for (let letter of letterList) {
      const letter_content = letter.textContent; 
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
