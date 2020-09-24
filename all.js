/// no conflict jquery

(function($){
	"use strick";
	
	jQuery.(document).ready(function($){
		//activation codes
	});
	
	
	//window load function outside document ready
	 $(window).on('scroll',function(){
	 if($(this).scrollTop()>1){//pixel valu
		 $('.header-area').addClass("sticky");
	 }
	 else{
		 $('.header-area').removeClass("sticky");
	 }
	});
	//window load end
	
}(jQuery));
/// no conflict jquery end


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
<!-- /*v1.10.2 for counterup*/ -->
      <script src="assets/js/jQuery.10.2.js"></script>

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

/////***owl carousel
<script src="assets/js/owl.carousel.min.js"></script>
//css
<!-- Owl Carousel css -->
      <link rel="stylesheet" href="assets/css/owl.carousel.min.css">
      <!-- Owl Carousel theme css -->
      <link rel="stylesheet" href="assets/css/owl.theme.default.css">
	      
//main.js
$('.clients').owlCarousel({
    loop:true,
	dots:false,
	nav:false,
	autoplay:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            
        },
        600:{
            items:2,
            
        },
        992:{
            items:4,
            
        }
    }
});

//html
<section class="banner-area owl-carousel h-100" id="home" >
         <div class="single-banner  h-100 bg" style="background-image:url('assets/img/banner1.1500.jpg');">
            <div class="container h-100">
               <div class="row h-100">
		       
		       
//css

.banner-area.owl-carousel .owl-stage-outer {
	/*/ if in the same div two cls . must be closer */
	height: 100%;
}

.banner-area.owl-carousel .owl-stage {
	/*/ if in the same div two cls . must be closer */
	height: 100%;
}

.banner-area.owl-carousel.owl-drag .owl-item {
	/*/ if in the same div two cls. must be closer  */
	height: 100%;
}

.banner-area .owl-dots .owl-dot {
	background: red !important;
	display: block;
	height: 20px;
	width: 20px;
	border-radius: 50%;
	margin: 10px 0;
}

.banner-area .owl-dots {
	position: absolute;
	right: 20px;
	top: 50%;
	transform: translateY(-50%);
}

.banner-area .owl-dots .owl-dot.active {
	/*/ if in the same div two cls. must be closer  */
	background: #fff !important;
}



                     
