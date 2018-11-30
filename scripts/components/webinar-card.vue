const listView = {
  props:['data','temp'],
  created(){
      const vm = this;
      axios.get('https://uxgorilla.com/wp-json/uxgorilla/v1/webinars')
        .then( res =>  {
          state.setData(res.data); 
          vm.data = state.getUpcomingWebinar();
        });
  },  
  methods:{
    route: function(webinar){
      return router.push({path: `/details/${webinar.ID}`});
    },
    showByStatus(status){
      if(status){

          const vm = this;

          if(status === 'upcoming'){

            let filteredData = state.getUpcomingWebinar();
            if(filteredData && filteredData.length){
              vm.data = filteredData;
            }else{
              alert("Unable to get the Upcoming webinar")
            }

          }else if(status === 'previous'){

            let filteredData = state.getPreviousWebinar();
            if(filteredData && filteredData.length){
              vm.data = filteredData;
            }else {
              alert("Unable to get the Previous webinar")
            }
          }
      }
    }
  },
  template:`
  <div>
    <div class="text-center Webinar">
      <h1>Webinars</h1>
    </div>

    <div class="container cta">
      <div class="btn-group btn-group-toggle" data-toggle="buttons">
        <label class="btn btn-secondary active" @click="showByStatus('upcoming')">
          <input type="radio" name="options" id="option2" autocomplete="off"> Upcoming
        </label>
        <label class="btn btn-secondary" @click="showByStatus('previous')">
          <input type="radio" name="options" id="option1" autocomplete="off" checked> Previous
        </label>
      </div>  
    </div>
    <div class="container" style="margin-bottom: 132px;">
        <div v-if="!data" class="text-center">
      <p style="margin: 10px;"><b>Loading</b>
      <p class="preloader"><p>
    </div>
    <div class="container" v-if="data">
      <div class="row" style="justify-content: center;">
      <div class="main-row-webinar"  v-for='webinar in data'>
        <div class="col-sm webinar-card" :id='webinar.ID'>
          <div class="row">
            <div class="col-4 text-center">
              <img  :src="webinar.meta.presenter_2_image"> 
              <div>
                <p><b>{{webinar.meta.presenter_2_name[0]}}</b></p>
                <p>{{webinar.meta.webinar_job_title[0]}}</p>
              </div>
            </div>
            <div class="col-8 fix-button">
              <div class="topic-inner">
                <p class="topic-name">{{webinar.post_title}}</p>
                <hr> 
                <p>{{webinar.meta.webinar_schedule_date[0]}}</p>
                <div v-if="!webinar.meta.recorded_webinar_link">
                  <button :id="webinar.ID" class="btn webinar-card-btn" @click="route(webinar)">{{webinar.meta.button_status[0]}}</button>
                </div> 
                <div v-if="webinar.meta.recorded_webinar_link">
                   <button :id="webinar.ID" class="btn webinar-card-btn">
                    <a :href="webinar.meta.recorded_webinar_link">
                      {{webinar.meta.button_status[0]}}
                    </a>
                  </button>
                </div>                           
              </div>
            </div>
          </div> 
        </div>
      </div>
    </div>
    </div>
    </div>    
    

`
}