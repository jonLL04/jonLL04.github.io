//Seleccion de elementos
const productItems = document.querySelectorAll(".shop-main-merch-products-item");
const PriceRange = document.querySelector(".shop-main-filters_range");
const priceOldNumber = document.querySelector(".precio_number");

const SizeAllCheckBox = document.querySelectorAll(".filter_size");
const SizeAllName = document.querySelectorAll(".size_name");

const color1 = document.querySelector(".shop-main-color-list_item_1");
const color2 = document.querySelector(".shop-main-color-list_item_2");
const color3 = document.querySelector(".shop-main-color-list_item_3");
const color4 = document.querySelector(".shop-main-color-list_item_4");
const color5 = document.querySelector(".shop-main-color-list_item_5");
const color6 = document.querySelector(".shop-main-color-list_item_6");
const colors = [color1, color2, color3, color4, color5, color6];
const colorsAllName = ["Black", "White", "Brown", "DarkGreen", "Grey", "Blue"];

const materialAllName = document.querySelectorAll(".shop-main-filters-material_name");
const materialAllOptions = document.querySelectorAll(".shop-main-filters-material_box");

const filterContainer = document.querySelector(".secret");
const filterCleanAll = document.querySelector(".secret-top_clean");
const filterBottom = document.querySelector(".secret-bottom");

const productsContainer = document.querySelector(".shop-main-merch-products");
const paginationBtn = document.querySelector(".shop-main-merch-more_btn");
const paginationTxt = document.querySelector(".shop-main-merch-more_info");
const paginationVisualEnd = document.querySelector(".end");
const paginationVisualMiddle = document.querySelectorAll(".middle");


//hacer que aparezca y con el material seleccionado
const priceNumber = document.createElement("span");
function showPriceFilter() {
    priceOldNumber.remove();
    filterContainer.classList.remove("isHidden");
    priceNumber.classList.add("secret-bottom_selected");
    filterBottom.append(priceNumber);
    priceNumber.textContent = "Max: $" + PriceRange.value;
    
    productItems.forEach((item) => {
        const priceElement = item.querySelector(".shop-main-merch-products-item_price");
        const priceValue = parseFloat(priceElement.textContent.replace(/[^0-9.]/g, ''));

        if (priceValue > PriceRange.value) {
            item.style.display = "none";
        } else {
            item.style.display = "flex";
        }
    });
}
PriceRange.addEventListener("click", showPriceFilter);

//La razon por la que size y color estan juntos es porque anbos tienen 6 elementos en el array
const colorName = document.createElement("span");
for (let i = 0; i < SizeAllCheckBox.length; i++) {
    const SizeName = document.createElement("span");
    const deleteX = document.createElement("img");
    deleteX.src = "img/close_icon.svg";
    
    function showSizeFilter() {
        filterContainer.classList.remove("isHidden");
        if (SizeAllCheckBox[i].checked === true) {
            SizeName.classList.add("secret-bottom_selected");
            filterBottom.append(SizeName);
            SizeName.textContent = SizeAllName[i].textContent;
            
            SizeName.append(deleteX);
            function removeSize() {
                SizeAllCheckBox[i].checked = false;
                SizeName.remove();
            }
            deleteX.addEventListener("click", removeSize);
        } else {SizeName.remove();}
    }
    SizeAllCheckBox[i].addEventListener("click", showSizeFilter);

    function showColorFilter() {
        filterContainer.classList.remove("isHidden");
        if (colors[i].checked === true) {
            colorName.classList.add("secret-bottom_selected");
            filterBottom.append(colorName);
            colorName.textContent = colorsAllName[i];
        
            colorName.append(deleteX);
            function removeColor() {
                colors[i].checked = false;
                colorName.remove();
            }
            deleteX.addEventListener("click", removeColor);
        }
    }
    colors[i].addEventListener("click", showColorFilter); 
    
    function removeAll() {
        filterContainer.classList.add("isHidden");
        PriceRange.value = 200;
        priceNumber.textContent = "Max: $" + PriceRange.value;
        SizeAllCheckBox[i].checked = false;
        colors[i].checked = false;
        SizeName.remove();
        colorName.remove();
    }
    filterCleanAll.addEventListener("click", removeAll);    
}

for (let i = 0; i < materialAllOptions.length; i++) {
    const deleteX = document.createElement("img");
    deleteX.src = "img/close_icon.svg";
    function removeAll() {
        filterContainer.classList.add("isHidden");
        materialAllOptions[i].checked = false;
        materialName.remove();
        productItems.forEach(item => item.style.display = "flex");
    }
    filterCleanAll.addEventListener("click", removeAll);

    const materialName = document.createElement("span");
    function showMaterialFilter() {
        filterContainer.classList.remove("isHidden");
        if (materialAllOptions[i].checked === true) {
            materialName.classList.add("secret-bottom_selected");
            filterBottom.append(materialName);
            materialName.textContent = materialAllName[i].textContent;
            
            materialName.append(deleteX);
            function removeMaterial() {
                materialAllOptions[i].checked = false;
                materialName.remove();
                productItems.forEach(item => item.style.display = "flex");
            }
            deleteX.addEventListener("click", removeMaterial);

            productItems.forEach((item) => {
                const itemMaterial = item.getAttribute("data-material");
                if (itemMaterial === materialAllName[i].textContent.trim()) {
                    item.style.display = "flex";
                } else {
                    item.style.display = "none";
                }
            });
        } else {
            productItems.forEach(item => item.style.display = "flex");
            materialName.remove();
        }
    }    
    materialAllOptions[i].addEventListener("click", showMaterialFilter);
}

//loadMore
function moreProducts() {
    const original = document.querySelector(".shop-main-merch-products");
    const copia = original.cloneNode(true);
    original.parentNode.insertBefore(copia, original.nextSibling);
}

let paginationNumber = 6;
function LoadMore() {
    if (paginationNumber < 60) {
        let index = (paginationNumber / 6) - 1;

        paginationNumber = paginationNumber + 6;
        paginationTxt.textContent = "Showed " + paginationNumber + " of 60";
        if (paginationNumber === 60) {
            paginationVisualEnd.classList.add("filled_end");
            paginationBtn.classList.add("disabled");
        }
        else if (paginationVisualMiddle[index]) {
            paginationVisualMiddle[index].classList.add("filled_rest");  
        }
        moreProducts();
    } else {
        paginationTxt.textContent = "Showed 60 of 60";
    }
}
paginationBtn.addEventListener("click", LoadMore);