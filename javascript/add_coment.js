$(document).ready(function(){
	$('#botao1').click(function(){
		var comentario = $('textarea[name=comentario]').val();
		$('.comentarios').append('<div class="item">' + comentario + '</div>');
	});
	$(document).on('click','.item',function(){
		$('.item').click(function(){
			$(this).remove();
		});
	});
});s	