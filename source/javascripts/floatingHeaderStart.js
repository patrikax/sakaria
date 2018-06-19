//=require "jquery"

var yPos;
var works = $( ".works" );
var worksPos = works.position();

$(document).ready( function() {
  updateY();
  $('#scrollmenu').addClass( 'absolute' );
  //console.log("works position: "+worksPos.top);

} );


function updateY(){
  yPos = scrollY;
 
  //checkY();
}


$(window).scroll(function(){
  updateY();
  if(yPos>worksPos.top){
    $('#scrollmenu').removeClass( 'invisible' );
  }
  else{
    $('#scrollmenu').addClass( 'invisible' );
  }

});




window.addEventListener('touchstart', function() {
  
  $('.work').removeClass( 'black-bg' );
  $('.work-link').removeClass( 'semi-transp' );
  
});
