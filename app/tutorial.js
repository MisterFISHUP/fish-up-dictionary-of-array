const stringPageName = document.getElementById('app').dataset.pageName;
const AppContent = {
  title: {
    tw: '行列輸入法快速入門',
    en: 'Introduction to the Array method',
    fr: 'Initiation rapide à la méthode Tableau'
  },
  author: {
    tw: `<a href="https://www.linkedin.com/in/shang-chun-yu/" target="_blank">FISH UP</a> 撰`,
    en: `By <a href="https://www.linkedin.com/in/shang-chun-yu/" target="_blank">FISH UP</a>`,
    fr: `Par <a href="https://www.linkedin.com/in/shang-chun-yu/" target="_blank">FISH UP</a>`
  },
  description: {
    tw: '嗨！想認識行列輸入法對吧？本文將透過介紹行列輸入法的基本 5 件事，讓您了解行列輸入法的核心觀念以及運作原理，不僅僅能夠快速入門行列輸入法，也簡練地展現了行列輸入法的全貌。不用 10 分鐘就可以讀完！',
    en: "Hi! Want to know how the Array input method works? Here are five fundamental things you need to know about the Array Input Method. They provide a quick overview of Array, and you'll learn all its core concepts from scratch in less than 10 minutes: it takes less than 10 minutes to read!",
    fr: "Envie de savoir comment fonctionne la méthode de saisie Tableau ? Voici les cinq choses fondamentales que vous devez savoir sur Tableau. Elles vous donnent un bref aperçu de Tableau et vous permettent d'en acquérir toutes les connaissances de base en moins de 10 minutes : la lecture prend moins de 10 minutes !"
  },
  alreadyRead: {
    tw: `我閱讀過快速入門了，<a href="tutorial-complete.html">點此直接去完整教學頁面</a>。`,
    en: `I've already read this introduction. <a href="tutorial-complete.html">Click here to read the complete guide</a>.`,
    fr: `J'ai déjà lu cette initiation rapide. <a href="tutorial-complete.html">Cliquez ici pour aller au guide complet</a>.`
  },
  contents: { tw: '目錄', en: 'Contents', fr: 'Sommaire' },
  codeType: {
    specialCode: { tw: '特別碼', en: 'Special code', fr: 'Code spécial' },
    shortCode: { tw: '簡碼', en: 'Short code', fr: 'Code court' },
    shortCodeI: { tw: '一級簡碼', en: 'Short code I', fr: 'Code court I' },
    shortCodeII: { tw: '二級簡碼', en: 'Short code II', fr: 'Code court II' },
  },
  arrayKey: {
    title: { tw: '行列 30 鍵', en: 'The thirty Array keys', fr: 'Les trente touches Tableau' },
    lookAtKeyboard: {
      tw: `注意到鍵盤英文字母區塊上面有一排數字鍵，從左至右分別是 1 到 9 以及 0 ，一共十顆數字鍵。每顆數字鍵下方有三顆鍵，例如數字鍵 <span class="keycap keycap-number">5</span> 下方的三顆鍵是 <span class="keycap keycap-letter">t</span>、<span class="keycap keycap-letter">g</span>、<span class="keycap keycap-letter">b</span>，行列輸入法分別稱之為「5 上」、「5 中」以及「5 下」，並記做 <span class="keycap keycap-letter">5↑</span>、<span class="keycap keycap-letter">5-</span>、<span class="keycap keycap-letter">5↓</span>。`,
      en: `Notice that the number row on the keyboard contains from left to right ten number keys 1, 2,... 9, and 0, and below each number key there are three keys. For example the three keys below the key <span class="keycap keycap-number">5</span> are <span class="keycap keycap-letter">t</span>, <span class="keycap keycap-letter">g</span> and <span class="keycap keycap-letter">b</span>. The Array method calls them respectively 5 top, 5 middle and 5 bottom, and denotes them by <span class="keycap keycap-letter">5↑</span>, <span class="keycap keycap-letter">5-</span> and <span class="keycap keycap-letter">5↓</span>.`,
      fr: `En haut du pavé principal du clavier se trouve la rangée des chiffres, qui contient de gauche à droite dix touches de chiffre 1, 2,... 9, et 0, et au-dessous de chaque touche de chiffre se trouve trois touches. Par exemple, les trois touches au-dessous de la touche <span class="keycap keycap-number">5</span> sont <span class="keycap keycap-letter">t</span>, <span class="keycap keycap-letter">g</span> et <span class="keycap keycap-letter">b</span>. La méthode Tableau les appelle respectivement 5 haut, 5 milieu et 5 bas, et les désigne par <span class="keycap keycap-letter">5↑</span>, <span class="keycap keycap-letter">5-</span> et <span class="keycap keycap-letter">5↓</span>.`
    },
    name: {
      tw: `我們將十顆數字鍵下方的這 30 顆鍵稱作<b>行列 30 鍵</b>。每顆鍵依照 10 個數字（行）以及「上、中、下」（列）來定位，這就是<b>行列輸入法</b>或<b>行列 30</b> 這兩個名稱的由來。行列輸入法用這些以「行、列」定位的按鍵來輸入文字，這就是為什麼行列輸入法不用像英打或多數中文輸入法需要記鍵位。`,
      en: `These thirty keys below the ten number keys are called <b>the thirty Array keys</b>. They correspond to the 'columns' 1, 2, ..., 0 in the top, middle, bottom 'rows', hence the name <b>Array</b> or <b>Array 30</b>. In Array, we use these Array keys to enter Chinese characters, which is why, unlike most other Chinese input methods or the English keyboard, we don't need to memorise the position of the keys (the keyboard layout).
      `,
      fr: `Ces trente touches au-dessous des dix touches de chiffre sont appelées <b>les trente touches Tableau</b>. Elles correspondent aux positions 1, 2,...9, et 0 (colonnes) et « haut, milieu, bas » (lignes), d'où le nom <b>Tableau</b> ou <b>Tableau 30</b>. En Tableau, nous utilisons ces touches Tableau pour entrer les caractères chinois. C'est pourquoi nous n'avons pas besoin de mémoriser la position des touches, contrairement à la plupart des méthodes de saisie chinoises ou le clavier français dont vous devez connaître la position des touches par cœur.`
    },
    example: {
      tw: `例如中文字「繼」的行列編碼為 2 下 <span class="radical-plus">+</span> 2 下 <span class="radical-plus">+</span> 2 下 <span class="radical-plus">+</span> 2 中，您不必記任何鍵位也不用看鍵盤就可以輸入這四個鍵！`,
      en: `For example, the code of the character '繼' is 2 bottom <span class="radical-plus">+</span> 2 bottom <span class="radical-plus">+</span> 2 bottom <span class="radical-plus">+</span> 2 middle. You can enter it very easily without looking at the keyboard and without the need to memorise the position of the keys.`,
      fr: `Par exemple, le code du caractère « 繼 » est 2 bas <span class="radical-plus">+</span> 2 bas <span class="radical-plus">+</span> 2 bas <span class="radical-plus">+</span> 2 milieu, vous pouvez le saisir très facilement sans regarder le clavier et sans avoir besoin de mémoriser la position des touches.`
    },
    comPlusSign: {
      tw: `註：本站在描述輸入字符的按鍵或編碼時使用的加號「+」，表示依序輸入，並不是要同時按按鍵。`,
      en: `Note: The plus sign '+' used between keys or between radicals to show how to enter a character or symbol in Array means that they should be entered consecutively and not simultaneously.`,
      fr: `NB : Le signe « + » utilisé entre des touches (ou entre des radicaux) pour montrer comment saisir un caractère ou symbole en Tableau signifie qu'elles doivent être saisies l'une après l'autre et non simultanément.`
    },
    typingHabit: {
      tw: `使用行列輸入法應該從一開始就養成正確的按鍵方式來鍵入行列 30 鍵，也就是要有正確的「按鍵指法」並且打字不看鍵盤。`,
      en: `When learning Array, it's important to develop correct typing habits right from the start, including 'having the correct finger placement on the Keyboard' and 'typing without looking at the keyboard'.`,
      fr: `Lorsque vous apprenez Tableau, il est important de prendre de bonnes habitudes de frappe dès le départ, notamment « bien placer les doigts sur le clavier » et « taper sans regarder le clavier ».`
    },
    startPosition: {
      title: { tw: '準備狀態', en: 'Start position', fr: 'Position de repos' },
      fingerStartPosition: {
        tw: `左手的小指、無名指、中指以及食指，應該依序輕放在行列 30 鍵 <span class="keycap keycap-letter">1-</span>、<span class="keycap keycap-letter">2-</span>、<span class="keycap keycap-letter">3-</span>、<span class="keycap keycap-letter">4-</span> 上，也就是英文鍵 <span class="keycap keycap-letter">a</span>、<span class="keycap keycap-letter">s</span>、<span class="keycap keycap-letter">d</span>、<span class="keycap keycap-letter">f</span>；而右手的食指、中指、無名指以及小指，應該依序輕放在行列 30 鍵 <span class="keycap keycap-letter">7-</span>、<span class="keycap keycap-letter">8-</span>、<span class="keycap keycap-letter">9-</span>、<span class="keycap keycap-letter">0-</span> 上，也就是英文鍵 <span class="keycap keycap-letter">j</span>、<span class="keycap keycap-letter">k</span>、<span class="keycap keycap-letter">l</span>、<span class="keycap keycap-letter">;</span>。雙手的拇指則是輕放在 <span class="keycap keycap-space">Space</span> 空白鍵上。`,
        en: `Place the little, ring, middle and index fingers of the left hand on the Array keys <span class="keycap keycap-letter">1-</span>, <span class="keycap keycap-letter">2-</span>,  <span class="keycap keycap-letter">3-</span>, <span class="keycap keycap-letter">4-</span> respectively, i.e. the English keys <span class="keycap keycap-letter">a</span>, <span class="keycap keycap-letter">s</span>, <span class="keycap keycap-letter">d</span>, <span class="keycap keycap-letter">f</span>; and the index, middle, ring and little fingers of the right hand on the Array keys <span class="keycap keycap-letter">7-</span>, <span class="keycap keycap-letter">8-</span>, <span class="keycap keycap-letter">9-</span>, <span class="keycap keycap-letter">0-</span> respectively, i.e. the English keys <span class="keycap keycap-letter">j</span>, <span class="keycap keycap-letter">k</span>, <span class="keycap keycap-letter">l</span>, <span class="keycap keycap-letter">;</span>. Place the thumbs of both hands on the space bar <span class="keycap keycap-space">Space</span>.`,
        fr: `Placez le petit doigt, l'annulaire, le majeur et l'index de la main gauche sur les touches Tableau <span class="keycap keycap-letter">1-</span>, <span class="keycap keycap-letter">2-</span>,  <span class="keycap keycap-letter">3-</span>, <span class="keycap keycap-letter">4-</span> respectivement, c'est-à-dire les touches françaises <span class="keycap keycap-letter">q</span>, <span class="keycap keycap-letter">s</span>, <span class="keycap keycap-letter">d</span>, <span class="keycap keycap-letter">f</span>; et l'index, le majeur, l'annulaire et l'auriculaire de la main droite sur les touches Tableau <span class="keycap keycap-letter">7-</span>, <span class="keycap keycap-letter">8-</span>, <span class="keycap keycap-letter">9-</span>, <span class="keycap keycap-letter">0-</span> respectivement, c'est-à-dire les touches françaises <span class="keycap keycap-letter">j</span>, <span class="keycap keycap-letter">k</span>, <span class="keycap keycap-letter">l</span>, <span class="keycap keycap-letter">m</span>. Placez les pouces des deux mains sur la barre d'espace <span class="keycap keycap-space">Space</span>.`
      },
      bumpFJ: {
        tw: `註：此時雙手「食指」所在的按鍵上，也就是 <span class="keycap keycap-letter">4-</span> 和 <span class="keycap keycap-letter">7-</span>，會有突起以方便觸摸定位。此兩鍵是行列 30 鍵中唯二有突起的按鍵。`,
        en: `Note: The two keys under the two index fingers in start position, i.e. <span class="keycap keycap-letter">4-</span> and <span class="keycap keycap-letter">7-</span>, each contain a bump that allows you to place and replace your fingers on the keyboard without looking at it. These two keys are the only two keys that have a bump among the 30 Array keys.`,
        fr: `NB : Sur les touches situées sous les deux index en position de repos, c'est-à-dire <span class="keycap keycap-letter">4-</span> et <span class="keycap keycap-letter">7-</span>, il y a un repère en relief qui permet de placer et de replacer les doigts sur le clavier sans le regarder. Ces deux touches sont d'ailleurs les seules deux touches qui disposent du repère en relief parmi les 30 touches Tableau.`
      }
    },
    comma: { tw: '、', en: ', ', fr: ', ' },
    andTheNumberKey: { tw: '以及數字鍵', en: 'and the number key', fr: 'et la touche de chiffre' },
    whileTyping: {
      title: { tw: '打字時', en: 'While typing', fr: 'Lors de la saisie' },
      leftLittle: {
        tw: '這四顆鍵由左手小指掌管',
        en: 'these four keys are controlled by the left little finger;', fr: 'ces quatre touches sont contrôlées par le petit doigt gauche;'
      },
      leftRing: {
        tw: '這四顆鍵由左手無名指掌管',
        en: 'these four keys are controlled by the left ring finger;',
        fr: "ces quatre touches sont contrôlées par l'annulaire gauche;"
      },
      leftMiddle: {
        tw: '這四顆鍵由左手中指掌管',
        en: 'these four keys are controlled by the left middle finger;',
        fr: "ces quatre touches sont contrôlées par le majeur gauche;"
      },
      leftIndex: {
        tw: '這四顆鍵由左手食指掌管',
        en: 'these four keys are controlled by the left index finger;',
        fr: "ces quatre touches sont contrôlées par l'index gauche;"
      },
      rightIndex: {
        tw: '這四顆鍵由右手食指掌管',
        en: 'these four keys are controlled by the right index finger;',
        fr: "ces quatre touches sont contrôlées par l'index droit;"
      },
      rightMiddle: {
        tw: '這四顆鍵由右手中指掌管',
        en: 'these four keys are controlled by the right middle finger;',
        fr: "ces quatre touches sont contrôlées par le majeur droit;"
      },
      rightRing: {
        tw: '這四顆鍵由右手無名指掌管',
        en: 'these four keys are controlled by the right ring finger;',
        fr: "ces quatre touches sont contrôlées par l'annulaire droit;"
      },
      rightLittle: {
        tw: '這四顆鍵由右手小指掌管',
        en: 'these four keys are controlled by the right little finger;',
        fr: 'ces quatre touches sont contrôlées par le petit doigt droit;'
      },
      leftRightThumb: {
        tw: '由左手拇指或是右手拇指掌管',
        en: 'is controlled by the left thumb or the right thumb.',
        fr: 'est contrôlée par le pouce gauche ou le pouce droit.'
      },
    },
    thatsAll: {
      tw: '以上就是行列 30 鍵的所有說明。',
      en: "That's all you need to know about Array keys.",
      fr: "Voilà, c'est tout ce que vous devez savoir sur les touches Tableau."
    }
  },
  charactersAndSymbols: {
    title: { tw: '字與符號', en: 'Characters and symbols', fr: 'Caractères et symboles' },
    description: {
      tw: `第二件基礎但重要的事情是，行列輸入法除了能夠輸入中文字外，還能輸入超過四百多個符號，其中包括了所有全形標點符號。`,
      en: `The second fundamental but important thing is that in addition to Chinese characters, you can easily enter more than four hundred symbols using the Array method, including all full-width punctuation marks such as ，。？！、『』.`,
      fr: `La deuxième chose fondamentale mais importante est qu'en plus des caractères chinois, la méthode Tableau permet également de saisir plus de quatre cents symboles, y compris tous les signes de ponctuation de pleine chasse (de pleine largeur) comme ，。？、！『』.`,
    },
    accessSymbolList: {
      tw: `先按 <span class="keycap keycap-letter">2↑</span> （也就是英文鍵 <span class="keycap keycap-letter">w</span>），再按任意一顆數字鍵便會進入符號選單（不同的數字鍵對應到不同類型的選單）。進入符號選單後可以按空白鍵到下一頁，或是按方向鍵切換上一頁/下一頁，看到想要的符號以數字鍵選擇完成輸入。`,
      en: `Press <span class="keycap keycap-letter">2↑</span> first (i.e. the English key <span class="keycap keycap-letter">w</span>), then press any number key to access the symbol list (different number keys correspond to lists of different types of symbols). Within the symbol list, you can turn to the next page by pressing the space bar, or switch to the previous/next page by pressing the arrow keys. To enter the symbol, press the corresponding number key.`,
      fr: `Appuyez d'abord sur <span class="keycap keycap-letter">2↑</span> (c'est-à-dire la touche anglaise <span class="keycap keycap-letter">w</span> ou la touche français <span class="keycap keycap-letter">z</span>), puis appuyez sur une touche de chiffre quelconque pour accéder à la liste de symboles (différentes touches de chiffre correspondent à des listes de différents types de symboles). Une fois dans la liste de symboles, vous pouvez appuyer sur la barre d'espace pour passer à la page suivante, ou sur les touches fléchées pour passer à la page précédente/suivante. Vous pouvez entrer le symbole souhaité en appuyant sur la touche de chiffre correspondante`,
    },
    symbolListExample: {
      tw: `例如：<br>
      先按 <span class="keycap keycap-letter">2↑</span> 再按 <span class="keycap keycap-number">2</span> 進入括號符號選單，例如有（ ） 「 」等等符號可選<br>
      先按 <span class="keycap keycap-letter">2↑</span> 再按 <span class="keycap keycap-number">4</span> 進入數學符號選單，例如有÷ ≠ ∞ ≒等等符號可選<br>
      先按 <span class="keycap keycap-letter">2↑</span> 再按 <span class="keycap keycap-number">8</span> 進入順序符號選單，例如有③ ⑶ ⅲ Ⅲ等等符號可選<br>
      先按 <span class="keycap keycap-letter">2↑</span> 再按 <span class="keycap keycap-number">0</span> 進入注音符號選單，例如有ㄅ ˙ ˊ ˇ等等符號可選`,
      en: `For example:<br>
      press <span class="keycap keycap-letter">2↑</span> first, then press the number key <span class="keycap keycap-number">2</span> to access the list of bracket symbols, which contains symbols such as ） 「 」<br>
      press <span class="keycap keycap-letter">2↑</span> first, then press the number key <span class="keycap keycap-number">4</span> to access the list of mathematical symbols, which contains symbols such as ÷ ≠ ∞ ≒<br>
      press <span class="keycap keycap-letter">2↑</span> first, then press the number key <span class="keycap keycap-number">8</span> to access the list of numeral symbols, which contains symbols such as ③ ⑶ ⅲ Ⅲ<br>
      press <span class="keycap keycap-letter">2↑</span> first, then press the number key <span class="keycap keycap-number">0</span> to access the list of Bopomofo symbols, which contains symbols such as ㄅ ㄞ ˙ ˊ ˇ`,
      fr: `Par exemple :<br>
      appuyez d'abord sur <span class="keycap keycap-letter">2↑</span> puis appuyez sur la touche de chiffre <span class="keycap keycap-number">2</span> pour accéder à la liste de symboles de parenthèse, qui contient des symboles comme（ ） 「 」<br>
      appuyez d'abord sur <span class="keycap keycap-letter">2↑</span> puis appuyez sur la touche de chiffre <span class="keycap keycap-number">4</span> pour accéder à la liste de symboles mathématiques, qui contient des symboles comme ÷ ≠ ∞ ≒<br>
      appuyez d'abord sur <span class="keycap keycap-letter">2↑</span> puis appuyez sur la touche de chiffre <span class="keycap keycap-number">8</span> pour accéder à la liste de symboles numériques, qui contient des symboles comme ③ ⑶ ⅲ Ⅲ<br>
      appuyez d'abord sur <span class="keycap keycap-letter">2↑</span> puis appuyez sur la touche de chiffre <span class="keycap keycap-number">0</span> pour accéder à la liste des symboles Bopomofo, qui contient des symboles comme ㄅ ㄞ ˙ ˊ ˇ`,
    },
    comEmoji: {
      tw: `註：有些版本的行列甚至可以輸入 emoji 😄👋 以及顏文字 (^_-)-☆，例如適用於 Windows 的<a href="download.html#new-Array" target="_blank">新行列 30</a>。`,
      en: `Note: For some distributions of Array, you can even enter emojis 😄👋 and emoticons (^_-)-☆. <a href="download.html#new-Array" target="_blank">New Array 30</a> (on Windows) for example.`,
      fr: `NB : Certaines distributions de Tableau vous permettent même de saisir des emoji 😄👋 et des émoticônes (^_-)-☆. <a href="download.html#new-Array" target="_blank">Nouveau Tableau 30</a> (sous Windows) par exemple.`,
    },
  },
  fssAndStuff: {
    title: { tw: '基本筆形、字根、字根碼、鍵位', en: 'Fundamental stroke-shapes, radicals, radical codes, radical keys', fr: 'Formes-traits fondamentales, radicaux, codes de radical, touches de radical' },
    description: {
      tw: `此部分要帶您了解行列輸入法的四個核心名詞，它們分別是基本筆形、字根、字根碼以及鍵位。這四個元素相當重要，同時也簡單易懂，幾乎不太有需要死記的事！`,
      en: `This section will introduce you to four key terms of the Array input method: fundamental stroke-shape, radical, radical code, and radical key. These four concepts are all very important and very simple to understand, and there is practically nothing to learn by heart!`,
      fr: `Dans cette section, vous allez apprendre quatre termes principaux de la méthode Tableau, à savoir la forme-trait fondamental, le radical, le code de radical et la touche de radical. Ces quatre concepts sont tous très importants et très simples à comprendre, et il n'y a quasiment rien à apprendre par cœur !`,
    },
    fss: {
      title: { tw: '基本筆形', en: 'Fundamental stroke-shapes', fr: 'Formes-traits fondamentales' },
      description1: {
        tw: `行列輸入法建立在 <u>10 個基本筆形</u>上，每一個基本筆形對應到一個數字。`,
        en: `The Array input method is based on 10 stroke-shapes, called <u>the 10 fundamental stroke-shapes</a>, each of which corresponds to a digit.`,
        fr: `La méthode de saisie Tableau est basée sur 10 formes-traits, appelées <a>les 10 formes-traits fondamentales</a>, dont chacune correspond à un chiffre.`
      },
      description2: {
        tw: `而所謂的筆形是由一或多個完整的筆劃構成的「形狀」。`,
        en: `A stroke-shape is a shape, which consists of one or several whole strokes.`,
        fr: `Une forme-trait est une forme, qui est constituée d'un ou de plusieurs traits entiers.`
      },
      example: {
        tw: `舉例來說，有一個基本筆形叫逆彎：㇗，此基本筆形對應的數字是 2，可以用「寫數字 2 時最後面就是一個逆彎（逆時針的彎曲）」來理解；當然，也有另一個基本筆形叫順彎：㇕，此基本筆形對應的數字是 5，可以用「寫數字 5 時最後面就是一個順彎（順時針的彎曲）」來理解。又例如有一個基本筆形叫撇：㇒，此基本筆形對應的數字是 9，可以用「寫數字 9 時最後面就像是一撇」來理解。`,
        en: `For example, '㇗: anticlockwise turning stroke' is a fundamental stroke-shape, which corresponds to the digit 2. This can be remembered by the fact that the digit 2 ends with an anticlockwise turning stroke. Not surprisingly, there is also a fundamental stroke-shape called 'clockwise turning stroke: ㇕', which corresponds to the digit 5. This again can be remembered by the fact that the digit 5 ends with a clockwise turning stroke. Another example: '㇒: left-falling stroke' is a fundamental stroke-shape, which corresponds to the digit 9. This can be remembered by the fact that the digit 9 ends with a left-falling stroke.`,
        fr: `Par exemple, « ㇗ : trait brisé dans le sens anti-horaire » est une forme-trait fondamentale, qui correspond au chiffre 2. Vous pouvez retenir cela si vous pensez au chiffre 2 qui se termine par un trait courbé dans le sens inverse des aiguilles d'une montre. Il existe également une forme-trait fondamentale appelée « trait brisé dans le sens horaire : ㇕ », qui correspond au chiffre 5: vous penserez au chiffre 5 qui se termine par un trait courbé dans le sens des aiguilles d'une montre. Un autre exemple : « ㇒ : trait descendant vers la gauche » est une forme-trait fondamentale, qui correspond au chiffre 9, tout comme le chiffre 9 se termine par un trait descendant vers la gauche.`
      },
      comShape: {
        tw: `如同字面上的意思，基本筆「形」是一個形狀，不一定是單一一個筆畫！比如說有一個基本筆形叫正交：十，是橫豎兩線交叉的筆形。它對應的數字是 4，可以用「數字 4 裡面有一個正交」來理解。`,
        en: `As explained above, the stroke-'shape' is a shape, and is not necessarily just a stroke. For example, there is a fundamental stroke-shape called 'upright cross: 十', which is a shape consisting of a horizontal stroke and a vertical stroke, and this can be remembered by the fact that the shape 'upright cross' is contained in the digit 4.`,
        fr: `Comme expliqué plus haut, la <em>forme</em>-trait est une <em>forme</em>, et n'est pas forcément un trait seul. Par exemple, il y a une forme-trait dite « croix debout : 十 », dont le chiffre correspondant est le 4. Vous pouvez retenir cela si vous pensez au chiffre 4 qui contient une croix debout.`
      },
    },
    radical: {
      title: { tw: '字根', en: 'Radicals', fr: 'Radicaux' },
      description: {
        tw: '字根是組成中文字的各種零件，也就是說每個中文字可以拆解成一至數個字根。例如中文字「功」在行列輸入法中拆成「工、力」這兩個字根，中文字「架」拆成「力、口、木」這三個字根。',
        en: "A radical is a graphical component of a Chinese character, that is to say, every Chinese character is made up of one or more radicals. For example, the Chinese character '功' is decomposed into '工, 力' these two radicals in Array, and the character '架' is decomposed into '力, 口, 木' these three radicals.",
        fr: "Un radical est une composante graphique d'un caractère chinois. En d'autres termes, tout caractère chinois est composé d'un ou de plusieurs radicaux. Par exemple, le caractère chinois « 功 » se décompose en « 工, 力 » ces deux radicaux, et le caractère chinois « 架 » se décompose en « 力, 口, 木 » ces trois radicaux."
      },
      comNotBushou: {
        tw: `註：行列的字根不一定是中文的部首或偏旁，可能是單位更大或更小的零件，例如「長」這個字在行列輸入法中拆成「<img src="/img/array30-radical/11長.png" class="radical" alt="行列字根 11，「長」去掉最末三筆畫">、<img src="/img/array30-radical/28衣.png" class="radical" alt="行列字根 28，「衣」去掉前三筆畫">」這兩個字根、「鼎」拆成「目、<img src="/img/array30-radical/55鼎.png" class="radical" alt="行列字根 55，「鼎」去掉目">」這兩個字根，又或者「代」拆成「亻、一、<img src="/img/array30-radical/26弋.png" class="radical" alt="行列字根 26，「弋」去掉橫線">」這三個字根、「會」拆成「<img src="/img/array30-radical/81合.png" class="radical" alt="行列字根 81，「合」去掉口">、<img src="/img/array30-radical/08曾.png" class="radical" alt="行列字根 08，「曾」去掉最初兩筆畫再去掉日">、日」這三個字根。（只是舉例，您看過去即可，不用特別去記這些例子！）`,
        en: `Note: The radicals used in the Array method are not necessarily the Chinese radicals (or keys, Bùshǒu) in linguistics. The Array method uses its own set of radicals, and <u>the word 'radical' on this website always refers to these 'Array radicals'</u>. Many Array radicals are indeed Bùshǒu, such as 工, 力, 口, 木 and 言, 車, 金, 門, etc, but many Array radicals are different from Chinese Bùshǒu. For example, in Array, character '長' is decomposed into '<img src="/img/array30-radical/11長.png" class="radical" alt="行列字根 11，「長」去掉最末三筆畫">, <img src="/img/array30-radical/28衣.png" class="radical" alt="行列字根 28，「衣」去掉前三筆畫">' these two Array radicals, and character '鼎' is decomposed into '目, <img src="/img/array30-radical/55鼎.png" class="radical" alt="行列字根 55，「鼎」去掉目">' these two Array radicals. Other examples: character '代' is decomposed into '亻, 一, <img src="/img/array30-radical/26弋.png" class="radical" alt="行列字根 26，「弋」去掉橫線">' these three Array radicals, and character '會' into '<img src="/img/array30-radical/81合.png" class="radical" alt="行列字根 81，「合」去掉口">, <img src="/img/array30-radical/08曾.png" class="radical" alt="行列字根 08，「曾」去掉最初兩筆畫再去掉日">, 日' these three Array radicals. (These are just examples, just read over them, you don't need to memorise them!)`,
        fr: `NB : Les radicaux utilisés dans la méthode Tableau ne sont pas nécessairement les radicaux chinois (ou clés, Bùshǒu) en linguistique. La méthode Tableau utilise son propre ensemble de radicaux, et <u>le mot « radical » sur ce site fait toujours référence à ces « radicaux Tableau »</u>. 
        Beaucoup de radicaux Tableau sont en effet des Bùshǒu, comme 工, 力, 口, 木 et 言, 車, 金, 門, etc, mais beaucoup de radicaux Tableau sont aussi différents de Bùshǒu. Par exemple, en Tableau, le caractère « 長 » se décompose en « <img src="/img/array30-radical/11長.png" class="radical" alt="行列字根 11，「長」去掉最末三筆畫">, <img src="/img/array30-radical/28衣.png" class="radical" alt="行列字根 28，「衣」去掉前三筆畫"> » ces deux radicaux Tableau, le caractère « 鼎 » se décompose en « 目, <img src="/img/array30-radical/55鼎.png" class="radical" alt="行列字根 55，「鼎」去掉目"> » ces deux radicaux Tableau. Ou encore, le caractère « 代 » se décompose en « 亻, 一, <img src="/img/array30-radical/26弋.png" class="radical" alt="行列字根 26，「弋」去掉橫線"> » ces trois caractères Tableau, et le caractère « 會 » en « <img src="/img/array30-radical/81合.png" class="radical" alt="行列字根 81，「合」去掉口">, <img src="/img/array30-radical/08曾.png" class="radical" alt="行列字根 08，「曾」去掉最初兩筆畫再去掉日">, 日 » ces trois caractères Tableau. (Ce ne sont que des exemples, vous n'avez pas besoin de les apprendre par cœur !)`
      },
    },
    radicalCode: {
      title: { tw: '字根碼', en: 'Radical codes', fr: 'Codes de radical' },
      description1: {
        tw: `行列輸入法的每一個字根都會對應到一個字根碼，而絕大多數的情況這個對應遵循著<u>非常簡單</u>的規則。這個簡單的規則在<a href="tutorial-complete.html#radical" target="_blank">完整教學</a>就會說明，而上面剛解釋的基本筆形就是用在這個規則裡。`,
        en: `In Array, every radical has a code (called <em>radical code</em>), and in most cases this radical code follows a <u>very simple</u> rule, which involves the fundamental stroke-shapes just seen above. This simple rule will be explained in <a href="tutorial-complete.html#radical" target="_blank">the complete guide</a>.`,
        fr: `En Tableau, chaque radical possède un code (appelé code de radical) et dans la plupart des cas ce code de radical suit une règle <u>très simple</u>, qui utilise les formes-traits fondamentales que nous venons de voir ci-dessus. Cette règle simple sera expliquée dans <a href="tutorial-complete.html#radical" target="_blank">le guide complet</a>.`,
      },
      description2: {
        tw: `字根碼是一個二位數字（例如 <span class="radical-code">16</span>、<span class="radical-code">59</span>、<span class="radical-code">08</span>），或是一個數字加上連字號 - （例如 <span class="radical-code">2-</span>、<span class="radical-code">6-</span>、<span class="radical-code">0-</span> 等，此時字根碼讀做「2 單」、「6 單」「0 單」）。字根碼就只有上述這兩種型態。`,
        en: `A radical code must be one of the following two forms. It is either a 2-digit number (for example <span class="radical-code">16</span>, <span class="radical-code">59</span>, <span class="radical-code">08</span>, where the two digits should be read separately: 'one six', 'five nine', and 'zero eight'), or a digit followed by a hyphen (for example <span class="radical-code">2-</span>, <span class="radical-code">6-</span>, <span class="radical-code">0-</span>, which read respectively '2 alone', '6 alone', '0 alone').`,
        fr: `Un code de radical est composé soit de 2 chiffres (par exemple <span class="radical-code">16</span>, <span class="radical-code">59</span>, <span class="radical-code">08</span>, où les deux chiffres se lisent séparément : « un six », « cinq neuf », et « zéro huit »), soit d'un chiffre et d'un tiret (par exemple <span class="radical-code">2-</span>, <span class="radical-code">6-</span>, <span class="radical-code">0-</span>, qui se lisent respectivement « 2 seul », « 6 seul », et « 0 seul »). Seuls ces deux cas sont possibles.`,
      },
      radicalCodeExample: {
        tw: `這裡舉出幾個剛看過的字根為例，字根「工」的字根碼是 <span class="radical-code">11</span>、字根「力」的字根碼是 <span class="radical-code">59</span>、字根「口」的字根碼是 <span class="radical-code">0-</span>（讀做「0 單」）、字根「木」的字根碼是 <span class="radical-code">48</span>。這些只是舉例，您看過去即可，不用特別去記這些例子！`,
        en: `For example, the radical code of radical '工' is <span class="radical-code">11</span>, that of radical '力' is <span class="radical-code">59</span>, that of radical '口' is <span class="radical-code">0-</span> (which reads '0 alone') and that of radical '木' is <span class="radical-code">48</span>. These are just examples, you don't need to memorise them!`,
        fr: `Par exemple, le code de radical du radical « 工 » est <span class="radical-code">11</span>, celui du radical « 力 » est <span class="radical-code">59</span>, celui du radical « 口 » est <span class="radical-code">0-</span> (qui se lit « 0 seul ») et celui du radical « 木 » est <span class="radical-code">48</span>. Ce ne sont que des exemples, vous n'avez pas besoin de les apprendre par cœur !`,
      },
      comSESS: {
        tw: `註：也許您有注意到，字根「力」的字根碼 <span class="radical-code">59</span> 就是由字根的首筆形「㇆：順彎 5」和尾筆形「㇒：撇 9」給出的數字。沒錯，行列輸入法大部分字根的字根碼，就是由首筆形和尾筆形得出的，所以學習行列時，幾乎沒有需要死記的知識！`,
        en: `Note: Maybe you've noticed that the radical code <span class="radical-code">59</span> of radical '力' is exactly the 2-digit number given by the starting stroke-shape '㇕: clockwise turning stroke 5' and the ending stroke-shape '㇒: left-falling stroke 9' of the radical. You guessed it right, most of the Array radicals have their radical code given by the starting and ending stroke-shapes, and therefore there is almost nothing to learn by heart while learning the Array method!`,
        fr: `Note: Peut-être avez-vous remarqué que le code de radical <span class="radical-code">59</span> du radical « 力 » est exactement le nombre à deux chiffres donné par la forme-trait initiale « ㇕: trait brisé dans le sens horaire 5 » et la forme-trait finale « ㇒ : trait descendant vers la gauche 9 » du radical. Comme vous l’aurez deviné, oui, la plupart des radicaux Tableau ont leur code de radical donné par les formes-traits initiale et finale, et il n'y a donc presque rien à apprendre par cœur quand vous apprenez la méthode Tableau !`,
      },
    },
    radicalKey: {
      title: { tw: '鍵位', en: 'Radical keys', fr: 'Touches de radical' },
      description: {
        tw: `所謂的鍵位就是行列 30 鍵各鍵（的名稱），像是 <span class="keycap keycap-letter">7↑</span>（7 上）、<span class="keycap keycap-letter">3-</span>（3 中）、<span class="keycap keycap-letter">0↓</span>（0 下）。依照相當簡單的規則，行列輸入法的每一個字根碼都會對應到一個鍵位。例如「<span class="radical-code">59</span>」這個字根碼的鍵位是 5 下，「<span class="radical-code">0-</span>」這個字根碼的鍵位是 0 中。`,
        en: `Every Array radical corresponds to a 'radical key', which is just an Array key, like <span class="keycap keycap-letter">7↑</span> (7 top), <span class="keycap keycap-letter">3-</span> (3 middle), <span class="keycap keycap-letter">0↓</span> (0 bottom), etc.`,
        fr: `À chaque radical on associe une touche de radical, qui est juste une touche Tableau, comme <span class="keycap keycap-letter">7↑</span> (7 haut), <span class="keycap keycap-letter">3-</span> (3 milieu), <span class="keycap keycap-letter">0↓</span> (0 bas), etc.`
      },
      twoCases: {
        tw: `這個相當簡單的規則如下，依字根碼的型態分為兩種狀況。`,
        en: `This correspondence follows a very simple rule. There are two cases.`,
        fr: `Cette correspondance suit une règle très simple. Deux scénarios se présentent.`
      },
      twoDigits: {
        description: {
          tw: `<b>1. 字根碼是一個二位數字</b>：第一位數對應到行列 30 鍵的行，而第二位數依照「0, 1, 2, 3, 4：上&emsp;5：中&emsp;6, 7, 8, 9：下」對應行列 30 鍵的列。`,
          en: `<b>1. The radical code is a 2-digit number</b>: the first digit is the column position of the Array key, and the second digit gives the row position of the Array key according to the following rule: '0, 1, 2, 3, 4 = top; 5 = middle; 6, 7, 8, 9 = bottom'.`,
          fr: `<b>1. Le code de radical est composé de 2 chiffres</b> : le premier chiffre est la position de la colonne de la touche Tableau, et le second chiffre donne la position de la ligne de la touche Tableau selon la règle suivante : « 0, 1, 2, 3, 4 = haut ; 5 = milieu ; 6, 7, 8, 9 = bas ».`
        },
        examplePar1: {
          tw: `例如：<br>
          字根碼 <span class="radical-code">21</span> 對應到鍵位 <span class="keycap keycap-letter">2↑</span>（2 上）<br>
          字根碼 <span class="radical-code">25</span> 對應到鍵位 <span class="keycap keycap-letter">2-</span>（2 中）<br>
          字根碼 <span class="radical-code">29</span> 對應到鍵位 <span class="keycap keycap-letter">2↓</span>（2 下）`,
          en: `For example:<br>
          the radical code <span class="radical-code">21</span> corresponds to the key <span class="keycap keycap-letter">2↑</span> (2 top)<br>
          the radical code <span class="radical-code">25</span> corresponds to the key <span class="keycap keycap-letter">2-</span> (2 middle)<br>
          the radical code <span class="radical-code">29</span> corresponds to the key <span class="keycap keycap-letter">2↓</span> (2 bottom)`,
          fr: `Par exemple :<br>
          le code de radical <span class="radical-code">21</span> correspond à la touche <span class="keycap keycap-letter">2↑</span> (2 haut)<br>
          le code de radical <span class="radical-code">25</span> correspond à la touche <span class="keycap keycap-letter">2-</span> (2 milieu)<br>
          le code de radical <span class="radical-code">29</span> correspond à la touche <span class="keycap keycap-letter">2↓</span> (2 bas)`,
        },
        examplePar2: {
          tw: `字根碼 <span class="radical-code">60</span> 對應到鍵位 <span class="keycap keycap-letter">6↑</span>（6 上）<br>
          字根碼 <span class="radical-code">65</span> 對應到鍵位 <span class="keycap keycap-letter">6-</span>（6 中）<br>
          字根碼 <span class="radical-code">66</span> 對應到鍵位 <span class="keycap keycap-letter">6↓</span>（6 下）`,
          en: `the radical code <span class="radical-code">60</span> corresponds to the key <span class="keycap keycap-letter">6↑</span> (6 top)<br>
          the radical code <span class="radical-code">65</span> corresponds to the key <span class="keycap keycap-letter">6-</span> (6 middle)<br>
          the radical code <span class="radical-code">66</span> corresponds to the key <span class="keycap keycap-letter">6↓</span> (6 bottom)`,
          fr: `le code de radical <span class="radical-code">60</span> correspond à la touche <span class="keycap keycap-letter">6↑</span> (6 haut)<br>
          le code de radical <span class="radical-code">65</span> correspond à la touche <span class="keycap keycap-letter">6-</span> (6 milieu)<br>
          le code de radical <span class="radical-code">66</span> correspond à la touche <span class="keycap keycap-letter">6↓</span> (6 bas)`,
        },
        examplePar3: {
          tw: `字根碼 <span class="radical-code">01</span> 對應到鍵位 <span class="keycap keycap-letter">0↑</span>（0 上）<br>
          字根碼 <span class="radical-code">04</span> 對應到鍵位 <span class="keycap keycap-letter">0↑</span>（0 上）<br>
          字根碼 <span class="radical-code">06</span> 對應到鍵位 <span class="keycap keycap-letter">0↓</span>（0 下）`,
          en: `the radical code <span class="radical-code">01</span> corresponds to the key <span class="keycap keycap-letter">0↑</span> (0 top)<br>
          the radical code <span class="radical-code">04</span> corresponds to the key <span class="keycap keycap-letter">0↑</span> (0 top)<br>
          the radical code <span class="radical-code">06</span> corresponds to the key <span class="keycap keycap-letter">0↓</span> (0 bottom)`,
          fr: `le code de radical <span class="radical-code">01</span> correspond à la touche <span class="keycap keycap-letter">0↑</span> (0 haut)<br>
          le code de radical <span class="radical-code">04</span> correspond à la touche <span class="keycap keycap-letter">0↑</span> (0 milieu)<br>
          le code de radical <span class="radical-code">06</span> correspond à la touche <span class="keycap keycap-letter">0↓</span> (0 bas)`,
        },
        putItSimply: {
          tw: '簡單來說，字根碼第二位數等於 5 對應到「中」，而小於 5 和大於 5 則分別對應到「上」和「下」。',
          en: "", fr: ""
        },
      },
      digitAlone: {
        description: {
          tw: `<b>2. 字根碼是一個數字加上連字號</b>：數字對應到的行列 30 鍵的行，連字號對應到「上、中、下」的中。`,
          en: `<b>2. The radical code is a digit followed by a hyphen</b>: the digit is the column position of the Array key, and the hyphen means the row position of the Array key is 'middle'.`,
          fr: `<b>2. Le code de radical est composé d'un chiffre et d'un tiret</b> : le chiffre est la position de la colonne de la touche Tableau, et le tiret indique que la position de la ligne de la touche Tableau est « milieu ».`
        },
        examplePar1: {
          tw: `例如：<br>
          字根碼 <span class="radical-code">1-</span> 對應到鍵位 <span class="keycap keycap-letter">1-</span>（1 中）<br>
          字根碼 <span class="radical-code">5-</span> 對應到鍵位 <span class="keycap keycap-letter">5-</span>（5 中）<br>
          字根碼 <span class="radical-code">7-</span> 對應到鍵位 <span class="keycap keycap-letter">7-</span>（7 中）<br>
          字根碼 <span class="radical-code">0-</span> 對應到鍵位 <span class="keycap keycap-letter">0-</span>（0 中）`,
          en: `For example:<br>
          the radical code <span class="radical-code">1-</span> corresponds to the key <span class="keycap keycap-letter">1-</span> (1 middle)<br>
          the radical code <span class="radical-code">5-</span> corresponds to the key <span class="keycap keycap-letter">5-</span> (5 middle)<br>
          the radical code <span class="radical-code">7-</span> corresponds to the key <span class="keycap keycap-letter">7-</span> (7 middle)<br>
          the radical code <span class="radical-code">0-</span> corresponds to the key <span class="keycap keycap-letter">0-</span> (0 middle)`,
          fr: `Par exemple :<br>
          le code de radical <span class="radical-code">1-</span> correspond à la touche <span class="keycap keycap-letter">1-</span> (1 milieu)<br>
          le code de radical <span class="radical-code">5-</span> correspond à la touche <span class="keycap keycap-letter">5-</span> (5 milieu)<br>
          le code de radical <span class="radical-code">7-</span> correspond à la touche <span class="keycap keycap-letter">7-</span> (7 milieu)<br>
          le code de radical <span class="radical-code">0-</span> correspond à la touche <span class="keycap keycap-letter">0-</span> (0 milieu)`
        }
      },
      conclusion: {
        tw: '字根碼對應到鍵位的規則就這樣！相當簡單易懂！',
        en: "That's all for the 'radical code - radical key' correspondence! Very simple, isn't it?",
        fr: "C'est tout pour la correspondance « code de radical - touche de radical » ! Rien de compliqué !"
      }
    },
    conclusionPar1: {
      tw: `如果您將上述幾個知識結合在一起，就可以發現每個字根都可以對應到一個鍵位！例如字根「工」的字根碼是 <span class="radical-code">11</span>，對應到鍵位 <span class="keycap keycap-letter">1↑</span>，我們就會說字根「工」的鍵位是 <span class="keycap keycap-letter">1↑</span>（1 上）；字根「力」的字根碼是 <span class="radical-code">59</span>，對應到鍵位 <span class="keycap keycap-letter">5↓</span>，我們就會說字根「力」的鍵位是 <span class="keycap keycap-letter">5↓</span>（5 下）。`,
      en: `Now, if we put together what we’ve just learned, we can easily see every Array radical corresponds to an Array key. For example, the radical code of radical '工' is <span class="radical-code">11</span>, which corresponds to the Array key <span class="keycap keycap-letter">1↑</span>. We then say the radical key of radical '工' is <span class="keycap keycap-letter">1↑</span> (1 top); the radical code of radical '力' is <span class="radical-code">59</span>, which corresponds to the Array key <span class="keycap keycap-letter">5↓</span>. We then say the radical key of radical '力' is <span class="keycap keycap-letter">5↓</span> (5 bottom).`,
      fr: `Maintenant, si nous combinons les connaissances ci-dessus, nous pouvons facilement voir que chaque radical Tableau correspond à une touche Tableau. Par exemple, le code de radical du radical « 工 » est <span class="radical-code">11</span>, qui correspond à la touche Tableau <span class="keycap keycap-letter">1↑</span>. On dit alors que la touche de radical du radical « 工 » est <span class="keycap keycap-letter">1↑</span> (1 haut); le code de radical du radical « 力 » est <span class="radical-code">59</span>, qui correspond à la touche Tableau <span class="keycap keycap-letter">5↓</span>. On dit alors que la touche de radical du radical « 力 » est <span class="keycap keycap-letter">5↓</span> (5 bas).`
    },
    conclusionPar2: {
      tw: `又例如字根「口」的字根碼是 <span class="radical-code">0-</span>，所以鍵位是 <span class="keycap keycap-letter">0-</span>（0 中）；字根「木」的字根碼是 <span class="radical-code">48</span>，所以鍵位是 <span class="keycap keycap-letter">4↓</span>（4 下）。綜上所述，行列輸入法中，每一個字根都會對應到一顆行列 30 鍵（即每一個字根都會對應到一個鍵位）。`,
      en: `More examples: the radical code of radical '口' is <span class="radical-code">0-</span>, so its radical key is <span class="keycap keycap-letter">0-</span> (0 middle); the radical code of radical '木' is <span class="radical-code">48</span>, so its radical key is <span class="keycap keycap-letter">4↓</span> (4 bottom). In summary, every Array radical corresponds to a radical key (i.e., every Array radical is mapped to an Array key).`,
      fr: `D'autres exemples: le code de radical du radical « 口 » est <span class="radical-code">0-</span>, donc sa touche de radical est <span class="keycap keycap-letter">0-</span> (0 milieu); le code de radical du radical « 木 » est <span class="radical-code">48</span>, donc sa touche de radical est <span class="keycap keycap-letter">4↓</span> (4 bas). En résumé, chaque radical Tableau correspond à une touche de radical (c'est-à-dire que chaque radical Tableau correspond à une touche Tableau).`
    },
  },
  decompositionEncoding: {
    title: { tw: '拆字/拆碼/取碼', en: 'Decomposition, encoding', fr: 'Décomposition, encodage' },
    decomposition: {
      tw: '我們將一個字拆成一至數個字根，這個叫做「拆字」。例如將「功」這個字拆成「工、力」這兩個字根、「架」拆成「力、口、木」這三個字根等等。',
      en: "To enter a character, first decompose it into one or more Array radicals in stroke order. For example, the character '功' is decomposed into two Array radicals '工, 力', and the character '架' into three Array radicals '力, 木, 口'.",
      fr: "Pour saisir un caractère, on le décompose d'abord en un ou plusieurs radicaux Tableau selon l'ordre des traits. Par exemple, le caractère « 功 » se décompose en deux radicaux Tableau « 工, 力 », et le caractère « 架 » se décompose en trois radicaux Tableau « 力, 口, 木 »."
    },
    code: {
      tw: '但真正輸入時並不一定會使用到所有字根，可能只會取一部分字根來輸入。得到這些字根、或這些字根的字根碼、或是這些字根的鍵位，這個叫做「拆碼」或「取碼」。',
      en: "However, to enter the character, sometimes only some of the radicals obtained from the decomposition are used. Finding the radicals used for entering a character, or the codes of these radicals, or the keys of these radicals, is to find the 'code' of the character.",
      fr: "Cependant, les radicaux obtenus à partir de la décomposition ne sont pas forcément tous utilisés pour la saisie du caractère. Parfois, seule une partie de ces radicaux est utilisée. Trouver les radicaux utilisés pour la saisie d'un caractère, ou les codes de ces radicaux, ou les touches de ces radicaux, c'est de trouver le « code » du caractère."
    },
    inPractice: {
      tw: '實際溝通上，我們常混淆使用「拆字」、「拆碼」、「取碼」這三個詞彙。',
      en: "In practice, the terms 'decomposition' and 'code' (of a character) are used interchangeably. (The same goes for 'to decompose' or 'to encode' a character.)",
      fr: "En pratique, on confond souvent la « décomposition » et le « code » du caractère (et idem pour « décomposer » ou  « encoder » un caractère)."
    },
    comAtMostFour: {
      tw: '註：行列輸入法每個字最多只會取 4 個字根來輸入。',
      en: 'Note: To enter a character in Array, at most four radicals are used.',
      fr: 'NB : En Tableau, on utilise au maximum quatre radicaux pour saisir un caractère.'
    }
  },
  standardVsSpecialOrShortCode: {
    title: { tw: '普通編碼 vs. 特別碼、簡碼', en: 'Standard codes vs. Special or short codes', fr: 'Codes standard vs. Codes spéciaux ou courts' },
    description1: {
      tw: `將字拆成一至數個字根，並取其中最多 4 個字根來實際輸入，以這種原理得到字根碼或是鍵位，本站稱之為<u>普通編碼</u>。`,
      en: `The standard way to enter a character is to decompose it into one or more Array radicals, then use up to four of them to enter the character. The radicals obtained in this way, or their radical codes, or their radical keys, are called <u>the standard code</u> of the character.`,
      fr: `La façon standard d'entrer un caractère est de le décomposer en un ou plusieurs radicaux Tableau, puis d'utiliser jusqu'à quatre d'entre eux pour la saisie du caractère. Les radicaux obtenus de cette façon, ou leurs codes ou leurs touches de radical, sont appelés <u>le code standard</u> du caractère.`
    },
    description2: {
      tw: `然而對於常用的字或是符號，行列輸入法提供更簡短的編碼（更少的按鍵數）讓您可以更快速地輸入。分為兩大類：<u>特別碼</u>以及<u>簡碼</u>。`,
      en: `For some frequently used characters and symbols, the Array input method provides shorter codes (i.e. with fewer keystrokes) to speed up typing. There are two types of codes: <u>special codes</u> and <u>short codes</u>.`,
      fr: `Pour certains caractères et symboles fréquemment utilisés, la méthode de saisie Tableau fournit des codes plus courts (c'est-à-dire avec moins de frappes de touches) pour une saisie plus rapide. Il existe deux catégories : <u>codes spéciaux</u> et <u>codes courts</u>.`
    },
    standardCode: {
      tw: '至於普通編碼，它則是按一或多顆行列 30 鍵後，再按一下空白鍵。如果該編碼沒有重碼*，則輸入完成，否則會需要面對重碼的問題（解決方法很簡單，例如用數字鍵選字完成輸入）。',
      en: "As for the standard codes, a press on the space bar is needed after entering one or more Array keys. If the code is not a coincident code*, then the character is entered. Otherwise, you have to deal with the coincident code problem. (It can be easily solved: by pressing the number key corresponding to the character you want in the Array window for example.)",
      fr: "Quant aux codes standard, il faut appuyer sur la barre d'espace après avoir saisi une ou plusieurs touches Tableau. Si le code n'est pas un code coïncident*, alors la saisie est finie. Sinon, il faut traiter le problème du code coïncident. (Solution très simple, vous pouvez par exemple appuyer sur la touche de chiffre qui correspond au caractère désiré dans la fenêtre pour le saisir)."
    },
    coincident: {
      tw: '*一個編碼有重碼的意思是，它是不只一個字的普通編碼。',
      en: "*A code is said to be coincident if it's several characters' code.",
      fr: "*Un code est dit coïncident s'il est le code de plusieurs caractères."
    },
    descriptionSpecialCode: {
      tw: '：按完兩顆行列 30 鍵後按空白鍵完成輸入。',
      en: ': press two Array keys then press the space bar to complete the entry.',
      fr: " : appuyez sur deux touches Tableau puis sur la barre d'espace pour terminer la saisie."
    },
    descriptionShortCode: {
      tw: '：特色是最後透過按一顆數字鍵來完成輸入，且輸入全程不需要空白鍵。又分為一級簡碼和二級簡碼：',
      en: ": the main feature of the short codes is that you end the entry with a number key, and that you don't hit the space bar during the whole entry. The short codes fall into two categories, short codes I and short codes II :",
      fr: " : les codes courts se caractérisent par la présence d'une touche de chiffre à la fin de la saisie, et l'absence de la barre d'espace pendant la saisie. Nous distinguons les codes courts I et les codes courts II :"
    },
    descriptionShortCodeI: {
      tw: '：按完一顆行列 30 鍵後按一顆數字鍵完成輸入。',
      en: ': press one Array key then press a number key to complete the entry.',
      fr: " : appuyez sur une touche Tableau puis sur une touche de chiffre pour terminer la saisie."
    },
    descriptionShortCodeII: {
      tw: '：按完兩顆行列 30 鍵後按一顆數字鍵完成輸入。',
      en: ': press two Array keys then press a number key to complete the entry.',
      fr: " : appuyez sur deux touches Tableau puis sur une touche de chiffre pour terminer la saisie."
    },
  },
  thatsAll: {
    tw: '以上就是行列輸入法快速入門的所有內容。',
    en: "That's all for this introduction to Array!",
    fr: "Et voilà, c'est tout pour cette introduction à Tableau !"
  },
  afterThis: {
    typing: {
      tw: '您接著可以到本站的打字練習去玩玩看、實際體驗行列輸入法：雖然只看完上面的基本 5 件事，您還沒辦法自己用行列輸入法打字，但本站的打字練習幫您附上了行列拆碼 ❤️，您完全照著按就可以輸入，像是玩遊戲一樣！',
      en: "You can go to 'Typing practice' to see and experience the Array input method: although at this stage you don't really know how to type Chinese characters on your own with Array, you'll be fully guided by the Array code hints provided by this website - just type what is displayed in the hint - it's like a game 😍!",
      fr: `Vous pouvez vous rendre à « Exercices de saisie » pour voir et expérimenter la méthode de saisie Tableau : bien qu'à ce stade vous ne sachiez pas vraiment comment taper des caractères chinois par vous-même avec Tableau, vous serez entièrement guidé par les indices de code Tableau fournis par ce site - il suffit de taper ce qui est affiché dans l'indice - c'est comme un jeu 😍!`
    },
    downloadArray: {
      tw: `如果您還沒有行列輸入法，先到本站的<a href="download.html#array-IME" target="_blank">下載頁面</a>下載適合您系統的行列輸入法就可以了！`,
      en: `If you don't have Array on your device yet, you can go to <a href="download.html#array-IME" target="_blank">the download page</a> and download the one for your operating system!`,
      fr: `Si vous n'avez pas encore Tableau, vous pouvez aller à <a href="download.html#array-IME" target="_blank">Téléchargements</a> et le télécharger selon votre système d'exploitation !`
    },
    readCompleteGuide: {
      tw: '之後不要忘記繼續閱讀本站的「行列輸入法完整教學」呦！',
      en: "And don't forget to read the complete guide to Array!",
      fr: "Ensuite n'oubliez pas de lire le guide complet de Tableau !"
    },
    buttonTyping: { tw: '體驗行列打字', en: 'Typing with Array', fr: 'Saisir avec Tableau' },
    buttonCompleteGuide: { tw: '閱讀完整教學', en: 'Read the complete guide', fr: 'Lire le guide complet' },
  },
  img: {
    arrayKeyboardAlt: { tw: '行列鍵盤與行列 30 鍵', en: 'Array keyboard with the thirty Array keys', fr: 'Clavier Tableau avec les trente touches Tableau' }
  },
  shareThisPageOn: { tw: '分享頁面至：', en: 'Share this page on:', fr: 'Partagez cette page sur : ' },
};
