define(['animate'],function(a){
	function TabView(){
		this.name = 'TabView';
		this.animate = new a.Animate();
	}

	return{
		TabView : TabView
	}
});