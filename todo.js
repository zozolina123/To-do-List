var html = '<div class="todo"><h5 class="delete"></h5><p>';
var htmle = '</p></div>';
var k = false;
var show = true;
$(document).ready(function(){
	$("input").keypress(function(e){
			if(e.which == 13) {
			var task = $("input").val();
			$(".todos").prepend(html+task+htmle);
			$("input").val('');
			k = false;
		}
	});

	$("input").click(function () {
		if(k===false){
			k = true;
			$('input').val('');
		}
	});

	$('input').on("focusout" ,function(){
		$('input').val('Add new To-do');
	});

	$('.plus').click(function(){
		if(show == true){
			$('input').slideToggle();
			show = false;
		}
		else {
			$('input').slideToggle('slow');
			show = true;
		}
	});

	$(document).on( "click", ".todo p", function(){
		$(this).css("text-decoration", "line-through");
	} );

	$(document).on( "mouseenter", ".todo p", function(){
		$(this).prev().animate({
    width: "5%"
    }, 500 );
		$(this).prev().html('<i class="fa fa-trash-o" aria-hidden="true"></i>');
	});

	$(document).on( "mouseleave", ".todo", function(){
		$(this).children('.delete').animate({
    width: "0"
    }, 500 );
		$(this).children('.delete').html('');
	});

	$(document).on( "click", ".delete", function(){
		$(this).parent().fadeOut();
	});

});