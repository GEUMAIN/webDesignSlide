window.onload = function () {
    let currentIndex = 0;
    const sliderWrap = document.querySelector(".sliderWrap");
    const slider = document.querySelectorAll(".slider");
    const sliderClone = sliderWrap.firstElementChild.cloneNode(true);
    sliderWrap.appendChild(sliderClone);

    setInterval(() => {
        currentIndex++;
        sliderWrap.style.transition = "all 0.6s";
        sliderWrap.style.marginLeft = -currentIndex * 100 + "%";

        if (currentIndex == slider.length) {
            setTimeout(() => {
                sliderWrap.style.transition = "0s";
                sliderWrap.style.marginLeft = "0";
                currentIndex = 0;
            }, 700);
        }
    }, 3000);
};