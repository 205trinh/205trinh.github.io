 $(function(){
 	vitricuaedu = $('#khoiedu').offset().top ;
 	console.log(vitricuaedu);
 	$(".xuong,.kn").click(function(){
 			$('body, html').animate({scrollTop:vitricuaedu},700)
 			return false;
 	})

 	$(".sp").click(function(){
 			$('body, html').animate({scrollTop:$('#khoisp').offset().top},700)
 			return false;
 	})
})  
 