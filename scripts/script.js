const routes = [
	{path:'/details/:id', component: detailsView},
	{path: '/', component: listView}
];

const router = new VueRouter({
	routes
});


const state = {
	data: null,
	setData: function(_data){
		console.log('Setting data');
		this.data = _data;
	},
	getData: function(){
		console.log('Returning data');
		return this.data;
	},
	getUpcomingWebinar: function(){
		const data = this.data;
		const upcoming = data.filter( (e)=> (
			 new Date() - new Date(e.meta.broadcast_date)) < 0)
		
		return upcoming;
	},
	getPreviousWebinar: function(){
		const data = this.data;
		const previous = data.filter( (e)=> (
			 new Date() - new Date(e.meta.broadcast_date)) > 0)
		return previous;
	}
}



var vm = new Vue({
	el:'#app',
	router,
	components:{
		'uxg-list-view': listView,
		'uxg-header-view': headerView,
		'uxg-detail-view': detailsView,
		'uxg-footer-view': footerView,
	},	
})