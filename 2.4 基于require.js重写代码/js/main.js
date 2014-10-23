require(['tabview','treeview'],function(tab,tree){
	var tabView = new tab.TabView(),
		treeView = new tree.TreeView();
	alert(tabView.name);
	alert(treeView.name);
	alert(tabView.animate.name);
});