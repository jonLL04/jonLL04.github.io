//sumar al carrito cuando das click al boton de add
let carritoValor = 0;
$(".index-arrivals-list-item_btn").each(function () {
    let BtnAddDisable = true;

    $(this).on("click", function(){
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
});