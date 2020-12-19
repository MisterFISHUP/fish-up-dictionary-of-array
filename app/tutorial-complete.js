const stringPageName = document.getElementById('app').dataset.pageName;
const AppContent = {
  title: { tw: '行列輸入法完整教學', en: 'The complete guide to Array', fr: 'Le guide complet de Tableau' },
  author: {
    tw: `<a href="https://www.linkedin.com/in/shang-chun-yu/" target="_blank">FISH UP</a> 撰`,
    en: `By <a href="https://www.linkedin.com/in/shang-chun-yu/" target="_blank">FISH UP</a>`,
    fr: `Par <a href="https://www.linkedin.com/in/shang-chun-yu/" target="_blank">FISH UP</a>`
  },
  description: {
    tw: `歡迎來到行列輸入法完整教學！如果您是第一次接觸到<a href="index.html#introduction" target="_blank">行列輸入法</a>，恭喜您，您非常幸運，同時遇見了最科學又最好學的字形輸入法，以及最完整且最深入淺出的行列教學。如果您使用行列沒多久，這個行列教學絕對能讓您更快速地往行列老手邁進。而如果您已經是行列老手了，也推薦您閱讀此教學，不但能讓您複習行列，說不定您也能在此教學中學到以前不認識的新知！`,
    en: `Welcome to the complete guide to the Array input method!<br>⚠️ This page is currently under construction ⚠️`, // to be completed
    fr: `Bienvenue dans le guide complet de la méthode de saisie Tableau !<br>⚠️ Cette page est encore en construction ⚠️` // to be completed
  },
  alreadyRead: {
    tw: `讀過甚至熟悉這份完整教學的內容了？您可以到本站提供的「<a href="tutorial-recap.html" target="_blank">複習與測驗</a>」複習基本筆形與字根的知識！`,
    en: ``,
    fr: ``
  },
  introduction: {
    title: { tw: '導言', en: 'Introduction', fr: 'Introduction' },
    par1: {
      tw: '這份行列輸入法完整教學，將讓您有系統地學到所有關於行列輸入法的知識。內容涵蓋完整，讓您不必再去別處尋找教學、或是擔心漏掉任何的知識，並且此教學特別設計成線性的，依照順序看就能輕鬆學會！',
      en: "",
      fr: "",
    },
    par2: {
      tw: `文末還附上了<a href="#best-way-to-learn-Array">行列輸入法最佳學法</a>，告訴您如何最有效率地成為行列輸入法達人，在練習行列輸入法的道路上給予您明確的方向前進。`,
      en: "",
      fr: "",
    },
    par3: {
      tw: '總閱讀時間以完全初學者來說大約是一個半小時至兩小時，內容深入淺出而且都有附上許多例子，非常容易閱讀！',
      en: "",
      fr: "",
    },
    com4: {
      tw: `註：請先看過本站的<a href="/tutorial.html" target="_blank">行列輸入法基本 5 件事</a>，再來閱讀此完整教學 😉`,
      en: `Note: `,
      fr: `NB : `,
    }
  },
  fss: {
    title: { tw: '基本筆形', en: 'Fundamental stroke-shapes', fr: 'Formes-traits fondamentales' },
    introduction: {
      tw: '行列輸入法有 10 個基本筆形，每一個筆形對應到一個數字。',
      en: "",
      fr: ""
    },
    fss1: {
      tw: `一（橫）&emsp;：此筆形就像中文字「一」，所以用數字 1 來代表。口訣是「橫 1」。`,
      en: ``,
      fr: ``
    },
    fss2: {
      tw: `㇗（逆彎）：此筆形就像數字 2 尾部逆彎的筆形，所以用數字 2 來代表。口訣是「逆彎 2」。`,
      en: ``,
      fr: ``
    },
    fss3: {
      tw: `丨（直）&emsp;：此筆形是由上向下的垂直筆形，用數字 3 來代表。口訣是「直 3」。`,
      en: ``,
      fr: ``
    },
    fss4: {
      tw: `十（正交）：此筆形就像數字 4 裡面出現的正交筆形，所以用數字 4 來代表。口訣是「正交 4」。`,
      en: ``,
      fr: ``
    },
    fss5: {
      tw: `㇕（順彎）：此筆形就像數字 5 尾部順彎的筆形，所以用數字 5 來代表。口訣是「順彎 5」。`,
      en: ``,
      fr: ``
    },
    fss6: {
      tw: `丶（點）&emsp;：中文字「六」的第一個筆畫就是基本筆形「丶（點）」，所以這個基本筆形用數字 6 來代表。口訣是「點 6」。`,
      en: ``,
      fr: ``
    },
    fss7: {
      tw: `ㄇ（蓋）&emsp;：此筆形就像數字 7 上面蓋子的筆形，所以用數字 7 來代表。口訣是「蓋 7」。`,
      en: ``,
      fr: ``
    },
    fss8a: {
      tw: `八（八）&emsp;：「八」這種由兩個不同方向筆畫構成的基本筆形，最典型的例子就是中文字「八」，所以用數字 8 來代表。`,
      en: ``,
      fr: ``
    },
    fss8b: {
      tw: `㇏（捺）&emsp;：中文字「八」的末筆就是基本筆形「㇏（捺）」，所以也用數字 8 來代表。口訣是「捺 8」。`,
      en: ``,
      fr: ``
    },
    fss9: {
      tw: `㇒（撇）&emsp;：中文字「九」的第一個筆畫就是基本筆形「㇒（撇）」，所以這個基本筆形用數字 9 來代表。口訣是「撇 9」。`,
      en: ``,
      fr: ``
    },
    fss0: {
      tw: `口（方框）：此筆形是一個封閉的筆形，就像是數字 0，所以用數字 0 來代表。口訣是「方框 0」。`,
      en: ``,
      fr: ``
    },
    twoThings: {
      tw: "如果您認真讀完上面基本筆形的說明，您會發現兩件事：",
      en: "",
      fr: ""
    },
    thing1: {
      tw: "第一，嚴格說起來行列輸入法的基本筆形有「11」個才對。「八」這種由兩個不同方向筆畫構成的基本筆形，和「㇏（捺）」當然是兩種不同的筆形，但是因為這兩個基本筆形都用數字 8 來代表，所以大家時常把它們看成一個叫做「八捺」的基本筆形（口訣「八捺 8」）。這就是為什麼說行列輸入法有 10 個基本筆形。",
      en: "",
      fr: ""
    },
    thing2: {
      tw: "第二，其實只有「丨（直）」這個基本筆形對應到數字 3 這件事情需要死記。其它的基本筆形和所對應到的數字，都可以用上面的說明來「理解」，甚至可以說不使用上述提供的口訣也能輕鬆記憶。不過有趣的是，在本教學特別點出「因為『直 3』沒有好記的方法所以『直 3』這個基本筆形需要特別用『直 3』這個口訣來記」之後，您大概也不會忘記「直 3」這個基本筆形了。",
      en: "",
      fr: ""
    },
    numberPointOfView: {
      tw: '這十個基本筆形，現在以數字的角度看會變得非常好記：',
      en: '',
      fr: ''
    },
    number1: {
      tw: "1 對應到基本筆形「一（橫）」，因為 1 的中文字就是這個筆形。口訣「橫 1」。",
      en: "",
      fr: ""
    },
    number2: {
      tw: "2 對應到基本筆形「㇗（逆彎）」，因為 2 的尾部就是這個筆形。口訣「逆彎 2」。",
      en: "",
      fr: ""
    },
    number3: {
      tw: "3 對應到基本筆形「丨（直）」，您必須特別記憶。口訣「直 3」。",
      en: "",
      fr: ""
    },
    number4: {
      tw: "4 對應到基本筆形「十（正交）」，因為 4 的裡面就是這個筆形。口訣「正交 4」。",
      en: "",
      fr: ""
    },
    number5: {
      tw: "5 對應到基本筆形「㇕（順彎）」，因為 5 的尾部就是這個筆形。口訣「順彎 5」。",
      en: "",
      fr: ""
    },
    number6: {
      tw: "6 對應到基本筆形「丶（點）」，因為 6 的中文字首筆就是這個筆形。口訣「點 6」。",
      en: "",
      fr: ""
    },
    number7: {
      tw: `7 對應到基本筆形「<span style="font-family: sans-serif;">ㄇ</span>（蓋）」，因為 7 的上面就是這個筆形。口訣「蓋 7」。`,
      en: "",
      fr: ""
    },
    number8: {
      tw: "8 對應到基本筆形「八㇏（八捺）」，因為 8 的中文整個字以及末筆就是這個筆形。口訣「八捺 8」。",
      en: "",
      fr: ""
    },
    number9: {
      tw: "9 對應到基本筆形「㇒（撇）」，因為 9 的尾端就是這個筆形。口訣「撇 9」。",
      en: "",
      fr: ""
    },
    number0: {
      tw: "0 對應到基本筆形「口（方框）」，因為 0 形狀像是這個筆形。口訣「方框 0」。",
      en: "",
      fr: ""
    },
    thatsAll: {
      tw: `以上就是基本筆形的所有說明，可以說是除了「直 3」需要死記，其它都可以透過理解來記憶！下一部分「字根」將要說明字根如何對應到字根碼，是本教學篇幅最長的部分。不過您完全不用擔心，就如同上方的基本筆形，<b>大部分的知識都可以透過理解而學會，很少有需要死記的內容！</b>`,
      en: ``,
      fr: ``
    }
  },
  radical: {
    title: { tw: '字根', en: 'Radicals', fr: 'Radicaux' },
    introduction: {
      tw: `行列輸入法有許多字根，而在<a href="tutorial.html#fundamental-stroke-shape-and-stuff" target="_blank">行列輸入法基本 5 件事</a>中您已經學過每個字根會對應到一個字根碼，以及字根碼是一個二位數字（例如 <span class="radical-code">16</span>、<span class="radical-code">59</span>、<span class="radical-code">08</span> 等），或是一個數字加上連字號 - （例如 <span class="radical-code">2-</span>、<span class="radical-code">6-</span>、<span class="radical-code">0-</span> 等，並且此時字根碼讀做「2 單」、「6 單」「0 單」）。這一部份您將學會字根的字根碼是怎麼來的。`,
      en: ``,
      fr: ``
    },
    threeCategories: {
      tw: `依照字根與字根碼的對應方式，行列輸入法的字根可以分為三類：<u><a href="#FSS-radical">基本筆形字根</a></u>、<u><a href="#SESS-radical">首尾筆形字根</a></u>以及<u><a href="#specially-mapped-radical">特別歸位字根</a></u>。以下將依序介紹這三類字根。`,
      en: ``,
      fr: ``
    },
    thatsAll: {
      tw: '字根的所有介紹就到這裡結束！下面我們會複習如何透過字根碼與鍵位的對應，找出任意一個字根的鍵位。',
      en: "",
      fr: ""
    }
  },
  fssRadical: {
    title: { tw: '基本筆形字根', en: '1st group (FSS)', fr: '1er groupe (FTF)' },
  },
  sessRadical: {
    title: { tw: '首尾筆形字根', en: '2nd group (SESS)', fr: '2e groupe (FTIF)' },
  },
  specialRadical: {
    title: { tw: '特別歸位字根', en: '3rd group (specially encoded)', fr: '3e groupe (spécialement encodé)' },
    description: {
      tw: '有些字根被稱做「特別歸位字根」，因為它們不是基礎筆形字根，並且字根碼並不是由首尾筆形得來。',
      en: "",
      fr: "",
    },
    scRadical: { tw: '（簡體字根）', en: " (only used in simplified Chinese)", fr: ' (utilisé uniquement en chinois simplifié)' },
    bushouVariant: {
      description: {
        tw: '有些字根是部首的偏旁型態，於是字根碼參照部首本字的字根碼。這類特別歸位字根全部共 4 個，其中包含 1 個簡體字根：',
        en: "",
        fr: "",
      },
      beforeRadical: { tw: '字根「', en: "Radical '", fr: 'Le radical « ' },
      beforeBushou: { tw: '」，為', en: "' is a variant of Bushou ", fr: ' » est une variante de la clé ' },
      beforeCode: { tw: '的偏旁形態，字根碼設為', en: ' and thus is encoded with the code', fr: ', il est donc encodé avec le code' },
    },
    similar: {
      description: {
        tw: "有些字根的字根碼參照形態近似的字根。這類特別歸位字根全部列出如下：",
        en: "",
        fr: "",
      },
      beforeRadical: { tw: '字根「', en: "Radical '", fr: 'Le radical « ' },
      beforeSimilarRadical: { tw: '」，因形似字根「', en: "' looks similar to radical '", fr: ' » ressemble au radical « ' },
      beforeCode: { tw: '」，字根碼設為', en: ' and thus is encoded with the code', fr: ' », il est donc encodé avec le code' },
      aroundTian: {
        tw: '」裡面會有東西，如字根「田」是外框裡面有東西，字根碼設為',
        en: `' ???????and thus is encoded with the code`,
        fr: ` » ?????, il est donc encodé avec le code`
      }
    },
  },
  radicalKey: {
    title: { tw: '字根的鍵位', en: 'Radical keys', fr: 'Touches de radical' },
    par1: {
      tw: `在<a href="tutorial.html#fundamental-stroke-shape-and-stuff">行列輸入法基本 5 件事</a>中您已經學到每一個字根碼都會對應到一個行列 30 鍵，並也學過了對應規則，所以這裡就不再贅述。但下面還是舉出了幾個例子，讓您自我檢測一下：如果您能理解這幾個例子，那就沒問題！如果您有點忘記規則了，可以點<a href="#fundamental-stroke-shape-and-stuff">這裡</a>回到前面複習😉。`,
      en: ``,
      fr: ``
    },
    par2: {
      tw: `上一部分我們學過了<a href="#FSS-radical">基本筆形字根</a>、<a href="#SESS-radical">首尾筆形字根</a>、<a href="#specially-mapped-radical">特別歸位字根</a>它們的字根碼，我們結合字根碼與鍵位的對應，就可以得到每個字根的鍵位。`,
      en: ``,
      fr: ``
    },
    par3: {
      tw: `這部分的教學就以下面一些例子做結尾，您一樣不必特意去背這些例子，而是「將它們看過留下印象」，以及「理解為什麼是這個字根碼、是這個鍵位」，這才是最重要的。`,
      en: ``,
      fr: ``
    },
    radicalCode: { tw: '字根碼', en: 'The radical code', fr: 'Le code de radical' },
    correspond: { tw: '對應到鍵位', en: 'corresponds to the Array key', fr: 'correspond à la touche Tableau' },
    top: { tw: '上', en: 'top', fr: 'haut' },
    middle: { tw: '中', en: 'middle', fr: 'milieu' },
    bottom: { tw: '下', en: 'bottom', fr: 'bas' },
    someFSSRadicals: { tw: '一些基本字形字根：', en: 'Some 1st group radicals (FSS radicals):', fr: 'Quelques radicaux du 1er groupe (radicaux FTF) :' },
    someSESSRadicals: { tw: '一些首尾筆形字根：', en: 'Some 2nd group radicals (SESS radicals):', fr: 'Quelques radicaux du 2e groupe (radicaux FTIF) :' },
    someSpeciallyEncodedRadicals: { tw: '一些特別歸位字根：', en: 'Some 3rd group radicals (specially encoded radicals):', fr: 'Quelques radicaux du 3e groupe (radicaux spécialement encodés) :' },
    beforeRadical: { tw: '「', en: "The radical code of radical '", fr: 'Le code de radical du radical « ' },
    beforeCode: { tw: '」的字根碼為', en: "' is", fr: ' » est' },
    beforeKey: { tw: '，鍵位是', en: ', which gives the radical key ', fr: ', ce qui donne la touche' },
    scRadical: { tw: '（簡體字根）', en: " (only used in simplified Chinese)", fr: ' (utilisé uniquement en chinois simplifié)' }
  },
  decompositionRules: {
    title: { tw: '拆字與取碼原則', en: 'Decomposition rules', fr: 'Règles de décomposition' },
    par1: {
      tw: `讀到這裡，恭喜您已經了解行列輸入法字根與鍵位的原理了！`,
      en: ``,
      fr: ``
    },
    par2: {
      tw: `現在您已經可以將許多字拆碼了。行列輸入法拆字取碼的大原則就是：<u>依照書寫筆順</u>拆字取碼。這就是為什麼說行列輸入法好學易懂，設計相當科學。`,
      en: ``,
      fr: ``
    },
    par3: {
      tw: `當然，只有「依照書寫筆順」這個規則是不夠的，它只是大原則。要正確拆字取碼，您必須認識 3 件事，它們分別是<u><a href="#first-three-and-last-principle">前三後一原則</a></u>、<u><a href="#big-radical-principle">大根先取原則</a></u>以及<u><a href="#discontiguous-radicals">跨越筆順的字根</a></u>。`,
      en: ``,
      fr: ``
    },
    par4: {
      tw: `這 3 件事情相當重要，同時也非常容易理解。不過，我們現在可以先來看一些簡單的拆字示範，那 3 件重要事後面會詳細為您解說。`,
      en: ``,
      fr: ``
    },
    par5: {
      tw: `是不是相當簡單？我們再看 10 個簡單的例子：`,
      en: ``,
      fr: ``
    },
    par6: {
      tw: `然而，中文字形形色色，構字不一定都像上述例子簡單。行列輸入法有<a href="#first-three-and-last-principle">前三後一原則</a>、<a href="#big-radical-principle">大根先取原則</a>以及<a href="#discontiguous-radicals">跨越筆順的字根</a>這三件事（而且也只有這三件事）來更詳細地規範拆字取碼過程，接下來為您一一解說。`,
      en: ``,
      fr: ``
    },
  },
  firstThreeLastOne: {
    title: { tw: '前三後一原則', en: "The first-three-last-one rule", fr: 'La règle du trois-premiers-et-le-dernier' },
  },
  bigRadical: {
    title: { tw: '大根先取原則', en: "The big radical rule", fr: 'La règle du grand radical' },
  },
  discontiguousRadicals: {
    title: { tw: '跨越筆順的字根', en: "The discontiguous radicals", fr: "Les radicaux disjoints" },
  },
  rareCharacter: {
    title: { tw: '罕用字以及簡體字', en: 'Rare characters/simplified Chinese characters', fr: 'Caractères rares et chinois simplifiés' },
    introduction: {
      tw: '上面我們已經學完了行列輸入法如何拆碼，而普通編碼便是透過拆碼而來的一至四個字根（的鍵位），但有三種狀況例外。',
      en: "",
      fr: ""
    },
    case1: {
      tw: '該字本身是字根或形似字根，但不常用到：這種字的普通編碼設定為該字根重複四次。',
      en: "",
      fr: ""
    },
    case2: {
      tw: `該字是罕用字，同時也是字根（或形似字根）：這種字的普通編碼設定為該字根重複四次後加上按鍵 <span class="keycap keycap-letter">8↑</span>（也就是英文鍵 <span class="keycap keycap-letter">i</span>）。`,
      en: ``,
      fr: ``
    },
    case3: {
      tw: `該字是罕用字，並且不是字根：這種字的普通編碼設定為原本透過拆碼而來的一至四個字根再加上按鍵 <span class="keycap keycap-letter">8↑</span>（也就是英文鍵 <span class="keycap keycap-letter">i</span>）。`,
      en: ``,
      fr: ``
    },
    simple: {
      tw: `簡單來說，罕用字的普通編碼會多加上「罕字鍵」  <span class="keycap keycap-letter">8↑</span>。而本身是字根（或形似字根）但不是常用的字，它的普通編碼是字根鍵連續按四次。（所以本身是字根（或形似字根）的罕用字，它的普通編碼是字根鍵連續按四次加上罕字鍵 <span class="keycap keycap-letter">8↑</span>。）`,
      en: ``,
      fr: ``
    },
    clickdetails: {
      tw: '回到上方列出的三種狀況。前兩種狀況的字數量不多，所以下方全部列出，但因為內容重要性不高，所以將內容隱藏起來。點擊黑色三角形或是文字描述就可以縮合內容。',
      en: ``,
      fr: ``
    },
    comDisplayPar1: {
      tw: `註：這一部份的教學涉及到罕用字，有些罕用字可能在您裝置上顯示不出來，主因是您裝置上的字體不支援該罕用字的顯示。由於這些罕用字對於本教學沒有重要性，我並沒有像行列字根一樣，為了確保教學品質將可能無法顯示的字元以圖片的方式呈現。<br>
      如果要正確顯示多數罕用字，您可以下載免費的字體「思源宋體 Noto Serif CJK」（<a href="https://www.google.com/get/noto/#serif-hant" target="_blank">點此前往下載頁</a>）；如果要正確顯示所有罕用字，您可以下載免費的字體「花園明朝體 HanaMinB」（<a href="https://zh-tw.osdn.net/projects/hanazono-font/releases/p12900">點此前往下載頁</a>）。`,
      en: `Note: `,
      fr: `NB :`
    },
    comDisplayPar2: {
      tw: `另外，顯示不出來的罕用字是確實存在的，只是沒有正確顯示出來，也就是說您依舊可以選取、複製它們，也可以在別處貼上（例如複製貼上到本站的<a href="dictionary.html" target="_blank">行列查碼</a>來查詢），即使整個過程您都沒看到該字被正確顯示出來。`,
      en: ``,
      fr: ``
    },
    details1: {
      summary: {
        tw: '這裡是所有「本身是字根或形似字根，但不常用到」的字。它們的普通編碼為該字根重複四次。',
        en: "",
        fr: ""
      },
      hiddenRadical: {
        tw: '（可以算是隱藏版字根…）',
        en: '',
        fr: ' ()'
      },
      par1: {
        tw: `注意到「㣺」字的普通編碼有兩種，<span class="keycap keycap-letter">3↓</span> 按四次或是 <span class="keycap keycap-letter">6↓</span> 按四次，以及「丿」字的普通編碼不是 <span class="keycap keycap-letter">3-</span> 按四次，而是 <span class="keycap keycap-letter">9-</span> 按四次。`,
        en: ``,
        fr: ``
      },
      com2: {
        tw: '註：有些字純粹只是正常拆碼得到的普通編碼是同一顆行列 30 鍵按四次：絫茻㵘㙓朤。',
        en: 'Note: ',
        fr: "NB : "
      }
    },
    details2: {
      summary: {
        tw: `這裡是所有「是罕用字，同時也是字根（或形似字根）」的字。它們的普通編碼為該字根重複四次後加上罕字鍵 <span class="keycap keycap-letter">8↑</span>。`,
        en: ``,
        fr: ``
      },
      hiddenRadical: {
        tw: '（可以算是隱藏版字根…）',
        en: '',
        fr: ' ()'
      },
      com1: {
        tw: `註：有些罕用字（見下一段要說明的第三點）純粹只是正常拆碼後得到的普通編碼是同一顆行列 30 鍵按四次加上罕字鍵 <span class="keycap keycap-letter">8↑</span>：㠭𠥓𣬅𨏿𬼖𠫬𦅍𩙡𬘁𠟞𨷾𭭴𡵅𡮐𣾜𠀎𣛧𣡕𣡽𥗉𥗐敠叕𢻚𢾪𢿺𤿵𤿵𧮦𢠋𠜌𥋬𨰻𠂹𠈌𠉭𡚆𦠪𨥄𬾀𥷹㸚𢼫𣊫𣊭𤳳𤴐𤴑𪉀𪱈𠾅。`,
        en: `Note: `,
        fr: 'NB : '
      }
    },
    importantThirdPoint: {
      tw: `前面的三種狀況中，比較重要的是第三點，也就是<u>是罕用字，並且不是字根</u>。這種字的普通編碼為「原本透過拆碼而來的一至四個字根再加上罕字鍵 <span class="keycap keycap-letter">8↑</span>」。`,
      en: ``,
      fr: ``
    },
    forExample: {
      tw: '舉例來說：',
      en: 'For example:',
      fr: 'Par exemple :',
    },
    ex1: {
      tw: `「㐈」這個字拆碼應當是「入 <span class="radical-code">8-</span> <span class="radical-plus">+</span> 乙 <span class="radical-code">2-</span>」，但是因為它是罕用字，它的普通編碼不是「入 <span class="radical-code">8-</span> <span class="radical-plus">+</span> 乙 <span class="radical-code">2-</span>」而是「入 <span class="radical-code">8-</span> <span class="radical-plus">+</span> 乙 <span class="radical-code">2-</span> <span class="radical-plus">+</span> <span class="keycap keycap-letter">8↑</span>」。`,
      en: ``,
      fr: ``
    },
    ex2: {
      tw: `「琹」這個字拆碼應當是「一 <span class="radical-code">1-</span> <span class="radical-plus">+</span> 土 <span class="radical-code">41</span> <span class="radical-plus">+</span> 一 <span class="radical-code">1-</span> <span class="radical-plus">+</span> 木 <span class="radical-code">48</span>」，但是因為它是罕用字，它的普通編碼不是「一 <span class="radical-code">1-</span> <span class="radical-plus">+</span> 土 <span class="radical-code">41</span> <span class="radical-plus">+</span> 一 <span class="radical-code">1-</span> <span class="radical-plus">+</span> 木 <span class="radical-code">48</span>」而是「一 <span class="radical-code">1-</span> <span class="radical-plus">+</span> 土 <span class="radical-code">41</span> <span class="radical-plus">+</span> 一 <span class="radical-code">1-</span> <span class="radical-plus">+</span> 木 <span class="radical-code">48</span> <span class="radical-plus">+</span> <span class="keycap keycap-letter">8↑</span>」。。`,
      en: ``,
      fr: ``
    },
    ex3: {
      tw: `「㠭」這個字拆碼應當是「工 <span class="radical-code">11</span> <span class="radical-plus">+</span> 工 <span class="radical-code">11</span> <span class="radical-plus">+</span> 工 <span class="radical-code">11</span> <span class="radical-plus">+</span> 工 <span class="radical-code">11</span>」，但是因為它是罕用字，它的普通編碼不是「工 <span class="radical-code">11</span> <span class="radical-plus">+</span> 工 <span class="radical-code">11</span> <span class="radical-plus">+</span> 工 <span class="radical-code">11</span> <span class="radical-plus">+</span> 工 <span class="radical-code">11</span>」而是「工 <span class="radical-code">11</span> <span class="radical-plus">+</span> 工 <span class="radical-code">11</span> <span class="radical-plus">+</span> 工 <span class="radical-code">11</span> <span class="radical-plus">+</span> 工 <span class="radical-code">11</span> <span class="radical-plus">+</span> <span class="keycap keycap-letter">8↑</span>」。`,
      en: ``,
      fr: ``
    },
    howToKnow: {
      tw: `至於怎樣判斷一個本身不是字根的字「是不是罕用字」呢？其實沒有什麼特別的方法，靠直覺！您如果覺得是罕用字，就加按 <span class="keycap keycap-letter">8↑</span> = <span class="keycap keycap-letter">i</span>，最後如果發現找不到字，那就代表它不是罕用字；反之，您如果覺得不是罕用字，那就不用額外加按 <span class="keycap keycap-letter">8↑</span>，最後如果發現找不到字，那就代表它是罕用字。`,
      en: ``,
      fr: ``
    },
    moreExamples: {
      tw: '下面再舉幾個例子：',
      en: 'Here are some other examples: ',
      fr: 'Voici quelques autres exemples :'
    },
    moreEx1: {
      tw: `「峯」這個字拆碼應當是「<span class="radical-special">山</span> <span class="radical-code">3-</span> <span class="radical-plus">+</span> <span class="radical-special">夂</span> <span class="radical-code">98</span> <span class="radical-plus">+</span> <img src="/img/array30-radical/4-丰簡.png" class="radical" alt="行列字根 4-，「峰」去掉山再去掉夂"> <span class="radical-code">4-</span>」，但是因為它是罕用字，它的普通編碼不是「<span class="radical-special">山</span> <span class="radical-code">3-</span> <span class="radical-plus">+</span> <span class="radical-special">夂</span> <span class="radical-code">98</span> <span class="radical-plus">+</span> <img src="/img/array30-radical/4-丰簡.png" class="radical" alt="行列字根 4-，「峰」去掉山再去掉夂"> <span class="radical-code">4-</span>」而是「<span class="radical-special">山</span> <span class="radical-code">3-</span> <span class="radical-plus">+</span> <span class="radical-special">夂</span> <span class="radical-code">98</span> <span class="radical-plus">+</span> <img src="/img/array30-radical/4-丰簡.png" class="radical" alt="行列字根 4-，「峰」去掉山再去掉夂"> <span class="radical-code">4-</span> <span class="radical-plus">+</span> <span class="keycap keycap-letter">8↑</span>」。`,
      en: ``,
      fr: ``
    },
    moreEx2: {
      tw: `「䝗」這個字拆碼應當是「豸 <span class="radical-code">99</span> <span class="radical-plus">+</span> 木 <span class="radical-code">48</span>」，但是因為它是罕用字，它的普通編碼不是「豸 <span class="radical-code">99</span> <span class="radical-plus">+</span> 木 <span class="radical-code">48</span>」而是「豸 <span class="radical-code">99</span> <span class="radical-plus">+</span> 木 <span class="radical-code">48</span> <span class="radical-plus">+</span> <span class="keycap keycap-letter">8↑</span>」。`,
      en: ``,
      fr: ``
    },
    moreEx3: {
      tw: `「马」這個字拆碼應當是「<img src="/img/array30-radical/55马.png" class="radical radical-sc" alt="行列字根 55，「马」去掉四點"> <span class="radical-code">55</span> <span class="radical-plus">+</span> 一 <span class="radical-code">1-</span>」，但是因為它是罕用字，它的普通編碼不是「<img src="/img/array30-radical/55马.png" class="radical radical-sc" alt="行列字根 55，「马」去掉四點"> <span class="radical-code">55</span> <span class="radical-plus">+</span> 一 <span class="radical-code">1-</span>」而是「<img src="/img/array30-radical/55马.png" class="radical radical-sc" alt="行列字根 55，「马」去掉四點"> <span class="radical-code">55</span> <span class="radical-plus">+</span> 一 <span class="radical-code">1-</span> <span class="radical-plus">+</span> <span class="keycap keycap-letter">8↑</span>」。`,
      en: ``,
      fr: ``
    },
    thatsAll: {
      tw: `以上就是罕用字的全部教學。另外，行列輸入法的拆碼完全適用於簡體字，也就是說將簡體字拆碼就跟將繁體字拆碼的方法一樣。更廣義地來說，任何<a href="https://zh.wikipedia.org/wiki/%E4%B8%AD%E6%97%A5%E9%9F%93%E7%B5%B1%E4%B8%80%E8%A1%A8%E6%84%8F%E6%96%87%E5%AD%97" target="_blank">統一漢字</a>的拆碼方式都一樣，不論是來自繁體中文、簡體中文、日文、韓文、越南文、壯文、琉球文等。只是<u>在繁體中文中不常用的字，在行列輸入法中很有可能被歸為罕用字</u>，這就是為什麼許多簡體字或日文漢字可能在簡體中文或日文中相當常用，但在行列輸入法內被歸到罕用字，使得普通編碼要加上罕字鍵 <span class="keycap keycap-letter">8↑</span>。另外，現在有不少版本的行列有<a href="#traditional-simplified-chinese-conversion">繁轉簡</a>的功能。`,
      en: ``,
      fr: ``
    },
    finalCom: {
      par1: {
        tw: `註：嚴格說起來，拆碼後得到的普通編碼需不需要再加上罕字鍵 <span class="keycap keycap-letter">8↑</span> = <span class="keycap keycap-letter">i</span>，不單單只取決於該字是否為罕用字：有些罕用字拆碼後得到的普通編碼，因為重碼數量少（意思是幾乎沒什麼其它字的編碼跟這個編碼一樣），所以不加上罕字鍵。這種狀況主要發生在一些簡體字的普通編碼上。`,
        en: `Note:`,
        fr: `NB : `
      },
      par2: {
        tw: `例如，簡體字「画」、「对」、「讲」的普通編碼分別是「一 <span class="radical-code">1-</span> <span class="radical-plus">+</span> 田 <span class="radical-code">04</span> <span class="radical-plus">+</span> <span class="radical-special">凵</span> <span class="radical-code">3-</span>」、「又 <span class="radical-code">58</span> <span class="radical-plus">+</span> <img src="/img/array30-radical/4-子.png" class="radical" alt="行列字根 4-，「子」末兩筆畫"> <span class="radical-code">4-</span> <span class="radical-plus">+</span> 丶 <span class="radical-code">6-</span>」、「<span class="radical-sc">讠</span> <span class="radical-code">62</span> <span class="radical-plus">+</span> <img src="/img/array30-radical/4-奉.png" class="radical" alt="行列字根 4-，「奉」末三筆畫"> <span class="radical-code">4-</span> <span class="radical-plus">+</span> 丨 <span class="radical-code">3-</span>」，都沒有罕字鍵 <span class="keycap keycap-letter">8↑</span>。`,
        en: ``,
        fr: ``
      },
      par3: {
        tw: `簡體字「长」的正確筆順是先寫「㇒ <span class="radical-code">9-</span>」、再寫「<img src="/img/array30-radical/12长.png" class="radical radical-sc" alt="行列字根 12，「长」去掉兩斜線"> <span class="radical-code">12</span>」，有些人則可能順序相反。正確筆順會得到拆碼「㇒ <span class="radical-code">9-</span> <span class="radical-plus">+</span> <img src="/img/array30-radical/12长.png" class="radical radical-sc" alt="行列字根 12，「长」去掉兩斜線"> <span class="radical-code">12</span> <span class="radical-plus">+</span> ㇏ <span class="radical-code">8-</span>」、而另一種筆順會得到拆碼「<img src="/img/array30-radical/12长.png" class="radical radical-sc" alt="行列字根 12，「长」去掉兩斜線"> <span class="radical-code">12</span> <span class="radical-plus">+</span> <img src="/img/array30-radical/8-承.png" class="radical" alt="行列字根 8-，「承」最末兩筆畫"> <span class="radical-code">8-</span>」（或是「<img src="/img/array30-radical/12长.png" class="radical radical-sc" alt="行列字根 12，「长」去掉兩斜線"> <span class="radical-code">12</span> <span class="radical-plus">+</span> ㇒ <span class="radical-code">9-</span> <span class="radical-plus">+</span> ㇏ <span class="radical-code">8-</span>」，不過這不符合<a href="#big-radical-principle">大根先取原則</a>）。行列輸入法設定是第一種和第三種拆碼不加罕字鍵，也就是普通編碼為「㇒ <span class="radical-code">9-</span> <span class="radical-plus">+</span> <img src="/img/array30-radical/12长.png" class="radical radical-sc" alt="行列字根 12，「长」去掉兩斜線"> <span class="radical-code">12</span> <span class="radical-plus">+</span> ㇏ <span class="radical-code">8-</span>」、「<img src="/img/array30-radical/12长.png" class="radical radical-sc" alt="行列字根 12，「长」去掉兩斜線"> <span class="radical-code">12</span> <span class="radical-plus">+</span> ㇒ <span class="radical-code">9-</span> <span class="radical-plus">+</span> ㇏ <span class="radical-code">8-</span>」，但是第二種拆碼要加罕字鍵，也就是普通編碼為「<img src="/img/array30-radical/12长.png" class="radical radical-sc" alt="行列字根 12，「长」去掉兩斜線"> <span class="radical-code">12</span> <span class="radical-plus">+</span> <img src="/img/array30-radical/8-承.png" class="radical" alt="行列字根 8-，「承」最末兩筆畫"> <span class="radical-code">8-</span> <span class="radical-plus">+</span> <span class="keycap keycap-letter">8↑</span>」。因為行列輸入法的容錯設計（本教學後面會說明什麼是容錯），以上三種普通編碼都可以輸入「长」字。`,
        en: ``,
        fr: ``
      },
      par4: {
        tw: `又例如簡體字「这」因為算是罕用字，所以普通編碼是「亠 <span class="radical-code">61</span> <span class="radical-plus">+</span> 乂 <span class="radical-code">98</span> <span class="radical-plus">+</span> 辶 <span class="radical-code">68</span> <span class="radical-plus">+</span> <span class="keycap keycap-letter">8↑</span>」。不過行列輸入法也有為「这」加了一個沒有罕字鍵的普通編碼「亠 <span class="radical-code">61</span> <span class="radical-plus">+</span> 乂 <span class="radical-code">98</span> <span class="radical-plus">+</span> 辶 <span class="radical-code">68</span>」。以上兩種普通編碼都可以輸入「这」字。`,
        en: ``,
        fr: ``
      },
    }
  },
  enteringStandardCodes: {
    title: { tw: '輸入', en: 'Entering standard codes', fr: 'Saisir les codes standard' },
    introduction: {
      tw: `這一部份主要要介紹普通編碼的輸入，至於<a href="#short-code">簡碼</a>、<a href="#special-code">特別碼</a>以及<a href="#symbol">符號</a>的輸入，在後面相對應的單元會說明。`,
      en: ``,
      fr: ``
    },
    description: {
      tw: `普通編碼是拆字、取碼後，判斷是否為不常用字根或是否為罕用字後，得到的一或多顆要依序輸入的行列 30 鍵。在輸入這些鍵位之後，<u>要再按一下空白鍵</u>。<u>如果該編碼沒有重碼，則輸入完成，否則會需要面對重碼的問題。</u>有重碼的意思就是該編碼同時是兩個字以上的普通編碼，下一部份會詳細介紹。`,
      en: ``,
      fr: ``
    },
    examples: {
      par1: {
        tw: `例如「奻」字的普通編碼是「女 <span class="radical-code">21</span> <span class="radical-plus">+</span> 女 <span class="radical-code">21</span>」，依序鍵入 <span class="keycap keycap-letter">2↑</span>、<span class="keycap keycap-letter">2↑</span> 後，還要再按一下空白鍵 <span class="keycap keycap-space">Space</span>。此時因為編碼 <span class="keycap keycap-letter">2↑</span> <span class="radical-plus">+</span> <span class="keycap keycap-letter">2↑</span> 沒有重碼所以「奻」字輸入完成。`,
        en: ``,
        fr: ``
      },
      par2: {
        tw: `「元」字的普通編碼是「一 <span class="radical-code">1-</span> <span class="radical-plus">+</span> 一 <span class="radical-code">1-</span> <span class="radical-plus">+</span> 儿 <span class="radical-code">2-</span>」。依序鍵入 <span class="keycap keycap-letter">1-</span>、<span class="keycap keycap-letter">1-</span>、<span class="keycap keycap-letter">2-</span> 後，還要再按一下空白鍵 <span class="keycap keycap-space">Space</span>。此時因為編碼 <span class="keycap keycap-letter">1-</span> <span class="radical-plus">+</span> <span class="keycap keycap-letter">1-</span> <span class="radical-plus">+</span> <span class="keycap keycap-letter">2-</span> 沒有重碼所以「元」字輸入完成。`,
        en: ``,
        fr: ``
      },
      par3: {
        tw: `「气」字的普通編碼是「气 <span class="radical-code">92</span> <span class="radical-plus">+</span> 气 <span class="radical-code">92</span> <span class="radical-plus">+</span> 气 <span class="radical-code">92</span> <span class="radical-plus">+</span> 气 <span class="radical-code">92</span>」。依序鍵入 <span class="keycap keycap-letter">9↑</span>、<span class="keycap keycap-letter">9↑</span>、<span class="keycap keycap-letter">9↑</span>、<span class="keycap keycap-letter">9↑</span> 後，還要再按一下空白鍵 <span class="keycap keycap-space">Space</span>。此時因為編碼 <span class="keycap keycap-letter">9↑</span> <span class="radical-plus">+</span> <span class="keycap keycap-letter">9↑</span> <span class="radical-plus">+</span> <span class="keycap keycap-letter">9↑</span> <span class="radical-plus">+</span> <span class="keycap keycap-letter">9↑</span> 沒有重碼所以「气」字輸入完成。`,
        en: ``,
        fr: ``
      },
      par4: {
        tw: `「艹」字的普通編碼是「艹 <span class="radical-code">4-</span> <span class="radical-plus">+</span> 艹 <span class="radical-code">4-</span> <span class="radical-plus">+</span> 艹 <span class="radical-code">4-</span> <span class="radical-plus">+</span> 艹 <span class="radical-code">4-</span> <span class="radical-plus">+</span> <span class="keycap keycap-letter">8↑</span>」。依序鍵入 <span class="keycap keycap-letter">4-</span>、<span class="keycap keycap-letter">4-</span>、<span class="keycap keycap-letter">4-</span>、<span class="keycap keycap-letter">4-</span>、<span class="keycap keycap-letter">8↑</span> 後，還要再按一下空白鍵 <span class="keycap keycap-space">Space</span>。此時因為編碼 <span class="keycap keycap-letter">4-</span> <span class="radical-plus">+</span> <span class="keycap keycap-letter">4-</span> <span class="radical-plus">+</span> <span class="keycap keycap-letter">4-</span> <span class="radical-plus">+</span> <span class="keycap keycap-letter">4-</span> <span class="radical-plus">+</span> <span class="keycap keycap-letter">8↑</span> 沒有重碼所以「艹」字輸入完成。`,
        en: ``,
        fr: ``
      },
      par5: {
        tw: `簡體字「发」的普通編碼是「<img src="/img/array30-radical/29發.png" class="radical radical-sc" alt="行列字根 29，「发」前兩筆畫"> <span class="radical-code">29</span> <span class="radical-plus">+</span> 又 <span class="radical-code">58</span> <span class="radical-plus">+</span> 丶 <span class="radical-code">6-</span> <span class="radical-plus">+</span> <span class="keycap keycap-letter">8↑</span>」。依序鍵入 <span class="keycap keycap-letter">2↓</span>、<span class="keycap keycap-letter">5↓</span>、<span class="keycap keycap-letter">6-</span>、<span class="keycap keycap-letter">8↑</span> 後，還要再按一下空白鍵 <span class="keycap keycap-space">Space</span>。此時因為編碼 <span class="keycap keycap-letter">2↓</span> <span class="radical-plus">+</span> <span class="keycap keycap-letter">5↓</span> <span class="radical-plus">+</span> <span class="keycap keycap-letter">6-</span> <span class="radical-plus">+</span> <span class="keycap keycap-letter">8↑</span> 沒有重碼所以「发」字輸入完成。`,
        en: ``,
        fr: ``
      },
    },
    preview: {
      tw: `不過在鍵入一或多顆行列 30 鍵的過程中（還沒有按空白鍵），您只要在行列視窗看到了您想輸入的字，就可以直接用數字鍵選擇完成輸入。這是行列輸入法的「<a href="#preview">預視</a>」功能，本教學尾聲會再說明一次。預視功能唯一例外是，按 <span class="keycap keycap-letter">2↑</span> 後，行列視窗會顯示「女」字，但如果接著按數字鍵 <span class="keycap keycap-number">1</span> 想要選擇「女」，反而會進入標點符號列表而沒有輸入「女」。這是因為鍵位 <span class="keycap keycap-letter">2↑</span> 保留給符號輸入了。輸入「女」字的正確方法為按 <span class="keycap keycap-letter">2↑</span> 後，再按空白鍵完成輸入。`,
      en: ``,
      fr: ``
    }
  },
  coincidentCode: {
    title: { tw: '重碼', en: 'Coincident codes', fr: 'Codes coïncidents' },
    par1: {
      tw: '如果一個普通編碼有重碼，那麼在鍵入一或數顆行列 30 鍵並按下空白鍵後，輸入不會完成，但行列視窗上會顯示出重碼字列表。看到想要的字以數字鍵選擇完成輸入。（如果重碼字超過 10 個，可以使用空白鍵翻至選單下一頁，或使用方向鍵翻至選單上/下一頁。然後一樣，看到想要的字以數字鍵選擇完成輸入。）',
      en: "",
      fr: ""
    },
    par2: {
      tw: '不過如果想要的字重碼位是 1，有額外兩種不使用數字鍵的方法完成輸入。在鍵入一或數顆行列 30 鍵並按下空白鍵後，若輸入沒有完成，此時您可以：',
      en: "",
      fr: ""
    },
    methodLI1: {
      tw: "按下空白鍵，原本那個重碼位1的字會自動完成輸入。此方法僅限於重碼數量不超過 10 個的情況，否則按下空白鍵是將重碼字選單翻到下一頁。",
      en: "",
      fr: ""
    },
    methodLI2: {
      tw: "直接開始打下一個字（按下的鍵必須是行列 30 鍵），原本那個重碼位 1 的字會自動完成輸入。此方法不管重碼數量超不超過 10 都適用。",
      en: "",
      fr: ""
    },
    com1: {
      tw: `註：當普通編碼只有一顆行列 30 鍵，並且此普通編碼沒有重碼，本站稱之為<u>單鍵碼</u>，也就是說按一顆行列 30 鍵後再按一下空白鍵即可完成輸入。包括以下八字：一十方竹乙木女風。另外，<u>由於中文字「的」太常用，行列輸入法也為它編了一個單鍵碼</u>：鍵入 <span class="keycap keycap-letter">5↑</span> 後再按一下空白鍵即可輸入「的」。所以行列輸入法中一共有 9 個字有單鍵碼。`,
      en: `Note:`,
      fr: `NB : `
    }
  },
  errorTolerance: {
    title: { tw: '容錯', en: 'Error tolerance', fr: "Tolérance d'erreur" },
    introduction1: {
      tw: '有些字因為每個人書寫筆順、寫法不完全相同，導致了不同的拆碼。有些字則是因為寫錯、或是因為不熟悉行列字根與拆字取碼原則，而產生了不同的拆碼。將這類拆碼納入行列輸入法，就叫做「容錯」。',
      en: "",
      fr: ""
    },
    introduction2: {
      tw: '行列輸入法有良好的容錯設計，讓您在打字的過程更輕鬆、順暢。下面就來舉一些行列的容錯設計。',
      en: "",
      fr: ""
    },
    strokeOrder: {
      title: { tw: '筆順上的容錯', en: '', fr: "" },
      par1: {
        tw: `「九」字有人先寫撇，有人則是後寫撇。這兩種筆順分別會得到「㇒ <span class="radical-code">9-</span> <span class="radical-plus">+</span> ⺄ <span class="radical-code">2-</span>」以及「⺄ <span class="radical-code">2-</span> <span class="radical-plus">+</span> ㇒ <span class="radical-code">9-</span>」。行列的容錯設計讓這兩種編碼都可以輸入「九」字。`,
        en: ``,
        fr: ``,
      },
      par2: {
        tw: `「樂」字應該先寫「白」，但有些人習慣先寫「ㄠ」，這兩種寫法分別會得到「㇒ <span class="radical-code">9-</span> <span class="radical-plus">+</span> 日 <span class="radical-code">01</span> <span class="radical-plus">+</span> ㄠ <span class="radical-code">26</span> <span class="radical-plus">+</span> 木 <span class="radical-code">48</span>」以及「 ㄠ <span class="radical-code">26</span> <span class="radical-plus">+</span> ㇒ <span class="radical-code">9-</span> <span class="radical-plus">+</span> 日 <span class="radical-code">01</span> <span class="radical-plus">+ </span>木 <span class="radical-code">48</span>」。行列的容錯設計讓這兩種編碼都可以輸入「樂」字。`,
        en: ``,
        fr: ``,
      },
      par3: {
        tw: `簡體字「义」字有人先寫點「丶」，有人則是後寫。這兩種筆順分別會得到「乂 <span class="radical-code">98</span> <span class="radical-plus">+</span> 丶 <span class="radical-code">6-</span> <span class="radical-plus">+</span> <span class="keycap keycap-letter">8↑</span>」以及「丶 <span class="radical-code">6-</span> <span class="radical-plus">+</span> 乂 <span class="radical-code">98</span> <span class="radical-plus">+</span> <span class="keycap keycap-letter">8↑</span>」。行列的容錯設計讓這兩種編碼都可以輸入「义」字。`,
        en: ``,
        fr: ``,
      },
    },
    orthography: {
      title: { tw: '寫法上的容錯', en: '', fr: "" },
      par1: {
        tw: `「免」字的正確寫法會給出拆碼「⺈ <span class="radical-code">7-</span> <span class="radical-plus">+</span> 口 <span class="radical-code">0-</span> <span class="radical-plus">+</span> <img src="/img/array30-radical/2-冘.png" class="radical" alt="行列字根 2-，「冘」去掉冖"> <span class="radical-code">2-</span>」，但如果有人寫法是「⺈ <span class="radical-code">7-</span> <span class="radical-plus">+</span> <img src="/img/array30-radical/03串.png" class="radical" alt="行列字根 03，「罒」但中間只有一條豎線"> <span class="radical-code">03</span> <span class="radical-plus">+</span> 儿 <span class="radical-code">2-</span>」，因為行列輸入法的容錯設計，這個編碼還是能可以輸入「免」字。當然，「兔」也是相同道理。`,
        en: ``,
        fr: ``,
      },
      par2: {
        tw: `「巤」字中間方框的內部是「ㄨ」，所以正確拆碼為「<img src="/img/array30-radical/22巛.png" class="radical" alt="行列字根 22，「巛」"> <span class="radical-code">22</span> <span class="radical-plus">+</span> <span class="radical-special">囗</span> <span class="radical-code">04</span> <span class="radical-plus">+</span> 乂 <span class="radical-code">98</span> <span class="radical-plus">+</span> <img src="/img/array30-radical/22鼠.png" class="radical" alt="行列字根 22，「鼠」下半部"> <span class="radical-code">22</span>」，但因為這個字很像「蠟」字的右半部，容易誤以為方框的內部是「人」。因為行列輸入法的容錯設計，「<img src="/img/array30-radical/22巛.png" class="radical" alt="行列字根 22，「巛」"> <span class="radical-code">22</span> <span class="radical-plus">+</span> <img src="/img/array30-radical/08溫.png" class="radical" alt="行列字根 08，「溫」右上部分"> <span class="radical-code">08</span> <span class="radical-plus">+</span> <img src="/img/array30-radical/22鼠.png" class="radical" alt="行列字根 22，「鼠」下半部"> <span class="radical-code">22</span>」也可以輸入「巤」字。`,
        en: ``,
        fr: ``,
      },
    },
    decomposition: {
      title: { tw: '拆字、取碼上的容錯', en: '', fr: "" },
      par1: {
        tw: `「曲」字的正確拆碼為「<span class="radical-special">囗</span> <span class="radical-code">04</span> <span class="radical-plus">+</span> 卄 <span class="radical-code">4-</span>」而不是「曰 <span class="radical-code">01</span> <span class="radical-plus">+</span> 丨 <span class="radical-code">3-</span> <span class="radical-plus">+</span> 丨 <span class="radical-code">3-</span>」，因為「曰 <span class="radical-code">01</span>」不是<a href="#discontiguous-radicals">跨越筆順的字根</a>。但因為行列輸入法的容錯設計，這兩種拆碼都能輸入「曲」字。 `,
        en: ``,
        fr: ``,
      },
      par2: {
        tw: `「麥」字的下面取成「夕 <span class="radical-code">76</span>」或是「<span class="radical-special">夂</span> <span class="radical-code">98</span>」都可以，也就是「十 <span class="radical-code">4-</span> <span class="radical-plus">+</span> 人 <span class="radical-code">8-</span> <span class="radical-plus">+</span> 人 <span class="radical-code">8-</span> <span class="radical-plus">+</span> 夕 <span class="radical-code">76</span>」以及「十 <span class="radical-code">4-</span> <span class="radical-plus">+</span> 人 <span class="radical-code">8-</span> <span class="radical-plus">+</span> 人 <span class="radical-code">8-</span> <span class="radical-plus">+</span> 夂 <span class="radical-code">98</span>」這兩種拆碼都能輸入「麥」字。 `,
        en: ``,
        fr: ``,
      },
      par3: {
        tw: `「卍」字筆畫共六筆，前三筆畫寫類似數字 2 的部分（視為字根「乙 <span class="radical-code">2-</span>」），其餘部分由後三筆畫完成。所以正確拆碼為「乙 <span class="radical-code">2-</span> <span class="radical-plus">+</span> 丨 <span class="radical-code">3-</span> <span class="radical-plus">+</span> 一 <span class="radical-code">1-</span> <span class="radical-plus">+</span> 丨 <span class="radical-code">3-</span>」。但如果您先拆出中間的正交，會得到「十 <span class="radical-code">4-</span> <span class="radical-plus">+</span> 一 <span class="radical-code">1-</span> <span class="radical-plus">+</span> 一 <span class="radical-code">1-</span> <span class="radical-plus">+</span> 丨 <span class="radical-code">3-</span>」。因為行列輸入法的容錯設計，這兩種拆碼都能夠輸入「卍」字。`,
        en: ``,
        fr: ``,
      },
      par4: {
        tw: `「卐」字筆畫共六筆，前三筆畫寫「㇞」，其餘部分由後三筆畫完成。所以正確拆碼為「㇞ <span class="radical-code">5-</span> <span class="radical-plus">+</span> 一 <span class="radical-code">1-</span> <span class="radical-plus">+</span> 丨 <span class="radical-code">3-</span> <span class="radical-plus">+</span> 一 <span class="radical-code">1-</span>」。。但如果您先拆出中間的正交，會得到「十 <span class="radical-code">4-</span> <span class="radical-plus">+</span> 丨 <span class="radical-code">3-</span> <span class="radical-plus">+</span> 丨 <span class="radical-code">3-</span> <span class="radical-plus">+</span> 一 <span class="radical-code">1-</span>」。因為行列輸入法的容錯設計，這兩種拆碼都能夠輸入「卐」字。`,
        en: ``,
        fr: ``,
      },
      par5: {
        tw: `「承」字的正確拆碼為「㇖ <span class="radical-code">5-</span> <span class="radical-plus">+</span> <img src="/img/array30-radical/4-丰簡.png" class="radical" alt="行列字根 4-，「峰」去掉山再去掉夂"> <span class="radical-code">4-</span> <span class="radical-plus">+</span> ㇖ <span class="radical-code">5-</span> <span class="radical-plus">+</span> <img src="/img/array30-radical/8-承.png" class="radical" alt="行列字根 8-，「承」最末兩筆畫"> <span class="radical-code">8-</span>」。如果誤以為取掉前兩個字根「㇖ <span class="radical-code">5-</span>、<img src="/img/array30-radical/4-丰簡.png" class="radical" alt="行列字根 4-，「峰」去掉山再去掉夂"> <span class="radical-code">4-</span>」後剩下的部分是一個字根碼為 <span class="radical-code">58</span> 的字根，那麼會得到「㇖ <span class="radical-code">5-</span> <span class="radical-plus">+</span> <img src="/img/array30-radical/4-丰簡.png" class="radical" alt="行列字根 4-，「峰」去掉山再去掉夂"> <span class="radical-code">4-</span> <span class="radical-plus">+</span> フ<img src="/img/array30-radical/8-承.png" class="radical" alt="行列字根 8-，「承」最末兩筆畫"> <span class="radical-code">58</span>」這個錯誤的拆碼。但因為行列輸入法的容錯設計，這兩種拆碼都能輸入「承」字。`,
        en: ``,
        fr: ``,
      },
      par6: {
        tw: `「茶」字正確拆碼為「艹 <span class="radical-code">4-</span> <span class="radical-plus">+</span> <img src="/img/array30-radical/81合.png" class="radical" alt="行列字根 81，「合」去掉口"> <span class="radical-code">81</span> <span class="radical-plus">+</span> 小 <span class="radical-code">38</span>」。拆成「艹 <span class="radical-code">4-</span> <span class="radical-plus">+</span> <img src="/img/array30-radical/8-全簡.png" class="radical" alt="行列字根 8-，「人」但兩筆畫都沒有凸出"> <span class="radical-code">8-</span> <span class="radical-plus">+</span> 木 <span class="radical-code">48</span>」不符合大根先取原則，但因為行列輸入法的容錯設計，這兩種拆碼都能輸入「茶」字。`,
        en: ``,
        fr: ``,
      },
      par7: {
        tw: `在<a href="#big-radical-principle">大根先取原則</a>的說明中看過，「幾」這個字拆碼應該是「ㄠ <span class="radical-code">26</span> <span class="radical-plus">+</span> ㄠ <span class="radical-code">26</span> <span class="radical-plus">+</span> 厂 <span class="radical-code">19</span> <span class="radical-plus">+</span> <img src="/img/array30-radical/26戈.png" class="radical" alt="行列字根 26，「戈」去掉橫線"> <span class="radical-code">26</span>」，但因為將「幾」字中「厂 <span class="radical-code">19</span>、丶 <span class="radical-code">6-</span>」部分拆成「一、人」相當直覺，所以「ㄠ <span class="radical-code">26</span> <span class="radical-plus">+</span> ㄠ <span class="radical-code">26</span> <span class="radical-plus">+</span> 一 <span class="radical-code">1-</span> <span class="radical-plus">+</span> <img src="/img/array30-radical/26戈.png" class="radical" alt="行列字根 26，「戈」去掉橫線"> <span class="radical-code">26</span>」這個拆碼也能輸入「幾」字。`,
        en: ``,
        fr: ``,
      },
      par8: {
        tw: `在先前的教學看過兩個隱藏版字根：「乡」、「卌」。它們的普通編碼分別是「㇛ <span class="radical-code">2-</span> <span class="radical-plus">+</span> <img src="/img/array30-radical/29亥.png" class="radical" alt="行列字根 29，「亥」第三四筆畫"> <span class="radical-code">29</span> <span class="radical-plus">+</span> <span class="keycap keycap-letter">8↑</span>」、「卅 <span class="radical-code">4-</span> <span class="radical-plus">+</span> 丨 <span class="radical-code">3-</span>」（或是「廾 <span class="radical-code">4-</span> <span class="radical-plus">+</span> <img src="/img/array30-radical/33而.png" class="radical" alt="行列字根 33，「而」下半部中間兩直線"> <span class="radical-code">3-</span>」，此編碼不符合<a href="#big-radical-principle">大根先取原則</a>，但因為行列輸入法的容錯設計，它也可以輸入「卌」字。）<br>
        但它們以字根的身分也分別會得到的普通編碼「乡 <span class="radical-code">29</span> <span class="radical-plus">+</span> 乡 <span class="radical-code">29</span> <span class="radical-plus">+</span> 乡 <span class="radical-code">29</span> <span class="radical-plus">+</span> 乡 <span class="radical-code">29</span> <span class="radical-plus">+</span> <span class="keycap keycap-letter">8↑</span>」、「卌 <span class="radical-code">4-</span> <span class="radical-plus">+</span> 卌 <span class="radical-code">4-</span> <span class="radical-plus">+</span> 卌 <span class="radical-code">4</span> <span class="radical-plus">+</span> 卌 <span class="radical-code">4-</span>」。此外，「鄉」、「響」這類包含偏旁「乡」的字，「乡」的部分應該拆成「㇛ <span class="radical-code">2-</span>、<img src="/img/array30-radical/29亥.png" class="radical" alt="行列字根 29，「亥」第三四筆畫"> <span class="radical-code">29</span>」，但直接用隱藏字根「乡 <span class="radical-code">29</span>」取掉也可以。`,
        en: ``,
        fr: ``,
      },
    },
    mixture: {
      par1: {
        tw: '當然，有些字的容錯不是只有「筆順上、寫法上或拆字、取碼上」的其中一種，而是有多類型的容錯。例如：',
        en: "",
        fr: ""
      },
      ex1: {
        tw: `「幽」字應該先寫中間直筆再寫左邊的「ㄠ」，但有些人先寫左邊的「ㄠ」再寫中間直筆。這兩種筆順分別會得到「丨 <span class="radical-code">3-</span> <span class="radical-plus">+</span> ㄠ <span class="radical-code">26</span> <span class="radical-plus">+</span> ㄠ <span class="radical-code">26</span> <span class="radical-plus">+</span> <span class="radical-special">凵</span> <span class="radical-code">3-</span>」以及「ㄠ <span class="radical-code">26</span> <span class="radical-plus">+</span> 丨 <span class="radical-code">3-</span> <span class="radical-plus">+</span> ㄠ <span class="radical-code">26</span> <span class="radical-plus">+</span> <span class="radical-special">凵</span> <span class="radical-code">3-</span>」。行列的容錯設計讓這兩種編碼都可以輸入「幽」字。<br>
        而拆碼「<span class="radical-special">山</span> <span class="radical-code">3-</span> <span class="radical-plus">+</span> ㄠ <span class="radical-code">26</span> <span class="radical-plus">+</span> ㄠ <span class="radical-code">26</span>」並不正確，因為「<span class="radical-special">山</span> <span class="radical-code">3-</span>」並不是<a href="#discontiguous-radicals">跨越筆順的字根</a>，但因為行列輸入法的容錯設計，此拆碼也能輸入此字。`,
        en: ``,
        fr: ``
      },
      ex2: {
        tw: `「卵」字在寫完「<img src="/img/array30-radical/92氏.png" class="radical" alt="行列字根 92，「氏」最初兩筆畫"> <span class="radical-code">92</span>」後應該先寫「丿 <span class="radical-code">3-</span>」再寫「丶 <span class="radical-code">6-</span>」，但有些人順序相反。這兩種筆順分別會得到「<img src="/img/array30-radical/92氏.png" class="radical" alt="行列字根 92，「氏」最初兩筆畫"> <span class="radical-code">92</span> <span class="radical-plus">+</span> 丿 <span class="radical-code">3-</span> <span class="radical-plus">+</span> 丶 <span class="radical-code">6-</span> <span class="radical-plus">+</span> 丶 <span class="radical-code">6-</span>」以及「<img src="/img/array30-radical/92氏.png" class="radical" alt="行列字根 92，「氏」最初兩筆畫"> <span class="radical-code">92</span> <span class="radical-plus">+</span> 丶 <span class="radical-code">6-</span> <span class="radical-plus">+</span> 丿 <span class="radical-code">3-</span> <span class="radical-plus">+</span> 丶 <span class="radical-code">6-</span>」。行列的容錯設計讓這兩種編碼都可以輸入「卵」字。<br>
        另外，上述兩種編碼中，如果將筆畫「丿 <span class="radical-code">3-</span>」視為撇「㇒ <span class="radical-code">9-</span>」，一樣能輸入「卵」。`,
        en: ``,
        fr: ``
      }
    }
  },
  wildCard: {
    title: { tw: '查詢功能', en: 'Wild cards', fr: 'Jokers' },
    description: {
      tw: `行列輸入法本身具有查詢功能，實際使用於您沒辦法完整拆字的時候。查詢鍵有兩種，問號 <span class="keycap keycap-letter">?</span> 以及星號 <span class="keycap keycap-letter">*</span>，下面依序為您介紹。`,
      en: ``,
      fr: ``
    }
    // then check questionMark, asterisk and wildCardApplication
  },
  questionMark: {
    title: { tw: '問號「?」', en: "Question mark '?'", fr: "Point d'interrogation « ? »" },
  },
  asterisk: {
    title: { tw: '星號「*」', en: "Asterisk '*'", fr: 'Astérisque « * »' },
  },
  wildCardApplication: {
    title: { tw: '實際應用', en: 'Aplications', fr: 'Applications' },
  },
  shortCode: {
    title: { tw: '簡碼', en: 'Short codes', fr: 'Codes courts' },
  },
  shortCode1: {
    title: { tw: '一級簡碼', en: 'Short codes I', fr: 'Codes courts I' },
  },
  shortCode2: {
    title: { tw: '二級簡碼', en: 'Short codes II', fr: 'Codes courts II' },
  },
  shortCodeConclusion: {
    title: { tw: '簡碼小結', en: 'Conclusion on short codes', fr: 'Conclusion sur les codes courts' },
    par1: {
      tw: "鍵入一或二顆行列 30 鍵，行列視窗上就會顯示出簡碼字，有看到想要的字就可以用數字鍵選擇完成輸入。而打字經驗多了之後，時常就能不看行列視窗輸入簡碼字，因為熟悉了數字鍵的規則或把數字鍵記起來了。",
      en: "",
      fr: ""
    },
    com1: {
      tw: `註：總共有 270 個字有一級簡碼，有 20 個符號有一級簡碼。<br>
      總共有 3037 個字有二級簡碼，沒有任何符號有二級簡碼。`,
      en: `Note: `,
      fr: `NB : `
    },
  },
  symbol: {
    title: { tw: '符號', en: 'Symbols', fr: 'Symboles' },
  },
  symbolList: {
    title: { tw: '符號選單', en: 'Symbol lists', fr: 'Listes de symboles' },
    description: {
      tw: `先按 <span class="keycap keycap-letter">2↑</span> （也就是英文鍵 <span class="keycap keycap-letter">w</span>），再按任意一顆數字鍵便會進到符號選單（不同的數字鍵依照下方說明對應到不同類型的選單）。進入選單後可以按空白鍵到下一頁，或是按方向鍵切換上一頁/下一頁，看到想要的符號以數字鍵選擇完成輸入。`,
      en: ``,
      fr: ``
    },
    exhaustiveLists: {
      tw: '以下列出各選單詳細內容：',
      en: "",
      fr: ""
    },
    list1: { tw: '標點符號選單', en: '', fr: '' },
    list2: { tw: '括號符號選單', en: '', fr: '' },
    list3: { tw: '一般符號選單', en: '', fr: '' },
    list4: { tw: '數學符號選單', en: '', fr: '' },
    list5: { tw: '方向符號選單', en: '', fr: '' },
    list6: { tw: '單位符號選單', en: '', fr: '' },
    list7: { tw: '圖表符號選單', en: '', fr: '' },
    list8: { tw: '順序符號選單', en: '', fr: '' },
    list9: { tw: '希臘符號選單', en: '', fr: '' },
    list0: { tw: '注音符號選單', en: '', fr: '' },
  },
  symbolWithSC1: {
    title: { tw: '有一級簡碼的符號', en: 'Symbols having a short code 1', fr: 'Symboles ayant un code court I' },
    description: {
      tw: '除了透過進入符號選單來輸入符號，行列輸入法將一些常用的符號安排了一級簡碼。',
      en: '',
      fr: ''
    },
    fourSymbols: {
      description: {
        tw: '全形的逗號、句號、冒號以及分號這 4 個符號，它們一級簡碼的行列 30 鍵，就是英文鍵盤上印有該符號的按鍵。',
        en: '',
        fr: ''
      },
      engKeys: {
        tw: `全形逗號「，」：<span class="keycap keycap-letter">,</span> <span class="radical-plus">+</span> <span class="keycap keycap-number">1</span>（也就是 <span class="keycap keycap-letter">8↓</span> <span class="radical-plus">+</span> <span class="keycap keycap-number">1</span>）<br>
        全形句號「。」：<span class="keycap keycap-letter">.</span> <span class="radical-plus">+</span> <span class="keycap keycap-number">1</span>（也就是 <span class="keycap keycap-letter">9↓</span> <span class="radical-plus">+</span> <span class="keycap keycap-number">1</span>）<br>
        全形冒號「：」：<span class="keycap keycap-letter">;</span> <span class="radical-plus">+</span> <span class="keycap keycap-number">2</span>（也就是 <span class="keycap keycap-letter">0-</span> <span class="radical-plus">+</span> <span class="keycap keycap-number">2</span>）<br>
        全形分號「；」：<span class="keycap keycap-letter">;</span> <span class="radical-plus">+</span> <span class="keycap keycap-number">3</span>（也就是 <span class="keycap keycap-letter">0-</span> <span class="radical-plus">+</span> <span class="keycap keycap-number">3</span>）`,
        en: ``,
        fr: ``
      },
    },
    dSlash: {
      tw: `另外 <span class="keycap keycap-letter">d</span> 和 <span class="keycap keycap-letter">/</span>，也就是鍵位 <span class="keycap keycap-letter">3-</span> 和 <span class="keycap keycap-letter">0↓</span>，這兩顆行列 30 鍵各自提供了 8 個符號的一級簡碼。`,
      en: ``,
      fr: ``
    },
    key3Middle: {
      description: {
        tw: `按鍵 <span class="keycap keycap-letter">d</span> = <span class="keycap keycap-letter">3-</span> 提供的 8 個符號：`,
        en: ``,
        fr: ``
      },
      n3: { tw: '（全形驚嘆號）', en: "", fr: "" },
      n4: { tw: '（全形單引號）', en: "", fr: "" },
      n5: { tw: '（全形單引號）', en: "", fr: "" },
      n6: { tw: '（全形頓號）', en: "", fr: "" },
      n7: { tw: '（半形雙引號）', en: "", fr: "" },
      n8: { tw: '（半形雙引號）', en: "", fr: "" },
      n9: { tw: '（全形左括號）', en: "", fr: "" },
      n0: { tw: '（全形右括號）', en: "", fr: "" },
    },
    key0Bottom: {
      description: {
        tw: `按鍵 <span class="keycap keycap-letter">/</span> = <span class="keycap keycap-letter">0↓</span> 提供的 8 個符號：`,
        en: ``,
        fr: ``
      },
      n3: { tw: '（全形問號）', en: "", fr: "" },
      n4: { tw: '（全形雙引號）', en: "", fr: "" },
      n5: { tw: '（全形雙引號）', en: "", fr: "" },
      n6: { tw: '（全形間隔號）', en: "", fr: "" },
      n7: { tw: '（半形連字號）', en: "", fr: "" },
      n8: { tw: '（全形星號）', en: "", fr: "" },
      n9: { tw: '（全形斜線）', en: "", fr: "" },
      n0: { tw: '（全形刪節號）', en: "", fr: "" },
    },
  },
  specialCode: {
    title: { tw: '特別碼', en: 'Special codes', fr: 'Code spéciaux' },
    par1: {
      tw: `行列輸入法特別為一些使用頻率很高的字設計了「特別碼」：按下 2 顆行列 30 鍵再按下 <span class="keycap keycap-space">Space</span> 完成輸入。總共有 398 個字有特別碼，並且沒有任何符號有特別碼。`,
      en: ``,
      fr: ``
    },
    par2: {
      tw: `雖然有些特別碼是依照特定規則設計的（例如普通編碼的第一顆和最後一顆鍵、第一顆和第二顆鍵等等），但總體來說，<u>特別碼的 2 顆行列 30 鍵都必須特別記憶</u>。`,
      en: ``,
      fr: ``
    },
    par3: {
      tw: `下面舉出一些有特別碼的字：`,
      en: ``,
      fr: ``
    },
    par4: {
      tw: `「我」字有特別碼 <span class="keycap keycap-letter">9-</span> <span class="radical-plus">+</span> <span class="keycap keycap-letter">9↑</span><br>
      「雨」字有特別碼 <span class="keycap keycap-letter">1-</span> <span class="radical-plus">+</span> <span class="keycap keycap-letter">8↓</span><br>
      「等」字有特別碼 <span class="keycap keycap-letter">9-</span> <span class="radical-plus">+</span> <span class="keycap keycap-letter">9-</span><br>
      「實」字有特別碼 <span class="keycap keycap-letter">4-</span> <span class="radical-plus">+</span> <span class="keycap keycap-letter">7↓</span>`,
      en: ``,
      fr: ``
    },
    par5: {
      tw: `<u>強烈不建議行列新手一開始花時間研究或記憶特別碼，應該等用行列打字達到一定速度後再考慮學習特別碼。</u>因為在本身打字速度不快的狀況下，使用特別碼幾乎不會提升打字速度，而且花時間學習特別碼完全不會讓您一般拆字取碼的速度變快，不如把時間花在反覆閱讀此教學或本站<a href="radicals-and-examples.html" target="_blank">字根表</a>的字根實例以及<a href="typing.html" target="_blank">練習打字</a>上。`,
      en: ``,
      fr: ``
    },
    com6: {
      tw: `註：有一些字同時有特別碼和一級簡碼（共 12 個：大、不、小、是、個、我、在、你、那、家、會、雨），您可以透過本站的<a href="dictionary.html" target="_blank">行列查碼</a>查詢它們的特別碼與一級簡碼。至於這些字使用特別碼快還是一級簡碼快，要看字也要看個人，因為按起來順不順要看實際情況。不過建議初學階段不必花心思在這件事上。`,
      en: `Note:`,
      fr: `NB : `
    },
    com7: {
      tw: `註：「敦」、「雇」兩字的特別碼有重碼，重碼位都是 1。`,
      en: `Note: `,
      fr: `NB : `
    },
  },
  preview: {
    title: { tw: '預視', en: 'Preview', fr: 'Aperçu' },
    description: {
      tw: '在鍵入一顆或多顆行列 30 鍵後（沒有按空白鍵），行列視窗可能會顯示一些候選字。這是行列輸入法的「預視」功能。此時只要看到想要的字以數字鍵選擇就能完成輸入。',
      en: "",
      fr: ""
    },
    k1: {
      tw: "鍵入 1 顆行列 30 鍵，行列視窗會顯示一級簡碼字。出現的字以及順序都是固定的。",
      en: "",
      fr: "",
    },
    com1: {
      tw: `註：前面已經提過，按下 <span class="keycap keycap-letter">2↑</span>，行列視窗內預視的「女」不能透過按數字鍵 <span class="keycap keycap-number">1</span> 輸入。輸入「女」字的正確方法為按 <span class="keycap keycap-letter">2↑</span> 後，再按 <span class="keycap keycap-space">Space</span> 完成輸入。`,
      en: `Note: `,
      fr: `NB : `
    },
    k2: {
      tw: "鍵入 2 顆行列 30 鍵，行列視窗會顯示二級簡碼字。出現的字以及順序都是固定的。",
      en: "",
      fr: "",
    },
    k3: {
      tw: "鍵入 3 顆行列 30 鍵，行列視窗會顯示普通編碼恰好是這 3 顆鍵的字。",
      en: "",
      fr: "",
    },
    k4: {
      tw: "鍵入 4 顆行列 30 鍵，行列視窗會顯示普通編碼恰好是這 4 顆鍵的字。",
      en: "",
      fr: "",
    },
    k5: {
      tw: "鍵入 5 顆行列 30 鍵，行列視窗會顯示普通編碼恰好是這 5 顆鍵的字。",
      en: "",
      fr: "",
    },
    atLeast3: {
      tw: "也就是說，當普通編碼至少有 3 顆行列 30 鍵，將它們全部鍵入之後，行列視窗中的預視字就會出現想要的字，此時可以不用按空白鍵，直接透過數字鍵選擇完成輸入。",
      en: "",
      fr: ''
    }
  },
  miscellaneous: {
    title: { tw: '雜項', en: 'Miscellaneous', fr: 'Divers' },
    esc: {
      tw: `按 <span class="keycap keycap-space">Esc</span> 可以取消當下字元的輸入。`,
      en: ``,
      fr: ``
    },
    numberKeys: {
      tw: `使用行列輸入法時，鍵盤上只要不是行列 30 鍵的按鍵都保有原本按鍵功能，包括 10 顆數字鍵 <span class="keycap keycap-number">1</span>、<span class="keycap keycap-number">2</span>、<span class="keycap keycap-number">3</span>、<span class="keycap keycap-number">4</span>、<span class="keycap keycap-number">5</span>、<span class="keycap keycap-number">6</span>、<span class="keycap keycap-number">7</span>、<span class="keycap keycap-number">8</span>、<span class="keycap keycap-number">9</span>、<span class="keycap keycap-number">0</span>，以及 <span class="keycap keycap-letter">\`</span>、<span class="keycap keycap-letter">-</span>、<span class="keycap keycap-letter">=</span>、<span class="keycap keycap-letter">[</span>、<span class="keycap keycap-letter">]</span>、<span class="keycap keycap-letter">\\</span>、<span class="keycap keycap-letter">'</span>。也就是說<u>使用行列輸入法時，可以直接用數字鍵輸入數字</u>。`,
      en: ``,
      fr: ``
    },
    circle: {
      tw: `「○」身為文字的普通編碼為 <span class="keycap keycap-letter">0-</span>（有重碼，重碼位為 4），或是 <span class="keycap keycap-letter">9↑</span> <span class="radical-plus">+</span> <span class="keycap keycap-letter">7↑</span>（有重碼，重碼位為 1），後者以英文鍵來說是 ou。身為符號，「○」是 <span class="keycap keycap-letter">2↑</span> <span class="radical-plus">+</span> <span class="keycap keycap-number">3</span> 一般符號選單的第 7 個符號。 `,
      en: ``,
      fr: ``
    },
    topBottom: {
      tw: `行列鍵位的「↑」、「↓」符號常用「^」、「v」代替。例如 <span class="keycap keycap-letter">7↑</span> 寫成「7^」， <span class="keycap keycap-letter">3↓</span> 寫成「3v」。鍵位間表示順序的加號「<span class="radical-plus">+</span>」一般也省略不寫，例如「洪」字的普通編碼 <span class="keycap keycap-letter">3↓</span> <span class="radical-plus">+</span> <span class="keycap keycap-letter">4↑</span> <span class="radical-plus">+</span> <span class="keycap keycap-letter">8-</span> 一般會寫成「3v4^8-」。
      `,
      en: ``,
      fr: ``
    },
    com1: {
      tw: `註：輸入「^」方式為 <span class="keycap keycap-space">Shift</span> 鍵按住不放的同時按下 <span class="keycap keycap-number">6</span>。`,
      en: `Note: `,
      fr: `NB : `
    }
  },
  others: {
    title: { tw: '其他功能', en: 'Other functionalities', fr: 'Autres fonctionnalités' },
  },
  traditionalSimplifiedConversion: {
    title: { tw: '繁轉簡、簡轉繁', en: 'Traditional-simplified Chinese character Conversion', fr: 'Conversion caractères chinois traditionnels-simplifiés' },
    par1: {
      tw: `有些版本的行列輸入法可以設定輸繁轉簡或輸簡轉繁，例如適用於 Windows 的 <a href="download.html#dime" target="_blank">DIME 行列</a>、Android 的<a href="download.html#android" target="_blank">萊姆輸入法</a>、iOS 的等等 <a href="download.html#ios" target="_blank">OkidoKey</a>。`,
      en: ``,
      fr: ``
    }
  },
  reverseLookup: {
    title: { tw: '行列反查', en: 'Reverse lookup', fr: 'Recherche inverse' },
    par1: {
      tw: `有些中文輸入法軟體包含好幾種輸入法，並且提供行列反查，例如用注音輸入時會提示該字的行列編碼。例如適用於 Windows 的 <a href="download.html#dime" target="_blank">DIME 行列</a>、Android 的<a href="download.html#android" target="_blank">萊姆輸入法</a>、iOS 的等等 <a href="download.html#ios" target="_blank">OkidoKey</a>。`,
      en: ``,
      fr: ``
    },
    par2: {
      tw: "另外，有些行列輸入法也提供特別碼提示，也就是說如果輸入的字有特別碼，系統會顯示此特別碼。",
      en: "",
      fr: ""
    }
  },
  enteringWords: {
    title: { tw: '詞彙輸入', en: 'Entering words', fr: 'Saisir des mots' },
    description: {
      tw: `行列輸入法當初設計是能夠輸入詞彙的，也就是一些兩個字以上的常見詞彙也有普通編碼。但不同版本的行列輸入法在詞彙輸入上支援程度不一，有些也許不支援詞彙輸入（例如 Windows 內建行列），有些也許沒有內建詞彙輸入但支援自建詞彙（例如 <a href="download.html#dime" target="_blank">DIME 行列</a>），有些則是內建詞彙輸入（例如<a href="download.html#new-Array" target="_blank">新行列輸入法</a>）。`,
      en: ``,
      fr: ``
    },
    superb: {
      tw: "詞彙輸入功能絕對是行列輸入法最強大、用起來最舒爽的功能之一！！！",
      en: "",
      fr: ""
    },
    asFollows: {
      tw: "行列輸入法對於詞彙的普通編碼的設計如下。",
      en: "",
      fr: ""
    },
    char2: {
      tw: "兩字詞取第一個字的首、尾字根，和第二個字的首、尾字根：",
      en: "",
      fr: ""
    },
    char3: {
      tw: "三字詞取第一個字的首、尾字根，第二個字及第三個字的首字根：",
      en: "",
      fr: ""
    },
    char4: {
      tw: "四字詞或超過四字則是取前面四個字的首根：",
      en: "",
      fr: ""
    },
    beforeWord: { tw: '「', en: "the standard code of word '", fr: "le code standard du mot « " },
    betweenWordCode: { tw: '」的普通編碼為「', en: "' is '", fr: ' » est « ' },
    afterCode: { tw: '」', en: "'", fr: ' »' },
    pressQuote: {
      tw: `輸入完一個詞的普通編碼後，要按下 <span class="keycap keycap-letter">'</span>（在 <span class="keycap keycap-space">Enter</span> 左邊）。如果該編碼沒有重碼，則輸入完成，否則會需要面對重碼的問題。也就是說，<span class="keycap keycap-letter">'</span> 鍵相對於詞的普通編碼輸入如同 <span class="keycap keycap-space">Space</span> 空白鍵相對於字的普通編碼輸入。`,
      en: ``,
      fr: ``
    },
    com1: {
      tw: "註：但如同上述所說，不同版本的行列輸入法在詞彙輸入上支援程度不一，有些也許不支援詞彙輸入，有些也許沒有內建詞彙輸入但支援自建詞彙。",
      en: "Note: ",
      fr: "NB : "
    }
  },
  array40: {
    title: { tw: '行列 40', en: 'Array 40', fr: 'Tableau 40' },
    par1: {
      tw: "早期行列輸入法（1989 年發明）的編碼設計，除了使用現在的 30 顆鍵，還使用了上排的 10 顆數字鍵，一共 40 顆鍵，所以被稱為「行列 40」。而現在所謂的行列輸入法，一般都是指「行列 30」（1992 年推出），是行列 40 改良後的設計，不再占用上排 10 顆數字鍵。現在已不推薦學習行列 40。（但當然非常推薦學習行列 30！）",
      en: "",
      fr: ""
    }
  },
  array10: {
    title: { tw: '行列 10', en: 'Array 10', fr: 'Tableau 10' },
  },
  wordAssociation: {
    title: { tw: '聯想字詞', en: 'Word suggestions', fr: 'Suggestions de mots' },
    par1: {
      tw: `每次輸入完成後，行列視窗可能會顯示一些聯想字詞。看到想要的聯想字詞可以透過按下 <span class="keycap keycap-space">Shift</span> 同時按下數字鍵選擇以完成輸入（有些版本可能不用按 <span class="keycap keycap-space">Shift</span>）。使用聯想字詞可以讓您輸入速度更快。`,
      en: ``,
      fr: ``
    },
    com1: {
      tw: '註：聯想字詞並非行列輸入法標準設計的一部份，所以不同版本的行列可能會有不同的聯想字詞以及聯想字詞排序。',
      en: "Note: ",
      fr: "NB : "
    }
  },
  conclusion: {
    title: { tw: '結語', en: 'Conclusion', fr: 'Conclusion' },
  },
  bestWayToLearnArray: {
    title: { tw: '行列輸入法最佳學法', en: 'The best way to learn Array', fr: "La meilleure façon d'apprendre Tableau" },
    subtitle: { tw: '最科學且無陣痛期的學習方法', en: '', fr: "" },
    par1: {
      tw: `看完了上面的行列教學，您一定躍躍欲試想要開始練習用行列輸入法打字。不過下面提供您行列輸入法的最佳學法，一開始不用急著上鍵盤用行列輸入法打字，而是有階段性地練習，不但讓您快速進步，還有效縮短甚至幾乎避開使用新的輸入法會遇到的陣痛期！`,
      en: ``,
      fr: ``
    },
    par2: {
      tw: `在說明這個最佳學習方法前，先說明一下這份行列教學的效果。`,
      en: ``,
      fr: ``
    },
    par3: {
      tw: `🙂 看完本站的行列教學後，您基本上就可以輸入所有的中文字，但因為經驗少，可能偶爾還是會有拆碼的疑惑。`,
      en: ``,
      fr: ``
    },
    par4: {
      tw: `😀 看完本站的行列教學，並到<a href="radicals-and-examples.html" target="_blank">字根碼頁面</a>看過所有字根的頭兩個字根實例所得到的經驗，可以讓您有能力自行輸入絕大部分的中文字。`,
      en: ``,
      fr: ``
    },
    par5: {
      tw: `🤩 看完本站的行列教學後，到<a href="radicals-and-examples.html" target="_blank">字根碼頁面</a>看完所有字根實例所得到的經驗，基本上可以讓您有能力自行輸入一切中文字，將拆字的疑惑或需要查碼的狀況降到 0。`,
      en: ``,
      fr: ``
    },
    par6: {
      tw: `也就是說，除了本頁的教學外，<a href="radicals-and-examples.html" target="_blank">字根碼頁面</a>的字根實例也是學習行列輸入法的重要幫手。當然，您可以將此行列教學重複多看幾次，而且也<b>非常推薦</b>您這麼做。此外，您可以使用本站<a href="tutorial-recap.html" target="_blank">複習與測驗</a>頁面來複習行列的基本筆形與字根。`,
      en: ``,
      fr: ``
    },
    recapAndQuiz: { tw: '複習與測驗', en: 'Summary and quizzes', fr: "Résumé et quiz" },
    par7: {
      tw: `以下開始介紹行列輸入法最佳的學習方法，大致可以分為五個階段。`,
      en: ``,
      fr: ``
    },
    phase1: {
      title: { tw: '階段一', en: 'Phase 1', fr: "Phase 1" },
      par1: {
        tw: `看到字能夠正確拆出字根，甚至有些字根拆出來同時馬上知道字根碼的第一位數。`,
        en: ``,
        fr: ``
      },
      par2: {
        tw: `例如看到「一大早去跑步」，可以馬上拆出「一」、「大」、「日十」、「土厶」、「𧾷勹<img src="/img/array30-radical/51巳.png" class="radical" alt="行列字根 51，「巳去掉最末筆畫」">乚」、「止<img src="/img/array30-radical/39步.png" class="radical" alt="行列字根 39，「步」去掉止">」，並可能馬上知道一些字根碼的第一位數，像是「土」字根碼是 4 開頭、「止」字根碼是 3 開頭等等。`,
        en: ``,
        fr: ``
      },
      par3: {
        tw: `此階段重點是學會正確拆字根，也就是對行列的字根有全面的認識（字根碼還沒有很熟沒關係，可以知道字根碼第一位數更好），並且熟悉拆字取碼原則，也就是<a href="#first-three-and-last-principle">前三後一原則</a>、<a href="#big-radical-principle">大根先取原則</a>以及<a href="#discontiguous-radicals">跨越筆順的字根</a>。`,
        en: ``,
        fr: ``
      },
      par4: {
        tw: `當您看到絕大多數的字都可以馬上正確拆出字根（甚至有些字根拆出來同時馬上知道字根碼的第一位數），您就可以進入下一個階段。`,
        en: ``,
        fr: ``
      },
    },
    phase2: {
      title: { tw: '階段二', en: 'Phase 2', fr: "Phase 2" },
      par1: {
        tw: `看到字能夠正確拆出字根，並且同時知道這些字根的字根碼。`,
        en: ``,
        fr: ``
      },
      par2: {
        tw: `例如看到「一大早去跑步」，可以馬上拆出「一 <span class="radical-code">1-</span>」、「大 <span class="radical-code">18</span>」、「日 <span class="radical-code">01</span> 十 <span class="radical-code">4-</span>」、「土 <span class="radical-code">41</span> 厶 <span class="radical-code">26</span>」、「𧾷 <span class="radical-code">2-</span> 勹 <span class="radical-code">95</span> <img src="/img/array30-radical/51巳.png" class="radical" alt="行列字根 51，「巳去掉最末筆畫」"> <span class="radical-code">51</span> 乚 <span class="radical-code">2-</span>」、「止 <span class="radical-code">31</span> <img src="/img/array30-radical/39步.png" class="radical" alt="行列字根 39，「步」去掉止"> <span class="radical-code">39</span>」。`,
        en: ``,
        fr: ``
      },
      par3: {
        tw: `此階段的重點是看到一個字，除了可以馬上拆字之外，也能夠馬上知道各字根的字根碼。`,
        en: ``,
        fr: ``
      },
      par4: {
        tw: `當您看到絕大多數的字都可以馬上正確拆出字根，並馬上知道這些字根的字根碼，您就可以進入下一個階段。`,
        en: ``,
        fr: ``
      },
    },
    phase3: {
      title: { tw: '階段三', en: 'Phase 3', fr: "Phase 3" },
      par1: {
        tw: `看到字能夠正確拆出字根，並且手指可以快速移動到該字根的鍵位。`,
        en: ``,
        fr: ``
      },
      par2: {
        tw: `例如看到「去」不僅可以馬上拆出「土 <span class="radical-code">41</span> 厶 <span class="radical-code">26</span>」，拆出「土」時左手小指要能夠即時往上按（為了按 4 上鍵位）、拆出「厶」時左手無名指即時往下按（為了按 2 下鍵位）。`,
        en: ``,
        fr: ``
      },
      par3: {
        tw: `此階段的重點是拆字時，想到字根碼手指可以馬上去按對應的鍵位，或是/以及想到字根手指可以馬上去按對應的鍵位。另外，如同一開始說的，不一定要上鍵盤，空按就是很足夠的練習，也就是前三個階段都是不用上鍵盤就能夠練習。`,
        en: ``,
        fr: ``
      },
      par4: {
        tw: `當您看到絕大多數的字都可以馬上正確拆出字根，並且手指可以馬上按出對應到的鍵位，恭喜您！您可以進入下一個階段了，開始上鍵盤用行列輸入法打字了！`,
        en: ``,
        fr: ``
      },
      com5: {
        tw: "註：如果您確實完成階段二的話，階段三只是將字根碼轉換成鍵位，並將手指實際移動到該鍵位。這個階段好像很簡單，但其實會花一些時間才能完成，因為「將字根碼轉換成鍵位後，手指實際移動到該鍵位」這件事需要花時間習慣。",
        en: "Note: ",
        fr: "NB : "
      },
      com6: {
        tw: "註：您也許會問：階段三可以跟階段一、二合併嗎？最有效率（並且最無痛）的方法還是本教學說的「階段二達成後才開始加強訓練階段三的內容」。也就是說，不要急著在「拆字根得出字根碼」這個步驟還沒到熟練時，同時訓練「拆字根同時手指要按對應鍵位」這件事。特別將這兩件事分開，讓學習的過程不僅更有效率，也更輕鬆、更有成就感。",
        en: "Note:",
        fr: "NB : "
      },
      par7: {
        tw: "要走過以上三個階段，其實不用一定要特別安排時間練習，平常在室內閱讀報章雜誌、看影片，或是在室外看到招牌、路名都是練習的好機會。而且因為行列輸入法設計非常科學、邏輯，以上這些階段其實快至一兩周慢至一兩月，就可以全部完成。",
        en: "",
        fr: ""
      },
      par8: {
        tw: `當然，除了依照上面的方法練習之外，反覆看本站的行列教學、使用本站<a href="tutorial-recap.html" target="_blank">複習與測驗</a>複習以及瀏覽本站字根表頁面的字根實例，絕對會讓您的基本功更紮實，並且更快上手行列輸入法。`,
        en: ``,
        fr: ``
      },
    },
    phase4: {
      title: { tw: '階段四', en: 'Phase 4', fr: "Phase 4" },
      par1: {
        tw: `度過了上面三個階段後，您已經可以開始幾乎無痛地上鍵盤使用行列輸入法打字了！當然，您必須養成打字不看鍵盤的好習慣。一開始可能要花一點時間習慣「按行 5 或是行 6 的按鍵」左手食指或右手食指分別要往右移和往左移這件事，這是正常的，不用擔心 😉。`,
        en: ``,
        fr: ``
      },
      par2: {
        tw: `這個階段建議您以下幾件事：`,
        en: ``,
        fr: ``
      },
      par3: {
        tw: `⌨️ 習慣<a href="#entering-standard-codes">輸入行列 30 鍵後按空白鍵</a>這件事<br>
        ⌨️ 學會與習慣處理<a href="#coincident-code">重碼</a>的問題<br>
        ⌨️ 嘗試使用<a href="#rarely-used-character">罕字鍵</a>來輸入罕用字<br>
        ⌨️ 慢慢學習<a href="#symbol-with-short-code-I">常用符號的一級簡碼</a><br>
        ⌨️ 記一些<a href="#symbol-list">符號選單</a>中您常用的符號<br>
        ⌨️ 充分使用行列輸入法的<a href="#preview">預視功能</a><br>
        ⌨️ 活用行列輸入法的<a href="#word-association">聯想字詞</a>功能
        ⌨️ 如果輸入法支援，開始嘗試使用<a href="#entering-words">詞彙輸入</a>`,
        en: ``,
        fr: ``
      },
      par4: {
        tw: `如果想要有效率地練習打字，本站的<a href="typing.html" target="_blank">行列打字練習</a>是您的首選。`,
        en: ``,
        fr: ``
      },
    },
    phaseLast: {
      title: { tw: '最後階段', en: 'Last phase', fr: "Dernière phase" },
      par1: {
        tw: `一陣子的練習後，您的打字速度就可以突破每分鐘 60 字了。此時您已經相當熟悉行列，並且也因為經驗熟悉了一些一二級簡碼。`,
        en: ``,
        fr: ``
      },
      par2: {
        tw: `此時您可以：`,
        en: ``,
        fr: ``
      },
      par3: {
        tw: `⌨️ 考慮特別去記一些一級簡碼<br>
        ⌨️ 繼續<a href="typing.html" target="_blank">練習打字</a><br>
        ⌨️ 更加熟練<a href="#entering-words">詞彙輸入</a>的功能（如果輸入法支援）`,
        en: ``,
        fr: ``
      },
      par4: {
        tw: `等到您覺得相當滿意您的打字速度，您可以開始練習一些特別碼，它們可以進一步加快打字速度。`,
        en: ``,
        fr: ``
      },
      com5: {
        tw: `註：<br>初學行列輸入法不要花心思在特別碼上。<br>初學行列輸入法不要花心思在特別碼上。<br>初學行列輸入法不要花心思在特別碼上。<br>很重要所以講三遍。強烈建議依照上述步驟，有階段性地掌握行列輸入法，這是最快速、最有效率也是最無痛地學習方法！`,
        en: `Note: `,
        fr: `NB : `
      },
      par6: {
        tw: `另外，手機上非常推薦使用<a href="download.html" target="_blank">行列 10</a>，輸入時時常輸入不到兩個字根就可選字了（因為字根碼比鍵位更精準）。候選字的排序以及聯想字詞，加上觸控選字，讓行列 10 非常好上手也非常好用！另外，在手機上也能使用本站的<a href="typing.html" target="_blank">行列打字練習</a>。`,
        en: ``,
        fr: ``
      },
    },
    pages: {
      description: {
        tw: `最後，這整個網站都是專門為您學習與使用行列輸入法打造的，絕對請您多加利用。希望您加入行列輸入法的行列，也祝您不久之後就能成為行列輸入法達人！`,
        en: ``,
        fr: ``
      },
      dictionary: {
        tw: `🔍 <a href="dictionary.html" target="_blank">FISH UP 行列查碼</a>：有不會輸入的字就來這裡查，行列查碼的首選去處！`,
        en: ``,
        fr: ``
      },
      typing: {
        tw: `⌨️ <a href="typing.html" target="_blank">FISH UP 行列打字練習</a>：想要練習打字就來這裡打，打字練習的首選去處。不僅附上了完整的行列提示，也提供了豐富的內建題目，包括簡碼、特別碼、有一級簡碼的符號、常用字、🎼流行歌歌詞、古文等等。您甚至可以自己客製化打字題目！`,
        en: ``,
        fr: ``
      },
      completeGuide: {
        tw: `📒 <a href="tutorial-complete.html" target="_blank">行列完整教學</a>：就是這個頁面，跟行列輸入法有關的知識都在這啦！多看幾次永遠不嫌少，2 次、5 次、10 次、50 次都不是問題！`,
        en: ``,
        fr: ``
      },
      recapQuiz: {
        tw: `✍️ <a href="tutorial-recap.html" target="_blank">行列複習與測驗</a>：複習您在快速入門與完整教學學到的知識，並透過測驗鞏固您對基本筆形與字根的知識！`,
        en: ``,
        fr: ``
      },
      table: {
        tw: `📜 <a href="radicals-and-examples.html" target="_blank">字根表</a>：有不會拆的字就來這裡搜尋，學拆字的首選去處，也是初學者必逛的地方。不僅有字根總覽與字根表，每個字根還都附上好幾個例字，您不會拆的字，九成以上的機會在這邊都找的到！`,
        en: ``,
        fr: ``
      },
    },
    downloadArrayIME: { tw: '下載行列輸入法', en: 'Download the Array method', fr: "Télécharger la méthode Tableau" },
  },
  shareThisPageOn: { tw: '分享頁面至：', en: 'Share this page on:', fr: 'Partagez cette page sur : ' },
  contactMe: {
    tw: `有任何問題可以到本站的 <a href="https://www.facebook.com/FISH-UP-%E8%A1%8C%E5%88%97%E6%9F%A5%E7%A2%BC-106035361278242/" target="_blank">Facebook 粉絲專頁</a>私訊或留言，也可以寫信至 <a href="mailto:misterfishup@gmail.com" target="_blank">misterfishup@gmail.com</a> 😉。如果您覺得本網站對您很有幫助，可以<a href="https://www.buymeacoffee.com/misterfishup" target="_blank" title='♫ 請我吃蛋糕 ♫'>給 FISH UP 買個蛋糕</a>來支持他 🥰！（臺灣的朋友請使用<a href="https://p.ecpay.com.tw/868A37D" target="_blank" title="支持 FISH UP 行列查碼去！">此連結</a>，因為臺灣目前不支援 Buy me a cake）`,
    en: `Got any questions? Send a message to the <a href="https://www.facebook.com/FISH-UP-%E8%A1%8C%E5%88%97%E6%9F%A5%E7%A2%BC-106035361278242/" target="_blank">Facebook fan page</a> of FISH UP Dictionary of Array, or write to <a href="mailto:misterfishup@gmail.com" target="_blank">misterfishup@gmail.com</a> 😉. If you enjoy this website, you can support FISH UP by <a href="https://www.buymeacoffee.com/misterfishup" target="_blank" title='♫ Buy me a cake ♫'>buying him a cake</a> 🥰 (If you're from Taiwan, please use <a href="https://p.ecpay.com.tw/868A37D" target="_blank" title="Support FISH UP Dictionary of Array!">this link</a>, since Buy me a cake is not yet available in Taiwan).`,
    fr: `Des questions ? Envoyez un message à <a href="https://www.facebook.com/FISH-UP-%E8%A1%8C%E5%88%97%E6%9F%A5%E7%A2%BC-106035361278242/" target="_blank">la page fan Facebook</a> de Dictionnaire FISH UP de Tableau, ou écrivez à <a href="mailto:misterfishup@gmail.com" target="_blank">misterfishup@gmail.com</a> 😉. Si vous aimez ce site, vous pouvez <a href="https://www.buymeacoffee.com/misterfishup" target="_blank" title='♫ Achetez-moi un gâteau ♫'>soutenir FISH UP en lui achetant un gâteau</a> 🥰 (utilisez <a href="https://p.ecpay.com.tw/868A37D" target="_blank" title="Soutenez Dictionnaire FISH UP de Tableau !">ce lien</a> si vous êtes de Taïwan, car Buy me a cake n'y est pas encore disponible).`
  },
  buyMeACake: { tw: '♫ 請我吃蛋糕 ♫', en: '♫ Buy me a cake ♫', fr: '♫ Achetez-moi un gâteau ♫' }
};
