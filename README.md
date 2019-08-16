### 反映方法

 - cssファイル
 - スクリプト関係

これらをolp.co.jp配下にアップロードする。

ジョブサイト管理画面のアナリティクスなどのタグをインポートするところに、外部ファイルとして読み込みをする。

source内では一番下部に配置されるため、これを最優先で読み込んでくれる。

## jsファイル内容
### グローバルメニュー上部固定用  
 ```html
<script src="https://www.olp.co.jp/jobsite_assets/js/fixed.js"></script>
 ```

### カンタン仕事検索用
 ```html
<script src="https://www.olp.co.jp/jobsite_assets/js/search.js"></script>
 ```
