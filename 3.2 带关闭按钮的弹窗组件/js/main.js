require.config({
	paths:{
		jquery:'jquery-2.1.1.min'
	}
});

require(['jquery','window'],function($,w){
	$('.btn').click(function(){
		new w.Window().alert('welcome!',function(){
			alert('you click the button');
		});
	});
});