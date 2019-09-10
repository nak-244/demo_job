 $(function(){

  		var $mapObj = $("#map");
  		$mapObj.on("load", function(){
  			// iframe読み込み後、iframe内のcanvasのサイズを取得し、iframeのサイズを設定する
  			var $iframeCanvas = $('iframe:first').contents().find("#japan-map-container > canvas");
  			$mapObj.attr({
  				width : $iframeCanvas.attr("width"),
  				height : $iframeCanvas.attr("height")
  			});
  		});
  	});
