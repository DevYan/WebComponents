define(['jquery','jqueryUI'],function($,$UI){
	function Window(){
		this.cfg = {
			width:500,
			height:300,
			title:'系统消息',
			content:"",
			hasCloseBtn:false,
			hanMask:true,
			isDraggable:true,
			dragHandle:null,
			skinClassName:null,
			text4AlertBtn:'确定',
			handler4AlertBtn:null,
			handler4CloseBtn:null
		};
	}

	Window.prototype = {
		alert:function(cfg){
			var CFG = $.extend(this.cfg,cfg),
			    boudingBox = $(
			    	'<div class="window_boundingBox">'+
			    		'<div class="window_header">'+CFG.title+'</div>'+
			    		'<div class="window_body">'+CFG.content+'</div>'+
			    		'<div class="window_footer"><input type="button" class="window_alertBtn" value="'+CFG.text4AlertBtn+'"></div>'+
			    	'</div>'
			    ),
			    btn = boudingBox.find('.window_alertBtn'),
			    mask = null;
			/*处理模态*/
			if (CFG.hanMask) {
				mask = $('<div class="window_mask"></div>');
				mask.appendTo("body");
			};

			boudingBox.appendTo('body');
			btn.click(function(){
				CFG.handler4AlertBtn && CFG.handler4AlertBtn(); //弹出窗口的确定按钮处理函数
				boudingBox.remove();
				mask&&mask.remove();
			});
			$.extend(this.cfg,cfg);
			boudingBox.css({
				width:CFG.width+'px',
				height:CFG.height+'px',
				left:(CFG.x||(window.innerWidth-CFG.width)/2)+'px',
				top:(CFG.y||(window.innerHeight-CFG.height)/2)+'px'
			});
			if(CFG.hasCloseBtn){
				var closeBtn = $('<span class="window_closeBtn">X</span>');
				closeBtn.appendTo(boudingBox);
				closeBtn.click(function(){
					CFG.handler4CloseBtn&&CFG.handler4CloseBtn(); //弹出窗口的关闭按钮处理函数
					boudingBox.remove();
					mask&&mask.remove();
				});
			}
			if (CFG.skinClassName) {
				boudingBox.addClass(CFG.skinClassName);
			};
			if(CFG.isDraggable){
				if (CFG.dragHandle) {
					boudingBox.draggable({handle:CFG.dragHandle});
				}else{
					boudingBox.draggable();
				}
			}
		},
		confirm:function(){},
		prompt:function(){}
	}

	return{
		Window : Window
	}
})