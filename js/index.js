$(".floatingButton").on("click", function() {
    $(".modal, .modalContent").addClass("active");
});

$(".cancel").on("click", function() {
    $(".modal, .modalContent").removeClass("active");
});