define(['jquery'],function($){
	function Window(){
		this.cfg = {
			width:500,
			height:300
		};
	}

	Window.prototype = {
		alert:function(content,handler,cfg){
			var boudingBox = $('<div class="window_boundingBox"></div>');
			boudingBox.appendTo('body');
			boudingBox.html(content);
			var btn = $('<input type="button" value="确定">');
			btn.appendTo(boudingBox);
			btn.click(function(){
				handler && handler(); //判断是否传入执行操作的函数，如果传入就执行
				boudingBox.remove();
			});
			$.extend(this.cfg,cfg);
			boudingBox.css({
				width:this.cfg.width+'px',
				height:this.cfg.height+'px',
				left:(this.cfg.x||(window.innerWidth-this.cfg.width)/2)+'px',
				top:(this.cfg.y||(window.innerHeight-this.cfg.height)/2)+'px'
			});
		},
		confirm:function(){},
		prompt:function(){}
	}

	return{
		Window : Window
	}
})