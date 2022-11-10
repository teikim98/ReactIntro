$(document).ready(function(){ // 페이지가 열리면 실행  

    //네비바 스크롤 감지 배경색 인 아웃
    $(window).scroll(function(){
      if($(window).scrollTop() > 100){
          $('#nav').addClass('scrollBG')
        }
      else{
        $('#nav').removeClass('scrollBG')
      } 
    })

    

  //네비 슬라이드 섹션이동
  $(".depth1 a").click(function(e){       
      e.preventDefault(); 
      var targetPos = $($(this).attr('href')).offset().top;       
      $('body, html').animate({'scrollTop':targetPos});

      $(this).parent().addClass('active').siblings().removeClass('active');
      //.depth a.active
  }); 
  
});