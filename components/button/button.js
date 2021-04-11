$(function() {
    let contactVerPos = $('.contact').offset().top
    let headerHeight = 100 + 4;
      // 4 = box-shadow
    let sectionTitleVerPos = $('.contact .section-title').offset().top;
    let scrollTo = contactVerPos - (headerHeight + 16)
      // 16 = ? 
  

    console.log("contactVerPos", contactVerPos)
    console.log("sectionTitleVerPos", sectionTitleVerPos)
    console.log("sectionTitleVerPos - contactVerPos", sectionTitleVerPos - contactVerPos)

  $('.button_contact').click(()=>{
    // console.log('hey')
    $("html, body").animate({scrollTop : scrollTo}, 500);
  })

});