const arrowBack = document.getElementById("arrowBack");
const arrowNext = document.getElementById("arrowNext");
const portfolio = document.querySelectorAll(".portfolio-list-item");
console.log(portfolio);

//Slider of my portfolios
let currentIndex = 0;
function showSlider(index) {
    for (let i = 0; i < portfolio.length; i++) {
        portfolio[i].classList.add("disable");
    }
    portfolio[index].classList.remove("disable");
}

function slider(direction) {
    if (direction === 1) {
        currentIndex = (currentIndex + 1) % portfolio.length;
    } else if (direction === -1) {
        currentIndex = currentIndex - 1;
        if (currentIndex < 0) {
            currentIndex = portfolio.length - 1;
        }
    }    
    showSlider(currentIndex);
}

showSlider(currentIndex);
arrowNext.addEventListener("click", () => {
    slider(1);
    stopAutoplay(null);
});
arrowBack.addEventListener("click", () => {
    slider(-1);
    stopAutoplay(null);
});

//Autoplay for the slider
let autoplayInterval = null;
function startAutoplay(interval) {
   stopAutoplay();
   autoplayInterval = setInterval(() => {
      slider(1);
   }, interval);
}
startAutoplay(4000);

function stopAutoplay() {
   clearInterval(autoplayInterval);
}