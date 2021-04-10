$(function(){
  // #acc1以外を縮める
  // let accordionToFold = $('.faq__accordion').each((accordion)=>{
  //   console.log(accordion)
  // })


  $('.faq__accordion-2, .faq__accordion-3').css({"height": "0px"});

  // a要素をクリック
  $(".faq__accordion-question").click(function(){
    // currentBtnクラスがついていなければ、if文の中を実行
    if(!$(this).hasClass("currentBtn")){
      // 現在のコンテンツを縮める
      $(".current").animate({"height" : "0px"}, 300);

      // 次のコンテンツを展開
      $($(this).attr("href")).animate({"height": "100px"}, 300);

      // Remove the current class from the current Accordion. 
      $(".current").removeClass('current');

      // Add current class to the OPENDED Accordion. 
      $($(this).attr("href")).addClass("current");

      // currentBtnクラスを削除
      $(".currentBtn").removeClass('currentBtn');

      // 選択されたタイトル（自分自身）にcurrentBtnクラスを追加
      $(this).addClass("currentBtn");
    }

  });
});