const stringPageName = document.getElementById('app').dataset.pageName;
const AppContent = {
  contents: { tw: '頁面導覽', en: 'Contents', fr: 'Sommaire' },
  radicalOverview: { tw: '行列字根總覽', en: 'The Array radicals', fr: 'Les radicaux Tableau' },
  exampleCharacters: { tw: '行列字根實例', en: 'Example characters of Array radicals', fr: 'Exemples de caractères pour les radicaux Tableau' },
  columnPosition: { tw: '行位', en: 'Column positions', fr: 'Positions de colonne' },
  specialRadical: { tw: '特別歸位字根', en: 'specially encoded', fr: 'spécialement encodé' },
  scRadical: { tw: '簡體字根', en: 'used only in simplfied Chinese (SC)', fr: 'utilisé uniquement en chinois simplifié (CS)' },
  specialSCRadical: { tw: '特別歸位簡體字根', en: 'specially encoded and used only in SC', fr: 'spécialement encodé et utilisé uniquement en CS' },
  shareOn: { tw: '分享：', en: 'Share on:', fr: 'Partagez sur : ' },
  buyMeACake: {
    tw: `如果您覺得本網站對您很有幫助，可以<a href="https://www.buymeacoffee.com/misterfishup" target="_blank" title='♫ 請我吃蛋糕 ♫'>給 FISH UP 買個蛋糕</a>來支持他！`,
    en: `If you enjoy this website, you can support FISH UP by <a href="https://www.buymeacoffee.com/misterfishup" target="_blank" title='♫ Buy me a cake ♫'>buying him a cake</a> 🍰!`,
    fr: `Si vous aimez ce site, vous pouvez <a href="https://www.buymeacoffee.com/misterfishup" target="_blank" title='♫ Achetez-moi un gâteau ♫'>soutenir FISH UP en lui achetant un gâteau</a> 🍰 !`
  }
};
