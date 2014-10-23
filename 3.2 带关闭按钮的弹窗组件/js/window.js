define(['jquery'],function($){
	function Window(){}

	Window.prototype = {
		alert:function(content,handler){
			var boudingBox = $('<div class="window_boundingBox"></div>');
			boudingBox.appendTo('body');
			boudingBox.html(content);
			var btn = $('<input type="button" value="确定">');
			btn.appendTo(boudingBox);
			btn.click(function(){
				handler && handler(); //判断是否传入执行操作的函数，如果传入就执行
				boudingBox.remove();
			})
		},
		confirm:function(){},
		prompt:function(){}
	}

	return{
		Window : Window
	}
})