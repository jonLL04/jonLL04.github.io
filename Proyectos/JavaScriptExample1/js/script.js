//108
const form = document.querySelector(".contact-form");
console.log(form);

const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const checkEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const selectorInput = document.querySelector("#topic");
const messageInput = document.querySelector("#message");

function getFormData() {
    return {
        nombre: nameInput.value.trim(),
        email: emailInput.value.trim(),
        selector: selectorInput.value,
        message: messageInput.value.trim()
    };
}

//109
function validateData(data) {
    const errors = {};
    if (!data.nombre) {
        errors.nombre = 'El nombre es obligatorio.';
    }
    if (!data.email) {
        errors.email = 'El email es obligatorio.';
    } else if (!checkEmail.test(data.email)) {
        errors.email = 'Has escrito mal el email.';
    }
    if (!data.selector) {
        errors.selector = 'Debe seleccionar el motivo de la consulta es obligatorio';
    }
    if (!data.message) {
        errors.message = 'Por favor escriba un mensaje.';
    }
    return errors;
}

function showErrors(errors) {
    if (errors.nombre) {
        console.log(errors.nombre);
        nameInput.classList.add('is-error');
    }
    if (errors.email) {
        console.log(errors.email);
        emailInput.classList.add('is-error');
    }
    if (errors.selector) {
        console.log(errors.selector);
        selectorInput.classList.add('is-error');
    }
    if (errors.message) {
        console.log(errors.message);
        messageInput.classList.add('is-error');
    }
}

//110
function handleSubmit(e) {
    e.preventDefault();
    
    const data = getFormData();
    const errors = validateData(data);

    if (Object.keys(errors).length > 0) {
        showErrors(errors);
        return;
    }
        
    form.reset();
    nameInput.classList.remove('is-error');
    emailInput.classList.remove('is-error');
    selectorInput.classList.remove('is-error');
    messageInput.classList.remove('is-error');
}

form.addEventListener("submit", handleSubmit);