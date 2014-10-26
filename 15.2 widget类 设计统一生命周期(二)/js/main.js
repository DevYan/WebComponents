require.config({
	paths:{
		jquery:'jquery-2.1.1.min',
		jqueryUI:'jquery-ui.min'
	}
});

require(['jquery','window'],function($,w){
	$('.btn').click(function(){
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
});