(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();
    $(".dropdown-button").dropdown();
    $(document).ready(function(){
    $('.slider').slider({full_width: true});
    });
    
      $(document).ready(function(){
        $('.collapsible').collapsible({
          accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
        });
      });
           
      
        

  }); // end of document ready
})(jQuery); // end of jQuery name space