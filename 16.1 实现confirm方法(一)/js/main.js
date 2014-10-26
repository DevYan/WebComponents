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

});