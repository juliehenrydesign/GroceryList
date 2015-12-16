$(document).ready(function() {

$('#add').on('click', function(){
	$("#g-list").append("<li>"+$('#new-text').val()+ "<button>DONE</button>"+"</li>");
		$("#new-text").val("");
	$("li").on("click", function(){
	$(this).remove();
})

});

$("li").on("click", function(){
	$(this).remove();
})



});


