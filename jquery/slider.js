 $(function () {
 setInterval(
   function () {
    $('#slideFrame ul').find('li:last').animate({
     "left":  "601px"
   }, 700, function () {
     $('#slideFrame ul li:first').css({
      'left': '0px'
    }); 
     $('#slideFrame ul li:first').before($('#slideFrame ul li:last'));          
   });
  },3000
  );

  $('.slider .previous').click(function(e){ 
   e.stopPropagation();
   $('#slideFrame ul').find('li:last').animate({
    "left":  "-601px"
  }, 700, function () {
   $('#slideFrame ul li:first').css({
    'left': '0px'
  }); 
   $('#slideFrame ul li:last').before($('#slideFrame ul li:first'));          
 });

 });


  $('.slider .next').click(function(e){
    e.stopPropagation();
   $('#slideFrame ul').find('li:last').animate({
     "left":  "601px"
   }, 700, function () {
     $('#slideFrame ul li:first').css({
      'left': '0px'
    }); 
     $('#slideFrame ul li:first').before($('#slideFrame ul li:last'));          
   });
 });

});