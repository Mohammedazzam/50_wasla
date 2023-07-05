/*global $, window*/

$(function () {
  "use strict";

  // loader-screen
  $(document).ready(function(){
    $('.loader-screen').delay(100).fadeOut(300);
  });


  // scroll to top
      
  $('.scroll-top').click(function () {
    $('html, body').animate({
        scrollTop: 0
    }, 100);
  });
  /// hide & show scroll to top

  $(window).scroll(function () {
    var clickToScroll = $('.scroll-top');
    if ($(window).scrollTop() > 600) {
        if (clickToScroll.is(':hidden')) {
            clickToScroll.fadeIn(500);
        }
    } else {clickToScroll.fadeOut(500); }
    
  });

    // stop video paly in modal fade out
    $('#videoModal').modal({
        show: false
    }).on('hidden.bs.modal', function(){
        $(this).find('video')[0].pause();
    });


    $('.datetimepicker').datepicker({
      format:'dd/mm/yyyy',
      language: "ar",
      todayHighlight:true,
      weekStart:6
    });
  
  $(".option").click(function(){
    $(".option").removeClass("active");
    $(this).addClass("active");
    
  });

  // favorate heart click
  $('.heart,.star').click(function(){
    $(this).toggleClass('checked');
  });
  
  // login page set
  $('.login-page .login-form .steps .btn.next').click(function(){
    $('.login-form .step-1').fadeOut(100);
    $('.login-form .step-2').fadeIn(100);
  });
  $('.login-page .login-form .steps .btn.prev').click(function(){
    $('.login-form .step-2').fadeOut(100);
    $('.login-form .step-1').fadeIn(100);
  });
  $('.login-page .login-form.login-account .form-group svg.show-pass').click(function(){
    if($(this).hasClass('checked') == false){
      $('#pass').attr('type', 'text');
      $(this).addClass('checked');
    }else{
      $('#pass').attr('type', 'password');
      $(this).removeClass('checked');
    }
  });


  
  $(document).ready(function(){
    $('#main-carousel').owlCarousel({
        loop:true,
        margin:0,
        nav:false,
        autoplay:true,
        autoplayTimeout:2000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });
    $('#social-carousel').owlCarousel({
        loop:true,
        margin:20,
        nav:false,
        autoplay:true,
        autoplayTimeout:5000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });
    $('#partners-carousel').owlCarousel({
        loop:true,
        margin:10,
        autoplay:true,
        autoplayTimeout:2000,
        responsive:{
            0:{
                items:2
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    });
    $('#header-carousel').owlCarousel({
        loop:true,
        margin:10,
        dots: true,
        nav:true,
        autoplay:true,
        autoplayTimeout:2000,
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
    });
    $('#campaings-carousel').owlCarousel({
        margin:20,
        dots: true,
        nav:true,
        //dotsData: true,
        autoplayTimeout:2000,
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
    });
    $('#center-carousel').owlCarousel({
      loop:true,
      margin:0,
      dots: true,
      nav:true,
      autoplay:true,
      autoplayTimeout:2000,
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
    });
    $('#blog-carousel').owlCarousel({
      loop:true,
      margin:0,
      nav:false,
      autoplay:true,
      autoplayTimeout:2000,
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
    });
  });

  
  // set image of carousel dots
  $(document).ready(function(){
    $('#campaings-carousel:not(.center-carousel) .owl-dot').each(function(){
      var index = $(this).index();
      var img = $('.campaing-item:nth('+index+') .bg-div').attr('data-img');
      console.log(img);
      $(this).append('<img src="'+img+'">');
      // button.html(content);
    });
  });

});