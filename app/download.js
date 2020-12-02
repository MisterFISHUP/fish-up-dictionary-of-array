const stringPageName = document.getElementById('app').dataset.pageName;
const AppContent = {
  title: { tw: '下載', en: 'Download', fr: 'Téléchargements' },
  description: {
    tw: '免費下載各作業系統上的行列輸入法，以及字根表圖片、字符表與編碼表、字型',
    en: 'Download the Array input method for free, as well as Array radical table images, character tables, Array code tables and fonts',
    fr: 'Télécharger gratuitement la méthode de saisie Tableau, ainsi que des images du tableau des radicaux, des tables de caractères, des tables de codes Tableau et des polices'
  },
  forSpace: { tw: '', en: 'For ', fr: 'Pour ' },
  spaceOS: { tw: ' 作業系統', en: '', fr: '' },
  downloadArray: { tw: '下載行列', en: 'Download Array', fr: 'Télécharger Tableau' },
  windowsDescription: {
    tw: `Windows 作業系統有內建行列輸入法，但若電腦可以安裝軟體（例如個人電腦），建議下載<a href="#new-Array">新行列 30 輸入法</a>或是 <a href="#dime">DIME 行列</a>來使用。`,
    en: `The Array method is built-in in Windows. However, it is highly recommended to use <a href="#new-Array">New Array 30</a> (zh: 新行列 30) or <a href="#dime">DIME Array</a> (zh: DIME 行列) on Windows.`,
    fr: `La méthode Tableau est intégrée à Windows. Pourtant, il est fortement conseillé d'utiliser <a href="#new-Array">Nouveau Tableau 30</a> (zh: 新行列 30) ou <a href="#dime">DIME Tableau</a> (zh: DIME 行列) sous Windows.`
  },
  windowsBuiltIn: {
    title: { tw: 'Windows 內建的行列輸入法', en: 'The built-in Array method on Windows', fr: 'La méthode Tableau intégrée à Windows' },
    titleTOC: { tw: '內建', en: 'Built-in', fr: 'Intégré' },
    activation: {
      tw: `到設定 >> 時間與語言 >> 語言，點「中文(台灣)」（或是香港、澳門）>> 選項 >> 新增鍵盤，選擇「中文繁體行列 (version 6.0)」。這樣就可以使用 Windows 內建的行列輸入法了。`,
      en: `Go to Settings >> Times & Language >> Language, click on 'Add a preferred language' and add '中文(台灣)' (Chinese (Traditional, Taiwan)). Then click on 中文(台灣) that you've just added >> Options >> Add a keyboard, choose 'Chinese Traditional Array (version 6.0)', and you can now use the Windows built-in Array method.`,
      fr: `Allez dans Paramètres >> Heure et Langue >>
      Langue, cliquez sur « Ajouter une langue par défaut » et ajoutez « 中文(台灣) » (Chinois (traditionnel, Taïwan)). Ensuite cliquez sur 中文(台灣) que vous venez d'ajouter >> Options >> Ajouter un clavier, choisissez « Chinese Traditional Array (version 6.0) ». Vous pouvez désormais utiliser la méthode Tableau intégrée à Windows.`
    },
    defect: {
      tw: `內建的行列目前尚未完整支援中日韓統一表意文字擴充區 B，也就是遇到罕用字可能無法輸入。除此之外，目前內建行列的介面設計與使用體驗不甚理想（行列視窗常擋到文字、無法關閉聯想字詞），也沒有輸入法設定可以調整功能。`,
      en: `The Windows built-in Array method doesn't fully support CJK Extension B characters yet, which means that many rare characters can't be entered. Moreover, the interface design and user experience of the Windows built-in Array method is unsatisfactory (the input window often covers the text, no way to turn off word suggestions), and there are no settings to adjust anything.`,
      fr: `La méthode Tableau intégrée à Windows ne supporte pas encore entièrement tous les caractères CJC Supplément B, ce qui signifie que beaucoup de caractères rares ne peuvent pas être saisis. De plus, la conception d'interface et l'expérience utilisateur de la méthode Tableau intégrée à Windows ne sont pas idéales (la fenêtre de saisie couvre souvent le texte, impossible de désactiver les suggestions de mots), et il n'y a aucun réglage que l'on puisse modifier.`
    },
    conclusion: {
      tw: `簡單來說，系統內建的行列輸入法還算堪用，但除非您使用的電腦無法安裝軟體（例如公司電腦、公用電腦等），否則推薦使用<a href="#new-Array">新行列 30 輸入法</a>或是<a href="#dime">DIME 行列</a>：支援更多字元的輸入，更佳的使用體驗，更豐富的輸入法設定。`,
      en: `In short, the Windows built-in Array method works, but unless you can't install software on the computer (e.g. work computer, public computer, etc.), it is recommended to use <a href="#new-Array">New Array 30</a> or <a href="#dime">DIME Array</a>: larger character sets for entry, a better user experience, and more useful features.`,
      fr: `Bref, la méthode Tableau intégrée à Windows fonctionne, mais à moins que vous ne puissiez pas installer des logiciels sur l'ordinateur (par exemple ordinateur public, d'entreprise, etc.), il est recommandé d'utiliser <a href="#new-Array">Nouveau Tableau 30</a> ou <a href="#dime">DIME Tableau</a> : jeux de caractères plus larges, meilleure expérience utilisateur, et plus de fonctionnalités pratiques.`
    },
  },
  newArray: {
    title: { tw: '新行列 30', en: 'New Array 30', fr: 'Nouveau Tableau 30' },
    description: { tw: '新行列 30 輸入法是 Windows 系統上推薦使用的行列輸入法。', en: 'New Array 30 (zh: 新行列 30) is a recommended Array distribution on Windows.', fr: "Nouveau Tableau 30 (zh : 新行列 30) est une distribution Tableau recommandée sous Windows." },
    download: {
      title: { tw: '下載', en: 'Download', fr: 'Téléchargement' },
      link: {
        tw: `到<a href="https://onedrive.live.com/?authkey=%21AGytt1VDyVsZOJE&cid=9B28200600E81FDD&id=9B28200600E81FDD%21282843&parId=9B28200600E81FDD%21282833&action=locate" target="_blank">這裡</a>下載（或到作者於 PTT 的<a href="https://www.ptt.cc/bbs/Array/M.1554494219.A.F95.html" target="_blank">發文</a>，內含相同的下載連結）。`,
        en: `Download from <a href="https://onedrive.live.com/?authkey=%21AGytt1VDyVsZOJE&cid=9B28200600E81FDD&id=9B28200600E81FDD%21282843&parId=9B28200600E81FDD%21282833&action=locate" target="_blank">OneDrive</a> or from <a href="https://www.ptt.cc/bbs/Array/M.1554494219.A.F95.html" target="_blank">this post</a> on PTT which contains the same download link. (Note: This post is written in traditional Chinese by the developer of New Array 30 and PTT is sort of the Taiwanese Reddit.)`,
        fr: `Télécharger depuis <a href="https://onedrive.live.com/?authkey=%21AGytt1VDyVsZOJE&cid=9B28200600E81FDD&id=9B28200600E81FDD%21282843&parId=9B28200600E81FDD%21282833&action=locate" target="_blank">OneDrive</a> ou depuis <a href="https://www.ptt.cc/bbs/Array/M.1554494219.A.F95.html" target="_blank">ce post</a> sur PTT. (NB : Ce post est écrit en chinois traditionnel par le développeur de Nouveau Tableau 30, et PTT est en quelque sorte le Reddit taïwanais.).`
      },
    },
    installationAndActivation: {
      title: { tw: '安裝與啟用', en: 'Installation and activation', fr: 'Installation et activation' },
      installation: {
        tw: `下載並解壓縮後，<b>請先閱讀 readme.txt</b>。readme.txt 這份檔案裡面除了會說明安裝方式，還說明了新行列 30 輸入法的功能（相當值得一看）。看完 readme.txt 後，點擊 Install.exe 就可以安裝新行列 30 輸入法。`,
        en: `After downloading and unzipping the file, please read the readme.txt file first (if you can read Chinese...). This TXT file explains not only how to install New Array 30, but also all its functionalities (file well written so it's worth reading it). After reading the readme.txt file, click Install.exe to install New Array 30.`,
        fr: `Après avoir téléchargé et décompressé le fichier, veuillez lire d'abord le fichier readme.txt (si vous savez lire le chinois...). Ce fichier TXT explique non seulement comment installer Nouveau Tableau 30, mais aussi ses fonctionnalités (fichier bien écrit donc qui vaut la peine d'être lu). Après avoir lu le fichier readme.txt, cliquez Install.exe pour installer Nouveau Tableau 30.`
      },
      activation: {
        tw: '到設定 >> 時間與語言 >> 語言，點「中文(台灣)」（或是香港、澳門）>> 選項 >> 新增鍵盤，選擇「新行列 30 (版本 1.6)」。這樣就可以使用新行列 30 輸入法了。',
        en: "Go to Settings >> Times & Language >> Language, click on 'Add a preferred language' and add '中文(台灣)' (Chinese (Traditional, Taiwan)). Then click on 中文(台灣) that you've just added >> Options >> Add a keyboard, choose '新行列 30 (版本 1.6)' (New Array 30 (version 1.6)), and you can now use New Array 30.",
        fr: `Allez dans Paramètres >> Heure et Langue >> Langue, cliquez sur « Ajouter une langue par défaut » et ajoutez « 中文(台灣) » (Chinois (traditionnel, Taïwan)). Ensuite cliquez sur 中文(台灣) que vous venez d'ajouter >> Options >> Ajouter un clavier, choisissez « 新行列 30 (版本 1.6) » (Nouveau Tableau 30 (version 1.6)). Vous pouvez désormais utiliser Nouveau Tableau 30.`
      }
    },
    featuresAndSettings: {
      title: { tw: '功能與設定', en: 'Features and settings', fr: ' Fonctionnalités et paramètres' },
      settings: {
        tw: `使用新行列 30 輸入法時，在「中/英」圖示上按滑鼠右鍵即可進入輸入法設定（如果沒有成功，可能是您的 Windows 比較舊，請參考 readme.txt 以進入輸入法設定）。`,
        en: "When using New Array 30, you can right-click on the icon '中' (Chinese) in the language bar to open the New Array 30 settings (if this does not work, you may be using an older version of Windows, please refer to readme.txt to find out how to access the New Array 30 settings).",
        fr: "Lorsque vous utilisez Nouveau Tableau 30, vous pouvez faire un clic droit sur l'icône « 中 » (chinois) dans la barre de langue pour ouvrir les paramètres de Nouveau Tableau 30 (si cela ne fonctionne pas, il se peut que vous utilisiez une ancienne version de Windows, veuillez vous référer à readme.txt pour savoir comment accéder aux paramètres de Nouveau Tableau 30)."
      },
      writtenInReadMe: {
        tw: `新行列 30 輸入法的功能在 readme.txt 內都有寫，不過這裡列出其中一些功能。`,
        en: "The features of New Array 30 are all well written in readme.txt. Here are some useful ones.",
        fr: `Les fonctionnalités de Nouveau Tableau 30 sont toutes bien écrites dans readme.txt, en voici quelques exemples.`
      },
      otherFeatures: {
        tw: `新行列 30 輸入法還有以下功能：`,
        en: `New Array 30 also has the following features:`,
        fr: "Nouveau Tableau 30 possède également les fonctionnalités suivantes :"
      },
      features: {
        cjk: {
          tw: `✔️ 更廣的擴充區字元輸入：在輸法輸入設定的「Unicode 字元」可以啟用更廣的擴充區字元輸入，也就是可以輸入更多罕用字。一般使用預設狀態（支援到擴充區 A 的字元）、或是額外勾選「包含 Unicode 中日韓統一表意文字擴充 B 字元」就足以應付多數狀況。`,
          en: `✔️ Larger character sets: In the New Array 30 Settings, you can enable a larger character set for New Array 30, i.e. more rare characters can be entered. In general, it's sufficient to use the default setting (you can enter all CJK-characters until Extension A) or tick 'Includes the characters of CJK unified Ideographs Extension B' to also allow entry of all CJK-B characters.`,
          fr: `✔️ Jeux de caractères plus larges: Dans les paramètres de Nouveau Tableau 30, vous pouvez activer un jeu de caractères plus large pour Nouveau Tableau 30, c'est-à-dire que plus de caractères rares peuvent être saisis. En général, il est suffisant d'utiliser le paramètre par défaut (vous pouvez saisir tous les caractères CJC jusqu'au supplément A) ou de cocher « Includes the characters of CJK unified Ideographs Extension B » pour permettre la saisie de tous les caractères CJC-B.`
        },
        associatedWord: {
          tw: `✔️ 聯想字詞：默認關閉，要進入輸入法設定勾選「提示相關字詞」。直接以數字鍵選取聯想字詞。`,
          en: `✔️ Word suggestions: Off by default. To activate it, tick 'Prompt associated words of the input character' in the New Array 30 Settings. You can enter an associated word directly by its corresponding number key.`,
          fr: `✔️ Suggestions de mots : Désactivé par défaut. Pour l'activer, cochez la case « Prompt associated words of the input character » (montrer les mots associés du caractère saisi) dans les paramètres de Nouveau Tableau 30. Vous pouvez entrer un mot associé directement par la touche de chiffre correspondante.`
        },
        toggleChEn: {
          tw: `✔️ 中英切換：除了按住 <span class="keycap keycap-space">Ctrl</span> 不放同時按下 <span class="keycap keycap-space">space</span> 之外，還可以使用 <span class="keycap keycap-space">Shift</span> 鍵（可到設定調整）。`,
          en: `✔️ Toggle between Chinese mode and English mode: Besides the default key combination <span class="keycap keycap-space">Ctrl</span> + <span class="keycap keycap-space">space</span>, it's also possible to use <span class="keycap keycap-space">Shift</span> to toggle between Chinese mode and English mode (go to New Array 30 Settings >> Advanced).`,
          fr: `✔️ Basculer entre le mode chinois et anglais : En plus de la combinaison de touches par défaut <span class="keycap keycap-space">Ctrl</span> + <span class="keycap keycap-space">space</span>, il est également possible d'utiliser <span class="keycap keycap-space">Shift</span> pour basculer entre le mode chinois et anglais (allez dans les paramètres de Nouveau Tableau 30 >> Advanced)`
        },
        cueSpecialCode: {
          tw: `✔️ 特別碼提示：默認關閉，要進入輸入法設定勾選「提示特別碼」。`,
          en: `✔️ Special code hints: Off by default. To activate it, tick 'Cue special code' in the New Array 30 Settings.`,
          fr: `✔️ Indices de codes spéciaux : Désactivée par défaut. Pour l'activer, cochez la case « Cue special code » (montrer des indices de codes spéciaux) dans les paramètres de Nouveau Tableau 30.`
        },
        enteringWord: {
          tw: `✔️ 詞彙輸入：內建詞彙輸入功能，不但已內建 17 萬 8400 條詞彙，還能自行新增詞彙。詞彙輸入功能預設是關閉，必須進入新行列 30 輸入法的設定>>進階，勾選「啟用詞彙輸入」。`,
          en: `✔️ Entering words: It's a built-in feature of New Array 30. There are already 178,400 words in New Array 30, but you can still add new words on your own. This function is off by default; to enable it, go to New Array 30 Settings >> Advanced, tick 'Enable phrase input'.`,
          fr: `✔️ Saisir des mots : C'est une fonctionnalité intégrée de Nouveau Tableau 30. Il y a déjà 178 400 mots dans Nouveau Tableau 30, mais vous pouvez toujours ajouter de nouveaux mots par vous-même. Cette fonctionnalité est désactivée par défaut; pour l'activer, allez dans les Paramètres de Nouveau Tableau 30 >> Advanced, cochez « Enable phrase input » (Activer la saisie de mots).`
        },
        emojiList: {
          tw: `⭐️ emoji 選單：連按兩次符號鍵 <span class="keycap keycap-letter">2↑</span>（也就是連按兩次 <span class="keycap keycap-letter">w</span> 鍵），再按任意一顆數字鍵便會進入 emoji 選單（不同的數字鍵對應到不同類型的 emoji 選單，不過目前僅數字鍵 1 到 8 這八顆數字鍵有此功能）。`,
          en: `⭐️ Emoji lists: Press <span class="keycap keycap-letter">2↑</span> twice (i.e. the English key <span class="keycap keycap-letter">w</span>), then press any number key to access the emoji list (different number keys correspond to lists of different types of emoji, but currently only the eight number keys from 1 to 8 have this function). `,
          fr: `⭐️ Listes d'emoji: Appuyez deux fois sur la touche <span class="keycap keycap-letter">2↑</span> (c'est-à-dire la touche anglaise <span class="keycap keycap-letter">w</span> ou la touche française <span class="keycap keycap-letter">z</span>), puis appuyez sur une touche de chiffre quelconque pour accéder à la liste d'emoji (différentes touches de chiffre correspondent à des listes de différents types d'emoji, mais seules les huit touches de chiffre 1 à 8 ont cette fonction pour le moment).`
        },
        kanaMode: {
          tw: `⭐️ 日文假名模式：按住 <span class="keycap keycap-space">Alt</span> 不放同時按下 <span class="keycap keycap-letter">\`</span> 可以進入/退出日文假名模式（按鍵 <span class="keycap keycap-letter">\`</span> 在數字鍵 1 旁左邊）。日文假名模式下，鍵入假名的羅馬拼音即可輸入假名，鍵入 <span class="keycap keycap-letter">kao</span> 進入顏文字選單。`,
          en: `⭐️ Kana mode: Press <span class="keycap keycap-space">Alt</span> + <span class="keycap keycap-letter">\`</span> (the key next to the number key 1) to enter/leave kana mode. In kana mode, you can type romaji to enter kana, and type <span class="keycap keycap-letter">kao</span> to access the list of emoticons.`,
          fr: `⭐️ Mode kana: Appuyez sur <span class="keycap keycap-space">Alt</span> + <span class="keycap keycap-letter">#</span> (touche à gauche de la touche de chiffre 1) pour activer/désactiver le mode kana. En mode kana, vous pouvez taper romaji pour entrer kana, et taper <span class="keycap keycap-letter">kao</span> (QWERTY) ou <span class="keycap keycap-letter">kqo</span> (AZERTY) pour accéder à la liste d'émoticônes.`
        },
        comEnteringWords: {
          tw: `註：不認識行列輸入法的詞彙輸入？在本站的行列教學有<a href="tutorial-complete.html#entering-words" target="_blank">詳細的說明</a>！`,
          en: `Note: Don't know how to type Chinese words in Array? it's all explained in <a href="tutorial-complete.html#entering-words" target="_blank">the Array tutorial</a> on this website!`,
          fr: `NB : Vous ne savez pas comment taper des mots chinois en Tableau ? C'est tout expliqué dans <a href="tutorial-complete.html#entering-words" target="_blank">le tutoriel Tableau</a> sur ce site !`
        }
      },
    },
  },
  dimeArray: {
    title: { tw: 'DIME 行列', en: 'DIME Array', fr: 'DIME Tableau' },
    description: { tw: 'DIME 行列是 Windows 系統上推薦使用的行列輸入法。', en: 'DIME Array (zh: DIME 行列) is a recommended Array distribution on Windows.', fr: 'DIME Tableau (zh : DIME 行列) est une distribution Tableau recommandée sous Windows.' },
    download: {
      title: { tw: '下載', en: 'Download', fr: 'Téléchargement' },
      link: {
        tw: `<a href="https://github.com/jrywu/DIME/raw/1.1.273a/installer/DIME-x8664.zip">點此直接下載</a>，或到<a href="https://github.com/jrywu/DIME/releases/tag/1.1.273a" target="_blank">這裡</a>下載。`,
        en: `<a href="https://github.com/jrywu/DIME/raw/1.1.273a/installer/DIME-x8664.zip">Click here</a> to start the download, or download from <a href="https://github.com/jrywu/DIME/releases/tag/1.1.273a" target="_blank">this page</a> on GitHub.`,
        fr: `<a href="https://github.com/jrywu/DIME/raw/1.1.273a/installer/DIME-x8664.zip">Cliquez ici</a> pour démarrer le téléchargement, ou télécharger depuis <a href="https://github.com/jrywu/DIME/releases/tag/1.1.273a" target="_blank">cette page</a> sur GitHub.`
      },
    },
    installationAndActivation: {
      title: { tw: '安裝與啟用', en: 'Installation and activation', fr: 'Installation et activation' },
      description: {
        tw: '解壓縮後直接點擊 .exe 檔安裝。安裝後如果出現其它不會使用到的輸入法（例如 DIME 自訂、DIME 大易等），可以到控制台>>語言>>中文>>選項>>新增鍵盤，加入所有 DIME 的輸入法，再移除不需要的輸入法。',
        en: "After unzipping the file, click on the .exe file to install DIME. If 'DIME 行列' (DIME Array) doesn't show up in your input method/keyboard list, go to Settings >> Times & Language >> Language, click on 'Add a preferred language' and add '中文(台灣)' (Chinese (Traditional, Taiwan)), click on 中文(台灣) that you've just added >> Options >> Add a keyboard, choose 'DIME 行列'. If some DIME input methods that you don't use show up after installation, you can again go to Settings >> Times & Language >> Language >> 中文(台灣) (Chinese (Traditional, Taiwan)) >> Options >> Add a keyboard, add all DIME input methods and then remove those you don't need.",
        fr: "Après avoir décompressé le fichier, cliquez sur le fichier .exe pour installer DIME. Si « DIME 行列 » (DIME Tableau) n'est pas ajouté dans votre liste de méthodes de saisie/claviers, allez dans Paramètres >> Heure et Langue >> Langue, cliquez sur « Ajouter une langue par défaut » et ajoutez « 中文(台灣) » (Chinois (traditionnel, Taïwan)), cliquez sur 中文(台灣) que vous venez d'ajouter >> Options >> Ajouter un clavier, choisissez « DIME 行列 ». S'il y des méthodes de saisie de DIME que vous n'utilisez pas mais qui apparaissent après l'installation, vous pouvez encore une fois aller dans Paramètres >> Heure et Langue >> Langue >> 中文(台灣) (Chinois (traditionnel, Taïwan)) >> Options >> Ajouter un clavier, ajouter toutes les méthodes de saisie de DIME puis enlever celles dont vous n'avez pas besoin."
      }
    },
    featuresAndSettings: {
      title: { tw: '功能與設定', en: 'Features and settings', fr: 'Fonctionnalités et paramètres' },
      openSettings: {
        tw: `使用 DIME 行列時，按住 <span class="keycap keycap-space">Ctrl</span> 不放同時按下 <span class="keycap keycap-letter">\\</span> 可以進入DIME 行列輸入法設定。`,
        en: `When using DIME Array, you can press <span class="keycap keycap-space">Ctrl</span> + <span class="keycap keycap-letter">\\</span> to open the DIME Array Settings.`,
        fr: 'Lorsque vous utilisez DIME Array, vous pouvez appuyer sur <span class="keycap keycap-space">Ctrl</span> + <span class="keycap keycap-letter">*</span> pour ouvrir les paramètres de DIME Tableau.'
      },
      usefulSettings: { tw: '介紹幾個設定內實用的功能：', en: 'Here are some useful functions in the DIME settings', fr: "Voici quelques fonctions pratiques dans les paramètres de DIME" },
      features: {
        cjk: {
          tw: `✔️ 更廣的擴充區字元輸入：在輸入法設定中的「行列 Unicode 查詢範圍」可以選擇啟用更廣的擴充區字元輸入，也就是可以輸入更多罕用字。一般使用預設狀態（Unicode Extension-A，即支援到擴充區 A）、或是選 Unicode Extension-AB 就足以應付多數狀況。`,
          en: `✔️ Larger character sets: In '行列 Unicode 查詢範圍' (character set for DIME Array), you can enable a larger character set for DIME Array, i.e. more rare characters can be entered. In general, it's sufficient to use the default setting 'Unicode Extension A' (you can enter all CJK-characters until Extension A) or choose 'Unicode Extension AB' to also allow entry of all CJK-B characters.`,
          fr: `✔️ Jeux de caractères plus larges: Dans « 行列 Unicode 查詢範圍 » (jeu de caractères pour DIME Tableau), vous pouvez activer un jeu de caractères plus large pour DIME Tableau, c'est-à-dire que plus de caractères rares peuvent être saisis. En général, il est suffisant d'utiliser le paramètre par défaut 'Unicode Extension A' (vous pouvez saisir tous les caractères CJC jusqu'au supplément A) ou de choisir « Unicode Extension AB » pour permettre aussi la saisie de tous les caractères CJC-B.`
        },
        toggleChEn: {
          tw: `✔️ 中英切換：除了按住 <span class="keycap keycap-space">Ctrl</span> 不放同時按下 <span class="keycap keycap-space">space</span> 之外，還可以使用 <span class="keycap keycap-space">Shift</span> 鍵（需到設定啟用）。`,
          en: `✔️ Toggle between Chinese mode and English mode: Besides the default key combination <span class="keycap keycap-space">Ctrl</span> + <span class="keycap keycap-space">space</span>, it's also possible to use <span class="keycap keycap-space">Shift</span> to toggle between Chinese mode and English mode (needs to be enabled in '中英切換熱鍵').`,
          fr: `✔️ Basculer entre le mode chinois et anglais : En plus de la combinaison de touches par défaut <span class="keycap keycap-space">Ctrl</span> + <span class="keycap keycap-space">space</span>, il est également possible d'utiliser <span class="keycap keycap-space">Shift</span> pour basculer entre le mode chinois et anglais (doit être activé dans « 中英切換熱鍵 »)`
        },
        outputTcSc: {
          tw: `✔️ 輸出字元：可以選擇繁體中文或簡體中文。`,
          en: `✔️ Output character (zh: 輸出字元): You can choosse between '繁體中文' (traditinal Chinese) and '簡體中文' (simplified Chinese).`,
          fr: `✔️ Caractère de sortie (zh : 輸出字元) : Vous pouvez choisir entre « 繁體中文 » (chinois traditionnel) et « 簡體中文 » (chinois simplifié)`
        },
        enteringWord: {
          tw: `✔️ 詞彙輸入：DIME 行列有詞彙輸入功能但不是正統詞彙輸入功能。詞彙以如同字的方式輸入，也就是說最後要按空白鍵，而不是 <span class="keycap keycap-space">Enter</span> 旁邊的<span class="keycap keycap-letter">'</span> 鍵。缺點就是可能導致重碼數量變多，並且可能改變重碼排序。DIME 行列本身無內建詞彙，要到設定的「自建詞庫」自行新增詞彙編碼。可以到本頁面的<a href="download.html#data">下載字符表與編碼表</a>下載<a href="#new-Array">新行列 30 輸入法</a>中的詞彙檔，直接使用 DIME 行列設定中的「匯入自訂詞庫」新增詞庫。`,
          en: `✔️ Entering words: DIME Array supports the entry of words but not in the standard way: words are entered as if they were characters, which means the entry is completed by pressing the space bar instead of <span class="keycap keycap-letter">'</span> (the key next to <span class="keycap keycap-space">Enter</span>). The downside of this implementation is that it may result in more coincident codes and may change coincidence ranks. DIME Array has no built-in word data, you have to go to the tab '自建詞庫' (create my lexicon) in the Settings to add words and their Array code on your own. You can also download 'Array codes of chinese words' (.txt file) from <a href="download.html#data">Download character tables and code tables</a> on this page and import all the words in the file by simply using '匯入自訂詞庫' (import my lexicon) in the Settings.
          `,
          fr: `✔️ Saisir des mots : DIME Tableau supporte la saisie de mots mais pas de manière standard : les mots sont saisis comme s'il s'agissait de caractères, ce qui signifie que la saisie est terminée par la barre d'espace au lieu de la touche <span class="keycap keycap-letter">'</span> en anglais ou <span class="keycap keycap-letter">ù</span> en français (la touche à gauche de <span class="keycap keycap-space">Enter</span>). L'inconvénient de cette implémentation est qu'elle peut entraîner plus de codes coïncidents et peut modifier des rangs de coïncidence. DIME Tableau n'a pas de données de mots par défaut, vous devez aller à l'onglet « 自建詞庫 » (créer mon lexique) dans les paramètres pour ajouter des mots et leur code Tableau par vous-même. Vous pouvez aussi télécharger « Codes Tableau de mots chinois » (fichier .txt) depuis « <a href="download.html#data">Télécharger les tables de caractères et les tables de codes</a> » sur cette page et importer tous les mots de ce fichier par « 匯入自訂詞庫 » (importer mon lexique) dans les paramètres.`
        },
        reverseLookup: {
          tw: `✔️ 行列反查：使用 DIME 其它輸入法（自建、注音、大易）時，可以顯示行列編碼。需進入設定啟用。`,
          en: `✔️ Reverse lookup: Show Array codes while using other DIME input methods, e.g. 傳統注音 (Bopomofo), 大易 (Dayi). Activate the reverse lookup in '反查輸入字根' (reverse lookup).`,
          fr: `✔️ Recherche inversée : Afficher les codes Tableau lorsque vous utilisez d'autres méthodes de DIME, par exemple 傳統注音 (Bopomofo), 大易 (Dayi). Désactivée par défaut, pour l'activer, allez à « 反查輸入字根 » (recherche inversée).`
        },
        comEnteringWords: {
          tw: `註：不認識行列輸入法的詞彙輸入？在本站的行列教學有<a href="tutorial-complete.html#entering-words" target="_blank">詳細的說明</a>！`,
          en: `Note: Don't know how to type Chinese words in Array? it's all explained in <a href="tutorial-complete.html#entering-words" target="_blank">the Array tutorial</a> on this website!`,
          fr: `NB : Vous ne savez pas comment taper des mots chinois en Tableau ? C'est tout expliqué dans <a href="tutorial-complete.html#entering-words" target="_blank">le tutoriel Tableau</a> sur ce site !`
        },
      },
    },
  },
  windowsOthers: {
    title: { tw: '其他', en: 'Others', fr: 'Autres options' },
    description: {
      tw: `<a href="https://rime.im/download/" target="_blank">RIME 輸入法</a>（小狼毫 Weasel），您可以閱讀<a href="https://bluebirdbeats.com/2020/11/01/rime-array30-revamp/" target="_blank">青島脈搏的文章</a>來更了解 RIME 行列）、<a href="https://github.com/EasyIME/PIME/releases" target="_blank">PIME 輸入法</a>、<a href="https://hyperrate.com/dir.php?eid=215" target="_blank">gcin for Windows</a>。`,
      en: `<a href="https://rime.im/download/" target="_blank">Rime</a> (小狼毫 Weasel), you can also read <a href="https://bluebirdbeats.com/2020/11/01/rime-array30-revamp/" target="_blank">article</a> to know about RIME Array (article written in Chinese), <a href="https://github.com/EasyIME/PIME/releases" target="_blank">PIME</a>, <a href="https://hyperrate.com/dir.php?eid=215" target="_blank">gcin for Windows</a>.`,
      fr: `<a href="https://rime.im/download/" target="_blank">Rime</a> (小狼毫 Weasel), vous pouvez aussi lire <a href="https://bluebirdbeats.com/2020/11/01/rime-array30-revamp/" target="_blank">cet article</a> pour en savoir plus sur RIME Array (article écrit en chinois) , <a href="https://github.com/EasyIME/PIME/releases" target="_blank">PIME</a>, <a href="https://hyperrate.com/dir.php?eid=215" target="_blank">gcin for Windows</a>.`
    }
  },
  linux: {
    useIBusArray: {
      tw: `Linux 系統預設使用 iBus 做為系統輸入法框架，但因 iBus 的行列輸入法引擎（input engine，即 ibus-table-chinese-array）有缺陷，所以建議不使用該引擎而改用 ibus-array 輸入法引擎。`,
      en: "Linux uses iBus as the default input method framework. However, due to some flaw in the Array input engine of iBus (ibus-table-chinese-array), it is recommended to the engine of ibus-array instead of the iBus one.",
      fr: `Linux utilise iBus comme gestionnaire de méthode de saisie par défaut. Cependant, en raison d'une faille dans le moteur de la méthode Tableau d'iBus (ibus-table-chinese-array), il est recommandé d'utiliser le moteur d'ibus-array plutôt que celui d'iBus.`
    },
    dependDistribution: {
      tw: `安裝 ibus-array 的方式，依照您採用的 Linux Distribution 而有所不同：`,
      en: `The way you install ibus-array depends on the Linux distribution you use:`,
      fr: `La façon dont vous installez ibus-array dépend de la distribution Linux que vous utilisez :`
    },
    gcin: {
      tw: `另外，Ubuntu 使用者除了 iBus 也可使用 <a href="https://samwhelp.github.io/note-about-gcin/ubuntu/18.04/" target="_blank">gcin for Linux</a>（已內建行列輸入法模組的輸入法框架）。由於系統架構的緣故，目前 gcin for Linux 無法安裝於 Fedora。`,
      en: `In addition to iBus, Ubuntu users can also use <a href="https://samwhelp.github.io/note-about-gcin/ubuntu/18.04/" target="_blank">gcin for Linux</a>, an input method framework with the Array module already built in. Due to system architecture, gcin for Linux can't be installed on Fedora for the moment.`,
      fr: `En plus d'iBus, les utilisateurs d'Ubuntu peuvent également utiliser <a href="https://samwhelp.github.io/note-about-gcin/ubuntu/18.04/" target="_blank">gcin for Linux</a>, gestionnaire de méthode de saisie avec le module de Tableau déjà intégré. En raison de l'architecture du système, gcin for Linux ne peut pas être installé sur Fedora pour le moment.`
    },
  },
  debianUbuntu: {
    installation: {
      tw: `Debian/Ubuntu 內建 ibus-array：在終端機輸入 <span class="code">sudo apt update</span> 後，輸入 <span class="code">sudo apt install ibus-array</span> 即可完成安裝。可以透過在終端機輸入 <span class="code">ibus-setup</span> 進入 ibus 偏好設定。`,
      en: `ibus-array is built-in in Debian/Ubuntu: type <span class="code">sudo apt update</span> then <span class="code">sudo apt install ibus-array</span> in Terminal and ibus-array will be installed. Type <span class="code">ibus-setup</span> in Terminal to open iBus Preferences.`,
      fr: `ibus-array est intégré à Debian/Ubuntu : tapez <span class="code">sudo apt update</span> puis <span class="code">sudo apt install ibus-array</span> dans le Terminal et ibus-array sera installé. Tapez <span class="code">ibus-setup</span> le Terminal pour ouvrir iBus Preferences.`
    },
  },
  fedora: {
    installation: {
      tw: `Fedora/RHEL/CentOS 雖然沒有內建 ibus-array，但 bluebat 已將 ibus-array 打包好並置於<a href="https://rpmsphere.github.io/" target="_blank">第三方 RPM Sphere 的安裝套件庫</a>中，請參照其說明，先載入 RPM Fusion 套件庫，然後安裝 rpmsphere-release 套件；此套件安裝好後，在終端機輸入 <span class="code">sudo dnf install ibus-array</span> 即可完成 ibus-array 的安裝。`,
      en: `ibus-array is not built-in on Fedora/RHEL/CentOS, but is packaged and put into <a href="https://rpmsphere.github.io/" target="_blank">RPM Sphere</a>, a third-party package manager. Read the description, import repositories from RPM Fusion first, then install rpmsphere-release package. After the package has been installed, type <span class="code">sudo dnf install ibus-array</span> in Terminal and ibus-array will be installed.`,
      fr: `ibus-array n'est pas intégré à Fedora/RHEL/CentOS, mais est empaqueté et déposé dans <a href="https://rpmsphere.github.io/" target="_blank">RPM Sphere</a>, gestionnaire de paquets tiers. Lisez la description, importez d'abord les répertoires de RPM Fusion, puis installez le paquet rpmsphere-release. Après avoir installé ce paquet, tapez <span class="code">sudo dnf install ibus-array</span> dans le Terminal et ibus-array sera installé.`
    },
    activation: {
      tw: `重新開機後，請在「設定值」的「地區和語言」中點選輸入來源的「+」按鈕，就可在「中文（臺灣）」中找到「中文(Array)」，最後點選「加入」，以將 ibus-array 加到您的輸入法清單中。`,
      en: `After rebooting, go to Settings >> Region and Language, click on the button '+' and look for '中文(Array)' (Chinese(Array)) in 'Chinese (Taiwan)', and click on 'Add' to add ibus-array to your input method list.`,
      fr: `Après le redémarrage, allez dans Paramètres >> Région et langue, cliquez sur le bouton « + » et cherchez « 中文(Array) » (Chinois(Tableau)) dans « Chinois(Taïwan) », et cliquez sur « Ajouter » pour ajouter ibus-array à votre liste de méthodes de saisie.`
    },
  },
  macOSDescription: {
    tw: `Mac OS 作業系統上沒有內建行列輸入法，推薦下載<a href="https://zh.wikipedia.org/wiki/OpenVanilla" target="_blank">香草輸入法</a>：到<a href="https://openvanilla.org/" target="_blank">這裡</a>下載。`,
    en: `There is no built-in Array input method on Mac OS. It is recommended to download '<a href="https://en.wikipedia.org/wiki/OpenVanilla" target="_blank">OpenVanilla</a>': download from <a href="https://openvanilla.org/" target="_blank">here</a>.`,
    fr: `La méthode Tableau n'est pas intégrée sur Android. Il est recommandé de télécharger « <a href="https://en.wikipedia.org/wiki/OpenVanilla" target="_blank">OpenVanilla</a> » : téléchargez <a href="https://openvanilla.org/" target="_blank">ici</a>.`,
  },
  android: {
    lime: {
      tw: `Android 系統上沒有內建行列輸入法，推薦下載萊姆輸入法。不僅有行列 30 也有行列 10，並且支援繁簡轉換、字根反查等功能。`,
      en: `There is no built-in Array input method on Android. It is recommended to download 'LIME IME', which has not only Array 30 but also Array 10. It also supports traditional-simplified Chinese character conversion, reverse lookup, and many other useful functionalities.`,
      fr: `La méthode Tableau n'est pas intégrée sur Android. Il est recommandé de télécharger « LIME IME », qui a non seulement Tableau 30 mais aussi Tableau 10. Il supporte d'ailleurs la conversion caractères chinois traditionnels-simplifiés, la recherche inversée, et de nombreuses autres fonctionnalités pratiques.`,
    },
    installation: {
      tw: `到 Play 商店搜尋「萊姆中文輸入法」，或是<a href="https://play.google.com/store/apps/details?id=net.toload.main.hd" target="_blank">點此</a>直接進入下載頁面。`,
      en: `Go to the Play Store and search for 'LIME IME' (the name of the application is '萊姆中文輸入法 - LIME IME'), or <a href="https://play.google.com/store/apps/details?id=net.toload.main.hd" target="_blank">click here</a> to go directly to the download page.`,
      fr: `Allez sur le Play Store et cherchez « LIME IME » (le nom de l'application est « 萊姆中文輸入法 - LIME IME »), ou <a href="https://play.google.com/store/apps/details?id=net.toload.main.hd" target="_blank">cliquez ici</a> pour aller directement à la page de téléchargement.`,
    },
    settings: {
      tw: `在萊姆輸入法頁面上方點擊齒輪圖示可以進入設定頁面。設定頁面中，可以開啟反查功能。例如到注音字根反查選擇行列 10，在使用萊姆注音輸入時，系統就會提示輸入字的行列 10 編碼。另外，使用萊姆輸入法時，左右滑動鍵盤中的空白鍵可以快速切換不同的輸入法。`,
      en: `In the LIME IME app, you can click on the gear icon at the top of the screen to access the settings, where you can activate traditional-simplified Chinese character conversion (zh: 中文簡/繁體字碼轉換), reverse lookup, etc. For example, if you click on '拼音字根反查' (reverse lookup in pinyin) and select '行列 10' (Array 10), when you enter a character via pinyin in LIME IME, its Array 10 code will be displayed. Moreover, when using LIME IME you can slide your finger left or right on the spacebar to quickly switch between different input methods.`,
      fr: `Dans l'application LIME IME, vous pouvez cliquer sur l'icône d'engrenage en haut de l'écran pour accéder aux paramètres, où l'on peut activer la conversion caractères chinois traditionnels-simplifiés (zh : 中文簡/繁體字碼轉換), la recherche inversée, etc. Par exemple, si vous cliquez sur « 拼音字根反查 » (recherche inversée en pinyin) et sélectionnez « 行列 10 » (Tableau 10), lorsque vous saisissez un caractère en pinyin dans LIME IME, son code de Tableau 10 sera affiché. De plus, lorsque vous utilisez LIME IME, vous pouvez faire glisser votre doigt vers la gauche ou la droite sur la barre d'espace pour passer rapidement d'une méthode de saisie à une autre.`,
    },
    comArray10Tutorial: {
      tw: `註：本站的<a href="tutorial-complete.html#array10" target="_blank">行列教學</a>有完整行列 10 的教學以及功能介紹呦！`,
      en: `Note: <a href="tutorial-complete.html#array10" target="_blank">The Array tutorial</a> on this website contains a comprehensive guide to Array 10!`,
      fr: `NB : <a href="tutorial-complete.html#array10" target="_blank">Le tutoriel Tableau</a> sur ce site contient un guide complet de Tableau 10!`,
    },
    gcin: {
      tw: `另外還有 <a href="https://hyperrate.com/thread.php?tid=28692" target="_blank">gcin for Android</a> 可以使用。`,
      en: `Other option(s): <a href="https://hyperrate.com/thread.php?tid=28692" target="_blank">gcin for Android</a>.`,
      fr: `Autre(s) option(s) : <a href="https://hyperrate.com/thread.php?tid=28692" target="_blank">gcin for Android</a>.`,
    },
  },
  ios: {
    okidoKey: {
      tw: `iOS 系統上沒有內建行列輸入法，推薦下載 OkidoKey。不僅有行列 30 也有行列 10，並且支援繁簡轉換、字根反查等功能。`,
      en: `There is no built-in Array input method on iOS. It is recommended to download 'OkidoKey', which has not only Array 30 but also Array 10. It also supports traditional-simplified Chinese character conversion, reverse lookup, and many other useful functionalities.`,
      fr: `La méthode Tableau n'est pas intégrée sur iOS. Il est recommandé de télécharger « OkidoKey », qui a non seulement Tableau 30 mais aussi Tableau 10. Il supporte d'ailleurs la conversion caractères chinois traditionnels-simplifiés, la recherche inversée, et de nombreuses autres fonctionnalités pratiques.`,
    },
    installation: {
      tw: `到 App Store 搜尋「OkidoKey」，或是<a href="https://apps.apple.com/tw/app/okidokey/id990935790" target="_blank">點此</a>直接進入下載頁面。`,
      en: `Go to the App Store and search for 'OkidoKey', or <a href="https://apps.apple.com/app/okidokey/id990935790" target="_blank">click here</a> to go directly to the download page.`,
      fr: `Allez sur l'App Store et cherchez « OkidoKey », ou <a href="https://apps.apple.com/fr/app/okidokey/id990935790" target="_blank">cliquez ici</a> pour aller directement à la page de téléchargement.`,
    },
    frankie: {
      tw: `另外 iOS 系統上還有付費但功能更完整的 Frankie，能在不同輸入法之間快速切換（OkidoKey 一次只能載入一種輸入法）並且沒有廣告（OkidoKey 功能設定頁面可能會出現廣告）。到 App Store 搜尋「Frankie」，或是<a href="https://apps.apple.com/tw/app/frankie-by-creativecrap/id945116579" target="_blank">點此</a>直接進入下載頁面。`,
      en: `You can also use 'Frankie' on iOS, a paid application that has more functionalities (e.g. quickly switch between different input methods, which is not feasible in OkidoKey) and is ad-free. Go to the App Store and search for 'Frankie', or <a href="https://apps.apple.com/app/frankie-by-creativecrap/id945116579" target="_blank">click here</a> to go directly to the download page.`,
      fr: `Vous pouvez aussi utiliser « Frankie » sur iOS, qui est une application payante sans publicité et qui dispose de plus de fonctionnalités (par exemple, passer rapidement d'une méthode de saisie à une autre, ce qui n'est pas possible avec OkidoKey). Allez sur l'App Store et cherchez « Frankie », ou <a href="https://apps.apple.com/fr/app/frankie-by-creativecrap/id945116579" target="_blank">cliquez ici</a> pour aller directement à la page de téléchargement.`,
    },
    comAnecdote: {
      tw: `註：現在付費的 Frankie 原名為 OkidoKey，而現在免費的 OkidoKey 原名為 OkidoKey Lite。`,
      en: `Note: Frankie (now paid) was formerly known as OkidoKey, and OkidoKey (now free) is formerly known as OkidoKey Lite.`,
      fr: `NB : Frankie (maintenant payant) était auparavant connu sous le nom d'OkidoKey, et OkidoKey (maintenant gratuit) était auparavant connu sous le nom d'OkidoKey Lite.`,
    },
  },
  downloadImages: { tw: '下載圖片', en: 'Download images', fr: 'Télécharger des images' },
  downloadTables: {
    title: { tw: '下載字符表與編碼表', en: 'Download character tables and code tables', fr: 'Télécharger des tables de caractères et des tables de codes' },
    description: { tw: '此部分的檔案皆為 .txt 檔。', en: 'The files in this section are all TXT files.', fr: 'Les fichiers de cette section sont tous des fichiers TXT.' },
    shortCodeSpecialCode: { tw: '簡碼、特別碼', en: 'Short codes, special codes', fr: 'Codes courts, codes spéciaux' },
    shortCodeI: { tw: '一級簡碼', en: 'Short codes I', fr: 'Codes courts I' },
    shortCodeII: { tw: '二級簡碼', en: 'Short codes II', fr: 'Codes courts II' },
    specialCode: { tw: '特別碼', en: 'Special codes', fr: 'Codes spéciaux' },
    specialCodeExplanation: { tw: '特別碼（含解釋）', en: 'Special codes (with explanations)', fr: 'Codes spéciaux (avec des explications)' },
    comSpecial: {
      tw: '註：這裡的特別碼檔案不含「的」字。',
      en: "Note: The special code files here don't contain character '的'. The explanations of special codes are in Chinese.",
      fr: 'NB : Les fichiers des codes spéciaux ici ne contiennent pas le caractère « 的 ». Les explications des codes spéciaux sont en chinois.'
    },
    cjk: { tw: '中日韓統一表意文字不同擴充區的編碼', en: "Codes of CJK characters", fr: "Codes de caractères CJC" },
    noCCToCC: { tw: '無重碼變有重碼', en: 'Non-coincident codes that may become coincident', fr: 'Codes non coïncidents qui peuvent devenir coïncidents' },
    extA: { tw: '至擴充區 A', en: 'CJK and CJK-A', fr: 'CJC et CJC-A' },
    extB: { tw: '擴充區 B', en: 'CJK-B', fr: 'CJC-B' },
    extCD: { tw: '擴充區 CD', en: 'CJK-CD', fr: 'CJC-CD' },
    commonCharacters: { tw: '常用字表', en: 'Commonly used Chinese characters', fr: 'Caractères chinois fréquemment utilisés' },
    tw: { tw: '臺灣', en: 'Taiwan', fr: "Taïwan" },
    cn: { tw: '中國', en: 'China', fr: "Chine" },
    hk: { tw: '香港', en: 'Hong Kong', fr: "Hong Kong" },
    jp: { tw: '日本', en: 'Japan', fr: "Japon" },
    perLine1: { tw: '每排 1 字', en: '1 character per line', fr: "1 caractère par ligne" },
    perLine20: { tw: '每排 20 字', en: '20 characters per line', fr: "20 caractères par ligne" },
    perLine100: { tw: '每排 100 字', en: '100 characters per line', fr: "100 caractères par ligne" },
    twCommon4808: { tw: '4808 個常用字：', en: '4808 common characters: ', fr: "4808 caractères fréquents : " },
    twLessCommon6341: { tw: '6341 個次常用字：', en: '6341 less common characters: ', fr: "6341 caractères moins fréquents : " },
    cnFirst3500: { tw: '3500 個一級字（常用字）：', en: '3500 level 1 characters (common characters): ', fr: "3500 caractères de catégorie 1 (caractères fréquents) : " },
    cnSecond3000: { tw: '3000 個二級字（次常用字）：', en: '3000 level 2 characters (less common characters): ', fr: "3000 caractères de catégorie 2 (caractères moins fréquents) : " },
    cnThird1605: { tw: '1605 個三級字：', en: '1605 level 3 characters: ', fr: "1605 caractères de catégorie 3 : " },
    hkCommon4759: { tw: '4759 個常用字（2000 年版）：', en: '4759 common characters (revised in 2000): ', fr: "4759 caractères fréquents (révisés en 2000) :" },
    jpCommon2136: { tw: '2136 個常用漢字：', en: '2136 common characters (kanji): ', fr: "2136 caractères (kanji) fréquents : " },
    includingVariants: { tw: '含異體字', en: 'variants included', fr: "les variantes incluses" },
    word: { tw: '詞彙編碼', en: 'Array codes of chinese words', fr: 'Codes Tableau de mots chinois' },
    wordBtn: { tw: '17 萬 8400 條詞彙編碼', en: 'Array codes of 178,400 words', fr: 'Codes Tableau de 178 400 mots' },
    fileNameNormal: {
      extA: { tw: '至擴充區 A 字元編碼.txt', en: 'Codes of CJK and CJK-A characters.txt', fr: 'Code des caractères CJC et CJC-A.txt' },
      extB: { tw: '擴充區 B 字元編碼.txt', en: 'Codes of CJK-B characters.txt', fr: 'Code des caractères CJC-B.txt' },
      extCD: { tw: '擴充區 CD 字元編碼.txt', en: 'Codes of CJK-CD characters.txt', fr: 'Code des caractères CJC-CD.txt' },
      twCommon4808: { tw: '常用國字標準字體表-TW4808.txt', en: 'Standard Form of Commonly Used National Characters-TW4808.txt', fr: "Graphie normalisée des caractères fréquents-TW4808.txt" },
      twLessCommon6341: { tw: '次常用國字標準字體表-TW6341.txt', en: 'Standard Form of Less Commonly Used National Characters-TW6341.txt', fr: "Graphie normalisée des caractères chinois moins fréquents-TW6341.txt" },
      cnFirst3500: { tw: '通用規範漢字表-一級字表-CN3500.txt', en: 'Table of General Standard Chinese Characters-level 1-CN3500.txt', fr: "Tableau des caractères chinois standard généraux-catégorie 1-CN3500.txt" },
      cnSecond3000: { tw: '通用規範漢字表-二級字表-CN3000.txt', en: 'Table of General Standard Chinese Characters-level 2-CN3000.txt', fr: "Tableau des caractères chinois standard généraux-catégorie 2-CN3000.txt" },
      cnThird1605: { tw: '通用規範漢字表-三級字表-CN1605.txt', en: 'Table of General Standard Chinese Characters-level 3-CN1605.txt', fr: "Tableau des caractères chinois standard généraux-catégorie 3-CN1605.txt" },
      hkCommon4759Variants: { tw: '常用字字形表（含異體字）-HK4759.txt', en: 'List of Graphemes of Commonly-Used Chinese Characters (including variants)-HK4759.txt', fr: "Liste des graphèmes des caractères chinois couramment utilisés (y compris les variantes)-HK4759.txt" },
      hkCommon4759WithoutVariants: { tw: '常用字字形表（不含異體字）-HK4759.txt', en: 'List of Graphemes of Commonly-Used Chinese Characters (without variants)-HK4759.txt', fr: "Liste des graphèmes des caractères chinois couramment utilisés (sans variantes)-HK4759.txt" },
      jpCommon2136: { tw: '常用漢字表-JP2136.txt', en: 'Table of jōyō kanji-JP2136.txt', fr: "Tableau des jōyō kanji-JP2136.txt" },
      word178400: { tw: '178400 條詞彙行列編碼.txt', en: 'Array codes of 178400 Chinese words.txt', fr: 'Codes Tableau de 178400 mots chinois.txt' },
    },
    fileNamePerLine20: {
      twCommon4808: { tw: '常用國字標準字體表-TW4808-每排 20 字.txt', en: 'Standard Form of Commonly Used National Characters-TW4808-20 char per line.txt', fr: "Graphie normalisée des caractères fréquents-TW4808-20 ca par ligne.txt" },
      twLessCommon6341: { tw: '次常用國字標準字體表-TW6341-每排 20 字.txt', en: 'Standard Form of Less Commonly Used National Characters-TW6341-20 char per line.txt', fr: "Graphie normalisée des caractères chinois moins fréquents-TW6341-20 ca par ligne.txt" },
      cnFirst3500: { tw: '通用規範漢字表-一級字表-CN3500-每排 20 字.txt', en: 'Table of General Standard Chinese Characters-level 1-CN3500-20 char per line.txt', fr: "Tableau des caractères chinois standard généraux-catégorie 1-CN3500-20 ca par ligne.txt" },
      cnSecond3000: { tw: '通用規範漢字表-二級字表-CN3000-每排 20 字.txt', en: 'Table of General Standard Chinese Characters-level 2-CN3000-20 char per line.txt', fr: "Tableau des caractères chinois standard généraux-catégorie 2-CN3000-20 ca par ligne.txt" },
      cnThird1605: { tw: '通用規範漢字表-三級字表-CN1605-每排 20 字.txt', en: 'Table of General Standard Chinese Characters-level 3-CN1605-20 char per line.txt', fr: "Tableau des caractères chinois standard généraux-catégorie 3-CN1605-20 ca par ligne.txt" },
      hkCommon4759WithoutVariants: { tw: '常用字字形表（不含異體字）-HK4759-每排 20 字.txt', en: 'List of Graphemes of Commonly-Used Chinese Characters (without variants)-HK4759-20 char per line.txt', fr: "Liste des graphèmes des caractères chinois couramment utilisés (sans variantes)-HK4759-20 ca par ligne.txt" },
      jpCommon2136: { tw: '常用漢字表-JP2136-每排 20 字.txt', en: 'Table of jōyō kanji-JP2136-20 char per line.txt', fr: "Tableau des jōyō kanji-JP2136-20 ca par ligne.txt" },
    },
    fileNamePerLine100: {
      twCommon4808: { tw: '常用國字標準字體表-TW4808-每排 100 字.txt', en: 'Standard Form of Commonly Used National Characters-TW4808-100 char per line.txt', fr: "Graphie normalisée des caractères fréquents-TW4808-100 ca par ligne.txt" },
      twLessCommon6341: { tw: '次常用國字標準字體表-TW6341-每排 100 字.txt', en: 'Standard Form of Less Commonly Used National Characters-TW6341-100 char per line.txt', fr: "Graphie normalisée des caractères chinois moins fréquents-TW6341-100 ca par ligne.txt" },
      cnFirst3500: { tw: '通用規範漢字表-一級字表-CN3500-每排 100 字.txt', en: 'Table of General Standard Chinese Characters-level 1-CN3500-100 char per line.txt', fr: "Tableau des caractères chinois standard généraux-catégorie 1-CN3500-100 ca par ligne.txt" },
      cnSecond3000: { tw: '通用規範漢字表-二級字表-CN3000-每排 100 字.txt', en: 'Table of General Standard Chinese Characters-level 2-CN3000-100 char per line.txt', fr: "Tableau des caractères chinois standard généraux-catégorie 2-CN3000-100 ca par ligne.txt" },
      cnThird1605: { tw: '通用規範漢字表-三級字表-CN1605-每排 100 字.txt', en: 'Table of General Standard Chinese Characters-level 3-CN1605-100 char per line.txt', fr: "Tableau des caractères chinois standard généraux-catégorie 3-CN1605-100 ca par ligne.txt" },
      hkCommon4759WithoutVariants: { tw: '常用字字形表（不含異體字）-HK4759-每排 100 字.txt', en: 'List of Graphemes of Commonly-Used Chinese Characters (without variants)-HK4759-100 char per line.txt', fr: "Liste des graphèmes des caractères chinois couramment utilisés (sans variantes)-HK4759-100 ca par ligne.txt" },
      jpCommon2136: { tw: '常用漢字表-JP2136-每排 100 字.txt', en: 'Table of jōyō kanji-JP2136-100 char per line.txt', fr: "Tableau des jōyō kanji-JP2136-100 ca par ligne.txt" },
    },
    wordCom: {
      tw: `註：此詞彙編碼檔由<a href="download.html#new-Array" target="_blank">新行列 30 輸入法</a>內的檔案抓出而來。`,
      en: `Note: 'Word' here means vocabulary words consisting of at least 2 characters. This file is extracted from <a href="download.html#new-Array" target="_blank">New Array 30</a>. All the words in this file are written in traditional Chinese.`,
      fr: `NB : « Mot » désigne ici les mots composés d'au moins 2 caractères. Ce fichier provient de <a href="download.html#new-Array" target="_blank">Nouveau Tableau 30</a>. Tous les mots dans ce fichier sont écrits en chinois traditionnel.`
    },
  },
  downloadFonts: {
    title: { tw: '下載字型', en: 'Download fonts', fr: 'Télécharger des polices' },
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
  },
  image: {
    newArray30: {
      settingsGeneral: {
        src: { tw: '/img/new-array-30/settings-general.png', en: '/img/new-array-30/settings-general-en.png', fr: '/img/new-array-30/settings-general-en.png' },
        alt: { tw: '新行列 30 一般設定', en: 'New Array 30 General Settings', fr: 'Paramètres généraux de Nouveau Tableau 30' }
      },
      settingsAdvanced: {
        src: { tw: '/img/new-array-30/settings-advanced.png', en: '/img/new-array-30/settings-advanced-en.png', fr: '/img/new-array-30/settings-advanced-en.png' },
        alt: { tw: '新行列 30 進階設定', en: 'New Array 30 Advanced Settings', fr: 'Paramètres avancés de Nouveau Tableau 30' }
      },
      settingsDescription: { tw: '▲ 新行列 30 設定', en: '▲ New Array 30 Settings', fr: '▲ Paramètres de Nouveau Tableau 30 (en anglais)' },
      openSettings: {
        src: { tw: '/img/new-array-30/open-settings.png', en: '/img/new-array-30/open-settings-en.png', fr: '/img/new-array-30/open-settings-en.png' },
        alt: { tw: '開啟新行列 30 輸入法設定', en: 'Open the New Array 30 Settings', fr: 'Ouvrir les paramètres de Nouveau Tableau 30' }
      }
    },
    dime: {
      settingsGeneralAlt: { tw: 'DIME 行列輸入法一般設定', en: 'DIME Array General Settings', fr: 'Paramètres généraux de DIME Tableau' },
      settingsLexiconAlt: { tw: 'DIME 行列輸入法自建詞庫', en: 'DIME Array Lexicon Settings', fr: 'Paramètres Lexique de DIME Tableau' },
      settingsDescription: { tw: '▲ DIME 行列輸入法設定', en: '▲ DIME Array Settings (in traditional Chinese)', fr: '▲ Paramètres de DIME Tableau (en chinois traditionnel)' },
    },
  },
  shareOn: { tw: '分享：', en: 'Share on:', fr: 'Partagez sur : ' },
};
