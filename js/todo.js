//Check off specific todos by clicking
$('ul').on('click', 'li', function(){
	$(this).toggleClass('done')
});

//Click on X to delete todo
$('ul').on('click', 'span', function(event){
	$(this).parent().fadeOut(function(){
		$(this).remove()
	});
	event.stopPropagation()
});

//Input: list entry
$('input[type="text"]').keypress(function(event){
	if(event.which === 13){
		//grabbing new todo text from input
		var todoText = $(this).val();
		//creating a new li and adding it to ul
		$('ul').append('<li><span><i class="fa fa-trash"></i></span>'+todoText+'</li>');
		//wiping input
		$(this).val("")
	}
});

$(".fa.fa-pencil").click(function(){
	$('input[type="text"').fadeToggle(500, 'swing')
})


