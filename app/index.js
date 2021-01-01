const stringPageName = document.getElementById('app').dataset.pageName;
const AppContent = {
  title: { tw: 'FISH UP 行列查碼', en: 'FISH UP Dictionary of Array', fr: 'Dictionnaire FISH UP de Tableau' },
  subtitle: { tw: '- 學習行列輸入法的首選網站 -', en: '- Best website to learn Array -', fr: '- Le meilleur site web pour apprendre Tableau -' },
  year: '2020',
  sKeyDictionary: { tw: '查碼去', en: 'Dictionary', fr: 'Dictionnaire' },
  sKeyTyping: { tw: '打字去', en: 'Typing', fr: 'Exercices' },
  sKeyArray: { tw: '什麼是行列輸入法', en: 'What is Array?', fr: "Qu'est-ce que Tableau ?" },
  tryTheseExamples: { tw: '您可以試試這些例子', en: 'You can try these examples', fr: "Vous pouvez essayer ces examples" },
  examplesShow: { tw: '展開', en: 'Show', fr: "Afficher" },
  examplesHide: { tw: '收合', en: 'Hide', fr: "Masquer" },
  game: {
    title: { tw: '行列輸入法互動鍵盤', en: 'Interactive Array keyboard', fr: 'Clavier interactif de la méthode Tableau' },
    subtitle: {
      tw: '透過虛擬行列鍵盤來視覺化行列輸入法的小遊戲',
      en: 'A game that visualises Array via the virtual keyboard',
      fr: 'Un jeu qui visualise Tableau via le clavier virtuel'
    },
    description1: {
      tw: `第一次聽到行列輸入法？您按鍵儘管隨便亂按<br>如果剛好鍵入了字的編碼，編碼就會變成字 🤩`,
      en: `First time you hear about the Array method?<br>No worries, just press these keys freely!<br>If the code of any character is entered, it will turn into the character 🤩`,
      fr: `Première fois que vous entendez parler de la méthode Tableau ?<br>Aucun souci, appuyez librement sur ces touches !<br>Si le code d'un caractère est entré, il se transformera en caractère 🤩`,
    },
    description2: {
      tw: `不用下載行列輸入法就能直接體驗行列輸入法，並且支援超過兩萬八千字的輸入<span class="game-comment">*</span>！<br>另外，透過觸發一連串的按鍵可以獲得彩蛋，總共有十顆彩蛋等您來收集！`,
      en: `Experience the Array input method without installing it, with over 28,000 characters supported<span class="game-comment">*</span>!<br>By the way, there are a total of 10 Easter eggs waiting to be collected!`,
      fr: `Faites l'expérience de la méthode de saisie Tableau sans l'installer, avec plus de 28 000 caractères supportés<span class="game-comment">*</span> !<br>Par ailleurs, il y a au total 10 œufs de Pâques qui vous attendent !`
    },
    mouseKeyboard: {
      tw: '註：此虛擬行列鍵盤除了可用滑鼠點擊，也可使用實際鍵盤操控。',
      en: 'Note: You can type on this Array virtual keyboard with a mouse or by a physical keyboard.',
      fr: 'NB : Vous pouvez taper sur ce clavier Tableau virtuel avec une souris ou un clavier physique.',
    },
    comment: {
      tw: '* 重碼自動選取重碼位 1 的字，所以不支援重碼位 2 以後的字，除此限制外支援到中日韓統一表意文字 A 區，共計超過兩萬八千字。支援簡碼、特別碼。無符號列表功能。',
      en: '* In this game, when a coincident code is entered, it turns into the character of coincidence rank 1, and therefore characters having only codes of coincidence rank greater than or equal to 2 are not supported. Except for this limitation, all the characters in the CJK Unified Ideographs and Extension A are supported, making a total of more than 28,000 characters. Short codes and special codes are also supported, but symbol lists are not.',
      fr: "* Dans ce jeu, lorsqu'un code coïncident est entré, il se transforme en caractère de rang de coïncidence 1, et par conséquent les caractères n'ayant que des codes de rang de coïncidence supérieur ou égal à 2 ne sont pas supportés. À part cette limitation, tous les caractères dans les sinogrammes unifiés CJC et dans le supplément A sont supportés, ce qui fait au total plus de 28 000 caractères. Les codes courts et les codes spéciaux sont également supportés, mais les listes de symboles ne sont pas.",
    },
    eggHuntTitle: { tw: '尋找彩蛋', en: 'Easter egg hunt', fr: 'Chasse aux œufs' },
    hint: {
      title: { tw: '提示', en: 'Hint', fr: 'Indice' },
      backlight1: {
        tw: '這十顆彩蛋包含五顆按鍵背光顏色彩蛋，所以跟顏色有些關係…',
        en: 'Among the 10 eggs, there are 5 backlighting Easter eggs, so they have something to do with colours...',
        fr: 'Parmi les 10 œufs, il y a 5 œufs de rétro-éclairage, ils ont donc quelque chose à voir avec la couleur...'
      },
      backlight2: {
        tw: '我發誓我已經試過了，我需要提示！',
        en: "I swear I've tried, I need another hint!",
        fr: "Je jure que j'ai essayé, j'ai besoin d'un autre indice !"
      },
      backlight3: {
        tw: '按下顏色中文或英文或法文名稱的鍵位，有中的話背光顏色就會切換（例如「綠色」）',
        en: "Type the colour name in Chinese, English or French. If it's an Easter egg, the backlight colour changes ('green' for example).",
        fr: "Tapez le nom de couleur en chinois, en anglais ou en français. Si c'est un œuf de Pâques, la couleur de rétroéclairage change ( « vert » par exemple)."
      },
      mysteriousMode1: {
        tw: '除了五顆背光顏色彩蛋外，還有四顆彩蛋對應到四種不同神秘模式，剩下最後一顆則是特別彩蛋',
        en: 'Besides the 5 backlighting Easter eggs, there are 4 eggs corresponding to four mysterious modes. And lastly, there is a special egg.',
        fr: "A part les 5 œufs de rétro-éclairage, il y a 4 œufs de Pâques qui correspondent à quatre modes mystérieux. Et enfin, il y a un œuf de Pâques spécial.",
      },
      mysteriousMode2: {
        tw: '神秘模式提示',
        en: 'Hint for mysterious mode eggs',
        fr: 'Indice pour les œufs du mode mystérieux',
      },
      mysteriousMode3: {
        tw: '四種不同神秘模式要用神秘但不難的方法進入，或是按下神秘模式中文或英文或法文名稱的鍵位也可以...',
        en: 'The 4 mysterious modes can be entered in a mysterious but not difficult way, or by typing the name of the mysterious mode in Chinese, English or French.',
        fr: 'Les 4 modes mystérieux peuvent être accédés par une méthode mystérieuse mais pas difficile, ou par taper le nom du mode en chinois, en anglais ou en français.',
      },
      mysteriousMode4: {
        tw: '我自願放棄找神秘模式彩蛋的樂趣，FISH UP 請給我提示吧！',
        en: 'I voluntarily give up the fun of finding mysterious mode eggs. FISH UP, please give me hints!',
        fr: 'Je renonce volontairement au plaisir de trouver les œufs du mode mystérieux. FISH UP, donnez-moi des indices SVP !',
      },
      mysteriousMode5: {
        tw: `除了空白鍵那一排，行列鍵盤剛好有 4 排，從左至右有 10 顆<br>而神秘模式有 4 種... 是巧合嗎？我不這麼認為。`,
        en: `Except for the row of the space bar, the Array keyboard has exactly 4 rows.<br> And there are 4 mysterious modes... Coincidence? I don't think so.`,
        fr: `Sans compter la rangée de la barre d'espace, le clavier Tableau contient exactement 4 rangées.<br>Et il y a 4 modes mystérieux... Coïncidence ? Je ne pense pas.`,
      },
      special1: {
        tw: '您只剩下特別彩蛋沒找到了！',
        en: 'You only have the special egg left to find!',
        fr: "Il ne vous reste plus que l'œuf spécial à trouver !",
      },
      special2: {
        tw: '特別彩蛋提示',
        en: 'Hint for the special egg',
        fr: "Indice pour l'œuf spécial",
      },
      special3: {
        tw: '這網站誰寫的？（或這網站主題是什麼？）',
        en: 'Who wrote this website? Or what is this website about?',
        fr: "Qui a écrit ce site ? Ou de quoi s'agit-il ?",
      },
    },
    congrats: {
      modalTitle: { tw: '🎉 恭喜呀 🥳', en: "🎉Congratulations 🥳", fr: "🎉Félicitations 🥳" },
      modalSubtitle: { tw: '您搜集到了所有彩蛋！', en: "You've collected all the Easter eggs !", fr: "Vous avez trouvé tous les œufs de Pâques !" },
      modalReward: { tw: '獎勵：您在搜集箱底部獲得了所有其他指令！', en: "REWARD: You've got all the other commands at the bottom of the collection box!", fr: "RÉCOMPENSE : Vous avez obtenu toutes les autres commandes au bas de la fenêtre d'instructions !" },
      modalShare: {
        tw: '- 喜歡這個小遊戲的話，請踴躍分享給所有身邊的親朋好友 -',
        en: '- If you like this game, please share it with your friends -',
        fr: '- Si vous aimez ce jeu, partagez-le avec vos amis -'
      },
      title: { tw: '恭喜您搜集到了所有彩蛋！', en: "Wow! You've collected all the Easter eggs!", fr: "Ouah ! Vous avez trouvé tous les œufs de Pâques !" },
      reward: {
        tw: `獎勵：您在下方獲得了所有其他指令！`,
        en: `REWARD: You've got all the other commands below!`,
        fr: `RÉCOMPENSE : Vous avez obtenu toutes les autres commandes ci-dessous !`
      },
      unlock: {
        tw: `您下次可以透過按下行列（或注音、拼音）輸入法中「<span class="cmd">解鎖</span>」兩字的鍵位、或英文字 '<span class="cmd">unlock</span>'、或法文字 « <span class="cmd">déverrouiller</span> »（無尖音符也可）來快速解鎖所有彩蛋以及下方所有內容 😉`,
        en: `Next time you can quickly unlock all the eggs and all the content below by typing the Chinese word '<span class="cmd">解鎖</span>' with the Array input method (or Bopomofo, or Pinyin), or the English word '<span class="cmd">unlock</span>', or the French word '<span class="cmd">déverrouiller</span>' (ok without the acute accent) 😉`,
        fr: `La prochaine fois, vous pouvez débloquer rapidement tous les œufs et tout le contenu ci-dessous en tapant le mot chinois « <span class="cmd">解鎖</span> » avec la méthode Tableau (ou Bopomofo, ou Pinyin), ou le mot anglais « <span class="cmd">unlock</span> », ou le mot français « <span class="cmd">déverrouiller</span> » 😉`
      }
    },
    allOtherCommands: {
      title: { tw: '所有其他樣式', en: 'All other styles', fr: 'Tous les autres styles' },
      par1: {
        tw: `已有超過 500 種樣式組合！<br>記得時常回來玩，不定期會增加酷炫的功能 😁`,
        en: `Over 500 style combinations already available!<br>Don't forget to come back often to see what new styles are added 😁`,
        fr: `Plus de 500 combinaisons de styles déjà disponibles !<br>N'oubliez pas de revenir régulièrement pour voir quels nouveaux styles sont ajoutés 😁`
      },
      par2: {
        tw: `您可以使用 <a href="dictionary.html" target="_blank" class="my_link"><i class="fa fa-external-link" aria-hidden="true"></i> FISH UP 行列編碼</a> 查詢任何字的行列編碼！<br>例如查詢結果中有標籤 <span class="keycap title-normal">普</span> 的那一行就是「普通編碼」`,
        en: `You can use <a href="dictionary.html" target="_blank" class="my_link"><i class="fa fa-external-link" aria-hidden="true"></i> FISH UP Dictionary of Array</a> to look up the Array code of any character! For example, results with label <span class="keycap title-normal">普</span> are 'standard codes'.`,
        fr: `Vous pouvez utiliser <a href="dictionary.html" target="_blank" class="my_link"><i class="fa fa-external-link" aria-hidden="true"></i> Dictionnaire FISH UP de Tableau</a> pour trouver le code Tableau de tous les caractères ! Par exemple, les résultats avec l'étiquette <span class="keycap title-normal">普</span> sont des « codes standard ».`
      },
      par3: {
        tw: `最後，喜歡這個小遊戲或這個網站的話，請不要客氣踴躍分享給身邊的親朋好友！<br>希望讓越來越多人認識行列輸入法 🥰`,
        en: `Lastly, if you like this game or this site, please share with your friends and family 😍`,
        // <br>Hoping that more and more people will know the Array input method 🥰
        fr: `Enfin, si vous aimez ce jeu ou ce site, partagez-le avec vos amis et votre famille 😍`
        // <br>Espérons que de plus en plus de personnes connaîtront la méthode de saisie Tableau 🥰
      },
    },
    otherPressedKeyStyle: { tw: '按鍵按下樣式', en: 'Pressed key styles', fr: 'Styles des touches pressées' },
    noPageJump: {
      tw: "使用下列任一樣式時，點擊虛擬行列鍵盤的底排按鍵，頁面不會跳轉",
      en: "When you're using any of the following styles, clicking keys from the last row of the virtual Array keyboard will not trigger page jump.",
      fr: "Lorsque vous utilisez l'un des styles suivants, le fait de cliquer sur les touches de la dernière rangée du clavier virtuel de Tableau ne déclenchera pas de saut de page."
    },
    styleWholeKeyboard: { tw: '全鍵盤樣式', en: 'Keyboard styles', fr: 'Styles du clavier' },
  },
  array: { tw: '行列輸入法', en: 'Array', fr: 'Tableau' },
  bestIME: { tw: '最優秀的中文輸入法', en: 'Best Chinese input method', fr: 'La meilleure méthode de saisie du chinois' },
  arrayDescription: {
    par1: {
      tw: `行列，或稱行列 30，是一套免費授權、具有開放理念的字根式中文輸入法，為倚天資訊共同創辦人<a href="https://zh.wikipedia.org/zh-tw/%E8%A1%8C%E5%88%97%E8%BC%B8%E5%85%A5%E6%B3%95" target="_blank" class="w3-hover-text-red" title="行列輸入法維基頁面">廖明德</a>先生所發明。不僅能輸入繁體中文和簡體中文，亦可輸入 Unicode 當中的中日韓統一表意文字，總數超過 7 萬字。`,
      en: `Array, also known as Array 30, is a free of license, open source, shape-based Chinese input method invented by Mingde Liao (廖明德). Available on all platforms and built-in in Windows, the Array input method supports not only traditional and simplified Chinese characters, but all CJK (Chinese, Japanese, and Korean) Unified Ideographs (or CJK characters) until CJK Unified Ideographs Extension F, totaling over 70,000 characters.`,
      fr: `Tableau, aussi appelé Tableau 30, est une méthode de saisie graphique du chinois inventée par Mingde Liao (廖明德), open source et libre de licence. Disponible sur toutes les plateformes et intégrée à Windows, la méthode de saisie Tableau permet de saisir non seulement les caractères chinois traditionnels et simplifiés, mais tous les sinogrammes unifiés CJC (caractères CJC « chinois, japonais et coréens ») jusqu'aux sinogrammes unifiés CJC supplément F, soit un total de plus de 70 000 caractères.`,
    },
    par2: {
      tw: `行列輸入法使用科學的方法分配字根，學習容易並輸入快速。行列輸入法是字根輸入法中最容易學習的輸入法之一，並且行列輸入法為免費中文輸入法中輸入最快的，最高紀錄達每分鐘 215.5 字。`,
      en: `The Array method uses scientifically and logically designed radicals to input Chinese characters, which makes it easy to learn and allows users to type efficiently. In fact, Array is one of the easiest shape-based input method to learn, and it is THE FASTEST Chinese input method among all free Chinese input methods, with a record of 215.5 characters per minute.`,
      fr: `La méthode Tableau utilise les radicaux scientifiquement et logiquement conçus pour entrer les caractères chinois, ce qui fait qu'elle est facile à apprendre et permet aux utilisateurs de taper efficacement. En fait c'est l'une des méthode graphiques les plus faciles à apprendre et LA PLUS RAPIDE parmi toutes les méthodes de saisie chinoises libres, avec un record de 215,5 caractères par minute.`,
    },
    par3: {
      tw: `行列輸入法因為免費授權並且開源，使得各開發者能夠持續維護行列、並讓行列更臻完善。此外，行列輸入法有<a href="https://www.facebook.com/groups/517104371955479/" target="_blank" class="w3-hover-text-red" title="行列社群頁面">活躍且友善的社群</a>，有疑惑或想法都能夠在社群中提出。`,
      en: `As it is free of license and open source, Array is continuously maintained and improved by developers and users. Furthermore, Array has <a href="https://www.facebook.com/groups/517104371955479/" target="_blank" class="w3-hover-text-red" title="Array community">an active and friendly community</a>, where all questions are welcome.`,
      fr: `Comme il est open source et libre de licence, Tableau est continuellement maintenu et amélioré par les développeurs et les utilisateurs. De plus, Tableau possède <a href="https://www.facebook.com/groups/517104371955479/" target="_blank" class="w3-hover-text-red" title="communauté Tableau">une communauté active et accueillante</a> où toutes les questions sont les bienvenues.`,
    },
  },
  callToAction: {
    onTheComputer: {
      tw: '電腦版的首頁有很讚的行列互動小遊戲，用電腦時記得回來首頁玩！',
      en: "This home page has an AWESOME Array interactive game for PC, so come back here when you're on the computer!",
      fr: "Cette page d'accueil propose un SUPERBE jeu interactif de la méthode Tableau pour PC, alors revenez ici quand vous êtes sur l'ordinateur !"
    },
    actNow: { tw: '心動不如馬上行動', en: 'What are you waiting for?', fr: "Qu'attendez-vous encore ?" },
    community: { tw: '加入行列社群', en: 'Join Array community', fr: 'Rejoigndre la communauté Tableau' },
    dontKnowArray: { tw: '還不認識中文最快的免費輸入法？', en: "Don't know the fastest free Chinese input method yet?", fr: "Vous ne connaissez pas encore la méthode de saisie du chinois gratuite la plus rapide ?" },
    learnMore: { tw: '馬上認識行列', en: 'Learn more about Array', fr: 'En savoir plus sur Tableau' },
    startTutorial: { tw: '點我開始行列教學', en: 'Start Array tutorial', fr: 'Commencer le tutoriel Tableau' },
    popularFeatures: { tw: '使用本站熱門功能', en: 'Popular features of this webiste', fr: 'Fonctionnalités populaires du site' },
    dictionary: { tw: '查碼去', en: 'Array Dictionary', fr: 'Dictionnaire Tableau' },
    typing: { tw: '打字去', en: 'Typing practice', fr: 'Exercices de saisie' },
  },
  cpm: { tw: '每分鐘字最高紀錄', en: 'Fastest typing speed (CPM)', fr: "Vitesse de saisie la plus rapide (CPM)" },
  cost: { tw: '安裝與學習花費', en: 'Installation and learning costs', fr: "Coûts d'installation et d'apprentissage" },
  numberCharacters: { tw: '支援中文字數量', en: 'Supported characters', fr: "Caractères supportés" },
  averageKeystroke: { tw: '平均取碼數', en: 'Average keystrokes per character', fr: "Touches par caractère en moyenne" },
  dictionary: {
    title: { tw: 'FISH UP 行列查碼', en: 'FISH UP Dictionary of Array', fr: 'Dictionnaire FISH UP de Tableau' },
    description: {
      tw: '最好用的行列輸入法查碼',
      en: 'Simply the best Array Dictionary',
      fr: 'Le meilleur dictionnaire de Tableau'
    },
    imgPath: { tw: '/img/array-dictionary.png', en: '/img/array-dictionary-en.png', fr: '/img/array-dictionary-fr.png' }
  },
  shareOn: { tw: '分享：', en: 'Share on:', fr: 'Partagez sur : ' },
  contactMe: {
    tw: `有任何問題可以到本站的 <a href="https://www.facebook.com/FISH-UP-%E8%A1%8C%E5%88%97%E6%9F%A5%E7%A2%BC-106035361278242/" target="_blank">Facebook 粉絲專頁</a>私訊或留言，也可以寫信至 <a href="mailto:misterfishup@gmail.com" target="_blank">misterfishup@gmail.com</a> 😉。如果您覺得本網站對您很有幫助，可以<a href="https://www.buymeacoffee.com/misterfishup" target="_blank" title='♫ 請我吃蛋糕 ♫'>給 FISH UP 買個蛋糕</a>來支持他 🥰！（臺灣的朋友請使用<a href="https://p.ecpay.com.tw/868A37D" target="_blank" title="支持 FISH UP 行列查碼去！">此連結</a>，因為臺灣目前不支援 Buy me a cake）`,
    en: `Got any questions? Send a message to the <a href="https://www.facebook.com/FISH-UP-%E8%A1%8C%E5%88%97%E6%9F%A5%E7%A2%BC-106035361278242/" target="_blank">Facebook fan page</a> of FISH UP Dictionary of Array, or write to <a href="mailto:misterfishup@gmail.com" target="_blank">misterfishup@gmail.com</a> 😉. If you enjoy this website, you can support FISH UP by <a href="https://www.buymeacoffee.com/misterfishup" target="_blank" title='♫ Buy me a cake ♫'>buying him a cake</a> 🥰 (If you're from Taiwan, please use <a href="https://p.ecpay.com.tw/868A37D" target="_blank" title="Support FISH UP Dictionary of Array!">this link</a>, since Buy me a cake is not yet available in Taiwan).`,
    fr: `Des questions ? Envoyez un message à <a href="https://www.facebook.com/FISH-UP-%E8%A1%8C%E5%88%97%E6%9F%A5%E7%A2%BC-106035361278242/" target="_blank">la page fan Facebook</a> de Dictionnaire FISH UP de Tableau, ou écrivez à <a href="mailto:misterfishup@gmail.com" target="_blank">misterfishup@gmail.com</a> 😉. Si vous aimez ce site, vous pouvez <a href="https://www.buymeacoffee.com/misterfishup" target="_blank" title='♫ Achetez-moi un gâteau ♫'>soutenir FISH UP en lui achetant un gâteau</a> 🥰 (utilisez <a href="https://p.ecpay.com.tw/868A37D" target="_blank" title="Soutenez Dictionnaire FISH UP de Tableau !">ce lien</a> si vous êtes de Taïwan, car Buy me a cake n'y est pas encore disponible).`
  },
  buyMeACake: { tw: '♫ 請我吃蛋糕 ♫', en: '♫ Buy me a cake ♫', fr: '♫ Achetez-moi un gâteau ♫' }
};
