let comida = $('#comida').offset().top,
    bebida = $('#bebida').offset().top;
    encuentranos = $('#encuentranos').offset().top;

    $('#enlace-inicio').on('click',function (e) {
        e.preventDefault();
        $('html, body').animate({
           scrollTop:0
        },800);
     });

     $('#enlace-comida').on('click',function (e) {
      e.preventDefault();
      $('html, body').animate({
         scrollTop: 920
      },800);
     });

     $('#enlace-bebida').on('click',function (e) {
      e.preventDefault();
      $('html, body').animate({
         scrollTop: 1850
      },800);
     });
  
     $('#enlace-encuentranos').on('click',function (e) {
      e.preventDefault();
      $('html, body').animate({
         scrollTop: 2900
      },800);
     });
  
