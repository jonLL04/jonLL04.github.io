const arrow = document.querySelectorAll(".portfolio_arrow");
const portfolio = document.querySelectorAll(".portfolio-list-item");
console.log(portfolio);
//Slider of my portfolios

for (let i = 0; i < 2; i++) {
    arrow[i].addEventListener("click", function () {
        var hider = $('#hider');
        if(hider.css('visibility') == 'visible') {
            hider.css('visibility', 'hidden');
        }
        else {
            hider.css('visibility', 'visible');
        }
        ctx.clearRect(0, 0, 100, 100);
})};