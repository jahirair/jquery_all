/////*** magnifiq popup 
<script src="assets/js/magnific-popup.min.js"></script>

//magnific popup activation

  $('.project-popup').magnificPopup({
	  type:'image',
	  gallery:{
		enabled:true
	  },
	  
	  });
    
	  $('.video-popup').magnificPopup({
	  type:'iframe'
	  
	  });
    
	// html for magnific popup
  
   <a href="https://www.youtube.com/watch?v=CRBsaGSOGwQ" class="video-popup">
      <i class="far fa-play-circle"></i>
   </a>
   
   <a href="assets/img/banner1.750.jpg" class="project-popup">
        <i class="far fa-plus-square"></i>
   </a>


////**** One page nav

<script src="assets/js/onepagenav.js"></script>
///main.js
$('#nav').onePageNav();
///html
<ul class="navbar-nav ml-auto" id="nav">
   <li class="current"><a href="#home">Home</a></li>
   <li><a href="#about">About</a></li>
   <li><a href="#services">services</a></li>
   <li><a href="#projects">projects</a></li>
   <li><a href="#team">team</a></li>
   <li><a href="#testimonial">testimonial</a></li>
   <li><a href="#blog">blog</a></li>
   <li><a href="#contact">contact</a></li>
</ul>

<section class="banner-area owl-carousel h-100" id="home" >
	
	
//////****counterup js
<script src="assets/js/counterup.min.js"></script>
//main.js
$('.counter').counterUp({
    delay: 10,
    time: 1000
});
//html
<div class="single-counter">
<i class="fas fa-briefcase"></i>
<h4><span class="counter">543</span> projects</h4>
</div>


/////*** sticky nav
//main.js
//put this code out side document ready
$(window).on('scroll',function(){
	 if($(this).scrollTop()>1){
		 $('.header-area').addClass("sticky");
	 }
	 else{
		 $('.header-area').removeClass("sticky");
	 }
 })
//style.css
.header-area.sticky {
	background-color: #333;
	position: fixed;
	padding: 5px 0;
	z-index: 99;
}


                     
