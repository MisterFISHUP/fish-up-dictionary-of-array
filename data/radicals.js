/**
 * Author: FISH UP
 * https://array30.misterfishup.com/
 * Copyright © 2020 FISH UP Dictionary of Array
 * Date: 2020-11-26
 */

// two js objects in this file:
// allArrayRadicals and arrayRadicalInformation

// every Array radical is represented by a utf-8 character
const allArrayRadicals = {
  '1↑': {
    10: '可',
    11: '工長龍',
    12: '七匕它毛匚戉瓦长东',
    13: '韋',
    14: '車甫曹年',
  },
  '1-': {
    '1-': '一㇀',
  },
  '1↓': {
    16: '不母镸惠ㄊ弃',
    18: '大夫春雨',
    19: '厂在看寿與',
  },
  '2↑': {
    21: '女彑丱',
    22: '巛鼠巜',
  },
  '2-': {
    '2-': '乙⺄乚㇗㇛㇙㇂几殳儿冘足',
    25: '毋',
  },
  '2↓': {
    26: '風ㄠ厶戈弋瓜以',
    28: '糸纟衣',
    29: '爿亥曳发',
  },
  '3↑': {
    31: '門止耳囬假官北非悲⺊乍',
    32: '虍',
    33: '鬥淵亞刂介而归',
  },
  '3-': {
    '3-': '丨丿亅山艸屮凵',
    35: '片凹凸',
  },
  '3↓': {
    36: '卜⺗',
    38: '水氵氺小⺌業亦眔龰',
    39: '步',
  },
  '4↑': {
    40: '革',
    41: '土士青黃共廿其冓無',
    42: '帶',
  },
  '4-': {
    '4-': '十奉丰子孑艹夢卄廾卅',
  },
  '4↓': {
    47: '壺',
    48: '木述',
  },
  '5↑': {
    51: '尹彐录巳夬五',
    53: '阝皮',
  },
  '5-': {
    '5-': '㇡㇉㇞㇖㇆㇕馬石戶',
    55: '鼎马',
  },
  '5↓': {
    56: '即マ专ス',
    58: '又廴永癶羽练',
    59: '力尸眉',
  },
  '6↑': {
    60: '言贏',
    61: '立隹鹿亠',
    62: '讠',
    63: '神',
  },
  '6-': {
    '6-': '丶⺀疒',
    65: '方',
  },
  '6↓': {
    66: '心忄',
    67: '宀',
    68: '之辶',
    69: '產产广兴',
  },
  '7↑': {
    71: '月⺼皿直且',
    74: '魚',
  },
  '7-': {
    '7-': '冂冖⺈久刀卩目角解',
  },
  '7↓': {
    76: '夕炙禸舟',
    77: '冎',
    78: '祭貝贝',
  },
  '8↑': {
    81: '金合今䒑',
    82: '钅',
    83: '齒齿',
    84: '半平乎',
  },
  '8-': {
    '8-': '八ㄦ漆人入亻冫弟承㇏',
  },
  '8↓': {
    88: '火灬米敝求',
  },
  '9↑': {
    91: '臼叟學段印生告重微',
    92: '气鬼流氏乐',
    93: '斤丘',
    94: '手扌拜',
  },
  '9-': {
    '9-': '㇒竹',
    95: '鳥鸟烏乌勹沒',
  },
  '9↓': {
    98: '彳豕乑攵夂乂',
    99: '身豸爫犭⺁彡勿',
  },
  '0↑': {
    '01': '日曰⺜婁酉黑',
    '03': '象',
    '04': '田囗',
  },
  '0-': {
    '0-': '口',
  },
  '0↓': {
    '06': '虫',
    '08': '四罒西覀溫曾會',
  }
}

