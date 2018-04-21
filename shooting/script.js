$(document).ready(function() {
    $(document).on('click', '.can', function(e) {
        alert($(this).attr("data-value"));
        $("input:text").val("data-value");
    });
});

$(document).ready(function() {
    $("button").click(function() {
        $("input:text").val("test");
    });
});