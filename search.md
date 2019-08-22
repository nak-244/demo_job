## 検索について
登録がない市町村はセレクトボックスに表示されないようにする。  
チェックボックス式にするには時間がかかりそうだったので、標準のセレクトボックスを用いて、最大5つの市区町村を同時選択できるようにする。  

### 都道府県を選ぶ
~~~html
<span class="checkmark"> <script>
			//エリアを絞り込むと、エリアに対応した都道府県のみ検索条件として表示させる
			function ajaxAreaToKen(){
				var url = "index.cfm?fuseaction=job.ajax_areatopref";
				var selected_ken = $('select[name="srh_ken_param"]').val();
				var selected_city = $('select[name="srh_city_param"]').val();

				var arr_area_param = [];
				$('[name="srh_area_param"]:checked').each(function(){
					arr_area_param.push($(this).val());
				});
				var str_area_param = arr_area_param.join(',');//現在選択中のエリアID(カンマ区切り)

				$.post(url,{
					aj_areatopref:true,
					aj_area_id:str_area_param
				},function(response){
					if(!response || response.substr(0,7) != '<option'){
						var resHtml = '<option value="">----</option>';//デフォルト値
					} else {
						var resHtml = response;
					}
					$('select[name="srh_ken_param"]').html(resHtml);

					resumeSelectedKen(selected_ken);
					ajaxKenToCity(true,selected_city);
				});
			}
			//あらかじめ選択していた都道府県を再度選択状態にする
			function resumeSelectedKen(ken_jis){
				$('select[name="srh_ken_param"] option').each(function(){
					if($(this).val() == ken_jis){
						$('select[name="srh_ken_param"]').val(ken_jis);
					}
				});
			}
			//県を絞り込むと、県に対応した市区郡のみ検索条件として表示させる
			//resume_flg=trueにすると、resume_idをselectedにする(ページ読み込み直後や、エリア変更により都道府県selectが変更された時に使用する)
			function ajaxKenToCity(resume_flg,resume_id){
				var url = "index.cfm?fuseaction=job.ajax_areatopref";
				var now_val = $('select[name="srh_city_param"]').val();
				var ken_jis = $('select[name="srh_ken_param"]').val();

				$.post(url,{
					aj_kentocity:true,
					aj_ken_jis:ken_jis
				},function(response){
					if(!response || response.substr(0,7) != '<option'){
						var resHtml = '<option value="">----</option>';//デフォルト値
					} else {
						var resHtml = response;
					}
					$('select[name="srh_city_param"]').html(resHtml);

					if(resume_flg){
						resumeSelectedCity(resume_id);
					}
				});
			}
			//あらかじめ選択していた市区郡を再度選択状態にする
			function resumeSelectedCity(city_cd){
				$('select[name="srh_city_param"] option').each(function(){
					if($(this).val() == city_cd){
						$('select[name="srh_city_param"]').val(city_cd);
					}
				});
			}

			$(function(){
				ajaxAreaToKen();
				ajaxKenToCity(true,"");//ページ読込み直後、検索に指定していた市区郡をselectedにする
				$('[name="srh_area_param"]').on('change',function(){
					ajaxAreaToKen();
				});
				$('[name="srh_ken_param"]').on('change',function(){
					ajaxKenToCity(false,"");
				});
			});
		</script> <select name="srh_ken_param"><option value="">----</option><option value="1">北海道</option><option value="2">青森県</option><option value="3">岩手県</option><option value="4">宮城県</option><option value="5">秋田県</option><option value="6">山形県</option><option value="7">福島県</option><option value="8">茨城県</option><option value="9">栃木県</option><option value="10">群馬県</option><option value="11">埼玉県</option><option value="12">千葉県</option><option value="13">東京都</option><option value="14">神奈川県</option><option value="15">新潟県</option><option value="16">富山県</option><option value="17">石川県</option><option value="18">福井県</option><option value="19">山梨県</option><option value="20">長野県</option><option value="21">岐阜県</option><option value="22">静岡県</option><option value="23">愛知県</option><option value="24">三重県</option><option value="25">滋賀県</option><option value="26">京都府</option><option value="27">大阪府</option><option value="28">兵庫県</option><option value="29">奈良県</option><option value="30">和歌山県</option><option value="33">岡山県</option><option value="34">広島県</option><option value="35">山口県</option><option value="36">徳島県</option><option value="37">香川県</option><option value="38">愛媛県</option><option value="39">高知県</option><option value="40">福岡県</option><option value="41">佐賀県</option><option value="42">長崎県</option><option value="43">熊本県</option><option value="44">大分県</option><option value="45">宮崎県</option><option value="46">鹿児島県</option><option value="47">沖縄県</option> </select> <b>＞</b> <select name="srh_city_param"><option value="">----</option> </select> </span> <span class="checkmark"> <b>＞</b> <select name="srh_city_param"><option value="">----</option> </select> </span>
~~~
### 市区町村を選ぶ
~~~html
<span class="checkmark"> <b>＞</b> <select name="srh_city_param"><option value="">----</option> </select> </span>
~~~
