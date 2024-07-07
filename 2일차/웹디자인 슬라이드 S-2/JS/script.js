window.onload = function () {
    let currentIndex = 0;
    const sliderWrap = document.querySelector(".sliderWrap");
    const slider = document.querySelector(".slider");
    const sliderClone = sliderWrap.firstElementChild.cloneNode(true);
    sliderWrap.appendChild(sliderClone);

    setInterval(() => {
        currentIndex++;
        sliderWrap.style.marginLeft = -currentIndex * 100 + "%";
        sliderWrap.style.transition = "all 0.6s";

        if (currentIndex == 3) {
            setTimeout(() => {
                sliderWrap.style.transition = "0s";
                sliderWrap.style.marginLeft = "0";
                currentIndex = 0;
            }, 700);
        }
    }, 3000)
}