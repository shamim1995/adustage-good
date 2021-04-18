$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items:2,
        margin:70,
        loop:true,
        autoplay:5000,
        
        nav:true,
        
        dots:true,
       

        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true,
            },
            600:{
                items:1,
                nav:true,
                
            },
            768:{
                items:2,
                nav:true,
                
            },

              1000:{
                items:2,
                nav:true,
                loop:true,
            }
        }


    });
  });