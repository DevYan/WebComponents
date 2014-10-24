require.config({
	paths:{
		jquery:'jquery-2.1.1.min'
	}
});

require(['jquery','window'],function($,w){
	$('.btn').click(function(){
		new w.Window().alert({
			title:'提示',
			content:'Welcome!!!',
			handler:function(){
				alert('you click the button');
			},
			width:300,
			height:150,
			y:250,
			x:600,
			hasCloseBtn:true,
			text4AlertBtn:'OK',
			skinClassName:'window_skin_a',
			handler4AlertBtn:function(){
				alert('你点击了确定按钮');
			},
			handler4CloseBtn:function(){
				alert('你点击了关闭按钮');
			}
		});
	});
});