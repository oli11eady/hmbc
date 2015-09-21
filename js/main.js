var main = function() {

	setInterval(function() {cycleImages()},5000);
	
	function cycleImages(){
      
      var $active = $('#imghold .active');
      var $next = ($active.next().length > 0) ? $active.next() : $('#imghold img:first');
      
      $next.css('z-index',2);
      
      $active.fadeOut(1500,function(){
	  	  $active.css('z-index',1).show().removeClass('active');
          $next.css('z-index',3).addClass('active');
     	 });
    }
		
}

$(document).ready(main);