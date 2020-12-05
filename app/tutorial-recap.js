const stringPageName = document.getElementById('app').dataset.pageName;
const AppContent = {
  title: {
    tw: '複習與測驗',
    en: 'Summary and quizzes',
    fr: 'Résumé et quiz'
  },
  author: {
    tw: `<a href="https://www.linkedin.com/in/shang-chun-yu/" target="_blank">FISH UP</a> 撰/設計`,
    en: `Written and designed by <a href="https://www.linkedin.com/in/shang-chun-yu/" target="_blank">FISH UP</a>`,
    fr: `Rédigé et conçu par <a href="https://www.linkedin.com/in/shang-chun-yu/" target="_blank">FISH UP</a>`
  },
  description: {
    tw: '歡迎來到行列教學的複習與測驗頁面！本頁面前半部將帶您快速複習行列輸入法的所有知識，而後半部的測驗將幫助您鞏固所有有關基本筆形以及字根的知識。',
    en: "Welcome to the 'Summary and quizzes' page of Array tutorial! The first part of this page will give you a quick refresher on all you need to know about the Array input method, while the second part provides some quizzes which can help you consolidate your knowledge of fundamental stroke-shapes (FSS) and Array radicals.",
    fr: "Bienvenue sur la page « Résumé et quiz » du tutoriel Tableau ! La première partie de cette page vous donnera un rappel rapide de tout ce que vous devez savoir sur la méthode de saisie Tableau, et la seconde partie fournit les quiz qui vous aideront à consolider vos connaissances sur les formes-traits fondamentales (FTF) et les radicaux Tableau."
  },
  readFirst: {
    tw: `請先閱讀過<a href="tutorial.html" target="_blank">快速入門</a>以及<a href="tutorial-complete.html" target="_blank">完整教學</a>，再來閱讀與使用此頁面。`,
    en: `Please read <a href="tutorial.html" target="_blank">the introduction to Array</a> and <a href="tutorial-complete.html" target="_blank">the complete guide to Array</a> before reading and using this page.`,
    fr: `Veuillez lire <a href="tutorial.html" target="_blank">l'initiation rapide</a> et <a href="tutorial-complete.html" target="_blank">le guide complet</a> avant de lire et d'utiliser cette page.`
  },
  contents: { tw: '目錄', en: 'Contents', fr: 'Sommaire' },
  summary: {
    title: { tw: '複習', en: 'Summary', fr: 'Résumé' },
    description: {
      tw: '以下重點式複習行列輸入法的所有知識。',
      en: "The following is a concise review of everything you need to know about the Array input method.",
      fr: "Voici un bref rappel de tout ce que vous devez savoir sur la méthode Tableau."
    },
    coreMechanism: {
      title: { tw: '核心原理', en: 'Core mechanism', fr: 'Mécanisme fondamental' },
      par1: {
        tw: `行列輸入法有 10 個<a href="tutorial-complete.html#fundamental-stroke-shape" target="_blank">基本筆形</a>，也就是由一或多個完整筆畫構成的基本形狀。每個基本筆形對應到一個數字。`,
        en: `The Array method is based on 10 stroke-shapes, called <a href="tutorial-complete.html#fundamental-stroke-shape" target="_blank">the 10 fundamental stroke-shapes</a>, which are shapes consisting of one or several whole strokes. Each fundamental stroke-shape corresponds to a number (a digit).`,
        fr: `La méthode Tableau est basée sur 10 formes-traits, appelées <a href="tutorial-complete.html#fundamental-stroke-shape" target="_blank">les 10 formes-traits fondamentales</a>, qui sont des formes constituées d'un ou de plusieurs traits entiers. Chaque forme-trait fondamentale correspond à un chiffre.`
      },
      par2: {
        tw: `字根依照字根碼的設計可以分為三種：<a href="tutorial-complete.html#FSS-radical" target="_blank">基本筆形字根</a>、<a href="tutorial-complete.html#SESS-radical" target="_blank">首尾筆形字根</a>、<a href="tutorial-complete.html#specially-mapped-radical" target="_blank">特別歸位字根</a>。符合基本筆形的描述或是由基本筆形衍生而來的字根，叫做基本筆形字根，字根碼由基本筆形數字給出。首尾筆形字根的字根碼由首尾筆形給出。特別歸位字根的字根碼雖然不是由首尾筆形給出，但多數可以透過歸位原因或是口訣來記憶。`,
        en: `The Array radicals are divided into three groups according to the design of the radical code: <a href="tutorial-complete.html#FSS-radical" target="_blank">1st group radicals (FSS radicals)</a>, <a href="tutorial-complete.html#SESS-radical" target="_blank">2nd group radicals (SESS radicals)</a> and <a href="tutorial-complete.html#specially-mapped-radical" target="_blank">3rd group radicals (specially encoded radicals)</a>. A radical that matches the description of, or is derived from, a fundamental stroke-shape is called a FSS radical (or a 1st group radical), and its radical code is given by the stroke-shape's number. The radical code of an SESS radical (or a 2nd group radical) is given by the starting and ending stroke-shapes. The radical code of a specially encoded radical (or a 3rd group radical) is not given by the starting and ending stroke-shapes, but can be understood through the encoding reason or be remembered with some mnemonics most of the time.`,
        fr: `Les radicaux Tableau sont divisés en trois catégories selon la conception du code de radical : <a href="tutorial-complete.html#FSS-radical" target="_blank">radicaux du 1er groupe (radicaux FTF)</a>, <a href="tutorial-complete.html#SESS-radical" target="_blank">radicaux du 2e groupe (radicaux FTIF)</a> et <a href="tutorial-complete.html#specially-mapped-radical" target="_blank">radicaux du 3e groupe (radicaux spécialement encodés)</a>. Un radical qui correspond à la description d'une forme-trait fondamentale ou qui en est dérivé est appelé radical FTF (ou radical du 1er groupe), et son code de radical est donné par le chiffre de la forme-trait. Le code de radical d'un radical FTIF (ou radical du 2e groupe) est donné par les formes-traits initiale et finale. Le code d'un radical spécialement encodé (ou radical du 3e groupe) n'est pas donné par les formes-traits initiale et finale, mais peut être compris par la raison du codage ou mémorisé par des moyens mnémotechniques la plupart du temps.`
      },
      par3: {
        tw: `字根碼<a href="tutorial.html#fundamental-stroke-shape-and-stuff" target="_blank">可以得到鍵位</a>。`,
        en: `Each radical code <a href="tutorial.html#fundamental-stroke-shape-and-stuff" target="_blank">corresponds to a radical key</a> (an Array key).`,
        fr: `Chaque code de radical <a href="tutorial.html#fundamental-stroke-shape-and-stuff" target="_blank">correspond à une touche de radical</a> (une touche Tableau).`
      },
      par4: {
        tw: `拆字取碼除了依照書寫筆順，還要認識<a href="tutorial-complete.html#first-three-and-last-principle" target="_blank">前三後一原則</a>、<a href="tutorial-complete.html#big-radical-principle" target="_blank">大根先取原則</a>以及<a href="tutorial-complete.html#discontiguous-radicals" target="_blank">跨越筆順的字根</a>。完整拆字後若得到超過 4 個字根，則只取前三個和最後一個字根，這是前三後一原則。每一次取字根都要取筆畫較多、涵蓋範圍較廣的字根，這是大根先取原則。在拆字取碼時若遇到跨越筆順的字根，必須當作一個整體取掉而不拘泥筆順。`,
        en: `To obtain the standard code, a character is decomposed into one or more Array radicals in stroke order, but in addition to stroke order, it's also necessary to know <a href="tutorial-complete.html#first-three-and-last-principle" target="_blank">the first-three-last-one rule</a>, <a href="tutorial-complete.html#big-radical-principle" target="_blank">the big radical rule</a> and <a href="tutorial-complete.html#discontiguous-radicals" target="_blank">the discontiguous radicals</a>. If there are more than four radicals after completely decomposing the character, only the first three and the last one are taken for the input: this is the first-three-last-one rule. During the decomposition, the radical taken at each step must be the biggest possible radical, i.e. the radical that contains the largest possible number of strokes (or equivalently, the radical that covers the largest possible area): this is the big radical rule. And finally, at each stage of decomposition, if a discontiguous radical is present, this radical as a whole must be taken first, even if this decomposition does not follow the stroke order.`,
        fr: `On décompose un caractère en un ou plusieurs radicaux Tableau selon l'ordre des traits pour obtenir le code standard, mais en plus de l'ordre des traits, il faut aussi connaître <a href="tutorial-complete.html#first-three-and-last-principle" target="_blank">la règle du trois-premiers-et-le-dernier</a>, <a href="tutorial-complete.html#big-radical-principle" target="_blank">la règle du grand radical</a> et <a href="tutorial-complete.html#discontiguous-radicals" target="_blank">les radicaux disjoints</a>. S'il y a plus de quatre radicaux après la décomposition totale d'un caractère, seuls les trois premiers et le dernier sont pris pour la saisie : c'est la règle du trois-premiers-et-le-dernier. Au cours de la décomposition, le radical pris à chaque étape doit être le radical le plus grand possible, c'est-à-dire le radical qui contient le plus grand nombre possible de traits (ou, ce qui revient au même, le radical qui couvre la surface la plus grande possible) : c'est la règle du grand radical. Et finalement, à chaque étape de la décomposition, si un radical disjoint est présent, il (dans son ensemble) doit être pris en priorité, même si cette décomposition ne suit pas l'ordre des traits.`
      },
      par5: {
        tw: `<a href="tutorial-complete.html#error-tolerance" target="_blank">容錯功能</a>讓取碼打字的過程更輕鬆，並且取碼有疑慮時可以使用<a href="tutorial-complete.html#wild-card" target="_blank">查詢功能</a>（問號「?」或星號「*」）。`,
        en: `Array's <a href="tutorial-complete.html#error-tolerance" target="_blank">error tolerance</a> makes character decomposition easier, and <a href="tutorial-complete.html#wild-card" target="_blank">wild cards (question mark '?' or asterisk '*')</a> can be used in case of doute.`,
        fr: `<a href="tutorial-complete.html#error-tolerance" target="_blank">La tolérance d'erreur</a> de Tableau facilite la décomposition de caractères et donc la saisie, et <a href="tutorial-complete.html#wild-card" target="_blank">des jokers</a> (point d'interrogation « ? » ou astérisque « * ») peuvent être utilisés en cas de doute.`
      },
    },
    enteringStandardCodes: {
      title: { tw: '普通編碼的輸入', en: 'Entering standard codes', fr: 'Entrer les codes standard' },
      par1: {
        tw: `普通編碼是拆字取碼後，判斷是否為<a href="tutorial-complete.html#rarely-used-character" target="_blank">不常用字根（要重複該字根鍵四次）或是否為罕用字（要加上罕字鍵）</a>後，得到的一或多顆要依序輸入的行列 30 鍵。輸入普通編碼之後，要再按一下空白鍵（如果沒有重碼那麼輸入直接完成，否則要處理<a href="tutorial-complete.html#coincident-code" target="_blank">重碼問題</a>），但輸入過程中在視窗看到想要的字，就可以直接用數字鍵選字完成輸入（<a href="tutorial-complete.html#preview" target="_blank">預視功能</a>）。`,
        en: `A standard code is one or more Array keys obtained after decomposing the character and after <a href="tutorial-complete.html#rarely-used-character" target="_blank">determining if the character is a radical that happens to be a rare character (should then enter the radical key 4 times) or if the character is a rare character (should then enter an additional rare character key)</a>. After entering a standard code, press the space bar, and if it's not a coincident code, then the character is entered, or you need to <a href="tutorial-complete.html#coincident-code" target="_blank">deal with the coincident code problem</a>. Of course, if, at any time during the input, you see the character you want in the window, you can enter it directly by pressing the corresponding number key (the <a href="tutorial-complete.html#preview" target="_blank">preview feature of Array</a>).`,
        fr: `Un code standard est une ou plusieurs touches Tableau obtenues après avoir décomposé le caractère et après avoir <a href="tutorial-complete.html#rarely-used-character" target="_blank">déterminé si le caractère est un radical qui se trouve être un caractère rare (il faut alors entrer ce radical 4 fois) ou si le caractère est un caractère rare (il faut alors entrer une touche de caractère rare en plus)</a>. Après avoir entré un code standard, appuyez sur la barre d'espace, si ce n'est pas un code coïncident, le caractère est entré, sinon il faut <a href="tutorial-complete.html#coincident-code" target="_blank">traiter le problème de code coïncident</a>. Bien entendu, si, à tout moment de la saisie, vous voyez le caractère désiré dans la fenêtre, vous pouvez l'entrer directement en appuyant sur la touche de chiffre correspondante (la fonctionnalité <a href="tutorial-complete.html#preview" target="_blank">aperçu</a> de Tableau).`
      },
    },
    shortCode: {
      title: { tw: '簡碼', en: 'Short codes', fr: 'Codes courts' },
      par1: {
        tw: `為加快打字速度，行列輸入法設計了<a href="tutorial-complete.html#short-code-I" target="_blank">一級簡碼</a>以及<a href="tutorial-complete.html#short-code-II" target="_blank">二級簡碼</a>。`,
        en: `To speed up typing, the Array method provides <a href="tutorial-complete.html#short-code-I" target="_blank">short codes I</a> and <a href="tutorial-complete.html#short-code-II" target="_blank">short codes II</a> to some characters.`,
        fr: `Pour augmenter la vitesse de saisie, la méthode Tableau fournit des <a href="tutorial-complete.html#short-code-I" target="_blank">codes courts I</a> et des <a href="tutorial-complete.html#short-code-II" target="_blank">codes courts II</a> pour certains caractères.`
      },
      par2: {
        tw: `按 1 顆行列 30 鍵後，行列視窗出現的 10 個字便是一級簡碼字，按對應的數字鍵就能選字並完成輸入。唯一要注意的是，按 <span class="keycap keycap-letter">2↑</span> 鍵後視窗出現的「女」字不能透過數字鍵 <span class="keycap keycap-number">1</span> 選擇而完成輸入：輸入「女」字的正確方法為按 <span class="keycap keycap-letter">2↑</span> 後，再按 <span class="keycap keycap-space">Space</span> 完成輸入。一級簡碼的行列 30 鍵一律是該字普通編碼的第一顆鍵，而一級簡碼的數字鍵不一定有規則，但時常是該字普通編碼第二顆鍵的行數。另外，有 <a href="tutorial-complete.html#symbol-with-short-code-I" target="_blank">20 個常用標點符號</a>能夠透過一級簡碼輸入。`,
        en: `After pressing one Array key, the 10 characters appearing in the window are short code I characters, which can be entered by pressing the corresponding number key. The only thing to note is that the character '女' that appears in the window after pressing <span class="keycap keycap-letter">2↑</span> cannot be selected (thus entered) by the number key <span class="keycap keycap-number">1</span>. The correct way to enter '女' is to press <span class="keycap keycap-letter">2↑</span> and then press <span class="keycap keycap-space">Space</span>. The Array key of a short code I is always the first key of its standard code, while the number key of a short code I is often the second key of the standard code but remains irregular in general. In addition, <a href="tutorial-complete.html#symbol-with-short-code-I" target="_blank">20 commonly used punctuation symbols</a> can be entered by short codes I.`,
        fr: `Après avoir saisi une touche Tableau, les 10 caractères affichés dans la fenêtre sont des caractères de code court I, qui peuvent être saisis en appuyant sur la touche de chiffre correspondante. La seule chose à noter est que le caractère « 女 » qui apparaît dans la fenêtre après avoir saisi <span class="keycap keycap-letter">2↑</span> ne peut pas être entré par la touche de chiffre <span class="keycap keycap-number">1</span>. Pour saisir « 女 », il faut appuyer sur <span class="keycap keycap-letter">2↑</span> puis sur <span class="keycap keycap-space">Space</span>. La touche Tableau d'un code court I est toujours la première touche du code standard, tandis que la touche de chiffre d'un code court I est souvent la deuxième touche du code standard mais reste en général irrégulière. En outre, il y a <a href="tutorial-complete.html#symbol-with-short-code-I" target="_blank">20 symboles de ponctuation fréquemment utilisés</a> qui peuvent être saisis par un code court I.`
      },
      par3: {
        tw: `按 2 顆行列 30 鍵後，行列視窗出現的字*便是二級簡碼字，接著按對應的數字鍵就能選字並完成輸入。二級簡碼的兩顆行列 30 鍵一律是該字普通編碼的前兩顆鍵，而二級簡碼的數字鍵一律是該字普通編碼第三顆鍵的行數。`,
        en: `After pressing two Array keys, the characters appearing in the window* are short code II characters, which can be entered by pressing the corresponding number key. The two Array keys of a short code II are always the first two keys of the standard code, and the number key of a short code II is always the column position of the third key of the standard code.`,
        fr: `Après avoir saisi deux touches Tableau, les caractères affichés dans la fenêtre* sont des caractères de code court II, qui peuvent être saisis en appuyant sur la touche de chiffre correspondante. Les deux touches Tableau d'un code court II sont toujours les deux premières touches du code standard, et la touche de chiffre d'un code court II est toujours la position de la colonne de la 3e touche du code standard.`
      },
      com4: {
        tw: `* 畫面有時看起來像有缺字，是正常現象。`,
        en: `* Sometimes it looks like some characters are missing on the screen: this is in fact normal.`,
        fr: `* Il semble parfois qu'il manque des caractères sur l'écran, ce qui est en fait normal.`
      },
      com5: {
        tw: `註：您可以使用本站<a href="dictionary.html" target="_blank">行列查碼</a>的列表功能、<a href="typing.html" target="_blank">打字練習</a>的內建題目以及<a href="download.html#data" target="_blank">下載頁面</a>來取得或練習一級簡碼。`,
        en: `Note: You can use <a href="dictionary.html" target="_blank">FISH UP Dictionary of Array</a>, <a href="typing.html" target="_blank">FISH UP typing practice</a> or <a href="download.html#data" target="_blank">the download page</a> to get or practice the short codes I.`,
        fr: `NB : Vous pouvez utiliser <a href="dictionary.html" target="_blank">Dictionnaire FISH UP de Tableau</a>, <a href="typing.html" target="_blank">FISH UP Exercices de saisie</a> ou <a href="download.html#data" target="_blank">la page de téléchargement</a> pour obtenir ou pratiquer les codes courts I.`
      },
    },
    specialCode: {
      title: { tw: '特別碼', en: 'Special codes', fr: 'Codes spéciaux' },
      par1: {
        tw: `行列輸入法特別為一些使用頻率很高的字設計了<a href="tutorial-complete.html#special-code" target="_blank">特別碼</a>：按下 2 顆行列 30 鍵再按下 <span class="keycap keycap-space">Space</span> 完成輸入。總共有 398 個字有特別碼，沒有任何符號有特別碼。雖然有些特別碼是依照特定規則設計的，但總體來說，特別碼的 2 顆行列 30 鍵都必須特別記憶。行列新手一開始不建議特別花時間研究或記憶特別碼。`,
        en: `For some frequently used characters, the Array method provides a special code: press two Array keys then press <span class="keycap keycap-space">Space</span> to complete the entry. There is a total of 398 characters having a special code, and no symbols have special codes. There are some explanations for certain special codes, but in general the two Array keys in the special codes need to be memorised by heart. It is not recommended for beginners to spend time studying or memorising special codes.`,
        fr: `Pour certains caractères couramment utilisés, la méthode Tableau fournit un code spécial : appuyez sur deux touches Tableau puis sur <span class="keycap keycap-space">Space</span> pour terminer la saisie. Il y a au total 398 caractères qui ont un code spécial, et aucun symbole n'a de code spécial. Il y a des explications pour certains codes spéciaux, mais en général les deux touches Tableau des codes spéciaux nécessitent une mémorisation par cœur. Pour les débutants, il n'est pas recommandé de passer du temps à étudier ou à mémoriser les codes spéciaux.`
      },
      com2: {
        tw: `您可以使用本站<a href="dictionary.html" target="_blank">行列查碼</a>的列表功能、<a href="typing.html" target="_blank">打字練習</a>的內建題目以及<a href="download.html#data" target="_blank">下載頁面</a>來取得或練習特別碼。`,
        en: `Note: You can use <a href="dictionary.html" target="_blank">FISH UP Dictionary of Array</a>, <a href="typing.html" target="_blank">FISH UP typing practice</a> or <a href="download.html#data" target="_blank">the download page</a> to get or practice the special codes.`,
        fr: `NB : Vous pouvez utiliser <a href="dictionary.html" target="_blank">Dictionnaire FISH UP de Tableau</a>, <a href="typing.html" target="_blank">FISH UP Exercices de saisie</a> ou <a href="download.html#data" target="_blank">la page de téléchargement</a> pour obtenir ou pratiquer les codes spéciaux.`
      },
    },
    symbol: {
      title: { tw: '符號', en: 'Symbols', fr: 'Symboles' },
      par1: {
        tw: `按下 <span class="keycap keycap-letter">2↑</span> 鍵（即英文鍵 <span class="keycap keycap-letter">w</span>）再按下不同的數字鍵會進入<a href="tutorial-complete.html#symbol-list" target="_blank">不同的符號選單</a>，而其中 <a href="tutorial-complete.html#symbol-with-short-code-I" target="_blank">20 個常用標點符號有一級簡碼</a>。`,
        en: `Press <span class="keycap keycap-letter">2↑</span> first (i.e. the English key <span class="keycap keycap-letter">w</span>), then press any number key to access the symbol list (different number keys correspond to lists of different types of symbols). Among all the symbols in these symbol lists, there are <a href="tutorial-complete.html#symbol-with-short-code-I" target="_blank">20 commonly used punctuation symbols that can be entered by short codes I</a>.`,
        fr: `Appuyez d'abord sur <span class="keycap keycap-letter">2↑</span> (c'est-à-dire la touche anglaise <span class="keycap keycap-letter">w</span> ou la touche française <span class="keycap keycap-letter">z</span>), puis appuyez sur une touche de chiffre quelconque pour accéder à la liste de symboles (différentes touches de chiffre correspondent à des listes de différents types de symboles). Parmi tous les symboles figurant dans ces listes de symboles, il y a <a href="tutorial-complete.html#symbol-with-short-code-I" target="_blank">20 symboles de ponctuation fréquemment utilisés</a> qui peuvent être saisis par un code court I</a>.`
      },
      com2: {
        tw: `註：您可以使用本站<a href="dictionary.html" target="_blank">行列查碼</a>的列表功能、<a href="typing.html" target="_blank">打字練習</a>的內建題目以及<a href="download.html#data" target="_blank">下載頁面</a>來取得或練習符號編碼。`,
        en: `Note: You can use <a href="dictionary.html" target="_blank">FISH UP Dictionary of Array</a>, <a href="typing.html" target="_blank">FISH UP typing practice</a> or <a href="tutorial-complete.html#symbol" target="_blank">the complete guide to Array</a> to get or practice the codes of symbols.`,
        fr: `NB : Vous pouvez utiliser <a href="dictionary.html" target="_blank">Dictionnaire FISH UP de Tableau</a>, <a href="typing.html" target="_blank">FISH UP Exercices de saisie</a> ou <a href="tutorial-complete.html#symbol" target="_blank">le guide complet de Tableau</a> pour obtenir ou pratiquer les codes de symboles.`
      },
    },
    otherFunctionalities: {
      title: { tw: '其他實用功能', en: 'Other useful functionalities', fr: 'Autres fonctionnalités pratiques' },
      par1: {
        tw: `許多版本的行列輸入法提供<a href="tutorial-complete.html#word-association" target="_blank">聯想字詞</a>、<a href="tutorial-complete.html#traditional-simplified-chinese-conversion" target="_blank">繁轉簡或簡轉繁</a>、<a href="tutorial-complete.html#reverse-lookup" target="_blank">行列反查</a>、<a href="tutorial-complete.html#entering-words" target="_blank">詞彙輸入</a>等等實用功能，其中詞彙輸入功能顧名思義可以一次輸入多個字。`,
        en: `Many distributions of Array have useful features such as <a href="tutorial-complete.html#word-association" target="_blank">character/word suggestions</a>, <a href="tutorial-complete.html#traditional-simplified-chinese-conversion" target="_blank">simplified-traditional Chinese character conversion</a>, <a href="tutorial-complete.html#reverse-lookup" target="_blank">Array reverse lookup</a>, <a href="tutorial-complete.html#entering-words" target="_blank">entering words</a> ('word' here means vocabulary words consisting of at least 2 characters) and so on.`,
        fr: `De nombreuses distributions de Tableau ont des fonctionnalités pratiques comme par exemple <a href="tutorial-complete.html#word-association" target="_blank">des suggestions de caractères/mots</a>, <a href="tutorial-complete.html#traditional-simplified-chinese-conversion" target="_blank">la conversion entre caractères chinois simplifiés et traditionnels</a>, <a href="tutorial-complete.html#reverse-lookup" target="_blank">la recherche inverse Tableau</a>, <a href="tutorial-complete.html#entering-words" target="_blank">la saisie de mots</a> (par « mots », on entend ici les mots composés d'au moins 2 caractères), etc.`
      },
    },
    mobile: {
      title: { tw: '行動裝置', en: 'Mobile devices', fr: 'Appareils mobiles' },
      par1: {
        tw: `行列輸入法在行動裝置上，除了一般的行列 30 外還有<a href="tutorial-complete.html#array10" target="_blank">行列 10</a> 可以使用。`,
        en: `In addition to Array 30 (the usual/classic Array input method), there is also <a href="tutorial-complete.html#array10" target="_blank">Array 10</a> for mobile devices.`,
        fr: `En plus de Tableau 30 (la méthode Tableau classique/habituelle), il existe également <a href="tutorial-complete.html#array10" target="_blank">Tableau 10</a> pour les appareils mobiles.`
      },
    },
  },
  quiz: {
    title: { tw: '測驗', en: 'Quizzes', fr: 'Quiz' },
    description1: {
      tw: `測驗分為 3 個部分：<a href="#test-fss">基本筆形</a>、<a href="#test-radical">字根</a>、<a href="#test-radical-sc">簡體字根</a>，並且皆是採自我檢測方式，透過點擊灰色欄位來顯示/隱藏答案。`,
      en: `There are 3 quizzes in this section: <a href="#test-fss">fundamental stroke-shapes</a>, <a href="#test-radical">radicals</a>, and <a href="#test-radical-sc">radicals used only in simplified Chinese</a>. They are all self-assessment quizzes: click on the gray bars to show/hide answers.`,
      fr: `Il y a 3 quiz dans cette section : <a href="#test-fss">formes-traits fondamentales</a>, <a href="#test-radical">radicauxs</a>, et <a href="#test-radical-sc">radicaux utilisés uniquement en chinois simplifié</a>. Ce sont tous des quiz d'auto-évaluation: cliquez sur les barres grises pour afficher/masquer les réponses.`
    },
    description2: {
      tw: '第一部分「基本筆形」包含了全部 10 個基本筆形，第二部分「字根」包含了行列輸入法所有非簡體的字根，第三部分「簡體字根」包含了行列輸入法所有簡體字根。僅使用繁體的學習者可以忽略第三部分「簡體字根」。',
      en: "The first quiz 'fundamental stroke-shapes' contains the 10 fundamental stroke-shapes, the second quiz 'radicals' contains all the Array radicals except those that are used only in simplified Chinese, and the last quiz 'radicals used only in simplified Chinese' contains all the Array radicals that are used only in simplified Chinese. If you use only traditional Chinese, feel free to skip the last quiz.",
      fr: "Le premier quiz « formes-traits fondamentales » contient les 10 formes-traits fondamentales, le deuxième quiz  « radicaux » contient tous les radicaux Tableau sauf ceux qui sont utilisés uniquement en chinois simplifié, et le dernier quiz « radicaux utilisés uniquement en chinois simplifié » contient tous les radicaux Tableau qui sont utilisés uniquement en chinois simplifié. Si vous n'utilisez que du chinois traditionnel, n'hésitez pas à sauter le dernier quiz."
    },
    fss: {
      title: { tw: '基本筆形', en: 'Fundamental stroke-shapes (FSS)', fr: 'Formes-traits fondamentales (FTF)' },
      description: {
        tw: `此測驗幫助您鞏固有關 10 個基本筆形的知識。點擊灰色欄位顯示/隱藏答案，可針對的對您不會、或是有疑慮的部分做重點複習。本站的<a href="tutorial-complete.html#fundamental-stroke-shape" target="_blank">行列教學</a>有 10 基本筆形的完整解說。`,
        en: `This quiz helps you to consolidate your knowledge of the 10 fundamental stroke-shapes (FSS). Click on the gray bars to show/hide answers. You can focus on things you don't know or are unsure about. A detailed description of the 10 fundamental stroke-shapes can be found in the <a href="tutorial-complete.html#fundamental-stroke-shape" target="_blank">complete guide to Array</a>.`,
        fr: `Ce quiz vous aide à consolider vos connaissances sur les 10 formes-traits fondamentales (FTF). Cliquez sur les barres grises pour afficher/masquer les réponses. Vous pouvez vous concentrer sur des choses que vous ne connaissez pas ou dont vous n'êtes pas sûr. Une description détaillée de ces 10 formes-traits fondamentales peut être trouvée dans <a href="tutorial-complete.html#fundamental-stroke-shape" target="_blank">le guide complet de Tableau</a> sur ce site.`
      },
      fromNumber: { tw: '數字視角', en: "From numbers' perspective", fr: 'Du point de vue des chiffres' },
      correspondFss: { tw: '對應到基本筆形', en: 'corresponds to the stroke-shape', fr: ' correspond à la forme-trait' },
      correspondNumber: { tw: '對應到數字', en: 'corresponds to the digit', fr: ' correspond au chiffre' },
      fssNumber1: { tw: `一：橫 1&emsp;&emsp;`, en: "一: horizontal stroke", fr: "一 : trait horizontal" },
      fssNumber2: { tw: `㇗：逆彎 2&emsp;`, en: "㇗: anticlockwise turning stroke", fr: "㇗ : trait brisé dans le sens anti-horaire" },
      fssNumber3: { tw: `丨：直 3&emsp;&emsp;`, en: "丨: vertical stroke", fr: "丨: trait vertical" },
      fssNumber4: { tw: `十：正交 4&emsp;`, en: "十: upright cross", fr: "十 : croix debout" },
      fssNumber5: { tw: `㇕：順彎 5&emsp;`, en: "㇕: clockwise turning stroke", fr: "㇕ : trait brisé dans le sens horaire" },
      fssNumber6: { tw: `丶：點 6&emsp;&emsp;`, en: "丶: dot (in chinese calligraphy)", fr: "丶 : point (en calligraphie chinoise)" },
      fssNumber7: { tw: `ㄇ：蓋 7&emsp;&emsp;`, en: "ㄇ: lid", fr: "ㄇ : couvercle" },
      fssNumber8: { tw: `八㇏：八捺 8`, en: "八㇏: 八 ou right-falling stroke", fr: "八㇏ : 八 ou trait descendant vers la droite" },
      fssNumber9: { tw: `㇒：撇 9&emsp;&emsp;`, en: "㇒: left-falling stroke", fr: "㇒ : trait descendant vers la gauche" },
      fssNumber0: { tw: `口：方框 0&emsp;`, en: "口: square frame", fr: "口 : cadre carré" },
      fss1: { tw: `基本筆形「一：橫」`, en: "The fss '一: horizontal stroke' ", fr: "La FTF « 一 : trait horizontal » " },
      fss2: { tw: `基本筆形「㇗：逆彎」`, en: "The fss '㇗: anticlockwise turning stroke' ", fr: "La FTF « ㇗ : trait brisé dans le sens anti-horaire » " },
      fss3: { tw: `基本筆形「丨：直」`, en: "The fss '丨: vertical stroke' ", fr: "La FTF « 丨: trait vertical » " },
      fss4: { tw: `基本筆形「十：正交」`, en: "The fss '十: upright cross' ", fr: "La FTF « 十 : croix debout » " },
      fss5: { tw: `基本筆形「㇕：順彎」`, en: "The fss '㇕: clockwise turning stroke' ", fr: "La FTF « ㇕ : trait brisé dans le sens horaire » " },
      fss6: { tw: `基本筆形「丶：點」`, en: "The fss '丶: dot' ", fr: "La FTF « 丶 : point » " },
      fss7: { tw: `基本筆形「ㄇ：蓋」`, en: "The fss 'ㄇ: lid' ", fr: "La FTF « ㄇ : couvercle » " },
      fss8: { tw: `基本筆形「八㇏：八捺」`, en: "The fss '八㇏: 八 and right-falling stroke' ", fr: "La FTF « 八㇏ : 八 et trait descendant vers la droite » " },
      fss9: { tw: `基本筆形「㇒：撇」`, en: "The fss '㇒: left-falling stroke' ", fr: "La FTF « ㇒ : trait descendant vers la gauche » " },
      fss0: { tw: `基本筆形「口：方框」`, en: "The fss '口: square frame' ", fr: "La FTF « 口 : cadre carré » " },
    },
    radical: {
      title: { tw: '字根', en: 'Radicals', fr: 'Radicaux' },
      description: {
        tw: `此測驗幫助您鞏固有關行列輸入法所有非簡體的字根的知識。點擊灰色欄位顯示/隱藏答案，可針對的對您不會、或是有疑慮的部分做重點複習。本站的<a href="tutorial-complete.html#radical" target="_blank">行列教學</a>有全部字根的完整解說。`,
        en: `This quiz helps you to consolidate your knowledge of all the Array radicals (except those that are used only in simplified Chinese, cf. <a href="#test-radical-sc">next quiz</a>). Click on the gray bars to show/hide answers. You can focus on things you don't know or are unsure about. A detailed description of all the Array radicals can be found in the <a href="tutorial-complete.html#radical" target="_blank">complete guide to Array</a>.`,
        fr: `Ce quiz vous aide à consolider vos connaissances sur tous les radicaux Tableau (sauf ceux qui sont utilisés uniquement en chinois simplifié, cf. <a href="#test-radical-sc">quiz suivant</a>). Cliquez sur les barres grises pour afficher/masquer les réponses. Vous pouvez vous concentrer sur des choses que vous ne connaissez pas ou dont vous n'êtes pas sûr. Une description détaillée de tous les radicaux Tableau peut être trouvée dans <a href="tutorial-complete.html#radical" target="_blank">le guide complet de Tableau</a> sur ce site.`
      }
    },
    radicalSC: {
      title: { tw: '簡體字根', en: 'Radicals used only in simplified Chinese', fr: 'Radicaux utilisés uniquement en chinois simplifié' },
      description: {
        tw: `此測驗幫助您鞏固有關行列輸入法所有簡體字根的知識，僅使用繁體的學習者可以略過此部分。點擊灰色欄位顯示/隱藏答案，可針對的對您不會、或是有疑慮的部分做重點複習。本站的<a href="tutorial-complete.html#radical" target="_blank">行列教學</a>有全部字根的完整解說。`,
        en: `This quiz helps you to consolidate your knowledge of all the Array radicals that are used only in simplified Chinese. Feel free to skip this quiz if you use only traditional Chinese. Click on the gray bars to show/hide answers. You can focus on things you don't know or are unsure about. A detailed description of all the Array radicals can be found in the <a href="tutorial-complete.html#radical" target="_blank">complete guide to Array</a>.`,
        fr: `Ce quiz vous aide à consolider vos connaissances sur tous les radicaux Tableau qui sont utilisés uniquement en chinois simplifié. N'hésitez pas à sauter ce quiz si vous n'utilisez que du chinois traditionnel. Cliquez sur les barres grises pour afficher/masquer les réponses. Vous pouvez vous concentrer sur des choses que vous ne connaissez pas ou dont vous n'êtes pas sûr. Une description détaillée de tous les radicaux Tableau peut être trouvée dans <a href="tutorial-complete.html#radical" target="_blank">le guide complet de Tableau</a> sur ce site.`
      }
    },
    randomiseDescription: {
      tw: '下方字根目前依照字根碼排列，點擊打亂題目按鈕可將題目順序打亂。',
      en: "The radicals below are listed in radical code order by default. Click the 'Randomise' button to randomise the order of radicals.",
      fr: "Par défaut, les radicaux ici sont classés dans l'ordre de codes de radical. Cliquez sur le bouton « Randomiser » pour randomiser l'ordre des radicaux."
    },
    randomise: { tw: '打亂題目', en: 'Randomise', fr: 'Randomiser' },
    radicalType: { tw: '字根類型', en: 'Radical type', fr: 'Type de radical' },
    radicalCode: { tw: '字根碼', en: 'Radical code', fr: 'Code de radical' },
    radicalKey: { tw: '鍵位', en: 'Radical key', fr: 'Touche de radical' },
    all: { tw: '全部', en: 'All', fr: 'Tous' },
    beforeRadical: { tw: '字根「', en: "The radical '", fr: 'Le radical « ' },
    beforeRadicalType: { tw: '」是', en: "' is a ", fr: ' » est un radical ' },
    beforeRadicalCode: { tw: '字根，字根碼是 ', en: " radical, whose radical code is ", fr: ', dont le code de radical est ' },
    beforeRadicalKey: { tw: '，鍵位是 ', en: " and radical key is ", fr: ' et la touche est ' },
    beforeExample: { tw: '。例如它出現在', en: ". It's used in", fr: '. Il se trouve dans' },
    afterExample: { tw: '字。', en: "for example.", fr: 'par exemple.' },
    afterExamples: { tw: '等字。', en: "for example.", fr: 'par exemple.' },
    beforeExampleSC: { tw: '。例如它出現在', en: ". It's used in the simplified form of", fr: ". Il se trouve dans l'écriture simplifiée de" },
    afterExampleSC: { tw: '字的簡體寫法。', en: "for example.", fr: 'par exemple.' },
    group1: { tw: '基本筆形', en: '1st group', fr: 'du 1r groupe' },
    group2: { tw: '首尾筆形', en: '2nd group', fr: 'du 2e groupe' },
    group3: { tw: '特別歸位', en: '3rd group', fr: 'du 3e groupe' },
  },
  shareThisPageOn: { tw: '分享頁面至：', en: 'Share this page on:', fr: 'Partagez cette page sur : ' },
  contactMe: {
    tw: `有任何問題可以到本站的 <a href="https://www.facebook.com/FISH-UP-%E8%A1%8C%E5%88%97%E6%9F%A5%E7%A2%BC-106035361278242/" target="_blank">Facebook 粉絲專頁</a>私訊或留言，也可以寫信至 <a href="mailto:misterfishup@gmail.com" target="_blank">misterfishup@gmail.com</a> 😉。如果您覺得本網站對您很有幫助，可以<a href="https://www.buymeacoffee.com/misterfishup" target="_blank" title='♫ 請我吃蛋糕 ♫'>給 FISH UP 買個蛋糕</a>來支持他 🥰！（臺灣的朋友請使用<a href="https://p.ecpay.com.tw/4D901ED" target="_blank" title="支持 FISH UP 行列查碼去！">此連結</a>，因為臺灣目前不支援 Buy me a cake）`,
    en: `Got any questions? Send a message to the <a href="https://www.facebook.com/FISH-UP-%E8%A1%8C%E5%88%97%E6%9F%A5%E7%A2%BC-106035361278242/" target="_blank">Facebook fan page</a> of FISH UP Dictionary of Array, or write to <a href="mailto:misterfishup@gmail.com" target="_blank">misterfishup@gmail.com</a> 😉. If you enjoy this website, you can support FISH UP by <a href="https://www.buymeacoffee.com/misterfishup" target="_blank" title='♫ Buy me a cake ♫'>buying him a cake</a> 🥰 (If you're from Taiwan, please use <a href="https://p.ecpay.com.tw/4D901ED" target="_blank" title="Support FISH UP Dictionary of Array!">this link</a>, since Buy me a cake is not yet available in Taiwan).`,
    fr: `Des questions ? Envoyez un message à <a href="https://www.facebook.com/FISH-UP-%E8%A1%8C%E5%88%97%E6%9F%A5%E7%A2%BC-106035361278242/" target="_blank">la page fan Facebook</a> de Dictionnaire FISH UP de Tableau, ou écrivez à <a href="mailto:misterfishup@gmail.com" target="_blank">misterfishup@gmail.com</a> 😉. Si vous aimez ce site, vous pouvez <a href="https://www.buymeacoffee.com/misterfishup" target="_blank" title='♫ Achetez-moi un gâteau ♫'>soutenir FISH UP en lui achetant un gâteau</a> 🥰 (utilisez <a href="https://p.ecpay.com.tw/4D901ED" target="_blank" title="Soutenez Dictionnaire FISH UP de Tableau !">ce lien</a> si vous êtes de Taïwan, car Buy me a cake n'y est pas encore disponible).`
  },
  buyMeACake: { tw: '♫ 請我吃蛋糕 ♫', en: '♫ Buy me a cake ♫', fr: '♫ Achetez-moi un gâteau ♫' }
};
