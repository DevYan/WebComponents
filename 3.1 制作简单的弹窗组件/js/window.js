define(['jquery'],function($){
	function Window(){}

	Window.prototype = {
		alert:function(content){
			var boudingBox = $('<div class="window_boundingBox"></div>');
			boudingBox.appendTo('body');
			boudingBox.html(content);
		},
		confirm:function(){},
		prompt:function(){}
	}

	return{
		Window : Window
	}
})