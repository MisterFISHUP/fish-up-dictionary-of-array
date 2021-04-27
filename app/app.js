const app = Vue.createApp({
  data() {
    return {
      local: stringLocal, // from /app/local.js
      appContent: AppContent, // from /app/xxx.js
    }
  }
})

// add component 'app-nav-bar' directly to app
app.component('app-nav-bar', {
  data() {
    return {
      local: stringLocal, // from /app/local.js
      pageName: stringPageName, // from /app/xxx.js
      isNavSmallHidden: true,
      isShownNavSmallTutorial: false,
      isShownNavSmallTutorialClose: false,
      isShownNavSmallTutorialOpen: true,
      navItem: {
        dictionary: { tw: '行列查碼', en: 'Dictionary', fr: 'Dictionnaire', 'fileName': 'dictionary.html' },
        typing: { tw: '打字練習', en: 'Typing practice', fr: 'Exercices de saisie', 'fileName': 'typing.html' },
        tutorial: { tw: '行列教學', en: 'Tutorial', fr: 'Tutoriel', 'fileName': 'tutorial.html' },
        initiation: { tw: '快速入門', en: 'Introduction to Array', fr: 'Initiation rapide', 'fileName': 'tutorial.html' },
        completeGuide: { tw: '完整教學', en: 'Complete guide', fr: 'Guide complet', 'fileName': 'tutorial-complete.html' },
        recap: { tw: '複習與測驗', en: 'Summary and quizzes', fr: 'Résumé et quiz', 'fileName': 'tutorial-recap.html' },
        table: { tw: '字根表', en: 'Lookup table', fr: 'Table des radicaux', 'fileName': 'radicals-and-examples.html' },
        download: { tw: '下載', en: 'Download', fr: 'Téléchargements', 'fileName': 'download.html' },
        faq: { tw: '常見問題', en: 'FAQ', fr: 'FAQ', 'fileName': 'faq.html' },
        about: { tw: '關於本站', en: 'About', fr: 'À propos', 'fileName': 'about.html' }
      },
      barItemClass: 'w3-bar-item w3-button w3-padding-large w3-hover-white'
    }
  },
  computed: {
    homeUrlLocal() {
      return this.local === "tw" ? '/' : '/' + this.local
    }
  },
  methods: {
    toggleNavSmallTutorial: function () {
      this.isShownNavSmallTutorial = !this.isShownNavSmallTutorial;
      this.isShownNavSmallTutorialClose = !this.isShownNavSmallTutorialClose;
      this.isShownNavSmallTutorialOpen = !this.isShownNavSmallTutorialOpen
    },
  },
  template: `
  <div class="w3-top">
      <div class="w3-bar w3-black w3-card">
          <!-- always there -->
          <a :href="homeUrlLocal" class="w3-bar-item w3-button w3-padding-large w3-pale-yellow"><i class="fa fa-home w3-large" aria-hidden="true"></i></a>

          <!-- small screens (toggle button)-->
          <button @click="isNavSmallHidden = !isNavSmallHidden" class="w3-bar-item w3-button w3-hide-large w3-right w3-padding-large w3-hover-sand w3-black"><i class="fa fa-bars" aria-hidden="true"></i></button>

          <!-- large screens -->
          <div class="w3-hide-medium w3-hide-small">
              <a :href="navItem.dictionary.fileName" :class="barItemClass">{{ navItem.dictionary[local] }}</a>
              <a :href="navItem.typing.fileName" :class="barItemClass">{{ navItem.typing[local] }}</a>

              <!-- dropdown for tutorial pages -->
              <div class="w3-dropdown-hover">
                  <button class="w3-button w3-padding-large w3-hover-light-gray"><a :href="navItem.tutorial.fileName" style="text-decoration: none;">{{ navItem.tutorial[local] }} <i class="fa fa-caret-down" aria-hidden="true"></i></a></button>
                  <div class="w3-dropdown-content w3-bar-block w3-dark-grey">
                      <a :href="navItem.initiation.fileName" class="w3-bar-item w3-button">{{ navItem.initiation[local] }}</a>
                      <a :href="navItem.completeGuide.fileName" class="w3-bar-item w3-button">{{ navItem.completeGuide[local] }}</a>
                      <a :href="navItem.recap.fileName" class="w3-bar-item w3-button">{{ navItem.recap[local] }}</a>
                  </div>
              </div>
              <a :href="navItem.table.fileName" :class="barItemClass">{{ navItem.table[local] }}</a>

              <div class="w3-right">
                  <a :href="navItem.download.fileName" :class="barItemClass">{{ navItem.download[local] }}</a>
                  <a :href="navItem.faq.fileName" :class="barItemClass">{{ navItem.faq[local] }}</a>
                  <a :href="navItem.about.fileName" :class="barItemClass">{{ navItem.about[local] }}</a>

                  <!-- local -->
                  <div class="w3-dropdown-hover">
                      <button class="w3-button w3-padding-large"><i class="fa fa-language" aria-hidden="true"></i>&nbsp;<i class="fa fa-caret-down" aria-hidden="true"></i></button>
                      <div class="w3-dropdown-content w3-bar-block w3-dark-grey">
                          <a :href="'/' + pageName" class="w3-bar-item w3-button">繁中</a>
                          <a :href="'/en/' + pageName" class="w3-bar-item w3-button">EN</a>
                          <a :href="'/fr/' + pageName" class="w3-bar-item w3-button">FR</a>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
    
  <!-- Navbar on small screens -->
  <div id="navSmall" class="w3-bar-block w3-hide-large" v-if='!isNavSmallHidden'>

      <!-- local -->
      <div class="w3-center w3-small w3-padding-16">
          <a :href="'/' + pageName" style='text-decoration: none;' :class="{ 'current-language': local === 'tw' }">繁中</a>&emsp;|&emsp;
          <a :href="'/en/' + pageName" style='text-decoration: none;' :class="{ 'current-language': local === 'en' }">English</a>&emsp;|&emsp;
          <a :href="'/fr/' + pageName" style='text-decoration: none;' :class="{ 'current-language': local === 'fr' }">Français</a>
      </div>
      <a :href="navItem.dictionary.fileName" class="w3-bar-item w3-button w3-padding-large nav-small-item-hover"><i class="fa fa-search fa-fw" aria-hidden="true"></i>&emsp;&nbsp;{{ navItem.dictionary[local] }}</a>
      <a :href="navItem.typing.fileName" class="w3-bar-item w3-button w3-padding-large nav-small-item-hover"><i class="fa fa-keyboard-o fa-fw" aria-hidden="true"></i>&emsp;&nbsp;{{ navItem.typing[local] }}</a>

      <!-- tutorial with dropdown icon -->
      <div class="w3-padding-large nav-small-item-hover">
          <a :href="navItem.tutorial.fileName" style="text-decoration: none;"><i class="fa fa-book fa-fw" aria-hidden="true"></i>&emsp;&nbsp;{{ navItem.tutorial[local] }}</a>
          <div class="w3-right" style="cursor: pointer;" @click='toggleNavSmallTutorial()'>
              &emsp;&emsp;&emsp;<i class="fa fa-angle-down" aria-hidden="true" id="openNavSmallTutorial" v-if='isShownNavSmallTutorialOpen'></i><i class="fa fa-angle-up" aria-hidden="true" id="closeNavSmallTutorial" v-if='isShownNavSmallTutorialClose'></i>
          </div>
      </div>

      <!-- tutorial dropdown content -->
      <div id="navSmallTutorial" v-if='isShownNavSmallTutorial'>
          <a :href="navItem.initiation.fileName" class="w3-bar-item w3-button w3-padding-large nav-small-item-hover">&emsp;&nbsp;<i class="fa fa-key fa-fw" aria-hidden="true"></i>&emsp;&nbsp;{{ navItem.initiation[local] }}</a>
          <a :href="navItem.completeGuide.fileName" class="w3-bar-item w3-button w3-padding-large nav-small-item-hover">&emsp;&nbsp;<i class="fa fa-key fa-fw" aria-hidden="true" ></i>&emsp;&nbsp;{{ navItem.completeGuide[local] }}</a>
          <a :href="navItem.recap.fileName" class="w3-bar-item w3-button w3-padding-large nav-small-item-hover">&emsp;&nbsp;<i class="fa fa-heartbeat fa-fw" aria-hidden="true"></i>&emsp;&nbsp;{{ navItem.recap[local] }}</a>
      </div>
      <a :href="navItem.table.fileName" class="w3-bar-item w3-button w3-padding-large nav-small-item-hover"><i class="fa fa-th-list fa-fw" aria-hidden="true"></i>&emsp;&nbsp;{{ navItem.table[local] }}</a>
      <a :href="navItem.download.fileName" class="w3-bar-item w3-button w3-padding-large nav-small-item-hover"><i class="fa fa-cloud-download fa-fw" aria-hidden="true"></i>&emsp;&nbsp;{{ navItem.download[local] }}</a>
      <a :href="navItem.faq.fileName" class="w3-bar-item w3-button w3-padding-large nav-small-item-hover"><i class="fa fa-comments-o fa-fw" aria-hidden="true"></i>&emsp;&nbsp;{{ navItem.faq[local] }}</a>
      <a :href="navItem.about.fileName" class="w3-bar-item w3-button w3-padding-large nav-small-item-hover"><i class="fa fa-info-circle fa-fw" aria-hidden="true"></i>&emsp;&nbsp;{{ navItem.about[local] }}</a>
  </div>`
})

