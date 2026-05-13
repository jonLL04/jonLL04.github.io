//Seleccion de elementos
const form = document.querySelector(".carrito-main");
console.log(form);
//Para la seccion de Shipping
const fullNameInput = document.querySelector("#full-Name");
const phoneNumberInput = document.querySelector("#phone_number");
const streetInput = document.querySelector("#street");
const apartementInput = document.querySelector("#apartement");
const cityInput = document.querySelector("#id_city");
const postalInput = document.querySelector("#id_postal");
const countryInput = document.querySelector("#id_country");

//Para la seccion de payment, la OG
const nameInput = document.querySelector("#Cardholder-Name");
const cardNumberInput = document.querySelector("#card_number");
const expireDateInput = document.querySelector("#id_expiry");
const passwordInput = document.querySelector("#password");

const checkOnlyNumbers = /[0-9]/; 
//const checkSpecificNumberDate = /[0-9]{5}$/  Por si dice que el minlenght en HTML no sirve

const errorContainer = document.querySelector(".error");
errorContainer.style.display = "none";

//shipping
function getFormDataShipping() {
    return {
        fullName: fullNameInput.value.trim(),
        phoneNumber: phoneNumberInput.value.trim(),
        street: streetInput.value.trim(),
        apartement: apartementInput.value.trim(),
        city: cityInput.value.trim(),
        postal: postalInput.value.trim(),
        country: countryInput.value.trim()
    };
}

function validateDataShipping(data) {
    const errors = {};
    if (!data.fullName) {
        errors.fullName = 'El nombre es obligatorio.';
    }
    if (!data.phoneNumber) {
        errors.phoneNumber = 'El numero de telefono es obligatorio';
    } else if (!checkOnlyNumbers.test(data.phoneNumber)) {
        errors.phoneNumber = 'Has escrito mal el numero de telefono.';
    }
    if (!data.street) {
        errors.street = 'Por favor escriba la calle';
    }
    if (!data.apartement) {
        errors.apartement = 'Por favor escriba el apartamento';
    }
    if (!data.city) {
        errors.city = 'Por favor escriba la ciudad donde vive.';
    }
    if (!data.postal) {
        errors.postal = 'El codijo postal es obligatorio';
    } else if (!checkOnlyNumbers.test(data.postal)) {
        errors.postal = 'Has escrito mal el codijo postal';
    }
    if (!data.country) {
        errors.country = 'Por favor escriba el paiss.';
    }
    return errors;
}

function showErrorsShipping(errors) {
    if (errors.fullName) {
        console.log(errors.fullName);
        fullNameInput.classList.add('is-error');
    } else {
        fullNameInput.classList.add("is-success");
    }
    if (errors.phoneNumber) {
        console.log(errors.phoneNumber);
        phoneNumberInput.classList.add('is-error');
    } else {
        phoneNumberInput.classList.add("is-success");
    }
    if (errors.street) {
        console.log(errors.street);
        streetInput.classList.add('is-error');
    } else {
        streetInput.classList.add("is-success");
    }
    if (errors.apartement) {
        console.log(errors.apartement);
        apartementInput.classList.add('is-error');
    } else {
        apartementInput.classList.add("is-success");
    }
    if (errors.city) {
        console.log(errors.city);
        cityInput.classList.add('is-error');
    } else {
        cityInput.classList.add("is-success");
    }
    if (errors.postal) {
        console.log(errors.postal);
        postalInput.classList.add('is-error');
        errorContainer.style.display = "inline-block";
    } else {
        postalInput.classList.add("is-success");
        errorContainer.style.display = "none";
    }
    if (errors.country) {
        console.log(errors.country);
        countryInput.classList.add('is-error');
    } else {
        countryInput.classList.add("is-success");
    }
}

function handleSubmitShipping(e) {
    e.preventDefault();
    fullNameInput.classList.remove('is-error', "is-success");
    phoneNumberInput.classList.remove('is-error', "is-success");
    streetInput.classList.remove('is-error', "is-success");
    apartementInput.classList.remove('is-error', "is-success");
    cityInput.classList.remove('is-error', "is-success");
    postalInput.classList.remove('is-error', "is-success");
    countryInput.classList.remove('is-error', "is-success");

    const data = getFormDataShipping();
    const errors = validateDataShipping(data);

    if (Object.keys(errors).length > 0) {
        showErrorsShipping(errors);
        return;
    }

    //form.reset();
    window.location.href = "carrito.html";
    errorContainer.style.display = "none";
}

form.addEventListener("submit", handleSubmitShipping);

//payment
function getFormDataPayment() {
    return {
        cardholdName: nameInput.value.trim(),
        cardNumber: cardNumberInput.value.trim(),
        expireDate: expireDateInput.value.trim(),
        password: passwordInput.value.trim()
    };
}

function validateDataPayment(data) {
    const errors = {};
    if (!data.cardholdName) {
        errors.cardholdName = 'El nombre es obligatorio.';
    }
    if (!data.cardNumber) {
        errors.cardNumber = 'El numero de la tarjeta es obligatorio';
    } else if (!checkOnlyNumbers.test(data.cardNumber)) {
        errors.cardNumber = 'Has escrito mal el numero de la tarjeta.';
    }
    if (!data.expireDate) {
        errors.expireDate = 'Por favor escriba la fecha de caducidad de su tarjeta';
    } else if (!checkOnlyNumbers.test(data.expireDate)) {
        errors.expireDate = 'Has escrito mal la fecha de caducidad.';
    }
    if (!data.password) {
        errors.password = 'Por favor escriba la contraseña.';
    } else if (!checkOnlyNumbers.test(data.password)) {
        errors.password = 'Has escrito mal la contraseña.';
    }
    return errors;
}

function showErrorsPayment(errors) {
    if (errors.cardholdName) {
        console.log(errors.cardholdName);
        nameInput.classList.add('is-error');
    } else {
        nameInput.classList.add("is-success");
    }
    if (errors.cardNumber) {
        console.log(errors.cardNumber);
        cardNumberInput.classList.add('is-error');
    } else {
        cardNumberInput.classList.add("is-success");
    }
    if (errors.expireDate) {
        console.log(errors.expireDate);
        expireDateInput.classList.add('is-error');
    } else {
        expireDateInput.classList.add("is-success");
    }
    if (errors.password) {
        console.log(errors.password);
        passwordInput.classList.add('is-error');
        errorContainer.style.display = "inline-block";
    } else {
        passwordInput.classList.add("is-success");
        errorContainer.style.display = "none";
    }
}

function handleSubmitPayment(e) {
    e.preventDefault();
    nameInput.classList.remove('is-error', "is-success");
    cardNumberInput.classList.remove('is-error', "is-success");
    expireDateInput.classList.remove('is-error', "is-success");
    passwordInput.classList.remove('is-error', "is-success");

    const data = getFormDataPayment();
    const errors = validateDataPayment(data);

    if (Object.keys(errors).length > 0) {
        showErrorsPayment(errors);
        return;
    }

    //form.reset();
    window.location.href = "carritoReview.html";
    errorContainer.style.display = "none";
}

form.addEventListener("submit", handleSubmitPayment);