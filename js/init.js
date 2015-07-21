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
        $(document).ready(function(){
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal-trigger').leanModal();
  });
        // Initialize collapse button
  $(".button-collapse").sideNav();
  // Initialize collapsible (uncomment the line below if you use the dropdown variation)
  //$('.collapsible').collapsible();
       $(document).ready(function(){
    $('ul.tabs').tabs();
  });
           
      
        

  }); // end of document ready
})(jQuery); // end of jQuery name space