require.config({
	paths:{
		jquery:'jquery-2.1.1.min'
	}
});

require(['jquery','window'],function($,w){
	$('.btn').click(function(){
		new w.Window().alert({
			content:'Welcome!!!',
			handler:function(){
				alert('you click the button');
			},
			width:300,
			height:150,
			y:550
		});
	});
});