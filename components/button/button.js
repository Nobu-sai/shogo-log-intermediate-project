$(function() {
    let contactVerPos = $('.contact').offset().top
    let headerHeight = 100 + 4;
      // 4 = box-shadow
    let scrollTo = contactVerPos - (headerHeight + 16)
      // 16 = ? 

  $('.button_contact').click(()=>{
    // console.log('hey')
    $("html, body").animate({scrollTop : scrollTo}, 500);
  })

});