### 4일차

### 슬라이드 S-6

![깃헙1](https://github.com/GEUMAIN/webDesignSlide/assets/128437656/c92cd0ca-baa8-44f2-aa81-09d45b450202)

---

### HTML

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>웹디자인기능사 슬라이드 S-6</title>
    <link href="https://webfontworld.github.io/gmarket/GmarketSans.css" rel="stylesheet">
    <link rel="stylesheet" href="CSS/style.css">
</head>

<body>
    <div id="wrap">
        <main id="main">
            <header id="header">
                <h1></h1>
                <nav></nav>
            </header>

            <section id="contents">
                <div class="banner"></div>
                <div class="notice"></div>
                <div class="gallery"></div>
                <div class="link"></div>
            </section>

            <article id="slider">
                <div class="sliderWrap">
                    <div class="slider s1">
                        <span>이미지1</span>
                    </div>
                    <div class="slider s2">
                        <span>이미지2</span>
                    </div>
                    <div class="slider s3">
                        <span>이미지3</span>
                    </div>
                </div>
            </article>
        </main>

        <footer id="footer">
            <div class="footer1"></div>
            <div class="footer2">
                <div class="footer2-1"></div>
                <div class="footer2-2"></div>
            </div>
        </footer>
    </div>

    <script src="JS/script.js"></script>
</body>

</html>
```

---

### CSS

```css
* {
    margin: 0;
    padding: 0;
    font-family: 'GmarketSans';
}

#wrap {
    width: 100%;
}

#main {
    height: 100%;
    height: calc(100vh - 120px);
    background-color: #efefef;
    display: flex;
}

#header {
    width: 200px;
    height: 100%;
}

#header h1 {
    width: 100%;
    height: 10%;
    background-color: #e3e3e3;
}

#header nav {
    width: 100%;
    height: 90%;
    background-color: #d9d9d9;
}

#contents {
    width: 400px;
    height: 100%;
}

#contents .banner {
    width: 100%;
    height: 15%;
    background-color: #d1d1d1;
}

#contents .notice {
    width: 100%;
    height: 35%;
    background-color: #c7c7c7;
}

#contents .gallery {
    width: 100%;
    height: 35%;
    background-color: #bcbcbc;
}

#contents .link {
    width: 100%;
    height: 15%;
    background-color: #b1b1b1;
}

#slider {
    width: calc(100% - 600px);
    height: 100%;
    background-color: #a3a3a3;
}

#footer {
    width: 100%;
    display: flex;
}

#footer .footer1 {
    width: 20%;
    height: 120px;
    background-color: #9d9d9d;
}

#footer .footer2 {
    width: 80%;
}

#footer .footer2 .footer2-1 {
    width: 100%;
    height: 60px;
    background-color: #929292;
}

#footer .footer2 .footer2-2 {
    width: 100%;
    height: 60px;
    background-color: #838383;
}

#slider {
    overflow: hidden;
    height: calc(100vh - 120px);
}

.sliderWrap {
    width: 100%;
    height: 300vh;
}

.sliderWrap .slider {
    width: 100%;
    height: 100vh;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    position: relative;
}

.sliderWrap .slider.s1 {
    background-image: url(../../images/slider04.jpg);
}

.sliderWrap .slider.s2 {
    background-image: url(../../images/slider05.jpg);
}

.sliderWrap .slider.s3 {
    background-image: url(../../images/slider06.jpg);
}

.sliderWrap .slider img {
    vertical-align: top;
}

.sliderWrap .slider span {
    position: absolute;
    left: 50%;
    top: calc(50% - 60px);
    transform: translate(-50%, -50%);
    background-color: rgba(255, 255, 255, 0.3);
    padding: 10px 20px;
}
```

---

### JavaScript

```jsx
window.onload = function () {
    let currentIndex = 0;
    const sliderWrap = document.querySelector(".sliderWrap");
    const slider = document.querySelectorAll(".slider");
    const sliderClone = sliderWrap.firstElementChild.cloneNode(true);
    sliderWrap.appendChild(sliderClone);

    setInterval(() => {
        currentIndex++;
        sliderWrap.style.transition = "all 0.6s";
        sliderWrap.style.transform = `translateY(-${currentIndex * 100}vh)`;

        if (currentIndex == slider.length) {
            setTimeout(() => {
                sliderWrap.style.transition = "0s";
                sliderWrap.style.transform = "translateY(0)";
                currentIndex = 0;
            }, 700)
        }
    }, 3000)
}
```
