### 數據來源

行列輸入法為開源的輸入法，編碼資料皆可在網路找到。

本站的數據來自 jrywu 在 GitHub 上的 [DIME 專案](https://github.com/jrywu/DIME/tree/master/Tables)（ .cin 檔）以及[新行列輸入法](https://www.ptt.cc/bbs/Array/M.1554494219.A.F95.html)的檔案內容。

註：修正二級簡碼表 ux 誤植為 wx 的錯誤。（2020/11/05）

### 詳細作法

1. 首先從上述 DIME 專案中手動創建本資料夾中的 xxx_DIME.txt 檔以及 key_mapping.txt，主要是將不同數據分類並刪除不必要的文字（如提示句、空白行）
2. 我特別將 key_mapping.txt 中的英文鍵 v 改成 +，只是讓取代行列 30 鍵「下」的符號時，英文鍵 v 不會被取代掉
3. 使用 python 將數據整理，接著轉換成 js 物件的字串，最後寫入本專案 data 資料夾中的 js 檔
4. coincident_code.txt 是我手動寫的檔，純粹記載資訊讓有興趣的人可以觀看，文件內的行列編碼並沒有在此網站中使用
5. special_explanation.txt 以及 words.txt 皆是從新行列輸入法內的檔案抓出來了，分別是附有說明的特別碼編碼檔以及詞彙的行列編碼檔
6. special_explanation.txt 不含「的」字（被我手動拿掉了）

### 感謝

在此特別感謝行列輸入法發明者廖明德先生開源的精神。
