$(document).ready(function() {
    $(document).on('click', '.can', function(e) {

    });
});


$(".can").click(function() {
    var text = $(this).attr('data-value');
    $("input#guessField").val(text);
});