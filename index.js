$(function(){
  // Offset the gap after the AOS.js emerging animation. 
  $( window ).on( "load", () => {
    console.log("hey")
    setTimeout(()=> {

    $("html, body").animate({scrollTop: 0}, 1000);
    })
    , 500})
})