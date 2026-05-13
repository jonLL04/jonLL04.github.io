//Cambiar texto usando boton
$("#changeTextButton").on("click", function() {
    $("#heroTitle").text("Código claro, interacción sencilla");
    $("#heroText").text("Una pequeña landing para practicar eventos, clases y manipulación del DOM.");
});

//Esconder
$("#toggleServicesButton").on("click", function() {
    $("#servicesList").toggleClass("is-hidden");
});

//Activar las cards
$(".service-card").each(function () {
    $(this).on("click", function(){
        $(this).toggleClass("is-active");
    });
});

//letters counter
$("#message").on("input", function() {
    $("#characterCounter").text($(this).val().length);
});

//Form Reinicio
$("#contactForm").on("submit", function(event) {
    event.preventDefault();
    $("#feedbackMessage").hide();
    $("#message").val("");
    $("#characterCounter").text("0");
});

//DarkMode
$("#themeButton").on("click", function() {
    $(document.body).toggleClass("dark-mode");
});