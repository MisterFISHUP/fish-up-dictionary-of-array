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
      en: 'A mini-game that visualises Array via the virtual keyboard',
      fr: 'Un mini-jeu qui visualise Tableau via le clavier virtuel'
    },
    description1: {
      tw: `第一次聽到行列輸入法？您按鍵儘管隨便亂按<br>如果剛好鍵入了字的編碼，編碼就會變成字 🤩`,
      en: `First time you hear about the Array method?<br>No worries, just press these keys freely!<br>If the code of any character is entered, it will turn into the character 🤩`,
      fr: `Première fois que vous entendez parler de la méthode Tableau ?<br>Aucun souci, appuyez librement sur ces touches !<br>Si le code d'un caractère est entré, il se transformera en caractère 🤩`,
    },
    description2: {
      tw: `不用下載行列輸入法就能直接體驗行列輸入法，並且支援超過兩萬八千字的輸入<span class="class='game-comment">*</span>！<br>另外，透過觸發一連串的按鍵可以獲得彩蛋，總共有十顆彩蛋等您來收集！`,
      en: `Experience the Array input method without installing it, with over 28,000 characters supported<span class="class='game-comment">*</span>!<br>By the way, there are a total of 10 Easter eggs waiting to be collected!`,
      fr: `Faites l'expérience de la méthode de saisie Tableau sans l'installer, avec plus de 28 000 caractères supportés<span class="class='game-comment">*</span> !<br>Par ailleurs, il y a au total 10 œufs de Pâques qui vous attendent !`
    },
    nb: {
      tw: '註：此虛擬行列鍵盤除了可用滑鼠點擊，也可使用實際鍵盤操控。',
      en: 'Note: You can type on this Array virtual keyboard with a mouse or by a physical keyboard.',
      fr: 'NB : Vous pouvez taper sur ce clavier Tableau virtuel avec une souris ou un clavier physique.',
    },
    comment: {
      tw: '* 重碼自動選取重碼位 1 的字，所以不支援重碼位 2 以後的字，除此限制外支援到中日韓統一表意文字 A 區，共計超過兩萬八千字。支援簡碼、特別碼。無符號列表功能。',
      en: '*In this mini-game, when a coincident code is entered, it turns into the character of coincidence rank 1, and therefore characters having only codes of coincidence rank greater than or equal to 2 are not supported. Except for this limitation, all the characters in the CJK Unified Ideographs and Extension A are supported, making a total of more than 28,000 characters. Short codes and special codes are also supported, but symbol lists are not.',
      fr: "* Dans ce mini-jeu, lorsqu'un code coïncident est entré, il se transforme en caractère de rang de coïncidence 1, et par conséquent les caractères n'ayant que des codes de rang de coïncidence supérieur ou égal à 2 ne sont pas supportés. À part cette limitation, tous les caractères dans les sinogrammes unifiés CJC et dans le supplément A sont supportés, ce qui fait au total plus de 28 000 caractères. Les codes courts et les codes spéciaux sont également supportés, mais les listes de symboles ne sont pas.",
    },
    eggHunt: { tw: '尋找彩蛋', en: 'Easter egg hunt', fr: 'Chasse aux œufs' },
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
        en: "Type the colour name in Chinese, English or French. If it's an Easter egg, the backlight colour changes. ('green' for example)",
        fr: "Tapez le nom de couleur en chinois, en anglais ou en français. Si c'est un œuf de Pâques, la couleur de rétroéclairage change. ( « vert » par exemple)"
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
      title: { tw: '恭喜您搜集到了所有彩蛋', en: "Wow! You've collected all the Easter eggs!", fr: "Félicitations ! Vous avez trouvé tous les œufs de Pâques" },
      reward: { tw: '獎勵：您在下方獲得了所有其他指令！', en: "REWARD: You've got all the other commands below!", fr: "RÉCOMPENSE : Vous avez obtenu toutes les autres commandes ci-dessous !" },
    },
    styleName: {
      defaultPink: { tw: '粉紅色背光（預設）', en: 'Pink backlight (default)', fr: 'Rétro-éclairage rose (par défaut)' },
      defaultYellow: { tw: '黃色背光', en: 'Yellow backlight', fr: 'Rétro-éclairage jaune' },
      defaultGreen: { tw: '綠色背光', en: 'Green backlight', fr: 'Rétro-éclairage vert' },
      defaultBlue: { tw: '藍色背光', en: 'Blue backlight', fr: 'Rétro-éclairage bleu' },
      defaultPurple: { tw: '紫色背光', en: 'Purple backlight', fr: 'Rétro-éclairage violet' },
      defaultWhite: { tw: '全白', en: 'All white', fr: 'Tout blanc' },
      hiddenNone: { tw: '消失/隱藏', en: 'Disappeared/hidden', fr: 'Disparu/caché' },
      defaultFlashing: { tw: '閃爍', en: 'Flashing', fr: 'Clignotant' },
      blurredNone: { tw: '模糊', en: 'Blurred', fr: 'Flou' },
      arraySpecialWhite: { tw: '特別彩蛋', en: 'Special Easter Egg', fr: 'Œuf de Pâques spécial' },
      defaultBrightRed: { tw: '亮紅色背光', en: 'Bright red backlight', fr: 'Rétro-éclairage rouge vif' },
      sakuraPink: { tw: '櫻花', en: 'Sakura', fr: 'Fleur de cerisier' },
      bananaYellow: { tw: '香蕉', en: 'Banana', fr: 'Banane' },
      turtleGreen: { tw: '烏龜', en: 'Turtle', fr: 'Tortue' },
      alienGreen: { tw: '外星人', en: 'Alien', fr: 'Extraterrestre' },
    },
    styleDescription: {
      defaultPink: {
        tw: "無失誤地按下行列（或注音、拼音）輸入法中「粉紅色」三字或「粉色」兩字的鍵位、無失誤地按下英文字 'pink' 的鍵位、無失誤地按下法文字 « rose » 的鍵位",
        en: "Type the Chinese word '粉紅色' or '粉紅' with the Array input method (or Bopomofo, or Pinyin) without mistakes; type the English word 'pink' without mistakes; type the French word 'rose' without mistakes",
        fr: "Tapez le mot chinois « 粉紅色 » ou « 粉色 » avec la méthode Tableau (ou Bopomofo, ou Pinyin) sans erreurs ; tapez le mot anglais « pink » sans erreurs ; tapez le mot français « rose » sans erreurs"
      },
      defaultYellow: {
        tw: "無失誤地按下行列（或注音、拼音）輸入法中「黃色」兩字的鍵位、無失誤地按下英文字 'yellow' 的鍵位、無失誤地按下法文字 « jaune » 的鍵位",
        en: "Type the Chinese word '黃色' with the Array input method (or Bopomofo, or Pinyin) without mistakes; type the English word 'yellow' without mistakes; type the French word 'jaune' without mistakes",
        fr: "Tapez le mot chinois « 黃色 » avec la méthode Tableau (ou Bopomofo, ou Pinyin) sans erreurs ; tapez le mot anglais « yellow » sans erreurs ; tapez le mot français « jaune » sans erreurs"
      },
      defaultGreen: {
        tw: "無失誤地按下行列（或注音、拼音）輸入法中「綠色」兩字的鍵位、無失誤地按下英文字 'green' 的鍵位、無失誤地按下法文字 « vert » 的鍵位",
        en: "Type the Chinese word '綠色' with the Array input method (or Bopomofo, or Pinyin) without mistakes; type the English word 'green' without mistakes; type the French word 'vert' without mistakes",
        fr: "Tapez le mot chinois « 綠色 » avec la méthode Tableau (ou Bopomofo, ou Pinyin) sans erreurs ; tapez le mot anglais « green » sans erreurs ; tapez le mot français « vert » sans erreurs"
      },
      defaultBlue: {
        tw: "無失誤地按下行列（或注音、拼音）輸入法中「藍色」兩字的鍵位、無失誤地按下英文字 'blue' 的鍵位、無失誤地按下法文字 « bleu » 的鍵位",
        en: "Type the Chinese word '藍色' with the Array input method (or Bopomofo, or Pinyin) without mistakes; type the English word 'blue' without mistakes; type the French word 'bleu' without mistakes",
        fr: "Tapez le mot chinois « 藍色 » avec la méthode Tableau (ou Bopomofo, ou Pinyin) sans erreurs ; tapez le mot anglais « blue » sans erreurs ; tapez le mot français « bleu » sans erreurs"
      },
      defaultPurple: {
        tw: "無失誤地按下行列（或注音、拼音）輸入法中「紫色」兩字的鍵位、無失誤地按下英文字 'purple' 的鍵位、無失誤地按下法文字 « violet » 的鍵位",
        en: "Type the Chinese word '紫色' with the Array input method (or Bopomofo, or Pinyin) without mistakes; type the English word 'purple' without mistakes; type the French word 'violet' without mistakes",
        fr: "Tapez le mot chinois « 紫色 » avec la méthode Tableau (ou Bopomofo, ou Pinyin) sans erreurs ; tapez le mot anglais « purple » sans erreurs ; tapez le mot français « violet » sans erreurs"
      },
      defaultWhiteLI1: {
        tw: "照順序按下數字鍵 1234567890（若順序顛倒地按下則恢復預設狀態）",
        en: "Press the number keys 1234567890 in order (and in reverse order to return to the default state)",
        fr: "Appuyez sur les touches de chiffre 1234567890 dans l'ordre (et dans l'ordre inverse pour revenir à l'état par défaut)"
      },
      defaultWhiteLI2: {
        tw: "無失誤地按下行列（或注音、拼音）輸入法中「全白」兩字的鍵位、無失誤地按下英文字 'all white' 的鍵位、無失誤地按下法文字 « tout blanc »（或 « toute blanche »）的鍵位",
        en: "Type the Chinese word '全白' with the Array input method (or Bopomofo, or Pinyin) without mistakes; type the English words 'all white' without mistakes; type the French words 'tout blanc' (or 'toute blanche') without mistakes",
        fr: "Tapez le mot chinois « 全白 » avec la méthode Tableau (ou Bopomofo, ou Pinyin) sans erreurs ; tapez les mots anglais « all white » sans erreurs ; tapez les mots français « tout blanc » (ou « toute blanche ») sans erreurs"
      },
      hiddenNoneLI1: {
        tw: "照順序按下行列 30 鍵 1 上到 0 上這十顆鍵，即英文鍵 qwertyuiop（若順序顛倒地按下則恢復預設狀態）",
        en: "Press the 10 Array keys '1 top', '2 top', ..., '0 top' in order, i.e., the English keys qwertyuiop (and in reverse order to return to the default state)",
        fr: "Appuyez sur les 10 touches Tableau « 1 haut », « 2 haut », ..., « 0 haut » dans l'ordre, c'est-à-dire les touches azertyuiop (et dans l'ordre inverse pour revenir à l'état par défaut)"
      },
      hiddenNoneLI2: {
        tw: "無失誤地按下行列（或注音、拼音）輸入法中「消失」或「隱藏」兩字的鍵位（「顯示」兩字則恢復預設狀態）、無失誤地按下英文字 'disappearing' 或 'disappeared' 或 'hidden' 的鍵位（'showing' 則恢復預設狀態）、無失誤地按下法文字 « disparu » 或 « caché »（無尖音符也可）的鍵位（« montré »（無尖音符也可）則恢復預設狀態）",
        en: "Type the Chinese word '消失' or '隱藏' with the Array input method (or Bopomofo, or Pinyin) without mistakes (and '顯示' to return to the default state); type the English word 'disappearing' or 'disappeared' or 'hidden' without mistakes (and 'showing' to return to the default state); type the French word 'disparu' or 'caché' (ok without the acute accent) without mistakes (and 'montré' (ok without the acute accent) to return to the default state)",
        fr: "Tapez le mot chinois « 消失 » ou « 隱藏 » avec la méthode Tableau (ou Bopomofo, ou Pinyin) sans erreurs (et « 顯示 » pour revenir à l'état par défaut) ; tapez le mot anglais « disappearing » ou « disappeared » ou « hidden » sans erreurs (et « showing » pour revenir à l'état par défaut) ; tapez le mot français « disparu » ou « caché » sans erreurs (et « montré » pour revenir à l'état par défaut)"
      },
      defaultFlashingLI1: {
        tw: "照順序按下行列 30 鍵 1 中到 0 中這十顆鍵，即英文鍵 asdfghjkl;（若順序顛倒地按則恢復預設狀態）",
        en: "Press the 10 Array keys '1 middle', '2 middle', ..., '0 middle' in order, i.e., the English keys asdfghjkl; (and in reverse order to return to the default state)",
        fr: "Appuyez sur les 10 touches Tableau « 1 milieu », « 2 milieu », ..., « 0 milieu » dans l'ordre, c'est-à-dire les touches qsdfghjklm (et dans l'ordre inverse pour revenir à l'état par défaut)"
      },
      defaultFlashingLI2: {
        tw: "無失誤地按下行列（或注音、拼音）輸入法中「閃爍」兩字的鍵位、無失誤地按下英文字 'flashing' 的鍵位、無失誤地按下法文字 « clignotant » 的鍵位",
        en: "Type the Chinese word '閃爍' with the Array input method (or Bopomofo, or Pinyin) without mistakes; type the English word 'flashing' without mistakes; type the French word 'clignotant' without mistakes",
        fr: "Tapez le mot chinois « 閃爍 » avec la méthode Tableau (ou Bopomofo, ou Pinyin) sans erreurs ; tapez le mot anglais « flashing » sans erreurs ; tapez le mot français « clignotant » sans erreurs"
      },
      blurredNoneLI1: {
        tw: "照順序按下行列 30 鍵 1 下到 0 下這十顆鍵，即英文鍵 zxcvbnm,./（若順序顛倒地按則恢復預設狀態）",
        en: "Press the 10 Array keys '1 bottom', '2 bottom', ..., '0 bottom' in order, i.e., the English keys zxcvbnm,./ (and in reverse order to return to the default state)",
        fr: "Appuyez sur les 10 touches Tableau « 1 bas », « 2 bas », ..., « 0 bas » dans l'ordre, c'est-à-dire les touches wxcvbn,;:! (et dans l'ordre inverse pour revenir à l'état par défaut)"
      },
      blurredNoneLI2: {
        tw: "無失誤地按下行列（或注音、拼音）輸入法中「模糊」兩字或「馬賽克」三字的鍵位、無失誤地按下英文字 'blurred' 的鍵位、無失誤地按下法文字 « flou » 的鍵位",
        en: "Type the Chinese word '模糊' or '馬賽克' with the Array input method (or Bopomofo, or Pinyin) without mistakes; type the English word 'blurred' without mistakes; type the French word 'flou' without mistakes",
        fr: "Tapez le mot chinois « 模糊 » ou « 馬賽克 » avec la méthode Tableau (ou Bopomofo, ou Pinyin) sans erreurs ; tapez le mot anglais « blurred » sans erreurs ; tapez le mot français « flou » sans erreurs"
      },
      arraySpecialWhiteComment: {
        tw: "註：此時點擊虛擬行列鍵盤的底排按鍵，頁面不會跳轉（請按空白鍵看看！）",
        en: "Note: Clicking keys from the last row of the virtual Array keyboard will not trigger any page jumps in this mode. (Press the space bar to see a message for you!)",
        fr: "NB : Le fait de cliquer sur les touches de la dernière rangée du clavier virtuel de Tableau ne déclenchera pas de saut de page dans ce mode. (Appuyez sur la barre d'espace pour voir un message pour vous !)"
      },
      arraySpecialWhiteLI1: {
        tw: "無失誤地按下行列輸入法中「行列」兩字的鍵位、無失誤地按下英文字 'array' 的鍵位、無失誤地按下法文字 « tableau » 的鍵位",
        en: "Type the Chinese word '行列' with the Array input method without mistakes; type the English word 'array' without mistakes; type the French word 'tableau' without mistakes",
        fr: "Tapez le mot chinois « 行列 » avec la méthode Tableau sans erreurs ; tapez le mot anglais « array » sans erreurs ; tapez le mot français « tableau » sans erreurs"
      },
      arraySpecialWhiteLI2: {
        tw: "無失誤地按下英文字 'fish up' 的鍵位",
        en: "Type the English words 'fish up' without mistakes",
        fr: "Tapez les mots anglais « fish up » sans erreurs"
      },
      defaultBrightRed: {
        tw: "無失誤地按下行列輸入法中「亮紅色」三字的鍵位（限普通編碼）、無失誤地按下英文字 'bright red' 的鍵位、無失誤地按下法文字 « rouge vif » 的鍵位",
        en: "Type the Chinese word '亮紅色' with the Array input method (standard codes only) without mistakes; type the English words 'bright red' without mistakes; type the French words 'rouge vif' without mistakes",
        fr: "Tapez le mot chinois « 亮紅色 » avec la méthode Tableau (codes standard uniquement) sans erreurs ; tapez les mots anglais « bright red » sans erreurs ; tapez les mots français « rouge vif » sans erreurs"
      },
      sakuraPink: {
        tw: "無失誤地按下行列輸入法中「櫻花」兩字的鍵位（限普通編碼）、無失誤地按下英文字 'sakura' 或 'cherry blossom' 的鍵位、無失誤地按下法文字 « fleur de cerisier » 的鍵位",
        en: "Type the Chinese word '櫻花' with the Array input method (standard codes only) without mistakes; type the English word 'sakura' or 'cherry blossom' without mistakes; type the French words 'fleur de cerisier' without mistakes",
        fr: "Tapez le mot chinois « 櫻花 » avec la méthode Tableau (codes standard uniquement) sans erreurs ; tapez le mot anglais « sakura » ou « cherry blossom » sans erreurs ; tapez les mots français « fleur de cerisier » sans erreurs"
      },
      bananaYellow: {
        tw: "無失誤地按下行列輸入法中「香蕉」兩字的鍵位（限普通編碼）、無失誤地按下英文字 'banana' 的鍵位、無失誤地按下法文字 « banane » 的鍵位",
        en: "Type the Chinese word '香蕉' with the Array input method (standard codes only) without mistakes; type the English word 'banana' without mistakes; type the French word 'banane' without mistakes",
        fr: "Tapez le mot chinois « 香蕉 » avec la méthode Tableau (codes standard uniquement) sans erreurs ; tapez le mot anglais « banana » sans erreurs ; tapez le mot français « banane » sans erreurs"
      },
      turtleGreen: {
        tw: "無失誤地按下行列輸入法中「烏龜」兩字的鍵位（限二級簡碼）、無失誤地按下英文字 'turtle' 的鍵位、無失誤地按下法文字 « tortue » 的鍵位",
        en: "Type the Chinese word '烏龜' with the Array input method (short codes II only) without mistakes; type the English word 'turtle' without mistakes; type the French word 'tortue' without mistakes",
        fr: "Tapez le mot chinois « 烏龜 » avec la méthode Tableau (codes courts II uniquement) sans erreurs ; tapez le mot anglais « turtle » sans erreurs ; tapez le mot français « tortue » sans erreurs"
      },
      alienGreen: {
        tw: "無失誤地按下行列輸入法中「外星人」三字的鍵位（限普通編碼）、無失誤地按下英文字 'alien' 的鍵位、無失誤地按下法文字 « extraterrestre » 的鍵位",
        en: "Type the Chinese word '外星人' with the Array input method (standard codes only) without mistakes; type the English word 'alien' without mistakes; type the French word 'extraterrestre' without mistakes",
        fr: "Tapez le mot chinois « 外星人 » avec la méthode Tableau (codes standard uniquement) sans erreurs; tapez le mot anglais « alien » sans erreurs ; tapez le mot français « extraterrestre » sans erreurs"
      },
    },
    allOtherCommands: {
      title: { tw: '所有其他樣式', en: 'All other styles', fr: 'Tous les autres styles' },
      par1: {
        tw: `剛推出所以只有少數其它樣式，未來會加上更多有趣的東西！<br>所以記得時常回來玩，可能會增加酷炫的功能 😉`,
        en: `This game has just come out, and there will be more and more interesting things to come.<br>So come back often to see what new features are added 😉`,
        fr: `Ce jeu vient de sortir, il y aura de plus en plus de choses intéressantes à venir.<br>Revenez donc régulièrement pour voir quelles sont les nouvelles fonctionnalités ajoutées 😉`
      },
      par2: {
        tw: `可以使用 <a href="dictionary.html" target="_blank" class="w3-hover-text-deep-orange"><i class="fa fa-external-link" aria-hidden="true"></i> FISH UP 行列編碼</a> 查詢任何字的行列編碼！<br>查詢結果中有標籤 <span class="keycap title-normal">普</span> 的那一行就是「普通編碼」`,
        en: `You can use <a href="dictionary.html" target="_blank" class="w3-hover-text-deep-orange"><i class="fa fa-external-link" aria-hidden="true"></i> FISH UP Dictionary of Array</a> to look up the Array code of any character!<br>The result starting with the label <span class="keycap title-normal">普</span> is the 'standard code'.`,
        fr: `Vous pouvez utiliser <a href="dictionary.html" target="_blank" class="w3-hover-text-deep-orange"><i class="fa fa-external-link" aria-hidden="true"></i> Dictionnaire FISH UP de Tableau</a> pour trouver le code Tableau de tous les caractères !<br>Le résultat avec l'étiquette <span class="keycap title-normal">普</span> est « le code standard ».`
      },
      par3: {
        tw: `最後，喜歡這個小遊戲或這個網站的話，請不要客氣踴躍分享給身邊的親朋好友！<br>希望讓越來越多人認識行列輸入法 🥰`,
        en: `Lastly, if you like this game or this site, please share with your friends and family!<br>Hoping that more and more people will know the Array input method 🥰`,
        fr: `Enfin, si vous aimez ce jeu ou ce site, partagez-le avec vos amis et votre famille !<br>Espérons que de plus en plus de personnes connaîtront la méthode de saisie Tableau 🥰`
      },
    },
    styleSingleKey: { tw: '單顆按鍵樣式', en: 'Key styles', fr: 'Styles pour les touches' },
    noPageJump: {
      tw: "進入下列任一模式時，點擊虛擬行列鍵盤的底排按鍵，頁面不會跳轉",
      en: "When you are in one of the following modes, clicking keys from the last row of the virtual Array keyboard will not trigger any page jumps.",
      fr: "Lorsque vous êtes dans l'un des modes suivants, le fait de cliquer sur les touches de la dernière rangée du clavier virtuel de Tableau ne déclenchera pas de saut de page."
    },
    styleWholeKeyboard: { tw: '全鍵盤樣式', en: 'Keyboard styles', fr: 'Styles pour le clavier' },
    styleWholeKeyboardComingSoon: { tw: '尚無樣式，敬請期待', en: 'Coming soon !', fr: 'À venir bientôt !' },
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
      fr: `La méthode Tableau utilise les radicaux scientifiquement et logiquement conçus pour entrer les caractères chinois, ce qui fait qu'elle est facile à apprendre et permet aux utilisateurs de taper efficacement. En fact, C'est l'une des méthode graphiques les plus faciles à apprendre et LA PLUS RAPIDE parmi toutes les méthodes de saisie chinoises libres, avec un record de 215,5 caractères par minute.`,
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
      en: "This home page has an awesome Array interactive game for PC, so come back here when you're on the computer!",
      fr: "Cette page d'accueil propose un superbe jeu interactif de la méthode Tableau pour PC, alors revenez ici quand vous êtes sur l'ordinateur !"
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
    tw: `有任何問題可以到本站的 <a href="https://www.facebook.com/FISH-UP-%E8%A1%8C%E5%88%97%E6%9F%A5%E7%A2%BC-106035361278242/" target="_blank">Facebook 粉絲專頁</a>私訊或留言，也可以寫信至 <a href="mailto:misterfishup@gmail.com" target="_blank">misterfishup@gmail.com</a> 😉。如果您覺得本網站對您很有幫助，可以<a href="https://www.buymeacoffee.com/misterfishup" target="_blank" title='♫ 請我吃蛋糕 ♫'>給 FISH UP 買個蛋糕</a>來支持他 🥰！（臺灣的朋友請使用<a href="https://p.ecpay.com.tw/4D901ED" target="_blank" title="支持 FISH UP 行列查碼去！">此連結</a>，因為臺灣目前不支援 Buy me a cake）`,
    en: `Got any questions? Send a message to the <a href="https://www.facebook.com/FISH-UP-%E8%A1%8C%E5%88%97%E6%9F%A5%E7%A2%BC-106035361278242/" target="_blank">Facebook fan page</a> of FISH UP Dictionary of Array, or write to <a href="mailto:misterfishup@gmail.com" target="_blank">misterfishup@gmail.com</a> 😉. If you enjoy this website, you can support FISH UP by <a href="https://www.buymeacoffee.com/misterfishup" target="_blank" title='♫ Buy me a cake ♫'>buying him a cake</a> 🥰 (If you're from Taiwan, please use <a href="https://p.ecpay.com.tw/4D901ED" target="_blank" title="Support FISH UP Dictionary of Array!">this link</a>, since Buy me a cake is not yet available in Taiwan).`,
    fr: `Des questions ? Envoyez un message à <a href="https://www.facebook.com/FISH-UP-%E8%A1%8C%E5%88%97%E6%9F%A5%E7%A2%BC-106035361278242/" target="_blank">la page fan Facebook</a> de Dictionnaire FISH UP de Tableau, ou écrivez à <a href="mailto:misterfishup@gmail.com" target="_blank">misterfishup@gmail.com</a> 😉. Si vous aimez ce site, vous pouvez <a href="https://www.buymeacoffee.com/misterfishup" target="_blank" title='♫ Achetez-moi un gâteau ♫'>soutenir FISH UP en lui achetant un gâteau</a> 🥰 (utilisez <a href="https://p.ecpay.com.tw/4D901ED" target="_blank" title="Soutenez Dictionnaire FISH UP de Tableau !">ce lien</a> si vous êtes de Taïwan, car Buy me a cake n'y est pas encore disponible).`
  },
  buyMeACake: { tw: '♫ 請我吃蛋糕 ♫', en: '♫ Buy me a cake ♫', fr: '♫ Achetez-moi un gâteau ♫' }
};
