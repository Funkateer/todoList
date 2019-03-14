$("ul").on("click", "li", function(){
    $(this).toggleClass("checked");
});

$("input[type='text']").keypress(function(event){
    if( event.which === 13){
        var newTodo = $(this).val();
        $(this).val("");
        $("ul").append("<li> <span> <i class='fas fa-trash-alt'></i></span> " + newTodo + "</li>");
    }
});

$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500 , function(){
        $(this).remove();
    });
    event.stopPropagation();
});

$(".fa-pencil-alt").click(function(){
    $("input[type='text']").fadeToggle(400);
});

$("li:nth-of-type(4)").css({
    color: "grey",
    textDecoration: "line-through",
});
