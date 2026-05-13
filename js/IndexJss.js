//Esto ha sido sustiyuido a formato Jquery, pero no lo borro por si acaso
/*const carritoNumber = document.querySelector(".header-resources_number");
const addCarritoBtn = document.querySelectorAll(".index-arrivals-list-item_btn");

for (let i = 0; i < addCarritoBtn.length; i++) {
    let BtnAddDisable = true;
    
    function AddToCarrito() {
        if (BtnAddDisable) {
            carritoValor++;
            addCarritoBtn[i].classList.add("disabled");
            addCarritoBtn[i].textContent = "Quick Remove";
        } else {
            carritoValor--;
            addCarritoBtn[i].classList.remove("disabled");
            addCarritoBtn[i].textContent = "Quick Add";
        }
        carritoNumber.textContent = carritoValor;
        BtnAddDisable = !BtnAddDisable;
    }
    addCarritoBtn[i].addEventListener("click", AddToCarrito);
}*/

const formSubscribe = document.querySelector(".index-form-content");
const suscribeInput = document.querySelector("#id_join");
const checkSuscriptionEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//suscribe email
function getFormDataIndex() {
    return {
        suscribe: suscribeInput.value.trim()
    };
}

function validateDataIndex(data) {
    const errors = {};
    if (!data.suscribe) {
        errors.suscribe = 'El email es obligatorio.';
    } 
    else if (!checkSuscriptionEmail.test(data.suscribe)) {
        errors.suscribe = 'Has escrito mal el email.';
    }
    return errors;
}

function showErrorsIndex(errors) {
    if (errors.suscribe) {
        console.log(errors.suscribe);
        suscribeInput.classList.add('is-error');
    }
}

function handleSubmitIndex(e) {
    e.preventDefault();    
    const data = getFormDataIndex();
    const errors = validateDataIndex(data);

    if (Object.keys(errors).length > 0) {
        showErrorsIndex(errors);
        return;
    }
        
    formSubscribe.reset();
    suscribeInput.classList.remove('is-error');
    suscribeInput.classList.add("is-success");
}

formSubscribe.addEventListener("submit", handleSubmitIndex);