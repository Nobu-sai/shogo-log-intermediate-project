$(function(){
  // Offset the gap after the AOS.js emerging animation. 
  $( window ).on( "load", () => {
    setTimeout(()=> {

    // $("html, body").animate({scrollTop: 0}, 1000);
    $(".top").css("overflow", "hidden")
    }
    , 1000) 
  })
})