require.config({
	paths:{
		jquery:'jquery-2.1.1.min',
		jqueryUI:'jquery-ui.min'
	}
});

require(['jquery','window'],function($,w){
	$('.btn_alert').click(function(){
		var win = new w.Window().alert({
			title:'提示',
			content:'Welcome!!!',
			width:300,
			height:150,
			y:250,
			x:600,
			hasCloseBtn:true,
			text4AlertBtn:'OK',
			dragHandle:'.window_header',
			skinClassName:'window_skin_a',
			// handler4AlertBtn:function(){
			// 	alert('你点击了确定按钮');
			// },
			// handler4CloseBtn:function(){
			// 	alert('你点击了关闭按钮');
			// }
		}).on('alert',function(){
			alert('你点击了确定按钮')
		}).on('alert',function(){
			alert('确定按钮第二次回调')
		}).on('alert',function(){
			alert('确定按钮第三次回调')
		}).on('close',function(){
			alert('第一次点击了关闭按钮')
		}).on('close',function(){
			alert('关闭按钮第二次回调')
		});
	});

	$('.btn_confirm').click(function(){
		var win = new w.Window().confirm({
			title:'系统消息',
			content:'您确定要删除这个文件吗',
			width:300,
			height:150,
			y:50,
			x:600,
			text4ConfirmBtn:'是',
			text4CancelBtn:'否',
			dragHandle:'.window_header'
		}).on('confirm',function(){
			alert('确定');
		}).on('cancel',function(){
			alert('取消');
		});
	});

	$('.btn_prompt').click(function(){
		var win = new w.Window().prompt({
			title:'请输入您的名字',
			content:'我们将会为您保密您输入的信息',
			width:300,
			height:150,
			y:50,
			text4PromptBtn:'输入',
			text4CancelBtn:'取消',
			defaultValue4PromptInput:'张三',
			dragHandle:'.window_header',
			handler4PromptBtn:function(inputVlaue){
				alert('您输入的内容是：'+inputVlaue);
			},
			handler4CancelBtn:function(){
				alert('取消');
			}
		});
	});

	$('.btn_common').click(function(){
		var win = new w.Window().common({
				content:'这是一个通用弹窗',
				width:300,
				height:150,
				hasCloseBtn:true
		});
	});
});