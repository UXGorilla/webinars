
const init = {
	props: [],
	created(){
	  axios.get('https://uxgorilla.com/wp-json/uxgorilla/v1/webinars')
	   .then( res =>  {
	      alert('got data');
	      state.setData(res.data); 
		  router.push('list');	      
	    }).then(res => console.log(res))
	},
}