// the keys are the radical representatives
// img path is /img/array30-radical/[imgName].png
const arrayRadicalInformation = {
  '可': {
    code: '10', type: 'sess', isSimplified: false, isText: false, imgName: '10可', imgDescription: {
      tw: '「可」去掉最末筆畫',
      en: "'可' without the last stroke",
      fr: "'可' sans le dernier trait",
    }
  },
  '工': { code: '11', type: 'sess', isSimplified: false, isText: true },
  '長': {
    code: '11', type: 'sess', isSimplified: false, isText: false, imgName: '11長', imgDescription: {
      tw: '「長」去掉最末三筆畫',
      en: "'長' without the last three strokes",
      fr: "« 長 » sans les trois derniers traits",
    }
  },
  '龍': {
    code: '11', type: 'sess', isSimplified: false, isText: false, imgName: '11龍', imgDescription: {
      tw: '「龍」右半部',
      en: "the right part of '龍'",
      fr: "la partie droite de « 龍 »",
    }
  },
  '七': { code: '12', type: 'sess', isSimplified: false, isText: true },
  '匕': { code: '12', type: 'sess', isSimplified: false, isText: true },
  '它': {
    code: '12', type: 'special', isSimplified: false, isText: false, imgName: '12它', imgDescription: {
      tw: '「它」去掉宀',
      en: "'它' without 宀",
      fr: "« 它 » sans 宀",
    }, remark: {
      tw: '似「匕」',
      en: "looks similar to radical '匕'",
      fr: "ressemble au radical « 匕 »"
    }
  },
  '毛': {
    code: '12', type: 'sess', isSimplified: false, isText: false, imgName: '12毛', imgDescription: {
      tw: '「毛」去掉第一筆畫',
      en: "'毛' without the first stroke",
      fr: "« 毛 » sans le premier trait",
    }
  },
  '匚': { code: '12', type: 'sess', isSimplified: false, isText: true },
  '戉': {
    code: '12', type: 'sess', isSimplified: false, isText: false, imgName: '12越', imgDescription: {
      tw: '「戉」前兩筆畫',
      en: "the first two strokes of '戉'",
      fr: "les deux premiers traits de « 戉 »",
    }
  },
  '瓦': {
    code: '12', type: 'sess', isSimplified: false, isText: false, imgName: '12瓦', imgDescription: {
      tw: '「瓦」去掉點',
      en: "'瓦' without the point",
      fr: "« 瓦 » sans le point",
    }
  },
  '长': {
    code: '12', type: 'sess', isSimplified: true, isText: false, imgName: '12长', imgDescription: {
      tw: '「长」去掉兩斜線',
      en: "'长' without the two slanting lines",
      fr: "« 长 » sans les deux lignes obliques",
    }
  },
  '东': {
    code: '12', type: 'sess', isSimplified: true, isText: false, imgName: '12東', imgDescription: {
      tw: '「东」前兩筆畫',
      en: "the first two strokes of '东'",
      fr: "les deux premiers traits de « 东 »",
    }
  },
  '韋': {
    code: '13', type: 'sess', isSimplified: false, isText: false, imgName: '13韋', imgDescription: {
      tw: '「韋」口下面的部分',
      en: "the part under 口 in '韋'",
      fr: "la partie sous 口 dans « 韋 »",
    }
  },
  '車': { code: '14', type: 'sess', isSimplified: false, isText: true },
  '甫': {
    code: '14', type: 'sess', isSimplified: false, isText: false, imgName: '14甫', imgDescription: {
      tw: '「甫」去掉點',
      en: "'甫' without the point",
      fr: "« 甫 » sans le point",
    }
  },
  '曹': {
    code: '14', type: 'sess', isSimplified: false, isText: false, imgName: '14曹', imgDescription: {
      tw: '「曹」去掉日',
      en: "'曹' without 日",
      fr: "« 曹 » sans 日",
    }
  },
  '年': {
    code: '14', type: 'sess', isSimplified: false, isText: false, imgName: '14年', imgDescription: {
      tw: '「年」去掉前兩筆畫',
      en: "'年' without the first two strokes",
      fr: "« 年 » sans les deux permiers traits",
    }
  },
  '一': { code: '1-', type: 'fss', isSimplified: false, isText: true },
  '㇀': { code: '1-', type: 'fss', isSimplified: false, isText: true },
  '不': { code: '16', type: 'sess', isSimplified: false, isText: true },
  '母': {
    code: '16', type: 'sess', isSimplified: false, isText: false, imgName: '16母', imgDescription: {
      tw: '「母」去掉前兩筆畫',
      en: "'母' without the first two strokes",
      fr: "« 母 » sans les deux permiers traits",
    }
  },
  '镸': { code: '16', type: 'sess', isSimplified: false, isText: true },
  '惠': {
    code: '16', type: 'sess', isSimplified: false, isText: false, imgName: '16惠', imgDescription: {
      tw: '「惠」去掉心',
      en: "'惠' without 心",
      fr: "« 惠 » sans 心",
    }
  },
  'ㄊ': { code: '16', type: 'sess', isSimplified: false, isText: true },
  '弃': {
    code: '16', type: 'special', isSimplified: true, isText: false, imgName: '16充', imgDescription: {
      tw: '「弃」上半部',
      en: "the upper part of '弃'",
      fr: "la partie supérieure de « 弃 »",
    }
  },
  '大': { code: '18', type: 'sess', isSimplified: false, isText: true },
  '夫': { code: '18', type: 'sess', isSimplified: false, isText: true },
  '春': {
    code: '18', type: 'sess', isSimplified: false, isText: false, imgName: '18春', imgDescription: {
      tw: '「春」去掉日',
      en: "'春' without 日",
      fr: "« 春 » sans 日",
    }
  },
  '雨': { code: '18', type: 'sess', isSimplified: false, isText: true },
  '厂': { code: '19', type: 'sess', isSimplified: false, isText: true },
  '在': {
    code: '19', type: 'sess', isSimplified: false, isText: false, imgName: '19尤', imgDescription: {
      tw: '「尤」前兩筆畫',
      en: "the first strokes of '尤'",
      fr: "les deux premiers traits de « 尤 »",
    }
  },
  '看': {
    code: '19', type: 'sess', isSimplified: false, isText: false, imgName: '19看', imgDescription: {
      tw: '「看」去掉第一筆畫再去掉目',
      en: "'看' without the first stroke and 目",
      fr: "« 看 » sans le premier trait 目",
    }
  },
  '寿': {
    code: '19', type: 'sess', isSimplified: true, isText: false, imgName: '19寿', imgDescription: {
      tw: '「寿」去掉寸',
      en: "'寿' without 寸",
      fr: "« 寿 » sans 寸",
    }
  },
  '與': {
    code: '19', type: 'sess', isSimplified: false, isText: false, imgName: '19與', imgDescription: {
      tw: '「與」上半部中間',
      en: "the upper middle part of '與'",
      fr: "la partie centrale supérieure de « 與 »",
    }
  },
  '女': { code: '21', type: 'sess', isSimplified: false, isText: true },
  '彑': { code: '21', type: 'sess', isSimplified: false, isText: true },
  '丱': { code: '21', type: 'sess', isSimplified: false, isText: true },
  '巛': {
    code: '22', type: 'sess', isSimplified: false, isText: false, imgName: '22巛', imgDescription: {
      tw: '「巛」',
      en: "'巛'",
      fr: "« 巛 »",
    }
  },
  '鼠': {
    code: '22', type: 'sess', isSimplified: false, isText: false, imgName: '22鼠', imgDescription: {
      tw: '「鼠」下半部',
      en: "the lower part of '鼠'",
      fr: "la partie inférieure de « 鼠 »",
    }
  },
  '巜': {
    code: '22', type: 'sess', isSimplified: false, isText: false, imgName: '22巜', imgDescription: {
      tw: '「巜」',
      en: "'巜'",
      fr: "« 巜 »",
    }
  },
  '乙': { code: '2-', type: 'fss', isSimplified: false, isText: true },
  '⺄': { code: '2-', type: 'fss', isSimplified: false, isText: true },
  '乚': { code: '2-', type: 'fss', isSimplified: false, isText: true },
  '㇗': { code: '2-', type: 'fss', isSimplified: false, isText: true },
  '㇛': { code: '2-', type: 'fss', isSimplified: false, isText: true },
  '㇙': { code: '2-', type: 'fss', isSimplified: false, isText: true },
  '㇂': { code: '2-', type: 'fss', isSimplified: false, isText: true },
  '几': { code: '2-', type: 'fss', isSimplified: false, isText: true },
  '殳': {
    code: '2-', type: 'fss', isSimplified: false, isText: false, imgName: '2-殳', imgDescription: {
      tw: '「殳」上半部',
      en: "the upper part of '殳'",
      fr: "la partie supérieure de « 殳 »",
    }
  },
  '儿': { code: '2-', type: 'fss', isSimplified: false, isText: true },
  '冘': {
    code: '2-', type: 'fss', isSimplified: false, isText: false, imgName: '2-冘', imgDescription: {
      tw: '「冘」去掉冖',
      en: "'冘' without 冖",
      fr: "« 冘 » sans 冖",
    }
  },
  '足': {
    code: '2-', type: 'special', isSimplified: false, isText: false, imgName: '2-足', imgDescription: {
      tw: '「𧾷」',
      en: "'𧾷'",
      fr: "« 𧾷 »",
    }, remark: {
      tw: '記法： 2 隻腳',
      en: "mnemonics: two feet",
      fr: "mnémotechnique : deux pieds"
    }
  },
  '毋': {
    code: '25', type: 'sess', isSimplified: false, isText: false, imgName: '25母', imgDescription: {
      tw: '「母」前兩筆畫',
      en: "the first two strokes of '母'",
      fr: "les deux premiers traits de « 母 »",
    }
  },
  '風': { code: '26', type: 'sess', isSimplified: false, isText: true },
  'ㄠ': { code: '26', type: 'sess', isSimplified: false, isText: true },
  '厶': { code: '26', type: 'sess', isSimplified: false, isText: true },
  '戈': {
    code: '26', type: 'sess', isSimplified: false, isText: false, imgName: '26戈', imgDescription: {
      tw: '「戈」去掉橫線',
      en: "'戈' without the horizontal stroke",
      fr: "« 戈 » sans le trait horizontal",
    }
  },
  '弋': {
    code: '26', type: 'sess', isSimplified: false, isText: false, imgName: '26弋', imgDescription: {
      tw: '「弋」去掉橫線',
      en: "'弋' without the horizontal stroke",
      fr: "« 弋 » sans le trait horizontal",
    }
  },
  '瓜': {
    code: '26', type: 'sess', isSimplified: false, isText: false, imgName: '26瓜', imgDescription: {
      tw: '「瓜」第三四筆畫',
      en: "the third and fourth strokes of '瓜'",
      fr: "les 3e et 4e traits de « 瓜 »",
    }
  },
  '以': {
    code: '26', type: 'special', isSimplified: false, isText: false, imgName: '26以', imgDescription: {
      tw: '「以」前三筆畫',
      en: "the first three strokes of '以'",
      fr: "les trois premiers traits de « 以 »",
    }, remark: {
      tw: `似「<img src="/img/array30-radical/26瓜.png" class="radical">」`,
      en: `looks similar to radical '<img src="/img/array30-radical/26瓜.png" class="radical">'`,
      fr: `ressemble au radical « <img src="/img/array30-radical/26瓜.png" class="radical"> »`
    }
  },
  '糸': {
    code: '28', type: 'sess', isSimplified: false, isText: true, remark: {
      tw: '糹視作糸',
      en: "糹 viewed as 糸",
      fr: "糹 vu comme 糸"
    }
  },
  '纟': {
    code: '28', type: 'special', isSimplified: true, isText: true, remark: {
      tw: '似「糹」',
      en: "looks similar to '糹'",
      fr: "ressemble à « 糹 »"
    }
  },
  '衣': {
    code: '28', type: 'special', isSimplified: false, isText: false, imgName: '28衣', imgDescription: {
      tw: '「衣」去掉前三筆畫',
      en: "'衣' without the first three strokes",
      fr: "« 衣 » sans les trois prmiers traits",
    }
  },
  '爿': { code: '29', type: 'sess', isSimplified: false, isText: true },
  '亥': {
    code: '29', type: 'sess', isSimplified: false, isText: false, imgName: '29亥', imgDescription: {
      tw: '「亥」第三四筆畫',
      en: "the third and fourth strokes of '亥'",
      fr: "les 3e et 4e traits de « 亥 »",
    }
  },
  '曳': {
    code: '29', type: 'sess', isSimplified: false, isText: false, imgName: '29戈', imgDescription: {
      tw: '「戈」去掉橫線再去掉點',
      en: "'戈' without the horizontal stroke and the point",
      fr: "« 戈 » sans le trait horizontal et le point",
    }
  },
  '发': {
    code: '29', type: 'sess', isSimplified: true, isText: false, imgName: '29發', imgDescription: {
      tw: '「发」前兩筆畫',
      en: "the first two strokes of '以'",
      fr: "les deux premiers traits de « 以 »",
    }
  },
  '門': { code: '31', type: 'sess', isSimplified: false, isText: true },
  '止': { code: '31', type: 'sess', isSimplified: false, isText: true },
  '耳': {
    code: '31', type: 'sess', isSimplified: false, isText: false, imgName: '31耳', imgDescription: {
      tw: '「耳」去掉第一筆畫',
      en: "'耳' without the first stroke",
      fr: "« 耳 » sans le premier trait",
    }
  },
  '囬': {
    code: '31', type: 'sess', isSimplified: false, isText: false, imgName: '31囬', imgDescription: {
      tw: '「囬」去掉囗',
      en: "'囬' without 囗",
      fr: "« 囬 » sans 囗",
    }
  },
  '假': {
    code: '31', type: 'sess', isSimplified: false, isText: false, imgName: '31假', imgDescription: {
      tw: '「假」中間部分',
      en: "the middle part of '囬'",
      fr: "la partie centrale de « 囬 »",
    }
  },
  '官': {
    code: '31', type: 'sess', isSimplified: false, isText: false, imgName: '31官', imgDescription: {
      tw: '「官」去掉宀',
      en: "'官' without 宀",
      fr: "« 官 » sans 宀",
    }
  },
  '北': {
    code: '31', type: 'sess', isSimplified: false, isText: false, imgName: '31北', imgDescription: {
      tw: '「北」左半邊',
      en: "the left part of '北'",
      fr: "la partie gauche de « 北 »",
    }
  },
  '非': {
    code: '31', type: 'sess', isSimplified: false, isText: false, imgName: '31非左', imgDescription: {
      tw: '「非」左半邊',
      en: "the left part of '非'",
      fr: "la partie gauche de « 非 »",
    }
  },
  '悲': {
    code: '31', type: 'sess', isSimplified: false, isText: false, imgName: '31非右', imgDescription: {
      tw: '「非」右半邊',
      en: "the right part of '非'",
      fr: "la partie droite de « 非 »",
    }
  },
  '⺊': { code: '31', type: 'sess', isSimplified: false, isText: true },
  '乍': {
    code: '31', type: 'sess', isSimplified: false, isText: false, imgName: '31乍', imgDescription: {
      tw: '「乍」去掉前兩筆畫',
      en: "'乍' without the first two strokes",
      fr: "« 乍 » sans les deux premiers traits",
    }
  },
  '虍': { code: '32', type: 'sess', isSimplified: false, isText: true },
  '鬥': { code: '33', type: 'sess', isSimplified: false, isText: true },
  '淵': {
    code: '33', type: 'sess', isSimplified: false, isText: false, imgName: '33淵', imgDescription: {
      tw: '「淵」右半邊',
      en: "the right part of '淵'",
      fr: "la partie droite de « 淵 »",
    }
  },
  '亞': {
    code: '33', type: 'sess', isSimplified: false, isText: false, imgName: '33亞', imgDescription: {
      tw: '「亞」去掉上下兩橫線',
      en: "'亞' without the two long horizontal lines",
      fr: "« 亞 » sans les deux longs traits horizontaux",
    }
  },
  '刂': { code: '33', type: 'sess', isSimplified: false, isText: true },
  '介': {
    code: '33', type: 'sess', isSimplified: false, isText: false, imgName: '33介', imgDescription: {
      tw: '「介」去掉前兩筆畫',
      en: "'介' without the first two strokes",
      fr: "« 介 » sans les deux premiers traits",
    }
  },
  '而': {
    code: '33', type: 'sess', isSimplified: false, isText: false, imgName: '33而', imgDescription: {
      tw: '「而」下半部中間兩直線',
      en: "the two vertical strokes in the lower middle part of '而' without the first two strokes",
      fr: "les deux traits verticaux dans la partie central inférieure de « 而 »",
    }
  },
  '归': {
    code: '33', type: 'sess', isSimplified: true, isText: false, imgName: '33归', imgDescription: {
      tw: '「归」左半部',
      en: "the left part of '归'",
      fr: "la partie gauche de « 归 »",
    }
  },
  '丨': { code: '3-', type: 'fss', isSimplified: false, isText: true },
  '丿': { code: '3-', type: 'fss', isSimplified: false, isText: true },
  '亅': { code: '3-', type: 'fss', isSimplified: false, isText: true },
  '山': {
    code: '3-', type: 'special', isSimplified: false, isText: true, remark: {
      tw: '記法： 山的讀音似 3',
      en: "mnemonics: 山 sounds like 3 in Mandarin",
      fr: "mnémotechnique : 山 sonne comme 3 en mandarin"
    }
  },
  '艸': {
    code: '3-', type: 'special', isSimplified: false, isText: false, imgName: '3-屮日', imgDescription: {
      tw: '「屮」中間直線變彎的',
      en: "'屮' but with a curved stroke in the middle",
      fr: "« 屮 » mais avec un trait courbé au milieu",
    }
  },
  '屮': { code: '3-', type: 'special', isSimplified: false, isText: true },
  '凵': { code: '3-', type: 'special', isSimplified: false, isText: true },
  '片': { code: '35', type: 'sess', isSimplified: false, isText: true },
  '凹': {
    code: '35', type: 'sess', isSimplified: true, isText: false, imgName: '35凹', imgDescription: {
      tw: '「凹」去掉底部橫線',
      en: "'凹' without the horizontal stroke at the bottom",
      fr: "« 凹 » sans le trait horizontal en bas",
    }
  },
  '凸': {
    code: '35', type: 'sess', isSimplified: true, isText: false, imgName: '35凸', imgDescription: {
      tw: '「凸」去掉底部橫線',
      en: "'凸' without the horizontal stroke at the bottom",
      fr: "« 凸 » sans le trait horizontal en bas",
    }
  },
  '卜': { code: '36', type: 'sess', isSimplified: false, isText: true },
  '⺗': { code: '36', type: 'sess', isSimplified: false, isText: true },
  '水': { code: '38', type: 'sess', isSimplified: false, isText: true },
  '氵': {
    code: '38', type: 'special', isSimplified: false, isText: true, remark: {
      tw: '水的偏旁形態',
      en: "vari­ant of bùshǒu 水",
      fr: "variante du bùshǒu 水"
    }
  },
  '氺': { code: '38', type: 'sess', isSimplified: false, isText: true },
  '小': { code: '38', type: 'sess', isSimplified: false, isText: true },
  '⺌': { code: '38', type: 'sess', isSimplified: false, isText: true },
  '業': {
    code: '38', type: 'sess', isSimplified: false, isText: false, imgName: '38並', imgDescription: {
      tw: '「業」最初四筆畫',
      en: "the first four strokes of '業'",
      fr: "les quatre premiers traits de « 業 »",
    }
  },
  '亦': {
    code: '38', type: 'sess', isSimplified: false, isText: false, imgName: '38亦', imgDescription: {
      tw: '「亦」去掉亠',
      en: "'亦' without 亠",
      fr: "« 亦 » sans 亠",
    }
  },
  '眔': {
    code: '38', type: 'sess', isSimplified: false, isText: false, imgName: '38眔', imgDescription: {
      tw: '「眔」去掉罒',
      en: "'眔' without 罒",
      fr: "« 眔 » sans 罒",
    }
  },
  '龰': {
    code: '38', type: 'sess', isSimplified: false, isText: false, imgName: '38龰', imgDescription: {
      tw: '「龰」',
      en: "'龰'",
      fr: "« 龰 »",
    }
  },
  '步': {
    code: '39', type: 'sess', isSimplified: false, isText: false, imgName: '39步', imgDescription: {
      tw: '「步」去掉止',
      en: "'步' without 止",
      fr: "« 步 » sans 止",
    }
  },
  '革': {
    code: '40', type: 'sess', isSimplified: false, isText: false, imgName: '40革', imgDescription: {
      tw: '「革」去掉最末兩筆畫',
      en: "'革' without the last two strokes",
      fr: "« 革 » sans les deux derniers traits",
    }
  },
  '土': { code: '41', type: 'sess', isSimplified: false, isText: true },
  '士': { code: '41', type: 'sess', isSimplified: false, isText: true },
  '青': {
    code: '41', type: 'sess', isSimplified: false, isText: false, imgName: '41青', imgDescription: {
      tw: '「青」去掉月',
      en: "'青' without 月",
      fr: "« 青 » sans 月",
    }
  },
  '黃': {
    code: '41', type: 'sess', isSimplified: false, isText: false, imgName: '41黃', imgDescription: {
      tw: '「黃」田上面的部分',
      en: "the part above 田 in '黃'",
      fr: "la partie au-dessus de 田 dans « 黃 »",
    }
  },
  '共': {
    code: '41', type: 'sess', isSimplified: false, isText: false, imgName: '41共', imgDescription: {
      tw: '「共」去掉兩點',
      en: "'共' without the last two strokes",
      fr: "« 共 » sans les deux derniers traits",
    }
  },
  '廿': { code: '41', type: 'sess', isSimplified: false, isText: true },
  '其': {
    code: '41', type: 'sess', isSimplified: false, isText: false, imgName: '41其', imgDescription: {
      tw: '「其」去掉兩點',
      en: "'其' without the last three strokes",
      fr: "« 其 » sans les trois derniers traits",
    }
  },
  '冓': {
    code: '41', type: 'sess', isSimplified: false, isText: false, imgName: '41冓', imgDescription: {
      tw: '「冓」去掉冉',
      en: "'冓' without 冉",
      fr: "« 冓 » sans 冉",
    }
  },
  '無': {
    code: '41', type: 'sess', isSimplified: false, isText: false, imgName: '41無', imgDescription: {
      tw: '「無」去掉最初兩筆畫和下面四點',
      en: "'無' without the first two and last four strokes",
      fr: "« 無 » sans les deux premiers et les quatre derniers traits",
    }
  },
  '帶': {
    code: '42', type: 'sess', isSimplified: false, isText: false, imgName: '42帶', imgDescription: {
      tw: '「帶」冖上面',
      en: "the part above 冖 in '帶'",
      fr: "la partie au-dessus de 冖 dans « 帶 »",
    }
  },
  '十': { code: '4-', type: 'fss', isSimplified: false, isText: true },
  '奉': {
    code: '4-', type: 'fss', isSimplified: false, isText: false, imgName: '4-奉', imgDescription: {
      tw: '「奉」末三筆畫',
      en: "the last three strokes of '奉'",
      fr: "les trois derniers traits de « 奉 »",
    }
  },
  '丰': {
    code: '4-', type: 'fss', isSimplified: false, isText: false, imgName: '4-丰簡', imgDescription: {
      tw: '「峰」去掉山再去掉夂',
      en: "'峰' without 山 and 夂",
      fr: "« 峰 » sans 山 et 夂 ",
    }
  },
  '子': {
    code: '4-', type: 'fss', isSimplified: false, isText: false, imgName: '4-子', imgDescription: {
      tw: '「子」末兩筆畫',
      en: "the last two strokes of '子'",
      fr: "les deux derniers traits de « 子 »",
    }
  },
  '孑': {
    code: '4-', type: 'fss', isSimplified: false, isText: false, imgName: '4-孑', imgDescription: {
      tw: '「孑」末兩筆畫',
      en: "the last two strokes of '孑'",
      fr: "les deux derniers traits de « 孑 »",
    }
  },
  '艹': { code: '4-', type: 'fss', isSimplified: false, isText: true },
  '夢': {
    code: '4-', type: 'special', isSimplified: false, isText: false, imgName: '4-雈', imgDescription: {
      tw: '「夢」罒的上面',
      en: "the part above 罒 in '夢'",
      fr: "la partie au-dessus de 罒 dans « 夢 »",
    }, remark: {
      tw: '似「艹」',
      en: "looks similar to radical '艹'",
      fr: "ressemble au radical « 艹 »"
    }
  },
  '卄': { code: '4-', type: 'fss', isSimplified: false, isText: true },
  '廾': { code: '4-', type: 'fss', isSimplified: false, isText: true },
  '卅': { code: '4-', type: 'fss', isSimplified: false, isText: true },
  '壺': {
    code: '47', type: 'sess', isSimplified: false, isText: false, imgName: '47壺', imgDescription: {
      tw: '「壹」去掉豆',
      en: "'壹' without 豆",
      fr: "« 壹 » sans 豆",
    }
  },
  '木': { code: '48', type: 'sess', isSimplified: false, isText: true },
  '述': {
    code: '48', type: 'sess', isSimplified: false, isText: false, imgName: '48沭', imgDescription: {
      tw: '「述」去掉辶再去掉點',
      en: "'述' without 辶 and the point",
      fr: "« 述 » sans 辶 et le point",
    }
  },
  '尹': {
    code: '51', type: 'sess', isSimplified: false, isText: false, imgName: '51尹', imgDescription: {
      tw: '「尹」去掉最末一筆劃',
      en: "'尹' without the last stroke",
      fr: "« 尹 » sans le dernier trait",
    }
  },
  '彐': { code: '51', type: 'sess', isSimplified: false, isText: true },
  '录': {
    code: '51', type: 'sess', isSimplified: false, isText: false, imgName: '51彐日', imgDescription: {
      tw: '「录」去掉氺',
      en: "'录' without 氺",
      fr: "« 录 » sans 氺",
    }
  },
  '巳': {
    code: '51', type: 'sess', isSimplified: false, isText: false, imgName: '51巳', imgDescription: {
      tw: '「巳」去掉最末一筆劃',
      en: "'巳' without the last stroke",
      fr: "« 巳 » sans le dernier trait",
    }
  },
  '夬': {
    code: '51', type: 'sess', isSimplified: false, isText: false, imgName: '51夬', imgDescription: {
      tw: '「夬」前兩筆畫',
      en: "the first two strokes of '夬'",
      fr: "les deux premiers traits de « 夬 »",
    }
  },
  '五': {
    code: '51', type: 'sess', isSimplified: false, isText: false, imgName: '51五', imgDescription: {
      tw: '「五」去掉首筆畫',
      en: "'五' without the first stroke",
      fr: "« 五 » sans le premier trait",
    }
  },
  '阝': { code: '53', type: 'sess', isSimplified: false, isText: true },
  '皮': {
    code: '53', type: 'sess', isSimplified: false, isText: false, imgName: '53皮', imgDescription: {
      tw: '「皮」去掉又',
      en: "'皮' without 又",
      fr: "« 皮 » sans 又",
    }
  },
  '㇡': { code: '5-', type: 'fss', isSimplified: false, isText: true },
  '㇉': { code: '5-', type: 'fss', isSimplified: false, isText: true },
  '㇞': { code: '5-', type: 'fss', isSimplified: false, isText: true },
  '㇖': { code: '5-', type: 'fss', isSimplified: false, isText: true },
  '㇆': { code: '5-', type: 'fss', isSimplified: false, isText: true },
  '㇕': { code: '5-', type: 'fss', isSimplified: false, isText: true },
  '馬': {
    code: '5-', type: 'special', isSimplified: false, isText: false, imgName: '5-馬', imgDescription: {
      tw: '「馬」去掉四點',
      en: "'馬' without the last four strokes",
      fr: "« 馬 » sans les quatre derniers traits",
    }
  },
  '石': {
    code: '5-', type: 'special', isSimplified: false, isText: true, remark: {
      tw: '記法： 石有 5 筆畫',
      en: "mnemonics: 石 has five strokes",
      fr: "mnémotechnique : 石 a 5 traits"
    }
  },
  '戶': {
    code: '5-', type: 'special', isSimplified: false, isText: true, remark: {
      tw: '以第二筆「順彎」定位',
      en: "encoded by the 2nd stroke 'clockwise turning stroke'",
      fr: "encodé par le 2e trait « trait brisé dans le sens horaire »"
    }
  },
  '鼎': {
    code: '55', type: 'sess', isSimplified: false, isText: false, imgName: '55鼎', imgDescription: {
      tw: '「鼎」去掉目',
      en: "'鼎' without 目",
      fr: "« 鼎 » sans 目",
    }
  },
  '马': {
    code: '55', type: 'sess', isSimplified: true, isText: false, imgName: '55马', imgDescription: {
      tw: '「马」去橫線',
      en: "'马' without the horizontal stroke",
      fr: "« 马 » sans le trait horizontal",
    }
  },
  '即': {
    code: '56', type: 'sess', isSimplified: false, isText: false, imgName: '56即', imgDescription: {
      tw: '「即」左半邊',
      en: "the left part of '即'",
      fr: "la partie gauche de « 即 »",
    }
  },
  'マ': { code: '56', type: 'sess', isSimplified: false, isText: true },
  '专': {
    code: '56', type: 'sess', isSimplified: true, isText: false, imgName: '56专', imgDescription: {
      tw: '「专」去掉兩橫線',
      en: "'专' without the two horizontal strokes",
      fr: "« 专 » sans les deux traits horizontaux",
    }
  },
  'ス': { code: '56', type: 'sess', isSimplified: true, isText: true },
  '又': { code: '58', type: 'sess', isSimplified: false, isText: true },
  '廴': { code: '58', type: 'sess', isSimplified: false, isText: true },
  '永': {
    code: '58', type: 'sess', isSimplified: false, isText: false, imgName: '58永', imgDescription: {
      tw: '「永」去掉第一筆畫',
      en: "'永' without the first stroke",
      fr: "« 永 » sans le premier trait",
    }
  },
  '癶': { code: '58', type: 'sess', isSimplified: false, isText: true },
  '羽': {
    code: '58', type: 'sess', isSimplified: false, isText: false, imgName: '58羽', imgDescription: {
      tw: '「羽」左半邊',
      en: "the left part of '羽'",
      fr: "la partie gauche de « 羽 »",
    }
  },
  '练': {
    code: '58', type: 'sess', isSimplified: true, isText: false, imgName: '58練', imgDescription: {
      tw: '「练」最末三筆畫',
      en: "the last three strokes of '练'",
      fr: "les trois derniers traits de « 练 »",
    }
  },
  '力': { code: '59', type: 'sess', isSimplified: false, isText: true },
  '尸': { code: '59', type: 'sess', isSimplified: false, isText: true },
  '眉': {
    code: '59', type: 'sess', isSimplified: false, isText: false, imgName: '59眉', imgDescription: {
      tw: '「眉」去掉目',
      en: "'眉' without 目",
      fr: "« 眉 » sans 目",
    }
  },
  '言': { code: '60', type: 'sess', isSimplified: false, isText: true },
  '贏': {
    code: '60', type: 'sess', isSimplified: false, isText: false, imgName: '60贏', imgDescription: {
      tw: '「贏」只保留亡和口',
      en: "'贏' but with only 亡 and 口",
      fr: "« 贏 » mais avec seulement 亡 et 口",
    }
  },
  '立': { code: '61', type: 'sess', isSimplified: false, isText: true },
  '隹': {
    code: '61', type: 'sess', isSimplified: false, isText: false, imgName: '61隹', imgDescription: {
      tw: '「隹」去掉亻',
      en: "'隹' without 亻",
      fr: "« 隹 » sans 亻",
    }
  },
  '鹿': {
    code: '61', type: 'sess', isSimplified: false, isText: false, imgName: '61鹿', imgDescription: {
      tw: '「鹿」去掉比',
      en: "'鹿' without 比",
      fr: "« 鹿 » sans 比",
    }
  },
  '亠': { code: '61', type: 'sess', isSimplified: false, isText: true },
  '讠': { code: '62', type: 'sess', isSimplified: true, isText: true },
  '神': {
    code: '63', type: 'sess', isSimplified: false, isText: false, imgName: '63神', imgDescription: {
      tw: '「神」去掉最後一筆劃',
      en: "'神' without the last stroke",
      fr: "« 神 » sans le dernier trait",
    }
  },
  '丶': { code: '6-', type: 'fss', isSimplified: false, isText: true },
  '⺀': { code: '6-', type: 'fss', isSimplified: false, isText: true },
  '疒': {
    code: '6-', type: 'special', isSimplified: false, isText: true, remark: {
      tw: '以起筆「丶」定位',
      en: "encoded by the starting stroke 'dot'",
      fr: "encodé par le trait initial « point »"
    }
  },
  '方': { code: '65', type: 'sess', isSimplified: false, isText: true },
  '心': { code: '66', type: 'sess', isSimplified: false, isText: true },
  '忄': {
    code: '66', type: 'sess', isSimplified: false, isText: false, imgName: '66忄', imgDescription: {
      tw: '「忄」',
      en: "'忄'",
      fr: "« 忄 »",
    }
  },
  '宀': { code: '67', type: 'sess', isSimplified: false, isText: true },
  '之': { code: '68', type: 'sess', isSimplified: false, isText: true },
  '辶': { code: '68', type: 'sess', isSimplified: false, isText: true },
  '產': {
    code: '69', type: 'sess', isSimplified: false, isText: false, imgName: '69產', imgDescription: {
      tw: '「產」去掉生',
      en: "'產' without 生",
      fr: "« 產 » sans 生",
    }
  },
  '产': {
    code: '69', type: 'sess', isSimplified: true, isText: false, imgName: '69产', imgDescription: {
      tw: '「产」',
      en: "'产'",
      fr: "« 产 »",
    }
  },
  '广': { code: '69', type: 'sess', isSimplified: false, isText: true },
  '兴': {
    code: '69', type: 'sess', isSimplified: true, isText: false, imgName: '69兴', imgDescription: {
      tw: '「兴」前三筆畫',
      en: "the first three strokes of '兴'",
      fr: "les trois premiers traits de « 兴 »",
    }
  },
  '月': { code: '71', type: 'sess', isSimplified: false, isText: true },
  '⺼': {
    code: '71', type: 'special', isSimplified: false, isText: true, remark: {
      tw: '似「月」',
      en: "looks similar to radical '月'",
      fr: "ressemble au radical « 月 »"
    }
  },
  '皿': { code: '71', type: 'sess', isSimplified: false, isText: true },
  '直': {
    code: '71', type: 'sess', isSimplified: false, isText: false, imgName: '71直', imgDescription: {
      tw: '「直」去掉十再去掉底部橫線',
      en: "'直' without 十 and the last stroke",
      fr: "« 直 » sans 十 et le dernier trait",
    }
  },
  '且': {
    code: '71', type: 'sess', isSimplified: false, isText: false, imgName: '71且', imgDescription: {
      tw: '「且」去掉底部橫線',
      en: "'且' without the last stroke",
      fr: "« 且 » sans le dernier trait",
    }
  },
  '魚': {
    code: '74', type: 'sess', isSimplified: false, isText: false, imgName: '74魚', imgDescription: {
      tw: '「魚」去掉四點',
      en: "'魚' without the last four strokes",
      fr: "« 魚 » sans les quatre derniers traits",
    }
  },
  '冂': { code: '7-', type: 'fss', isSimplified: false, isText: true },
  '冖': { code: '7-', type: 'fss', isSimplified: false, isText: true },
  '⺈': { code: '7-', type: 'fss', isSimplified: false, isText: true },
  '久': {
    code: '7-', type: 'fss', isSimplified: false, isText: false, imgName: '7-久', imgDescription: {
      tw: '「久」去掉最末筆畫',
      en: "'久' without the last stroke",
      fr: "« 久 » sans le dernier trait",
    }
  },
  '刀': { code: '7-', type: 'fss', isSimplified: false, isText: true },
  '卩': { code: '7-', type: 'fss', isSimplified: false, isText: true },
  '目': {
    code: '7-', type: 'special', isSimplified: false, isText: true, remark: {
      tw: '避免與「日」重複',
      en: "to distinguish from '日'",
      fr: "pour distinguer de « 日 »"
    }
  },
  '角': {
    code: '7-', type: 'special', isSimplified: false, isText: true, remark: {
      tw: '以首筆形「⺈」定位',
      en: "encoded by the staring stroke-shape '⺈'",
      fr: "encodé par la forme-trait initiale « ⺈ »"
    }
  },
  '解': {
    code: '7-', type: 'special', isSimplified: true, isText: false, imgName: '7-角', imgDescription: {
      tw: '簡體字「角」',
      en: "'角' in simplified Chinese",
      fr: "« 角 » en chinois simplifié",
    }
  },
  '夕': { code: '76', type: 'sess', isSimplified: false, isText: true },
  '炙': {
    code: '76', type: 'sess', isSimplified: false, isText: false, imgName: '76祭', imgDescription: {
      tw: '「炙」去掉火',
      en: "'炙' without 火",
      fr: "« 炙 » sans 火",
    }
  },
  '禸': { code: '76', type: 'sess', isSimplified: false, isText: true },
  '舟': {
    code: '76', type: 'sess', isSimplified: false, isText: false, imgName: '76舟', imgDescription: {
      tw: '「舟」去掉第一筆畫',
      en: "'舟' without the first stroke",
      fr: "« 舟 » sans le premier trait",
    }
  },
  '冎': {
    code: '77', type: 'sess', isSimplified: false, isText: false, imgName: '77冎', imgDescription: {
      tw: '「冎」',
      en: "'冎'",
      fr: "« 冎 »",
    }
  },
  '祭': {
    code: '78', type: 'sess', isSimplified: false, isText: false, imgName: '78祭', imgDescription: {
      tw: '「祭」去掉示',
      en: "'祭' without 示",
      fr: "« 祭 » sans 示",
    }
  },
  '貝': { code: '78', type: 'special', isSimplified: false, isText: true },
  '贝': { code: '78', type: 'sess', isSimplified: true, isText: true },
  '金': { code: '81', type: 'sess', isSimplified: false, isText: true },
  '合': {
    code: '81', type: 'sess', isSimplified: false, isText: false, imgName: '81合', imgDescription: {
      tw: '「合」去掉口',
      en: "'合' without 口",
      fr: "« 合 » sans 口",
    }
  },
  '今': {
    code: '81', type: 'special', isSimplified: true, isText: false, imgName: '81今', imgDescription: {
      tw: '簡體字「今」前三筆畫',
      en: "the first three strokes of '今' in simplified Chinese",
      fr: "les trois premiers traits de « 今 » en chinois simplifié",
    }
  },
  '䒑': {
    code: '81', type: 'sess', isSimplified: false, isText: false, imgName: '81䒑', imgDescription: {
      tw: '「䒑」',
      en: "'䒑'",
      fr: "« 䒑 »",
    }
  },
  '钅': { code: '82', type: 'sess', isSimplified: true, isText: true },
  '齒': {
    code: '83', type: 'sess', isSimplified: false, isText: false, imgName: '83齒', imgDescription: {
      tw: '「齒」去掉止',
      en: "'齒' without 止",
      fr: "« 齒 » sans 止",
    }
  },
  '齿': {
    code: '83', type: 'sess', isSimplified: true, isText: false, imgName: '83齿', imgDescription: {
      tw: '「齿」去掉止',
      en: "'齿' without 止",
      fr: "« 齿 » sans 止",
    }
  },
  '半': { code: '84', type: 'sess', isSimplified: false, isText: true },
  '平': {
    code: '84', type: 'sess', isSimplified: false, isText: false, imgName: '84平', imgDescription: {
      tw: '「平」去掉第一筆畫',
      en: "'平' without the first stroke",
      fr: "« 平 » sans le premier trait",
    }
  },
  '乎': {
    code: '84', type: 'sess', isSimplified: false, isText: false, imgName: '84乎', imgDescription: {
      tw: '「乎」去掉第一筆畫',
      en: "'乎' without the first stroke",
      fr: "« 乎 » sans le premier trait",
    }
  },

  '八': { code: '8-', type: 'fss', isSimplified: false, isText: true },
  'ㄦ': { code: '8-', type: 'fss', isSimplified: false, isText: true },
  '漆': {
    code: '8-', type: 'fss', isSimplified: false, isText: false, imgName: '8-全簡', imgDescription: {
      tw: '「人」但兩筆畫都沒有凸出',
      en: "'人' but the two strokes meet at their endpoints",
      fr: "« 人 » mais les deux traits se rencontrent à leurs extrémités",
    }
  },
  '人': { code: '8-', type: 'fss', isSimplified: false, isText: true },
  '入': { code: '8-', type: 'fss', isSimplified: false, isText: true },
  '亻': { code: '8-', type: 'fss', isSimplified: false, isText: true },
  '冫': { code: '8-', type: 'fss', isSimplified: false, isText: true },
  '弟': {
    code: '8-', type: 'fss', isSimplified: false, isText: false, imgName: '8-立', imgDescription: {
      tw: '「弟」首兩筆畫',
      en: "the first two strokes of '弟'",
      fr: "les deux premiers traits de « 弟 »",
    }
  },
  '承': {
    code: '8-', type: 'fss', isSimplified: false, isText: false, imgName: '8-承', imgDescription: {
      tw: '「承」最末兩筆畫',
      en: "the last two strokes of '承'",
      fr: "les deux derniers traits de « 承 »",
    }
  },
  '㇏': { code: '8-', type: 'fss', isSimplified: false, isText: true },
  '火': { code: '88', type: 'sess', isSimplified: false, isText: true },
  '灬': {
    code: '88', type: 'special', isSimplified: false, isText: true, remark: {
      tw: '火的偏旁形態',
      en: "vari­ant of bùshǒu 火",
      fr: "variante du bùshǒu 火"
    }
  },
  '米': { code: '88', type: 'sess', isSimplified: false, isText: true },
  '敝': {
    code: '88', type: 'sess', isSimplified: false, isText: false, imgName: '88㡀', imgDescription: {
      tw: '「敝」左半部',
      en: "the last part of '敝'",
      fr: "la partie gauche de « 敝 »",
    }
  },
  '求': {
    code: '88', type: 'sess', isSimplified: false, isText: false, imgName: '88求', imgDescription: {
      tw: '「求」第三到六筆畫',
      en: "the third to sixth strokes of '求'",
      fr: "Les 3e à 6e traits de « 求 »",
    }
  },
  '臼': { code: '91', type: 'sess', isSimplified: false, isText: true },
  '叟': {
    code: '91', type: 'sess', isSimplified: false, isText: false, imgName: '91叟', imgDescription: {
      tw: '「𦥑」',
      en: "'𦥑'",
      fr: "« 𦥑 »",
    }
  },
  '學': {
    code: '91', type: 'sess', isSimplified: false, isText: false, imgName: '91與', imgDescription: {
      tw: '「學」冖上面部分去掉兩個ㄨ',
      en: "the upper part of '學' without the two ㄨ",
      fr: "la partie supérieure de « 學 » sans les deux ㄨ",
    }
  },
  '段': {
    code: '91', type: 'sess', isSimplified: false, isText: false, imgName: '91段', imgDescription: {
      tw: '「段」左半部',
      en: "the left part of '段'",
      fr: "la partie gauche de « 段 »",
    }
  },
  '印': {
    code: '91', type: 'sess', isSimplified: false, isText: false, imgName: '91印', imgDescription: {
      tw: '「印」左半部',
      en: "the left part of '印'",
      fr: "la partie gauche de « 印 »",
    }
  },
  '生': {
    code: '91', type: 'sess', isSimplified: false, isText: false, imgName: '91生', imgDescription: {
      tw: '「生」最初兩筆畫',
      en: "the first two strokes of '生'",
      fr: "les deux premiers traits de « 生 »",
    }
  },
  '告': {
    code: '91', type: 'sess', isSimplified: false, isText: false, imgName: '91告', imgDescription: {
      tw: '「告」去掉口',
      en: "'告' without 口",
      fr: "« 告 » sans 口",
    }
  },
  '重': {
    code: '91', type: 'sess', isSimplified: false, isText: false, imgName: '91重', imgDescription: {
      tw: '「重」去掉中間的曰',
      en: "'重' without 曰",
      fr: "« 重 » sans 曰",
    }
  },
  '微': {
    code: '91', type: 'sess', isSimplified: false, isText: false, imgName: '91微', imgDescription: {
      tw: '「微」保留彳山一',
      en: "'微' but with only 彳山一",
      fr: "« 微 » mais avec seulement 彳山一",
    }
  },
  '气': { code: '92', type: 'sess', isSimplified: false, isText: true },
  '鬼': {
    code: '92', type: 'sess', isSimplified: false, isText: false, imgName: '92鬼', imgDescription: {
      tw: '「鬼」去掉厶',
      en: "'鬼' without 厶",
      fr: "« 鬼 » sans 厶",
    }
  },
  '流': {
    code: '92', type: 'sess', isSimplified: false, isText: false, imgName: '92流', imgDescription: {
      tw: '「流」右下部分',
      en: "the right lower part of '流'",
      fr: "la partie droite inférieure « 流 »",
    }
  },
  '氏': {
    code: '92', type: 'sess', isSimplified: false, isText: false, imgName: '92氏', imgDescription: {
      tw: '「氏」最初兩筆畫',
      en: "the first two strokes of '氏'",
      fr: "les deux premiers traits de « 氏 »",
    }
  },
  '乐': {
    code: '92', type: 'sess', isSimplified: true, isText: false, imgName: '92乐', imgDescription: {
      tw: '「乐」最初兩筆畫',
      en: "the first two strokes of '乐'",
      fr: "les deux premiers traits de « 乐 »",
    }
  },
  '斤': { code: '93', type: 'sess', isSimplified: false, isText: true },
  '丘': {
    code: '93', type: 'sess', isSimplified: false, isText: false, imgName: '93丘', imgDescription: {
      tw: '「丘」去掉底部橫線',
      en: "'丘' without the last stroke",
      fr: "« 丘 » sans le dernier trait",
    }
  },
  '手': { code: '94', type: 'sess', isSimplified: false, isText: true },
  '扌': {
    code: '94', type: 'special', isSimplified: false, isText: false, imgName: '94扌', imgDescription: {
      tw: '「扌」',
      en: "'扌'",
      fr: "« 扌 »",
    }, remark: {
      tw: '手的偏旁形態',
      en: "vari­ant of bùshǒu 手",
      fr: "variante du bùshǒu 手"
    }
  },
  '拜': {
    code: '94', type: 'sess', isSimplified: false, isText: false, imgName: '94拜', imgDescription: {
      tw: '「拜」左半部',
      en: "the left part of '拜'",
      fr: "la partie gauche de « 拜 »",
    }
  },
  '㇒': { code: '9-', type: 'fss', isSimplified: false, isText: true },
  '竹': {
    code: '9-', type: 'special', isSimplified: false, isText: true, remark: {
      tw: '以起筆定位；𥫗視作竹',
      en: "encoded by the starting stroke; 𥫗 viewed as 竹",
      fr: "encodé par le trait initial; 𥫗 vu comme 竹"
    }
  },
  '鳥': {
    code: '95', type: 'sess', isSimplified: false, isText: false, imgName: '95鳥', imgDescription: {
      tw: '「鳥」去掉四點',
      en: "'鳥' without the last four strokes",
      fr: "« 鳥 » sans les quatre derniers traits",
    }
  },
  '鸟': {
    code: '95', type: 'sess', isSimplified: true, isText: false, imgName: '95鸟', imgDescription: {
      tw: '「鸟」去掉末筆',
      en: "'鸟' without the last stroke",
      fr: "« 鸟 » sans le dernier trait",
    }
  },
  '烏': {
    code: '95', type: 'sess', isSimplified: false, isText: false, imgName: '95烏', imgDescription: {
      tw: '「烏」去掉四點',
      en: "'烏' without the last four strokes",
      fr: "« 烏 » sans les quatre derniers traits",
    }
  },
  '乌': {
    code: '95', type: 'sess', isSimplified: true, isText: false, imgName: '95乌', imgDescription: {
      tw: '「乌」去掉末筆',
      en: "'乌' without the last stroke",
      fr: "« 乌 » sans le dernier trait",
    }
  },
  '勹': { code: '95', type: 'sess', isSimplified: false, isText: true },
  '沒': {
    code: '95', type: 'sess', isSimplified: false, isText: false, imgName: '95方', imgDescription: {
      tw: '「沒」右上方部分',
      en: "the right upper part of '沒'",
      fr: "la partie droite supérieure de « 沒 »",
    }
  },
  '彳': { code: '98', type: 'sess', isSimplified: false, isText: true },
  '豕': {
    code: '98', type: 'sess', isSimplified: false, isText: false, imgName: '98豕', imgDescription: {
      tw: '「豕」去掉第一筆畫',
      en: "'豕' without the first stroke",
      fr: "« 豕 » sans le premier trait",
    }
  },
  '乑': {
    code: '98', type: 'sess', isSimplified: false, isText: false, imgName: '98乑', imgDescription: {
      tw: '「乑」',
      en: "'乑'",
      fr: "« 乑 »",
    }
  },
  '攵': { code: '98', type: 'sess', isSimplified: false, isText: true },
  '夂': {
    code: '98', type: 'special', isSimplified: false, isText: true, remark: {
      tw: '似「攵」',
      en: "looks similar to radical '攵'",
      fr: "ressemble au radical « 攵 »"
    }
  },
  '乂': { code: '98', type: 'sess', isSimplified: false, isText: true },
  '身': { code: '99', type: 'sess', isSimplified: false, isText: true },
  '豸': { code: '99', type: 'sess', isSimplified: false, isText: true },
  '爫': { code: '99', type: 'sess', isSimplified: false, isText: true },
  '犭': {
    code: '99', type: 'sess', isSimplified: false, isText: false, imgName: '99犭', imgDescription: {
      tw: '「犭」',
      en: "'犭'",
      fr: "« 犭 »",
    }
  },
  '⺁': { code: '99', type: 'sess', isSimplified: false, isText: true },
  '彡': { code: '99', type: 'sess', isSimplified: false, isText: true },
  '勿': {
    code: '99', type: 'sess', isSimplified: false, isText: false, imgName: '99勿', imgDescription: {
      tw: '「勿」去掉前兩筆畫',
      en: "'勿' without the first two strokes",
      fr: "« 勿 » sans les deux premiers traits",
    }
  },
  '日': { code: '01', type: 'sess', isSimplified: false, isText: true },
  '曰': { code: '01', type: 'sess', isSimplified: false, isText: true },
  '⺜': { code: '01', type: 'special', isSimplified: false, isText: true },
  '婁': {
    code: '01', type: 'sess', isSimplified: false, isText: false, imgName: '01婁', imgDescription: {
      tw: '「曰」但中間橫線有凸出兩邊',
      en: "'曰' but the horizontal stroke in the middle sticks out from 口",
      fr: "« 曰 » mais le trait horizontal au milieu dépasse 口",
    }
  },
  '酉': {
    code: '01', type: 'sess', isSimplified: false, isText: false, imgName: '01酉', imgDescription: {
      tw: '「酉」但中間橫線有凸出兩邊',
      en: "'酉' without the first stroke",
      fr: "« 酉 » sans le premier trait",
    }
  },
  '黑': {
    code: '01', type: 'sess', isSimplified: false, isText: false, imgName: '01黑', imgDescription: {
      tw: '「黑」去掉下面四點',
      en: "'黑' without the last four strokes",
      fr: "« 黑 » sans les quatre derniers traits",
    }
  },
  '象': {
    code: '03', type: 'sess', isSimplified: false, isText: false, imgName: '03串', imgDescription: {
      tw: '「罒」但中間只有一條豎線',
      en: "'罒' but with only one vertical stroke in the middle",
      fr: "« 罒 » mais avec un seul trait vertical au milieu",
    }
  },
  '田': { code: '04', type: 'sess', isSimplified: false, isText: true },
  '囗': { code: '04', type: 'special', isSimplified: false, isText: true },
  '口': { code: '0-', type: 'fss', isSimplified: false, isText: true },
  '虫': { code: '06', type: 'sess', isSimplified: false, isText: true },
  '四': { code: '08', type: 'sess', isSimplified: false, isText: true },
  '罒': {
    code: '08', type: 'special', isSimplified: false, isText: true, remark: {
      tw: '似「四」',
      en: "looks similar to radical '四'",
      fr: "ressemble au radical « 四 »"
    }
  },
  '西': {
    code: '08', type: 'sess', isSimplified: false, isText: false, imgName: '08西', imgDescription: {
      tw: '「西」去掉第一筆畫',
      en: "'西' without the first stroke",
      fr: "« 西 » sans le premier trait",
    }
  },
  '覀': {
    code: '08', type: 'special', isSimplified: false, isText: false, imgName: '08覀', imgDescription: {
      tw: '「覀」去掉第一筆畫再去掉貝',
      en: "'覀' without the first stroke and 貝",
      fr: "« 覀 » sans le premier trait et 貝",
    }, remark: {
      tw: `似「<img src="/img/array30-radical/08西.png" class="radical">」`,
      en: `looks similar to radical '<img src="/img/array30-radical/08西.png" class="radical">'`,
      fr: `ressemble au radical « <img src="/img/array30-radical/08西.png" class="radical"> »`
    }
  },
  '溫': {
    code: '08', type: 'sess', isSimplified: false, isText: false, imgName: '08溫', imgDescription: {
      tw: '「溫」右上部分',
      en: "the right upper part of '溫'",
      fr: "la partie droite supérieur de « 溫 »",
    }
  },
  '曾': {
    code: '08', type: 'sess', isSimplified: false, isText: false, imgName: '08曾(1)', imgDescription: {
      tw: '「柬」去掉木',
      en: "'柬' without 木",
      fr: "« 柬 » sans 木",
    }
  },
  '會': {
    code: '08', type: 'sess', isSimplified: false, isText: false, imgName: '08曾', imgDescription: {
      tw: '「曾」去掉最初兩筆畫再去掉日',
      en: "'曾' without the first two strokes and 日",
      fr: "« 曾 » sans les deux premiers traits et 日",
    }
  },
}
