//Seleccion de elementos
const mainImage = document.querySelector(".detail-product-img_main");
const miniaturas = document.querySelectorAll(".detail-product-img-bottom_");

const dropDown = document.querySelectorAll(".dropdown");
const dropdowntxt = document.querySelectorAll(".detail-product-info-extra-box");

//sumar al carrito cuando das click al boton de add
let carritoValor = 0;
let BtnAddDisable = true;
$(".detail-product-info-CTA-top_btn").on("click", function(){
    if (BtnAddDisable) {
        carritoValor++;
        $(this).addClass("disabled");
        $(this).text("Quick Remove");
    } else {
        carritoValor--;
        $(this).removeClass("disabled");
        $(this).text("Quick Add");
    }
    $(".header-resources_number").text(carritoValor);
    BtnAddDisable = !BtnAddDisable;
});

//Cambiar imagen pricipal
for (let i = 0; i < miniaturas.length; i++) {
    function changeImage(index) {
        let clickedMiniaturaSrc = miniaturas[index].getAttribute('src');
        let currentMainSrc = mainImage.getAttribute('src');
    
        mainImage.src = clickedMiniaturaSrc;
        miniaturas[index].src = currentMainSrc;
    }
    miniaturas[i].addEventListener("click", () => changeImage(i));
}

//Acordeon
for (let i = 0; i < dropDown.length; i++) {
    function showDropdownTxt() {
        dropdowntxt[i].classList.toggle("isShow");
    }
    dropDown[i].addEventListener("click", showDropdownTxt);
}