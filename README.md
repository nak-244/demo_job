### ディレクトリ説明
* ver1 ・・・ 現状のベスト
* ver2 ・・・ jsファイルオリジナル版
* ver3 ・・・ カスタマイズ確認用

### 直接指定CSS
ジョブサイト標準のスタイルを解除するため

~~~html
<style type="text/css">
.col-1 {
  flex: initial;
  max-width: initial;
}
#main-wrap {
    width: initial;
    margin: initial;
    overflow: initial;
}
.main {
    width: initial;
    margin: initial;
}
.col-1, .col-2, .col-3, .col-4, .col-5, .col-6, .col-7, .col-8, .col-9, .col-10, .col-11, .col-12, .col, .col-auto, .col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm, .col-sm-auto, .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12, .col-md, .col-md-auto, .col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg, .col-lg-auto, .col-xl-1, .col-xl-2, .col-xl-3, .col-xl-4, .col-xl-5, .col-xl-6, .col-xl-7, .col-xl-8, .col-xl-9, .col-xl-10, .col-xl-11, .col-xl-12, .col-xl, .col-xl-auto {
    padding-right: initial;
    padding-left: initial;
}
@media screen and (max-width: 768px) {
.center-free {
    width: initial;
    padding: initial;
    margin:  initial;
    box-sizing: initial;
}
}
</style>
~~~
### レイアウト指定
[変更URL:https://olp-cat.jp/aspadmnt/index.cfm?fuseaction=layoutset.list](https://olp-cat.jp/aspadmnt/index.cfm?fuseaction=layoutset.list)  
#### 変更前
■[CAT：https://olp-cat.jp/](https://olp-cat.jp/) 試験用
1. フリーエリアNo.1
1. カンタン仕事検索
1. 新着のお仕事
1. バナー枠No.1
1. お知らせ・最新情報
1. ランダムバナー

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
上記コードは[JMerge](http://demo.lateralcode.com/jmerge/)でall.jsファイルに統合している。

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
