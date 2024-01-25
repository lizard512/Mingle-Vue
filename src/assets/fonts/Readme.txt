字體樣式 資料名稱&網站介紹

辰宇落雁體 : ChenYuluoyan-Thin-Monospaced.ttf
https://github.com/Chenyu-otf/chenyuluoyan_thin?tab=readme-ov-

open 粉圓 : jf-openhuninn-2.0.ttf
https://justfont.com/huninn/

濑户字体 :  NaikaiFont-Regular-Lite.ttf
https://github.com/max32002/naikaifont


引入範例
<template>
  <div class="text-Font-Account">
    此元素使用 'Accounttext' 字體
  </div>
</template>

<style scoped>
/* 字體樣式改變 */
@font-face {
    font-family: 'Accounttext';
    /* src: url('@fonts/ChenYuluoyan-Thin-Monospaced.ttf') format('opentype'); */
    /* src: url('@fonts/jf-openhuninn-2.0.ttf') format('truetype'); */
    src: url(https://cdn.jsdelivr.net/gh/max32002/naikaifont@1.0/webfont/NaikaiFont-Regular-Lite.woff2) format("woff2");
}

.text-Font-Account {
    font-family: 'Accounttext', sans-serif;
}
</style>





