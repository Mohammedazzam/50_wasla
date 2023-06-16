/*global $, window*/

$(function () {
  "use strict";

  // loader-screen
  $(document).ready(function(){
    $('.loader-screen').delay(3000).fadeOut(300);
  });


    // scroll to top
        
    $('.scroll-top').click(function () {
      $('html, body').animate({
          scrollTop: 0
      }, 1000);
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


  $(".datetimepicker").each(function () {
      $(this).datetimepicker({
        timepicker:false,
        // format:'H:i',
      });
  });
  
  $(".option").click(function(){
    $(".option").removeClass("active");
    $(this).addClass("active");
    
  });

  // favorate heart click
  $('.heart').click(function(){
    var id = $(this).attr('id');
    console.log(id);
    if(id == 'heart-unchecked'){
      $('#heart-checked').show();
      $('#heart-unchecked').hide();
    }else if(id == 'heart-checked'){
        $('#heart-checked').hide();
        $('#heart-unchecked').show();
    }
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

});