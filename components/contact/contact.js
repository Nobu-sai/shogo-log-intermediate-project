$(function() {
  // 全てのアラート文を非表示にする
  $(".alert").hide();

  // 送信ボタンをクリック
  $(".form__submit-button").click(function(event){


    $(".alert").hide();
    // チェック用の変数sendFlag
    var sendFlag = true;

    // The input Tag for お名前
    if(!$(".form__name .form__input").val()){
      // 入力がない：アラート文を表示
      console.log($(".form__name .form__input").val())
      $(".form__name .alert").fadeIn(300);
      sendFlag = false; // 入力がなければfalseに
    }

    // The input Tag for メールアドレス
    if(!$(".form__email .form__input").val()){
      // 入力がない：アラート文を表示
      
      $(".form__email .alert").show(300);
      sendFlag = false; // 入力がなければfalseに
    }

    // 複数行入力フィールドのチェック
    if(!$(".form__contact-contents .form__textarea").val()){
      // 入力がない：アラート文を表示
      $(".form__contact-contents .alert").fadeIn();
      sendFlag = false; // 入力がなければfalseに
    }  
    
    console.log(($('.form__concent .form__concent-checkbox').val()))

    if($('.form__concent .form__concent-checkbox:checked' ).length <= 0) {
      sendFlag = false;
      $(".form__concent .alert").fadeIn(300); 
    }

    // 変数sendFlagの値をチェック
    if(sendFlag == true){
      // Sending.
      console.log(sendFlag)
      let formData = $('.form__tag').serialize();
      $.ajax({
        url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLSelP16H_PdBaBWGz1WydYgQQvCUl-voaSxtsM-rsfCBw5lkAA/formResponse",        
        data: formData,
        type: "POST",        
        dataType: 'jsonp',
        statusCode: {
          200: function (code) {
            $(".form__message_success").slideDown();
            $(".form__submit-button").fadeOut();
            // window.location.href = "contact-submission-success.html";
            console.log(code)
          },
          404: function (code) {
            $(".form__fmessage_failure").slideDown();
            console.log(code)
          },
        }
      });
      
    }
    
    event.preventDefault();
      // => Prevent the button Tag refleshing the page. 

  });
});