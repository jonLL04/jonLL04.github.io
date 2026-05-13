//Seleccion de elementos
const amountNumber = document.querySelectorAll(".amount_number");
const increase = document.querySelectorAll(".increase");
const decrease = document.querySelectorAll(".decrease");
const productPrice = document.querySelectorAll(".bag-main-L-item-pay_price");
const taxPrice = document.querySelector(".bag-main-R-summary-list-item_tax");

//sumar al carrito cuando das click al boton de add
for (let i = 0; i < amountNumber.length; i++) {
    let numberValor = 1;
    let realprice = parseFloat(productPrice[i].textContent);
    productPrice[i].textContent = "$" + realprice + ".00";

    function IncreaseProduct() {        
        numberValor++;
        amountNumber[i].textContent = numberValor;
        realprice = realprice + 249;
        productPrice[i].textContent = "$" + realprice + ".00";
        summaryPrice();
    }
    function DecreaseProduct() {
        if(numberValor === 1) {
            console.log("No puedes quitar mas");
        } else {
            numberValor--;
            amountNumber[i].textContent = numberValor;
            realprice = realprice - 249;
            productPrice[i].textContent = "$" + realprice + ".00";           
        }
        summaryPrice();
    }
    function summaryPrice() {
        const numero1 = parseFloat(productPrice[0].textContent.replace(/[^a-zA-Z1-9]/g, ''));
        const numero2 = parseFloat(productPrice[1].textContent.replace(/[^a-zA-Z1-9]/g, ''));
        const tax = parseFloat(taxPrice.textContent.match(/[\d.]+/g));

        let subtotalMoney = numero1 + numero2;
        $(".bag-main-R-summary-list-item_price").text("$" + subtotalMoney + ".00");
        let totalmoney = numero1 + numero2 + tax;
        $(".bag-main-R-summary-total_price").text("$" + totalmoney);
    }
    increase[i].addEventListener("click", IncreaseProduct);
    decrease[i].addEventListener("click", DecreaseProduct);
}