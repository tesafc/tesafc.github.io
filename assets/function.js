//updated selectors imagesloaded
$(function(){
	/* 瀑布流區塊div */
	var $container = $('.masonry');

	//當圖片讀取完畢才執行
	$container.imagesLoaded(function (){
		//選擇瀑布流的區塊名稱
		$container.masonry({
			itemSelector: '.masonry-item'
		})
	});
});
      
