$(function(){


  /**LANDINGS PAGES */
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



/**LOJAS/DASHBOARD */

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



    /**PORTFOLIOS */
    
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


/**BOOTSTRAP-MATERIALIZE */

    
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



/*** JAVASCRIPPT */


    var amtSlide5 = $('.cardSlide5 p').length;
    var curIndex5 = 0;

    iniciarSlide5() ;
    navegarSlide5();
    
        function iniciarSlide5(){
            $('.cardSlide5').fadeOut();
            $('.cardSlide5').eq(0).fadeIn();
        }
        function navegarSlide5(){
            $('[next5]').click(function(){
                  curIndex5++;
                  if(curIndex5 >= amtSlide5)
                    curIndex5 = 0
                $('.cardSlide5').hide();
                $('.cardSlide5').eq(curIndex5).fadeIn(1500);
        })
    
          $('[prev5]').click(function(){
            curIndex5--;
            if(curIndex5 < 0)
              curIndex5 = amtSlide5-1;
          $('.cardSlide5').hide();
          $('.cardSlide5').eq(curIndex5).fadeIn(1500);
          })
        }

        
    
        /**REACT */

        var amtSlide6 = $('.cardSlide6 p').length;
        var curIndex6 = 0;
    
        iniciarSlide6() ;
        navegarSlide6();
        
            function iniciarSlide5(){
                $('.cardSlide6').fadeOut();
                $('.cardSlide6').eq(0).fadeIn();
            }
            function navegarSlide6(){
                $('[next6]').click(function(){
                      curIndex6++;
                      if(curIndex6 >= amtSlide6)
                        curIndex6 = 0
                    $('.cardSlide6').hide();
                    $('.cardSlide6').eq(curIndex6).fadeIn(1500);
            })
        
              $('[prev6]').click(function(){
                curIndex6--;
                if(curIndex6 < 0)
                  curIndex6 = amtSlide6-1;
              $('.cardSlide6').hide();
              $('.cardSlide6').eq(curIndex6).fadeIn(1500);
              })
            }

    
    })



    
 











