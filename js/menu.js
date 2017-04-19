$(document).ready(function(){
  	$(".import").mouseenter(function(){
    		$('.subimport').css('display', 'block');
		});
		$(".subimport").mouseleave(function(){
  			$('.subimport').css('display', 'none');
		});

		$(".drink").mouseenter(function(){
  			for (var i = 0; i <3; i++) {
  				$(".add").append("<dd>drink"+i+"</dd>");
  			}
		});
		$(".drink").mouseleave(function(){
  			$(".add").text("");
		});

		$(".fruit").mouseenter(function(){
  			for (var i = 0; i <3; i++) {
  				$(".add").append("<dd>fruit"+i+"</dd>");
  			}
		});
		$(".fruit").mouseleave(function(){
  			$(".add").text("");
		});

		$(".cosmetology").mouseenter(function(){
  			for (var i = 0; i <3; i++) {
  				$(".add").append("<dd>cosmetology"+i+"</dd>");
  			}
		});
		$(".cosmetology").mouseleave(function(){
  			$(".add").text("");
		});

		$(".furniture").mouseenter(function(){
  			for (var i = 0; i <3; i++) {
  				$(".add").append("<dd>furniture"+i+"</dd>");
  			}
		});
		$(".furniture").mouseleave(function(){
  			$(".add").text("");
		});
 	 });