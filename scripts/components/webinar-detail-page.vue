const detailsView = {
props:['data', 'temp'],
created(){
	const vm = this;
	const allData = state.getData();
	if(Array.isArray(allData)){
		allData.forEach( function(element, index) {
			if(element.ID == vm.$route.params.id){
				vm.data = element;
			}
		});
	}
	if(!this.data){
		router.push({path: '/'});
	}
},
methods:{
	scrollToForm(){
		document.querySelector('.webinar-iframe').scrollIntoView({behavior:'smooth'})
	}
},
template:`
<div class="container-fluid" style="margin-bottom: 85px;">
	<div class="backg-form"  v-if="data">
		<div class="container">
			<nav aria-label="breadcrumb">
				<ol class="breadcrumb newBreadcrumb">
					<li class="breadcrumb-item">
						<router-link to="/">
							<a>Webinars</a>
						</router-link>
					</li>
					<li class="breadcrumb-item active" aria-current="page" disabled>Registration</li>
				</ol>
			</nav>
		</div>
		<div class="container">
			<div class="row">
				<div class="col webinar-speaker-col-left">
					<div class="row">
					<h1 v-if="data.post_title"><b>{{data.post_title}}</b></h1>
					</div>
					<div class="container-fluid mobilefix">
						<div class="row speakers-section">
							<div class="col-sm-2 speakersimage">
								<img v-if="data.meta.presenter_2_image" 
									 :src="data.meta.presenter_2_image">
							</div>
							<div 
								class="col-sm" 
								style="padding: 12px 12px;"
								v-if="data.meta.presenter_2_name">
							<h3>{{data.meta.presenter_2_name[0]}}</h3>
							<p 
								v-if="data.meta.webinar_job_title">
								{{data.meta.webinar_job_title[0]}}
							</p>
						</div>
					</div>
				</div>
				<div class="row">
					<div 
						class="about_speaker" 
						v-if="data.meta.about_speaker">
						<p>{{data.meta.about_speaker[0]}}</p>
					</div>              
				</div>
			</div>
			<div class="col-sm ninjaform">
				<span 
					class="webinar-date" 
					v-if="data.meta.webinar_schedule_date">
					<p><b>{{data.meta.webinar_schedule_date[0]}}</b></p>
				</span>
				<span v-if="data.meta.webinar_ninja_form">
					<iframe class="webinar-iframe"
						:src="data.meta.webinar_ninja_form"
						scrolling="no" 
						>
					</iframe>
				</span>
				<span v-else>
					<iframe src=""
							style=" width: 100%; 
									height: 450px;" 
					>						
					</iframe>
				</span>					
		</div>
	</div>
</div>
</div>
<div class="row detail-topic-banner">
	<div class="container">
		<div class="row">
			<div class="col-sm-6">
				<h2>About This Webinar</h2>
				<p 
				class="text-justify" 
				v-if="data.post_content">
				{{data.post_content}}
			</p>
			<button class="btn btn-default details-btn" @click="scrollToForm()">Register</button>
		</div>
		<div class="col-sm-4 text-center">
			<img class="topicimage" :src="data.meta.webinar_topic_image[0]">              
		</div>
		</div>
	</div>
	
	
</div>
 <div class="container-fluid">
	<div class="container presenters">
		<h2 class="text-center">Presenters</h2>
		<div class="row">
			<div class="col-sm text-center">
				<div>
					<img 
						v-if="data.meta.presenter_1_image" 
						:src="data.meta.presenter_1_image" 
						class="rounded-circle">
					<h4 
						v-if="data.meta.presenter_1_name">
						{{data.meta.presenter_1_name[0]}}
					</h4>  
					<p>UX Gorilla</p>
				</div>
			</div>
			<div class="col-sm text-center">
					<img 
					v-if="data.meta.presenter_2_image" 
					:src="data.meta.presenter_2_image" 
					class="rounded-circle">
					<h4 
						v-if="data.meta.presenter_2_name">
						{{data.meta.presenter_2_name[0]}}
					</h4>  
					<p 
						v-if="data.meta.webinar_job_title">
						{{data.meta.webinar_job_title[0]}}
					</p>
			</div>
		</div>  
	</div>
</div>
</div>
`
}