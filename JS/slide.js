$(function(){

    var amtSlide = $('.cardSlide').length;
    var curIndex = 0;

    iniciarSlide() ;
    navegarSlide();

    function iniciarSlide(){
        $('.cardSlide').fadeOut();
        $('.cardSlide').eq(0).fadeIn();
    }
    function navegarSlide(){
        $('[next]').click(function(){
              curIndex++;
              if(curIndex >= amtSlide)
                curIndex = 0
            $('.cardSlide').hide();
            $('.cardSlide').eq(curIndex).fadeIn(1500);
    })

      $('[prev]').click(function(){
        curIndex--;
        if(curIndex < 0)
          curIndex = amtSlide-1;
      $('.cardSlide').hide();
      $('.cardSlide ' ).eq(curIndex).fadeIn(1500);
    })
    }





    var amtSlide2 = $('.cardSlide2 p').length;
    var curIndex2 = 0;

    iniciarSlide2() ;
    navegarSlide2();

    function iniciarSlide2(){
        $('.cardSlide2').fadeOut();
        $('.cardSlide2').eq(0).fadeIn();
    }
    function navegarSlide2(){
        $('[next2]').click(function(){
              curIndex2++;
              if(curIndex2 >= amtSlide2)
                curIndex2 = 0
            $('.cardSlide2').hide();
            $('.cardSlide2').eq(curIndex2).fadeIn(1500);
    })

      $('[prev2]').click(function(){
        curIndex2--;
        if(curIndex2 < 0)
          curIndex2 = amtSlide2-1;
      $('.cardSlide2').hide();
      $('.cardSlide2').eq(curIndex2).fadeIn(1500);
    })
    }
    







    var amtSlide3 = $('.cardSlide3 p').length;
    var curIndex3 = 0;

    iniciarSlide3() ;
    navegarSlide3();

    function iniciarSlide3(){
        $('.cardSlide3').fadeOut();
        $('.cardSlide3').eq(0).fadeIn();
    }
    function navegarSlide3(){
        $('[next3]').click(function(){
              curIndex3++;
              if(curIndex3 >= amtSlide3)
                curIndex3 = 0
            $('.cardSlide3').hide();
            $('.cardSlide3').eq(curIndex3).fadeIn(1500);
    })

      $('[prev3]').click(function(){
        curIndex3--;
        if(curIndex3 < 0)
          curIndex3 = amtSlide3-1;
      $('.cardSlide3').hide();
      $('.cardSlide3').eq(curIndex3).fadeIn(1500);
    })
    }




    
    var amtSlide4 = $('.cardSlide4 p').length;
    var curIndex4 = 0;

    iniciarSlide4() ;
    navegarSlide4();

    function iniciarSlide4(){
        $('.cardSlide4').fadeOut();
        $('.cardSlide4').eq(0).fadeIn();
    }
    function navegarSlide4(){
        $('[next4]').click(function(){
              curIndex4++;
              if(curIndex4 >= amtSlide4)
                curIndex4 = 0
            $('.cardSlide4').hide();
            $('.cardSlide4').eq(curIndex4).fadeIn(1500);
    })

      $('[prev4]').click(function(){
        curIndex4--;
        if(curIndex4 < 0)
          curIndex4 = amtSlide4-1;
      $('.cardSlide4').hide();
      $('.cardSlide4').eq(curIndex4).fadeIn(1500);
    })
    }
})