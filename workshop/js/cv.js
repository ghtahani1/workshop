/* global $ , jquery , alert*/

$(document).ready(function ()

{ 


  // fullpage libr
  $('#wrapper').fullpage({
    scrollBar:true, 
      anchors: ['firstPage', 'secondPage', 'thirdPage'],
loopBottom: true , 
navegation:true , 

// add class active when scroll 
afterLoad: function(anchorLink, index){
 
  if(anchorLink == 'firstPage'){
     $('#div1').addClass('active');
     $('#div2 , #div3').removeClass('active'); 
  }
  else if(anchorLink == 'secondPage'){
    $('#div2').addClass('active');
    $('#div1 , #div3').removeClass('active'); 
 }
 else if(anchorLink == 'thirdPage'){
  $('#div3').addClass('active');
  $('#div1 , #div2').removeClass('active');
 }}


 // progress bar 

});


// add class active when click
$('#menu li #div1,#div2,#div3 ').click(function(){

  $('#menu li #div1,#div2,#div3').removeClass('active'); 
$(this).addClass('active');

});
  


   //typed libr
  var typed1 = new Typed("#span1", {
    strings: [ "تهاني عبدالله الغامدي  " ], 
    typeSpeed: 70,
    startDelay: 1000,
    showCursor:true ,

  });

  var typed2 = new Typed("#span2", {
    strings: ["علوم الحاسب الالي " ], 
    typeSpeed: 70,
    startDelay: 3000,



  });

$(window).scroll(function(){

  console.log('scrolltop = '+$(this).scrollTop());
  console.log('offset is = ' + $ ('.animated-progress').offset().top);

  var scrolling = $(this).scrollTop();
  var offset1 = $ ('.animated-progress').offset().top; 

  if ( scrolling >= 1242 ) {

    $('.animated-progress span').each(function() {

      $(this).animate({
  
        width: $(this).attr('data-progress')+'%' 
        
      },2000);
    });

    } 
    });



});


