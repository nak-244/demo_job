### 反映方法

 - cssファイル
 - スクリプト関係

これらをolp.co.jp配下にアップロードする。

ジョブサイト管理画面のアナリティクスなどのタグをインポートするところに、外部ファイルとして読み込みをする。

source内では一番下部に配置されるため、これを最優先で読み込んでくれる。

### 確定仕様
- slick　（スライダー用）
- 横幅は1100～1200　（レスポンシブが難しい？）
- Bootstrap 4
- ヘッダーメニューはslickの下　ベージの上部で固定
- 枠線細く
- PC版でもハンバーガーメニュー　フルスクリーン

### 地図のフォント化
必要ファイル
- another_assets/sigotora_js/fonts/map.eot
- another_assets/sigotora_js/fonts/map.svg
- another_assets/sigotora_js/fonts/map.ttf
- another_assets/sigotora_js/fonts/map.woff

cssファイル
    @font-face {
      src: url("/_codetest/iconfont-for-map/assets/font/map.eot?z09ns2");
      src: url("/_codetest/iconfont-for-map/assets/font/map.eot?z09ns2#iefix") format("embedded-opentype"), url("/_codetest/iconfont-for-map/assets/font/map.ttf?z09ns2") format("truetype"), url("/_codetest/iconfont-for-map/assets/font/map.woff?z09ns2") format("woff"), url("/_codetest/iconfont-for-map/assets/font/map.svg?z09ns2#map") format("svg");
      font-family: 'map';
      font-style: normal;
      font-weight: normal
    }

    [class^="p-eveMap"], [class*=" p-eveMap"] {
      speak: none;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      position: absolute;
      right: 0;
      left: 0;
      font-family: 'map' !important;
      font-style: normal;
      font-variant: normal;
      font-weight: normal;
      text-transform: none;
      vertical-align: text-top
    }

    .p-eveMapLine:before {
      color: #ccc;
      content: "\e900"
    }

    .p-eveMapPref--hokkaido {
      color: #d5e8f7
    }

    .p-eveMapPref--hokkaido.is-open {
      color: #1f87d6
    }

    .p-eveMapPref--hokkaido:before {
      content: "\e90b"
    }

    .p-eveMapPref--aomori, .p-eveMapPref--iwate, .p-eveMapPref--akita, .p-eveMapPref--yamagata, .p-eveMapPref--miyagi, .p-eveMapPref--fukushima {
      color: #d5edf5
    }

    .p-eveMapPref--aomori.is-open, .p-eveMapPref--iwate.is-open, .p-eveMapPref--akita.is-open, .p-eveMapPref--yamagata.is-open, .p-eveMapPref--miyagi.is-open, .p-eveMapPref--fukushima.is-open {
      color: #24c0dc
    }

    .p-eveMapPref--aomori:before {
      content: "\e903"
    }

    .p-eveMapPref--iwate:before {
      content: "\e910"
    }

    .p-eveMapPref--akita:before {
      content: "\e902"
    }

    .p-eveMapPref--miyagi:before {
      content: "\e918"
    }

    .p-eveMapPref--yamagata:before {
      content: "\e92d"
    }

    .p-eveMapPref--fukushima:before {
      content: "\e90c"
    }

    .p-eveMapPref--ibaraki, .p-eveMapPref--tochigi, .p-eveMapPref--gumma, .p-eveMapPref--tokyo, .p-eveMapPref--saitama, .p-eveMapPref--chiba, .p-eveMapPref--kanagawa {
      color: #d8ecdf
    }

    .p-eveMapPref--ibaraki.is-open, .p-eveMapPref--tochigi.is-open, .p-eveMapPref--gumma.is-open, .p-eveMapPref--tokyo.is-open, .p-eveMapPref--saitama.is-open, .p-eveMapPref--chiba.is-open, .p-eveMapPref--kanagawa.is-open {
      color: #1ec180
    }

    .p-eveMapPref--ibaraki:before {
      content: "\e90e"
    }

    .p-eveMapPref--tochigi:before {
      content: "\e927"
    }

    .p-eveMapPref--gumma:before {
      content: "\e909"
    }

    .p-eveMapPref--saitama:before {
      content: "\e923"
    }

    .p-eveMapPref--chiba:before {
      content: "\e904"
    }

    .p-eveMapPref--tokyo:before {
      content: "\e929"
    }

    .p-eveMapPref--kanagawa:before {
      content: "\e913"
    }

    .p-eveMapPref--yamanashi, .p-eveMapPref--nagano, .p-eveMapPref--niigata, .p-eveMapPref--toyama, .p-eveMapPref--ishikawa, .p-eveMapPref--fukui, .p-eveMapPref--shizuoka, .p-eveMapPref--aichi, .p-eveMapPref--gifu {
      color: #eef9cc
    }

    .p-eveMapPref--yamanashi.is-open, .p-eveMapPref--nagano.is-open, .p-eveMapPref--niigata.is-open, .p-eveMapPref--toyama.is-open, .p-eveMapPref--ishikawa.is-open, .p-eveMapPref--fukui.is-open, .p-eveMapPref--shizuoka.is-open, .p-eveMapPref--aichi.is-open, .p-eveMapPref--gifu.is-open {
      color: #b3de15
    }

    .p-eveMapPref--yamanashi:before {
      content: "\e92f"
    }

    .p-eveMapPref--nagano:before {
      content: "\e91a"
    }

    .p-eveMapPref--niigata:before {
      content: "\e91d"
    }

    .p-eveMapPref--toyama:before {
      content: "\e92b"
    }

    .p-eveMapPref--ishikawa:before {
      content: "\e90f"
    }

    .p-eveMapPref--fukui:before {
      content: "\e906"
    }

    .p-eveMapPref--shizuoka:before {
      content: "\e926"
    }

    .p-eveMapPref--aichi:before {
      content: "\e901"
    }

    .p-eveMapPref--gifu:before {
      content: "\e908"
    }

    .p-eveMapPref--mie:before {
      content: "\e917"
    }

    .p-eveMapPref--shiga, .p-eveMapPref--kyoto, .p-eveMapPref--osaka, .p-eveMapPref--hyogo, .p-eveMapPref--nara, .p-eveMapPref--wakayama, .p-eveMapPref--mie {
      color: #fdf1bf
    }

    .p-eveMapPref--shiga.is-open, .p-eveMapPref--kyoto.is-open, .p-eveMapPref--osaka.is-open, .p-eveMapPref--hyogo.is-open, .p-eveMapPref--nara.is-open, .p-eveMapPref--wakayama.is-open, .p-eveMapPref--mie.is-open {
      color: #ffdd55
    }

    .p-eveMapPref--shiga:before {
      content: "\e924"
    }

    .p-eveMapPref--kyoto:before {
      content: "\e916"
    }

    .p-eveMapPref--osaka:before {
      content: "\e921"
    }

    .p-eveMapPref--hyogo:before {
      content: "\e90d"
    }

    .p-eveMapPref--nara:before {
      content: "\e91c"
    }

    .p-eveMapPref--wakayama:before {
      content: "\e92c"
    }

    .p-eveMapPref--tottori, .p-eveMapPref--shimane, .p-eveMapPref--okayama, .p-eveMapPref--hiroshima, .p-eveMapPref--yamaguchi {
      color: #fbecd9
    }

    .p-eveMapPref--tottori.is-open, .p-eveMapPref--shimane.is-open, .p-eveMapPref--okayama.is-open, .p-eveMapPref--hiroshima.is-open, .p-eveMapPref--yamaguchi.is-open {
      color: #ff9e1f
    }

    .p-eveMapPref--tottori:before {
      content: "\e92a"
    }

    .p-eveMapPref--shimane:before {
      content: "\e925"
    }

    .p-eveMapPref--okayama:before {
      content: "\e91f"
    }

    .p-eveMapPref--hiroshima:before {
      content: "\e90a"
    }

    .p-eveMapPref--yamaguchi:before {
      content: "\e92e"
    }

    .p-eveMapPref--kagawa, .p-eveMapPref--ehime, .p-eveMapPref--tokushima, .p-eveMapPref--kochi {
      color: #fbe1e1
    }

    .p-eveMapPref--kagawa.is-open, .p-eveMapPref--ehime.is-open, .p-eveMapPref--tokushima.is-open, .p-eveMapPref--kochi.is-open {
      color: #ff8e8e
    }

    .p-eveMapPref--kagawa:before {
      content: "\e911"
    }

    .p-eveMapPref--ehime:before {
      content: "\e905"
    }

    .p-eveMapPref--tokushima:before {
      content: "\e928"
    }

    .p-eveMapPref--kochi:before {
      content: "\e914"
    }

    .p-eveMapPref--okinawa {
      color: #dcd3f3
    }

    .p-eveMapPref--okinawa.is-open {
      color: #967ad6
    }

    .p-eveMapPref--fukuoka, .p-eveMapPref--saga, .p-eveMapPref--nagasaki, .p-eveMapPref--kumamoto, .p-eveMapPref--oita, .p-eveMapPref--miyazaki, .p-eveMapPref--kagoshima {
      color: #fbdeef
    }

    .p-eveMapPref--fukuoka.is-open, .p-eveMapPref--saga.is-open, .p-eveMapPref--nagasaki.is-open, .p-eveMapPref--kumamoto.is-open, .p-eveMapPref--oita.is-open, .p-eveMapPref--miyazaki.is-open, .p-eveMapPref--kagoshima.is-open {
      color: #d865a8
    }

    .p-eveMapPref--fukuoka:before {
      content: "\e907"
    }

    .p-eveMapPref--saga:before {
      content: "\e922"
    }

    .p-eveMapPref--nagasaki:before {
      content: "\e91b"
    }

    .p-eveMapPref--kumamoto:before {
      content: "\e915"
    }

    .p-eveMapPref--oita:before {
      content: "\e91e"
    }

    .p-eveMapPref--miyazaki:before {
      content: "\e919"
    }

    .p-eveMapPref--kagoshima:before {
      content: "\e912"
    }

    .p-eveMapPref--okinawa:before {
      content: "\e920"
    }

    .p-eveMv {
      z-index: -1;
      position: relative;
      margin: 1rem 0 1.6rem;
      padding: 2em 1em;
      border-radius: 10px;
      background: #fff
    }

    .p-eveMap {
      position: relative;
      width: 100%;
      padding-top: 55%
    }

    .p-eveMap>ul {
      margin: 0;
      margin-bottom: 0;
      padding-left: 1.5em;
      padding-left: 0;
      list-style: none
    }

    .p-eveMap>ul>li {
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      position: absolute;
      top: 5%;
      right: 0;
      bottom: 0;
      left: -30px;
      width: 100%;
      margin: auto;
      font-size: 95vw;
      line-height: .55;
      text-align: center;
      cursor: default;
      user-select: none
    }

    .p-eveList {
      margin: 0;
      margin-bottom: 3rem;
      padding-left: 1.5em;
      padding-left: 0;
      list-style: none
    }

    .p-eveList>li {
      padding: 10px 0;
      border-bottom: 1px solid #ddd
    }

    .p-eveList>li>p {
      margin: .5rem 0
    }

    .p-eveList>li>p.p-eveList__pref {
      font-weight: bold
    }

    @media only screen and (min-width: 480px) {
      body {
        font-size: 16px;
        font-size: 1.06667rem
      }
    }

    @media screen and (min-width: 768px) {
      .p-eveMap {
        padding-top: 380px
      }
      .p-eveMap>ul>li {
        left: 0;
        font-size: 720px
      }
      .p-eveList>li {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        padding-right: 1rem;
        padding-left: 1rem
      }
      .p-eveList>li>p {
        margin-right: 2rem
      }
      .p-eveList>li>p.p-eveList__pref {
        min-width: 5rem
      }
    }

    @media (min-width: 930px) {
      .l-container {
        max-width: 900px
      }
    }
