const stringPageName = document.getElementById('app').dataset.pageName;
const AppContent = {
  title: { tw: 'FISH UP 行列查碼', en: 'FISH UP Dictionary of Array', fr: 'Dictionnaire FISH UP de Tableau' },
  description: {
    tw: '最好用的行列輸入法查碼',
    en: '- Simply the best Array Dictionary -',
    fr: '- Le meilleur dictionnaire de Tableau -'
  },
  tab1Title: { tw: '我想要查碼', en: 'Dictionary', fr: 'Dictionnaire' },
  tab2Title: { tw: '我想看列表', en: 'Lists', fr: 'Listes' },
  searchPlaceholder: { tw: '可同時查 500 個字！', en: '500 characters! You can simultaneously look up 500 characters!', fr: "500 caractères ! Vous pouvez simultanément rechercher 500 caractères !" },

  singleCode: { tw: '單鍵碼', en: 'one-key codes', fr: 'codes mono-touche' },
  specialCode: { tw: '特別碼', en: 'special codes', fr: 'codes spéciaux' },
  shortCodeI: { tw: '一級簡碼', en: 'short codes I', fr: 'codes courts I' },
  shortCodeII: { tw: '二級簡碼', en: 'short codes II', fr: 'codes courts II' },
  symbol: { tw: '符號', en: 'symbols', fr: 'symboles' },

  toggleEngKey: { tw: '按鍵顯示為英文鍵', en: 'English-key Mode', fr: 'Mode touche anglaise' },

  mainFunctions: {
    title: { tw: '兩大功能', en: 'Two main functions', fr: 'Deux fonctions principales' },
    sec1Title: { tw: '我想要查碼', en: 'Array dictionary', fr: 'Dictionnaire Tableau' },
    sec1Point1: {
      tw: '查詢範圍涵蓋至中日韓統一表意文字擴充區 D，總共 75016 字符提供查詢',
      en: "75016 characters and symbols, including all characters in CJK Unified Ideographs until Extension D",
      fr: "75016 caractères et symboles, y compris tous les caractères dans les sinogrammes unifiés CJC jusqu'au supplément D",
    },
    sec1Point2: {
      tw: '支援多字查詢，一次最多可查詢 500 字符',
      en: "Multi-character search: look up the Array codes of up to 500 characters/symbols with just one click",
      fr: "Recherche multi-caractères : rechercher les codes Tableau de 500 caractères/symboles maximum en un seul clic",
    },
    sec2Title: { tw: '我想看列表', en: 'Code lists', fr: 'Listes de codes' },
    sec2Point1: {
      tw: '列出單鍵碼、特別碼、一級簡碼、二級簡碼（因太多字不提供）及符號的列表',
      en: "Lists of one-key codes, special codes, short codes I, short codes II (not displayed, too many characters) and symbols",
      fr: "Listes des codes mono-touche, des codes spéciaux, des codes courts I, des codes courts II (non affichés, trop de caractères) et des symboles",
    },
    sec2Point2: {
      tw: '能夠隨意混篩，找出擁有上述編碼的字，不僅實用也滿足您的好奇心',
      en: 'Filter the list with different types of codes',
      fr: "Filtrer la liste avec différents types de codes",
    },
  },
  practicalFeatures: {
    title: { tw: '實用特色', en: 'Practical features', fr: 'Fonctionnalités pratiques' },
    par1: {
      tw: '✔️ 支援行動裝置瀏覽，手機、平板、電腦都能良好顯示',
      en: "✔️ Works on mobile phones, tablets and computers",
      fr: '✔️ Marche sur les téléphones portables, les tablettes et les ordinateurs',
    },
    downloadable: {
      tw: '✔️ 免費下載查詢結果',
      en: "✔️ Download the search result for free",
      fr: "✔️ Télécharger gratuitement le résultat de la recherche",
    },
    codeType: {
      tw: `✔️ 標註編碼類型：
      <ul class="code-type-list">
        <li><span class="keycap title-standard">普</span>：普通編碼</li>
        <li><span class="keycap title-single">單</span>：單鍵碼*</li>
        <li><span class="keycap title-special">特</span>：特別碼</li>
        <li><span class="keycap title-shortcode1">一</span>：一級簡碼</li>
        <li><span class="keycap title-shortcode2">二</span>：二級簡碼</li>
        <li><span class="keycap title-symbol">符</span>：符號</li>
        <li><span class="keycap title-array10">數</span>：行列 10 編碼 （若有多種輸入方式則以分號分隔）</li>
      </ul>`,
      en: `✔️ Indicates the type of code by
      <ul class="code-type-list">
        <li><span class="keycap title-standard">普</span>：standard code</li>
        <li><span class="keycap title-single">單</span>：one-key code*</li>
        <li><span class="keycap title-special">特</span>：special code</li>
        <li><span class="keycap title-shortcode1">一</span>：short code I</li>
        <li><span class="keycap title-shortcode2">二</span>：short code II</li>
        <li><span class="keycap title-symbol">符</span>：symbol</li>
        <li><span class="keycap title-array10">數</span>：Array 10 code (semicolons for separating multiple possible codes)</li>
      </ul>`,
      fr: `✔️ Indique le type de code par
      <ul class="code-type-list">
        <li><span class="keycap title-standard">普</span>：code standard</li>
        <li><span class="keycap title-single">單</span>：code mono-touche*</li>
        <li><span class="keycap title-special">特</span>：code spécial</li>
        <li><span class="keycap title-shortcode1">一</span>：code court I</li>
        <li><span class="keycap title-shortcode2">二</span>：code court II</li>
        <li><span class="keycap title-symbol">符</span>：symbole</li>
        <li><span class="keycap title-array10">數</span>：Code en Tableau 10 (points-virgules utilisés pour séparer plusieurs codes possibles)</li>
      </ul>`,
    },
    decomposition: {
      tw: '✔️ 常用字提供 <span class="keycap title-decomposition">拆</span>：行列拆字',
      en: `✔️ Provides <span class="keycap title-decomposition">拆</span> : decomposition of common characters`,
      fr: `✔️ Donne <span class="keycap title-decomposition">拆</span> : la décomposition de caractères fréquents`,
    },
    englishKey: {
      tw: '✔️ 按鍵顯示能自由且即時地切換為英文鍵或行列 30 鍵',
      en: '✔️ Turn English-key mode on or off instantly at any time',
      fr: '✔️ Activer ou désactiver instantanément le mode touche anglaise à tout moment',
    },
    spaceBar: {
      tw: `✔️ 提示是否需要按 <span class="keycap keycap-space">Space</span> 空白鍵`,
      en: "✔️ Indicates whether the space bar is needed",
      fr: "✔️ Indique si l'usage de la barre d'espace est requis",
    },
    numberKey: {
      tw: '✔️ 一級與二級簡碼給出數字鍵',
      en: "✔️ Provides short codes I and II's number key",
      fr: '✔️ Donne la touche de chiffre pour les codes courts I et II',
    },
    coincidenceRank: {
      tw: '✔️ 普通編碼提示重碼位置',
      en: '✔️ Provides coincidence rank for coincident codes',
      fr: '✔️ Donne le rang de coïncidence pour les codes coïncidents',
    },
    symbolList: {
      tw: '✔️ 給出符號在行列符號選單中的位置',
      en: '✔️ Provides rank for symbols in symbol lists',
      fr: '✔️ Donne le rang des symboles dans les listes de symboles ',
    },
    hyperlink: {
      tw: '✔️ 查詢結果提供超連結，多筆資料時能方便地快速移動',
      en: "✔️ Provides hyperlinks for search results",
      fr: "✔️ Donne des hyperliens pour les résultats de recherche",
    },
    oneKeyCode: {
      tw: '*單鍵碼：只按一顆行列 30 鍵且沒有重碼的普通編碼',
      en: '*One-key code: a standard code which has only one Array key and is not a coincident code',
      fr: "*Code mono-touche : un code standard non coïncident qui a une seule touche Tableau",
    },
  },
  seeMoreLists: {
    title: { tw: '想看更多列表', en: 'See more lists', fr: 'Voir plus de listes' },
    par1: {
      tw: '想看更多分類？例如想看普通編碼有 3 鍵且無重碼的字？或想了解特別碼的取碼邏輯？',
      en: "Want to see more classifications? For example standard codes which have three Array keys and are non-coincident? Or want to know the encoding logic of special codes?",
      fr: "Envie de voir plus de classifications ? Par exemple des codes standard non coïncidents ayant trois touches Tableau ? Ou envie de savoir la logique d'encodage de certains codes spéciaux ?"
    },
    par2: {
      tw: `千萬要記得到本站<a href="typing.html" target="_blank">打字練習</a>頁面的「題目選擇」挖寶！`,
      en: `Go to <a href="typing.html" target="_blank">Typing practice</a> on this website to find out more!`,
      fr: `Rendez-vous aux <a href="typing.html" target="_blank">Exercices de saisie</a> de ce site pour en découvrir plus !`
    },
    goTyping: { tw: '前往打字練習', en: 'Go to Typing practice', fr: 'Aller aux Exercices de saisie' },
  },
  aboutCC: {
    title: {
      tw: '關於重碼',
      en: 'About coincident codes',
      fr: 'À propos des codes coïncidents'
    },
    sec1Title: {
      tw: '# 無重碼，或是有重碼且重碼位大於 1',
      en: '# Characters whose code is not coincident, or is coincident and of coincidence rank greater than 1',
      fr: "# Caractères dont le code n'est pas coïncident, ou est de rang de coïncidence supérieur à 1",
    },
    sec1Par1: {
      tw: '本網站都幫您把按鍵寫出來了，完全照著輸入即可（黑色按鍵負責選擇重碼）。',
      en: "All keys are written down: just type what is displayed in the result. (Note: Key(s) in black solves the coincident code problem.)",
      fr: "Toutes les touches sont écrites: il suffit de taper ce qui est affiché dans le résultat. (NB : La/les touche en noir résout le problème du code coïncident.)",
    },
    sec2Title: {
      tw: '# 有重碼且重碼位為 1',
      en: "# Characters whose code is coincident and of coincidence rank 1",
      fr: "# Caractères dont le code est coïncident et de rang de coïncidence 1",
    },
    sec2Par1: {
      tw: `查碼結果後面會加上「，重碼位 1」。沒有直接像重碼位大於 1 時寫出黑色按鍵，是因為重碼位等於 1 有<b>至少兩種</b>輸入方法：`,
      en: `In this case, a note 'coincidence rank equal to 1' will be displayed at the end of the code.  there are <b>at least two ways</b> to complete the entry:`,
      fr: `Dans ce cas, une note « rang de coïncidence égal à 1 » sera affichée à la fin du code et il y a <b>au moins deux façons</b> de terminer la saisie :`,
    },
    sec2Par2: {
      tw: '按完本網站給出的按鍵後（即一到數顆行列 30 鍵 + 空白鍵後），您可以',
      en: "After entering the keys shown in the result (i.e., one or more Array keys and the space bar), you can",
      fr: "Après avoir saisi les touches affichées dans le résultat (c'est-à-dire une ou plusieurs touches Tableau et la barre d'espace), vous pouvez",
    },
    sec2LI1: {
      tw: `按下數字鍵 <span class="keycap keycap-cc">1</span> ，即可完成輸入。`,
      en: `press the number key <span class="keycap keycap-cc">1</span> to complete the entry`,
      fr: `appuyer sur la touche de chiffre <span class="keycap keycap-cc">1</span> pour compléter la saisie`,
    },
    sec2LI2: {
      tw: '直接開始打下一個字（按下的鍵必須是行列 30 鍵），原本那個重碼位 1 的字會自動完成輸入。',
      en: "directly start typing the next character (pressed any Array key), the character of coincidence rank 1 will be completed automatically",
      fr: "commencer directement à taper le caractère suivant (appuyer sur une touche Tableau quelconque), le caractère de rang de coïncidence 1 sera automatiquement saisi",
    },
    sec2LI3: {
      tw: `按下 <span class="keycap keycap-space">Space</span> 即可完成輸入，但此方法僅限於重碼數量不超過 10 個的情況（沒有第二頁）。`,
      en: `press <span class="keycap keycap-space">Space</span> to complete the entry. Notice that this method works only when the number of characters having this coincident code does not exceed 10 (no second page)`,
      fr: `appuyer sur <span class="keycap keycap-space">Space</span> pour terminer la saisie, mais cette méthode ne marche que lorsque le nombre des caractères ayant ce code coïncident ne dépasse pas 10 (pas de seconde page)`,
    },
    sec3Title: {
      tw: '# 無重碼變為有重碼',
      en: '# Characters whose code is not coincident but could become coincident',
      fr: "# Caractères dont le code n'est pas coïncident mais peut devenir coïncident",
    },
    sec3Par1: {
      tw: '有些字可能原本沒有重碼，但因為您啟用了更廣的中日韓統一表意文字擴充區，導致變成有重碼。本網站會貼心地標示出這種狀況。',
      en: "Some characters have a standard code which is initially not a coincident code but turns into one due to the activation of the entry of characters from a larger CJK Unified Ideographs Extension. A note will be displayed for this situation.",
      fr: "Certains caractères ont un code standard qui n'est à l’origine pas un code coïncident, mais qui le devient à la suite de l'activation de l'entrée des caractères d'un supplément de sinogrammes unifiés CJC plus large. Une note sera affichée pour cette situation."
    },
  },
  notice: {
    title: { tw: '注意事項', en: 'Notice', fr: 'À noter' },
    aboutDictionaryTitle: { tw: '關於行列查碼', en: 'Character set', fr: 'Jeu de caractères' },
    aboutDictionaryPar1: {
      tw: '由於中日韓統一表意文字擴充區 D 之後的字相當罕用，本站僅供查詢至擴充區 D，並且普通編碼的重碼提示建立在沒有啟用擴充區 EF 的條件下。',
      en: 'Since the characters in CJK Unified Ideographs Extensions E, F and G are extremely rarely used, their Array codes are not provided on this website. Besides, coincidence ranks are based on the presumption that the entry of CJK-E, F and G characters are disabled (or are not possible).',
      fr: "Comme les caractères dans les suppléments E, F et G des sinogrammes unifiés CJC sont extrêmement rarement utilisés, leurs codes Tableau ne sont pas fournis sur ce site. D'ailleurs, les rangs de coïncidence sont basés sur la présomption que l'entrée des caractères CJC-E, F et G est désactivée (ou n'est pas possible)."
    },
    characterDisplay: {
      title: { tw: '關於字元顯示', en: 'Character display', fr: "Affichage des caractères" },
      par1: {
        tw: `本站使用<u>網頁版</u>思源宋體 Noto Serif CJK TC，僅支援到中日韓統一表意文字擴充區 A 區、以及 B 區中部分常用字。`,
        en: `This website is using <u>the online version</u> of the font 'Noto Serif CJK TC', which only supports characters in CJK Unified Ideographs Extension A (CJK-A characters for short) and some CJK-B characters.`,
        fr: `Ce site utilise <u>la version en ligne</u> de la police « Noto Serif CJK TC », qui ne couvre que les caractères dans le supplément A des sinogrammes unifiés CJC (les caractères CJC-A en abrégé) et certains caractères CJC-B.`
      },
      par2: {
        tw: `如果要正確顯示多數罕用字以及網頁上的粗體，您可以免費下載此字體的<u>完整版</u>（<a href="https://www.google.com/get/noto/#serif-hant" target="_blank">點此前往下載頁</a>）。`,
        en: `To display most rare characters correctly, you can download <u>the full version</u> of Noto Serif CJK TC for free (<a href="https://www.google.com/get/noto/#serif-hant" target="_blank">click here to go to the download page</a>).`,
        fr: `Pour correctement afficher la plupart des caractères rares , vous pouvez télécharger gratuitement <u>la version complète</u> de Noto Serif CJK TC (<a href="https://www.google.com/get/noto/#serif-hant" target="_blank">cliquez ici pour aller à la page de téléchargement</a>).`
      },
      par3: {
        tw: `如果要正確顯示所有罕用字，您可以下載免費字體「花園明朝體 HanaMinB」（<a href="https://zh-tw.osdn.net/projects/hanazono-font/releases/p12900" target="_blank">點此前往下載頁</a>），此字體能夠完整支援到擴充區 F，不過一般來說不會有這個需求，下載完整版的思源宋體就足夠了。`,
        en: `To display all rare characters correctly, you can download the font 'HanaMinB' from 'Hanazono Mincho' for free (<a href="https://osdn.net/projects/hanazono-font/releases/p12900" target="_blank">click here to go to the download page</a>), which supports all CJK characters until CJK-F. However, the full version of 'Noto Serif CJK TC' is sufficient in most cases. (Free and open source, Noto serif CJK/Noto Sans CJK is a great Serif/Sans font created by Adobe and Google. Recommended!)`,
        fr: `Pour correctement afficher tous les caractères rares , vous pouvez télécharger gratuitement la police « HanaMinB » de « Hanazono Mincho » (<a href="https://fr.osdn.net/projects/hanazono-font/releases/p12900" target="_blank">cliquez ici pour aller à la page de téléchargement</a>), qui offre une couverture complète de tous les caractères CJC jusqu'à CJC-F. Mais en général la version complète de la police « Noto Serif CJK TC » est suffisante. (Gratuite et open source, Noto serif CJK/Noto Sans CJK est une jolie police Serif/Sans créée par Adobe et Google. Recommandée !)`
      },
    }
  },
  contactMe: {
    tw: `有任何問題可以到本站的 <a href="https://www.facebook.com/FISH-UP-%E8%A1%8C%E5%88%97%E6%9F%A5%E7%A2%BC-106035361278242/" target="_blank">Facebook 粉絲專頁</a>私訊或留言，也可以寫信至 <a href="mailto:misterfishup@gmail.com" target="_blank">misterfishup@gmail.com</a> 😉。如果您覺得本網站對您很有幫助，可以<a href="https://www.buymeacoffee.com/misterfishup" target="_blank" title='♫ 請我吃蛋糕 ♫'>給 FISH UP 買個蛋糕</a>來支持他 🥰！`,
    en: `Got any questions? Send a message to the <a href="https://www.facebook.com/FISH-UP-%E8%A1%8C%E5%88%97%E6%9F%A5%E7%A2%BC-106035361278242/" target="_blank">Facebook fan page</a> of FISH UP Dictionary of Array, or write to <a href="mailto:misterfishup@gmail.com" target="_blank">misterfishup@gmail.com</a> 😉. If you enjoy this website, you can support FISH UP by <a href="https://www.buymeacoffee.com/misterfishup" target="_blank" title='♫ Buy me a cake ♫'>buying him a cake</a> 🥰.`,
    fr: `Des questions ? Envoyez un message à <a href="https://www.facebook.com/FISH-UP-%E8%A1%8C%E5%88%97%E6%9F%A5%E7%A2%BC-106035361278242/" target="_blank">la page fan Facebook</a> de Dictionnaire FISH UP de Tableau, ou écrivez à <a href="mailto:misterfishup@gmail.com" target="_blank">misterfishup@gmail.com</a> 😉. Si vous aimez ce site, vous pouvez <a href="https://www.buymeacoffee.com/misterfishup" target="_blank" title='♫ Achetez-moi un gâteau ♫'>soutenir FISH UP en lui achetant un gâteau</a> 🥰.`
  },
  shareOn: { tw: '分享：', en: 'Share on:', fr: 'Partagez sur : ' },
  buyMeACake: { tw: '♫ 請我吃蛋糕 ♫', en: '♫ Buy me a cake ♫', fr: '♫ Achetez-moi un gâteau ♫' }
};
