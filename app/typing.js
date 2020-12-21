const stringPageName = document.getElementById('app').dataset.pageName;
const AppContent = {
  // header
  title: { tw: 'FISH UP 行列打字練習', en: 'FISH UP Typing practice', fr: 'FISH UP Exercices de saisie' },
  subtitle: {
    tw: '最有效的行列輸入法打字練習',
    en: 'The Most Effective Typing Exercises with Array code hints',
    fr: 'Les exercices de saisie les plus efficaces avec des indices de codes Tableau'
  },
  description: {
    tw: '附有最完整的行列提示、豐富的打字題目，甚至可自製打字題目！',
    en: 'A wide variety of exercises. You can even create your own.',
    fr: 'De nombreux exercices. Vous pouvez même en crée de nouveaux.'
  },
  toggleClose: { tw: '請關閉', en: 'Close', fr: 'Fermer' },
  // left column
  currentCharacter: { tw: '當前提示', en: 'Current character', fr: 'Caractère actuel' },
  exercises: {
    title: { tw: '題目選擇', en: 'Exercises', fr: 'Exercices' },
    settings: { tw: '題目產生設定', en: 'Settings', fr: "Paramètres" },
    maxNumber: { tw: '每行最多字數：', en: 'Max. nb. of characters per line:', fr: "Nb. max. de caractères par ligne :" },
    defaultInParentheses: { tw: '（預設）', en: ' (default)', fr: ' (par défaut)' },
    characterOrder: { tw: '字元順序：', en: 'Character order:', fr: 'Ordre des caractères :' },
    normalDefault: { tw: '正常（預設）', en: 'normal (default)', fr: 'normal (par défaut)' },
    reverse: { tw: '逆序', en: 'reverse', fr: 'inverse' },
    random: { tw: '隨機打亂', en: 'randomly shuffled', fr: 'aléatoire' },
    builtIn: {
      title: { tw: '選擇內建題目', en: 'Choose a built-in exercise', fr: 'Choisir un exercice' },
      description: {
        tw: '想打更多題目？像是詩詞、文章、歌詞、格言？歡迎使用自製題目功能！',
        en: "Want more exercises? Like poems, articles, song lyrics, or proverbs? You can create your own one in 'Create your own exercise'!",
        fr: "Envie de vous entraîner avec plus d'exercices ? Comme des poèmes, des articles, des paroles de chansons, ou des proverbes ? Vous pouvez créer votre propre exercice dans « Créez votre exercice » !"
      },
      // then see builtInExercise object
    },
    customisation: {
      title: { tw: '使用自製題目', en: 'Create your own exercise', fr: 'Créez votre exercice' },
      description: {
        tw: '到網路上複製想要的文章、歌詞後在下方貼上，輸入中英文都可以！',
        en: "Copy Chinese articles or song lyrics and paste them below. The English alphabet is of course welcome, too!",
        fr: "Copiez des articles ou des paroles de chansons en chinois et collez-les ci-dessous. Les lettres de l'alphabet français sont bien sûr les bienvenues aussi !"
      },
      inputPlaceholder: { tw: '最多可以輸入 3000 字元！', en: 'You can enter up to 3000 characters!', fr: "Vous pouvez entrer jusqu'à 3000 caractères !" },
      creation: { tw: '產生題目', en: 'Create exercise', fr: "Créer exercice" },
      comment: {
        tw: '輸入自製題目時可以不用換行，系統會依您的選擇字數自動換行來設計題目。但若您輸入自製題目時換行，產生的題目也會換行。',
        en: "Line breaks are not necessary when entering text here. The system will automatically create your exercise with line breaks according to the maximum number of characters per line defined in the settings. However, if you enter a line break, the created exercise will also have this line break.",
        fr: "Lorsque vous saisissez ici un texte, les saut de lignes ne sont pas nécessaires. Le système va automatiquement créer l'exercice personnalisé avec des sauts de lignes en fonction du nombre maximal de caractères par ligne défini dans les paramètres. Toutefois, si vous saisissez un saut de ligne, l'exercice créé va aussi avoir ce saut de ligne."
      },
    },
    notice: {
      title: { tw: '注意事項', en: 'Notice', fr: 'À noter' },
      aboutArrayHintTitle: { tw: '關於行列提示', en: 'Array code hints', fr: 'Indices de codes Tableau' },
      aboutArrayHintPar1: {
        tw: '由於中日韓統一表意文字擴充區 D 之後的字相當罕用，本站行列編碼僅提示至擴充區 D，並且普通編碼的重碼提示建立在沒有啟用擴充區 EF 的條件下。',
        en: 'Since the characters in CJK Unified Ideographs Extensions E, F and G are extremely rarely used, their Array code hints are not provided on this website. Besides, coincidence rank hints are based on the presumption that the entry of CJK-E, F and G characters are disabled.',
        fr: "Comme les caractères dans les suppléments E, F et G des sinogrammes unifiés CJC sont extrêmement rarement utilisés, leurs codes Tableau ne sont pas fournis sur ce site. D'ailleurs, les rangs de coïncidence indiqués sont basés sur la présomption que l'entrée des caractères CJC-E, F et G est désactivée."
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
          fr: `Pour correctement afficher la plupart des caractères rares, vous pouvez télécharger gratuitement <u>la version complète</u> de Noto Serif CJK TC (<a href="https://www.google.com/get/noto/#serif-hant" target="_blank">cliquez ici pour aller à la page de téléchargement</a>).`
        },
        par3: {
          tw: `如果要正確顯示所有罕用字，您可以下載免費字體「花園明朝體 HanaMinB」（<a href="https://zh-tw.osdn.net/projects/hanazono-font/releases/p12900" target="_blank">點此前往下載頁</a>），此字體能夠完整支援到擴充區 F，不過一般來說不會有這個需求，下載完整版的思源宋體就足夠了。`,
          en: `To display all rare characters correctly, you can download the font 'HanaMinB' from 'Hanazono Mincho' for free (<a href="https://osdn.net/projects/hanazono-font/releases/p12900" target="_blank">click here to go to the download page</a>), which supports all CJK characters until CJK-F. However, the full version of 'Noto Serif CJK TC' is sufficient in most cases. (Free and open source, Noto serif CJK/Noto Sans CJK is a great Serif/Sans font created by Adobe and Google. Recommended!)`,
          fr: `Pour correctement afficher tous les caractères rares , vous pouvez télécharger gratuitement la police « HanaMinB » de « Hanazono Mincho » (<a href="https://fr.osdn.net/projects/hanazono-font/releases/p12900" target="_blank">cliquez ici pour aller à la page de téléchargement</a>), qui offre une couverture complète de tous les caractères CJC jusqu'à CJC-F. Mais en général la version complète de la police « Noto Serif CJK TC » est suffisante. (Gratuite et open source, Noto serif CJK/Noto Sans CJK est une jolie police Serif/Sans créée par Adobe et Google. Recommandée !)`
        },
      },
    }
  },
  // built-in exercises
  builtInExercise: {
    all: { tw: '全部', en: 'all', fr: "tous" },
    commonCharacter: {
      title: { tw: '常用字系列', en: 'Commonly used Chinese characters', fr: "Caractères chinois fréquemment utilisés" },
      warning: {
        tw: "不是依照使用頻率排序",
        en: "Not sorted by usage frequency",
        fr: "Ne sont pas triés par fréquence d'utilisation"
      },
      tw: { tw: '臺灣', en: 'Taiwan', fr: "Taïwan" },
      cn: { tw: '中國', en: 'China', fr: "Chine" },
      hk: { tw: '香港', en: 'Hong Kong', fr: "Hong Kong" },
      jp: { tw: '日本', en: 'Japan', fr: "Japon" },
      twCommon4808: { tw: '4808 個常用字', en: '4808 common characters', fr: "4808 caractères fréquents" },
      twLessCommon6341: { tw: '6341 個次常用字', en: '6341 less common characters', fr: "6341 caractères moins fréquents" },
      cnCommon3500: { tw: '3500 個常用字', en: '3500 common characters', fr: "3500 caractères fréquents" },
      cnLessCommon3000: { tw: '3000 個次常用字', en: '3000 less common characters', fr: "3000 caractères moins fréquents" },
      hkCommon4759: { tw: '4759 個常用字（2000 年版）', en: '4759 common characters (revised in 2000)', fr: "4759 caractères fréquents (révisés en 2000)" },
      jpCommon2136: { tw: '2136 個常用漢字', en: '2136 common characters (kanji)', fr: "2136 caractères (kanji) fréquents" },
    },
    lyric: {
      title: { tw: '歌詞系列', en: 'Chinese song lyrics', fr: "Paroles de chansons chinoises" },
    },
    article: {
      title: { tw: '文章系列', en: 'Articles', fr: "Articles" },
      classic: {
        title: { tw: '古文', en: 'Chinese classics', fr: "Classiques chinois" },
        hundred: { tw: '百家姓', en: 'Hundred Family Surnames (Bǎi Jiā Xìng)', fr: "Cent noms de famille (Bǎi Jiā Xìng)" },
        thousand: { tw: '千字文（含標點）', en: 'Thousand Character Classic (Qiān Zì Wén) (text punctuated)', fr: "Classique des Mille Caractères (Qiān Zì Wén) (texte ponctué)" },
        赤壁賦: { tw: '（前）赤壁賦', en: 'Former Ode on the Red Cliffs (Qián Chì Bì Fù)', fr: "Première ode à la Falaise rouge (Qián Chì Bì Fù)" },
        出師表: { tw: '（前）出師表', en: 'Former Chū Shī Biǎo', fr: "Ancien Chū Shī Biǎo" },
        蘭亭集序: { tw: '蘭亭集序', en: 'Preface to the Poems Collected from the Orchid Pavilion (Lán Tíng Jí Xù)', fr: "Préface au recueil du pavillon des Orchidées (Lán Tíng Jí Xù)" },
        岳陽樓記: { tw: '岳陽樓記', en: 'Memorial to Yueyang Tower (Yuè Yáng Lóu Jì)', fr: "Mémorial à la tour Yueyang (Yuè Yáng Lóu Jì)" }
      }
    },
    arrayRadical: {
      title: { tw: '字根運用練習系列', en: 'Array radical examples', fr: "Exemples de radicaux Tableau" },
      example: { tw: '字根實例', en: 'Array radical examples', fr: "Exemples de radicaux Tableau" },
      column: { tw: '行', en: 'column', fr: "colonne" },
      chineseRadical: { tw: '部首', en: 'Chinese radicals (Bù Shǒu)', fr: "Clés du chinois (Bù Shǒu)" },
      stroke: { tw: '畫', en: 'stroke', fr: "trait" },
      strokes: { tw: '畫', en: 'strokes', fr: "traits" },
    },
    standard: {
      title: { tw: '一般拆碼系列', en: 'Standard codes', fr: "Codes standard" },
      keystroke1: {
        title: { tw: '單鍵', en: '1 Array key', fr: "1 touche Tableau" },
        nonCC: { tw: '無重碼', en: 'non-coincident codes', fr: "codes non coïncidents" },
        ccRank1: { tw: '重碼位 1', en: 'codes of coincidence rank 1', fr: "codes de rang de coïncidence 1" },
      },
      keystroke2: {
        title: { tw: '雙鍵', en: '2 Array keys', fr: "2 touches Tableau" },
        nonCC: { tw: '無重碼', en: 'non-coincident codes', fr: "codes non coïncidents" },
        ccRank1: { tw: '重碼位 1', en: 'codes of coincidence rank 1', fr: "codes de rang de coïncidence 1" },
        ccRank2: { tw: '重碼位 2 但少用，簡碼不用記', en: 'codes of coincidence rank 2 which are not frequently used', fr: "codes de rang de coïncidence 2 qui ne sont pas fréquemment utilisés" },
        ccRank3: { tw: '重碼位 3 但少用，簡碼不用記', en: 'codes of coincidence rank 3 which are not frequently used', fr: "codes de rang de coïncidence 3 qui ne sont pas fréquemment utilisés" },
        ccCommon: { tw: '常用且重碼位 = 二級簡碼數字鍵', en: 'codes of coincidence rank = number key in the short code II (frequently used)', fr: "codes de rang de coïncidence = touche de chiffre dans le code court II (fréquemment utilisés)" }
      },
      keystroke3: {
        title: { tw: '三鍵', en: '3 Array keys', fr: "3 touches Tableau" },
        nonCC: { tw: '無重碼', en: 'non-coincident codes', fr: "codes non coïncidents" },
        ccRank1: { tw: '重碼位 1', en: 'codes of coincidence rank 1', fr: "codes de rang de coïncidence 1" },
        ccRank2: { tw: '重碼位 2 但少用，若有簡碼不用記', en: 'codes of coincidence rank 2 which are not frequently used', fr: "codes de rang de coïncidence 2 qui ne sont pas fréquemment utilisés" },
        ccCommon: { tw: '常用且第三字根數字位 = 二級簡碼數字鍵', en: "coincident codes with the third keystroke's column position = number key in the short code II (frequently used)", fr: "codes coïncidents dont la position de la colonne de la 3e touche = touche de chiffre dans le code court II (fréquemment utilisés)" }
      },
      keystroke4: {
        title: { tw: '四鍵', en: '4 Array keys', fr: "4 touches Tableau" },
        nonCC: { tw: '無重碼', en: 'non-coincident codes', fr: "codes non coïncidents" },
        ccRank1: { tw: '重碼位 1', en: 'codes of coincidence rank 1', fr: "codes de rang de coïncidence 1" },
        ccRank2: { tw: '重碼位 2 但少用', en: 'codes of coincidence rank 2 which are not frequently used', fr: "codes de rang de coïncidence 2 qui ne sont pas fréquemment utilisés" },
        ccRank3: { tw: '重碼位 3 但少用', en: 'codes of coincidence rank 3 which are not frequently used', fr: "codes de rang de coïncidence 3 qui ne sont pas fréquemment utilisés" },
        ccCommon: { tw: '常用且第三字根數字位 = 二級簡碼數字鍵', en: "coincident codes with the third keystroke's column position = number key in the short code II (frequently used)", fr: "codes coïncidents dont la position de la colonne de la 3e touche = touche de chiffre dans le code court II (fréquemment utilisés)" }
      },
    },
    specialShort: {
      title: { tw: '特別碼、簡碼系列', en: 'Speical, short codes', fr: "Codes spéciaux, courts" },
      specialCode: { tw: '特別碼', en: 'Speical codes', fr: "Codes spéciaux" },
      special414: { tw: '四鍵取首尾', en: '1st + 4th keys from a 4-Array-key standard code', fr: "1re + 4e touches d'un code standard de 4 touches Tableau" },
      special412: { tw: '四鍵取首二', en: '1st + 2nd keys from a 4-Array-key standard code', fr: "1re + 2e touches d'un code standard de 4 touches Tableau" },
      special413: { tw: '四鍵取首三', en: '1st + 3rd keys from a 4-Array-key standard code', fr: "1re + 3e touches d'un code standard de 4 touches Tableau" },
      special423: { tw: '四鍵取二三', en: '2nd + 3rd keys from a 4-Array-key standard code', fr: "2e + 3e touches d'un code standard de 4 touches Tableau" },
      special424: { tw: '四鍵取二四', en: '2nd + 4th keys from a 4-Array-key standard code', fr: "2e + 4e touches d'un code standard de 4 touches Tableau" },
      special434: { tw: '四鍵取三四', en: '3rd + 4th keys from a 4-Array-key standard code', fr: "3e + 4e touches d'un code standard de 4 touches Tableau" },
      special313: { tw: '三鍵取首尾', en: '1st + 3rd keys from a 4-Array-key standard code', fr: "1re + 3e touches d'un code standard de 4 touches Tableau" },
      special312: { tw: '三鍵取首中', en: '1st + 2nd keys from a 4-Array-key standard code', fr: "1re + 2e touches d'un code standard de 4 touches Tableau" },
      special323: { tw: '三鍵取中尾', en: '2nd + 3rd keys from a 4-Array-key standard code', fr: "2e + 3e touches d'un code standard de 4 touches Tableau" },
      added1996: { tw: '1996 新增（正向取）', en: 'added in 1996 (in order)', fr: "ajoutés en 1996 (dans l'ordre)" },
      added1996Reverse: { tw: '1996 新增（反向取）', en: 'added in 1996 (in reverse order)', fr: "ajoutés en 1996 (dans l'ordre inverse)" },
      irregular: { tw: '無規則', en: 'irregular', fr: "irrégulier" },
      haveShortCodeI: { tw: '有一級簡碼', en: 'having a short code I', fr: "ayant un code court I" },
      withoutShortCodeI: { tw: '無一級簡碼', en: 'having no short code I', fr: "n'ayant pas de code court I" },
      shortCode: { tw: '一級簡碼', en: 'Short codes', fr: "Codes courts" },
      character: { tw: '文字', en: 'characters', fr: "caractères" },
      symbol: { tw: '符號', en: 'symbols', fr: "symboles" },
      haveSpecialCode: { tw: '有特別碼', en: 'having a special code', fr: "ayant un code spécial" },
    },
    symbol: {
      title: { tw: '符號系列', en: 'Symbols', fr: "Symboles" },
      symbol: { tw: '符號', en: 'Symbols', fr: "Symboles" },
      shortCodeI: { tw: '有一級簡碼', en: 'having a short code I', fr: "ayant un code court I" },
      bopomofo: { tw: '注音符號', en: 'bopomofo', fr: "bopomofo" },
      greekUpper: { tw: '大寫希臘字母', en: 'uppercase Greek letters', fr: "lettres grecques majuscules" },
      greekLower: { tw: '小寫希臘字母', en: 'lowercase Greek letters', fr: "lettres grecques minuscules" },
    },
    emoticon: {
      title: { tw: '顏文字系列（每行最多字數請設為 20）', en: 'Emoticons (Set max 20 characters per line)', fr: "Émoticônes (Choisir max 20 caractères par ligne)" },
      emoticon: { tw: '顏文字', en: 'Emoticons', fr: "Émoticônes" },
      happy: { tw: '開心', en: 'happy', fr: "joyeux" },
      angry: { tw: '生氣', en: 'angry', fr: "fâché" },
      wtf: { tw: '獵奇', en: 'WTF', fr: "WTF" },
    },
  },
  // middle column
  toggleEngKey: { tw: '按鍵顯示為英文鍵', en: 'English-key Mode', fr: 'Mode touche anglaise' },
  currentExercise: { tw: '當前題目', en: 'Current exercise', fr: 'Exercice courant' },
  nextLine: { tw: '下一句', en: 'Next line', fr: 'Ligne suivante' },
  inputField: { tw: '輸入欄', en: 'Input field', fr: 'Champ de saisie' },
  reset: { tw: '重置當前題目 ', en: 'Reset', fr: "Réinitialiser" },
  inputPlaceholder: { tw: '按 Enter 鍵換下一句', en: 'Press Enter to go to the next line', fr: "Appuyez sur Entrée pour accéder à la ligne suivante" },

  reminder: {
    title: { tw: '我知道了！', en: 'I got it!', fr: "J'ai compris !" },
    par1: {
      tw: `還沒有行列輸入法？本站<a href="download.html" target="_blank" class="w3-hover-opacity">下載頁面</a>可以免費下載！`,
      en: `Don't have Array yet? You can get it for free on the <a href="download.html" target="_blank" class="w3-hover-opacity">download page</a>!`,
      fr: `Vous n'avez pas encore Tableau ? Vous pouvez le télécharger gratuitement à la page <a href="download.html" target="_blank" class="w3-hover-opacity">Téléchargements</a> !`,
    },
    par2: {
      tw: `另外，點擊本頁的標題，可以將畫面移動至打字練習的區塊。打字前建議先閱讀過本站「FISH UP 行列查碼」的頁面，以了解本頁顯示的行列編碼，例如關於使用普通編碼輸入時重碼的部分。&emsp;<a href="dictionary.html#about-coincident-codes" target="_blank" class="w3-hover-opacity">>>點我閱讀頁面<<</a>`,
      en: `Clicking on the title of this page will move the screen to the exercise area. Also, it is recommended that you read the page 'FISH UP Dictionary of Array' before using this page for a better understanding of Array codes shown here (when dealing with coincident codes for example).&emsp;<a href="dictionary.html#about-coincident-codes" target="_blank" class="w3-hover-opacity">>>Click here to read the page<<</a>`,
      fr: `Par ailleur, le fait de cliquer sur le titre de cette page permet de déplacer l'écran vers la zone d'exercices. Il est recommandé de lire la page « Dictionnaire FISH UP de Tableau » avant d'utiliser cette page, pour mieux comprendre les codes Tableau indiqués ici (pour la saisie des codes coïncidents par exemple). &emsp;<a href="dictionary.html#about-coincident-codes" target="_blank" class="w3-hover-opacity">>> Cliquez ici pour lire la page <<</a>`,
    }
  },
  typedLines: { tw: '已打句子', en: 'Typed lines', fr: 'Lignes tapées' },
  wrongCharacterPreviousLines: { tw: '先前行列錯字', en: 'Wrong characters and their Array codes (typed lines)', fr: 'Caractères incorrects avec leurs codes Array (lignes tapées)' },

  // right column
  results: {
    // lines
    lines: { tw: '句數', en: 'Lines', fr: 'Lignes' },
    total: { tw: '全部', en: 'Total', fr: 'Total' },
    currentRemaining: { tw: '當前/剩餘', en: 'Current/remaining', fr: 'Actuelle/restantes' },
    // characters
    characters: { tw: '字數', en: 'Characters', fr: 'Caractères' },
    correctWrong: {
      tw: `<span style="color: green;">正確</span>/<span style="color: red;">錯誤</span>`,
      en: `<span style="color: green;">Correct</span>/<span style="color: red;">wrong</span>`,
      fr: `<span style="color: green;">Corrects</span>/<span style="color: red;">incorrects</span>`
    },
    accuracy: { tw: '正確率', en: 'Accuracy', fr: 'Précision' },
    remaining: { tw: '剩餘', en: 'Remaining', fr: 'Restants' },
    // speed
    speed: { tw: '速度（每分鐘字）', en: 'Speed (characters per minute)', fr: 'Vitesse (caractères par minute)' },
    time: { tw: '時間', en: 'Time', fr: 'Temps' },
    correct: { tw: '正確', en: 'Correct', fr: 'Correct' },
    typed: { tw: '已打', en: 'Typed', fr: 'Tapé' },
  },
  wrongCharactersCurrentLine: { tw: '當句行列錯字', en: 'Wrong characters with their Array codes (current line)', fr: 'Caractères incorrects avec leurs codes Tableau (ligne actuelle)' },
  supportThisWebsite: { tw: '支持本站', en: 'Support this website', fr: 'Soutenez ce site' },
  buyMeACake: {
    tw: `如果您覺得本網站對您很有幫助，可以<a href="https://www.buymeacoffee.com/misterfishup" target="_blank" title='♫ 請我吃蛋糕 ♫'>給 FISH UP 買個蛋糕</a>來支持他！（臺灣的朋友請使用<a href="https://p.ecpay.com.tw/868A37D" target="_blank" title="支持 FISH UP 行列查碼去！">此連結</a>。）`,
    en: `If you enjoy this website, you can support FISH UP by <a href="https://www.buymeacoffee.com/misterfishup" target="_blank" title='♫ Buy me a cake ♫'>buying him a cake</a> 🍰! (If you're from Taiwan, use <a href="https://p.ecpay.com.tw/868A37D" target="_blank" title="Support FISH UP Dictionary of Array!">this link</a> instead.)`,
    fr: `Si vous aimez ce site, vous pouvez <a href="https://www.buymeacoffee.com/misterfishup" target="_blank" title='♫ Achetez-moi un gâteau ♫'>soutenir FISH UP en lui achetant un gâteau</a> 🍰 ! (Si vous êtes de Taïwan, utilisez plutôt <a href="https://p.ecpay.com.tw/868A37D" target="_blank" title="Soutenez Dictionnaire FISH UP de Tableau !">ce lien</a>.)`
  }
};
