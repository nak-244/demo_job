### 反映方法

 - cssファイル
 - スクリプト関係

これらをolp.co.jp配下にアップロードする。

ジョブサイト管理画面のアナリティクスなどのタグをインポートするところに、外部ファイルとして読み込みをする。

source内では一番下部に配置されるため、これを最優先で読み込んでくれる。

## 追加ファイルURL
### JS
 ```html
 <script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
 <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
 <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
 <script src="https://www.olp.co.jp/jobsite_assets/js/animate-in.js"></script>
 <script src="https://www.olp.co.jp/jobsite_assets/js/smooth-scroll.js"></script>
 <script src="https://www.olp.co.jp/jobsite_assets/js/fixed.js"></script>
 <script src="https://www.olp.co.jp/jobsite_assets/js/search.js"></script>
 <script src="https://www.olp.co.jp/jobsite_assets/js/load.js"></script>
 <script src="https://www.olp.co.jp/jobsite_assets/js/slick.min.js"></script>
 <script src="https://www.olp.co.jp/jobsite_assets/js/slick_go.js"></script>
 <script src="https://www.olp.co.jp/jobsite_assets/js/japanmap_start.js"></script>
 <script src="https://www.olp.co.jp/jobsite_assets/js/accordion.js"></script>
 ```

### CSS
```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" type="text/css">
<link rel="stylesheet" type="text/css" href="https://www.olp.co.jp/jobsite_assets/css/slick-theme.css">
<link rel="stylesheet" type="text/css" href="https://www.olp.co.jp/jobsite_assets/css/slick.css">
```

## JS CSS ファイル内容
### グローバルメニュー上部固定用  
 ```html
<script src="https://www.olp.co.jp/jobsite_assets/js/fixed.js"></script>
 ```

### カンタン仕事検索用
 ```html
<script src="https://www.olp.co.jp/jobsite_assets/js/search.js"></script>
 ```

### ロード時ロゴ表示
  ```html
 <script src="https://www.olp.co.jp/jobsite_assets/js/load.js"></script>
  ```

### slick-slider
```html
<link rel="stylesheet" type="text/css" href="https://www.olp.co.jp/jobsite_assets/css/slick-theme.css">
<link rel="stylesheet" type="text/css" href="https://www.olp.co.jp/jobsite_assets/css/slick.css">
<script src="https://www.olp.co.jp/jobsite_assets/js/slick.min.js"></script>
<script src="https://www.olp.co.jp/jobsite_assets/js/slick_go.js"></script>
```

### 二段階MAP
```html
<script src="https://www.olp.co.jp/jobsite_assets/js/japanmap_start.js"></script>
<link rel="stylesheet" type="text/css" href="https://www.olp.co.jp/jobsite_assets/css/japanmap.css">
<script src="https://www.olp.co.jp/jobsite_assets/js/jquery.japan-map.js"></script>
<script src="https://www.olp.co.jp/jobsite_assets/js/map_setting.js"></script>
```

### スマホ用アコーディオン（エリア選択）
```html
 <script src="https://www.olp.co.jp/jobsite_assets/js/accordion.js"></script>
```
