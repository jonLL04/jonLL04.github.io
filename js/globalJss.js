//Seleccion de elementos
const resources = document.querySelector(".hover");
const cartContainer = document.querySelector(".cartContainer");

const formFooter = document.querySelector(".footer-superior_form");
const newsletterInput = document.querySelector("#newsletter-email");
const checkEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//Hover para mostrar carrito
function hideCarrito() {
    cartContainer.style.display = "none";
}
function showCarrito() {
    cartContainer.style.display = "flex";
}
resources.addEventListener("mouseenter", showCarrito);
resources.addEventListener("mouseleave", hideCarrito);

//Formulario
function getFormData() {
    return {
        newsletter: newsletterInput.value.trim()
    };
}

function validateData(data) {
    const errors = {};
    if (!data.newsletter) {
        errors.newsletter = 'El email es obligatorio.';
    } 
    else if (!checkEmail.test(data.newsletter)) {
        errors.newsletter = 'Has escrito mal el email.';
    }
    return errors;
}

function showErrors(errors) {
    if (errors.newsletter) {
        console.log(errors.newsletter);
        newsletterInput.classList.add('is-error');
    }
}

function handleSubmit(e) {
    e.preventDefault();    
    const data = getFormData();
    const errors = validateData(data);

    if (Object.keys(errors).length > 0) {
        showErrors(errors);
        return;
    }
        
    formFooter.reset();
    newsletterInput.classList.remove('is-error');
    newsletterInput.classList.add("is-success")
}

formFooter.addEventListener("submit", handleSubmit);