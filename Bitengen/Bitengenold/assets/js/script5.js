function openNav() {
    document.getElementById("mySidepanel").style.width = "275px";
  }
  
  function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
  }


$('#owl-carousel1').owlCarousel({
    loop:true,
    margin:0,
    dots:false,
    nav:false,
    autoplay:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

$('#owl-carousel2').owlCarousel({
    loop:true,
    margin:10,
    dots:false,
    nav:false,
    autoplay:true,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
})  

