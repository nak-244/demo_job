### URLメモ
* index.html ジョブサイト管理画面へ貼り付ける
* map.html 地図用
* search.html [検索画面](https://sigotora.jp/index.cfm?fuseaction=contents.fcts&cid=227)
* detail.html [詳細画面](https://www.olp.co.jp/ver1/detail.html)

### 0927にやること
[デザインカスタマイズ](https://sigotora.jp/aspadmnt/index.cfm?fuseaction=customDesign.edit)

■ヘッダー設定
* 外部css
* 外部js
* モーダル部分まで記述済

■フッター設定
* 下記内容に変更

```html:フッター
<footer>
<p id="page-top"><a href="#">▲ ページ上部へ</a></p>
<ul class="subcontents">
  <li><a href="https://sigotora.jp/">オープンループパートナーズ求人情報TOP</a></li>
  <li><a href="https://www.olp.co.jp/company/" target="_blank">会社概要</a></li>
  <li><a href="https://www.olp.co.jp/privacy/policy.html" target="_blank">個人情報保護方針 </a></li>
  <li><a href="https://sigotora.jp/index.cfm?fuseaction=contents.fcts&cid=230">お問い合わせ</a></li>
  <li><a href="https://sigotora.jp/index.cfm?fuseaction=contents.fcts&cid=231">サイトマップ</a></li>
</ul>
</footer>
```
#### 元々の記述
```html:フッター
<footer>
<p id="page-top"><a href="#">▲ ページ上部へ</a></p>

<ul class="subcontents">
	<li><a href="https://sigotora.jp/">オープンループパートナーズ求人情報TOP</a></li>
	<li><a href="http://www.olp.co.jp/" target="_blank">会社概要</a></li>
	<li><a href="https://www.olp.co.jp/privacy/policy.html" target="_blank">個人情報保護方針 </a></li>
	<li><a href="https://sigotora.jp/index.cfm?fuseaction=contents.inquiries">お問い合わせ</a></li>
	<li><a href="https://sigotora.jp/index.cfm?fuseaction=contents.sitemap">サイトマップ</a></li>
</ul>
</footer>
```

■サイドメニュー設定
* OFFにする

■案件リスト（画像なし）
* モーダルより下をコピペ済

■案件詳細（画像なし）
* モーダルより下をコピペ済

#### [レイアウト設定](https://sigotora.jp/aspadmnt/index.cfm?fuseaction=layoutset.list)

※元々の設定
1.  カンタン仕事検索
2.  トップ特集
3.  フリーエリア№2
4.  フリーエリア№3
5.  フリーエリア№4
6.  フリーエリア№5
7.  新着のお仕事
8.  フリーエリア№1

■トップページのデータを作成
* [TOPフリーエリア設定](https://sigotora.jp/aspadmnt/index.cfm?fuseaction=topfreearea.list)
* フリーエリア№6にデータあり
* レイアウト設定に配置

#### 確認事項
* 全ページのレイアウト
* 検索ページ・支店一覧ページ・お問い合わせページ・サイトマップ　「ヘッダーをデフォルトにしても大丈夫か確認


やること
* 仕事リストの【前へ　何件　次へ】のレイアウト
