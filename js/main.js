 (function ($) {
	"use strict";
	// accordion
	$(".another_acordion").collapses({
		accordion: true,
		open: function() {
            this.slideDown(450);
          },
          close: function() {
            this.slideUp(450);
          }
		
	});
	 //recent product carusal
		 $("#owl-demo-brand").owlCarousel({
	 
		  autoPlay: true, //Set AutoPlay to 3 seconds 
		  navigation : false,
		  navigationText : ["prev","next"],
		   pagination: false,
		  items :5,
		  itemsDesktop : [1199,4],
		  itemsDesktopSmall : [979,3], 
		  itemsTablet:[768,3], 
		  widemobiel: [480,1], 
		  smallmobiel: [320,1], 
		  
		  
	  });  
	   //recent product carusal
		 $("#gallery_Work").owlCarousel({ 
		 navigation : true, // Show next and prev buttons
	  // navigationText: ["prev","next"], 
		 navigationText: [
			  "<i class='fa fa-angle-left'></i>",
			  "<i class='fa fa-angle-right'></i>"
			  ],
		  slideSpeed : 300,
		  paginationSpeed : 400,
		  autoPlay: true,  
		  pagination: false,
		  items : 4,
		  itemsDesktop:[1199,4],  
		  itemsDesktopSmall:[979,3],  //As above.
		  // itemsTablet:[768,3],    //As above.
		  // itemsTablet:[640,2],   
		  itemsTablet: [767,2], 
		  widemobiel: [480,1], 
		  smallmobiel: [320,1], 
		  //As above
		  goToFirst: true,    //Slide to first item if autoPlay reach end
		  goToFirstSpeed:1000   
	  });  
	  
	
	// recent product carusal
		 $("#client_carusal").owlCarousel({
 
		  slideSpeed : 300,
		  paginationSpeed : 400,
		  autoPlay: true,  
		  pagination: true, 
		  items :3,
		  itemsDesktop : [1199,3],
		  itemsDesktopSmall : [979,3],
		  // itemsTablet: [786,2], 
		  itemsTablet: [767,2], 
		  widemobiel: [480,1], 
		  smallmobiel: [320,1]
		  
	  });
	 
	// staf carusal 
	  var slider = new MasterSlider();
    slider.setup('masterslider' , {
        loop:true,
        width:130,
        height:130,
        speed:20,
        view:'focus',
        preload:'all',
        space:30,
        wheel:false
    });
    slider.control('arrows');
    slider.control('slideinfo',{insertTo:'#staff-info'});  


	
})(jQuery);

// gallery fancybox activator 
function GalleryFancyboxActivator () {
	var galleryFcb = $('.fancybox');
	if(galleryFcb.length){
		galleryFcb.fancybox({
			openEffect  : 'elastic',
			closeEffect : 'elastic',
			helpers : {
				media : {}
			}
		});
	}
}

function gallarypigon(){
	$('#gallery-demo .gallery').pignoseGallery({
		list: $('#gallery-demo .gallery-thumbnails')	  
	});
}
 
// stickyHeader
function stickyHeader () {
	if ($('.stricky').length) {
		var strickyScrollPos = '60';
		if($(window).scrollTop() > strickyScrollPos) {
			$('.stricky').addClass('stricky-fixed'); 
		}
		else if($(window).scrollTop() <= strickyScrollPos) {
			$('.stricky').removeClass('stricky-fixed'); 
		}
	};
}


function revolutionSliderActiver () {
	 
	if ($('.rev_slider_wrapper #slider1').length) {
		jQuery("#slider1").revolution({
			sliderType:"standard",
			sliderLayout:"auto",
			delay:9000,
			navigation: {
				arrows:{enable:true} 
			}, 
			gridwidth:1170,
			gridheight:700 
		});
	};
	 
}	
 function videoplay(){
 	if ($('#video').length) {
		$("#video").simplePlayer({

		autoplay: 1,
		autohide: 1,
		border: 0,
		wmode: 'opaque',
		enablejsapi: 1,
		modestbranding: 1,
		version: 3,
		hl: 'en_US',
		rel: 0,
		showinfo: 0,
		hd: 1,
		iv_load_policy: 3 // add origin

		});	 		
 	}; 
 } 
 
 