// add component 'app-footer' directly to app
app.component('app-footer', {
  data() {
    return {
      local: stringLocal, // from /app/local.js
      year: websiteYear, // from aap/local.js
      pageName: stringPageName, // from /app/xxx.js
      siteName: { tw: 'FISH UP 行列查碼', en: 'FISH UP Dictionary of Array', fr: 'Dictionnaire FISH UP de Tableau' },
      contactDescription: { tw: '信箱：', en: 'Contact: ', fr: 'Contact: ' },
      facebookUrl: 'https://www.facebook.com/FISH-UP-%E8%A1%8C%E5%88%97%E6%9F%A5%E7%A2%BC-106035361278242/',
      linkedinUrl: 'https://www.linkedin.com/in/shang-chun-yu/',
      mailAddress: 'misterfishup@gmail.com'
    }
  },
  computed: {
    homeUrlLocal() {
      return this.local === "tw" ? '/' : '/' + this.local
    }
  },
  template: `
  <footer class="footer-fish-up">
      <!-- social media -->
      <div class="w3-xlarge w3-section">
          <a :href="facebookUrl" target="_blank"><i class="fa fa-facebook-official w3-hover-opacity" aria-hidden='true'></i></a>&nbsp;
          <a :href="linkedinUrl" target="_blank"><i class="fa fa-linkedin w3-hover-opacity" aria-hidden='true'></i></a>&nbsp;
          <a :href="mailAddress" target="_blank"><i class="fa fa-envelope w3-hover-opacity" aria-hidden='true'></i></a>
      </div>

      Copyright &copy; {{ year }} <a :href="homeUrlLocal">{{ siteName[local] }}</a>&emsp;|&emsp;
      Powered by <a :href="linkedinUrl" target="_blank">FISH UP</a>&emsp;|&emsp;
      {{ contactDescription[local] }}<a :href="'mailto:' + mailAddress">{{ mailAddress }}</a>

      <!-- local -->
      <p>
          <a :href="'/' + pageName" style='text-decoration: none;' :class="{ 'current-language': local === 'tw' }">繁中</a>&emsp;|&emsp;
          <a :href="'/en/' + pageName" style='text-decoration: none;' :class="{ 'current-language': local === 'en' }">English</a>&emsp;|&emsp;
          <a :href="'/fr/' + pageName" style='text-decoration: none;' :class="{ 'current-language': local === 'fr' }">Français</a>
      </p>
  </footer>`
})

