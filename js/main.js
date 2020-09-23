jQuery(document).ready(function () {
  "use strict";
  $('#slider-carousel').carouFredSel(
    {
      responsive: true,
      width:'100%',
      circular: true,

      scroll: {
        items: 1,
        duration: 500,
        pauseOnhover: true,

      },
      auto: true,
      items:
      {
        visible: {
          min: 1,
          max: 1
        },
        height: "variable"
      },

      pagination: {
        container: ".sliderpager",
        pageAnchorBuilder: false
      }


    });
    
    $(window).scroll(function(){
      var top = $(window).ScrollTop();
      if(top>=60){
        $(header).addclass('secondary');
      }
      else  
      if ($(header).hasclass('secondary')){
        $(header).removeclass('secondary');

      }
    });

});