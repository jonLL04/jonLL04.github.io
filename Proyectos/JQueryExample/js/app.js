/*var changeTextButton =
    document.getElementById("changeTextButton");

var heroTitle =
    document.getElementById("heroTitle");

var heroText =
    document.getElementById("heroText");

var toggleServicesButton =
    document.getElementById("toggleServicesButton");

var servicesList =
    document.getElementById("servicesList");

var serviceCards =
    document.querySelectorAll(".service-card");

var message =
    document.getElementById("message");

var characterCounter =
    document.getElementById("characterCounter");

var contactForm =
    document.getElementById("contactForm");

var feedbackMessage =
    document.getElementById("feedbackMessage");

var themeButton =
    document.getElementById("themeButton");

changeTextButton.addEventListener(
    "click",
    function () {
        heroTitle.textContent =
            "Código claro, interacción sencilla";

        heroText.textContent =
            "Una pequeña landing para practicar eventos, clases y manipulación del DOM.";
    }
);

toggleServicesButton.addEventListener(
    "click",
    function () {
        servicesList.classList.toggle("is-hidden");
    }
);

for (
    var i = 0;
    i < serviceCards.length;
    i++
) {
    serviceCards[i].addEventListener(
        "click",
        function () {
            this.classList.toggle("is-active");
        }
    );
}

message.addEventListener(
    "input",
    function () {
        characterCounter.textContent =
            message.value.length;
    }
);

contactForm.addEventListener(
    "submit",
    function (event) {
        event.preventDefault();

        feedbackMessage.hidden = false;

        message.value = "";

        characterCounter.textContent = "0";
    }
);

themeButton.addEventListener(
    "click",
    function () {
        document.body.classList.toggle(
            "dark-mode"
        );
    }
);*/