// Google Map
function gMap () {
	if ($('.google-map').length) {
        var map;
        map = new GMaps({
            div: '.google-map',
            scrollwheel: false,
            lat: -37.812802,
            lng: 144.956981
        });
        map.addMarker({
            lat: -37.812802,
            lng: 144.956981,
            title: 'Envato HeadQuarter'
        });  
	};
}
// Adding hover effect to gallery 
function galleryHover () {
	// hover effect for masonary gallery
	if ($('.masonary-gallery').length) {
		$('.masonary-gallery .content-wrap').each(function () {
			$(this).addClass('hvr-shutter-in-vertical');
		});
	};
	// hover effect for normal gallery
	if ($('.normal-gallery').length) {
		$('.normal-gallery .content-wrap').each(function () {
			$(this).addClass('hvr-rectangle-out');
			$(this).parent().parent().addClass('mix');
		});
	};
		
}

// gallery filter activation
function GalleryFilter () {

	if ($('#image-gallery-mix').length) {
		$('.gallery-filter').find('li').each(function () {
			$(this).addClass('filter');
		});
		$('#image-gallery-mix').mixItUp();
	};
	if($('.gallery-filter.masonary').length){
		$('.gallery-filter.masonary span').on('click', function(){
			var selector = $(this).parent().attr('data-filter');
			$('.gallery-filter.masonary span').parent().removeClass('active');
			$(this).parent().addClass('active');
			$('#image-gallery-isotope').isotope({ filter: selector });
			return false;
		});
	}
}
//Loading Box (Preloader)
function preloaderbox() {
	if($('.preloaderbox').length){
		$('.preloaderbox').fadeOut();
	}
} 
function CustomTab (){
	$('#myTabs a').on('click', function (e) {
	e.preventDefault()
	$(this).tab('show')
	})
}

function CustomTabtwo (){
	$('#myTabs a').on('click', function (e) {
	e.preventDefault()
	$(this).tab('show')
	})
}




function thmSpinner (){ 
	if ($('.thm-spinner').length) {
		var spinnerMin = $('.thm-spinner').data('min-value');
		var spinnerMax = $('.thm-spinner').data('max-value');
		var spinnerDefault = $('.thm-spinner').data('default-value');
		$('.thm-spinner').slider({
			range: 'min',
			min: spinnerMin,
			max: spinnerMax,
			value: spinnerDefault,
			slide: function( event, ui ) {
				$( '.vehicle-year' ).val( ui.value );
			}
		});
		$( '.vehicle-year' ).val( $('.thm-spinner').slider('value') );
	};
}

function selectInput () {
	if ($('.select-input').length) {
		$('.select-input').selectmenu();
	};
}
function datePicker () {
	if ($('.date-picker').length) {
		$('.date-picker').datepicker();
	};
}
function specialCheckBox () {
	if ($('ul.special-checkbox').length) {
		$('ul.special-checkbox').find('li').on('click', function () {
			$(this).toggleClass('active');
		});
	};
}


$(document).on('ready', function () {
	// add your functions   
	(function ($) {
		stickyHeader();   
		revolutionSliderActiver();    
		gallarypigon();		
		galleryHover();
		GalleryFilter();
		GalleryFancyboxActivator();    
		gMap(); 
		CustomTab(); 
		CustomTabtwo(); 
		videoplay(); 
		thmSpinner(); 
		selectInput(); 
		datePicker(); 
		specialCheckBox(); 
	})(jQuery);	
});
$(window).on('load', function () {
	(function ($) {
		preloaderbox();
	})(jQuery);
});

$(window).on('scroll', function () {
	(function ($) {
		stickyHeader();
	})(jQuery);
});