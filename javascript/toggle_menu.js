var menuToggle = function () {
	$('#menu').click(function (){
		$('.conteudo_menu').animate({top: "-=50px"}, 'fast');
		$('body').animate({top: "-=50px"}, 'fast')
	});
};
$(document).ready(menuToggle);