<script>
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

	</script>