// mount app
app.mount('#app')

// back to top button
$(function () {
  $('#to_top').click(function () {
    $('html,body').animate({ scrollTop: 0 }, 150);
  });
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $('#to_top').fadeIn(222);
    } else {
      $('#to_top').stop().fadeOut(222);
    }
  }).scroll();
});

// social media
function socialWindow(url) {
  const width = 590;
  const height = 550;
  const left = (screen.width - width) / 2;
  const top = (screen.height - height) / 2;
  const params = "menubar=no,toolbar=no,status=no,width=" + width + ",height=" + height + ",top=" + top + ",left=" + left;
  window.open(url, "NewWindow", params);
}

function setShareLinksAndImages() {
  // links
  const pageUrl = encodeURIComponent(document.URL);
  const pageTitle = encodeURIComponent(jQuery("meta[property='og:title']").attr("content"));
  const pageDescription = encodeURIComponent(jQuery("meta[property='og:description']").attr("content"));
  const twitterHashtages = encodeURIComponent('行列輸入法,Array30,fishup')
  const twitterRelated = 'misterfishup';
  const shareUrl = {
    line: "https://social-plugins.line.me/lineit/share?url=" + pageUrl,
    facebook: "https://www.facebook.com/sharer.php?u=" + pageUrl,
    twitter: "https://twitter.com/intent/tweet?url=" + pageUrl + "&text=" + pageTitle + "&hashtags=" + twitterHashtages + "&related=" + twitterRelated,
    telegram: "https://t.me/share/url?url=" + pageUrl + "&text=" + pageTitle,
    linkedIn: "https://www.linkedin.com/shareArticle?mini=true&url=" + pageUrl + "&title=" + pageTitle + '&summary=' + pageDescription
  }

  // images
  const folderPath = '/img/social-media/';
  const shareToLocal = { tw: '分享到 ', en: 'Share on ', fr: 'Partagez sur ' };

  $('img.line-share').attr({
    src: folderPath + 'line-icon.png',
    alt: shareToLocal[stringLocal] + 'Line',
    title: shareToLocal[stringLocal] + 'Line'
  }).on("click", function () {
    socialWindow(shareUrl.line);
  }).on('keypress', function (e) {
    if (e.key == 'Enter') {
      socialWindow(shareUrl.line);
    }
  });

  $('img.facebook-share').attr({
    src: folderPath + 'facebook-icon.png',
    alt: shareToLocal[stringLocal] + 'Facebook',
    title: shareToLocal[stringLocal] + 'Facebook'
  }).on("click", function () {
    socialWindow(shareUrl.facebook);
  }).on('keypress', function (e) {
    if (e.key == 'Enter') {
      socialWindow(shareUrl.facebook);
    }
  });

  $('img.twitter-share').attr({
    src: folderPath + 'twitter-icon.png',
    alt: shareToLocal[stringLocal] + 'Twitter',
    title: shareToLocal[stringLocal] + 'Twitter'
  }).on("click", function () {
    socialWindow(shareUrl.twitter);
  }).on('keypress', function (e) {
    if (e.key == 'Enter') {
      socialWindow(shareUrl.twitter);
    }
  });

  $('img.telegram-share').attr({
    src: folderPath + 'telegram-icon.png',
    alt: shareToLocal[stringLocal] + 'Telegram',
    title: shareToLocal[stringLocal] + 'Telegram'
  }).on("click", function () {
    socialWindow(shareUrl.telegram);
  }).on('keypress', function (e) {
    if (e.key == 'Enter') {
      socialWindow(shareUrl.telegram);
    }
  });

  $('img.linkedIn-share').attr({
    src: folderPath + 'linkedin-icon.png',
    alt: shareToLocal[stringLocal] + 'LinkedIn',
    title: shareToLocal[stringLocal] + 'LinkedIn'
  }).on("click", function () {
    socialWindow(shareUrl.linkedIn);
  }).on('keypress', function (e) {
    if (e.key == 'Enter') {
      socialWindow(shareUrl.linkedIn);
    }
  });
}

setShareLinksAndImages();
